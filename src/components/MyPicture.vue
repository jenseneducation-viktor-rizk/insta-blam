<template>
  <div class="picture">
      <canvas ref="canvas" data-caman-hidpi-disabled="true" id="my-image"></canvas>
      <a id="download" ref="dl"></a>
      <a class="download-btn" @click="downloadPic">Download
        </a>
  </div>
</template>

<script>

export default {
    
    name: "Picture",
    methods: {
        downloadPic() {
            const img = this.$refs.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            this.$refs.dl.setAttribute('download','MyImage.png');
            this.$refs.dl.setAttribute('href', img);
            this.$refs.dl.click();
        }
    }
}
</script>

<style lang="scss">
    .picture {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 50vh;
        
        canvas {
            display: block;
            margin: 0 auto auto auto;
            max-width: 100vw;
            max-height: 50vh;
            
        }
        .download-btn {
            margin: 10px;
            &:hover {
                cursor: pointer;
            }
        }
    }
    
</style>