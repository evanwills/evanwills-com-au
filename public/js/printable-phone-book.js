(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(e,...t)=>{let r=e.length===1?e[0]:t.reduce(((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1]),e[0]);return new i(r,e,n)},s=(n,r)=>{if(t)n.adoptedStyleSheets=r.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,{is:l,defineProperty:u,getOwnPropertyDescriptor:d,getOwnPropertyNames:ee,getOwnPropertySymbols:te,getPrototypeOf:ne}=Object,f=globalThis,re=f.trustedTypes,ie=re?re.emptyScript:``,ae=f.reactiveElementPolyfillSupport,p=(e,t)=>e,m={toAttribute(e,t){switch(t){case Boolean:e=e?ie:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},h=(e,t)=>!l(e,t),g={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:h};Symbol.metadata??=Symbol(`metadata`),f.litPropertyMetadata??=new WeakMap;var _=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=g){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&u(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??g}static _$Ei(){if(this.hasOwnProperty(p(`elementProperties`)))return;let e=ne(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(p(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(p(`properties`))){let e=this.properties,t=[...ee(e),...te(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(c(e))}else e!==void 0&&t.push(c(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return s(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?m:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?m:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){let r=this.constructor,i=this[e];if(n??=r.getPropertyOptions(e),!((n.hasChanged??h)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};_.elementStyles=[],_.shadowRootOptions={mode:`open`},_[p(`elementProperties`)]=new Map,_[p(`finalized`)]=new Map,ae?.({ReactiveElement:_}),(f.reactiveElementVersions??=[]).push(`2.1.1`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
var v=globalThis,y=v.trustedTypes,b=y?y.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,x=`$lit$`,S=`lit$${Math.random().toFixed(9).slice(2)}$`,oe=`?`+S,se=`<${oe}>`,C=document,w=()=>C.createComment(``),T=e=>e===null||typeof e!=`object`&&typeof e!=`function`,E=Array.isArray,ce=e=>E(e)||typeof e?.[Symbol.iterator]==`function`,D=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,k=/-->/g,A=/>/g,j=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),M=/'/g,N=/"/g,P=/^(?:script|style|textarea|title)$/i,le=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),F=le(1),I=Symbol.for(`lit-noChange`),L=Symbol.for(`lit-nothing`),R=new WeakMap,z=C.createTreeWalker(C,129);function B(e,t){if(!E(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return b===void 0?t:b.createHTML(t)}var ue=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=O;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===O?c[1]===`!--`?o=k:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=j):(P.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=j):o=A:o===j?c[0]===`>`?(o=i??O,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?j:c[3]===`"`?N:M):o===N||o===M?o=j:o===k||o===A?o=O:(o=j,i=void 0);let d=o===j&&e[t+1].startsWith(`/>`)?` `:``;a+=o===O?n+se:l>=0?(r.push(s),n.slice(0,l)+x+n.slice(l)+S+d):n+S+(l===-2?t:d)}return[B(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},V=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=ue(t,n);if(this.el=e.createElement(l,r),z.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=z.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(x)){let t=u[o++],n=i.getAttribute(e).split(S),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?fe:r[1]===`?`?pe:r[1]===`@`?me:W}),i.removeAttribute(e)}else e.startsWith(S)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(P.test(i.tagName)){let e=i.textContent.split(S),t=e.length-1;if(t>0){i.textContent=y?y.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],w()),z.nextNode(),c.push({type:2,index:++a});i.append(e[t],w())}}}else if(i.nodeType===8)if(i.data===oe)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(S,e+1))!==-1;)c.push({type:7,index:a}),e+=S.length-1}a++}}static createElement(e,t){let n=C.createElement(`template`);return n.innerHTML=e,n}};function H(e,t,n=e,r){if(t===I)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=T(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=H(e,i._$AS(e,t.values),i,r)),t}var de=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??C).importNode(t,!0);z.currentNode=r;let i=z.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new U(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new he(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=z.nextNode(),a++)}return z.currentNode=C,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},U=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=H(this,e,t),T(e)?e===L||e==null||e===``?(this._$AH!==L&&this._$AR(),this._$AH=L):e!==this._$AH&&e!==I&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ce(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==L&&T(this._$AH)?this._$AA.nextSibling.data=e:this.T(C.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=V.createElement(B(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new de(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=R.get(e.strings);return t===void 0&&R.set(e.strings,t=new V(e)),t}k(t){E(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(w()),this.O(w()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},W=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=L,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=L}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=H(this,e,t,0),a=!T(e)||e!==this._$AH&&e!==I,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=H(this,r[n+o],t,o),s===I&&(s=this._$AH[o]),a||=!T(s)||s!==this._$AH[o],s===L?e=L:e!==L&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},fe=class extends W{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===L?void 0:e}},pe=class extends W{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==L)}},me=class extends W{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=H(this,e,t,0)??L)===I)return;let n=this._$AH,r=e===L&&n!==L||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==L&&(n===L||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},he=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){H(this,e)}},ge=v.litHtmlPolyfillSupport;ge?.(V,U),(v.litHtmlVersions??=[]).push(`3.3.1`);var _e=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new U(t.insertBefore(w(),e),e,void 0,n??{})}return i._$AI(e),i},G=globalThis,K=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=_e(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return I}};K._$litElement$=!0,K.finalized=!0,G.litElementHydrateSupport?.({LitElement:K});var ve=G.litElementPolyfillSupport;ve?.({LitElement:K}),(G.litElementVersions??=[]).push(`4.2.1`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
var q=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer((()=>{customElements.define(e,t)}))},ye={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:h},be=(e=ye,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error(`Unsupported decorator location: `+r)};function J(e){return(t,n)=>typeof n==`object`?be(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function Y(e){return J({...e,state:!0,attribute:!1})}const xe=o`
  .sr-only {
    clip:rect(0,0,0,0);
    white-space:nowrap;
    border-width:0;
    width:1px;
    height:1px;
    margin:-1px;
    padding:0;
    position:absolute;
    overflow:hidden
  };`,Se=e=>{let t=/^0[45]/.test(e)?/^(\d{4})(\d{3})(\d{3})$/:/^(\d{2})(\d{4})(\d{4})$/;return e.replace(t,`$1 $2 $3`)},Ce=e=>e.replace(/[^\d]+/g,``);function X(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var Z=class extends K{constructor(...e){super(...e),this.index=0,this.name=``,this.phone=``,this._name=``,this._phone=``,this._nameRegex=/^[\w ()-]{1,20}$/,this._phoneRegex=/^0[2-9]\d{8}$/}_sanitisePhone(e){let t=e.target.value;e.target.value=Ce(t)}_sanitiseName(e){let t=e.target.value;e.target.value=t.replace(/[^\w ()\-]+/g,``)}handleChange(e){switch(e.target.dataset.field){case`name`:this._name=e.target.value;break;case`phone`:this._phone=e.target.value;break}this._nameRegex.test(this._name)&&this._nameRegex.test(this._phone)&&this.dispatchEvent(new CustomEvent(`change`,{bubbles:!0,composed:!0,detail:{index:this.index,name:this._name,phone:Se(this._phone)}}))}focusWithin(){let e=this.renderRoot.querySelector(`#name-${this.index}`);console.log(`target:`,e),e!==null&&e.focus()}render(){let e=this.index>-1?` sr-only`:`null`;return F`<li>
      <label for="name-${this.index}" class="name-label${e}">
        Name
        <span class="sr-only">${this.index}</span>
      </label>
      <input
        class="name-input"
        type="text"
        id="name-${this.index}"
        value="${this.name}"
        pattern="[\\w \\(\\)\\-]{1,20}"
        maxlength="20"
        data-field="name"
        size="15"
        @keyup=${this._sanitiseName}
        @change=${this.handleChange} />

      <label for="phone-${this.index}" class="phone-label${e}">
        Phone
        <span class="sr-only">${this.index}</span>
      </label>
      <input
        class="phone-input"
        type="tel"
        id="phone-${this.index}"
        value="${Ce(this.phone)}"
        pattern="0[2-9]\\d{8}"
        maxlength="10"
        minlength="10"
        data-field="phone"
        size="10"
        @keyup=${this._sanitisePhone}
        @change=${this.handleChange} />
    </li>`}static{this.styles=o`
  li {
    margin: 0;
    padding: 0.25rem 0;
    display: grid;
    grid-template-areas: 'name-label phone-label'
                         'name-input phone-input';
    gap: 0.5rem;
  }
  .name-label { grid-area: name-label; }
  .name-input { grid-area: name-input; }
  .phone-label { grid-area: phone-label; }
  .phone-input { grid-area: phone-input; }

  ${xe}`}};X([J({type:Number,attribute:`index`})],Z.prototype,`index`,void 0),X([J({type:String,attribute:`name`})],Z.prototype,`name`,void 0),X([J({type:String,attribute:`phone`})],Z.prototype,`phone`,void 0),X([Y()],Z.prototype,`_name`,void 0),X([Y()],Z.prototype,`_phone`,void 0),Z=X([q(`name-phone-pair`)],Z);var Q=class extends K{constructor(...e){super(...e),this.name=``,this.phone=``}render(){return F`<li>
      <span class="name">${this.name}</span>
      <span class="phone">${this.phone}</span>
    </li>`}static{this.styles=o`
    li {
      background-color: var(--row-bg);
      display: flex;
      flex-direction: row;
      font-size: var(--wrap-font-size);
      padding: 0.25rem 0.5rem;
      gap: var(--row-gap);

      span { display: block; }
    }
    .name {
      flex-grow: 1;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      width: calc(100% - 1rem - var(--row-gap) - var(--phone-width));
    }
    .phone {
      width: var(--phone-width);
      text-align: right;
    }
  `}};X([J({type:String,attribute:`name`})],Q.prototype,`name`,void 0),X([J({type:String,attribute:`phone`})],Q.prototype,`phone`,void 0),Q=X([q(`read-only-pair`)],Q);var $=class extends K{constructor(...e){super(...e),this._entries=[],this._sliceAt=10,this._count=0,this._newIndex=-1,this._copies=6}_resetNewIndex(){this._newIndex=-1,setTimeout(this._setFocus.bind(this),150)}_setFocus(){let e=this.renderRoot.querySelector(`#new-entry`);e!==null&&e.focusWithin()}_updateEntry(e){let t=this._entries.length;if(e.detail.index==-1)t<this._sliceAt*2&&(this._entries.push({...e.detail,index:this._entries.length}),this._newIndex=Date.now(),setTimeout(this._resetNewIndex.bind(this),50));else if(this._entries[e.detail.index]!==void 0)this._entries[e.detail.index]=e.detail;else throw Error(`Could not determine what to do`);this._count=this._entries.length}_print(){window.print()}renderPrint(e,t,n=!0){return F`
        <article class="print${n===!0?` print-only`:``}">
          <ul>
            ${e.map(e=>F`<read-only-pair
                name="${e.name}"
                phone="${e.phone}"></read-only-pair>`)}
          </ul>
          <ul>
            ${t.map(e=>F`<read-only-pair
                name="${e.name}"
                phone="${e.phone}"></read-only-pair>`)}
          </ul>
        </article>`}renderPrintExtra(e,t,n=!0){console.group(`<printed-phone-book>.render()`);let r=this.renderPrint(e,t,n),i=[];for(let e=1;e<this._copies;e+=1)i.push(r);return console.log(`first:`,r),console.log(`output:`,i),console.groupEnd(),i}render(){console.group(`<printed-phone-book>.render()`);let e=this._entries.slice(0,this._sliceAt),t=this._entries.slice(this._sliceAt,this._sliceAt*2);return console.groupEnd(),F`
      <div class="wrap" style="--row-count: ${this._sliceAt}">
        <div class="ui">
          <h1>Pocket phone book</h1>
          <p>This is for when technology fails us (or those in our care).</p>
          <details name="ui">
            <summary>How to use</summary>
            <ol>
              <li>Add up to ${this._sliceAt*2} phone numbers</li>
              <li>Click the "Print" button (or trigger the print window some other way)</li>
              <li>Set your page orientation to landscape</li>
              <li>Make sure you have the scaling set to 100%</li>
              <li>Make sure you have "Print backgrounds" on (otherwise, you'll loose the borders and zebra striping.)</li>
              <li>Print the page</li>
              <li>Cut out each double column block</li>
              <li>Fold in half along the centre line then unfold</li>
              <li>Glue the back and refold so the paper is double thickenss.</li>
              <li>If you have a laminator, laminate each copy</li>
            </ol>
          </details>

          <details name="ui" open>
            <summary>Enter names &amp; phone numbers </summary>
            <ol>
              ${this._entries.map(e=>F`<name-phone-pair
                  index="${e.index}"
                  name="${e.name}"
                  phone="${e.phone}"
                  @change=${this._updateEntry}></name-phone-pair>`)}
              ${this._entries.length<this._sliceAt*2&&this._newIndex===-1?F`<name-phone-pair index="-1" @change=${this._updateEntry} id="new-entry"></name-phone-pair>`:``}

            </ol>
          </details>
          <details name="ui">
            <summary>About the code</summary>
            <h2>Repository</h2>
            <p><a href="https://github.com/evanwills/printable-phone-book">https://github.com/evanwills/printable-phone-book</a></p>

            <h2>Installation</h2>
            <h3>NPM</h3>
            <pre>git clone https://github.com/evanwills/printable-phone-book.git;
npm install;
npm run dev;</pre>

            <h3>Deno</h3>
            <pre>
git clone https://github.com/evanwills/printable-phone-book.git;
deno install;
deno task dev;</pre>
        </div>
        ${this.renderPrint(e,t,!1)}
        ${this.renderPrintExtra(e,t)}
      </div>
      <button
        ?disabled=${this._entries.length===0}
        type="button"
        @click=${this._print} >Print</button>
    `}static{this.styles=o`
  * { box-sizing: border-box; }
  .wrap {
    --wrap-border-colour: #000;
    --wrap-border-style: dashed;
    --wrap-border-width: 0.05rem;
    --wrap-width: 26rem;
    --wrap-padding: 0.5rem;
    --wrap-height: calc((var(--row-count) * 2) + (var(--wrap-padding) * 2));
    --wrap-col-width: 12rem;
    --wrap-col-gap: 1rem;
    --wrap-font-size: inherit;

    --row-bg: #fff;
    --row-bg-alt: #ddd;
    --row-gap: 0.5rem;

    --phone-width: 6rem;

    display: flex;
    flex-wrap: wrap;
    place-items: center;
    gap: 2rem;
    font-size: var(--wrap-font-size, 1rem);
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  .ui {
    max-width: 25rem;
  }
  .print {
    background-color: #fff;
    border-color: var(--wrap-border-colour);
    border-style: solid;
    border-width: var(--wrap-border-width);
    color: #000;
    display: flex;
    padding: 0;
    column-gap: 0;
    width: var(--wrap-width);
    height: var(--wrap-height);
    position: relative;

    ul {
      width: 50%;
      padding: var(--wrap-padding);

      > :nth-child(odd) {
        --row-bg: var(--row-bg-alt);
      }

      + ul {
        border-left-color: var(--wrap-border-colour);
        border-left-style: solid;
        border-left-width: var(--wrap-border-width);
      }
    }
  }
  .print-only {
    display: none;
  }
  @media print {
    .print { --wrap-font-size: 13px; }
    .wrap {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      justify-content: space-around;
      align-items: space-around;
    }
    .ui, button { display: none; }
    .print-only {
      display: flex;
    }
    .print::before {
      width: var(--wrap-border-width);
    }
  }
  `}};X([Y()],$.prototype,`_entries`,void 0),X([Y()],$.prototype,`_sliceAt`,void 0),X([Y()],$.prototype,`_count`,void 0),X([Y()],$.prototype,`_newIndex`,void 0),X([Y()],$.prototype,`_copies`,void 0),$=X([q(`printed-phone-book`)],$);