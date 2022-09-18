### JavaScript Operators

Assign values to variables and add them together:

    let x = 5;         // assign the value 5 to x
    let y = 2;         // assign the value 2 to y
    let z = x + y;     // assign the value 7 to z (5 + 2)

The _assignment_ operator _(=)_ assigns a value to a variable.

    let x = 10; 

The _addition_ operator _(+)_ adds numbers:

    let x = 5;
    let y = 2;
    let z = x + y;

The _multiplication_ operator _(*)_ multiplies numbers.

    let x = 5;
    let y = 2;
    let z = x * y;


__JavaScript Arithmetic Operators__

Arithmetic operators are used to perform arithmetic on numbers:

    Operator 	Description
    + 	      Addition
    - 	      Subtraction
    * 	      Multiplication
    ** 	      Exponentiation (ES2016)
    / 	      Division
    % 	      Modulus (Division Remainder)
    ++ 	      Increment
    -- 	      Decrement

Arithmetic operators are fully described in the JS Arithmetic chapter (https://www.w3schools.com/js/js_arithmetic.asp)


__JavaScript Assignment Operators__

Assignment operators assign values to JavaScript variables.

    Operator 	Example 	Same As
    = 	      x = y 	  x = y
    += 	      x += y 	  x = x + y
    -= 	      x -= y 	  x = x - y
    *= 	      x *= y 	  x = x * y
    /= 	      x /= y 	  x = x / y
    %= 	      x %= y 	  x = x % y
    **= 	    x **= y 	x = x ** y

The _addition assignment_ operator _(+=)_ adds a value to a variable.

    let x = 10;
    x += 5; 

Assignment operators are fully described in the JS Assignment chapter (https://www.w3schools.com/js/js_assignment.asp)


__JavaScript String Operators__

The _+_ operator can also be used to add (concatenate) strings.

    let text1 = "John";
    let text2 = "Doe";
    let text3 = text1 + " " + text2;

    The result of text3 will be:
    John Doe

The _+=_ assignment operator can also be used to add (concatenate) strings:

    let text1 = "What a very ";
    text1 += "nice day"; 

    The result of text1 will be:

    What a very nice day

When used on strings, the _+_ operator is called the _concatenation operator._


__Adding Strings and Numbers__

Adding two numbers, will return the sum, but adding a number and a string will return a string:

    let x = 5 + 5;
    let y = "5" + 5;
    let z = "Hello" + 5;

    The result of x, y, and z will be:

    10
    55
    Hello5 

`If you add a number and a string, the result will be a string!`


__JavaScript Comparison Operators__

    Operator 	Description
    == 	      equal to
    === 	    equal value and equal type
    != 	      not equal
    !== 	    not equal value or not equal type
    > 	      greater than
    < 	      less than
    >= 	      greater than or equal to
    <= 	      less than or equal to
    ? 	      ternary operator

Comparison operators are fully described in the JS Comparisons chapter (https://www.w3schools.com/js/js_comparisons.asp)


__JavaScript Logical Operators__

    Operator 	Description
    && 	      logical and
    || 	      logical or
    ! 	      logical not

Logical operators are fully described in the JS Comparisons chapter (https://www.w3schools.com/js/js_comparisons.asp)


__JavaScript Type Operators__

    Operator 	    Description
    typeof 	      Returns the type of a variable
    instanceof 	  Returns true if an object is an instance of an object type

Type operators are fully described in the JS Type Conversion chapter (https://www.w3schools.com/js/js_type_conversion.asp)


__JavaScript Bitwise Operators__

Bit operators work on 32 bits numbers.
Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number. 

    Operator 	  Description 	          Example 	  Same as 	      Result 	  Decimal
    & 	        AND 	                  5 & 1 	    0101 & 0001 	  0001 	    1
    | 	        OR 	                    5 | 1 	    0101 | 0001 	  0101 	    5
    ~ 	        NOT 	                  ~ 5 	      ~0101 	1010 	  10
    ^ 	        XOR 	                  5 ^ 1 	    0101 ^ 0001 	  0100 	    4
    << 	        left shift 	            5 << 1 	    0101 << 1 	    1010 	    10
    >> 	        right shift 	          5 >> 1 	    0101 >> 1 	    0010 	    2
    >>> 	      unsigned right shift 	  5 >>> 1 	  0101 >>> 1 	    0010 	    2


The examples above uses 4 bits unsigned examples. But JavaScript uses 32-bit signed numbers.
Because of this, in JavaScript, ~ 5 will not return 10. It will return -6.
~00000000000000000000000000000101 will return 11111111111111111111111111111010

Bitwise operators are fully described in the JS Bitwise chapter (https://www.w3schools.com/js/js_bitwise.asp)



