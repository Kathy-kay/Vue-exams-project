import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ReposView from "../views/ReposView.vue";
import ErrorView from "../views/ErrorView.vue";
import RepoDetails from "../components/RepoDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/repos",
      name: "repos",
      component: ReposView,
    },
    {
      path: "/repos/:repoName",
      name: "RepoDetails",
      component: RepoDetails,
    },
    {
      path: "/:pathMatch(.*)",
      name: "error",
      component: ErrorView,
    },
  ],
});

export default router;
