import { mount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import Footer from "@/components/Footer.vue";
import Vue from "vue";
import Vuetify from "vuetify";
Vue.use(Vuetify);

describe("Footer componter show", () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it("footer component in home", () => {
    const wrapper = mount(Home, {
      vuetify
    });
    expect(wrapper.find("Footer").isVisible()).toBe(true);
  });
  it("forter", () => {
    const wrapper = mount(Footer, {
      vuetify,
      propsData: {
        show: true
      }
    });
    expect(wrapper.props("show")).toBe(true);
  });
});
