<template>
<div class="filter-slide">
    <p>{{title}}: {{this.value}} </p>
    <label> New value: {{ slideVal }} </label>
    <input type="range" class="slider" min="-100" max="100" v-model.number="slideVal" @change="userFilter(slideVal)">
    
    <button class="standardBtn" id="filter-confirm" 
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
        slideVal: this.value
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