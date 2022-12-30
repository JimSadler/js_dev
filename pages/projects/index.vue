<template>
  <div>
    <div class="testimon container-fluid">
      <header class="intro-img intro-dark-bg test_background">
        <!--<div class="overlay"></div>-->
        <div class="intro-body animated zoomInUp">
          <div class="container animated">
            <h1 class="brand-heading">Projects</h1>
            <!-- <hr class="light"> -->
          </div>
        </div>
      </header>
    </div>
    <div class="container-fluid mt-4">
      <h2 class="text-center">Pure javascript projects</h2>
      <hr />

<!--      testing-->
      <div class="row loop_test justify-content-center text-center my-5">
        <div
          class="col-auto mb-3"
          data-aos="zoom-in-right"
          data-aos-delay="100"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          v-for="card in card_row_1" :key="card.name"
        >

          <div class="card" style="width: 18rem" >
            <div class="card-body">
              <img :class="card.icon_size_class" alt :src="card.icon"/>

              <h5 class="card-title">{{ card.title }}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </p>
              <nuxt-link :to="card.route"> Check It Out </nuxt-link>
            </div>
          </div>

        </div>
      </div>

      <div class="row loop_test justify-content-center text-center my-5">
        <div
          class="col-auto mb-3"
          data-aos="zoom-in-right"
          data-aos-delay="100"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          v-for="card in card_row_2" :key="card.name"
        >

          <div class="card" style="width: 18rem" >
            <div class="card-body">
              <img :class="card.icon_size_class" alt :src="card.icon"/>

              <h5 class="card-title">{{ card.title }}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </p>
              <nuxt-link :to="card.route"> Check It Out </nuxt-link>
            </div>
          </div>

        </div>
      </div>

      <div class="row loop_test justify-content-center text-center my-5">
        <div
          class="col-auto mb-3"
          data-aos="zoom-in-right"
          data-aos-delay="100"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          v-for="card in card_row_3" :key="card.name"
        >

          <div class="card" style="width: 18rem" >
            <div class="card-body">
              <img :class="card.icon_size_class" alt :src="card.icon"/>

              <h5 class="card-title">{{ card.title }}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </p>
              <nuxt-link :to="card.route"> Check It Out </nuxt-link>
            </div>
          </div>

        </div>
      </div>

      <div class="row loop_test justify-content-center text-center my-5">
        <div
          class="col-auto mb-3"
          data-aos="zoom-in-right"
          data-aos-delay="100"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          v-for="card in card_row_4" :key="card.name"
        >

          <div class="card" style="width: 18rem" >
            <div class="card-body">
              <img :class="card.icon_size_class" alt :src="card.icon"/>

              <h5 class="card-title">{{ card.title }}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </p>
              <nuxt-link :to="card.route"> Check It Out </nuxt-link>
            </div>
          </div>

        </div>
      </div>

    </div>
    <hr class="test_sec-div" />
  </div>
</template>
<script>
import aosMixin from "~/mixins/aos";

