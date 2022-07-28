// How to create variables:
var x;
let y;

// How to use variables:
x = 5;
y = 6;
let z = x + y;

console.log('z', z)

// JavaScript values
// Fixed values OR Literals
10.5
1000

function numbers() {
  document.getElementById('demo1').innerHTML = 10.5;
}

function numbers2() {
  document.getElementById('demo2').innerHTML = 1000;
}

function string() {
  document.getElementById('demo3').innerHTML = 'Amido Afito Pedro Agostinho';
}

function variable() {
  let x;
  x = 6;
  document.getElementById('demo4').innerHTML = x;
}

function operators() {
  document.getElementById('demo5').innerHTML = (5 + 6) * 10;
}

function igualSign() {
  let x, y;
  x = 5;
  y = 6;
  document.getElementById('demo6').innerHTML = x + y;
}

function express1() {
  document.getElementById('demo7').innerHTML = 5 * 10;
}

function expressionVariable() {
  var x;
  x = 5;
  document.getElementById('demo8').innerHTML = x * 5;
}

function expressionVariableString() {
  document.getElementById('demo9').innerHTML = 'Zelito' + ' ' + 'Saide'
}


function keyword() {
  let x, y;
  x = 5 + 6;
  y = x * 10;
  document.getElementById('demo10').innerHTML = y;
}

function varKeyword() {
  var x, y;
  x = 5 + 6;
  y = x * 10;
  document.getElementById('demo11').innerHTML = y;
}

function comment() {
  let x;
  x = 5;
  // x = 6; I will not be executed
  document.getElementById('demo12').innerHTML = x;
}

function caseSensitive() {
  let firstName, firstname;
  firstName = 'Zelito';
  firstname = 'Mane'
  document.getElementById('demo13').innerHTML = firstName;
}