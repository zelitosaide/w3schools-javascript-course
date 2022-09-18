# JavaScript Display Objects

## How to Display JavaScript Objects?

Displaying a JavaScript object will output **[object Object]**.

```
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

document.getElementById("demo").innerHTML = person;
```

Some common solutions to display JavaScript objects are:

* Displaying the Object Properties by name
* Displaying the Object Properties in a Loop
* Displaying the Object using Object.values()
* Displaying the Object using JSON.stringify()

## Displaying Object Properties

The properties of an object can be displayed as a string:

```
const person = {
  name: "John",
  age: 30, 
  city: "New York" 
};

document.getElementById("demo").innerHTML = person.name + " " + person.age + "," + person.city;
```

## Displaying the Object in a Loop

The properties of an object can be collected in a loop:

```
const person = {
  name: "John",
  age: "30",
  city: "New York"
};

let text = "";
for (let x in person) {
  text += person[x] + " ";
}

document.getElementById("demo").innerHTML = text;
```

You must use **person[x]** in the loop.

**person.x** will not work (Because **x** is a variable).

## Using Object.values()

Any JavaScript object can be converted to an array using Object.values():

```
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

const myArray = Object.values(person);
```

`myArray` is now a JavaScript array, ready to be displayed:

```
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

const myArray = Object.values(person);
document.getElementById("demo").innerHTML = myArray;
```

`Object.values()` is supported in all major browsers since 2016.

| ![chrome](../../JS%20Tutorial/__26_array_iteration/compatible_chrome.png) | ![edge](../../JS%20Tutorial/__26_array_iteration/compatible_edge.png) | ![firefox](../../JS%20Tutorial/__26_array_iteration/compatible_firefox.png) | ![safari](../../JS%20Tutorial/__26_array_iteration/compatible_safari.png) | ![operamini](../../JS%20Tutorial/__26_array_iteration/compatible_opera.png) |
| ---------------------------------- | ------------------------------ | ------------------------------------ | ---------------------------------- | ------------------------------------ |
| 54 (2016)                          | 14 (2016)                      | 47 (2016)                            | 10 (2016)                          | 41 (2016)                            |


## Using JSON.stringify()

Any JavaScript object can be stringified (converted to a string) with the JavaScript function `JSON.stringify()`:

```
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

let myString = JSON.stringify(person);
```

`myString` is now a JavaScript string, ready to be displayed:

```
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

let myString = JSON.stringify(person);
document.getElementById("demo").innerHTML = myString;
```

The result will be a string following the JSON notation:

{"name":"John","age":50, "city":"New York"}

`JSON.stringify()` is included in JavaScript and supported in all major browsers.

## Stringify Dates

`JSON.stringify` converts dates into strings:

```
const person = {
  name: "John",
  today: new Date()
};

let myString = JSON.stringify(person);
document.getElementById("demo").innerHTML = myString;
```

## Stringify Functions

`JSON.stringify` will not stringify functions:

```
const person = {
  name: "John",
  age: function() {
    return 30;
  }
};

let myString = JSON.stringify(person);
document.getElementById("demo").innerHTML = myString;
```

This can be "fixed" if you convert the functions into strings before stringifying.

```
const person = {
  name: "John",
  age: function () {
    return 30;
  }
};
person.age = person.age.toString();

let myString = JSON.stringify(person);
document.getElementById("demo").innerHTML = myString;
```

## Stringify Arrays

It is also possible to stringify JavaScript arrays:


```
const arr = ["John", "Peter", "Sally", "Jane"];

let myString = JSON.stringify(arr);
document.getElementById("demo").innerHTML = myString; 
```

The result will be a string following the JSON notation:

["John","Peter","Sally","Jane"]