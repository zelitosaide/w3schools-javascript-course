# JavaScript Comparison and Logical Operators

Comparison and Logical operators are used to test for `true` or `false`.

## Comparison Operators

Comparison operators are used in logical statements to determine equality or difference between variables or values.

Given that `x = 5`, the table below explains the comparison operators:

| Operator | Description                       | Comparing | Returns | Try it                                                                         |
| -------- | --------------------------------- | --------- | ------- | ------------------------------------------------------------------------------ |
| `==`     | equal to                          | x == 8    | false   | [`Try it`](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison1)  |
|          |                                   | x == 5    | true    | [`Try it`](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison2)  |
|          |                                   | x == "5"  | true    | [`Try it`](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison12) |
| `===`    | equal value and equal type        | x === 5   | true    | [`Try it`](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison4)  |
|          |                                   | x === "5" | false   | [`Try it`](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison3)  |
| `!=`     | not equal                         | x != 8    | true    | [`Try it`](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison5)  |
| `!==`    | not equal value or not equal type | x !== 5   | false   | [`Try it`](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison7)  |
|          |                                   | x !== "5" | true    | [`Try it`](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison6)  |
|          |                                   | x !== 8   | true    | [`Try it`](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison13) |
| `>`      | greater than                      | x > 8     | false   | [`Try it`](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison8)  |
| `<`      | less than                         | x < 8     | true    | [`Try it`](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison9)  |
| `>=`     | greater than or equal to          | x >= 8    | false   | [`Try it`](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison10) |
| `<=`     | less than or equal to             | x <= 8    | true    | [`Try it`](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison11) |

## How Can it be Used

Comparison operators can be used in conditional statements to compare values and take action depending on the result:

```javascript
if (age < 18 >) text = "Too young to buy alcohol";
```

You will learn more about the use of conditional statements in the next chapter of this tutorial.

## Logical Operators

Logical operators are used to determine the logic between variables or values.

Given that `x = 6` and `y = 3`, the table below explains the logical operators:

| Operator | Description | Example                       | Try it                                                                           |
| -------- | ----------- | ----------------------------- | -------------------------------------------------------------------------------- |
| `&&`     | and         | (x < 10 && y > 1) is true     | [`Try it`](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison_and) |
| `\|\|`   | or          | (x == 5 \|\| y == 5) is false | [`Try it`](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison_or)  |
| `!`      | not         | !(x == y) is true             | [`Try it`](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison_not) |

## Condition (Ternary) Operator

JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.

### Syntax

```javascript
variableName = (condition) ? value1 : value2;
```

### Example

```javascript
let voteable = (age < 18) ? "Too young" : "Old enough";

// OR

let voteable = age < 18 ? "Too young" : "Old enough";
```

If the variable age is a value below 18, the value of the variable voteable will be "Too young", otherwise the value of voteable will be "Old enough".

## Comparing Different Types

Comparing data of different types may give unexpected results.

When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison. An empty string converts to 0. A non-numeric string converts to `NaN` which is always `false`.

| Case          | Value | Try                                                                               |
| ------------- | ----- | --------------------------------------------------------------------------------- |
| 2 `<` 12      | true  | [`Try it »`](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison_20) |
| 2 `<` "12"    | true  | [`Try it »`](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison_21) |
| 2 `<` "John"  | false | [`Try it »`](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison_23) |
| 2 `>` "John"  | false | [`Try it »`](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison_24) |
| 2 `==` "John" | false | [`Try it »`](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison_25) |
| "2" `<` "12"  | false | [`Try it »`](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison_26) |
| "2" `>` "12"  | true  | [`Try it »`](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison_27) |
| "2" `==` "12" | false | [`Try it »`](https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison_28) |

When comparing two strings, "2" will be greater than "12", because (alphabetically) 1 is less than 2.

To secure a proper result, variables should be converted to the proper type before comparison:

```javascript
age = Number(age);

if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}
```

## The Nullish Coalescing Operator (??)

The `??` operator returns the second argument if it is `null` or `undefined`. Otherwise it returns the first.

```javascript
let name = null;
let text = "missing";
let result = name ?? text;      // returns missing
```

## Nullish Coalescing Operator (??) vs logical OR (||) operator

```javascript
result = undefined ?? "missing";    // returns missing

result = undefined || "missing";    // returns missing

result = null ?? "missing";         // returns missing

result = null || "missing";         // returns missing

result = "" ?? "missing";           // returns ""

result = "" || "missing";           // returns missing

result = 0 ?? "missing";            // returns 0

result = 0 || "missing";            // returns missing

result = -0 ?? "missing";           // returns -0

result = -0 || "missing";           // returns missing

result = false ?? "missing";        // returns false

result = false || "missing";        // returns missing

result = NaN ?? "missing";          // returns NaN

result = NaN || "missing";          // returns missing
```

The nullish operator is supported in all browsers since March 2020:

| ![Chrome](../assets/compatible_chrome.png) | ![Edge](../assets/compatible_edge.png) | ![Firefox](../assets/compatible_firefox.png) | ![Safari](../assets/compatible_safari.png) | ![Opera](../assets/compatible_opera.png) |
| ------------------------------------------ | -------------------------------------- | -------------------------------------------- | ------------------------------------------ | ---------------------------------------- |
| Chrome 80                                  | Edge 80                                | Firefox 72                                   | Safari 13.1                                | Opera 67                                 |
| Feb 2020                                   | Feb 2020                               | Jan 2020                                     | Mar 2020                                   | Mar 2020                                 |

## The Optional Chaining Operator (?.)

The `?.` operator returns `undefined` if an object is `undefined` or `null` (instead of throwing an error).

```javascript
// Create an object:
const car = {
  type: "Fiat",
  model: "500",
  color: "white"
};

// Ask for car name:
document.getElementById("demo").innerHTML = car?.name;
```

The optional chaining operator is supported in all browsers since March 2020:

| ![Chrome](../assets/compatible_chrome.png) | ![Edge](../assets/compatible_edge.png) | ![Firefox](../assets/compatible_firefox.png) | ![Safari](../assets/compatible_safari.png) | ![Opera](../assets/compatible_opera.png) |
| ------------------------------------------ | -------------------------------------- | -------------------------------------------- | ------------------------------------------ | ---------------------------------------- |
| Chrome 80                                  | Edge 80                                | Firefox 72                                   | Safari 13.1                                | Opera 67                                 |
| Feb 2020                                   | Feb 2020                               | Jan 2020                                     | Mar 2020                                   | Mar 2020                                 |