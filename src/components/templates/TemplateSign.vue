<template>
  <BaseLayout class="flex gap-32 py-20">
    <OrganismFormSignVue />
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
import OrganismFormSignVue from "../organisms/OrganismFormSign.vue";
</script>

<style scoped></style>
