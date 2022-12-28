import Calculator from './calculator.js'
// import './calculator.test.js'
import './calculator.test.js'

// create Calculator
const calculator = Calculator().element
// add calculator to DOM
const container = document.querySelector('.calc-container')
container.appendChild(calculator)
