import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/custom.scss";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGauge,
  faChartLine,
  faChartColumn,
  faChartArea,
  faChartPie,
  faBars,
  faEnvelope,
  faBell,
  faHashtag,
  faTimes,
  faMapMarkerAlt,
  faPhoneAlt,
  faPenToSquare,
  faTrash,
  faRightFromBracket,
  // fafacebook,
} from "@fortawesome/free-solid-svg-icons";

import vuetify from "./plugins/vuetify";
library.add(
  faGauge,
  faChartLine,
  faChartColumn,
  faChartArea,
  faChartPie,
  faBars,
  faEnvelope,
  faBell,
  faHashtag,
  faTimes,
  faMapMarkerAlt,
  faPhoneAlt,
  faPenToSquare,
  faTrash,
  faRightFromBracket
);
Vue.config.productionTip = false;

let app = "";

const auth = getAuth();
onAuthStateChanged(auth, () => {
  //let objuser = user;
  if (!app) {
    new Vue({
      router,
      store,
      vuetify,
      render: (h) => h(App),
    }).$mount("#app");
  }
});

// fb.auth().onAuthStateChanged(function(user) {

//   if(!app){
//     new Vue({
//       router,
//       store,
//       vuetify,
//       render: h => h(App)
//     }).$mount("#app");

//   }

// });

// new Vue({
//   router,
//   store,
//   vuetify,

//   render: (h) => h(App),
// }).$mount("#app");
