# JavaScript For Of

## The For Of Loop

The JavaScript `for of` statement loops through the values of an iterable object.

It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists and more:

```javascript
for (variable of iterable) {
  // code block to be executed
}
```

**variable** - For every iteration the value of the next property is assigned to the variable. *Variable* can be declared with `const`, `let`, or `var`.

**iterable** - An object that has iterable properties.

## Browser Support

**For/of** was added to JavaScript in 2015 ([ES6](https://www.w3schools.com/js/js_es6.asp))

Safari 7 was the first browser to support for of:

| ![Chrome](../assets/compatible_chrome.png) | ![Edge](../assets/compatible_edge.png) | ![Firefox](../assets/compatible_firefox.png) | ![Safari](../assets/compatible_safari.png) | ![Opera](../assets/compatible_opera.png) |
| ------------------------------------------ | -------------------------------------- | -------------------------------------------- | ------------------------------------------ | ---------------------------------------- |
| Chrome 38                                  | Edge 12                                | Firefox 51                                   | Safari 7                                   | Opera 25                                 |
| Oct 2014                                   | Jul 2015                               | Oct 2016                                     | Oct 2013                                   | Oct 2014                                 |

**For/of** is not supported in Internet Explorer.

## Looping over an Array

```javascript
const cars = ["BMW", "Volvo", "Mini"];

let text = "";

for (let x of cars) {
  text += x;
}
```

## Looping over a String

```javascript
let language = "JavaScript";

let text = "";

for (let x of language) {
  text += x;
}
```

## The While Loop

The `while` loop and the `do/while` loop are explained in the next chapter.