import { createApp } from "vue"
import App from './App.vue'


const app = createApp({
  components: { App },
  template: '<App/>',
  data() {
    return {
      picture: 'https://avatars.githubusercontent.com/u/43389539?s=48&v=4'
    }
  }
})
app.mount('#app')
