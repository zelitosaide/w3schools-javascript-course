### JavaScript Const

The _const_ keyword was introduced in ES6 (2015).

Variables defined with _const_ cannot be Redeclared.

Variables defined with _const_ cannot be Reassigned.

Variables defined with _const_ have Block Scope.


__Cannot be Reassigned__

A _const_ variable cannot be reassigned:

    const PI = 3.141592653589793;
    PI = 3.14;      // This will give an error
    PI = PI + 10;   // This will also give an error


__Must be Assigned__

JavaScript _const_ variables must be assigned a value when they are declared:

    Correct
    const PI = 3.14159265359;

    Incorrect
    const PI;
    PI = 3.14159265359;



__When to use JavaScript const?__

As a general rule, always declare a variable with _const_ unless you know that the value will change.

Use _const_ when you declare:

    A new Array
    A new Object
    A new Function
    A new RegExp


__Constant Objects and Arrays__

The keyword _const_ is a little misleading.

_It does not define a constant value_. It defines _a constant reference to a value._

Because of this you can NOT:

    Reassign a constant value
    Reassign a constant array
    Reassign a constant object

    But you CAN:

    Change the elements of constant array
    Change the properties of constant object


__Constant Arrays__

You can change the elements of a constant array:

    // You can create a constant array:
    const cars = ["Saab", "Volvo", "BMW"];

    // You can change an element:
    cars[0] = "Toyota";

    // You can add an element:
    cars.push("Audi");

But you can NOT reassign the array:

    const cars = ["Saab", "Volvo", "BMW"];

    cars = ["Toyota", "Volvo", "Audi"];    // ERROR 


__Constant Objects__

You can change the properties of a constant object:

    // You can create a const object:
    const car = {type:"Fiat", model:"500", color:"white"};

    // You can change a property:
    car.color = "red";

    // You can add a property:
    car.owner = "Johnson"; 

But you can NOT reassign the object:

    const car = {type:"Fiat", model:"500", color:"white"};

    car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR 


__Browser Support__

The _const_ keyword is not supported in Internet Explorer 10 or earlier.

The following table defines the first browser versions with full support for the const keyword: 

    Chrome 49 	IE 11 / Edge 	Firefox 36 	Safari 10 	Opera 36
    Mar, 2016 	Oct, 2013 	  Feb, 2015 	Sep, 2016 	Mar, 2016


__Block Scope__

Declaring a variable with _const_ is similar to _let_ when it comes to _Block Scope._

The x declared in the block, in this example, is not the same as the x declared outside the block:

    const x = 10;
    // Here x is 10

    {
      const x = 2;
      // Here x is 2
    }

    // Here x is 10 

You can learn more about block scope in the chapter JavaScript Scope (https://www.w3schools.com/js/js_scope.asp)


__Redeclaring__

Redeclaring a JavaScript _var_ variable is allowed anywhere in a program:

    var x = 2;     // Allowed
    var x = 3;     // Allowed
    x = 4;         // Allowed 

Redeclaring an existing _var_ or _let_ variable to _const_, in the same scope, is not allowed:

    var x = 2;     // Allowed
    const x = 2;   // Not allowed

    {
      let x = 2;     // Allowed
      const x = 2;   // Not allowed
    }

    {
      const x = 2;   // Allowed
      const x = 2;   // Not allowed
    }

Reassigning an existing _const_ variable, in the same scope, is not allowed:

    const x = 2;     // Allowed
    x = 2;           // Not allowed
    var x = 2;       // Not allowed
    let x = 2;       // Not allowed
    const x = 2;     // Not allowed

    {
      const x = 2;   // Allowed
      x = 2;         // Not allowed
      var x = 2;     // Not allowed
      let x = 2;     // Not allowed
      const x = 2;   // Not allowed
    }

Redeclaring a variable with _const_, in another scope, or in another block, is allowed:

    const x = 2;     // Allowed

    {
      const x = 3;   // Allowed
    }

    {
      const x = 4;   // Allowed
    } 


__Const Hoisting__

Variables defined with _var_ are _hoisted_ to the top and can be initialized at any time.

Meaning: You can use the variable before it is declared:

    carName = "Volvo";
    var carName;

If you want to learn more about hoisting, study the chapter JavaScript Hoisting 
(https://www.w3schools.com/js/js_hoisting.asp).

Variables defined with _const_ _are also hoisted to the top_, but _not initialized_.

_Meaning_: Using a _const_ variable before it is declared will result in a _ReferenceError_:

    alert (carName);
    const carName = "Volvo";

