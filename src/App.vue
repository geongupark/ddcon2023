<script setup>
import Event from "./components/Event.vue";
import axios from "axios";
import { ref, onMounted, inject } from "vue";

const $cookies = inject("$cookies");
const visitorCount = ref(0);

onMounted(async () => {
  $cookies.config(60 * 60 * 12, "/", "192.168.219.105");
  visitorCount.value = await getVisitorCount();
});

async function getVisitorCount() {
  try {
    const count = $cookies.get("visitorCount");
    const response = await axios.get(
      "http://192.168.219.105:8009/meta-int/visitor"
    );
    let visitorCount;
    if (!count) {
      $cookies.set("visitorCount", response.data["value"]);
      visitorCount = await increaseVisitorCount();
      return visitorCount.data["value"];
    }
    return response.data["value"];
  } catch (error) {
    console.error("Error:", error);
  }
}
async function increaseVisitorCount() {
  try {
    const response = await axios.post(
      "http://192.168.219.105:8009/meta-int/increase/visitor"
    );
    return response;
  } catch (error) {
    console.error("Error:", error);
  }
}
</script>

<template>
  <div class="conference-website bg-indigo-900">
    <div class="h-40">{{ visitorCount }}</div>
    <Event></Event>
  </div>
</template>

<style scoped></style>
