function myFunction(end = 5, step = 1) {
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

const output = [...myFunction()];

console.log(output);      // What's output??