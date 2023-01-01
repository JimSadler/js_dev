import Tiny from '../Tiny/tiny.js'
import Filters from './filters.js'

export default Tiny({
	state: {
		displayedHeroes: []
	},

	components: {
		Filters
	},

	filterHeroes (event) {
		this.setState({ displayedHeroes: event.detail.filteredHeroes })
	},

	template () {
		document.title = 'Heroes List — Dota App'

		const heroes = this.state.displayedHeroes.length > 0
			? this.state.displayedHeroes
			: this.props.heroes

		return `
      <header class="site-header">
        <div class="wrap">
          <a href="/">
            <img src="/images/logo.png" alt="Dota 2 Logo" />
          </a>
        </div>
      </header>

      <main tiny-listener="[filter-heroes, filterHeroes]">
        <div class="wrap">
          <div class="site-title">
            <h1>Heroes List</h1>
            <p>Filter heroes based on these attributes</p>
          </div>

          <div class="sidebar-content">
            <div class="sidebar flow">
              <div tiny-component="Filters" tiny-props="[heroes, props.heroes]"></div>
            </div>

            <div class="content">
              <ul class="heroes-list">
                ${heroes.map(hero => {
			return `
                    <li>
                      <a href="/heroes/${hero.npcHeroName}">
                        <span class="hero__name"> ${hero.name} </span>
                        <img src="${hero.image}" alt="${hero.name} image">
                      </a>
                    </li>
                  `
		}).join('')}
              </ul>
            </div>
          </div>
        </div>
      </main>
    `
	}
})
