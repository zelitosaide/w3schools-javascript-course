### JavaScript Let

The _let_ keyword was introduced in ES6 (2015).

Variables defined with _let_ cannot be Redeclared.

Variables defined with _let_ must be Declared before use.

Variables defined with _let_ have Block Scope.


__Cannot be Redeclared__

Variables defined with _let_ cannot be redeclared.

You cannot accidentally redeclare a variable.

With _let_ you can not do this:

    let x = "John Doe";

    let x = 0;

    // SyntaxError: 'x' has already been declared

With var you can:

    var x = "John Doe";

    var x = 0;


__Block Scope__

Before ES6 (2015), JavaScript had only _Global Scope_ and _Function Scope_.

ES6 introduced two important new JavaScript keywords: _let_ and _const_.

These two keywords provide _Block Scope_ in JavaScript.

Variables declared inside a { } block cannot be accessed from outside the block:

    {
      let x = 2;
    }
    // x can NOT be used here 

Variables declared with the _var_ keyword can NOT have block scope.

Variables declared inside a { } block can be accessed from outside the block. 

    {
      var x = 2;
    }
    // x CAN be used here 


__Redeclaring Variables__

Redeclaring a variable using the _var_ keyword can impose problems.

Redeclaring a variable inside a block will also redeclare the variable outside the block:

    var x = 10;
    // Here x is 10

    {
      var x = 2;
      // Here x is 2
    }

    // Here x is 2


Redeclaring a variable using the _let_ keyword can solve this problem.

Redeclaring a variable inside a block will not redeclare the variable outside the block:

    let x = 10;
    // Here x is 10

    {
    let x = 2;
    // Here x is 2
    }

    // Here x is 10 


__Browser Support__

The _let_ keyword is not fully supported in Internet Explorer 11 or earlier.

The following table defines the first browser versions with full support for the _let_ keyword: 

    Chrome 49 	Edge 12 	  Firefox 44 	Safari 11 	Opera 36
    Mar, 2016 	Jul, 2015 	Jan, 2015 	Sep, 2017 	Mar, 2016


__Redeclaring__

Redeclaring a JavaScript variable with _var_ is allowed anywhere in a program:

    var x = 2;
    // Now x is 2

    var x = 3;
    // Now x is 3 


With _let_, redeclaring a variable in the same block is NOT allowed:

    var x = 2;    // Allowed
    let x = 3;    // Not allowed

    {
      let x = 2;    // Allowed
      let x = 3     // Not allowed
    }

    {
      let x = 2;    // Allowed
      var x = 3     // Not allowed
    }


Redeclaring a variable with _let_, in another block, IS allowed:

    let x = 2;    // Allowed

    {
      let x = 3;    // Allowed
    }

    {
      let x = 4;    // Allowed
    } 


__Let Hoisting__

Variables defined with _var_ are _hoisted_ to the top and can be initialized at any time.

Meaning: You can use the variable before it is declared:

    carName = "Volvo";
    var carName;


If you want to learn more about hoisting, study the chapter JavaScript Hoisting.

Variables defined with _let_ _are also hoisted_ to the top of the block, _but not initialized._

Meaning: Using a _let_ variable before it is declared will result in a _ReferenceError_:

    carName = "Saab";
    let carName = "Volvo"; 