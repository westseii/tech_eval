import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "normalize.css/normalize.css";
import "./assets/main.css";

const app = createApp(App);
app.use(router);
// root endpoint for the server/database; local
app.provide("api", import.meta.env.VITE_API_ADDRESS);

app.mount("#app");
