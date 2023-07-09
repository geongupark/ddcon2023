<script setup>
import { ref, onMounted } from "vue";
import Question from "@/assets/question.json";
import { LottieAnimation } from "lottie-web-vue";

const props = defineProps({
  eventNumber: {
    type: Number,
    default: 1,
  },
  eventTitle: {
    type: String,
    default: "이벤트 테스트입니다",
  },
  eventImage: {
    default: Question,
  },
  eventDefaultFrame: {
    type: Number,
    default: 0,
  },
  eventSpeed: {
    type: Number,
    default: 1,
  },
  eventDesc: {
    type: String,
    default: "이벤트 설명 테스트입니다. 설명이니 길게 적자",
  },
});
let anim = ref();

onMounted(() => {
  anim.value.goToAndStop(props.eventDefaultFrame, true);
});

function startAnim() {
  anim.value.play();
}
function stopAnim() {
  anim.value.goToAndStop(props.eventDefaultFrame, true);
}
</script>
<template>
  <div
    class="w-full m-1 p-3 h-[400px] bg-slate-700/[0.7] rounded-2xl"
    @mouseenter="startAnim()"
    @mouseleave="stopAnim()"
  >
    <div class="text-orange-400 font-semibold mb-2">
      이벤트 {{ eventNumber }}
    </div>
    <div class="text-orange-200 text-xl font-bold">{{ eventTitle }}</div>
    <div class="h-[200px]">
      <LottieAnimation
        class="h-[200px]"
        ref="anim"
        :animation-data="eventImage"
        :auto-play="true"
        :speed="eventSpeed"
        :loop="true"
      >
      </LottieAnimation>
    </div>
    <div class="text-orange-200">{{ eventDesc }}</div>
  </div>
</template>
