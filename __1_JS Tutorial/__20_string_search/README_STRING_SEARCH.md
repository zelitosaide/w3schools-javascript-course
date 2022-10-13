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