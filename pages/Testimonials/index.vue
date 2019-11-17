<template>
  <div>
    <div class="testimon container-fluid">
      <header class="intro-img intro-dark-bg test_background animated fadeIn">
        <!--<div class="overlay"></div>-->
        <div class="intro-body animated zoomInUp">
          <div class="container animated fadeIn">
            <h1 class="brand-heading">Testimonials</h1>
            <!-- <hr class="light"> -->
          </div>
        </div>
      </header>
    </div>
    <section class="text-center testimonial">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <img
              class="testLogo0 animated flip spin" alt src="~assets/img/icons/m-logo-circle-fill-about1.png" />
            <p>
              What a find Jim Sadler is! Jim did the best website for me that I have ever had: beautiful, easy to negotiate, sophisticated, and available to all platforms. Jim has
              the intuition to understand exactly what I need and his technical skills are masterful as he works to bring forth our vision. I continue my relationship with Jim
              gratefully as he updates the website all the time. His out-of-the-box thinking, his staying on the cutting edge of the latest trends in technology have really been a
              benefit to me to increase the crowds coming to my site and to increase the number of people I reach in the various venues in which I work.
            </p>
            <p>
              Jim is brilliant at coming up with new ideas and suggestions. He takes suggestions, seizes on them, and amplifies them to create usable and better systems. He is a
              joy to work with, always positive and never once have I seen him on any kind of ego trip. He is also a tireless researcher and problem-solver, a big talent of his, and
              if doesn't know the answer to something, he will find it out for you in a timely manner. He is also very artistic so he is the best of both worlds, the technical and
              the artistic.
            </p>
            <p>I cannot recommend Jim Sadler highly enough. In a world of so few masters, I can truly and, without hesitation, apply this word to Jim Sadler: he is a master.</p>
            <a href="https://marthanovak.com" target="_blank">Martha Novak</a>
          </div>
        </div>
      </div>
    </section>
    <hr class="test_sec-div" />
    <section class="text-center testimonial">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <img class="testLogo2 animated flip spin"
              alt
              src="~assets/img/icons/dronep7-fa.png" />
            <p>
              Jim Sadler of JS Development is a website wizard. Everything I asked for was delivered in a timely fashion, while also exceeding my expectations! My website
              is easy to navigate, aesthetically pleasing, and professional all at the same time! What more could you ask for? Jim truly brought my website to life!
            </p>
            <p>Jacob Andrews</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  
}
</script>

<style scoped>
.testimonials-page {
  text-align: center;
  padding: 30px;
}
.testLogo2 {
  width: 8%; 
  margin-bottom:1em;
}
.testLogo0 {
  width: 6%; 
  margin-bottom:1em;
}
.testimon.container-fluid {
  /* margin: -60px 0 60px; */
  min-height: 107vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url('~~assets/img/ELH_paralx.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  /* height: 100%; */
  background-position: 53% top;
  margin-top: -7%;
  
}
/* .test_background {
  margin: -60px 0 60px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url('~~assets/img/ELH_paralx.jpg');
  background-size: cover;
} */
.test_background h1.brand-heading {
  color: #fff;
}
hr.light {
  border-color: #fff;
}
section.text-center.testimonial {
  margin-top: 5%;
  margin-bottom: 5%;
}
.spin {
 
  -webkit-animation-name: spin;
  -webkit-animation-duration: 15000ms;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  -moz-animation-name: spin;
  -moz-animation-duration: 50000ms;
  -moz-animation-iteration-count: infinite;
  -moz-animation-timing-function: linear;
  -ms-animation-name: spin;
  -ms-animation-duration: 50000ms;
  -ms-animation-iteration-count: infinite;
  -ms-animation-timing-function: linear;
  -o-transition: rotateY(3600deg);
}
@-moz-keyframes spin {
  from {
    -moz-transform: rotateY(0deg);
  }
  to {
    -moz-transform: rotateY(360deg);
  }
}
@-webkit-keyframes spin {
  from {
    -webkit-transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(360deg);
  }
}
@keyframes spin {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}
section.text-center.testimonial {
    margin-top: 5%;
    margin-bottom: 5%;
    padding-bottom: 100px;
}
@media (max-width: 768px){
  .testimon.container-fluid {
      margin-top: -19%;
  }
  .testLogo2 {
    width: 15%; 
    margin-bottom:1em;
  }
  .testLogo0 {
    width: 10%; 
    margin-bottom:1em;
  }
}
</style>