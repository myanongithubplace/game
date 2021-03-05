<template>
  <div id="ChangeGame">
    <span>{{$t('exclamationStart')}}{{$t('changeGame')}}</span>
    <select class="select-game" v-model="gameSelected" @change="changeComp($event)">
        <option value="NameCs">{{$t('NameCs')}}</option>
        <option value="ColourNs">{{$t('ColourNs')}}</option>
    </select>
  </div>
</template>


<i18n>
{
  "es": {
    "exclamationStart": "¡",
    "changeGame": "Cambia de juego!",
    "NameCs": "Escoge el color",
    "ColourNs": "Escoge nombre del color"
  },
  "en": {
    "exclamationStart": " ",
    "changeGame": "Change the game!",
    "NameCs": "Pick the color",
    "ColourNs": "Pick colour's name"
  }
}
</i18n>

<script>
export default {
  name: 'ChangeGame',
  methods: {
    changeComp(event){
      this.$emit('change',event.target.value)
    }
  },
  data: ()=> ({
    gameSelected: 'ColourNs'
  })
}
</script>

<style scoped>
#ChangeGame{
  font-family: 'Google Sans',sans-serif;
  font-size: 12px;
  
  margin-right: 3vw;

  border-radius: 3px;
}
.select-game{    
  display: block;
  max-width: 100%;
  z-index: 2;

  background-color: aliceblue;
  border-style: outset;
  border-radius: 5px;
}
@media screen and (min-width: 600px) {
  #ChangeGame{
    margin: 10px 0 0 40px;
  }
}
</style>
