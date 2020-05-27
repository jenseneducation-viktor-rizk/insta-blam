<template>
  <div class="camera">
    <video v-show="toggle" ref="video" autoplay class="cameraStream"></video>
    <PhotoButtons @takePicture="takePicture"
    @addFilter="addFilter"/>
    <MyPicture v-show="!toggle"/>
  </div>
</template>

<script>

import PhotoButtons from "@/components/PhotoButtons"
import MyPicture from "@/components/MyPicture"

export default {
    name: "Camera",
    components: { PhotoButtons, MyPicture },
    data() {return{
        toggle: true,
        constraints: {
            video: {
                width: {
                    min: 640,
                    ideal: 1280,
                    max: 1920
                },
                height: {
                    min: 360,
                    ideal: 720,
                    max: 1080
                }
            }
        }
    }},
    methods: {
        stream() {
            if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
                navigator.mediaDevices.getUserMedia(this.constraints).then(stream => {
                    const videoPlayer = document.querySelector("video")
                    videoPlayer.srcObject = stream
                    videoPlayer.play()
                }).catch(error => console.log(error));
            }
        },
        takePicture() {
            let ratio = (window.innerHeight < window.innerWidth) ? 16 / 9 : 9 / 16;
            const picture = document.querySelector("canvas");
            picture.width = (window.innerWidth < 1280) ? window.innerWidth : 1280;
            picture.height = window.innerWidth / ratio;
            const ctx = picture.getContext("2d");
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = "high";
            ctx.drawImage(this.$refs.video, 0, 0, picture.width, picture.height)
            if(!this.toggle){
                window.location.reload(false);
            }else{
                this.toggle = !this.toggle
            }
        },
        addFilter() {
            window.Caman('#my-image', function () {
                this.revert();
                this.brightness(10);
                this.contrast(30);
                this.sepia(60);
                this.saturation(-30);
                this.render();
            });
        }
    },
    beforeMount() {
        this.stream()
    }

}
</script>

<style lang="scss">
.camera {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vw;
    margin: 0;
    .cameraStream {
        display: block;
        margin: auto;
        max-width: 1280px;
        max-height: 720px;
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
    }
    
}
</style>