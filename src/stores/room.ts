import { ref } from "vue";
import { defineStore } from "pinia";

export const useRoomStore = defineStore("room", () => {
  const code = ref<number>();

  return { code };
});
