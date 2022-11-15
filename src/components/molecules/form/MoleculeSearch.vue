<template>
  <div>
    <AtomInput
      type="text"
      placeholder="Podaj kod"
      class="rounded-r-none !bg-transparent border border-gray"
    />
    <AtomButton class="rouned- rounded-l-none border">Dołącz</AtomButton>
  </div>
</template>

<script setup lang="ts">
import AtomButton from "@/components/atoms/AtomButton.vue";
import AtomInput from "@/components/atoms/AtomInput.vue";
</script>

<style scoped></style>
