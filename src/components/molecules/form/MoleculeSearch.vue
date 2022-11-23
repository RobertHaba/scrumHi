<template>
  <AtomInput
    class="rounded-r-none !bg-transparent border border-gray"
    v-model="value"
    @change="handleInput"
    v-bind="$attrs"
  />
  <AtomButton class="rounded-l-none border" @click="onClick">
    <slot> </slot>
  </AtomButton>
</template>

<script setup lang="ts">
import AtomButton from "@/components/atoms/AtomButton.vue";
import AtomInput from "@/components/atoms/AtomInput.vue";
import type { BaseInputProps } from "@/components/atoms/interface/Input";
import { ref } from "vue";

const props = defineProps<{
  modelValue?: BaseInputProps["modelValue"];
  onClick?: any;
}>();

const emit = defineEmits(["update:modelValue"]);
// Refs
const value = ref(props.modelValue);
// Methods
const handleInput = () => emit("update:modelValue", value.value);
</script>

<style scoped></style>
