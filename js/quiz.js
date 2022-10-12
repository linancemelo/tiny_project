const quizData = [
  {
    question: 'NBA球星Lebron James背號多少？',
    A: 24,
    B: 6,
    C: 23,
    D: 30,
    answer: 'B'
  },
  {
    question: 'NBA球星Stephen Curry背號多少？',
    A: 24,
    B: 6,
    C: 23,
    D: 30,
    answer: 'D'
  },
  {
    question: 'NBA球星Kobe Bryant背號多少？',
    A: 24,
    B: 6,
    C: 23,
    D: 30,
    answer: 'A'
  },
  {
    question: 'NBA球星Micheal Jordan背號多少？',
    A: 24,
    B: 6,
    C: 23,
    D: 30,
    answer: 'C'
  },
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
        score = score + 25
        console.log(score, 'true')
      } else {
        console.log(score, 'wrong')
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
    alert('Finished! You got ' + score + ' points !')
  }
})