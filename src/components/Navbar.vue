<template>
  <nav class="fixed top-0 w-full z-50 bg-black shadow-lg">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex w-full justify-between">
          <div>
            <!-- Website Logo -->
            <a href="#" class="flex items-center py-4 px-2">
              <img src="../assets/logo.png" alt="Logo" class="h-8 w-30 mr-2" />
              <!-- <span class="font-semibold text-white text-lg">Navigation</span> -->
            </a>
          </div>
          <!-- Primary Navbar items -->
          <div class="hidden md:flex items-center space-x-3">
            <a
              href=""
              class="py-4 px-2 text-white hover:text-purple-500 transition duration-300"
              >Session</a
            >
            <a
              href=""
              class="py-4 px-2 text-white hover:text-purple-500 transition duration-300"
              >Event</a
            >
            <a
              href=""
              class="py-4 px-2 text-white hover:text-purple-500 transition duration-300"
              >FAQ</a
            >
          </div>
        </div>
        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button class="outline-none mobile-menu-button">
            <svg
              class="w-6 h-6 text-white hover:text-purple-500"
              x-show="!showMenu"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- mobile menu -->
    <div class="md:hidden mobile-menu">
      <ul class="">
        <li class="active">
          <a
            href="index.html"
            class="block text-sm px-2 py-4 text-white hover:bg-purple-500 transition duration-300"
            >Session</a
          >
        </li>
        <li>
          <a
            href="#services"
            class="block text-sm px-2 py-4 text-white hover:bg-purple-500 transition duration-300"
            >Event</a
          >
        </li>
        <li>
          <a
            href="#about"
            class="block text-sm px-2 py-4 text-white hover:bg-purple-500 transition duration-300"
            >FAQ</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
<script setup>
import { ref, onMounted } from "vue";

let btn = ref();
let menu = ref();
onMounted(() => {
  btn = document.querySelector("button.mobile-menu-button");
  menu = document.querySelector(".mobile-menu");
  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
});
</script>
