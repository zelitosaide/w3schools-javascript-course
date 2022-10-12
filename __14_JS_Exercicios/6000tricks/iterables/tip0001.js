// Create an Object
const myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function (end = 10) {
  let count = 0;
  return {
    next: function () {
      return count < end ? ({
        value: ++count, done: false
      }) : ({
        done: true
      })
    }
  }
}

console.log(myNumbers[Symbol.iterator]);

for (const count of myNumbers) {
  console.log(count);
}
