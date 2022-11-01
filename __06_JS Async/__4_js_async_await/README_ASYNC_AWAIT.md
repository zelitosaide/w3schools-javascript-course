# JavaScript Async

> "async and await make promises easier to write"
> 
> **async** makes a function return a Promise
> 
> **await** makes a function wait for a Promise

## Async Syntax

The keyword `async` before a function makes the function return a promise:

```javascript
async function myFunction() {
  return "Hello";
}
```

Is the same as:

```javascript
function myFunction() {
  return Promise.resolve("Hello");
}
```

Here is how to use the Promise:

```javascript
myFunction().then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
```

### Example

```javascript
const { log: print } = console;

async function myFunction() {
  return "Hello";
}

myFunction().then(
  function(value) { print(value); },
  function(error) { print(error); }
);
```

Or simpler, since you expect a normal value (a normal response, not an error):

```javascript
const { log: print } = console;

async function myFunction() {
  return "Hello";
}

myFunction().then(
  function(value) { print(value); }
);
```

## Await Syntax

The `await` keyword `~~can only be~~` used inside an async function.

The `await` keyword makes the function pause the execution and wait for a resolved promise before it continues:

```javascript
let value = await promise;
```

### Example

Let's go slowly and learn how to use it.

Basic Syntax

```javascript
const myDisplay = async function () {
  let myPromise = new Promise(function(resolve, reject) {
    resolve("I love You!!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
```

> The two arguments (resolve and reject) are pre-defined by JavaScript.
> 
> We will not create them, but call one of them when the executor function is ready.
> 
> Very often we will not need a reject function.

### Example without reject

```javascript
async function myDisplay() {
  const myPromise = new Promise(function(resolve) {
    resolve("I love You!!!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
```

### Waiting for a Timeout

```javascript
async function myDisplay() {
  const myPromise = new Promise(function(resolve) {
    setTimeout(function() { resolve("I love You!!!"); }, 3000);
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
```