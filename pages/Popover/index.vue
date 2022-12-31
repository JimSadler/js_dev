<template>
  <div>
    <div style="height: 90vh" class="popOverPage">
      <svg style="display: none">
      <symbol id="arrow">
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M21.874 1.5l16.448 13.157A3 3 0 0 1 36.448 20H3.552a3 3 0 0 1-1.874-5.343L18.126 1.5a3 3 0 0 1 3.748 0z"
        ></path>
      </symbol>
      </svg>

      <div class="container">
        <div class="grid">
          <h1>
            <span>P</span>
            <span>O</span>
            <span>P</span>
            <span>O</span>
            <span>V</span>
            <span>E</span>
            <span>R</span>
            <span>S</span>
          </h1>

          <button
            class="popover-trigger"
            data-target="pop-1"
            data-popover-position="top"
          >
            <svg viewBox="0 0 40 20">
              <use xlink:href="#arrow"></use>
            </svg>
          </button>

          <button
            class="popover-trigger"
            data-target="pop-2"
            data-popover-position="left"
          >
            <svg viewBox="0 0 40 20">
              <use xlink:href="#arrow"></use>
            </svg>
          </button>

          <button
            class="popover-trigger"
            data-target="pop-3"
            data-popover-position="right"
          >
            <svg viewBox="0 0 40 20">
              <use xlink:href="#arrow"></use>
            </svg>
          </button>

          <button
            class="popover-trigger"
            data-target="pop-4"
            data-popover-position="bottom"
            data-content="Hello world!"
          >
            <svg viewBox="0 0 40 20">
              <use xlink:href="#arrow"></use>
            </svg>
          </button>
        </div>
      </div>

      <div id="pop-1" class="popover" data-position="top">
        <p>The quick brown fox jumps over the lazy dog.</p>
      </div>

      <div id="pop-2" class="popover" data-position="left">
        <p>The quick brown fox jumps over the lazy dog.</p>
      </div>

      <div id="pop-3" class="popover" data-position="right">
        <h2>Heya, form!</h2>
        <form action="">
          <div>
            <label for="name">Name</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label for="message">Message</label>
            <textarea name="message" id="message"></textarea>
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
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
          href: "projects/styles/popover.css",
        },
      ],
      script: [
        {
          src: "projects/Popover/main.js",
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
.popOverPage {
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
