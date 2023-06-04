<script setup>
import NavBar from "./components/Navbar.vue";
import Session from "./components/Section/Session.vue";
import Event from "./components/Section/Event.vue";
import Qna from "./components/Section/Qna.vue";
import Hero from "./components/Section/Hero.vue";
</script>

<template>
  <div class="conference-website bg-slate-900">
    <NavBar></NavBar>
    <main class="main pt-10">
      <Hero></Hero>
      <Session></Session>
      <Event></Event>
      <Qna></Qna>
    </main>
  </div>
</template>

<!-- <script>
import NavBar from './components/NavBar.vue'
import Session from './components/Section/Session.vue'
import Event from './components/Section/Event.vue'
import Qna from './components/Section/Qna.vue'
import Hero from './components/Section/Hero.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Session,
    Event,
    Qna,
    Hero
  }
}
</script> -->
