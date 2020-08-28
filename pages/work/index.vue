<template>
  <section id="work" class="portfolio-1 animated fadeIn">
    <b-container>
      <b-row class="">
        <b-col cols="12" class="text-center">
          <h2 class="page-title">The Work</h2>
          <hr class="primary" />
        </b-col>
      </b-row>

      <b-row data-scrollreveal="enter bottom over 1.5s">
        <!-- <div class="isotope"> -->
        <b-col cols="12" class="col-sm-4 portfolio-item web">
          <a class="portfolio-link" role="button" v-b-modal.modal-scrollable1>
            <div class="caption">
              <div class="caption-content">
                <h3>Jim Sadler Music</h3>
                <p>Web Design/Development</p>
              </div>
            </div>
            <img
              src="~assets/img/portfolio/JSGscreen.jpg"
              class="img-centered"
              alt=""
            />
          </a>
        </b-col>
        <b-col cols="12" class="col-sm-4 portfolio-item web design">
          <a class="portfolio-link" role="button" v-b-modal.modal-scrollable2>
            <div class="caption">
              <div class="caption-content">
                <h3>Martha Burgess Novak</h3>
                <p>Web Design/Development</p>
              </div>
            </div>
            <img
              src="~assets/img/portfolio/BurgessProcessLink.jpg"
              class="img-centered"
              alt=""
            />
          </a>
        </b-col>
        <b-col cols="12" class="col-sm-4 portfolio-item web design">
          <a class="portfolio-link" role="button" v-b-modal.modal-scrollable3>
            <div class="caption">
              <div class="caption-content">
                <h3>Drones iVue</h3>
                <p>Web Design/Development</p>
              </div>
            </div>
            <img
              src="~assets/img/portfolio/Neighborhood-Roofs.png"
              class="img-centered"
              alt=""
            />
          </a>
        </b-col>
        <b-col cols="12" class="col-sm-4 portfolio-item web">
          <a class="portfolio-link" role="button" v-b-modal.modal-scrollable4>
            <div class="caption">
              <div class="caption-content">
                <h3>DataVault</h3>
                <p>Web Development</p>
              </div>
            </div>
            <img
              src="~assets/img/portfolio/DV_site1.png"
              class="img-centered"
              alt=""
            />
          </a>
        </b-col>
        <b-col cols="12" class="col-sm-4 portfolio-item web">
          <a class="portfolio-link" role="button" v-b-modal.modal-scrollable5>
            <div class="caption">
              <div class="caption-content">
                <h3>Angry Apples Marketing</h3>
                <p>Web Development</p>
              </div>
            </div>
            <img
              src="~assets/img/portfolio/AApples2.png"
              class="img-centered"
              alt=""
            />
          </a>
        </b-col>
        <b-col cols="12" class="col-sm-4 portfolio-item web design">
          <a class="portfolio-link" role="button" v-b-modal.modal-scrollable6>
            <div class="caption">
              <div class="caption-content">
                <h3>Benevolent Healing</h3>
                <p>Web Development/Design</p>
              </div>
            </div>
            <img
              src="~assets/img/portfolio/BH1.png"
              class="img-centered"
              alt=""
            />
          </a>
        </b-col>
        <b-col cols="12" class="col-sm-4 portfolio-item web">
          <a class="portfolio-link" role="button" v-b-modal.modal-scrollable7>
            <div class="caption">
              <div class="caption-content">
                <h3>AEYE Solar</h3>
                <p>Web Development</p>
              </div>
            </div>
            <img
              src="~assets/img/portfolio/AEYE1.png"
              class="img-centered"
              alt=""
            />
          </a>
        </b-col>

        <!--                       
                        <b-col class="col-sm-4 portfolio-item design">
                            <a href="./port_pages/excursion.html" target="_blank" class="portfolio-link">
                                <div class="caption">
                                    <div class="caption-content">
                                        <h3> Excursion Project
                                        </h3>
                                    </div>
                                </div>
                                <img src="~assets/img/portfolio/excursion-thumb.jpg" class="img-centered" alt="">
                            </a>
                        </b-col>
                        <b-col class="col-sm-4 portfolio-item design">
                            <a href="./port_pages/adoptly.html" target="_blank" class="portfolio-link">
                                <div class="caption">
                                    <div class="caption-content">
                                        <h3>Adoptly Project
                                        </h3>
                                    </div>
                                </div>
                                <img src="~assets/img/portfolio/Ming.jpg" class="img-centered" alt="">
                            </a>
                        </b-col> -->
        <!-- </div> -->
      </b-row>
    </b-container>
    <modal1a />
    <modal2a />
    <modal3a />
    <modal4a />
    <modal5a />
    <modal6a />
    <modal7a />
  </section>
