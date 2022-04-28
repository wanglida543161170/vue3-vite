import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import './styles/base.css'

// router
import router from "@/router"
app.use(router)

// element-plus
import elementPlus from "element-plus"
import "element-plus/dist/index.css"
app.use(elementPlus)

import VueGridLayout from "vue-grid-layout"
app.use(VueGridLayout)

app.mount('#app')
