# JavaScript JSON

JSON is a format for storing and transporting data.

JSON is often used when data is sent from a server to a web page.

## What is JSON?

* JSON stands for **J**ava**S**cript **O**bject **N**otation
* JSON is a lightweight data interchange format
* JSON is language independent [^1]
* JSON is "self-describing" and easy to understand

[^1]: The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.

## JSON Example

This JSON syntax defines an employees object: an array of 3 employee records (objects):

```json
{
  "employees": [
    { 
      "firstName": "John",
      "lastName": "Doe"
    },
    { 
      "firstName": "Anna",
      "lastName": "Smith"
    },
    { 
      "firstName": "Peter",
      "lastName": "Jones"
    }
  ]
}
```

