<template>
  <app-bar />
  <v-container>
    <v-row class="mt-10 pt-10">
      <v-col cols="12" class="v-col-lg-4 offset-lg-4 text-center">
        <h1>Create Beneficiary</h1>
      </v-col>
      <v-col cols="12" class="v-col-lg-4 offset-lg-4">
        <v-form>
          <v-text-field label="Name" v-model="beneficiary.name" />
          <div class="text-center">
            <v-btn @click.prevent="submit" class="bg-brown-lighten-4">Submit</v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import AppBar from "@/components/AppBar.vue";
import { ref } from "vue";
import axios from "axios";
import { beneficiariesEndpoint } from "@/service/requests";
import router from "@/router";

const beneficiary = ref({});
const token = localStorage.getItem("access_token");

const submit = async () => {
  await axios
    .post(beneficiariesEndpoint, beneficiary.value, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(() => {
      router.push("/");
    });
};
</script>
