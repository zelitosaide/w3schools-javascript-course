# JavaScript Scope

Scope determines the accessibility (visibility) of variables.

JavaScript has 3 types of scopes:

* Block scope
* Function scope
* Global scope

## Block Scope

Before ES6 (2015), JavaScript had only **Global Scope** and **Function Scope**.

ES6 introduced two important new JavaScript keyworks: `let` and `const`.

These two keywords provide **Block Scope** in JavaScript.

Variables declared inside a { } block cannot be accessed from outside the block:

```javascript
{
  let x = 2;
}
// x can NOT be used here
```

Variables declared with the `var` keyword can NOT have block scope.

Variables declared inside a { } block can be accessed from outside the block.

```javascript
{
  var x = 2;
}
// x CAN be used here
```

## Local Scope

Variables declared within a JavaScript function, become **LOCAL** to the function.

```javascript
// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName
```

> Local variables have **Function Scope:**
> 
> They can only be accessed from within the function.

Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.

Local variables are created when a function starts, and deleted when the function is completed.

## Function Scope

JavaScript has function scope: Each function creates a new scope.

Variables defined inside a function are not accessible (visible) from outside the function.

Variables declared with `var`, `let` and `const` are quite similar when declared inside a function.

They all have **Function Scope:**

```javascript
function myFunction() {
  var carName = "Volvo";    // Function Scope
}
```

```javascript
function myFunction() {
  let carName = "Volvo";    // Function Scope
}
```

```javascript
function myFunction() {
  const carName = "Volvo";  // Function Scope
}
```

## Global JavaScript Variables

A variable declared outside a function, becomes **GLOBAL**.

```javascript
let carName = "Volvo";
// code here can use carName

function myFunction() {
  // code here can also use carName
}
```

> A global variable has **Global Scope**:
> 
> All scripts and functions on a web page can access it.

## Global Scope

Variables declared **Globally** (outside any function) have **Global Scope**.

**Global** variables can be accessed from anywhere in a JavaScript program.

Variables declared with `var`, `let` and `const` are quite similar when declared outside a block.

They all have **Global Scope**:

```javascript
var x = 2;      // Global scope
```

```javascript
let y = 2;      // Global scope
```

```javascript
const z = 2;    // Global scope
```

## JavaScript Variables

In JavaScript, objects and functions are also variables.

> Scope determines the accessibility of variables, objects, and functions from different parts of the code.

## Automatically Global (use node cli)

If you assign a value to a variable that has not been declared, it will automatically become a **GLOBAL** variable.

This code example will declare a global variable `carName`, even if the value is assigned inside a function.

```javascript
myFunction();

// code here can use carName

function myFunction() {
  carName = "Volvo";
}
```

## Stric Mode

All modern browsers support running JavaScript in "Strict Mode".

You will learn more about how to use strict mode in a later chapter of this tutorial.

> In "Strict Mode", undeclared variables are not automatically global.

## Global Variables in HTML 

With JavaScript, the global scope is the JavaScript enviroment.

In HTML, the global scope is the window object.

Global variables defined with the `var` keyword belong to the window object:

```javascript
var carName = "Volvo";
// code here can use window.carName
```

Global variables defined with the `let` keyword do not belong to the window object:

```javascript
let carName = "Volvo";
// code here can not use window.carName
```

## Warning

> Do NOT create global variables unless you intend to.
> 
> Your global variables (or functions) can overwrite window variables (or functions).
> 
> Any function, including the window object, can overwrite your global variables and functions.

## The Lifetime of JavaScript Variables

The lifetime of a JavaScript variable starts when it is declared.

Function (local) variables are deleted when the function is completed.

In a web browser, global variables are deleted when you close the browser window (or tab).

## Function Arguments

Function arguments (parameters) work as local variables inside functions.