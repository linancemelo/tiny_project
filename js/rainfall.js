function createStar() {
  const star = document.createElement('div')
  star.classList.add('star')
  star.style.left = Math.random() * 100 + 'vh'
  star.style.animationDuration = Math.random() * 2 + 3 + 's'
  star.innerHTML = '★'
  document.body.appendChild(star)

  setTimeout(() => {
    star.remove()
  }, 4000)
}

setInterval(createStar, 500)