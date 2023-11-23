import { createRouter, createWebHistory } from "vue-router";
import CountryView from "../views/CountriesView.vue";
import CountryDetails from "../views/CountryDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: CountryView,
  },
  {
    path: "/details/:name",
    name: "country",
    component: CountryDetails,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
