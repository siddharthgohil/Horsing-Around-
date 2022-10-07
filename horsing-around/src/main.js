import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Chart from 'chart.js/auto'
import VueChartKick from "vue-chartkick";

const app = createApp(App)
  .use(router)
  .use(VueChartKick, { adapter: Chart })
app.mount('#app')