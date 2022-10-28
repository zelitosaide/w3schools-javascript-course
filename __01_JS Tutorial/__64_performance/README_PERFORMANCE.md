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