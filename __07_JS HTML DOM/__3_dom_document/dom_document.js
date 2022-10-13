const h1 = document.getElementsByTagName('h1');
const h2 = document.getElementsByClassName('title');

Array.from(document.getElementsByTagName('h1')).forEach(function (value, index) {
  if (index === 0) {
    value.innerHTML = 'Hello';
  } else {
    value.innerHTML = 'World'
  }
});

const headings = document.querySelectorAll('h1');

headings.forEach(function (value) {
  value.onclick = function () {
    // alert(value.innerText);
  }

  value.addEventListener('click', function () {
    alert(value.innerText);
  });
});

const buttons = document.getElementsByTagName('button');

// element.attribute = new value
buttons[0].onclick = function () {
  headings.forEach(function (value, index) {
    // element.style.property = new style
    value.style.color = 'skyblue';
    value.style.fontSize = '12px'
    if (index) {
      // element.innerHTML = new html content
      value.innerHTML = 'Heading changed.'
    }
  });
}

// element.setAttribute(attribute, value)
buttons[0].setAttribute('style', 'color:red');

// document.createElement(element)
const paragraph = document.createElement('p');
paragraph.setAttribute('id', 'paragraph');

// element.innerText = new text content
paragraph.innerText = 'Paragraph created by JavaScript.';

// Or
const text = document.createTextNode('Paragraph created by JavaScript using document.createTextNode()');

// document.appendChild(element)
paragraph.appendChild(text);
document.body.appendChild(paragraph);



// document.removeChild(element)
const btn = document.createElement('button');
btn.setAttribute('type', 'button');
btn.innerText = 'Remove Paragraph';
btn.onclick = function () {
  const child = document.getElementById('paragraph');
  document.body.removeChild(child);
}

document.body.appendChild(btn);



// document.replaceChild(new, old)
const btnReplace = document.createElement('button');
btnReplace.setAttribute('type', 'button');
btnReplace.innerText = 'Replace Child';
btnReplace.addEventListener('click', function () {
  const h2 = document.createElement('h2');
  h2.innerText = document.getElementsByTagName('h1')[1].innerText;
  const parent = document.getElementsByTagName('h1')[1].parentElement;
  // OR const parentElement = document.body;
  parent.replaceChild(h2, document.getElementsByTagName('h1')[1]);
});

document.body.appendChild(btnReplace);



// document.write(text)
const reset = document.createElement('button');
reset.setAttribute('type', 'button');
reset.innerText = 'Reset';

// Adding Events Handlers
reset.onclick = function () {
  document.write('Reset');
}

document.body.appendChild(reset );



// Finding HTML Objects
const anchors = document.anchors

console.log(anchors)

