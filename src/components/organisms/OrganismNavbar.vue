<template>
  <div
    class="w-full flex justify-center items-center h-20 mx-aut border-b border-dark-200"
  >
    <div class="flex justify-between w-full max-w-screen-xl">
      <MoleculeLogo />
      <div class="flex gap-4" v-if="!isSignRoute" id="joinRoom">
        <AtomAlert v-model="errorAlert.status">
          <template #text>{{ errorAlert.text }}</template>
          <MoleculeSearch
            type="number"
            placeholder="Podaj kod"
            v-model="roomCode"
            @click="handlerJoinToRoom()"
          >
            Dołącz
          </MoleculeSearch>
        </AtomAlert>
        <AtomButton variant="outlined"> Utwórz sesję </AtomButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoomStore } from "@/stores/room";
import { useRoute } from "vue-router";

// Components
import AtomAlert from "../atoms/AtomAlert.vue";
import AtomButton from "../atoms/AtomButton.vue";
import MoleculeSearch from "../molecules/form/MoleculeSearch.vue";
import MoleculeLogo from "../molecules/MoleculeLogo.vue";

// Composables
import { useRoomCodeValidation } from "@/composables/forms/validation";

// Enums
import { RouteName } from "@/router/enums/Route";

//Routes
const route = useRoute();

// Store
const roomStore = useRoomStore();

//Refs
const roomCode = ref<number>();
const errorAlert = ref({ text: "", status: false });

//Computed
const isSignRoute = computed(() => route.name === RouteName.Sign);
const isRoomCodeValidate = computed(() =>
  useRoomCodeValidation(roomCode.value)
);

//Methods
const handlerJoinToRoom = () => {
  errorAlert.value.status = false;
  if (!isRoomCodeValidate.value) {
    errorAlert.value.text = "Wprowadzono błędny kod pokoju";
    errorAlert.value.status = true;
    return;
  }
  if (roomCode.value === 999999) {
    errorAlert.value.text = "Podany pokój nie istnieje";
    errorAlert.value.status = true;
    return;
  }
  roomStore.code = roomCode.value;
};
</script>
