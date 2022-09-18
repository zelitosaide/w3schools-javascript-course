__JavaScript Syntax__

JavaScript syntax is the set of rules, how JavaScript programs are constructed:

    // How to create variables:
    var x;
    let y;

    // How to use variables:
    x = 5;
    y = 6;
    let z = x + y;

__JavaScript Values__

The JavaScript syntax defines two types of values:

    Fixed values
    Variable values

Fixed values are called **Literals.**

Variable values are called **Variables.**


__JavaScript Literals__

The two most important syntax rules for **fixed values** are:

**Numbers** are written with or without decimals:

    10.50
    1001

**Strings** are text, written within double or single quotes:

    "John Doe"
    'John Doe'


__JavaScript Variables__

In a programming language, **variables** are used to **store** data values.

JavaScript uses the keywords **var**, **let** and **const** to `declare` variables.

An **equal sign** is used to **assign values** to variables.

In this example, x is defined as a variable. Then, x is assigned (given) the value 6:

    let x;
    x = 6;


__JavaScript Operators__

JavaScript uses arithmetic operators ( + - * / ) to compute values: 

    (5 + 6) * 10

JavaScript uses an assignment operator ( = ) to assign values to variables:

    let x, y;
    x = 5;
    y = 6; 


__JavaScript Expressions__

An expression is a combination of values, variables, and operators, which computes to a value.

The **computation** is **called an evaluation.**

For example, 5 * 10 evaluates to 50:

    5 * 10

Expressions can also contain variable values:

    x * 10

The values can be **of various types**, such as numbers and strings.

For example, "John" + " " + "Doe", evaluates to "John Doe":

    "John" + " " + "Doe"


__JavaScript Keywords__

JavaScript **keywords** are used to identify actions to be performed.

The let keyword tells the browser to create variables:

    let x, y;
    x = 5 + 6;
    y = x * 10;

The var keyword also tells the browser to create variables:

    var x, y;
    x = 5 + 6;
    y = x * 10;

In these examples, using **var** or **let** will produce the same result.

You will learn more about **var** and **let** later in this tutorial.


__JavaScript Comments__

Not all JavaScript statements are "executed".

Code after double _slashes_ // or between /* and */ is treated as a comment.

Comments are ignored, and will not be executed:

    let x = 5;   // I will be executed

    // x = 6;   I will NOT be executed 

You will learn more about comments in a later chapter.


__JavaScript Identifiers / Names__

Identifiers are JavaScript **names**.

Identifiers are used to name variables and keywords, and functions.

The rules for legal names **are the same in** most programming languages.

A JavaScript name must begin with:

    A letter (A-Z or a-z)
    A dollar sign ($)
    Or an underscore (_)

Subsequent characters may be **letters**, **digits**, **underscores**, or **dollar** signs.



__Note__

Numbers are not allowed as the first character in names.

This way JavaScript can easily **distinguish identifiers from numbers**.


__JavaScript is Case Sensitive__

All JavaScript identifiers **are case sensitive.** 

The variables **lastName** and **lastname**, are two different variables:

    let lastname, lastName;
    lastName = "Doe";
    lastname = "Peterson";

JavaScript does not interpret **LET** or **Let** as the keyword **let**.


__JavaScript and Camel Case__

Historically, programmers have used different ways of joining multiple words into one variable name:

_Hyphens:_

first-name, last-name, master-card, inter-city.

*Hyphens are not allowed in JavaScript. They are reserved for subtractions*.

_Underscore:_

first_name, last_name, master_card, inter_city.

_Upper Camel Case (Pascal Case):_

FirstName, LastName, MasterCard, InterCity.

_Lower Camel Case:_

JavaScript programmers tend to use camel case *that starts with a lowercase letter*:

firstName, lastName, masterCard, interCity.


__JavaScript Character Set__

JavaScript uses the **Unicode** character set.

Unicode covers (almost) all the characters, punctuations, and symbols in the world.

For a closer look, please study our Complete Unicode Reference (https://www.w3schools.com/charsets/ref_html_utf8.asp)

