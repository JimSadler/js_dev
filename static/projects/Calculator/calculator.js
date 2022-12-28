
export default function Calculator () {
  // declare variables
  const calculatorElement = createCalculator()
  const calculatorButtonsDiv = calculatorElement.querySelector('.calculator__keys')
  const operatorKeys = [...calculatorButtonsDiv.children].filter(button => button.dataset.buttonType === 'operator')
  const clearButton = calculatorElement.querySelector('[data-key="clear"]')
  const display = calculatorElement.querySelector('.calculator__display')

  const state = {
    operator: '',
    firstValue: '',
    modifierValue: '',
    previousButtonType: ''
  }

  const calculator = {
    element: calculatorElement,

    get state () {return state},
    get displayValue () {return display.textContent},
    set displayValue (value) {display.textContent = value},

    pressKey (key) {
      calculatorElement.querySelector(`[data-key="${key}"]`).click()
    },

    pressKeys (...keys) {
      keys.forEach(calculator.pressKey)
    },

    resetCalculator () {
      calculator.pressKeys('clear', 'clear')
    },

    calculate (firstValue, operator, secondValue) {
      firstValue = parseFloat(firstValue)
      secondValue = parseFloat(secondValue)
      let result
      switch (operator) {
        case 'plus':
          result = firstValue + secondValue
          break
        case 'minus':
          result = firstValue - secondValue
          break
        case 'times':
          result = firstValue * secondValue
          break
        case 'divide':
          result = firstValue / secondValue
          break
      }
      return result.toString()
    },

    handleClearKey () {
      const { previousButtonType } = state
      calculator.displayValue = '0'
      clearButton.textContent = 'AC'
      if (previousButtonType === 'clear') {
        delete state.firstValue
        delete state.operator
        delete state.modifierValue
      }
    },
    handleDecimalKey () {
      const displayValue = calculator.displayValue
      const { previousButtonType } = state

      if (!displayValue.includes('.')) {
        display.textContent = displayValue + '.'
      }

      if (previousButtonType === 'equal') {
        calculator.resetCalculator()
        calculator.displayValue = '0.'
      }

      if (previousButtonType === 'operator') {
        calculator.displayValue = '0.'
      }
    },
    handleOperatorKeys (button) {
      const displayValue = calculator.displayValue
      const { previousButtonType, firstValue, operator } = state
      const secondValue = displayValue

      button.classList.add('is-pressed')

      if (
        previousButtonType !== 'operator' &&
        previousButtonType !== 'equal' &&
        firstValue &&
        operator
      ) {
        const result = calculator.calculate(firstValue, operator, secondValue)
        display.textContent = result
        state.firstValue = result
      } else {
        state.firstValue = displayValue
      }

      state.operator = button.dataset.key
    },

    handleNumberKeys (button) {
      const displayValue = calculator.displayValue
      const { previousButtonType } = state
      const { key } = button.dataset

      if (displayValue === '0') {
        calculator.displayValue = key
      } else {
        calculator.displayValue = displayValue + key
      }

      if (previousButtonType === 'operator') {
        calculator.displayValue = key
      }

      if (previousButtonType === 'equal') {
        calculator.resetCalculator()
        calculator.displayValue = key
      }
    },
    handleEqualKey () {
      const displayValue = calculator.displayValue
      const { firstValue, operator, modifierValue } = state
      const secondValue = modifierValue || displayValue

      if (firstValue && operator) {
        const result = calculator.calculate(firstValue, operator, secondValue)
        display.textContent = result
        state.firstValue = result
        state.modifierValue = secondValue
      } else {
        display.textContent = parseFloat(displayValue) * 1
      }
    },

    handleClick(event) {
      if (!event.target.closest('button')) return
      const button = event.target
      const { buttonType } = button.dataset

      // Release operator pressed state
      operatorKeys.forEach(button => button.classList.remove('is-pressed'))
      if(buttonType !=='clear') {
        clearButton.textContent = 'CE'
      }

      if (buttonType !== 'clear') {
        const clearButton = calculatorElement.querySelector('[data-button-type=clear]')
        clearButton.textContent = 'CE'
      }

      switch (buttonType) {
        case 'clear': calculator.handleClearKey(); break
        case 'number': calculator.handleNumberKeys(button); break
        case 'decimal': calculator.handleDecimalKey(); break
        case 'operator': calculator.handleOperatorKeys(button); break
        case 'equal': calculator.handleEqualKey(); break
      }

      state.previousButtonType = buttonType

    },
    handleKeyDown (event) {
      let key = event.key

      // Operator keys
      if (key === '+') key = 'plus'
      if (key === '-') key = 'minus'
      if (key === '*') key = 'times'
      if (key === '/') key = 'divide'

      // Special keys
      if (key === '.') key = 'decimal'
      if (key === 'Backspace') key = 'clear'
      if (key === 'Escape') key = 'clear'
      if (key === 'Enter') key = 'equal'
      if (key === '=') key = 'equal'

      const button = calculatorElement.querySelector(`[data-key="${key}"]`)
      if (!button) return
      event.preventDefault()
      button.click()
    }
  }
  calculatorElement.addEventListener('keydown',calculator.handleKeyDown)
  calculatorButtonsDiv.addEventListener('click', calculator.handleClick)
  return calculator
}
function createCalculator() {
  const calculator = document.createElement('div')
  calculator.classList.add('calculator')
  calculator.tabIndex = 0
  calculator.innerHTML = `
        <div class="calculator__display">0</div>
        <div class="calculator__keys">
          <button tabindex="-1" data-key="plus" data-button-type="operator"> + </button>
          <button tabindex="-1" data-key="minus" data-button-type="operator"> &minus; </button>
          <button tabindex="-1" data-key="times" data-button-type="operator"> &times; </button>
          <button tabindex="-1" data-key="divide" data-button-type="operator"> ÷ </button>
          <button tabindex="-1" data-key="1" data-button-type="number"> 1 </button>
          <button tabindex="-1" data-key="2" data-button-type="number"> 2 </button>
          <button tabindex="-1" data-key="3" data-button-type="number"> 3 </button>
          <button tabindex="-1" data-key="4" data-button-type="number"> 4 </button>
          <button tabindex="-1" data-key="5" data-button-type="number"> 5 </button>
          <button tabindex="-1" data-key="6" data-button-type="number"> 6 </button>
          <button tabindex="-1" data-key="7" data-button-type="number"> 7 </button>
          <button tabindex="-1" data-key="8" data-button-type="number"> 8 </button>
          <button tabindex="-1" data-key="9" data-button-type="number"> 9 </button>
          <button tabindex="-1" data-key="0" data-button-type="number"> 0 </button>
          <button tabindex="-1" data-key="decimal" data-button-type="decimal"> . </button>
          <button tabindex="-1" data-key="clear" data-button-type="clear"> AC </button>
          <button tabindex="-1" data-key="equal" data-button-type="equal"> = </button>
        </div>
    </div>
    `
  return calculator
}
