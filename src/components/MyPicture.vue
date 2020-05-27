<template>
  <div class="picture">
      <canvas data-caman-hidpi-disabled="true" id="my-image"></canvas>
  </div>
</template>

<script>

export default {
    
    name: "Picture",
    methods: {
        
    }
}
</script>

<style lang="scss">
    .picture {
        display: block;
        width: 100vw;
        height: 100vh;
        
        canvas {
            display: block;
            width: 100%;
            max-width: 1280px;
            max-height: 720px;  
            margin: 0 auto;    
            -webkit-transform: scaleX(-1);
            transform: scaleX(-1);
        }
        .filter-button {
            z-index: 998;
            margin: 50px;
            height: 60px;
            width: 100px;
        }
    }
</style>