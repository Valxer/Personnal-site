export * from './dark'
export function aboutScroll() {
  const about = document.querySelector('.about-section')
  about?.scrollIntoView()
}
export function contactScroll() {
  const contact = document.querySelector('contact-section')
  contact?.scrollIntoView()
}