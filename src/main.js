// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from'./store'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2'

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/"

import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App)

app.use(router)
app.use(store)
app.use(VueSweetalert2)

app.mount('#app')
