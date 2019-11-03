<template>
  <div class="modal_exp">
    <b-modal id="modal-scrollable1" scrollable size="xl" title="Jim Sadler Music Website">
      <b-container fluid>
        <b-row>
          <b-col cols="12">
            <b-carousel
                id="modal_carousel-5"
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
                        img-alt 
                        img-src="~assets/img/portfolio/JSM/JSM_3.png" 
                        width="620" 
                        height="400"
                    ></b-carousel-slide>
                    <b-carousel-slide
                        img-src="~assets/img/portfolio/JSM/JSM_2.png"
                        img-alt
                        width="620"
                        height="400"
                    ></b-carousel-slide>
                    <b-carousel-slide
                        img-src="~assets/img/portfolio/JSM/JSM_1.png"
                        img-alt
                        width="620"
                        height="400"
                    ></b-carousel-slide>
                    
                </b-carousel>
          </b-col>
          
          <b-col cols="10" class="modal_Descrip">
            <h3>Project Description:</h3>
            <p>
              This was a project built with Bootstrap. As single page template, this site has many bells and whisles complete with multiple animations including: scroll, rotation.
              and fade in
            </p>
            <p>Logo Design was developed from a picture that the client provided of a custom built guitar.</p>
          </b-col>
          
          <b-col cols="10" class="modal_Details">
            <h3>Project Details:</h3>
            <ul class="list-unstyled project-details">
              <li>
                <strong>Client:</strong>
                <a href="https://www.jimsadlermusic.com">Jim Sadler Music</a>
              </li>
              <li>
                <strong>Services:</strong> Web Design, Development, Logo Design.
              </li>
              <li>
                <strong>Date:</strong> January 2014
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
  name: 'modal1a',
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
#modal_carousel-5 .img-fluid {
    width: 75% !important;
}
.carousel-item {
    margin-left: 1%;
}
.modal_Descrip, .modal_Details {
    margin-left: 2%;
    margin-top: 1%;
}

</style>