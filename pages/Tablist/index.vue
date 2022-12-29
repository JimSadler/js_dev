<template>
  <div>
    <div style="height: 90vh" class="tablistPage">
<!--      <div class="tabby">-->
<!--        <div class="tabs">-->
<!--          <button class="tab is-selected" data-theme="digimon">Digimon</button>-->
<!--          <button class="tab" data-theme="pokemon">Pokemon</button>-->
<!--          <button class="tab" data-theme="tamagotchi">Tamagotchi</button>-->
<!--        </div>-->

<!--        <div class="tab-contents">-->
<!--          <section class="tab-content is-selected" data-theme="digimon" id="digimon">-->
<!--            <project_icons src="projects/images/digimon.png" alt="digimon" />-->
<!--            <h2>Digimon</h2>-->
<!--            <p>-->
<!--              Digimon, short for "Digital Monsters", is a Japanese media franchise-->
<!--              encompassing virtual pet toys, anime, manga, video games, films and a-->
<!--              trading card game. The franchise focuses on Digimon creatures, which are-->
<!--              monsters living in a "Digital World", a parallel universe that originated-->
<!--              from Earth's various communication networks.-->
<!--            </p>-->
<!--            <p>-->
<!--              <a href="https://en.wikipedia.org/wiki/Digimon"-->
<!--                >More about Digimon &rarr;</a-->
<!--              >-->
<!--            </p>-->
<!--          </section>-->

<!--          <section class="tab-content" data-theme="pokemon" id="pokemon">-->
<!--            <project_icons src="projects/images/pokemon.png" alt="Pokemon" />-->
<!--            <h2>Pokémon</h2>-->
<!--            <p>-->
<!--              Pokémon also known as Pocket Monsters in Japan, is a media franchise managed-->
<!--              by The Pokémon Company, a Japanese consortium between Nintendo, Game Freak,-->
<!--              and Creatures. The franchise copyright is shared by all three companies, but-->
<!--              Nintendo is the sole owner of the trademark.-->
<!--            </p>-->
<!--            <p>-->
<!--              <a href="https://en.wikipedia.org/wiki/Pokémon"-->
<!--                >More about Pokémon &rarr;</a-->
<!--              >-->
<!--            </p>-->
<!--          </section>-->

<!--          <section class="tab-content" data-theme="tamagotchi" id="tamagotchi">-->
<!--            <project_icons src="projects/images/tamagotchi.png" alt="Tamagotchi" />-->
<!--            <h2>Tamagotchi</h2>-->
<!--            <p>-->
<!--              The Tamagotchi is a handheld digital pet, created in Japan by Akihiro Yokoi-->
<!--              of Bandai. It was released by Bandai on November 23, 1996 in Japan and May-->
<!--              1, 1997 in the rest of the world, quickly becoming one of the biggest toy-->
<!--              fads of the 1990s and early 2000s. As of 2010, over 76 million Tamagotchis-->
<!--              had been sold worldwide.-->
<!--            </p>-->
<!--            <p>-->
<!--              <a href="https://en.wikipedia.org/wiki/Tamagotchi"-->
<!--                >More about Tamagotchi &rarr;</a-->
<!--              >-->
<!--            </p>-->
<!--          </section>-->
<!--        </div>-->
<!--      </div>-->

      <div class="tabby">
        <div role="tablist" aria-label="Virtual Pets">
          <button
            role="tab"
            aria-selected="true"
            data-target="digimon"
            data-theme="digimon"
          >
            Digimon
          </button>
          <button
            role="tab"
            data-target="pokemon"
            data-theme="pokemon"
            tabindex="-1"
          >
            Pokemon
          </button>
          <button
            role="tab"
            data-target="tamagotchi"
            data-theme="tamagotchi"
            tabindex="-1"
          >
            Tamagotchi
          </button>
        </div>

        <div class="tab-contents">
          <section
            role="tabpanel"
            data-theme="digimon"
            aria-labelledby="digimon"
            tabindex="-1"
          >
            <img src="projects/images/digimon.png" alt="digimon" />
            <h2 id="digimon">Digimon</h2>
            <p>
              Digimon, short for "Digital Monsters", is a Japanese media franchise
              encompassing virtual pet toys, anime, manga, video games, films and
              a trading card game. The franchise focuses on Digimon creatures,
              which are monsters living in a "Digital World", a parallel universe
              that originated from Earth's various communication networks.
            </p>
            <p>
              <a href="https://en.wikipedia.org/wiki/Digimon"
              >More about Digimon &rarr;</a
              >
            </p>
          </section>

          <section
            role="tabpanel"
            data-theme="pokemon"
            aria-labelledby="pokemon"
            tabindex="-1"
            hidden
          >
            <img src="projects/images/pokemon.png" alt="Pokemon" />
            <h2 id="pokemon">Pokémon</h2>
            <p>
              Pokémon also known as Pocket Monsters in Japan, is a media franchise
              managed by The Pokémon Company, a Japanese consortium between
              Nintendo, Game Freak, and Creatures. The franchise copyright is
              shared by all three companies, but Nintendo is the sole owner of the
              trademark.
            </p>
            <p>
              <a href="https://en.wikipedia.org/wiki/Pokémon"
              >More about Pokémon &rarr;</a
              >
            </p>
          </section>

          <section
            role="tabpanel"
            data-theme="tamagotchi"
            aria-labelledby="tamagotchi"
            tabindex="-1"
            hidden
          >
            <img src="projects/images/tamagotchi.png" alt="Tamagotchi" />
            <h2 id="tamagotchi">Tamagotchi</h2>
            <p>
              The Tamagotchi is a handheld digital pet, created in Japan by
              Akihiro Yokoi of Bandai. It was released by Bandai on November 23,
              1996 in Japan and May 1, 1997 in the rest of the world, quickly
              becoming one of the biggest toy fads of the 1990s and early 2000s.
              As of 2010, over 76 million Tamagotchis had been sold worldwide.
            </p>
            <p>
              <a href="https://en.wikipedia.org/wiki/Tamagotchi"
              >More about Tamagotchi &rarr;</a
              >
            </p>
          </section>
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from "@/components/Navigation/TheFooter.vue";
export default {
  components: {
    TheFooter,
  },
  head() {
    return {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },

        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: "description", name: "description", content: "Meta description" },
      ],
      title: "JS Development | ToDo List",
      link: [
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://fonts.googleapis.com/css?family=Roboto:300,400,600,700",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "projects/styles/tablist.css",
        },
      ],
      script: [
        {
          src: "projects/Tabby/main.js",
          defer: true,
          type: 'module'
        },
      ],
    };
  },
  layout: "projectLayout",
};
</script>
<style scoped>
.tablistPage {
  min-height: 107vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url("~~assets/img/glowing-outer-space-u9zxwwbna6x9s28y-u9zxwwbna6x9s28y.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  /* height: 100%; */
  background-position: 53% top;
  margin-top: -7%;
}
</style>
