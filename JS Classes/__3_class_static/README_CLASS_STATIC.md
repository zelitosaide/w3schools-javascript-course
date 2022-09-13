# JavaScript Static Methods

Static class methods are defined on the class itself.

You cannot call a `static` method on an object, only on object class.

```
class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

let myCar = new Car("Ford");

// You can call 'hello()' on the Car class:
document.getElementById("demo").innerHTML = Car.hello();

// But NOT on a Car Object:
// document.getElementById("demo").innerHTML = myCar.hello();
// this will raise an error
```

If you want to use the myCar object inside the `static` method, you can send it as a parameter:

```
class Car {
  constructor(name) {
    this.name = name;
  }
  static hello(x) {
    return "Hello " + x.name;
  }
}
let myCar = new Car("Ford");

document.getElementById("demo").innerHTML = Car.hello(myCar);
```