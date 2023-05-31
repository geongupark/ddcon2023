<template>
  <carousel v-bind="settings" :dir="direction" :breakpoints="breakpoints" :autoplay="1000" :transition="1000" :wrap-around="true" pauseAutoplayOnHover="true">
    <slide v-for="(item, i) in jsonData" :key="i">
      <a href="#" class="mx-2 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="xl:text-2xl mb-2 text-xs font-bold tracking-tight text-gray-900 dark:text-white">{{ item.title }}</h5>
        <p class="xl:text-xl font-normal text-xs text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      </a>
    </slide>
    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

const props = defineProps({
  sessionItemPath: String,
  direction: {
    type: String,
    default: "ltr",
  },
});

const jsonData = ref(null);
let direction = ref(null);
direction.value = props.direction;

const settings = {
  itemsToShow: 3,
  snapAlign: 'center',
};

const breakpoints = {
  700: {
    itemsToShow: 3.5,
    snapAlign: 'center',
    itemsToScroll: 1,
  },
  1024: {
    itemsToShow: 5,
    snapAlign: 'center',
    itemsToScroll: 1,
  },
};

onMounted(() => {
  fetch(props.sessionItemPath)
    .then(response => response.json())
    .then(data => {
      jsonData.value = data;
    })
    .catch(error => {
      console.error('Error fetching JSON:', error);
    });
});
</script>
