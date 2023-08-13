import{P as j,a as g,n as k,F as I}from"./bootstrap-414293d9.js";import T from"./ns-pos-confirm-popup-919c695d.js";import{_ as h,n as E}from"./currency-47ec5b79.js";import{n as R}from"./ns-paginate-d2667c22.js";import{m as F,l as D}from"./npm~@vue~runtime-dom_-a668b91e.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import{a6 as l,z as o,A as s,az as U,F as _,ac as v,y as p,ae as q,c as w,ad as S,H as $,x as O}from"./npm~@vue~runtime-core_-ff0bdc0c.js";import{U as d,z as V}from"./npm~@vue~shared_-82b01912.js";import"./npm~lodash-f7a36ac5.js";import"./npm~@ckeditor~ckeditor5-build-classic_-a8abd726.js";import"./npm~laravel-echo-7ac8f47a.js";import"./npm~pusher-js-7b18aad5.js";import"./npm~axios-4a70c6fc.js";import"./npm~chart.js-3fed1729.js";import"./npm~rxjs-a7e91008.js";import"./npm~tslib-f3101d7c.js";import"./npm~moment-fbc5633a.js";import"./npm~vue-6a0d7c4c.js";import"./npm~@vue~compiler-dom_-04241bb4.js";import"./npm~@vue~compiler-core_-2a2ce8c7.js";import"./npm~@vue~reactivity_-481192b6.js";import"./npm~rx-1641e2f8.js";import"./npm~@wordpress~hooks_-18172e20.js";import"./npm~mathjs-1dff8408.js";import"./npm~@babel~runtime_-34ca84e8.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-15c479db.js";import"./npm~fraction.js-52b397f9.js";import"./npm~typed-function-e88d1f37.js";import"./npm~seedrandom-b246f2f9.js";import"./npm~javascript-natural-sort-11e7fc54.js";import"./npm~escape-latex-404addb9.js";import"./npm~numeral-faf61dd1.js";import"./npm~currency.js-57f74176.js";const G={name:"ns-product-group",props:["fields"],watch:{searchValue(){clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchProducts(this.searchValue)},1e3)},products:{deep:!0,handler(){this.$forceUpdate()}}},computed:{totalProducts(){return this.products.length>0?(this.$emit("update",this.products),this.products.map(e=>parseFloat(e.sale_price)*parseFloat(e.quantity)).reduce((e,t)=>e+t)):0}},mounted(){const e=this.fields.filter(t=>t.name==="product_subitems");e.length>0&&e[0].value!==void 0&&e[0].value.length>0&&(this.products=e[0].value)},data(){return{searchValue:"",searchTimeout:null,results:[],products:[]}},methods:{__:h,nsCurrency:E,setSalePrice(){this.$emit("updateSalePrice",this.totalProducts)},removeProduct(e){j.show(T,{title:h("Delete Sub item"),message:h("Would you like to delete this sub item?"),onAction:t=>{t&&this.products.splice(e,1)}})},toggleUnitField(e){e._unit_toggled||(e._unit_toggled=!e._unit_toggled),setTimeout(()=>{e._unit_toggled&&this.$refs.unitField[0].addEventListener("blur",()=>{e._unit_toggled=!1,this.$forceUpdate()})},200)},toggleQuantityField(e){e._quantity_toggled=!e._quantity_toggled,setTimeout(()=>{e._quantity_toggled&&(this.$refs.quantityField[0].select(),this.$refs.quantityField[0].addEventListener("blur",()=>{this.toggleQuantityField(e),this.$forceUpdate()}))},200)},togglePriceField(e){e._price_toggled=!e._price_toggled,setTimeout(()=>{e._price_toggled&&(this.$refs.priceField[0].select(),this.$refs.priceField[0].addEventListener("blur",()=>{this.togglePriceField(e),this.$forceUpdate()}))},200)},redefineUnit(e){const t=e.unit_quantities.filter(n=>n.id===e.unit_quantity_id);t.length>0&&(e.unit_quantity=t[0],e.unit_id=t[0].unit.id,e.unit=t[0].unit,e.sale_price=t[0].sale_price)},async addResult(e){if(this.searchValue="",e.type==="grouped")return g.error(h("Unable to add a grouped product.")).subscribe();try{const t=await new Promise((u,i)=>{j.show(R,{label:h("Choose The Unit"),options:e.unit_quantities.map(r=>({label:r.unit.name,value:r.id})),resolve:u,reject:i})}),n=e.unit_quantities.filter(u=>parseInt(u.id)===parseInt(t[0].value));this.products.push({name:e.name,unit_quantity_id:t[0].value,unit_quantity:n[0],unit_id:n[0].unit.id,unit:n[0].unit,product_id:n[0].product_id,quantity:1,_price_toggled:!1,_quantity_toggled:!1,_unit_toggled:!1,unit_quantities:e.unit_quantities,sale_price:n[0].sale_price}),this.$emit("update",this.products)}catch(t){console.log(t)}},searchProducts(e){k.post("/api/products/search",{search:e,arguments:{type:{comparison:"<>",value:"grouped"},searchable:{comparison:"in",value:[0,1]}}}).subscribe({next:t=>{this.results=t},error:t=>{g.error(t.message||h("An unexpected error occurred"),h("Ok"),{duration:3e3}).subscribe()}})}}},Q={class:"flex flex-col px-4 w-full"},B={class:"md:-mx-4 flex flex-col md:flex-row"},J={class:"md:px-4 w-full"},M={class:"input-group border-2 rounded info flex w-full"},z=["placeholder"],K={key:0,class:"h-0 relative"},W={class:"ns-vertical-menu absolute w-full"},H=["onClick"],Y={class:"my-2"},X={class:"ns-table"},Z={colspan:"2",class:"border"},ee={colspan:"2",class:"border p-2"},te={class:"flex justify-between"},se={class:"font-bold"},ie=["onClick"],re=["onClick"],ne={class:"input-group"},le=["onChange","onUpdate:modelValue"],oe=["value"],ae=["onClick"],de={key:0,class:"cursor-pointer border-b border-dashed border-info-secondary"},ue=["onUpdate:modelValue"],ce=["onClick"],fe={key:0,class:"cursor-pointer border-b border-dashed border-info-secondary"},me=["onUpdate:modelValue"],he={key:0},pe={colspan:"2",class:"border p-2 text-center"},be={key:0},_e={class:"w-1/2 border p-2 text-left"},ge={class:"w-1/2 border p-2 text-right"};function ve(e,t,n,u,i,r){return l(),o("div",Q,[s("div",B,[s("div",J,[s("div",M,[U(s("input",{placeholder:r.__("Search products..."),"onUpdate:modelValue":t[0]||(t[0]=a=>i.searchValue=a),type:"text",class:"flex-auto p-2 outline-none"},null,8,z),[[F,i.searchValue]]),s("button",{onClick:t[1]||(t[1]=a=>r.setSalePrice()),class:"px-2"},d(r.__("Set Sale Price")),1)]),i.results.length>0&&i.searchValue.length>0?(l(),o("div",K,[s("ul",W,[(l(!0),o(_,null,v(i.results,a=>(l(),o("li",{key:a.id,onClick:b=>r.addResult(a),class:"p-2 border-b cursor-pointer"},d(a.name),9,H))),128))])])):p("",!0),s("div",Y,[s("table",X,[s("thead",null,[s("tr",null,[s("th",Z,d(r.__("Products")),1)])]),s("tbody",null,[(l(!0),o(_,null,v(i.products,(a,b)=>(l(),o("tr",{key:b},[s("td",ee,[s("div",te,[s("h3",se,d(a.name),1),s("span",{onClick:m=>r.removeProduct(b),class:"hover:underline text-error-secondary cursor-pointer"},d(r.__("Remove")),9,ie)]),s("ul",null,[s("li",{onClick:m=>r.toggleUnitField(a),class:"flex justify-between p-1 hover:bg-box-elevation-hover"},[s("span",null,d(r.__("Unit"))+":",1),s("div",ne,[U(s("select",{onChange:m=>r.redefineUnit(a),ref_for:!0,ref:"unitField",type:"text","onUpdate:modelValue":m=>a.unit_quantity_id=m},[(l(!0),o(_,null,v(a.unit_quantities,m=>(l(),o("option",{key:m.id,value:m.id},d(m.unit.name)+" ("+d(m.quantity)+")",9,oe))),128))],40,le),[[D,a.unit_quantity_id]])])],8,re),s("li",{onClick:m=>r.toggleQuantityField(a),class:"flex justify-between p-1 hover:bg-box-elevation-hover"},[s("span",null,d(r.__("Quantity"))+":",1),a._quantity_toggled?p("",!0):(l(),o("span",de,d(a.quantity),1)),a._quantity_toggled?U((l(),o("input",{key:1,ref_for:!0,ref:"quantityField",type:"text","onUpdate:modelValue":m=>a.quantity=m},null,8,ue)),[[F,a.quantity]]):p("",!0)],8,ae),s("li",{onClick:m=>r.togglePriceField(a),class:"flex justify-between p-1 hover:bg-box-elevation-hover"},[s("span",null,d(r.__("Price"))+":",1),a._price_toggled?p("",!0):(l(),o("span",fe,d(r.nsCurrency(a.sale_price)),1)),a._price_toggled?U((l(),o("input",{key:1,ref_for:!0,ref:"priceField",type:"text","onUpdate:modelValue":m=>a.sale_price=m},null,8,me)),[[F,a.sale_price]]):p("",!0)],8,ce)])])]))),128)),i.products.length===0?(l(),o("tr",he,[s("td",pe,d(r.__("No product are added to this group.")),1)])):p("",!0)]),i.products.length>0?(l(),o("tfoot",be,[s("tr",null,[s("td",_e,d(r.__("Total")),1),s("td",ge,d(r.nsCurrency(r.totalProducts)),1)])])):p("",!0)])])])])])}const ye=N(G,[["render",ve]]),xe={components:{nsProductGroup:ye},data:()=>({formValidation:new I,nsSnackBar:g,nsHttpClient:k,_sampleVariation:null,unitLoaded:!1,form:""}),watch:{form:{deep:!0,handler(e){this.form.variations.forEach(t=>{if(this.formValidation.extractFields(t.tabs.identification.fields).type==="grouped"){for(let u in t.tabs)["identification","groups","taxes","units"].includes(u)||(t.tabs[u].visible=!1);t.tabs.groups&&(t.tabs.groups.visible=!0)}else{for(let u in t.tabs)["identification","groups","taxes","units"].includes(u)||(t.tabs[u].visible=!0);t.tabs.groups&&(t.tabs.groups.visible=!1)}})}}},computed:{defaultVariation(){const e=new Object;for(let t in this._sampleVariation.tabs)e[t]=new Object,e[t].label=this._sampleVariation.tabs[t].label,e[t].active=this._sampleVariation.tabs[t].active,e[t].fields=this._sampleVariation.tabs[t].fields.filter(n=>!["category_id","product_type","stock_management","expires"].includes(n.name)).map(n=>((typeof n.value=="string"&&n.value.length===0||n.value===null)&&(n.value=""),n));return{id:"",tabs:e}}},props:["submit-method","submit-url","return-url","src","units-url"],methods:{__:h,nsCurrency:E,getGroupProducts(e){if(e.groups){const t=e.groups.fields.filter(n=>n.name==="products_subitems");if(t.length>0)return t[0].value}return[]},setProducts(e,t){t.groups.fields.forEach(n=>{n.name==="product_subitems"&&(n.value=e)})},triggerRecompute(e){},getUnitQuantity(e){const t=e.filter(n=>n.name==="quantity").map(n=>n.value);return t.length>0?t[0]:0},removeUnitPriceGroup(e,t){const n=e.filter(u=>u.name==="id"&&u.value!==void 0);Popup.show(T,{title:h("Confirm Your Action"),message:h("Would you like to delete this group ?"),onAction:u=>{if(u)if(n.length>0)this.confirmUnitQuantityDeletion({group_fields:e,group:t});else{const i=t.indexOf(e);t.splice(i,1)}}})},confirmUnitQuantityDeletion({group_fields:e,group:t}){Popup.show(T,{title:h("Your Attention Is Required"),size:"w-3/4-screen h-2/5-screen",message:h("The current unit you're about to delete has a reference on the database and it might have already procured stock. Deleting that reference will remove procured stock. Would you proceed ?"),onAction:n=>{if(n){const u=e.filter(i=>i.name==="id").map(i=>i.value)[0];k.delete(`/api/products/units/quantity/${u}`).subscribe(i=>{const r=t.indexOf(e);t.splice(r,1),g.success(i.message).subscribe()},i=>{nsSnackbar.error(i.message).subscribe()})}}})},addUnitGroup(e){if(e.options.length===0)return g.error(h("Please select at least one unit group before you proceed.")).subscribe();e.options.length>e.groups.length?e.groups.push(JSON.parse(JSON.stringify(e.fields))):g.error(h("There shoulnd't be more option than there are units.")).subscribe()},loadAvailableUnits(e){this.unitLoaded=!1,k.get(this.unitsUrl.replace("{id}",e.fields.filter(t=>t.name==="unit_group")[0].value)).subscribe(t=>{e.fields.forEach(n=>{n.type==="group"&&(n.options=t,n.fields.forEach(u=>{u.name==="unit_id"&&(u.options=t.map(i=>({label:i.name,value:i.id})))}))}),this.unitLoaded=!0,this.$forceUpdate()})},loadOptionsFor(e,t,n){k.get(this.unitsUrl.replace("{id}",t)).subscribe(u=>{this.form.variations[n].tabs.units.fields.forEach(i=>{i.name===e&&(i.options=u.map(r=>({label:r.name,value:r.id,selected:!1})))}),this.$forceUpdate()})},submit(){if(this.formValidation.validateFields([this.form.main]),this.form.variations.map(i=>this.formValidation.validateForm(i)).filter(i=>i.length>0).length>0||Object.values(this.form.main.errors).length>0)return g.error(h("Unable to proceed the form is not valid.")).subscribe();const t=this.form.variations.map((i,r)=>i.tabs.images.groups.filter(a=>a.filter(b=>b.name==="featured"&&b.value===1).length>0));if(t[0]&&t[0].length>1)return g.error(h("Unable to proceed, more than one product is set as featured")).subscribe();const n=[];if(this.form.variations.map((i,r)=>i.tabs.units.fields.filter(a=>a.type==="group").forEach(a=>{a.groups.forEach(b=>{n.push(this.formValidation.validateFields(b))})})),n.length===0)return g.error(h("Either Selling or Purchase unit isn't defined. Unable to proceed.")).subscribe();if(n.filter(i=>i===!1).length>0)return this.$forceUpdate(),g.error(h("Unable to proceed as one of the unit group field is invalid")).subscribe();const u={...this.formValidation.extractForm(this.form),variations:this.form.variations.map((i,r)=>{const a=this.formValidation.extractForm(i);r===0&&(a.$primary=!0),a.images=i.tabs.images.groups.map(m=>this.formValidation.extractFields(m));const b=new Object;return i.tabs.units.fields.filter(m=>m.type==="group").forEach(m=>{b[m.name]=m.groups.map(c=>this.formValidation.extractFields(c))}),a.units={...a.units,...b},a})};this.formValidation.disableForm(this.form),k[this.submitMethod?this.submitMethod.toLowerCase():"post"](this.submitUrl,u).subscribe(i=>{if(i.status==="success"){if(this.submitMethod==="POST"&&this.returnUrl!==!1)return document.location=i.data.editUrl||this.returnUrl;g.info(i.message,h("Okay"),{duration:3e3}).subscribe(),this.$emit("save")}this.formValidation.enableForm(this.form)},i=>{g.error(i.message,void 0,{duration:5e3}).subscribe(),this.formValidation.enableForm(this.form),i.response&&this.formValidation.triggerError(this.form,i.response.data)})},deleteVariation(e){confirm(h("Would you like to delete this variation ?"))&&this.form.variations.splice(e,1)},setTabActive(e,t){for(let n in t)n!==e&&(t[n].active=!1);t[e].active=!0,e==="units"&&this.loadAvailableUnits(t[e])},duplicate(e){this.form.variations.push(Object.assign({},e))},newVariation(){this.form.variations.push(this.defaultVariation)},getActiveTab(e){for(let t in e)if(e[t].active)return e[t];return!1},getActiveTabKey(e){for(let t in e)if(e[t].active)return t;return!1},parseForm(e){return e.main.value=e.main.value===void 0?"":e.main.value,e.main=this.formValidation.createFields([e.main])[0],e.variations.forEach((t,n)=>{let u=0;for(let i in t.tabs)u===0&&t.tabs[i].active===void 0?(t.tabs[i].active=!0,this._sampleVariation=JSON.parse(JSON.stringify(t)),t.tabs[i].fields&&(t.tabs[i].fields=this.formValidation.createFields(t.tabs[i].fields.filter(r=>r.name!=="name")))):t.tabs[i].fields&&(t.tabs[i].fields=this.formValidation.createFields(t.tabs[i].fields)),t.tabs[i].active=t.tabs[i].active===void 0?!1:t.tabs[i].active,t.tabs[i].visible=t.tabs[i].visible===void 0?!0:t.tabs[i].visible,u++}),e},loadForm(){k.get(`${this.src}`).subscribe(t=>{this.form=this.parseForm(t.form)})},addImage(e){e.tabs.images.groups.push(this.formValidation.createFields(JSON.parse(JSON.stringify(e.tabs.images.fields))))},removeImage(e,t){const n=e.tabs.images.groups.indexOf(t);e.tabs.images.groups.splice(n,1)}},mounted(){this.loadForm()},name:"ns-manage-products"},ke={class:"form flex-auto",id:"crud-form"},we={key:0,class:"flex items-center h-full justify-center flex-auto"},Ve={class:"flex flex-col"},Ue={class:"flex justify-between items-center"},Fe={for:"title",class:"font-bold my-2 text-primary"},Ce={for:"title",class:"text-sm my-2 text-primary"},Pe=["href"],qe=["disabled"],Te=["disabled"],Ae={key:0,class:"text-xs text-primary py-1"},je={id:"form-container",class:"-mx-4 flex flex-wrap mt-4"},Se={class:"px-4 w-full"},$e={id:"card-header",class:"flex flex-wrap justify-between ns-tab ml-4"},Oe={class:"flex flex-wrap"},Ee=["onClick"],Ne={key:0,class:"rounded-full bg-error-secondary text-white h-6 w-6 flex font-semibold items-center justify-center"},Le=s("div",{class:"flex items-center justify-center -mx-1"},null,-1),Ie={class:"card-body ns-tab-item"},Re={class:"rounded shadow p-2"},De={key:0,class:"-mx-4 flex flex-wrap"},Ge={key:1,class:"-mx-4 flex flex-wrap text-primary"},Qe={class:"flex flex-col px-4 w-full md:w-1/2 lg:w-1/3"},Be={class:"rounded border border-box-elevation-edge bg-box-elevation-background flex justify-between p-2 items-center"},Je=["onClick"],Me=s("i",{class:"las la-plus-circle"},null,-1),ze=[Me],Ke={class:"rounded border border-box-elevation-edge flex flex-col overflow-hidden"},We={class:"p-2"},He=["onClick"],Ye={key:2,class:"-mx-4 flex flex-wrap text-primary"},Xe={key:3,class:"-mx-4 flex flex-wrap"},Ze={class:"px-4 w-full md:w-1/2 lg:w-1/3"},et={class:"mb-2"},tt={class:"font-medium text-primary"},st={class:"py-1 text-sm text-primary"},it={class:"mb-2"},rt=["onClick"],nt=s("span",{class:"rounded-full border-2 ns-inset-button info h-8 w-8 flex items-center justify-center"},[s("i",{class:"las la-plus-circle"})],-1),lt={class:"-mx-4 flex flex-wrap"},ot={class:"shadow rounded overflow-hidden bg-box-elevation-background text-primary"},at={class:"border-b text-sm p-2 flex justify-between text-primary border-box-elevation-edge"},dt={class:"p-2 mb-2"},ut=["onClick"],ct={key:1,class:"px-4 w-full lg:w-2/3 flex justify-center items-center"};function ft(e,t,n,u,i,r){const a=q("ns-spinner"),b=q("ns-field"),m=q("ns-product-group");return l(),o("div",ke,[Object.values(e.form).length===0?(l(),o("div",we,[w(a)])):p("",!0),Object.values(e.form).length>0?(l(),o(_,{key:1},[s("div",Ve,[s("div",Ue,[s("label",Fe,d(e.form.main.label),1),s("div",Ce,[e.returnUrl?(l(),o("a",{key:0,href:e.returnUrl,class:"rounded-full border ns-inset-button error hover:bg-error-tertiary px-2 py-1"},d(r.__("Return")),9,Pe)):p("",!0)])]),s("div",{class:V([e.form.main.disabled?"":e.form.main.errors.length>0?"border-error-tertiary":"","input-group info flex border-2 rounded overflow-hidden"])},[U(s("input",{"onUpdate:modelValue":t[0]||(t[0]=c=>e.form.main.value=c),onBlur:t[1]||(t[1]=c=>e.formValidation.checkField(e.form.main)),onChange:t[2]||(t[2]=c=>e.formValidation.checkField(e.form.main)),disabled:e.form.main.disabled,type:"text",class:V([(e.form.main.disabled,""),"flex-auto text-primary outline-none h-10 px-2"])},null,42,qe),[[F,e.form.main.value]]),s("button",{disabled:e.form.main.disabled,class:V([e.form.main.disabled?"":e.form.main.errors.length>0?"bg-error-tertiary":"","outline-none px-4 h-10 rounded-none"]),onClick:t[3]||(t[3]=c=>r.submit())},[S(e.$slots,"save",{},()=>[$(d(r.__("Save")),1)])],10,Te)],2),e.form.main.description&&e.form.main.errors.length===0?(l(),o("p",Ae,d(e.form.main.description),1)):p("",!0),(l(!0),o(_,null,v(e.form.main.errors,(c,C)=>(l(),o("p",{class:"text-xs py-1 text-error-tertiary",key:C},[s("span",null,[S(e.$slots,"error-required",{},()=>[$(d(c.identifier),1)])])]))),128))]),s("div",je,[s("div",Se,[(l(!0),o(_,null,v(e.form.variations,(c,C)=>(l(),o("div",{id:"tabbed-card",class:"mb-8",key:C},[s("div",$e,[s("div",Oe,[(l(!0),o(_,null,v(c.tabs,(f,y)=>(l(),o(_,null,[f.visible?(l(),o("div",{onClick:x=>r.setTabActive(y,c.tabs),class:V([f.active?"active":"inactive","tab cursor-pointer text-primary px-4 py-2 rounded-tl-lg rounded-tr-lg flex justify-between"]),key:y},[s("span",{class:V(["block",f.errors&&f.errors.length>0?"mr-2":""])},d(f.label),3),f.errors&&f.errors.length>0?(l(),o("span",Ne,d(f.errors.length),1)):p("",!0)],10,Ee)):p("",!0)],64))),256))]),Le]),s("div",Ie,[s("div",Re,[["images","units","groups"].includes(r.getActiveTabKey(c.tabs))?p("",!0):(l(),o("div",De,[(l(!0),o(_,null,v(r.getActiveTab(c.tabs).fields,(f,y)=>(l(),o("div",{key:y,class:"flex flex-col px-4 w-full md:w-1/2 lg:w-1/3"},[w(b,{field:f},null,8,["field"])]))),128))])),r.getActiveTabKey(c.tabs)==="images"?(l(),o("div",Ge,[s("div",Qe,[s("div",Be,[s("span",null,d(r.__("Add Images")),1),s("button",{onClick:f=>r.addImage(c),class:"outline-none rounded-full border flex items-center justify-center w-8 h-8 ns-inset-button info"},ze,8,Je)])]),(l(!0),o(_,null,v(r.getActiveTab(c.tabs).groups,(f,y)=>(l(),o("div",{key:y,class:"flex flex-col px-4 w-full md:w-1/2 lg:w-1/3 mb-4"},[s("div",Ke,[s("div",We,[(l(!0),o(_,null,v(f,(x,P)=>(l(),O(b,{key:P,field:x},null,8,["field"]))),128))]),s("div",{onClick:x=>r.removeImage(c,f),class:"text-center py-2 border-t border-box-elevation-edge text-sm cursor-pointer"},d(r.__("Remove Image")),9,He)])]))),128))])):p("",!0),r.getActiveTabKey(c.tabs)==="groups"?(l(),o("div",Ye,[w(m,{onUpdate:f=>r.setProducts(f,c.tabs),onUpdateSalePrice:f=>r.triggerRecompute(f,c.tabs),fields:r.getActiveTab(c.tabs).fields},null,8,["onUpdate","onUpdateSalePrice","fields"])])):p("",!0),r.getActiveTabKey(c.tabs)==="units"?(l(),o("div",Xe,[s("div",Ze,[w(b,{onChange:f=>r.loadAvailableUnits(r.getActiveTab(c.tabs)),field:r.getActiveTab(c.tabs).fields[0]},null,8,["onChange","field"]),w(b,{onChange:f=>r.loadAvailableUnits(r.getActiveTab(c.tabs)),field:r.getActiveTab(c.tabs).fields[1]},null,8,["onChange","field"])]),e.unitLoaded?(l(!0),o(_,{key:0},v(r.getActiveTab(c.tabs).fields,(f,y)=>(l(),o(_,null,[f.type==="group"?(l(),o("div",{class:"px-4 w-full lg:w-2/3",key:y},[s("div",et,[s("label",tt,d(f.label),1),s("p",st,d(f.description),1)]),s("div",it,[s("div",{onClick:x=>r.addUnitGroup(f),class:"border-dashed border-2 p-1 bg-box-elevation-background border-box-elevation-edge flex justify-between items-center text-primary cursor-pointer rounded-lg"},[nt,s("span",null,d(r.__("New Group")),1)],8,rt)]),s("div",lt,[(l(!0),o(_,null,v(f.groups,(x,P)=>(l(),o("div",{class:"px-4 w-full md:w-1/2 mb-4",key:P},[s("div",ot,[s("div",at,[s("span",null,d(r.__("Available Quantity")),1),s("span",null,d(r.getUnitQuantity(x)),1)]),s("div",dt,[(l(!0),o(_,null,v(x,(A,L)=>(l(),O(b,{field:A,key:L},null,8,["field"]))),128))]),s("div",{onClick:A=>r.removeUnitPriceGroup(x,f.groups),class:"p-1 hover:bg-error-primary border-t border-box-elevation-edge flex items-center justify-center cursor-pointer font-medium"},d(r.__("Delete")),9,ut)])]))),128))])])):p("",!0)],64))),256)):p("",!0),e.unitLoaded?p("",!0):(l(),o("div",ct,[w(a)]))])):p("",!0)])])]))),128))])])],64)):p("",!0)])}const zt=N(xe,[["render",ft]]);export{zt as default};
