# JavaScript Best Practices

Avoid global variables, avoid `new`, avoid `==`, avoid `eval()`

## Avoid Global Variables

Minimize the use of global variables.

This includes all data types, objects, and functions.

Global variables and functions can be overwritten by other scripts.

Use local variables instead, and learn how to use [closures](https://www.w3schools.com/js/js_function_closures.asp).

## Always Declare Local Variables

All variables used in a function should be declared as **local** variables.

Local variables **must** be declared with the `var`, the `let`, or the `const` keyword, otherwise they will become global variables.

> Strict mode does not allow undeclared variables.

## Declarations on Top

It is a good coding practice to put all declarations at the top of each script or function.

This will:

* Give cleaner code
* Provide a single place to look for local variables
* Make it easier to avoid unwanted (implied) gloabal variables
* Reduce the possibility of unwanted re-declarations

```javascript
// Declare at the beginning
let firstName, lastName, price, discount, fullPrice;

// Use later
firstName = "John";
lastName = "Doe";

price = 19.90;
discount = 0.10;

fullPrice = price - discount;
```

This also goes for loop variables:

```javascript
for(let i = 0; i < 5; i++) {

}
```

## Initialize Variables

It is a good practice to initialize variables when you declare them.

This will:

* Give cleaner code
* Provide a single place to initialize variables
* Avoid undefined values

```javascript
// Declare and initiate at the beginning
let firstName = "";
let lastName = "";
let price = 0;
let discount = 0;
let fullPrice = 0;
const myArray = [];
const myObject = {};
```

> Initializing variables provides an idea of the intended use (and intended data type).

## Declare Objects with **const**

Declaring objects with `const` will prevent any accidental change of type:

```javascript
let car = { type: "Fiat", model: "500", color: "white" };
car = "Fiat";   // Changes object to string
```

```javascript
const car = { type: "Fiat", model: "500", color: "white" };
car = "Fiat";   // Not possible
```

## Declare Arrays with **const**

Declaring arrays with const will prevent any accidential change of type:

```javascript
let cars = ["Saab", "Volvo", "BMW"];
cars = 3;   // Changes array to number
```

```javascript
const cars = ["Saab", "Volvo", "BMW"];
cars = 3;   // Not possible
```