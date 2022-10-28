# JavaScript Performance

How to speed up your JavaScript code.

## Reduce Activity in Loops

Loops are often used in programming.

Each statement in a loop, including the for statement, is executed for each iteration of the loop.

Statements or assignments that can be placed outside the loop will make the loop run faster.

> ### Bad:
> 
> ```javascript
> for(let i = 0; i < arr.length; i++) {
>   // some code here
> }
> ```

> ### Better Code:
> 
> ```javascript
> let len = arr.length;
> for (let i = 0; i < len; i++) {
>   // some code here
> }
> ```

The bad code accesses the length property of an array each time the loop is iterated.

The better code accesses the length property outside the loop and makes the loop run faster.

## Reduce DOM Access

Accessing the HTML DOM is very slow, compared to other JavaScript statements.

If you expect to access a DOM element several times, access it once, and use it as a local variable.

```javascript
const obj = document.getElementById("demo");

obj.innerHTML = "Hello";
```

## Reduce DOM Size

Keep the number of elements in the HTML DOM small.

This will always improve page loading, and speed up rendering (page display), especially on smaller devices.

Every attempt to search the DOM (like getElementsByTagName) will benefit from a smaller DOM.

## Avoid Unnecessary Variables

Don't create new variables if you don't plan to save values.

Often you can replace code like this:

```javascript
let fullName = firstName + " " + lastName;
document.getElementById("demo").innerHTML = fullName;
```

With this:

```javascript
document.getElementById("demo").innerHTML = firstName + " " + lastName;
```

## Delay JavaScript Loading

Putting your scripts at the bottom of the page lets the browser load the page first.

W

