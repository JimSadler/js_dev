<template>
  <div>
    <div style="height: 100vh" class="calculatorPage">
<!--      <div class="container d-flex justify-content-center mt-5">-->
<!--        <div class="row">-->
<!--          <div class="col-lg-12">-->
<!--            <div class="calculator">-->
<!--              <div class="calculator__display">0</div>-->
<!--              <div class="calculator__keys">-->
<!--                <button data-key="plus" data-button-type="operator">+</button>-->
<!--                <button data-key="minus" data-button-type="operator">-</button>-->
<!--                <button data-key="times" data-button-type="operator">-->
<!--                  &times;-->
<!--                </button>-->
<!--                <button data-key="divide" data-button-type="operator">÷</button>-->
<!--                <button data-key="1" data-button-type="number">1</button>-->
<!--                <button data-key="2" data-button-type="number">2</button>-->
<!--                <button data-key="3" data-button-type="number">3</button>-->
<!--                <button data-key="4" data-button-type="number">4</button>-->
<!--                <button data-key="5" data-button-type="number">5</button>-->
<!--                <button data-key="6" data-button-type="number">6</button>-->
<!--                <button data-key="7" data-button-type="number">7</button>-->
<!--                <button data-key="8" data-button-type="number">8</button>-->
<!--                <button data-key="9" data-button-type="number">9</button>-->
<!--                <button data-key="0" data-button-type="number">0</button>-->
<!--                <button data-key="decimal" data-button-type="decimal">.</button>-->
<!--                <button data-key="clear" data-button-type="clear">AC</button>-->
<!--                <button data-key="equal" data-button-type="equal">=</button>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
      <div class="calc-container"></div>

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
      title: 'JS Development | Calculator',
      link: [
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,600,700'
        },
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'projects/styles/calculator.css'
        }
      ],
      script: [
        {
          src: 'projects/Calculator/main.js',
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
/**
 * base styles and typography
 * ---------------
 */
.calculatorPage {
  /* margin: -60px 0 60px; */
  min-height: 107vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url('~~assets/img/716357_high-resolution-space-galaxy-wallpapers-full-size-siwallpaperhd-16144_2560x1600_h.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  /* height: 100%; */
  background-position: 53% top;
  margin-top: -7%;
}
</style>
