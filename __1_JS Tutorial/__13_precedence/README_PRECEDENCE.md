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

| Val | Operator | Description                                                                                         | Example                  |
| --- | -------- | --------------------------------------------------------------------------------------------------- | ------------------------ |
| 18  | `( )`    | [Expression Grouping](https://www.w3schools.com/js/tryit.asp?filename=tryjs_arithmetic_precedence2) | (100 + 50) * 3           |
| 17  | `.`      | [Member Of](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_member_of)                   | person.name              |
| 17  | `[]`     | [Member Of](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_member_of2)                  | person["name"]           |
| 17  | `?.`     | [Optional Chaining](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_optional_chaining)   | person?.name             |
| 17  | `()`     | [Function Call](https://www.w3schools.com/js/tryit.asp?filename=tryjs_functions)                    | myFunction()             |
| 17  | `new`    | [New with Arguments](https://www.w3schools.com/js/tryit.asp?filename=tryjs_date_new_arguments)      | new Date("June 5, 2022") |
| 16  | `new`    | [New without Arguments](https://www.w3schools.com/js/tryit.asp?filename=tryjs_date_current)         | new Date()               |

### Increment Operators

Posfix increments are executed **After** prefix increments

| Val | Operator | Description                                                                           | Example |
| --- | -------- | ------------------------------------------------------------------------------------- | ------- |
| 15  | `++`     | [Postfix Increment](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_incr2) | i++     |
| 15  | `--`     | [Postfix Decrement](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_decr2) | i--     |
| 14  | `++`     | [Prefix Increment](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_incr)   | ++i     |
| 14  | `--`     | [Prefix Decrement](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_decr)   | --i     |

### NOT Operators

| Val | Operator | Description                                                                      | Example   |
| --- | -------- | -------------------------------------------------------------------------------- | --------- |
| 14  | `!`      | [Logical NOT](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_not)    | !(x == y) |
| 14  | `~`      | [Bitwise NOT](https://www.w3schools.com/js/tryit.asp?filename=tryjs_bitwise_not) | ~x        |

### Unary Operators

| Val | Operator | Description                                                                           | Example            |
| --- | -------- | ------------------------------------------------------------------------------------- | ------------------ |
| 14  | `+`      | [Unary Plus](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_unary_plus)   | +x                 |
| 14  | `-`      | [Unary Minus](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_unary_minus) | -x                 |
| 14  | `typeof` | [Data Type](https://www.w3schools.com/js/tryit.asp?filename=tryjs_typeof_all)         | typeof x           |
| 14  | `void`   | [Evaluate Void](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_void)      | void(0)            |
| 14  | `delete` | [Property Delete](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_delete)  | delete myCar.color |

### Arithmetic Operators

Exponentiations are executed **before** multiplications

Multiplications and divisions are executed **before** additions and subtractions

| Val | Operator | Description                                                                                          | Example        |
| --- | -------- | ---------------------------------------------------------------------------------------------------- | -------------- |
| 13  | `**`     | [Exponentiation ES2016](https://www.w3schools.com/js/tryit.asp?filename=tryjs_arithmetric_exponent1) | 10 ** 2        |
| 12  | `*`      | [Multiplication](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_mult)                    | 10 * 5         |
| 12  | `/`      | [Division](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_div)                           | 10 / 5         |
| 12  | `%`      | [Division Remainder](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_mod)                 | 10 % 5         |
| 11  | `+`      | [Addition](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_add)                           | 10 + 5         |
| 11  | `-`      | [Subtration](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_sub)                         | 10 - 5         |
| 11  | `+`      | [Concatenation](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_concatenate)              | "John" + "Doe" |

### Shift Operators

| Val | Operator | Description                                                                                      | Example |
| --- | -------- | ------------------------------------------------------------------------------------------------ | ------- |
| 10  | `<<`     | [Shift Left](https://www.w3schools.com/js/tryit.asp?filename=tryjs_bitwise_left)                 | x << 2  |
| 10  | `>>`     | [Shift Right (signed)](https://www.w3schools.com/js/tryit.asp?filename=tryjs_bitwise_right_sign) | x >> 2  |
| 10  | `>>>`    | [Shift Right (unsigned)](https://www.w3schools.com/js/tryit.asp?filename=tryjs_bitwise_right)    | x >>> 2 |


### Relational Operators

| Val | Operator     | Description                                                                                 | Example            |
| --- | ------------ | ------------------------------------------------------------------------------------------- | ------------------ |
| 9   | `in`         | [Property in Object](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_in)         | "PI" in Math       |
| 9   | `instanceof` | [Instance of Object](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_instanceof) | x instanceof Array |

### Comparison Operators

| Val | Operator | Description                                                                                 | Example |
| --- | -------- | ------------------------------------------------------------------------------------------- | ------- |
| 9   | `<`      | [Less than](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison9)              | x < y   |
| 9   | `<=`     | [Less than or equal](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison11)    | x <= y  |
| 9   | `>`      | [Greater than](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison8)           | x > y   |
| 9   | `>=`     | [Greater than or equal](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison10) | x >= y  |
| 8   | `==`     | [Equal](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison1)                  | x == y  |
| 8   | `===`    | [Strict equal](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison4)           | x === y |
| 8   | `!=`     | [Unequal](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison5)                | x != y  |
| 8   | `!==`    | [Strict Unequal](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison6)         | x !== y |

### Bitwise Operators

| Val | Operator | Description                                                                      | Example |
| --- | -------- | -------------------------------------------------------------------------------- | ------- |
| 7   | `&`      | [Bitwise AND](https://www.w3schools.com/js/tryit.asp?filename=tryjs_bitwise_and) | x & y   |
| 6   | `^`      | [Bitwise XOR](https://www.w3schools.com/js/tryit.asp?filename=tryjs_bitwise_xor) | x ^ y   |
| 5   | `\|`     | [Bitwise OR](https://www.w3schools.com/js/tryit.asp?filename=tryjs_bitwise_or)   | x \| y  |

### Logical Operators

| Val | Operator | Description                                                                                | Example  |
| --- | -------- | ------------------------------------------------------------------------------------------ | -------- |
| 4   | `&&`     | [Logical AND](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison_and)        | x && y   |
| 3   | `\|\|`   | [Logical OR](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison_or)          | x \|\| y |
| 3   | `??`     | [Nullish Coalescing ES2020](https://www.w3schools.com/js/tryit.asp?filename=tryjs_nullish) | x ?? y   |

### Conditional (ternary) Operator

| Val | Operator | Description                                                                   | Example        |
| --- | -------- | ----------------------------------------------------------------------------- | -------------- |
| 2   | `?.`     | [Condition](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison) | ? "yes" : "no" |

### Assignment Operators

Assignments are executed **after** other operations

| Val | Operator | Description                                                                                               | Example   |
| --- | -------- | --------------------------------------------------------------------------------------------------------- | --------- |
| 2   | `=`      | [Simple Assignment](https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_equal)                   | x = y     |
| 2   | `:`      | [Colon Assignment](https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_colon)                    | x: 5      |
| 2   | `+=`     | [Addition Assignment](https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_plusequal)             | x += y    |
| 2   | `-=`     | [Subtraction Assignment](https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_minequal)           | x -= y    |
| 2   | `*=`     | [Multiplication Assignment](https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_multequal)       | x *= y    |
| 2   | `**=`    | [Exponentiation Assignment](https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_exponential)     | x **= y   |
| 2   | `/=`     | [Division Assignment](https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_divequal)              | x /= y    |
| 2   | `%=`     | [Remainder Assignment](https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_modequal)             | x %= y    |
| 2   | `<<=`    | [Left Shift Assignment](https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_left_shift)          | x <<= y   |
| 2   | `>>=`    | [Right Shift Assignment](https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_right_shift)        | x >>= y   |
| 2   | `>>>=`   | [Unsigned Right Shift](https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_unsigned_right_shift) | x >>>= y  |
| 2   | `&=`     | [Bitwise AND Assignment](https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_bitwise_and)        | x &= y    |
| 2   | `\|=`    | [Bitwise OR Assignment](https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_bitwise_or)          | x \|= y   |
| 2   | `^=`     | [Bitwise XOR Assignment](https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_bitwise_xor)        | x ^= y    |
| 2   | `&&=`    | [Logical AND Assignment](https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_logical_and)        | x &&= y   |
| 2   | `\|\|=`  | [Logical OR Assignment](https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_logical_or)          | x \|\|= y |
| 2   | `=>`     | [Arrow](https://www.w3schools.com/js/tryit.asp?filename=tryjs_arrow_function4)                            | x => y    |
| 2   | `yield`  | Pause / Resume                                                                                            | yield x   |
| 2   | `yield*` | Delegate                                                                                                  | yield* x  |
| 2   | `...`    | Spreed                                                                                                    | ... x     |
| 1   | `,`      | Comma                                                                                                     | x, y      |