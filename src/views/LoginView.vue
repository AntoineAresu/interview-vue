<template>
  <v-container class="h-100">
    <v-row class="mt-12 pt-12">
      <v-col cols="12" class="v-col-lg-6 offset-lg-3 text-center mb-5">
        <h1>Interview Nest-Vue</h1>
      </v-col>
      <v-col cols="12" class="v-col-lg-6 offset-lg-3">
        <v-form @submit.prevent="login" class="w-100">
          <v-col cols="12 pb-0">
            <v-text-field
              prepend-icon="mdi-account"
              label="Email"
              required
              v-model="email"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" class="py-0">
            <v-text-field
              prepend-icon="mdi-lock"
              type="password"
              label="Password"
              required
              v-model="password"
            />
          </v-col>
          <v-col class="my-0">
            <v-btn
              class="mx-auto w-100 bg-brown-lighten-3"
              type="submit"
              elevation="2"
              plain
              rounded
            >
              Submit
            </v-btn>
          </v-col>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const email = ref("");
const password = ref("");

const login = async () => {
  const user = {
    email: email.value,
    password: password.value,
  };

  await axios.post("http://localhost:8000/login", user).then((response) => {
    localStorage.setItem("access_token", response.data.access_token);
  });
}
</script>
