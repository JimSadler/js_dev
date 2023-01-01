<template>
  <div>
    <div style="height: 90vh" class="tinyPage">
      <main>

      </main>

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
          href: "projects/styles/tiny.css",
        },
      ],
      script: [
        {
          src: "projects/Tiny/main.js",
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
.tinyPage {
  min-height: 107vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url("~~assets/img/nrao19df04_5_V404-Cygni.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  /* height: 100%; */
  background-position: 53% top;
  margin-top: -7%;
}
</style>
