<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    
    <h2>My name is Drew Friend, I am a intuitive programmer who is well versed in a variety of different languages, frameworks, and technologies.</h2>
    <h3>My resume</h3>
    <ul>
      <a href="https://drive.google.com/file/d/1X1s5CcLsp97qZ6UzYkAeEnE1sf_bs9wH/view?usp=sharing" target="_blank" rel="noopener">Open here!</a>
      
    </ul>
    <h3>Social Media</h3>
    <ul>
      <li><a href="https://www.linkedin.com/in/drew-friend/" target="_blank" rel="noopener">LinkedIn</a></li>
    </ul>
    <h3>Some of my Projects</h3>
    <ul>
      <h3>EVE</h3>
      <li><a href="https://github.com/Dafriend9912/newEve" target="_blank" rel="noopener"><img alt="EVE" src="https://raw.githubusercontent.com/Dafriend9912/newEve/Prototype1/Eve/Assets/Art/Latest%20art%20file/background/IxD%20menu.png" contain height = "125" width = "125" ></a></li>
      <h3>Grading Simulator</h3>
      <li><a href="https://github.com/Dafriend9912/292-WI20-AbrahamArthurDrew" target="_blank" rel="noopener"><img alt="Grading Simulator" src="https://raw.githubusercontent.com/Dafriend9912/292-WI20-AbrahamArthurDrew/FinalBuild/CS292-Template/Assets/Art/GameplayBackground.jpeg" contain height = "125" width = "125" ></a></li>
      <h3>AOA DND-Like Discord bot</h3>
      <li><a href="https://github.com/Dafriend9912/AOADiscordBot" target="_blank" rel="noopener"><img alt="AOA" src="//cdn.discordapp.com/avatars/642964479474401290/67da001b902c79be04fefd9f63695ae9.png?size=256" contain height = "125" width = "125" ></a></li>
      
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
