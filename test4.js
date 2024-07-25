const sendEmail = require("./program1.js");

const assert = require('assert');

try {
  sendEmail(null, 'invalid-email', {}, '', []);
  assert.fail('Test Case 4 Failed: No error thrown for invalid email');
} catch (err) {
  assert.strictEqual(err.message, 'Invalid email address', 'Test Case 4 Failed');
  console.log('Test Case 4 Passed');
}
