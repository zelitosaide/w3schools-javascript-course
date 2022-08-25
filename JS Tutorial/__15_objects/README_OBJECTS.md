### Real Life Objects, Properties, and Methods


In real life, a car is an _object._ 

A car has _properties_ like weight and color, and _methods_ like start and stop:

    Properties 	              Methods
      
    car.name = Fiat           car.start()

    car.model = 500           car.drive()

    car.weight = 850kg        car.brake()

    car.color = white 	      car.stop()

All cars have the same _properties_, but the property _values_ differ from car to car.

All cars have the same _methods_, but the methods are performed _at different times._


__JavaScript Objects__

You have already learned that JavaScript variables are containers for data values.

This code assigns a _simple value_ (Fiat) to a _variable_ named car: 

    let car = "Fiat";

Objects are variables too. But objects can contain many values. 

This code assigns _many values_ (Fiat, 500, white) to a _variable_ named car:

    const car = {type:"Fiat", model:"500", color:"white"};

The values are written as _name:value_ pairs (name and value separated by a colon).

It is a common practice to declare objects with the _const_ keyword.

Learn more about using _const_ with objects in the chapter: JS Const.



__Object Definition__

You define (and create) a JavaScript object with an object literal:

    const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

Spaces and line breaks are not important. An object definition can span multiple lines: 

    const person = {
      firstName: "John",
      lastName: "Doe",
      age: 50,
      eyeColor: "blue"
    };


__Object Properties__

The _name:values_ pairs in JavaScript objects are called _properties:_

    Property 	  Property Value
    firstName 	John
    lastName  	Doe
    age 	      50
    eyeColor 	  blue


__Accessing Object Properties__

You can access object properties in two ways: 

    objectName.propertyName

    or

    objectName["propertyName"]

    Example1
    person.lastName;

    Example2
    person["lastName"];


JavaScript objects are containers for _named values_ called properties.


__Object Methods__

Objects can also have _methods._

Methods are _actions_ that can be performed on objects.

Methods are stored in properties as _function definitions._

    Property 	  Property Value
    firstName 	John
    lastName 	  Doe
    age 	      50
    eyeColor 	  blue
    fullName 	  function() {return this.firstName + " " + this.lastName;}

A method is a function stored as a property.

    const person = {
      firstName: "John",
      lastName : "Doe",
      id       : 5566,
      fullName : function() {
        return this.firstName + " " + this.lastName;
      }
    };

In the example above, _this_ refers to the _person object._

I.E. _this.firstName_ means the _firstName_ property of _this._

I.E. _this.firstName_ means the _firstName_ property of _person._


__What is `this`?__

In JavaScript, the _this_ keyword refers to an _object_.

_Which_ object depends on how _this_ is being invoked (used or called).

The _this_ keyword refers to different objects depending on how it is used:

In an object method, _this_ refers to the _object_.

Alone, _this_ refers to the _global object_.

In a function, _this_ refers to the _global object_.

In a function, in strict mode, _this_ is _undefined_.

In an event, _this_ refers to the _element_ that received the event.

Methods like _call()_, _apply()_, and _bind()_ can refer _this_ to _any object_.


Note
_this_ is not a variable. It is a keyword. You cannot change the value of _this_. 

See Also:

The JavaScript this Tutorial


__The `this` Keyword__

In a function definition, _this_ refers to the "owner" of the function.

In the example above, _this_ is the _person object_ that "owns" the _fullName_ function.

In other words, _this.firstName_ means the _firstName_ property of _this object._

Learn more about _this_ in The JavaScript this Tutorial.


__Accessing Object Methods__

You access an object method with the following syntax:

    objectName.methodName()

    name = person.fullName();

If you access a method _without_ the () parentheses, it will return the _function definition:_

    name = person.fullName;


__Do Not Declare Strings, Numbers, and Booleans as Objects!__

When a JavaScript variable is declared with the keyword "_new_", the variable is created as an object: 

    x = new String();        // Declares x as a String object
    y = new Number();        // Declares y as a Number object
    z = new Boolean();       // Declares z as a Boolean object

Avoid _String_, _Number_, and _Boolean_ objects. They complicate your code and slow down execution speed. 

You will learn more about objects later in this tutorial.