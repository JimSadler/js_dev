<template>
  <div>
    <div style="height: 90vh" class="infinitePage">
      <div role="main" class="container" style="margin-top: 80em; margin-bottom: 50em;">
        <h1 style="max-width: 10em">
          <div class="decorative" aria-hidden="true">-->
            <div>LETTERS</div>
          </div>
          An Amazing Collection of <strong>Letters</strong>
        </h1>

        <ul class="letters"></ul>

        <div class="center">
          <svg class="spinner" width="50" height="50" viewBox="0 0 50 50">
            <path
              fill="#B19AE3"
              fill-rule="evenodd"
              d="M97.4621493,141.159257 L97.2697572,141.270924 C94.6424721,142.842598 92.883448,145.715878 92.883448,149 C92.883448,151.386223 93.8121052,153.555547 95.3277252,155.166277 C86.5743939,152.892832 79.6133019,146.172642 77,137.561199 C78.4065098,138.471469 80.0832563,139 81.883448,139 C85.7377403,139 89.0261508,136.577172 90.3087595,133.171436 C91.3049214,136.822934 93.984675,139.780318 97.4621493,141.159257 Z M121.883448,139 C123.683519,139 125.360161,138.47154 126.766694,137.561299 C124.153594,146.172642 117.192502,152.892832 108.438818,155.16657 C109.954791,153.555547 110.883448,151.386223 110.883448,149 C110.883448,145.636201 109.038035,142.70342 106.304393,141.158842 C109.782221,139.780318 112.461975,136.822934 113.459995,133.171116 C114.740745,136.577172 118.029156,139 121.883448,139 Z M108.438818,104.83343 C117.192502,107.107168 124.153594,113.827358 126.766896,122.438801 C125.360161,121.52846 123.683519,121 121.883448,121 C118.029156,121 114.740745,123.422828 113.458137,126.828564 C112.461975,123.177066 109.782221,120.219682 106.304747,118.840743 C109.038035,117.29658 110.883448,114.363799 110.883448,111 C110.883448,108.692239 110.014858,106.587348 108.586761,104.994411 Z M92.883448,111 C92.883448,114.363799 94.7288605,117.29658 97.4625031,118.841158 C93.984675,120.219682 91.3049214,123.177066 90.3069015,126.828884 C89.0261508,123.422828 85.7377403,121 81.883448,121 C80.0832563,121 78.4065098,121.528531 76.9999187,122.438884 C79.6133019,113.827358 86.5743939,107.107168 95.3280785,104.83343 C93.8120606,106.444557 92.883448,108.613834 92.883448,111 Z"
              transform="translate(-77 -104)"
            />
          </svg>
          <button class="load-more-button">Load more</button>
        </div>
      </div>

      <section class="dribbble-section center" hidden>
        <h2 class="h1">Get more <strong>Lettery</strong> Goodness</h2>
        <a
          class="button"
          href="https://dribbble.com/search/36%20days%20of%20type"
        >
          Gimme more
        </a>
      </section>
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
          href: "projects/styles/infinite_scroll.css",
        },
      ],
      script: [
        {
          src: "projects/InfiniteScroll/main.js",
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
.infinitePage {
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
