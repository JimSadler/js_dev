

<template>
<div class="header-container">
<header class="the-header"  :class="{classA: scrollPosition < 700, classB: scrollPosition > 700}">
  <TheSideNavToggle @toggle="$emit('side-nav-toggle')" />
  <div class="logo animated flipInX" >
    <transition name="logo" >
      <img class="head_logo animated " src="~/assets/img/negative-space-rt copy.png" v-on:load="onLoaded" v-show="loaded" alt="">
    </transition>
    <transition name="logo-text" enter-active-class="bounceInRight" >
      <nuxt-link style="animation-duration: 0.3s" class="logo-text" to="/">J.S. Development</nuxt-link>
    </transition>
  </div>
  <div class="spacer"></div>
  <div class="navigation-items">
    <ul class="nav-list">
      <li class="nav-item"><nuxt-link to="/services">Services</nuxt-link></li>
      <!-- <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li> -->
      <li class="nav-item"><nuxt-link to="/work">Work</nuxt-link></li>
      <li class="nav-item"><nuxt-link to="/experiments">Experiments</nuxt-link></li>
      <li class="nav-item"><nuxt-link to="/testimonials">Testimonials</nuxt-link></li>
    </ul>
  </div>
</header>
</div>
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

export default {
name: "TheHeader",
components: {
  TheSideNavToggle
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
    window.addEventListener('scroll', this.updateScroll);
  }
};
</script>


<style scoped>
.header-container {
height: 60px;
}
.head_logo {
width: 30%;
margin-top: 10%;
}
/* .the-header.classB {
  background-color: #272B31;
} */

.the-header {
width: 100%;
position: fixed;
height: 60px;
display: flex;
justify-content: space-around;
align-items: center;
background-color: black;
z-index: 100;
box-sizing: border-box;
padding: 0 20px;
transition: .5s;
transition-timing-function: ease-in-out;
}
.animated.flipInX {
    -webkit-animation-delay: .7s;
    animation-delay: .7s;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
}
.logo-enter {
opacity: 0;
}

.logo-enter-to {
  opacity: 1;
}
.logo-enter-active{
  transition: opacity .5s ease-in;
}

.logo-text-enter {
opacity: 0;

}
.logo-text-enter-to {
  opacity: 1;

}
.logo-text-active {
  transition: opacity .9s ease-in;
}


.logo {
margin: 0 10px;
font-size: 4.3rem;
}
.logo-text {
font-family: "Lora", "Helvetica Neue", Helvetica, Arial, sans-serif;
font-size: 22px;
font-style: bold;
margin-top: 10%;
margin-left: -11%;
font-weight: 700;
}
.logo a {
text-decoration: none;
color: white;
transition: .5s;
}
.logo a:hover {
text-decoration: none;
color: #90D19C;
}

.spacer {
flex: 1;
}

.navigation-items {
display: none;
}

@media (min-width: 768px) {
.navigation-items {
  display: block;
}
}

.nav-list {
list-style: none;
padding: 0;
margin: 0;
display: flex;
}

.nav-item {
margin: 0 10px;
}

.nav-item a {
text-decoration: none;
color: white;
transition: .5s;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
color: #90D19C;
}
</style>
