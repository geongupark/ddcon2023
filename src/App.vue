<script setup>
import NavBar from "./components/Navbar.vue";
import Session from "./components/Section/Session.vue";
import Event from "./components/Section/Event.vue";
import Qna from "./components/Section/Qna.vue";
import Hero from "./components/Section/Hero.vue";
import HeroLottie from "./components/Section/HeroLottie.vue";
</script>

<template>
  <div class="conference-website bg-slate-900 w-full h-screen">
    <!-- <NavBar></NavBar> -->
    <main class="main pt-10">
      <HeroLottie></HeroLottie>
      <!-- <Hero></Hero>
      <Session></Session>
      <Event></Event>
      <Qna></Qna> -->
    </main>
  </div>
</template>
