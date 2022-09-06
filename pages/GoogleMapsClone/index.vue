<template>
  <div>
    <div style="height: 100vh">
      <div class="pageTitle text-center pt-2">
        <h1>Google Maps Clone</h1>
        <hr />
      </div>
      <div id="map"></div>
      <form action="#" class="search-panel" autocomplete="off">
        <div class="header">
          <h1>Get driving directions</h1>
          <p>You can get driving directions from one location to another.</p>
        </div>
        <div class="search-panel__body">
          <div class="search-panel__error"></div>
          <div class="search-box">
            <span class="search-box__stopover-icon">
              <svg viewBox="0 0 20 20">
                <use href="projects/images/destination.svg"></use>
              </svg>
            </span>
            <input
              type="search"
              placeholder="Starting point"
              style="border-bottom: 2px solid #575bb5"
            />
            <button hidden type="button" class="search-box__delete-icon">
              <svg viewBox="0 0 20 20">
                <use href="projects/images/sprite.svg#delete"></use>
              </svg>
            </button>
          </div>
          <div class="search-box">
            <span class="search-box__stopover-icon"></span>
            <input
              type="search"
              placeholder="Ending Point"
              style="border-bottom: 2px solid #575bb5"
            />
            <button hidden type="button" class="search-box__delete-icon">
              <svg viewBox="0 0 20 20">
                <use href="projects/images/sprite.svg#delete"></use>
              </svg>
            </button>
          </div>
          <div class="search-panel__actions">
            <button type="submit" class="primary">Get directions</button>
            <button type="button" class="secondary" data-js="add-searchbox">
              + Add new end point
            </button>
          </div>
        </div>
      </form>
      <div class="directions-panel"></div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'Meta description' }
      ],
      title: 'JS Development | Google Maps Clone',
      link: [
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,600,700'
        },
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'projects/styles/maps.css'
        }

        // {
        //   rel: 'stylesheet',
        //   type: 'text/css',
        //   href: 'projects/styles/css/styles.css'
        // }
      ],
      script: [
        {
          src: 'projects/mapsClone.js',
          defer: true
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
</style>
