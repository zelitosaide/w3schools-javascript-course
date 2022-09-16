# JavaScript Date Objects

JavaScript **Date Object** lets us work with dates:

**Fri Sep 16 2022 15:41:51 GMT+0200 (Central Africa Time)**

### Example

```javascript
const d = new Date();
```

## JavaScript Date Output

By default, JavaScript will use the browser's time zone and display a date as a full text string:

**Fri Sep 16 2022 15:41:51 GMT+0200 (Central Africa Time)**

> You will learn much more about how to display dates, later in this tutorial.

## Creating Date Objects

Date objects are created with the `new Date()` constructor.

There are **4 ways to** create a new date object:

```javascript
new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)
```

## new Date()

`new Date()` creates a new date object with the **current date and time**:

```javascript
const d = new Date();
```

> Date objects are static. The computer time is ticking, but date objects are not.

## new Date(year, month, ...)

`new Date(year, month, ...)` creates a new date object with a **specified date and time**.

7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):

```javascript
const d = new Date(2018, 11, 24, 10, 33, 30, 0);
```

> **Note:** JavaScript counts months from **0** to **11**:
> **January = 0.**
> **December = 11.**

Specifying a month higher than 11, will not result in an error but add the overflow to the next year:

Specifying:

```javascript
const d = new Date(2018, 15, 24, 10, 33, 30);
```

Is the same as:

```javascript
const d = new Date(2019, 3, 24, 10, 33, 30);
```

Specifying a day higher than max, will not result in an error but add the overflow to the next month:

Specifying:

```javascript
const d = new Date(2018, 5, 35, 10, 33, 30);
```

Is the same as:

```javascript
const d = new Date(2018, 6, 5, 10, 33, 30);
```

## Using 6, 4, 3, or 2 Numbers

6 numbers specify year, month, day, hour, minute, second:

```javascript
const d = new Date(2018, 11, 24, 10, 33, 30);
```

5 numbers specify year, month, day, hour, and minute:

```javascript
const d = new Date(2018, 11, 24, 10, 33);
```

4 numbers specify year, month, day, and hour:

```javascript
const d = new Date(2018, 11, 24, 10);
```

3 numbers specify year, month, and day:

```javascript
const d = new Date(2018, 11, 24);
```

2 numbers specify year and month:

```javascript
const d = new Date(2018, 11);
```

> You cannot omit month. If you supply only one parameter it will be treated as milliseconds.

```javascript
const d = new Date(2018);
```