<template>

  <b-container fluid class=" default_layout">
    <b-navbar toggleable="lg" type="dark" variant="info" sticky class="is-transparent" id="nav0">
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
        
        <b-nav-item><nuxt-link to="/services">Services</nuxt-link></b-nav-item>
        <b-nav-item><nuxt-link to="/work">Work</nuxt-link></b-nav-item>
        <!-- <b-nav-item><nuxt-link to="/experiments">Experiments</nuxt-link></b-nav-item> -->
        <b-nav-item><nuxt-link to="/testimonials">Testimonials</nuxt-link></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    <nuxt />
    <TheFooter />
  </b-container>
</template>
<script>

import TheFooter from '@/components/Navigation/TheFooter'
export default {
  components: {
    TheFooter
    
  },
data: function() {
    return {
      loaded: false,
      show: false,
      scrollPosition: null
    }
},
    methods: {
    onLoaded() {
      this.loaded = true;
    },
    onFadeIn() {
      this.show = true;
    },
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
    
  },
  mounted() {
      this.$nextTick(function(){
        window.addEventListener("scroll", function(){
          var navbar = document.getElementById("nav0")
          var nav_classes = navbar.classList
          if(document.documentElement.scrollTop >= 750) {
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
<style>
.navbar-dark .navbar-toggler {
    color: #fff;
    border-color: #fff;
}
.default_layout {
  padding: 0;
  margin: 0;
}
#nav0 {
    background-color: transparent !important;
}
nav {
  padding: 1rem;
  transition: all 0.5s;
  background: white;
  
}
#nav0.shrink {
    padding: 0.3rem;
    background: #272B31!important;
}
nav a {
    margin-right: 1rem;
    color: #fff;
    text-decoration: none;
    background-color: transparent;
    transition: .7s;
}
nav a:hover {
    color: #28CE88;
    text-decoration: underline;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
nav.navbar.classA {
    background-color: transparent !important;
    transition: .7s;
}
nav.navbar.classB {
    background-color: #272A31 !important;
     transition: .7s;
}
nav.navbar.sticky-top.navbar-dark.bg-info {
    height: 70px;
}
   .head_logo {
    width: 30%;
    margin-top: 2%;
    margin-left: 5%;
}
.logo.animated {
    margin-top: 12%;
}
.header-container {
  height: 60px;
}

.navbar-dark .navbar-nav .nav-link {
  color: #fff;
  font-family: 'NoirPro-SemiBold';
  font-size: 17px;
  transition: 0.5s;
}
.navbar-dark .navbar-nav .nav-link:hover,
.navbar-dark .navbar-nav .nav-link:focus {
  color: #9ddb7a;
}
a.logo-text {
  color: #fff;
  font-family: 'NoirPro-SemiBold', Fallback, sans-serif;
  font-size: 25px;
  transition: 0.5s;
  margin-left: -10%;
  
}
a.logo-text:hover {
  color: #28CE88;
  text-decoration: none;
}
@media (max-width: 768px){
    .head_logo {
    width: 19%;
    margin-top: -1%;
    margin-left: -1%;
  }
  /* .logo a {
    display: none;
  } */
  .home {
   margin-top: -18.6%;
}
a.logo-text {
    color: #fff;
    font-family: 'NoirPro-SemiBold', Fallback, sans-serif;
    font-size: 18px;
    transition: 0.5s;
    margin-left: -5%;
  }
  .logo.animated {
    margin-top: 2%;
    width: 39%;
    width: 113%;
}

}

</style>
