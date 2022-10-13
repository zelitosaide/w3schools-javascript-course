# JavaScript Modules

## Modules

JavaScript modules allow you to break up your code into separate files.

This makes it easier to maintain the code-base.

JavaScript modules rely on the `import` and `export` statements.

## Export

You can export a function or variable from any file.

Let us create a file named `person.js`, and fill it with the things we want to export.

There are two types of exports: `Named` and `Default`.

## Named Exports

You can create named exports two ways. In-line individually, or all at once at the bottom.

### In-line individually: `person.js`

```javascript
export const name = "Jesse";
export const age = 40;
```

### All at once at the bottom: `person.js`

```javascript
const name = "Jesse";
const age = 40;

export { name, age };
```

## Default Exports

Let us create another file, named `message.js`, and use it for demonstrating default export.

You can only have one default export in a file.

### `message.js`

```javascript
const message = () = {
  const name = "Jesse";
  const age = 40;
  return name + " is " + age + " years old.";
};

export default message;
```

## Import

You can import modules into a file in two ways, based on if they are named exports or default exports.

Named exports are constructed using curly braces. Default exports are not.

### Import from named exports

import named exports from the file `person.js`:

```javascript
import { name, age } from "./person.js";
```

### Import from default exports

Import a default export from the file `message.js`:

```javascript
import message from "./message.js";
```

## Note

> Modules only work with the HTTP(s) protocol.
> A web-page opened via the file:// protocol cannot use import / export.