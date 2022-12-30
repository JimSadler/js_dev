/* global TimelineMax Back */
import 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js'
import Modal from './modal.js'

const wavingHand = document.querySelector('.wave-hand')
function wave () {
  const tl = new TimelineMax({})
  // Sets transform origin
  tl.set(wavingHand, { transformOrigin: 'bottom center' })
  tl.from(wavingHand, 0.5, { scale: 0.25, opacity: 0, ease: Back.easeOut.config(1.5) })
  tl.to(wavingHand, 0.2, { rotation: 15 })
  tl.to(wavingHand, 0.2, { rotation: -15 })
  tl.to(wavingHand, 0.2, { rotation: 15 })
  tl.to(wavingHand, 0.2, { rotation: -15 })
  tl.to(wavingHand, 0.2, { rotation: 0 })
}

// Creates a User-triggered Modal
Modal({
  modalElement: document.querySelector('#user-triggered-modal'),
  buttonElement: document.querySelector('#user-triggered-modal-button'),
  afterOpen: wave
})

// Creates a Timed Modal.
const timedModal = Modal({
  type: 'timed',
  delayBeforeOpening: 1000,
  modalElement: document.querySelector('#timed-modal')
})

// Finds the OK button
const timedModalOkButton = timedModal.contentElement.querySelector('button')

// Allows OK button to close modal
timedModalOkButton.addEventListener('click', event => {
  timedModal.close()
})
