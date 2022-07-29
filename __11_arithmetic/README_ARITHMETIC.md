### JavaScript Arithmetic Operators

Arithmetic operators perform arithmetic on numbers (literals or variables).

    Operator 	Description
    + 	      Addition
    - 	      Subtraction
    * 	      Multiplication
    ** 	      Exponentiation (ES2016)
    / 	      Division
    % 	      Modulus (Remainder)
    ++ 	      Increment
    -- 	      Decrement

__Arithmetic Operations__

A typical arithmetic operation operates on two numbers.

The two numbers can be literals:

    let x = 100 + 50;

or variables:

    let x = a + b;

or expressions:

    let x = (100 + 50) * a;


__Operators and Operands__

The numbers (in an arithmetic operation) are called _operands._

The operation (to be performed between the two operands) is defined by an _operator._

    Operand 	Operator 	Operand
    100     	+ 	      50


__Adding__

The _addition_ operator _(+)_ adds numbers:

    let x = 5;
    let y = 2;
    let z = x + y;

__Subtracting__

The _subtraction_ operator _(-)_ subtracts numbers.

    let x = 5;
    let y = 2;
    let z = x - y;


__Multiplying__

The _multiplication_ operator _(*)_ multiplies numbers.

    let x = 5;
    let y = 2;
    let z = x * y;


__Dividing__

The _division_ operator _(/)_ divides numbers.

    let x = 5;
    let y = 2;
    let z = x / y;


__Remainder__

The _modulus_ operator _(%)_ returns the division remainder.

    let x = 5;
    let y = 2;
    let z = x % y;


In arithmetic, the division of two integers produces a _quotient_ and a _remainder_.

In mathematics, the result of a _modulo operation_ is the remainder of an _arithmetic_ division.



__Incrementing__

The _increment_ operator _(++)_ increments numbers.

    let x = 5;
    x++;
    let z = x;


__Decrementing__

The _decrement_ operator _(--)_ decrements numbers.

    let x = 5;
    x--;
    let z = x;


__Exponentiation__

The _exponentiation_ operator _(**)_ raises the first operand to the power of the second operand.

    let x = 5;
    let z = x ** 2;          // result is 25    

x ** y produces the same result as _Math.pow(x,y):_

    let x = 5;
    let z = Math.pow(x,2);   // result is 25 


__Operator Precedence__

Operator precedence describes the order in which operations are performed in an arithmetic expression.

    let x = 100 + 50 * 3;


Is the result of example above the same as 150 * 3, or is it the same as 100 + 150?

Is the addition or the multiplication done first?

As in traditional school mathematics, the multiplication is done first.

Multiplication _(*)_ and division _(/)_ have higher _precedence_ than addition _(+)_ and subtraction _(-)_.

And (as in school mathematics) the precedence can be changed by using parentheses:

    let x = (100 + 50) * 3;


When using parentheses, the operations inside the parentheses are computed first.

When many operations have the same precedence (like addition and subtraction), they are computed from left to right: 

    let x = 100 + 50 - 3;


__JavaScript Operator Precedence Values__

Pale red entries indicates ECMAScript 2015 (ES6) or higher.


    Value 	Operator 	        Description 	                Example
    21 	    ( ) 	            Expression grouping 	        (3 + 4)
                
    20 	    . 	              Member 	                      person.name
    20 	    [] 	              Member        	              person["name"]
    20 	    () 	              Function call 	              myFunction()
    20 	    new 	            Create 	                      new Date()
                
    18 	    ++ 	              Postfix Increment 	          i++
    18 	    -- 	              Postfix Decrement 	          i--
                
    17 	    ++ 	              Prefix Increment 	            ++i
    17 	    -- 	              Prefix Decrement 	            --i
    17 	    ! 	              Logical not 	                !(x==y)
    17 	    typeof 	          Type 	                        typeof x
                
    16 	    ** 	              Exponentiation (ES2016) 	    10 ** 2
                
    15 	    * 	              Multiplication 	              10 * 5
    15 	    / 	              Division 	                    10 / 5
    15 	    % 	              Division                      Remainder 	10 % 5
                
    14 	    + 	              Addition 	                    10 + 5
    14 	    - 	              Subtraction 	                10 - 5
                
    13 	    << 	              Shift left 	                  x << 2
    13 	    >> 	              Shift right 	                x >> 2
    13 	    >>> 	            Shift right (unsigned) 	      x >>> 2
                
    12 	    < 	              Less than 	                  x < y 
    12 	    <= 	              Less than or equal 	          x <= y
    12 	    > 	              Greater than 	                x > y
    12 	    >= 	              Greater than or equal 	      x >= y
    12 	    in 	              Property in Object 	          "PI" in Math
    12 	    instanceof 	      Instance of Object 	          instanceof Array
                
    11 	    == 	              Equal 	                      x == y
    11 	    === 	            Strict equal 	                x === y
    11 	    != 	              Unequal 	                    x != y
    11 	    !== 	            Strict unequal  	            x !== y
                
    10 	    & 	              Bitwise AND 	                x & y
    9 	    ^ 	              Bitwise XOR 	                x ^ y
    8 	    | 	              Bitwise OR 	                  x | y
    7 	    && 	              Logical AND 	                x && y
    6 	    || 	              Logical OR 	                  x || y
    5 	    ?? 	              Nullish Coalescing 	          x ?? y
    4 	    ? : 	            Condition 	                  ? "Yes" : "No"
                
    3 	    += 	              Assignment 	                  x += y
    3 	    /= 	              Assignment 	                  x /= y
    3 	    -= 	              Assignment 	                  x -= y
    3 	    *= 	              Assignment 	                  x *= y
    3 	    %= 	              Assignment 	                  x %= y
    3 	    <<= 	            Assignment 	                  x <<= y
    3 	    >>= 	            Assignment 	                  x >>= y
    3 	    >>>= 	            Assignment 	                  x >>>= y
    3 	    &= 	              Assignment 	                  x &= y
    3 	    ^= 	              Assignment 	                  x ^= y
    3 	    |= 	              Assignment 	                  x |= y
                
    2 	    yield 	          Pause Function 	              yield x
    1 	    , 	              Comma 	                      5 , 6


Expressions in parentheses are fully computed before the value is used in the rest of the expression.