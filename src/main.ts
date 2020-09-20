import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Home from "./components/Home.vue"
import Hello from "./components/Hello.vue"
import { createMemoryHistory, createRouter } from "vue-router"

const history = createMemoryHistory();
const routes = [
    { path: "/", component: Home },
    { path: "/hello", component: Hello }
]
const router = createRouter({
    history,
    routes
})
const app = createApp(App)
app.use(router);
app.mount("#app");
