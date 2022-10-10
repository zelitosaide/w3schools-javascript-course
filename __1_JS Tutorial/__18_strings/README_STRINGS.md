# JavaScript Strings

JavaScript strings are for storing and manipulating text.

A JavaScript string is zero or more characters written inside quotes.

```javascript
let text = "John Doe";
```

You can use single or double quotes:

```javascript
let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes
```

You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

```javascript
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
```

## String Length

To find the length of a string, use the built-in `length` property:

```javascript
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
```

## Escape Character

Because strings must be written within quotes, JavaScript will misunderstand this string:

```javascript
let text = "We are the so-called "Vikings" from the north.";
```

The solution to avoid this problem, is to use the **backslash escape character.**

The backslash (`\`) escape character turns special characters into string characters:

| code | Result | Description  |
| ---- | ------ | ------------ |
| `\'` | `'`    | Single quote |
| `\"` | `"`    | Double quote |
| `\\` | `\`    | Backslash    |

The sequence `\"` inserts a double quote in a string:

```javascript
let text = "We are the so-called \"Vikings\" from the north.";
```

The sequence `\'` inserts a single quote in a string:

```javascript
let text = 'It\'s alright.';
```

The sequence `\\` inserts a backslash in a string:

```javascript
let text = "The character \\ is called backslash.";
```

Six other escape sequences are valid in JavaScript:

| code | Result               |
| ---- | -------------------- |
| `\b` | Backspace            |
| `\f` | Form Feed            |
| `\n` | New Line             |
| `\r` | Carriage Return      |
| `\t` | Horizontal Tabulator |
| `\v` | Vertical Tabulator   |

> The 6 escape characters above were originally designed to control typewriters, teletypes, and fax machines. They do not make any sense in HTML.

## Breaking Long Code Lines

For best readability, programmers often like to avoid code lines longer than 80 characters.

If a JavaScript statement does not fit on one line, the best place to break it is after an operator:

```javascript
document.getElementById("demo").innerHTML =
"Hello Dolly!";
```

You can also break up a code line **within a text string** with a single backslash:

```javascript
document.getElementById("demo").innerHTML = "Hello \
Dolly!";
```

> The `\` method is not the preferred method. It might not have universal support.
> Some browsers do not allow spaces behind the `\` character.

A safer way to break up a string, is to use string addition:

```javascript
document.getElementById("demo").innerHTML = "Hello " +
"Dolly!";
```

You cannot break up a code with a backslash:

```javascript
document.getElementById("demo").innerHTML = \
"Hello Dolly!";
```

## JavaScript Strings as Objects

Normally, JavaScript strings are primitive values, created from literals:

```javascript
let x =  "John";
```

But strings can also be defined as objects with the keyword `new`:

```javascript
let y = new String("John");
```

> Do not create Strings objects.
> The `new` keyword complicates the code and slows down execution speed.
> String objects can produce unexpected results:

When using the `==` operator, x and y are **equal:**

```javascript
let x = "John";
let y = new String("John");
```

When using the `===` operator, x and y are **not equal:**

```javascript
let x = "John";
let y = new String("John");
```

> Note the difference between `(x == x)` and `(x === y)`.

`(x == y)` true or false?

```javascript
let x = new String("John");
let y = new String("John");
```

`(x === y)` true or false?

```javascript
let x = new String("John");
let y = new String("John");
```

> Comparing two JavaScript objects **always** returns **false.**

## Complete String Reference

For a complete String reference, go to our:

[Complete JavaScript String Reference](https://www.w3schools.com/jsref/jsref_obj_string.asp).

The reference contains descriptions and examples of all string properties and methods.