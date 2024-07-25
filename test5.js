const sendEmail = require("./program1.js");

const assert = require('assert');

const templateCode4 = '<html><body>Test</body></html>';
const contextData4 = {};

try {
  sendEmail(null, 'john.doe@example.com', contextData4, templateCode4, ['/invalid/path.jpg']);
  assert.fail('Test Case 5 Failed: No error thrown for invalid attachment path');
} catch (err) {
  assert.strictEqual(err.message, 'Attachment file not found: /invalid/path.jpg', 'Test Case 5 Failed');
  console.log('Test Case 5 Passed');
}
