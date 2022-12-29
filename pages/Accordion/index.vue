<template>
  <div>
    <div style="height: 90vh" class="accordionPage">
      <div class="accordion-container">
        <div class="accordion" data-theme="cheese">
          <div class="accordion__header">
            <h2>
              <button aria-expanded="false">
                <span class="accordion__title">Cheese</span>
                <div class="accordion__indicator">
                  <svg class="indicator__plus" viewBox="0 0 80 80">
                    <use xlink:href="/projects/images/accordion_sprite.svg#plus" />
                  </svg>
                  <svg class="indicator__minus" viewBox="0 0 80 28">
                    <use xlink:href="/projects/images/accordion_sprite.svg#minus" />
                  </svg>
                </div>
              </button>
            </h2>
          </div>
          <div class="accordion__content" role="group" aria-label="Cheese">
            <div class="accordion__inner">
              <svg viewBox="0 0 141 65" aria-hidden="true">
                <use xlink:href="/projects/images/accordion_sprite.svg#cheese" />
              </svg>
              <p>
                <a href="https://en.wikipedia.org/wiki/Cheese">Cheese</a> is a
                food derived from milk that is produced in a wide range of
                flavors, textures, and forms by coagulation of the milk protein
                casein.
              </p>
            </div>
          </div>
        </div>

        <div class="accordion" data-theme="lettuce">
          <div class="accordion__header">
            <h2>
              <button aria-expanded="false">
                <span class="accordion__title">Lettuce</span>
                <div class="accordion__indicator">
                  <svg class="indicator__plus" viewBox="0 0 80 80">
                    <use xlink:href="/projects/images/accordion_sprite.svg#plus" />
                  </svg>
                  <svg class="indicator__minus" viewBox="0 0 80 28">
                    <use xlink:href="/projects/images/accordion_sprite.svg#minus" />
                  </svg>
                </div>
              </button>
            </h2>
          </div>
          <div class="accordion__content" role="group" aria-label="Lettuce">
            <div class="accordion__inner">
              <svg viewBox="0 0 110 73" aria-hidden="true">
                <use xlink:href="/projects/images/accordion_sprite.svg#lettuce" />
              </svg>
              <p>
                <a href="https://en.wikipedia.org/wiki/Lettuce">Lettuce</a> is an
                annual plant of the daisy family, Asteraceae. It is most often
                grown as a leaf vegetable, but sometimes for its stem and seeds.
              </p>
            </div>
          </div>
        </div>

        <div class="accordion" data-theme="tomato">
          <div class="accordion__header">
            <h2>
              <button aria-expanded="false">
                <span class="accordion__title">Tomato</span>
                <div class="accordion__indicator">
                  <svg class="indicator__plus" viewBox="0 0 80 80">
                    <use xlink:href="/projects/images/accordion_sprite.svg#plus" />
                  </svg>
                  <svg class="indicator__minus" viewBox="0 0 80 28">
                    <use xlink:href="/projects/images/accordion_sprite.svg#minus" />
                  </svg>
                </div>
              </button>
            </h2>
          </div>
          <div class="accordion__content" role="group" aria-label="Tomato">
            <div class="accordion__inner">
              <svg viewBox="0 0 127 62" aria-hidden="true">
                <use xlink:href="/projects/images/accordion_sprite.svg#tomatoes" />
              </svg>
              <p>
                The <a href="https://en.wikipedia.org/wiki/Tomato">tomato</a> is
                the edible, often red, fruit of the plant Solanum lycopersicum,
                commonly known as a tomato plant.
              </p>
            </div>
          </div>
        </div>

        <div class="accordion" data-theme="beef">
          <div class="accordion__header">
            <h2>
              <button aria-expanded="false">
                <span class="accordion__title">Beef</span>
                <div class="accordion__indicator">
                  <svg class="indicator__plus" viewBox="0 0 80 80">
                    <use xlink:href="/projects/images/accordion_sprite.svg#plus" />
                  </svg>
                  <svg class="indicator__minus" viewBox="0 0 80 28">
                    <use xlink:href="/projects/images/accordion_sprite.svg#minus" />
                  </svg>
                </div>
              </button>
            </h2>
          </div>
          <div class="accordion__content" role="group" aria-label="Beef">
            <div class="accordion__inner">
              <svg viewBox="0 0 112 59" aria-hidden="true">
                <use xlink:href="/projects/images/accordion_sprite.svg#beef" />
              </svg>
              <p>
                <a href="https://en.wikipedia.org/wiki/Beef">Beef</a> is the
                culinary name for meat from cattle, particularly skeletal muscle.
                Beef is a source of high-quality protein and essential nutrients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from "~/components/Navigation/TheFooter.vue";
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
      title: "JS Development | Accordion",
      link: [
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://fonts.googleapis.com/css?family=Roboto:300,400,600,700",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "projects/styles/accordion.css",
        },
      ],
      script: [
        {
          src: "projects/Accordion/main.js",
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
.accordionPage {
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
