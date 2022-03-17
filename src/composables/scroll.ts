let hero_height: number
let about_height: number
let project_height: number
let toggle: Element | null
let menu: Element | null

export function definePageHeights() {
  const hero = document.getElementsByClassName('hero-section')[0]
  hero_height = parseFloat(getComputedStyle(hero).height.split('px')[0])
  const about = document.getElementsByClassName('about-section')[0]
  about_height = parseFloat(getComputedStyle(about).height.split('px')[0])
  const project = document.getElementsByClassName('project-section')[0]
  project_height = parseFloat(getComputedStyle(project).height.split('px')[0])
  toggle = document.querySelector('.toggle-navbar')
  menu = document.querySelector('.menu')
}

export function navColorChange() {
  if (window.scrollY > (hero_height - 40) && window.scrollY < (hero_height + about_height + project_height - 40))
    toggle?.classList.add('dark-btn')
  else
    toggle?.classList.remove('dark-btn')
  if (window.scrollY > (hero_height - 5))
    menu?.classList.add('sticky')
  else
    menu?.classList.remove('sticky')
}

window.addEventListener('scroll', definePageHeights)
window.addEventListener('resize', definePageHeights)
window.addEventListener('scroll', navColorChange, false)
