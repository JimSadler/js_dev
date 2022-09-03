<template>
  <div style="height: 100vh;">
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
            style="border-bottom: 2px solid #575bb5;"
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
            style="border-bottom: 2px solid #575bb5;"
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
</template>

<script>
// import mapsClone from '@/assets/js/projects/mapsClone.js'
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
        }
        // {
        //   rel: 'stylesheet',
        //   type: 'text/css',
        //   href: 'projects/styles/css/normalize.css'
        // },

        // {
        //   rel: 'stylesheet',
        //   type: 'text/css',
        //   href: 'projects/styles/css/styles.css'
        // }
      ],
      script: [
        {
          src: 'projects/mapsClone.js'
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

:root {
  --blue-050: #f4f5fc;
  --blue-100: #dfe0f2;
  --blue-300: #575bb5;
  --blue-500: #424abf;
  --blue-700: #28309b;
  --blue-800: #141a72;

  --red-050: #ffe3e3;
  --red-100: #ffbdbd;
  --red-500: #e12d39;
  --red-600: #cf1124;
  --red-700: #ab091e;
}
html {
  font-size: 100%;
  line-height: 1.4;
  font-family: 'Roboto', sans-serif;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 1.7689em;
  font-weight: 400;
}

button {
  border: 0;
}

button * {
  pointer-events: none;
}

button[class='primary'] {
  background: #28309b;
  padding: 0.75em 1em;
  color: white;
}

button[class='primary']:hover,
button[class='primary']:active {
  background: #424abf;
}

button[class='secondary'] {
  cursor: pointer;
  background-color: transparent;
}

button[class='secondary']:hover,
button[class='secondary']:active {
  text-decoration: underline;
}

#map {
  position: fixed !important;
  top: 8.05rem;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 10px;
  /* height: 700px; */
}

/*******************
 * Search Panel
 *******************/
.search-panel {
  position: relative;
  z-index: 1;
  max-width: 27rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
  margin-left: 10px;
}

.search-panel .header {
  padding: 2rem;
  background-color: #28309b;
  color: white;
}

.search-panel .header p {
  margin-top: 0.5rem;
}

.search-panel__body {
  background-color: #fff;
  padding: 1.5em 2em;
  color: #575bb5;
}

.search-panel__error {
  color: #ab091e;
}

.search-panel__error:empty {
  display: none;
}

/*******************
 * Search Box
 *******************/
.search-box {
  display: grid;
  grid-template-columns: 1rem 1fr 1.5rem;
  grid-gap: 0.75rem;
  align-items: center;
}

.search-box + .search-box {
  position: relative;
  padding: 0.5em 0;
}

.search-box + .search-box::before {
  content: '';
  position: absolute;
  top: -1.2em;
  left: 0.35em;
  width: 0.3em;
  height: 3em;
  background: repeating-linear-gradient(
    to bottom,
    #dfe0f2 0.1em,
    #dfe0f2 0.4em,
    transparent 0.5em,
    transparent 0.7em
  );
}

.search-box input {
  width: 100%;
  border: 0;
  padding: 0.75em 0em;
  color: #28309b;
}

.search-box input:focus {
  border-bottom: 2px solid #575bb5 !important;
}

.search-box input::placeholder {
  color: #888;
}

.search-box__stopover-icon {
  position: relative;
  z-index: 1;
  background-image: url('/projects/images/circle.svg');
  background-size: cover;
  width: 1rem;
  height: 1rem;
}

.search-box:nth-last-child(2) .search-box__stopover-icon {
  background-image: url('/projects/images/destination.svg');
}

.search-box__delete-icon {
  opacity: 0;
  width: 100%;
  padding: 0.25rem;
}

.search-box:hover .search-box__delete-icon,
.search-box__delete-icon:focus {
  opacity: 1;
  background-color: transparent;
}

.search-box__delete-icon:focus {
  outline: 2px solid #e12d39;
  color: #e12d39;
}

.search-panel__actions {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 0.5rem;
  align-items: center;
  margin-left: 1.75em;
  margin-top: 0.75em;
}

/*******************
 # Google's Autocomplete/Typeahead styles
 *******************/
.pac-container {
  position: relative !important;
  top: 0 !important;
  left: 0 !important;
  z-index: 1;
  width: 100% !important;
  max-width: 27em !important;
  padding-top: 1em;
  padding-bottom: 1em;
  border: 0;
  border-top: 1px solid #dfe0f2;
  background-color: white;
}

.pac-container::after {
  display: none;
}

.pac-item {
  display: flex;
  align-items: center;
  padding: 1em 1.5em;
  border-top: 0;
  font: inherit;
  line-height: inherit;
  color: #888;
}

.pac-item:hover,
.pac-item-selected,
.pac-item-selected:hover {
  background-color: #dfe0f2;
}

.pac-icon,
.hdpi .pac-icon,
.pac-item-selected .pac-icon,
.hdpi .pac-item-selected .pac-icon {
  background-image: url('/projects/images/destination.svg');
  background-size: cover;
  background-position: 0 0;
  background-repeat: no-repeat;
  width: 1rem;
  height: 1rem;
  margin-top: 0;
  margin-right: 0.75em;
}

.pac-item-query {
  font: inherit;
  padding-right: 0.5em;
  color: #28309b;
}

/*******************
 # Google's Directions Panel styles
 *******************/
/* Same as .pac-container */
.directions-panel {
  position: absolute !important;
  left: 0 !important;
  z-index: 1;
  width: 100% !important;
  max-width: 27em !important;
  border: 0;
  background-color: white;
}

.directions-panel:empty {
  display: none;
}

/* Header for each leg */
/* This is a table element */
.directions-panel .adp-placemark {
  margin: 0;
  border: 0;
  border-top: 1px solid #dfe0f2;
  border-bottom: 1px solid #dfe0f2;
  background-color: #f4f5fc;
}

.directions-panel .adp-placemark tr {
  display: grid;
  grid-template-columns: 1rem 1fr;
  grid-template-areas: 'image text';
  align-items: center;
  grid-gap: 0.75rem;
  padding: 0.5rem 1.75rem;
}

/* Summary on how long it takes */
.directions-panel .adp-summary {
  padding: 0.5rem 3.5rem;
  border-bottom: 1px solid #dfe0f2;
  position: relative;
}

/* Steps between two points */
.directions-panel .adp .adp-directions tr {
  display: grid;
  grid-template-columns: 1rem auto 1fr auto;
  grid-gap: 0.75em;
  padding: 0.25rem 1.75rem;
}

.directions-panel .adp .adp-directions tr + tr {
  border-top: 1px solid #dfe0f2;
}

.directions-panel .adp .adp-directions tr > td {
  border-top: 0;
}

/* Copyright info */
.directions-panel .adp-legal {
  position: relative;
  top: -0.5rem;
  margin-bottom: -0.5rem;
  background-color: #f4f5fc;
  padding: 0.5rem 3.5rem;
}
</style>
