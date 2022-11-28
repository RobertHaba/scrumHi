import { describe, expect, test, vitest } from "vitest";
import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";

import OrganismFormSign from "../OrganismFormSign.vue";
import { useUserStore } from "@/stores/user";
import { useRoomStore } from "@/stores/room";
import { nextTick } from "vue";

describe("OrganismFormSign", () => {
  const factory = (props?: object) => {
    return mount(OrganismFormSign, props);
  };
  const piniaStore = {
    global: {
      plugins: [createTestingPinia()],
    },
  };

  test("Error hint when try to submit invalid form - User name", async () => {
    const wrapper = factory();
    expect(wrapper.find("#userNameInput .input-hint").exists()).toBe(false);

    await wrapper.find("form").trigger("submit");
    expect(wrapper.find("#userNameInput .input-hint").exists()).toBe(true);

    wrapper.find("input[name=name]").setValue("My long user name ");
    await wrapper.find("form").trigger("submit");
    expect(wrapper.find("#userNameInput .input-hint").exists()).toBe(true);
  });

  test("Error hint when try to submit invalid form - Room code", async () => {
    const wrapper = factory();
    expect(wrapper.find("#roomCodeInput .input-hint").exists()).toBe(false);

    await wrapper.find("form").trigger("submit");
    expect(wrapper.find("#roomCodeInput .input-hint").exists()).toBe(true);

    wrapper.find("input[name=roomCode]").setValue(1000000);
    await wrapper.find("form").trigger("submit");
    expect(wrapper.find("#roomCodeInput .input-hint").exists()).toBe(true);
  });

  test("User entered correct 6 numbers room code and name", async () => {
    const wrapper = factory(piniaStore);

    const roomStore = useRoomStore();
    const userStore = useUserStore();

    const roomCodeTest = 123456;
    const userNameTest = "John";

    wrapper.find("input[name=name]").setValue(userNameTest);
    wrapper.find("input[name=roomCode]").setValue(roomCodeTest);
    await wrapper.find("form").trigger("submit");

    expect(typeof roomStore.code).toBe("number");
    expect(roomStore.code).toBe(roomCodeTest);
    // expect(userStore.name).toBe(userNameTest);
  });
});
