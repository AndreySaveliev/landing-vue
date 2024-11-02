import { createRouter, createWebHistory } from "vue-router";
import AuthPage from "./../views/AuthPage.vue";
import ProfilePage from "./../views/ProfilePage.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: AuthPage },
    { path: "/profile", component: ProfilePage },
  ],
});

export default router;
