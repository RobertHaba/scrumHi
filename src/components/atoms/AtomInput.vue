<template>
  <input
    class="py-2 text-sm px-6 rounded-full bg-dark-400"
    :type="props.type"
  />
</template>

<script setup lang="ts">
import type { BaseInputProps } from "./interface/Input";

const props = withDefaults(defineProps<{ type: BaseInputProps["type"] }>(), {
  type: "text",
});
</script>
