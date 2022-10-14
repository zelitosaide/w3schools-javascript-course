# JavaScript Template Literals

Synonyms:

* Template Literals
* Template Strings
* String Templates
* Back-Tics Syntax

## Back-Tics Syntax

**Template Literals** use back-tics (``) rather than the quotes ("") to define a string:

```javascript
let text = `Hello World!`;
```

## Quotes Inside Strings

With **template literals**, you can use both single and double quotes inside a string:

```javascript
let text = `He's often called "Johnny"`;
```

## Multiline Strings

**Template literals** allows multiline strings:

```javascript
let text = 
`The quick
brown fox
jumps over
the lazy dog`;
```

## Interpolation

**Template literals** provide an easy way to interpolate variables and expressions into strings.

The method is called string interpolation.

The syntax is:

```javasctipt
${...}
```

## Variable Substitutions

**Template literals** allow variables in strings:

```javascript
let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;
```

> Automatic replacing of variables with real values is called **string interpolation**.

## Expression Substitution

**Template literals** allow expressions in strings:

```javascript
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
```

> Automatic replacing of expressions with real values is called **string interpolation**.

## HTML Templates

```javascript
let header = "Templates Literals";
let tagsv = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
```

## Browser Support

`Template Literals` is an ES6 feature (JavaScript 2015).

It is supported in all modern browsers:

| ![chrome](../assets/compatible_chrome.png) | ![Edge](../assets/compatible_edge.png) | ![Firefox](../assets/compatible_firefox.png) | ![Safari](../assets/compatible_safari.png) | ![Opera](../assets/compatible_opera.png) |
| ------------------------------------------ | -------------------------------------- | -------------------------------------------- | ------------------------------------------ | ---------------------------------------- |
| Chrome                                     | Edge                                   | Firefox                                      | Safari                                     | Opera                                    |
| Yes                                        | Yes                                    | Yes                                          | Yes                                        | Yes                                      |

`Template Literals` is not supported in Internet Explorer.

## Complete String Reference

> For a complete String reference, go to our:
> 
> [Complete JavaScript String Reference](https://www.w3schools.com/jsref/jsref_obj_string.asp).
> 
> The reference contains descriptions and examples of all string properties and methods.