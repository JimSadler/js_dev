const defaults = {
  buttonElement: '',
  modalElement: '',
  afterOpen () {},
  type: 'normal',
  delayBeforeOpening: 0
}

export default function Modal (settings) {
  settings = Object.assign({}, defaults, settings)

  const { type } = settings
  let modal

  // Create Modal
  switch (type) {
    case 'normal': modal = UserTriggeredModal(settings); break
    case 'timed': modal = TimedModal(settings); break
  }

  // Adds event listeners
  const { modalElement } = settings
  const overlayElement = modalElement.parentElement
  const closeButtonElement = modalElement.querySelector('.jsModalClose')

  closeButtonElement.addEventListener('click', event => {
    modal.close()
  })

  overlayElement.addEventListener('click', event => {
    if (!event.target.closest('.modal')) {
      modal.close()
    }
  })

  document.addEventListener('keydown', event => {
    if (modal.isOpen && event.key === 'Escape') {
      modal.close()
    }
  })

  return modal
}

function BaseModal (settings) {
  const { modalElement } = settings
  const overlayElement = modalElement.parentElement
  const contentElement = modalElement.querySelector('.modal__content')

  function trapFocus (event) {
    const focusables = getKeyboardFocusableElements(modalElement)
    const firstFocusable = focusables[0]
    const lastFocusable = focusables[focusables.length - 1]

    // Directs to first focusable
    if (document.activeElement === lastFocusable && event.key === 'Tab' && !event.shiftKey) {
      event.preventDefault()
      firstFocusable.focus()
    }

    // Directs to last focusable
    if (document.activeElement === firstFocusable && event.key === 'Tab' && event.shiftKey) {
      event.preventDefault()
      lastFocusable.focus()
    }
  }

  const modal = {
    modalElement,
    contentElement,
    overlayElement,

    get isOpen () {
      return overlayElement.classList.contains('is-open')
    },

    get siblingElements () {
      return [...overlayElement.parentElement.children]
      .filter(el => el !== overlayElement)
    },

    showSiblingElements () {
      modal.siblingElements.forEach(element => {
        element.removeAttribute('aria-hidden')
      })
    },

    hideSiblingElements () {
      modal.siblingElements.forEach(element => {
        element.setAttribute('aria-hidden', true)
      })
    },

    open () {
      overlayElement.classList.add('is-open')
      document.addEventListener('keydown', trapFocus)
      modal.hideSiblingElements()

      // Autofocus
      const focusableEls = getKeyboardFocusableElements(contentElement)
      if (focusableEls[0]) focusableEls[0].focus()

      settings.afterOpen()
    },

    close () {
      overlayElement.classList.remove('is-open')
      document.removeEventListener('keydown', trapFocus)
      modal.showSiblingElements()
    }
  }

  return modal
}

function UserTriggeredModal (settings) {
  const { buttonElement } = settings
  const base = BaseModal(settings)

  const modal = mix(base, {
    open () {
      base.open()
      buttonElement.setAttribute('aria-expanded', true)
    },

    close () {
      base.close()
      buttonElement.setAttribute('aria-expanded', false)
      buttonElement.focus()
    }
  })

  buttonElement.addEventListener('click', event => {
    modal.open()
  })

  return modal
}

function TimedModal (settings) {
  const modal = BaseModal(settings)
  setTimeout(_ => modal.open(), settings.delayBeforeOpening)

  return modal
}

function getKeyboardFocusableElements (element = document) {
  return [...element.querySelectorAll(
    'a, button, input, textarea, select, details, [tabindex]'
  )]
  .filter(el => !el.hasAttribute('disabled'))
  .filter(el => !el.hasAttribute('tabindex') || el.getAttribute('tabindex') >= 0)
}

function mix (...sources) {
  const result = {}
  for (const source of sources) {
    const props = Object.keys(source)
    for (const prop of props) {
      const descriptor = Object.getOwnPropertyDescriptor(source, prop)
      Object.defineProperty(result, prop, descriptor)
    }
  }
  return result
}