</template>
<script>

import modal1a from '~/components/Modals/Modal1a.vue'
import modal2a from '~/components/Modals/Modal2a.vue'
import modal3a from '~/components/Modals/Modal3a.vue'
import modal4a from '~/components/Modals/Modal4a.vue'
import modal5a from '~/components/Modals/Modal5a.vue'
import modal6a from '~/components/Modals/Modal6a.vue'
import modal7a from '~/components/Modals/Modal7a.vue'
export default {
  head() {
      return {
        title: "JS Development | Work"
        
      }
  },
  layout: 'noHeade_img',
  transition: 'tweakOpacity',
  components: {
    modal1a,
    modal2a,
    modal3a,
    modal4a,
    modal5a,
    modal6a,
    modal7a
  },

  data: function() {
    return {
      loaded: false,
      show: false
    }
  }
}
</script>
<style scoped>
#work {
  text-align: center;
  padding: 30px;
  /* height: 700px; */
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'NoirPro-SemiBold', Fallback, sans-serif;
}
.modal_Descrip h3,
.modal_Details h3 {
  font-family: 'NoirPro-SemiBold', Fallback, sans-serif;
}
p {
  font-family: 'NoirPro_light', Fallback, sans-serif;
}
.portfolio-1 .portfolio-item .portfolio-link {
  display: block;
  position: relative;
  max-width: 400px;
  margin: 0 auto;
  cursor: pointer;
}
.portfolio-1 .portfolio-item .portfolio-link:hover .caption {
  opacity: 0.8;
}
.portfolio-1 .portfolio-item .portfolio-link .caption {
  background: #262b31;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all ease 0.5s;
  -webkit-transition: all ease 0.5s;
  -moz-transition: all ease 0.5s;
}
.portfolio-1 .portfolio-item .portfolio-link .caption .caption-content {
  position: absolute;
  width: 100%;
  height: 20px;
  font-size: 20px;
  text-align: center;
  top: 40%;
  margin-top: -12px;
  color: #f4f5f7;
}
a.portfolio-link img {
  width: 100%;
}
.portfolio-1 .portfolio-item {
  margin: 0 0 30px;
  border: 1px solid lightgray;
}
.list-inline li {
  display: inline-block;
}
.img-fluid {
  width: 75% !important;
}
.carousel-item {
  margin-left: 5%;
}
.modal_Descrip,
.modal_Details {
  margin-left: 2%;
  margin-top: 1%;
}
/* h1,h2,h3,h4,h5,h6 {
    font-family: 'proximanova-light-webfont', Fallback,
    sans-serif;
} */
.modal_Descrip h3,
.modal_Details h3 {
  font-family: 'proximanova-light-webfont', Fallback, sans-serif;
}
.page-title {
  font-family: 'proximanova-semi', Fallback, sans-serif;
}
p {
  font-family: 'proximanova-light-webfont', Fallback, sans-serif;
}
li {
  font-family: 'proximanova-light-webfont', Fallback, sans-serif;
}
.modal-title {
  margin-bottom: 0;
  line-height: 1.5;
  font-size: 25px;
}
.portfolio-item {
  padding: 0px;
}
@media (max-width: 768px) {
  a.portfolio-link img {
    width: 100%;
  }
  .portfolio-item {
    padding: 0px;
  }
}
</style>
