### JavaScript Data Types

JavaScript variables can hold different data types: _numbers_, _strings_, _objects_ and more:

    let length = 16;                               // Number
    let lastName = "Johnson";                      // String
    let x = {firstName:"John", lastName:"Doe"};    // Object 


__The Concept of Data Types__

In programming, data types is an important concept.

To be able to operate on variables, it is important to know something about the type.

Without data types, a computer cannot safely solve this:

    let x = 16 + "Volvo"; 

Does it make any sense to add "Volvo" to sixteen? Will it produce an error or will it produce a result?

JavaScript will treat the example above as:

    let x = "16" + "Volvo"; 

When adding a number and a string, JavaScript will treat the number as a string.

    let x = 16 + "Volvo";
    let x = "Volvo" + 16; 

JavaScript evaluates expressions _from left to right_. Different sequences can produce different results:

    let x = 16 + 4 + "Volvo";

    Result:
    20Volvo 

    let x = "Volvo" + 16 + 4;

    Result:
    Volvo164 

In the first example, JavaScript treats 16 and 4 as numbers, until it reaches "Volvo".

In the second example, since the first operand is a string, all operands are treated as strings.


__JavaScript Types are Dynamic__

JavaScript has dynamic types. This means that the same variable can be used to _hold different data types:_

    let x;           // Now x is undefined
    x = 5;           // Now x is a Number
    x = "John";      // Now x is a String 


__JavaScript Strings__

A string (or a text string) is a series of characters like "John Doe".

Strings are written with quotes. You can use single or double quotes:

    let carName1 = "Volvo XC60";   // Using double quotes
    let carName2 = 'Volvo XC60';   // Using single quotes 

You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

    let answer1 = "It's alright";             // Single quote inside double quotes
    let answer2 = "He is called 'Johnny'";    // Single quotes inside double quotes
    let answer3 = 'He is called "Johnny"';    // Double quotes inside single quotes

You will learn more about strings later in this tutorial.


__JavaScript Numbers__

JavaScript has only one type of numbers.

Numbers can be written with, or without decimals:

    let x1 = 34.00;     // Written with decimals
    let x2 = 34;        // Written without decimals 

Extra large or extra small numbers can be written with scientific (exponential) notation:

    let y = 123e5;      // 12300000
    let z = 123e-5;     // 0.00123 

You will learn more about numbers later in this tutorial.


__JavaScript Booleans__

Booleans can only have two values: _true_ or _false_.

    let x = 5;
    let y = 5;
    let z = 6;
    (x == y)       // Returns true
    (x == z)       // Returns false 

Booleans are often used in conditional testing.

You will learn more about conditional testing later in this tutorial.


__JavaScript Arrays__

JavaScript arrays are written with square brackets.

Array items are separated by commas.

The following code declares (creates) an array called _cars_, containing three items (car names):

    const cars = ["Saab", "Volvo", "BMW"];

Array indexes are zero-based, which means the first item is [0], second is [1], and so on.

You will learn more about arrays later in this tutorial.


__JavaScript Objects__

JavaScript objects are written with curly braces _{}._

Object properties are written as name:value pairs, separated by commas.

    const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

The object (person) in the example above has 4 properties: firstName, lastName, age, and eyeColor.

You will learn more about _objects_ later in this tutorial.


__The typeof Operator__

You can use the JavaScript _typeof_ operator to find the type of a JavaScript variable.

The _typeof_ operator returns the type of a variable or an expression:

    typeof ""             // Returns "string"
    typeof "John"         // Returns "string"
    typeof "John Doe"     // Returns "string" 

    typeof 0              // Returns "number"
    typeof 314            // Returns "number"
    typeof 3.14           // Returns "number"
    typeof (3)            // Returns "number"
    typeof (3 + 4)        // Returns "number" 

You will learn more about _typeof_ later in this tutorial.


Undefined

In JavaScript, a variable without a value, has the value _undefined_. The type is also _undefined_.

    let car;    // Value is undefined, type is undefined 

Any variable can be emptied, by setting the value to _undefined_. The type will also be _undefined_.

    car = undefined;    // Value is undefined, type is undefined 
    

__Empty Values__

An empty value has nothing to do with _undefined_.

An empty string has both a legal value and a type.

    let car = "";    // The value is "", the typeof is "string" 