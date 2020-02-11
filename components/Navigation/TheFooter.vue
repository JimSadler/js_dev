<template>
  <footer role="contentinfo" class="footer-1">
    <div class="upper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 col-xs-12">
            <div id="logo-container1">
              <a class="animated zoomInDown" id="logo1" href="/">
                <img
                  class="animated flip spin"
                  spin
                  alt="JS Development Homepage"
                  src="~assets/img/negative-space-rt.svg"
                />
                <p class="animated flipInX" id="logo-tag-nav1">J.S. Development</p>
              </a>
            </div>
            <address>
              <br />9324 Deer Trail
              <br />Alpharetta, GA 30004
              <br />
              <abbr title="Phone">
                <font-awesome-icon
                  :icon="{ prefix: 'fas', iconName: 'phone' }"
                  size="xs"
                  rotation="90"
                />
              </abbr> (770) 310-4371
            </address>
          </div>
          <div class="col-lg-6 social_links">
            <ul class="list-inline">
              <li>
                <a
                  href="mailto:jim@jsdevelopment.tech"
                  aria-label="Email"
                  class="btn btn-social-light btn-envelope"
                >
                  <font-awesome-icon icon="envelope" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/JSDevJazz/"
                  class="btn btn-social-light btn-facebook"
                  aria-label="Facebook"
                >
                  <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }" size="lg" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/JSDevelopmnt"
                  class="btn btn-social-light btn-twitter"
                  aria-label="Twitter"
                >
                  <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter'}" size="lg" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jimsadler1/"
                  aria-label="LinkedIn"
                  class="btn btn-social-light btn-dribbble"
                >
                  <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin-in' }" size="lg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="lower">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
            <span class="small">Copyright &copy; 2019 - JS Development</span>
          </div>
          <div class="col-md-6 me-tag">
            <a href="https://www.jsdevelopment.tech" target="_blank">
              <!-- <i class="fa fa-cog fa-spin fa-lg"></i>  -->
              <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'cog' }" size="lg" spin />Website developed by JS Development
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
    <script>
import TheSideNavToggle from '@/components/Navigation/TheSideNavToggle'

export default {
  name: 'TheFooter',
  components: {
    TheSideNavToggle
  },
  data: function() {
    return {
      loaded: false,
      show: false
    }
  },
  methods: {
    onLoaded() {
      this.loaded = true
    },
    onFadeIn() {
      this.show = true
    }
  }
}
</script>

<style scoped>
footer {
  margin-top: 10%;
  }
#logo1 img, .Test #logo1 img {
    margin-top: -29px;
    width: 8%;
    margin-left: -3.2em;
    display: inline-block;
    padding-bottom: 0.3em;
}
#logo-container1 {
	list-style: none;
	margin-bottom: -3.2em;
	margin-left: 20%;
}
#logo-tag1 img,
.Test #logo-tag1 img {
  width: 51%;
  margin-top: -67px;
  margin-left: -14px;
}

#logo-tag-nav1,
.Test #logo-tag-nav1 {
  width: 100%;
  margin-top: -2.2em;
  /* margin-left: 1.2em; */
  font-size: 20px;
}
.footer-1 .lower .small {
  color: rgba(244, 245, 247, 0.7);
}
.footer-1 .upper p {
  color: #f4f5f7;
}
.col-md-3.social_links {
  float: right;
}
.me-tag {
  text-align: right;
  font-size: 12px;
}
.me-tag a {
  color: #f4f5f7;
}
.me-tag a:hover {
  color: #439ad5;
}

