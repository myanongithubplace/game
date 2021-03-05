<template>
  <div id="Author">
    <span>{{$t('author')}}:</span>
    <div class="bold" v-on:click="openTwitter()">
      <span class="icon-twitter"></span>@alex_vkcr
    </div>
  </div>
</template>

<i18n>

{
  "es": {
    "author": "Autor"
  },
  "en": {
    "author": "Author"
  }
}
</i18n>

<script>
export default {
  name: 'Author',
  methods: {
    openTwitter() {
      window.open("https://www.twitter.com/alex_vkcr");
    }
  }
}
</script>

<style scoped>
#Author{
  max-width: 600px;
}
.icon-twitter{
  display: inline-block;
  width: 50px;
  height: 50px;
  
  vertical-align: middle;
  
  background-image: url("~@/assets/twitter.png");
  background-repeat: no-repeat;
  background-size: 50px;
}
.bold{
  display: inline-block;
  font-weight: bold;
}
@media screen and (min-width: 600px) {
  #Author{
    margin: 10px 0 0 40px;
  }
}
</style>
