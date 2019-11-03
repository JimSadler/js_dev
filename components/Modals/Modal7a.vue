<template>
    <div class="modal_exp">
        <b-modal id="modal-scrollable7" scrollable size="xl" title="AEYE Solar Website">
        <b-container fluid>
            <b-row>
            <b-col cols="12">
                <b-carousel
                id="modal_carousel-7"
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
                    img-src="~assets/img/portfolio/AEYESolar/AE_Solar3.png"
                    img-alt
                    width="620"
                    height="400"
                    ></b-carousel-slide>
                    <b-carousel-slide
                    img-src="~assets/img/portfolio/AEYESolar/AE_Solar2.png"
                    img-alt
                    width="620"
                    height="400"
                    ></b-carousel-slide>
                    <b-carousel-slide
                    img-src="~assets/img/portfolio/AEYESolar/AE_Solar2.png"
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
                This site was a complete development of the website. The idea was to build a completely inaccessible site and then add AudioEye's script to make it accessible. This site was built as a tool for the AudioEye sales team.
                </p>
            </b-col>
            
            <b-col cols="10" class="modal_Details">
                <h3>Project Details:</h3>
                <ul class="list-unstyled project-details">
                <li>
                    <strong>Client:</strong>
                    <a href="https://aeyesolar.audioeye.com">AudioEye</a>
                </li>
                <li>
                    <strong>Services:</strong> Website Development, Login Functionality, mock payment system, custom radio buttons and custom dropdown menus. Using the query string ?disableae=1, will show the inaccessble version of the site.
                </li>
                <li>
                    <strong>Date:</strong> July 2019
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
  name: 'modal7a',
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