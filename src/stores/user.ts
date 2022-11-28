import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const name = ref<string>();

  const setUserName = (newName: string) => {
    name.value = newName;
    localStorage.setItem("userName", name.value);
  };

  return { name, setUserName };
});
