// ### Test Case 2: Missing Context Variable
// **Description**: Test how the function handles a missing context variable:
const sendEmail = require("./program1.js")
const cleanString = str => str.replace(/\s/g, '');
const assert = require('assert');
const templateCode2 = `
<html>
  <body>
    <h1>Hello, {{first_name}} {{last_name}}!</h1>
    <p>Thank you for registering with {{company}}.</p>
  </body>
</html>
`;

const contextData2 = {
  first_name: 'John',
  company: 'Techdome'
};

const expectedOutput2 = `
<html>
  <body>
    <h1>Hello, John {{last_name}}!</h1>
    <p>Thank you for registering with Techdome.</p>
  </body>
</html>
`;

const result2 = sendEmail(null, 'john.doe@example.com', contextData2, templateCode2, []);
assert.strictEqual(cleanString(result2.renderedHtml), cleanString(expectedOutput2), 'Test Case 2 Failed');
console.log('Test Case 2 Passed');
