// Start writing JavaScript here!
const calculator = document.querySelector('.calculator')
const display = calculator.querySelector('.calculator__display')
const calculatorButtonsDiv = calculator.querySelector('.calculator__keys')

console.log(calculator)

// Functions
/**
 * Gets the displayed value
 */
function getDisplayValue() {
  return calculator.querySelector('.calculator__display').textContent
}

/**
 * Presses a calculator key
 * @param {String} key
 */
function pressKey(key) {
  document.querySelector(`[data-key="${key}"]`).click()
}

/**
 * Presses calculator keys in sequence
 * @param  {...any} keys
 */
function pressKeys(...keys) {
  keys.forEach(pressKey)
}

/**
 * Resets calculator
 */
function resetCalculator() {
  pressKeys('clear', 'clear')
  console.assert(getDisplayValue() === '0', 'Clear calculator')
  console.assert(!calculator.dataset.firstValue, 'No first value')
  console.assert(!calculator.dataset.operator, 'No operator value')
  console.assert(!calculator.dataset.modifierValue, 'No operator value')
}

/**
 * Calculates a value
 * @param {String} firstValue
 * @param {String} operator
 * @param {String} secondValue
 * @returns {Number}
 */
function calculate(firstValue, operator, secondValue) {
  firstValue = parseFloat(firstValue)
  secondValue = parseFloat(secondValue)
  if (operator === 'plus') return firstValue + secondValue
  if (operator === 'minus') return firstValue - secondValue
  if (operator === 'times') return firstValue * secondValue
  if (operator === 'divide') return firstValue / secondValue
}

function handleClearKey(calculator, button) {
  const { previousButtonType } = calculator.dataset
  display.textContent = '0'
  button.textContent = 'AC'
  if (previousButtonType === 'clear') {
    delete calculator.dataset.firstValue
    delete calculator.dataset.operator
    delete calculator.dataset.modifierValue
  }
}

function handleNumberKeys(calculator, button) {
  const displayValue = getDisplayValue()
  const { previousButtonType } = calculator.dataset
  const { key } = button.dataset

  if (displayValue === '0') {
    display.textContent = key
  } else {
    display.textContent = displayValue + key
  }

  if (previousButtonType === 'operator') {
    display.textContent = key
  }

  if (previousButtonType === 'equal') {
    resetCalculator()
    display.textContent = key
  }
}

function handleDecimalKey(calculator) {
  const displayValue = getDisplayValue()
  const { previousButtonType } = calculator.dataset

  if (!displayValue.includes('.')) {
    display.textContent = displayValue + '.'
  }

  if (previousButtonType === 'equal') {
    resetCalculator()
    display.textContent = '0.'
  }

  if (previousButtonType === 'operator') {
    display.textContent = '0.'
  }
}

function handleOperatorKeys(calculator, button) {
  const displayValue = getDisplayValue()
  const { previousButtonType, firstValue, operator } = calculator.dataset
  const secondValue = displayValue

  button.classList.add('is-pressed')

  if (
    previousButtonType !== 'operator' &&
    previousButtonType !== 'equal' &&
    firstValue &&
    operator
  ) {
    const result = calculate(firstValue, operator, secondValue)
    display.textContent = result
    calculator.dataset.firstValue = result
  } else {
    calculator.dataset.firstValue = displayValue
  }

  calculator.dataset.operator = button.dataset.key
}

function handleEqualKey(calculator) {
  const displayValue = getDisplayValue()
  const { firstValue, operator, modifierValue } = calculator.dataset
  const secondValue = modifierValue || displayValue

  if (firstValue && operator) {
    const result = calculate(firstValue, operator, secondValue)
    display.textContent = result
    calculator.dataset.firstValue = result
    calculator.dataset.modifierValue = secondValue
  } else {
    display.textContent = parseFloat(displayValue) * 1
  }
}

calculatorButtonsDiv.addEventListener('click', event => {
  if (!event.target.closest('button')) return
  const button = event.target
  const { buttonType } = button.dataset

  // Release operator pressed state
  const operatorKeys = [...calculatorButtonsDiv.children].filter(
    button => button.dataset.buttonType === 'operator'
  )
  operatorKeys.forEach(button => button.classList.remove('is-pressed'))

  if (buttonType !== 'clear') {
    const clearButton = calculator.querySelector('[data-button-type=clear]')
    clearButton.textContent = 'CE'
  }

  switch (buttonType) {
    case 'clear':
      handleClearKey(calculator, button)
      break
    case 'number':
      handleNumberKeys(calculator, button)
      break
    case 'decimal':
      handleDecimalKey(calculator)
      break
    case 'operator':
      handleOperatorKeys(calculator, button)
      break
    case 'equal':
      handleEqualKey(calculator)
      break
  }

  calculator.dataset.previousButtonType = buttonType
})

