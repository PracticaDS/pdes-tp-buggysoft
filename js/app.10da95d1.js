(function(t){function e(e){for(var i,r,o=e[0],s=e[1],l=e[2],m=0,p=[];m<o.length;m++)r=o[m],a[r]&&p.push(a[r][0]),a[r]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);u&&u(e);while(p.length)p.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],i=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(i=!1)}i&&(c.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},a={app:0},c=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/pdes-tp-buggysoft/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=s;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"109c":function(t,e,n){},"21bb":function(t,e,n){"use strict";var i=n("bcc9"),a=n.n(i);a.a},"330f":function(t,e,n){"use strict";var i=n("5034"),a=n.n(i);a.a},4634:function(t,e,n){},5034:function(t,e,n){},"506e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var i={};n.r(i),n.d(i,"Machine",function(){return V}),n.d(i,"Starter",function(){return nt}),n.d(i,"Furnace",function(){return st}),n.d(i,"Transporter",function(){return ht}),n.d(i,"Seller",function(){return Nt}),n.d(i,"Crafter",function(){return Et});n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],o=(n("5c0b"),n("2877")),s={},l=Object(o["a"])(s,c,r,!1,null,null,null),u=l.exports,m=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home p1"},[n("div",{staticClass:"p1"},[n("span",{staticClass:"text-primary"},[t._v("Ganancias ")]),n("span",{staticClass:"label"},[t._v("$"+t._s(Number(t.earnings).toFixed(2)))])]),n("div",{staticClass:"flex"},[n("ToolBox"),n("Factory",{attrs:{rows:t.rows}}),n("Details",{attrs:{currentMachine:t.currentMachine}})],1),t._m(0)])},f=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",[i("p",{staticClass:"text-small subtle"},[t._v("A game developed by")]),i("img",{staticClass:"hover",attrs:{height:"200px",alt:"Buggysoft logo",src:n("b35e")}})])}],h=n("2f62"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"details toolbar"},[n("p",{staticClass:"text-primary hp1"},[t._v("Detalles")]),t.currentMachine.name?n("div",{staticClass:"section text-small"},[n("div",{staticClass:"label"},[t._v(t._s(t.currentMachine.name))]),n("p",[t._v("Costo: "),n("span",{staticClass:"text-accent"},[t._v("$"+t._s(t.currentMachine.cost))])]),n("p",[t._v("Frecuencia: "),n("span",{staticClass:"text-accent"},[t._v(t._s(t.currentMachine.speed)+"/s")])])]):n("div",{staticClass:"section text-small"},[n("i",[t._v("Seleccione una maquina")])])])},b=[],v={name:"Details",props:{currentMachine:Object}},g=v,C=(n("fd4f"),Object(o["a"])(g,d,b,!1,null,null,null)),_=C.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Factory",{attrs:{rows:t.rows,tickDelay:t.tickDelay,running:t.running}})},y=[],j=n("cebc"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid"},t._l(t.rows,function(t,e){return n("Row",{key:e,attrs:{number:e,columns:t}})}),1)},k=[],w=(n("ac6a"),n("c5f6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},t._l(t.columns,function(e,i){return n("Cell",{key:i,attrs:{position:[t.number,i]}})}),1)}),M=[],A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Cell",{attrs:{position:t.position,content:t.content,action:t.action},on:{applyActionToCell:t.applyActionToCell,stopAnimation:function(e){return t.stopAnimation(t.position)}}})},T=[],$=n("768b"),S=n("d225"),E=n("b0b4"),B=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(S["a"])(this,t),this.position=e,this.machine=n}return Object(E["a"])(t,[{key:"tick",value:function(e,n){var i=t.getNextCell(this.position,this.machine.orientation);this.machine.tick(i,n)}}],[{key:"getNextCell",value:function(t,e){var n={up:function(t){var e=Object($["a"])(t,2),n=e[0],i=e[1];return[Math.max(n-1,0),i]},down:function(t){var e=Object($["a"])(t,2),n=e[0],i=e[1];return[n+1,i]},left:function(t){var e=Object($["a"])(t,2),n=e[0],i=e[1];return[n,Math.max(i-1,0)]},right:function(t){var e=Object($["a"])(t,2),n=e[0],i=e[1];return[n,i+1]}};return n[e](t)}}]),t}(),F=B,P=(n("7f7f"),function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;Object(S["a"])(this,t),this.resources=e.resources||[],this.name=e.name,this.icon=e.icon,this.orientation=e.orientation,this.tick=e.tick||n,this.cost=e.cost,this.speed=e.speed,this.animated=e.animated,this.position=e.position});function q(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e={cost:100,speed:1,icon:"in.png",orientation:"up"};function n(t,e){if(console.log("Tick Starter"),0===this.resources.length)this.resources.push({material:this.material,qty:1});else{var n=this.resources[0];e.addResourceToNextCell(n,t),this.resources=[]}}return new P(Object(j["a"])({},e,t),n)}function D(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e={cost:75,speed:1,icon:"seller.png",orientation:"up"};function n(){console.log("Tick Seller")}return new P(Object(j["a"])({},e,t),n)}function N(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e={cost:100,speed:1,icon:"transporter.png",orientation:"down"};function n(){console.log("Tick Transporter")}return new P(Object(j["a"])({},e,t),n)}function R(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e={cost:200,speed:1,icon:"crafter.png",orientation:"up"};function n(){console.log("Tick Crafter")}var i=new P(Object(j["a"])({},e,t),n);return i.blueprint={},i}function U(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e={cost:100,speed:1,icon:"furnace.png",orientation:"up"};function n(){console.log("Tick Furnace")}return new P(Object(j["a"])({},e,t),n)}var L={Starter:q,Seller:D,Transporter:N,Crafter:R,Furnace:U};function W(t){return L[t.name](t)}var G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cell",on:{click:t.applyActionToCell}},[n("transition",{attrs:{name:"fade"}},[t.content.machine.name?n("div",{staticClass:"machine-container"},[n(t.content.machine.name,{tag:"component",attrs:{machine:t.content.machine,action:t.action},on:{stopAnimation:function(e){return t.$emit("stopAnimation")}}})],1):t._e()])],1)},I=[],J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{class:["machine",t.orientation,t.animated?"animated":""],attrs:{src:t.iconUrl,alt:""}})},z=[],H={name:"Machine",props:{action:String,machine:{type:Object,default:function(){return{}}}},data:function(){return{publicPath:"/pdes-tp-buggysoft/"}},computed:{iconUrl:function(){return"".concat(this.publicPath,"machines/").concat(this.machine.icon)},orientation:function(){return this.machine.orientation},animated:function(){return this.machine.animated}},watch:{machine:function(t){var e=this;t.animated&&setTimeout(function(){e.$emit("stopAnimation")},225)}}},K=H,Q=(n("d9a3"),Object(o["a"])(K,J,z,!1,null,null,null)),V=Q.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"options-container"},[n("img",{class:["machine",t.orientation,t.animated?"animated":""],attrs:{src:t.iconUrl,alt:""},on:{click:t.toggleSelected}}),t.selected?n("div",{staticClass:"options-panel"},t._l(t.materials,function(e){return n("p",{key:e,on:{click:function(n){return t.selectMaterial(e)}}},[n("span",{class:["material",e]}),t._v(" "+t._s(e)+"\n    ")])}),0):t._e()])},Y=[],Z={name:"Starter",mixins:[V],data:function(){return{selected:!1,materials:["oro","cobre","aluminio","carbon","hierro"]}},methods:{toggleSelected:function(){"select"===this.action&&(this.selected=!this.selected)},selectMaterial:function(t){this.selected=!1,this.machine.material=t}}},tt=Z,et=(n("80b7"),Object(o["a"])(tt,X,Y,!1,null,null,null)),nt=et.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"options-container"},[n("img",{class:["machine",t.orientation,t.animated?"animated":""],attrs:{src:t.iconUrl,alt:""}})])},at=[],ct={name:"Furnace",mixins:[V]},rt=ct,ot=Object(o["a"])(rt,it,at,!1,null,null,null),st=ot.exports,lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"options-container"},[n("img",{class:["machine",t.orientation,t.animated?"animated":""],attrs:{src:t.iconUrl,alt:""}})])},ut=[],mt={name:"Transporter",mixins:[V]},pt=mt,ft=Object(o["a"])(pt,lt,ut,!1,null,null,null),ht=ft.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Crafter",{attrs:{action:t.action,machine:t.machine,blueprints:t.blueprints}})},bt=[],vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"options-container"},[n("img",{class:["machine",t.orientation,t.animated?"animated":""],attrs:{src:t.iconUrl,alt:""},on:{click:t.toggleSelected}}),t.selected?n("div",{staticClass:"options-panel for-blueprint"},[n("h2",[t._v("Planos")]),t._l(t.blueprints,function(e){return n("Blueprint",{key:e.name,attrs:{blueprint:e,selected:t.machine.blueprint.name===e.name},on:{click:function(n){return t.selectBlueprint(e)}}})})],2):t._e()])},gt=[],Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["blueprint",t.selected?"selected":""],on:{click:function(e){return t.$emit("click")}}},[n("h4",{class:["label",t.selected?"selected":""]},[t._v(t._s(t.blueprint.name))]),t._l(t.blueprint.resources,function(e){return n("div",{key:e.material,staticClass:"resource"},[n("span",{class:["material",e.material]}),t._v(" "+t._s(e.material)+"\n    "),n("span",{staticClass:"qty"},[t._v(" x"+t._s(e.qty))])])}),n("p",{staticClass:"profit"},[t._v("\n    Ganancia "),n("span",{staticClass:"money"},[t._v("$"+t._s(Number(t.blueprint.profit).toFixed(2)))])])],2)},_t=[],Ot={name:"Blueprint",props:{blueprint:Object,selected:Boolean}},yt=Ot,jt=(n("bb54"),Object(o["a"])(yt,Ct,_t,!1,null,null,null)),xt=jt.exports,kt={name:"Crafter",mixins:[V],components:{Blueprint:xt},props:{blueprints:Array},data:function(){return{selected:!1}},methods:{toggleSelected:function(){"select"===this.action&&(this.selected=!this.selected)},selectBlueprint:function(t){this.selected=!1,this.machine.blueprint=t}}},wt=kt,Mt=(n("807f"),Object(o["a"])(wt,vt,gt,!1,null,null,null)),At=Mt.exports,Tt={name:"CrafterWrapper",components:{Crafter:At},props:{action:String,machine:Object},computed:Object(j["a"])({},Object(h["d"])(["blueprints"]))},$t=Tt,St=Object(o["a"])($t,dt,bt,!1,null,"0bbbcd2e",null),Et=St.exports,Bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"options-container"},[n("img",{class:["machine",t.orientation,t.animated?"animated":""],attrs:{src:t.iconUrl,alt:""}})])},Ft=[],Pt={name:"Seller",mixins:[V]},qt=Pt,Dt=Object(o["a"])(qt,Bt,Ft,!1,null,null,null),Nt=Dt.exports,Rt={name:"Cell",components:Object(j["a"])({},i),props:{content:Object,position:Array,action:String},computed:{machineComponent:function(){return this.content.machine.name||"Machine"}},methods:{applyActionToCell:function(){this.$emit("applyActionToCell",this.position)}}},Ut=Rt,Lt=(n("7ea3"),Object(o["a"])(Ut,G,I,!1,null,null,null)),Wt=Lt.exports,Gt={name:"Cell-Wrapper",components:{Cell:Wt},props:{position:Array},computed:Object(j["a"])({},Object(h["d"])(["rows","action"]),{content:function(){var t=Object($["a"])(this.position,2),e=t[0],n=t[1];return this.rows[e][n]||new F}}),methods:Object(j["a"])({},Object(h["c"])(["setCurrentMachine","stopAnimation"]),Object(h["b"])(["applyActionToCell"]))},It=Gt,Jt=Object(o["a"])(It,A,T,!1,null,"e9b585ea",null),zt=Jt.exports,Ht={name:"Row",components:{Cell:zt},props:{number:Number,columns:Array}},Kt=Ht,Qt=(n("b2f8"),Object(o["a"])(Kt,w,M,!1,null,"78977fff",null)),Vt=Qt.exports,Xt={name:"Factory",components:{Row:Vt},props:{rows:Array,rowsToCommit:Array,tickDelay:Number,running:Boolean},methods:Object(j["a"])({},Object(h["b"])(["tickCell"]),{gameLoop:function(){var t=this;console.log("Tick"),this.running&&this.rows.forEach(function(e){e.forEach(function(e){e.machine.tick&&t.tickCell(e)})}),setTimeout(this.gameLoop.bind(this),this.tickDelay)}}),mounted:function(){this.gameLoop()}},Yt=Xt,Zt=(n("330f"),Object(o["a"])(Yt,x,k,!1,null,"e27e065e",null)),te=Zt.exports,ee={name:"Factory-Wrapper",props:{rows:Array},components:{Factory:te},computed:Object(j["a"])({},Object(h["d"])(["tickDelay","running"]))},ne=ee,ie=Object(o["a"])(ne,O,y,!1,null,"49f7b804",null),ae=ie.exports,ce=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"toolbar"},[n("p",{staticClass:"text-primary hp1"},[t._v("Maquinas")]),n("div",{staticClass:"section no-padding"},t._l(t.machines,function(e){return n("Button",{key:e.name,attrs:{type:e.name===t.currentMachine.name?"active":"",disabled:e.cost>t.earnings},on:{click:function(n){return t.pickMachineToPlace(e)}}},[n("Machine",{attrs:{machine:e}})],1)}),1),n("br"),n("p",{staticClass:"text-primary hp1"},[t._v("Edición")]),n("div",{staticClass:"section no-padding"},[n("ActionButton",{attrs:{action:"remove",active:"remove"===t.action},on:{click:function(e){return t.setAction("remove")}}}),n("ActionButton",{attrs:{action:"move",active:"move"===t.action},on:{click:function(e){return t.setAction("move")}}}),n("ActionButton",{attrs:{action:"rotate",active:"rotate"===t.action},on:{click:function(e){return t.setAction("rotate")}}})],1)])},re=[],oe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:[t.type,t.disabled?"disabled":"","square-button"],on:{click:t.handleClick}},[t._t("default")],2)},se=[],le={name:"Button",props:{type:String,disabled:Boolean},methods:{handleClick:function(){this.disabled||this.$emit("click")}}},ue=le,me=(n("ef55"),Object(o["a"])(ue,oe,se,!1,null,null,null)),pe=me.exports,fe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Button",{attrs:{type:t.active?"active":""},on:{click:function(e){return t.$emit("click")}}},[n("img",{attrs:{src:t.publicPath+"actions/"+t.action+".png",alt:""}})])},he=[],de={name:"ActionButton",components:{Button:pe},props:{action:String,active:Boolean},data:function(){return{publicPath:"/pdes-tp-buggysoft/"}}},be=de,ve=Object(o["a"])(be,fe,he,!1,null,"2082a286",null),ge=ve.exports,Ce={name:"ToolBox",components:{ActionButton:ge,Button:pe,Machine:V},computed:Object(h["d"])(["currentMachine","machines","action","earnings"]),methods:Object(j["a"])({},Object(h["b"])(["setAction","pickMachineToPlace"]))},_e=Ce,Oe=Object(o["a"])(_e,ce,re,!1,null,null,null),ye=Oe.exports,je={name:"home",components:{Details:_,Factory:ae,ToolBox:ye},computed:Object(h["d"])(["earnings","rows","machines","currentMachine"])},xe=je,ke=(n("21bb"),Object(o["a"])(xe,p,f,!1,null,null,null)),we=ke.exports;a["a"].use(m["a"]);var Me=new m["a"]({routes:[{path:"/",name:"home",component:we}]}),Ae={setCurrentMachine:function(t,e){t.currentMachine=e},clearCurrentMachine:function(t){t.currentMachine={}},setCellMachine:function(t,e){var n=Object($["a"])(e,2),i=n[0],a=n[1];t.rows[i][a].machine=t.currentMachine},setActionOriginCell:function(t,e){t.actionOriginCell=e},buyMachine:function(t,e){t.earnings-=e.cost},rotateMachineInCell:function(t,e){var n=e.cell,i=e.orientation,a=Object($["a"])(n,2),c=a[0],r=a[1],o=t.rows[c][r].machine;t.rows[c][r].machine=W(Object(j["a"])({},o,{orientation:i,animated:!0}))},stopAnimation:function(t,e){var n=Object($["a"])(e,2),i=n[0],a=n[1],c=t.rows[i][a].machine;t.rows[i][a].machine=W(Object(j["a"])({},c,{animated:!1}))},increaseEarnings:function(t,e){t.earnings+=e},setAction:function(t,e){t.action=e},startSimulation:function(t){t.running=!0},stopSimulation:function(t){t.running=!1}},Te=n("75fc");function $e(t,e){return Object(Te["a"])(Array(e).keys()).map(function(e){return new F([t,e])})}function Se(t,e){return Object(Te["a"])(Array(t).keys()).map(function(t){return $e(t,e)})}function Ee(t,e){var n=Object($["a"])(t,2),i=n[0],a=n[1];return e.rows[i][a]}function Be(t,e){return Ee(t,e).machine}function Fe(t){var e=t.dispatch;return{addResourceToNextCell:function(t,n){e("addResourceToNextCell",{resource:t,nextCell:n})}}}var Pe=Fe,qe={applyActionToCell:function(t,e){var n=t.commit,i=t.state;i.cellActions[i.action]({commit:n,state:i},e)},setAction:function(t,e){var n=t.commit;n("setAction",e),n("clearCurrentMachine")},pickMachineToPlace:function(t,e){var n=t.commit;n("setCurrentMachine",W(e)),n("setAction","place")},place:function(t,e){var n=t.commit,i=t.state,a=Be(e,i);a.name?(n("setCurrentMachine",a),n("setAction","select")):i.currentMachine.cost<=i.earnings&&(n("buyMachine",i.currentMachine),n("setCellMachine",e))},select:function(t,e){var n=t.commit,i=t.state,a=Be(e,i);n("setCurrentMachine",a)},remove:function(t,e){var n=t.commit,i=t.state,a=Be(e,i);a.name&&(n("increaseEarnings",a.cost),n("clearCurrentMachine"),n("setCellMachine",e))},move:function(t,e){var n=t.commit,i=t.state,a=Be(e,i);a.name&&!i.actionOriginCell?(n("setCurrentMachine",a),n("setActionOriginCell",e)):a.name?(n("setCurrentMachine",a),n("setAction","select"),n("setActionOriginCell",null)):(n("setCellMachine",e),n("clearCurrentMachine"),n("setCellMachine",i.actionOriginCell),n("setActionOriginCell",null))},rotate:function(t,e){var n=t.commit,i=t.state,a=Be(e,i);if(a.name){var c={up:"right",right:"down",down:"left",left:"up"},r=c[a.orientation];n("rotateMachineInCell",{cell:e,orientation:r})}else n("setAction","select")},tickCell:function(t,e){e.tick(t.state.resources,Pe(t))},addResourceToNextCell:function(t,e){var n=t.state,i=t.dispatch,a=e.resource,c=e.nextCell,r=Object($["a"])(c,2),o=r[0],s=r[1];o<n.rows.length&&s<n.rows[o].length&&i("commit/addResourceToCell",{resource:a,nextCell:c})}},De=12,Ne=12,Re=qe.place,Ue=qe.select,Le=qe.remove,We=qe.move,Ge=qe.rotate,Ie=[W({name:"Starter"}),W({name:"Seller"}),W({name:"Crafter"}),W({name:"Transporter"}),W({name:"Furnace"})],Je=[{name:"Circuito",cost:10,profit:20,resources:[{material:"cobre",qty:2},{material:"oro",qty:1}]},{name:"Cable de Cobre",cost:10,profit:20,resources:[{material:"cobre",qty:2}]},{name:"Engranaje",cost:10,profit:20,resources:[{material:"hierro",qty:1}]}],ze={earnings:1e3,tickDelay:1e3,running:!0,currentMachine:{},action:"place",actionOriginCell:null,cellActions:{place:Re,remove:Le,move:We,rotate:Ge,select:Ue},machines:Ie,blueprints:Je,rows:Se(De,Ne),rowsToCommit:Se(De,Ne)},He={namespaced:!0,actions:{addResourceToCell:function(t,e){var n=t.rootState,i=e.resource,a=e.nextCell,c=Object($["a"])(a,2),r=c[0],o=c[1],s=n.rowsToCommit[r][o];s.machine&&s.machine.name&&s.resources.push(i)}}},Ke={commit:He};a["a"].use(h["a"]);var Qe=new h["a"].Store({state:ze,mutations:Ae,actions:qe,modules:Ke});a["a"].config.productionTip=!1,new a["a"]({router:Me,store:Qe,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("5e27"),a=n.n(i);a.a},"5e27":function(t,e,n){},"63c6":function(t,e,n){},"7ea3":function(t,e,n){"use strict";var i=n("dd95"),a=n.n(i);a.a},"7fd4":function(t,e,n){},"807f":function(t,e,n){"use strict";var i=n("ee5f"),a=n.n(i);a.a},"80b7":function(t,e,n){"use strict";var i=n("506e"),a=n.n(i);a.a},b2f8:function(t,e,n){"use strict";var i=n("109c"),a=n.n(i);a.a},b35e:function(t,e,n){t.exports=n.p+"img/buggysoft-logo-w.7be831b4.png"},bb54:function(t,e,n){"use strict";var i=n("7fd4"),a=n.n(i);a.a},bcc9:function(t,e,n){},c76d:function(t,e,n){},d9a3:function(t,e,n){"use strict";var i=n("4634"),a=n.n(i);a.a},dd95:function(t,e,n){},ee5f:function(t,e,n){},ef55:function(t,e,n){"use strict";var i=n("c76d"),a=n.n(i);a.a},fd4f:function(t,e,n){"use strict";var i=n("63c6"),a=n.n(i);a.a}});
//# sourceMappingURL=app.10da95d1.js.map