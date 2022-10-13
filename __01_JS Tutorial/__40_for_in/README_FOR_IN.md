# JavaScript For In

## The For In Loop

The JavaScript `for in` statement loops through the properties of an Object:

### Syntax

```javascript
for (key in object) {
  // code block to be executed
}
```

### Example

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25
};

let text = "";

for (let key in person) {
  text += person[key];
}
```

## Example Explained

* The **for in** loop iterates over a **person** object
* Each iteration returns a **key** (key)
* The key is used to access the **value** of the key
* The value of the key is **person[key]**

## For In Over Arrays

The JavaScript `for in` statement can also loop over the properties of an Array:

### Syntax

```javascript
for (variable in array) {
  // code block to be executed
}
```

### Example

```javascript
const numbers = [45, 4, 9, 16, 25];

let text = "";

for (let x in numbers) {
  text += numbers[x];
}
```

> Do not use **for in** over an Array if the index **order** is important.
> The index order is implementation-dependent, and array values may not be accessed in the order you expect.
> It is better to use a **for** loop, a **for of** loop, or **Array.forEach()** when the order is important.

## Array.forEach()

The `forEach()` method calls a function (a callback function) once for each array element.

```javascript
const numbers = [45, 4, 9, 16, 25];

let text = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  text += value;
}
```

Note that the function takes 3 arguments:

* The item value
* The item index 
* The array itself

The example above uses only the value parameter. It can be rewritten to:

```javascript
const numbers = [45, 4, 9, 16, 25];

let text = "";
numbers.forEach(myFunction);

function myFunction(value) {
  text += value;
}
```