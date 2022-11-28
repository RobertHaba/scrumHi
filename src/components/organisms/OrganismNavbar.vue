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
          <MoleculeDialog ref="dialog">
            <template #title>Dołączanie</template>
          </MoleculeDialog>
        </AtomAlert>
        <AtomButton variant="outlined" :to="{ name: RouteName.RoomCreator }">
          Utwórz sesję
        </AtomButton>
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
import MoleculeDialog from "../molecules/dialog/MoleculeDialog.vue";

//Routes
const route = useRoute();

// Store
const roomStore = useRoomStore();

//Refs
const roomCode = ref<number>();
const errorAlert = ref({ text: "", status: false });
const dialog = ref<InstanceType<typeof MoleculeDialog> | null>(null);

//Computed
const isSignRoute = computed(() => route.name === RouteName.Sign);
const isRoomCodeValidate = computed(() =>
  useRoomCodeValidation(roomCode.value)
);

//Methods
const handlerJoinToRoom = () => {
  errorAlert.value.status = false;

  if (!checkRoom(!isRoomCodeValidate.value, "Wprowadzono błędny kod pokoju")) {
    return;
  }

  if (!checkRoom(roomCode.value === 999999, "Podany pokój nie istnieje")) {
    return;
  }

  roomStore.code = roomCode.value;
  dialog.value?.open();
};

const checkRoom = (validator: boolean, text: string) => {
  if (!validator) return true;

  errorAlert.value.text = text;
  errorAlert.value.status = true;
  return false;
};
</script>
