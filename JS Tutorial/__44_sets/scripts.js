function myFunction(...args) {
  return args.reduce(function (accumulator, value) {
    return accumulator.concat(value);
  });
}


function myFunction2(...args) {
  return args.flat();
}

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

// console.log("Array:", myFunction([1, 3, 4], ["A", "B"], [true]));



function myFunction3(arr, num) {
  return num < 6 ? [0, ...arr] : [num, ...arr];
}

function myFunction4(arr, num) {
  return [...(num > 5 ? [num] : [0]), ...arr];
}

function unshift(arr, num) {
  if (num < 6) {
    arr.unshift(0);
  } else {
    arr.unshift(num);
  }
  return arr;
}

// console.log(unshift([1, 2, 3], 6));


function myFunction5(a, n) {
  return a.filter(function (value, index) {
    if ((index + 1) % n === 0) {
      return value;
    }
  });
}


function myFunction6(a, n) {
  let rest = [...a];
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (rest.length < n) break;
    result.push(rest[n - 1]);
    rest = rest.slice(n);
  }
  return result;
}

function myFunction7(a, b) {
  return Array.from(new Set(a.concat(b))).sort(function (a, b) { return a - b });
}

function myFunctio8(a, b) {
  return [...new Set([...a, ...b])].sort((x, y) => x - y);
}

function group(array) {
  const letters = [...new Set(array.map(value => value.charAt()))];
  const object = {};

  letters.forEach(value => {
    object[value.toLowerCase()] = array.filter(x => x.charAt() === value);
  });

  return object;
}

function myFunction9(arr) {
  return arr.reduce((acc, cur) => {
    const firstLetter = cur.toLowerCase().charAt(0);
    return { ...acc, [firstLetter]: [...(acc[firstLetter] || []), cur] };
  }, {});
}

console.log(group(['Alf', 'Alice', 'Ben']));