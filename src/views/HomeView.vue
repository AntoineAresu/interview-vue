<template>
  <app-bar/>
</template>

<script setup>
import { onMounted } from "vue";
import axios from "axios";
import router from "@/router";
import AppBar from "@/components/AppBar.vue";

const token = localStorage.getItem("access_token");

onMounted(() =>
  axios
    .get("http://localhost:8000/api/beneficiaries", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch(() => {
      router.push("login");
    })
)
</script>
