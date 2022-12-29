/* globals DOMPurify zlFetch */
updateConnectionStatus()

// ========================
// Variables
// ========================
const rootendpoint = 'https://api.learnjavascript.today'
// const rootendpoint = 'http://localhost:4000'
const auth = {
  username: 'jimsadler',
  password: '12345678'
}

const state = {}

const todolist = document.querySelector('.todolist')
const taskList = todolist.querySelector('.todolist__tasks')
const emptyStateDiv = todolist.querySelector('.todolist__empty-state')
const flashContainer = document.querySelector('.flash-container')

// ========================
// Functions
// ========================
/**
 * Generates a unique string
 * @param {Number} length - Length of string
 * @returns {String}
 */
function generateUniqueString(length) {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length)
}

/**
 * Creates a task element
 * @param {Object} task - Task object
 * @param {String} task.id - Task id
 * @param {String} name - Task
 * @param {Boolean} done - Whether the task is complete
 * @returns {HTMLElement}
 */
function makeTaskElement({ id, name, done, state = 'loaded' }) {
  let spinner = ''
  if (state === 'loading') {
    spinner = '<project_icons class="task__spinner" src="images/spinner.gif" alt=""/>'
  }

  let checkbox = ''
  if (state === 'loaded') {
    checkbox = `<input
      type="checkbox"
      id="${id}"
      ${done ? 'checked' : ''}
    />`
  }

  const taskElement = document.createElement('li')
  taskElement.classList.add('task')
  taskElement.innerHTML = DOMPurify.sanitize(`
    ${spinner}
    ${checkbox}
    <label for="${id}">
      <svg viewBox="0 0 20 15">
        <path d="M0 8l2-2 5 5L18 0l2 2L7 15z" fill-rule="nonzero" />
      </svg>
    </label>
    <input class="task__name" value="${name}" />
    <button type="button" class="task__delete-button">
      <svg viewBox="0 0 20 20">
        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
      </svg>
    </button>`)
  return taskElement
}

/**
 * Debounces a function
 * @param {Function} callback
 * @param {Number} wait - Milliseconds to wait
 * @param {Boolean} immediate - Whether to trigger callback on leading edge
 */
function debounce(callback, wait, immediate) {
  let timeout
  return function() {
    const context = this
    const args = arguments
    const later = function() {
      timeout = null
      if (!immediate) callback.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) callback.apply(context, args)
  }
}

/**
 * Parses error messages and makes them friendlier.
 * @param {String} message - Error message
 */
function formatErrorMessage(message) {
  if (message === 'TypeError: Failed to fetch') {
    return 'Failed to reach server. Please try again later.'
  }

  if (message === 'Unauthorized') {
    return 'Invalid username or password. Please check your username or password.'
  }

  return message
}

/**
 * Creates an error message and adds it to the DOM.
 * @param {String} message - Error message
 */
function createErrorMessage(message) {
  // Formats the error message
  message = formatErrorMessage(message)

  // Create the error element
  const errorElement = document.createElement('div')
  errorElement.classList.add('flash')
  errorElement.dataset.type = 'error'
  errorElement.innerHTML = `
    <svg class='flash__icon' viewBox='0 0 20 20'>
      <path
        class='flash__exclaim-border'
        d='M3.053 17.193A10 10 0 1 1 16.947 2.807 10 10 0 0 1 3.053 17.193zm12.604-1.536A8 8 0 1 0 4.343 4.343a8 8 0 0 0 11.314 11.314z'
        fill-rule='nonzero'
      />
      <path
        class='flash__exclaim-mark'
        d='M9 5h2v6H9V5zm0 8h2v2H9v-2z'
        fill-rule='nonzero'
      />
    </svg>
    <span class='flash__message'>${message}</span>
    <button class='flash__close'>
      <svg viewBox='0 0 20 20'>
        <path
          d='M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z'
        />
      </svg>
    </button>
  `

  // Adds error element to the DOM
  flashContainer.appendChild(errorElement)
}

/**
 * Checks user connection status.
 * Updates whenever user comes online or goes offline.
 */
function updateConnectionStatus() {
  function setConnectionStatus() {
    navigator.onLine
      ? (document.body.dataset.connectionStatus = 'online')
      : (document.body.dataset.connectionStatus = 'offline')
  }

  setConnectionStatus()
  window.addEventListener('online', setConnectionStatus)
  window.addEventListener('offline', setConnectionStatus)
}

/**
 * Shows an element by removing the `hidden` attribute.
 * @param {HTMLElement} element
 */
