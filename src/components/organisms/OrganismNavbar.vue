<template>
  <div
    class="w-full flex justify-center items-center h-20 mx-aut border-b border-dark-200"
  >
    <div class="flex justify-between w-full max-w-screen-xl">
      <MoleculeLogo />
      <div class="flex gap-4" v-if="!isSignRoute">
        <MoleculeSearch />
        <AtomButton variant="outlined"> Utwórz sesję </AtomButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouteName } from "@/router/enums/Route";
import { computed } from "vue";
import { useRoute } from "vue-router";
import AtomButton from "../atoms/AtomButton.vue";
import MoleculeSearch from "../molecules/form/MoleculeSearch.vue";
import MoleculeLogo from "../molecules/MoleculeLogo.vue";

const route = useRoute();
const isSignRoute = computed(() => route.name === RouteName.Sign);
</script>
