<template>
  <div class="modal_exp">
    <b-modal id="modal-scrollable3" scrollable size="xl" title="Drones iVue Website">
      <b-container fluid>
        <b-row>
          <b-col cols="12">
            <b-carousel
                id="modal_carousel-3"
                :v-model="VmodelType"
                :interval="3000"
                background="transparent"
                img-width="620"
                img-height="400"
                class="modalCarousel"
                fade
                style="text-shadow: 1px 1px 2px #333;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
            >
                <b-carousel-slide 
                    img-src="~assets/img/portfolio/DronesiVue/dronesivue_screen.png" 
                    img-alt 
                    width="620" 
                    height="400"
                ></b-carousel-slide>
                
            </b-carousel>
          </b-col>
          <b-col cols="10" class="modal_Descrip">
            <h3>Project Description:</h3>
            <p>
              This project includes a single page template. It has a video header, multiple video and image galleries, a 360 degree viewer, and custom designed sections to present
            pricing packages.
            </p>
            <p>This site also includes a custom drone animation that pulls each section of the site into view.</p>
          </b-col>
          
          <b-col cols="10" class="modal_Details">
            <h3>Project Details:</h3>
            <ul class="list-unstyled project-details">
              <li>
                <strong>Client:</strong>
                <a href="https://www.jimsadlermusic.com">Drones iVue</a>
              </li>
              <li>
                <strong>Tech Stack: </strong> HTML, CSS, Javascript, Bootstrap
                </li>
              <li>
                <strong>Services:</strong> Web Design, Development, animation design, implementation of 360 player/viewer
              </li>
              <li>
                <strong>Date:</strong> May 2017
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: 'modal3a',
  layout: 'noHeade_img',

  data() {
    return {
      VmodelType: 'slide'
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
<style scoped>
.carousel-item {
    margin-left: 1%;
}
.modal_Descrip, .modal_Details {
    margin-left: 2%;
    margin-top: 1%;
}

</style>