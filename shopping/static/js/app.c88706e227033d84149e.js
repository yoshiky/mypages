webpackJsonp([1],{IsKh:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},s,!1,function(t){n("o8nZ")},null,null).exports,o=n("/ocq"),r={name:"item-list",props:["items","idx"],methods:{priceWithTax:function(t){return new Intl.NumberFormat("ja-JP").format(Math.floor(1.08*t))}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"columns is-mobile"},[n("div",{staticClass:"column is-6"},[n("p",{staticClass:"control is-expanded"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.items[t.idx],expression:"items[idx]"}],staticClass:"input",attrs:{type:"number"},domProps:{value:t.items[t.idx]},on:{input:function(e){e.target.composing||t.$set(t.items,t.idx,e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"column has-text-right sp-price-with-tax"},[n("span",[t._v(t._s(t.priceWithTax(t.items[t.idx])))])]),t._v(" "),n("div",{staticClass:"column is-1"},[n("button",{staticClass:"button is-primary",on:{click:function(e){t.$emit("remove")}}},[t._v("-")])])])])},staticRenderFns:[]};var u={name:"list-container",data:function(){return{items:[""],totalTaxIn:0}},updated:function(){var t=this.items.map(Number).reduce(function(t,e){return t+e}),e=new Intl.NumberFormat("ja-JP");this.totalTaxIn=e.format(Math.floor(1.08*t))},methods:{addRow:function(){this.items.push("")}},components:{ItemList:n("VU/8")(r,c,!1,function(t){n("IsKh")},"data-v-5789b046",null).exports}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"shopping-list"}},[n("nav",{staticClass:"top-nav navbar is-fixed-top"},[n("p",[t._v("合計(税込): "+t._s(t.totalTaxIn)+" 円")])]),t._v(" "),n("div",{staticClass:"main-container container"},[t._l(t.items,function(e,i){return n("item-list",{key:i,attrs:{items:t.items,idx:i},on:{remove:function(e){t.items.splice(i,1)}}})}),t._v(" "),n("button",{staticClass:"button is-primary is-outlined is-small",on:{click:t.addRow}},[t._v("add")])],2)])},staticRenderFns:[]};var m=n("VU/8")(u,l,!1,function(t){n("r6/h")},"data-v-01de6561",null).exports;i.a.use(o.a);var d=new o.a({mode:"history",routes:[{path:"/",name:"ListContainer",component:m}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:d,components:{App:a},template:"<App/>"})},o8nZ:function(t,e){},"r6/h":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c88706e227033d84149e.js.map