<template>
  <div class="relative">
    <slot></slot>
    <div
      v-if="status"
      class="alert absolute w-screen max-w-xs right-0 bg-orange rounded-md px-6 py-2 text-sm text-dark font-semibold"
      :class="props.position"
    >
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";

const props = withDefaults(
  defineProps<{
    position?: "top" | "bottom";
    modelValue: boolean;
  }>(),
  {
    position: "top",
  }
);
const emit = defineEmits(["update:modelValue"]);
// Refs
const status = computed(() => props.modelValue);
const timeoutID = ref();
// Methods
const alertTimeout = () => {
  timeoutID.value = setTimeout(() => {
    emit("update:modelValue", false);
  }, 2000);
};
watch(status, () => {
  if (!status.value || timeoutID.value) clearTimeout(timeoutID.value);
  alertTimeout();
});
</script>

<style scoped>
.top {
  top: calc(100% + 12px);
}
.bottom {
  bottom: calc(100% + 12px);
}
</style>
