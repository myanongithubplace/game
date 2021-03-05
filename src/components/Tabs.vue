<template>
  <div id="Tabs">
    <v-tabs color="#2E6C61" background-color="#543D3F">
      <v-tab to="/game">{{ $t('presentation') }}</v-tab>
    </v-tabs>
    <router-view></router-view>
  </div>
</template>

<i18n>
{
  "es": {
    "presentation": "presentación",
    "games": "Juegos",
    "play" : "Empieza",
    "about" : "Acerca"
  },
  "en": {
    "presentation": "presentation",
    "games": "Games",
    "play": "Start",
    "about" : "About"
  }
}
</i18n>

<script>
//import compPrueba from ''compPrueba
export default {
  name: "Tabs"
};
</script>

<style>
h1 {
  margin: 30px 0;
  color: #2e6c61;
  text-align: center;
}
.v-slide-group__wrapper {
  font-family: "Roboto", arial, sans-serif;
}
.v-slide-group__prev:not(.a):not(.a):not(.a):not(.a):not(.a):not(.a) {
  display: none;
}
</style>
