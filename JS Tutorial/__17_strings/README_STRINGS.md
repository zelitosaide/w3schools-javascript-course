### JavaScript Strings

JavaScript strings are for storing and manipulating text.

A JavaScript string is zero or more characters written inside quotes.

    let text = "John Doe";

You can use single or double quotes:

    let carName1 = "Volvo XC60";  // Double quotes
    let carName2 = 'Volvo XC60';  // Single quotes 

You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

    let answer1 = "It's alright";
    let answer2 = "He is called 'Johnny'";
    let answer3 = 'He is called "Johnny"';


__String Length__

To find the length of a string, use the built-in _length_ property:

    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let length = text.length;


__Escape Character__

Because strings must be written within quotes, JavaScript will misunderstand this string:

    let text = "We are the so-called "Vikings" from the north.";

The string will be chopped to "We are the so-called ".

The solution to avoid this problem, is to use the _backslash escape character._

The backslash _( \ )_ escape character turns special characters into string characters:

    Code 	  Result 	  Description
    \' 	    ' 	      Single quote
    \" 	    " 	      Double quote
    \\ 	    \ 	      Backslash

The sequence _\"_  inserts a double quote in a string:

    let text = "We are the so-called \"Vikings\" from the north."; 

The sequence _\'_  inserts a single quote in a string:

    let text= 'It\'s alright.';

The sequence `\\`  inserts a backslash in a string:

    let text = "The character \\ is called backslash.";

Six other escape sequences are valid in JavaScript:

    Code 	  Result
    \b 	    Backspace
    \f 	    Form Feed
    \n 	    New Line
    \r 	    Carriage Return
    \t 	    Horizontal Tabulator
    \v 	    Vertical Tabulator

The 6 escape characters above were originally designed to control typewriters, teletypes, and fax machines. They do not make any sense in HTML. 


__Breaking Long Code Lines__

For best readability, programmers often like to avoid code lines longer than 80 characters.

If a JavaScript statement does not fit on one line, the best place to break it is after an operator:

    document.getElementById("demo").innerHTML =
    "Hello Dolly!"; 

You can also break up a code line _within a text string_ with a single backslash:

    document.getElementById("demo").innerHTML = "Hello \
    Dolly!";

The \ method is not the preferred method. It might not have universal support.
Some browsers do not allow spaces behind the \ character.

A safer way to break up a string, is to use string addition:

    document.getElementById("demo").innerHTML = "Hello " +
    "Dolly!";

You cannot break up a code line with a backslash:

    document.getElementById("demo").innerHTML = \
    "Hello Dolly!";


__JavaScript Strings as Objects__

Normally, JavaScript strings are primitive values, created from literals:

    let x = "John";

But strings can also be defined as objects with the keyword _new_:

    let y = new String("John");

Example

    let x = "John";
    let y = new String("John");



Do not create Strings objects.

The _new_ keyword complicates the code and slows down execution speed.

String objects can produce unexpected results:

When using the _==_ operator, x and y are _equal_:

    let x = "John";
    let y = new String("John");


When using the _===_ operator, x and y are _not equal_: 

    let x = "John";
    let y = new String("John");

Note the difference between _(x==y)_ and _(x===y)_.


_(x == y)_ true or false?

    let x = new String("John");
    let y = new String("John");

_(x === y)_ true or false?

    let x = new String("John");
    let y = new String("John");

Comparing two JavaScript objects _always_ returns _false_.