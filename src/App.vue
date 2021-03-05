<template>
  <div class="App" v-bind:class="{ started: isStarted }">
    <app-header v-on:started="start"></app-header>
  </div>
</template>

<i18n>
{
  "es": {
    "presentation": "presentación",
    "learnGame": "¡Aprende juego practicando!"
  },
  "en": {
    "presentation": "presentation",
    "learnGame": "Learn game with practice!"
  }
}
</i18n>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "App",
  data: () => ({
    isStarted: false,
  }),
  methods: {
    start: function() {
      this.isStarted = true;
    },
  },
  components: {
    AppHeader,
    //Tabs
  },
};
</script>

<style>
.App {
  width: 100%;
  height: 100%;
  background-color: black;
}
.bold {
  font-weight: bold;
}
.started {
  background: linear-gradient(270deg, #381b27, #673147, #000000);
  background-size: 400% 400%;

  -webkit-animation: AnimationName 12s ease infinite;
  -moz-animation: AnimationName 12s ease infinite;
  animation: AnimationName 12s ease infinite;
}

@-webkit-keyframes AnimationName {
  0% {
    background-position: 0% 55%;
  }
  50% {
    background-position: 100% 46%;
  }
  100% {
    background-position: 0% 55%;
  }
}
@-moz-keyframes AnimationName {
  0% {
    background-position: 0% 55%;
  }
  50% {
    background-position: 100% 46%;
  }
  100% {
    background-position: 0% 55%;
  }
}
@keyframes AnimationName {
  0% {
    background-position: 0% 55%;
  }
  50% {
    background-position: 100% 46%;
  }
  100% {
    background-position: 0% 55%;
  }
}
</style>
