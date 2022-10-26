# JavaScript Classes

ECMAScript 2015, also known as ES6, introduced JavaScript Classes.

JavaScript Classes are templates for JavaScript Objects.

## JavaScript Class Syntax

Use the keyword `class` to create a class.

Always add a method named `constructor()`:

### Syntax

```javascript
class ClassName {
  constructor() { ... }
}
```

### Example

```javascript
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
```

The example above creates a class named "Car".

The class has two initial properties: "name" and "year".

> 
> JavaScript class is **not** an object.
> 
> It is a **template** for JavaScript objects.
> 