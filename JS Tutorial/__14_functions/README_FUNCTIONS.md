### JavaScript Functions

A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).

    function myFunction(p1, p2) {
      return p1 * p2;   // The function returns the product of p1 and p2
    }


__JavaScript Function Syntax__

A JavaScript function is defined with the _function_ keyword, followed by a _name_, followed by parentheses _()_.

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The parentheses may include parameter names separated by commas:
_(parameter1, parameter2, ...)_

The code to be executed, by the function, is placed inside curly brackets: _{}_

    function name(parameter1, parameter2, parameter3) {
      // code to be executed
    }

Function _parameters_ are listed inside the parentheses () in the function definition.

Function _arguments_ are the _values_ received by the function when it is invoked.

Inside the function, the arguments (the parameters) behave as local variables.

    A Function is much the same as a Procedure or a Subroutine, in other programming languages.


__Function Invocation__

The code inside the function will execute when "something" _invokes_ (calls) the function:

    When an event occurs (when a user clicks a button)
    When it is invoked (called) from JavaScript code
    Automatically (self invoked)

You will learn a lot more about function invocation later in this tutorial.


__Function Return__

When JavaScript reaches a _return_ statement, the function will stop executing.

If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

Functions often compute a _return value_. The return value is "returned" back to the "caller":

Example

Calculate the product of two numbers, and return the result:

    let x = myFunction(4, 3);   // Function is called, return value will end up in x

    function myFunction(a, b) {
      return a * b;             // Function returns the product of a and b
    }

The result in x will be:

    12


__Why Functions?__

You can reuse code: Define the code once, and use it many times.

You can use the same code many times with different arguments, to produce different results.

Example

Convert Fahrenheit to Celsius:

    function toCelsius(fahrenheit) {
      return (5/9) * (fahrenheit-32);
    }
    document.getElementById("demo").innerHTML = toCelsius(77); 


__The () Operator Invokes the Function__

Using the example above, _toCelsius_ refers to the function object, and _toCelsius()_ refers to the function result.

Accessing a function without () will return the function object instead of the function result.

    function toCelsius(fahrenheit) {
      return (5/9) * (fahrenheit-32);
    }
    document.getElementById("demo").innerHTML = toCelsius; 


__Functions Used as Variable Values__

Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations.

Instead of using a variable to store the return value of a function:

    let x = toCelsius(77);
    let text = "The temperature is " + x + " Celsius";

You can use the function directly, as a variable value:

    let text = "The temperature is " + toCelsius(77) + " Celsius";

You will learn a lot more about functions later in this tutorial.


__Local Variables__


Variables declared within a JavaScript function, become _LOCAL_ to the function.

Local variables can only be accessed from within the function.

    // code here can NOT use carName

    function myFunction() {
      let carName = "Volvo";
      // code here CAN use carName
    }

    // code here can NOT use carName 


Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.

Local variables are created when a function starts, and deleted when the function is completed.
