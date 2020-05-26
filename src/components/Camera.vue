<template>
  <div class="camera">
    <video autoplay class="cameraStream"></video>
    <PhotoButton @takePicture="takePicture"/>
    <MyPicture />
  </div>
</template>

<script>

import PhotoButton from "@/components/PhotoButton"
import MyPicture from "@/components/MyPicture"

export default {
    name: "Camera",
    components: { PhotoButton, MyPicture },
    methods: {
        stream() {
            if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
                navigator.mediaDevices.getUserMedia({video: true})
                .then(stream => {
                    const videoPlayer = document.querySelector("video")
                    videoPlayer.srcObject = stream
                    videoPlayer.play()
                }).catch(error => console.log(error));
            }
        },
        takePicture() {
            console.log("take picture!!!")
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
    height: auto;
    margin: 0;
    .cameraStream {
        display: block;
        margin: 30px auto;
        width: 100vw;
        max-width: 1024px;
        max-height: 768px;
        background-color: rgba(52, 173, 147, 0.25);
        box-shadow: -5px 5px 12px 0px rgba(0, 0, 0, 0.25);
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
    }
    
}
</style>