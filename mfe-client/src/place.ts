import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

export default function place(el: string) {
  console.log("placing host!");
  createApp(App).mount(el);
}
