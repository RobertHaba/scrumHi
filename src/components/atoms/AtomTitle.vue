<template>
  <component :is="props.tag" :class="props.tag"><slot></slot></component>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  }>(),
  {
    tag: "h2",
  }
);
</script>

<style scoped>
.h2 {
  @apply text-2xl;
}
.h3 {
  @apply text-xl;
}
.h4 {
  @apply text-lg;
}
</style>
