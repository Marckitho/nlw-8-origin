const nav = document.querySelector('#navigation')
const backToTopButton = document.querySelector('#backToTopButton')
const body = document.querySelector('body')
const scrollClass = 'scroll'
const backToTopClass = 'show'

window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // Verificar se a seção passou da linha
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = targetLine >= sectionEndsAt

  // Limites da Seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.id
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  // console.log(`${sectionId} = ${sectionBoundaries}`)
  console.log(sectionBoundaries)

  sectionBoundaries
    ? menuElement.classList.add('active')
    : menuElement.classList.remove('active')
}

function showNavOnScroll() {
  scrollY > 0
    ? nav.classList.add(scrollClass)
    : nav.classList.remove(scrollClass)
}

function showBackToTopButtonOnScroll() {
  scrollY > 450
    ? backToTopButton.classList.add(backToTopClass)
    : backToTopButton.classList.remove(backToTopClass)
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
