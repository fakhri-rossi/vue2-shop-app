import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faShoppingCart, faDollarSign } from "@fortawesome/free-solid-svg-icons";

library.add(faHome);
library.add(faShoppingCart);
library.add(faDollarSign);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
