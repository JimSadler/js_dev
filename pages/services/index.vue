<template>
  <div>
    <section id="about" class="text-center animated fadeIn">
      <div class="container-fluid servHead">
        <div class="row">
          <div class="col-lg-12">
            <h2>Willing, Able and Passionate</h2>
            <hr class="primary" />
            <div class="container services">
              <div class="row">
                <div class="col-lg-6 col-md-6 text-center">
                  <div class="service-box">
                    <transition name="serv-icon" enter-active-class="fadeIn">
                      <img
                        class="accessibility-icon sr-icons animated"
                        src="~assets/img/icons/cust-site-icon.svg"
                        v-on:load="onLoaded"
                        v-show="loaded"
                        alt
                        style="width:12%;"
                      />
                    </transition>
                    <h3>Custom Website</h3>
                    <p class="text-muted">
                      Websites designed with HTML, CSS, JavaScript, including Vue.js and Nuxt.
                      We strive to develop a high-level custom website for you that both of us can be proud of.
                      Your website will be designed and developed for your every need, and is customized for purpose and user experience. Built from the ground up.
                    </p>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 text-center">
                  <div class="service-box">
                    <transition name="serv-icon" enter-active-class="fadeIn">
                      <img
                        class="accessibility-icon animated sr-icons"
                        src="~assets/img/icons/access-icon.svg"
                        v-on:load="onLoaded"
                        v-show="loaded"
                        alt
                        style="width:11%;"
                      />
                    </transition>
                    <h3>The Inclusive Design</h3>
                    <p class="text-muted">
                      Building a beautiful website is just the icing on the cake. We take pride in building a fully functional website that addresses your brand,
                      and marketing strategies with an inclusive approach that takes all visitors to the site in mind, including those with disabilities.
                    </p>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 text-center">
                  <div class="service-box">
                    <transition name="serv-icon" enter-active-class="fadeIn">
                      <img
                        class="accessibility-icon animated sr-icons"
                        src="~assets/img/icons/resp-des-icon.svg"
                        v-on:load="onLoaded"
                        v-show="loaded"
                        alt
                        style="width:20%;"
                      />
                    </transition>
                    <h3>Responsive Design</h3>
                    <p class="text-muted">
                      We are all living in a mobile world. Which is why JS Development's approach is one of mobile first. In this day and age, the odds of your website
                      being viewed on a mobile device is greater than not.
                    </p>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 text-center">
                  <div class="service-box">
                    <transition name="serv-icon" enter-active-class="fadeIn">
                      <img
                        class="accessibility-icon animated sr-icons"
                        src="~assets/img/icons/other-serv-icon.svg"
                        v-on:load="onLoaded"
                        v-show="loaded"
                        alt
                        style="width:20%;"
                      />
                    </transition>
                    <h3>Other Services</h3>
                    <p class="text-muted">
                      We can walk you through the whole process of creating a website, set you up with a domain, and hosting account with one of our preferred services,
                      and help with the design of a logo and or animations to help your site come to life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <CTA2 />
  </div>
</template>
<script>
import CTA2 from '~/components/CTA/CTA2.vue'
export default {
  head() {
    return {
      title: "JS Development | Services"
      
    }
  },
  layout: 'noHeade_img',
  transition: 'tweakOpacity',
  components: {
    CTA2
  },

  data: function() {
    return {
      loaded: false,
      show: false
    }
  },
  methods: {
    onLoaded() {
      this.loaded = true
    },
    onFadeIn() {
      this.show = true
    }
  }
}
</script>
<style scoped>
.container-fluid.servHead {
  background-color: #fff;
  margin-top: -4%;
  padding-top: 3%;
}
.tweakOpacity-enter-active,
.tweakOpacity-leave-active {
  transition: opacity 0.4s ease-out;
}
.tweakOpacity-enter,
.tweakOpacity-leave-active {
  opacity: 0;
}
@keyframes acrossIn {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes acrossOut {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
}
#about {
  margin-top: 3%;
}
.service-box {
  margin-top: 9%;
}
.serv-icon-enter {
  opacity: 0;
}

.serv-icon-enter-to {
  opacity: 1;
}
.serv-icon-enter-active {
  transition: opacity 0.5s ease-in;
  transition-duration: 2s;
}
.container.services {
  margin-bottom: 9%;
  margin-top: 5%;
}
@media (max-width: 768px) {
  .parallax-container {
    display: none;
  }
}
.head_logo {
  width: 7% !important;
  margin-top: 3%;
  margin-left: 5%;
}
</style>