function insert(a, b) {
  const aux = a.split('').reverse()
  let count = 0, string = '', newString = ''

  aux.forEach((value, index) => {
    if (count % 3 === 0 && index > 2) {
      string += b + value
    } else {
      string += value
    }
    count++
  })

  string.split('').reverse().forEach(value => {
    newString += value
  })

  return newString
}

// console.log(insert('abcdefg', '#'))
function myFunction(a, b) {
  let result = []
  let rest = a

  while (rest.length) {
    result.push(rest.slice(-3))
    rest = rest.slice(0, -3)
  }
  return result.reverse().join(b)
}

// console.log(myFunction('abcdefg', '.'))

function char(str) {
  // const charCodes = str.split('').map((_, index) => {
  const charCodes = [...str].map((_, index) => {
    return str.charCodeAt(index) + 1
  })

  let result = ''

  charCodes.forEach(value => {
    result += String.fromCharCode(value)
  })

  return result
}

// console.log(char('bnchmf'))

const string = 'abcdefghijklmnopqrstuvwyz';
const array = [...string];

// console.log(string, array)

function myFunction2(str) {
  return [...str]
    .map((value) => String.fromCharCode(value.charCodeAt() + 1))
    .join('')
}

// console.log(myFunction2('bgddrd'))
// console.log(myFunction2('sdrshmf'))

function myFunction3(a, b) {
  const char = a.charAt(0).toUpperCase();
  const string = [...a].filter(v => v !== '%').join('') + [...b].reverse().filter(v => v !== '%').join('')

  return char + string.slice(1)
}

console.log(myFunction3('c%ountry', 'edis'))
console.log(myFunction3('java', 'tpi%rcs'))
console.log(myFunction3('down', 'tpi%rcs'))

function myFunction4(a, b) {
  const func = x => x.replace('%','');
  const first = func(a);
  const second = func(b).split('').reverse().join('');
  return first.charAt(0).toUpperCase() + first.slice(1) + second;
}

