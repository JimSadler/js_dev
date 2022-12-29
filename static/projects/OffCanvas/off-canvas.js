const body = document.body

/**
 * Checks if OffcanvasMenu is open
 * @returns Boolean
 */
function isOffcanvasMenuOpen () {
  return body.classList.contains('offsite-is-open')
}

/**
 * Opens OffcanvasMenu
 */
function openOffcanvasMenu (menu, menuButton) {
  body.classList.add('offsite-is-open')
  menuButton.setAttribute('aria-expanded', 'true')
  menu.focus()
}

/**
 * Closes OffcanvasMenu
 */
function closeOffcanvasMenu (menuButton) {
  body.classList.remove('offsite-is-open')
  menuButton.setAttribute('aria-expanded', 'false')
  menuButton.focus()
}

export default function ({ menu, menuButton, closeButton }) {
  // Opens or closes OffcanvasMenu when menuButton is clicked
  menuButton.addEventListener('click', event => {
    isOffcanvasMenuOpen()
      ? closeOffcanvasMenu(menuButton)
      : openOffcanvasMenu(menu, menuButton)
  })

  closeButton.addEventListener('click', event => {
    closeOffcanvasMenu(menuButton)
  })

  // Closes OffcanvasMenu when escape key pressed
  document.addEventListener('keydown', event => {
    if (isOffcanvasMenuOpen() && event.key === 'Escape') {
      closeOffcanvasMenu(menuButton)
    }
  })

  // Shift Tab to go back to the menu button
  document.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return
    if (!event.shiftKey) return

    if (event.target === menu || event.target === closeButton) {
      event.preventDefault()
      menuButton.focus()
    }
  })
}
