import { createApp } from "vue";
import { createPinia } from 'pinia';


import "./style.css";
import App from "./App.vue";
import './tailwind.css';

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.mount("#app");
