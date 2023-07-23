<script setup>
import VideoPlay from "./components/hero/VideoPlay.vue";
import Event from "./components/Event.vue";
import Comments from "./components/comment/Comments.vue";
import axios from "axios";
import { ref, onMounted, inject } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const $cookies = inject("$cookies");
const visitorCount = ref(0);

// onMounted(async () => {
//   $cookies.config(60 * 60 * 12, "/", "192.168.219.105");
//   visitorCount.value = await getVisitorCount();
// });

// async function getVisitorCount() {
//   try {
//     const count = $cookies.get("visitorCount");
//     const response = await axios.get(
//       "http://192.168.219.105:8009/meta-int/visitor"
//     );
//     let visitorCount;
//     if (!count) {
//       $cookies.set("visitorCount", response.data["value"]);
//       visitorCount = await increaseVisitorCount();
//       return visitorCount.data["value"];
//     }
//     return response.data["value"];
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
// async function increaseVisitorCount() {
//   try {
//     const response = await axios.post(
//       "http://192.168.219.105:8009/meta-int/increase/visitor"
//     );
//     return response;
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
onMounted(() => {
  const ufo = gsap.timeline({
    scrollTrigger: {
      trigger: ".box1",
      start: "top top",
      end: "center",
      markers: { startColor: "red", endColor: "red", fontSize: "12px" },
      scrub: 1,
      pin: true,
    },
  });
  ufo.to(".ufo", {
    height: 100,
    rotate: -60,
    xPercent: 300,
    yPercent: 100,
    duration: 1,
  });
  ufo.to(".ufo", {
    height: 250,
    rotate: 45,
    // xPercent: 600,
    yPercent: 100,
    duration: 1,
  });
  ufo.to(".ufo", {
    height: 500,
    rotate: -45,
    // xPercent: 900,
    yPercent: -100,
    duration: 1,
  });

  const astronaut = gsap.timeline({
    scrollTrigger: {
      trigger: ".box2",
      start: "top top",
      end: "center",
      markers: { startColor: "purple", endColor: "purple", fontSize: "12px" },
      scrub: 1,
      pin: true,
    },
  });
  astronaut.to(".astronaut", {
    xPercent: 300,
    yPercent: 100,
    rotate: 30,
    duration: 1,
  });
  astronaut.to(".astronaut", {
    xPercent: 600,
    yPercent: 100,
    rotate: -30,
    duration: 1,
  });
  astronaut.to(".astronaut", {
    xPercent: 900,
    yPercent: -100,
    rotate: 60,
    duration: 1,
  });
});
</script>

<template>
  <div class="conference-website bg-indigo-900">
    <div class="w-full"></div>
    <VideoPlay class="w-full"></VideoPlay>
    <div class="h-40">{{ visitorCount }}</div>
    <Event></Event>
    <!-- <div class="box1 bg-red-200 relative h-[2000px]">
      <img class="ufo absolute left-20 top-20" src="@/assets/ufo.png" />
    </div>
    <div class="box2 bg-red-200 relative h-[2000px]">
      <img
        class="astronaut h-28 absolute left-20 top-20"
        src="@/assets/astronaut.png"
      />
    </div> -->
    <Comments></Comments>
  </div>
</template>

<style scoped></style>
