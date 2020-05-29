<template>
    <button class="standard-btn" @click="filterClicked" > {{ title }} </button>
</template>

<script>
export default {
    name: "MyButton",
    props: {
        title: String,
        value: Number
    },
    data() {return{
        
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



</style>