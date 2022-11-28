<template>
  <MoleculeInput
    v-model="userName"
    placeholder="Wprowadź swoją nazwę"
    name="name"
    :maxlength="User.MaxLength"
    @change="handleInput()"
    id="userNameInput"
  >
    <template #label><slot>Przedstaw się</slot></template>
    <template #hint v-if="props.isTrySubmit && !isUserNameValidate">
      Twoja nazwa musi wynosić od {{ User.MinLength }} do
      {{ User.MaxLength }} znaków.
    </template>
  </MoleculeInput>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

// Components
import MoleculeInput from "@/components/molecules/form/MoleculeInput.vue";

// Enums
import { User } from "@/enums/FormSign";
import type { BaseInputProps } from "@/components/atoms/interface/Input";
import { useUserNameValidation } from "@/composables/forms/validation";

// Props
const props = defineProps<{
  modelValue: BaseInputProps["name"];
  isTrySubmit: boolean;
}>();

// Refs
const userName = ref(props.modelValue);

// Computed
const isUserNameValidate = computed(() => {
  return useUserNameValidation(userName.value);
});

const emit = defineEmits(["update:modelValue"]);
const handleInput = () => emit("update:modelValue", userName.value);
</script>
