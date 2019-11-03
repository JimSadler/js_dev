<template>
  <div class="modal_exp">
    <b-modal id="modal-scrollable2" scrollable size="xl" title="Martha Novak Website">
      <b-container fluid>
        <b-row>
          <b-col cols="12">
            <b-carousel
              id="modal_carousel-2"
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
                img-src="~assets/img/portfolio/Martha/MN_3.png" 
                img-alt 
                width="620" 
                height="400"
              ></b-carousel-slide>   
              <b-carousel-slide
                img-src="~assets/img/portfolio/Martha/MN_2.png"
                img-alt
                width="620"
                height="400"
              ></b-carousel-slide>
              <b-carousel-slide
                img-src="~assets/img/portfolio/Martha/MN_1.png"
                img-alt
                width="620"
                height="400"
              ></b-carousel-slide>
             
            </b-carousel>
          </b-col>
          <b-col cols="10" class="modal_Descrip">
            <h3>Project Description:</h3>
            <p>
              This site was a complete re-design of the website. Full multiple page website with multiple animations. the site includes: Paypal integration, Blogtalk Radio integration,
              and a Wordpress blog.
            </p>
            
            
          </b-col>
          <b-col cols="10" class="modal_Details">
            <h3>Project Details:</h3>
            <ul class="list-unstyled project-details">
              <li>
                <strong>Client:</strong>
                <a href="https://marthanovak.com">Martha Novak</a>
              </li>
              <li>
                <strong>Services:</strong> Website Re-design, Logo Design, Website Development, paypal integration, Google Inalytics Implementation
              </li>
              <li>
                <strong>Date:</strong> March 2015 - Present
              </li>
            </ul>
          </b-col>
          <b-col cols="3"></b-col>
        </b-row>
      </b-container>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: 'modal2a',
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
    margin-left: 3%;
    margin-top: 1%;
}

</style>