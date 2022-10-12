const pw = document.querySelector('.pw')
const copy = document.querySelector('.copy')
const len = document.querySelector('#length')
const upper = document.querySelector('#upper')
const lower = document.querySelector('#lower')
const num = document.querySelector('#number')
const generate = document.querySelector('.generate')

const upperLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerLetter = 'abcdefghijklmnopqrstuvwxyz'
const numberLetter = '0123456789'

function getUpper() {
  return upperLetter[Math.floor(Math.random() * upperLetter.length)]
}
function getLower() {
  return lowerLetter[Math.floor(Math.random() * lowerLetter.length)]
}
function getNumber() {
  return numberLetter[Math.floor(Math.random() * numberLetter.length)]
}

generate.addEventListener('click', generatePassword)
function generatePassword() {
  let password = ''
  for (let i = 0; i < len.value; i++) {
    const x = generateX()
    password += x
  }
  pw.innerText = password
}
function generateX() {
  let tempList = []
  if (upper.checked) {
    tempList.push(getUpper())
  }
  if (lower.checked) {
    tempList.push(getLower())
  }
  if (num.checked) {
    tempList.push(getNumber())
  }
  return tempList[Math.floor(Math.random() * tempList.length)]
}

copy.addEventListener('click', () => {
  const textArea = document.createElement('textarea')
  const password = pw.innerHTML
  if (!password) {
    return
  }
  textArea.value = password
  document.body.appendChild(textArea)
  textArea.select()
  document.execCommand('copy')
  textArea.remove()
})