# JavaScript Iterables

Iterables are iterable objects (like Arrays).

Iterables can be accessed with simple and efficient code.

Iterables can be iterated over with `for..of` loops

## The For Of Loop

The JavaScript `for..of` statement loops through the elements of an iterable object.

```javascript
for (variable of iterable) {
  // code block to be executed
}
```

## Iterating

Iterating is easy to understand.

It simply means looping over a sequence of elements.

Here are some easy examples:

* Iterating over a String
* Iterating over an Array

## Iterating Over a String

You can use a `for..of` loop to iterate over the elements of a string:

```javascript
const name = "W3Schools";

for (const x of name) {
  // code block to be executed
}
```

## Iterating Over an Array

You can use a `for..of` loop to iterate over the elements of an Array:

```javascript
const letters = ["a", "b", "c"];

for (const x of letters) {
  // code block to be executed
}
```

> You can learn more details about Iterables in the chapter [JS Object Iterables](https://www.w3schools.com/js/js_object_iterables.asp).

## Iterating Over s Set

You can use a `for..of` loop to iterate over the elements of a Set:

```javascript
const letters = new Set(["a", "b", "c"]);

for (const x of letters) {
  // code block to be executed
}
```

> Sets and Maps are covered in the next chapters.

## Iterating Over a Map

You can use a `for..of` loop to iterate over the elements of a Map:

```javascript
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

for (const x of fruits) {
  // code block to be executed
}
```

## References

* [Iterators and generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
* [You can learn more details about Iterables in the chapter](https://www.w3schools.com/js/js_object_iterables.asp)