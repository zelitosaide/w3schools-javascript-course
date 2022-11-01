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