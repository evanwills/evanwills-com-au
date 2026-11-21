(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(e,...t)=>new i(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,n),s=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,{is:l,defineProperty:u,getOwnPropertyDescriptor:d,getOwnPropertyNames:f,getOwnPropertySymbols:ee,getPrototypeOf:te}=Object,p=globalThis,ne=p.trustedTypes,re=ne?ne.emptyScript:``,ie=p.reactiveElementPolyfillSupport,m=(e,t)=>e,h={toAttribute(e,t){switch(t){case Boolean:e=e?re:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ae=(e,t)=>!l(e,t),oe={attribute:!0,type:String,converter:h,reflect:!1,useDefault:!1,hasChanged:ae};Symbol.metadata??=Symbol(`metadata`),p.litPropertyMetadata??=new WeakMap;var g=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=oe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&u(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??oe}static _$Ei(){if(this.hasOwnProperty(m(`elementProperties`)))return;let e=te(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(m(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m(`properties`))){let e=this.properties,t=[...f(e),...ee(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(c(e))}else e!==void 0&&t.push(c(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return s(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?h:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?h:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??ae)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};g.elementStyles=[],g.shadowRootOptions={mode:`open`},g[m(`elementProperties`)]=new Map,g[m(`finalized`)]=new Map,ie?.({ReactiveElement:g}),(p.reactiveElementVersions??=[]).push(`2.1.2`);var _=globalThis,se=e=>e,v=_.trustedTypes,ce=v?v.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,le=`$lit$`,y=`lit$${Math.random().toFixed(9).slice(2)}$`,ue=`?`+y,de=`<${ue}>`,b=document,x=()=>b.createComment(``),S=e=>e===null||typeof e!=`object`&&typeof e!=`function`,C=Array.isArray,fe=e=>C(e)||typeof e?.[Symbol.iterator]==`function`,w=`[ 	
\f\r]`,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pe=/-->/g,me=/>/g,E=RegExp(`>|${w}(?:([^\\s"'>=/]+)(${w}*=${w}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),he=/'/g,ge=/"/g,_e=/^(?:script|style|textarea|title)$/i,D=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),O=Symbol.for(`lit-noChange`),k=Symbol.for(`lit-nothing`),ve=new WeakMap,A=b.createTreeWalker(b,129);function ye(e,t){if(!C(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ce===void 0?t:ce.createHTML(t)}var be=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=T;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===T?c[1]===`!--`?o=pe:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=E):(_e.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=E):o=me:o===E?c[0]===`>`?(o=i??T,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?E:c[3]===`"`?ge:he):o===ge||o===he?o=E:o===pe||o===me?o=T:(o=E,i=void 0);let d=o===E&&e[t+1].startsWith(`/>`)?` `:``;a+=o===T?n+de:l>=0?(r.push(s),n.slice(0,l)+le+n.slice(l)+y+d):n+y+(l===-2?t:d)}return[ye(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},j=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=be(t,n);if(this.el=e.createElement(l,r),A.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=A.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(le)){let t=u[o++],n=i.getAttribute(e).split(y),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Se:r[1]===`?`?Ce:r[1]===`@`?we:P}),i.removeAttribute(e)}else e.startsWith(y)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(_e.test(i.tagName)){let e=i.textContent.split(y),t=e.length-1;if(t>0){i.textContent=v?v.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],x()),A.nextNode(),c.push({type:2,index:++a});i.append(e[t],x())}}}else if(i.nodeType===8)if(i.data===ue)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(y,e+1))!==-1;)c.push({type:7,index:a}),e+=y.length-1}a++}}static createElement(e,t){let n=b.createElement(`template`);return n.innerHTML=e,n}};function M(e,t,n=e,r){if(t===O)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=S(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=M(e,i._$AS(e,t.values),i,r)),t}var xe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??b).importNode(t,!0);A.currentNode=r;let i=A.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new N(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Te(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=A.nextNode(),a++)}return A.currentNode=b,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},N=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=M(this,e,t),S(e)?e===k||e==null||e===``?(this._$AH!==k&&this._$AR(),this._$AH=k):e!==this._$AH&&e!==O&&this._(e):e._$litType$===void 0?e.nodeType===void 0?fe(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==k&&S(this._$AH)?this._$AA.nextSibling.data=e:this.T(b.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=j.createElement(ye(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new xe(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=ve.get(e.strings);return t===void 0&&ve.set(e.strings,t=new j(e)),t}k(t){C(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(x()),this.O(x()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=se(e).nextSibling;se(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},P=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=k,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=k}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=M(this,e,t,0),a=!S(e)||e!==this._$AH&&e!==O,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=M(this,r[n+o],t,o),s===O&&(s=this._$AH[o]),a||=!S(s)||s!==this._$AH[o],s===k?e=k:e!==k&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Se=class extends P{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===k?void 0:e}},Ce=class extends P{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==k)}},we=class extends P{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=M(this,e,t,0)??k)===O)return;let n=this._$AH,r=e===k&&n!==k||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==k&&(n===k||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Te=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){M(this,e)}},Ee=_.litHtmlPolyfillSupport;Ee?.(j,N),(_.litHtmlVersions??=[]).push(`3.3.2`);var De=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new N(t.insertBefore(x(),e),e,void 0,n??{})}return i._$AI(e),i},Oe=globalThis,F=class extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=De(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return O}};F._$litElement$=!0,F.finalized=!0,Oe.litElementHydrateSupport?.({LitElement:F});var ke=Oe.litElementPolyfillSupport;ke?.({LitElement:F}),(Oe.litElementVersions??=[]).push(`4.2.2`);var Ae=e=>e??k,je=e=>Object.prototype.toString.call(e)===`[object Object]`,Me=e=>typeof e==`number`&&!Number.isNaN(e)&&Number.isFinite(e),Ne=(e,t)=>{localStorage.setItem(e,t)},Pe=(e,t,n=`string`)=>{let r=localStorage.getItem(e);if(r!==null){let e=typeof r;if(typeof r===n)return r;if(e===`string`)switch(n.substring(0,4).toLowerCase()){case`numb`:case`int`:return parseInt(r,10);case`floa`:return parseFloat(r);case`bool`:return r.toLowerCase().trim()===`true`;case`arra`:case`json`:try{return JSON.parse(r)}catch{console.error(`could not parse JSON from localStorage prop: `)}}return r}I(e,t)},Fe=(e,t,n=`string`)=>t,I=typeof localStorage<`u`?Ne:(e,t)=>{},L=typeof localStorage<`u`?Pe:Fe,Ie={hours:36e5,minutes:6e4,seconds:1e3,tenths:100},R=(e,t=``)=>{let n=t===``?``:` (#${t})`;return(t,r=null)=>{let i=typeof r,a=``;if(i===`boolean`)a=r===!0?` (before)`:` (after)`;else if(i===`string`){let e=r.trim();e!==``&&(a=` ("${e}")`)}return`${e}.${t}()${n}${a} `}},Le=e=>{let t=[`hours`,`minutes`,`seconds`,`tenths`],n={},r=!1;for(let i=0;i<4;i+=1){let a=t[i],o=typeof e[a]==`number`;(r===!0||o===!0&&e[a]>0)&&(n[a]=o===!0?e[a]:0,r=!0)}return n},z=(e,t,n=!0)=>{let r=typeof t!=`boolean`||t===!0?Le(e):{...e},i=Object.keys(r),a=i.filter(e=>e!==`tenths`),o=i.filter(e=>e===`tenths`),s=``;for(let e=0;e<a.length;e+=1){let t=a[e],n=r[t]<10&&s!==``?`0`:``;s+=(s===``?``:`:`)+n+Math.round(r[t])}return n===!1&&(o.length>0?s+=`${s===``?`0.`:`.`}${Math.round(r.tenths)}`:s===``&&(s=`0`)),s},B=e=>{let t=[`hours`,`minutes`,`seconds`,`tenths`],n={hours:0,minutes:0,seconds:0,tenths:0},r=e;for(var i=0;i<4;i+=1){let e=t[i],a=Re(r,Ie[e]);r=a.part,n[e]=a.whole}return n},Re=(e,t)=>{let n=Math.floor(e/t);return{whole:n,part:e-n*t}},ze=e=>{let t=/^(?:(?:(?:([0-1]?[0-9]|2[0-4]):)?([0-5]?[0-9]):)?([0-5]?[0-9])|([6-9][0-9]|[1-9][0-9]{2,5}))$/.exec(e);if(t!==null){let e=t.length;if(e===5&&t[4]!==void 0){let e=Number.parseInt(t[4],10);return e>86400&&(e=86400),e*1e3}else if(e>0){let e=Number.parseInt(t[3],10),n=typeof t[2]==`string`&&t[2]!==``?Number.parseInt(t[2],10):0,r=typeof t[1]==`string`&&t[1]!==``?Number.parseInt(t[1],10):0;return(e+n*60+r*3600)*1e3}}return!1},Be=e=>{switch(typeof e){case`number`:return e>864e5?864e5:e>86400?e:e*1e3;case`string`:return ze(e)}return!1},V=(e,t,n,r=`not `)=>`You cannot ${e} <talking-timer> because it is ${r}in a "${t}" state. Current state is: "${n}"`,Ve={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},He=e=>(...t)=>({_$litDirective$:e,values:t}),Ue=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},H=class extends Ue{constructor(e){if(super(e),this.it=k,e.type!==Ve.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===k||e==null)return this._t=void 0,this.it=e;if(e===O)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};H.directiveName=`unsafeHTML`,H.resultType=1;var U=He(H),We=e=>{let t=Math.round(e/3/1e3);if(Qe(t,60))return`minute`;if(t<95)return`${t} seconds`;t=Math.round(t/60*100)/100;let n=t%1;t-=n,n*=100;let r=t>1?`s`:``;return n<5?`${t} minute${r}`:n>95?`${t+1} minute${r}`:Qe(n,50,5)?`${t} and a half minutes`:(n=Math.round(n/100*60),`${t} minute${r} and ${n} seconds`)},W=(e,t,n)=>D`
<button
  class="special-btn ${e}-btn"
  id="ss-${e}"
  type="button"
  value="${e}"
  @click=${n}>
  ${t}
</button>`,Ge=()=>{let e=[];for(let t=1;t<=10;t+=1)e.push({label:t.toString(),value:t});return e},G=e=>{let t=[{message:`Use the whole of your first ${We(e)} for centering.`,offset:e-1e4},{message:`You should be finishing centering and starting to open up.`,offset:Math.round(2/3*e)-5e3},{message:`You should be starting to pull up now.`,offset:Math.round(e/2)-5e3}];return e>9e4&&t.push({message:`Remember to clean up your rim and remove excess water before you run out of time`,offset:2500}),t},Ke=(e,t)=>{let n=e.find(e=>e.value===t);return n===void 0?``:n.label},K=e=>e.substring(0,1).toUpperCase()+e.substring(1,e.length-1),qe=(e,t,n)=>`${K(e)} number ${t} of ${n}`,Je=(e,t)=>`Waiting to start ${K(e)} number ${t}`,Ye=(e,t)=>{let n=[];return t>6e4&&n.push({message:`You will be starting your next ${e} in 1 minute`,offset:6e4}),n.push({message:`Get ready to start your next ${e} in twenty seconds`,offset:23e3},{message:`Are you ready to start your next ${e}?`,offset:4500}),n},Xe=e=>{let t=e.replace(/^.*?(?=[0-9]+ of [0-9]+$)/i,``),n=e.replace(t,``);return n.trim()===``?e:D`${n}<br />${t}`},Ze=(e,t,n,r,i,a)=>{let o=t>1?`s`:``,s=i.replace(/s$/i,``);return D`
    <p>
      ${e} will be throwing <span class="i-will--count">${t}</span>,
      <span class="i-will--time">${U(Ke(a,n))}</span>
      <span class="i-will--type">${s}${o}</span>, with maximum of
      <span class="i-will--break">${U(Ke(a,r))}s</span>
      break between each ${s}.<br />
      Total session time will be
      <span class="i-will--total">${Math.ceil(n*t+(t-1)*r)/6e4} minutes</span>,
      plus reviewing time.
    </p>
  `},q=e=>{let t=e;return typeof t==`string`&&(t=parseInt(t,10)),Me(t)?t:0},Qe=(e,t,n=5)=>e>=t-n&&e<=t+n,$e=(e,t)=>{let n=e.trim();if(n===``)return``;let r=n.toLowerCase();return D`<button accesskey="${r===`restart`?`R`:`N`}" class="btn btn--${r}" .value="${r}" @click=${t}>${n}</button>`},J=(e,t,n)=>`Cannot ${e} timer because it is not in the "${t}" state. Current state: "${n}"`,et=(e,t,n,r,i,a=`s`)=>D`
  <li>
    <div>
      <label .for="${r}">${e}</label>
      <select .id="${r}" @change=${i}>
        ${n.map(e=>D`<option value="${e.value}" ?selected=${e.value===t}>${U(e.label)}${a}</option>`)}
      </select>
    </div>
  </li>
`,tt=(e,t,n)=>{let r=e.toLowerCase();return D`
    <li>
      <label for="ss-type--${r}">
        <input
          class="hidden"
          id="ss-type--${r}"
          type="radio"
          name="ss-type-radio"
          value="${r}"
          ?checked=${t}
          @change=${n} />
        ${e}
      </label>
    </li>`},nt=(e,t,n)=>D`
  <header><h2>${e}</h2></header>
  <main><p>${t}</p></main>
  <footer>
    ${W(`reset`,`Reset session`,n)}
  </footer>
`,Y=(e,t,n,r=1)=>{let i=new SpeechSynthesisUtterance(e);return(typeof e!=`string`||e.trim()!==``)&&(i.volume=1,i.rate=r,i.pitch=1,i.voice=n,t.speak(i)),i},rt=e=>{let t=e.split(`,`).map(e=>e.trim().toLowerCase()),n=speechSynthesis.getVoices().map(e=>({voice:e,name:e.name.trim().toLowerCase()}));for(let e=0;e<t.length;e+=1){let r=n.find(n=>n.name.includes(t[e]));if(r!==void 0)return r.voice}return null},it=class extends F{static properties={options:{type:Array},value:{type:String,reflect:!0},label:{type:String},id:{type:String}};constructor(){super(),this.options=[],this.value=``,this.label=``,this.id=``}_changeHandler(e){this.value=e.target.value,this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback()}renderInput(e,t,n,r,i){return D`
      <li>
        <input
          ?checked="${n==r}"
          .id="${e}-${n}"
          .name="${e}"
          type="radio"
          .value="${n}"
          @change=${i} />
        <label for="${e}-${n}">${t}</label>
      </li>`}render(){let e=`${this.id}--desc-by`;return D`
      <li>
        <span class="label" id="${e}">${this.label}</span>
        <ul
          role="group"
          aria-labelledby="${e}">

          ${this.options.map(e=>this.renderInput(this.id,e.label,e.value,this.value,this._changeHandler))}
        </ul>
      </li>`}static get styles(){return o`
        li {
          align-items: center;
          border-bottom: 0.05rem solid #fff;
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          justify-content: flex-start;
          margin: 0;
          padding: 0;
          text-align: start;
        }
        span.label {
          display: inline-block;
          min-width: 11rem;
          padding: 0.5rem 1rem;
        }
        ul {
          border: 0.05rem solid #fff;
          border-radius: 5rem;
          display: flex;
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
        ul li {
          border: none;
          margin: 0;
          padding: 0;
        }
        input {
          border: 0 !important;
          clip: rect(0,0,0,0) !important;
          height: 1px !important;
          margin: -1px !important;
          overflow: hidden !important;
          padding: 0 !important;
          position: absolute !important;
          white-space: nowrap !important;
          width: 1px !important;
        }
        ul li:nth-child(odd) label {
          border-right: none;
        }
        ul li:nth-child(even) label {
          border-left: none;
        }
        label {
          padding: 0.05rem 1.5rem 0.15rem;
          border-radius: 10rem;
          position: relative;
          display: inline-block;
          cursor: pointer;
          line-height: 1.3rem;
        }
        input:focus + label {
          outline: 0.1rem solid #fff;
          outline-offset: 0.2rem;
        }
        input:checked + label {
          background-color: #fff;
          border: 0.05rem solid #fff;
          color: #000;
          margin: -0.05rem;
          padding: 0.15rem 0.75rem 0.25rem 2.25rem;
        }
        input:checked + label::before {
          border: 0.175rem solid #000;
          border-radius: 10rem;
          content: '';
          display: block;
          height: 1.1rem;
          left: 1rem;
          opacity: 1;
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 1.1rem;
        }
        input:checked + label::after {
          border: none;
          content: '\\02518';
          display: block;
          font-size: 1.1rem;
          font-weight: bold;
          height: 1.2rem;
          left: 1rem;
          line-height: 1.5rem;
          opacity: 1;
          position: absolute;
          padding-left: 0.25rem;
          top: 50%;
          text-align: center;
          transform: translate(-50%, -50%) rotate(30deg);
          width: 1.1rem;
        }
        @media screen and (min-width: 37rem) {
          li {
            flex-direction: row;
          }
        }
      `}};window.customElements.define(`radio-input`,it);var at=(e,t)=>e>t-5e3&&e<t+5e3,X=e=>e===0||e>1?`s`:``,ot=(e,t)=>{for(let n=0;n<t.length;n+=1)if(at(e,t[n])===!0)return!0;return!1},st=(e,t)=>e>t?e-t:t-e,Z=(e,t,n)=>{let r=``,i=e,a=``;if(n=typeof n==`boolean`?n:!1,i<2e4){let e=n?` seconds${t}`:i>1e4?` seconds`:``;return Math.round(i/1e3)+e}if(i>=36e5){let e=Math.floor(i/36e5);i-=e*36e5,r+=a+e.toString()+` hour`,r+=X(e),a=`, `}if(i>=6e4){let e=Math.floor(i/6e4);i-=e*6e4,r=a+e.toString()+` minute`,r+=X(e),a=`, `}return i=Math.round(i/1e3),i>0&&(r+=a+i.toString()+` second`,r+=X(i),a=`, `),r+t},ct=(e,t,n)=>{let r=``,i=Number.isInteger(t/e)?t/e:t;switch(i){case 2:return n.half;case 3:r=`third`;break;case 4:r=`quarter`;break;case 5:r=`fifth`;break;case 6:r=`sixth`;break;case 7:r=`seventh`;break;case 8:r=`eighth`;break;case 9:r=`ninth`;break;case 10:r=`tenth`;break}let a=e/(t/i);return`${a} ${r}${X(a)}`},lt=e=>e.sort((e,t)=>e.offset<t.offset?1:e.offset>t.offset?-1:0),ut=(e,t)=>{let n=[];return e.filter(e=>n.indexOf(e.offset)===-1&&(e.offset<=3e4||!ot(e.offset,n))&&e.offset<t&&e.offset>0?(n.push(e.offset),!0):!1)},dt=e=>{switch(e){case`m`:return 6e4;case`h`:return 36e5;default:return 1e3}},ft=(e,t,n)=>{let r=t/2,i=e.time*1e3,a=[];for(let e=i;e<=r;e+=i)a.push(Q({offset:e,message:Z(e,n.last)}),Q({offset:t-e,message:Z(e,n.first)}));return a},pt=e=>/^1?[0-9]$/.test(e)?1.5:1,mt=(e,t,n)=>{let r=[],i=dt(e.unit),a=0;e.every===!0?(i*=e.time,a=t/i):a=e.time;let o=e.relative===`first`?t:0,s=e.relative===`first`;for(let e=a;e>0;--e){let t=e*i;r.push(Q({message:Z(t,n,s),offset:st(o,t)}))}return r},Q=e=>({offset:e.offset,message:e.message,rate:pt(e.message)}),ht=e=>e.map(Q),gt=(e,t,n)=>{let r=[],i=e.time*dt(e.unit),a=e.relative===`last`?0:t;for(let t=i;t<=e.time;t+=i)r.push(Q({offset:st(a,t),message:Z(t,n)}));return r},_t=(e,t,n)=>{let r=e.relative===`first`?n.first:n.last;if(e.all===!0||e.every===!0||e.multiplier>1){if((e.all===!0||e.every===!0)&&e.multiplier<=1)return e.relative===``?ft(e,t,n):mt(e,t,r);if(e.multiplier>1)return gt(e,t,r)}let i=e.time*1e3;return[Q({offset:e.relative===`first`?t-i:i,message:Z(i,r)})]},vt=(e,t,n)=>{let r=0,i=t/2;if(r=t/e.denominator,e.denominator===2)return[{message:`Half way`,offset:i,raw:e.raw}];let a=[],o=e.multiplier===0||e.multiplier>=e.denominator?e.denominator:e.multiplier;if(e.relative!==``){let i=e.relative===`first`?n.first:n.last,s=e.relative===`first`?t:0;for(let t=1;t<=o;t+=1)a.push(Q({offset:st(s,r*t),message:ct(t,e.denominator)+i}))}else for(let i=1;i<=o/2;i+=1){let o=ct(i,e.denominator);a.push(Q({offset:t-r*i,message:o+n.last}),Q({offset:r*i,message:o+n.first}))}return a.map(e=>at(e.offset,i)?{offset:i,message:n.half}:e)},yt=(e,t)=>{let n=e.groups,r=n.allEvery===void 0?``:n.allEvery.toLocaleLowerCase(),i=n.relative===void 0?``:n.relative.toLocaleLowerCase(),a={all:r===`all`||i===``,every:r===`every`&&i!==``,exclude:t,isFraction:!1,multiplier:n.multiplyer!==void 0&&typeof(n.multiplyer*1)==`number`?Number.parseInt(n.multiplyer,10):1,relative:i,raw:e[0],time:null,unit:null};return a.every===!0?(a.all=!1,a.multiplier=0):a.all===!0&&(a.multiplier=0),a},bt=(e,t,n,r)=>{let i=Number.parseInt(e.denominator,10);return t.isFraction=!0,t.denominator=i,t.multiplier>i-1&&(t.multiplier=i-1),vt(t,n,r)},xt=(e,t,n=!1,r=`fraction`,i=null)=>{let a=je(i)?i:{first:` gone`,last:` to go`,half:`Half way`},o=/(?<=^|\s)(?<allEvery>all|every)?[_-]?(?<multiplyer>[0-9]+)?[_-]?(?<relative>(?:la|fir)st)?[_-]?(?:(?<hmsNum>[1-9][0-9]*)[_-]?(?<hmsUnit>[smh]?)|(?<numerator>[1-9])?[_-]?1\/(?<denominator>[2-9]|10))(?=\s|$)/gi,s,c=[],l=[],u=[];if(typeof t!=`string`||t===``)return[];let d=typeof n==`boolean`?n:!1;for(;(s=o.exec(t))!==null;){let t=s.groups,n=yt(s,d);if(t.denominator!==void 0){let i=bt(t,n,e,a);r===`order`?u=u.concat(i):l=l.concat(i)}else{t.hmsNum=Number.parseInt(t.hmsNum,10),n.unit=dt(t.hmsUnit),n.time=t.hmsNum;let i=_t(n,e,a);r===`order`?u=u.concat(i):c=c.concat(i)}}let f=[];switch(r){case`order`:f=u;break;case`time`:f=c.concat(l);break;default:f=l.concat(c)}return lt(ut(f,e))},St=e=>{let t=e;if(typeof e==`string`)try{t=JSON.parse(e)}catch{return!1}if(!Array.isArray(t)||t.length===0)return!1;for(let e=0;e<t.length;e+=1)if(!je(t[e])||typeof t[e].offset!=`number`||typeof t[e].message!=`string`)return!1;return ht(t)},Ct=(e,t)=>(n,r)=>(i,a)=>{let o=e.createOscillator();var s=e.createGain();o.connect(s),o.type=`sign`,s.connect(e.destination),s.gain.exponentialRampToValueAtTime(t,e.currentTime+r),o.frequency.value=n,o.start(0)},wt=()=>{let e=.75,t=[440,261.6,830.6,440,261.6,830.6,392,440,261.6,830.6,440,261.6,830.6,392,440],n=0,r=0,i=Ct(new AudioContext,1e-5);for(let a=0;a<t.length;a+=1)new Promise((r,o)=>{let s=i(t[a],e);window.setTimeout(s,n)}),n+=.425*1e3,r+=e*.667*1e3;return r},Tt=class extends F{static properties={always:{type:String},milliseconds:{type:Number},label:{type:String},progress:{type:Number}};constructor(){super(),this.milliseconds=null,this.progress=null,this.label=``,this.always=`mst`,this._ePre=R(`time-display`)}connectedCallback(){super.connectedCallback()}colon(e,t=`:`){return e===null?``:D`<span class="${t===`.`?`colon colon--point`:`colon`}">${t}</span>`}num(e,t=!1){return e===null?``:D`<span class="${t===!0?`num num--small`:`num`}">${e}</span>`}alwaysShow(e,t,n=null,r=2){let i=t;return n===null&&(i===null||i===0)&&this.always.includes(e.substring(0,1))===!1?null:(i=i.toString().substring(0,r),n===null?i:i.padStart(r,`0`))}showNum(e,t=null,n=!1,r=`:`){return D`
      ${t===null?``:this.colon(e,r)}
      ${this.num(e,n)}
    `}render(){let e=B(this.milliseconds),t=this.alwaysShow(`hours`,e.hours),n=this.alwaysShow(`minutes`,e.minutes,t),r=this.alwaysShow(`seconds`,e.seconds,n),i=this.alwaysShow(`tenths`,e.tenths,r,1);return D`
      <div class="human">
        <span class="whole">
          ${this.showNum(t)}
          ${this.showNum(n,t)}
          ${this.showNum(r,n)}
          ${this.showNum(i,r,!0,`.`)}
        </span>
        ${this.progress===null?``:D`
            <label for="tmpProg">
              Time remaining
              ${this.label.trim()===``?``:`for ${this.label}`}
            </label>
            <progress id="tmpProg" max="100" .value="${this.progress}" tabindex="0">${this.progress}$</progress>`}
      </div>
    `}static get styles(){return o`
      div.human {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
      }
      div.human .whole {
        align-items: center;
        display: flex;
        justify-content: center;
        padding
      }
      div.human:has(progress) .whole {
        padding-bottom: 0.5rem;
      }
      div.human .num {
        line-height: 4rem;
        font-size: 4rem;
      }
      div.human .num--small {
        align-self: flex-end;
        font-size: 2rem;
        line-height: 2.1rem;
      }
      div.human .colon {
        font-size: 4rem;
        line-height: 4rem;
      }
      div.human label {
        display: none;
        font-size: 0.875rem;
        text-align: center;
      }
      div.human:focus-within label {
        display: block;
      }
      div.human progress {
        display: block;
        width: 100%;
      }
    `}};window.customElements.define(`time-display`,Tt);var Et=(e,t)=>t.trim()===``?[...e]:e.filter(e=>e.event===t),Dt=(e,t=``,n=10,r=!0)=>{let i=Et(e,t);return r===!0&&(i=i.reverse()),n>0?i.slice(0,n):i},Ot=e=>typeof e==`string`&&e.trim()!==``,kt=e=>{let t=``,n=``;return typeof e==`string`&&(t=e.trim(),t!==``&&(n=` - ${t}`)),{ext:n,src:t}},$=e=>e.toLowerCase().replace(/[^a-z\d]+/gi,``),At=e=>e.replace(/[^a-z\d_-]+/gi,``),jt=class{_actions={};_log=[];_dispatcher=`simpleDispatcher`;constructor(e=!1){this._setLogging(e===!0)}_exists(e,t){return this._actions[e]!==void 0&&typeof this._actions[e][t]==`function`}_simpleDispatcher(e,t,n=``){let r=$(e);if(this._actions[r]!==void 0){let e=Object.keys(this._actions[r]);for(let n of e)this._actions[r][n](t);return e}return[]}_loggingDispatcher(e,t,n){let{ext:r,src:i}=kt(n),a=$(e);console.groupCollapsed(`ComponentComms.dispatch("${a}")${r}`),i!==``&&console.log(`SOURCE:`,i),console.log(`event:`,a),console.log(`data:`,t);let o=this._simpleDispatcher(a,t);return console.log(`dispatched to:`,o),this._log.push({time:Date.now(),event:a,data:t,ids:o}),console.groupEnd(),o}_addListenerInner(e,t,n,r=!1){let i=$(e),a=At(t);if(this._exists(i,a)===!0&&r!==!0)throw Error(`_addListener() could not add new watcher because a watcher with the ID "${a}" already _exists`);this._actions[i]===void 0&&(this._actions[i]={}),this._actions[i][a]=n}_setLogging(e){this._dispatcher=e===!0?`_loggingDispatcher`:`_simpleDispatcher`}enableLogging(){return this._setLogging(!0)}disableLogging(){this._setLogging(!1)}addListener(e,t,n,r=!1){if(!Ot(e)&&!Array.isArray(e)||!Ot(t)||typeof n!=`function`)throw Error("addListener() could not add new listener because `event` or `id` were empty strings or supplied `listener` was not a function.");if(Array.isArray(e))for(let i of e)this._addListenerInner(i,t,n,r);else this._addListenerInner(e,t,n,r)}removeListener(e,t){let n=$(e),r=At(t);if(this._exists(e,r)===!0){let t={};for(let e of Object.keys(this._actions[n]))e!==r&&(t[e]=this._actions[n][e]);return this._actions[e]=t,!0}return!1}removeListenersById(e){let t=0,n=At(e);for(let e of Object.keys(this._actions))this.removeListener(e,n)===!0&&(t+=1);return t}dispatch(e,t=null,n=``){this[this._dispatcher](e,t,n)}getLogs(e=``,t=10,n=!0){return Dt(this._log,e,t,n)}clearLogs(){this._log=[]}},Mt=class extends F{static properties={always:{type:String},autoReset:{type:Number,attribute:`auto-rest`},autoStartAfter:{type:Number,attribute:`auto-start-after`},comms:{type:jt},debounceTime:{type:Number},duration:{},endMessage:{type:String,attribute:`end-message`},humanRemaining:{type:String,reflect:!0,attribute:`human-remaining`},label:{type:String},mergeBoth:{type:Boolean,attribute:`merge-both`},noEndChime:{type:Boolean,attribute:`no-end-chime`},noPause:{type:Boolean,attribute:`no-pause`},noRestart:{type:Boolean,attribute:`no-restart`},noReset:{type:Boolean,attribute:`no-reset`},noSayEnd:{type:Boolean,attribute:`no-say-end`},noSayStart:{type:Boolean,attribute:`no-say-start`},percent:{type:Number,reflect:!0},pauseBtnTxt:{type:String,attribute:`pause-btn-txt`},pauseBtnValue:{type:String,attribute:`pause-btn-value`},priority:{type:String},remaining:{type:Number,reflect:!0},say:{type:String},sayData:{type:Array,attribute:`say-data`},startBtnTxt:{type:String,attribute:`start-btn-txt`},startmessage:{type:String,attribute:`start-message`},selfDestruct:{type:Number,attribute:`self-destruct`},state:{type:String,reflect:!0},timer:{type:Number,reflect:!0},timerID:{type:String,attribute:`timer-id`},voice:{type:String}};constructor(){super(),this.always=`mst`,this.autoReset=-1,this.autoStartAfter=-1,this.debounceTime=200,this.endMessage=`Your time is up!`,this.label=``,this.noEndChime=!1,this.noPause=!1,this.noRestart=!1,this.noReset=!1,this.noSayEnd=!1,this.remaining=0,this.pauseBtnTxt=`Pause`,this.pauseBtnValue=`pause`,this.startBtnTxt=`Start`,this.priority=`fraction`,this.percent=1,this.say=`1/2 30s last20 last15 allLast10`,this.sayData=[],this.mergeBoth=!1,this.noSayStart=!1,this.startmessage=`Ready, Set, Go`,this.selfDestruct=-1,this.state=`unset`,this.timerID=this.id,this.voice=``,this._autoStartID=null,this._defaultVoice=`Catherine, James, English (Australia), Zira`,this._decrementCB=this._getDecrementTimer(this),this._debounce=null,this._intervalID=null,this._lastTime=null,this._messages=[],this._nextMsg=null,this._nextTime=null,this._nextRate=null,this._ogMessages=[],this._total=0,this._suffixes={first:` gone`,last:` to go`,half:`Half way`},this._ePre=R(`talking-timer`),this._keyUp=this._getKeyUp(this),this._voice=window.speechSynthesis,this._voiceName=null,this._utterance=new SpeechSynthesisUtterance(``),this._utterance.volume=1,this._utterance.rate=1}pause(){this.state===`running`?this._pauseTimer():console.warn(V(`pause`,`running`,this.state))}reset(e=!1){e===!0&&(clearInterval(this._intervalID),this._intervalID=null,this._setState(`ended`),this._setState(`ready`)),this.state===`running`?console.warn(V(`reset`,`running`,this.state,``)):this._parseAttributes()}resume(){this.state===`paused`?this._resumeTimer():console.warn(V(`resume`,`paused`,this.state))}start(){this.state===`ready`||this.state===`ended`?this._doStartup():console.warn(V(`start`,`ready" or "ended`,this.state))}stop(e=!1){this.state===`running`?this._doEnding(e):console.warn(V(`stop`,`running`,this.state))}_parseAttributes(){let e=Be(this.duration);if(e===!1)throw Error(`<talking-timer> must have a duration to work with. duration ("${this.duration}") was invalid`);this._total=e,this.state=`ready`;let t=St(this.sayData),n=typeof this.say==`string`||this.say.trim()!==``;(this.mergeBoth===!1||n===!1)&&t!==!1?this._ogMessages=t:n===!0&&(typeof this.say==`string`&&(this._ogMessages=xt(this._total,this.say)),(this.mergeBoth===!0||this._ogMessages.length===0)&&(this._ogMessages=this._ogMessages.concat(t))),Array.isArray(this._ogMessages)&&this._ogMessages.length>0&&(this._ogMessages=ut(lt(this._ogMessages),this._total)),this._resetData(),this.state=`ready`,this._voiceName=null,this.voice!==``&&(this._voiceName=rt(this.voice)),this._voiceName===null&&(this._voiceName=rt(this._defaultVoice)),this._voiceName!==null&&(this._utterance.voice=this._voiceName)}_btnClick(e){let t=Date.now();if(this._debounce===null||t>this._debounce){this._debounce=t+this.debounceTime;let{value:n}=e.target;switch(n){case`start`:this._startTimer();break;case`pause`:this._pauseTimer();break;case`resume`:this._resumeTimer();break;case`restart`:this._restartTimer();break;case`reset`:this._resetTimer();break;case this.pauseBtnTxt.toLowerCase():this.dispatchEvent(new CustomEvent(`custompause`,{bubbles:!0,composed:!0,detail:this.pauseBtnValue}))}}}_getFutureStart(){return()=>{this.state===`ready`&&(this._resetData(),this._doStartup())}}_doEnding(e=!1){if(this.state!==`running`)throw Error(J(`ended`,`running`,this.state));let t=e===!0||this.noEndChime===!0&&(this.noSayEnd===!0||this.endMessage===``);this._setState(t===!1?`ending`:`ended`),this.remaining=0,clearInterval(this._intervalID),this._intervalID=null;let n=null;if(t===!0){this._setState(`ended`);return}let r=e=>()=>{e._setState(`ended`),e.autoStartAfter>-1&&(e._autoStartID=setTimeout(e._getFutureStart(),e.autoStartAfter+0))},i=e=>()=>{let t=wt();setTimeout(r(e),t)};if(this.noSayEnd!==!0&&this.endMessage!==``&&(n=Y(this.endMessage,this._voice,this._voiceName),this.noEndChime===!0)){n.addEventListener(`end`,r(this));return}this.noEndChime!==!0&&(n===null?i(this)():n.addEventListener(`end`,i(this)))}_doStartup(){this._autoStartID!==null&&(clearTimeout(this._autoStartID),this._autoStartID=null),this._setState(`starting`),this.noSayStart===!0?(this._lastTime=Date.now(),this._initInterval(!0),this._setState(`running`)):Y(this.startmessage,this._voice,this._voiceName,1.25).addEventListener(`end`,(e=>()=>{this._lastTime=Date.now(),e._initInterval(!0),this._setState(`running`)})(this))}_getDecrementTimer(e){return()=>{let t=Date.now(),n=t-e._lastTime;e._lastTime=t,e.remaining-=n,e.remaining<=0&&this._doEnding(),e.percent=e.remaining>0?Math.round(e.remaining/e._total*1e5)/1e3:0,e._tryToSayNext()}}_getKeyUp(e){return t=>{if(t.shiftKey===!0)switch(t.key){case`S`:switch(t.preventDefault(),e.state){case`ready`:e.noPause!==!0&&e._startTimer();break;case`running`:e._pauseTimer();break;case`paused`:e._resumeTimer();break;case`ended`:e._restartTimer();break}break;case`N`:switch(e.state){case`paused`:case`ended`:e._resetTimer();break}case`R`:switch(e.state){case`paused`:case`ended`:e._restartTimer();break}}}}_getMilliseconds(){if(this.state!==`ready`)return this.remaining;let e=Be(this.duration);return e!==!1&&(this._total=e),this._total}_getNextMsg(){let e=this._messages.shift();e===void 0?(this._nextTime=null,this._nextMsg=null,this._nextRate=null):(this._nextTime=e.offset+800,this._nextMsg=e.message,this._nextRate=typeof e.rate==`number`?e.rate:1)}_initInterval(e=!1){(this._intervalID===null||e===!0)&&(this._intervalID=setInterval(this._decrementCB,50))}_pauseTimer(){if(this.state!==`running`)throw Error(J(`pause`,`running`,this.state));this._setState(`paused`),clearInterval(this._intervalID),this._intervalID=null}_resetData(){this._messages=[...this._ogMessages],this.remaining=this._total,this.percent=100,this._tryToSayNext()}_resetTimer(){if(this.state!==`paused`&&this.state!==`ended`)throw Error(J(`reset`,`paused" or "ended`,this.state));this._resetData(),this._setState(`ready`)}_restartTimer(){if(this.state!==`paused`&&this.state!==`ended`)throw Error(J(`restart`,`paused`,this.state));this._resetData(),this._doStartup()}_resumeTimer(){if(this.state!==`paused`)throw Error(J(`resume`,`paused`,this.state));this._setState(`running`),this._lastTime=Date.now(),this._initInterval()}_saySomething(e,t=1){return this._utterance.text=e,this._utterance.rate=t,this._voice.speak(this._utterance),this._utterance}_setState(e){this.state!==e&&(this.state=e,this.dispatchEvent(new Event(`statechange`,{bubbles:!0,composed:!0})))}async _startTimer(){if([`ready`,`ended`,`starting`].includes(this.state)===!1)throw Error(J(`start`,`ready" or "endend`,this.state));this.state!==`starting`&&this._doStartup()}_tryToSayNext(){(this._nextTime===null||this._nextTime>this.remaining)&&(this._nextMsg!==null&&Y(this._nextMsg,this._voice,this._voiceName,this._nextRate),this._getNextMsg())}_getMainBtnData(){let e=``,t=``;switch(this.state){case`ready`:e=this.startBtnTxt;break;case`running`:this.noPause===!1&&(e=this.pauseBtnTxt,t=this.pauseBtnValue);break;case`paused`:e=`Resume`;break;case`ended`:e=`Restart`;break;default:return null}return e===``?null:(t===``&&(t=e.toLocaleLowerCase()),{txt:e,val:t})}_handleConfigUpdate(e){this.duration=e.duration,this.noEndChime=e.noEndChime,this.noSayEnd=e.noSayEnd,this.noSayStart=e.noSayStart,this._parseAttributes()}_handleSayDataUpdate(e){console.group(`_handleSayDataUpdate()`),console.log(`data:`,e),console.groupEnd()}_handleSayListUpdate(e){console.group(`_handleSayListUpdate()`),console.log(`data:`,e),console.groupEnd()}_handleEndMsgUpdate(e){console.group(`_handleEndMsgUpdate()`),console.log(`data:`,e),console.groupEnd()}_handleDurationUpdate(e){console.group(`_handleDurationUpdate()`),console.log(`data:`,e),console.groupEnd()}connectedCallback(){super.connectedCallback(),this._parseAttributes(),this.getRootNode().addEventListener(`keyup`,this._keyUp),this.comms.addListener(`confirmconfig`,this.timerID,this._handleConfigUpdate.bind(this)),this.comms.addListener(`saydata`,this.timerID,this._handleSayDataUpdate.bind(this)),this.comms.addListener(`endmsg`,this.timerID,this._handleEndMsgUpdate.bind(this)),this.comms.addListener(`saylist`,this.timerID,this._handleSayListUpdate.bind(this)),this.comms.addListener(`duration`,this.timerID,this._handleDurationUpdate.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener(`keyup`,this._keyUp),this.state=`unset`,this.comms.removeListenersById(this.timerID)}render(){let e={pause:this.noPause,reset:this.noReset,restart:this.noRestart},t=this._getMainBtnData();return D`
      <div class="wrap" @keyup=${this._keyUp}>
        <header>
          <slot><h2>${this.label}</slot>
        </header>
        <main>
          ${this.state===`unset`?``:D`<time-display
                .always="${this.always}"
                .milliseconds="${this._getMilliseconds()}"
                .progress=${100-this.percent}
                .label="${this.label}"></time-display>`}
        </main>
        <footer @click=${this._btnClick}>
          ${this.state===`unset`?D`<p>Not enough data</p>`:t===null?``:D`<button accesskey="s" class="btn btn--${t.val}" .value="${t.val}" @click=${this._btnClick}>${t.txt}</button>`}
          ${this.state===`paused`&&e.restart!==!0?$e(`Restart`,this._btnClick):``}
          ${(this.state===`paused`||this.state===`ended`)&&e.reset!==!0?$e(`Reset`,this._btnClick):``}
        </footer>
      </div>
    `}static get styles(){return o`
      div.wrap {
        border: var(--tt-border, 0.05rem solid #000);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        font-family: var(--tt-font, arial, helvetica, sans-serif);
        justify-content: center;
        margin: 0 auto;
        max-width: 18rem;
        min-width: 12.5rem;
        width: 100%;

      }
      footer {
        border-top: var(--tt-border, 0.05rem solid #000);
        display: flex;
        gap: var(--tt-padding, 0.5rem);
        justify-content: center;
        min-height: 2.125rem;
        padding: var(--tt-padding, 0.5rem);
      }
      .btn {
        border-radius: var(--tt-btn-bdr-radius, 0);
        border: var(--tt-border, 0.05rem solid #000);
        cursor: pointer;
        flex-grow: 1;
        font-family: var(--st-btn-font, verdana, arial, helvetica, sans-serif);
        font-weight: bold;
        padding: 0.5rem;
        text-transform: var(--tt-t-transform, uppercase);
      }
      .btn--start, .btn--resume {
        background-color: var(--tt-btn-bg-colour-start, #030);
      }
      .btn--pause, .btn--restart {
        background-color: var(--tt-btn-bg-colour-pause, #004);
      }
      .btn--reset {
        background-color: var(--tt-btn-bg-colour-rest, #600);
      }
      main {
        padding: var(--tt-padding, 0.5rem);
      }
      h2 {
        font-family: var(--tt-h-font, verdana, arial, helvetica, sans-serif);
        font-size: var(--tt-h-size, 1.5rem);
        font-weight: var(--tt-h-weight, normal);
        line-height: var(--tt-h-line-h, 1.5rem);
        margin: 0;
        padding: 0.5rem 0.5rem 0 0.5rem;
        text-align: center;
        text-wrap: pretty;
      }
    `}};window.customElements.define(`talking-timer`,Mt);var Nt=[{label:`No`,value:`true`},{label:`Yes`,value:`false`}],Pt=[{label:`Me`,value:`I`},{label:`Group`,value:`We`},{label:`Students`,value:`You`}],Ft=[{label:`None`,value:`0`},{label:`Short`,value:`1`},{label:`Medium`,value:`2`},{label:`Long`,value:`3`}],It=[{label:`30 second`,value:3e4},{label:`60 second`,value:6e4},{label:`90 second`,value:9e4},{label:`2 minute`,value:12e4},{label:`2.5 minute`,value:15e4},{label:`3 minute`,value:18e4},{label:`3.5 minute`,value:21e4},{label:`4 minute`,value:24e4},{label:`4.5 minute`,value:27e4},{label:`5 minute`,value:3e5},{label:`6 minute`,value:36e4},{label:`7 minute`,value:42e4},{label:`8 minute`,value:48e4},{label:`9 minute`,value:54e4},{label:`10 minute`,value:6e5}],Lt=Ge(),Rt=class extends F{static properties={comms:{type:jt,attribute:`comms`},doCylinders:{type:Boolean,attribute:`do-cylinders`},duration:{type:Number},intermission:{type:Number},noEndChime:{type:Boolean,attribute:`no-end-chime`},noSayHelp:{type:Boolean,attribute:`no-say-help`},repetitions:{type:Number},saySessionEnd:{type:Number,attribute:`say-session-end`},saySessionStart:{type:Number,attribute:`say-session-start`},who:{type:String},_doCylinders:{type:Boolean,state:!0},_duration:{type:Number,state:!0},_intermission:{type:Number,state:!0},_noEndChime:{type:Boolean,state:!0},_noSayHelp:{type:Boolean,state:!0},_repetitions:{type:Number,state:!0},_saySessionEnd:{type:Number,state:!0},_saySessionStart:{type:Number,state:!0},_who:{type:String,state:!0}};constructor(){super(),this.doCylinders=!1,this.duration=18e4,this.intermission=9e4,this.noEndChime=!1,this.noSayHelp=!1,this.repetitions=5,this.saySessionEnd=0,this.saySessionStart=0,this.who=`I`,this._ePre=R(`<speed-throwing-config>`),this._dialogue=null,this._setFromAttr()}_setFromAttr(){this._doCylinders=this.doCylinders,this._duration=this.duration,this._intermission=this.intermission,this._noEndChime=this.noEndChime,this._noSayHelp=this.noSayHelp,this._repetitions=this.repetitions,this._saySessionEnd=this.saySessionEnd,this._saySessionStart=this.saySessionStart,this._who=this.who,this._setType(),this._setIwillBe()}connectedCallback(){super.connectedCallback();let e=10,t=n=>()=>{n._dialogue===null&&(n._dialogue=n.renderRoot?.querySelector(`#speed-throwing-config`)??null,n._dialogue===null?(--e,e>0&&setTimeout(t(n),10)):n._confirmed===!1&&n._dialogue.showModal())};setTimeout(t(this),10),this._setFromAttr()}_setIwillBe(){this._iWillBe=Ze(this._who,this._repetitions,this._duration,this._intermission,this._type,It)}_setType(){this._type=this._doCylinders===!0?`cylinders`:`bowls`}_handleChange(e){let t=e.target.value;switch(e.target.id.substring(3)){case`close`:this._dialogue.close(),this._setFromAttr();break;case`config`:this._dialogue.showModal();break;case`confirm`:this._dialogue.close();let e={doCylinders:this._doCylinders,duration:this._duration,intermission:this._intermission,iWillBe:this._iWillBe,noEndChime:this._noEndChime,noSayHelp:this._noSayHelp,repetitions:this._repetitions,saySessionEnd:this._saySessionEnd,saySessionStart:this._saySessionStart,who:this._who};this.dispatchEvent(new CustomEvent(`confirmconfig`,{bubbles:!0,composed:!0,detail:e})),this.comms.dispatch(`confirmconfig`,e);break;case`duration`:this._duration=q(t),this._setIwillBe();break;case`intermission`:this._intermission=q(t),this._setIwillBe();break;case`repetitions`:this._repetitions=q(t),this._setIwillBe();break;case`type--cylinders`:this._doCylinders=!0,this._type=t,this._setIwillBe();break;case`type--bowls`:this._doCylinders=!1,this._type=t,this._setIwillBe();break}}_handleRadioChange(e){let{id:t,value:n}=e.target;switch(t){case`no-end-chime`:this._noEndChime=n===`true`;break;case`say-session-end`:this._saySessionEnd=parseInt(n,10);break;case`no-say-help`:this._noSayHelp=n===`true`;break;case`say-session-start`:this._saySessionStart=parseInt(n,10);break;case`target-audience`:this._who=n,this._setIwillBe();break}}render(){return D`<div>
        <p>${W(`config`,`Change settings`,this._handleChange)}</p>
        <dialog id="speed-throwing-config">
          <label
            id="ss-close-label"
            for="ss-close"
            title="Close settings without saving">
            <span class="hidden">Close settings</span>
          </label>
          <div id="speed-throwing-config-outer">
            <header><h1>Set up your speed throwing session</h1></header>
            <main>
              <ul class="fields">
                <li>
                  <div role="group" aria-labeledby="ss-type">
                    <span id="ss-type">
                      What are you throwing?
                    </span>
                    <ul class="radio">
                      ${tt(`Cylinders`,this._doCylinders,this._handleChange)}
                      ${tt(`Bowls`,!this._doCylinders,this._handleChange)}
                    </ul>
                  </div>
                </li>
                ${et(`Number of ${this._type}`,this._repetitions,Lt,`ss-repetitions`,this._handleChange,``)}
                ${et(`Throwing time`,this._duration,It,`ss-duration`,this._handleChange)}
                ${et(`Break between ${this._type}`,this._intermission,It,`ss-intermission`,this._handleChange)}
                <radio-input
                  id="target-audience"
                  label="Target audience"
                  .options=${Pt}
                  .value="${this._who}"
                  @change=${this._handleRadioChange}></radio-input>
                <radio-input
                  id="say-session-start"
                  label="Say session intro"
                  .options=${Ft}
                  .value="${this._saySessionStart}"
                  @change=${this._handleRadioChange}></radio-input>
                <radio-input
                  id="no-say-help"
                  label="Say in session info"
                  .options=${Nt}
                  .value="${this._noSayHelp===!0?`false`:`true`}"
                  @change=${this._handleRadioChange}></radio-input>
                <radio-input
                  id="no-end-chime"
                  label="Play end chime"
                  .options=${Nt}
                  .value="${this._noEndChime===!0?`true`:`false`}"
                  @change=${this._handleRadioChange}></radio-input>
                <radio-input
                  id="say-session-end"
                  label="Say end of session info"
                  .options=${Ft}
                  .value="${this._saySessionEnd}"
                  @change=${this._handleRadioChange}></radio-input>
              </ul>
            </main>
            <footer>
              ${this._iWillBe}
              <button
                class="special-btn config-btn"
                id="ss-confirm"
                type="button"
                value="confirm"
                @click=${this._handleChange}>Save settings</button>
            </footer>
          </div>
          <button
            class="close-btn"
            id="ss-close"
            title="Close settings without saving"
            type="button"
            value="close"
            @click=${this._handleChange}>
            &Cross;
            <span class="hidden">Close setings</span>
          </button>
        </dialog>
    </div>`}static get styles(){return o`
      * {
        box-sizing: border-box;
      }
      dialog {
      }
      #speed-throwing-config-outer {
        position: relative;
        z-index: 10;
      }

      button {
        cursor: pointer;
        border: none;
      }
      .special-btn {
        font-size: 1.125rem;
        font-weight: bold;
        padding: 0.5rem 1rem;
      }
      .config-btn {
        background-color: var(--st-btn-bg-colour, rgb(255, 239, 0));
        color: var(--st-btn-colour, #232323);
      }
      .abort-btn {
        background-color: var(--st-btn-bg-colour--abort, rgb(150, 0, 0));
        border: 0.05rem solid var(--st-btn-colour--abort, #fff);
        color: var(--st-btn-colour--abort, #fff);
      }
      .reset-btn {
        background-color: var(--st-btn-bg-colour--rest, rgb(0, 100, 0));
        border: 0.05rem solid var(--st-btn-colour--abort, #fff);
        color: var(--st-btn-colour--abort, #fff);
      }
      dialog {
        background: transparent;
        border: none;
        max-width: 39.5rem;
        width: 100%;
        z-index: 1;
      }
      dialog > div {
        background-color: var(--st-bg-colour, #111);
        border: var(--tt-border, 0.05rem solid #000);
        box-shadow: var(--tt-box-shadow, 0.5rem 0.5rem 0.5rem rgba(255, 255, 255, 0.7));
        max-width: 37.5rem
      }
      dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.8);
        background-color: var(--st-backdrop, rgba(0, 0, 0, 0.8));
      }
      dialog > div > footer {
        padding: 1rem;
      }
      dialog > div > footer p {
        margin: 0 0 1rem;
      }
      dialog > div > header {
        margin: 0 0;
        padding: 1rem 3rem 1rem 1rem;
      }
      dialog h1 {
        line-height: 2.25rem;
        margin: 0;
      }
      ul.fields {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style-type: none;
      }
      ul.fields > li {
        border-bottom: 0.05rem solid #fff;
        margin: 0;
        padding: 0;
      }
      ul.fields > li div {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin: 0;
        list-style-type: none;
        padding: 0 1rem 0 0;
      }
      ul.fields > li:first-child {
        border-top: 0.05rem solid #fff;
      }
      ul.fields > li > div > label,
      ul.fields > li > div > span {
        display: inline-block;
        padding: 0.5rem 1rem;
        min-width: 13rem;
      }
      ul.fields select {
      flex-grow: 1;
      }

      ul.radio {
        box-sizing: border-box;
        display: inline-flex;
        margin: flex;
        column-gap: 1rem;
        list-style-type: none;
        justify-content: start;
        align-items: center;
      margin: 0;
        padding: 0;
      }
      ul.radio > li {
        box-sizing: border-box;
        border: none;
        margin: 0;
        padding: 0;
      }
      ul.radio label {
        box-sizing: border-box;
        padding: 0.5rem;
        cursor: pointer;
      }
      ul.radio label:hover, ul.radio label:focus-within {
        outline: 0.05rem solid #570;
        outline-offset: 0.2rem;
        background-color: #777;
      }
      ul.radio label:has(> input:checked) {
        background-color: #040;
      }
      .close-btn {
        background-color: transparent;
        border: none;
        cursor: pointer;
        display: block;
        font-size: 1.9rem;
        line-height: 0.35em;
        padding: 1rem;
        position: absolute;
        right: 1rem;
        top: 1rem;
        width: 3rem;
        height: 4rem;
        z-index: 11;
      }
      .hidden {
        border: 0 !important;
        clip: rect(0,0,0,0) !important;
        height: 1px !important;
        margin: -1px !important;
        overflow: hidden !important;
        padding: 0 !important;
        position: absolute !important;
        white-space: nowrap !important;
        width: 1px !important;
      }
      #ss-close-label {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        cursor: pointer;
      }
      @media screen and (min-width: 37rem) {
        ul.fields > li div {
          flex-direction: row;
        }
      }`}};window.customElements.define(`speed-throwing-config`,Rt);var zt=`Hands off your pots`,Bt=`You should be finishing centering and opening up`,Vt=`You should be pulling up by now`,Ht=`Speed throwing complete`,Ut=`Take a few deep breaths. Then, when your ready, in the order they were made, cut each pot in half and examine and critique it. Look at what you did well and what can be improved on. Think about what was going on when things went wrong and how you might avoid doing the same thing next time.`,Wt=`1/2 30s last20 last15 allLast10`,Gt=class extends F{static properties={_confirmed:{type:Boolean,state:!0},_doCylinders:{type:Boolean,state:!0},_duration:{type:Number,state:!0},_endMsg:{type:String,state:!0},_intermission:{type:Number,state:!0},_repCount:{type:Number,state:!0},_repetitions:{type:Number,state:!0},_started:{type:Boolean,state:!0},_state:{type:String,state:!0},_timerMode:{type:String,state:!0},_timerState:{type:String,state:!0},_totalMilli:{type:Number,state:!0},_type:{type:String,state:!0},_who:{type:String,state:!0}};constructor(){super(),this._ePre=R(`<speed-throwing>`),this._tmp={},this._type=`Cylinders`,this._comms=new jt(!0),this._confirmed=L(`st-confirmed`,!1,`bool`),this._doCylinders=L(`st-cylinders`,!0,`bool`),this._intermission=L(`st-intermission`,9e4,`int`),this._noEndChime=L(`st-no-end-chime`,!1,`bool`),this._noSayHelp=L(`st-no-say-help`,!1,`bool`),this._repetitions=L(`st-repetitions`,5,`int`),this._saySessionEnd=L(`st-say-session-end`,0,`int`),this._saySessionStart=L(`st-say-session-start`,0,`int`),this._totalMilli=L(`st-time`,18e4,`int`),this._who=L(`st-who`,`I`,`string`),this._breakID=null,this._defaultVoice=`Catherine, James, English (Australia), Zira`,this._duration=z(B(this._totalMilli)),this._endCentering=Bt,this._endOpening=Vt,this._endMsg=zt,this._inRestart=!1,this._setType(),this._iWillBe=this._confirmed===!0?Ze(this._who,this._repetitions,this._totalMilli,this._intermission,this._type,Ge()):``,this._killTT=100,this._noExtras=!1,this._pauseBtnTxt=`Pause`,this._pauseBtnValue=`pause`,this._repCount=1,this._say=Wt,this._sayExtra=this._noSayHelp===!1?G(this._totalMilli):void 0,this._started=!1,this._state=this._confirmed===!0?`ready`:``,this._timer=null,this._timerMode=`doing`,this._timerState=`unset`,this._voice=window.speechSynthesis,this._voiceName=rt(this._defaultVoice),this._state===`ready`&&this._getTimer(this)(),this._setTmp()}_getTimer(e){return()=>{--e._killTT,e._timer===null&&(e._timer=e.renderRoot?.querySelector(`#speed-throwing-timer`)??null,e._timer===null?e._killTT>0&&setTimeout(e._getTimer(e),100):(e._timer.addEventListener(`statechange`,e._handleTimerChange(e)),e._timer.addEventListener(`custompause`,e._handleCustomPause(e))))}}_resetState(e){this._state=`ready`,this._repCount=q(e),this._timerMode=`doing`,this._voice.cancel()}_setDoingVals(){this._duration=z(B(this._totalMilli)),this._endMsg=zt,this._noExtras=!1,this._pauseBtnTxt=`Pause`,this._pauseBtnValue=`pause`,this._say=Wt,this._sayExtra=G(this._totalMilli),this._comms.dispatch(`saydata`,{say:this._say,sayData:this._sayExtra})}_setWaitingVals(){this._duration=z(B(this._intermission)),this._endMsg=``,this._noExtras=!0,this._pauseBtnTxt=`Start your next ${K(this._type)} now`,this._pauseBtnValue=`start-now`,this._repCount+=1,this._say=``,this._sayExtra=Ye(K(this._type),this._intermission)}_triggerTimerRestart(e,t=!1){this._repCount<=this._repetitions&&this._inRestart===!1&&(this._inRestart=!0,this._timerMode===`doing`?this._setDoingVals():this._setWaitingVals(),this._repCount<=this._repetitions?setTimeout(()=>{e.reset(t),e.start(),this._inRestart=!1},100):(this._inRestart=!1,setTimeout(()=>{Y(Ut,this._voice,this._voiceName)},2e3)))}_handleCustomPause(){return e=>{typeof e.detail==`string`&&e.detail===this._pauseBtnValue&&(this._timerMode=`doing`,this._repCount,this._repetitions,this._triggerTimerRestart(e.target,!0))}}_handleTimerChange(){return e=>{let t=e.target,n=e.target.state,r=e.target[`timer-id`];switch(n){case`ending`:break;case`ended`:this._timerMode=r===`doing`?`waiting`:`doing`,r===`waiting`?this._triggerTimerRestart(t):(this._repCount,this._repetitions),this._triggerTimerRestart(t);break;case`pause`:r===`waiting`&&(this._timerMode=`doing`,this._triggerTimerRestart(t));break;case`starting`:break;case`running`:this._state=`running`;break}}}_confirmConfig(e){let{doCylinders:t,duration:n,intermission:r,iWillBe:i,noEndChime:a,noSayHelp:o,repetitions:s,saySessionEnd:c,saySessionStart:l,who:u}=e.detail;this._confirmed=!0,this._state=`ready`,this._doCylinders=t,this._totalMilli=n,this._duration=z(B(this._totalMilli)),this._intermission=r,this._noEndChime=a,this._noSayHelp=o,this._repetitions=s,this._saySessionEnd=c,this._saySessionStart=l,this._who=u,this._iWillBe=i,this._setType(),this._sayExtra=this._noSayHelp===!1?G(this._totalMilli):void 0,this._setTmp(),this._resetState(1),I(`st-confirmed`,this._confirmed),I(`st-cylinders`,this._doCylinders),I(`st-intermission`,this._intermission),I(`st-time`,this._totalMilli),I(`st-repetitions`,this._repetitions),I(`st-no-say-help`,this._noSayHelp),I(`st-no-end-chime`,this._noEndChime),I(`st-say-session-start`,this._saySessionStart),I(`st-say-session-end`,this._saySessionEnd),I(`st-who`,this._who),setTimeout(this._getTimer(this),1)}_handleChange(e){let t=e.target.value;switch(e.target.id.substring(3)){case`abort`:this._resetState(this._repetitions+1),this._timer.stop(!0),this._timer.reset(!0),this._resetState(1),this._state=`ready`;break;case`reset`:this._resetState(t);break;case`start`:this._state=`running`;break}}_setType(){this._type=this._doCylinders===!0?`cylinders`:`bowls`}_setTmp(){this._tmp={confirmed:this._confirmed,doCylinders:this._doCylinders,intermission:this._intermission,repetitions:this._repetitions,totalMilli:this._totalMilli}}connectedCallback(){super.connectedCallback(),this._confirmed=L(`st-confirmed`,this._confirmed,`bool`),this._doCylinders=L(`st-cylinders`,this._doCylinders,`bool`),this._intermission=L(`st-intermission`,this._intermission,`int`),this._totalMilli=L(`st-time`,this._totalMilli,`int`),this._repetitions=L(`st-repetitions`,this._repetitions,`int`),this._noSayHelp=L(`st-no-say-help`,this._noSayHelp,`bool`),this._noEndChime=L(`st-no-end-chime`,this._noEndChime,`bool`),this._saySessionStart=L(`st-say-session-start`,this._saySessionStart,`int`),this._saySessionEnd=L(`st-say-session-end`,this._saySessionEnd,`int`),this._who=L(`st-who`,this._who)}render(){let e=this._timerMode===`waiting`?Je(this._type,this._repCount):qe(this._type,this._repCount,this._repetitions),t=Xe(e);return D`
      <article>
        <p>
          ${this._state===`running`?W(`abort`,`End speed throwing session now`,this._handleChange):D`<speed-throwing-config
                .comms=${this._comms}
                ?do-cylinders="${this._doCylinders}"
                .duation="${this._totalMilli}"
                .intermission="${this._intermission}"
                ?no-end-chime="${this._noEndChime}"
                ?no-say-help="${this._noSayHelp}"
                .repetitions="${this._repetitions}"
                .say-session-end="${this._saySessionEnd}"
                .say-session-start="${this._saySessionStart}"
                @confirmconfig=${this._confirmConfig}></speed-throwing-config>`}
        </p>

        ${this._confirmed===!0?this._iWillBe:``}

        ${this._confirmed===!0&&this._repCount<=this._repetitions?D`
            <talking-timer
              id="speed-throwing-timer"
              .comms=${this._comms}
              .duration="${this._duration}"
              end-message="${this._endMsg}"
              .label="${e}"
              merge-both
              ?no-end-chime=${this._noExtras||this._noEndChime}
              ?no-say-end=${this._noExtras||this._endMsg===``}
              ?no-say-start=${this._noExtras}
              .pause-btn-txt="${this._pauseBtnTxt}"
              .pause-btn-value="${this._pauseBtnValue}"
              .say=${this._say}
              .say-data=${Ae(this._sayExtra)}
              .timer-id="${this._timerMode}"
              voice="catherine">
              <h2>${t}</h2>
            </talking-timer>`:``}
        ${this._repCount>this._repetitions?nt(Ht,Ut,this._handleChange):``}
      </article>
    `}static get styles(){return o`
      /**
       * Copied from Bootstrap 5.x CSS
       */
      .hidden {
        border: 0 !important;
        clip: rect(0,0,0,0) !important;
        height: 1px !important;
        margin: -1px !important;
        overflow: hidden !important;
        padding: 0 !important;
        position: absolute !important;
        white-space: nowrap !important;
        width: 1px !important;
      }
      .i-will--count {
        font-weight: bold;
        font-size: 0.95rem;
        font-family: var(--st-btn-font, verdana, arial, helvetica, sans-serif);
      }
      .i-will--type {
        font-weight: bold;
        font-size: 0.95rem;
        font-family: var(--st-btn-font, verdana, arial, helvetica, sans-serif);
      }
      .i-will--time {
        font-weight: bold;
        font-style: italic;
      }
      .i-will--break {
        font-weight: bold;
      }

      talking-timer h2 {
        font-family: var(--tt-h-font, verdana, arial, helvetica, sans-serif);
        font-size: var(--tt-h-size, 1.5rem);
        font-weight: var(--tt-h-weight, normal);
        line-height: var(--tt-h-line-h, 1.5rem);
        margin: 0;
        padding: 0.5rem 0.5rem 0 0.5rem;
        text-align: center;
        text-wrap: pretty;
      }
      .special-btn {
        font-size: 1.125rem;
        font-weight: bold;
        padding: 0.5rem 1rem;
      }
      .abort-btn {
        background-color: var(--st-btn-bg-colour--abort, rgb(150, 0, 0));
        border: 0.05rem solid var(--st-btn-colour--abort, #fff);
        color: var(--st-btn-colour--abort, #fff);
      }
      .reset-btn {
        background-color: var(--st-btn-bg-colour--reset, rgb(0, 100, 0));
        border: 0.05rem solid var(--st-btn-colour--abort, #fff);
        color: var(--st-btn-colour--abort, #fff);
      }
    `}};window.customElements.define(`speed-throwing`,Gt);