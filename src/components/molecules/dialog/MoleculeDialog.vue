<template>
  <AtomOverlay v-if="dialog" @click.self="close">
    <div
      class="dialog flex flex-col gap-6 w-full max-w-md p-6 rounded-2xl bg-dark"
    >
      <div class="flex justify-between">
        <AtomTitle><slot name="title"> </slot></AtomTitle>
        <AtomButton
          aria-label="Zamknij"
          icon="close"
          color="dark"
          @click="close"
        />
      </div>
      <div class="flex flex-col gap-4">
        <slot name="content"></slot>
      </div>
      <div class="flex flex-wrap justify-end gap-2">
        <slot name="footer"></slot>
      </div>
    </div>
  </AtomOverlay>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Components
import AtomOverlay from "@/components/atoms/AtomOverlay.vue";
import AtomTitle from "@/components/atoms/AtomTitle.vue";
import AtomButton from "@/components/atoms/AtomButton.vue";

// Refs
const dialog = ref(false);

// Methods
const open = () => {
  dialog.value = true;
};
const close = () => {
  dialog.value = false;
};

defineExpose({
  open,
  close,
});
</script>
