<template>
    <div class="modal_exp">
        <b-modal id="modal-scrollable6" scrollable size="xl" title="Benevolent Healing Website">
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
                    img-src="~assets/img/portfolio/BHealing/BH_3.png"
                    img-alt
                    width="620"
                    height="400"
                    ></b-carousel-slide>
                    <b-carousel-slide
                    img-src="~assets/img/portfolio/BHealing/BH_2.png"
                    img-alt
                    width="620"
                    height="400"
                    ></b-carousel-slide>
                    <b-carousel-slide
                    img-src="~assets/img/portfolio/BHealing/BH_1.png"
                    img-alt
                    width="620"
                    height="400"
                    ></b-carousel-slide>
                </b-carousel>
            </b-col>
            <!-- <b-col cols="2"></b-col> -->
            <b-col cols="10" class="modal_Descrip">
                <h3>Project Description:</h3>
                <p>
                This site was a complete design and development of the website. One page website
                with multiple animations, and completely responsive.
                </p>
            </b-col>
            
            <b-col cols="10" class="modal_Details">
                <h3>Project Details:</h3>
                <ul class="list-unstyled project-details">
                <li>
                    <strong>Client:</strong>
                    <a href="https://benevolenthealing.org">Benevolent Healing</a>
                </li>
                <li>
                    <strong>Services:</strong> Website Development, Animations, Making site CMS ready, and responsive for mobile platforms.
                </li>
                <li>
                    <strong>Date:</strong> May 2018
                </li>
                </ul>
            </b-col>
            <b-col cols="2"></b-col>
            </b-row>
        </b-container>
        </b-modal>
    </div>
</template>
<script>
export default {
  name: 'modal6a',
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
    margin-left: 3%;
}
.modal_Descrip, .modal_Details {
    margin-left: 3%;
    margin-top: 1%;
}

</style>