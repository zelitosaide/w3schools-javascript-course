const parent1 = document.querySelector(".parent-1");
const parent2 = document.querySelector(".parent-2");

// const parents = document.getElementsByClassName("parent");

const parents = document.querySelectorAll(".parent");

console.log(parent1.parentElement === parent1.parentNode);

console.log(parent1.children);

console.log(parent1.childNodes);

console.log(parent2.children);

console.log(parent2.childNodes);

console.log(parents);

const grandParent = document.querySelector(".grand-parent");

const child = document.createElement("div");

child.classList.add("parent");

grandParent.appendChild(child);

console.log("parents", parents);

// console.log("parent", document.querySelectorAll(".parent"));

// console.log(grandParent);