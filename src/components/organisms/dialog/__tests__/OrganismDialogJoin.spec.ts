import { createTestingPinia } from "@pinia/testing";
import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import { nextTick } from "vue";
import OrganismDialogJoin from "../OrganismDialogJoin.vue";

describe("OrganismDialogJoin", () => {
  const factory = (props?: object) => {
    return mount(OrganismDialogJoin, props);
  };
  const piniaStore = {
    global: {
      plugins: [createTestingPinia()],
    },
  };

  test("User not entered name and room code and tries to join", async () => {
    const wrapper = factory(piniaStore);
    wrapper.vm.open();
    await nextTick();

    await wrapper.find("#joinButton").trigger("click");

    expect(wrapper.findAll(".input-hint").length).toBe(2);
  });

  test("User entered correct name and room code", async () => {
    const wrapper = factory(piniaStore);
    wrapper.vm.open();
    await nextTick();

    wrapper.find("[name=roomCode] input").setValue(123456);
    wrapper.find("[name=name] input").setValue("John");
    const button = wrapper.find("#joinButton");
    await button.trigger("click");

    expect(button.classes()).toContain("disabled");
  });
});
