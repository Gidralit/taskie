import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueMaskDirective } from 'v-mask'

import '@/app/providers'

import App from './App.vue'
import { router } from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use('mask', VueMaskDirective.bind)

app.mount('#app')
