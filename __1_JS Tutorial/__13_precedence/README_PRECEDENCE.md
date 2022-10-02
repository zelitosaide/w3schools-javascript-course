# JavaScript Operator Precedence

Operator precedence describes the order in which operations are performed in an arithmetic expression.

Multiplication (`*`) and division (`/`) have higher **precedence** than addition (`+`) and subtraction (`-`).

As in traditional mathematics, multiplication is done first:

```javascript
let x = 100 + 50 * 3;
```

As in traditional mathematics, the precedence can be changed by parentheses:

```javascript
let x = (100 + 50) * 3;
```

When using parentheses, the operations inside the parentheses are computed first.

When many operations have the same precedence (like addition and subtraction), they are computed from left to right: 

```javascript
let x = 100 + 50 - 3;
```

## JavaScript Operator Precedence Values

### Operator Precedence

> Expressions in parentheses are computed **before** the rest of the expression
> Function are executed **before** the result is used in the rest of the expression 

| Val | Operator | Description                                                                                         | Example        |
| --- | -------- | --------------------------------------------------------------------------------------------------- | -------------- |
| 18  | `()`     | [Expression Grouping](https://www.w3schools.com/js/tryit.asp?filename=tryjs_arithmetic_precedence2) | (100 + 50) * 3 |
| 17  | `.`      | [Member Of](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_member_of)                   | person.name    |