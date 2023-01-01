<template>
  <div>
    <div style="height: 90vh" class="offCanvasPage">
      <div class="offsite-container">
        <nav
          class="nav"
          tabindex="-1"
          aria-label="Main navigation"
          aria-describedby="#hint"
        >
          <button class="close-button" aria-label="Close navigation">
            <span>X</span>
<!--            <svg viewBox="0 0 20 20">-->
<!--              <path-->
<!--                d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"-->
<!--              />-->
<!--            </svg>-->
          </button>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <p id="#hint" class="sr-only">
            Use the Escape button to close this navigation.
          </p>
        </nav>
      </div>

      <div class="site-container">
        <h1>Click the button to open the sidebar!</h1>
        <button class="menu-button" aria-expanded="false">
          <span>Menu</span>
        </button>
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
          href: "projects/styles/off-canvas.css",
        },
      ],
      script: [
        {
          src: "projects/OffCanvas/main.js",
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
.offCanvasPage {
  min-height: 107vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url("~~assets/img/jGlq2Q.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  /* height: 100%; */
  background-position: 53% top;
  margin-top: -7%;
}
</style>
