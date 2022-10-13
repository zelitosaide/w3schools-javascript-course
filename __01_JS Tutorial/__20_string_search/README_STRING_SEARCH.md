# JavaScript String Search

## JavaScript Search Methods

* String indexOf()
* String lastIndexOf()
* String startsWith()
* String endsWith()

## JavaScript String indexOf()

The `indexOf()` method returns the index of the `first` occurrence of a specified text in a string:

```javascript
let string = "Please locate where 'locate' occurs!";
string.indexOf("locate");
```

## Note

> JavaScript counts positions from zero.
> 0 is the first position in a string,  is the second, 2 is the third, ...

## JavaScript String lastIndexOf()

The `lastIndexOf()` method returns the index of the **last** occurrence of a specified text in a string:

```javascript
let string = "Please locate where 'locate' occurs!";
string.lastIndexOf("locate");
```

Both `indexOf()`, and `lastIndexOf()` return -1 if the text is not found:

```javascript
let string = "Please locate where 'locate' occurs!";
string.lastIndexOf("John");
```

Both methods accept a second parameter as the starting position for the search:

```javascript
let string = "Please locate where 'locate' occurs!";
string.indexOf("locate", 15);
```

The `lastIndexOf()` methods searches backwards (from the end to the beginning), meaning: if the second parameter is `15`, the search starts at position 15, and searches to the beginning of the string.

```javascript
let string = "Please locate where 'locate' occurs!";
string.lastIndexOf("locate", 15);
```

## JavaScript String search()

The `search()` method searches a string for a specified value and returns the position of the match:

```javascript
let string = "Please locate where 'locate' occurs!";
string.search("locate");
```

## Did You Note?

The two methods, `indexOf()` and `search()`, are **equal?**

They accept the same arguments (parameters), and return the same value?

The two methods are **NOT** equal. These are the differences:

* The `search()` method cannot take a second start position argument.
* The `indexOf()` method cannot take powerful search values (regular expressions).

You will learn more about regular expressions in later chapter.

## JavaScript String match()

The `match()` method searches a string for a match against a regular expression, and returns the matches, as an Array object.

Search a string for "ain":

```javascript
let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/g);
```

Read more about regular expressions in the chapter [JS RegExp](https://www.w3schools.com/js/js_regexp.asp).

## Note

> If a regular expression does not include the g modifier (to perform a global search), the `match()` will return only the first match in the string.

## Syntax

```javascript
string.match(regexp);
```

|          |                                                                                           |
| -------- | ----------------------------------------------------------------------------------------- |
| *regexp* | required. The value to search for, as a regular expression.                               |
| Returns  | An Array, containing the matches, one item for each match, or *null* if no match is found |

Perform a global, case-insensitive search for "ain":

```javascript
let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/gi);
```

## JavaScript String includes()

The `includes()` method returns true if a string contains a specified value.

```javascript
let text = "Hello word, welcome to the universe.";
text.includes("world");
```

## Syntax

```javascript
string.includes(searchValue, start);
```

|               |                                                                    |
| ------------- | ------------------------------------------------------------------ |
| *searchValue* | Required. The string to search for                                 |
| *start*       | Optional. Default 0. Position to start the search                  |
| Returns       | Returns `true` if the string contains the value, otherwise `false` |
| JS Version    | ES6 (2015)                                                         |

Check if a string includes "world", starting the search at position 12:

```javascript
let text = "Hello world, welcome to the universe.";
text.includes("world", 12);
```

## Browser Support

`includes()` is an ES6 feature (JavaScript 2015).

It is supported in all modern browsers:

| ![chrome](../assets/compatible_chrome.png) | ![Edge](../assets/compatible_edge.png) | ![Firefox](../assets/compatible_firefox.png) | ![Safari](../assets/compatible_safari.png) | ![Opera](../assets/compatible_opera.png) |
| ------------------------------------------ | -------------------------------------- | -------------------------------------------- | ------------------------------------------ | ---------------------------------------- |
| Chrome                                     | Edge                                   | Firefox                                      | Safari                                     | Opera                                    |
| Yes                                        | Yes                                    | Yes                                          | Yes                                        | Yes                                      |

`includes()` is not supported in Internet Explorer.

## JavaScript String startsWith()

The `startsWith()` method returns `true` if a string begins with a specified value, otherwise `false`:

```javascript
let text = "Hello word, welcome to the universe.";
text.startsWith("Hello");
```

## Syntax

```javascript
string.startsWith(searchValue, start);
```

## Parameters Values

| Parameter     | Description                                            |
| ------------- | ------------------------------------------------------ |
| *searchValue* | Required. The value to search for.                     |
| *start*       | Optional. Default 0. The position to start the search. |

```javascript
let text = "Hello world, welcome to the universe.";

text.startsWith("world");   // Returns false

text.startsWith("world", 5);    // Returns false

text.startsWith("world", 6);    // Returns true
```

## Note

> The `startsWith()` method is case sensitive.

## Browser Support

`startsWith()` is an ES6 feature (JavaScript 2015).

It is supported in all modern browsers:

| ![chrome](../assets/compatible_chrome.png) | ![Edge](../assets/compatible_edge.png) | ![Firefox](../assets/compatible_firefox.png) | ![Safari](../assets/compatible_safari.png) | ![Opera](../assets/compatible_opera.png) |
| ------------------------------------------ | -------------------------------------- | -------------------------------------------- | ------------------------------------------ | ---------------------------------------- |
| Chrome                                     | Edge                                   | Firefox                                      | Safari                                     | Opera                                    |
| Yes                                        | Yes                                    | Yes                                          | Yes                                        | Yes                                      |

`startsWith()` is not supported in Internet Explorer.

## JavaScript String endsWith()

The `endsWith()` method returns `true` if a string ends with a specified value, otherwise `false`:

Check if a string ends with "John Doe":

```javascript
let text = "John Doe";
text.endsWith("Doe");
```

## Syntax

```javascript
string.endsWith(searchValue, length);
```

## Parameter Values

| Parameter     | Description                        |
| ------------- | ---------------------------------- |
| *searchValue* | Required. The value to search for. |
| *length*      | Optional. The length to search.    |

Check if the 11 first characters of a string ends with "world":

```javascript
let text = "Hello world, welcome to the universe.";
text.endsWith("world", 11);
```

## Note

> The `endsWith()` method is case sensitive.

## Browser Support

`endsWith()` is an ES6 feature (JavaScript 2015).

It is supported in all modern browsers:

| ![chrome](../assets/compatible_chrome.png) | ![Edge](../assets/compatible_edge.png) | ![Firefox](../assets/compatible_firefox.png) | ![Safari](../assets/compatible_safari.png) | ![Opera](../assets/compatible_opera.png) |
| ------------------------------------------ | -------------------------------------- | -------------------------------------------- | ------------------------------------------ | ---------------------------------------- |
| Chrome                                     | Edge                                   | Firefox                                      | Safari                                     | Opera                                    |
| Yes                                        | Yes                                    | Yes                                          | Yes                                        | Yes                                      |

`endsWith()` is not supported in Internet Explorer.

## Complete String Reference

> For a complete String reference, go to our:
> 
> [Complete JavaScript String Reference](https://www.w3schools.com/jsref/jsref_obj_string.asp).
> 
> The reference contains descriptions and examples of all string properties and methods.