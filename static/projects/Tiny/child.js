import Tiny from './Tiny/tiny.js'
import Descendant from './descendant.js'

export default Tiny({
  components: {
    Descendant
  },
  template () {
    return `
      <div class='component child-component flow'>
        <h2>Child Component</h2>
        <p>Parent Count: ${this.props.count}</p>

        <div tiny-component="Descendant" tiny-props="[count, props.count]"></div>
      </div>
    `
  }
})
