(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53ccb27e"],{"6cfe":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pasos-a"},[t._l(t.elements,(function(e,a){return t.elements.length?s("div",{staticClass:"pasos-a__item"},[s("div",{staticClass:"row align-items-center d-flex",class:!t.isEven(a)&&"flex-row-reverse"},[s("div",{staticClass:"col-3 col-sm-2 col-lg-1 pasos-a__numero text-center d-inline-flex justify-content-center align-items-center",class:t.getClass(a)},[s("div",{staticClass:"pasos-a__circle"},["n"===t.tipo?s("div",{staticClass:"h2"},[t._v(t._s(a+1))]):"l"===t.tipo?s("div",{staticClass:"h2"},[t._v(t._s(t.abecedario[a]))]):t._e()])]),s("div",{staticClass:"col py-3",class:!t.isEven(a)&&"text-end",domProps:{innerHTML:t._s(e.html)}}),s("div",{staticClass:"col-1"})]),a+1!=t.elements.length?s("div",{staticClass:"row pasos-a__linea"},[s("div",{staticClass:"col-3 col-sm-2 col-lg-1 pasos-a__linea__esquina"},[t.isEven(a)?s("div",{staticClass:"pasos-a__linea__esquina__linea top-right"}):s("div",{staticClass:"pasos-a__linea__esquina__linea right-bottom"})]),t._m(0,!0),s("div",{staticClass:"col-3 col-sm-2 col-lg-1 pasos-a__linea__esquina"},[t.isEven(a)?s("div",{staticClass:"pasos-a__linea__esquina__linea left-bottom"}):s("div",{staticClass:"pasos-a__linea__esquina__linea top-left"})])]):t._e()]):t._e()})),s("div",{staticClass:"hidden-slot"},[t._t("default")],2)],2)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-6 col-sm-8 col-lg-10"},[s("div",{staticClass:"hor-line"})])}],n=s("ab14"),l={name:"PasosA",mixins:[n["a"]],props:{tipo:{type:String,default:"n"}},data:function(){return{abecedario:"ABCDEFGHIJKLMNOPQRSTUVWXYZ"}},methods:{getClass:function(t){return 0===t?"bottom":t+1===this.elements.length?"top":"full"},isEven:function(t){return t%2===0}}},o=l,r=s("2877"),c=Object(r["a"])(o,a,i,!1,null,"096ca7da",null);e["default"]=c.exports},ab14:function(t,e,s){"use strict";e["a"]={data:()=>({mainId:Math.floor(1e7*Math.random()),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}),watch:{menuState(){this.domUpdated()}},created(){window.addEventListener("resize",this.domUpdated)},mounted(){this.$nextTick(()=>{this.crearElementos()})},computed:{menuState(){return this.$store.getters.isMenuOpen}},beforeDestroy(){window.removeEventListener("resize",this.domUpdated)},updated(){this.$nextTick(()=>{this.getStateStr()!=this.stateStr&&this.crearElementos()})},methods:{crearElementos(){return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((t,e)=>{const s=t.data&&t.data.attrs?t.data.attrs:[];return{id:this.mainId+e+1,html:t.elm.outerHTML,...s}}),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight(t){return this.$refs[t][0].scrollHeight+"px"},getStateStr(){return this.$slots.default.map(t=>t.elm.outerHTML).join("")},domUpdated(){this.rendered=!1,setTimeout(()=>{this.rendered=!0},100)}}}}}]);
//# sourceMappingURL=chunk-53ccb27e.a62d048d.js.map