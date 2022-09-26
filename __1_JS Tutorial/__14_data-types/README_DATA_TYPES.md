# JavaScript Data Types

JavaScript variables can hold different data types: numbers, strings, objects and more:

```javascript
let length = 16;                               // Number
let lastName = "Johnson";                      // String
let x = {firstName:"John", lastName:"Doe"};    // Object 
```

## The Concept of Data Types

In programming, data types is an important concept.

To be able to operate on variables, it is important to know something about the type.

Without data types, a computer cannot safely solve this:

```javascript
let x = 16 + "Volvo"; 
```

Does it make any sense to add "Volvo" to sixteen? Will it produce an error or will it produce a result?

JavaScript will treat the example above as:

```javascript
let x = "16" + "Volvo"; 
```

> When adding a number and a string, JavaScript will treat the number as a string.

```javascript
let x = 16 + "Volvo"; 
```

```javascript
let x = "Volvo" + 16; 
```

JavaScript evaluates expressions from left to right. Different sequences can produce different results:

```javascript
let x = 16 + 4 + "Volvo";

// Result: 20Volvo
```

```javascript
let x = "Volvo" + 16 + 4;

// Result: Volvo164
```

In the first example, JavaScript treats 16 and 4 as numbers, until it reaches "Volvo".

In the second example, since the first operand is a string, all operands are treated as strings.

## JavaScript Types are Dynamic

JavaScript has dynamic types. This means that the same variable can be used to hold different data types:

```javascript
let x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String 
```

## JavaScript Strings

A string (or a text string) is a series of characters like "John Doe".

Strings are written with quotes. You can use single or double quotes:

```javascript
let carName1 = "Volvo XC60";   // Using double quotes
let carName2 = 'Volvo XC60';   // Using single quotes 
```

You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

```javascript
let answer1 = "It's alright";             // Single quote inside double quotes
let answer2 = "He is called 'Johnny'";    // Single quotes inside double quotes
let answer3 = 'He is called "Johnny"';    // Double quotes inside single quotes 
```

You will learn more about strings later in this tutorial.

## JavaScript Numbers

JavaScript has only one type of numbers.

Numbers can be written with, or without decimals:

```javascript
let x1 = 34.00;     // Written with decimals
let x2 = 34;        // Written without decimals 
```

Extra large or extra small numbers can be written with scientific (exponential) notation:

```javascript
let y = 123e5;      // 12300000
let z = 123e-5;     // 0.00123 
```

You will learn more about numbers later in this tutorial.

## JavaScript Booleans

Booleans can only have two values: `true` or `false`.

```javascript
let x = 5;
let y = 5;
let z = 6;
(x == y)       // Returns true
(x == z)       // Returns false 
```

Booleans are often used in conditional testing.

You will learn more about conditional testing later in this tutorial.

## JavaScript Arrays

JavaScript arrays are written with square brackets.

Array items are separated by commas.

The following code declares (creates) an array called `cars`, containing three items (car names):

```javascript
const cars = ["Saab", "Volvo", "BMW"];
```

Array indexes are zero-based, which means the first item is [0], second is [1], and so on.

You will learn more about **arrays** later in this tutorial.

## JavaScript Objects

JavaScript objects are written with curly braces `{}`.

Object properties are written as name:value pairs, separated by commas.

```javascript
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
```

The object (person) in the example above has 4 properties: firstName, lastName, age, and eyeColor.

> You will learn more about **objects** later in this tutorial.

## The typeof Operator

You can use the JavaScript `typeof` operator to find the type of a JavaScript variable.

The `typeof` operator returns the type of a variable or an expression:

```javascript
typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof "John Doe"     // Returns "string" 
```

```javascript
typeof 0              // Returns "number"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"
typeof (3 + 4)        // Returns "number" 
```

> You will learn more about **typeof** later in this tutorial.

## Undefined

In JavaScript, a variable without a value, has the value `undefined`. The type is also `undefined`.

```javascript
let car;    // Value is undefined, type is undefined 
```

Any variable can be emptied, by setting the value to `undefined`. The type will also be `undefined`.

```javascript
car = undefined;    // Value is undefined, type is undefined 
```

## Empty Values

An empty value has nothing to do with `undefined`.

An empty string has both a legal value and a type.

```javascript
let car = "";    // The value is "", the typeof is "string" 
```