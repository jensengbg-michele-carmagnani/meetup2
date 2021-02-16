import { createLocalVue, mount, shallowMount } from "@vue/test-utils";
import MainPage from "@/components/MainPage.vue";
import Event from "@/components/Event.vue";
import Foot from "@/components/Foot.vue";
import Home from "@/views/Home.vue";

import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  getters: {
    events(state) {
      return state.events;
    },
  },
  state: {
    events: [
      {
        id: 1,
        image: "https://vuejs.org/images/logo.png",
        event: "eventValue",
        date: "dateValue",
        city: "cityValue",
        details: "detailsValue",
        attended: 0,
        category: "categoryValue",
        reviews: [],
      },
    ],
  },
});

describe("MainPage.vue", () => {
  it("should reder a component", () => {
    const wrapper = mount(MainPage, {
      store,
      localVue,
    });
    const event = wrapper.findComponent(Event);
    expect(event.exists()).toBe(true);
  });
  it("should render a footer component", () => {
    const wrapper = mount(Home, {
      store,
      localVue,
    });
    const footer = wrapper.findComponent(Foot);
    expect(footer.exists()).toBe(true);
  });
  it("should render the event using a real Vuex getter", () => {
    const wrapper = mount(MainPage, {
      store,
      localVue,
    });

    const actual = wrapper.find(".event-img").html();
    expect(actual).toEqual(
      '<img src="https://vuejs.org/images/logo.png" alt="" class="event-img">'
    );
  });
  it('should display a serch bar in header', () => {
    const wrapper = shallowMount(Home)
    const expected = '<input type="text" class="css-input">';
    const actual = wrapper.find(".css-input").html();
    expect(actual).toEqual(expected)
  })
});
