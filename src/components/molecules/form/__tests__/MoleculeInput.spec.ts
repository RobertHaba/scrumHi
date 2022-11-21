import { describe, expect, test } from "vitest";

import { mount } from "@vue/test-utils";
import MoleculeInput from "../MoleculeInput.vue";

describe("MoleculeInput", () => {
  test("mount component", () => {
    expect(MoleculeInput).toBeTruthy();

    const wrapper = mount(MoleculeInput, {
      props: { type: "text", placeholder: "Name ex. Rafał" },
    });
    const inputText = wrapper.find("input[type=text]");

    expect(inputText.exists()).toBe(true);
  });
});
