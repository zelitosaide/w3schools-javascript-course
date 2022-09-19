const paragraph = document.getElementById('demo')
const light = document.getElementById('light')

const changeElementContent = function () {
  paragraph.innerHTML = 'Hello JavaScript!'
}

const turnOnLight = function () {
  light.src = 'pic_bulbon.gif'
}

const turnOffLight = function () {
  light.src = 'pic_bulboff.gif'
}

const changeFontSize = function () {
  const paragraph = document.getElementById('change-font-size')
  paragraph.style.fontSize = '20px'
}

const hideElement = function () {
  document.getElementById('hiding-element').style.display = 'none'
}

const showElement = function () {
  document.getElementById('hiding-element').style.display = 'block'
}