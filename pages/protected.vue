<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        Protected Page
      </h1>
      <h2 class="subtitle">
        My <strong><u>protected</u></strong> Nuxt.js project page
      </h2>
      <div class="links">
        <nuxt-link to="/" class="button--green">
          Home
        </a>
        </nuxt-link>
        <div v-on:click="triggerNetlifyIdentityAction('logout')" class="button--grey">Logout</div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import netlifyIdentity from "netlify-identity-widget";
import { mapActions } from "vuex";

netlifyIdentity.init();

export default {
  components: {
    Logo
  },
  methods: {
    ...mapActions({
      setUser: 'user/setUser'
    }),
    triggerNetlifyIdentityAction(action) {
      if (action == "login" || action == "signup") {
        netlifyIdentity.open(action);
        netlifyIdentity.on(action, user => {
          this.setUser(user);
          netlifyIdentity.close();
        });
      } else if (action == "logout") {
        this.setUser(null);
        netlifyIdentity.logout();
        this.$router.push('/');
      }
    }
  },
  middleware ({ store, redirect }) {
    if (!store.state.user.currentUser) {
      return redirect('/');
    }
  }
}
</script>

<style>

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
