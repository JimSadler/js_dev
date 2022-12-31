import Tiny from './Tiny/tiny.js'

export default Tiny({
  template () {
    return `
      <div class='component total-component flow'>
        <h2>Descendant Component</h2>
        <p>Ancestor Count: ${this.props.count}</p>
      </div>
    `
  }
})
