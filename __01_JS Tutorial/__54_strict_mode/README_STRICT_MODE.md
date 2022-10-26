# JavaScript Use Strict

`"use strict";` Defines that JavaScript code should be executed in "strict mode".

## The "use strict" Directive

The `"use strict"` directive was new in ECMAScript version 5.

It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.

The purpose of `"use strict"` is to indicate that the code should be executed in "strict mode".

With strict mode, you can not, for example, use undeclared variables.

All modern browsers support "use strict" except Internet Explorer 9 and lower:

| Directive    | ![Chrome](../assets/compatible_chrome.png) | ![Edge](../assets/compatible_edge.png) | ![Firefox](../assets/compatible_firefox.png) | ![Safari](../assets/compatible_safari.png) | ![Opera](../assets/compatible_opera.png) |
| ------------ | ------------------------------------------ | -------------------------------------- | -------------------------------------------- | ------------------------------------------ | ---------------------------------------- |
| "use strict" | 13.0                                       | 10.0                                   | 4.0                                          | 6.0                                        | 12.1                                     |

The numbers in the table specify the first browser version that fully supports the directive.

> You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables.
> 
> `"use strict"` is just a string, so IE 9 will not throw an error even if it does not understand it.

## Declaring Strict Mode

Strict mode is declared by adding `"use strict";` to the beginning of a script or a function.

Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode):

```javascript
"use strict";
x = 3.14;   // This will cause an error because x is not declared
```

```javascript
"use strict";
myFunction();

function myFunction() {
  y = 3.14;   // This will also cause an error because y is not declared
}
```

Declared inside a function, it has local scope (only the code inside the function is in strict mode):

```javascript
x = 3.14;   // This will not cause an error.
myFunction();

function myFunction() {
  "use strict";
  y = 3.14;   // This will cause an error
}
```

## The "use strict"; Syntax

The syntax, for declaring strict mode, was designed to be compatible with older versions of JavaScript.

Compiling a numeric literal (4 + 5;) or a string literal ("John Doe";) in a JavaScript program has no side effects. It simply compiles to a non existing variable and dies.

So `"use strict";` only matters to new compilers that "understand" the meaning of it.

## Why Strict Mode?

Strict mode makes it easier to write "secure" JavaScript.

Strict mode changes previously accepted "bad syntax" into real errors.

As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.

In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.

In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.

## Not Allowed in Strict Mode

Using a variable, without declaring it, is not allowed:

```javascript
"use strict";
x = 3.14;     // This will cause an error
```

> Objects are variables too.

Using an object, without declaring it, is not allowed:

```javascript
"use strict";
x = { p1: 10, p2: 20 };     // This will cause an error
```

Deleting a variable (or object) is not allowed.

```javascript
"use strict";
let x = 3.14;
delete x;     // This will cause an error
```

Deleting a function is not allowed.

```javascript
"use strict";
function x(p1, p2) {};
delete x;     // This will cause an error
```

Duplicating a parameter name is not allowed:

```javascript
"use strict";
function x(p1, p1) {};    // This will cause an error
```

Octal numeric literals are not allowed:

```javascript
"use strict";
let x = 010;      // This will cause an error
```

Octal escape characters are not allowed:

```javascript
"use strict";
let x = "\010";       // This will cause an error
```

Writing to a read-only property is not allowed:

```javascript
"use strict";
const obj = {};
Object.defineProperty(obj, "x", {
  value: 10,
  writable: false
});

obj.x = 3.14;       // This will cause an error
```

Writing to a get-only property is not allowed:

```javascript
"use strict";
const obj = {
  get x() {
    return 0;
  }
};

obj.x = 3.14;       // This will cause an error
```