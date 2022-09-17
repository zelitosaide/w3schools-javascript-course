# JavaScript Get Date Methods

These methods can be used for getting information from a date object:

| **Method**          | **Description**                                   |
| ------------------- | ------------------------------------------------- |
| `getFullYear()`     | Get the **year** as a four digit number (yyyy)    |
| `getMonth()`        | Get the **month** as a number (0-11)              |
| `getDate()`         | Get the **day** as a number (1-31)                |
| `getHours()`        | Get the **hour** (0-23)                           |
| `getMinutes()`      | Get the **minute** (0-59)                         |
| `getSeconds()`      | Get the **second** (0-59)                         |
| `getMilliseconds()` | Get the **millisecond** (0-999)                   |
| `getTime()`         | Get the time (milliseconds since January 1, 1970) |
| `getDay()`          | Get the weekday as a number (0-6)                 |
| `Date.now()`        | Get the time. ECMAScript 5.                       |

## The getTime() Method

The `getTime()` method returns the number of milliseconds since January 1, 1970:

```javascript
const d = new Date();
d.getTime();
```

## The getFullYear() Method

The `getFullYear()` method returns the year of a date as a four digit number:

```javascript
const d = new Date();
d.getFullYear();
```

## The getMonth() Method

The `getMonth()` method returns the month of a date as a number (0-11):

```javascript
const d = new Date();
d.getMonth();
```

> In JavaScript, the first month (January) is month number 0, so December returns month number 11.

You can use an array of names, and `getMonth()` to return the month as a name:

```javascript
const months = [
  "January", 
  "February", 
  "March", 
  "April", 
  "May", 
  "June", 
  "July", 
  "August", 
  "September", 
  "October", 
  "November", 
  "December"
];

const d = new Date();
let month = months[d.getMonth()];
```

## The getDate() Method

The `getDate()` method returns the day of a date as a number (1-31):

```javascript
const d = new Date();
d.getDate();
```

## The getHours() Method

The `getHours()` method returns the hours of a date as a number (0-23):

```javascript
const d = new Date();
d.getHours();
```

## The getMinutes() Method

The `getMinutes()` method returns the minutes of a date as a number (0-59):

```javascript
const d = new Date();
d.getMinutes();
```

## The getSeconds() Method

The `getSeconds()` method returns the seconds of a date as a number (0-59):

```javascript
const d = new Date();
d.getSeconds();
```

## The getMilliseconds() Method

The `getMilliseconds()` method returns the milliseconds of a date as a number (0-999):

```javascript
const d = new Date();
d.getMilliseconds();
```

## The getDay() Method

The `getDay()` method returns the weekday of a date as a number (0-6):

```javascript
const d = new Date();
d.getDay();
```

> In JavaScript, the first day of the week (0) means "Sunday", even if some countries in the world consider the first day of the week to be "Monday"

You can use an array of names, and `getDay()` to return the weekday as a name:

```javascript
const days = [
  "Sunday", 
  "Monday", 
  "Tuesday", 
  "Wednesday", 
  "Thursday", 
  "Friday", 
  "Saturday"
];

const d = new Date();
let day = days[d.getDay()];
```

## UTC Date Methods

UTC date methods are used for working with UTC dates (Universal Time Zone dates):

| **Method**             | **Description**                                               |
| ---------------------- | ------------------------------------------------------------- |
| `getUTCDate()`         | Same as `getDate()`, but returns the UTC date                 |
| `getUTCDay()`          | Same as `getDay()`, but returns the UTC day                   |
| `getUTCFullYear()`     | Same as `getFullYear()`, but returns the UTC year             |
| `getUTCHours()`        | Same as `getHours()`, but returns the UTC hour                |
| `getUTCMilliseconds()` | Same as `getMilliseconds()`, but returns the UTC milliseconds |
| `getUTCMinutes()`      | Same as `getMinutes()`, but returns the UTC minutes           |
| `getUTCMonth()`        | Same as `getMonth()`, but returns the UTC month               |
| `getUTCSeconds()`      | Same as `getSeconds()`, but returns the UTC seconds           |

## Complete JavaScript Date Reference

For a complete Date reference, go to our:

[Complete JavaScript Date Reference.](https://www.w3schools.com/jsref/jsref_obj_date.asp)

The reference contains descriptions and examples of all Date properties and methods.