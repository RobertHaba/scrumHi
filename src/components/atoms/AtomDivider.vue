<template>
  <div class="flex gap-2 w-full items-center text-gray">
    <hr class="w-full text-dark-200" />
    <slot> </slot>
    <hr v-if="$slots.default" class="w-full text-dark-200" />
  </div>
</template>
