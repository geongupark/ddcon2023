<script setup>
import { onMounted, ref } from "vue";
import RocketLaunch from "@/assets/rocket-launch.json";
let rocketReady = ref();
onMounted(() => {
  // the DOM element will be assigned to the ref after initial render
  rocketReady.value.play();
});
</script>
<template>
  <lottie-animation
    ref="rocketReady"
    :animationData="RocketLaunch"
    :loop="true"
    :autoPlay="true"
    :speed="1"
  />
</template>
