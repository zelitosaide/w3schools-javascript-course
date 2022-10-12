# JavaScript Regular Expressions

A regular expression is a sequence of characters that forms a search pattern.

The search pattern can be used for text search and text replace operations.

## What Is a Regular Expression?

A regular expression is a sequence of characters that forms a **search pattern.**

When you search for data in a text, you can use this search pattern to describe what you are searching for.

A regular expression can be a single character, or a more complicated pattern.

Regular expressions can be used to perform all types of **text search** and **text replace** operations.

### Syntax

```javascript
/pattern/modifiers;
```

### Example

```javascript
/w3schools/i;
```

Example explained:

**/w3schools/i** is a regular expression.

**w3schools** is a pattern (to be used in a search).

**i** is a modifier (modifies the search to be case-insensitive).

## Using String Methods

In JavaScript, regular expressions are often used with the two **string methods:** `search()` and `replace()`.

The `search()` method uses an expression to search for a match, and returnd the position of the match.

The `replace()` method returns a modified string where the pattern is replaced.

## Using String search() With a String

The `search()` method searches a string for a specified value and returns the position of the match:

```javascript
let text = "Visit W3Schools";
let n = text.search("W3Schools");   // returns 6
```

## Using String search() With a Regular Expression

Use a regular expression to do a case-insensitive search for "w3schools" in a string:

```javascript
let text = "Visit W3Schools";
let n = text.search(/w3schools/i);    // returns 6
```

## Using String replace() With a String

The `replace()` method replaces a specified value with another value in a string:

```javascript
let text = "Visit Microsoft!";
let result = text.replace("Microsoft", "W3Schools");
```

## Use String replace() With a Regular Expression

Use a case insensitive regular expression to replace Microsoft with W3Schools in a string:

```javascript
let text = "Visit Microsoft!";
let result = text.replace(/microsoft/i, "W3Schools");   // Visit W3Schools!
```

## Did You Notice?

> Regular expression arguments (instead of string arguments) can be used in the methods above.
> Regular expressions can make your search much more powerful (case insensitive for example).

## Regular Expression Modifiers

**Modifiers** can be used to perform case-insensitive more global searches:

| Modifier | Description                                                                          | Try it                                                                       |
| -------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| i        | Perform case-insensitive matching                                                    | [`Try it »`](https://www.w3schools.com/js/tryit.asp?filename=tryjs_regexp_i) |
| g        | Perform a global match (find all matches rather than stopping after the first match) | [`Try it »`](https://www.w3schools.com/js/tryit.asp?filename=tryjs_regexp_g) |
| m        | Perform multiline matching                                                           | [`Try it »`](https://www.w3schools.com/js/tryit.asp?filename=tryjs_regexp_m) |

## Regular Expression Patterns

**Brackets** are used to find a range of characters:

| Expression | Description                                     | Try it                                                                         |
| ---------- | ----------------------------------------------- | ------------------------------------------------------------------------------ |
| [abc]      | Find any of the characters between the brackets | [`Try it »`](https://www.w3schools.com/js/tryit.asp?filename=tryjs_regexp_abc) |
| [0-9]      | Find any of the digits between the brackets     | [`Try it »`](https://www.w3schools.com/js/tryit.asp?filename=tryjs_regexp_0-9) |
| (x\|y)     | Find any of the alternatives separated with \|  | [`Try it »`](https://www.w3schools.com/js/tryit.asp?filename=tryjs_regexp_xy)  |

**Metacharacters** are characters with a special meaning:

| Metacharacter | Description                                                                                          | Try it                                                                                                                                                          |
| ------------- | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `\d`          | Find a digit                                                                                         | [`Try it »`](https://www.w3schools.com/js/tryit.asp?filename=tryjs_regexp_d)                                                                                    |
| `\s`          | Find a whitespace character                                                                          | [`Try it »`](https://www.w3schools.com/js/tryit.asp?filename=tryjs_regexp_s)                                                                                    |
| `\b`          | Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b | [`Try it »`](https://www.w3schools.com/js/tryit.asp?filename=tryjs_regexp_b) <br> [`Try it »`](https://www.w3schools.com/js/tryit.asp?filename=tryjs_regexp_b2) |
| `\uxxxx`      | Find the unicode character specified by the hexadecimal number xxxx                                  | [`Try it »`](https://www.w3schools.com/js/tryit.asp?filename=tryjs_regexp_ux)                                                                                   |