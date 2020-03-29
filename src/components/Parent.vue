<template>
    <div>
        <greeting/>
    </div>
</template>

<script>
    import Greeting from './Greeting'
    export default {
        name: "Parent.vue",
        components: {Greeting}
    }
</script>

<style scoped>

</style>