import { describe, expect, it, vi } from "vitest";
import OrganismNavbar from "@/components/organisms/OrganismNavbar.vue";
import { mount } from "@vue/test-utils";
import { RouteName } from "@/router/enums/Route";
import { useRoute } from "vue-router";

vi.mock("vue-router", () => ({
  useRoute: vi.fn(() => ({ name: RouteName.Sign })),
}));
describe("OrganismNavbar", () => {
  const factory = () => {
    return mount(OrganismNavbar);
  };

  it("Dont display input for room code", () => {
    const wrapper = factory();
    expect(wrapper.find("input").exists()).toBe(false);
  });

  it("User entered bad room code", async () => {
    vi.mocked(useRoute).mockReturnValue({ name: RouteName.RoomCreator });
    const wrapper = factory();
    const roomInput = wrapper.find("input");
    expect(roomInput.exists()).toBe(true);
    await roomInput.setValue(1234567);
  });
});
