<template>
  <client-only>
    <div class="parallax-container">
      <div class="aside-overlay">
        <div class="container parallax-title">
          <div class="row text-center">
            <div class="col-lg-12 ">
              <h2>Your Website, Your Way</h2>
              <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="3500"
                background="transparent"
                img-width="1024"
                img-height="120"
                style="text-shadow: 1px 1px 2px #333;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
              >
                <b-carousel-slide
                  caption="Websites designed with HTML, CSS, JavaScript, including Vue.js and Nuxt"
                  img-blank
                  img-alt=""
                  img-blank-color="transparent"
                ></b-carousel-slide>
                <b-carousel-slide
                  caption="With advantages of Responsive Design"
                  img-blank
                  img-alt=""
                  img-blank-color="transparent"
                ></b-carousel-slide>
                <b-carousel-slide
                  caption="Accessibility Built In"
                  img-blank
                  img-alt=""
                  img-blank-color="transparent"
                ></b-carousel-slide>
              </b-carousel>
              <div class="CTA-logo1">
                <div
                  class="cta_button1 col-md-3 col-sm-3 col-xs-6 animated lightSpeedIn"
                >
                  <a
                    href="mailto:jim@jsdevelopment.tech"
                    class="btn btn-sm animated-button victoria-three"
                    ><img
                      alt="Click to send an email and get started"
                      id="logoCta3"
                      src="~assets/img/icons/jslogo-white.png"
                    />Get Started</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Parallax :speed-factor="0.3" breakpoint="(min-width: 50px)">
        <video
          autoplay
          muted
          loop
          id="bgvideo"
          is-fixed="true"
          breakpoint="(min-width: 768px)"
        >
          <source :src="selectedVideo" :type="videoType" />
        </video>
      </Parallax>
    </div>
  </client-only>
</template>
<script>
import Parallax from 'vue-parallaxy'
export default {
  name: 'CTA1',
  data() {
    return {
      videoType: 'video/mp4',
      slide: 0,
      sliding: null,
      videos: [
        require('~/assets/video/Baraccuda.mp4'),
        require('~/assets/video/CoralReef.mp4'),
        require('~/assets/video/Jellies.mp4'),
        require('~/assets/video/SeaLions.mp4'),
        require('~/assets/video/Starfish.mp4')
      ],
      selectedVideo: ''
    }
  },
  created() {
    const idx = Math.floor(Math.random() * this.videos.length)
    this.selectedVideo = this.videos[idx]
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  },
  mounted() {
    A11y()
  },
  components: {
    Parallax
  }
}
function A11y()  {
  setTimeout(() => {
    let carousel_blank_img = document.querySelectorAll('#carousel-1 img')
    carousel_blank_img.forEach(img => {
      img.setAttribute('alt', '');
    })
    console.log('carousel_blank_img',carousel_blank_img)
  },100)

}
</script>

<style scoped>
.bg-parallax-dark {
  min-height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
}
.cta_button1 {
  width: 20%;
  margin-left: 41%;
  z-index: 2000;
  text-align: center;
}
video#bgvideo {
  width: 100%;
}
img#logoCta2,
img#logoCta3 {
  z-index: 1000;
  margin: auto;
  width: 28%;
}
.CTA-logo1 {
  margin-right: 0%;
  margin-left: 0%;
}

.parallax-container {
  margin-bottom: -15%;
}
/* CTA Global Button Styles */
a.animated-button:link,
a.animated-button:visited {
  position: relative;
  display: block;
  margin: 30px auto 0;
  padding: 14px 15px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  overflow: hidden;
  letter-spacing: 0.08em;
  border-radius: 0;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(0, 0, 0, 0.2);
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
}
a.animated-button:link:after,
a.animated-button:visited:after {
  content: '';
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
a.animated-button:link:hover,
a.animated-button:visited:hover {
  color: #fff;
  text-shadow: none;
  border: 2px solid transparent;
}
a.animated-button:link:hover:after,
a.animated-button:visited:hover:after {
  height: 450%;
}
a.animated-button:link,
a.animated-button:visited {
  position: relative;
  display: block;
  margin: 0 auto 0;
  padding: 5px 5px;
  color: #fff;
  font-size: 15px;
  border-radius: 7px;
  font-weight: 100;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  overflow: hidden;
  letter-spacing: 0.08em;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(0, 0, 0, 0.2);
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
  font-weight: 700;
}
a.animated-button.victoria-three {
  border: 2px solid #25ce88;
}
a.animated-button.victoria-three:after {
  border: 2px solid transparent;
}
a.animated-button.victoria-three:after {
  background: #348f50; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #348f50,
    #56b4d3
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #348f50,
    #56b4d3
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  /*background: #D24D57;*/
  opacity: 0.5;
  -moz-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}
a.animated-button.victoria-three:hover:after {
  height: 140%;
  opacity: 1;
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
  background: rgba(0, 0, 0, 0.4);
  color: white;
  text-align: center;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'NoirPro_light', Fallback, sans-serif;
}
/* .modal_Descrip h3, .modal_Details h3 {
    font-family: 'NoirPro_light', Fallback,
    sans-serif;
    font-weight: 400;
} */
a {
  font-family: 'NoirPro_light', Fallback, sans-serif;
}
@media (max-width: 768px) {
  .parallax-container {
    display: none;
  }
}
</style>
