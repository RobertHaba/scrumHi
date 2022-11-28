<template>
  <MoleculeDialog ref="dialog">
    <template #title>Dołączanie</template>
    <template #content>
      <OrganismInputName
        v-model="userName"
        :is-try-submit="trySubmitForm"
        :disabled="isLoading"
      >
      </OrganismInputName>
      <MoleculeInput
        v-model="roomCode"
        type="number"
        id="roomCodeInput"
        name="roomCode"
        placeholder="Wprowadź swoją nazwę"
        :min="Room.MinCodeValue"
        :max="Room.MaxCodeValue"
        :disabled="isLoading"
      >
        <template #label>Dołącz do utworzonego pokoju</template>
        <template #hint v-if="trySubmitForm && !isRoomCodeValidate">
          Numer pokoju musi składać się z {{ Room.MaxCodeLength }} cyfr.
        </template>
      </MoleculeInput>
    </template>
    <template #footer>
      <AtomButton
        class="w-full"
        @click="handlerJoinToRoom()"
        :disabled="isLoading"
        id="joinButton"
      >
        Dołącz do pokoju
      </AtomButton>
    </template>
  </MoleculeDialog>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
// Components
import AtomButton from "@/components/atoms/AtomButton.vue";
import MoleculeDialog from "@/components/molecules/dialog/MoleculeDialog.vue";
import MoleculeInput from "@/components/molecules/form/MoleculeInput.vue";

// Enums
import { Room } from "@/enums/FormSign";

// Composables
import {
  useUserNameValidation,
  useRoomCodeValidation,
} from "@/composables/forms/validation";

// Store
import { useUserStore } from "@/stores/user";
import { useRoomStore } from "@/stores/room";
import OrganismInputName from "../form/OrganismInputName.vue";
const roomStore = useRoomStore();
const userStore = useUserStore();

// Refs
const dialog = ref<InstanceType<typeof MoleculeDialog> | null>(null);
const userName = ref(userStore.name);
const roomCode = ref(roomStore.code);
const trySubmitForm = ref(false);
const isLoading = ref(false);

// Computed
const isRoomCodeValidate = computed(() =>
  useRoomCodeValidation(roomCode.value)
);
const isUserNameValidate = computed(() =>
  useUserNameValidation(userName.value)
);
const isValidateForm = computed(() => {
  return isRoomCodeValidate.value && isUserNameValidate.value;
});

// Methods
const handlerJoinToRoom = () => {
  trySubmitForm.value = true;

  if (!isValidateForm.value) return;
  isLoading.value = true;
  roomStore.code = roomCode.value;
  userStore.setUserName(userName.value);
};

const open = () => {
  dialog.value?.open();
};

onMounted(() => {
  if (!isValidateForm.value) return;
  handlerJoinToRoom();
});

defineExpose({
  open,
});
</script>

<style scoped></style>
