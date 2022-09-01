# JavaScript Array Methods

## Converting Arrays to Strings

The JavaScript method toString() converts an array to a string of (comma separated) array values.

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
```

Result:

```
Banana,Orange,Apple,Mango
```

The `join()` method also joins all array elements into a string.

It behaves just like `toString()`, but in addition you can specify the separator:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");
```

Result:

```
Banana * Orange * Apple * Mango
```

## Popping and Pushing

When you work with arrays, it is easy to remove elements and add new elements.

This is what popping and pushing is:

Popping items **out** of an array, or pushing items **into** an array.

## JavaScript Array pop()

The `pop()` method removes the last element from an array: 

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
```

The `pop()` method returns the value that was "popped out":

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();
```

## JavaScript Array push()

The `push()` method adds a new element to an array (at the end):

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
```

The `push()` method returns the new array length:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.push("Kiwi");
```

## Shifting Elements

Shifting is equivalent to popping, but working on the first element instead of the last.

## JavaScript Array shift()

The `shift()` method removes the first array element and "shifts" all other elements to a lower index.

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
```

The `shift()` method returns the value that was "shifted out":

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.shift();
```

## JavaScript Array unshift()

The `unshift()` method adds a new element to an array (at the beginning), and "unshifts" older elements: 

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
```

The `unshift()` method returns the new array length.

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const length = fruits.unshift("Lemon");
```

## Changing Elements

Array elements are accessed using their **index number**:

Array **indexes** start with 0:

`[0]` is the first array element

`[1]` is the second

`[2]` is the third ...