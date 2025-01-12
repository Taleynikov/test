import{$ as At,$a as ue,$b as To,A as re,Aa as co,Ab as vo,B as Yr,C as Tn,Ca as uo,D as Ft,Da as An,E as bi,Ea as po,F as Jr,G as Xr,Ga as le,Gb as Ei,H as to,Ha as V,Hb as Mn,I as Rt,Ia as Tt,Ib as So,J as eo,Ja as ho,Jb as _i,K as z,Ka as fo,Kb as wo,L as $,La as N,Lb as Ri,Ma as L,Mb as Ti,N as b,Na as S,Nb as $e,O as yt,Ob as Co,P as no,Pb as R,Q,Qa as go,Qb as Ln,R as yi,Ra as wt,Rb as Ii,S as D,Sb as Eo,T as g,Ta as mo,Tb as Pe,U as Me,V as F,Vb as xi,W as vt,Wb as _o,X,Xa as U,Xb as Ro,Y as Le,Ya as B,Yb as P,Z as io,Za as Z,Zb as Oi,_ as In,_a as ce,_b as kn,a as f,aa as Ut,ab as Gt,ac as he,b as K,ba as oe,bb as Ci,ca as se,cb as Kt,d as qr,da as xn,db as A,dc as Nn,e as Gr,ea as T,eb as Dt,ec as $n,f as pi,fa as ro,fb as Mt,fc as Pn,g as hi,ga as On,gb as et,h as at,ha as oo,hb as Dn,i as lt,ia as tt,ib as W,ic as It,j as Pt,ja as Bt,jb as q,jc as Io,k as bt,ka as vi,kb as bo,kc as Fn,l as y,la as Ht,lb as de,lc as Fe,m as Ae,ma as ae,mb as pe,mc as xo,n as Kr,na as so,o as Qr,oa as Si,p as x,pa as ao,pc as Oo,q as fi,qa as St,qc as Ai,r as ct,s as Zr,sa as wi,sb as ut,sc as Di,t as gi,tb as Y,ua as lo,uc as Mi,vb as Ne,vc as Li,w as ne,wa as ke,wb as yo,wc as ki,x as ie,xa as C,y as De,ya as jt,z as mi}from"./chunk-77BX4J3I.js";var Pi=class extends Ro{constructor(){super(...arguments),this.supportsDOMEvents=!0}},Fi=class t extends Pi{static makeCurrent(){_o(new t)}onAndCancel(i,e,n){return i.addEventListener(e,n),()=>{i.removeEventListener(e,n)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=_a();return e==null?null:Ra(e)}resetBaseElement(){Ue=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return To(document.cookie,i)}},Ue=null;function _a(){return Ue=Ue||document.querySelector("base"),Ue?Ue.getAttribute("href"):null}function Ra(t){return new URL(t,document.baseURI).pathname}var Ta=(()=>{class t{build(){return new XMLHttpRequest}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=b({token:t,factory:t.\u0275fac})}}return t})(),Ui=new Q(""),Lo=(()=>{class t{constructor(e,n){this._zone=n,this._eventNameToPlugin=new Map,e.forEach(r=>{r.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,n,r){return this._findPluginFor(n).addEventListener(e,n,r)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(o=>o.supports(e)),!n)throw new $(5101,!1);return this._eventNameToPlugin.set(e,n),n}static{this.\u0275fac=function(n){return new(n||t)(D(Ui),D(Bt))}}static{this.\u0275prov=b({token:t,factory:t.\u0275fac})}}return t})(),Un=class{constructor(i){this._doc=i}},Ni="ng-app-id",ko=(()=>{class t{constructor(e,n,r,o={}){this.doc=e,this.appId=n,this.nonce=r,this.platformId=o,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=Fe(o),this.resetHostNodes()}addStyles(e){for(let n of e)this.changeUsageCount(n,1)===1&&this.onStyleAdded(n)}removeStyles(e){for(let n of e)this.changeUsageCount(n,-1)<=0&&this.onStyleRemoved(n)}ngOnDestroy(){let e=this.styleNodesInDOM;e&&(e.forEach(n=>n.remove()),e.clear());for(let n of this.getAllStyles())this.onStyleRemoved(n);this.resetHostNodes()}addHost(e){this.hostNodes.add(e);for(let n of this.getAllStyles())this.addStyleToHost(e,n)}removeHost(e){this.hostNodes.delete(e)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(e){for(let n of this.hostNodes)this.addStyleToHost(n,e)}onStyleRemoved(e){let n=this.styleRef;n.get(e)?.elements?.forEach(r=>r.remove()),n.delete(e)}collectServerRenderedStyles(){let e=this.doc.head?.querySelectorAll(`style[${Ni}="${this.appId}"]`);if(e?.length){let n=new Map;return e.forEach(r=>{r.textContent!=null&&n.set(r.textContent,r)}),n}return null}changeUsageCount(e,n){let r=this.styleRef;if(r.has(e)){let o=r.get(e);return o.usage+=n,o.usage}return r.set(e,{usage:n,elements:[]}),n}getStyleElement(e,n){let r=this.styleNodesInDOM,o=r?.get(n);if(o?.parentNode===e)return r.delete(n),o.removeAttribute(Ni),o;{let s=this.doc.createElement("style");return this.nonce&&s.setAttribute("nonce",this.nonce),s.textContent=n,this.platformIsServer&&s.setAttribute(Ni,this.appId),e.appendChild(s),s}}addStyleToHost(e,n){let r=this.getStyleElement(e,n),o=this.styleRef,s=o.get(n)?.elements;s?s.push(r):o.set(n,{elements:[r],usage:1})}resetHostNodes(){let e=this.hostNodes;e.clear(),e.add(this.doc.head)}static{this.\u0275fac=function(n){return new(n||t)(D(P),D(Si),D(wi,8),D(St))}}static{this.\u0275prov=b({token:t,factory:t.\u0275fac})}}return t})(),$i={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Hi=/%COMP%/g,No="%COMP%",Ia=`_nghost-${No}`,xa=`_ngcontent-${No}`,Oa=!0,Aa=new Q("",{providedIn:"root",factory:()=>Oa});function Da(t){return xa.replace(Hi,t)}function Ma(t){return Ia.replace(Hi,t)}function $o(t,i){return i.map(e=>e.replace(Hi,t))}var Ao=(()=>{class t{constructor(e,n,r,o,s,l,a,c=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.platformId=l,this.ngZone=a,this.nonce=c,this.rendererByCompId=new Map,this.platformIsServer=Fe(l),this.defaultRenderer=new Be(e,s,a,this.platformIsServer)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===Me.ShadowDom&&(n=K(f({},n),{encapsulation:Me.Emulated}));let r=this.getOrCreateRenderer(e,n);return r instanceof Bn?r.applyToHost(e):r instanceof He&&r.applyStyles(),r}getOrCreateRenderer(e,n){let r=this.rendererByCompId,o=r.get(n.id);if(!o){let s=this.doc,l=this.ngZone,a=this.eventManager,c=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer;switch(n.encapsulation){case Me.Emulated:o=new Bn(a,c,n,this.appId,u,s,l,d);break;case Me.ShadowDom:return new Bi(a,c,e,n,s,l,this.nonce,d);default:o=new He(a,c,n,u,s,l,d);break}r.set(n.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}static{this.\u0275fac=function(n){return new(n||t)(D(Lo),D(ko),D(Si),D(Aa),D(P),D(St),D(Bt),D(wi))}}static{this.\u0275prov=b({token:t,factory:t.\u0275fac})}}return t})(),Be=class{constructor(i,e,n,r){this.eventManager=i,this.doc=e,this.ngZone=n,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(i,e){return e?this.doc.createElementNS($i[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(Do(i)?i.content:i).appendChild(e)}insertBefore(i,e,n){i&&(Do(i)?i.content:i).insertBefore(e,n)}removeChild(i,e){e.remove()}selectRootElement(i,e){let n=typeof i=="string"?this.doc.querySelector(i):i;if(!n)throw new $(-5104,!1);return e||(n.textContent=""),n}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,n,r){if(r){e=r+":"+e;let o=$i[r];o?i.setAttributeNS(o,e,n):i.setAttribute(e,n)}else i.setAttribute(e,n)}removeAttribute(i,e,n){if(n){let r=$i[n];r?i.removeAttributeNS(r,e):i.removeAttribute(`${n}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,n,r){r&(ke.DashCase|ke.Important)?i.style.setProperty(e,n,r&ke.Important?"important":""):i.style[e]=n}removeStyle(i,e,n){n&ke.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,n){i!=null&&(i[e]=n)}setValue(i,e){i.nodeValue=e}listen(i,e,n){if(typeof i=="string"&&(i=xi().getGlobalEventTarget(this.doc,i),!i))throw new Error(`Unsupported event target ${i} for event ${e}`);return this.eventManager.addEventListener(i,e,this.decoratePreventDefault(n))}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;(this.platformIsServer?this.ngZone.runGuarded(()=>i(e)):i(e))===!1&&e.preventDefault()}}};function Do(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Bi=class extends Be{constructor(i,e,n,r,o,s,l,a){super(i,o,s,a),this.sharedStylesHost=e,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let c=$o(r.id,r.styles);for(let u of c){let d=document.createElement("style");l&&d.setAttribute("nonce",l),d.textContent=u,this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,n){return super.insertBefore(this.nodeOrShadowRoot(i),e,n)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},He=class extends Be{constructor(i,e,n,r,o,s,l,a){super(i,o,s,l),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r,this.styles=a?$o(a,n.styles):n.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},Bn=class extends He{constructor(i,e,n,r,o,s,l,a){let c=r+"-"+n.id;super(i,e,n,o,s,l,a,c),this.contentAttr=Da(c),this.hostAttr=Ma(c)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let n=super.createElement(i,e);return super.setAttribute(n,this.contentAttr,""),n}},La=(()=>{class t extends Un{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,r){return e.addEventListener(n,r,!1),()=>this.removeEventListener(e,n,r)}removeEventListener(e,n,r){return e.removeEventListener(n,r)}static{this.\u0275fac=function(n){return new(n||t)(D(P))}}static{this.\u0275prov=b({token:t,factory:t.\u0275fac})}}return t})(),Mo=["alt","control","meta","shift"],ka={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Na={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},$a=(()=>{class t extends Un{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,r){let o=t.parseEventName(n),s=t.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>xi().onAndCancel(e,o.domEventName,s))}static parseEventName(e){let n=e.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(n.pop()),s="",l=n.indexOf("code");if(l>-1&&(n.splice(l,1),s="code."),Mo.forEach(c=>{let u=n.indexOf(c);u>-1&&(n.splice(u,1),s+=c+".")}),s+=o,n.length!=0||o.length===0)return null;let a={};return a.domEventName=r,a.fullKey=s,a}static matchEventFullKeyCode(e,n){let r=ka[e.key]||e.key,o="";return n.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Mo.forEach(s=>{if(s!==r){let l=Na[s];l(e)&&(o+=s+".")}}),o+=r,o===n)}static eventCallback(e,n,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>n(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static{this.\u0275fac=function(n){return new(n||t)(D(P))}}static{this.\u0275prov=b({token:t,factory:t.\u0275fac})}}return t})();function Bd(t,i){return Co(f({rootComponent:t},Pa(i)))}function Pa(t){return{appProviders:[...ja,...t?.providers??[]],platformProviders:Ha}}function Fa(){Fi.makeCurrent()}function Ua(){return new vi}function Ba(){return so(document),document}var Ha=[{provide:St,useValue:Io},{provide:ao,useValue:Fa,multi:!0},{provide:P,useFactory:Ba,deps:[]}];var ja=[{provide:io,useValue:"root"},{provide:vi,useFactory:Ua,deps:[]},{provide:Ui,useClass:La,multi:!0,deps:[P,Bt,St]},{provide:Ui,useClass:$a,multi:!0,deps:[P]},Ao,ko,Lo,{provide:uo,useExisting:Ao},{provide:xo,useClass:Ta,deps:[]},[]];var Po=(()=>{class t{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static{this.\u0275fac=function(n){return new(n||t)(D(P))}}static{this.\u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var v="primary",rn=Symbol("RouteTitle"),qi=class{constructor(i){this.params=i||{}}has(i){return Object.prototype.hasOwnProperty.call(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function ve(t){return new qi(t)}function Va(t,i,e){let n=e.path.split("/");if(n.length>t.length||e.pathMatch==="full"&&(i.hasChildren()||n.length<t.length))return null;let r={};for(let o=0;o<n.length;o++){let s=n[o],l=t[o];if(s[0]===":")r[s.substring(1)]=l;else if(s!==l.path)return null}return{consumed:t.slice(0,n.length),posParams:r}}function Wa(t,i){if(t.length!==i.length)return!1;for(let e=0;e<t.length;++e)if(!xt(t[e],i[e]))return!1;return!0}function xt(t,i){let e=t?Gi(t):void 0,n=i?Gi(i):void 0;if(!e||!n||e.length!=n.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!Wo(t[r],i[r]))return!1;return!0}function Gi(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Wo(t,i){if(Array.isArray(t)&&Array.isArray(i)){if(t.length!==i.length)return!1;let e=[...t].sort(),n=[...i].sort();return e.every((r,o)=>n[o]===r)}else return t===i}function qo(t){return t.length>0?t[t.length-1]:null}function Vt(t){return Kr(t)?t:So(t)?bt(Promise.resolve(t)):y(t)}var qa={exact:Ko,subset:Qo},Go={exact:Ga,subset:Ka,ignored:()=>!0};function Fo(t,i,e){return qa[e.paths](t.root,i.root,e.matrixParams)&&Go[e.queryParams](t.queryParams,i.queryParams)&&!(e.fragment==="exact"&&t.fragment!==i.fragment)}function Ga(t,i){return xt(t,i)}function Ko(t,i,e){if(!Zt(t.segments,i.segments)||!zn(t.segments,i.segments,e)||t.numberOfChildren!==i.numberOfChildren)return!1;for(let n in i.children)if(!t.children[n]||!Ko(t.children[n],i.children[n],e))return!1;return!0}function Ka(t,i){return Object.keys(i).length<=Object.keys(t).length&&Object.keys(i).every(e=>Wo(t[e],i[e]))}function Qo(t,i,e){return Zo(t,i,i.segments,e)}function Zo(t,i,e,n){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!Zt(r,e)||i.hasChildren()||!zn(r,e,n))}else if(t.segments.length===e.length){if(!Zt(t.segments,e)||!zn(t.segments,e,n))return!1;for(let r in i.children)if(!t.children[r]||!Qo(t.children[r],i.children[r],n))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!Zt(t.segments,r)||!zn(t.segments,r,n)||!t.children[v]?!1:Zo(t.children[v],i,o,n)}}function zn(t,i,e){return i.every((n,r)=>Go[e](t[r].parameters,n.parameters))}var kt=class{constructor(i=new E([],{}),e={},n=null){this.root=i,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=ve(this.queryParams),this._queryParamMap}toString(){return Ya.serialize(this)}},E=class{constructor(i,e){this.segments=i,this.children=e,this.parent=null,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Vn(this)}},Qt=class{constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=ve(this.parameters),this._parameterMap}toString(){return Jo(this)}};function Qa(t,i){return Zt(t,i)&&t.every((e,n)=>xt(e.parameters,i[n].parameters))}function Zt(t,i){return t.length!==i.length?!1:t.every((e,n)=>e.path===i[n].path)}function Za(t,i){let e=[];return Object.entries(t.children).forEach(([n,r])=>{n===v&&(e=e.concat(i(r,n)))}),Object.entries(t.children).forEach(([n,r])=>{n!==v&&(e=e.concat(i(r,n)))}),e}var Sr=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=b({token:t,factory:()=>new Ke,providedIn:"root"})}}return t})(),Ke=class{parse(i){let e=new Qi(i);return new kt(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${je(i.root,!0)}`,n=tl(i.queryParams),r=typeof i.fragment=="string"?`#${Ja(i.fragment)}`:"";return`${e}${n}${r}`}},Ya=new Ke;function Vn(t){return t.segments.map(i=>Jo(i)).join("/")}function je(t,i){if(!t.hasChildren())return Vn(t);if(i){let e=t.children[v]?je(t.children[v],!1):"",n=[];return Object.entries(t.children).forEach(([r,o])=>{r!==v&&n.push(`${r}:${je(o,!1)}`)}),n.length>0?`${e}(${n.join("//")})`:e}else{let e=Za(t,(n,r)=>r===v?[je(t.children[v],!1)]:[`${r}:${je(n,!1)}`]);return Object.keys(t.children).length===1&&t.children[v]!=null?`${Vn(t)}/${e[0]}`:`${Vn(t)}/(${e.join("//")})`}}function Yo(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Hn(t){return Yo(t).replace(/%3B/gi,";")}function Ja(t){return encodeURI(t)}function Ki(t){return Yo(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Wn(t){return decodeURIComponent(t)}function Uo(t){return Wn(t.replace(/\+/g,"%20"))}function Jo(t){return`${Ki(t.path)}${Xa(t.parameters)}`}function Xa(t){return Object.entries(t).map(([i,e])=>`;${Ki(i)}=${Ki(e)}`).join("")}function tl(t){let i=Object.entries(t).map(([e,n])=>Array.isArray(n)?n.map(r=>`${Hn(e)}=${Hn(r)}`).join("&"):`${Hn(e)}=${Hn(n)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var el=/^[^\/()?;#]+/;function ji(t){let i=t.match(el);return i?i[0]:""}var nl=/^[^\/()?;=#]+/;function il(t){let i=t.match(nl);return i?i[0]:""}var rl=/^[^=?&#]+/;function ol(t){let i=t.match(rl);return i?i[0]:""}var sl=/^[^&#]+/;function al(t){let i=t.match(sl);return i?i[0]:""}var Qi=class{constructor(i){this.url=i,this.remaining=i}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new E([],{}):new E([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let i=[];for(this.peekStartsWith("(")||i.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),i.push(this.parseSegment());let e={};this.peekStartsWith("/(")&&(this.capture("/"),e=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(i.length>0||Object.keys(e).length>0)&&(n[v]=new E(i,e)),n}parseSegment(){let i=ji(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new $(4009,!1);return this.capture(i),new Qt(Wn(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=il(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let r=ji(this.remaining);r&&(n=r,this.capture(n))}i[Wn(e)]=Wn(n)}parseQueryParam(i){let e=ol(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let s=al(this.remaining);s&&(n=s,this.capture(n))}let r=Uo(e),o=Uo(n);if(i.hasOwnProperty(r)){let s=i[r];Array.isArray(s)||(s=[s],i[r]=s),s.push(o)}else i[r]=o}parseParens(i){let e={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let n=ji(this.remaining),r=this.remaining[n.length];if(r!=="/"&&r!==")"&&r!==";")throw new $(4010,!1);let o;n.indexOf(":")>-1?(o=n.slice(0,n.indexOf(":")),this.capture(o),this.capture(":")):i&&(o=v);let s=this.parseChildren();e[o]=Object.keys(s).length===1?s[v]:new E([],s),this.consumeOptional("//")}return e}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new $(4011,!1)}};function Xo(t){return t.segments.length>0?new E([],{[v]:t}):t}function ts(t){let i={};for(let[n,r]of Object.entries(t.children)){let o=ts(r);if(n===v&&o.segments.length===0&&o.hasChildren())for(let[s,l]of Object.entries(o.children))i[s]=l;else(o.segments.length>0||o.hasChildren())&&(i[n]=o)}let e=new E(t.segments,i);return ll(e)}function ll(t){if(t.numberOfChildren===1&&t.children[v]){let i=t.children[v];return new E(t.segments.concat(i.segments),i.children)}return t}function Yt(t){return t instanceof kt}function cl(t,i,e=null,n=null){let r=es(t);return ns(r,i,e,n)}function es(t){let i;function e(o){let s={};for(let a of o.children){let c=e(a);s[a.outlet]=c}let l=new E(o.url,s);return o===t&&(i=l),l}let n=e(t.root),r=Xo(n);return i??r}function ns(t,i,e,n){let r=t;for(;r.parent;)r=r.parent;if(i.length===0)return zi(r,r,r,e,n);let o=ul(i);if(o.toRoot())return zi(r,r,new E([],{}),e,n);let s=dl(o,r,t),l=s.processChildren?We(s.segmentGroup,s.index,o.commands):rs(s.segmentGroup,s.index,o.commands);return zi(r,s.segmentGroup,l,e,n)}function qn(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function Qe(t){return typeof t=="object"&&t!=null&&t.outlets}function zi(t,i,e,n,r){let o={};n&&Object.entries(n).forEach(([a,c])=>{o[a]=Array.isArray(c)?c.map(u=>`${u}`):`${c}`});let s;t===i?s=e:s=is(t,i,e);let l=Xo(ts(s));return new kt(l,o,r)}function is(t,i,e){let n={};return Object.entries(t.children).forEach(([r,o])=>{o===i?n[r]=e:n[r]=is(o,i,e)}),new E(t.segments,n)}var Gn=class{constructor(i,e,n){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=n,i&&n.length>0&&qn(n[0]))throw new $(4003,!1);let r=n.find(Qe);if(r&&r!==qo(n))throw new $(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function ul(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Gn(!0,0,t);let i=0,e=!1,n=t.reduce((r,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let l={};return Object.entries(o.outlets).forEach(([a,c])=>{l[a]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:l}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:s===0?(o.split("/").forEach((l,a)=>{a==0&&l==="."||(a==0&&l===""?e=!0:l===".."?i++:l!=""&&r.push(l))}),r):[...r,o]},[]);return new Gn(e,i,n)}var me=class{constructor(i,e,n){this.segmentGroup=i,this.processChildren=e,this.index=n}};function dl(t,i,e){if(t.isAbsolute)return new me(i,!0,0);if(!e)return new me(i,!1,NaN);if(e.parent===null)return new me(e,!0,0);let n=qn(t.commands[0])?0:1,r=e.segments.length-1+n;return pl(e,r,t.numberOfDoubleDots)}function pl(t,i,e){let n=t,r=i,o=e;for(;o>r;){if(o-=r,n=n.parent,!n)throw new $(4005,!1);r=n.segments.length}return new me(n,!1,r-o)}function hl(t){return Qe(t[0])?t[0].outlets:{[v]:t}}function rs(t,i,e){if(t??=new E([],{}),t.segments.length===0&&t.hasChildren())return We(t,i,e);let n=fl(t,i,e),r=e.slice(n.commandIndex);if(n.match&&n.pathIndex<t.segments.length){let o=new E(t.segments.slice(0,n.pathIndex),{});return o.children[v]=new E(t.segments.slice(n.pathIndex),t.children),We(o,0,r)}else return n.match&&r.length===0?new E(t.segments,{}):n.match&&!t.hasChildren()?Zi(t,i,e):n.match?We(t,0,r):Zi(t,i,e)}function We(t,i,e){if(e.length===0)return new E(t.segments,{});{let n=hl(e),r={};if(Object.keys(n).some(o=>o!==v)&&t.children[v]&&t.numberOfChildren===1&&t.children[v].segments.length===0){let o=We(t.children[v],i,e);return new E(t.segments,o.children)}return Object.entries(n).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(r[o]=rs(t.children[o],i,s))}),Object.entries(t.children).forEach(([o,s])=>{n[o]===void 0&&(r[o]=s)}),new E(t.segments,r)}}function fl(t,i,e){let n=0,r=i,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(n>=e.length)return o;let s=t.segments[r],l=e[n];if(Qe(l))break;let a=`${l}`,c=n<e.length-1?e[n+1]:null;if(r>0&&a===void 0)break;if(a&&c&&typeof c=="object"&&c.outlets===void 0){if(!Ho(a,c,s))return o;n+=2}else{if(!Ho(a,{},s))return o;n++}r++}return{match:!0,pathIndex:r,commandIndex:n}}function Zi(t,i,e){let n=t.segments.slice(0,i),r=0;for(;r<e.length;){let o=e[r];if(Qe(o)){let a=gl(o.outlets);return new E(n,a)}if(r===0&&qn(e[0])){let a=t.segments[i];n.push(new Qt(a.path,Bo(e[0]))),r++;continue}let s=Qe(o)?o.outlets[v]:`${o}`,l=r<e.length-1?e[r+1]:null;s&&l&&qn(l)?(n.push(new Qt(s,Bo(l))),r+=2):(n.push(new Qt(s,{})),r++)}return new E(n,{})}function gl(t){let i={};return Object.entries(t).forEach(([e,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(i[e]=Zi(new E([],{}),0,n))}),i}function Bo(t){let i={};return Object.entries(t).forEach(([e,n])=>i[e]=`${n}`),i}function Ho(t,i,e){return t==e.path&&xt(i,e.parameters)}var qe="imperative",H=function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t}(H||{}),dt=class{constructor(i,e){this.id=i,this.url=e}},Ze=class extends dt{constructor(i,e,n="imperative",r=null){super(i,e),this.type=H.NavigationStart,this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},zt=class extends dt{constructor(i,e,n){super(i,e),this.urlAfterRedirects=n,this.type=H.NavigationEnd}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},it=function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t}(it||{}),Yi=function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t}(Yi||{}),Lt=class extends dt{constructor(i,e,n,r){super(i,e),this.reason=n,this.code=r,this.type=H.NavigationCancel}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Jt=class extends dt{constructor(i,e,n,r){super(i,e),this.reason=n,this.code=r,this.type=H.NavigationSkipped}},Ye=class extends dt{constructor(i,e,n,r){super(i,e),this.error=n,this.target=r,this.type=H.NavigationError}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Kn=class extends dt{constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r,this.type=H.RoutesRecognized}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ji=class extends dt{constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r,this.type=H.GuardsCheckStart}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Xi=class extends dt{constructor(i,e,n,r,o){super(i,e),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=o,this.type=H.GuardsCheckEnd}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},tr=class extends dt{constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r,this.type=H.ResolveStart}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},er=class extends dt{constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r,this.type=H.ResolveEnd}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},nr=class{constructor(i){this.route=i,this.type=H.RouteConfigLoadStart}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},ir=class{constructor(i){this.route=i,this.type=H.RouteConfigLoadEnd}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},rr=class{constructor(i){this.snapshot=i,this.type=H.ChildActivationStart}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},or=class{constructor(i){this.snapshot=i,this.type=H.ChildActivationEnd}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},sr=class{constructor(i){this.snapshot=i,this.type=H.ActivationStart}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ar=class{constructor(i){this.snapshot=i,this.type=H.ActivationEnd}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Je=class{},Se=class{constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function ml(t,i){return t.providers&&!t._injector&&(t._injector=fo(t.providers,i,`Route: ${t.path}`)),t._injector??i}function Ct(t){return t.outlet||v}function bl(t,i){let e=t.filter(n=>Ct(n)===i);return e.push(...t.filter(n=>Ct(n)!==i)),e}function on(t){if(!t)return null;if(t.routeConfig?._injector)return t.routeConfig._injector;for(let i=t.parent;i;i=i.parent){let e=i.routeConfig;if(e?._loadedInjector)return e._loadedInjector;if(e?._injector)return e._injector}return null}var lr=class{get injector(){return on(this.route?.snapshot)??this.rootInjector}set injector(i){}constructor(i){this.rootInjector=i,this.outlet=null,this.route=null,this.children=new ei(this.rootInjector),this.attachRef=null}},ei=(()=>{class t{constructor(e){this.rootInjector=e,this.contexts=new Map}onChildOutletCreated(e,n){let r=this.getOrCreateContext(e);r.outlet=n,this.contexts.set(e,r)}onChildOutletDestroyed(e){let n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new lr(this.rootInjector),this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}static{this.\u0275fac=function(n){return new(n||t)(D(In))}}static{this.\u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Qn=class{constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=cr(i,this._root);return e?e.children.map(n=>n.value):[]}firstChild(i){let e=cr(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=ur(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return ur(i,this._root).map(e=>e.value)}};function cr(t,i){if(t===i.value)return i;for(let e of i.children){let n=cr(t,e);if(n)return n}return null}function ur(t,i){if(t===i.value)return[i];for(let e of i.children){let n=ur(t,e);if(n.length)return n.unshift(i),n}return[]}var nt=class{constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function ge(t){let i={};return t&&t.children.forEach(e=>i[e.value.outlet]=e),i}var Zn=class extends Qn{constructor(i,e){super(i),this.snapshot=e,wr(this,i)}toString(){return this.snapshot.toString()}};function os(t){let i=yl(t),e=new lt([new Qt("",{})]),n=new lt({}),r=new lt({}),o=new lt({}),s=new lt(""),l=new Xt(e,n,o,s,r,v,t,i.root);return l.snapshot=i.root,new Zn(new nt(l,[]),i)}function yl(t){let i={},e={},n={},r="",o=new be([],i,n,r,e,v,t,null,{});return new Jn("",new nt(o,[]))}var Xt=class{constructor(i,e,n,r,o,s,l,a){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=r,this.dataSubject=o,this.outlet=s,this.component=l,this._futureSnapshot=a,this.title=this.dataSubject?.pipe(x(c=>c[rn]))??y(void 0),this.url=i,this.params=e,this.queryParams=n,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(x(i=>ve(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(x(i=>ve(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Yn(t,i,e="emptyOnly"){let n,{routeConfig:r}=t;return i!==null&&(e==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?n={params:f(f({},i.params),t.params),data:f(f({},i.data),t.data),resolve:f(f(f(f({},t.data),i.data),r?.data),t._resolvedData)}:n={params:f({},t.params),data:f({},t.data),resolve:f(f({},t.data),t._resolvedData??{})},r&&as(r)&&(n.resolve[rn]=r.title),n}var be=class{get title(){return this.data?.[rn]}constructor(i,e,n,r,o,s,l,a,c){this.url=i,this.params=e,this.queryParams=n,this.fragment=r,this.data=o,this.outlet=s,this.component=l,this.routeConfig=a,this._resolve=c}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=ve(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=ve(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(n=>n.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},Jn=class extends Qn{constructor(i,e){super(e),this.url=i,wr(this,e)}toString(){return ss(this._root)}};function wr(t,i){i.value._routerState=t,i.children.forEach(e=>wr(t,e))}function ss(t){let i=t.children.length>0?` { ${t.children.map(ss).join(", ")} } `:"";return`${t.value}${i}`}function Vi(t){if(t.snapshot){let i=t.snapshot,e=t._futureSnapshot;t.snapshot=e,xt(i.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),xt(i.params,e.params)||t.paramsSubject.next(e.params),Wa(i.url,e.url)||t.urlSubject.next(e.url),xt(i.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function dr(t,i){let e=xt(t.params,i.params)&&Qa(t.url,i.url),n=!t.parent!=!i.parent;return e&&!n&&(!t.parent||dr(t.parent,i.parent))}function as(t){return typeof t.title=="string"||t.title===null}var vl=(()=>{class t{constructor(){this.activated=null,this._activatedRoute=null,this.name=v,this.activateEvents=new tt,this.deactivateEvents=new tt,this.attachEvents=new tt,this.detachEvents=new tt,this.parentContexts=g(ei),this.location=g(po),this.changeDetector=g($e),this.inputBinder=g(Cr,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(e){if(e.name){let{firstChange:n,previousValue:r}=e.name;if(n)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new $(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new $(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new $(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new $(4013,!1);this._activatedRoute=e;let r=this.location,s=e.snapshot.component,l=this.parentContexts.getOrCreateContext(this.name).children,a=new pr(e,l,r.injector);this.activated=r.createComponent(s,{index:r.length,injector:a,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275dir=X({type:t,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[Ut]})}}return t})(),pr=class t{__ngOutletInjector(i){return new t(this.route,this.childContexts,i)}constructor(i,e,n){this.route=i,this.childContexts=e,this.parent=n}get(i,e){return i===Xt?this.route:i===ei?this.childContexts:this.parent.get(i,e)}},Cr=new Q("");function Sl(t,i,e){let n=Xe(t,i._root,e?e._root:void 0);return new Zn(n,i)}function Xe(t,i,e){if(e&&t.shouldReuseRoute(i.value,e.value.snapshot)){let n=e.value;n._futureSnapshot=i.value;let r=wl(t,i,e);return new nt(n,r)}else{if(t.shouldAttach(i.value)){let o=t.retrieve(i.value);if(o!==null){let s=o.route;return s.value._futureSnapshot=i.value,s.children=i.children.map(l=>Xe(t,l)),s}}let n=Cl(i.value),r=i.children.map(o=>Xe(t,o));return new nt(n,r)}}function wl(t,i,e){return i.children.map(n=>{for(let r of e.children)if(t.shouldReuseRoute(n.value,r.value.snapshot))return Xe(t,n,r);return Xe(t,n)})}function Cl(t){return new Xt(new lt(t.url),new lt(t.params),new lt(t.queryParams),new lt(t.fragment),new lt(t.data),t.outlet,t.component,t)}var tn=class{constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},ls="ngNavigationCancelingError";function Xn(t,i){let{redirectTo:e,navigationBehaviorOptions:n}=Yt(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=cs(!1,it.Redirect);return r.url=e,r.navigationBehaviorOptions=n,r}function cs(t,i){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[ls]=!0,e.cancellationCode=i,e}function El(t){return us(t)&&Yt(t.url)}function us(t){return!!t&&t[ls]}var _l=(t,i,e,n)=>x(r=>(new hr(i,r.targetRouterState,r.currentRouterState,e,n).activate(t),r)),hr=class{constructor(i,e,n,r,o){this.routeReuseStrategy=i,this.futureState=e,this.currState=n,this.forwardEvent=r,this.inputBindingEnabled=o}activate(i){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,i),Vi(this.futureState.root),this.activateChildRoutes(e,n,i)}deactivateChildRoutes(i,e,n){let r=ge(e);i.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,r[s],n),delete r[s]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,n)})}deactivateRoutes(i,e,n){let r=i.value,o=e?e.value:null;if(r===o)if(r.component){let s=n.getContext(r.outlet);s&&this.deactivateChildRoutes(i,e,s.children)}else this.deactivateChildRoutes(i,e,n);else o&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let n=e.getContext(i.value.outlet),r=n&&i.value.component?n.children:e,o=ge(i);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);if(n&&n.outlet){let s=n.outlet.detach(),l=n.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:s,route:i,contexts:l})}}deactivateRouteAndOutlet(i,e){let n=e.getContext(i.value.outlet),r=n&&i.value.component?n.children:e,o=ge(i);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(i,e,n){let r=ge(e);i.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],n),this.forwardEvent(new ar(o.value.snapshot))}),i.children.length&&this.forwardEvent(new or(i.value.snapshot))}activateRoutes(i,e,n){let r=i.value,o=e?e.value:null;if(Vi(r),r===o)if(r.component){let s=n.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,s.children)}else this.activateChildRoutes(i,e,n);else if(r.component){let s=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let l=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(l.contexts),s.attachRef=l.componentRef,s.route=l.route.value,s.outlet&&s.outlet.attach(l.componentRef,l.route.value),Vi(l.route.value),this.activateChildRoutes(i,null,s.children)}else s.attachRef=null,s.route=r,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(i,null,s.children)}else this.activateChildRoutes(i,null,n)}},ti=class{constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},ye=class{constructor(i,e){this.component=i,this.route=e}};function Rl(t,i,e){let n=t._root,r=i?i._root:null;return ze(n,r,e,[n.value])}function Tl(t){let i=t.routeConfig?t.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:t,guards:i}}function Ce(t,i){let e=Symbol(),n=i.get(t,e);return n===e?typeof t=="function"&&!no(t)?t:i.get(t):n}function ze(t,i,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=ge(i);return t.children.forEach(s=>{Il(s,o[s.value.outlet],e,n.concat([s.value]),r),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,l])=>Ge(l,e.getContext(s),r)),r}function Il(t,i,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,s=i?i.value:null,l=e?e.getContext(t.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let a=xl(s,o,o.routeConfig.runGuardsAndResolvers);a?r.canActivateChecks.push(new ti(n)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?ze(t,i,l?l.children:null,n,r):ze(t,i,e,n,r),a&&l&&l.outlet&&l.outlet.isActivated&&r.canDeactivateChecks.push(new ye(l.outlet.component,s))}else s&&Ge(i,l,r),r.canActivateChecks.push(new ti(n)),o.component?ze(t,null,l?l.children:null,n,r):ze(t,null,e,n,r);return r}function xl(t,i,e){if(typeof e=="function")return e(t,i);switch(e){case"pathParamsChange":return!Zt(t.url,i.url);case"pathParamsOrQueryParamsChange":return!Zt(t.url,i.url)||!xt(t.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!dr(t,i)||!xt(t.queryParams,i.queryParams);case"paramsChange":default:return!dr(t,i)}}function Ge(t,i,e){let n=ge(t),r=t.value;Object.entries(n).forEach(([o,s])=>{r.component?i?Ge(s,i.children.getContext(o),e):Ge(s,null,e):Ge(s,i,e)}),r.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new ye(i.outlet.component,r)):e.canDeactivateChecks.push(new ye(null,r)):e.canDeactivateChecks.push(new ye(null,r))}function sn(t){return typeof t=="function"}function Ol(t){return typeof t=="boolean"}function Al(t){return t&&sn(t.canLoad)}function Dl(t){return t&&sn(t.canActivate)}function Ml(t){return t&&sn(t.canActivateChild)}function Ll(t){return t&&sn(t.canDeactivate)}function kl(t){return t&&sn(t.canMatch)}function ds(t){return t instanceof Qr||t?.name==="EmptyError"}var jn=Symbol("INITIAL_VALUE");function we(){return Rt(t=>fi(t.map(i=>i.pipe(re(1),to(jn)))).pipe(x(i=>{for(let e of i)if(e!==!0){if(e===jn)return jn;if(e===!1||Nl(e))return e}return!0}),ne(i=>i!==jn),re(1)))}function Nl(t){return Yt(t)||t instanceof tn}function $l(t,i){return ct(e=>{let{targetSnapshot:n,currentSnapshot:r,guards:{canActivateChecks:o,canDeactivateChecks:s}}=e;return s.length===0&&o.length===0?y(K(f({},e),{guardsResult:!0})):Pl(s,n,r,t).pipe(ct(l=>l&&Ol(l)?Fl(n,o,t,i):y(l)),x(l=>K(f({},e),{guardsResult:l})))})}function Pl(t,i,e,n){return bt(t).pipe(ct(r=>zl(r.component,r.route,e,i,n)),Ft(r=>r!==!0,!0))}function Fl(t,i,e,n){return bt(i).pipe(De(r=>Zr(Bl(r.route.parent,n),Ul(r.route,n),jl(t,r.path,e),Hl(t,r.route,e))),Ft(r=>r!==!0,!0))}function Ul(t,i){return t!==null&&i&&i(new sr(t)),y(!0)}function Bl(t,i){return t!==null&&i&&i(new rr(t)),y(!0)}function Hl(t,i,e){let n=i.routeConfig?i.routeConfig.canActivate:null;if(!n||n.length===0)return y(!0);let r=n.map(o=>gi(()=>{let s=on(i)??e,l=Ce(o,s),a=Dl(l)?l.canActivate(i,t):At(s,()=>l(i,t));return Vt(a).pipe(Ft())}));return y(r).pipe(we())}function jl(t,i,e){let n=i[i.length-1],o=i.slice(0,i.length-1).reverse().map(s=>Tl(s)).filter(s=>s!==null).map(s=>gi(()=>{let l=s.guards.map(a=>{let c=on(s.node)??e,u=Ce(a,c),d=Ml(u)?u.canActivateChild(n,t):At(c,()=>u(n,t));return Vt(d).pipe(Ft())});return y(l).pipe(we())}));return y(o).pipe(we())}function zl(t,i,e,n,r){let o=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!o||o.length===0)return y(!0);let s=o.map(l=>{let a=on(i)??r,c=Ce(l,a),u=Ll(c)?c.canDeactivate(t,i,e,n):At(a,()=>c(t,i,e,n));return Vt(u).pipe(Ft())});return y(s).pipe(we())}function Vl(t,i,e,n){let r=i.canLoad;if(r===void 0||r.length===0)return y(!0);let o=r.map(s=>{let l=Ce(s,t),a=Al(l)?l.canLoad(i,e):At(t,()=>l(i,e));return Vt(a)});return y(o).pipe(we(),ps(n))}function ps(t){return Gr(z(i=>{if(typeof i!="boolean")throw Xn(t,i)}),x(i=>i===!0))}function Wl(t,i,e,n){let r=i.canMatch;if(!r||r.length===0)return y(!0);let o=r.map(s=>{let l=Ce(s,t),a=kl(l)?l.canMatch(i,e):At(t,()=>l(i,e));return Vt(a)});return y(o).pipe(we(),ps(n))}var en=class{constructor(i){this.segmentGroup=i||null}},nn=class extends Error{constructor(i){super(),this.urlTree=i}};function fe(t){return Ae(new en(t))}function ql(t){return Ae(new $(4e3,!1))}function Gl(t){return Ae(cs(!1,it.GuardRejected))}var fr=class{constructor(i,e){this.urlSerializer=i,this.urlTree=e}lineralizeSegments(i,e){let n=[],r=e.root;for(;;){if(n=n.concat(r.segments),r.numberOfChildren===0)return y(n);if(r.numberOfChildren>1||!r.children[v])return ql(`${i.redirectTo}`);r=r.children[v]}}applyRedirectCommands(i,e,n,r,o){if(typeof e!="string"){let l=e,{queryParams:a,fragment:c,routeConfig:u,url:d,outlet:p,params:h,data:m,title:w}=r,_=At(o,()=>l({params:h,data:m,queryParams:a,fragment:c,routeConfig:u,url:d,outlet:p,title:w}));if(_ instanceof kt)throw new nn(_);e=_}let s=this.applyRedirectCreateUrlTree(e,this.urlSerializer.parse(e),i,n);if(e[0]==="/")throw new nn(s);return s}applyRedirectCreateUrlTree(i,e,n,r){let o=this.createSegmentGroup(i,e.root,n,r);return new kt(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let n={};return Object.entries(i).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let l=o.substring(1);n[r]=e[l]}else n[r]=o}),n}createSegmentGroup(i,e,n,r){let o=this.createSegments(i,e.segments,n,r),s={};return Object.entries(e.children).forEach(([l,a])=>{s[l]=this.createSegmentGroup(i,a,n,r)}),new E(o,s)}createSegments(i,e,n,r){return e.map(o=>o.path[0]===":"?this.findPosParam(i,o,r):this.findOrReturn(o,n))}findPosParam(i,e,n){let r=n[e.path.substring(1)];if(!r)throw new $(4001,!1);return r}findOrReturn(i,e){let n=0;for(let r of e){if(r.path===i.path)return e.splice(n),r;n++}return i}},gr={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Kl(t,i,e,n,r){let o=hs(t,i,e);return o.matched?(n=ml(i,n),Wl(n,i,e,r).pipe(x(s=>s===!0?o:f({},gr)))):y(o)}function hs(t,i,e){if(i.path==="**")return Ql(e);if(i.path==="")return i.pathMatch==="full"&&(t.hasChildren()||e.length>0)?f({},gr):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||Va)(e,t,i);if(!r)return f({},gr);let o={};Object.entries(r.posParams??{}).forEach(([l,a])=>{o[l]=a.path});let s=r.consumed.length>0?f(f({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function Ql(t){return{matched:!0,parameters:t.length>0?qo(t).parameters:{},consumedSegments:t,remainingSegments:[],positionalParamSegments:{}}}function jo(t,i,e,n){return e.length>0&&Jl(t,e,n)?{segmentGroup:new E(i,Yl(n,new E(e,t.children))),slicedSegments:[]}:e.length===0&&Xl(t,e,n)?{segmentGroup:new E(t.segments,Zl(t,e,n,t.children)),slicedSegments:e}:{segmentGroup:new E(t.segments,t.children),slicedSegments:e}}function Zl(t,i,e,n){let r={};for(let o of e)if(ni(t,i,o)&&!n[Ct(o)]){let s=new E([],{});r[Ct(o)]=s}return f(f({},n),r)}function Yl(t,i){let e={};e[v]=i;for(let n of t)if(n.path===""&&Ct(n)!==v){let r=new E([],{});e[Ct(n)]=r}return e}function Jl(t,i,e){return e.some(n=>ni(t,i,n)&&Ct(n)!==v)}function Xl(t,i,e){return e.some(n=>ni(t,i,n))}function ni(t,i,e){return(t.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function tc(t,i,e){return i.length===0&&!t.children[e]}var mr=class{};function ec(t,i,e,n,r,o,s="emptyOnly"){return new br(t,i,e,n,r,s,o).recognize()}var nc=31,br=class{constructor(i,e,n,r,o,s,l){this.injector=i,this.configLoader=e,this.rootComponentType=n,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=l,this.applyRedirects=new fr(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(i){return new $(4002,`'${i.segmentGroup}'`)}recognize(){let i=jo(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(i).pipe(x(({children:e,rootSnapshot:n})=>{let r=new nt(n,e),o=new Jn("",r),s=cl(n,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}}))}match(i){let e=new be([],Object.freeze({}),Object.freeze(f({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),v,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,i,v,e).pipe(x(n=>({children:n,rootSnapshot:e})),ie(n=>{if(n instanceof nn)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof en?this.noMatchError(n):n}))}processSegmentGroup(i,e,n,r,o){return n.segments.length===0&&n.hasChildren()?this.processChildren(i,e,n,o):this.processSegment(i,e,n,n.segments,r,!0,o).pipe(x(s=>s instanceof nt?[s]:[]))}processChildren(i,e,n,r){let o=[];for(let s of Object.keys(n.children))s==="primary"?o.unshift(s):o.push(s);return bt(o).pipe(De(s=>{let l=n.children[s],a=bl(e,s);return this.processSegmentGroup(i,a,l,s,r)}),Xr((s,l)=>(s.push(...l),s)),mi(null),Jr(),ct(s=>{if(s===null)return fe(n);let l=fs(s);return ic(l),y(l)}))}processSegment(i,e,n,r,o,s,l){return bt(e).pipe(De(a=>this.processSegmentAgainstRoute(a._injector??i,e,a,n,r,o,s,l).pipe(ie(c=>{if(c instanceof en)return y(null);throw c}))),Ft(a=>!!a),ie(a=>{if(ds(a))return tc(n,r,o)?y(new mr):fe(n);throw a}))}processSegmentAgainstRoute(i,e,n,r,o,s,l,a){return Ct(n)!==s&&(s===v||!ni(r,o,n))?fe(r):n.redirectTo===void 0?this.matchSegmentAgainstRoute(i,r,n,o,s,a):this.allowRedirects&&l?this.expandSegmentAgainstRouteUsingRedirect(i,r,e,n,o,s,a):fe(r)}expandSegmentAgainstRouteUsingRedirect(i,e,n,r,o,s,l){let{matched:a,parameters:c,consumedSegments:u,positionalParamSegments:d,remainingSegments:p}=hs(e,r,o);if(!a)return fe(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>nc&&(this.allowRedirects=!1));let h=new be(o,c,Object.freeze(f({},this.urlTree.queryParams)),this.urlTree.fragment,zo(r),Ct(r),r.component??r._loadedComponent??null,r,Vo(r)),m=Yn(h,l,this.paramsInheritanceStrategy);h.params=Object.freeze(m.params),h.data=Object.freeze(m.data);let w=this.applyRedirects.applyRedirectCommands(u,r.redirectTo,d,h,i);return this.applyRedirects.lineralizeSegments(r,w).pipe(ct(_=>this.processSegment(i,n,e,_.concat(p),s,!1,l)))}matchSegmentAgainstRoute(i,e,n,r,o,s){let l=Kl(e,n,r,i,this.urlSerializer);return n.path==="**"&&(e.children={}),l.pipe(Rt(a=>a.matched?(i=n._injector??i,this.getChildConfig(i,n,r).pipe(Rt(({routes:c})=>{let u=n._loadedInjector??i,{parameters:d,consumedSegments:p,remainingSegments:h}=a,m=new be(p,d,Object.freeze(f({},this.urlTree.queryParams)),this.urlTree.fragment,zo(n),Ct(n),n.component??n._loadedComponent??null,n,Vo(n)),w=Yn(m,s,this.paramsInheritanceStrategy);m.params=Object.freeze(w.params),m.data=Object.freeze(w.data);let{segmentGroup:_,slicedSegments:M}=jo(e,p,h,c);if(M.length===0&&_.hasChildren())return this.processChildren(u,c,_,m).pipe(x(st=>new nt(m,st)));if(c.length===0&&M.length===0)return y(new nt(m,[]));let k=Ct(n)===o;return this.processSegment(u,c,_,M,k?v:o,!0,m).pipe(x(st=>new nt(m,st instanceof nt?[st]:[])))}))):fe(e)))}getChildConfig(i,e,n){return e.children?y({routes:e.children,injector:i}):e.loadChildren?e._loadedRoutes!==void 0?y({routes:e._loadedRoutes,injector:e._loadedInjector}):Vl(i,e,n,this.urlSerializer).pipe(ct(r=>r?this.configLoader.loadChildren(i,e).pipe(z(o=>{e._loadedRoutes=o.routes,e._loadedInjector=o.injector})):Gl(e))):y({routes:[],injector:i})}};function ic(t){t.sort((i,e)=>i.value.outlet===v?-1:e.value.outlet===v?1:i.value.outlet.localeCompare(e.value.outlet))}function rc(t){let i=t.value.routeConfig;return i&&i.path===""}function fs(t){let i=[],e=new Set;for(let n of t){if(!rc(n)){i.push(n);continue}let r=i.find(o=>n.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...n.children),e.add(r)):i.push(n)}for(let n of e){let r=fs(n.children);i.push(new nt(n.value,r))}return i.filter(n=>!e.has(n))}function zo(t){return t.data||{}}function Vo(t){return t.resolve||{}}function oc(t,i,e,n,r,o){return ct(s=>ec(t,i,e,n,s.extractedUrl,r,o).pipe(x(({state:l,tree:a})=>K(f({},s),{targetSnapshot:l,urlAfterRedirects:a}))))}function sc(t,i){return ct(e=>{let{targetSnapshot:n,guards:{canActivateChecks:r}}=e;if(!r.length)return y(e);let o=new Set(r.map(a=>a.route)),s=new Set;for(let a of o)if(!s.has(a))for(let c of gs(a))s.add(c);let l=0;return bt(s).pipe(De(a=>o.has(a)?ac(a,n,t,i):(a.data=Yn(a,a.parent,t).resolve,y(void 0))),z(()=>l++),bi(1),ct(a=>l===s.size?y(e):Pt))})}function gs(t){let i=t.children.map(e=>gs(e)).flat();return[t,...i]}function ac(t,i,e,n){let r=t.routeConfig,o=t._resolve;return r?.title!==void 0&&!as(r)&&(o[rn]=r.title),lc(o,t,i,n).pipe(x(s=>(t._resolvedData=s,t.data=Yn(t,t.parent,e).resolve,null)))}function lc(t,i,e,n){let r=Gi(t);if(r.length===0)return y({});let o={};return bt(r).pipe(ct(s=>cc(t[s],i,e,n).pipe(Ft(),z(l=>{if(l instanceof tn)throw Xn(new Ke,l);o[s]=l}))),bi(1),Yr(o),ie(s=>ds(s)?Pt:Ae(s)))}function cc(t,i,e,n){let r=on(i)??n,o=Ce(t,r),s=o.resolve?o.resolve(i,e):At(r,()=>o(i,e));return Vt(s)}function Wi(t){return Rt(i=>{let e=t(i);return e?bt(e).pipe(x(()=>i)):y(i)})}var ms=(()=>{class t{buildTitle(e){let n,r=e.root;for(;r!==void 0;)n=this.getResolvedTitleForRoute(r)??n,r=r.children.find(o=>o.outlet===v);return n}getResolvedTitleForRoute(e){return e.data[rn]}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=b({token:t,factory:()=>g(uc),providedIn:"root"})}}return t})(),uc=(()=>{class t extends ms{constructor(e){super(),this.title=e}updateTitle(e){let n=this.buildTitle(e);n!==void 0&&this.title.setTitle(n)}static{this.\u0275fac=function(n){return new(n||t)(D(Po))}}static{this.\u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Er=new Q("",{providedIn:"root",factory:()=>({})}),dc=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=F({type:t,selectors:[["ng-component"]],standalone:!0,features:[Y],decls:1,vars:0,template:function(n,r){n&1&&Z(0,"router-outlet")},dependencies:[vl],encapsulation:2})}}return t})();function _r(t){let i=t.children&&t.children.map(_r),e=i?K(f({},t),{children:i}):f({},t);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==v&&(e.component=dc),e}var Rr=new Q(""),pc=(()=>{class t{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=g(Ti)}loadComponent(e){if(this.componentLoaders.get(e))return this.componentLoaders.get(e);if(e._loadedComponent)return y(e._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(e);let n=Vt(e.loadComponent()).pipe(x(bs),z(o=>{this.onLoadEndListener&&this.onLoadEndListener(e),e._loadedComponent=o}),Tn(()=>{this.componentLoaders.delete(e)})),r=new hi(n,()=>new at).pipe(pi());return this.componentLoaders.set(e,r),r}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return y({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let o=hc(n,this.compiler,e,this.onLoadEndListener).pipe(Tn(()=>{this.childrenLoaders.delete(n)})),s=new hi(o,()=>new at).pipe(pi());return this.childrenLoaders.set(n,s),s}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function hc(t,i,e,n){return Vt(t.loadChildren()).pipe(x(bs),ct(r=>r instanceof ho||Array.isArray(r)?y(r):bt(i.compileModuleAsync(r))),x(r=>{n&&n(t);let o,s,l=!1;return Array.isArray(r)?(s=r,l=!0):(o=r.create(e).injector,s=o.get(Rr,[],{optional:!0,self:!0}).flat()),{routes:s.map(_r),injector:o}}))}function fc(t){return t&&typeof t=="object"&&"default"in t}function bs(t){return fc(t)?t.default:t}var Tr=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=b({token:t,factory:()=>g(gc),providedIn:"root"})}}return t})(),gc=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,n){return e}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),mc=new Q("");var bc=new Q(""),yc=(()=>{class t{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new at,this.transitionAbortSubject=new at,this.configLoader=g(pc),this.environmentInjector=g(In),this.urlSerializer=g(Sr),this.rootContexts=g(ei),this.location=g(kn),this.inputBindingEnabled=g(Cr,{optional:!0})!==null,this.titleStrategy=g(ms),this.options=g(Er,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=g(Tr),this.createViewTransition=g(mc,{optional:!0}),this.navigationErrorHandler=g(bc,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>y(void 0),this.rootComponentType=null;let e=r=>this.events.next(new nr(r)),n=r=>this.events.next(new ir(r));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=e}complete(){this.transitions?.complete()}handleNavigationRequest(e){let n=++this.navigationId;this.transitions?.next(K(f(f({},this.transitions.value),e),{id:n}))}setupNavigations(e,n,r){return this.transitions=new lt({id:0,currentUrlTree:n,currentRawUrl:n,extractedUrl:this.urlHandlingStrategy.extract(n),urlAfterRedirects:this.urlHandlingStrategy.extract(n),rawUrl:n,extras:{},resolve:()=>{},reject:()=>{},promise:Promise.resolve(!0),source:qe,restoredState:null,currentSnapshot:r.snapshot,targetSnapshot:null,currentRouterState:r,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(ne(o=>o.id!==0),x(o=>K(f({},o),{extractedUrl:this.urlHandlingStrategy.extract(o.rawUrl)})),Rt(o=>{let s=!1,l=!1;return y(o).pipe(Rt(a=>{if(this.navigationId>o.id)return this.cancelNavigationTransition(o,"",it.SupersededByNewNavigation),Pt;this.currentTransition=o,this.currentNavigation={id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:this.lastSuccessfulNavigation?K(f({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let c=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=a.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!c&&u!=="reload"){let d="";return this.events.next(new Jt(a.id,this.urlSerializer.serialize(a.rawUrl),d,Yi.IgnoredSameUrlNavigation)),a.resolve(!1),Pt}if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return y(a).pipe(Rt(d=>{let p=this.transitions?.getValue();return this.events.next(new Ze(d.id,this.urlSerializer.serialize(d.extractedUrl),d.source,d.restoredState)),p!==this.transitions?.getValue()?Pt:Promise.resolve(d)}),oc(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy),z(d=>{o.targetSnapshot=d.targetSnapshot,o.urlAfterRedirects=d.urlAfterRedirects,this.currentNavigation=K(f({},this.currentNavigation),{finalUrl:d.urlAfterRedirects});let p=new Kn(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);this.events.next(p)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:d,extractedUrl:p,source:h,restoredState:m,extras:w}=a,_=new Ze(d,this.urlSerializer.serialize(p),h,m);this.events.next(_);let M=os(this.rootComponentType).snapshot;return this.currentTransition=o=K(f({},a),{targetSnapshot:M,urlAfterRedirects:p,extras:K(f({},w),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=p,y(o)}else{let d="";return this.events.next(new Jt(a.id,this.urlSerializer.serialize(a.extractedUrl),d,Yi.IgnoredByUrlHandlingStrategy)),a.resolve(!1),Pt}}),z(a=>{let c=new Ji(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(c)}),x(a=>(this.currentTransition=o=K(f({},a),{guards:Rl(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),o)),$l(this.environmentInjector,a=>this.events.next(a)),z(a=>{if(o.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw Xn(this.urlSerializer,a.guardsResult);let c=new Xi(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);this.events.next(c)}),ne(a=>a.guardsResult?!0:(this.cancelNavigationTransition(a,"",it.GuardRejected),!1)),Wi(a=>{if(a.guards.canActivateChecks.length)return y(a).pipe(z(c=>{let u=new tr(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(u)}),Rt(c=>{let u=!1;return y(c).pipe(sc(this.paramsInheritanceStrategy,this.environmentInjector),z({next:()=>u=!0,complete:()=>{u||this.cancelNavigationTransition(c,"",it.NoDataFromResolver)}}))}),z(c=>{let u=new er(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(u)}))}),Wi(a=>{let c=u=>{let d=[];u.routeConfig?.loadComponent&&!u.routeConfig._loadedComponent&&d.push(this.configLoader.loadComponent(u.routeConfig).pipe(z(p=>{u.component=p}),x(()=>{})));for(let p of u.children)d.push(...c(p));return d};return fi(c(a.targetSnapshot.root)).pipe(mi(null),re(1))}),Wi(()=>this.afterPreactivation()),Rt(()=>{let{currentSnapshot:a,targetSnapshot:c}=o,u=this.createViewTransition?.(this.environmentInjector,a.root,c.root);return u?bt(u).pipe(x(()=>o)):y(o)}),x(a=>{let c=Sl(e.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);return this.currentTransition=o=K(f({},a),{targetRouterState:c}),this.currentNavigation.targetRouterState=c,o}),z(()=>{this.events.next(new Je)}),_l(this.rootContexts,e.routeReuseStrategy,a=>this.events.next(a),this.inputBindingEnabled),re(1),z({next:a=>{s=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new zt(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0)},complete:()=>{s=!0}}),eo(this.transitionAbortSubject.pipe(z(a=>{throw a}))),Tn(()=>{!s&&!l&&this.cancelNavigationTransition(o,"",it.SupersededByNewNavigation),this.currentTransition?.id===o.id&&(this.currentNavigation=null,this.currentTransition=null)}),ie(a=>{if(l=!0,us(a))this.events.next(new Lt(o.id,this.urlSerializer.serialize(o.extractedUrl),a.message,a.cancellationCode)),El(a)?this.events.next(new Se(a.url,a.navigationBehaviorOptions)):o.resolve(!1);else{let c=new Ye(o.id,this.urlSerializer.serialize(o.extractedUrl),a,o.targetSnapshot??void 0);try{let u=At(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(u instanceof tn){let{message:d,cancellationCode:p}=Xn(this.urlSerializer,u);this.events.next(new Lt(o.id,this.urlSerializer.serialize(o.extractedUrl),d,p)),this.events.next(new Se(u.redirectTo,u.navigationBehaviorOptions))}else{this.events.next(c);let d=e.errorHandler(a);o.resolve(!!d)}}catch(u){this.options.resolveNavigationPromiseOnError?o.resolve(!1):o.reject(u)}}return Pt}))}))}cancelNavigationTransition(e,n,r){let o=new Lt(e.id,this.urlSerializer.serialize(e.extractedUrl),n,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return e.toString()!==n?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function vc(t){return t!==qe}var Sc=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=b({token:t,factory:()=>g(wc),providedIn:"root"})}}return t})(),yr=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}},wc=(()=>{class t extends yr{static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=T(t)))(r||t)}})()}static{this.\u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),ys=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=b({token:t,factory:()=>g(Cc),providedIn:"root"})}}return t})(),Cc=(()=>{class t extends ys{constructor(){super(...arguments),this.location=g(kn),this.urlSerializer=g(Sr),this.options=g(Er,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=g(Tr),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new kt,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=os(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(n=>{n.type==="popstate"&&e(n.url,n.state)})}handleRouterEvent(e,n){if(e instanceof Ze)this.stateMemento=this.createStateMemento();else if(e instanceof Jt)this.rawUrlTree=n.initialUrl;else if(e instanceof Kn){if(this.urlUpdateStrategy==="eager"&&!n.extras.skipLocationChange){let r=this.urlHandlingStrategy.merge(n.finalUrl,n.initialUrl);this.setBrowserUrl(n.targetBrowserUrl??r,n)}}else e instanceof Je?(this.currentUrlTree=n.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(n.finalUrl,n.initialUrl),this.routerState=n.targetRouterState,this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(n.targetBrowserUrl??this.rawUrlTree,n)):e instanceof Lt&&(e.code===it.GuardRejected||e.code===it.NoDataFromResolver)?this.restoreHistory(n):e instanceof Ye?this.restoreHistory(n,!0):e instanceof zt&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,n){let r=e instanceof kt?this.urlSerializer.serialize(e):e;if(this.location.isCurrentPathEqualTo(r)||n.extras.replaceUrl){let o=this.browserPageId,s=f(f({},n.extras.state),this.generateNgRouterState(n.id,o));this.location.replaceState(r,"",s)}else{let o=f(f({},n.extras.state),this.generateNgRouterState(n.id,this.browserPageId+1));this.location.go(r,"",o)}}restoreHistory(e,n=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.currentUrlTree===e.finalUrl&&o===0&&(this.resetState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetState(e),this.resetUrlToCurrentUrlTree())}resetState(e){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,n){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:n}:{navigationId:e}}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=T(t)))(r||t)}})()}static{this.\u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Ve=function(t){return t[t.COMPLETE=0]="COMPLETE",t[t.FAILED=1]="FAILED",t[t.REDIRECTING=2]="REDIRECTING",t}(Ve||{});function Ec(t,i){t.events.pipe(ne(e=>e instanceof zt||e instanceof Lt||e instanceof Ye||e instanceof Jt),x(e=>e instanceof zt||e instanceof Jt?Ve.COMPLETE:(e instanceof Lt?e.code===it.Redirect||e.code===it.SupersededByNewNavigation:!1)?Ve.REDIRECTING:Ve.FAILED),ne(e=>e!==Ve.REDIRECTING),re(1)).subscribe(()=>{i()})}function _c(t){throw t}var Rc={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Tc={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Ir=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.console=g(Mn),this.stateManager=g(ys),this.options=g(Er,{optional:!0})||{},this.pendingTasks=g(oo),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=g(yc),this.urlSerializer=g(Sr),this.location=g(kn),this.urlHandlingStrategy=g(Tr),this._events=new at,this.errorHandler=this.options.errorHandler||_c,this.navigated=!1,this.routeReuseStrategy=g(Sc),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=g(Rr,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!g(Cr,{optional:!0}),this.eventsSubscription=new qr,this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:e=>{this.console.warn(e)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(n=>{try{let r=this.navigationTransitions.currentTransition,o=this.navigationTransitions.currentNavigation;if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(n,o),n instanceof Lt&&n.code!==it.Redirect&&n.code!==it.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof zt)this.navigated=!0;else if(n instanceof Se){let s=n.navigationBehaviorOptions,l=this.urlHandlingStrategy.merge(n.url,r.currentRawUrl),a=f({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||vc(r.source)},s);this.scheduleNavigation(l,qe,null,a,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}xc(n)&&this._events.next(n)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),qe,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,n)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(e,"popstate",n)},0)})}navigateToSyncWithBrowser(e,n,r){let o={replaceUrl:!0},s=r?.navigationId?r:null;if(r){let a=f({},r);delete a.navigationId,delete a.\u0275routerPageId,Object.keys(a).length!==0&&(o.state=a)}let l=this.parseUrl(e);this.scheduleNavigation(l,n,s,o)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(_r),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,n={}){let{relativeTo:r,queryParams:o,fragment:s,queryParamsHandling:l,preserveFragment:a}=n,c=a?this.currentUrlTree.fragment:s,u=null;switch(l??this.options.defaultQueryParamsHandling){case"merge":u=f(f({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let d;try{let p=r?r.snapshot:this.routerState.snapshot.root;d=es(p)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),d=this.currentUrlTree.root}return ns(d,e,u,c??null)}navigateByUrl(e,n={skipLocationChange:!1}){let r=Yt(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,qe,null,n)}navigate(e,n={skipLocationChange:!1}){return Ic(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.urlSerializer.parse("/")}}isActive(e,n){let r;if(n===!0?r=f({},Rc):n===!1?r=f({},Tc):r=n,Yt(e))return Fo(this.currentUrlTree,e,r);let o=this.parseUrl(e);return Fo(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((n,[r,o])=>(o!=null&&(n[r]=o),n),{})}scheduleNavigation(e,n,r,o,s){if(this.disposed)return Promise.resolve(!1);let l,a,c;s?(l=s.resolve,a=s.reject,c=s.promise):c=new Promise((d,p)=>{l=d,a=p});let u=this.pendingTasks.add();return Ec(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:l,reject:a,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(d=>Promise.reject(d))}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function Ic(t){for(let i=0;i<t.length;i++)if(t[i]==null)throw new $(4008,!1)}function xc(t){return!(t instanceof Je)&&!(t instanceof Se)}var fp=(()=>{class t{constructor(e,n,r,o,s,l){this.router=e,this.route=n,this.tabIndexAttribute=r,this.renderer=o,this.el=s,this.locationStrategy=l,this.href=null,this.onChanges=new at,this.preserveFragment=!1,this.skipLocationChange=!1,this.replaceUrl=!1,this.routerLinkInput=null;let a=s.nativeElement.tagName?.toLowerCase();this.isAnchorElement=a==="a"||a==="area",this.isAnchorElement?this.subscription=e.events.subscribe(c=>{c instanceof zt&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}set routerLink(e){e==null?(this.routerLinkInput=null,this.setTabIndexIfNotOnNativeEl(null)):(Yt(e)?this.routerLinkInput=e:this.routerLinkInput=Array.isArray(e)?e:[e],this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,n,r,o,s){let l=this.urlTree;if(l===null||this.isAnchorElement&&(e!==0||n||r||o||s||typeof this.target=="string"&&this.target!="_self"))return!0;let a={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(l,a),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let e=this.urlTree;this.href=e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e)):null;let n=this.href===null?null:lo(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",n)}applyAttributeValue(e,n){let r=this.renderer,o=this.el.nativeElement;n!==null?r.setAttribute(o,e,n):r.removeAttribute(o,e)}get urlTree(){return this.routerLinkInput===null?null:Yt(this.routerLinkInput)?this.routerLinkInput:this.router.createUrlTree(this.routerLinkInput,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}static{this.\u0275fac=function(n){return new(n||t)(jt(Ir),jt(Xt),ro("tabindex"),jt(An),jt(ae),jt(Oi))}}static{this.\u0275dir=X({type:t,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(n,r){n&1&&Kt("click",function(s){return r.onClick(s.button,s.ctrlKey,s.shiftKey,s.altKey,s.metaKey)}),n&2&&L("target",r.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",R],skipLocationChange:[2,"skipLocationChange","skipLocationChange",R],replaceUrl:[2,"replaceUrl","replaceUrl",R],routerLink:"routerLink"},standalone:!0,features:[Tt,Ut]})}}return t})();var Oc=new Q("");function gp(t,...i){return Le([{provide:Rr,multi:!0,useValue:t},[],{provide:Xt,useFactory:Ac,deps:[Ir]},{provide:wo,multi:!0,useFactory:Dc},i.map(e=>e.\u0275providers)])}function Ac(t){return t.routerState.root}function Dc(){let t=g(On);return i=>{let e=t.get(Ri);if(i!==e.components[0])return;let n=t.get(Ir),r=t.get(Mc);t.get(Lc)===1&&n.initialNavigation(),t.get(kc,null,yi.Optional)?.setUpPreloading(),t.get(Oc,null,yi.Optional)?.init(),n.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Mc=new Q("",{factory:()=>new at}),Lc=new Q("",{providedIn:"root",factory:()=>1});var kc=new Q("");function vs(t,i){return t?t.classList?t.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(t.className):!1}function Wt(t,i){if(t&&i){let e=n=>{vs(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function Nc(){return window.innerWidth-document.documentElement.offsetWidth}function Ee(t){for(let i of document?.styleSheets)try{for(let e of i?.cssRules)for(let n of e?.style)if(t.test(n))return{name:n,value:e.style.getPropertyValue(n).trim()}}catch{}return null}function Ss(t="p-overflow-hidden"){let i=Ee(/-scrollbar-width$/);i?.name&&document.body.style.setProperty(i.name,Nc()+"px"),Wt(document.body,t)}function te(t,i){if(t&&i){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function ws(t="p-overflow-hidden"){let i=Ee(/-scrollbar-width$/);i?.name&&document.body.style.removeProperty(i.name),te(document.body,t)}function Cs(t){let i={width:0,height:0};return t&&(t.style.visibility="hidden",t.style.display="block",i.width=t.offsetWidth,i.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible"),i}function Es(){let t=window,i=document,e=i.documentElement,n=i.getElementsByTagName("body")[0],r=t.innerWidth||e.clientWidth||n.clientWidth,o=t.innerHeight||e.clientHeight||n.clientHeight;return{width:r,height:o}}function $c(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}function Pc(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function vp(t,i,e=!0){var n,r,o,s;if(t){let l=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:Cs(t),a=l.height,c=l.width,u=i.offsetHeight,d=i.offsetWidth,p=i.getBoundingClientRect(),h=Pc(),m=$c(),w=Es(),_,M,k="top";p.top+u+a>w.height?(_=p.top+h-a,k="bottom",_<0&&(_=h)):_=u+p.top+h,p.left+c>w.width?M=Math.max(0,p.left+m+d-c):M=p.left+m,t.style.top=_+"px",t.style.left=M+"px",t.style.transformOrigin=k,e&&(t.style.marginTop=k==="bottom"?`calc(${(r=(n=Ee(/-anchor-gutter$/))==null?void 0:n.value)!=null?r:"2px"} * -1)`:(s=(o=Ee(/-anchor-gutter$/))==null?void 0:o.value)!=null?s:"")}}function _s(t,i){if(t instanceof HTMLElement){let e=t.offsetWidth;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function Sp(t,i,e=!0){var n,r,o,s;if(t){let l=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:Cs(t),a=i.offsetHeight,c=i.getBoundingClientRect(),u=Es(),d,p,h="top";c.top+a+l.height>u.height?(d=-1*l.height,h="bottom",c.top+d<0&&(d=-1*c.top)):d=a,l.width>u.width?p=c.left*-1:c.left+l.width>u.width?p=(c.left+l.width-u.width)*-1:p=0,t.style.top=d+"px",t.style.left=p+"px",t.style.transformOrigin=h,e&&(t.style.marginTop=h==="bottom"?`calc(${(r=(n=Ee(/-anchor-gutter$/))==null?void 0:n.value)!=null?r:"2px"} * -1)`:(s=(o=Ee(/-anchor-gutter$/))==null?void 0:o.value)!=null?s:"")}}function an(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}function xr(t){let i=t;return t&&typeof t=="object"&&(t.hasOwnProperty("current")?i=t.current:t.hasOwnProperty("el")&&(t.el.hasOwnProperty("nativeElement")?i=t.el.nativeElement:i=t.el)),an(i)?i:void 0}function Rs(t,i){let e=xr(t);if(e)e.appendChild(i);else throw new Error("Cannot append "+i+" to "+t)}function ii(t,i={}){if(an(t)){let e=(n,r)=>{var o,s;let l=(o=t?.$attrs)!=null&&o[n]?[(s=t?.$attrs)==null?void 0:s[n]]:[];return[r].flat().reduce((a,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")a.push(c);else if(u==="object"){let d=Array.isArray(c)?e(n,c):Object.entries(c).map(([p,h])=>n==="style"&&(h||h===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?p:void 0);a=d.length?a.concat(d.filter(p=>!!p)):a}}return a},l)};Object.entries(i).forEach(([n,r])=>{if(r!=null){let o=n.match(/^on(.+)/);o?t.addEventListener(o[1].toLowerCase(),r):n==="p-bind"||n==="pBind"?ii(t,r):(r=n==="class"?[...new Set(e("class",r))].join(" ").trim():n==="style"?e("style",r).join(";").trim():r,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=r),t.setAttribute(n,r))}})}}function wp(t,i={},...e){if(t){let n=document.createElement(t);return ii(n,i),n.append(...e),n}}function Cp(t,i){if(t){t.style.opacity="0";let e=+new Date,n="0",r=function(){n=`${+t.style.opacity+(new Date().getTime()-e)/i}`,t.style.opacity=n,e=+new Date,+n<1&&(window.requestAnimationFrame&&requestAnimationFrame(r)||setTimeout(r,16))};r()}}function Fc(t,i){return an(t)?Array.from(t.querySelectorAll(i)):[]}function Uc(t,i){return an(t)?t.matches(i)?t:t.querySelector(i):null}function Ep(t,i){t&&document.activeElement!==t&&t.focus(i)}function Ts(t,i=""){let e=Fc(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`),n=[];for(let r of e)getComputedStyle(r).display!="none"&&getComputedStyle(r).visibility!="hidden"&&n.push(r);return n}function _p(t,i){let e=Ts(t,i);return e.length>0?e[0]:null}function Or(t){if(t){let i=t.offsetHeight,e=getComputedStyle(t);return i-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),i}return 0}function Is(t){if(t){let i=t.parentNode;return i&&i instanceof ShadowRoot&&i.host&&(i=i.host),i}return null}function Rp(t){var i;if(t){let e=(i=Is(t))==null?void 0:i.childNodes,n=0;if(e)for(let r=0;r<e.length;r++){if(e[r]===t)return n;e[r].nodeType===1&&n++}}return-1}function Tp(t,i){let e=Ts(t,i);return e.length>0?e[e.length-1]:null}function xs(t){if(t){let i=t.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function Ar(t,i){if(t){let e=t.offsetHeight;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function Ip(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function Bc(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&Is(t))}function xp(t,i){var e;if(t)switch(t){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@parent":return i?.parentElement;case"@grandparent":return(e=i?.parentElement)==null?void 0:e.parentElement;default:if(typeof t=="string")return document.querySelector(t);let r=xr((o=>!!(o&&o.constructor&&o.call&&o.apply))(t)?t():t);return r?.nodeType===9||Bc(r)?r:void 0}}function Op(){return navigator.userAgent}function Dr(t){if(t){let i=t.offsetWidth,e=getComputedStyle(t);return i-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),i}return 0}function Ap(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Dp(t){return!!(t&&t.offsetParent!=null)}function Mp(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function Os(t){var i;t&&("remove"in Element.prototype?t.remove():(i=t.parentNode)==null||i.removeChild(t))}function Lp(t,i){let e=xr(t);if(e)e.removeChild(i);else throw new Error("Cannot remove "+i+" from "+t)}function kp(t,i){let e=getComputedStyle(t).getPropertyValue("borderTopWidth"),n=e?parseFloat(e):0,r=getComputedStyle(t).getPropertyValue("paddingTop"),o=r?parseFloat(r):0,s=t.getBoundingClientRect(),a=i.getBoundingClientRect().top+document.body.scrollTop-(s.top+document.body.scrollTop)-n-o,c=t.scrollTop,u=t.clientHeight,d=Ar(i);a<0?t.scrollTop=c+a:a+d>u&&(t.scrollTop=c+a-u+d)}function ri(t,i="",e){an(t)&&e!==null&&e!==void 0&&t.setAttribute(i,e)}function As(){let t=new Map;return{on(i,e){let n=t.get(i);return n?n.push(e):n=[e],t.set(i,n),this},off(i,e){let n=t.get(i);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(i,e){let n=t.get(i);n&&n.slice().map(r=>{r(e)})},clear(){t.clear()}}}function ht(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function Mr(t,i,e=new WeakSet){if(t===i)return!0;if(!t||!i||typeof t!="object"||typeof i!="object"||e.has(t)||e.has(i))return!1;e.add(t).add(i);let n=Array.isArray(t),r=Array.isArray(i),o,s,l;if(n&&r){if(s=t.length,s!=i.length)return!1;for(o=s;o--!==0;)if(!Mr(t[o],i[o],e))return!1;return!0}if(n!=r)return!1;let a=t instanceof Date,c=i instanceof Date;if(a!=c)return!1;if(a&&c)return t.getTime()==i.getTime();let u=t instanceof RegExp,d=i instanceof RegExp;if(u!=d)return!1;if(u&&d)return t.toString()==i.toString();let p=Object.keys(t);if(s=p.length,s!==Object.keys(i).length)return!1;for(o=s;o--!==0;)if(!Object.prototype.hasOwnProperty.call(i,p[o]))return!1;for(o=s;o--!==0;)if(l=p[o],!Mr(t[l],i[l],e))return!1;return!0}function Hc(t,i){return Mr(t,i)}function Ms(t){return!!(t&&t.constructor&&t.call&&t.apply)}function I(t){return!ht(t)}function oi(t,i){if(!t||!i)return null;try{let e=t[i];if(I(e))return e}catch{}if(Object.keys(t).length){if(Ms(i))return i(t);if(i.indexOf(".")===-1)return t[i];{let e=i.split("."),n=t;for(let r=0,o=e.length;r<o;++r){if(n==null)return null;n=n[e[r]]}return n}}return null}function Lr(t,i,e){return e?oi(t,e)===oi(i,e):Hc(t,i)}function Fp(t,i){if(t!=null&&i&&i.length){for(let e of i)if(Lr(t,e))return!0}return!1}function Up(t,i){let e=-1;if(I(t))try{e=t.findLastIndex(i)}catch{e=t.lastIndexOf([...t].reverse().find(i))}return e}function Nt(t,i=!0){return t instanceof Object&&t.constructor===Object&&(i||Object.keys(t).length!==0)}function pt(t,...i){return Ms(t)?t(...i):t}function qt(t,i=!0){return typeof t=="string"&&(i||t!=="")}function Ds(t){return qt(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function si(t,i="",e={}){let n=Ds(i).split("."),r=n.shift();return r?Nt(t)?si(pt(t[Object.keys(t).find(o=>Ds(o)===r)||""],e),n.join("."),e):void 0:pt(t,e)}function ai(t,i=!0){return Array.isArray(t)&&(i||t.length!==0)}function Bp(t){return t instanceof Date&&t.constructor===Date}function Ls(t){return I(t)&&!isNaN(t)}function Hp(t=""){return I(t)&&t.length===1&&!!t.match(/\S| /)}function rt(t,i){if(i){let e=i.test(t);return i.lastIndex=0,e}return!1}function ee(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function ot(t){if(t&&/[\xC0-\xFF\u0100-\u017E]/.test(t)){let e={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let n in e)t=t.replace(e[n],n)}return t}function li(t){return qt(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(i,e)=>e===0?i:"-"+i.toLowerCase()).toLowerCase():t}function kr(t){return qt(t)?t.replace(/[A-Z]/g,(i,e)=>e===0?i:"."+i.toLowerCase()).toLowerCase():t}var ci={};function ln(t="pui_id_"){return ci.hasOwnProperty(t)||(ci[t]=0),ci[t]++,`${t}${ci[t]}`}function jc(){let t=[],i=(s,l,a=999)=>{let c=r(s,l,a),u=c.value+(c.key===s?0:a)+1;return t.push({key:s,value:u}),u},e=s=>{t=t.filter(l=>l.value!==s)},n=(s,l)=>r(s,l).value,r=(s,l,a=0)=>[...t].reverse().find(c=>l?!0:c.key===s)||{key:s,value:a},o=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:o,set:(s,l,a)=>{l&&(l.style.zIndex=String(i(s,!0,a)))},clear:s=>{s&&(e(o(s)),s.style.zIndex="")},getCurrent:s=>n(s,!0)}}var Vp=jc();var j=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})(),ih=(()=>{class t{static AND="and";static OR="or"}return t})(),rh=(()=>{class t{filter(e,n,r,o,s){let l=[];if(e)for(let a of e)for(let c of n){let u=oi(a,c);if(this.filters[o](u,r,s)){l.push(a);break}}return l}filters={startsWith:(e,n,r)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let o=ot(n.toString()).toLocaleLowerCase(r);return ot(e.toString()).toLocaleLowerCase(r).slice(0,o.length)===o},contains:(e,n,r)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let o=ot(n.toString()).toLocaleLowerCase(r);return ot(e.toString()).toLocaleLowerCase(r).indexOf(o)!==-1},notContains:(e,n,r)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let o=ot(n.toString()).toLocaleLowerCase(r);return ot(e.toString()).toLocaleLowerCase(r).indexOf(o)===-1},endsWith:(e,n,r)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let o=ot(n.toString()).toLocaleLowerCase(r),s=ot(e.toString()).toLocaleLowerCase(r);return s.indexOf(o,s.length-o.length)!==-1},equals:(e,n,r)=>n==null||typeof n=="string"&&n.trim()===""?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()===n.getTime():e==n?!0:ot(e.toString()).toLocaleLowerCase(r)==ot(n.toString()).toLocaleLowerCase(r),notEquals:(e,n,r)=>n==null||typeof n=="string"&&n.trim()===""?!1:e==null?!0:e.getTime&&n.getTime?e.getTime()!==n.getTime():e==n?!1:ot(e.toString()).toLocaleLowerCase(r)!=ot(n.toString()).toLocaleLowerCase(r),in:(e,n)=>{if(n==null||n.length===0)return!0;for(let r=0;r<n.length;r++)if(Lr(e,n[r]))return!0;return!1},between:(e,n)=>n==null||n[0]==null||n[1]==null?!0:e==null?!1:e.getTime?n[0].getTime()<=e.getTime()&&e.getTime()<=n[1].getTime():n[0]<=e&&e<=n[1],lt:(e,n,r)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<n.getTime():e<n,lte:(e,n,r)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<=n.getTime():e<=n,gt:(e,n,r)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>n.getTime():e>n,gte:(e,n,r)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>=n.getTime():e>=n,is:(e,n,r)=>this.filters.equals(e,n,r),isNot:(e,n,r)=>this.filters.notEquals(e,n,r),before:(e,n,r)=>this.filters.lt(e,n,r),after:(e,n,r)=>this.filters.gt(e,n,r),dateIs:(e,n)=>n==null?!0:e==null?!1:e.toDateString()===n.toDateString(),dateIsNot:(e,n)=>n==null?!0:e==null?!1:e.toDateString()!==n.toDateString(),dateBefore:(e,n)=>n==null?!0:e==null?!1:e.getTime()<n.getTime(),dateAfter:(e,n)=>n==null?!0:e==null?!1:(e.setHours(0,0,0,0),e.getTime()>n.getTime())};register(e,n){this.filters[e]=n}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var oh=(()=>{class t{clickSource=new at;clickObservable=this.clickSource.asObservable();add(e){e&&this.clickSource.next(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ks=["*"],sh=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["p-header"]],ngContentSelectors:ks,decls:1,vars:0,template:function(n,r){n&1&&(Dt(),Mt(0))},encapsulation:2})}return t})(),ah=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["p-footer"]],ngContentSelectors:ks,decls:1,vars:0,template:function(n,r){n&1&&(Dt(),Mt(0))},encapsulation:2})}return t})(),Ns=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(jt(co))};static \u0275dir=X({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]},standalone:!0})}return t})(),Ot=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=vt({type:t});static \u0275inj=yt({imports:[It]})}return t})(),lh=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return t})();var zc=Object.defineProperty,Vc=Object.defineProperties,Wc=Object.getOwnPropertyDescriptors,ui=Object.getOwnPropertySymbols,Fs=Object.prototype.hasOwnProperty,Us=Object.prototype.propertyIsEnumerable,$s=(t,i,e)=>i in t?zc(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,_t=(t,i)=>{for(var e in i||(i={}))Fs.call(i,e)&&$s(t,e,i[e]);if(ui)for(var e of ui(i))Us.call(i,e)&&$s(t,e,i[e]);return t},Nr=(t,i)=>Vc(t,Wc(i)),$t=(t,i)=>{var e={};for(var n in t)Fs.call(t,n)&&i.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&ui)for(var n of ui(t))i.indexOf(n)<0&&Us.call(t,n)&&(e[n]=t[n]);return e};var qc=As(),ft=qc;function Ps(t,i){ai(t)?t.push(...i||[]):Nt(t)&&Object.assign(t,i)}function Gc(t){return Nt(t)&&t.hasOwnProperty("value")&&t.hasOwnProperty("type")?t.value:t}function Kc(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function $r(t="",i=""){return Kc(`${qt(t,!1)&&qt(i,!1)?`${t}-`:t}${i}`)}function Bs(t="",i=""){return`--${$r(t,i)}`}function Qc(t=""){let i=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(i+e)%2!==0}function Hs(t,i="",e="",n=[],r){if(qt(t)){let o=/{([^}]*)}/g,s=t.trim();if(Qc(s))return;if(rt(s,o)){let l=s.replaceAll(o,u=>{let p=u.replace(/{|}/g,"").split(".").filter(h=>!n.some(m=>rt(h,m)));return`var(${Bs(e,li(p.join("-")))}${I(r)?`, ${r}`:""})`}),a=/(\d+\s+[\+\-\*\/]\s+\d+)/g,c=/var\([^)]+\)/g;return rt(l.replace(c,"0"),a)?`calc(${l})`:l}return s}else if(Ls(t))return t}function Zc(t,i,e){qt(i,!1)&&t.push(`${i}:${e};`)}function _e(t,i){return t?`${t}{${i}}`:""}var Re=(...t)=>Yc(O.getTheme(),...t),Yc=(t={},i,e,n)=>{if(i){let{variable:r,options:o}=O.defaults||{},{prefix:s,transform:l}=t?.options||o||{},c=rt(i,/{([^}]*)}/g)?i:`{${i}}`;return n==="value"||ht(n)&&l==="strict"?O.getTokenValue(i):Hs(c,void 0,s,[r.excludedKeyRegex],e)}return""};function Jc(t,i={}){let e=O.defaults.variable,{prefix:n=e.prefix,selector:r=e.selector,excludedKeyRegex:o=e.excludedKeyRegex}=i,s=(c,u="")=>Object.entries(c).reduce((d,[p,h])=>{let m=rt(p,o)?$r(u):$r(u,li(p)),w=Gc(h);if(Nt(w)){let{variables:_,tokens:M}=s(w,m);Ps(d.tokens,M),Ps(d.variables,_)}else d.tokens.push((n?m.replace(`${n}-`,""):m).replaceAll("-",".")),Zc(d.variables,Bs(m),Hs(w,m,n,[o]));return d},{variables:[],tokens:[]}),{variables:l,tokens:a}=s(t,n);return{value:l,tokens:a,declarations:l.join(""),css:_e(r,l.join(""))}}var Et={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:`${t}{:root{[CSS]}}`,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let i=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=i.map(r=>r.resolve(e)).find(r=>r.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,i){return Jc(t,{prefix:i?.prefix})},getCommon({name:t="",theme:i={},params:e,set:n,defaults:r}){var o,s,l,a,c,u,d;let{preset:p,options:h}=i,m,w,_,M,k,st,mt;if(I(p)&&h.transform!=="strict"){let{primitive:dn,semantic:pn,extend:hn}=p,Ie=pn||{},{colorScheme:fn}=Ie,gn=$t(Ie,["colorScheme"]),mn=hn||{},{colorScheme:bn}=mn,xe=$t(mn,["colorScheme"]),Oe=fn||{},{dark:yn}=Oe,vn=$t(Oe,["dark"]),Sn=bn||{},{dark:wn}=Sn,Cn=$t(Sn,["dark"]),En=I(dn)?this._toVariables({primitive:dn},h):{},_n=I(gn)?this._toVariables({semantic:gn},h):{},Rn=I(vn)?this._toVariables({light:vn},h):{},jr=I(yn)?this._toVariables({dark:yn},h):{},zr=I(xe)?this._toVariables({semantic:xe},h):{},Vr=I(Cn)?this._toVariables({light:Cn},h):{},Wr=I(wn)?this._toVariables({dark:wn},h):{},[ia,ra]=[(o=En.declarations)!=null?o:"",En.tokens],[oa,sa]=[(s=_n.declarations)!=null?s:"",_n.tokens||[]],[aa,la]=[(l=Rn.declarations)!=null?l:"",Rn.tokens||[]],[ca,ua]=[(a=jr.declarations)!=null?a:"",jr.tokens||[]],[da,pa]=[(c=zr.declarations)!=null?c:"",zr.tokens||[]],[ha,fa]=[(u=Vr.declarations)!=null?u:"",Vr.tokens||[]],[ga,ma]=[(d=Wr.declarations)!=null?d:"",Wr.tokens||[]];m=this.transformCSS(t,ia,"light","variable",h,n,r),w=ra;let ba=this.transformCSS(t,`${oa}${aa}`,"light","variable",h,n,r),ya=this.transformCSS(t,`${ca}`,"dark","variable",h,n,r);_=`${ba}${ya}`,M=[...new Set([...sa,...la,...ua])];let va=this.transformCSS(t,`${da}${ha}color-scheme:light`,"light","variable",h,n,r),Sa=this.transformCSS(t,`${ga}color-scheme:dark`,"dark","variable",h,n,r);k=`${va}${Sa}`,st=[...new Set([...pa,...fa,...ma])],mt=pt(p.css,{dt:Re})}return{primitive:{css:m,tokens:w},semantic:{css:_,tokens:M},global:{css:k,tokens:st},style:mt}},getPreset({name:t="",preset:i={},options:e,params:n,set:r,defaults:o,selector:s}){var l,a,c;let u,d,p;if(I(i)&&e.transform!=="strict"){let h=t.replace("-directive",""),m=i,{colorScheme:w,extend:_,css:M}=m,k=$t(m,["colorScheme","extend","css"]),st=_||{},{colorScheme:mt}=st,dn=$t(st,["colorScheme"]),pn=w||{},{dark:hn}=pn,Ie=$t(pn,["dark"]),fn=mt||{},{dark:gn}=fn,mn=$t(fn,["dark"]),bn=I(k)?this._toVariables({[h]:_t(_t({},k),dn)},e):{},xe=I(Ie)?this._toVariables({[h]:_t(_t({},Ie),mn)},e):{},Oe=I(hn)?this._toVariables({[h]:_t(_t({},hn),gn)},e):{},[yn,vn]=[(l=bn.declarations)!=null?l:"",bn.tokens||[]],[Sn,wn]=[(a=xe.declarations)!=null?a:"",xe.tokens||[]],[Cn,En]=[(c=Oe.declarations)!=null?c:"",Oe.tokens||[]],_n=this.transformCSS(h,`${yn}${Sn}`,"light","variable",e,r,o,s),Rn=this.transformCSS(h,Cn,"dark","variable",e,r,o,s);u=`${_n}${Rn}`,d=[...new Set([...vn,...wn,...En])],p=pt(M,{dt:Re})}return{css:u,tokens:d,style:p}},getPresetC({name:t="",theme:i={},params:e,set:n,defaults:r}){var o;let{preset:s,options:l}=i,a=(o=s?.components)==null?void 0:o[t];return this.getPreset({name:t,preset:a,options:l,params:e,set:n,defaults:r})},getPresetD({name:t="",theme:i={},params:e,set:n,defaults:r}){var o;let s=t.replace("-directive",""),{preset:l,options:a}=i,c=(o=l?.directives)==null?void 0:o[s];return this.getPreset({name:s,preset:c,options:a,params:e,set:n,defaults:r})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,i){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?i.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:i.options.darkModeSelector):[]},getLayerOrder(t,i={},e,n){let{cssLayer:r}=i;return r?`@layer ${pt(r.order||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:i={},params:e,props:n={},set:r,defaults:o}){let s=this.getCommon({name:t,theme:i,params:e,set:r,defaults:o}),l=Object.entries(n).reduce((a,[c,u])=>a.push(`${c}="${u}"`)&&a,[]).join(" ");return Object.entries(s||{}).reduce((a,[c,u])=>{if(u?.css){let d=ee(u?.css),p=`${c}-variables`;a.push(`<style type="text/css" data-primevue-style-id="${p}" ${l}>${d}</style>`)}return a},[]).join("")},getStyleSheet({name:t="",theme:i={},params:e,props:n={},set:r,defaults:o}){var s;let l={name:t,theme:i,params:e,set:r,defaults:o},a=(s=t.includes("-directive")?this.getPresetD(l):this.getPresetC(l))==null?void 0:s.css,c=Object.entries(n).reduce((u,[d,p])=>u.push(`${d}="${p}"`)&&u,[]).join(" ");return a?`<style type="text/css" data-primevue-style-id="${t}-variables" ${c}>${ee(a)}</style>`:""},createTokens(t={},i,e="",n="",r={}){return Object.entries(t).forEach(([o,s])=>{let l=rt(o,i.variable.excludedKeyRegex)?e:e?`${e}.${kr(o)}`:kr(o),a=n?`${n}.${o}`:o;Nt(s)?this.createTokens(s,i,l,a,r):(r[l]||(r[l]={paths:[],computed(c,u={}){var d,p;return this.paths.length===1?(d=this.paths[0])==null?void 0:d.computed(this.paths[0].scheme,u.binding):c&&c!=="none"?(p=this.paths.find(h=>h.scheme===c))==null?void 0:p.computed(c,u.binding):this.paths.map(h=>h.computed(h.scheme,u[h.scheme]))}}),r[l].paths.push({path:a,value:s,scheme:a.includes("colorScheme.light")?"light":a.includes("colorScheme.dark")?"dark":"none",computed(c,u={}){let d=/{([^}]*)}/g,p=s;if(u.name=this.path,u.binding||(u.binding={}),rt(s,d)){let m=s.trim().replaceAll(d,M=>{var k;let st=M.replace(/{|}/g,""),mt=(k=r[st])==null?void 0:k.computed(c,u);return ai(mt)&&mt.length===2?`light-dark(${mt[0].value},${mt[1].value})`:mt?.value}),w=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,_=/var\([^)]+\)/g;p=rt(m.replace(_,"0"),w)?`calc(${m})`:m}return ht(u.binding)&&delete u.binding,{colorScheme:c,path:this.path,paths:u,value:p.includes("undefined")?void 0:p}}}))}),r},getTokenValue(t,i,e){var n;let o=(a=>a.split(".").filter(u=>!rt(u.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(i),s=i.includes("colorScheme.light")?"light":i.includes("colorScheme.dark")?"dark":void 0,l=[(n=t[o])==null?void 0:n.computed(s)].flat().filter(a=>a);return l.length===1?l[0].value:l.reduce((a={},c)=>{let u=c,{colorScheme:d}=u,p=$t(u,["colorScheme"]);return a[d]=p,a},void 0)},getSelectorRule(t,i,e,n){return e==="class"||e==="attr"?_e(I(i)?`${t}${i},${t} ${i}`:t,n):_e(t,I(i)?_e(i,n):n)},transformCSS(t,i,e,n,r={},o,s,l){if(I(i)){let{cssLayer:a}=r;if(n!=="style"){let c=this.getColorSchemeOption(r,s);i=e==="dark"?c.reduce((u,{type:d,selector:p})=>(I(p)&&(u+=p.includes("[CSS]")?p.replace("[CSS]",i):this.getSelectorRule(p,l,d,i)),u),""):_e(l??":root",i)}if(a){let c={name:"primeui",order:"primeui"};Nt(a)&&(c.name=pt(a.name,{name:t,type:n})),I(c.name)&&(i=_e(`@layer ${c.name}`,i),o?.layerNames(c.name))}return i}return""}},O={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:i}=t;i&&(this._theme=Nr(_t({},i),{options:_t(_t({},this.defaults.options),i.options)}),this._tokens=Et.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),ft.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=Nr(_t({},this.theme),{preset:t}),this._tokens=Et.createTokens(t,this.defaults),this.clearLoadedStyleNames(),ft.emit("preset:change",t),ft.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=Nr(_t({},this.theme),{options:t}),this.clearLoadedStyleNames(),ft.emit("options:change",t),ft.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return Et.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",i){return Et.getCommon({name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Et.getPresetC(e)},getDirective(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Et.getPresetD(e)},getCustomPreset(t="",i,e,n){let r={name:t,preset:i,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Et.getPreset(r)},getLayerOrderCSS(t=""){return Et.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",i,e="style",n){return Et.transformCSS(t,i,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",i,e={}){return Et.getCommonStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,i,e={}){return Et.getStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:i}){this._loadingStyles.size&&(this._loadingStyles.delete(i),ft.emit(`theme:${i}:load`,t),!this._loadingStyles.size&&ft.emit("theme:load"))}};var Xc=0,js=(()=>{class t{document=g(P);use(e,n={}){let r=!1,o=e,s=null,{immediate:l=!0,manual:a=!1,name:c=`style_${++Xc}`,id:u=void 0,media:d=void 0,nonce:p=void 0,first:h=!1,props:m={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${c}"]`)||this.document.getElementById(u)||this.document.createElement("style"),!s.isConnected){o=e,ii(s,{type:"text/css",media:d,nonce:p});let w=this.document.head;h&&w.firstChild?w.insertBefore(s,w.firstChild):w.appendChild(s),ri(s,"data-primeng-style-id",c)}return s.textContent!==o&&(s.textContent=o),{id:u,name:c,el:s,css:o}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Te={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},tu=({dt:t})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${t("disabled.opacity")};
}

.pi {
    font-size: ${t("icon.size")};
}

.p-icon {
    width: ${t("icon.size")};
    height: ${t("icon.size")};
}

.p-overlay-mask {
    background: ${t("mask.background")};
    color: ${t("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${t("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${t("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${t("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${t("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,eu=({dt:t})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${t("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,G=(()=>{class t{name="base";useStyle=g(js);theme=tu;css=eu;classes={};inlineStyles={};load=(e,n={},r=o=>o)=>{let o=r(pt(e,{dt:Re}));return o?this.useStyle.use(ee(o),f({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadTheme=(e={},n="")=>this.load(this.theme,e,(r="")=>O.transformCSS(e.name||this.name,`${r}${n}`));getCommonTheme=e=>O.getCommon(this.name,e);getComponentTheme=e=>O.getComponent(this.name,e);getDirectiveTheme=e=>O.getDirective(this.name,e);getPresetTheme=(e,n,r)=>O.getCustomPreset(this.name,e,n,r);getLayerOrderThemeCSS=()=>O.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let r=pt(this.css,{dt:Re}),o=ee(`${r}${e}`),s=Object.entries(n).reduce((l,[a,c])=>l.push(`${a}="${c}"`)&&l,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${o}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>O.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let r=[O.getStyleSheet(this.name,e,n)];if(this.theme){let o=this.name==="base"?"global-style":`${this.name}-style`,s=pt(this.theme,{dt:Re}),l=ee(O.transformCSS(o,s)),a=Object.entries(n).reduce((c,[u,d])=>c.push(`${u}="${d}"`)&&c,[]).join(" ");r.push(`<style type="text/css" data-primeng-style-id="${o}" ${a}>${l}</style>`)}return r.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var nu=(()=>{class t{theme=le(void 0);isThemeChanged=!1;document=g(P);baseStyle=g(G);constructor(){Pe(()=>{ft.on("theme:change",e=>{Eo(()=>{this.isThemeChanged=!0,this.theme.set(e)})})},{allowSignalWrites:!0}),Pe(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){O.clearLoadedStyleNames(),ft.clear()}onThemeChange(e){O.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!O.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:r,style:o}=this.baseStyle.getCommonTheme?.()||{},s={nonce:void 0};this.baseStyle.load(e?.css,f({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,f({name:"semantic-variables"},s)),this.baseStyle.load(r?.css,f({name:"global-variables"},s)),this.baseStyle.loadTheme(f({name:"global-style"},s),o),O.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n}=e||{};n&&this.theme.set(n)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Fr=(()=>{class t extends nu{ripple=le(!1);platformId=g(St);inputStyle=le("outlined");inputVariant=le("outlined");overlayOptions={};csp=le({nonce:void 0});filterMatchModeOptions={text:[j.STARTS_WITH,j.CONTAINS,j.NOT_CONTAINS,j.ENDS_WITH,j.EQUALS,j.NOT_EQUALS],numeric:[j.EQUALS,j.NOT_EQUALS,j.LESS_THAN,j.LESS_THAN_OR_EQUAL_TO,j.GREATER_THAN,j.GREATER_THAN_OR_EQUAL_TO],date:[j.DATE_IS,j.DATE_IS_NOT,j.DATE_BEFORE,j.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new at;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=f(f({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:r,inputStyle:o,theme:s,overlayOptions:l,translation:a}=e||{};n&&this.csp.set(n),r&&this.ripple.set(r),o&&this.inputStyle.set(o),l&&(this.overlayOptions=l),a&&this.setTranslation(a),s&&this.setThemeConfig({theme:s})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=T(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),iu=new Q("PRIME_NG_CONFIG");function Bh(...t){let i=t?.map(n=>({provide:iu,useValue:n,multi:!1})),e={provide:_i,useFactory:n=>()=>t?.forEach(r=>n.setConfig(r)),deps:[Fr],multi:!0};return Le([...i,e])}var zs=(()=>{class t extends G{name="common";static \u0275fac=(()=>{let e;return function(r){return(e||(e=T(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),gt=(()=>{class t{document=g(P);platformId=g(St);el=g(ae);injector=g(On);cd=g($e);renderer=g(An);config=g(Fr);baseComponentStyle=g(zs);baseStyle=g(G);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=ln("pc");_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,n="",r={}){return si(e,n,r)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}templates;ngAfterContentInit(){this.templates?.forEach(e=>{let n=e.getType(),r=`${n}Template`;this.hasOwnProperty(r)&&(this[r]=e.template),this.hasOwnProperty(`_${r}`)&&(this[`_${r}`]=e.template),this[n]=e.template})}ngOnChanges(e){if(this.document&&!Fe(this.platformId)){let{dt:n}=e;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles()}_loadStyles(){let e=()=>{Te.isStyleNameLoaded("base")||(this.baseStyle.loadCSS(this.styleOptions),Te.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!Te.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Te.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!O.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:r,style:o}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,f({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,f({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(r?.css,f({name:"global-variables"},this.styleOptions)),this.baseStyle.loadTheme(f({name:"global-style"},this.styleOptions),o),O.setLoadedStyleName("common")}if(!O.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,f({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(f({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),O.setLoadedStyleName(this.componentStyle?.name)}if(!O.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,f({name:"layer-order",first:!0},this.styleOptions)),O.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:n}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},r=this.componentStyle?.load(n,f({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=r?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){Te.clearLoadedStyleNames(),ft.on("theme:change",e)}cx(e,n){let r=this.parent?this.parent.componentStyle?.classes?.[e]:this.componentStyle?.classes?.[e];return typeof r=="function"?r({instance:this}):typeof r=="string"?r:e}sx(e){let n=this.componentStyle?.inlineStyles?.[e];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:f({},n)}get parent(){return this.parentInstance}static \u0275fac=function(n){return new(n||t)};static \u0275dir=X({type:t,contentQueries:function(n,r,o){if(n&1&&et(o,Ns,4),n&2){let s;W(s=q())&&(r.templates=s)}},inputs:{dt:"dt"},standalone:!0,features:[ut([zs,G]),Ut]})}return t})();var Ur=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let r=n.trim().split(" ");for(let o=0;o<r.length;o++)e.classList.add(r[o])}else{let r=n.split(" ");for(let o=0;o<r.length;o++)e.className+=" "+r[o]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(o=>this.removeClass(e,o)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,r=0;for(var o=0;o<n.length;o++){if(n[o]==e)return r;n[o].nodeType==1&&r++}return-1}static indexWithinGroup(e,n){let r=e.parentNode?e.parentNode.childNodes:[],o=0;for(var s=0;s<r.length;s++){if(r[s]==e)return o;r[s].attributes&&r[s].attributes[n]&&r[s].nodeType==1&&o++}return-1}static appendOverlay(e,n,r="self"){r!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,r="self",o=!0){e&&n&&(o&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),r==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,r=!0){let o=k=>{if(k)return getComputedStyle(k).getPropertyValue("position")==="relative"?k:o(k.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),l=n.offsetHeight,a=n.getBoundingClientRect(),c=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),d=this.getViewport(),h=o(e)?.getBoundingClientRect()||{top:-1*c,left:-1*u},m,w;a.top+l+s.height>d.height?(m=a.top-h.top-s.height,e.style.transformOrigin="bottom",a.top+m<0&&(m=-1*a.top)):(m=l+a.top-h.top,e.style.transformOrigin="top");let _=a.left+s.width-d.width,M=a.left-h.left;s.width>d.width?w=(a.left-h.left)*-1:_>0?w=M-_:w=a.left-h.left,e.style.top=m+"px",e.style.left=w+"px",r&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(e,n,r=!0){let o=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=o.height,l=o.width,a=n.offsetHeight,c=n.offsetWidth,u=n.getBoundingClientRect(),d=this.getWindowScrollTop(),p=this.getWindowScrollLeft(),h=this.getViewport(),m,w;u.top+a+s>h.height?(m=u.top+d-s,e.style.transformOrigin="bottom",m<0&&(m=d)):(m=a+u.top+d,e.style.transformOrigin="top"),u.left+l>h.width?w=Math.max(0,u.left+p+c-l):w=u.left+p,e.style.top=m+"px",e.style.left=w+"px",r&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let r=this.getParents(e),o=/(auto|scroll)/,s=l=>{let a=window.getComputedStyle(l,null);return o.test(a.getPropertyValue("overflow"))||o.test(a.getPropertyValue("overflowX"))||o.test(a.getPropertyValue("overflowY"))};for(let l of r){let a=l.nodeType===1&&l.dataset.scrollselectors;if(a){let c=a.split(",");for(let u of c){let d=this.findSingle(l,u);d&&s(d)&&n.push(d)}}l.nodeType!==9&&s(l)&&n.push(l)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let r=getComputedStyle(e).getPropertyValue("borderTopWidth"),o=r?parseFloat(r):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),l=s?parseFloat(s):0,a=e.getBoundingClientRect(),u=n.getBoundingClientRect().top+document.body.scrollTop-(a.top+document.body.scrollTop)-o-l,d=e.scrollTop,p=e.clientHeight,h=this.getOuterHeight(n);u<0?e.scrollTop=d+u:u+h>p&&(e.scrollTop=d+u-p+h)}static fadeIn(e,n){e.style.opacity=0;let r=+new Date,o=0,s=function(){o=+e.style.opacity.replace(",",".")+(new Date().getTime()-r)/n,e.style.opacity=o,r=+new Date,+o<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(e,n){var r=1,o=50,s=n,l=o/s;let a=setInterval(()=>{r=r-l,r<=0&&(r=0,clearInterval(a)),e.style.opacity=r},o)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var r=Element.prototype,o=r.matches||r.webkitMatchesSelector||r.mozMatchesSelector||r.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return o.call(e,n)}static getOuterWidth(e,n){let r=e.offsetWidth;if(n){let o=getComputedStyle(e);r+=parseFloat(o.marginLeft)+parseFloat(o.marginRight)}return r}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,r=getComputedStyle(e);return n+=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}static width(e){let n=e.offsetWidth,r=getComputedStyle(e);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,r=getComputedStyle(e);return n+=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom),n}static getOuterHeight(e,n){let r=e.offsetHeight;if(n){let o=getComputedStyle(e);r+=parseFloat(o.marginTop)+parseFloat(o.marginBottom)}return r}static getHeight(e){let n=e.offsetHeight,r=getComputedStyle(e);return n-=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,r=getComputedStyle(e);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)+parseFloat(r.borderLeftWidth)+parseFloat(r.borderRightWidth),n}static getViewport(){let e=window,n=document,r=n.documentElement,o=n.getElementsByTagName("body")[0],s=e.innerWidth||r.clientWidth||o.clientWidth,l=e.innerHeight||r.clientHeight||o.clientHeight;return{width:s,height:l}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let r=e.parentNode;if(!r)throw"Can't replace element";return r.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var r=e.indexOf("Trident/");if(r>0){var o=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let r=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=r,r}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,r){e[n].apply(e,r)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let r=this.find(e,this.getFocusableSelectorString(n)),o=[];for(let s of r){let l=getComputedStyle(s);this.isVisible(s)&&l.display!="none"&&l.visibility!="hidden"&&o.push(s)}return o}static getFocusableElement(e,n=""){let r=this.findSingle(e,this.getFocusableSelectorString(n));if(r){let o=getComputedStyle(r);if(this.isVisible(r)&&o.display!="none"&&o.visibility!="hidden")return r}return null}static getFirstFocusableElement(e,n=""){let r=this.getFocusableElements(e,n);return r.length>0?r[0]:null}static getLastFocusableElement(e,n){let r=this.getFocusableElements(e,n);return r.length>0?r[r.length-1]:null}static getNextFocusableElement(e,n=!1){let r=t.getFocusableElements(e),o=0;if(r&&r.length>0){let s=r.indexOf(r[0].ownerDocument.activeElement);n?s==-1||s===0?o=r.length-1:o=s-1:s!=-1&&s!==r.length-1&&(o=s+1)}return r[o]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let r=typeof e;if(r==="string")return document.querySelector(e);if(r==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(l=>!!(l&&l.constructor&&l.call&&l.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let r=e.getAttribute(n);return isNaN(r)?r==="true"||r==="false"?r==="true":r:+r}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...r){if(e){let o=document.createElement(e);return this.setAttributes(o,n),o.append(...r),o}}static setAttribute(e,n="",r){this.isElement(e)&&r!==null&&r!==void 0&&e.setAttribute(n,r)}static setAttributes(e,n={}){if(this.isElement(e)){let r=(o,s)=>{let l=e?.$attrs?.[o]?[e?.$attrs?.[o]]:[];return[s].flat().reduce((a,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")a.push(c);else if(u==="object"){let d=Array.isArray(c)?r(o,c):Object.entries(c).map(([p,h])=>o==="style"&&(h||h===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?p:void 0);a=d.length?a.concat(d.filter(p=>!!p)):a}}return a},l)};Object.entries(n).forEach(([o,s])=>{if(s!=null){let l=o.match(/^on(.+)/);l?e.addEventListener(l[1].toLowerCase(),s):o==="pBind"?this.setAttributes(e,s):(s=o==="class"?[...new Set(r("class",s))].join(" ").trim():o==="style"?r("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[o]=s),e.setAttribute(o,s))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})(),Vs=class{element;listener;scrollableParents;constructor(i,e=()=>{}){this.element=i,this.listener=e}bindScrollListener(){this.scrollableParents=Ur.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Ws=(()=>{class t extends gt{autofocus=!1;_autofocus=!1;focused=!1;platformId=g(St);document=g(P);host=g(ae);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Fn(this.platformId)&&this._autofocus&&setTimeout(()=>{let e=Ur.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=T(t)))(r||t)}})();static \u0275dir=X({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",R],_autofocus:[0,"pAutoFocus","_autofocus"]},standalone:!0,features:[Tt,V]})}return t})();var ru=({dt:t})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${t("badge.border.radius")};
    justify-content: center;
    padding: ${t("badge.padding")};
    background: ${t("badge.primary.background")};
    color: ${t("badge.primary.color")};
    font-size: ${t("badge.font.size")};
    font-weight: ${t("badge.font.weight")};
    min-width: ${t("badge.min.width")};
    height: ${t("badge.height")};
    line-height: ${t("badge.height")};
}

.p-badge-dot {
    width: ${t("badge.dot.size")};
    min-width: ${t("badge.dot.size")};
    height: ${t("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${t("badge.secondary.background")};
    color: ${t("badge.secondary.color")};
}

.p-badge-success {
    background: ${t("badge.success.background")};
    color: ${t("badge.success.color")};
}

.p-badge-info {
    background: ${t("badge.info.background")};
    color: ${t("badge.info.color")};
}

.p-badge-warn {
    background: ${t("badge.warn.background")};
    color: ${t("badge.warn.color")};
}

.p-badge-danger {
    background: ${t("badge.danger.background")};
    color: ${t("badge.danger.color")};
}

.p-badge-contrast {
    background: ${t("badge.contrast.background")};
    color: ${t("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${t("badge.sm.font.size")};
    min-width: ${t("badge.sm.min.width")};
    height: ${t("badge.sm.height")};
    line-height: ${t("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${t("badge.lg.font.size")};
    min-width: ${t("badge.lg.min.width")};
    height: ${t("badge.lg.height")};
    line-height: ${t("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${t("badge.xl.font.size")};
    min-width: ${t("badge.xl.min.width")};
    height: ${t("badge.xl.height")};
    line-height: ${t("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,ou={root:({props:t,instance:i})=>["p-badge p-component",{"p-badge-circle":I(t.value)&&String(t.value).length===1,"p-badge-dot":ht(t.value)&&!i.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]},qs=(()=>{class t extends G{name="badge";theme=ru;classes=ou;static \u0275fac=(()=>{let e;return function(r){return(e||(e=T(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();function su(t,i){if(t&1&&(U(0,"span",1),de(1),B()),t&2){let e=A();wt(e.styleClass()),S("ngClass",e.containerClass())("ngStyle",e.style()),C(),pe(e.value())}}var Br=(()=>{class t extends gt{styleClass=Ht();style=Ht();badgeSize=Ht();size=Ht();severity=Ht();value=Ht();badgeDisabled=Ht(!1,{transform:R});_componentStyle=g(qs);containerClass=Ii(()=>({"p-badge p-component":!0,"p-badge-circle":I(this.value())&&String(this.value()).length===1,"p-badge-lg":this.badgeSize()==="large","p-badge-xl":this.badgeSize()==="xlarge","p-badge-sm":this.badgeSize()==="small","p-badge-dot":ht(this.value()),[`p-badge-${this.severity()}`]:this.severity()}));static \u0275fac=(()=>{let e;return function(r){return(e||(e=T(t)))(r||t)}})();static \u0275cmp=F({type:t,selectors:[["p-badge"]],inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},standalone:!0,features:[ut([qs]),V,Y],decls:1,vars:1,consts:[[3,"ngClass","class","ngStyle"],[3,"ngClass","ngStyle"]],template:function(n,r){n&1&&N(0,su,2,5,"span",0),n&2&&mo(r.badgeDisabled()?-1:0)},dependencies:[It,he,$n,Ot],encapsulation:2,changeDetection:0})}return t})(),Gs=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=vt({type:t});static \u0275inj=yt({imports:[Br,Ot,Ot]})}return t})();var lu=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,cu=(()=>{class t extends G{name="baseicon";inlineStyles=lu;static \u0275fac=(()=>{let e;return function(r){return(e||(e=T(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var uu=["*"],di=(()=>{class t extends gt{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=ht(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(r){return(e||(e=T(t)))(r||t)}})();static \u0275cmp=F({type:t,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",R],styleClass:"styleClass"},standalone:!0,features:[ut([cu]),Tt,V,Y],ngContentSelectors:uu,decls:1,vars:0,template:function(n,r){n&1&&(Dt(),Mt(0))},encapsulation:2,changeDetection:0})}return t})();var Ks=(()=>{class t extends di{pathId;ngOnInit(){this.pathId="url(#"+ln()+")"}static \u0275fac=(()=>{let e;return function(r){return(e||(e=T(t)))(r||t)}})();static \u0275cmp=F({type:t,selectors:[["SpinnerIcon"]],standalone:!0,features:[V,Y],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,r){n&1&&(xn(),U(0,"svg",0)(1,"g"),Z(2,"path",1),B(),U(3,"defs")(4,"clipPath",2),Z(5,"rect",3),B()()()),n&2&&(wt(r.getClassNames()),L("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role),C(),L("clip-path",r.pathId),C(3),S("id",r.pathId))},encapsulation:2})}return t})();var Qs=(()=>{class t extends di{static \u0275fac=(()=>{let e;return function(r){return(e||(e=T(t)))(r||t)}})();static \u0275cmp=F({type:t,selectors:[["TimesIcon"]],standalone:!0,features:[V,Y],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(n,r){n&1&&(xn(),U(0,"svg",0),Z(1,"path",1),B()),n&2&&(wt(r.getClassNames()),L("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role))},encapsulation:2})}return t})();var du=({dt:t})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${t("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,pu={root:"p-ink"},Zs=(()=>{class t extends G{name="ripple";theme=du;classes=pu;static \u0275fac=(()=>{let e;return function(r){return(e||(e=T(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var Ys=(()=>{class t extends gt{zone=g(Bt);_componentStyle=g(Zs);animationListener;mouseDownListener;timeout;constructor(){super(),Pe(()=>{Fn(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(te(n,"p-ink-active"),!Or(n)&&!Dr(n)){let l=Math.max(_s(this.el.nativeElement),Ar(this.el.nativeElement));n.style.height=l+"px",n.style.width=l+"px"}let r=xs(this.el.nativeElement),o=e.pageX-r.left+this.document.body.scrollTop-Dr(n)/2,s=e.pageY-r.top+this.document.body.scrollLeft-Or(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",o+"px"),Wt(n,"p-ink-active"),this.timeout=setTimeout(()=>{let l=this.getInk();l&&te(l,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&te(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),te(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Os(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=X({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],standalone:!0,features:[ut([Zs]),V]})}return t})();var hu=({dt:t})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${t("button.primary.color")};
    background: ${t("button.primary.background")};
    border: 1px solid ${t("button.primary.border.color")};
    padding-block: ${t("button.padding.y")};
    padding-inline: ${t("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("button.transition.duration")}, color ${t("button.transition.duration")}, border-color ${t("button.transition.duration")},
            outline-color ${t("button.transition.duration")}, box-shadow ${t("button.transition.duration")};
    border-radius: ${t("button.border.radius")};
    outline-color: transparent;
    gap: ${t("button.gap")};
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${t("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${t("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${t("button.sm.font.size")};
    padding-block: ${t("button.sm.padding.y")};
    padding-inline: ${t("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${t("button.sm.font.size")};
}

.p-button-lg {
    font-size: ${t("button.lg.font.size")};
    padding-block: ${t("button.lg.padding.y")};
    padding-inline: ${t("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${t("button.lg.font.size")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${t("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${t("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${t("button.primary.hover.background")};
    border: 1px solid ${t("button.primary.hover.border.color")};
    color: ${t("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${t("button.primary.active.background")};
    border: 1px solid ${t("button.primary.active.border.color")};
    color: ${t("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${t("button.primary.focus.ring.shadow")};
    outline: ${t("button.focus.ring.width")} ${t("button.focus.ring.style")} ${t("button.primary.focus.ring.color")};
    outline-offset: ${t("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${t("button.badge.size")};
    height: ${t("button.badge.size")};
    line-height: ${t("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${t("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${t("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${t("button.secondary.background")};
    border: 1px solid ${t("button.secondary.border.color")};
    color: ${t("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${t("button.secondary.hover.background")};
    border: 1px solid ${t("button.secondary.hover.border.color")};
    color: ${t("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${t("button.secondary.active.background")};
    border: 1px solid ${t("button.secondary.active.border.color")};
    color: ${t("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${t("button.secondary.focus.ring.color")};
    box-shadow: ${t("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${t("button.success.background")};
    border: 1px solid ${t("button.success.border.color")};
    color: ${t("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${t("button.success.hover.background")};
    border: 1px solid ${t("button.success.hover.border.color")};
    color: ${t("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${t("button.success.active.background")};
    border: 1px solid ${t("button.success.active.border.color")};
    color: ${t("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${t("button.success.focus.ring.color")};
    box-shadow: ${t("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${t("button.info.background")};
    border: 1px solid ${t("button.info.border.color")};
    color: ${t("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${t("button.info.hover.background")};
    border: 1px solid ${t("button.info.hover.border.color")};
    color: ${t("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${t("button.info.active.background")};
    border: 1px solid ${t("button.info.active.border.color")};
    color: ${t("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${t("button.info.focus.ring.color")};
    box-shadow: ${t("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${t("button.warn.background")};
    border: 1px solid ${t("button.warn.border.color")};
    color: ${t("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${t("button.warn.hover.background")};
    border: 1px solid ${t("button.warn.hover.border.color")};
    color: ${t("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${t("button.warn.active.background")};
    border: 1px solid ${t("button.warn.active.border.color")};
    color: ${t("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${t("button.warn.focus.ring.color")};
    box-shadow: ${t("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${t("button.help.background")};
    border: 1px solid ${t("button.help.border.color")};
    color: ${t("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${t("button.help.hover.background")};
    border: 1px solid ${t("button.help.hover.border.color")};
    color: ${t("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${t("button.help.active.background")};
    border: 1px solid ${t("button.help.active.border.color")};
    color: ${t("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${t("button.help.focus.ring.color")};
    box-shadow: ${t("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${t("button.danger.background")};
    border: 1px solid ${t("button.danger.border.color")};
    color: ${t("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${t("button.danger.hover.background")};
    border: 1px solid ${t("button.danger.hover.border.color")};
    color: ${t("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${t("button.danger.active.background")};
    border: 1px solid ${t("button.danger.active.border.color")};
    color: ${t("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${t("button.danger.focus.ring.color")};
    box-shadow: ${t("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${t("button.contrast.background")};
    border: 1px solid ${t("button.contrast.border.color")};
    color: ${t("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${t("button.contrast.hover.background")};
    border: 1px solid ${t("button.contrast.hover.border.color")};
    color: ${t("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${t("button.contrast.active.background")};
    border: 1px solid ${t("button.contrast.active.border.color")};
    color: ${t("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${t("button.contrast.focus.ring.color")};
    box-shadow: ${t("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${t("button.outlined.primary.hover.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${t("button.outlined.primary.active.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${t("button.outlined.secondary.hover.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${t("button.outlined.secondary.active.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${t("button.outlined.success.hover.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${t("button.outlined.success.active.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${t("button.outlined.info.hover.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${t("button.outlined.info.active.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${t("button.outlined.warn.hover.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${t("button.outlined.warn.active.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${t("button.outlined.help.hover.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${t("button.outlined.help.active.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${t("button.outlined.danger.hover.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${t("button.outlined.danger.active.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${t("button.outlined.contrast.hover.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${t("button.outlined.contrast.active.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${t("button.outlined.plain.hover.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${t("button.outlined.plain.active.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${t("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${t("button.text.primary.active.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${t("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${t("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${t("button.text.success.hover.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${t("button.text.success.active.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${t("button.text.info.hover.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${t("button.text.info.active.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${t("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${t("button.text.warn.active.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${t("button.text.help.hover.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${t("button.text.help.active.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${t("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${t("button.text.danger.active.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${t("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${t("button.text.plain.active.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${t("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${t("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,fu={root:({instance:t,props:i})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!i.label&&!i.badge,"p-button-vertical":(i.iconPos==="top"||i.iconPos==="bottom")&&i.label,"p-button-loading":i.loading,"p-button-link":i.link,[`p-button-${i.severity}`]:i.severity,"p-button-raised":i.raised,"p-button-rounded":i.rounded,"p-button-text":i.text,"p-button-outlined":i.outlined,"p-button-sm":i.size==="small","p-button-lg":i.size==="large","p-button-plain":i.plain,"p-button-fluid":i.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos}`]:t.label}],label:"p-button-label"},Js=(()=>{class t extends G{name="button";theme=hu;classes=fu;static \u0275fac=(()=>{let e;return function(r){return(e||(e=T(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var gu=["content"],mu=["loading"],bu=["icon"],yu=["*"],Xs=t=>({class:t});function vu(t,i){t&1&&Gt(0)}function Su(t,i){if(t&1&&Z(0,"span",8),t&2){let e=A(3);S("ngClass",e.iconClass()),L("aria-hidden",!0)("data-pc-section","loadingicon")}}function wu(t,i){if(t&1&&Z(0,"SpinnerIcon",9),t&2){let e=A(3);S("styleClass",e.spinnerIconClass())("spin",!0),L("aria-hidden",!0)("data-pc-section","loadingicon")}}function Cu(t,i){if(t&1&&(ce(0),N(1,Su,1,3,"span",6)(2,wu,1,4,"SpinnerIcon",7),ue()),t&2){let e=A(2);C(),S("ngIf",e.loadingIcon),C(),S("ngIf",!e.loadingIcon)}}function Eu(t,i){}function _u(t,i){if(t&1&&N(0,Eu,0,0,"ng-template",10),t&2){let e=A(2);S("ngIf",e.loadingicon)}}function Ru(t,i){if(t&1&&(ce(0),N(1,Cu,3,2,"ng-container",2)(2,_u,1,1,null,5),ue()),t&2){let e=A();C(),S("ngIf",!e.loadingicon),C(),S("ngTemplateOutlet",e.loadingicon)("ngTemplateOutletContext",Ne(3,Xs,e.iconClass()))}}function Tu(t,i){if(t&1&&Z(0,"span",8),t&2){let e=A(2);wt(e.icon),S("ngClass",e.iconClass()),L("data-pc-section","icon")}}function Iu(t,i){}function xu(t,i){if(t&1&&N(0,Iu,0,0,"ng-template",10),t&2){let e=A(2);S("ngIf",!e.icon&&e.iconTemplate)}}function Ou(t,i){if(t&1&&(ce(0),N(1,Tu,1,4,"span",11)(2,xu,1,1,null,5),ue()),t&2){let e=A();C(),S("ngIf",e.icon&&!e.iconTemplate),C(),S("ngTemplateOutlet",e.iconTemplate)("ngTemplateOutletContext",Ne(3,Xs,e.iconClass()))}}function Au(t,i){if(t&1&&(U(0,"span",12),de(1),B()),t&2){let e=A();L("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),C(),pe(e.label)}}function Du(t,i){if(t&1&&Z(0,"p-badge",13),t&2){let e=A();S("value",e.badge)("severity",e.badgeSeverity)}}var Hr=(()=>{class t extends gt{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new tt;onFocus=new tt;onBlur=new tt;content;loadingicon;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,r])=>this[`_${n}`]!==r&&(this[`_${n}`]=r))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return ht(this.fluid)?!!n:this.fluid}_componentStyle=g(Js);ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:n}=e;if(n){let r=n.currentValue;for(let o in r)this[o]=r[o]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[n])=>e+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this.loadingIcon||this.loadingicon)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text,"p-button-outlined":this.outlined,"p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=T(t)))(r||t)}})();static \u0275cmp=F({type:t,selectors:[["p-button"]],contentQueries:function(n,r,o){if(n&1&&(et(o,gu,5),et(o,mu,5),et(o,bu,5)),n&2){let s;W(s=q())&&(r.content=s.first),W(s=q())&&(r.loadingicon=s.first),W(s=q())&&(r.iconTemplate=s.first)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",R],loading:[2,"loading","loading",R],loadingIcon:"loadingIcon",raised:[2,"raised","raised",R],rounded:[2,"rounded","rounded",R],text:[2,"text","text",R],plain:[2,"plain","plain",R],severity:"severity",outlined:[2,"outlined","outlined",R],link:[2,"link","link",R],tabindex:[2,"tabindex","tabindex",Ln],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",R],fluid:[2,"fluid","fluid",R],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},standalone:!0,features:[ut([Js]),Tt,V,Ut,Y],ngContentSelectors:yu,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(n,r){n&1&&(Dt(),U(0,"button",0),Kt("click",function(s){return r.onClick.emit(s)})("focus",function(s){return r.onFocus.emit(s)})("blur",function(s){return r.onBlur.emit(s)}),Mt(1),N(2,vu,1,0,"ng-container",1)(3,Ru,3,5,"ng-container",2)(4,Ou,3,5,"ng-container",2)(5,Au,2,3,"span",3)(6,Du,1,2,"p-badge",4),B()),n&2&&(S("ngStyle",r.style)("disabled",r.disabled||r.loading)("ngClass",r.buttonClass)("pAutoFocus",r.autofocus),L("type",r.type)("aria-label",r.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",r.tabindex),C(2),S("ngTemplateOutlet",r.content),C(),S("ngIf",r.loading),C(),S("ngIf",!r.loading),C(),S("ngIf",!r.content&&r.label),C(),S("ngIf",!r.content&&r.badge))},dependencies:[It,he,Nn,Pn,$n,Ys,Ws,Ks,Gs,Br,Ot],encapsulation:2,changeDetection:0})}return t})(),yg=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=vt({type:t});static \u0275inj=yt({imports:[It,Hr,Ot,Ot]})}return t})();var ta=class t{static isArray(i,e=!0){return Array.isArray(i)&&(e||i.length!==0)}static isObject(i,e=!0){return typeof i=="object"&&!Array.isArray(i)&&i!=null&&(e||Object.keys(i).length!==0)}static equals(i,e,n){return n?this.resolveFieldData(i,n)===this.resolveFieldData(e,n):this.equalsByValue(i,e)}static equalsByValue(i,e){if(i===e)return!0;if(i&&e&&typeof i=="object"&&typeof e=="object"){var n=Array.isArray(i),r=Array.isArray(e),o,s,l;if(n&&r){if(s=i.length,s!=e.length)return!1;for(o=s;o--!==0;)if(!this.equalsByValue(i[o],e[o]))return!1;return!0}if(n!=r)return!1;var a=this.isDate(i),c=this.isDate(e);if(a!=c)return!1;if(a&&c)return i.getTime()==e.getTime();var u=i instanceof RegExp,d=e instanceof RegExp;if(u!=d)return!1;if(u&&d)return i.toString()==e.toString();var p=Object.keys(i);if(s=p.length,s!==Object.keys(e).length)return!1;for(o=s;o--!==0;)if(!Object.prototype.hasOwnProperty.call(e,p[o]))return!1;for(o=s;o--!==0;)if(l=p[o],!this.equalsByValue(i[l],e[l]))return!1;return!0}return i!==i&&e!==e}static resolveFieldData(i,e){if(i&&e){if(this.isFunction(e))return e(i);if(e.indexOf(".")==-1)return i[e];{let n=e.split("."),r=i;for(let o=0,s=n.length;o<s;++o){if(r==null)return null;r=r[n[o]]}return r}}else return null}static isFunction(i){return!!(i&&i.constructor&&i.call&&i.apply)}static reorderArray(i,e,n){let r;i&&e!==n&&(n>=i.length&&(n%=i.length,e%=i.length),i.splice(n,0,i.splice(e,1)[0]))}static insertIntoOrderedArray(i,e,n,r){if(n.length>0){let o=!1;for(let s=0;s<n.length;s++)if(this.findIndexInList(n[s],r)>e){n.splice(s,0,i),o=!0;break}o||n.push(i)}else n.push(i)}static findIndexInList(i,e){let n=-1;if(e){for(let r=0;r<e.length;r++)if(e[r]==i){n=r;break}}return n}static contains(i,e){if(i!=null&&e&&e.length){for(let n of e)if(this.equals(i,n))return!0}return!1}static removeAccents(i){return i&&(i=i.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),i}static isDate(i){return Object.prototype.toString.call(i)==="[object Date]"}static isEmpty(i){return i==null||i===""||Array.isArray(i)&&i.length===0||!this.isDate(i)&&typeof i=="object"&&Object.keys(i).length===0}static isNotEmpty(i){return!this.isEmpty(i)}static compare(i,e,n,r=1){let o=-1,s=this.isEmpty(i),l=this.isEmpty(e);return s&&l?o=0:s?o=r:l?o=-r:typeof i=="string"&&typeof e=="string"?o=i.localeCompare(e,n,{numeric:!0}):o=i<e?-1:i>e?1:0,o}static sort(i,e,n=1,r,o=1){let s=t.compare(i,e,r,n),l=n;return(t.isEmpty(i)||t.isEmpty(e))&&(l=o===1?n:o),l*s}static merge(i,e){if(!(i==null&&e==null)){{if((i==null||typeof i=="object")&&(e==null||typeof e=="object"))return f(f({},i||{}),e||{});if((i==null||typeof i=="string")&&(e==null||typeof e=="string"))return[i||"",e||""].join(" ")}return e||i}}static isPrintableCharacter(i=""){return this.isNotEmpty(i)&&i.length===1&&i.match(/\S| /)}static getItemValue(i,...e){return this.isFunction(i)?i(...e):i}static findLastIndex(i,e){let n=-1;if(this.isNotEmpty(i))try{n=i.findLastIndex(e)}catch{n=i.lastIndexOf([...i].reverse().find(e))}return n}static findLast(i,e){let n;if(this.isNotEmpty(i))try{n=i.findLast(e)}catch{n=[...i].reverse().find(e)}return n}static deepEquals(i,e){if(i===e)return!0;if(i&&e&&typeof i=="object"&&typeof e=="object"){var n=Array.isArray(i),r=Array.isArray(e),o,s,l;if(n&&r){if(s=i.length,s!=e.length)return!1;for(o=s;o--!==0;)if(!this.deepEquals(i[o],e[o]))return!1;return!0}if(n!=r)return!1;var a=i instanceof Date,c=e instanceof Date;if(a!=c)return!1;if(a&&c)return i.getTime()==e.getTime();var u=i instanceof RegExp,d=e instanceof RegExp;if(u!=d)return!1;if(u&&d)return i.toString()==e.toString();var p=Object.keys(i);if(s=p.length,s!==Object.keys(e).length)return!1;for(o=s;o--!==0;)if(!Object.prototype.hasOwnProperty.call(e,p[o]))return!1;for(o=s;o--!==0;)if(l=p[o],!this.deepEquals(i[l],e[l]))return!1;return!0}return i!==i&&e!==e}static minifyCSS(i){return i&&i.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(i){return this.isString(i)?i.replace(/(-|_)/g,"").toLowerCase():i}static isString(i,e=!0){return typeof i=="string"&&(e||i!=="")}},ea=0;function Sg(t="pn_id_"){return ea++,`${t}${ea}`}function Mu(){let t=[],i=(o,s)=>{let l=t.length>0?t[t.length-1]:{key:o,value:s},a=l.value+(l.key===o?0:s)+2;return t.push({key:o,value:a}),a},e=o=>{t=t.filter(s=>s.value!==o)},n=()=>t.length>0?t[t.length-1].value:0,r=o=>o&&parseInt(o.style.zIndex,10)||0;return{get:r,set:(o,s,l)=>{s&&(s.style.zIndex=String(i(o,l)))},clear:o=>{o&&(e(r(o)),o.style.zIndex="")},getCurrent:()=>n()}}var un=Mu();var Lu=({dt:t})=>`
.p-drawer {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    transform: translate3d(0px, 0px, 0px);
    position: fixed;
    transition: transform 0.3s;
    background: ${t("drawer.background")};
    color: ${t("drawer.color")};
    border: 1px solid ${t("drawer.border.color")};
    box-shadow: ${t("drawer.shadow")};
}

.p-drawer-content {
    overflow-y: auto;
    flex-grow: 1;
    padding: ${t("drawer.content.padding")};
}

.p-drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: ${t("drawer.header.padding")};
}

.p-drawer-footer {
    padding: ${t("drawer.header.padding")};
}

.p-drawer-title {
    font-weight: ${t("drawer.title.font.weight")};
    font-size: ${t("drawer.title.font.size")};
}

.p-drawer-full .p-drawer {
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    max-height: 100%;
    top: 0px !important;
    left: 0px !important;
    border-width: 1px;
}

.p-drawer-left .p-drawer {
    align-self: start;
    width: 20rem;
    height: 100%;
    border-right-width: 1px;
}

.p-drawer-right .p-drawer {
    align-self: end;
    width: 20rem;
    height: 100%;
    border-left-width: 1px;
}

.p-drawer-top .p-drawer {
    height: 10rem;
    width: 100%;
    border-bottom-width: 1px;
}

.p-drawer-bottom .p-drawer {
    height: 10rem;
    width: 100%;
    border-top-width: 1px;
}

.p-drawer-left .p-drawer-content,
.p-drawer-right .p-drawer-content,
.p-drawer-top .p-drawer-content,
.p-drawer-bottom .p-drawer-content {
    width: 100%;
    height: 100%;
}

.p-drawer-open {
    display: flex;
}

.p-drawer-top {
    justify-content: flex-start;
}

.p-drawer-bottom {
    justify-content: flex-end;
}

.p-drawer {
    position: fixed;
    transition: transform 0.3s;
    display: flex;
    flex-direction: column;
}

.p-drawer-content {
    position: relative;
    overflow-y: auto;
    flex-grow: 1;
}

.p-drawer-header {
    display: flex;
    align-items: center;
}

.p-drawer-footer {
    margin-top: auto;
}

.p-drawer-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
}

.p-drawer-left {
    top: 0;
    left: 0;
    width: 20rem;
    height: 100%;
}

.p-drawer-right {
    top: 0;
    right: 0;
    width: 20rem;
    height: 100%;
}

.p-drawer-top {
    top: 0;
    left: 0;
    width: 100%;
    height: 10rem;
}

.p-drawer-bottom {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10rem;
}

.p-drawer-full {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    -webkit-transition: none;
    transition: none;
}

.p-drawer-mask {
    background-color: rgba(0, 0, 0, 0.4);
    transition-duration: 0.2s;
}

.p-overlay-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask:dir(rtl) {
    flex-direction: row-reverse;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation 150ms forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation 150ms forwards;
}

@keyframes p-overlay-mask-enter-animation {
    from {
        background-color: transparent;
    }
    to {
        background-color: rgba(0, 0, 0, 0.4);
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background-color: rgba(0, 0, 0, 0.4);
    }
    to {
        background-color: transparent;
    }
}
`,ku={mask:({instance:t})=>({position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",flexDirection:"column",alignItems:t.position==="top"?"flex-start":t.position==="bottom"?"flex-end":"center"})},Nu={mask:({instance:t})=>({"p-drawer-mask":!0,"p-overlay-mask p-overlay-mask-enter":t.modal,"p-drawer-open":t.containerVisible,"p-drawer-full":t.fullScreen,[`p-drawer-${t.position}`]:!!t.position}),root:({instance:t})=>({"p-drawer p-component":!0,"p-drawer-full":t.fullScreen}),header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},na=(()=>{class t extends G{name="drawer";theme=Lu;classes=Nu;inlineStyles=ku;static \u0275fac=(()=>{let e;return function(r){return(e||(e=T(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var $u=["header"],Pu=["footer"],Fu=["content"],Uu=["closeicon"],Bu=["headless"],Hu=["maskRef"],ju=["container"],zu=["closeButton"],Vu=["*"],Wu=(t,i,e,n,r,o)=>({"p-drawer":!0,"p-drawer-active":t,"p-drawer-left":i,"p-drawer-right":e,"p-drawer-top":n,"p-drawer-bottom":r,"p-drawer-full":o}),qu=(t,i)=>({transform:t,transition:i}),Gu=t=>({value:"visible",params:t});function Ku(t,i){t&1&&Gt(0)}function Qu(t,i){t&1&&Gt(0)}function Zu(t,i){if(t&1&&(U(0,"div"),de(1),B()),t&2){let e=A(3);wt(e.cx("title")),C(),pe(e.header)}}function Yu(t,i){t&1&&Z(0,"TimesIcon"),t&2&&L("data-pc-section","closeicon")}function Ju(t,i){}function Xu(t,i){t&1&&N(0,Ju,0,0,"ng-template")}function td(t,i){if(t&1&&N(0,Yu,1,1,"TimesIcon",9)(1,Xu,1,0,null,5),t&2){let e=A(4);S("ngIf",!e.closeiconTemplate),C(),S("ngTemplateOutlet",e.closeiconTemplate)}}function ed(t,i){if(t&1){let e=Ci();U(0,"p-button",10),Kt("onClick",function(r){oe(e);let o=A(3);return se(o.close(r))})("keydown.enter",function(r){oe(e);let o=A(3);return se(o.close(r))}),N(1,td,2,2,"ng-template",null,2,Ei),B()}if(t&2){let e=A(3);S("ngClass",e.cx("closeButton"))("buttonProps",e.closeButtonProps)("ariaLabel",e.ariaCloseLabel),L("data-pc-section","closebutton")("data-pc-group-section","iconcontainer")}}function nd(t,i){t&1&&Gt(0)}function id(t,i){t&1&&Gt(0)}function rd(t,i){if(t&1&&(ce(0),U(1,"div",6),N(2,id,1,0,"ng-container",5),B(),ue()),t&2){let e=A(3);C(),S("ngClass",e.cx("footer")),L("data-pc-section","footer"),C(),S("ngTemplateOutlet",e.footerTemplate)}}function od(t,i){if(t&1&&(U(0,"div",6),N(1,Qu,1,0,"ng-container",5)(2,Zu,2,3,"div",7)(3,ed,3,5,"p-button",8),B(),U(4,"div",6),Mt(5),N(6,nd,1,0,"ng-container",5),B(),N(7,rd,3,3,"ng-container",9)),t&2){let e=A(2);S("ngClass",e.cx("header")),L("data-pc-section","header"),C(),S("ngTemplateOutlet",e.headerTemplate),C(),S("ngIf",e.header),C(),S("ngIf",e.showCloseIcon&&e.closable),C(),S("ngClass",e.cx("content")),L("data-pc-section","content"),C(2),S("ngTemplateOutlet",e.contentTemplate),C(),S("ngIf",e.footerTemplate)}}function sd(t,i){if(t&1){let e=Ci();U(0,"div",4,0),Kt("@panelState.start",function(r){oe(e);let o=A();return se(o.onAnimationStart(r))})("@panelState.done",function(r){oe(e);let o=A();return se(o.onAnimationEnd(r))})("keydown",function(r){oe(e);let o=A();return se(o.onKeyDown(r))}),N(2,Ku,1,0,"ng-container",5)(3,od,8,9,"ng-template",null,1,Ei),B()}if(t&2){let e=bo(4),n=A();go(n.style),wt(n.styleClass),S("ngClass",vo(9,Wu,n.visible,n.position==="left"&&!n.fullScreen,n.position==="right"&&!n.fullScreen,n.position==="top"&&!n.fullScreen,n.position==="bottom"&&!n.fullScreen,n.fullScreen||n.position==="full"))("@panelState",Ne(19,Gu,yo(16,qu,n.transformOptions,n.transitionOptions))),L("data-pc-name","sidebar")("data-pc-section","root"),C(2),S("ngTemplateOutlet",n.headlessTemplate||e)}}var ad=Li([Di({transform:"{{transform}}",opacity:0}),Ai("{{transition}}")]),ld=Li([Ai("{{transition}}",Di({transform:"{{transform}}",opacity:0}))]),jg=(()=>{class t extends gt{appendTo="body";blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;closeButtonProps={severity:"secondary",text:!0,rounded:!0};dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible}set visible(e){this._visible=e}get position(){return this._position}set position(e){if(this._position=e,e==="full"){this.transformOptions="none";return}switch(e){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break}}get fullScreen(){return this._fullScreen}set fullScreen(e){this._fullScreen=e,e&&(this.transformOptions="none")}header;maskStyle;onShow=new tt;onHide=new tt;visibleChange=new tt;maskRef;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=!1;container;transformOptions="translate3d(-100%, 0px, 0px)";mask;maskClickListener;documentEscapeListener;animationEndListener;_componentStyle=g(na);ngAfterViewInit(){super.ngAfterViewInit(),this.initialized=!0}headerTemplate;footerTemplate;contentTemplate;closeiconTemplate;headlessTemplate;closable=!0;onKeyDown(e){e.code==="Escape"&&this.hide(!1)}show(){this.autoZIndex&&un.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(e=!0){e&&this.onHide.emit({}),this.modal&&this.disableModality()}close(e){this.hide(),this.visibleChange.emit(!1),e.preventDefault()}enableModality(){let e=this.document.querySelectorAll(".p-drawer-active"),r=e.length==1?String(parseInt(this.container.style.zIndex)-1):String(parseInt(e[0].style.zIndex)-1);this.mask||(this.mask=this.renderer.createElement("div"),this.renderer.setStyle(this.mask,"zIndex",r),ri(this.mask,"style",this.maskStyle),Wt(this.mask,"p-overlay-mask p-drawer-mask p-overlay-mask-enter"),this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",o=>{this.dismissible&&this.close(o)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&Ss())}disableModality(){this.mask&&(Wt(this.mask,"p-overlay-mask-leave"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&ws(),this.unbindAnimationEndListener(),this.mask=null}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener();break}}onAnimationEnd(e){switch(e.toState){case"void":this.hide(!1),un.clear(this.container),this.unbindGlobalListeners();break}}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):Rs(this.appendTo,this.container))}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(e,"keydown",n=>{n.which==27&&parseInt(this.container.style.zIndex)===un.get(this.container)&&this.close(n)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}ngOnDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.appendTo&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&un.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=T(t)))(r||t)}})();static \u0275cmp=F({type:t,selectors:[["p-drawer"]],contentQueries:function(n,r,o){if(n&1&&(et(o,$u,5),et(o,Pu,5),et(o,Fu,5),et(o,Uu,5),et(o,Bu,5)),n&2){let s;W(s=q())&&(r.headerTemplate=s.first),W(s=q())&&(r.footerTemplate=s.first),W(s=q())&&(r.contentTemplate=s.first),W(s=q())&&(r.closeiconTemplate=s.first),W(s=q())&&(r.headlessTemplate=s.first)}},viewQuery:function(n,r){if(n&1&&(Dn(Hu,5),Dn(ju,5),Dn(zu,5)),n&2){let o;W(o=q())&&(r.maskRef=o.first),W(o=q())&&(r.containerViewChild=o.first),W(o=q())&&(r.closeButtonViewChild=o.first)}},inputs:{appendTo:"appendTo",blockScroll:[2,"blockScroll","blockScroll",R],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",R],baseZIndex:[2,"baseZIndex","baseZIndex",Ln],modal:[2,"modal","modal",R],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",R],showCloseIcon:[2,"showCloseIcon","showCloseIcon",R],closeOnEscape:[2,"closeOnEscape","closeOnEscape",R],transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen",header:"header",maskStyle:"maskStyle",closable:[2,"closable","closable",R]},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},standalone:!0,features:[ut([na]),Tt,V,Y],ngContentSelectors:Vu,decls:1,vars:1,consts:[["container",""],["notHeadless",""],["icon",""],["role","complementary",3,"ngClass","style","class","keydown",4,"ngIf"],["role","complementary",3,"keydown","ngClass"],[4,"ngTemplateOutlet"],[3,"ngClass"],[3,"class",4,"ngIf"],[3,"ngClass","buttonProps","ariaLabel","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"onClick","keydown.enter","ngClass","buttonProps","ariaLabel"]],template:function(n,r){n&1&&(Dt(),N(0,sd,5,21,"div",3)),n&2&&S("ngIf",r.visible)},dependencies:[It,he,Nn,Pn,Hr,Qs,Ot],encapsulation:2,data:{animation:[Oo("panelState",[Mi("void => visible",[ki(ad)]),Mi("visible => void",[ki(ld)])])]},changeDetection:0})}return t})();export{Ao as a,Bd as b,zt as c,vl as d,Ir as e,fp as f,gp as g,vs as h,Wt as i,Ss as j,te as k,ws as l,Es as m,$c as n,Pc as o,vp as p,_s as q,Sp as r,Rs as s,wp as t,Cp as u,Fc as v,Uc as w,Ep as x,Ts as y,_p as z,Or as A,Rp as B,Tp as C,Ar as D,Ip as E,xp as F,Op as G,Dr as H,Ap as I,Dp as J,Mp as K,Lp as L,kp as M,ri as N,ht as O,Hc as P,I as Q,oi as R,Lr as S,Fp as T,Up as U,Bp as V,Hp as W,ln as X,j as Y,ih as Z,rh as _,oh as $,sh as aa,ah as ba,Ns as ca,Ot as da,lh as ea,G as fa,Bh as ga,gt as ha,Ur as ia,Vs as ja,Ws as ka,Br as la,Gs as ma,di as na,Ks as oa,Qs as pa,Ys as qa,Hr as ra,yg as sa,ta,Sg as ua,un as va,jg as wa};
