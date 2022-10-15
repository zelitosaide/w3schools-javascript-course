# JavaScript Scope

Scope determines the accessibility (visibility) of variables.

JavaScript has 3 types of scopes:

* Block scope
* Function scope
* Global scope

## Block Scope

Before ES6 (2015), JavaScript had only **Global Scope** and **Function Scope**.

ES6 introduced two important new JavaScript keyworks: `let` and `const`.

These two keywords provide **Block Scope** in JavaScript.

Variables declared inside a { } block cannot be accessed from outside the block:

```javascript
{
  let x = 2;
}
// x can NOT be used here
```

Variables declared with the `var` keyword can NOT have block scope.

Variables declared inside a { } block can be accessed from outside the block.

```javascript
{
  var x = 2;
}
// x CAN be used here
```

## Local Scope

Variables declared within a JavaScript function, become **LOCAL** to the function.

```javascript
// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName
```

> Local variables have **Function Scope:**
> 
> They can only be accessed from within the function.

Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.

Local variables are created when a function starts, and deleted when the function is completed.

## Function Scope