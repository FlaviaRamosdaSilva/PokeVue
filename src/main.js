import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ZingChartVue from '../src/components/ZingChart.vue';


const app = createApp(App)

app.use(router)

app.component('ZingChartVue', ZingChartVue);

app.mount('#app')

