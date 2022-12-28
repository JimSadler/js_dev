import Calculator from './calculator.js'

const calculator = Calculator()
const clearButton = calculator.element.querySelector('[data-key="clear"]')

function runTest (test) {
  calculator.pressKeys(...test.keys)
  console.log(calculator.displayValue)
  console.assert(calculator.displayValue === test.result, test.message)
  calculator.resetCalculator()
}
function testClear() {
  const clearButton = calculator.element.querySelector('[data-key="clear"]')
  calculator.pressKeys('5', 'clear')
  console.assert(calculator.displayValue === '0', 'Clear before calculation')
  console.assert(clearButton.textContent ==='AC','Clear once, should show AC')
  calculator.resetCalculator()
}
function testClearAfterCalculation () {
  calculator.pressKeys('5', 'times', '9', 'equal', 'clear')
  const { firstValue, operator } = calculator.state

  console.assert(calculator.displayValue === '0', 'Clear after calculation: Display is 0')
  console.assert(clearButton.textContent === 'AC', 'Clear after calculation: Clear Button is AC')
  console.assert(firstValue, 'Clear After Calculation: firstValue should remain')
  console.assert(operator, 'Clear After Calculation: operator should remain')

  calculator.resetCalculator()
}

function testFullClear () {
  calculator.pressKeys('5', 'times', '9', 'equal')
  calculator.resetCalculator()

  console.assert(calculator.displayValue === '0', 'Full Clear: Display is 0')
  console.assert(!calculator.state.firstValue, 'Full Clear:No first value')
  console.assert(!calculator.state.operator, 'Full Clear: No operator value')
  console.assert(!calculator.state.modifierValue, 'Full Clear: No operator value')
}
const tests = [
  // Initial Expressions
  {
    message: 'Number key',
    keys: ['2'],
    result: '2'
  }, {
    message: 'Number Number',
    keys: ['3', '5'],
    result: '35'
  }, {
    message: 'Number Decimal',
    keys: ['4', 'decimal'],
    result: '4.'
  }, {
    message: 'Number Decimal Number',
    keys: ['4', 'decimal', '5'],
    result: '4.5'
  },

  // Calculations
  {
    message: 'Addition',
    keys: ['2', 'plus', '5', 'equal'],
    result: '7'
  }, {
    message: 'Subtraction',
    keys: ['5', 'minus', '9', 'equal'],
    result: '-4'
  }, {
    message: 'Multiplication',
    keys: ['4', 'times', '8', 'equal'],
    result: '32'
  }, {
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
  }, {
    message: 'Number Decimal Equal',
    keys: ['2', 'decimal', '4', '5', 'equal'],
    result: '2.45'
  },

  // Decimal keys first
  {
    message: 'Decimal key',
    keys: ['decimal'],
    result: '0.'
  }, {
    message: 'Decimal Decimal',
    keys: ['2', 'decimal', 'decimal'],
    result: '2.'
  }, {
    message: 'Decimal Decimal',
    keys: ['2', 'decimal', '5', 'decimal', '5'],
    result: '2.55'
  }, {
    message: 'Decimal Equal',
    keys: ['2', 'decimal', 'equal'],
    result: '2'
  },

  // Equal key first
  {
    message: 'Equal',
    keys: ['equal'],
    result: '0'
  }, {
    message: 'Equal Number',
    keys: ['equal', '3'],
    result: '3'
  }, {
    message: 'Number Equal Number',
    keys: ['5', 'equal', '3'],
    result: '3'
  }, {
    message: 'Equal Decimal',
    keys: ['equal', 'decimal'],
    result: '0.'
  }, {
    message: 'Number Equal Decimal',
    keys: ['5', 'equal', 'decimal'],
    result: '0.'
  }, {
    message: 'Calculation + Operator',
    keys: ['1', 'plus', '1', 'equal', 'plus', '1', 'equal'],
    result: '3'
  },

  // Operator Keys first
  {
    message: 'Operator Decimal',
    keys: ['times', 'decimal'],
    result: '0.'
  }, {
    message: 'Number Operator Decimal',
    keys: ['5', 'times', 'decimal'],
    result: '0.'
  }, {
    message: 'Number Operator Equal',
    keys: ['7', 'divide', 'equal'],
    result: '1'
  }, {
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
  }, {
    message: 'Operator follow-up calculation',
    keys: ['1', 'plus', '2', 'plus', '3', 'plus', '4', 'plus', '5', 'plus'],
    result: '15'
  },

  // Equal followup calculation
  {
    message: 'Number Operator Equal Equal',
    keys: ['9', 'minus', 'equal', 'equal'],
    result: '-9'
  }, {
    message: 'Number Operator Number Equal Equal',
    keys: ['8', 'minus', '5', 'equal', 'equal'],
    result: '-2'
  }
]

// ========================
// Runs tests
// ========================
testClear()
testClearAfterCalculation()
testFullClear()
tests.forEach(runTest)
