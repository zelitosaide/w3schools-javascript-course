# JavaScript Object Constructors

```
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;;
}
```

### Notes

It is considered good practice to name constructor functions with an upper-case first letter.

### About this

In a constructor function `this` does not have a value. It is a substitute for the new object. The value of `this` will become the new object when a new object is created.

### See Also

[The JavaScript this Tutorial](https://www.w3schools.com/js/js_this.asp)

## Object Types (Blueprints) (Classes)

The examples from the previous chapters are limited. They only create single objects.

Sometimes we need a "**blueprint**" for creating many objects of the same "type".

The way to create an "object type", is to use an **object constructor function**.

In the example above, `function Person()` is an object constructor function.

Objects of the same type are created by calling the constructor function with the `new` keyword:

```
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
```

## What is **this**

In JavaScript, the `this` keyword refers to an **object**. 

**Which** object depends on how `this` is being invoked (used or called).

The `this` keyword refers to different objects depending on how it is used:

|                                                                                  |
| -------------------------------------------------------------------------------- |
| In an object method, `this` refers to the **object**.                            |
| Aone, `this` refers to the **global object**.                                    |
| In a function, `this` refers to the **global object**.                           |
| In a function, in strict mode, `this` is **undefined**.                          |
| In an event, `this` refers to the **element** that recieved the event.           |
| Methods like `call()`, `apply()`, and `bind()` can refer this to **any object**. |