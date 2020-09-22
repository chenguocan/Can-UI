import {createMemoryHistory, createRouter, createWebHashHistory} from 'vue-router';
import Home from "../views/Home.vue"
import Doc from "../views/Doc.vue"
import Button from "../components/ButtonDemo.js"
import Switch from "../components/SwitchDemo.js"
import Dialog from "../components/DialogDemo.js"
import Tabs from "../components/TabsDemo.js"
const history = createWebHashHistory();
const routes = [
    { path: "/", component: Home },
    { path:"/doc",component: Doc,
        children:[
            {
                path:'',component:Button,
            },
            {
                path:'button',component:Button,
            },
            {
                path:'switch',component:Switch,
            },
            {
                path:'dialog',component:Dialog,
            },
            {
                path:'tabs',component:Tabs,
            },
            ]
    },
]
const router = createRouter({
    history,
    routes
})
export default router