(function(t){function e(e){for(var r,o,c=e[0],l=e[1],s=e[2],u=0,f=[];u<c.length;u++)o=c[u],i[o]&&f.push(i[o][0]),i[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);p&&p(e);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var l=n[c];0!==i[l]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/bigsucka/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var p=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),i=n.n(r);i.a},"12c0":function(t,e,n){t.exports=n.p+"img/Top_iClicker.2331499a.png"},"171a":function(t,e,n){},1972:function(t,e,n){t.exports=n.p+"media/winchester.77c93528.mp4"},"1a88":function(t,e,n){},"24ae":function(t,e,n){"use strict";var r=n("1a88"),i=n.n(r);i.a},"2dff":function(t,e,n){t.exports=n.p+"media/true.7a319111.mp4"},"48af":function(t,e,n){t.exports=n.p+"media/lilsucka.1f474645.mp4"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("HelloWorld"),r("p",[t._v("\n    From those who love you most,\n  ")]),r("img",{attrs:{id:"signature",alt:"lovely pic",src:n("8b86")}})],1)},a=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),r("div",[r("div",{staticClass:"clickerContainer"},[r("img",{staticClass:"Top_iClicker",attrs:{src:n("12c0")}}),r("Voicer",{attrs:{titleUrl:"christmas",tagline:"I love it!"}}),r("Voicer",{attrs:{titleUrl:"trippin",tagline:"Trippin"}}),r("Voicer",{attrs:{titleUrl:"freezing",tagline:"f-f-f-freezin"}}),r("Voicer",{attrs:{titleUrl:"mcallister",tagline:"Billy Joe McAllister"}}),r("Voicer",{attrs:{titleUrl:"true",tagline:"Dat be true"}}),r("Voicer",{attrs:{titleUrl:"crackadog",tagline:"Crackadawg"}}),r("Voicer",{attrs:{titleUrl:"knocking",tagline:"Somebody Knocking"}}),r("Voicer",{attrs:{titleUrl:"plane",tagline:"Emily and Her Dad"}}),r("Voicer",{attrs:{titleUrl:"winchester",tagline:"Winchester Cathdr."}}),r("Voicer",{attrs:{titleUrl:"dunno",tagline:"Sucka"}}),r("Voicer",{attrs:{titleUrl:"lilsucka",tagline:"Lil-Sucka"}}),r("img",{staticClass:"Footer_iClicker",attrs:{src:n("c788")}})],1)])])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"intro"},[n("h1",[t._v("Bigsucka Phrase Remote")])])}],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"Voicer"},[r("div",{staticClass:"label_side righted"},[r("span",[t._v(t._s(t.tagline))])]),r("div",{staticClass:"button_side"},[r("img",{attrs:{src:n("8474")}}),r("div",{staticClass:"btn_bg"},[r("img",{directives:[{name:"show",rawName:"v-show",value:!t.played,expression:"!played"}],staticClass:"mybtn",attrs:{src:n("aa7e")},on:{click:function(e){t.playSound(t.titleUrl)}}}),r("img",{directives:[{name:"show",rawName:"v-show",value:t.played,expression:"played"}],staticClass:"mybtn",attrs:{src:n("c3f6")},on:{click:function(e){t.playSound(t.titleUrl)}}})])])])},s=[],p={name:"Voicer",props:{tagline:String,titleUrl:String,played:Boolean},data:{played:!1},methods:{playSound:function(t){if(t){this.played=!0;var e=n("c219")("./"+t+".mp4"),r=new Audio(e);r.play()}}}},u=p,f=(n("24ae"),n("2877")),d=Object(f["a"])(u,l,s,!1,null,"fd61e9c6",null);d.options.__file="Voicer.vue";var m=d.exports,g={name:"HelloWorld",components:{Voicer:m}},v=g,b=(n("a054"),Object(f["a"])(v,o,c,!1,null,"6cba4a35",null));b.options.__file="HelloWorld.vue";var h=b.exports,_={name:"app",components:{HelloWorld:h}},y=_,k=(n("034f"),Object(f["a"])(y,i,a,!1,null,null,null));k.options.__file="App.vue";var x=k.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(x)}}).$mount("#app")},"5c8b":function(t,e,n){t.exports=n.p+"media/knocking.34e3569b.mp4"},"64a9":function(t,e,n){},"738d":function(t,e,n){t.exports=n.p+"media/crackadog.62e38a3f.mp4"},7620:function(t,e,n){t.exports=n.p+"media/freezing.df50b04b.mp4"},8474:function(t,e,n){t.exports=n.p+"img/Central_Section2.815651ba.png"},"8b86":function(t,e,n){t.exports=n.p+"img/girl.dfa0fbfb.jpg"},"93c5":function(t,e,n){t.exports=n.p+"media/mcallister.49f907e3.mp4"},"94dd":function(t,e,n){t.exports=n.p+"media/trippin.1eb69f1b.mp4"},"97d7":function(t,e,n){t.exports=n.p+"media/dunno.edf841ad.mp4"},"9a12":function(t,e,n){t.exports=n.p+"media/plane.e321aa76.mp4"},"9c89":function(t,e,n){t.exports=n.p+"media/christmas.891b358d.mp4"},a054:function(t,e,n){"use strict";var r=n("171a"),i=n.n(r);i.a},aa7e:function(t,e,n){t.exports=n.p+"img/mnm_button.e9363e4d.png"},c219:function(t,e,n){var r={"./christmas.mp4":"9c89","./crackadog.mp4":"738d","./dunno.mp4":"97d7","./freezing.mp4":"7620","./knocking.mp4":"5c8b","./lilsucka.mp4":"48af","./mcallister.mp4":"93c5","./plane.mp4":"9a12","./trippin.mp4":"94dd","./true.mp4":"2dff","./winchester.mp4":"1972"};function i(t){var e=a(t);return n(e)}function a(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}i.keys=function(){return Object.keys(r)},i.resolve=a,t.exports=i,i.id="c219"},c3f6:function(t,e,n){t.exports=n.p+"img/tree.1f08b3d9.png"},c788:function(t,e,n){t.exports=n.p+"img/Footer_iClicker.a5d1b9ca.png"}});
//# sourceMappingURL=app.be6cd670.js.map