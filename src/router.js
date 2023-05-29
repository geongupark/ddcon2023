import { createRouter, createWebHistory } from 'vue-router';
import SessionSection from './components/SessionSection.vue';
import EventSection from './components/EventSection.vue';
import QnaSection from './components/QnaSection.vue';

const routes = [
  { path: '/'},
  { path: '/sessions', component: SessionSection },
  { path: '/event', component: EventSection },
  { path: '/qna', component: QnaSection},
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;