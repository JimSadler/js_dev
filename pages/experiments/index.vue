
<template>
  <div class="page bubble-wrapper"></div>
</template>


<script>
export default {
  layout: 'experiment',
  mounted() {}
}
</script>


<style>
.page {
  height: 1200px;
}
.svg {
  left: 50%;
}
.svg1 {
  width: 50%;
}
.bubble-wrapper {
  position: relative;
}
.bubble {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  background: #272727;
  border-radius: 50%;
  height: 100px;
  width: 100px;
}
.bubble-pulse {
  position: absolute;
  z-index: 1;
  height: 120px;
  width: 120px;
  top: 50%;
  left: 50%;
  margin-top: -60px;
  margin-left: -60px;
  background: #272727;
  border-radius: 50%;
  opacity: 0;
  transform: scale(0);
}
.bubble-image {
  height: 50%;
}
</style>