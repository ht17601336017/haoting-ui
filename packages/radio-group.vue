<template>
    <div class="radio-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'oneRadioGroup',
        props:{
            value:null
        },
        provide(){
           return {
            radioGroup:this
           } 
        }
    }
</script>

<style lang="scss" scoped>

</style>