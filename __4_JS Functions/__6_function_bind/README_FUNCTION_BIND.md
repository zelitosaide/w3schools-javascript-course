# JavaScript Function bind()

## Function Borrowing

With the `bind()` method, an object can borrow a method from another object.

The example below creates 2 objects (person and member).

The member object borrows the fullName method from the person object:

```
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen"
};

let fullName = person.fullName.bind(member);

document.getElementById("demo").innerHTML = fullName();
```

## Preserving **this**

Sometimes the `bind()` method has to be used to prevent loosing **this**.

In the following example, the person object has a display method. In the display method, **this** refers to the person object:

```
const person = {
  firstName: "John",
  lastName: "Doe",
  display: function() {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  }
};

person.display();
```

When a function is used as a callback, **this** is lost.

This example will try to display the person name after 3 seconds, but it will display **undefined** instead:

```
const person = {
  firstName: "John",
  lastName: "Doe",
  display: function() {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  }
};

setTimeout(person.display, 3000);
```

The `bind()` method solves this problem.

In the following example, the `bind()` method is used to bind person.display to person.

This example will display the person name after 3 seconds:

```
const person = {
  firstName: "John",
  lastName: "Doe",
  display: function() {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  }
};

let display = person.display.bind(person);

setTimeout(display, 3000);
```

## What is **this**?

In JavaScript, the `this` keyword refers to an **object**.

**Which** object depends on how this is being invoked (used or called).

The `this` keyword refers to different objects depending on how it is used:

|                                                                                  |
| -------------------------------------------------------------------------------- |
| In an object method, `this` refers to the **object**.                            |
| Alone, this refers to the **global object**.                                     |
| In a function, `this` refers to the **global object**.                           |
| In a function, in strict mode, `this` is `undefined`.                            |
| In an event, `this` refers to the **element** that received the event.           |
| Methods like `call()`, `apply()`, and `bind()` can refer this to **any object**. |

## Note

> `this` is not a variable. It is a keyword. You cannot change the value of `this`.

## See Also:

[The JavaScript **this** Tutorial](https://www.w3schools.com/js/js_this.asp)