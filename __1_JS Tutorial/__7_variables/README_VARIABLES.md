# JavaScript Variables

### 4 Ways to Declare a JavaScript Variables:

* Using `var`
* Using `let`
* Using `const`
* Using nothing

## What are Variables?

Variables are containers for storing data (storing data values).

In this example, `x`, `y`, and `z`, are variables, declared with the `var` keyword:

```javascript
var x = 5;
var y = 6;
var z = x + y;
```

In this example, `x`, `y`, and `z`, are variables, declared with the `let` keyword:

```javascript
let x = 5;
let y = 6;
let z = x + y;
```

In this example, `x`, `y`, and `z`, are undeclared variables:

```javascript
x = 5;
y = 6;
z = x + y;
```

From all the examples above, you can guess:

* x stores the value 5
* y stores the value 6
* z stores the value 11

## When to Use JavaScript var?

Always declare JavaScript variables with `var`, `let`, or `const`.

The `var` keyword is used in all JavaScript code from 1995 to 2015.

The `let` and `const` keywords were added to JavaScript in 2015.

If you want your code to run in older browsers, you must use `var`.

## When to Use JavaScript const?

If you want a general rule: always declare variables with `const`.

If you think the value of the variable can change, use `let`.

In this example, `price1`, `price2`, and `total`, are variables:

```javascript
const price1 = 5;
const price2 = 6;
let total = price1 + price2;
```

The two variables `price1` and `price2` are declared with the `const` keyword.

These are constant values and cannot be changed.

The variable `total` is declared with the `let` keyword.

This is a value that can be changed.

## Just Like Algebra

Just like in algebra, variables hold values:

```javascript
let x = 5;
let y = 6;
```

Just like in algebra, variables are used in expressions:

```javascript
let z = x + y;
```

From the example above, you can guess that the total is calculated to be 11.

### Note

> Variables are containers for storing values.

## JavaScript Identifiers

All JavaScript **variables** must be **identified** with **unique names**.

These unique names are called **identifiers**.

Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

The general rules for constructing names for variables (unique identifiers) are:

* Names can contain letters, digits, underscores, and dollar signs.
* Names must begin with a letter.
* Names can also begin with `$` and `_` (but we will not use it in this tutorial).
* Names are case sensitive (y and Y are different variables).
* Reserved words (like JavaScript keywords) cannot be used as names.

## Note

> JavaScript identifiers are case-sensitive.

## The Assignment Operator

In JavaScript, the equal sign (`=`) is an "`assignment`" operator, not an "`equal to`" operator.

This is different from algebra. The following does not make sense in algebra:

```javascript
x = x + 5;
```

In JavaScript, however, it makes perfect sense: it assigns the value of x + 5 to x.

(It calculates the value of x + 5 and puts the result into x. The value of x is incremented by 5.)

## Note

> The "`equal to`" operator is written like `==` in JavaScript.

## JavaScript Data Types

JavaScript variables can hold numbers like 100 and text values like "John Doe".

In programming, text values are called text strings.

JavaScript can handle many types of data, but for now, just think of numbers and strings.

Strings are written inside double or single quotes. Numbers are written without quotes.

If you put a number in quotes, it will be treated as a text string.

```javascript
const PI = 3.14;
let person = "John Doe";
let answer = "Yes I am!";
```

## Declaring a JavaScript Variable

Creating a variable in JavaScript is called "declaring" a variable.

You declare a JavaScript variable with the `var` or `let` keyword:

```javascript
var carName;
```

OR:

```javascript
let carName;
```

After the declaration, the variable has no value (technically it is `undefined`).

To **assign** a value to the variable, use the equal sign:

```javascript
carName = "Volvo";
```

You can also assign a value to the variable when you declare it:

```javascript
let carName = "Volvo";
```

In the example below, we create a variable called `carName` and assign the value "Volvo" to it.

Then we "output" the value inside an HTML paragraph with `id="demo"`:

```html
<p id="demo"></p>

<script>
  let carName = "Volvo";
  document.getElementById("demo").innerHTML = carName;
</script>
```

## Note

> It's a good programming practice to declare all variables at the beginning of a script.

## One Statement, Many Variables

You can declare many variables in one statement.

Start the statement with `let` and separate the variables by **comma**:

```javascript
let person = "John Doe", carName = "Volvo", price = 200;
```

A declaration can span multiple lines:

```javascript
let person = "John Doe",
  carName = "Volvo",
  price = 200;
```

## Value = undefined

In computer programs, variables are often declared without a value. The value can be something that has to be calculated, or something that will be provided later, like user input.

A variable `carName` will have the value `undefined` after the execution of this statement:

```javascript
let carName;
```

## Re-Declaring JavaScript Variables

> If you re-declare a JavaScript variable declared with `var`, it will `not lose its value`.

The variable `carName` will still have the value "Volvo" after the execution of these statements:

```javascript
var carName = "Volvo";
var carName;
```

## Note

> You cannot re-declare a variable declared with `let` or `const`.
> This will not work:

```javascript
let carName = "Volvo";
let carName;
```

## JavaScript Arithmetic

As with algebra, you can do arithmetic with JavaScript variables, using operators like `=` and `+`:

```javascript
let x = 5 + 2 + 3;
```

You can also add strings, but strings will be concatenated:

```javascript
let x = "John" + " " + "Doe";
```

Also try this:

```javascript
let x = "5" + 2 + 3;
```

## Note

> If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.

Now try this:

```javascript
let x = 2 + 3 + "5";
```

## JavaScript Dollar Sign $

Since JavaScript treats a dollar sign as a letter, identifiers containing $ are valid variable names:

```javascript
let $ = "Hello World";
let $$$ = 2;
let $myMoney = 5;
```

Using the dollar sign is not very common in JavaScript, but professional programmers often use it as an alias for the main function in a JavaScript library.

In the JavaScript library jQuery, for instance, the main function `$` is used to select HTML elements. In jQuery `$("p");` means "select all p elements".

## JavaScript Undercore (_)

Since JavaScript treats underscore as a letter, identifiers containing `_` are valid variable names:

```javascript
let _lastName = "Johnson";
let _x = 2;
let _100 = 5;
```

Using the underscore is not very common in JavaScript, but a convention among professional programmers is to use it as alias for "`private (hidden)`" variables.