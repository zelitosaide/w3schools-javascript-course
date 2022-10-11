# JavaScript String Methods

String methods help you to work with strings.

## String Methods and Properties

Primitive values, like "John Doe", cannot have properties or methods (because they are not objects).

But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitives values as objects when executing methods and properties.

## JavaScript String Length

The `length` property returns the length of a string:

```javascript
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
```

## Extracting String Parts

There are 3 methods for extracting a part of a string:

* `slice(start, end)`
* `substring(start, end)`
* `substr(start, length)`

## JavaScript String slice()

`slice()` extracts a part of a string and returns the extracted part in a new string.

The method takes 2 parameters: the start position, and the end position (end not included).

Slice out a portion of a string from position 7 to position 13 (13 not included):

```javascript
let string = "Apple, Bananaa, Kiwi";
let part = string.slice(7, 13);
```

## Note

> JavaScript counts positions from zero.
> First position is 0.
> Second position is 1.

If a parameter is negative, the position is counted from the end of the string.

This example slices out a position of a string from position -12 to position -6:

```javascript
let string = "Apple, Banana, Kiwi";
let part = string.slice(-12, -6);
```

If you omit the second parameter, the method will slice out the rest of the string:

```javascript
let part = string.slice(7);
```

or, counting from the end:

```javascript
let part = string.slice(-12);
```

## JavaScript String substring()

`substring()` is similar to `slice()`.

The difference is that start and end values less than 0 are treated as 0 in `substring()`.

```javascript
let string = "Apple, Banana, Kiwi";
let part = string.substring(7, 13);
```

If you omit the second parameter, `substring()` will slice out the rest of the string.

```javascript
let string = "Apple, Banana, Kiwi";
let part = string.substring(7);
```

## JavaScript String substr()

`substr()` is similar to `slice()`.

The difference is that the second parameter specifies the **length** of the extracted part.

```javascript
let string = "Apple, Banana, Kiwi";
let part = string.substr(7, 6);
```

If you omit the second parameter, `substr()` will slice out the rest of the string:

```javascript
let string = "Apple, Banana, Kiwi";
let part = string.substr(7);
```

If the first parameter is negative, the position counts from the end of the string.

```javascript
let string = "Apple, Banana, Kiwi";
let part = string.substr(-4);
```

> The `substr()` method is deprecated

## Replacing String Content

The `replace()` method replaces a specified value with another value in a string:

```javascript
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
```

## Note 

> The `replace()` method does not change the string it is called on.
> The `replace()` method returns a new string.
> The `replace()` method replaces **only the first** match.
> If you want to replace all matches, use a regular expression with the /g flag set. See examples below.

By default, the `replace()` method replaces **only the first** match:

```javascript
let string = "Please visit Microsoft and Microsoft!";
let newText = string.replace("Microsoft", "W3Schools");
```

By default, the `replace()` method is case sensitive. Writing MICROSOFT (with upper-case) will not work:

```javascript
let string = "Please visit Microsoft!";
let newText = string.replace("MICROSOFT", "W3Schools");
```

To replace case insensitive, use a **regular expression** with an `/i` flag (insensitive):

```javascript
let string = "Please visit Microsoft!";
let newText = string.replace(/MICROSOFT/i, "W3Schools");
```

## Note

> Regular expressions are written without qoutes.

To replace all matches, use a **regular expression** with a `/g` flag (global match):

```javascript
let string = "Please visit Microsoft and Microsoft!";
let newText = string.replace(/Microsoft/g, "W3Schools");
```

## Note

You will learn a lot more about regular expressions in the chapter [JavaScript Regular Expressions](https://www.w3schools.com/js/js_regexp.asp).

## Converting to Upper and Lower Case

A string is converted to upper case with `toUpperCase()`:

A string is converted to lower case with `toLowerCase()`:

## JavaScript String toUpperCase()

```javascript
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
```

## JavaScript String toLowerCase()

```javascript
let text1 = "Hello World!";
let text2 = text1.toLowerCase();
```

## JavaScript String concat()