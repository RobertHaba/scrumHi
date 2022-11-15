<template>
  <component
    :is="componentTag"
    class="px-6 py-2 text-sm rounded-full font-semibold text-center"
    :class="generateClass"
    :type="props.type"
    :to="props.to"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = withDefaults(
  defineProps<{
    type?: "button" | "submit" | "reset";
    size?: "small" | "large";
    variant?: "outlined";
    color?: "orange" | "blue";
    to?: object;
  }>(),
  {
    type: "button",
    color: "orange",
  }
);

const componentTag = computed(() => (props?.to ? RouterLink : "button"));

const generateClass = computed(() => {
  return Object.values(props);
});
</script>

<style scoped>
.orange {
  @apply border-orange bg-orange text-dark;
}
.blue {
  @apply border-orange bg-orange text-white;
}
.outlined {
  @apply border bg-transparent;
}
.outlined.orange {
  @apply !text-orange;
}
.small {
  @apply px-4 text-xs;
}
</style>
