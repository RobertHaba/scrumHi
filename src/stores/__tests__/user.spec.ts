import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import { useUserStore } from "../user";

describe("User Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("Set user name", async () => {
    const userStore = useUserStore();
    const testName = "John";

    userStore.setUserName(testName);
    expect(userStore.name).toBe(testName);
  });
});
