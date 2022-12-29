/**
 * Checks if an accordion is opened
 * @param {HTMLElement} accordion The accordion
 */
function isAccordionOpen (accordion) {
  return accordion.classList.contains('is-open')
}

/**
 * Opens an accordion
 * @param {HTMLElement} accordion The accordion
 */
function openAccordion (accordion) {
  const accordionHeaderButton = accordion.querySelector('button')
  const accordionContent = accordion.querySelector('.accordion__content')

  accordion.classList.add('is-open')
  accordionHeaderButton.setAttribute('aria-expanded', 'true')
  accordionContent.style.height = `${getContentHeight(accordion)}px`
}

/**
 * Closes an accordion
 * @param {HTMLElement} accordion The accordion
 */
function closeAccordion (accordion) {
  const accordionHeaderButton = accordion.querySelector('button')
  const accordionContent = accordion.querySelector('.accordion__content')

  accordion.classList.remove('is-open')
  accordionContent.style.height = 0
  accordionHeaderButton.setAttribute('aria-expanded', false)
  accordionHeaderButton.focus()
}

/**
 * Finds the height of an accordion's content
 * @param {HTMLElement} accordion The accordion
 * @returns {Number} Accordion content's height in px value
 */
function getContentHeight (accordion) {
  const accordionInner = accordion.querySelector('.accordion__inner')
  return accordionInner.getBoundingClientRect().height
}

// ========================
// Execution
// ========================
const accordionContainers = document.querySelectorAll('.accordion-container')
if (accordionContainers.length > 0) {
  accordionContainers.forEach(accordionContainer => {
    // Open/Close accordion when user clicks on an accordion's header
    accordionContainer.addEventListener('click', event => {
      const accordionHeader = event.target.closest('.accordion__header')
      if (!accordionHeader) return

      const accordion = accordionHeader.parentElement

      isAccordionOpen(accordion)
        ? closeAccordion(accordion)
        : openAccordion(accordion)
    })

    // Close accordion with Escape key
    document.addEventListener('keydown', event => {
      const accordion = event.target.closest('.accordion')

      if (event.key !== 'Escape') return
      if (!accordion) return

      if (isAccordionOpen(accordion)) {
        closeAccordion(accordion)
      }
    })

    // Switch accordions with up/down arrow
    document.addEventListener('keydown', event => {
      if (!event.target.closest('.accordion__header')) return

      const key = event.key
      const accordion = event.target.closest('.accordion')
      const accordions = [...accordionContainer.querySelectorAll('.accordion')]
      const index = accordions.findIndex(element => element === accordion)

      let targetAccordion

      if (key === 'ArrowDown') {
        targetAccordion = accordions[index + 1]
      } else if (key === 'ArrowUp') {
        targetAccordion = accordions[index - 1]
      }

      if (targetAccordion) {
        targetAccordion.querySelector('button').focus()
      }
    })
  })
}
