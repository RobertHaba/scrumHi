<template>
  <input
    class="py-2 text-sm px-6 rounded-full bg-dark-400"
    :type="props.type"
    v-model="val"
    @input="handleInput"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { BaseInputProps } from "./interface/Input";
// Props
const props = withDefaults(
  defineProps<{
    type?: BaseInputProps["type"];
    modelValue: BaseInputProps["modelValue"];
  }>(),
  {
    type: "text",
    modelValue: "",
  }
);
// Emits
const emit = defineEmits(["update:modelValue"]);
// Refs
const val = ref(props.modelValue);
// Methods
const handleInput = () => emit("update:modelValue", val.value);
</script>
