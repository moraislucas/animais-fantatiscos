!function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);function s(t,e,i){const s=document.documentElement;function n(o){t.contains(o.target)||(t.removeAttribute("data-outside"),e.forEach(t=>{s.removeEventListener(t,n)}),i())}t.hasAttribute("data-outside")||(e.forEach(t=>{setTimeout(()=>s.addEventListener(t,n))}),t.setAttribute("data-outside",""))}class n{constructor(t,e,i){this.numeros=document.querySelectorAll(t),this.observerTarget=document.querySelector(e),this.observerClass=i,this.handleMutation=this.handleMutation.bind(this)}static incrementarNumero(t){const e=+t.innerText,i=Math.floor(e/100);let s=0;const n=setInterval(()=>{s+=i,t.innerText=s,s>e&&(t.innerText=e,clearInterval(n))},25*Math.random())}animaNumeros(){this.numeros.forEach(t=>this.constructor.incrementarNumero(t))}handleMutation(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animaNumeros())}addMutationObserver(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}init(){return this.numeros.length&&this.observerTarget&&this.addMutationObserver(),this}}var o;new class{constructor(t,e){this.linksInternos=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollToSection=this.scrollToSection.bind(this)}scrollToSection(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}addLinkEvent(){this.linksInternos.forEach(t=>{t.addEventListener("click",this.scrollToSection)})}init(){return this.linksInternos.length&&this.addLinkEvent(),this}}('[data-menu="suave"] a[href^="#"]').init(),new class{constructor(t){this.accordionList=document.querySelectorAll(t),this.activeClass="ativo"}toggleAccordion(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}addAccordionEvent(){this.accordionList.forEach(t=>{t.addEventListener("click",()=>this.toggleAccordion(t))})}init(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}('[data-anime="accordion"] dt').init(),new class{constructor(t,e){this.tabMenu=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e),this.activeClass="ativo"}activeTab(t){this.tabContent.forEach(t=>{t.classList.remove(this.activeClass)});const e=this.tabContent[t].dataset.anime;this.tabContent[t].classList.add(this.activeClass,e)}addTabNavEvent(){this.tabMenu.forEach((t,e)=>{t.addEventListener("click",()=>this.activeTab(e))})}init(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabNavEvent()),this}}('[data-tab="menu"] li','[data-tab="content"] section').init(),new class{constructor(t,e,i){this.botaoAbrir=document.querySelector(t),this.botaoFechar=document.querySelector(e),this.containerModal=document.querySelector(i),this.eventToggleModal=this.eventToggleModal.bind(this),this.cliqueForaModal=this.cliqueForaModal.bind(this),this.cliqueForaModal=this.cliqueForaModal.bind(this)}toggleModal(){this.containerModal.classList.toggle("ativo")}eventToggleModal(t){t.preventDefault(),this.toggleModal()}cliqueForaModal(t){t.target===this.containerModal&&this.toggleModal()}addModalEvents(){this.botaoAbrir.addEventListener("click",this.eventToggleModal),this.botaoFechar.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.cliqueForaModal)}init(){return this.botaoAbrir&&this.botaoFechar&&this.containerModal&&this.addModalEvents(),this}}('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]').init(),new class{constructor(t){this.tooltips=document.querySelectorAll(t),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}onMouseMove(t){this.tooltipBox.style.top=t.pageY+20+"px",t.pageX+240>window.innerWidth?this.tooltipBox.style.left=t.pageX-190+"px":this.tooltipBox.style.left=t.pageX+20+"px"}onMouseLeave({currentTarget:t}){this.tooltipBox.remove(),t.removeEventListener("mouseleave",this.onMouseLeave),t.removeEventListener("mousemove",this.onMouseMove)}criarTooltipBox(t){const e=document.createElement("div"),i=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=i,document.body.appendChild(e),this.tooltipBox=e}onMouseOver({currentTarget:t}){this.criarTooltipBox(t),t.addEventListener("mousemove",this.onMouseMove),t.addEventListener("mouseleave",this.onMouseLeave)}addTooltipsEvents(){this.tooltips.forEach(t=>{t.addEventListener("mouseover",this.onMouseOver)})}init(){return this.tooltips.length&&this.addTooltipsEvents(),this}}("[data-tooltip]").init(),new class{constructor(t){this.sections=document.querySelectorAll(t),this.windowMetade=.6*window.innerHeight,this.checkDistance=function(t,e){let i;return(...s)=>{i&&clearTimeout(i),i=setTimeout(()=>{t(...s),i=null},e)}}(this.checkDistance.bind(this),50)}getDistance(){this.distance=[...this.sections].map(t=>{const e=t.offsetTop;return{element:t,offset:Math.floor(e-this.windowMetade)}})}checkDistance(){this.distance.forEach(t=>{window.pageYOffset>t.offset?t.element.classList.add("ativo"):t.element.classList.contains("ativo")&&t.element.classList.remove("ativo")})}init(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}stop(){window.removeEventListener("scroll",this.checkDistance)}}('[data-anime="scroll"]').init(),new class{constructor(t,e){this.dropdownMenus=document.querySelectorAll(t),this.events=void 0===e?["touchstart","click"]:e,this.activeClass="active",this.activeDropdownMenu=this.activeDropdownMenu.bind(this)}activeDropdownMenu(t){t.preventDefault();const e=t.currentTarget;e.classList.add(this.activeClass),s(e,this.events,()=>{e.classList.remove("active")})}addDropdownMenusEvent(){this.dropdownMenus.forEach(t=>{this.events.forEach(e=>{t.addEventListener(e,this.activeDropdownMenu)})})}init(){return this.dropdownMenus.length&&this.addDropdownMenusEvent(),this}}("[data-dropdown]").init(),new class{constructor(t,e,i){this.menuButton=document.querySelector(t),this.menuList=document.querySelector(e),this.activeClass="active",this.events=void 0===i?["touchstart","click"]:i,this.openMenu=this.openMenu.bind(this)}openMenu(){this.menuButton.classList.add(this.activeClass),this.menuList.classList.add(this.activeClass),s(this.menuList,this.events,()=>{this.menuButton.classList.remove(this.activeClass),this.menuList.classList.remove(this.activeClass)})}addMenuMobileEvents(){this.events.forEach(t=>this.menuButton.addEventListener(t,this.openMenu))}init(){return this.menuList&&this.menuList&&this.addMenuMobileEvents(),this}}('[data-menu="button','[data-menu="list').init(),function(){const t=document.querySelector("[data-semana"),e=t.dataset.semana.split(",").map(Number),i=t.dataset.horario.split(",").map(Number),s=new Date,n=s.getDay(),o=s.getHours(),a=-1!==e.indexOf(n),r=o>=i[0]&&o<i[1];a&&r&&t.classList.add("aberto")}(),function(t,e){const i=document.querySelector(e);function s(t){const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.specie}</h3><span data-numero>${t.total}</span>`,e}(t);i.appendChild(e)}(async function(){try{const e=await fetch(t);(await e.json()).forEach(t=>s(t)),new n("[data-numero]",".numeros","ativo").init()}catch(t){console.log(t)}})()}("../../animais-api.json",".numeros-grid"),o=".btc-preco",fetch("https://blockchain.info/ticker").then(t=>t.json()).then(t=>{document.querySelector(o).innerText=(1e3/t.BRL.sell).toFixed(4)}).catch(t=>console.log(Error(t)))}]);