<template>
<div class="filters">
        <div v-show="buttonOrSlider" class="btn-container justify-start" v-dragscroll:firstchilddrag v-dragscroll>
            <button class="standard-btn" @click="takePicture">
            <img src="@/assets/camera.png" alt="Camera" class="camera-icon">
            </button>
            <MyButton v-for="filter in myFilter" v-bind:key="filter.name"   v-bind:title="filter.   name" v-bind:value="filter.value"    @filterClicked="filterClicked"/>
        </div>
    <FilterSlide class="slider-container" v-show="!buttonOrSlider" v-bind:title="filterSelected" v-bind:value="valueSelected"  @confirmFilter="confirmFilter" @changeFilter="userFilter" />
</div>
</template>

<script>
import MyButton from "@/components/MyButton"
import FilterSlide from "@/components/FilterSlide"


export default {
    components: { MyButton, FilterSlide },
    data() {return{
        buttonOrSlider: true,
        filterSelected: "",
        valueSelected: 0
    }},
    computed: {
        myFilter() {
            return this.$store.state.filter
        }
    },
    methods: {
        takePicture() {
            this.showFilter = !this.showFilter
            this.$emit('takePicture')
        },
        filterClicked(title, value) {
            this.buttonOrSlider = !this.buttonOrSlider
            this.filterSelected = title
            this.valueSelected = value
        },
        confirmFilter() {
            this.buttonOrSlider = !this.buttonOrSlider;
        },
        userFilter() {
            this.$emit('changeFilter')
        }
    }

}
</script>

<style lang="scss">
.filters {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1920px;
    max-width: 100vw;
    height: 200px;
}
.slider-container {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 200px;
    overflow: hidden;
    bottom: 20px;
}

.slider {
    position: relative;
    width: 400px;
    margin: 10px;
}


.justify-start {
    justify-content: flex-start;
}
@media screen and (min-width: 550px) {
    .justify-start {
    justify-content: space-evenly;
}
    
}

    


</style>