// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')


import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// import ui, {Button} from "../packages"; //导入

const app = createApp(App);
// app.use(ui)
// app.component("btn", Button)
app.mount("#app");