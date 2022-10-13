# JavaScript Booleans

A JavaScript Boolean represents one of two values: **true** or **false**.

## Boolean Values

Very often, in programming, you will need a data type that can only have one of two values, like:

* YES / NO
* ON / OFF
* TRUE / FALSE

For this, JavaScript has a **Boolean** data type. It can only take the values **true** or **false**.

## The Boolean() Function

You can use the `Boolean()` function to find out if an expression (or a variable) is true:

```javascript
Boolean(10 > 9);        // returns true
```

Or even easier:

```javascript
(10 > 9);               // returns true

10 > 9;                 // returns true
```

## Comparisons and Conditions

The chapter JS Comparisons gives a full overview of comparison operators.

The chapter JS Conditions gives a full overview of conditional statements.

Here are some examples:

| Operator | Description  | Example              |
| -------- | ------------ | -------------------- |
| `==`     | equal to     | if (day == "Monday") |
| `>`      | greater than | if (salary > 9000)   |
| `<`      | less than    | if (age < 18)        |

> The Boolean value of an expression is the basis for all JavaScript comparisons and conditions.

## Everything With a "Value" is True

```javascript
Boolean(100);               // returns true

Boolean(3.14);              // returns true

Boolean(-15);               // returns true

Boolean("Hello");           // returns true

Boolean("false");           // returns true

Boolean("  ");              // returns true

Boolean(7 + 1 + 3.14);      // returns true

Boolean({});                // returns true

Boolean([]);                // returns true
```

## Everything Without a "Value" is false

The Boolean value of **0** (zero) is **false**:

```javascript
let x = 0;
Boolean(x);                 // returns false
```

The Boolean value of **-0** (minus zero) is **false**:

```javascript
let x = -0;
Boolean(x);                 // returns false
```

The Boolean value of **""** (empty string) is **false**:

```javascript
let x = "";
Boolean(x);                 // returns false
```

The Boolean value of **undefined** is **false**:

```javascript
let x;
Boolean(x);                 // returns false
```

The Boolean value of **null** is **false**:

```javascript
let x = null;
Boolean(x);                 // returns false
```

The Boolean value of **false** is (you guessed it) **false**:

```javascript
let x = false;
Boolean(x);                 // returns false
```

The Boolean value of **NaN** is **false**:

```javascript
let x = 10 / "Hello";
Boolean(x);                 // returns false
```

## JavaScript Booleans as Objects

Normally JavaScript booleans are primitive values created from literals:

```javascript
let x = false;
```

But booleans can also be defined as objects with the keyword `new`:

```javascript
let y = new Boolean(false);
```

### Example

```javascript
let x = false;
let y = new Boolean(false);

typeof x;       // returns boolean
typeof y;       // returns object
```

> Do not create Boolean objects.
> The `new` keyword complicates the code and slows down execution speed.
> Boolean objects can produce unexpected results:

When using the `==` operator, x and y are **equal:**

```javascript
let x = false;
let y = new Boolean(false);

Boolean(x == y);      // returns true
```

When using the `===` operator, x and y are **not equal:**

```javascript
let x = false;
let y = new Boolean(false);

Boolean(x === y);     // returns false
```

> Note the difference between (x == y) and (x === y).

`(x == y)` true or false?

```javascript
let x = new Boolean(false);
let y = new Boolean(false);

Boolean(x == y);      // returns false
```

`(x === y)` true or false?

```javascript
let x = new Boolean(false);
let y = new Boolean(false);

Boolean(x === y);     // returns false
```

> Comparing two JavaScript objects **always** return **false**.

## Complete Boolean Reference

For a complete reference, go to our [Complete JavaScript Boolean Reference](https://www.w3schools.com/jsref/jsref_obj_boolean.asp).

The reference contains descriptions and examples of all Boolean properties and methods.