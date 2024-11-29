import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import MyComponent from './components/MyComponent.vue' // Импорт компонента


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('MyComponent', MyComponent); // Глобальная регистрация компонента

app.mount('#app')


// Удаляем второй экземпляр Vue, он не нужен
// Vue.config.productionTip = false
// new Vue({
//   render: h => h(App),
// }).$mount('#app')
