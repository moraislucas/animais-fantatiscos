!function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";o.r(e);function n(t,e,o){const n=document.documentElement;function i(s){t.contains(s.target)||(t.removeAttribute("data-outside"),e.forEach(t=>{n.removeEventListener(t,i)}),o())}t.hasAttribute("data-outside")||(e.forEach(t=>{setTimeout(()=>n.addEventListener(t,i))}),t.setAttribute("data-outside",""))}function i(t){t.preventDefault(),this.classList.add("active"),n(this,["touchstart","click"],()=>{this.classList.remove("active")})}function s(){let t;t=new MutationObserver((function(e){e[0].target.classList.contains("ativo")&&(t.disconnect(),document.querySelectorAll("[data-numero]").forEach(t=>{const e=+t.innerText,o=Math.floor(e/100);let n=0;const i=setInterval(()=>{n+=o,t.innerText=n,n>e&&(t.innerText=e,clearInterval(i))},25*Math.random())}))}));const e=document.querySelector(".numeros");t.observe(e,{attributes:!0})}new class{constructor(t,e){this.linksInternos=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollToSection=this.scrollToSection.bind(this)}scrollToSection(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}addLinkEvent(){this.linksInternos.forEach(t=>{t.addEventListener("click",this.scrollToSection)})}init(){return this.linksInternos.length&&this.addLinkEvent(),this}}('[data-menu="suave"] a[href^="#"]').init(),new class{constructor(t){this.accordionList=document.querySelectorAll(t),this.activeClass="ativo"}toggleAccordion(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}addAccordionEvent(){this.accordionList.forEach(t=>{t.addEventListener("click",()=>this.toggleAccordion(t))})}init(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}('[data-anime="accordion"] dt').init(),new class{constructor(t,e){this.tabMenu=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e),this.activeClass="ativo"}activeTab(t){this.tabContent.forEach(t=>{t.classList.remove(this.activeClass)});const e=this.tabContent[t].dataset.anime;this.tabContent[t].classList.add(this.activeClass,e)}addTabNavEvent(){this.tabMenu.forEach((t,e)=>{t.addEventListener("click",()=>this.activeTab(e))})}init(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabNavEvent()),this}}('[data-tab="menu"] li','[data-tab="content"] section').init(),new class{constructor(t,e,o){this.botaoAbrir=document.querySelector(t),this.botaoFechar=document.querySelector(e),this.containerModal=document.querySelector(o),this.eventToggleModal=this.eventToggleModal.bind(this),this.cliqueForaModal=this.cliqueForaModal.bind(this),this.cliqueForaModal=this.cliqueForaModal.bind(this)}toggleModal(){this.containerModal.classList.toggle("ativo")}eventToggleModal(t){t.preventDefault(),this.toggleModal()}cliqueForaModal(t){t.target===this.containerModal&&this.toggleModal()}addModalEvents(){this.botaoAbrir.addEventListener("click",this.eventToggleModal),this.botaoFechar.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.cliqueForaModal)}init(){return this.botaoAbrir&&this.botaoFechar&&this.containerModal&&this.addModalEvents(),this}}('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]').init(),new class{constructor(t){this.tooltips=document.querySelectorAll(t),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}onMouseMove(t){this.tooltipBox.style.top=t.pageY+20+"px",t.pageX+240>window.innerWidth?this.tooltipBox.style.left=t.pageX-190+"px":this.tooltipBox.style.left=t.pageX+20+"px"}onMouseLeave({currentTarget:t}){this.tooltipBox.remove(),t.removeEventListener("mouseleave",this.onMouseLeave),t.removeEventListener("mousemove",this.onMouseMove)}criarTooltipBox(t){const e=document.createElement("div"),o=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=o,document.body.appendChild(e),this.tooltipBox=e}onMouseOver({currentTarget:t}){this.criarTooltipBox(t),t.addEventListener("mousemove",this.onMouseMove),t.addEventListener("mouseleave",this.onMouseLeave)}addTooltipsEvents(){this.tooltips.forEach(t=>{t.addEventListener("mouseover",this.onMouseOver)})}init(){return this.tooltips.length&&this.addTooltipsEvents(),this}}("[data-tooltip]").init(),document.querySelectorAll("[data-dropdown]").forEach(t=>{["touchstart","click"].forEach(e=>{t.addEventListener(e,i)})}),function(){const t=document.querySelector('[data-menu="button'),e=document.querySelector('[data-menu="list'),o=["click","touchstart"];function i(){t.classList.add("active"),e.classList.add("active"),n(e,o,()=>{t.classList.remove("active"),e.classList.remove("active")})}t&&o.forEach(e=>t.addEventListener(e,i))}(),function(){const t=document.querySelector("[data-semana"),e=t.dataset.semana.split(",").map(Number),o=t.dataset.horario.split(",").map(Number),n=new Date,i=n.getDay(),s=n.getHours(),a=-1!==e.indexOf(i),r=s>=o[0]&&s<o[1];a&&r&&t.classList.add("aberto")}(),async function(t){try{const e=await fetch(t),o=await e.json(),n=document.querySelector(".numeros-grid");o.forEach(t=>{const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.specie}</h3> <span data-numero>${t.total}</span>`,e}(t);n.appendChild(e)}),s()}catch(t){console.log(t)}}("./animais-api.json"),fetch("https://blockchain.info/ticker").then(t=>t.json()).then(t=>{document.querySelector(".btc-preco").innerText=(1e3/t.BRL.sell).toFixed(4)}).catch(t=>console.log(Error(t))),function(){const t=document.querySelectorAll('[data-anime="scroll"]'),e=.6*window.innerHeight;function o(){t.forEach(t=>{t.getBoundingClientRect().top-e<0?t.classList.add("ativo"):t.classList.contains("ativo")&&t.classList.remove("ativo")})}t.length&&(o(),window.addEventListener("scroll",o))}()}]);