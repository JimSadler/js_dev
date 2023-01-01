import Tiny from '../Tiny/tiny.js'

const filters = [{
	name: 'attack-type',
	values: ['melee', 'ranged']
}, {
	name: 'primary-attribute',
	values: ['strength', 'agility', 'intelligence']
}, {
	name: 'role',
	values: ['carry', 'disabler', 'durable', 'escape', 'initiator', 'jungler', 'nuker', 'pusher', 'support']
}]

export default Tiny({
	afterMount () {
		const newState = {}
		const values = filters.reduce((acc, current) => {
			return [...acc, ...current.values]
		}, [])

		values.forEach(value => {
			newState[abbreviate(value)] = false
		})

		this.setState(newState)
	},

	saveFilterState (event) {
		// Save checked state
		const checkbox = event.target
		this.state[checkbox.id] = checkbox.checked

		const filteredHeroes = this.filterHeroes()
		this.emit('filter-heroes', { filteredHeroes })
	},

	filterHeroes () {
		const selectedAttackTypes = [...this.element.querySelectorAll('#attack-type input:checked')]
		.map(checkbox => checkbox.id)
		const selectedPrimaryAttributes = [...this.element.querySelectorAll('#primary-attribute input:checked')]
		.map(checkbox => checkbox.id)
		const selectedRoles = [...this.element.querySelectorAll('#role input:checked')]
		.map(checkbox => checkbox.id)

		return this.props.heroes
		// Filter by attack type
		.filter(hero => {
			if (selectedAttackTypes.length === 0) return true
			return selectedAttackTypes.includes(hero.attackType)
		})
		// Filter by primary attribute
		.filter(hero => {
			if (selectedPrimaryAttributes.length === 0) return true
			return selectedPrimaryAttributes.includes(hero.primaryAttribute)
		})
		// Filter by role
		.filter(hero => {
			if (selectedRoles.length === 0) return true
			return selectedRoles.some(role => {
				return hero.roles.includes(role)
			})
		})
	},

	template () {
		return `
      <!-- SVG for checkbox -->
      <svg height="1em" style="display: none">
        <symbol id="checkmark" viewBox="0 0 20 15">
          <title>Checkmark</title>
          <path
            d="M0 8l2-2 5 5L18 0l2 2L7 15z"
            fill="#bc4736"
            fill-rule="nonzero"
          />
        </symbol>
      </svg>

      <section class="filters" tiny-listener="[change, saveFilterState]">
        <h2 id="filters">Filters</h2>

        <fieldset class="flow">
          <legend>Filter by</legend>
          ${filters.map(filterType => {
			return `
              <div class="box filter-group" id="${filterType.name}">
                <p class="box__title">${filterType.name.replace('-', ' ')}</p>

                ${filterType.values.map(value => {
				return `
                    <div class="checkbox">
                      <input
                        type="checkbox"
                        id="${abbreviate(value)}"
                        name="${abbreviate(value)}"
                        ${this.state[abbreviate(value)] ? 'checked ' : ''}
                      >
                      <label for="${abbreviate(value)}">
                        <span class="checkbox__fakebox"></span>
                        <svg height="1em" viewBox="0 0 20 15">
                          <use xlink:href="#checkmark"></use>
                        </svg>
                        <span>${value.slice(0, 1).toUpperCase() + value.slice(1)}</span>
                      </label>
                    </div>
                  `
			}).join('')}
              </div>
            `
		}).join('')}
        </fieldset>
      </section>
    `
	}
})

function abbreviate (value) {
	if (value !== 'strength' && value !== 'agility' && value !== 'intelligence') return value
	return value.slice(0, 3)
}
