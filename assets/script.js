var currentNumberWrapper = document.getElementById('contador')
var currentNumber = 0

function eleva() {
  currentNumber = currentNumber + 1
  currentNumberWrapper.innerHTML = currentNumber
  console.log('currentNumber')
}

function abaixa() {
  currentNumber = currentNumber - 1
  currentNumberWrapper.innerHTML = currentNumber
}
