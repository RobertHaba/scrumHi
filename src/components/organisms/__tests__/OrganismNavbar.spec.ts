import { describe, expect, it, vi } from "vitest";
import OrganismNavbar from "@/components/organisms/OrganismNavbar.vue";
import { flushPromises, mount } from "@vue/test-utils";
import { RouteName } from "@/router/enums/Route";
import { useRoute } from "vue-router";
import { createTestingPinia } from "@pinia/testing";
import { useRoomStore } from "@/stores/room";

vi.mock("vue-router", () => ({
  useRoute: vi.fn(() => ({ name: RouteName.RoomCreator })),
}));
describe("OrganismNavbar", () => {
  vi.useFakeTimers();
  const factory = (props?: object) => {
    return mount(OrganismNavbar, props);
  };
  const piniaStore = {
    global: {
      plugins: [createTestingPinia()],
    },
  };

  it("User dont see input for room code in navbar when route is Sign", () => {
    vi.mocked(useRoute).mockReturnValue({ name: RouteName.Sign });
    const wrapper = factory();
    expect(wrapper.find("input").exists()).toBe(false);
  });

  it("User entered bad room code and got the alert", async () => {
    vi.mocked(useRoute).mockReturnValue({ name: RouteName.RoomCreator });
    const wrapper = factory();

    wrapper.find("input").setValue(1234567);
    await wrapper.find("#joinRoom button").trigger("click");

    expect(wrapper.find(".alert").text()).toContain(
      "Wprowadzono błędny kod pokoju"
    );

    vi.advanceTimersByTime(2000);
    await flushPromises();
    expect(wrapper.find(".alert").exists()).toBe(false);
  });

  it("User entered 6 numbers room code and he try join to not existing room", async () => {
    const wrapper = factory();
    const roomInput = wrapper.find("input");
    roomInput.setValue(999999);
    await wrapper.find("#joinRoom button").trigger("click");

    expect(wrapper.find(".alert").text()).toContain(
      "Podany pokój nie istnieje"
    );

    vi.advanceTimersByTime(2000);
    await flushPromises();
    expect(wrapper.find(".alert").exists()).toBe(false);
    expect(wrapper.find(".dialog").exists()).toBe(false);
  });

  it("User entered correct room code", async () => {
    const roomCodeTest = 123456;
    const wrapper = factory(piniaStore);

    const roomStore = useRoomStore();

    wrapper.find("input").setValue(roomCodeTest);
    await wrapper.find("#joinRoom button").trigger("click");

    expect(roomStore.code).toBe(roomCodeTest);
    expect(wrapper.find(".dialog").exists()).toBe(true);
  });
});
