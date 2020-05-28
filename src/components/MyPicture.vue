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
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        
        canvas {
            display: block;
            margin: 0 auto auto auto;
            max-width: 100vw;
            max-height: 65vh;
            -webkit-transform: scaleX(-1);
            transform: scaleX(-1);
        }
    }
</style>