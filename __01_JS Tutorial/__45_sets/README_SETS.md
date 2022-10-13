# JavaScript Sets

A JavaScript Set is a collection of unique values.

Each value can only occur once in a Set.

## Essential Set Methods

| Method      | Description                                      |
| ----------- | ------------------------------------------------ |
| `new Set()` | Creates a new Set                                |
| `add()`     | Adds a new element to the Set                    |
| `delete()`  | Removes an element from a Set                    |
| `has()`     | Returns true if a value exists in the Set        |
| `forEach()` | Invokes a callback for each element in the Set   |
| `values()`  | Returns an iterator with all the values in a Set |

| Property | Description                             |
| -------- | --------------------------------------- |
| `size`   | Returns the number of elements in a Set |

## How to Create a Set

You can create a JavaScript Set by:

* Passing an Array to `new Set()`
* Create a new Set and use `add()` to add values
* Create a new Set and use `add()` to add variables

## The new Set() Method

Pass an Array to the `new Set()` constructor:

```javascript
// create a Set
const letters = new Set(["a", "b", "c"]);

// Or 
const letters = new Set("abc");
```

Create a Set and add values:

```javascript
// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
```

Create a Set and add variables:

```javascript
// Create a Set
const letters = new Set();

// Create Variables
const a = "a";
const b = "b";
const c = "c";

// Add Variables to the Set
letters.add(a);
letters.add(b);
letters.add(c);
```

## The add() Method

```javascript
letters.add("d");
letters.add("e");
```

If you add equal elements, only the first will be saved:

```javascript
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
```

## The forEach() Method

The `forEach()` method invokes (calls) a function for each Set element:

```javascript
// Create a Set
const letters = new Set("abc");

// Or

// const letters = new Set(["a", "b", "c"]);

// List all elements
let text = "";
letters.forEach(function(value) {
  text += value;
});
```

## The values() Method

The `values()` method returns a new iterator object containing all the values in a Set:

```javascript
letters.values();   // Returns [object Set Iterator]
```

Now you can use the Iterator object to access the elements:

```javascript
// List all Elements
let text = "";
for (const x of letters.values()) {
  text += x;
}
```