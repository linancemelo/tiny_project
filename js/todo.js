const input = document.querySelector('.input')
const addBtn = document.querySelector('button')
const todoList = document.querySelector('.todoList')
const tab = document.querySelector('.tab')

let data = []
addBtn.addEventListener('click', addTolist)
function renderData(data) {
  let str = ''
  data.forEach((i) => {
    str += `
      <li data-id="${i.id}">
        <label class="checkbox">
          <input type="checkbox" ${i.checked}/>
          <span>${i.text}</span>
        </label>
        <a href="#" class="delete" >X</a>
      </li>
    `
  })
  todoList.innerHTML = str
}

function addTolist() {
  let txt = input.value.trim()
  const obj = {
    text: txt,
    id: new Date().getTime(),
    checked: false
  }
  data.push(obj)
  input.value = ''
  updateList()
}

todoList.addEventListener('click', detectNode)
function detectNode(e) {
  const id = e.target.closest('li').dataset.id
  const i = data.findIndex((item) => item.id == id)
  e.target.classList.contains('delete') ? removeItem(i) : changeState(i)
  updateList(data)
}
function removeItem(i) {
  data.splice(i, 1)
}
function changeState(i) {
  if (data[i].checked === 'checked') {
    data[i].checked = ''
  } else {
    data[i].checked = 'checked'
  }
}

let category = 'all'
tab.addEventListener('click', changeTab)
function changeTab(e) {
  category = e.target.innerHTML
  const tabs = document.querySelectorAll('.tabs')
  tabs.forEach((i) => {
    i.classList.remove('active')
  })
  e.target.classList.add('active')
  updateList()
}
function updateList() {
  let tempList = []
  switch (category) {
    case "all":
      tempList = data
      break
    case "todo":
      tempList = data.filter(i => i.checked === false)
      break
    case "done":
      tempList = data.filter(i => i.checked === 'checked')
      break
  }
  renderData(tempList)
}

