<template>
    <div class="post">
        <div class="post-header">
            <div class="profile" :style="{ backgroundImage: `url(${Postingdata.userImage})` }"></div>
            <span class=" profile-name">{{ Postingdata.name }}</span>
        </div>
        <div :class="Postingdata.filter" class="post-body"
            :style="{ backgroundImage: `url(${Postingdata.postImage})` }"></div>
        <div class="post-content">
            <p><i v-if="$store.state.Postingdata[i].liked == false" @click="$store.commit('like', i)"
                    class="fa-regular fa-heart"></i>
                <i v-if="$store.state.Postingdata[i].liked == true" @click="$store.commit('like', i)"
                    class="fa-solid fa-heart liked"></i> {{
        $store.state.Postingdata[i].likes
}} likes
            </p>
            <p> {{ Postingdata.content }}</p>
            <p class="date">{{ Postingdata.date }}</p>
        </div>
    </div>
</template>
<i ></i>
<script>
export default {
    name: 'isPost',
    props: {
        Postingdata: Object,
        i: Number,
    },

}

</script>

<style>
.post {
    width: 100%;
}

.profile {
    background-image: url("https://placeimg.com/100/100/arch");
    width: 30px;
    height: 30px;
    background-size: 100%;
    border-radius: 50%;
    float: left;
}

.profile-name {
    display: block;
    float: left;
    padding-left: 10px;
    padding-top: 7px;
    font-size: 14px;
}

.post-header {
    height: 30px;
    padding: 10px;
}

.post-body {
    background-image: url("https://placeimg.com/640/480/animals");
    height: 450px;
    background-position: center;
    background-size: cover;
}

.post-content {
    padding-left: 15px;
    padding-right: 15px;
    font-size: 14px;
}

.date {
    font-size: 12px;
    font-size: 600;
    color: grey;
    margin-top: -8px;
}

.liked {
    color: red;
}
</style>