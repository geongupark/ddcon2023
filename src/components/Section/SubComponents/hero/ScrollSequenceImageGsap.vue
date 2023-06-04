<template>
  <div class="h-[7000px]">
    <div class="h-[7000px] bg-black">
      <canvas id="hero-lightpass"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let canvas = ref(null);
let currentFrame = ref(null);
let context = ref(null);
let frameCount = ref(0);
const images = [];
const sequenceImages = {
  frame: 1,
};

onMounted(() => {
  canvas = document.getElementById("hero-lightpass");
  context = canvas.getContext("2d");

  // Depending on image size
  frameCount = 57;
  canvas.width = 1158;
  canvas.height = 770;

  // For getting the image by index (xxx_0.jpg , xxx_1.jpg ...)
  currentFrame = (index) =>
    `/images/earth_to_DSR_low/20230603_233111_${index.toString()}-min.jpg`;

  // Create, load and draw the image (startwith 1)
  const img = new Image();
  img.src = currentFrame(1); // we'll make this dynamic in the next step, for now we'll just load image 1 of our sequence
  img.onload = function () {
    context.drawImage(img, 0, 0);
  };

  // Pre-loading the images
  for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    console.log(img);
    images.push(img);
  }

  // Scroll sequence images using gsap
  gsap.to(sequenceImages, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      scrub: 0.5,
    },
    onUpdate: render, // use animation onUpdate instead of scrollTrigger's onUpdate
  });

  images[1].onload = render;

  function render() {
    console.log("render");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[sequenceImages.frame], 0, 0);
  }
});
</script>
<style>
canvas {
  position: sticky;
  top: 0px;
  height: 100vh;
  width: 100vw;
}
</style>
