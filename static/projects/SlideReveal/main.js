/* eslint-env browser */
// Start writing JavaScript here!
const incomingObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      }
    })
  },
  { rootMargin: '0px 0px -10% 0px' }
)

const outgoingObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
      entry.target.classList.remove('is-visible')
    }
  })
})

const books = document.querySelectorAll('.book')
books.forEach((book) => {
  incomingObserver.observe(book)
  outgoingObserver.observe(book)
})
