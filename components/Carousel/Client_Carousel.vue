<template>
<div>
    <b-carousel
        id="modal_carousel-1"
        :v-model="VmodelType"
        :interval="3000"
        background="transparent"
        img-width="60"
        img-height="40"
        class="modalCarousel"
        
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >
        <b-carousel-slide img-src="~assets/img/client_icons/DataVault_logoBlock.png" img-alt="Jim Sadler Music Homepage" style="width:17% !important;"></b-carousel-slide>
        <b-carousel-slide img-src="~assets/img/client_icons/AApples1.png" img-alt="" style="width:17% !important;"></b-carousel-slide>
        <b-carousel-slide img-src="~assets/img/client_icons/m-logo-circle-fill-about1.png" img-alt="" style="width:17% !important;"></b-carousel-slide>
        <b-carousel-slide img-src="~assets/img/client_icons/BH_logo.png" img-alt="Jim Sadler Music Homepage" style="width:17% !important;" ></b-carousel-slide>
        <b-carousel-slide img-src="~assets/img/client_icons/Js_guitar_logoFinal.png" img-alt="" style="width:17% !important;"></b-carousel-slide>
        <b-carousel-slide img-src="~assets/img/client_icons/dronep7.png" img-alt="" style="width:17% !important;"></b-carousel-slide>
    </b-carousel>
  
    </div>
</template>

<script>
export default {
    name: "Clientcaro",
  
     methods: {
      close() {
        this.$emit('close');
      },
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    },
    data() {
      return {
        VmodelType: 'slide'
      }
    }
    
}
</script>

<style scoped>
#modal_carousel-1 {
  background: #3E444D !important;
}
#modal_carousel-1 .w-100 {
    height: 35%;
    width: 17%;
    display: inline-block;
    margin-top: 10%;
}
</style>