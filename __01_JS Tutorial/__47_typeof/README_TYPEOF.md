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
typeof {name: "john", age: 34};     // Returns "object"
typeof new Date();                  // Returns "object"
typeof function () {};              // Returns "function"
typeof myCar;                       // Returns "undefined"
typeof null;                        // Returns "object"
```