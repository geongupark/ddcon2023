import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {LottieAnimation} from 'lottie-web-vue'
import VueCookies from "vue-cookies";
createApp(App).use(LottieAnimation).use(VueCookies).mount('#app')
