<template>
<div class="filters">
        <div v-show="buttonOrSlider" class="btn-container" v-dragscroll.    x:firstchilddrag v-dragscroll.x>

    <div class="shadow-fx">
    </div>
        <MyButton v-for="filter in myFilter" v-bind:key="filter.name"   v-bind:title="filter.name" v-bind:value="filter.value"    @filterClicked="filterClicked"/>
      
        </div>
    <FilterSlide v-show="!buttonOrSlider" v-bind:title="filterSelected" v-bind:value="valueSelected"  @confirmFilter="confirmFilter" @changeFilter="userFilter" />
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
        // filter: [
        //   {
        //     name: "Brightness",
        //     value: 0
        //   },
        //   {
        //     name: "Contrast",
        //     value: 0
        //   },
        //   {
        //     name: "Exposure",
        //     value: 0
        //   },
        //   {
        //     name: "Saturation",
        //     value: 0
        //   },
        //   {
        //     name: "Sepia",
        //     value: 0
        //   }
        // ]
    }},
    computed: {
        myFilter() {
            return this.$store.state.filter
        }
    },
    methods: {
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
.shadow-fx {
    display: block;
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,0) 25%, rgba(255,255,255,1) 60%);
    position: fixed;
    width: 300px;
    height: 35vh;
    z-index: 999;
    // box-shadow: inset 0 0 30px 20px;
}
.btn-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    width: 300px;
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
    margin: 20px;
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