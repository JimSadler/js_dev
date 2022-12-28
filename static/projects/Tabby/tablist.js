export default class Tabby {
  constructor (tabby) {
    this.tabby = tabby
    this.tabsList = tabby.querySelector('[role="tablist"]')
    this.tabs = [...tabby.querySelectorAll('[role="tab"]')]
    this.tabPanels = [...tabby.querySelectorAll('[role="tabpanel"]')]

    // Listeners
    this.tabsList.addEventListener('click', this.handleClick)
    this.tabsList.addEventListener('keydown', this.handleLeftRight)
    this.tabsList.addEventListener('keydown', this.handleTab)
  }

  /**
   * Gets Tabpanel with an id
   * @param {String} id
   */
  getTabpanel (id) {
    return this.tabby.querySelector('#' + id).parentElement
  }

  // Event Listeners
  // ===============
  /**
   * Selects a tab and its corresponding tab-content
   * @param {HTMLElement} tab The tab to select
   */
  selectTab (tab) {
    const target = tab.dataset.target
    const tabPanel = this.getTabpanel(target)

    // Selects a tab
    this.tabs.forEach(t => {
      t.removeAttribute('aria-selected')
      t.setAttribute('tabindex', '-1')
    })
    tab.setAttribute('aria-selected', 'true')
    tab.removeAttribute('tabindex')

    // Selects the corresponding tab content
    this.tabPanels.forEach(c => c.setAttribute('hidden', 'true'))
    tabPanel.removeAttribute('hidden')
  }

  /**
   * Gets the previous tab
   * @param {Number} index Index of a tab
   * @returns {HTMLElement} The previous tab
   */
  getPreviousTab (index) {
    if (index !== 0) {
      return this.tabs[index - 1]
    }
  }

  /**
   * Gets the next tab
   * @param {Number} index Index of a tab
   * @returns {HTMLElement} The next tab
   */
  getNextTab (index) {
    if (index !== this.tabs.length - 1) {
      return this.tabs[index + 1]
    }
  }

  // Event Listeners
  handleClick = (event) => {
    const tab = event.target
    this.selectTab(tab)
  }

  // Select previous or next tab when user press Left or Right arrow keys
  handleLeftRight = event => {
    const { key } = event
    if (key !== 'ArrowLeft' && key !== 'ArrowRight') return

    const index = this.tabs.findIndex(t => t.getAttribute('aria-selected') === 'true')

    let targetTab
    if (key === 'ArrowLeft') targetTab = this.getPreviousTab(index)
    if (key === 'ArrowRight') targetTab = this.getNextTab(index)

    if (targetTab) {
      event.preventDefault()
      targetTab.click()
    }
  }

  // Shifts focus from tab to tabpanel
  handleTab = event => {
    const key = event.key
    if (event.shiftKey) return
    if (key !== 'Tab' && key !== 'ArrowDown') return

    const tab = event.target
    const target = tab.dataset.target
    const tabPanel = this.getTabpanel(target)

    event.preventDefault()
    tabPanel.focus()
  }
}
