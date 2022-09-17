function myFunction(date1, date2) {
  return {
    hrs: Math.abs(date1.getHours() - date2.getHours()),
    min: Math.abs(date1.getMinutes() - date2.getMinutes()),
    sec: Math.abs(date1.getSeconds() - date2.getSeconds())
  }
}

console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:10')));
console.log(myFunction(new Date('2000/01/01 09:50:23'), new Date('2000/01/01 08:00:00')));
console.log(myFunction(new Date('2000/01/01 11:04:12'), new Date('2000/01/01 08:00:00')));

// OR

function myFunction2(a, b) {
  const dif = Math.abs(a - b);
  const hrs = Math.floor(dif / 1000 / 60 / 60);
  const min = Math.floor(dif / 1000 / 60) % (hrs * 60 || 60);
  const sec = Math.floor(dif / 1000) % (min * 60 + hrs * 60 * 60 || 60);
  return { hrs, min, sec }
}

// This is a more difficult challenge
// Write a function that takes two date instances as arguments
// It should return an object with the properties 'hrs', 'min', and 'sec'
// The corresponding values should display the absolute difference between the two dates in hours, minutes, and second

// Test Cases:

// myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:10'))
// Expected { hrs: 0, min: 45, sec: 10 }

// myFunction(new Date('2000/01/01 09:50:23'), new Date('2000/01/01 08:00:00'))
// Expected { hrs: 1, min: 50, sec: 23 }

// myFunction(new Date('2000/01/01 11:04:12'), new Date('2000/01/01 08:00:00'))
// Expected { hrs: 3, min: 4, sec: 12 }
