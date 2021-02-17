import { createLocalVue, mount, shallowMount } from "@vue/test-utils";
import MainPage from "@/components/MainPage.vue";
import Event from "@/components/Event.vue";
import Foot from "@/components/Foot.vue";
import Home from "@/views/Home.vue";
import store from "@/store";

import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

// const store = new Vuex.Store({
//   state: {
//     events: {
//       name: "Vasco Rossi",
//       location: "verona",
//       date: "Nov 11",
//       timeIn: "20",
//       timeOut: "23",
//       tickets: 0,
//       price: "150€",
//       ticketsSold: 200,
//       id: 1,
//     },
//     getters: {
//       getEvents() {
//         return this.$store.getters.events;
//       },
//     },
//   },
// });

describe("MainPage.vue", () => {
  it("should renders an data of the event using a real Vuex getter", () => {
    const wrapper = mount(MainPage, {
      mocks: {
        $store: {
          state: {
            name: "Vasco Rossi",
            location: "verona",
            date: "Nov 11",
            timeIn: "20",
            timeOut: "23",
            tickets: 0,
            price: "150€",
            ticketsSold: 200,
            id: 1,
          },
          getters: {
            events: "Vasco Rossi",
          },
        },
      },
    });

    const eventName = wrapper
      .findComponent(Event)
      .find(".name")
      .text();
    console.log(eventName);
    expect(eventName).toBe("Vasco Rossi");

    // expect(event.exists()).toBe(true);
  });
  // it("should render a footer component", () => {
  //   const wrapper = mount(Home, {
  //     store,
  //     localVue,
  //   });
  //   const footer = wrapper.findComponent(Foot);
  //   expect(footer.exists()).toBe(true);
  // });
  // it("should render the event using a real Vuex getter", () => {
  //   const wrapper = mount(MainPage, {
  //     store,
  //     localVue,
  //   });

  //   const actual = wrapper.find(".event-img").html();
  //   expect(actual).toEqual(
  //     '<img src="https://vuejs.org/images/logo.png" alt="" class="event-img">'
  //   );
  // });
  // it('should display a serch bar in header', () => {
  //   const wrapper = shallowMount(Home)
  //   const expected = '<input type="text" class="css-input">';
  //   const actual = wrapper.find(".css-input").html();
  //   expect(actual).toEqual(expected)
  // })
});
