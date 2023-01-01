/* eslint-env browser */
const initial = {
  components: {},
  props: {},
  mounted: false,
  afterMount () {},
  state: {}
}

export default function Tiny (comp) {
  comp = Object.assign({}, initial, comp)

  const element = typeof comp.selector === 'string'
    ? document.querySelector(comp.selector)
    : comp.selector

  comp.element = element

  comp.setState = function (newState) {
    const entries = Object.entries(newState)
    for (const entry of entries) {
      comp.state[entry[0]] = entry[1]
    }

    _render(comp)
  }

  comp.emit = function (eventName, detail, eventOpts = {}) {
    const event = new CustomEvent(eventName, {
      bubbles: true,
      detail,
      ...eventOpts
    })
    comp.element.dispatchEvent(event)
  }

  function _render (comp) {
    comp.element.innerHTML = comp.template()
    _addEventListeners(comp)
    _renderChildComponents(comp)
  }

  function _addEventListeners (comp) {
    const listenerElements = comp.element.querySelectorAll('[tiny-listener]')
    for (const listenerElement of listenerElements) {
      const attribute = listenerElement.getAttribute('tiny-listener')
      const values = _parseAttributeStrings(attribute)

      for (let index = 0; index < values.length - 1; index = index + 2) {
        const eventName = values[index]
        const fn = values[index + 1]

        listenerElement.addEventListener(eventName, comp[fn].bind(comp))
      }
    }
  }

  function _renderChildComponents (comp) {
    const compEls = comp.element.querySelectorAll('[tiny-component]')

    for (const compEl of compEls) {
      const compName = compEl.getAttribute('tiny-component')
      const childComp = comp.components[compName]

      childComp.element = compEl
      _addProps(childComp, comp)
      _render(childComp)

      if (!childComp.mounted) {
        childComp.mounted = true
        childComp.afterMount()
      }
    }
  }

  function _addProps (childComp, comp) {
    const attribute = childComp.element.getAttribute('tiny-props')
    if (!attribute) return

    const props = _parseAttributeStrings(attribute)

    for (let index = 0; index < props.length - 1; index = index + 2) {
      const prop = props[index]
      let value = props[index + 1]

      if (value.includes('.')) {
        value = value
        .split('.')
        .reduce((acc, current) => acc[current], comp)
        childComp.props[prop] = value
        continue
      }

      if (comp[value]) {
        childComp.props[prop] = comp[value]
        continue
      }

      childComp.props[prop] = value
    }
  }

  function _parseAttributeStrings (string) {
    return string.trim()
    .replace(/[\[\],]/g, '')
    .split(/\s+/)
  }

  if (comp.selector) {
    _render(comp)
    comp.mounted = true
    comp.afterMount()

    // Single Page Routing
    window.addEventListener('click', event => {
      console.log('hello')
      const link = event.target.closest('a')
      if (!link) return
      if (link.origin !== location.origin) return
      event.preventDefault()
      history.pushState('', '', link)

      _render(comp)
    })

    // Support back and forward buttons
    window.addEventListener('popstate', event => {
      _render(comp)
    })
  }

  return comp
}
