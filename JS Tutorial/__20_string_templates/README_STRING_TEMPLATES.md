### JavaScript Template Literals

Synonyms:

    Template Literals
    Template Strings
    String Templates
    Back-Tics Syntax


__Back-Tics Syntax__

_Template Literals_ use back-ticks _(``)_ rather than the quotes ("") to define a string:

    let text = `Hello World!`;


__Quotes Inside Strings__

With _template literals_, you can use both single and double quotes inside a string:

    let text = `He's often called "Johnny"`;


__Multiline Strings__

_Template literals_ allows multiline strings:

    let text =
    `The quick
    brown fox
    jumps over
    the lazy dog`;


__Interpolation__

_Template literals_ provide an easy way to interpolate variables and expressions into strings.

The method is called string interpolation.

The syntax is:

    ${...} 


__Variable Substitutions__

_Template literals_ allow variables in strings:

    let firstName = "John";
    let lastName = "Doe";

    let text = `Welcome ${firstName}, ${lastName}!`;

Automatic replacing of variables with real values is called _string interpolation._


__Expression Substitution__

_Template literals_ allow expressions in strings:

    let price = 10;
    let VAT = 0.25;

    let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

Automatic replacing of expressions with real values is called _string interpolation._


__HTML Templates__

    let header = "Templates Literals";
    let tags = ["template literals", "javascript", "es6"];

    let html = `<h2>${header}</h2><ul>`;
    for (const x of tags) {
      html += `<li>${x}</li>`;
    }

    html += `</ul>`;


__Browser Support__

_Template Literals_ is an ES6 feature (JavaScript 2015).

It is supported in all modern browsers:

_Template Literals_ is not supported in Internet Explorer.