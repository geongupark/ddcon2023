<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const heroVideo = ref(null);
const scrollHeight = ref("1100px");

gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  heroVideo.value = document.querySelector(".hero-video");
  gsap.to(".hero-video", {
    scrollTrigger: {
      trigger: ".hero-video-box",
      toggleActions: "play none none reverse",
      pin: true,
      start: "top top-=1px",
      end: `${scrollHeight.value} center`,
      // markers: true,
      onEnter: (self) => {
        heroVideo.value.play();
      },
      onEnterBack: (self) => {
        heroVideo.value.play();
      },
      onLeave: (self) => {
        heroVideo.value.pause();
      },
      onLeaveBack: (self) => {
        heroVideo.value.pause();
      },
    },
  });
});
</script>
<template>
  <div class="hero-video-box">
    <video
      class="hero-video w-screen h-screen object-cover"
      src="/public/main_session_animation.mp4"
      loop
      muted
    ></video>
  </div>
</template>
