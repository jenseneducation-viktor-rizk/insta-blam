<template>
<div class="photo-buttons">
    <div class="btn-container">
        <button class="standardBtn" @click="takePicture">
            <img src="@/assets/camera.png" alt="Camera" class="camera-icon">
        </button>
        <button v-show="showFilter" class="standardBtn" @click="addFilter">
            Filter
        </button>
    </div>
</div>
</template>

<script>
export default {
    name: "PhotoButton",
    data() {return{
        showFilter: false
    }},
    methods: {
        takePicture() {
            this.showFilter = !this.showFilter
            this.$emit('takePicture')
        },
        addFilter() {
            this.$emit('addFilter')
        }
    }

}
</script>

<style lang="scss" scoped>
.photo-buttons {
    position: fixed;
    display: flex;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    justify-content: space-around;
    align-items: flex-end;
    margin-bottom: 14vh;
}
.btn-container {
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;
    height: 35vh;
    overflow: hidden;
}
.standardBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    background-color: rgb(52, 173, 157);
    font-weight: 400;
    font-size: .8rem;
    width: 80px;
    height: 80px;
    border-radius: 50px;
    border: none;
    box-shadow: 5px 5px 12px 0px rgba(0, 0, 0, 0.50);
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