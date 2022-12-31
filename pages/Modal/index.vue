<template>
  <div>
    <div style="height: 90vh" class="modalPage">
      <div role="main" class="d-flex">
        <section>
          <div class="wrap">
            <h2>Normal Modal</h2>
            <p>Click the button to display the modal</p>
            <button
              id="user-triggered-modal-button"
              class="button jsModalButton"
              aria-label="Open user-triggered modal"
              aria-expanded="false"
            >
              Normal Modal
            </button>
            <svg class="point-hand" viewBox="0 0 58 66">
              <use xlink:href="projects/images/modal_sprite.svg#point-hand" />
            </svg>
          </div>
        </section>

        <section>
          <div class="wrap">
            <h2>Timed Modal</h2>
            <p>
              Timed modals typically start counting when you load the page.
            </p>
            <p>A modal will open 10 seconds after page load.</p>
            <button
              id="timed-modal-button"
              class="button jsModalButton"
              aria-label="Open timed modal"
              aria-expanded="false"
            >
              Timed Modal
            </button>
          </div>
        </section>
      </div>

      <div class="modal-overlay jsModalOverlay">
        <div
          id="user-triggered-modal"
          class="modal"
          role="dialog"
          aria-modal="true"
          aria-label="Login form"
          style="padding: 10rem 5rem 5rem 5rem; width: 70%; margin-left: 14%; margin-top: 5%; height: 80%;"
        >
          <button
            class="modal__close-button jsModalClose"
            aria-label="Close login form"
          >
            <svg width="1em" height="1em" viewBox="0 0 18 18">
              <use xlink:href="projects/images/modal_sprite.svg#close" />
            </svg>
          </button>

          <div class="modal__content">
            <div class="modal-content__left">
              <svg
                class="wave-hand"
                width="112"
                height="139"
                viewBox="0 0 112 139"
              >
                <use xlink:href="projects/images/modal_sprite.svg#wave-hand" />
              </svg>
            </div>

            <div class="modal-content__right">
              <form action="#">
                <div class="input-group">
                  <label for="email">
                    <svg width="1em" height="1em" viewBox="0 0 20 20">
                      <path
                        d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"
                      />
                    </svg>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="jane@acme.com"
                  />
                </div>

                <div class="input-group">
                  <label>
                    <svg width="1em" height="1em" viewBox="0 0 20 20">
                      <path
                        d="M12.26 11.74L10 14H8v2H6v2l-2 2H0v-4l8.26-8.26a6 6 0 1 1 4 4zm4.86-4.62A3 3 0 0 0 15 2a3 3 0 0 0-2.12.88l4.24 4.24z"
                      />
                    </svg>
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                  />
                </div>

                <div class="form__actions">
                  <button type="submit" class="button">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="modal-overlay jsModalOverlay">
        <div
          id="timed-modal"
          class="modal"
          role="dialog"
          aria-modal="true"
          aria-label="Modal 2"
          style="padding: 10rem 5rem 5rem 5rem; width: 70%; margin-left: 14%; margin-top: 5%; height: 80%;"
        >
          <button
            class="modal__close-button jsModalClose"
            aria-label="Close login form"
          >
            <svg width="1em" height="1em" viewBox="0 0 18 18">
              <use xlink:href="projects/images/modal_sprite.svg#close" />
            </svg>
          </button>

          <div class="modal__content lobo">
            <h2>Hello World</h2>
            <p>I'm the second modal with just a button</p>
            <button class="button">Ok</button>
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
          href: "projects/styles/modal.css",
        },
      ],
      script: [
        {
          src: "projects/Modal/main.js",
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
.modalPage {
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
