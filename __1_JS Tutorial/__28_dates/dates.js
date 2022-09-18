const d = new Date();

// console.log(d.getFullYear());
// console.log(getMonth(d.getUTCMonth()));
// console.log(d.getUTCDate());
// console.log(getDay(d.getUTCDay()));
// console.log(d.getHours());
// console.log(d.getUTCMinutes());
// console.log(d.getUTCSeconds());
// console.log(d.getUTCMilliseconds());

// console.log(
//   d.getDate() + "/" + getMonth(d.getMonth()) + "/" + d.getFullYear(), 
//   d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
// );

// console.log(Math.floor(d.getTime() / (1000 * 60 * 60 * 24)));


// 1 second    -> 1000 milliseconds
// 1 minute    -> 60 seconds
// 1 hour      -> 60 minutes
// 1 day       -> 24 hours
// 1 week      -> 7 days
// 1 month     -> 4 weeks
// 1 year      -> 12 month
// 1 year      -> 365 days



const date1 = new Date(2022, 1);
const date2 = new Date(2020, 1);



console.log(date1.toISOString().split("T"));
console.log(date2.toISOString().split("T"));

const date3 = new Date(date1 - date2);
console.log(date3.toISOString().split("T"));

const date4 = new Date(0);

console.log(date4.toISOString().split("T"));
console.log(date3.getFullYear() - date4.getFullYear());

console.log("----");
console.log(date3.getTime() / 1000 / 60 / 60 / 24);
console.log(Math.floor(date3.getTime() / 1000 / 60 / 60 / 24 / 7));
console.log((date3.getTime() / 1000 / 60 / 60 / 24));
console.log(date3);




function getMonth(number) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return months[number];
}

function getDay(number) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  return days[number];
}