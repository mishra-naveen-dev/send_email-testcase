// ### Test Case 3: Complex Template with Conditionals
// **Description**: Test with an advanced template that includes conditionals.
const sendEmail = require("./program1.js")

const cleanString = str => str.replace(/\s/g, '');

const assert = require('assert');

const templateCode3 = `
<html>
  <body>
    {% if first_name %}
      <h1>Hello, {{first_name}}!</h1>
    {% else %}
      <h1>Hello, Guest!</h1>
    {% endif %}
    <p>Thank you for registering.</p>
  </body>
</html>
`;

const contextData3 = {
  first_name: 'Jane'
};

const expectedOutput3 = `
<html>
  <body>
      <h1>Hello, Jane!</h1>
    <p>Thank you for registering.</p>
  </body>
</html>
`;

const result3 = sendEmail(null, 'jane.doe@example.com', contextData3, templateCode3, []);
assert.strictEqual(cleanString(result3.renderedHtml), cleanString(expectedOutput3), 'Test Case 3 Failed');
console.log('Test Case 3 Passed');