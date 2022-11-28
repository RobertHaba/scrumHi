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
          <OrganismDialogJoin ref="dialog" v-if="dialogJoin">
          </OrganismDialogJoin>
        </AtomAlert>
        <AtomButton variant="outlined" :to="{ name: RouteName.RoomCreator }">
          Utwórz sesję
        </AtomButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from "vue";
import { useRoomStore } from "@/stores/room";
import { useRoute } from "vue-router";

// Components
import AtomAlert from "@/components/atoms/AtomAlert.vue";
import AtomButton from "@/components/atoms/AtomButton.vue";
import MoleculeSearch from "@/components/molecules/form/MoleculeSearch.vue";
import MoleculeLogo from "@/components/molecules/MoleculeLogo.vue";
import OrganismDialogJoin from "../dialog/OrganismDialogJoin.vue";

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
const dialog = ref<typeof OrganismDialogJoin | null>();
const dialogJoin = ref(false);

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
  openDialog();
};

const checkRoom = (validator: boolean, text: string) => {
  if (!validator) return true;

  errorAlert.value.text = text;
  errorAlert.value.status = true;
  return false;
};

const openDialog = async () => {
  dialogJoin.value = true;
  await nextTick();
  dialog.value?.open();
};
</script>
