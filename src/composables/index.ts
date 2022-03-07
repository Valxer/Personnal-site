export * from './dark'
export function aboutScroll() {
  const about = document.querySelector('.about-section')
  console.log("about : ", about)
  about?.scrollIntoView()
}
export function contactScroll() {
  const contact = document.querySelector('.contact-section')
  console.log("contact : ", contact)
  contact?.scrollIntoView()
}