import { describe, expect, test } from "vitest";

import { mount } from "@vue/test-utils";
import MoleculeInput from "../MoleculeInput.vue";
import AtomLabelVue from "@/components/atoms/AtomLabel.vue";

describe("MoleculeInput", () => {
  test("renders text input", () => {
    const wrapper = mount(MoleculeInput, {
      props: { type: "text", placeholder: "ASd" },
    });
    const inputText = wrapper.find("input[type=text]");
    expect(inputText.exists()).toBe(true);
  });
  test("dont render input label", () => {
    const wrapper = mount(MoleculeInput, {
      props: { type: "text", placeholder: "ASd" },
    });
    expect(wrapper.findComponent(AtomLabelVue).exists()).toBe(false);
  });
  test("has rendered input label", () => {
    const wrapper = mount(MoleculeInput, {
      props: { type: "text", placeholder: "ASd" },
      slots: { label: "Input label" },
    });
    expect(wrapper.text()).toContain("Input label");
  });
});
