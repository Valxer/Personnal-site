export function homeScroll() {
  const home = document.querySelector('.hero-section')
  home?.scrollIntoView()
}

export function aboutScroll() {
  const about = document.querySelector('.about-section')
  about?.scrollIntoView()
}

export function contactScroll() {
  const contact = document.querySelector('.contact-section')
  contact?.scrollIntoView()
}

export function projectScroll() {
  const project = document.querySelector('.project-section')
  project?.scrollIntoView()
}

export function goTo(link?: string) {
  window.open(link, '_blank')
}
