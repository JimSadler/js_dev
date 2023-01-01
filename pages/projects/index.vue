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
          data-aos="zoom-in-left"
          data-aos-delay="100"
          data-aos-duration="500"
          data-aos-easing="ease-in"
          data-aos-once="true"
          v-for="card in card_row_1" :key="card.name"
        >

          <div class="card" style="width: 18rem; height: 22rem;" >
            <div class="card-body">
              <img :class="card.icon_size_class" alt :src="card.icon"/>

              <h5 class="card-title">{{ card.title }}</h5>
              <p class="card-text">
                {{card.description || 'description coming soon.'}}
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
          data-aos-easing="ease-in-out-sine"
          data-aos-once="true"
          v-for="card in card_row_2" :key="card.name"
        >

          <div class="card" style="width: 18rem; height: 22rem;" >
            <div class="card-body">
              <img :class="card.icon_size_class" alt :src="card.icon"/>

              <h5 class="card-title">{{ card.title }}</h5>
              <p class="card-text">
                {{card.description || 'description coming soon.'}}
              </p>
              <nuxt-link :to="card.route"> Check It Out </nuxt-link>
            </div>
          </div>

        </div>
      </div>

      <div class="row loop_test justify-content-center text-center my-5">
        <div
          class="col-auto mb-3"
          data-aos="zoom-in-left"
          data-aos-delay="100"
          data-aos-duration="500"
          data-aos-easing="ease-in"
          data-aos-once="true"
          v-for="card in card_row_3" :key="card.name"
        >

          <div class="card" style="width: 18rem; height: 22rem;" >
            <div class="card-body">
              <img :class="card.icon_size_class" alt :src="card.icon"/>

              <h5 class="card-title">{{ card.title }}</h5>
              <p class="card-text">
                {{card.description || 'description coming soon.'}}
              </p>
              <nuxt-link :to="card.route"> Check It Out </nuxt-link>
            </div>
          </div>

        </div>
      </div>

      <div class="row loop_test justify-content-center text-center my-5">
        <div
          class="col-auto mb-3"
          data-aos="zoom-in-left"
          data-aos-delay="100"
          data-aos-duration="500"
          data-aos-easing="ease-in"
          data-aos-once="true"
          v-for="card in card_row_4" :key="card.name"
        >

          <div class="card" style="width: 18rem; height: 22rem;" >
            <div class="card-body">
              <img :class="card.icon_size_class" alt :src="card.icon"/>

              <h5 class="card-title">{{ card.title }}</h5>
              <p class="card-text">
                {{card.description || 'description coming soon.'}}
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
        description: 'Search for addresses, map out directions, plan your route with multiple destinations. There is also an autocomplete when typing. This uses google maps api.',
        icon_size_class: 'testLogo2'
      },
      {
        name: 'calculator',
        icon: '/projects/images/project_icons/calculator.png',
        route: '/Calculator',
        title: 'Calculator',
        description: 'This is an online calculator complete with multiply,divide,subtract and add functionality using whole numbers and decimals.',
        icon_size_class: 'testLogo2'
      },
      {
        name: 'todo_list',
        icon: '/projects/images/project_icons/to-do-list-color-icon-vector-28812967.png',
        route: '/Todo',
        title: 'To Do List',
        description: 'This app will allow you to create a todo list. You can check off the todo list items as they are completed, and even remove them. ',
        icon_size_class: 'testLogo2'
      },
      {
        name: 'datepicker',
        icon: '/projects/images/project_icons/datepicker_icon.png',
        route: '/Datepicker',
        title: 'Datepicker',
        description: 'This app will let you choose a date on a calendar in the current and future months.',
        icon_size_class: 'testLogo2'
      },
      {
        name: 'tablist',
        icon: '/projects/images/project_icons/tabset.gif',
        route: '/Tablist',
        title: 'Tablist',
        description: 'This is a basic tabset. Completely functional for visual and keyboard/screen reader users.',
        icon_size_class: 'testLogo2'
      }
    ],
    card_row_2: [
      {
        name: 'accordion',
        icon: '/projects/images/project_icons/accordion_icon2.png',
        route: '/Accordion',
        title: 'Accordion',
        description: 'This a a basic accordion set. It is completely accessible for any user.',
        icon_size_class: 'testLogo2'
      },
      {
        name: 'off_canvas',
        icon: '/projects/images/project_icons/off_canvas_menu_icon.png',
        route: '/OffCanvasMenu',
        title: 'Off Canvas Menu',
        description: 'This is an off screen menu build with vanilla js. It is also user friendly for all users.',
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
        route: '/Modal',
        title: 'Modal',
        description: 'This modal example is built with vanilla js. there is a timed modal example and a button triggered example. 508 compliant.',
        icon_size_class: 'testLogo2'
      },
      {
        name: 'popover',
        icon: '/projects/images/project_icons/popover.png',
        route: '/Popover',
        title: 'Popover',
        description: 'This is a popover example. All of the positioning of the popover windows were done with JS.',
        icon_size_class: 'testLogo2'
      },
      {
        name: 'tiny_framework',
        icon: '/projects/images/project_icons/tiny_framework_icon.png',
        route: '/Tiny',
        title: 'Tiny Framework',
        description: 'This is a basic javascript framework. It is a basic counter, but the numbers increase, even in nested components.',
        icon_size_class: 'testLogo2'
      },
    ],
    card_row_3: [
      {
        name: 'slide_to_reveal',
        icon: '/projects/images/project_icons/slide_icon.gif',
        route: '/SlideReveal',
        title: 'Slide to Reveal',
        description: 'This is an example of using javascript to create animations on a scroll event.',
        icon_size_class: 'testLogo3'
      },
      {
        name: 'spinning_pacman',
        icon: '/projects/images/project_icons/pacman.gif',
        route: '/SpinningPacman',
        title: 'Spinning Pac Man',
        description: 'Pacman follows your mouse movement. All done with vanilla javascript.',
        icon_size_class: 'testLogo3'
      },
      {
        name: 'sticky_nav',
        icon: '/projects/images/project_icons/sticky_icon.gif',
        route: '/StickyNav',
        title: 'Sticky Nav',
        description: 'This is a javascript sticky navigation while watching the scrolling event',
        icon_size_class: 'testLogo3'
      },
      {
        name: 'typeahead',
        icon: '/projects/images/project_icons/type_ahead.gif',
        route: '/TypeAhead',
        title: 'Typeahead',
        description: 'This is a basic typeahead. This app makes a call to an api to get the countries of the world data.',
        icon_size_class: 'testLogo3'
      },
      {
        name: 'drag_drop',
        icon: '/projects/images/project_icons/drag.gif',
        route: '/DragDrop',
        title: 'Drag and Drop',
        description: 'This app showcases moving color boxes from one place to another using multiple event listeners.',
        icon_size_class: 'testLogo3'
      }
    ],
    card_row_4: [
      // {
      //   name: 'carousel',
      //   icon: '/projects/images/project_icons/carousel_icon.png',
      //   route: '/Carousel',
      //   title: 'Carousel',
      //   description: '',
      //   icon_size_class: 'testLogo3'
      // },
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
        title: 'Heroes',
        description: 'This is an application that interfaces with a heroes api to get hero data. (Coming Soon)',
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
