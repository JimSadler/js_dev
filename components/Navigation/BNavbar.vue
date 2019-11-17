<template>
    <div>
  <b-navbar toggleable="lg" type="dark" variant="info" sticky class="is-transparent" id="nav">
    <b-navbar-brand >
      <div class="logo animated flipInX" >
      <transition name="logo" >
        <img class="head_logo animated " src="~/assets/img/negative-space-rt copy.png" v-on:load="onLoaded" v-show="loaded" alt="">
      </transition>
      <transition name="logo-text" enter-active-class="bounceInRight" >
        <nuxt-link style="animation-duration: 0.3s" class="logo-text" to="/">J.S. Development</nuxt-link>
      </transition>
  </div>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav>
        <b-nav-item><nuxt-link to="/services">Services</nuxt-link></b-nav-item>
        <b-nav-item><nuxt-link to="/work">Work</nuxt-link></b-nav-item>
        <b-nav-item><nuxt-link to="/experiments">Experiments</nuxt-link></b-nav-item>
        <b-nav-item><nuxt-link to="/testimonials">Testimonials</nuxt-link></b-nav-item>

      </b-navbar-nav>

        

       
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
    name: 'BNav',
    data: function() {
    return {
      loaded: false,
      show: false,
      // scrollPosition: null
    }
    
  },
  methods: {
    onLoaded() {
      this.loaded = true;
    },
    onFadeIn() {
      this.show = true;
    },
    // updateScroll() {
    //   this.scrollPosition = window.scrollY
    // }
    
  },
    mounted() {
      this.$nextTick(function(){
        window.addEventListener("scroll", function(){
          var navbar = document.getElementById("nav")
          var nav_classes = navbar.classList
          if(document.documentElement.scrollTop >= 150) {
            if (nav_classes.contains("shrink") === false) {
              nav_classes.toggle("shrink");
            }
          }
          else {
            if (nav_classes.contains("shrink") === true) {
              nav_classes.toggle("shrink");
            }
          }
        })
      })
    }
  }
</script>
<style scoped>
nav {
  padding: 1rem;
  transition: all 0.5s;
  background: white;
  border-bottom: #ddd 1px solid;
}
nav.shrink {
  padding: 0.3rem;
  background: gray;
}
nav a {
  margin-right: 1rem;
}
.bg-info {
    background-color: transparent !important;
}
.header-container {
height: 60px;
}
.head_logo {
width: 30%;
margin-top: 1%;
}
@media (max-width: 768px) {
  .head_logo {
      width: 50%;
      margin-top: -5%;
  }
  .navbar {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0rem 1rem;
}
.bg-info[data-v-79219f12] {
    background-color: #111214 !important;
}
}
.nav-link {
  color: #fff;
}
</style>