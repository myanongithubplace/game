(function(e){function t(t){for(var a,r,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i={app:0},o=[];function c(e){return s.p+"js/"+({presentation:"presentation",play:"play"}[e]||e)+"."+{presentation:"08154ea2",play:"1c6b973c"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={presentation:1,play:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({presentation:"presentation",play:"play"}[e]||e)+"."+{presentation:"83184a03",play:"1f03d88c"}[e]+".css",i=s.p+a,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===i))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===a||l===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],f.parentNode.removeChild(f),n(o)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}i[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/game/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"1a8b":function(e,t,n){"use strict";var a=n("6e02"),r=n.n(a);t["default"]=r.a},"3dfd":function(e,t,n){"use strict";var a,r,i,o,c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"App",class:{started:e.isStarted}},[n("app-header",{on:{started:e.start}})],1)},s=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"AppHeader"},[n("todd-parallax",{attrs:{urlimg:e.urlImg,button:e.$t("learnGame"),started:e.started},on:{started:e.start}}),n("my-bar",{staticClass:"hidden",attrs:{decoratorimg:e.decoratorImg}}),n("my-menu")],1)},l=[],d=n("8785"),f=n("d4ec"),p=n("bee2"),m=n("262e"),b=n("2caf"),h=n("0906"),g=function(e){Object(m["a"])(n,e);var t=Object(b["a"])(n);function n(){var e;return Object(f["a"])(this,n),e=t.call(this),e.started=!1,e}return Object(p["a"])(n,[{key:"render",value:function(){return Object(h["c"])(a||(a=Object(d["a"])(['\n      <div class="todd-parallax ',' ">\n        <img src="','" />\n        <div class="shinny-button glow" @click="','">\n          ',"\n        </div>\n      </div>\n    "])),this.started?"clicked":"nothing",this.urlimg,this.handleClick,this.button)}},{key:"handleClick",value:function(){var e=new CustomEvent("started",{detail:{message:"change the background"}});this.dispatchEvent(e),this.started=!0}}],[{key:"properties",get:function(){return{urlimg:{type:String},button:{type:String},started:{type:Boolean}}}},{key:"styles",get:function(){return[Object(h["b"])(r||(r=Object(d["a"])(['\n        :host {\n          height: 100%;\n          padding: 15% 0;\n\n          font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;\n          font-size: 40px;\n        }\n        .todd-parallax {\n          height: 100%;\n          -webkit-transition: 0.8s ease-in-out;\n          -moz-transition: 0.8s ease-in-out;\n          -o-transition: 0.8s ease-in-out;\n          transition: 0.8s ease-in-out;\n        }\n        img {\n          padding: 25% 0 15%;\n          width: 100%;\n        }\n        .shinny-button {\n          color: white;\n          text-align: center;\n          cursor: -webkit-grab;\n          cursor: grab;\n          -webkit-touch-callout: none;\n          -webkit-user-select: none;\n          -khtml-user-select: none;\n          -moz-user-select: none;\n          -ms-user-select: none;\n          user-select: none;\n        }\n\n        .glow {\n          font-size: 80px;\n          text-align: center;\n          -webkit-animation: glow 0.8s ease-in-out infinite alternate;\n          -moz-animation: glow 0.8s ease-in-out infinite alternate;\n          animation: glow 0.8s ease-in-out infinite alternate;\n        }\n\n        @-webkit-keyframes glow {\n          from {\n            text-shadow: 0 0 10px #ffffffc3, 0 0 20px #ffffffc3,\n              0 0 30px #ff355e, 0 0 40px #ff355e, 0 0 50px #ff355e,\n              0 0 60px #ff355e, 0 0 70px #ff355e;\n          }\n\n          to {\n            text-shadow: 0 0 20px #ffffffc3, 0 0 30px #ff355e, 0 0 40px #ff355e,\n              0 0 50px #ff355e, 0 0 60px #ff355e, 0 0 70px #ff355e,\n              0 0 80px #ff355e;\n          }\n        }\n        /*Clicked is when the start button has been pushed*/\n        .clicked {\n          transform: translate(0px, -100%);\n          transform-origin: 100% 100% 100px;\n          -webkit-transform-origin: 10px;\n          -moz-transform-origin: 10px;\n          -o-transform-origin: 10px;\n        }\n        @media screen and (min-width: 560px) {\n          :host {\n            padding: 0;\n          }\n          img {\n            padding: 0;\n          }\n          .shinny-button {\n            position: absolute;\n            top: 80%;\n            width: 100%;\n            text-align: center;\n          }\n        }\n      '])))]}}]),n}(h["a"]);customElements.define("todd-parallax",g);var v,y,O=function(e){Object(m["a"])(n,e);var t=Object(b["a"])(n);function n(){return Object(f["a"])(this,n),t.call(this)}return Object(p["a"])(n,[{key:"render",value:function(){return Object(h["c"])(i||(i=Object(d["a"])(['\n      <div class="text">',"</div>\n    "])),this.strings[0])}}],[{key:"properties",get:function(){return{string:{type:Array}}}},{key:"styles",get:function(){return[Object(h["b"])(o||(o=Object(d["a"])(["\n        .text {\n          width: 100%;\n          text-align: center;\n\n          opacity: 1;\n          animation: appearlate 2s;\n          animation-timing-function: cubic-bezier(1, 0.01, 0.62, 0.74);\n        }\n        @keyframes appearlate {\n          from {\n            opacity: 0;\n          }\n          to {\n            opacity: 1;\n          }\n        }\n      "])))]}}]),n}(h["a"]);customElements.define("random-text",O);var j,k,x=function(e){Object(m["a"])(n,e);var t=Object(b["a"])(n);function n(){return Object(f["a"])(this,n),t.call(this)}return Object(p["a"])(n,[{key:"render",value:function(){return Object(h["c"])(v||(v=Object(d["a"])(['\n      <div class="decorator"></div>\n    '])))}}],[{key:"properties",get:function(){return{}}},{key:"styles",get:function(){return[Object(h["b"])(y||(y=Object(d["a"])(['\n        .decorator {\n          height: 3.5vh;\n          width: 45%;\n\n          background-size: 10vh;\n          background-image: url("/decorator.png");\n          opacity: 0.685;\n          animation: appearlate 3s;\n          animation-timing-function: cubic-bezier(1, 0.01, 0.62, 0.74);\n\n          margin: auto;\n        }\n        @keyframes appearlate {\n          from {\n            opacity: 0;\n          }\n          to {\n            opacity: 0.685;\n          }\n        }\n      '])))]}}]),n}(h["a"]);customElements.define("bottom-decorator",x);var w,E,_=function(e){Object(m["a"])(n,e);var t=Object(b["a"])(n);function n(){var e;return Object(f["a"])(this,n),e=t.call(this),e.listOfPhrases=["Game is knowing where you are and knowing how to work within it","asad asd asd ddsad as "],e}return Object(p["a"])(n,[{key:"render",value:function(){return Object(h["c"])(j||(j=Object(d["a"])(['\n      <div class="my-bar">\n        <div class="phrases">\n          <div class="current-phrase">\n            <random-text .strings=','></random-text>\n          </div>\n          <bottom-decorator\n            decoratorimg="','"\n          ></bottom-decorator>\n        </div>\n      </div>\n    '])),this.listOfPhrases,this.decoratorimg)}}],[{key:"properties",get:function(){return{decoratorimg:{type:String},listOfPhrases:{type:Array}}}},{key:"styles",get:function(){return[Object(h["b"])(k||(k=Object(d["a"])(['\n        :host {\n          color: #f8eadd;\n          font-size: 24px;\n          width: 100%;\n        }\n        .my-bar {\n          padding-top: 10px;\n        }\n        .phrases {\n          min-height: 6vh;\n          margin: 0 8px;\n        }\n        .current-phrase {\n          display: inline-block;\n          width: 100%;\n          min-height: 5vh;\n          margin-bottom: 10px;\n\n          text-align: center;\n\n          font-family: "Courier New", Courier, monospace;\n        }\n\n        @media screen and (min-width: 560px) {\n          .my-bar {\n            padding-top: 13px;\n          }\n          .phrases {\n            margin: 0 20px;\n          }\n        }\n      '])))]}}]),n}(h["a"]);customElements.define("my-bar",_);var A,S,C=function(e){Object(m["a"])(n,e);var t=Object(b["a"])(n);function n(){return Object(f["a"])(this,n),t.call(this)}return Object(p["a"])(n,[{key:"render",value:function(){return Object(h["c"])(w||(w=Object(d["a"])(["\n      <div>holabouta</div>\n    "])))}}],[{key:"properties",get:function(){return{}}},{key:"styles",get:function(){return[Object(h["b"])(E||(E=Object(d["a"])(["\n        :host {\n        }\n      "])))]}}]),n}(h["a"]);customElements.define("about-page",C);var P,T,z=function(e){Object(m["a"])(n,e);var t=Object(b["a"])(n);function n(){return Object(f["a"])(this,n),t.call(this)}return Object(p["a"])(n,[{key:"render",value:function(){return Object(h["c"])(A||(A=Object(d["a"])(["\n      <div>hol the game a</div>\n    "])))}}],[{key:"properties",get:function(){return{}}},{key:"styles",get:function(){return[Object(h["b"])(S||(S=Object(d["a"])(["\n        :host {\n        }\n      "])))]}}]),n}(h["a"]);customElements.define("the-game",z);var L,G,I,N,H,M=function(e){Object(m["a"])(n,e);var t=Object(b["a"])(n);function n(){return Object(f["a"])(this,n),t.call(this)}return Object(p["a"])(n,[{key:"render",value:function(){return Object(h["c"])(P||(P=Object(d["a"])(["\n      <div>hola todd</div>\n    "])))}}],[{key:"properties",get:function(){return{}}},{key:"styles",get:function(){return[Object(h["b"])(T||(T=Object(d["a"])(["\n        :host {\n        }\n      "])))]}}]),n}(h["a"]);customElements.define("todd-page",M);var B,$,q=function(e){Object(m["a"])(n,e);var t=Object(b["a"])(n);function n(){var e;return Object(f["a"])(this,n),e=t.call(this),e.selection="",e}return Object(p["a"])(n,[{key:"render",value:function(){var e=function(){return Object(h["c"])(L||(L=Object(d["a"])(["\n        <the-game></the-game>\n      "])))},t=function(){return Object(h["c"])(G||(G=Object(d["a"])(["\n        <todd-page></todd-page>\n      "])))},n=function(){return Object(h["c"])(I||(I=Object(d["a"])(["\n        <about-page></about-page>\n      "])))};return Object(h["c"])(N||(N=Object(d["a"])(['\n      <div class="content-selected">\n        a',"a ","\n        ","\n        ","\n      </div>\n    "])),this.selection,this.compGame()?e():"",this.compTodd()?t():"",this.compAbout()?n():"")}},{key:"compGame",value:function(){return"game"==this.selection}},{key:"compTodd",value:function(){return"todd"==this.selection}},{key:"compAbout",value:function(){return"about"==this.selection}}],[{key:"properties",get:function(){return{selection:{type:String}}}},{key:"styles",get:function(){return[Object(h["b"])(H||(H=Object(d["a"])([""])))]}}]),n}(h["a"]);customElements.define("content-selected",q);var J=function(e){Object(m["a"])(n,e);var t=Object(b["a"])(n);function n(){var e;return Object(f["a"])(this,n),e=t.call(this),e.selected="game",e}return Object(p["a"])(n,[{key:"render",value:function(){var e=this;return Object(h["c"])(B||(B=Object(d["a"])(['\n      <div class="menu">\n        <nav class="todd">\n          <a @click="','">todd</a>\n        </nav>\n        <nav class="game">\n          <a @click="','">game</a>\n        </nav>\n        <nav class="about">\n          <a @click="','">about</a>\n        </nav>\n      </div>\n      <content-selected selection=',"></content-selected>\n    "])),(function(){return e.changePage("todd")}),(function(){return e.changePage("game")}),(function(){return e.changePage("about")}),this.selected)}},{key:"changePage",value:function(e){e.localeCompare(this.selected)&&(this.selected=e)}}],[{key:"properties",get:function(){return{selected:{type:String}}}},{key:"styles",get:function(){return[Object(h["b"])($||($=Object(d["a"])(['\n        .menu {\n          width: 100%;\n          display: grid;\n          grid-template-columns: 1fr 1fr 1fr;\n          grid-template-rows: 10vh;\n          gap: 1px 1px;\n          grid-template-areas: ". . .";\n          opacity: 1;\n          animation: appearlate 6s;\n          animation-timing-function: cubic-bezier(1, -0.93, 0.98, 0.44);\n        }\n        @keyframes appearlate {\n          from {\n            opacity: 0;\n          }\n          to {\n            opacity: 1;\n          }\n        }\n        .menu nav {\n          color: #f8eadd;\n          font-size: 24px;\n          padding: 10px 10px 0;\n        }\n        .menu nav:first-child {\n          padding: 10px 10px 10px 20px;\n        }\n      '])))]}}]),n}(h["a"]);customElements.define("my-menu",J);var D={name:"AppHeader",data:function(){return{urlImg:"/game/toddmain.png",decoratorImg:"/game/decorator.png",started:!1}},created:function(){window.addEventListener("scroll",this.start)},destroyed:function(){window.removeEventListener("scroll",this.start)},methods:{start:function(){var e=this;window.removeEventListener("scroll",this.start),this.started=!0,this.$emit("started",event.target.value),setTimeout((function(){return e.showStarted()}),1500)},showStarted:function(){var e=document.querySelector("my-bar");e.classList.remove("hidden");var t=document.querySelector("todd-parallax");t.classList.add("hidden")}}},U=D,F=(n("de1f"),n("2877")),K=n("5259"),R=Object(F["a"])(U,u,l,!1,null,null,null);"function"===typeof K["default"]&&Object(K["default"])(R);var Z=R.exports,Q={name:"App",data:function(){return{isStarted:!1}},methods:{start:function(){this.isStarted=!0}},components:{AppHeader:Z}},V=Q,W=(n("034f"),n("1a8b")),X=Object(F["a"])(V,c,s,!1,null,null,null);"function"===typeof W["default"]&&Object(W["default"])(X);t["a"]=X.exports},"3e36":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"es":{"learnGame":"EMPIEZA EL JUEGO"},"en":{"learnGame":"START THE GAME"}}'),delete e.options._Ctor}},"402c":function(e,t,n){"use strict";var a=n("2b0e"),r=n("f309");a["a"].use(r["a"]),t["a"]=new r["a"]({})},5259:function(e,t,n){"use strict";var a=n("3e36"),r=n.n(a);t["default"]=r.a},"56d7":function(e,t,n){"use strict";n.r(t),function(e){n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("d3b7"),n("3ca3"),n("ddb0");var t=n("2b0e"),a=n("8c4f"),r=n("a925"),i=n("402c"),o=n("119b"),c=n("3dfd");n("b089");t["a"].config.productionTip=!1,t["a"].use(r["a"]),t["a"].use(a["a"]),t["a"].use(n("395c")),t["a"].use(o["a"].AutoAdsense,{adClient:"ca-pub-6657050088245428"});var s=new r["a"]({locale:"en"}),u=[{name:"Index",path:"/game",component:function(){return n.e("presentation").then(n.bind(null,"3599"))}}],l=new a["a"]({mode:"history",base:e,routes:u});new t["a"]({i18n:s,router:l,vuetify:i["a"],render:function(e){return e(c["a"])}}).$mount("#app")}.call(this,"/")},"6e02":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"es":{"presentation":"presentación","learnGame":"¡Aprende juego practicando!"},"en":{"presentation":"presentation","learnGame":"Learn game with practice!"}}'),delete e.options._Ctor}},"85ec":function(e,t,n){},"915e":function(e,t,n){},b089:function(e,t,n){},de1f:function(e,t,n){"use strict";n("915e")}});
//# sourceMappingURL=app.98974505.js.map