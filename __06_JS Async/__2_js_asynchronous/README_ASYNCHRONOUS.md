# Asynchronous JavaScript

"I will finish later!"

Functions running in parallel with other functions are called asynchronous

A good example is JavaScript setTimeout()

## Asynchronous JavaScript

The examples used in the previous chapter, was very simplified.

The purpose of the examples was to demonstrate the syntax of callback functions:

```javascript
const { log } = console;

function myDisplayer(something) {
  log(something);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCallback(5, 5, myDisplayer);
```

In the example above, `myDisplayer` is the name of a function.

It is passed to `myCalculator` as an argument.

> In the real world, callbacks are most often used with asynchronous functions.
> 
> A typical example is JavaScript `setTimeout()`.

