# JavaScript Use Strict

`"use strict";` Defines that JavaScript code should be executed in "strict mode".

## The "use strict" Directive

The `"use strict"` directive was new in ECMAScript version 5.

It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.

The purpose of `"use strict"` is to indicate that the code should be executed in "strict mode".

With strict mode, you can not, for example, use undeclared variables.

All modern browsers support "use strict" except Internet Explorer 9 and lower:

| Directive    | ![Chrome](../assets/compatible_chrome.png) | ![Edge](../assets/compatible_edge.png) | ![Firefox](../assets/compatible_firefox.png) | ![Safari](../assets/compatible_safari.png) | ![Opera](../assets/compatible_opera.png) |
| ------------ | ------------------------------------------ | -------------------------------------- | -------------------------------------------- | ------------------------------------------ | ---------------------------------------- |
| "use strict" | 13.0                                       | 10.0                                   | 4.0                                          | 6.0                                        | 12.1                                     |

The numbers in the table specify the first browser version that fully supports the directive.

> You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables.
> 
> `"use strict"` is just a string, so IE 9 will not throw an error even if it does not understand it.

## Declaring Strict Mode

Strict mode is declared by adding `"use strict";` to the beginning of a script or a function.

Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode):

```javascript
"use strict";
x = 3.14;   // This will cause an error because x is not declared
```

```javascript
"use strict";
myFunction();

function myFunction() {
  y = 3.14;   // This will also cause an error because y is not declared
}
```

Declared inside a function, it has local scope (only the code inside the function is in strict mode):

```javascript
x = 3.14;   // This will not cause an error.
myFunction();

function myFunction() {
  "use strict";
  y = 3.14;   // This will cause an error
}
```