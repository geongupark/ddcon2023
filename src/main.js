import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueKinesis from "vue-kinesis";
import {LottieAnimation} from "lottie-web-vue";

createApp(App).use(VueKinesis).component('LottieAnimation',LottieAnimation).mount('#app')
