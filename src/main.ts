import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'uno.css'
import 'virtual:uno.css'

import router from './router'

createApp(App).use(router).mount('#app')
