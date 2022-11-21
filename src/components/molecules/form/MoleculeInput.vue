<template>
  <div class="flex flex-col gap-2.5">
    <AtomLabel v-if="$slots.label">
      <slot name="label"></slot>
    </AtomLabel>
    <div class="flex gap-2 w-full">
      <AtomInput
        class="w-full"
        :type="props.type"
        :name="name"
        :placeholder="placeholder"
        v-model="val"
        @change="handleInput"
        v-bind="$attrs"
      />
      <div v-if="$slots.actions" class="shrink-0">
        <slot name="actions"></slot>
      </div>
    </div>
    <p class="input-hint opacity-80" v-if="$slots.hint">
      <slot name="hint"></slot>
    </p>
  </div>
</template>

<script setup lang="ts">
import AtomInput from "@/components/atoms/AtomInput.vue";
import AtomLabel from "@/components/atoms/AtomLabel.vue";
import type { BaseInputProps } from "@/components/atoms/interface/Input";
import { ref } from "vue";

const props = defineProps<{
  type?: BaseInputProps["type"];
  placeholder: string;
  name?: string;
  modelValue?: BaseInputProps["modelValue"];
}>();

const emit = defineEmits(["update:modelValue"]);
// Refs
const val = ref(props.modelValue);
// Methods
const handleInput = () => emit("update:modelValue", val.value);
</script>
