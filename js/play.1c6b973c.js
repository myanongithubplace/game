(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["play"],{4916:function(e,t,c){e.exports=c.p+"media/Correct-answer.84701c93.mp3"},"6f29":function(e,t,c){"use strict";c.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"Play"}},[r("div",[r("counter",{staticClass:"counter",attrs:{"prop-correct-answers":e.correctAnswers}}),r("span",{staticClass:"icon-sound",on:{click:e.switchSound}}),r("audio",{ref:"correct",attrs:{src:c("4916")}}),r("audio",{ref:"fail",attrs:{src:c("7723")}})],1),r("change-game",{staticClass:"change-game",on:{change:e.changeComp}})],1)},o=[],s={name:"Play",props:{propGameList:Object},data:function(){return{soundEnabled:!0,gameSelected:"ColourNs",compName:!1,compColour:!0,componentKeyNC:0,componentKeyCN:0,correctAnswers:0}},methods:{changeComp:function(e){"NameCs"==e?(this.gameSelected,this.compColour=!1,this.compName=!0):(this.gameSelected,this.compName=!1,this.compColour=!0)},forceRerenderNC:function(){var e=this;this.compName=!1,this.$nextTick((function(){e.compName=!0}))},forceRerenderCN:function(){var e=this;this.compColour=!1,this.$nextTick((function(){e.compColour=!0}))},switchSound:function(){var e=document.querySelector("span.icon-sound");e.classList.contains("icon-mute")?(e.classList.remove("icon-mute"),this.soundEnabled=!0):(e.classList.add("icon-mute"),this.soundEnabled=!1)},correctNC:function(e){var t=this;this.correctAnswers=this.correctAnswers+1,this.soundEnabled&&this.$refs.correct.play();var c=document.querySelectorAll("#NameColours p[attr-id=".concat(e,"]"))[1];c.classList.add("correct"),setTimeout((function(){return t.forceRerenderNC()}),1500)},correctCN:function(e){var t=this;this.correctAnswers=this.correctAnswers+1,this.soundEnabled&&this.$refs.correct.play();var c=document.querySelectorAll("#ColourNames p[attr-id=".concat(e,"]"))[1];c.classList.add("correct"),setTimeout((function(){return t.forceRerenderCN()}),1500)},failNC:function(e){var t=this;this.soundEnabled&&this.$refs.fail.play();var c=e.correct,r=e.fail,o=document.querySelectorAll("#NameColours p[attr-id=".concat(c,"]"))[1],s=document.querySelector("#NameColours p[attr-id=".concat(r,"]"));o.classList.add("correct"),s.classList.add("fail"),this.correctAnswers=0,setTimeout((function(){return t.forceRerenderNC()}),1500)},failCN:function(e){var t=this;this.soundEnabled&&this.$refs.fail.play();var c=e.correct,r=e.fail,o=document.querySelectorAll("#ColourNames p[attr-id=".concat(c,"]"))[1],s=document.querySelector("#ColourNames p[attr-id=".concat(r,"]"));o.classList.add("correct"),s.classList.add("fail"),this.correctAnswers=0,setTimeout((function(){return t.forceRerenderCN()}),1500)}},components:{}},n=s,a=(c("ded0"),c("2877")),i=Object(a["a"])(n,r,o,!1,null,"50926fac",null);t["default"]=i.exports},7723:function(e,t,c){e.exports=c.p+"media/Fail-sound.1613975e.mp3"},bed9:function(e,t,c){},ded0:function(e,t,c){"use strict";c("bed9")}}]);
//# sourceMappingURL=play.1c6b973c.js.map