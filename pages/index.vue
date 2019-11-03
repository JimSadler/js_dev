<template>
  <div>
    <div>
     
      <div class=" home container-fluid">
        <div class="home-content">
          <!-- <logo /> -->
          <div class="intro-body animated zoomInUp">
                <b-container class="carousel-container">
                    <h1 class="brand-heading">
                        We <span class="text-primary">Build and Design </span><br> Web <span class="text-primary">Solutions</span>
                    </h1>
                    <hr class="light">
                    <b-carousel
                        id="carousel-1"
                        v-model="slide"
                        :interval="4000"
                        background="transparent"
                        img-width="1024"
                        img-height="120"
                        
                        style="text-shadow: 1px 1px 2px #333;"
                        @sliding-start="onSlideStart"
                        @sliding-end="onSlideEnd"
                    >
                    <b-carousel-slide caption="Websites designed with HTML, CSS, JavaScript, including Vue.js and Nuxt" img-blank img-alt="" img-blank-color="transparent"></b-carousel-slide>
                    <b-carousel-slide caption="With advantages of Responsive Design" img-blank img-alt="" img-blank-color="transparent"></b-carousel-slide>
                    <b-carousel-slide caption="Accessibility Built In" img-blank img-alt="" img-blank-color="transparent"></b-carousel-slide>
                      
                    </b-carousel>

                    <div class="CTA-logo0">
                        <div class="cta_button0 col-md-3 col-sm-3 col-xs-6 animated lightSpeedIn">
                            <a href="#contact" class="btn btn-sm animated-button victoria-three hero">
                              <!-- <img alt="Click to send an email and get started" id="logoCta1" src="~assets/img/icons/jslogo-white.png"> -->
                              Get Started</a>
                        </div>
                    </div>
                    <div class="page-scroll down_arrow_head" data-scrollreveal="enter bottom after .6s">
                        <a href="#about" aria-label="scroll down to next section" class="btn btn-scroll-light sink">
                            <i class="fa fa-angle-double-down"></i>
                        </a>
                    </div>
                </b-container>
            </div>
        </div>
        <div>
          <b-img class="home_background" alt=""></b-img>
        </div>
      </div>
      <section class="about-3 bg-lighter text-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 col-md-6">
              <h2>About Me</h2>
              <hr class="primary">
              <p>I am a passionate Front End Developer skilled in languages including: HTML, CSS, Javascript. I am also proficient in Bootstrap, jQuery and Vue.js frameworks. I am also a Certified Professional in Web Accessibility, 
                which means that your website will be built wih incluson of everyone in mind.</p>
              <p> I am a born problem solver, which fuels my passion about web development.  With a natural eye for design and color, I can elevate your project to cutting-edge quality.  </p>
            </div>
            <div class="col-lg-5 col-lg-offset-1 col-md-6">
              <!--<hr class="primary">-->
              <div id="about-3-carousel" class="text-center">
                <div class="item about-img-1">
                  <div class="info">
                    <!-- Mobile Fallback Image -->
                    <img class="img-responsive img-circle visible-xs jimhead" src="~assets/img/jim-head.jpg" alt="">
                    <!-- Name / Position / Social Links -->
                    <h3>Jim Sadler</h3>
                    <p> Web Developer <br> (CPWA)</p>
                    <ul class="list-inline">
                      <li><a class="light-text" href="https://www.facebook.com/JSDevJazz" aria-label="Facebook" target="_blank"><i class="fa fa-facebook fa-fw"></i></a>
                      </li>
                      <li><a class="light-text" href="https://www.linkedin.com/in/jim-sadler-1129a927" aria-label="LinkedIn" target="_blank"><i class="fa fa-linkedin fa-fw"></i></a>
                      </li>
                      <li><a class="light-text" href="https://twitter.com/JSDevelopmnt" aria-label="Twitter" target="_blank"><i class="fa fa-twitter fa-fw"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </section>
       <!-- <clientcaro /> -->

    </div>
    <CTA1 />
    
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import CTA1 from '~/components/CTA/CTA1.vue'
import Parallax from "vue-parallaxy";
import clientcaro from '~/components/Carousel/Client_Carousel.vue'

export default {
  components: {
    Logo,
    CTA1,
    Parallax,
    clientcaro
  },
  data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
}
</script>

