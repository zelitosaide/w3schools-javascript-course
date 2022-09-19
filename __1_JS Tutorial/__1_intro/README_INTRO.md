# JavaScript Introduction

This page contains some examples of what JavaScript can do.

## JavaScript Can Change HTML Content

One of many JavaScript HTML methods is `getElementById()`.

The example below "finds" an HTML element (with id="demo"), and changes the element content (innerHTML) to "Hello JavaScript":

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>What Can JavaScript Do?</h1>

    <p id="demo">JavaScript can change HTML content.</p>

    <button
      type="button"
      onclick="document.getElementById('demo').innerHTML = 'Hello, JavaScript!'"
    >
      Click Me!
    </button>
  </body>
</html>
```

> JavaScript accepts both double and single quotes:

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>What Can JavaScript Do?</h1>

    <p id="demo">JavaScript can change HTML content.</p>

    <button
      type="button"
      onclick='document.getElementById("demo").innerHTML = "Hello, JavaScript!"'
    >
      Click Me!
    </button>
  </body>
</html>
```

## JavaScript Can Change HTML Attribute Values

In this example JavaScript changes the value of the `src` (source) attribute of an `<img>` tag:

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>What Can JavaScript Do?</h1>

    <p>JavaScript can change HTML attribute values.</p>

    <p>In this case JavaScript changes the value of the src (source) attribute of an image</p>

    <button
      onclick="document.getElementById('myImage').src = './assets/pic_bulbon.gif'"
    >
      Turn on the light
    </button>

    <img
      id="myImage"
      src="./assets/pic_bulboff.gif"
      style="width:100px"
    >

    <button
      onclick="document.getElementById('myImage').src = './assets/pic_bulboff.gif'"
    >
      Turn off the light
    </button>
  </body>
</html>
```

## JavaScript Can Change HTML Styles (CSS)

Changing the style of an HTML element, is a variant of changing an HTML attribute:

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>What Can JavaScript Do?</h1>

    <p id="demo">JavaScript can change the style of an HTML element.</p>

    <button
      type="button"
      onclick="document.getElementById('demo').style.fontSize = '35px'"
    >
      Click Me!
    </button>
  </body>
</html>
```

## JavaScript Can Hide HTML Elements

Hiding HTML elements can be done by changing the `display` style:

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>What Can JavaScript Do?</h1>

    <p id="demo">JavaScript can hide HTML elements.</p>

    <button
      type="button"
      onclick="document.getElementById('demo').style.display = 'none'"
    >
      Click Me!
    </button>
  </body>
</html>
```

## JavaScript Can Show HTML Elements

Showing hidden HTML elements can also be done by changing the `display` style:

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>What Can JavaScript Do?</h1>

    <p>JavaScript can show hidden HTML elements.</p>

    <p id="demo" style="display:none">Hello, JavaScript!</p>

    <button
      type="button"
      onclick="document.getElementById('demo').style.display = 'block'"
    >
      Click Me!
    </button>
  </body>
</html>
```

## Did You Know?

JavaScript and [Java](https://www.w3schools.com/java/default.asp) are completely different languages, both in concept and design.

JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997.

ECMA-262 is the official name of the standard. ECMAScript is the official name of the language. 

[JavaScript Versions »](https://www.w3schools.com/js/js_versions.asp)