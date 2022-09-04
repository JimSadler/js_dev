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
    <section class="text-center testimonial animated fadeIn">
      <div class="container px-3 d-flex justify-content-between">
        <div class="mx-1 py-3" style="border: solid 1px black">
          <img
            class="testLogo0 animated flip spin"
            alt
            src="~assets/img/project_icons/googlemaps.png"
          />
          <nuxt-link to="/GoogleMapsClone">
            <h5>Google Maps Clone</h5>
          </nuxt-link>
        </div>
        <div class="mx-1 py-3" style="border: solid 1px black">
          <img
            class="testLogo1 animated flip spin"
            alt
            src="~assets/img/project_icons/calculator.png"
          />
          <nuxt-link to="/Calculator">
            <h5>Calculator</h5>
          </nuxt-link>
        </div>
        <div class="mx-1 py-3" style="border: solid 1px black">
          <img
            class="testLogo2 animated flip spin"
            alt
            src="~assets/img/project_icons/to-do-list-color-icon-vector-28812967.png"
          />
          <nuxt-link to="/Todo">
            <h5>ToDo List</h5>
          </nuxt-link>
        </div>
      </div>
    </section>
    <!-- <section class="text-center testimonial animated fadeIn">
      <div class="container-fluid px-3">
        <div class="row no-gutters">
          <div class="col-lg-4 py-5">
            <div style="border: solid 1px black;">
              <img
                class="testLogo0 animated flip spin"
                alt
                src="~assets/img/project_icons/googlemaps.png"
              />
              <nuxt-link to="/GoogleMapsClone">
                <h5>Google Maps Clone</h5>
              </nuxt-link>
            </div>
          </div>
          <div class="col-lg-4 py-5">
            <div style="border: solid 1px black;" class="px-3">
              <img
                class="testLogo1 animated flip spin"
                alt
                src="~assets/img/project_icons/calculator.png"
              />
              <nuxt-link to="/GoogleMapsClone">
                <h5>Calculator</h5>
              </nuxt-link>
            </div>
          </div>
          <div class="col-lg-4 py-5">
            <div style="border: solid 1px black;" class="px-3">
              <img
                class="testLogo2 animated flip spin"
                alt
                src="~assets/img/project_icons/to-do-list-color-icon-vector-28812967.png"
              />
              <nuxt-link to="/GoogleMapsClone">
                <h5>ToDo List</h5>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <hr class="test_sec-div" />
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "JS Development | Projects",
    };
  },
};
</script>

<style scoped>
.testimonials-page {
  text-align: center;
  padding: 30px;
}
.testLogo2 {
  width: 13%;
  margin-bottom: 1em;
}
.testLogo0 {
  width: 7%;
  margin-bottom: 1em;
}
.testLogo1 {
  width: 11%;
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
