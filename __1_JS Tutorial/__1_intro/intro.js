// JavaScript Can Change HTML Content
document.getElementById("demo1").innerHTML = "Hello, JavaScript!";

// JavaScript accepts both double and single quotes:
document.getElementById('demo1').innerHTML = 'Hello, JavaScript!';

// JavaScript Can Change HTML Attribute Values
const image = document.getElementById("myImage");

document.getElementById("btn1").addEventListener("click", function () {
  image.src = "./assets/pic_bulbon.gif";
});

document.getElementById("btn2").addEventListener("click", function () {
  image.src = "./assets/pic_bulboff.gif";
});

// JavaScript Can Change HTML Styles (CSS)
document.getElementById("btn3").addEventListener("click", function () {
  document.getElementById("demo2").style.fontSize = "35px";
});

// JavaScript Can Hide HTML Elements
document.getElementById("btn4").addEventListener("click", function () {
  document.getElementById("demo3").style.display = "none";
});

// JavaScript Can Show HTML Elements
document.getElementById("btn5").addEventListener("click", function () {
  document.getElementById("demo4").style.display = "block";
});