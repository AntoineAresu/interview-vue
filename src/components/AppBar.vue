<template>
  <v-app-bar
      elevation="4"
      class="bg-brown-lighten-3 py-4"
  >
    <v-toolbar-title>
      <v-icon>mdi-account</v-icon>
      {{ userStore.email }}
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn @click.prevent="logout">
        Logout
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script setup>
import { useUserStore } from "@/store/usersStore";
import router from "@/router";

const userStore = useUserStore();
const logout = () => {
  localStorage.clear();
  userStore.logout();
  router.push("login");
}
</script>
