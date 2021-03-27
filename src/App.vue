<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Hello! Welcome to my site!\n My name is Drew Friend, I'm a programmer who is versed in a large variety of different
    languages, frameworks, and technologies. I have worked alongside teammates and alone on a variety of different projects. Including but not limited to: Websites, Video Games, Bots, and general use programs."/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
