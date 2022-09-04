<template>
  <div style="height: 100vh"></div>
</template>

<script>
export default {
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
<style scoped></style>
