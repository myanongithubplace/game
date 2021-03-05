<template>
  <div id="Play">
    <div>
      <counter class="counter" :prop-correct-answers="correctAnswers"></counter>
      <span class="icon-sound" @click="switchSound"></span>
      <audio ref="correct" src="~@/assets/audio/Correct-answer.mp3"></audio>
      <audio ref="fail" src="~@/assets/audio/Fail-sound.mp3"></audio>
    </div>
    <change-game class="change-game" @change="changeComp"></change-game>
  </div>
</template>


<script>

export default {
  name: 'Play',
  props: {
    'propGameList': Object
  },
  data: () => ({
    soundEnabled: true,
    gameSelected: 'ColourNs',
    compName: false, 
    compColour: true,
    componentKeyNC: 0,
    componentKeyCN: 0,
    correctAnswers: 0
  }),  
  methods: {
    changeComp(gameEmitted){
        if(gameEmitted == 'NameCs'){
          this.gameSelected == 'NameCs'
          this.compColour = false
          this.compName = true
        }else{
          this.gameSelected == 'ColourNs'
          this.compName = false
          this.compColour = true
      }
    },
    forceRerenderNC() {
      this.compName = false
      this.$nextTick(() => {
        this.compName = true
      });
    },
    forceRerenderCN() {
      this.compColour = false
      this.$nextTick(() => {
        this.compColour = true
      });
    },
    switchSound(){
      let soundIcon= document.querySelector('span.icon-sound')
      if(soundIcon.classList.contains("icon-mute")){
        soundIcon.classList.remove("icon-mute")
        this.soundEnabled = true
      }else{
        soundIcon.classList.add("icon-mute")
        this.soundEnabled = false
      }
    },
    correctNC(correct) {
      this.correctAnswers = this.correctAnswers + 1
      if(this.soundEnabled)
        this.$refs.correct.play() 

      let corrElem= document.querySelectorAll(`#NameColours p[attr-id=${correct}]`)[1]
      corrElem.classList.add("correct")
      
      setTimeout(() => this.forceRerenderNC(), 1500)
    },
    correctCN(correct) {
      this.correctAnswers = this.correctAnswers + 1
      if(this.soundEnabled)
        this.$refs.correct.play() 

      let corrElem= document.querySelectorAll(`#ColourNames p[attr-id=${correct}]`)[1]
      corrElem.classList.add("correct")
      
      setTimeout(() => this.forceRerenderCN(), 1500)
    },
    failNC(both) {
      if(this.soundEnabled)
        this.$refs.fail.play() 
      let {correct,fail} = both
      let corrElem= document.querySelectorAll(`#NameColours p[attr-id=${correct}]`)[1]
      let failElem= document.querySelector(`#NameColours p[attr-id=${fail}]`)
      corrElem.classList.add("correct")
      failElem.classList.add("fail")
      this.correctAnswers = 0

      setTimeout(() => this.forceRerenderNC(), 1500)
    },
    failCN(both) {
      if(this.soundEnabled)
        this.$refs.fail.play() 
      let {correct,fail} = both
      let corrElem= document.querySelectorAll(`#ColourNames p[attr-id=${correct}]`)[1]
      let failElem= document.querySelector(`#ColourNames p[attr-id=${fail}]`)
      corrElem.classList.add("correct")
      failElem.classList.add("fail")
      this.correctAnswers = 0
      
      setTimeout(() => this.forceRerenderCN(), 1500)
    }
  },
  components:{
  }
}
</script>

<style scoped>
#Play{
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 0.1fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
.icon-sound{
  display: inline-block;
  width: 16px;
  height: 14px;
  margin: 8px 5px 0 15px;
  
  background-image: url("~@/assets/volumen.png");
  cursor: pointer;
}
.icon-mute{
  display: inline-block;
  width: 14px;
  height: 14px;
  margin: 8px 5px 0 15px;
  
  background-image: url("~@/assets/mudo.png");
  cursor: pointer;
  background-size: 14px;
}
.game-itself{
  grid-column-start: span 3;
}
.appear-enter-active {
  transition: all .45s cubic-bezier(0,.99,.44,1.28);
}
.appear-leave-active {
  transition: all .45s cubic-bezier(0,.99,.44,1.28);
}
.appear-enter, .appear-leave-to
/* .appear-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

@media screen and (min-width: 600px) {
  #Play{
    width: 100%;
  }
}

</style>
