<template>
  <div id="app">
    <HelloWorld />
    <p>
      From those who love you most,
    </p>
    <img id="signature" alt="lovely pic" src="./assets/girl.jpg">
  </div>
</template>


<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;

  background-image: url("./assets/sleds.png");
  background-repeat: repeat;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
}

#signature {
  width: 100%
}

</style>
