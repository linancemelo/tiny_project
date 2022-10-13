function createStar() {
  const star = document.createElement('div')
  star.classList.add('star')
  star.style.left = Math.random() * (100-25+1) + 25 + '%'
  star.style.animationDuration = Math.random() * 2 + 3 + 's'
  star.innerHTML = '★'
  document.querySelector('.fall').appendChild(star)

  setTimeout(() => {
    star.remove()
  }, 4000)
}

setInterval(createStar, 500)