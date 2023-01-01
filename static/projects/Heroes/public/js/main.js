/* eslint-env browser */
import Tiny from './Tiny/tiny.js'
import HeroesList from './HeroesList/HeroesList.js'
import HeroPage from './HeroPage/HeroPage.js'
import zlFetch from 'https://cdn.jsdelivr.net/npm/zl-fetch@4.0.1/src/index.js'

Tiny({
  selector: document.body,

  state: {
    heroes: []
  },

  components: {
    HeroesList,
    HeroPage
  },

  async afterMount() {
    const dotaApi = 'https://api.opendota.com/api'
    const response = await zlFetch(`${dotaApi}/constants/heroes`)
    const heroes = Object.values(response.body).map((hero) => {
      return {
        name: hero.localized_name,
        npcHeroName: hero.name.replace('npc_dota_hero_', ''),
        attackType: hero.attack_type.toLowerCase(),
        primaryAttribute: hero.primary_attr,
        roles: hero.roles.map((role) => role.toLowerCase()),
        image: `https://api.opendota.com${hero.img}`
      }
    })

    this.setState({ heroes })
  },

  template() {
    console.log('rendering')
    const path = location.pathname
    if (path === '/') {
      return '<div tiny-component="HeroesList" tiny-props="[heroes, state.heroes]"></div>'
    }
    if (path.includes('/heroes/')) {
      console.log('hello2')
      return '<div tiny-component="HeroPage" tiny-props="[heroes, state.heroes"]></div>'
    }
  }
})
