<template>
  <form class="flex flex-col gap-12 w-full" @submit.prevent="handlerJoinToRoom">
    <AtomTitle>Rozpocznij wycenianie sprintu szybko i wygodnie!</AtomTitle>
    <div class="flex flex-col gap-16">
      <MoleculeInput
        v-model="userName"
        placeholder="Wprowadź swoją nazwę"
        name="name"
        maxlength="16"
        id="userNameInput"
      >
        <template #label>Przedstaw się</template>
        <template #hint v-if="trySubmitForm && !isUserNameValidate">
          Twoja nazwa musi wynosić od {{ User.MinLength }} do
          {{ User.MaxLength }} znaków.
        </template>
      </MoleculeInput>
      <MoleculeInput
        v-model="roomCode"
        type="number"
        id="roomCodeInput"
        name="roomCode"
        placeholder="Wprowadź swoją nazwę"
        :min="Room.MinCodeValue"
        :max="Room.MaxCodeValue"
      >
        <template #label>Dołącz do utworzonego pokoju</template>
        <template #actions>
          <AtomButton type="submit">Dołącz do pokoju</AtomButton>
        </template>
        <template #hint v-if="trySubmitForm && !isRoomCodeValidate">
          Numer pokoju musi składać się z {{ Room.MaxCodeLength }} cyfr.
        </template>
      </MoleculeInput>
    </div>
    <AtomDivider> lub </AtomDivider>
    <div class="flex flex-col gap-2">
      <AtomTitle class="!text-lg" tag="h3">Utwórz własny pokój</AtomTitle>
      <AtomButton
        class="w-full"
        variant="outlined"
        :to="{ name: RouteName.RoomCreator }"
        >Utwórz pokój
      </AtomButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import { RouteName } from "@/router/enums/Route";
import { useRoomStore } from "@/stores/room";
import { useUserStore } from "@/stores/user";
import { computed, ref } from "vue";
import { User, Room } from "@/enums/FormSign";

// Components
import AtomButton from "../atoms/AtomButton.vue";
import AtomDivider from "../atoms/AtomDivider.vue";
import AtomTitle from "../atoms/AtomTitle.vue";
import MoleculeInput from "../molecules/form/MoleculeInput.vue";

// Composables
import {
  useRoomCodeValidation,
  useUserNameValidation,
} from "@/composables/forms/validation";

// Store
const userStore = useUserStore();
const roomStore = useRoomStore();

// Refs
const userName = ref("");
const roomCode = ref<number>();
const trySubmitForm = ref(false);

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
  roomStore.code = roomCode.value;
  userStore.name = userName.value;
};
</script>
