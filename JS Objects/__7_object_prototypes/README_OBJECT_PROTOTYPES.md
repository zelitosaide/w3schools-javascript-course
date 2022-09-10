# JavaScript Object Prototypes

All JavaScript objects inherit properties and methods from a prototype.

In the previous chapter we learned how to ue an object constructor:

```
function Person(first, last, age, eyeColor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyeColor;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
```

We also learned the you can **not** add a new property to an existing constructor:

```
Person.nationality = "English";
```

To add a new property to a constructor, you must add it to the constructor function:

```
function Person(first, last, age, eyeColor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyeColor;
  this.nationality = "English";
}
```

## Prototype Inheritance

All JavaScript objects inherit properties and methods from a prototype:

* `Date` objects inherit from `Date.prototype`
* `Array` objects inherit from `Array.prototype`
* `Person` objects inherit from `Person.prototype`

The `Object.prototype` is on the top of the prototype inheritance chain:

`Date` objects, `Array` objects, and `Person` objects inherit from `Object.prototype`.

## Adding Properties and Methods to Objects

Sometimes you want to add new properties (or methods) to all existing objects of a given type.

Sometimes you want to add new properties (or methods) to an object constructor.

## Using the **prototype** Property

The JavaScript `prototype` property allows you to add new properties to object constructor:

```
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

Person.prototype.nationality = "English";
```

The JavaScript `prototype` property also allows you to add new methods to objects constructors:

```
Person.prototype.name = function () {
  return this.firstName + " " + this.lastName;
};
```

> Only modify your **own** prototypes. Never modify the prototypes of standard JavaScript objects.