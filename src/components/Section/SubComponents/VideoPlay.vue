<template>
  <video class="w-full" src="/public/it.mp4" autoplay loop muted></video>
</template>
<script setup>
const props = defineProps({
  videoSrc: String,
});
</script>
