
### 4 Ways to Declare a JavaScript Variable:

    Using var
    Using let
    Using const
    Using nothing

__What are Variables?__

Variables are containers for storing data (storing data values).

In this example, _x_, _y_, and _z_, are variables, declared with the _var_ keyword:

    var x = 5;
    var y = 6;
    var z = x + y;

In this example, x, y, and z, are variables, declared with the let keyword:

    let x = 5;
    let y = 6;
    let z = x + y;

In this example, x, y, and z, are undeclared variables:

    x = 5;
    y = 6;
    z = x + y;

From all the examples above, you can guess:

    x stores the value 5
    y stores the value 6
    z stores the value 11

When to Use JavaScript var?

    Always declare JavaScript variables with var,let, orconst.

    The var keyword is used in all JavaScript code from 1995 to 2015.

    The let and const keywords were added to JavaScript in 2015.

    If you want your code to run in older browser, you must use var.

When to Use JavaScript const?

    If you want a general rule: always declare variables with const.

    If you think the value of the variable can change, use let.

    In this example, price1, price2, and total, are variables:

          const price1 = 5;
          const price2 = 6;
          let total = price1 + price2;

The two variables _price1_ and _price2_ are declared with the _const_ keyword.

These are constant values and cannot be changed.

The variable _total_ is declared with the _let_ keyword.

This is a value that can be changed.

__Just Like Algebra__

Just like in algebra, variables hold values:

    let x = 5;
    let y = 6;

Just like in algebra, variables are used in expressions:

    let z = x + y;

From the example above, you can guess that the total is calculated to be 11.

    Note

    Variables are containers for storing values.

__JavaScript Identifiers__

All JavaScript _variables_ must be _identified_ with _unique names._

These unique names are called _identifiers._

Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

The general rules for constructing names for variables (unique identifiers) are:

    Names can contain letters, digits, underscores, and dollar signs.

    Names must begin with a letter

    Names can also begin with $ and _ (but we will not use it in this tutorial)

    Names are case sensitive (y and Y are different variables)

    Reserved words (like JavaScript keywords) cannot be used as names

    
    Note

    JavaScript identifiers are case-sensitive.

__The Assignment Operator__

In JavaScript, the equal sign _(=)_ _is an "assignment"_ operator, _not an "equal to"_ operator.

This is different from algebra. The following does not make sense in algebra:

    x = x + 5

In JavaScript, however, it makes perfect sense: it assigns the value of x + 5 to x.

(It calculates the value of x + 5 and puts the result into x. The value of x is incremented by 5.)

Note

The _"equal to"_ operator is written like _==_ in JavaScript.


__JavaScript Data Types__

JavaScript variables can hold numbers like 100 and text values like "John Doe".

In programming, text values are called text strings.

JavaScript can handle many types of data, but for now, just think of numbers and strings.

Strings are written inside double or single quotes. Numbers are written without quotes.

If you put a number in quotes, it will be treated as a text string.

    const pi = 3.14;
    let person = "John Doe";
    let answer = 'Yes I am!';

__Declaring a JavaScript Variable__

Creating a variable in JavaScript is called "declaring" a variable.

You declare a JavaScript variable with the _var_ or the _let_ keyword:

    var carName;

    // or

    let carName;

After the declaration, the variable has no value (technically it is _undefined_).

To _assign_ a value to the variable, use the equal sign:

    carName = "Volvo";

You can also assign a value to the variable when you declare it:

    let carName = "Volvo";

In the example below, we create a variable called _carName_ and assign the value "Volvo" to it.

Then we "output" the value inside an HTML paragraph with id="demo":


    <p id="demo"></p>

    <script>
    let carName = "Volvo";
    document.getElementById("demo").innerHTML = carName;
    </script> 


    Note

    It's a good programming practice to declare all variables at the beginning of a script.


__One Statement, Many Variables__

You can declare many variables in one statement.

Start the statement with _let_ and separate the variables by _comma_:

    let person = "John Doe", carName = "Volvo", price = 200;

A declaration can span multiple lines: 

    let person = "John Doe",
    carName = "Volvo",
    price = 200;


__Value = undefined__

In computer programs, variables are often declared without a value. The value can be something that has to be calculated, or something that will be provided later, like user input.

A variable declared without a value will have the value _undefined_.

The variable carName will have the value _undefined_ after the execution of this statement:

    let carName;


__Re-Declaring JavaScript Variables__

If you re-declare a JavaScript variable declared with _var_, it will not lose its value.

The variable _carName_ will still have the value "Volvo" after the execution of these statements:

    var carName = "Volvo";
    var carName;

    Note
    You cannot re-declare a variable declared with let or const.

    This will not work:

        let carName = "Volvo";
        let carName; 


__JavaScript Arithmetic__

As with algebra, you can do arithmetic with JavaScript variables, using operators like _=_ and _+_:

    let x = 5 + 2 + 3;

You can also add strings, but strings will be concatenated:

    let x = "John" + " " + "Doe"; 

Also try this:

    let x = "5" + 2 + 3;

    
    Note

    If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.

Now try this:

    let x = 2 + 3 + "5";


__JavaScript Dollar Sign $__

Since JavaScript treats a dollar sign as a letter, identifiers containing _$_ are valid variable names:

    let $ = "Hello World";
    let $$$ = 2;
    let $myMoney = 5;

Using the dollar sign is not very common in JavaScript, but professional programmers often use it as an _alias for the main function_ in a JavaScript library.

In the JavaScript library jQuery, for instance, the main function _$_ is used to select HTML elements.
In jQuery _$("p");_ means "select all p elements".


__JavaScript Underscore (_)__

Since JavaScript treats underscore as a letter, identifiers containing _ are valid variable names:

    let _lastName = "Johnson";
    let _x = 2;
    let _100 = 5;

Using the underscore is not very common in JavaScript, but a convention among professional programmers is to use it as an _alias for "private (hidden)"_ variables.
