import { describe, expect, test } from "vitest";

import { mount } from "@vue/test-utils";
import MoleculeInput from "../MoleculeInput.vue";
import AtomLabelVue from "@/components/atoms/AtomLabel.vue";

describe("MoleculeInput", () => {
  test("mount component", () => {
    expect(MoleculeInput).toBeTruthy();

    const wrapper = mount(MoleculeInput, {
      props: { type: "text", placeholder: "Name ex. Rafał" },
    });
    const inputText = wrapper.find("input[type=text]");

    expect(inputText.exists()).toBe(true);
  });

  test("not rendered input label", () => {
    const wrapper = mount(MoleculeInput, {
      props: { type: "text", placeholder: "Name ex. Rafał" },
    });
    expect(wrapper.findComponent(AtomLabelVue).exists()).toBe(false);
  });

  test("rendered input label", () => {
    const wrapper = mount(MoleculeInput, {
      props: { type: "text", placeholder: "Name ex. Rafał" },
      slots: { label: "Name" },
    });
    expect(wrapper.text()).toContain("Name");
  });
});
