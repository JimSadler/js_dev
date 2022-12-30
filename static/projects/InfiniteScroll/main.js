/* eslint-env browser */
/* globals zlFetch */
import zlFetch from 'https://cdn.jsdelivr.net/npm/zl-fetch@4.0.1/src/index.js'
let token = '[hidden]'

// ========================
// Variables
// ========================
const endpoint = 'https://api.learnjavascript.today/letters'
const lettersElement = document.querySelector('.letters')
const spinner = document.querySelector('.spinner')
const loadMoreButton = document.querySelector('.load-more-button')
const dribbbleSection = document.querySelector('.dribbble-section')

// ========================
// Functions
// ========================
function hideElement(element) {
  element.setAttribute('hidden', true)
}

function showElement(element) {
  element.removeAttribute('hidden')
}

function addLettersToDOM(letters) {
  const fragment = document.createDocumentFragment()
  letters.forEach((letter) => {
    const li = document.createElement('li')
    li.innerHTML = `
      <a class="letter" href="${letter.shotUrl}">
        <span>By ${letter.creator}</span>
        <img src="${letter.imageUrl}" alt="Picture of ${letter.letter}" width="400" height="300">
      </a>
    `
    fragment.appendChild(li)
  })
  lettersElement.appendChild(fragment)
}

function fetchLetters() {
  showElement(spinner)
  hideElement(loadMoreButton)

  zlFetch(loadMoreButton.dataset.nextPage).then((response) => {
    const { nextPage, letters } = response.body
    addLettersToDOM(letters)

    hideElement(spinner)
    showElement(loadMoreButton)

    if (nextPage) {
      loadMoreButton.dataset.nextPage = nextPage
    } else {
      hideElement(loadMoreButton)
      showElement(dribbbleSection)
    }
  })
}

// ========================
// Execution
// ========================
loadMoreButton.addEventListener('click', fetchLetters)
loadMoreButton.dataset.nextPage = `${endpoint}?limit=6&page=1`
loadMoreButton.click()

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.click()
    }
  })
})

observer.observe(loadMoreButton)
