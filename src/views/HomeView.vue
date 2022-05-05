<template>
  <app-bar />
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center mt-10">
        <h1>Beneficiaries</h1>
      </v-col>
      <v-col cols="12" class="v-col-lg-4 offset-lg-2">
        <v-text-field
            prepend-inner-icon="mdi-account-search-outline"
            label="Search"
            @input.prevent="searchBeneficiaries"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="v-col-lg-8 mx-auto">
        <v-table class="bg-brown-lighten-3 elevation-4">
          <thead>
            <tr>
              <th class="text-left">Id</th>
              <th class="text-left">Name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="beneficiary in beneficiaries" :key="beneficiary.id">
              <td>{{ beneficiary.id }}</td>
              <td>{{ beneficiary.name }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import router from "@/router";
import AppBar from "@/components/AppBar.vue";
import { beneficiariesEndpoint } from "@/service/requests";

const token = localStorage.getItem("access_token");
const beneficiaries = ref([]);

onMounted(() =>
  axios
    .get(beneficiariesEndpoint, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      beneficiaries.value = response.data;
    })
    .catch(() => {
      router.push("login");
    })
);

const searchBeneficiaries = async (event) => {
  const search = event.target.value;
  await axios
    .get(`${beneficiariesEndpoint}?name=${search}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      beneficiaries.value = response.data;
    });
};
</script>
