import { createApp } from 'vue';
import App from './App.vue'
import router from './router';
import VueKinesis from "vue-kinesis";
import 'normalize.css';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(router).use(VueKinesis).mount('#app')
