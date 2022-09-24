// document.body.onload = function () {
//   const contents = document.getElementById("id");
//   const anchors = document.anchors;

//   Array.from(anchors).forEach(function (anchor) {
//     const li = document.createElement("li");
//     const a = document.createElement("a");
//     a.textContent = anchor.textContent;
//     a.href = "#" + anchor.name;
//     li.appendChild(a);
//     contents.appendChild(li);
//   });
// };

// OR
function init() {
  const contents = document.getElementById("id");
  const anchors = document.anchors;

  for (const anchor of anchors) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = anchor.textContent;
    a.href = "#" + anchor.name;
    li.appendChild(a);
    contents.appendChild(li);
  }
}