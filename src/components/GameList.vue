<template>
  <div id="GameList">
      <div class="header"></div>
      <div class="header">{{ $t('name') }}</div>
      <div class="header">{{ $t('colour') }}</div>
      <div class="header">{{ $t('source') }}</div>
      <template v-for="color in propColourList"  >
        <template v-if="color['available_in_'+$i18n.locale]"  >
          <div :key="'space_'+color.codes"></div>
          <div :key="'text_'+color.codes">{{color[$i18n.locale]}}</div>
          <div :key="'color_'+color.codes" class="colorDisplay tooltip" v-bind:style="{ backgroundColor: '#'+color.codes[0]}">
            <span class="tooltiptext" v-bind:style="{ backgroundColor: '#'+color.codes[0]}">{{color[$i18n.locale+'_tip']}}</span>
          </div>
          <div :key="'_'+color.codes"><a :href="color.source" target="_blank">{{ $t('goTo') }}</a></div>
        </template>    
      </template>    
  </div>
</template>


<i18n>
{
  "es": {
    "name": "Nombre",
    "colour": "Color",
    "source": "Fuente",
    "goTo": "Ir a"
  },
  "en": {
    "name": "Name",
    "colour": "Color",
    "source": "Source",
    "goTo": "Go to"
  }
}
</i18n>

<script>
export default {
  name: 'ColorList',
  props: {
      'propColourList': Object
  }
}
</script>

<style scoped>
#ColorList{
    width: 80%;
    margin: 10px 0 80px;
    padding-left: 20px;
    display: grid;
    grid-template-columns: 1fr 4fr 8fr 8fr;
    grid-auto-rows: 40px;
    grid-gap: 10px;
}
.header{
  font-weight: bold;
}
.colorBox{
    display: flex;
}
.colorDisplay{
    height: 25px;
    width: 100%;
    border: 2px solid white;
}
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 180px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
 
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}
@media screen and (min-width: 600px) {
  #ColorList{
    max-width: 800px;
  }
}
</style>
