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