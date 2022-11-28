<template>
  <BaseLayout class="flex gap-32 py-20">
    <OrganismFormSign />
    <div class="flex justify-center items-center bg-dark-400 w-full rounded-xl">
      <img
        class="max-w-md rounded-md"
        src="@/assets/images/app.png"
        alt="Zrzut ekranu
      aplikacji"
      />
    </div>
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from "../layouts/BaseLayout.vue";
import OrganismFormSign from "@/components/organisms/form/OrganismFormSign.vue";
</script>

<style scoped></style>
