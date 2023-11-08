<template>
<div class="grid grid-cols-1 lg:grid-cols-2">
  <div class="mb-3" v-for="item, i in jsonData" :key="i">
    <a href="#" class="mx-2 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="xl:text-2xl mb-2 text-xs font-bold tracking-tight text-gray-900 dark:text-white">{{ item.title }}</h5>
        <p class="xl:text-xl font-normal text-xs text-gray-700 dark:text-gray-400">{{ item.description }}</p>
      </a>
  </div>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  sessionItemPath: String,
});

const jsonData = ref(null);

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