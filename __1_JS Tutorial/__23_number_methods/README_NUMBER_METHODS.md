### JavaScript Number Methods


Number methods help you work with numbers.


__Number Methods and Properties__

Primitive values (like 3.14 or 2014), cannot have properties and methods (because they are not objects).

But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties.

__The toString() Method__

The _toString()_ method returns a number as a string.

All number methods can be used on any type of numbers (literals, variables, or expressions):

    let x = 123;
    x.toString();
    (123).toString();
    (100 + 23).toString();


__The toExponential() Method__

_toExponential()_ returns a string, with a number rounded and written using exponential notation.

A parameter defines the number of characters behind the decimal point:

    let x = 9.656;
    x.toExponential(2);
    x.toExponential(4);
    x.toExponential(6);

The parameter is optional. If you don't specify it, JavaScript will not round the number.

__The toFixed() Method__

_toFixed()_ returns a string, with the number written with a specified number of decimals:

    let x = 9.656;
    x.toFixed(0);
    x.toFixed(2);
    x.toFixed(4);
    x.toFixed(6);

_toFixed(2)_ is perfect for working with money.


__The toPrecision() Method__

_toPrecision()_ returns a string, with a number written with a specified length:

    let x = 9.656;
    x.toPrecision();
    x.toPrecision(2);
    x.toPrecision(4);
    x.toPrecision(6);


__The valueOf() Method__

_valueOf()_ returns a number as a number.

    let x = 123;
    x.valueOf();
    (123).valueOf();
    (100 + 23).valueOf();

In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object).

The _valueOf()_ method is used internally in JavaScript to convert Number objects to primitive values.

There is no reason to use it in your code.

All JavaScript data types have a _valueOf()_ and a _toString()_ method.


__Converting Variables to Numbers__

There are 3 JavaScript methods that can be used to convert variables to numbers:

    The Number() method
    The parseInt() method
    The parseFloat() method

These methods are not _number_ methods, but _global_ JavaScript methods.


__Global JavaScript Methods__

JavaScript global methods can be used on all JavaScript data types.

These are the most relevant methods, when working with numbers:

    Method 	        Description
    Number() 	      Returns a number, converted from its argument.
    parseFloat() 	  Parses its argument and returns a floating point number
    parseInt() 	    Parses its argument and returns an integer


__The Number() Method__

_Number()_ can be used to convert JavaScript variables to numbers:

    Number(true);
    Number(false);
    Number("10");
    Number("  10");
    Number("10  ");
    Number(" 10  ");
    Number("10.33");
    Number("10,33");
    Number("10 33");
    Number("John");

If the number cannot be converted, _NaN_ (Not a Number) is returned.


__The Number() Method Used on Dates__

_Number()_ can also convert a date to a number.

    Number(new Date("1970-01-01"))

The _Number()_ method returns the number of milliseconds since 1.1.1970. 

The number of milliseconds between 1970-01-02 and 1970-01-01 is 86400000:

    Number(new Date("1970-01-02"))

    Number(new Date("2017-09-30"))


__The parseInt() Method__

_parseInt()_ parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:

    parseInt("-10");
    parseInt("-10.33");
    parseInt("10");
    parseInt("10.33");
    parseInt("10 20 30");
    parseInt("10 years");
    parseInt("years 10");

If the number cannot be converted, _NaN_ (Not a Number) is returned.


__The parseFloat() Method__

_parseFloat()_ parses a string and returns a number. Spaces are allowed. Only the first number is returned:

    parseFloat("10");
    parseFloat("10.33");
    parseFloat("10 20 30");
    parseFloat("10 years");
    parseFloat("years 10");

If the number cannot be converted, _NaN_ (Not a Number) is returned.



__Number Properties__

    Property 	              Description
    MAX_VALUE 	            Returns the largest number possible in JavaScript
    MIN_VALUE 	            Returns the smallest number possible in JavaScript
    POSITIVE_INFINITY 	    Represents infinity (returned on overflow)
    NEGATIVE_INFINITY 	    Represents negative infinity (returned on overflow)
    NaN 	                  Represents a "Not-a-Number" value


__JavaScript MIN_VALUE and MAX_VALUE__

__MAX_VALUE__ returns the largest possible number in JavaScript.

    let x = Number.MAX_VALUE;

__MIN_VALUE__ returns the lowest possible number in JavaScript.

    let x = Number.MIN_VALUE;


__JavaScript POSITIVE_INFINITY__

    let x = Number.POSITIVE_INFINITY;

POSITIVE_INFINITY is returned on overflow:

    let x = 1 / 0;


__JavaScript NEGATIVE_INFINITY__

    let x = Number.NEGATIVE_INFINITY;

NEGATIVE_INFINITY is returned on overflow:

    let x = -1 / 0;


__JavaScript NaN - Not a Number__

    let x = Number.NaN;

_NaN_ is a JavaScript reserved word indicating that a number is not a legal number.

Trying to do arithmetic with a non-numeric string will result in _NaN_ (Not a Number):

    let x = 100 / "Apple";

__Number Properties Cannot be Used on Variables__

Number properties belongs to the JavaScript's number object wrapper called _Number_.

These properties can only be accessed as __Number.MAX_VALUE__.

Using myNumber.MAX_VALUE, where myNumber is a variable, expression, or value, will return _undefined_:

    let x = 6;
    x.MAX_VALUE 