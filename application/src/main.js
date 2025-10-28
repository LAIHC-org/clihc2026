import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { createApp } from 'vue/dist/vue.esm-bundler' //'vue'
import App from './App.vue'
import router from './router'
import i18n from "./i18n"

const app = createApp(App)

app.use(router)
app.use(i18n)
app.mount('#app')