export default {
  head() {
    return {
      title: "JS Development | Projects",
    };
  },
  data: () => ({

    card_row_1: [
      {
        name: 'googleMapsClone',
        icon: '/projects/images/project_icons/googlemaps.png',
        route: '/GoogleMapsClone',
        title: 'Google Maps Clone',
        description: '',
        icon_size_class: 'testLogo2'
      },
      {
        name: 'calculator',
        icon: '/projects/images/project_icons/calculator.png',
        route: '/Calculator',
        title: 'Calculator',
        description: '',
        icon_size_class: 'testLogo2'
      },
      {
        name: 'todo_list',
        icon: '/projects/images/project_icons/to-do-list-color-icon-vector-28812967.png',
        route: '/Todo',
        title: 'To Do List',
        description: '',
        icon_size_class: 'testLogo2'
      },
      {
        name: 'datepicker',
        icon: '/projects/images/project_icons/datepicker_icon.png',
        route: '/Datepicker',
        title: 'Datepicker',
        description: '',
        icon_size_class: 'testLogo2'
      },
      {
        name: 'tablist',
        icon: '/projects/images/project_icons/tabset.gif',
        route: '/Tablist',
        title: 'Tablist',
        description: '',
        icon_size_class: 'testLogo2'
      }
    ],
    card_row_2: [
      {
        name: 'accordion',
        icon: '/projects/images/project_icons/accordion_icon2.png',
        route: '/Accordion',
        title: 'Accordion',
        description: '',
        icon_size_class: 'testLogo2'
      },
      {
        name: 'off_canvas',
        icon: '/projects/images/project_icons/off_canvas_menu_icon.png',
        route: '/OffCanvasMenu',
        title: 'Off Canvas Menu',
        description: '',
        icon_size_class: 'testLogo2'
      },
      // {
      //   name: 'infinite_scroll',
      //   icon: '/projects/images/project_icons/infinite.gif',
      //   route: '/InfiniteScroll',
      //   title: 'Infinite Scroll',
      //   description: '',
      //   icon_size_class: 'testLogo2'
      // },
      {
        name: 'modal',
        icon: '/projects/images/project_icons/modal_icon.png',
        route: '/',
        title: 'Modal',
        description: '',
        icon_size_class: 'testLogo2'
      },
      {
        name: 'popover',
        icon: '/projects/images/project_icons/popover.png',
        route: '/',
        title: 'Popover',
        description: '',
        icon_size_class: 'testLogo2'
      },
      {
        name: 'tiny_framework',
        icon: '/projects/images/project_icons/tiny_framework_icon.png',
        route: '/',
        title: 'Tiny Framework',
        description: '',
        icon_size_class: 'testLogo2'
      },
    ],
    card_row_3: [
      {
        name: 'slide_to_reveal',
        icon: '/projects/images/project_icons/slide_icon.gif',
        route: '/',
        title: 'Slide to Reveal',
        description: '',
        icon_size_class: 'testLogo3'
      },
      {
        name: 'spinning_pacman',
        icon: '/projects/images/project_icons/pacman.gif',
        route: '/',
        title: 'Spinning Pac Man',
        description: '',
        icon_size_class: 'testLogo3'
      },
      {
        name: 'sticky_nav',
        icon: '/projects/images/project_icons/sticky_icon.gif',
        route: '/',
        title: 'Sticky Nav',
        description: '',
        icon_size_class: 'testLogo3'
      },
      {
        name: 'typeahead',
        icon: '/projects/images/project_icons/type_ahead.gif',
        route: '/',
        title: 'Typeahead',
        description: '',
        icon_size_class: 'testLogo3'
      },
      {
        name: 'drag_drop',
        icon: '/projects/images/project_icons/drag.gif',
        route: '/',
        title: 'Drag and Drop',
        description: '',
        icon_size_class: 'testLogo3'
      }
    ],
    card_row_4: [
      {
        name: 'carousel',
        icon: '/projects/images/project_icons/carousel_icon.png',
        route: '/',
        title: 'Carousel',
        description: '',
        icon_size_class: 'testLogo3'
      },
      // {
      //   name: 'tiny_framework',
      //   icon: '/projects/images/project_icons/tiny_framework_icon.png',
      //   route: '/',
      //   title: 'Tiny Framework',
      //   description: '',
      //   icon_size_class: 'testLogo3'
      // },
      {
        name: 'spa',
        icon: '/projects/images/project_icons/spa_icon.png',
        route: '/',
        title: 'Single Page Application',
        description: '',
        icon_size_class: 'testLogo3'
      },

    ],


    disabled: false,
    readonly: false,
  }),

  mixins: [aosMixin],
  computed: {
    myData() {
      return this.$data
    }
  }
};
</script>

<style scoped>
.testimonials-page {
  text-align: center;
  padding: 30px;
}
.testLogo4 {
  width: 35%;
  margin-bottom: 1em;
}
.testLogo5 {
  width: 80%;
  margin-bottom: 1em;
}
.testLogo4_5 {
  width: 45%;
  margin-bottom: 1em;
}
.testLogo2 {
  width: 60px;
  height: 60px;
  margin-bottom: 1em;
}
.testLogo3 {
  width: 80px;
  height: 80px;
  margin-bottom: 1em;
}
.testLogo0 {
  width: 10%;
  margin-bottom: 1em;
}
.testLogo1 {
  width: 13%;
  margin-bottom: 1em;
  filter: greyscale(60%);
}
.testimon.container-fluid {
  /* margin: -60px 0 60px; */
  min-height: 107vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url("~~assets/img/wallpaperflare.com_wallpaper.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  /* height: 100%; */
  background-position: 53% top;
  margin-top: -7%;
}
/* .test_background {
  margin: -60px 0 60px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url('~~assets/project_icons/ELH_paralx.jpg');
  background-size: cover;
} */
.test_background h1.brand-heading {
  color: #fff;
}
hr.light {
  border-color: #fff;
}
section.text-center.testimonial {
  margin-top: 5%;
  margin-bottom: 5%;
}
.maps.animated.fadeIn {
  -webkit-animation-duration: 1000ms;
  animation-delay: 1.5s;
}
.spin {
  -webkit-animation-name: spin;
  -webkit-animation-duration: 15000ms;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  -moz-animation-name: spin;
  -moz-animation-duration: 50000ms;
  -moz-animation-iteration-count: infinite;
  -moz-animation-timing-function: linear;
  -ms-animation-name: spin;
  -ms-animation-duration: 50000ms;
  -ms-animation-iteration-count: infinite;
  -ms-animation-timing-function: linear;
  -o-transition: rotateY(3600deg);
}
@-moz-keyframes spin {
  from {
    -moz-transform: rotateY(0deg);
  }
  to {
    -moz-transform: rotateY(360deg);
  }
}
@-webkit-keyframes spin {
  from {
    -webkit-transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(360deg);
  }
}
@keyframes spin {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}
section.text-center.testimonial {
  margin-top: 5%;
  margin-bottom: 5%;
  padding-bottom: 100px;
}
@media (max-width: 768px) {
  .testimon.container-fluid {
    margin-top: -19%;
  }
  .testLogo2 {
    width: 15%;
    margin-bottom: 1em;
  }
  .testLogo0 {
    width: 10%;
    margin-bottom: 1em;
  }
}
</style>
