import{F as y,n as o,b as u,a as d}from"./bootstrap-f2d81cbc.js";import{_}from"./currency-47ec5b79.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";import{f as T}from"./npm~rxjs-a7e91008.js";import{ae as l,a6 as s,z as r,A as t,F as V,ac as X,x as w,y as h,c as m,ax as g,H as b}from"./npm~@vue~runtime-core_-ff0bdc0c.js";import{U as c}from"./npm~@vue~shared_-82b01912.js";import"./npm~lodash-f7a36ac5.js";import"./npm~@ckeditor~ckeditor5-build-classic_-a8abd726.js";import"./npm~laravel-echo-7ac8f47a.js";import"./npm~pusher-js-7b18aad5.js";import"./npm~axios-0ec1b34a.js";import"./npm~form-data-87061074.js";import"./npm~chart.js-3fed1729.js";import"./npm~moment-fbc5633a.js";import"./npm~vue-6a0d7c4c.js";import"./npm~@vue~runtime-dom_-a668b91e.js";import"./npm~@vue~reactivity_-481192b6.js";import"./npm~@vue~compiler-dom_-04241bb4.js";import"./npm~@vue~compiler-core_-2a2ce8c7.js";import"./npm~rx-1641e2f8.js";import"./npm~@wordpress~hooks_-18172e20.js";import"./npm~mathjs-1dff8408.js";import"./npm~@babel~runtime_-34ca84e8.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-15c479db.js";import"./npm~fraction.js-52b397f9.js";import"./npm~typed-function-e88d1f37.js";import"./npm~seedrandom-b246f2f9.js";import"./npm~javascript-natural-sort-11e7fc54.js";import"./npm~escape-latex-404addb9.js";import"./npm~tslib-f3101d7c.js";import"./npm~numeral-faf61dd1.js";import"./npm~currency.js-57f74176.js";const N={name:"ns-register",data(){return{fields:[],xXsrfToken:null,validation:new y}},mounted(){T([o.get("/api/fields/ns.register"),o.get("/sanctum/csrf-cookie")]).subscribe(n=>{this.fields=this.validation.createFields(n[0]),this.xXsrfToken=o.response.config.headers["X-XSRF-TOKEN"],setTimeout(()=>u.doAction("ns-register-mounted",this))})},methods:{__:_,register(){if(!this.validation.validateFields(this.fields))return d.error(_("Unable to proceed the form is not valid.")).subscribe();this.validation.disableFields(this.fields),u.applyFilters("ns-register-submit",!0)&&o.post("/auth/sign-up",this.validation.getValue(this.fields),{headers:{"X-XSRF-TOKEN":this.xXsrfToken}}).subscribe(e=>{d.success(e.message).subscribe(),setTimeout(()=>{document.location=e.data.redirectTo},1500)},e=>{this.validation.triggerFieldsErrors(this.fields,e),this.validation.enableFields(this.fields),d.error(e.message).subscribe()})}}},B={class:"ns-box rounded shadow overflow-hidden transition-all duration-100"},C={class:"ns-box-body"},S={class:"p-3 -my-2"},E={key:0,class:"py-2 fade-in-entrance anim-duration-300"},R={key:0,class:"flex items-center justify-center"},j={class:"flex w-full items-center justify-center py-4"},A={href:"/sign-in",class:"link hover:underline text-sm"},H={class:"flex ns-box-footer border-t justify-between items-center p-3"};function K(n,e,O,U,a,i){const v=l("ns-field"),x=l("ns-spinner"),p=l("ns-button");return s(),r("div",B,[t("div",C,[t("div",S,[a.fields.length>0?(s(),r("div",E,[(s(!0),r(V,null,X(a.fields,(f,k)=>(s(),w(v,{key:k,field:f},null,8,["field"]))),128))])):h("",!0)]),a.fields.length===0?(s(),r("div",R,[m(x)])):h("",!0),t("div",j,[t("a",A,c(i.__("Already registered ?")),1)])]),t("div",H,[t("div",null,[m(p,{onClick:e[0]||(e[0]=f=>i.register()),type:"info"},{default:g(()=>[b(c(i.__("Register")),1)]),_:1})]),t("div",null,[m(p,{link:!0,href:"/sign-in",type:"success"},{default:g(()=>[b(c(i.__("Sign In")),1)]),_:1})])])])}const ve=F(N,[["render",K]]);export{ve as default};
