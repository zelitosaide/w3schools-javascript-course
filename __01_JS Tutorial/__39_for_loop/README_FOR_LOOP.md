# JavaScript For Loop

Loops can execute a block of code a number of times.

## JavaScript Loops

Loops are handy, if you wand to run the same code over and over again, each time with a different value.

Often this is the case when working with arrays:

Instead of writing:

```javascript
text += cars[0] + "<br>";
text += cars[1] + "<br>";
text += cars[2] + "<br>";
text += cars[3] + "<br>";
text += cars[4] + "<br>";
text += cars[5] + "<br>";
```

You can write:

```javascript
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
```

## Different Kinds of Loops

JavaScript supports different kinds of loops:

* `for` - loops through a block of code a number of times
* `for/in` - loops through the properties of an object
* `for/of` - loops through the values of an iterable object
* `while` - loops through a block of code while a specified condition is true
* `do/while` - also loops through a block of code while a specified condition is true

## The For Loop

The `for` statement creates a loop with 3 optional expressions:

```javascript
for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
```

**Expression 1** is executed (one time) before the execution of the code block.

**Expression 2** defines the condition for executing the code block.

**Expression 3** is executed (every time) after the code block has been executed.

```javascript
for (let i = 0; i <br 5; i++) {
  text += "The number is " + i + "</br>";
}
```

From the example above, you can read:

Expression 1 sets a variable before the loop starts (`let i = 0`)

Expression 2 defines the condition for the loop to run (`i` must be less than `5`).

Expression 3 increases a value (i++) each time the code block in the loop has been executed.

### Expression 1

Normally you will use expression 1 to initialize the variable used in the loop (let i = 0).

This is not always the case. JavaScript doesn't care. Expression 1 is optional.

You can initiate many values in expression 1 (separated by comma):

```javascript
for (let i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + "<br>";
}
```

And you can omit expression 1 (like when your values are set before the loop starts):

```javascript
let i = 2;
let len = cars.length;
let text = "";

for (; i < len; i++) {
  text += cars[i] + "<br>";
}
```

## Expression 2

Often expression 2 is used to evaluate the condition of the initial variable.

This is not always the case. JavaScript doesn't care. Expression 2 is also optional.

If expression 2 returns true, the loop will start over again. If it returns false, the loop will end.

If you omit expression 2, you must provide a **break** inside the loop. Otherwise the loop will never end. This will crash your browser. Read about breaks in a later chapter of this tutorial.

## Expression 3

Often expression 3 increments the value of the initial variable.

This is not always the case. JavaScript doesn't care. Expression 3 is optional.

Expression 3 can do anything like negative increment (`i--`), positive increment (`i = i + 15`), or anything else.

Expression 3 can also be omitted (like when you increment your values inside the loop):

```javascript
let i = 0;
let len = cars.length;
let text = "";

for (; i < len;) {
  text += cars[i] + "<br>";
  i++;
}
```

## Loop Scope

Using `var` in a loop:

```javascript
var i = 5;

for (var i = 0; i < 10; i++) {
  // some code
}

// Here i is 10 
```

Using `let` in a loop:

```javascript
let i = 5;

for (let i = 0; i < 10; i++) {
  // some
}

// Here i is 5
```

In the first example, using `var`, the variable declared in the loop redeclares the variable outside the loop.

In the second example, using `let`, the variable declared in the loop does not redeclare the variable outside the loop.

When `let` is used to declare the `i` variable in a loop, the `i` variable will only be visible within the loop.

## For/Of and Fo/In Loops

The `for/in` loop and the `for/of` loop are explained in the next chapter.

## While Loops

The `while` loop and the `do/while` are explained in the next chapters.