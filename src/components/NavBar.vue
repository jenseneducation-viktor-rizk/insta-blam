<template>

    <div class="btn-container nav-bar">
        <button class="standard-btn" @click="takePicture">
            <img src="@/assets/camera.png" alt="Camera" class="camera-icon">
        </button>
        <button v-show="showFilter" class="standard-btn" @click="addFilter">
            Filter
        </button>
        
        
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

<style lang="scss">
.btn-container {
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
    max-width: 100vw;
    width: 800px;
    height: 100px;
    overflow: hidden;
    bottom: 20px;
}

</style>