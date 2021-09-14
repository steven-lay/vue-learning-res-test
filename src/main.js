import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";
import "virtual:windi.css";

createApp(App).use(router).use(Vuex).mount("#app");
