<template>
  <div id="ShowClue">
    <button class="myButton" @click="triggerClue">{{$t('clue')}}</button>
    <transition name="fade" mode="out-in">
      <p class="clue" v-if="showClue" >{{propClue}}</p>
    </transition>
  </div>
</template>


<i18n>
{
  "es": {
    "clue": "Dame pista"
  },
  "en": {
    "clue": "Gimme clue"
  }
}
</i18n>

<script>
export default {
  name: 'ShowClue',
  props: {
      'propClue': String
  },
  methods: {
    triggerClue(){
      this.showClue=true;
      setTimeout(() => this.showClue=false, 1500)
    }
  },
  data:()=>({
    showClue: false
  })
}
</script>

<style scoped>
.myButton {
	box-shadow: 0px 10px 14px -7px #3e7327;
	background:linear-gradient(to bottom, #77b55a 5%, #72b352 100%);
	background-color: rgb(170, 224, 188);
	border-radius:4px;
	border:1px solid #4b8f29;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:13px;
	font-weight:bold;
	padding:6px 12px;
	text-decoration:none;
	text-shadow:0px 1px 0px #5b8a3c;
}
.myButton:active {
	position:relative;
	top:1px;
}
.clue{
  display: block;
  max-width: 70px;
  font-size: 12px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
