<script>
import modal1a from '~/components/Modals/Modal1a.vue'
import modal2a from '~/components/Modals/Modal2a.vue'
import modal3a from '~/components/Modals/Modal3a.vue'
import modal4a from '~/components/Modals/Modal4a.vue'
import modal5a from '~/components/Modals/Modal5a.vue'
import modal6a from '~/components/Modals/Modal6a.vue'
export default {
  layout: 'noHeade_img',
  components: {
    modal1a,
    modal2a,
    modal3a,
    modal4a,
    modal5a,
    modal6a
  },

  data() {
    return {
      VmodelType: 'slide',
      loaded: false,
      show: false,
      
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

<template>
  <div class="modal_exp">
    <b-button v-b-modal.modal-scrollable1>Jim Sadler Music</b-button>
    <b-button v-b-modal.modal-scrollable2>Martha Novak</b-button>
    <b-button v-b-modal.modal-scrollable3>Drones iVue</b-button>
    <b-button v-b-modal.modal-scrollable4>DataVault</b-button>
    <b-button v-b-modal.modal-scrollable5>Angry Apples</b-button>
    <b-button v-b-modal.modal-scrollable6>Benevolent Healing</b-button>
    <modal1a />
    <modal2a  />
    <modal3a />
    <modal4a />
    <modal5a />
    <modal6a />
  </div>
</template>

<style scoped>
/* .modal_exp {
  height: 1200px;
} */
.btn[data-v-32a44c20] {
    margin-top: 20%;
    /* margin-right: 20%; */
    margin-left: 15%;
    border: 1px solid #92d28c;
    background-color: #92d28c;
    color: #fff;
    transition: 0.7s;
}
.btn:hover,
btn:focus {
  border: 1px solid #4f8ef3;
  background-color: #4f8ef3;
  color: #fff;
}
.modal-backdrop {
  position: fixed;
  top: 100px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  height: 87%;
  top: 12%;
  margin-left: 8%;
  /* margin-right: -8%; */
  width: 80%;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
  height: 56px;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 9px !important;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
.modalCarousel .carousel-inner {
  width: 100%;
}
.modalCarousel .carousel-item {
  width: 75%;
  align-self: center;
  margin-left: 23%;
  height: 400px !important;
}
.modal-backdrop {
  position: fixed;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  height: 90%;
  top: 7%;
  margin-left: 5%;
  margin-right: -5%;
  width: 89%;
}
.modal_Descrip {
  margin-top: 1.5%;
  text-align: left;
}
.modal_Details {
  margin-top: 1.5%;
  text-align: left;
}
.modal ul.project-details li:first-child {
  padding-top: 10px;
  border-top: 1px solid #d6dae2;
}
.modal ul.project-details li {
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #d6dae2;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
</style>
