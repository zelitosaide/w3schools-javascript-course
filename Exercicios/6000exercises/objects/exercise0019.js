const array = [
  { name: "A", i3: "AAAA"},
  { name: "B", i3: "BBBB"},
  { name: "C", i3: "CCCC"},
  { name: "D", i3: "DDDD"},
  { name: "E", i3: "EEEE"},
]

const newArray = array.map(value => {
  return value["i3"]
  // console.log(value.i3);
});

array.map((value, index) => (
  <div key={index}>{value.i3}</div>
))



console.log(newArray)