footer p.animated.flipInX {
  animation-delay: 0.5s;
  animation-duration: 1.5s;
}
.footer-1 .upper {
  padding: 50px 0;
  color: #f4f5f7;
  background-color: #272b31;
	margin-top: -5%;
	
}
.footer-1 .lower {
  padding: 15px 0;
  background-color: #111214;
}
address {
	margin-bottom: 20px;
	font-style: normal;
	line-height: 1.42857143;
	margin-top: 3.5%;
	margin-left: 20%;
}
.rotating {
  transition: transform 1s ease-in-out;
}
.rotating:hover {
  transform: rotateZ(360deg);
}
/* footer social */
.list-inline {
  padding-left: 0;
  list-style: none;
  text-align: center;
}
.list-inline > li {
  display: inline-block;
  padding-right: 5px;
  padding-left: 5px;
}
.btn-facebook:hover,
.btn-facebook:focus {
  outline: none;
  color: #f4f5f7;
  background-color: #3b5998;
}
.btn-twitter:hover,
.btn-twitter:focus {
  outline: none;
  color: #f4f5f7;
  background-color: #39a9e0;
}
.btn-dribbble:hover,
.btn-dribbble:focus {
  outline: none;
  color: #f4f5f7;
  background-color: #0077b5;
}
.btn-envelope:hover,
.btn-envelope:focus {
  outline: none;
  color: #f4f5f7;
  background-color: #41b783;
}
.btn-facebook {
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transitino: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  height: 50px;
  width: 50px;
  border-radius: 100%;
  font-size: 20px;
  line-height: 37px;
  color: #f4f5f7;
}
.btn-dribbble {
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transitino: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  height: 50px;
  width: 50px;
  border-radius: 100%;
  font-size: 20px;
  line-height: 37px;
  color: #f4f5f7;
}
.btn-envelope {
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transitino: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  height: 50px;
  width: 50px;
  border-radius: 100%;
  font-size: 20px;
  line-height: 37px;
  color: #f4f5f7;
}
.btn-twitter {
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transitino: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  height: 50px;
  width: 50px;
  border-radius: 100%;
  font-size: 20px;
  line-height: 37px;
  color: #f4f5f7;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'proximanova-bold-webfont', Fallback, sans-serif;
}
.modal_Descrip h3,
.modal_Details h3 {
  font-family: 'NoirPro_light', Fallback, sans-serif;
  font-weight: 400;
}
p {
  font-family: 'NoirPro_light', Fallback, sans-serif;
}
address {
  font-family: 'NoirPro_light', Fallback, sans-serif;
  color: #fff;
}
@keyframes ring {
  0% {
    -webkit-transform: rotate(-15deg);
    -ms-transform: rotate(-15deg);
    transform: rotate(-15deg);
  }

  2% {
    -webkit-transform: rotate(15deg);
    -ms-transform: rotate(15deg);
    transform: rotate(15deg);
  }

  4% {
    -webkit-transform: rotate(-18deg);
    -ms-transform: rotate(-18deg);
    transform: rotate(-18deg);
  }

  6% {
    -webkit-transform: rotate(18deg);
    -ms-transform: rotate(18deg);
    transform: rotate(18deg);
  }

  8% {
    -webkit-transform: rotate(-22deg);
    -ms-transform: rotate(-22deg);
    transform: rotate(-22deg);
  }

  10% {
    -webkit-transform: rotate(22deg);
    -ms-transform: rotate(22deg);
    transform: rotate(22deg);
  }

  12% {
    -webkit-transform: rotate(-18deg);
    -ms-transform: rotate(-18deg);
    transform: rotate(-18deg);
  }

  14% {
    -webkit-transform: rotate(18deg);
    -ms-transform: rotate(18deg);
    transform: rotate(18deg);
  }

  16% {
    -webkit-transform: rotate(-12deg);
    -ms-transform: rotate(-12deg);
    transform: rotate(-12deg);
  }

  18% {
    -webkit-transform: rotate(12deg);
    -ms-transform: rotate(12deg);
    transform: rotate(12deg);
  }

  20% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

.faa-ring.animated,
.faa-ring.animated-hover:hover,
.faa-parent.animated-hover:hover > .faa-ring {
  -webkit-animation: ring 2s ease infinite;
  animation: ring 2s ease infinite;
  transform-origin-x: 50%;
  transform-origin-y: 0px;
  transform-origin-z: initial;
}
svg.svg-inline--fa.fa-cog {
    margin-right: .17em;
}
@media (max-width: 768px) {
  .footer {
    margin-top: 20%;
  }
  #logo-container1[data-v-71448b28] {
    list-style: none;
    margin-bottom: 0em;
    margin-left: 2em;
    text-align: center;
  }
  #logo1 img,
  .Test #logo1 img {
    margin-top: -1px;
    width: 16%;
    margin-left: -11em;
    display: inline-block;
    padding-bottom: 0.3em;
  }
  #logo-tag-nav1,
  .Test #logo-tag-nav1 {
    width: 100%;
    margin-top: -2.1em;
    margin-left: -0.5em;
    font-size: 18px;
  }
  address {
    font-family: 'NoirPro_light', Fallback, sans-serif;
    color: #fff;
    text-align: center;
		margin-top: 0.5%;
		margin-left: 0%;
  }
	.list-inline {
    text-align: center;
		float: none;
	}
	.footer-1 .lower {
    text-align: center;
	}
	.me-tag {
    text-align: center;
    font-size: 12px;
	}
  .svg-inline--fa {
    display: inline-block;
    font-size: inherit;
    height: .8em;
    overflow: visible;
    vertical-align: -.125em;
  }
}
</style>
