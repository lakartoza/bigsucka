<template>
  <div>
    
    <div class="intro">
      <h1>Bigsucka Phrase Remote</h1>
    </div>
 
    <div>
      <div class="clickerContainer">
        <img class="Top_iClicker" src="../assets/Top_iClicker.png">
        <Voicer titleUrl='christmas' tagline="I love it!"/>
        <Voicer titleUrl='trippin' tagline="Trippin"/>
        <Voicer titleUrl='freezing' tagline="f-f-f-freezin"/>
        <Voicer titleUrl='mcallister' tagline="Billy Joe McAllister"/>
        <Voicer titleUrl='true' tagline="Dat be true"/>
        <Voicer titleUrl='crackadog' tagline="Crackadawg"/>
        <Voicer titleUrl='knocking' tagline="Somebody Knocking"/>
        <Voicer titleUrl='plane' tagline="Emily and Her Dad"/>
        <Voicer titleUrl='winchester' tagline="Winchester Cathdr."/>
        <Voicer titleUrl='dunno' tagline="Sucka"/>
        <Voicer titleUrl='lilsucka' tagline="Lil-Sucka"/>
        <img class="Footer_iClicker" src="../assets/Footer_iClicker.png">
      </div>


    </div>
  </div>

</template>


<script>



import Voicer from './Voicer.vue'


export default {
  name: 'HelloWorld',
  components: {
    Voicer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.clickerContainer {
  width: min-content;
  position: relative;
  margin-left: auto;
  margin-right: auto;
}

.Top_iClicker {
  margin-bottom: 7px;
  margin-left: 6px;
}

.Footer_iClicker {
  margin-top: -14px;
  margin-right: 3px;

}



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
