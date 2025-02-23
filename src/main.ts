import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { FaFlag, RiZhihuFill } from 'oh-vue-icons/icons'
import { GiCoffeePot } from 'oh-vue-icons/icons'

addIcons(FaFlag, GiCoffeePot)

const app = createApp(App)
app.use(createPinia())
app.use(router)

app.component('v-icon', OhVueIcon)
app.mount('#app')