<style >
.page-enter-active, .page-leave-active {
    transition: all .30s ease-out;
  }
  .page-enter, .page-leave-active {
    opacity: 0;
    transform-origin: 50% 50%;
  }
.home.container-fluid {
  /* margin: -60px 0 60px; */
  min-height: 115vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url("~assets/img/tuzfcmnbhdmkderydepl.jpg");
  background-size: cover;
  margin-top: -3.6%;
  
}
.home_background {
    margin-top: -10%;
    z-index: 0;
    position: relative;
    /* background-image: url("~assets/img/716357_high-resolution-space-galaxy-wallpapers-full-size-siwallpaperhd-16144_2560x1600_h.jpg"); */
}
.home-content {
  position: absolute;
  top: 36%;
 
}
h1.brand-heading {
    color: #fff;
}
.text-primary {
    color: #25CE88!important;
}
.container {
    width: 1140px;
}
.carousel-inner{
  width:100%;
  /* max-height: 200px !important; */
}
.CTA-logo0 a.animated-button.victoria-three {
    border: 2px solid #25CE88;
    padding: 20px;
}
/* CTA Global Button Styles */
a.animated-button:link, a.animated-button:visited {
    position: relative;
    display: block;
    margin: 30px auto 0;
    padding: 14px 15px;
    color: #fff;
    font-size:14px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    text-transform: none;
    overflow: hidden;
    letter-spacing: .08em;
    border-radius: 0;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(0, 0, 0, 0.2);
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
}
a.animated-button:link:after, a.animated-button:visited:after {
    content: "";
    position: absolute;
    height: 0%;
    left: 50%;
    top: 50%;
    width: 150%;
    z-index: -1;
    -webkit-transition: all 0.75s ease 0s;
    -moz-transition: all 0.75s ease 0s;
    -o-transition: all 0.75s ease 0s;
    transition: all 0.75s ease 0s;
}
a.animated-button:link:hover, a.animated-button:visited:hover {
    color: #FFF;
    text-shadow: none;
    border:2px solid transparent;
}
a.animated-button:link:hover:after, a.animated-button:visited:hover:after {
    height: 450%;
}
a.animated-button:link, a.animated-button:visited {
    position: relative;
    display: block;
    margin: 0 auto 0;
    padding: 5px 5px;
    color: #fff;
    font-size:15px;
    border-radius: 7px;
    font-weight: 100;
    text-align: center;
    text-decoration: none;
    text-transform: none;
    overflow: hidden;
    letter-spacing: .08em;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(0, 0, 0, 0.2);
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
		font-weight: 700;
}
a.animated-button.victoria-three {
    border: 2px solid #25CE88;
}
a.animated-button.victoria-three:after {
    border:2px solid transparent;
}
a.animated-button.victoria-three:after {
    background: #348F50; /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #348F50 , #56B4D3); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #348F50 , #56B4D3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    /*background: #D24D57;*/
    opacity: .5;
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
}
a.animated-button.victoria-three:hover:after {
    height: 140%;
    opacity: 1;
}
.cta_button0 {
    width: 13%;
    margin-left: 44em;
    z-index: 2000;
}
.CTA-logo0 {
    margin-right: -32%;
    margin-left: -24%;
    margin-top: 5%;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #41B783;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #59A6F2;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.img-circle {
  border-radius: 50%;
}
.jimhead {
  width: 50%;
  margin-bottom: 5%;
}
.about-3 {
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #fff;
}
.parallax-container {
  position: relative;
}
.parallax-title {
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  padding: 20px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  text-align: center;
}
h1,h2,h3,h4,h5,h6 {
    font-family: 'proximanova-light', Fallback,
    sans-serif;
}
p {
  font-family: 'NoirPro_light', Fallback, sans-serif;
  font-size: 17px;
}
.spin {
      /* margin: 20px; */
  /* width: 100px; */
  /* height: 100px; */
  /* background: #f00; */
  -webkit-animation-name: spin;
  -webkit-animation-duration: 50000ms;
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
    from { -moz-transform: rotateY(0deg); }
    to { -moz-transform: rotateY(360deg); }
}
@-webkit-keyframes spin {
    from { -webkit-transform: rotateY(0deg); }
    to { -webkit-transform: rotateY(360deg); }
}
@keyframes spin {
    from {transform:rotateY(0deg);}
    to {transform:rotateY(360deg);}
}
</style>