function showElement(element) {
  return element.removeAttribute('hidden')
}

/**
 * Hides an element by adding the `hidden` attribute.
 * @param {HTMLElement} element
 */
function hideElement(element) {
  return element.setAttribute('hidden', true)
}

/**
 * Checks if an element has the `hidden` attribute
 * @param {HTMLElement} element
 */
function isElementHidden(element) {
  return element.hasAttribute('hidden')
}

/**
 * Decide whether to show empty state
 */
function shouldShowEmptyState() {
  if (taskList.children.length === 0) return true
  return [...taskList.children].every(isElementHidden)
}

/**
 * Shows empty state.
 */
function showEmptyState() {
  taskList.classList.add('is-empty')
}

function hideEmptyState() {
  taskList.classList.remove('is-empty')
}

// ========================
// Execution
// ========================
// Getting and fetching tasks
zlFetch(`${rootendpoint}/tasks`, { auth })
  .then(response => {
    // Append tasks to DOM
    state.tasks = response.body
    state.tasks.forEach(task => {
      const taskElement = makeTaskElement(task)
      taskList.appendChild(taskElement)
    })

    console.log(state.tasks)

    // Change empty state text
    emptyStateDiv.textContent = 'Your todo list is empty. Hurray! 🎉'
  })
  .catch(error => createErrorMessage(error.body.message))

// Adding a task to the DOM
todolist.addEventListener('submit', event => {
  event.preventDefault()

  // Get value of task
  const newTaskField = todolist.querySelector('input')
  const inputValue = DOMPurify.sanitize(newTaskField.value.trim())

  // Prevent adding of empty task
  if (!inputValue) return

  const tempTaskElement = makeTaskElement({
    id: generateUniqueString(10),
    name: inputValue,
    done: false,
    state: 'loading'
  })

  // Add task to DOM
  taskList.appendChild(tempTaskElement)
  hideEmptyState()

  // Clear the new task field
  newTaskField.value = ''

  // Bring focus back to input field
  newTaskField.focus()

  zlFetch
    .post(`${rootendpoint}/tasks`, {
      auth,
      body: {
        name: inputValue
      }
    })
    .then(response => {
      const task = response.body
      const taskElement = makeTaskElement(task)

      state.tasks.push(task)
      taskList.removeChild(tempTaskElement)
      taskList.appendChild(taskElement)
    })
    .catch(error => {
      taskList.removeChild(tempTaskElement)
      createErrorMessage(error.body.message)
      if (shouldShowEmptyState()) showEmptyState()
    })
})

// Editing tasks
taskList.addEventListener(
  'input',
  debounce(function(event) {
    const taskElement = event.target.parentElement
    const checkbox = taskElement.querySelector('input[type="checkbox"]')
    const taskInput = taskElement.querySelector('.task__name')

    const id = checkbox.id
    const done = checkbox.checked
    const name = DOMPurify.sanitize(taskInput.value.trim())

    zlFetch
      .put(`${rootendpoint}/tasks/${id}`, {
        auth,
        body: {
          name,
          done
        }
      })
      .then(response => {
        const index = state.tasks.findIndex(t => t.id === id)
        state.tasks[index] = response.body
      })
      .catch(error => {
        const originalTask = state.tasks.find(t => t.id === id)
        taskInput.value = DOMPurify.sanitize(originalTask.name)
        checkbox.checked = originalTask.done
        createErrorMessage(error.body.message)
      })
  }, 250)
)

// Deleting tasks
taskList.addEventListener('click', event => {
  if (!event.target.matches('.task__delete-button')) return

  const taskElement = event.target.parentElement
  const checkbox = taskElement.querySelector('input[type="checkbox"]')
  const id = checkbox.id

  hideElement(taskElement)
  if (shouldShowEmptyState()) showEmptyState()

  zlFetch
    .delete(`${rootendpoint}/tasks/${id}`, { auth })
    .then(response => {
      taskList.removeChild(taskElement)
      const index = state.tasks.findIndex(t => t.id === id)
      state.tasks = [
        ...state.tasks.slice(0, index),
        ...state.tasks.slice(index + 1)
      ]
    })
    .catch(error => {
      createErrorMessage(error.body.message)
      showElement(taskElement)
      hideEmptyState()
    })
})

// Removes error messages
flashContainer.addEventListener('click', event => {
  if (!event.target.matches('button')) return
  const closeButton = event.target
  const flashDiv = closeButton.parentElement
  flashContainer.removeChild(flashDiv)
})
