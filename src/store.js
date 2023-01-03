import axios from 'axios'
import { createStore } from 'vuex'
import Postingdata from './assets/postingdata'
import profile from '../public/follower'

const store = createStore({
  state() {
    return {
      Postingdata,
      더보기: 0,
      profile,
      originerprofile: [...profile]
    }
  },
  mutations: {
    setMore(state, data) {
      state.more = data
      state.Postingdata.push(state.more)
      state.더보기++
    },
    rename(state) {
      state.name = 'park'
    },
    old(state) {
      state.age++
    },
    like(state, i) {
      if (state.Postingdata[i].liked == false) {
        state.Postingdata[i].likes++;
        state.Postingdata[i].liked = true;
      } else {
        state.Postingdata[i].likes--;
        state.Postingdata[i].liked = false;
      }
    },
    search(state, 검색어) {
      state.profile = [...state.originerprofile]
      let newProfile = state.profile.filter((a) => {
        return a.name.match(new RegExp(검색어, "i"))
      });
      state.profile = [...newProfile]
    },

  },
  actions: {
    getData(context) {
      axios.get(`https://codingapple1.github.io/vue/more${context.state.더보기}.json`)
        .then((a) => {
          console.log(a.data)
          context.commit('setMore', a.data)
        })
    },
  },
})

export default store