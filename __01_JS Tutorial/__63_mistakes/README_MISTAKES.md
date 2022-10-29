# JavaScript Common Mistakes

This chapter points out some common JavaScript mistakes.

## Accidentally Using the Assignment Operator

JavaScript programs may generate unexpected results if a programmer accidentally uses an assignment operator (`=`), instead of a comparison operator (`==`) in an if statement.s

This `if` statement returns `false` (as expected) because x is not equal to 10:

```javascript
let x = 0;

if (x == 10) {
  // some code here
}
```

This `if` statement returns `true` (maybe not as expected), because 10 is true:

```javascript
let x = 0;

if (x = 10) {
  // some code here
} 
```

This `if` statement returns `false` (maybe not as expected), because 0 is false:

```javascript
let x = 0;

if (x = 0) {
  // some code here
}
```

> An assignment always returns the value of the assignment.

## Expecting Loose Comparison

In regular comparison, data type does not matter. This `if` statement returns `true`:

```javascript
let x = 10;
let y = "10";

if (x == y) {
  // some code here
}
```

In strict comparison, data type does matter. This `if` statement returns `false`:

```javascript
let x = 10;
let y = "10";

if (x === y) {
  // some code here
}
```

It is a common mistake to forget that `switch` statements use strict comparison:

This `case switch` will display an alert:

```javascript
let x = 10;

switch(x) {
  case 10: alert("Hello");
}
```

This `case switch` will not display an alert:

```javascript
let x = 10;

switch(x) {
  case "10": alert("Hello");
}
```

## Confusing Addition & Concatenation

**Addition** is about adding **numbers**.

**Concatenation** is about adding **strings**.

In JavaScript both operations use the same `+` operator.

Because of this, adding a number as a number will produce a different result from adding a number as a string:

```javascript
let x = 10;
x = 10 + 5;     // Now x is 15

let y = 10;
y += "5";       // Now y is "105"
```

When adding two variables, it can be difficult to anticipate the result:

```javascript
let x = 10;
let y = 5;
let z = x + y;        // Now z is 15

let x = 10;
let y = "5";
let z = x + y;        // Now z is "105"
```

## Misunderstanding Floats

All numbers in JavaScript are stored as 64-bits **Floating point numbers** (Floats).

All programming languages, including JavaScript, have difficulties with precise floating point values:

```javascript
let x = 0.1;
let y = 0.2;
let z = x + y;        // the result in z will not be 0.3
```

To solve the problem above, it helps to multiply and divide:

```javascript
let z = (x * 10 + y * 10) / 10;     // z will be 0.3
```

## Breaking a JavaScript String

JavaScript will allow you to break a statement into two lines:

```javascript
let x =
  "Hello, world";
```

But, breaking a statement in the middle of a string will not work:

```javascript
let x = "Hello
World";
```

You must use a "backslash" if you must break a statement in a string:

```javascript
let x = "Hello \
World";
```

## Misplacing Semicolon

Because of a misplaced semicolon, this code block will execute regardless of the value of x:

```javascript
if (x == 19); {
  // code block
}
```

## Breaking a Return Statement

It is a default JavaScript behavior to close a statement automatically at the end of a line.

Because of this, these two examples will return the same result:

### Example 1

```javascript
function myFunction(a) {
  let power = 10
  return a * power
}
```

### Example 2

```javascript
function myFunction(a) {
  let power = 10;
  return a * power;
}
```

JavaScript will also allow you to break a statement into two lines.

Because of this, example 3 will also return the same result:

### Example 3

```javascript
function myFunction(a) {
  let
  power = 10;
  return a * power;
}
```

But, what will happen if you break the return statement in two lines like this:

### Example 4

```javascript
function myFunction(a) { 
  let power = 10;
  return
  a * power;
}
```

The function will return `undefined`!

Why? Because JavaScript thought you meant:

### Example 5

```javascript
function myFunction(a) {
  let power = 10;
  return;
  a * power;
}
```

## Explanation

If a statement is incomplete like:

```javascript
let
```

JavaScript will try to complete the statement by reading the next line:

```javascript
power = 10;
```

But since this statement is complete:

```javascript
return
```

JavaScript will automatically close it like this:

```javascript
return;
```

This happens because closing (ending) statements with semicolon is optional in JavaScript.

JavaScript will close the return statement at the end of the line, because it is a complete statement.

> Never break a return statement.

## Accessing Arrays with Named Indexes

Many programming languages support arrays with named indexes.

Arrays with named indexes are called associative arrays (or hashes).

JavaScript does **not** support arrays with named indexes.

In JavaScript, **arrays** use **numbered indexes**:

```javascript
const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person.length;        // person.length will return 3
person[0];            // person[0] will return "John"
```

In JavaScript, **objects** use **named indexes**.

If you use a named index, when accessing an array, JavaScript will redefine the array to a standart object.

After the automatic redefinition, array methods and properties will produce undefined or incorrect results:

```javascript
const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;          // person.length will return 0
person[0];              // person[0] will return undefined
```

## Ending Definitions with a Comma

Trailing commas in object and array definitions are legal in ECMAScript 5.

### Object Example:

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 46,
};
```

### Array Example:

```javascript
const points = [40, 100, 1, 5, 25, 10,];
```

> WARNING !!
> 
> Internet Explorer 8 will crash.
> 
> JSON does not allow trailing commas.

### JSON:

```javascript
person = {
  "firstName": "John",
  "lastName": "Doe",
  "age": 46
}
```

### JSON:

```javascript
points = [40, 100, 1, 5, 25, 10]
```

## Undefined is Not Null

JavaScript objects, variables, properties, and methods can be `undefined`,

In addition, empty JavaScript object can have the value `null`.

This can make it a little bit difficult to test if an object is empty.

You can test if an object exists by testing if the type is `undefined`:

```javascript
if (typeof obj === "undefined") {
  // some code here
}
```

But you cannot test if an object is `null`, because this will throw an error if the object is `undefined`:

### Incorrect: -> (I doubt)

```javascript
if (obj === null) {
  // some code here
}
```

To solve this problem, you must test if an object is not `null`, and not `undefined`.

But this can still throw an error:

### Incorrect: -> (I doubt)

```javascript
if (obj !== null && typeof obj !== "undefined") {
  // some code here
}
```

Because of this, you must test for not `undefined` before you can test for not `null`:

### Correct:

```javascript
if (typeof obj !== "undefined" && obj !== null) {
  // some code here
}
```

### My understanding

If you want to test if an object is not null, you must test if it not undefined first.

```javascript
const obj = undefined;
if (obj !== null && typeof obj !== "undefined") {
  console.log("nao eh nulo");
} else {
  console.log("nulo");
}
```