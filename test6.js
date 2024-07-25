// ### Test Case 6: Advanced Templating with Loop
// **Description**: Test with a template that includes a loop to list items.
const sendEmail = require("./program1.js")

const cleanString = str => str.replace(/\s/g, '');

const assert = require('assert');

const templateCode5 = `
<html>
  <body>
    <h1>Shopping List:</h1>
    <ul>
      {% for item in items %}
        <li>{{item}}</li>
      {% endfor %}
    </ul>
  </body>
</html>
`;

const contextData5 = {
  items: ['Milk', 'Bread', 'Eggs']
};

const expectedOutput5 = `
<html>
  <body>
    <h1>Shopping List:</h1>
    <ul>
        <li>Milk</li>
        <li>Bread</li>
        <li>Eggs</li>
    </ul>
  </body>
</html>
`;

const result5 = sendEmail(null, 'john.doe@example.com', contextData5, templateCode5, []);
assert.strictEqual(cleanString(result5.renderedHtml), cleanString(expectedOutput5), 'Test Case 6 Failed');
console.log('Test Case 6 Passed');