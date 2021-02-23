import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueHtmlToPaper from 'vue-html-to-paper';



Vue.use(VueHtmlToPaper);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
