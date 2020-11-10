import { createLocalVue, mount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Header from "@/components/Header.vue";
import Vue from "vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
Vue.use(Vuetify);

const localVue = createLocalVue();
localVue.use(VueRouter);

const routes = [{ path: "/about", component: About }];
const router = new VueRouter({
  routes
});

describe("Home.vue", () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it("btn click", () => {
    const wrapper = mount(Home, {
      vuetify
    });
    const button = wrapper.find(".v-btn");
    button.trigger("click");
    expect(wrapper.vm.counter).toBe(2);
    button.trigger("click");
    expect(wrapper.vm.counter).toBe(4);
  });

  it("login", () => {
    const wrapper = mount(Home, {
      localVue,
      router,
      vuetify
    });
    const jump = wrapper.findAll(".v-btn").at(1);
    jump.trigger("click");
    expect(wrapper.vm.$route.path).toBe("/about");
    expect(wrapper.vm.$route).toBeInstanceOf(Object);
  });

  it("header component", () => {
    const wrapper = mount(Header, {
      vuetify,
      propsData: {
        item: "face"
      }
    });
    expect(wrapper.props().item).toBe("face");
  });
});
