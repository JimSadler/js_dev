<template>
  <div>
    <div style="height: 100vh" class="datepickerPage">
      <main
        style="margin-top: -13rem; background-color: rgba(255, 255, 255, 0.5)"
      >
        <h1>Datepicker</h1>
        <p>Select the field to see the datepicker in action.</p>
        <form action="#" autocomplete="off">
          <div class="input">
            <label for="date">Select Date:</label>
            <input type="text" id="date" placeholder="DD/MM/YYYY" />
          </div>
        </form>
      </main>
      <!-- <script src="js/main.js"></script> -->
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '@/components/Navigation/TheFooter.vue'
export default {
  components: { TheFooter },
  head() {
    return {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'Meta description' }
      ],
      title: 'JS Development | ToDo List',
      link: [
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,600,700'
        },
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'projects/styles/datepicker.css'
        }
      ],
      script: [
        {
          src: 'projects/Datepicker/main.js',
          defer: true,
          type: 'module'
        }
      ]
    }
  },
  layout: 'projectLayout'
}
</script>
<style scoped>
.datepickerPage {
  /* margin: -60px 0 60px; */
  min-height: 107vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url('~assets/img/IFNZyE.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  /* height: 100%; */
  background-position: 53% top;
  margin-top: -7%;
}
.datepicker {
  /* left: auto;
  right: auto;
  top: 408.17px; */
}
</style>
