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