import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'vuetify/styles'

const app = createApp(App)

const vuetify = createVuetify({
  components
})

app.use(vuetify)
app.use(router)

app.mount('#app')
