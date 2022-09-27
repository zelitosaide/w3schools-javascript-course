# JavaScript Arithmetic

## JavaScript Arithmetic Operators

Arithmetic operators perform arithmetic on numbers (literals or variables).

| Operator | Description                                                         |
| -------- | ------------------------------------------------------------------- |
| `+`      | Addition                                                            |
| `-`      | Subtraction                                                         |
| `*`      | Multiplication                                                      |
| `**`     | Exponentiation ([ES2016](https://www.w3schools.com/js/js_2016.asp)) |
| `/`      | Division                                                            |
| `%`      | Modulus (Remainder)                                                 |
| `++`     | Increment                                                           |
| `--`     | Decrement                                                           |

## Arithmetic Operations

A typical arithmetic operation operates on two numbers.

The two numbers can be literals:

```javascript
let x = 100 + 50;
```

or variables:

```javascript
let x = a + b;
```

or expressions:

```javascript
let x = (100 + 50) * a;
```

## Operators and Operands

The numbers (in an arithmetic operation) are called **operands**.

The operation (to be performed between the two operands) is defined by an **operator**.

| Operand | Operator | Operand |
| ------- | -------- | ------- |
| 100     | +        | 50      |

## Adding

The **addition** operator (`+`) adds numbers:

```javascript
let x = 5;
let y = 2;
let z = x + y;
```

## Subtracting

The **subtraction** operator (`-`) subtracts numbers.

```javascript
let x = 5;
let y = 2;
let z = x - y;
```

## Multiplying

The **multiplication** operator (`*`) multiplies numbers.

```javascript
let x = 5;
let y = 2;
let z = x * y;
```

## Dividing

The **division** operator (`/`) divides numbers.

```javascript
let x = 5;
let y = 2;
let z = x / y;
```

## Remainder

The **modulus** operator (`%`) returns the division remainder.

```javascript
let x = 5;
let y = 2;
let z = x % y;
```

> In arithmetic, the division of two integers produces a **quotient** and a **remainder**.
> In mathematics, the result of a **modulo operation** is the **remainder** of an arithmetic division.

## Incrementing

The **increment** operator (`++`) increments numbers.

```javascript
let x = 5;
x++;
let z = x;
```

## Decrementing

The **decrement** operator (`--`) decrements numbers.

```javascript
let x = 5;
x--;
let z = x;
```

## Exponentiation

The **exponentiation** operator (`**`) raises the first operand to the power of the second operand.

```javascript
let x = 5;
let z = x ** 2;
```

`x ** y` produces the same result as `Math.pow(x, y)`:

```javascript
let x = 5;
let z = Math.pow(x, 2);
```

## Operator Procedence

Operator procedence describes the order in which operations are performed