/* eslint-env browser */
/* globals zlFetch */
import zlFetch from 'https://cdn.jsdelivr.net/npm/zl-fetch@4.0.1/src/index.js'
import Tiny from '../Tiny/tiny.js'

export default Tiny({
	async afterMount() {
		const dotaApi = 'https://api.opendota.com/api'
		const responses = await Promise.all([
			zlFetch(`${dotaApi}/constants/hero_lore`),
			zlFetch(`${dotaApi}/constants/abilities`),
			zlFetch(`${dotaApi}/constants/hero_abilities`)
		])

		this.setState({
			lores: responses[0].body,
			dotaAbilities: responses[1].body,
			heroAbilities: responses[2].body
		})
	},

	getHeroDescription(npcName) {
		if (!this.state.lores) return ''
		return this.state.lores[npcName]
	},

	getHeroAbilities(npcName) {
		const { dotaAbilities, heroAbilities } = this.state
		if (!dotaAbilities && !heroAbilities) return []

		return heroAbilities[`npc_dota_hero_${npcName}`].abilities
		.filter((ability) => ability !== 'generic_hidden')
		.map((ability) => dotaAbilities[ability])
		.map((ability) => {
			return {
				name: ability.dname,
				description: ability.desc,
				image: `https://api.opendota.com${ability.img}`
			}
		})
	},

	heroHTML(hero, npcName) {
		const abilities = this.getHeroAbilities(npcName)

		return `<div class="single-column flow-2">
      <div class="clear site-title">
        <h1 data-hero-name>${hero.name}</h1>
        <img
          class="hero__img"
          data-hero-image
          src="${hero.image}"
        />
        <p data-hero-description>${this.getHeroDescription(npcName)}</p>
      </div>

      <section ${abilities.length > 0 ? '' : 'hidden'}>
        <h2>Abilities</h2>
        <ul class="abilities flow" data-hero-abilities>
          ${abilities
		.map((ability) => {
			return `<li class="ability">
              <p class="ability__title">${ability.name}</p>
              <img class="ability__img" src="${ability.image}" alt="${ability.name}">
              <p class="desc">${ability.description}</p>
            </li>`
		})
		.join('')}
        </ul>
      </section>
    </div>`
	},

	template() {
		const npcName = location.pathname.split('/heroes/')[1]
		const hero = this.props.heroes.find((h) => h.npcHeroName === npcName)
		if (!hero) return ''

		document.title = `${hero.name} — Dota App`

		return `
      <div class="hero-page">
        <header class="site-header">
          <div class="wrap">
            <div class="single-column">
              <a href="/">
                <img src="/images/logo.png" alt="Dota 2 Logo" />
              </a>
            </div>
          </div>
        </header>

        <main>
          <div class="wrap"> ${this.heroHTML(hero, npcName)} </div>
        </main>
      </div>
    `
	}
})
