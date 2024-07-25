const fs = require('fs');

function sendEmail(db, recipientEmail, contextData, templateCode, filePaths) {
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(recipientEmail)) {
        throw new Error('Invalid email address');
    }

    // Attachment path validation
    for (const path of filePaths) {
        if (!fs.existsSync(path)) {
            throw new Error(`Attachment file not found: ${path}`);
        }
    }

    let renderedHtml = templateCode;

    // Replace simple placeholders first
    for (const [key, value] of Object.entries(contextData)) {
        const placeholder = `{{${key}}}`;
        const regex = new RegExp(placeholder, 'g');
        renderedHtml = renderedHtml.replace(regex, value);
    }

    // Handle conditional template directives
    renderedHtml = renderedHtml
        .replace(/{% if (.*?) %}(.*?)(?:{% else %}(.*?))?{% endif %}/gs, (match, condition, ifBlock, elseBlock) => {
            const variable = condition.trim();
            if (contextData[variable] !== undefined && contextData[variable] !== '') {
                return ifBlock.trim();
            } else {
                return elseBlock ? elseBlock.trim() : '';
            }
        });

    // Handle loops
    renderedHtml = renderedHtml.replace(/{% for (.*?) in (.*?) %}(.*?){% endfor %}/gs, (match, itemVar, listVar, loopContent) => {
        const items = contextData[listVar.trim()];
        if (Array.isArray(items)) {
            return items.map(item => loopContent.replace(new RegExp(`{{${itemVar.trim()}}}`, 'g'), item)).join('');
        } else {
            return '';
        }
    });

    // Build mock message object
    const mockMessage = {
        recipientEmail: recipientEmail,
        renderedHtml: renderedHtml,
        attachments: filePaths
    };

    return mockMessage;
}

module.exports = sendEmail;
