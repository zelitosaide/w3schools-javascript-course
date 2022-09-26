### JavaScript Numbers

JavaScript has only one type of number. Numbers can be written with or without decimals.

    let x = 3.14;    // A number with decimals
    let y = 3;       // A number without decimals   

Extra large or extra small numbers can be written with scientific (exponent) notation:

    let x = 123e5;    // 12300000
    let y = 123e-5;   // 0.00123 

__JavaScript Numbers are Always 64-bit Floating Point__

Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.

JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard.

This format stores numbers in 64 bits, where the number (the fraction) is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63:

    Value (aka Fraction/Mantissa) 	    Exponent 	              Sign
    52 bits (0 - 51)  	                11 bits (52 - 62) 	    1 bit (63)

__Integer Precision__

Integers (numbers without a period or exponent notation) are accurate up to 15 digits.

    let x = 999999999999999;   // x will be 999999999999999
    let y = 9999999999999999;  // y will be 10000000000000000

The maximum number of decimals is 17.


__Floating Precision__

Floating point arithmetic is not always 100% accurate:

    let x = 0.2 + 0.1; // 0.30000000000000004

To solve the problem above, it helps to multiply and divide:

    let x = (0.2 * 10 + 0.1 * 10) / 10;

__Adding Numbers and Strings__

    WARNING !!

    JavaScript uses the + operator for both addition and concatenation.

    Numbers are added. Strings are concatenated.

If you add two numbers, the result will be a number:

    let x = 10;
    let y = 20;
    let z = x + y;

If you add two strings, the result will be a string concatenation:

    let x = "10";
    let y = "20";
    let z = x + y;


If you add a number and a string, the result will be a string concatenation:

    let x = 10;
    let y = "20";
    let z = x + y;

If you add a string and a number, the result will be a string concatenation:

    let x = "10";
    let y = 20;
    let z = x + y;

A common mistake is to expect this result to be 30:

    let x = 10;
    let y = 20;
    let z = "The result is: " + x + y;

A common mistake is to expect this result to be 102030:

    let x = 10;
    let y = 20;
    let z = "30";
    let result = x + y + z;


The JavaScript interpreter works from left to right.

First 10 + 20 is added because x and y are both numbers.

Then 30 + "30" is concatenated because z is a string.


__Numeric Strings__

JavaScript strings can have numeric content:

    let x = 100;         // x is a number

    let y = "100";       // y is a string

JavaScript will try to convert strings to numbers in all numeric operations:

This will work:

    let x = "100";
    let y = "10";
    let z = x / y;

This will also work:

    let x = "100";
    let y = "10";
    let z = x * y;

And this will work:

    let x = "100";
    let y = "10";
    let z = x - y;

But this will not work:

    let x = "100";
    let y = "10";
    let z = x + y;

    In the last example JavaScript uses the + operator to concatenate the strings.


__NaN - Not a Number__

_NaN_ is a JavaScript reserved word indicating that a number is not a legal number.

Trying to do arithmetic with a non-numeric string will result in _NaN_ (Not a Number):

    let x = 100 / "Apple";

However, if the string contains a numeric value , the result will be a number:

    let x = 100 / "10";

You can use the global JavaScript function _isNaN()_ to find out if a value is a not a number:

    let x = 100 / "Apple";
    isNaN(x);

Watch out for _NaN_. If you use _NaN_ in a mathematical operation, the result will also be _NaN_:

    let x = NaN;
    let y = 5;
    let z = x + y;

Or the result might be a concatenation like NaN5:

    let x = NaN;
    let y = "5";
    let z = x + y;

_NaN_ is a number: _typeof NaN_ returns _number_:

    typeof NaN;


__Infinity__

_Infinity_ (or _-Infinity_) is the value JavaScript will return if you calculate a number outside the largest possible number.

    let myNumber = 2;
    // Execute until Infinity
    while (myNumber != Infinity) {
      myNumber = myNumber * myNumber;
    }

Division by 0 (zero) also generates _Infinity_:

    let x =  2 / 0;
    let y = -2 / 0;

_Infinity_ is a number: _typeof Infinity_ returns _number_.

    typeof Infinity;


__Hexadecimal__

JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.

    let x = 0xFF;

_Never write a number with a leading zero (like 07)._
Some JavaScript versions interpret numbers as octal if they are written with a leading zero.


By default, JavaScript displays numbers as _base 10_ decimals.

But you can use the _toString()_ method to output numbers from _base 2_ to _base 36_.

Hexadecimal is _base 16_. Decimal is _base 10_. Octal is _base 8_. Binary is _base 2_.

    let myNumber = 32;
    myNumber.toString(32);
    myNumber.toString(16);
    myNumber.toString(12);
    myNumber.toString(10);
    myNumber.toString(8);
    myNumber.toString(2);


__JavaScript Numbers as Objects__

Normally JavaScript numbers are primitive values created from literals:

    let x = 123;

But numbers can also be defined as objects with the keyword _new_:

    let y = new Number(123);

    let x = 123;
    let y = new Number(123);


Do not create Number objects.

The _new_ keyword complicates the code and slows down execution speed.

Number Objects can produce unexpected results:


When using the == operator, x and y are equal:

    let x = 500;
    let y = new Number(500);

When using the === operator, x and y are not equal.

    let x = 500;
    let y = new Number(500);

Note the difference between _(x==y)_ and _(x===y)_.


_(x == y)_ true or false?

    let x = new Number(500);
    let y = new Number(500);

_(x === y)_ true or false?

    let x = new Number(500);
    let y = new Number(500);

Comparing two JavaScript objects always returns false.

9999999999999999
9999999999999999
4503599627370496
10000000000000000
