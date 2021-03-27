import Vue from 'vue'



const app = Vue.createApp({
  template: '<h1>Hello World</h1>',
  data() {
    return {
      picture: 'https://avatars.githubusercontent.com/u/43389539?s=48&v=4'
    }
  }
})
app.mount('#app')
