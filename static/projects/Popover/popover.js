export default function Popover (triggerElement) {
  const popoverElement = getPopover(triggerElement) || createPopover(triggerElement)

  function getPopover () {
    return document.querySelector(`#${triggerElement.dataset.target}`)
  }

  function createPopover () {
    const popover = document.createElement('div')
    popover.classList.add('popover')
    popover.dataset.position = triggerElement.dataset.popoverPosition

    // Dynamic id
    const id = generateUniqueString(5)
    popover.id = id
    triggerElement.dataset.target = id

    const p = document.createElement('p')
    p.textContent = triggerElement.dataset.content

    popover.appendChild(p)
    document.body.appendChild(popover)
    return popover
  }

  const popover = {
    show () {
      popoverElement.removeAttribute('hidden')
    },

    hide () {
      popoverElement.setAttribute('hidden', true)
    },

    calculatePosition () {
      const popoverTriggerRect = triggerElement.getBoundingClientRect()
      const popoverRect = popoverElement.getBoundingClientRect()
      const { position } = popoverElement.dataset
      const space = 20

      if (position === 'top') {
        return {
          left: (popoverTriggerRect.left + popoverTriggerRect.right) / 2 - popoverRect.width / 2,
          top: popoverTriggerRect.top - popoverRect.height - space
        }
      }

      if (position === 'left') {
        return {
          left: popoverTriggerRect.left - popoverRect.width - space,
          top: (popoverTriggerRect.top + popoverTriggerRect.bottom) / 2 -
            (popoverRect.height / 2)
        }
      }

      if (position === 'right') {
        return {
          left: popoverTriggerRect.right + space,
          top: (popoverTriggerRect.top + popoverTriggerRect.bottom) / 2 - popoverRect.height / 2
        }
      }

      if (position === 'bottom') {
        return {
          left: (popoverTriggerRect.left + popoverTriggerRect.right) / 2 - popoverRect.width / 2,
          top: popoverTriggerRect.bottom + space
        }
      }
    },

    // Event listeners
    handleClick (event) {
      popoverElement.hasAttribute('hidden')
        ? popover.show()
        : popover.hide()
    },

    handleTriggerTab (event) {
      const { key } = event
      if (key !== 'Tab') return
      if (event.shiftKey) return

      const focusables = getKeyboardFocusableElements(popoverElement)

      if (popoverElement.hasAttribute('hidden')) return
      if (focusables.length === 0) return

      event.preventDefault()
      focusables[0].focus()
    },

    handlePopoverTab (event) {
      if (event.key !== 'Tab') return
      const focusables = getKeyboardFocusableElements(popoverElement)

      if (event.shiftKey && event.target === focusables[0]) {
        event.preventDefault()
        return triggerElement.focus()
      }

      if (!event.shiftKey && event.target === focusables[focusables.length - 1]) {
        return triggerElement.focus()
      }
    },

    handleEscapeKey (event) {
      const { key } = event
      if (key !== 'Escape') return

      popover.hide()
      triggerElement.focus()
    }
  }

  // Execution
  const popoverPosition = popover.calculatePosition()
  console.log('position', popoverPosition)
  popoverElement.style.top = `${popoverPosition.top}px`
  popoverElement.style.left = `${popoverPosition.left}px`
  popover.hide()

  // Add event listeners
  triggerElement.addEventListener('click', popover.handleClick)
  triggerElement.addEventListener('keydown', popover.handleTriggerTab)
  popoverElement.addEventListener('keydown', popover.handlePopoverTab)
  popoverElement.addEventListener('keydown', popover.handleEscapeKey)

  document.addEventListener('click', event => {
    const target = event.target
    if (
      target.closest('.popover') !== popoverElement &&
      target.closest('button') !== triggerElement
    ) {
      console.log('hello')
      popover.hide()
    }
  })
}

function generateUniqueString (length) {
  return Math.random().toString(36).substring(2, 2 + length)
}

/**
 * Get keyboard focusable items within an element
 * @param {HTMLElement} element
 */
function getKeyboardFocusableElements (element) {
  return [...element.querySelectorAll(
    'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
  )]
}
