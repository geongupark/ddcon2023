<template>
  <div class="conference-website">
    <NavBar></NavBar>
    <main class="main">
      <router-view></router-view>
      <HeroSection></HeroSection>

      <SessionSection></SessionSection>
      <EventSection></EventSection>      
      <QnaSection></QnaSection>
      

      <footer class="footer">
        <div class="container">
          
        </div>
      </footer>
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import SessionSection from './components/SessionSection.vue'
import EventSection from './components/EventSection.vue'
import QnaSection from './components/QnaSection.vue'
import HeroSection from './components/HeroSection.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    SessionSection,
    EventSection,
    QnaSection,
    HeroSection
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      const qnaSectionOffset = document.querySelector('#qna-section').offsetTop;
      const qnaMenuItem = document.querySelector('.navbar .menu-list li:nth-child(3)');

      if (scrollPosition >= qnaSectionOffset) {
        qnaMenuItem.classList.add('active');
      } else {
        qnaMenuItem.classList.remove('active');
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: rgb(34, 41, 56);
  /* margin-top: 60px; */
}


</style>
