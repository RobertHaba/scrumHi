<template>
  <div class="flex flex-col gap-2.5">
    <AtomLabel v-if="$slots.label">
      <slot name="label"></slot>
    </AtomLabel>
    <div class="flex gap-2 w-full">
      <AtomInput class="w-full" :type="props.type" :placeholder="placeholder" />
      <div v-if="$slots.actions" class="shrink-0">
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AtomInput from "@/components/atoms/AtomInput.vue";
import AtomLabel from "@/components/atoms/AtomLabel.vue";
import type { BaseInputProps } from "@/components/atoms/interface/Input";

const props = defineProps<{
  type?: BaseInputProps["type"];
  placeholder: string;
}>();
</script>
