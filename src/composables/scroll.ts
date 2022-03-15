let hero_height: number
let about_height: number
let project_height: number
let toggle: Element | null

export function definePageHeights() {
  const hero = document.querySelector('.hero-section')
  hero_height = parseFloat(getComputedStyle(hero).height.split('px')[0])
  const about = document.querySelector('.about-section')
  about_height = parseFloat(getComputedStyle(about).height.split('px')[0])
  const project = document.querySelector('.project-section')
  project_height = parseFloat(getComputedStyle(project).height.split('px')[0])
  toggle = document.querySelector('.toggle-navbar')
}

export function navColorChange() {
  if (window.scrollY > (hero_height - 40) && window.scrollY < (hero_height + about_height + project_height - 40))
    toggle?.classList.add('dark-btn')
  else
    toggle?.classList.remove('dark-btn')
}

window.addEventListener('load', definePageHeights)
window.addEventListener('resize', definePageHeights)
window.addEventListener('scroll', navColorChange, false)
