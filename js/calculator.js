const
  numbers = document.querySelectorAll('.number'),
  dot = document.querySelector('.dot'),
  operations = document.querySelectorAll('.operation'),
  del = document.querySelector('.delete'),
  percentage = document.querySelector('.percentage'),
  clear = document.querySelector('.clear'),
  result = document.querySelector('.result')

let tempVal = '0'
let evalArr = []

// 點擊數字渲染
for (let i = 0; i < numbers.length; i++){
  numbers[i].addEventListener('click', showVal)
}
function showVal(e) {
  let num = e.target.innerHTML
  if (tempVal === '0') {
    tempVal = ''
  }
  if (evalArr.length === 1) {
    evalArr = []
  }
  tempVal += num
  result.innerHTML = tempVal
  if (result.innerHTML.length > 10) {
    result.style.fontSize = '2.5rem'
  }
}
// 小數點
dot.addEventListener('click', () => {
  if (!tempVal.includes('.')) {
    tempVal += '.'
  }
  result.innerHTML = tempVal
})

// 點擊運算符
for (let i = 0; i < operations.length; i++){
  operations[i].addEventListener('click', calOperation)
}
function calOperation(e) {
  let operator = e.target.getAttribute('value')
  switch (operator) {
    case '+':
      evalArr.push(tempVal, '+')
      tempVal = '0'
      break
    case '-':
      evalArr.push(tempVal, '-')
      tempVal = '0'
      break
    case '*':
      evalArr.push(tempVal, '*')
      tempVal = '0'
      console.log(evalArr)
      break
    case '/':
      evalArr.push(tempVal, '/')
      tempVal = '0'
      break
    case '=':
      evalArr.push(tempVal)
      let resultVal = eval(evalArr.join(''))
      if (resultVal.toString().includes('.')) {
        if (resultVal.toString().split('.')[1].length > 8) {
          resultVal = resultVal.toFixed(8)
        }
      }
      result.innerHTML = resultVal
      evalArr = []
      tempVal = ''
      evalArr.push(resultVal)
      break
  }
}

// 百分比
percentage.addEventListener('click', () => {
  if (evalArr.length === 1) {
    evalArr[0] = evalArr[0] / 100
    result.innerHTML = evalArr[0]
    console.log(evalArr)
  }
  else {
    tempVal = tempVal / 100
    result.innerHTML = tempVal
  }
})
// 刪除
del.addEventListener('click', () => {
  let tempValLength = tempVal.length
  tempVal = tempVal.slice(0, tempValLength - 1)
  if (tempVal === '0') {
    tempVal = ''
  }
  if (tempVal.length === 0) {
    tempVal = '0'
  }
  result.innerHTML = tempVal
})
// 歸0
clear.addEventListener('click', () => {
  tempVal = '0'
  evalArr = []
  result.innerHTML = 0
})