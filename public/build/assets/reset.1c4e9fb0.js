import{_ as i}from"./lang.2d0006f0.js";import{n as r,b as l,F as h}from"./bootstrap.915ca5b6.js";import{_ as v}from"./plugin-vue_export-helper.21dcd24c.js";import{b1 as a,aA as d,aB as t,ao as c,L as x,b6 as g,y as f,br as y,b8 as m,aF as F}from"./runtime-core.esm-bundler.aa7a54f6.js";import"./runtime-dom.esm-bundler.68a12c3b.js";const k={name:"ns-reset",props:["url"],methods:{__:i,submit(){if(this.fields.length===0)return r.error(i("This form is not completely loaded.")).susbcribe();if(!this.validation.validateFields(this.fields))return this.$forceUpdate(),r.error(this.$slots["error-form-invalid"]?this.$slots["error-form-invalid"][0].text:"Invalid Form").subscribe();const e=this.validation.getValue(this.fields);confirm(this.$slots["confirm-message"]?this.$slots["confirm-message"][0].text:i("Would you like to proceed ?"))&&l.post("/api/reset",e).subscribe({next:s=>{r.success(s.message).subscribe()},error:s=>{r.error(s.message).subscribe()}})},loadFields(){l.get("/api/fields/ns.reset").subscribe({next:e=>{this.fields=this.validation.createFields(e)},error:e=>{r.error(e.message).subscribe()}})}},mounted(){this.loadFields()},data(){return{validation:new h,fields:[]}}},$={id:"reset-app",class:"ns-tab"},w={id:"card-header",class:"flex flex-wrap"},B={class:"tab active cursor-pointer px-4 py-2 rounded-tl-lg rounded-tr-lg"},V={class:"card-body ns-box ns-tab-item rounded-br-lg rounded-bl-lg shadow"},C={class:"-mx-4 flex flex-wrap p-2"},N={class:"card-body ns-box-footer border-t p-2 flex"};function L(e,s,S,T,u,o){const b=m("ns-field"),p=m("ns-button");return a(),d("div",$,[t("div",w,[t("div",B,c(o.__("Reset")),1)]),t("div",V,[t("div",C,[(a(!0),d(x,null,g(u.fields,(n,_)=>(a(),d("div",{class:"px-4",key:_},[f(b,{field:n},null,8,["field"])]))),128))]),t("div",N,[t("div",null,[f(p,{type:"info",onClick:s[0]||(s[0]=n=>o.submit())},{default:y(()=>[F(c(o.__("Proceed")),1)]),_:1})])])])])}var P=v(k,[["render",L]]);export{P as default};
