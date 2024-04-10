import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faShoppingCart, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import PageProducts from "./components/PageProducts.vue";
import PageCheckout from "./components/PageCheckout.vue";

library.add(faHome);
library.add(faShoppingCart);
library.add(faDollarSign);

Vue.config.productionTip = false;

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: "*",
      component: PageProducts
    },
    {
      path: "/checkout",
      component: PageCheckout
    }
  ]
});

new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
