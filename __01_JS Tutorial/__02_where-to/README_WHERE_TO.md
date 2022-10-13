# JavaScript Where To

## The <script> Tag

In HTML, JavaScript code is inserted between `<script>` and `</script>` tags.

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>JavaScript in Body</h1>

    <p id="demo"></p>

    <script>
      document.getElementById("demo").innerHTML = "My First JavaScript";
    </script>
  </body>
</html>
```

> Old JavaScript examples may use a type attribute:

```html
<script type="text/javascript"></script>
```

> The type attribute is not required. JavaScript is the default scripting language in HTML.

## JavaScript Functions and Events

A JavaScript `function` is a block of JavaScript code, that can be executed when "called" for.

For example, a function can be called when an **event** occurs, like when the user clicks a button.

> You will learn much more about functions and events in later chapters.

## JavaScript in <head> or <body>

You can place any number of scripts in an HTML document.

Scripts can be placed in the `<body>`, or in the `<head>` section of an HTML page, or in both.

## JavaScript in <head>

In this example, a JavaScript `function` is placed in the `<head>` section of an HTML page.

The function is invoked (called) when a button is clicked.

```html
<!DOCTYPE html>
<html>
  <head>
    <script>
      function myFunction() {
        document.getElementById("demo").innerHTML = "Paragraph changed";
      }
    </script>
  </head>
  <body>
    <h1>Demo JavaScript in Head</h1>

    <p id="demo">Demo JavaScript in Head</p>

    <button type="button" onclick="myFunction()">
      Try it
    </button>
  </body>
</html>
```

## JavaScript in <body>

In this example, a JavaScript `function` is placed in the `<body>` section of an HTML page.

The function is invoked (called) when a button is clicked:

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Demo JavaScript in Body</h1>

    <p id="demo">A paragraph</p>

    <button type="button" onclick="myFunction()">
      Try it
    </button>

    <script>
      function myFunction() {
        document.getElementById("demo").innerHTML = "Paragraph changed.";
      }
    </script>
  </body>
</html>
```

> Placing scripts at the bottom of the <body> element improves the display speed, because script interpretation slows down the display.

## External JavaScript

Scripts can also be placed in external files:

```javascript
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph.";
}
```

External scripts are practical when the same code is used in many different web pages.

JavaScript files have the file extension **.js**

To use an external script, put the name of the script file in the `src` (source) attribute of a `<script>` tag:

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Demo External JavaScript</h1>

    <p id="demo">A Paragraph.</p>

    <button type="button" onclick="myFunction()">
      Try it
    </button>

    <p>This example links to "where_to.js".</p>
    <p>(myFunction is stored in "where_to.js")</p>

    <script src="where_to.js"></script>
  </body>
</html>
```

You can place an external script reference in `<head>` or `<body>` as you like.

The script will behave as if it was located exactly where the `<script>` tag is located.

> External script cannot contain `<script>` tags.

## External JavaScript Advantages

Placing scripts in external files has some advantages:

* It separates HTML and code
* It makes HTML and JavaScript easier to read and maintain
* Cached JavaScript files can speed up page loads

To add several script files to one page - use several script tags:

```html
<script src="myScript1.js"></script>
<script src="myScript2.js"></script>
```

## External References

An external script can be referenced in 3 different ways:

* With a full URL (a full web address)
* With a file path (like /js/)
* Without any path

This example uses a **full URL** to link to myScript.js:

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>External JavaScript</h1>

    <p id="demo">A Paragraph.</p>

    <button type="button" onclick="myFunction()">
      Click Me
    </button>

    <p>This example uses a full web URL to link to "myScript.js".</p>

    <p>(myFunction is stored in "myScript.js")</p>

    <script src="https://www.w3schools.com/js/myScript.js"></script>
  </body>
</html>
```

This example uses a **file path** to link to where_to.js:

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>External JavaScript</h1>

    <p id="demo">A Paragraph.</p>

    <button type="button" onclick="myFunction()">
      Try it
    </button>

    <p>This example uses a file path to link to "where_to.js".</p>

    <p>(myFunction is stored in "where_to.js")</p>

    <script src="./where_to.js"></script>
  </body>
</html>
```

This example uses no path to link to where_to.js:

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Demo External JavaScript</h1>

    <p id="demo">A Paragraph.</p>

    <button type="button" onclick="myFunction()">
      Try it
    </button>

    <p>This example links to "where_to.js".</p>

    <p>(myFunction is stored in where_to.js)</p>

    <script src="where_to.js"></script>
  </body>
</html>
```

> You can read more about file paths in the chapter [HTML File Paths](https://www.w3schools.com/html/html_filepaths.asp).