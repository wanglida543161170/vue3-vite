import { createApp } from 'vue'
import App from './App.vue'

import './styles/base.css'

// router
import router from "@/router"

// element-plus
import elementPlus from "element-plus";
import "element-plus/dist/index.css";

createApp(App).use(router).use(elementPlus).mount('#app')
