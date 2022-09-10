# JavaScript Sets

A JavaScript Set is a collection of unique values.

Each value can only occur once in a Set.

A Set can hold any value of any data type.

## Set Methods

| **Method** | **Description**                                              |
| ---------- | ------------------------------------------------------------ |
| new Set()  | Creates a new Set                                            |
| add()      | Adds a new element to the Set                                |
| delete()   | Removes an element from a Set                                |
| has()      | Returns true if a value exists                               |
| clear()    | Removes all elements from a Set                              |
| forEach()  | Invokes a callback for each element                          |
| values()   | Returns an Iterator with all the values in a Set             |
| keys()     | Same as values()                                             |
| entries()  | Returns an Iterator with the [value, value] pairs from a Set |


| **Property** | **Description**                      |
| ------------ | ------------------------------------ |
| size         | Returns the number elements in a Set |


## How to Create a Set

You can create a JavaScript Set by:

* Passing an Array to `new Set()`
* Create a new Set and use `add()` to add values
* Create a new Set and use `add()` to add variables

## The new Set() Method

Pass an Array to the new Set() constructor:

```
// Create a Set
const letters = new Set(["a", "b", "c"]);
```

Create a Set and add literal values:

```
// Create a Set
const letters = ne Set();

// Add values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
```

Create a Set and add variables:

```
// Create Variables
const a = "a";
const b = "b";
const c = "c";

// Create a Set
const letters = new Set();

// Add Variables to the Set
letters.add(a);
letters.add(b);
letters.add(c);
```

## The add() Method

```
letters.add("d");
letters.add("e");
```

If you add equal elements, only the first will be saved:

```
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
```

## The forEach() Method

The `forEach()` method invokes a function for each Set element:

```
// Create a Set
const letters = new Set(["a", "b", "c"]);

// List all entries
let text = "";
letters.forEach(function(value) {
  text += value;
});
```

## The values() Method

The `values()` method returns an Iterator object containing all the values in a Set:

```
letters.values()    // Returns [object Set Iterator]
```

Now you can use the Iterator object to access the elements:

```
// Create an Iterator
const myIterator = letters.values();

// List all values
let text = "";
for (const entry of myIterator) {
  text += entry;
}
```

## The keys() Method

A set has no keys.

`keys()` returns the same as `values()`.

This makes Sets compatible with Maps.

```
letters.keys()    // Returns [object Set Iterator]
```

## The entries() Method

A Set has no keys.

`entries()` returns [value, value] pairs intead of [key, value] pairs.

This makes Sets compatible with Maps:

```
// Create an Iterator
const myIterator = letters.entries();

// List all  Entries
let text = "";
for (const entry of myIterator) {
  text += entry;
}
```

## Sets are Objects

For a Set, `typeof` returns object:

```
typeof letters;   // Returns object
```

For a Set, `instanceof Set` returns true:

```
letters instanceof Set;   // Returns true
```