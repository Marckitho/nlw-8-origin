const nav = document.querySelector('#navigation')
const body = document.querySelector('body')
const scrollClass = 'scroll'

function onScroll() {
  scrollY > 0
    ? nav.classList.add(scrollClass)
    : nav.classList.remove(scrollClass)
}

function openMenu() {
  body.classList.add('menu-expanded')
}

function closeMenu() {
  body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home, 
#home img, 
#home .numbers, 
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`)