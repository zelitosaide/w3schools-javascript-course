function myFunction(str1, str2, position) {
  return position
    ? str1.slice(0, position) + str2 + str1.slice(position)
    : str2
      ? str2 + str1
      : str1
}


// Write a JavaScript function to insert a string within a string at a particular position (default is 1)


// Test Data:
console.log(myFunction("We are doing some exercises."));
console.log(myFunction("We are doing some exercises", "JavaScript "));
console.log(myFunction("We are doing some exercises", "JavaScript ", 18));

// console.log(insert('We are doing some exercises.'));                    "We are doing some exercises."
// console.log(insert('We are doing some exercises.','JavaScript '));      "JavaScript We are doing some exercises."
// console.log(insert('We are doing some exercises.','JavaScript ',18));   "We are doing some JavaScript exercises."


