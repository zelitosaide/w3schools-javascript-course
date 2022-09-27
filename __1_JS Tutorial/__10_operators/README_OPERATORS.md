# JavaScript Operators

Assign values to variables and add them together:

```javascript
let x = 5;          // assign the value 5 to x
let y = 2;          // assign the value 5 to y
let z = x + y;      // assign the value 7 to z (5 + 2)
```

The **assignment** operator (`=`) assigns a value to a variable.

### Assignment

```javascript
let x = 10;
```

The **addition** operator (`+`) adds numbers:

### Adding

```javascript
let x = 5;
let y = 2;
let z = x + y;
```

The **multiplication** operator (`*`) multiplies numbers:

### Multiplying

```javascript
let x = 5;
let y = 2;
let z = x * y;
```

## Types of JavaScript Operators

There are different types of JavaScript operators:

* Arithmetic Operators
* Assignment Operators
* Comparison Operators
* Logical Operators
* Conditional Operators
* Type Operators

## JavaScript Arithmetic Operators

Arithmetic operators are used to perform arithmetic on numbers:

| Operator | Description                                                         |
| -------- | ------------------------------------------------------------------- |
| `+`      | Addition                                                            |
| `-`      | Subtraction                                                         |
| `*`      | Multiplication                                                      |
| `**`     | Exponentiation ([ES2016](https://www.w3schools.com/js/js_2016.asp)) |
| `/`      | Division                                                            |
| `%`      | Modulus (Division Remainder)                                        |
| `++`     | Increment                                                           |
| `--`     | Decrement                                                           |

> Arithmetic operators are fully described in the [**JS Arithmetic**](https://www.w3schools.com/js/js_arithmetic.asp) chapter.

## JavaScript Assignment Operators

Assignment operators assign values to JavaScript variables.

| Operator | Example | Same As    |
| -------- | ------- | ---------- |
| `=`      | x = y   | x = y      |
| `+=`     | x += y  | x = x + y  |
| `-=`     | x -= y  | x = x - y  |
| `*=`     | x *= y  | x = x * y  |
| `/=`     | x /= y  | x = x / y  |
| `%=`     | x %= y  | x = x % y  |
| `**=`    | x **= y | x = x ** y |

The **addition assignment** operator (`+=`) adds a value to a variable.

```javascript
let x = 10;
x += 5;
```

> Assignment operators are fully described in the [**JS Assignment**](https://www.w3schools.com/js/js_assignment.asp) chapter.

## Adding Javascript Strings

The `+` operator can also be used to add (concatenate) strings.

```javascript
let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;      // The result of text3 is: John Doe
```

The `+=` assignment operator can also be used to add (concatenate) strings:

```javascript
let text1 = "What a very ";
text1 += "nice day";                  // The result of text1 is: What a very nice day
```

> When used on strings, the `+` operator is called the `concatenation operator`.

## Adding Strings and Numbers

Adding two numbers, will return the sum, but adding a number and a string will return a string:

```javascript
let x = 5 + 5;                // The result will be: 10
let y = "5" + 5;              // The result will be: 55
let z = "Hello" + 5;          // The result will be: Hello5
```

> If you add a number and a string, the result will be a string!

## JavaScript Comparison Operators

| Operator | Description                        |
| -------- | ---------------------------------- |
| `==`     | equal to                           |
| `===`    | equal value and equal type         |
| `!=`     | not equal                          |
| `!==`    | not equal value and not equal type |
| `>`      | greater than                       |
| `<`      | less than                          |
| `>=`     | greater than or equal to           |
| `<=`     | less than or equal to              |
| `?`      | ternary operator                   |

> Comparison operators are fully described in the [JS Comparisons](https://www.w3schools.com/js/js_comparisons.asp) chapter.

## JavaScript Logical Operators

| Operator | Description |
| -------- | ----------- |
| `&&`     | logical and |
| `\|\|`   | logical or  |
| `!`      | logical not |