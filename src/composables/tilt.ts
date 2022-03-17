import vanillaTilt from 'vanilla-tilt'

window.addEventListener('load', () => {
  if (Array.prototype.slice.call(document.querySelectorAll('.card-container'))) {
    window.addEventListener('scroll', () => {
      const targets = Array.prototype.slice.call(document.querySelectorAll('.card-container'))
      vanillaTilt.init(targets, {
        max: 15,
        speed: 400,
      })
    })
  }
})
