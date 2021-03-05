<template>
  <div class="AppHeader">
    <todd-parallax
      :urlimg="urlImg"
      :button="$t('learnGame')"
      :started="started"
      v-on:started="start"
    ></todd-parallax>
    <my-bar class="hidden" :decoratorimg="decoratorImg"></my-bar>
    <my-menu></my-menu>
  </div>
</template>

<i18n>
{
  "es": {
    "learnGame": "EMPIEZA EL JUEGO"
  },
  "en": {
    "learnGame": "START THE GAME"
  }
}
</i18n>

<script>
import "@/components/lit/todd-parallax.js";
import "@/components/lit/my-bar.js";
import "@/components/lit/my-menu.js";

export default {
  name: "AppHeader",
  data: () => ({
    urlImg: "/toddmain.png",
    decoratorImg: "/decorator.png",
    started: false,
  }),
  created() {
    window.addEventListener("scroll", this.start);
  },
  destroyed() {
    window.removeEventListener("scroll", this.start);
  },
  methods: {
    start() {
      window.removeEventListener("scroll", this.start);

      this.started = true;

      this.$emit("started", event.target.value);

      setTimeout(() => this.showStarted(), 1500);
    },
    showStarted() {
      let myBar = document.querySelector("my-bar");
      myBar.classList.remove("hidden");
      let toddParallax = document.querySelector("todd-parallax");
      toddParallax.classList.add("hidden");
    },
  },
};
</script>

<style>
.AppHeader {
  height: 100vh;
}
todd-parallax {
  height: 100%;
}
.hidden {
  display: none;
}
</style>
