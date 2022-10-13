const quizData = [
  {
    question: '1. 請問下述關於「變數宣告」的敘述，何者正確？',
    A: '變數名稱前可以帶有特殊符號，例如「$,_,#」等',
    B: '數字可以作為變數名稱開頭的第一個字元',
    C: '透過「let、const」關鍵字宣告的變數，都可以被重新宣告一次',
    D: '透過「var、let、const」關鍵字宣告的變數，在一開始都不需要賦予值',
    answer: 'A'
  },
  {
    question: '2. 下列關於「console」的敘述何者錯誤？',
    A: '可以在 JavaScript 中使用 console.log() 方法，將指定變數的值在主控台印出來',
    B: 'console 指的是瀏覽器開發者工具中的主控台',
    C: 'console.log() 可以帶入各種變數，包含函式宣告',
    D: 'console.log() 可以查詢沒被宣告過的變數，且不會報錯',
    answer: 'D'
  },
  {
    question: '3. 關於賦值運算子的敘述何者錯誤？',
    A: '我們可以使用賦值運算子賦予變數新的值',
    B: '賦值運算子可以用來進行兩個變數值的相等比較',
    C: '一定要使用賦值運算子才能賦值給變數',
    D: '賦值運算子的右側可以進行加減乘除的運算',
    answer: 'B'
  },
  {
    question: '4. 請問字串方法 trim() 的用途為何？',
    A: '在字串前後加上空白符號',
    B: '過濾掉字串中所有的空白符號',
    C: '過濾掉字串前後的空白符號',
    D: '在所有字串字元間隙中加上空白符號',
    answer: 'C'
  },
  {
    question: '5. 關於「null」的敘述何者為正確？',
    A: '不能用來作為流程判斷的條件',
    B: '在變數尚未被宣告的時候讀取變數，會在主控台出現null的值',
    C: '在變數尚未被賦值的時候讀取變數，會在主控台出現null的值',
    D: '我們可以賦予 null 值到變數上，並且主控台不會報錯',
    answer: 'B'
  }
]
const question = document.querySelector('.question')
const a = document.querySelector('#a_text')
const b = document.querySelector('#b_text')
const c = document.querySelector('#c_text')
const d = document.querySelector('#d_text')
const submitBtn = document.querySelector('button')
const allOption = document.querySelectorAll('input')

let current = 0
let score = 0
let correct = 0
getQuiz()

function getQuiz() {
  const currentQuiz = quizData[current]
  question.innerHTML = currentQuiz.question
  a.innerHTML = currentQuiz.A
  b.innerHTML = currentQuiz.B
  c.innerHTML = currentQuiz.C
  d.innerHTML = currentQuiz.D
}

function checkAnswer() {
  allOption.forEach((i) => {
    if (i.checked) {
      if (i.id === quizData[current].answer) {
        score = score + 20
        correct += 1
      } 
    } 
    i.checked = false
  })
}

submitBtn.addEventListener('click', () => {
  checkAnswer()
  current++
  if (current < quizData.length) {
    getQuiz()
  } else {
    //Show score
    alert('完成作答！您獲得了 ' + score + ' 分!' + '答對題數：' + correct + '/5')
    current = 0
    getQuiz()
  }
})