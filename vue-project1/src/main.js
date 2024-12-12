import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import MyComponent from './components/MyComponent.vue' // Импорт компонента
import component1 from './components/component1.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('MyComponent', MyComponent); // Глобальная регистрация компонента
app.component('component1', component1);

app.mount('#app')
