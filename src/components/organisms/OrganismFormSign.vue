<template>
  <div class="flex flex-col gap-12 w-full">
    <AtomTitle>Rozpocznij wycenianie sprintu szybko i wygodnie!</AtomTitle>
    <div class="flex flex-col gap-16">
      <MoleculeInput placeholder="Wprowadź swoją nazwę">
        <template #label>Przedstaw się</template>
      </MoleculeInput>
      <AtomDivider />
      <MoleculeInput placeholder="Wprowadź swoją nazwę">
        <template #label>Dołącz do utworzonego pokoju</template>
        <template #actions><AtomButton>Dołącz do pokoju</AtomButton></template>
      </MoleculeInput>
    </div>
    <div class="flex flex-col gap-2">
      <AtomTitle class="!text-lg" tag="h3">Utwórz własny pokój</AtomTitle>
      <AtomButton
        class="w-full"
        variant="outlined"
        :to="{ name: RouteName.RoomCreator }"
        >Utwórz pokój</AtomButton
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouteName } from "@/router/enums/Route";
import AtomButton from "../atoms/AtomButton.vue";
import AtomDivider from "../atoms/AtomDivider.vue";
import AtomTitle from "../atoms/AtomTitle.vue";
import MoleculeInput from "../molecules/form/MoleculeInput.vue";
</script>

<style scoped></style>
