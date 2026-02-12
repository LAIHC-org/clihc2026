import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { createApp } from 'vue/dist/vue.esm-bundler' //'vue'
import App from './App.vue'
import router from './router'
import i18n from "./i18n"
import BreadcrumbsNav from './components/BreadcrumbsNav.vue'

const app = createApp(App)

app.use(router)
app.use(i18n)
app.component('BreadcrumbsNav', BreadcrumbsNav)
app.mount('#app')
