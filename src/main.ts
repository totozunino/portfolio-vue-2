import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueNotification from "vue-notification";

Vue.config.productionTip = false;

Vue.use(VueNotification);

new Vue({
  router,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
