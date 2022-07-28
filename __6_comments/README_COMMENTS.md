### JavaScript Comments

JavaScript comments can be used _to explain JavaScript code_, and _to make it more readable_.

JavaScript comments can also be used _to prevent execution_, when testing alternative code.

__Single Line Comments__

Single line comments start with //.

Any text between // and the end of the line will be ignored by JavaScript (will not be executed).

This example uses a single-line comment before each code line:

    // Change heading:
    document.getElementById("myH").innerHTML = "My First Page";

    // Change paragraph:
    document.getElementById("myP").innerHTML = "My first paragraph.";

This example uses a single line comment at the end of each line _to explain_ the code:

    let x = 5;      // Declare x, give it the value of 5
    let y = x + 2;  // Declare y, give it the value of x + 2 


__Multi-line Comments__

Multi-line comments start with /* and end with */.

Any text between /* and */ will be ignored by JavaScript.

This example uses a multi-line comment (a comment block) _to explain the code:_

    /*
      The code below will change
      the heading with id = "myH"
      and the paragraph with id = "myP"
      in my web page:
    */
    document.getElementById("myH").innerHTML = "My First Page";
    document.getElementById("myP").innerHTML = "My first paragraph.";