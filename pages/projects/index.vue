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
      <div class="row justify-content-center text-center my-5">
        <div
          class="col-auto mb-3"
          data-aos="zoom-in-right"
          data-aos-delay="100"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <img class="testLogo0" alt src="~assets/img/project_icons/googlemaps.png" />
              <h5 class="card-title">Google Maps Clone</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </p>
              <nuxt-link to="/GoogleMapsClone"> Check It Out </nuxt-link>
            </div>
          </div>
        </div>
        <div
          class="col-auto mb-3"
          data-aos="zoom-in-right"
          data-aos-delay="300"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <img class="testLogo1" alt src="~assets/img/project_icons/calculator.png" />
              <h5 class="card-title">Calculator</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </p>

              <nuxt-link to="/Calculator"> Check it out! </nuxt-link>
            </div>
          </div>
        </div>
        <div
          class="col-auto mb-3"
          data-aos="zoom-in-right"
          data-aos-delay="500"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <img
                class="testLogo2"
                alt
                src="~assets/img/project_icons/to-do-list-color-icon-vector-28812967.png"
              />
              <h5 class="card-title">ToDo List</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </p>

              <nuxt-link to="/Todo"> ToDo List </nuxt-link>
            </div>
          </div>
        </div>
        <div
          class="col-auto mb-3"
          data-aos="zoom-in-right"
          data-aos-delay="700"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <img
                class="testLogo3"
                alt
                src="~assets/img/project_icons/calendar-icon-png-favpng-Jrrcc1Wa3nGwtPTF5EAQT2zD4.png"
              />
              <h5 class="card-title">Datepicker</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </p>

              <nuxt-link to="/Datepicker"> Datepicker </nuxt-link>
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
  mixins: [aosMixin],
};
</script>

<style scoped>
.testimonials-page {
  text-align: center;
  padding: 30px;
}
.testLogo2 {
  width: 22%;
  margin-bottom: 1em;
}
.testLogo3 {
  width: 17%;
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
  background-image: url('~~assets/img/ELH_paralx.jpg');
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
