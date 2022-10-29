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


[^*]: Words marked with `*` are new in ECMAScript 5 and 6.