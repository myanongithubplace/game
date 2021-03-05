import Vue from 'vue'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import vuetify from './plugins/vuetify'
import Ads from 'vue-google-adsense'

import App from './App.vue'


Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(VueRouter)
Vue.use(require('vue-script2'))
Vue.use(Ads.AutoAdsense, { adClient: 'ca-pub-6657050088245428' })
//Vue.use(Ads.Adsense)
//Vue.use(Ads.InArticleAdsense)
//Vue.use(Ads.InFeedAdsense)

const i18n = new VueI18n({
    locale: 'en',
})

//import gamesList from './assets/games.js';


const routes = [
    { name: 'Index', path: '/game', component: ()=> import(/* webpackChunkName: "presentation" */'./components/Presentation.vue')},
]


const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes
})

import "@/assets/typos.css"

new Vue({
    i18n,
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')