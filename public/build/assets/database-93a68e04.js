import{F as y}from"./bootstrap-f2d81cbc.js";import{n as w}from"./setup-72ee4e07.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{ae as u,a6 as o,z as m,A as i,F as f,ac as b,x as v,ax as d,ad as F,H as p,c as k}from"./npm~@vue~runtime-core_-ff0bdc0c.js";import{U as a}from"./npm~@vue~shared_-82b01912.js";import"./npm~lodash-f7a36ac5.js";import"./npm~@ckeditor~ckeditor5-build-classic_-a8abd726.js";import"./npm~laravel-echo-7ac8f47a.js";import"./npm~pusher-js-7b18aad5.js";import"./npm~axios-0ec1b34a.js";import"./npm~form-data-87061074.js";import"./npm~chart.js-3fed1729.js";import"./npm~rxjs-a7e91008.js";import"./npm~tslib-f3101d7c.js";import"./npm~moment-fbc5633a.js";import"./npm~vue-6a0d7c4c.js";import"./npm~@vue~runtime-dom_-a668b91e.js";import"./npm~@vue~reactivity_-481192b6.js";import"./npm~@vue~compiler-dom_-04241bb4.js";import"./npm~@vue~compiler-core_-2a2ce8c7.js";import"./npm~rx-1641e2f8.js";import"./npm~@wordpress~hooks_-18172e20.js";import"./currency-47ec5b79.js";import"./npm~numeral-faf61dd1.js";import"./npm~currency.js-57f74176.js";import"./npm~mathjs-1dff8408.js";import"./npm~@babel~runtime_-34ca84e8.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-15c479db.js";import"./npm~fraction.js-52b397f9.js";import"./npm~typed-function-e88d1f37.js";import"./npm~seedrandom-b246f2f9.js";import"./npm~javascript-natural-sort-11e7fc54.js";import"./npm~escape-latex-404addb9.js";import"./preload-helper-41c905a7.js";import"./components-a12d038c.js";import"./ns-alert-popup-883dcb0b.js";import"./ns-avatar-image-b0a3f8ba.js";import"./npm~@dicebear~avatars_-e73ed2cc.js";import"./npm~pure-color-28f75675.js";import"./npm~svgson-a2b86d8a.js";import"./npm~omit-deep-3a616dcc.js";import"./npm~is-plain-object-01248184.js";import"./npm~isobject-2e03973b.js";import"./npm~isarray-980812a4.js";import"./npm~unset-value-cf896816.js";import"./npm~has-value-859045a0.js";import"./npm~has-values-79b61d1f.js";import"./npm~get-value-efae0488.js";import"./npm~deep-rename-keys-9802c842.js";import"./npm~kind-of-f578382b.js";import"./npm~is-buffer-793dba8c.js";import"./npm~rename-keys-8dab041c.js";import"./npm~xml-reader-1784d248.js";import"./npm~eventemitter3-c7e30f9c.js";import"./npm~xml-lexer-6516179a.js";import"./npm~@dicebear~avatars-avataaars-sprites_-e47afe24.js";import"./ns-switch-0a4d4345.js";import"./npm~@ckeditor~ckeditor5-vue_-b5744b68.js";import"./ns-pos-confirm-popup-268ffc19.js";import"./npm~vue2-daterange-picker-f17f6b76.js";import"./npm~vuedraggable-90a90e9d.js";import"./npm~sortablejs-9be29f79.js";import"./ns-paginate-965aeeab.js";import"./npm~vue-upload-component-9e5d4563.js";import"./ns-numpad-plus-f3ffaa01.js";import"./ns-pos-loading-popup-c5c20a52.js";import"./ns-prompt-popup-64b67141.js";import"./npm~vue-router-64deb50a.js";const q={data:()=>({form:new y,firstPartFields:[],secondPartFields:[],fields:[]}),methods:{validate(){if(this.form.validateFields(this.firstPartFields)&&this.form.validateFields(this.secondPartFields)){this.form.disableFields(this.firstPartFields),this.form.disableFields(this.secondPartFields);const e={...this.form.getValue(this.firstPartFields),...this.form.getValue(this.secondPartFields)};this.checkDatabase(e).subscribe(s=>{this.form.enableFields(this.firstPartFields),this.form.enableFields(this.secondPartFields),w.push("/configuration"),nsSnackBar.success(s.message,"OKAY",{duration:5e3}).subscribe()},s=>{this.form.enableFields(this.firstPartFields),this.form.enableFields(this.secondPartFields),nsSnackBar.error(s.message,"OKAY").subscribe()})}},checkDatabase(e){return nsHttpClient.post("/api/setup/database",e)},sliceRange(e,r,s){const c=e.length,l=Math.ceil(c/r);return e.splice(s*l,l)}},mounted(){const e=this.form.createFields([{label:"Driver",description:"Set the database driver",name:"database_driver",value:"mysql",type:"select",options:[{label:"MySQL",value:"mysql"},{label:"Postgres",value:"pgsql"},{label:"SQLite",value:"sqlite"}],validation:"required"},{label:"Hostname",description:"Provide the database hostname",name:"hostname",value:"localhost"},{label:"Username",description:"Username required to connect to the database.",name:"username",value:"root"},{label:"Password",description:"The username password required to connect.",name:"password",value:""},{label:"Database Name",description:"Provide the database name. Leave empty to use default file for SQLite Driver.",name:"database_name",value:"nexopos_v4"},{label:"Database Prefix",description:"Provide the database prefix.",name:"database_prefix",value:"ns_",validation:"required"},{label:"Port",description:"Provide the hostname port.",name:"database_port",value:"3306",validation:"required"}]);this.firstPartFields=Object.values(this.sliceRange([...e],2,0)),this.secondPartFields=Object.values(this.sliceRange([...e],2,1))}},S={class:"bg-white rounded shadow my-4"},C={class:"welcome-box border-b border-gray-300 p-3 text-gray-700"},D={class:"md:-mx-4 md:flex"},$={class:"md:px-4 md:w-1/2 w-full"},B={class:"md:px-4 md:w-1/2 w-full"},V={class:"bg-gray-200 p-3 flex justify-end"};function L(e,r,s,c,l,_){const h=u("ns-field"),P=u("ns-button");return o(),m("div",S,[i("div",C,[i("div",D,[i("div",$,[(o(!0),m(f,null,b(e.firstPartFields,(t,n)=>(o(),v(h,{key:n,field:t,onChange:g=>e.form.validateField(t)},{default:d(()=>[i("span",null,a(t.label),1),F(e.$slots,"description",{},()=>[p(a(t.description),1)])]),_:2},1032,["field","onChange"]))),128))]),i("div",B,[(o(!0),m(f,null,b(e.secondPartFields,(t,n)=>(o(),v(h,{key:n,field:t,onChange:g=>e.form.validateField(t)},{default:d(()=>[i("span",null,a(t.label),1),F(e.$slots,"description",{},()=>[p(a(t.description),1)])]),_:2},1032,["field","onChange"]))),128))])])]),i("div",V,[k(P,{onClick:r[0]||(r[0]=t=>_.validate()),type:"info"},{default:d(()=>[p("Save Database")]),_:1})])])}const Ie=x(q,[["render",L]]);export{Ie as default};
