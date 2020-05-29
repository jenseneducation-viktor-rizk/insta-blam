<template>
<div class="filter-slide">
    <p>{{title}} on photo: {{this.value}} </p>
    <label> {{ slideVal }} </label>
    <input type="range" class="slider" min="-100" max="100" v-model.number="slideVal" @change="userFilter(slideVal)">
    
    <button class="standard-btn" id="filter-confirm" 
        @click="confirmFilter">Back</button>
</div>
</template>

<script>
export default {
    props: {
        title: String,
        value: Number
    },
    data() {return{
        slideVal: 0
    }},
    methods: {
        userFilter(slideVal) {
            this.$store.dispatch('changeFilter', { name: this.title, value: slideVal })
            this.$emit('changeFilter')
        },
        confirmFilter() {
            this.$emit('confirmFilter')
        }
}

}
</script>

<style>

</style>