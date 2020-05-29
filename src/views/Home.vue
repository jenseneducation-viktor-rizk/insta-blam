<template>
  <div class="camera">
    <video playsinline v-show="!showPicture" ref="video" autoplay class="cameraStream"></video>
    <MyPicture v-show="showPicture"/>
    <NavBar @takePicture="takePicture"
    @addFilter="addFilter" 
    v-show="!filterOn"/>
    <Filters v-show="filterOn" @takePicture="takePicture" @changeFilter="changeFilter(myFilter)"/>
  </div>
</template>

<script>

import NavBar from "@/components/NavBar"
import MyPicture from "@/components/MyPicture"
import Filters from "@/components/Filters"

export default {
    name: "Camera",
    components: { NavBar, MyPicture, Filters },
    data() {return{
        filterOn: false,
        showPicture: false,
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
    computed: {
        myFilter() {
            return this.$store.state.filter
        }
    },
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
            picture.width = window.innerWidth
            picture.height = window.innerWidth / ratio;
            const ctx = picture.getContext("2d");
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = "high";
            ctx.translate(picture.width, 0);ctx.scale(-1,1)
            ctx.drawImage(this.$refs.video, 0, 0, picture.width, picture.height)
            if(this.showPicture){
                window.location.reload(false);
            }else{
                this.showPicture = !this.showPicture
            }
        },
        addFilter() {
            this.filterOn = true;
            
        },
        changeFilter(filter) {
            window.Caman('#my-image', function () {
                this.revert();
                this.brightness(filter[0].value);
                this.contrast(filter[1].value);
                this.exposure(filter[2].value)
                this.saturation(filter[3].value);
                this.sepia(filter[4].value);
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
    align-items: center;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    margin: 0;
    .cameraStream {
        display: block;
        margin: 0 auto auto auto;
        max-width: 100vw;
        max-height: 55vh;
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
    }
    
}

.standard-btn {
    position: relative;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0;
    background-color: rgb(52, 173, 157);
    font-weight: 400;
    font-size: .8rem;
    width: 75px;
    height: 75px;
    margin: 18px;
    border-radius: 100%;
    border: none;
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.20);
    &:hover {
        background-color: rgb(91, 189, 168);
        cursor: pointer;
    }
    &:focus {
        outline: none;
    }
    &:active {
        top: 2px;
    }
    .camera-icon {
        position: relative;
        margin: auto;
        height: 36px;
    }
}
</style>