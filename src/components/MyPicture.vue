<template>
  <div class="picture">
      <canvas></canvas>
  </div>
</template>

<script>
export default {
    name: "Picture"
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
            
        }
    }
</style>