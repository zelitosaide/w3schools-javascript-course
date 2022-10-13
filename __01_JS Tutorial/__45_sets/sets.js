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

// console.log(group(['Alf', 'Alice', 'Ben']));

function noRepetition(arg) {
  return arg.reduce(function (accumulator, value) {
    if (!accumulator.includes(value)) {
      accumulator.push(value);
    }
    return accumulator;
  }, []);
}


// version 2 (no repetition)
function noRepetition2(arr) {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    let exist = false;

    for (let j = 0; j < newArray.length; j++) {
      if (arr[i] === newArray[j]) {
        exist = true;
        break;
      }
    }

    if (!exist) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

function noRepetition3(arr) {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (!exist(arr[i], newArray)) {
      newArray.push(arr[i]);
    }
  }

  return newArray;
}

function exist(value, array) {
  for (let j = 0; j < array.length; j++) {
    if (array[j] === value) {
      return true;
    }
  }
  return false;
}


console.log(noRepetition2([1, 1, 2, 3, 3]));
console.log(noRepetition3([1, 1, 2, 3, 3, 4, 5, 6, 6, 3]));


// console.log(noRepetition([1, 1, 2, 3, 3, 4, 5, 6, 6]));

function myFunction8888(a, b) {
  return [...a, ...b].filter((value, index, arr) => {
    return arr.indexOf(value) === index;
  });
}

// console.log(noRepetition([1, 2, 2, 3, 3]));

// console.log(noRepetition([1, 1, 2, 3, 3, 4, 5, 6, 6]))

// [1, 1, 2, 3, 3, 4, 5, 6, 6]


function reduce(array) {
  return array.reduce(function (total, value) {
    console.log(total);
    // total.push(value);
    return value;
  }, 9);
}


// console.log(reduce([1, 2]));

function createFunction() {
  console.log("Hello, World");
  console.log("I like coding...");
  console.log("Coding is amazing...");
  const result = -(500 + 7900 * 2 + 2000 - 19523) + 8500;
  console.log("Total: ", result);
}

createFunction();

function reduce2(...args) {
  return args.reduce(function (total, value) {
    return total.concat(value);
  });
}



// console.log(reduce2([0, 4], [1, 4], [3, 5]));


