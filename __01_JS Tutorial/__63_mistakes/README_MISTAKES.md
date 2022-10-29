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