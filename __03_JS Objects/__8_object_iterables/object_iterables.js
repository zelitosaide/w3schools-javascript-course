function myFunction(end = 10, step = 1) {
  let count = 0;
  return {
    next: function () {
      return count < end ? ({
        value: count += step, done: false
      }) : ({
        done: true
      })
    }
  }
}

const counter = myFunction();

let next = counter.next();

while (!next.done) {
  console.log(next.value);
  next = counter.next();
}

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


// Iterator maker function
function myFunction2(end = 5, step = 1) {
  return {
    [Symbol.iterator]: function () {
      let count = 0;
      return {
        next: function () {
          return count < end ? ({
            value: count += step, done: false
          }) : ({
            done: true
          })
        }
      }
    }
  }
}

console.log([...myFunction2()]);