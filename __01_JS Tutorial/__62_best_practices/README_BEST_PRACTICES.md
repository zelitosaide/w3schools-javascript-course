# JavaScript Best Practices

Avoid global variables, avoid `new`, avoid `==`, avoid `eval()`

## Avoid Global Variables

Minimize the use of global variables.

This includes all data types, objects, and functions.

Global variables and functions can be overwritten by other scripts.

Use local variables instead, and learn how to use [closures](https://www.w3schools.com/js/js_function_closures.asp).

## Always Declare Local Variables

All variables used in a function should be declared as **local** variables.

Local variables **must** be declared with the `var`, the `let`, or the `const` keyword, otherwise they will become global variables.

> Strict mode does not allow undeclared variables.