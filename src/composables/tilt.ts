import vanillaTilt from 'vanilla-tilt'

window.addEventListener('load', () => {
  const targets = Array.prototype.slice.call(document.querySelectorAll('.card-container'))
  vanillaTilt.init(targets, {
    max: 15,
    speed: 400,
  })
})
