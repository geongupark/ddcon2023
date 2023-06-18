<script setup>
import { onMounted, ref } from "vue";
import RocketLaunch from "../../assets/rocketship-smoke-trail.json";
import TurnPlanet from "../../assets/turn-planet.json";
import PlanetMasa from "../../assets/planet-masa-bimbingan.json";
import Astronaut from "../../assets/astronaut.json";
import { gsap } from "gsap";
import axios from "axios";

const FollowBox = ".relative .FollowBox";

const rocketReady = ref();
const planetMasa = ref();
onMounted(() => {
  // the DOM element will be assigned to the ref after initial render
  // rocketReady.value.play();
  // planetMasa.value.play();

  gsap.set(FollowBox, {
    xPercent: -5,
    yPercent: -5,
    scale: 0,
  });
  window.addEventListener("mousemove", (e) => {
    gsap.to(FollowBox, {
      duration: 2,
      overwrite: "auto",
      x: e.clientX,
      y: e.clientY,
      stagger: 0.15,
      ease: "none",
    });

    let TL = gsap.timeline({
      defaults: { duration: 2, ease: "none" },
    });
    TL.to(FollowBox, {
      scale: 1.5,
      overwrite: "auto",
      stagger: { amount: 0.15, from: "start", ease: "none" },
    });
    TL.to(
      FollowBox,
      {
        overwrite: "auto",
        scale: 0,
        stagger: { amount: 0.15, from: "end", ease: "none" },
      },
      "<+=1.5"
    );
  });
});

function test() {
  const headers = {
    Accept: "*/*",
    "Content-Type": "application/json", // Set the appropriate Content-Type header
    // Origin: "192.168.219.102:5173",
  };

  const data = {
    test: "test",
  };

  const instance = axios.create({
    httpsAgent: {
      rejectUnauthorized: false,
    },
  });

  instance
    .post("http://192.168.219.105:8000/helloworld/", data, { headers })
    .then((response) => {
      // Handle the response data
      console.log(response.data);
    })
    .catch((error) => {
      // Handle the error
      console.error(error);
    });
}
</script>
<template>
  <kinesis-container>
    <div class="relative w-full h-screen">
      <LottieAnimation
        ref="planetMasa"
        class="absolute top-10 right-10 h-36"
        :animationData="PlanetMasa"
        :loop="true"
        :autoPlay="true"
        :speed="1"
      ></LottieAnimation>
      <LottieAnimation
        class="FollowBox absolute top-1 left-1 h-48"
        :animationData="Astronaut"
        :loop="true"
        :autoPlay="true"
        :speed="1"
      ></LottieAnimation>
      <kinesis-element class="absolute top-10 left-10" :strength="20">
        <LottieAnimation
          class=""
          :animationData="TurnPlanet"
          :loop="true"
          :autoPlay="true"
          :speed="1"
        ></LottieAnimation>
      </kinesis-element>
      <kinesis-element class="absolute bottom-0 right-0" :strength="30">
        <LottieAnimation
          class="h-96 md:h-[40rem]"
          ref="rocketReady"
          :animationData="RocketLaunch"
          :loop="true"
          :autoPlay="true"
          :speed="1"
        ></LottieAnimation>
      </kinesis-element>
    </div>
  </kinesis-container>
  <button @click="test">testetst</button>
</template>
