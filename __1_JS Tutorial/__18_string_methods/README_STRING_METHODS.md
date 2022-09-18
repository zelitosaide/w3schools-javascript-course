### JavaScript String Methods

String methods help you to work with strings.

__String Methods and Properties__

Primitive values, like "John Doe", cannot have properties or methods (because they are not objects).

But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties.


__JavaScript String Length__

The _length_ property returns the length of a string:

    let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let length = txt.length;


__Extracting String Parts__

There are 3 methods for extracting a part of a string:

    slice(start, end)
    substring(start, end)
    substr(start, length)


__JavaScript String slice()__

_slice()_ extracts a part of a string and returns the extracted part in a new string.

The method takes 2 parameters: the start position, and the end position _(end not included)_.

Slice out a portion of a string from position 7 to position 13 (13 not included):

    let str = "Apple, Banana, Kiwi";
    let part = str.slice(7, 13);


    Note

    JavaScript counts positions from zero.

    First position is 0.

    Second position is 1.

If a parameter is negative, the position is counted from the end of the string.

This example slices out a portion of a string from position -12 to position -6: 

    let str = "Apple, Banana, Kiwi";
    let part = str.slice(-12, -6);

If you omit the second parameter, the method will slice out the rest of the string:

    let part = str.slice(7);

or, counting from the end:

    let part = str.slice(-12);


__JavaScript String substring()__

_substring()_ is similar to _slice()_.

The difference is that start and end values less than 0 are treated as 0 in _substring()_.

    let str = "Apple, Banana, Kiwi";
    let part = str.substring(7, 13);

If you omit the second parameter, _substring()_ will slice out the rest of the string.


__JavaScript String substr()__

_substr()_ is similar to _slice()_.

The difference is that the second parameter specifies the _length_ of the extracted part.

    let str = "Apple, Banana, Kiwi";
    let part = str.substr(7, 6);

If you omit the second parameter, _substr()_ will slice out the rest of the string.

    let str = "Apple, Banana, Kiwi";
    let part = str.substr(7);

If the first parameter is negative, the position counts from the end of the string.

    let str = "Apple, Banana, Kiwi";
    let part = str.substr(-4);


__Replacing String Content__

The _replace()_ method replaces a specified value with another value in a string:

    let text = "Please visit Microsoft!";
    let newText = text.replace("Microsoft", "W3Schools");


Note

The _replace()_ method does not change the string it is called on.

The _replace()_ method returns a new string.

The _replace()_ method replaces only the first match

If you want to replace all matches, use a regular expression with the /g flag set. See examples below.

By default, the _replace()_ method replaces _only the first_ match:

    let text = "Please visit Microsoft and Microsoft!";
    let newText = text.replace("Microsoft", "W3Schools");

By default, the _replace()_ method is case sensitive. Writing MICROSOFT (with upper-case) will not work:

    let text = "Please visit Microsoft!";
    let newText = text.replace("MICROSOFT", "W3Schools");

To replace case insensitive, use a _regular expression_ with an _/i_ flag (insensitive):

    let text = "Please visit Microsoft!";
    let newText = text.replace(/MICROSOFT/i, "W3Schools");


Note

Regular expressions are written without quotes.

To replace all matches, use a _regular expression_ with a _/g_ flag (global match):

    let text = "Please visit Microsoft and Microsoft!";
    let newText = text.replace(/Microsoft/g, "W3Schools");


__Converting to Upper and Lower Case__

A string is converted to upper case with _toUpperCase()_:

A string is converted to lower case with _toLowerCase()_:


__JavaScript String toUpperCase()__

    let text1 = "Hello World!";
    let text2 = text1.toUpperCase();


__JavaScript String toLowerCase()__

    let text1 = "Hello World!";       // String
    let text2 = text1.toLowerCase();  // text2 is text1 converted to lower 


__JavaScript String concat()__

_concat()_ joins two or more strings:

    let text1 = "Hello";
    let text2 = "World";
    let text3 = text1.concat(" ", text2);

The _concat()_ method can be used instead of the plus operator. These two lines do the same:

    text = "Hello" + " " + "World!";
    text = "Hello".concat(" ", "World!"); 

Note

    All string methods return a new string. They don't modify the original string.

    Formally said:

    Strings are immutable: Strings cannot be changed, only replaced.


__JavaScript String trim()__

The _trim()_ method removes whitespace from both sides of a string:

    let text1 = "      Hello World!      ";
    let text2 = text1.trim();


__JavaScript String Padding__

ECMAScript 2017 added two String methods: _padStart()_ and _padEnd()_ to support padding at the beginning and at the end of a string.


__JavaScript String padStart()__

The _padStart()_ method pads a string with another string:

    let text = "5";
    let padded = text.padStart(4,"x");

    let text = "5";
    let padded = text.padStart(4,"0");


Note

The _padStart()_ method is a string method.

To pad a number, convert the number to a string first.

See the example below.

    let numb = 5;
    let text = numb.toString();
    let padded = text.padStart(4,"0");

_padStart()_ is an ECMAScript 2017 feature.

_padStart()_ is not supported in Internet Explorer.


__JavaScript String padEnd()__

The _padEnd()_ method pads a string with another string:

    let text = "5";
    let padded = text.padEnd(4,"x");

    let text = "5";
    let padded = text.padEnd(4,"0");


Note

The _padEnd()_ method is a string method.

To pad a number, convert the number to a string first.

See the example below.

    let numb = 5;
    let text = numb.toString();
    let padded = text.padEnd(4,"0");

_padEnd()_ is an ECMAScript 2017 feature.

_padEnd()_ is not supported in Internet Explorer.


__Extracting String Characters__

There are 3 methods for extracting string characters:

    charAt(position)
    charCodeAt(position)
    Property access [ ]


__JavaScript String charAt()__

The _charAt()_ method returns the character at a specified index (position) in a string:

    let text = "HELLO WORLD";
    let char = text.charAt(0);


__JavaScript String charCodeAt()__

The _charCodeAt()_ method returns the unicode of the character at a specified index in a string:

The method returns a UTF-16 code (an integer between 0 and 65535).

    let text = "HELLO WORLD";
    let char = text.charCodeAt(0);


__Property Access__

ECMAScript 5 (2009) allows property access [ ] on strings:

    let text = "HELLO WORLD";
    let char = text[0];

Note

Property access might be a little unpredictable: 

    It makes strings look like arrays (but they are not)
    If no character is found, [ ] returns undefined, while charAt() returns an empty string.
    It is read only. str[0] = "A" gives no error (but does not work!)

Example

    let text = "HELLO WORLD";
    text[0] = "A";    // Gives no error, but does not work


__Converting a String to an Array__

If you want to work with a string as an array, you can convert it to an array.


__JavaScript String split()__

A string can be converted to an array with the _split()_ method:

    text.split(",")    // Split on commas
    text.split(" ")    // Split on spaces
    text.split("|")    // Split on pipe 

If the separator is omitted, the returned array will contain the whole string in index [0].

If the separator is "", the returned array will be an array of single characters:

    text.split("")


