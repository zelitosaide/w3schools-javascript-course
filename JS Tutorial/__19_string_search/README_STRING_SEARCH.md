### JavaScript String Search

__JavaScript Search Methods__

    String indexOf()
    String lastIndexOf()
    String startsWith()
    String endsWith()


__JavaScript String indexOf()__

The _indexOf()_ method returns the index of (the position of) the _first_ occurrence of a specified text in a string:

    let str = "Please locate where 'locate' occurs!";
    str.indexOf("locate");

Note

JavaScript counts positions from zero.

0 is the first position in a string, 1 is the second, 2 is the third, ...


__JavaScript String lastIndexOf()__


The _lastIndexOf()_ method returns the index of the _last_ occurrence of a specified text in a string:

    let str = "Please locate where 'locate' occurs!";
    str.lastIndexOf("locate");

Both _indexOf()_, and _lastIndexOf()_ return -1 if the text is not found:

    let str = "Please locate where 'locate' occurs!";
    str.lastIndexOf("John");

Both methods accept a second parameter as the starting position for the search:

    let str = "Please locate where 'locate' occurs!";
    str.indexOf("locate", 15);

The _lastIndexOf()_ methods searches backwards (from the end to the beginning), meaning: if the second parameter is _15_, the search starts at position 15, and searches to the beginning of the string.

    let str = "Please locate where 'locate' occurs!";
    str.lastIndexOf("locate", 15);


__JavaScript String search()__

The _search()_ method searches a string for a specified value and returns the position of the match:

    let str = "Please locate where 'locate' occurs!";
    str.search("locate");


__Did You Notice?__

The two methods, _indexOf()_ and _search()_, are _equal_?

They accept the same arguments (parameters), and return the same value?

The two methods are _NOT_ equal. These are the differences:

    The search() method cannot take a second start position argument.
    The indexOf() method cannot take powerful search values (regular expressions).

You will learn more about regular expressions in a later chapter.


__JavaScript String match()__

The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.

Example 1

Search a string for "ain":

    let text = "The rain in SPAIN stays mainly in the plain";
    text.match(/ain/g);


Note

If a regular expression does not include the g modifier (to perform a global search), the match() method will return only the first match in the string.


Syntax

    string.match(regexp)

regexp 	  Required. The value to search for, as a regular expression.
Returns: 	An Array, containing the matches, one item for each match, or null if no match is found


Example 2

Perform a global, case-insensitive search for "ain":

    let text = "The rain in SPAIN stays mainly in the plain";
    text.match(/ain/gi);


__JavaScript String includes()__

The _includes()_ method returns true if a string contains a specified value.

    let text = "Hello world, welcome to the universe.";
    text.includes("world");



Syntax

string.includes(searchvalue, start)

searchvalue 	  Required. The string to search for
start 	        Optional. Default 0. Position to start the search
Returns: 	      Returns _true_ if the string contains the value, otherwise _false_
JS Version: 	  ES6 (2015)

Check if a string includes "world", starting the search at position 12:

    let text = "Hello world, welcome to the universe.";
    text.includes("world", 12);


__Browser Support__

_includes()_ is an ES6 feature (JavaScript 2015).

It is supported in all modern browsers:

_includes()_ is not supported in Internet Explorer.


__JavaScript String startsWith()__

The _startsWith()_ method returns _true_ if a string begins with a specified value, otherwise _false_:

    let text = "Hello world, welcome to the universe.";

    text.startsWith("Hello");


Syntax

    string.startsWith(searchvalue, start)

Parameter Values

Parameter 	    Description
searchvalue 	  Required. The value to search for.
start 	        Optional. Default 0. The position to start the search.

Examples

    let text = "Hello world, welcome to the universe.";

    text.startsWith("world")    // Returns false 


    let text = "Hello world, welcome to the universe.";

    text.startsWith("world", 5)    // Returns false 


    let text = "Hello world, welcome to the universe.";

    text.startsWith("world", 6)    // Returns true 



Note

The startsWith() method is case sensitive.


__Browser Support__

_startsWith()_ is an ES6 feature (JavaScript 2015).

It is supported in all modern browsers:

_startsWith()_ is not supported in Internet Explorer.


__JavaScript String endsWith()__

The _endsWith()_ method returns _true_ if a string ends with a specified value, otherwise _false_:

Example

Check if a string ends with "Doe":

    let text = "John Doe";
    text.endsWith("Doe");


Syntax

    string.endsWith(searchvalue, length)

Parameter Values

Parameter 	    Description
searchvalue 	  Required. The value to search for.
length 	        Optional. The length to search.

Check if the 11 first characters of a string ends with "world":

    let text = "Hello world, welcome to the universe.";
    text.endsWith("world", 11);



Note

The _endsWith()_ method is case sensitive.


__Browser Support__

_endsWith()_ is an ES6 feature (JavaScript 2015).

It is supported in all modern browsers:

_endsWith()_ is not supported in Internet Explorer.
