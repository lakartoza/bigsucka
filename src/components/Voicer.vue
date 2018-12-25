<template>
  <div class="Voicer">
    <div class="label_side righted">
      <span>{{tagline}}</span>
    </div>

    <div class="button_side">
        <img src="../assets/Central_Section2.png">
      
      <div class="btn_bg">
        <img v-show="!played" class="mybtn" src="../assets/mnm_button.png" @click="playSound(titleUrl)">
        <img v-show="played" class="mybtn" src="../assets/tree.png" @click="playSound(titleUrl)">
      </div>
    </div>

  </div>
</template>

<script>



export default {
  name: 'Voicer',
  props: {
    tagline: String,
    titleUrl: String,
    played: Boolean
  },
  data: {
    played: false
  },
  methods: {
    playSound (sound) {

      if(sound) {
        this.played = true;

        var fileurl = require('../assets/audio/'+sound+'.mp4');
        var audio = new Audio(fileurl);
        audio.play();
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.Voicer {
  display: inline-block;
  margin-bottom: -47px;
  margin-top: -42px;
}

/*PLAY BUTTONS*/
.btn_bg {
  position: relative;
  float: right;
  /*background: #C8C4B7;*/
  width: 60px;
  height: 50px;
  bottom: 70px;
  right: 38px;
}
.mybtn{
  /*outline: none !important;*/
  position: relative;
  width: 48px;
  height: 41px;
}

.righted {
  text-align: right;
}

.label_side {
  position: relative;
  float: right;
  max-width: 149px;
  top: 55px;
  right: 116px;

  font-family: bahaouse;
}

@font-face {
  font-family: britannic;
  src: url(../assets/fonts/Britannic Bold Regular.ttf);
}
@font-face {
  font-family: bahaouse;
  src: url(../assets/fonts/Bauhaus-93_6274.ttf);
}


.shaketh {
  /* Start the shake animation and make the animation last for 0.5 seconds */
  animation: shake 0.5s; 

  /* When the animation is finished, start again */
  animation-iteration-count: 1; 
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
</style>
