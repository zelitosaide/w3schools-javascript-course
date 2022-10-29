# JavaScript Reserved Words

In JavaScript you cannot use these reserved words as variables, labels, or function names:

| abstract    | arguments    | await [^*]   | boolean     |
| ----------- | ------------ | ------------ | ----------- |
| break       | byte         | case         | catch       |
| char        | class [^*]   | const        | continue    |
| debugger    | default      | delete       | do          |
| double      | else         | enum [^*]    | eval        |
| export [^*] | extends [^*] | false        | final       |
| finally     | float        | for          | function    |
| goto        | if           | implements   | import [^*] |
| in          | instanceof   | int          | interface   |
| let [^*]    | long         | native       | new         |
| null        | package      | private      | protected   |
| public      | return       | short        | static      |
| super [^*]  | switch       | synchronized | this        |
| throw       | throws       | transient    | true        |
| try         | typeof       | var          | void        |
| volatile    | while        | with         | yield       |

> You can read more about the different JavaScript versions in the chapter [JS Versions](https://www.w3schools.com/js/js_versions.asp).

## Removed Reserved Words

The following reserved words have been removed from the ECMAScript 5/6 standard:

| abstract     | boolean | byte      | char     |
| ------------ | ------- | --------- | -------- |
| double       | final   | float     | goto     |
| int          | long    | native    | short    |
| synchronized | throws  | transient | volatile |

> Do not use these words as variables. ECMAScript 5/6 does not have full support in all browsers.

## JavaScript Objects, Properties, and Methods

You should also avoid using the name of JavaScript built-in objects, properties, and methods:

| Array          | Date     | eval      | function  |
| -------------- | -------- | --------- | --------- |
| hasOwnProperty | Infinity | isFinite  | isNaN     |
| isPrototypeOf  | length   | Math      | NaN       |
| name           | Number   | Object    | prototype |
| String         | toString | undefined | valueOf   |

## Java Reserved Words

JavaScript is often used together with Java. You should avoid using some Java objects and properties as JavaScript identifiers:

| getClass   | java        | JavaArray | javaClass |
| ---------- | ----------- | --------- | --------- |
| JavaObject | JavaPackage |           |           |

## Other Reserved Words

JavaScript can be used as the programming language in many applications.

You should also avoid using the name of HTML and Window objects and properties:

| alert       | all                | anchor             | anchors           |
| ----------- | ------------------ | ------------------ | ----------------- |
| area        | assign             | blur               | button            |
| checkbox    | clearInterval      | clearTimeout       | clientInformation |
| close       | closed             | confirm            | constructor       |
| crypto      | decodeURI          | decodeURIComponent | defaultStatus     |
| document    | element            | elements           | embed             |
| embeds      | encodeURI          | encodeURIComponent | escape            |
| event       | fileUpload         | focus              | form              |
| forms       | frame              | innerHeight        | innerWidth        |
| layer       | layers             | link               | location          |
| mimeTypes   | navigate           | navigator          | frames            |
| frameRate   | hidden             | history            | image             |
| images      | offscreenBuffering | open               | opener            |
| option      | outerHeight        | outerWidth         | packages          |
| pageXOffset | pageYOffset        | parent             | parseFloat        |
| parseInt    | password           | pkcs11             | plugin            |
| prompt      | propertyIsEnum     | radio              | reset             |
| screenX     | screenY            | scroll             | secure            |
| select      | self               | setInterval        | setTimeout        |
| status      | submit             | taint              | text              |
| textarea    | top                | unescape           | untaint           |
| window      |                    |                    |                   |

[^*]: Words marked with `*` are new in ECMAScript 5 and 6.