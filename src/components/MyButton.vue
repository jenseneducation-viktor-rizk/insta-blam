<template>
    <button class="standardBtn" @click="filterClicked" > {{ title }} </button>
</template>

<script>
export default {
    name: "MyButton",
    props: {
        title: String,
        value: Number
    },
    data() {return{
        showSepia: false,
        showSaturation: false,
        showBrightness: false,
        showContrast: false,
        showExposure: false,
        
    }},
    methods: {
        filterClicked() {
            this.$emit("filterClicked", this.title, this.value)
            
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