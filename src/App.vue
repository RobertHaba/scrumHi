<template>
  <div class="px-4">
    <OrganismNavbar />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import OrganismNavbar from "@/components/organisms/navbar/OrganismNavbar.vue";
import { useUserStore } from "./stores/user";

const userStore = useUserStore();
const userName = localStorage.getItem("userName");
if (userName) userStore.setUserName(userName);
</script>
