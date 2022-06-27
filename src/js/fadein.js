let fadeInTarget = document.querySelectorAll('.fade-in')
window.addEventListener('scroll', () => {
  for (let i = 0; i < fadeInTarget.length; i++) {
    const rect = fadeInTarget[i].getBoundingClientRect().top
    const scroll = window.pageYOffset || document.documentElement.scrollTop
    const offset = rect + scroll
    const windowHeight = window.innerHeight // 現在のブラウザの高さ
    if (scroll > offset - windowHeight + 150) {
      fadeInTarget[i].classList.add('scroll-in')
    }
  }
})