// Testing
// =======

/**
 * Runs a test
 * @param {Object} test
 */
function runTest(test) {
  pressKeys(...test.keys)
  console.assert(getDisplayValue() === test.result, test.message)
  resetCalculator()
}

function testClearKey() {
  // Before calculation
  pressKeys('5', 'clear')
  console.assert(getDisplayValue() === '0', 'Clear before calculation')
  console.assert(
    calculator.querySelector('[data-key="clear"]').textContent === 'AC',
    'Clear once, should show AC'
  )
  resetCalculator()

  // After calculator
  pressKeys('5', 'times', '9', 'equal', 'clear')
  const { firstValue, operator } = calculator.dataset
  console.assert(firstValue, 'Clear once;  should have first value')
  console.assert(operator, 'Clear once;  should have operator value')
  resetCalculator()
}

// Test Suites
const tests = [
  // Initial Expressions
  {
    message: 'Number key',
    keys: ['2'],
    result: '2'
  },
  {
    message: 'Number Number',
    keys: ['3', '5'],
    result: '35'
  },
  {
    message: 'Number Decimal',
    keys: ['4', 'decimal'],
    result: '4.'
  },
  {
    message: 'Number Decimal Number',
    keys: ['4', 'decimal', '5'],
    result: '4.5'
  },

  // Calculations
  {
    message: 'Addition',
    keys: ['2', 'plus', '5', 'equal'],
    result: '7'
  },
  {
    message: 'Subtraction',
    keys: ['5', 'minus', '9', 'equal'],
    result: '-4'
  },
  {
    message: 'Multiplication',
    keys: ['4', 'times', '8', 'equal'],
    result: '32'
  },
  {
    message: 'Division',
    keys: ['5', 'divide', '1', '0', 'equal'],
    result: '0.5'
  },

  // Easy Edge Cases
  // Number keys first
  {
    message: 'Number Equal',
    keys: ['5', 'equal'],
    result: '5'
  },
  {
    message: 'Number Decimal Equal',
    keys: ['2', 'decimal', '4', '5', 'equal'],
    result: '2.45'
  },

  // Decimal keys first
  {
    message: 'Decimal key',
    keys: ['decimal'],
    result: '0.'
  },
  {
    message: 'Decimal Decimal',
    keys: ['2', 'decimal', 'decimal'],
    result: '2.'
  },
  {
    message: 'Decimal Decimal',
    keys: ['2', 'decimal', '5', 'decimal', '5'],
    result: '2.55'
  },
  {
    message: 'Decimal Equal',
    keys: ['2', 'decimal', 'equal'],
    result: '2'
  },

  // Equal key first
  {
    message: 'Equal',
    keys: ['equal'],
    result: '0'
  },
  {
    message: 'Equal Number',
    keys: ['equal', '3'],
    result: '3'
  },
  {
    message: 'Number Equal Number',
    keys: ['5', 'equal', '3'],
    result: '3'
  },
  {
    message: 'Equal Decimal',
    keys: ['equal', 'decimal'],
    result: '0.'
  },
  {
    message: 'Number Equal Decimal',
    keys: ['5', 'equal', 'decimal'],
    result: '0.'
  },
  {
    message: 'Calculation + Operator',
    keys: ['1', 'plus', '1', 'equal', 'plus', '1', 'equal'],
    result: '3'
  },

  // Operator Keys first
  {
    message: 'Operator Decimal',
    keys: ['times', 'decimal'],
    result: '0.'
  },
  {
    message: 'Number Operator Decimal',
    keys: ['5', 'times', 'decimal'],
    result: '0.'
  },
  {
    message: 'Number Operator Equal',
    keys: ['7', 'divide', 'equal'],
    result: '1'
  },
  {
    message: 'Number Operator Operator',
    keys: ['9', 'times', 'divide'],
    result: '9'
  },

  // Difficult edge cases
  // Operator calculation
  {
    message: 'Operator calculation',
    keys: ['9', 'plus', '5', 'plus'],
    result: '14'
  },
  {
    message: 'Operator follow-up calculation',
    keys: ['1', 'plus', '2', 'plus', '3', 'plus', '4', 'plus', '5', 'plus'],
    result: '15'
  },

  // Equal followup calculation
  {
    message: 'Number Operator Equal Equal',
    keys: ['9', 'minus', 'equal', 'equal'],
    result: '-9'
  },
  {
    message: 'Number Operator Number Equal Equal',
    keys: ['8', 'minus', '5', 'equal', 'equal'],
    result: '-2'
  }
]

// Runs the tests
testClearKey()
tests.forEach(runTest)
