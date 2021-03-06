import Vue from "vue";
import Vuex from "vuex";
import ax from "axios";

// import { fetchData } from "@/data/data.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    url: "http://localhost:3000",
    events: Array,
  },
  mutations: {
    storeEvents(state, data) {
      state.events = data;
    },
  },
  actions: {
    async fetchEvents(ctx) {
      try {
        let events = await ax.get(`${ctx.state.url}/events`);
        console.log("data", events.data.events);
        ctx.commit("storeEvents", events);
      } catch (error) {
        console.log("error in fetch event 2", error);
      }
    },
    // async fetchEvents2(ctx) {
    //   try {
    //     fetchData();
    //     let resp = await localStorage.getItem("viewlist-events");
    //     let data = JSON.parse(resp);
    //     console.log("data from localStorage", data);
    //     ctx.commit("showData", data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
  },
  getters: {
    events(state) {
      return state.events;
    },
  },
  modules: {},
});
