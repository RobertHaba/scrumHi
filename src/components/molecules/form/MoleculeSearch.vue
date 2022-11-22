<template>
  <div>
    <AtomInput
      class="rounded-r-none !bg-transparent border border-gray"
      v-model="value"
      @change="handleInput"
      v-bind="$attrs"
    />
    <AtomButton class="rouned- rounded-l-none border"><slot /></AtomButton>
  </div>
</template>

<script setup lang="ts">
import AtomButton from "@/components/atoms/AtomButton.vue";
import AtomInput from "@/components/atoms/AtomInput.vue";
import type { BaseInputProps } from "@/components/atoms/interface/Input";
import { ref } from "vue";

const props = defineProps<{
  modelValue?: BaseInputProps["modelValue"];
}>();

const emit = defineEmits(["update:modelValue"]);
// Refs
const value = ref(props.modelValue);
// Methods
const handleInput = () => emit("update:modelValue", value.value);
</script>

<style scoped></style>
