# JavaScript if, else, and else if

Conditional statements are used to perform different actions based on different conditions.

## Conditional Statements

Very often when you write code, you want to perform different actions for different decisions.

You can use conditional statements in your code to do this.

In JavaScript we have the following conditional statements:

* Use `if` to specify a block of code to be executed, if a specified condition is true
* Use `else` to specify a block of code to be executed, if the same condition is false
* Use `else if` to specify a new condition to test, if the first condition is false
* Use `switch` to specify many alternative blocks of code to be executed

> The `switch` statement is described in the next chapter.

## The if Statement

Use the `if` statement to specify a block of JavaScript code to be executed if a condition is true.

### Syntax

```javascript
if (condition) {
  // block of code to be executed if the condition is true
}
```

> Note that `if` is in lowercase letters. Uppercase letters (If or IF) will generate a JavaScript error.

Make a "Good day" greeting if the hour is less than 18:00:

```javascript
if (hour < 18) {
  greeting = "Good day";
}
```

## The else Statement

Use the `else` statement to specify a block of code to be executed if the condition is false.

```javascript
if (condition) {
  // block of code to be executed if the condition is true
} else {
  // block of code to be executed if the condition is false
}
```

If the hour is less than 18, create a "Good day" greeting, otherwise "Good evening":

```javascript
if (hour < 18>) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```

## The else if Statement

Use the `else if` statement to specify a new condition if the first condition is false.

### Syntax

```javascript
if (condition1) {
  // block of code to be executed if condition1 is true
} else if (condition2) {
  // block of code to be executed if the condition1 is false and condition2 is true
} else {
  // bock of code to be executed if the condition1 is false and condition2 is false
}
```

If the time is less than 10:00, create a "Good morning" greeting, if not, but time is less than 20:00, create a "Good day" greeting, otherwise a "Good evening":

```javascript
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```

## More Examples

[Random Link](https://www.w3schools.com/js/tryit.asp?filename=tryjs_randomlink)

This example will write a link to either W3Schools or to the World Wildlife Foundation (WWF). By using a random number, there is a 50% chance for each of the links.

