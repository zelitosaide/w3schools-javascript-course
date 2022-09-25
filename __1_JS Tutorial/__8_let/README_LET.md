# JavaScript Let

The `let` keyword was introduced in [ES6 (2015)](https://www.w3schools.com/js/js_es6.asp).

Variables defined with `let` cannot be Redeclared.

Variables defined with `let` must be Declared before use.

Variables defined with `let` have Block Scope.

## Cannot be Redeclared

Variables defined with `let` cannot be **redeclared**.

You cannot accidentally redeclare a variable.

With `let` you can not do this:

```javascript
let x = "John Doe";

let x = 0;

// SyntaxError: 'x' has already been declared
```

With `var` you can:

```javascript
var x = "John Doe";

var x = 0;
```

## Block Scope

Before ES6 (2015), JavaScript had **Global Scope** and **Function Scope**.

ES6 introduced two important new JavaScript keywords: `let` and `const`.

These two keywords provide **Block Scope** in JavaScript.

Variables declared inside a { } block cannot be accessed from outside the block:

```javascript
{
  let x = 2;
}
// x can NOT be used here
```

Variables declared with the `var` keyword can NOT have block scope.

Variables declared inside a { } block can be accessed from outside the block:

```javascript
{
  var x = 2;
}
// x CAN be used here
```

## Redeclaring Variables

Redeclaring a variable using the `var` keyword can impose problems.

Redeclaring a variable inside a block will also redeclare the variable outside the block:

```javascript
var x = 10;
// Here x is 10

{
  var x = 2;
  // Here x is 2
}

// Here x is 2
```

Redeclaring a variable using the `let` keyword can solve this problems.

Redeclaring a variable inside a block will not redeclare the variable outside the block:

```javascript
let x = 10;
// Here x is 10

{
  let x = 2;
  // Here x is 2
}

// Here x is 10
```

## Browser Support

The `let` keyword is not fully supported in Internet Explorer 11 or earlier.

The following table defines the first browser versions with full support for `let` keyword:

| ![Chrome](../assets/compatible_chrome.png) | ![Edge](../assets/compatible_edge.png) | ![Firefox](../assets/compatible_firefox.png) | ![Safari](../assets/compatible_safari.png) | ![Opera](../assets/compatible_opera.png) |
| ------------------------------------------ | -------------------------------------- | -------------------------------------------- | ------------------------------------------ | ---------------------------------------- |
| Chrome 49                                  | Edge 12                                | Firefox 44                                   | Safari 11                                  | Opera 36                                 |
| Mar, 2016                                  | Jul, 2015                              | Jan, 2015                                    | Sep, 2017                                  | Mar, 2016                                |

## Redeclaring

Redeclaring a JavaScript variable with `var` is allowed anywhere in a program:

```javascript
var x = 2;
// Now x is 2

var x = 3;
// Now x is 3
```

With `let`, redeclaring a variable in the same block is NOT allowed:

```javascript
var x = 2;    // Allowed
let x = 3;    // Not allowed

{
  let x = 2;  // Allowed
  let x = 3;  // Not allowed
}

{
  let x = 2;  // Allowed
  var x = 3;  // Not allowed
}
```

Redeclaring a variable with `let`, in another block, IS allowed:

```javascript
let x = 2;    // Allowed

{
  let x = 3;  // Allowed
}

{
  let x = 4;  // Allowed
}
```

## Let Hoisting

Variables defined with `var` are **hoisted** to the top and can be initialized at any time.

Meaning: You can use the variable before it is declared:

```javascript
carName = "Volvo";
var carName;
```

If you want to learn more about hoisting study the chapter [JavaScript Hoisting](https://www.w3schools.com/js/js_hoisting.asp).

Variables defined with `let` are also hoisted to the top of the block, but not initialized.

Meaning: Using a `let` variable before it is declared will result in a `referenceError`:

```javascript
carName = "Saab";
let carName = "Volvo";
```
