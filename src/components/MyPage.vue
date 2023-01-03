<template>
    <div style="padding : 10px">
        <h4>팔로워</h4>
        <input placeholder="검색" @input="$store.commit('search', $event.target.value)" />
        <div class="post-header" v-for="(a, i) in profile" :key="i">
            <div class="profile" :style="{ backgroundImage: `url(${profile[i].image})` }"></div>
            <span class="profile-name">{{ profile[i].name }}</span>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'MyPage',
    computed: {
        ...mapState(['profile', 'originerprofile']),
    },

    data() {
        return {

        }
    },
}

</script>

<style>

</style>