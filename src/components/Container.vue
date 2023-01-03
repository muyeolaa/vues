<template>
    <div>
        <div v-if="step == 0">
            <Post v-for="(a, i) in Postingdata " :key='i' :Postingdata="Postingdata[i]" :i="i" />
        </div>
        <!-- 필터선택페이지 -->
        <div v-if="step == 1">
            <div :class="selectfilter" class="upload-image" :style="{ backgroundImage: `url(${imgurl})` }"></div>
            <div class="filters">
                <Filter :imgurl="imgurl" :filter="filter" v-for="filter in filters" :key="filter">{{ filter }}
                </Filter>
            </div>
        </div>

        <!-- 글작성페이지 -->
        <div v-if="step == 2">
            <div :class="selectfilter" class="upload-image" :style="{ backgroundImage: `url(${imgurl})` }"></div>
            <div class="write">
                <textarea @input="$emit('req', $event.target.value)" class="write-box">write!</textarea>
            </div>
        </div>

        <div v-if="step == 3">
            <MyPage />
        </div>
    </div>
</template>

<script>
import Post from './Post.vue';
import Filter from './FilterBox.vue'
import MyPage from './MyPage.vue'

export default {
    name: "inContainer",
    data() {
        return {
            filters: ["aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson",
                "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua",
                "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
        }
    },

    props: {
        Postingdata: Array,
        step: Number,
        imgurl: String,
        selectfilter: String,
    },
    components: {
        Post,
        Filter,
        MyPage,
    },

}
</script>

<style>
.upload-image {
    width: 100%;
    height: 450px;
    background: cornflowerblue;
    background-size: cover;
}

.filters {
    overflow-x: scroll;
    white-space: nowrap;
}

.filter-1 {
    width: 100px;
    height: 100px;
    background-color: cornflowerblue;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color: white;
    background-size: cover;
}

.filters::-webkit-scrollbar {
    height: 5px;
}

.filters::-webkit-scrollbar-track {
    background: #f1f1f1;
}

.filters::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
}

.filters::-webkit-scrollbar-thumb:hover {
    background: #555;
}

.write-box {
    border: none;
    width: 90%;
    height: 100px;
    padding: 15px;
    margin: auto;
    display: block;
    outline: none;
}
</style>