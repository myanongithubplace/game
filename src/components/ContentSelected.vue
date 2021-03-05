<template>
  <div class="content-selected">
    a
    <the-game v-if="compGame"></the-game>
    <todd-page v-if="compTodd"></todd-page>
    <about-page v-if="compAbout"></about-page>
  </div>
</template>

<script>
export default {
  name: "ContentSelected",
  props: {
    selection: String,
    compGame: Boolean,
    compTodd: Boolean,
    compAbout: Boolean,
  },
  components: {
    theGame: () =>
      import(/* webpackChunkName: "theGame" */ "./lit/pages/the-game.js"),
    toddPage: () =>
      import(/* webpackChunkName: "toddPage" */ "./lit/pages/todd-page.js"),
    aboutPage: () =>
      import(/* webpackChunkName: "aboutPage" */ "./lit/pages/about-page.js"),
  },
  created() {
    this.compTodd = false;
    this.compGame = false;
    this.compAbout = false;
    if (this.selection == "game") this.compGame = true;
    if (this.selection == "todd") this.compTodd = true;
    if (this.selection == "about") this.compAbout = true;
  },
};
</script>

<style scoped>
* {
  color: #2e586c;
  font-family: "Roboto", arial, sans-serif;
}
.intro,
.author {
  margin: 10px 10px;
}
.intro {
  font-size: 16px;
}
.author {
  margin: 20px 10px;
  font-size: 19px;
}
</style>
