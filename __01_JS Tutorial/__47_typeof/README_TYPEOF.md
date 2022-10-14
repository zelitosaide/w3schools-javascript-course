# JavaScript typeof

In JavaScript there are 5 different data types that can contain values:

* `string`
* `number`
* `boolean`
* `object`
* `function`

There are 6 types of objects:

* `Object`
* `Date`
* `Array`
* `String`
* `Number`
* `Boolean

And 2 data types that cannot contain values:

* `null`
* `undefined`

## The typeof Operator

You can use the `typeof` operator to find the data type of a JavaScript variable.

```javascript
typeof "John";                      // Returns "string"
typeof 3.14;                        // Returns "number"
typeof NaN;                         // Returns "number"
typeof false;                       // Returns "boolean"
typeof [1, 2, 3, 4];                // Returns "object"
typeof { name: "john", age: 34 };     // Returns "object"
typeof new Date();                  // Returns "object"
typeof function () {};              // Returns "function"
typeof myCar;                       // Returns "undefined"
typeof null;                        // Returns "object"
```

Please observe:

* The data type of `NaN` is number
* The data type of an `array` is object
* The data type of a `date` is object
* The data type of `null` is object
* The data type of an `undefined` variable is **undefined**
* The data type of a variable that has not been assigned a value is also **undefined**

> You cannot use `typeof` to determine if a JavaScript object is an array (or a date).

## Primitive Data

A primitive data value is a single simple data value with no additional properties and methods.

The `typeof` operator can return one of these primitive types:

* `string`
* `number`
* `boolean`
* `undefined`

```javascript
typeof "John";        // Returns "string"
typeof 3.14;          // Returns "number"
typeof true;          // Returns "boolean"
typeof false;         // Returns "boolean"
typeof x;             // Returns "undefined" (if x has no value)
```

## Complex Data

The `typeof` operator can return one of two complex types:

* `function`
* `object`

The `typeof` operator returns "object" for objects, arrays, and null.

The `typeof` operator does not return "object" for functions.

```javascript
typeof { name: "John", age: 34 };   // Returns "object"
typeof [1, 2, 4];                   // Returns "object" (not "array", see note below)
typeof null;                        // Returns "object"
typeof function myFunc() {};        // Returns "function"
```

> The `typeof` operator returns "`object`" for arrays because in JavaScript arrays are objects.

## The Data Type of typeof

The `typeof` operator is not a variable. It is an operator. Operators ( + - * / ) do not have any data type.

But, the `typeof` operator always **returns a string** (containing the type of the operand).

## The contructor Property

The `constructor` property returns the constructor function for all JavaScript variables.

```javascript
"John".constructor;                       // Returns function String() {[native code]}
(3.14).constructor;                       // Returns function Number() {[native code]}
false.constructor;                        // Returns function Boolean() {[native code]}
[1, 2, 3, 4].constructor;                 // Returns function Array() {[native code]}
{ name: "John", age: 34 }.constructor;    // Returns function Object() {[native code]}
new Date().constructor;                   // Returns function Date() {[native code]}
function () {}.constructor;               // Returns function Function() {[native code]}
```