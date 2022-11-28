<template>
  <Icon :icon="`mdi:${props.icon}`" :width="Size[props.size]" />
</template>

<script setup lang="ts">
// https://icones.js.org/collection/mdi
import { Icon } from "@iconify/vue";

enum Size {
  "small" = "16px",
  "medium" = "20px",
  "large" = "24px",
}

const props = withDefaults(
  defineProps<{
    icon: string;
    size?: "small" | "medium" | "large";
  }>(),
  {
    size: "medium",
  }
);
</script>

<style scoped>
.small {
  @apply w-6;
}
</style>
