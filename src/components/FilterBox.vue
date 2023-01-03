<template>
    <div @click="fire" :class="filter + ' filter-item'" :style="{ backgroundImage: `url(${imgurl})` }">
        <slot>선택필터</slot>
    </div>

</template>

<script>
export default {
    name: 'FliterBox',
    methods: {
        fire() {
            this.emitter.emit('selectfilter', this.filter);
        },
    },
    props: {
        imgurl: String,
        filter: String,
    }
}
</script>

<style>
.filter-item {
    width: 100px;
    height: 100px;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color: white;
    background-size: cover;
    background-position: center;
}
</style>