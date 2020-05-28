<template>
<div class="filters">
    <div class="btn-container" v-dragscroll.x:firstchilddrag v-dragscroll.x>
        <button class="standardBtn" > Sepia </button>
        <div class="sepCont" v-show="showSepia">
            <label for="sepia">Sepia: {{ filter.sepia }} </label>
            <input type="range" name="sepia" class="slider" min="0" max="100" value="0" v-model.number="filter.sepia" @change="userFilter(filter)">
        </div>

        <button class="standardBtn" > Saturation </button>
        <div class="satCont" v-show="showSaturation">
            <label for="saturation">Saturation: {{ filter.saturation }} </label>
            <input type="range" name="saturation" class="slider" min="-100" max="100" value="0" v-model.number="filter.saturation" @change="userFilter(filter)">
        </div>

        <button class="standardBtn"> Brightness </button>
        <div class="briCont" v-show="showBrightness">
            <label for="brightness">Brightness: {{ filter.brightness }} </label>
            <input type="range" name="brightness" class="slider" min="-100" max="100" value="0" v-model.number="filter.brightness" @change="userFilter(filter)">
        </div>
        <button class="standardBtn"> Contrast </button>
        <div class="conCont" v-show="showContrast">
            <label for="contrast">Contrast: {{ filter.contrast }} </label>
            <input type="range" name="contrast" class="slider" min="-100" max="100" value="0" v-model.number="filter.contrast" @change="userFilter(filter)">
        </div>
        <button class="standardBtn"> Exposure </button>
        <div class="expCont" v-show="showExposure">
            <label for="exposure">Exposure: {{ filter.exposure }} </label>
            <input type="range" name="exposure" class="slider" min="-100" max="100" value="0" v-model.number="filter.exposure" @change="userFilter(filter)">
        </div>
        
        <button class="standardBtn" id="filter-confirm" 
        @click="confirmFilter">
        <img src="@/assets/camera.png" alt="" height="50px"></button>

    </div>

</div>
</template>

<script>
export default {
    data() {return{
        showSepia: false,
        showSaturation: false,
        showBrightness: false,
        showContrast: false,
        showExposure: false,
        filter: {
            sepia: 0,
            saturation: 0,
            brightness: 0,
            contrast: 0,
            exposure: 0
        }
    }},
    methods: {
        confirmFilter() {
            this.$emit('confirmFilter')
        },
        userFilter(userVal) {
            this.$store.dispatch('changeFilter', userVal)
            this.$emit('changeFilter')
        }
    }

}
</script>

<style lang="scss">
.filters {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    z-index: 999;
    width: 100vw;
    height: 100vh;
}
.slider {
    position: relative;
    max-width: 400px;
    margin-bottom: 30px;
}
.btn-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    width: 100vw;
    height: 35vh;
    overflow: hidden;
}
.standardBtn {
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
    width: 80px;
    height: 80px;
    margin: 30px;
    border-radius: 100%;
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