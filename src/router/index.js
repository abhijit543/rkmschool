import { createRouter, createWebHistory } from "vue-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "vue-bulma-accordion/dist/main.css";
import "vue-bulma-accordion/dist/main.js";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ResultsView from "../views/ResultsView.vue";
import HostelView from "../views/HostelView.vue";
import AdmissionView from "../views/AdmissionView.vue";
import GalleryView from "../views/GalleryView.vue";
import AdministrationView from "../views/AdministrationView.vue";
import FileNotFound from "../views/FileNotFound.vue";
import ContactView from "../views/ContactView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/results",
    name: "Results",
    component: ResultsView,
  },
  {
    path: "/hostel",
    name: "Hostel",
    component: HostelView,
  },
  {
    path: "/admission",
    name: "admission",
    component: AdmissionView,
  },
  {
    path: "/gallery",
    name: "gallery",
    component: GalleryView,
  },
  {
    path: "/administration",
    name: "administration",
    component: AdministrationView,
  },
  {
    path: "/contact-us",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/:catchAll(.*)",
    name: "FileNotFound",
    component: FileNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
