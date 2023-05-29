<template>
	<header>
		<nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <img :class="{ 'logo-small':!isBigLogo, 'logo-big': isBigLogo }" src="../assets/logo.png" alt="Conference Logo">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenuList" aria-controls="navbarMenuList" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end bg-dark" id="navbarMenuList">
        <ul class="menu-list navbar-nav ml-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a href="#session-section" :class="{ 'nav-link':true, 'neon-active': activeSection === 'session' }">Session</a>
          </li>
          <li class="nav-item">
            <a href="#event-section" :class="{ 'nav-link':true, 'neon-active': activeSection === 'event' }">Event</a>
          </li>
          <li class="nav-item">
            <a href="#qna-section" :class="{ 'nav-link':true, 'neon-active': activeSection === 'qna' }">QnA</a>
          </li>
        </ul>
      </div>
		</nav>
	</header>
    <!-- Rest of the template content... -->
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      prevScrollPos: window.pageYOffset,
      isBigLogo: false,
			activeSection: ''
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeMount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentScrollPos = window.pageYOffset;
      this.isBigLogo = currentScrollPos > this.prevScrollPos;
      this.prevScrollPos = currentScrollPos;

			const sections = ['hero', 'session', 'event', 'qna'];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const sectionElement = document.getElementById(section + '-section');

        if (sectionElement && scrollPosition >= sectionElement.offsetTop) {
          this.activeSection = section;
        }
      }
    },
  }
}
</script>

<style>
/* Add styles for the navigation bar */
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.logo-small {
	height: 35px;
	transition : all 0.5s;
}

.logo-big {
  height: 40px;
	transition : all 0.5s;
}

.logo img, .logo-big img {
	height: 100%;
  width: auto;
}

.menu-list {
  display: flex;
  list-style: none;
  padding: 0;
}

.menu-list li {
  margin-right: 20px;
}

.menu-list li a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  transition: color 0.3s;
}

.menu-list li a:hover {
  color: #007bff;
}

/* Hide scrollbars for smoother transition */
body {
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
}

/* Firefox */
body::-moz-scrollbar {
  width: 0.2rem;
}

body::-moz-scrollbar-track {
  background: transparent;
}

body::-moz-scrollbar-thumb {
  background: transparent;
}

/* Chrome, Safari, and Opera */
body::-webkit-scrollbar {
  width: 0.2rem;
}

body::-webkit-scrollbar-track {
  background: transparent;
}

body::-webkit-scrollbar-thumb {
  background: transparent;
}

.neon-active {
  animation: flicker 1.5s infinite alternate;
  color: #fff !important;
}
/* Flickering animation */
@keyframes flicker {
	
	0%, 18%, 22%, 25%, 53%, 57%, 100% {

	text-shadow:
		0 0 7px #fff,
		0 0 10px #fff,
		0 0 21px #fff,
		0 0 42px #5271ff,
		0 0 82px #5271ff,
		0 0 92px #5271ff,
		0 0 102px #5271ff,
		0 0 151px #5271ff;
	}
	
	20%, 24%, 55% {        
			text-shadow: none;
	}    
}
</style>