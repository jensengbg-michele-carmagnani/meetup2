import Vue from "vue";
import Vuex from "vuex";
import ax from "axios";

import {fetchData} from '@/data/data.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: Array,
    axiosHeader: {
      header: {
        "secret-key": "https://api.jsonbin.io/b/602a2a216b568373f8c1d5b4",
        "Content-Type": "application/json",
      },
    },
    envetsArray: Array,
    url: "https://api.jsonbin.io/b/602a8be199ac3873a349e016",
  },
  mutations: {
    storeEvents(state, events) {
      state.envetsArray = events;
    },
    showData(state, data) {
      state.events = data;
    },
  },
  actions: {
    async fetchEvents(ctx) {
      console.log("in fetchev");
      let resp = await ax.get(`${ctx.state.url}`, {
        headers: `${ctx.state.axiosHeader}`,
      });
      console.log("show events", resp);
      ctx.commit("storeEvents", resp);
    },
    async fetchEvents2(ctx) {
      try {
        fetchData();
        let resp = await localStorage.getItem("viewlist-events");
        let data = JSON.parse(resp);
        console.log("data from localStorage", data);
        ctx.commit("showData", data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    events(state) {
      return state.events;
    },
  },
  modules: {},
});
