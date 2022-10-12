function myFunction(str, count = 1) {
  return count === 1 ? str : (new Array(count + 1)).join(str);
}

function myFunction2(str, count) {
  return !count ? str : new Array(count + 1).join(str);
}


// Write a JavaScript function to concatenates a given string n times (default is 1)

// Test Data:
console.log(myFunction("Ha!"));
console.log(myFunction("Ha!", 2));
console.log(myFunction("Ha!", 3));

console.log(myFunction2("Ha!"));
console.log(myFunction2("Ha!", 2));
console.log(myFunction2("Ha!", 3));

// console.log(myFunction('Ha!'));        "Ha!"
// console.log(myFunction('Ha!',2));      "Ha!Ha!"
// console.log(myFunction('Ha!',3));      "Ha!Ha!Ha!"