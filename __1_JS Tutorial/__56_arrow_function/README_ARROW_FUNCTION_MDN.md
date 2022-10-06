# Arrow function expressions

An **aarrow function expression** is a compact alternative to a traditional [function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function), but is limited and can't be used in all situations.

There are differences between arrow functions and tradicional functions, as well as some limitations:

* Arrow functions don't have their own bindings to [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this), [`arguments`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) or [`super`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super), and should not be used as [`method`](https://developer.mozilla.org/en-US/docs/Glossary/Method).
* Arrow functions don't have access to the [`new.target`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target) keyword.
* Arrow functions aren't suitable for [`call`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`apply`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) and [`bind`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) methods, which generally rely on establishing a [scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope).
* Arrow functions cannot be used as [constructors](https://developer.mozilla.org/en-US/docs/Glossary/Constructor).
* Arrow functions cannot use [`yield`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield), within its body.

```javascript
const materials = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryllium"
];

console.log(materials.map(material => material.length));
// expected output: Array [8, 6, 7, 9]
```

## Comparing traditional functions to arrow functions

Let's decompose a "traditional anonymous functions" down to the simplest "arrow function" step-by-step:

> **Note:** Each step along the way is a valid "arrow function".

```javascript
// Traditional Anonymous Functions
(function (a) {
  return a + 100;
});

// Arrow Function Break Down

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
  return a + 100;
};

// 2. Remove the body braces and word "return" - the return is implied.
(a) => a + 100;

// 3. Remove the argument parentheses
a => a + 100;
```

The { braces } and ( parentheses ) and "return" are required in some cases.

For example, if you have **multiple arguments** or **no arguments**,
you'll need to re-introduce parentheses around the arguments:

```javascript
// Traditional Anonymous Function
(function (a, b) {
  return a + b + 100;
});

// Arrow Function
(a, b) => a + b + 100;

const a = 4;
const b = 2;

// Traditional Anonymous Function (no arguments)
(function() {
  return a + b + 100;
});

// Arrow Function (no arguments)
() => a + b + 100;
```

Likewise, if the body requires **additional lines** of processing, you'll need to re-introduce braces **PLUS** the "**return**" (arrow functions do not magically guess what or when you want to "return"):

```javascript
// Traditional Anonymous Function
(function (a, b) {
  const chuck = 42;
  return a + b + chuck;
});

// Arrow Function
(a, b) => {
  const chuck = 42;
  return a + b + chuck;
};
```

And finally, for **named functions** we treat arrow expressions like variables:

```javascript
// Traditional Function
function bob(a) {
  return a + 100;
}

// Arrow Function
const bod = (a) => a + 100;
```

## Basic syntax

One param. With simple expression return is not needed:

```javascript
param => expression
(param) => expression
```

Multiple params require parentheses. With simple expression return is not needed:

```javascript
(param1, param2) => expression
```

Multiline statements require body braces and return:

```javascript
// The parentheses are optional with one single parameter
param => {
  const a = 1;
  return a + param;
}
```

Multiple params require parentheses. Multiline statemenets require body braces and return:

```javascript
(param1, param2) => {
  const a = 1;
  return a + param1 + param2;
}
```

## Advanced syntax

To return an object literal expression requires parentheses around expression:

```javascript
param => ({ foo: "a" }); // returning the object { foo: "a" }
```

[Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) are supported, and always require parentheses:

```javascript
(a, b, ...rest) => expression
```

[Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) are supported, and always require parentheses:

```javascript
(a=400, b=20, c) => expression
```

[Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) Within params is supported, and always requires parentheses:

```javascript
([a, b] = [10, 20]) => a + b;   // result is 30

({ a, b } = { a: 10, b: 20 }) => a + b;   // result is 30
```

## Description

### Arrow functions used as methods

As stated previously, arrow function expressions are best suited for non-method functions. Let's see what happens when we try to use the as methods:

```javascript
"use strict";

const obj = { // does not create a new scope
  i: 10,
  b: () => console.log(this.i, this),
  c() {
    console.log(this.i, this);
  } 
}

obj.b();  // prints undefined, Window { /* ... */ } (or the global object)

obj.c();  // prints 10, Object { /* ... */ }
```

Arrow functions do not have their own `this`. Another example involving [`Object.defineProperty()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty):

```javascript
"use strict";

const obj = { a: 10 };

Object.defineProperty(obj, "b", {
  get: () => {
    console.log(this.a, typeof this.a, this);
    // undefined "undefined" Window { /* ... */ } (or the global object)

    return this.a + 10;
    // represents global object "Window", therefore "this.a" returns "undefined"
  }
});
```