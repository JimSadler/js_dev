<template>
  <div>
    <div style="height: 100vh" class="examplePage"></div>
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from "@/components/Navigation/TheFooter.vue";

export default {
  components: { TheFooter },
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
          href: "",
        },
      ],
      script: [
        {
          src: "",
          defer: true,
        },
      ],
    };
  },
  layout: "projectLayout",
};
</script>
<style scoped>
.examplePage {
  /* margin: -60px 0 60px; */
  min-height: 107vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* background-image: url("~~"); */
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  /* height: 100%; */
  background-position: 53% top;
  margin-top: -7%;
}
</style>
