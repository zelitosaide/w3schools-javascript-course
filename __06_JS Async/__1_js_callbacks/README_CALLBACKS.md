# JavaScript Callbacks

"I will call back later!"

A callback is a function passed as an argument to another function.

This technique allows a function to call another function

A callback function can run after another function has finished

## Function Sequence


JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.

This example will end up displaying "Goodbye":

```javascript
const { log } = console;

function myFirst() {
  log("Hello");
}

function mySecond() {
  log("Goodbye");
}

myFirst();
mySecond();
```

This example will end up displaying "Hello":

```javascript
const { log } = console.log();

function myFirst() {
  log("Hello");
}

function mySecond() {
  log("Goodbye");
}

mySecond();
myFirst();
```