// ### Test Case 1: Simple Template Rendering
// **Description**: Test with a simple template and context data.
const sendEmail = require("./program1.js")

const cleanString = str => str.replace(/\s/g, '');

const assert = require('assert');
const templateCode = `
<html>
  <body>
    <h1>Hello, {{first_name}} {{last_name}}!</h1>
    <p>Thank you for registering with {{company}}.</p>
  </body>
</html>
`;

const contextData = {
  first_name: 'John',
  last_name: 'Doe',
  company: 'Techdome'
};

const expectedOutput = `
<html>
  <body>
    <h1>Hello, John Doe!</h1>
    <p>Thank you for registering with Techdome.</p>
  </body>
</html>
`;

const result = sendEmail(null, 'john.doe@example.com', contextData, templateCode, []);
assert.strictEqual(cleanString(result.renderedHtml), cleanString(expectedOutput), 'Test Case 1 Failed');
console.log('Test Case 1 Passed');