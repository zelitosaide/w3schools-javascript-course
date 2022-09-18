# JavaScript Array Const

## ECMAScript 2015 (ES6)

in 2015, JavaScript introduced an important new keyword: `const`.

It has become a common practice to declare arrays using `const`:

```
const cars = ["Saab", "Volvo", "BMW"];
```

## Cannot be Reassigned

An array declared with `const` cannot be reassigned:

```
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];    // ERROR 
```

## Arrays are Not Constants

The keyword `const` is a little misleading.

It does NOT define a constant array. It defines a constant reference to an array.

Because of this, we can still change the elements of a constant array.

## Elements Can be Reassigned

You can change the elements of a constant array:

```
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
```

## Browser Support

The `const` keyword is not supported in Internet Explorer 10 or earlier.

The following table defines the first browser versions with full support for the `const` keyword: 

| ![chrome](./compatible_chrome.png) | ![edge](./compatible_edge.png) | ![firefox](./compatible_firefox.png) | ![safari](./compatible_safari.png) | ![operamini](./compatible_opera.png) |
|---------------|--------------|-------------|---------------|--------------|
|  Chrome 49    |IE 11 / Edge  |  Firefox 36 |    Safari 10  |    Opera 36  |
|    Mar, 2016  |  Oct, 2013   |  Feb, 2015  |  Sep, 2016    |  Mar, 2016   |

## Assigned when Declared

JavaScript `const` variables must be assigned a value when they are declared: 

Meaning: An array declared with `const` must be initialized when it is declared.

Using `const` without initializing the array is a syntax error:

This will not work:

```
const cars;
cars = ["Saab", "Volvo", "BMW"];
```

Arrays declared with `var` can be initialized at any time.

You can even use the array before it is declared:

This is OK:

```
cars = ["Saab", "Volvo", "BMW"];
var cars;
```

## Const Block Scope

An array declared with `const` has **Block Scope**.

An array declared in a block is not the same as an array declared outside the block:

```
const cars = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
{
  const cars = ["Toyota", "Volvo", "BMW"];
  // Here cars[0] is "Toyota"
}
// Here cars[0] is "Saab" 
```

An array declared with `var` does not have block scope:

```
var cars = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
{
  var cars = ["Toyota", "Volvo", "BMW"];
  // Here cars[0] is "Toyota"
}
// Here cars[0] is "Toyota" 
```

You can learn more about Block Scope in the chapter: [JavaScript Scope.](https://www.w3schools.com/js/js_scope.asp)

## Redeclaring Arrays

Redeclaring an array declared with `var` is allowed anywhere in a program:

```
var cars = ["Volvo", "BMW"];   // Allowed
var cars = ["Toyota", "BMW"];  // Allowed
cars = ["Volvo", "Saab"];      // Allowed
```

Redeclaring or reassigning an array to `const`, in the same scope, or in the same block, is not allowed:

```
var cars = ["Volvo", "BMW"];     // Allowed
const cars = ["Volvo", "BMW"];   // Not allowed
{
  var cars = ["Volvo", "BMW"];   // Allowed
  const cars = ["Volvo", "BMW"]; // Not allowed
}
```

Redeclaring or reassigning an existing `const` array, in the same scope, or in the same block, is not allowed:

```
const cars = ["Volvo", "BMW"];   // Allowed
const cars = ["Volvo", "BMW"];   // Not allowed
var cars = ["Volvo", "BMW"];     // Not allowed
cars = ["Volvo", "BMW"];         // Not allowed

{
  const cars = ["Volvo", "BMW"]; // Allowed
  const cars = ["Volvo", "BMW"]; // Not allowed
  var cars = ["Volvo", "BMW"];   // Not allowed
  cars = ["Volvo", "BMW"];       // Not allowed
}
```

Redeclaring an array with `const`, in another scope, or in another block, is allowed:

```
const cars = ["Volvo", "BMW"];   // Allowed
{
  const cars = ["Volvo", "BMW"]; // Allowed
}
{
  const cars = ["Volvo", "BMW"]; // Allowed
}
```

## Complete Array Reference

For a complete Array reference, go to our:

[Complete JavaScript Array Reference.](https://www.w3schools.com/jsref/jsref_obj_array.asp)

The reference contains descriptions and examples of all Array properties and methods.