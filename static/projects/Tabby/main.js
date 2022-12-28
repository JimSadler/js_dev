import Tabby from './tablist.js'

// Resolve browser inconsistences when clicking on buttons
document.addEventListener('click', (event) => {
  if (event.target.matches('button')) {
    event.target.focus()
  }
})

const tabbies = [...document.querySelectorAll('.tabby')]
if (tabbies.length > 0) {
  tabbies.forEach(tabby => {
    new Tabby(tabby)
  })
}
