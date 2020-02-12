<template>
  <b-container fluid class="default_layout">
    <b-navbar toggleable="lg" type="dark" variant="info" sticky id="nav1">
      <b-navbar-brand>
        <div class="logo animated flipInX">
          <transition name="logo">
            <img
              class="head_logo animated"
              src="~/assets/img/negative-space-rt copy.png"
              v-on:load="onLoaded"
              v-show="loaded"
              alt
            />
          </transition>
          <transition name="logo-text" enter-active-class>
            <nuxt-link
              style="animation-duration: 0.3s"
              class="logo-text"
              to="/"
            >
              <svg
                id="demo"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 80"
                width="2000"
                height="800"
              >
                <!-- <rect id="background" x="0" y="0" width="200" height="60" fill="#262626" /> -->

                <text
                  id="theText"
                  transform="translate(100 50)"
                  stroke-dasharray="100"
                  stroke-dashoffset="100"
                  text-anchor="middle"
                  font-size="18"
                  fill="transparent"
                  stroke="#fff"
                  stroke-width="0.55"
                  stroke-miterlimit
                  stroke-linejoin="miter"
                >
                  JS Development
                </text>
              </svg>
            </nuxt-link>
          </transition>
        </div>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item router-tag="a" to="/services">Services</b-nav-item>
          <b-nav-item to="/work" router-tag="a">Work</b-nav-item>
          <!-- <b-nav-item><nuxt-link to="/experiments">Experiments</nuxt-link></b-nav-item> -->
          <b-nav-item router-tag="a" to="/testimonials"
            >Testimonials</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <nuxt />
    <TheFooter />
  </b-container>
</template>
<script>
import TheFooter from '@/components/Navigation/TheFooter'
import { TimelineLite, TimelineMax } from 'gsap'
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
      this.loaded = true
    },
    onFadeIn() {
      this.show = true
    },
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
  },
  mounted() {
    var tl = new TimelineMax({
      repeat: 0,
      repeatDelay: -1
    })
    tl.to('#theText', 3, { strokeDashoffset: 0 })

    this.$nextTick(function() {
      window.addEventListener('scroll', function() {
        var navbar = document.getElementById('nav1')
        var nav_classes = navbar.classList
        if (document.documentElement.scrollTop >= 750) {
          if (nav_classes.contains('shrink') === false) {
            nav_classes.toggle('shrink')
          }
        } else {
          if (nav_classes.contains('shrink') === true) {
            nav_classes.toggle('shrink')
          }
        }
      })
    })
  }
}
</script>
<style>
text#theText {
  font-size: 16px;
  margin-top: -3%;
  margin-left: 10%;
}
#demo {
  width: 30%;
  height: 10%;
  margin-left: 2%;
  margin-top: 0.5%;
}
.navbar-dark .navbar-toggler {
  color: #fff;
  border-color: #fff;
}
.default_layout {
  padding: 0;
  margin: 0;
}
#nav1.bg-info {
  background-color: #272b31 !important;
}
nav {
  padding: 1rem;
  transition: all 0.5s;
  background: white;
}
#nav1.shrink {
  padding: 0.3rem;
  background: #272b31 !important;
}
#nav1 #nav-collapse {
  background-color: rgba(39, 43, 49, 0.9);
  height: 150px;
}
nav a {
  margin-right: 1rem;
  color: #fff;
  text-decoration: none;

  transition: 0.7s;
}
nav a:hover {
  color: #28ce88;
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
  transition: 0.7s;
}
nav.navbar.classB {
  background-color: #272a31 !important;
  transition: 0.7s;
}
nav.navbar.sticky-top.navbar-dark.bg-info {
  height: 70px;
}

.logo.animated {
  margin-top: 0%;
}
.header-container {
  height: 60px;
}

.navbar-dark .navbar-nav .nav-link {
  color: #fff;
  font-family: 'NoirPro-SemiBold';
  font-size: 17px;
  transition: 0.5s;
  margin-left: 5%;
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
  color: #28ce88;
  text-decoration: none;
}
@media (max-width: 768px) {
  .head_logo {
    width: 19%;
    margin-top: -1%;
    margin-left: -1%;
    display: none;
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
    display: none;
  }
  .logo.animated {
    width: 39%;
    width: 113%;
  }
}
</style>
