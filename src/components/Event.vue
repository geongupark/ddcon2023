<script setup>
import { ref } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import EventCard from "./EventCard.vue";
import Gift from "@/assets/gift.json";
import Cart from "@/assets/cart.json";
import Confettie from "@/assets/confetti.json";
import "vue3-carousel/dist/carousel.css";

const breakpoints = ref();
const eventData = ref();
breakpoints.value = {
  0: {
    itemsToShow: 2,
    snapAlign: "start",
  },
  // 700px and up
  850: {
    itemsToShow: 3,
    snapAlign: "start",
  },
};
eventData.value = [
  {
    title: "사전 참가하고 굿즈 받으세요!",
    image: Gift,
    defaultFrame: 10,
    speed: 0.3,
    desc: "사전 참가하면 풍성한 굿즈를 받을 수 있어요~!",
  },
  {
    title: "DD마켓 참여하고 득템 해보세요!",
    image: Cart,
    defaultFrame: 36,
    desc: "DD마켓에 물건을 올리거나 DD마켓의 물건을 구매해보세요",
  },
  {
    title: "럭키 드로우로 엄청난 상품을...!!",
    image: Confettie,
    defaultFrame: 33,
    desc: "총 5개 세션에 참가하시면 럭키 드로우에 참여 가능합니다!",
  },
];
</script>
<template>
  <div class="flex justify-center items-center">
    <Carousel
      class="w-[80%] max-w-4xl"
      :wrap-around="true"
      :breakpoints="breakpoints"
    >
      <Slide v-for="(item, i) in eventData" :key="i">
        <EventCard
          :eventNumber="i + 1"
          :eventTitle="item.title"
          :eventImage="item.image"
          :eventDefaultFrame="item.defaultFrame"
          :eventSpeed="item.speed"
          :eventDesc="item.desc"
          class="carousel__item"
          >{{ slide }}</EventCard
        >
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>
