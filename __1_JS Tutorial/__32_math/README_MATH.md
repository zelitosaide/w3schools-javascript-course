# JavaScript Math Object

The JavaScript Math object allows you to perform mathematical tasks on numbers.

```javascript
Math.PI;
```

## The Math Object

Unlike other objects, the Math object has no constructor.

The Math object is static.

All methods and properties can be used without creating a Math object first.

## Math Properties (Constants)

The syntax for any Math property is: `Math.property`.

JavaScript provides 8 mathematical constants that can be accessed as Math properties:

```javascript
Math.E          // returns Euler's number
Math.PI         // returns PI
Math.SQRT2      // returns the square root of 2
Math.SQRT1_2    // returns the square root of 1/2
Math.LN2        // returns the natural logarithm of 2
Math.LN10       // returns the natural logarithm of 10
Math.LOG2E      // returns base 2 logarithm of E
Math.LOG10E     // returns base 10 logarithm of E
```

## Math Methods

The syntax for Math any methods is: `Math.method(number)`

## Number to Integer

There are 4 common methods to round a number to an integer:

|                 |                                                                                         |
| --------------- | --------------------------------------------------------------------------------------- |
| `Math.round(x)` | Returns `x` rounded to its nearest integer                                              |
| `Math.ceil(x)`  | Returns `x` rounded up to its nearest integer                                           |
| `Math.floor(x)` | Returns `x` rounded down to its nearest integer                                         |
| `Math.trunc(x)` | Returns the integer part of `x` ([new in ES6](https://www.w3schools.com/js/js_es6.asp)) |

## Math.round()

`Math.round(x)` returns the nearest integer:

```javascript
Math.round(4.6);    // returns 5

Math.round(4.5);    // returns 5

Math.round(4.4);    // returns 4
```

## Math.ceil()

`Math.ceil(x)` returns the value of x rounded **up** to its nearest integer:

```javascript
Math.ceil(4.9);     // returns 5

Math.ceil(4.7);     // returns 5

Math.ceil(4.4);     // returns 5

Math.ceil(4.2);     // returns 5

Math.ceil(-4.2);    // returns -4
```

## Math.floor()

`Math.floor(x)` returns the value of x rounded **down** to its nearest integer:

```javascript
Math.floor(4.9);    // returns 4

Math.floor(4.7);    // returns 4

Math.floor(4.4);    // returns 4

Math.floor(4.2);    // returns 4

Math.floor(-4.2);   // returns -5
```

## Math.trunc()

`Math.trunc(x)` retuns the integer part of x:

```javascript
Math.trunc(4.9);    // returns 4

Math.trunc(4.7);    // returns 4

Math.trunc(4.4);    // returns 4

Math.trunc(4.2);    // returns 4

Math.trunc(-4.2);   // returns -4
```

## Math.sign()

`Math.sign(x)` returns `-1` if x is negative, `0` if x is zero or null or false, `1` if x is positive or true, `NaN` is x is undefined or a none empty string:

```javascript
Math.sign(-4);          // returns -1

Math.sign(0);           // returns 0

Math.sign(4);           // returns 1

Math.sign(true);        // returns 1

Math.sign(false);       // returns 0

Math.sign(null);        // returns 0

Math.sign("  ");        // returns 0

Math.sign(undefined);   // returns NaN

Math.sign("John");      // returns NaN
```

> `Math.trunc()` and `Math.sign()` were added to [JavaScript 2015 - ES6](https://www.w3schools.com/js/js_es6.asp).

## Math.pow()

`Math.pow(x, y)` returns the value of x to the power of y:

```javascript
Math.pow(8, 2);         // returns 64
```

## Math.sqrt()

`Math.sqrt(x)` returns the square root of x:

```javascript
Math.sqrt(64);          // returns 8
```

## Math.abs()

`Math.abs(x)` returns the absolute (positive) value of x:

```javascript
Math.abs(-4.7);         // returns 4.7
```

## Math.sin()

`Math.sin(x)` returns the sine (a value between -1 and 1) of the angle x (given in radians).

If you want to use degrees instead of radians, you have to convert degrees to radians:

Angle in radians = Angle in degrees * PI / 180.

```javascript
Math.sin(90 * Math.PI / 180);   // returns 1 (the sine of 90 degrees)
```

## Math.cos()

`Math.cos(x)` returns the cosine (a value between -1 and 1) of angle x (given in radians).

If you want to use degrees instead of radians, you have to convert degrees to radians:

Angle in radians = Angle in degrees * PI / 180.

```javascript
Math.cos(0 * Math.PI / 180);    // returns 1 (the cosine of 0 degrees)
```

## Math.min() and Math.max()

`Math.min()` and `Math.max()` can be used to find the lowest or highest value in a list of arguments:

```javascript
Math.min(0, 150, 30, 20, -8, -200);   // returns -200

Math.max(0, 150, 30, 20, -8, -200);   // returns 150
```

## Math.random()

`Math.random()` returns a random number between 0 (inclusive), and 1 (exclusive):

```javascript
Math.random();
```

> You will learn more about `Math.random()` in the next chapter of this tutorial.

## The Math.log() Method

`Math.log(x)` returns the natural logarithm of x.

The natural logarithm returns the time needed to reach a certain level of growth:

```javascript
Math.log(Math.E);         // returns 1

Math.log(1);              // returns 0

Math.log(2);              // returns 0.6931471805599453 

Math.log(3);              // returns 1.0986122886681096

Math.log(0);              // returns -Infinity

Math.log(-1);             // returns NaN
```

`Math.E` and `Math.log()` are twins.

How many times must we multiply Math.E to get 10?

```javascript
Math.log(10);
```

## The Math.log2() Method

`Math.log2(x)` returns the base 2 logarithm of x.

How many times must we multiply 2 to get 8?

```javascript
Math.log2(8);             // returns 3
```

## The Math.log10() Method

`Math.log10(x)` returns the base 10 logarithm of x.

How many times must we multiply 10 to get 1000?

```javascript
Math.log10(1000);         // returns 3
```

## JavaScript Math Methods

| Method                 | Description                                                                   |
| ---------------------- | ----------------------------------------------------------------------------- |
| [`abs(x)`](https://www.w3schools.com/jsref/jsref_abs.asp)               | Returns the absolute value of x                                               |
| [`acos(x)`](https://www.w3schools.com/jsref/jsref_acos.asp)             | Returns the arccosine of x, in readians                                       |
| [`acosh(x)`](https://www.w3schools.com/jsref/jsref_acosh.asp)            | Returns the hyperbolic arccosine of x                                         |
| [`asin(x)`](https://www.w3schools.com/jsref/jsref_asin.asp)             | Returns the arcsine of x, in radians                                          |
| [`asinh(x)`](https://www.w3schools.com/jsref/jsref_asinh.asp)             | Returns the hyperbolic arcsine of x                                           |
| [`atan(x)`](https://www.w3schools.com/jsref/jsref_atan.asp)              | Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians |
| [`atan2(y, x)`](https://www.w3schools.com/jsref/jsref_atan2.asp)          | Returns the arctangent of the quotient of its arguments                       |
| [`atanh(x)`](https://www.w3schools.com/jsref/jsref_atanh.asp)             | Returns the hyperbolic arctangent of x                                        |
| [`cbrt(x)`](https://www.w3schools.com/jsref/jsref_cbrt.asp)              | Returns the cubic root of x                                                   |
| [`ceil(x)`](https://www.w3schools.com/jsref/jsref_ceil.asp)              | Returns x, rounded upwards to the nearest integer                             |
| [`cos(x)`](https://www.w3schools.com/jsref/jsref_cos.asp)               | Returns the cosine of x (x is in radians)                                     |
| [`cosh(x)`](https://www.w3schools.com/jsref/jsref_cosh.asp)              | Returns the hyperbolic cosine of x                                            |
| [`exp(x)`](https://www.w3schools.com/jsref/jsref_exp.asp)               | Returns the value of `Math.pow(Math.E, x)`                                    |
| [`floor(x)`](https://www.w3schools.com/jsref/jsref_floor.asp)             | Returns x, rounded downwards to the nearest integer                           |
| [`log(x)`](https://www.w3schools.com/jsref/jsref_log.asp)               | Returns the natural logarithm (base E) of x                                   |
| [`max(x, y, z, ..., n)`](https://www.w3schools.com/jsref/jsref_max.asp) | Returns the number with the highest value                                     |
| [`min(x, y, z, ..., n)`](https://www.w3schools.com/jsref/jsref_min.asp) | Returns the number with the lowest value                                      |
| [`pow(x, y)`](https://www.w3schools.com/jsref/jsref_pow.asp)            | Returns the value of x to the power of y                                      |
| [`random()`](https://www.w3schools.com/jsref/jsref_random.asp)             | Returns a random number between 0 and 1 (1 exclusive)                         |
| [`round(x)`](https://www.w3schools.com/jsref/jsref_round.asp)             | Rounds x to the nearest integer                                               |
| [`sign(x)`](https://www.w3schools.com/jsref/jsref_sign.asp)              | Returns if x is negative, null or positive (-1, 0, 1)                         |
| [`sin(x)`](https://www.w3schools.com/jsref/jsref_sin.asp)               | Returns the sine of x (x is in radians)                                       |
| [`sinh(x)`](https://www.w3schools.com/jsref/jsref_sinh.asp)              | Returns the hyperbolic sine of x                                              |
| [`sqrt(x)`](https://www.w3schools.com/jsref/jsref_sqrt.asp)              | Returns the square root of x                                                  |
| [`tan(x)`](https://www.w3schools.com/jsref/jsref_tan.asp)               | Returns the tangent of an angle                                               |
| [`tanh(x)`](https://www.w3schools.com/jsref/jsref_tanh.asp)              | Returns the hyperbolic tangent of a number                                    |
| [`trunc(x)`](https://www.w3schools.com/jsref/jsref_trunc.asp)             | Returns the integer part of a number (x)                                      |

## Complete Math Reference

> For a complete reference, go to our [Complete Math Object Reference](https://www.w3schools.com/jsref/jsref_obj_math.asp).
> The reference contains descriptions and examples of all Math properties and Methods.


