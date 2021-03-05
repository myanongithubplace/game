<template>
  <div id="Presentation">
    <transition name="slide-fade" mode="out-in">
      <div class="play" v-if="!playOn" @click="openPlay">{{$t('play')}}</div>" mode="in-out">
      <play v-if="playOn" :prop-colour-list="propColourList"></play>
    </transition>
    <div class="coloured-section">
      <h2>{{ $t('welcome') }}</h2>
      <div class="select-group">
        <p>{{$t('change')}}</p>
        <select class="language" v-model="$root.$i18n.locale">
          <option value="en">{{$t('en')}}</option>
          <option value="es">{{$t('es')}}</option>
        </select>
      </div>
      <ul class="texts">
        <li class="bold">{{ $t('tease') }}</li>
        <li>{{ $t('what') }}</li>
        <li>{{ $t('what2') }} </li>
        <li>{{ $t('explanation') }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Presentation',
  props: {
    'propColourList': Object
  },
  data: () => ({
    playOn: false
  }),  
  methods: {
    onChange(event) {
      console.log(event.target.value)
    },
    openPlay(){
      this.playOn=true
    }
  },
  components: {
    play: () => import(/* webpackChunkName: "play" */'./Play.vue'),
  }
}
</script>

<i18n>
{
  "es": {
    "play": "¡JUEGA YA!",
    "welcome": "¡Bienvenidos a GetGame!",
    "tease": "¿Crees que tienes juego?",
    "what": "Aquí encontrarás entrenamiento para mejorar tu juego.",
    "what2": "Escoge sabiamente tu tipo de entrenamiento para aprender el máximo.",
    "explanation": "Las instrucciones para cada eentreno en él mismo cuando lo selecciones.",
    "change": "Cambiar idioma",
    "en": "Inglés",
    "es": "Español"
  },
  "en": {
    "play": "PLAY NOW!",
    "welcome": "Welcome to GetGame!",
    "tease": "Do you believe you have game?",
    "what": "Here you'll find training to improve your game.",
    "what2": "Choose wisely your type of training to learn as mush as possible.",
    "explanation": "The instructions for each training are below them when you select it.",
    "change": "Switch language",
    "en": "English",
    "es": "Spanish"
  }
}
</i18n>

<style scoped>
*{
  color: #2e586c;
}
#Presentation{
  max-width: 1024px;
  font-family: 'Roboto',arial,sans-serif;
}
.play{
  width: 180px;/*margin-left depends on this size */
  padding: 16px 32px;
  margin-top: 30px;
  margin-left: calc(50% - 90px);
  text-align: center;

  border: 0.8px solid lightyellow;
  border-radius: 6px;
  background-color: white;
  color: darkolivegreen;

  font-weight: bold;
}
.play:hover{
  border: 0.8px solid black;
  background-color: lightgrey;
}
.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.coloured-section{
  margin: 40px auto;
  padding: 10px 20px;
  max-width: calc(100vw - 40px);
  background-color: #b8e0dc;
}

h2{
  padding-top: 10px;
  text-align: center;
}

.select-group{
  display: inline-block;
  margin: 10px 0 0 0;
  font-weight: bold;
}

.language{
  width: 7em;

  background-color: aliceblue;
  border-style: outset;
  border-radius: 5px;
}
ul {
	position: relative;
	list-style: none;
	margin-left: 0;
	padding-left: 1.2em;
}
ul li:before {
	content: ">>";
  font-weight: initial;
	position: absolute;
	left: 0;
}

.texts{
  display: inline-block;
  width: 100%;
  padding: 20px;
}
.bold{
  font-weight: bold;
}
@media screen and (min-width: 600px) {
  .coloured-section{
    margin: 40px 10%;
  }
  .texts{
    width: 76%;
  }
}

</style>
