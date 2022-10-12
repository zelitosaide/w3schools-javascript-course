function myFunction(date1, date2) {
  return (date1.getFullYear() === date2.getFullYear()
    && date1.getMonth() === date2.getMonth()
    && date1.getDate() === date2.getDate()
    && date1.getHours() === date2.getHours()
    && date1.getMinutes() === date2.getMinutes()
    && date1.getSeconds() === date2.getSeconds()
  )
}

console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')));
console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));
console.log(myFunction(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));

// OR

function myFunction2(a, b) {
  return a.getTime() === b.getTime();
}


// Sounds easy, but you need to know the trick
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise

// Test Cases:

// myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))   -> Expected false
// myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))   -> Expected true
// myFunction(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))   -> Expected false
