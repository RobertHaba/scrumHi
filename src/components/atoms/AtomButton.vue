<template>
  <component
    :is="componentTag"
    class="px-6 py-2 text-sm rounded-full font-semibold text-center"
    :class="generateClass"
    :type="props.type"
    :to="props.to"
    :disabled="disabled"
  >
    <slot></slot>
    <AtomIcon v-if="props.icon" :icon="props.icon" />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
import AtomIcon from "./AtomIcon.vue";

const props = withDefaults(
  defineProps<{
    type?: "button" | "submit" | "reset";
    size?: "small" | "large";
    variant?: "outlined";
    color?: "orange" | "blue" | "dark";
    to?: object;
    icon?: string;
    disabled?: boolean;
  }>(),
  {
    type: "button",
    color: "orange",
  }
);

const componentTag = computed(() => (props?.to ? "router-link" : "button"));

const generateClass = computed(() => {
  return [props.color, iconClass.value, variantClass.value];
});

const iconClass = computed(() => (props.icon ? "icon" : ""));
const variantClass = computed(() => props.variant ?? "");
</script>

<style scoped>
.orange {
  @apply border-orange bg-orange text-dark;
}
.blue {
  @apply border-orange bg-orange text-white;
}
.dark {
  @apply border-dark bg-dark text-white;
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
.icon {
  @apply p-2;
}
</style>
