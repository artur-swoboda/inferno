!function(){"use strict";var n=Array.isArray;function e(n){var e=typeof n;return"string"===e||"number"===e}function t(n){return void 0===n||null===n}function r(n){return null===n||!1===n||!0===n||void 0===n}function o(n){return"function"===typeof n}function l(n){return"string"===typeof n}function i(n){return null===n}function a(n,e){var t={};if(n)for(var r in n)t[r]=n[r];if(e)for(var o in e)t[o]=e[o];return t}function u(n,e){if(o(e))return{data:n,event:e};return null}function c(n){return!i(n)&&"object"===typeof n}var f={},s=function(){this.componentDidAppear=[],this.componentWillDisappear=[],this.componentWillMove=[]};function p(n){return n.substring(2).toLowerCase()}function d(n,e){n.appendChild(e)}function v(n,e,t){i(t)?d(n,e):n.insertBefore(e,t)}function h(n,e){if(e)return document.createElementNS("http://www.w3.org/2000/svg",n);return document.createElement(n)}function m(n,e,t){n.replaceChild(e,t)}function g(n,e){n.removeChild(e)}function y(n){for(var e=0;e<n.length;e++)n[e]()}function k(n,e,t){var r=n.children;if(4&t)return r.$LI;if(8192&t)return 2===n.childFlags?r:r[e?0:r.length-1];return r}function b(n,e){for(var t;n;){if(1521&(t=n.flags))return n.dom;n=k(n,e,t)}return null}function w(n,e){for(var t,r=n.length;void 0!==(t=n.pop());)t((function(){--r<=0&&o(e)&&e()}))}function C(n){for(var e=0;e<n.length;e++)n[e].fn();for(var t=0;t<n.length;t++){var r=n[t];v(r.parent,r.dom,r.next)}n.splice(0,n.length)}function $(n,e,t){do{var r=n.flags;if(1521&r)return void(t&&n.dom.parentNode!==e||g(e,n.dom));var o=n.children;if(4&r&&(n=o.$LI),8&r&&(n=o),8192&r){if(2!==n.childFlags){for(var l=0,i=o.length;l<i;++l)$(o[l],e,!1);return}n=o}}while(n)}function x(n,e){return function(){$(n,e,!0)}}function D(n,e,t){t.componentWillDisappear.length>0?w(t.componentWillDisappear,x(n,e)):$(n,e,!1)}function F(n,e,t,r,o,l,i,a){n.componentWillMove.push({dom:r,fn:function(){4&i?t.componentWillMove(e,o,r,a):8&i&&t.onComponentWillMove(e,o,r,a)},next:l,parent:o})}function M(n,e,r,l,i){var a,u,c=e.flags;do{var f=e.flags;if(1521&f)return void(t(a)||!o(a.componentWillMove)&&!o(a.onComponentWillMove)?v(r,e.dom,l):F(i,n,a,e.dom,r,l,c,u));var s=e.children;if(4&f)a=e.children,u=e.props,e=s.$LI;else if(8&f)a=e.ref,u=e.props,e=s;else if(8192&f){if(2!==e.childFlags){for(var p=0,d=s.length;p<d;++p)M(n,s[p],r,l,i);return}e=s}}while(e)}function W(n,e,t){if(n.constructor.getDerivedStateFromProps)return a(t,n.constructor.getDerivedStateFromProps(e,t));return t}var P={componentComparator:null,createVNode:null,renderComplete:null};function L(n,e){n.textContent=e}function A(n,e){return c(n)&&n.event===e.event&&n.data===e.data}function S(n,e){for(var t in e)void 0===n[t]&&(n[t]=e[t]);return n}function N(n,e){return!!o(n)&&(n(e),!0)}var V="$";function I(n,e,t,r,o,l,i,a){this.childFlags=n,this.children=e,this.className=t,this.dom=null,this.flags=r,this.key=void 0===o?null:o,this.props=void 0===l?null:l,this.ref=void 0===i?null:i,this.type=a}function U(n,e,t,r,o,l,i,a){var u=void 0===o?1:o,c=new I(u,r,t,n,i,l,a,e);return 0===u&&q(c,c.children),c}function E(n,e,r){if(4&n)return r;var o=(32768&n?e.render:e).defaultHooks;if(t(o))return r;if(t(r))return o;return S(r,o)}function T(n,e,r){var o=(32768&n?e.render:e).defaultProps;if(t(o))return r;if(t(r))return a(o,null);return S(r,o)}function B(n,e){if(12&n)return n;if(e.prototype&&e.prototype.render)return 4;if(e.render)return 32776;return 8}function O(n,e,t,r,o){return new I(1,null,null,n=B(n,e),r,T(n,e,t),E(n,e,o),e)}function j(n,e){return new I(1,t(n)||!0===n||!1===n?"":n,null,16,e,null,null,null)}function H(n,e,t){var r=U(8192,8192,null,n,e,null,t,null);switch(r.childFlags){case 1:r.children=_(),r.childFlags=2;break;case 16:r.children=[j(n)],r.childFlags=4}return r}function R(n){var e=n.children,t=n.childFlags;return H(2===t?X(e):e.map(X),t,n.key)}function X(n){var e=-16385&n.flags,t=n.props;if(14&e&&!i(t)){var r=t;for(var o in t={},r)t[o]=r[o]}if(0===(8192&e))return new I(n.childFlags,n.children,n.className,e,n.key,t,n.ref,n.type);return R(n)}function _(){return j("",null)}function K(t,o,a,u){for(var c=t.length;a<c;a++){var f=t[a];if(!r(f)){var s=u+V+a;if(n(f))K(f,o,0,s);else{if(e(f))f=j(f,s);else{var p=f.key,d=l(p)&&p[0]===V;(81920&f.flags||d)&&(f=X(f)),f.flags|=65536,d?p.substring(0,u.length)!==u&&(f.key=u+p):i(p)?f.key=s:f.key=u+p}o.push(f)}}}}function q(t,o){var a,u=1;if(r(o))a=o;else if(e(o))u=16,a=o;else if(n(o)){for(var c=o.length,f=0;f<c;++f){var s=o[f];if(r(s)||n(s)){a=a||o.slice(0,f),K(o,a,f,"");break}if(e(s))(a=a||o.slice(0,f)).push(j(s,V+f));else{var p=s.key,d=(81920&s.flags)>0,v=i(p),h=l(p)&&p[0]===V;d||v||h?(a=a||o.slice(0,f),(d||h)&&(s=X(s)),(v||h)&&(s.key=V+f),a.push(s)):a&&a.push(s),s.flags|=65536}}u=0===(a=a||o).length?1:8}else(a=o).flags|=65536,81920&o.flags&&(a=X(o)),u=2;return t.children=a,t.childFlags=u,t}function G(t){if(r(t)||e(t))return j(t,null);if(n(t))return H(t,0,null);return 16384&t.flags?X(t):t}var z="http://www.w3.org/1999/xlink",J="http://www.w3.org/XML/1998/namespace",Q={"xlink:actuate":z,"xlink:arcrole":z,"xlink:href":z,"xlink:role":z,"xlink:show":z,"xlink:title":z,"xlink:type":z,"xml:base":J,"xml:lang":J,"xml:space":J};function Y(n){return{onClick:n,onDblClick:n,onFocusIn:n,onFocusOut:n,onKeyDown:n,onKeyPress:n,onKeyUp:n,onMouseDown:n,onMouseMove:n,onMouseUp:n,onTouchEnd:n,onTouchMove:n,onTouchStart:n}}var Z=Y(0),nn=Y(null),en=Y(!0);function tn(n,e){var t=e.$EV;return t||(t=e.$EV=Y(null)),t[n]||1===++Z[n]&&(nn[n]=vn(n)),t}function rn(n,e){var t=e.$EV;t&&t[n]&&(0===--Z[n]&&(document.removeEventListener(p(n),nn[n]),nn[n]=null),t[n]=null)}function on(n,e,t,r){if(o(t))tn(n,r)[n]=t;else if(c(t)){if(A(e,t))return;tn(n,r)[n]=t}else rn(n,r)}function ln(n){return o(n.composedPath)?n.composedPath()[0]:n.target}function an(n,e,t,r){var o=ln(n);do{if(e&&o.disabled)return;var l=o.$EV;if(l){var a=l[t];if(a&&(r.dom=o,a.event?a.event(a.data,n):a(n),n.cancelBubble))return}o=o.parentNode}while(!i(o))}function un(){this.cancelBubble=!0,this.immediatePropagationStopped||this.stopImmediatePropagation()}function cn(){return this.defaultPrevented}function fn(){return this.cancelBubble}function sn(n){var e={dom:document};return n.isDefaultPrevented=cn,n.isPropagationStopped=fn,n.stopPropagation=un,Object.defineProperty(n,"currentTarget",{configurable:!0,get:function(){return e.dom}}),e}function pn(n){return function(e){if(0!==e.button)return void e.stopPropagation();an(e,!0,n,sn(e))}}function dn(n){return function(e){an(e,!1,n,sn(e))}}function vn(n){var e="onClick"===n||"onDblClick"===n?pn(n):dn(n);return document.addEventListener(p(n),e),e}function hn(n,e){var t=document.createElement("i");return t.innerHTML=e,t.innerHTML===n.innerHTML}function mn(n,e,t){if(n[e]){var r=n[e];r.event?r.event(r.data,t):r(t)}else{var o=e.toLowerCase();n[o]&&n[o](t)}}function gn(n,e){var t=function(t){var r=this.$V;if(!r)return;var i=r.props||f,a=r.dom;if(l(n))mn(i,n,t);else for(var u=0;u<n.length;++u)mn(i,n[u],t);if(o(e)){var c=this.$V,s=c.props||f;e(s,a,!1,c)}};return Object.defineProperty(t,"wrapped",{configurable:!1,enumerable:!1,value:!0,writable:!1}),t}function yn(n,e,t){var r="$"+e,l=n[r];if(l){if(l[1].wrapped)return;n.removeEventListener(l[0],l[1]),n[r]=null}o(t)&&(n.addEventListener(e,t),n[r]=[e,t])}function kn(n){return"checkbox"===n||"radio"===n}var bn=gn("onInput",xn),wn=gn(["onClick","onChange"],xn);function Cn(n){n.stopPropagation()}function $n(n,e){kn(e.type)?(yn(n,"change",wn),yn(n,"click",Cn)):yn(n,"input",bn)}function xn(n,e){var r=n.type,o=n.value,l=n.checked,i=n.multiple,a=n.defaultValue,u=!t(o);r&&r!==e.type&&e.setAttribute("type",r),t(i)||i===e.multiple||(e.multiple=i),t(a)||u||(e.defaultValue=a+""),kn(r)?(u&&(e.value=o),t(l)||(e.checked=l)):u&&e.value!==o?(e.defaultValue=o,e.value=o):t(l)||(e.checked=l)}function Dn(n,e){if("option"===n.type)Fn(n,e);else{var t=n.children,r=n.flags;if(4&r)Dn(t.$LI,e);else if(8&r)Dn(t,e);else if(2===n.childFlags)Dn(t,e);else if(12&n.childFlags)for(var o=0,l=t.length;o<l;++o)Dn(t[o],e)}}function Fn(e,r){var o=e.props||f,l=e.dom;l.value=o.value,o.value===r||n(r)&&-1!==r.indexOf(o.value)?l.selected=!0:t(r)&&t(o.selected)||(l.selected=o.selected||!1)}Cn.wrapped=!0;var Mn=gn("onChange",Pn);function Wn(n){yn(n,"change",Mn)}function Pn(n,e,r,o){var l=Boolean(n.multiple);t(n.multiple)||l===e.multiple||(e.multiple=l);var i=n.selectedIndex;if(-1===i&&(e.selectedIndex=-1),1!==o.childFlags){var a=n.value;"number"===typeof i&&i>-1&&e.options[i]&&(a=e.options[i].value),r&&t(a)&&(a=n.defaultValue),Dn(o,a)}}var Ln,An,Sn=gn("onInput",In),Nn=gn("onChange");function Vn(n,e){yn(n,"input",Sn),e.onChange&&yn(n,"change",Nn)}function In(n,e,r){var o=n.value,l=e.value;if(t(o)){if(r){var i=n.defaultValue;t(i)||i===l||(e.defaultValue=i,e.value=i)}}else l!==o&&(e.defaultValue=o,e.value=o)}function Un(n,e,t,r,o,l){64&n?xn(r,t):256&n?Pn(r,t,o,e):128&n&&In(r,t,o),l&&(t.$V=e)}function En(n,e,t){64&n?$n(e,t):256&n?Wn(e):128&n&&Vn(e,t)}function Tn(n){return n.type&&kn(n.type)?!t(n.checked):!t(n.value)}function Bn(n){n&&!N(n,null)&&n.current&&(n.current=null)}function On(n,e,t){n&&(o(n)||void 0!==n.current)&&t.push((function(){N(n,e)||void 0===n.current||(n.current=e)}))}function jn(n,e,t){Hn(n,t),D(n,e,t)}function Hn(n,e){var r,l=n.flags,a=n.children;if(481&l){r=n.ref;var u=n.props;Bn(r);var c=n.childFlags;if(!i(u))for(var p=Object.keys(u),d=0,v=p.length;d<v;d++){var h=p[d];en[h]&&rn(h,n.dom)}12&c?Rn(a,e):2===c&&Hn(a,e)}else if(a)if(4&l){o(a.componentWillUnmount)&&a.componentWillUnmount();var m=e;o(a.componentWillDisappear)&&(m=new s,qn(e,a,a.$LI.dom,l,void 0)),Bn(n.ref),a.$UN=!0,Hn(a.$LI,m)}else if(8&l){var g=e;if(!t(r=n.ref)){var y=null;o(r.onComponentWillUnmount)&&(y=b(n,!0),r.onComponentWillUnmount(y,n.props||f)),o(r.onComponentWillDisappear)&&(g=new s,qn(e,r,y=y||b(n,!0),l,n.props))}Hn(a,g)}else 1024&l?jn(a,n.ref,e):8192&l&&12&n.childFlags&&Rn(a,e)}function Rn(n,e){for(var t=0,r=n.length;t<r;++t)Hn(n[t],e)}function Xn(n,e){return function(){if(e)for(var t=0;t<n.length;t++)$(n[t],e,!1)}}function _n(n,e,t){t.componentWillDisappear.length>0?w(t.componentWillDisappear,Xn(e,n)):n.textContent=""}function Kn(n,e,t,r){Rn(t,r),8192&e.flags?D(e,n,r):_n(n,t,r)}function qn(n,e,t,r,o){n.componentWillDisappear.push((function(n){4&r?e.componentWillDisappear(t,n):8&r&&e.onComponentWillDisappear(t,o,n)}))}function Gn(n){var e=n.event;return function(t){e(n.data,t)}}function zn(n,e,t,r){if(c(t)){if(A(e,t))return;t=Gn(t)}yn(r,p(n),t)}function Jn(n,e,r){if(t(e))return void r.removeAttribute("style");var o,i,a=r.style;if(l(e))return void(a.cssText=e);if(t(n)||l(n))for(o in e)i=e[o],a.setProperty(o,i);else{for(o in e)(i=e[o])!==n[o]&&a.setProperty(o,i);for(o in n)t(e[o])&&a.removeProperty(o)}}function Qn(n,e,r,o,l){var a=n&&n.__html||"",u=e&&e.__html||"";a!==u&&(t(u)||hn(o,u)||(i(r)||(12&r.childFlags?Rn(r.children,l):2===r.childFlags&&Hn(r.children,l),r.children=null,r.childFlags=1),o.innerHTML=u))}function Yn(n,e,r,o,l,i,a,u){switch(n){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":case"selectedIndex":break;case"autoFocus":o.autofocus=!!r;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":o[n]=!!r;break;case"defaultChecked":case"value":case"volume":if(i&&"value"===n)break;var c=t(r)?"":r;o[n]!==c&&(o[n]=c);break;case"style":Jn(e,r,o);break;case"dangerouslySetInnerHTML":Qn(e,r,a,o,u);break;default:en[n]?on(n,e,r,o):111===n.charCodeAt(0)&&110===n.charCodeAt(1)?zn(n,e,r,o):t(r)?o.removeAttribute(n):l&&Q[n]?o.setAttributeNS(Q[n],n,r):o.setAttribute(n,r)}}function Zn(n,e,t,r,o,l){var i=!1,a=(448&e)>0;for(var u in a&&(i=Tn(t))&&En(e,r,t),t)Yn(u,null,t[u],r,o,i,null,l);a&&Un(e,n,r,t,!0,i)}function ne(n,e,t){var r=G(n.render(e,n.state,t)),l=t;return o(n.getChildContext)&&(l=a(t,n.getChildContext())),n.$CX=l,r}function ee(n,e,t,r,l,a){var u=new e(t,r),c=u.$N=Boolean(e.getDerivedStateFromProps||u.getSnapshotBeforeUpdate);if(u.$SVG=l,u.$L=a,n.children=u,u.$BS=!1,u.context=r,u.props===f&&(u.props=t),c)u.state=W(u,t,u.state);else if(o(u.componentWillMount)){u.$BR=!0,u.componentWillMount();var s=u.$PS;if(!i(s)){var p=u.state;if(i(p))u.state=s;else for(var d in s)p[d]=s[d];u.$PS=null}u.$BR=!1}return u.$LI=ne(u,t,r),u}function te(n,e){var t=n.props||f;return 32768&n.flags?n.type.render(t,n.ref,e):n.type(t,e)}function re(n,e,t,r,o,l,i){var a=n.flags|=16384;481&a?ae(n,e,t,r,o,l,i):4&a?ce(n,e,t,r,o,l,i):8&a?fe(n,e,t,r,o,l,i):16&a?ie(n,e,o):8192&a?le(n,t,e,r,o,l,i):1024&a&&oe(n,t,e,o,l,i)}function oe(n,e,t,r,o,l){re(n.children,n.ref,e,!1,null,o,l);var i=_();ie(i,t,r),n.dom=i.dom}function le(n,e,t,r,o,l,i){var a=n.children,u=n.childFlags;12&u&&0===a.length&&(u=n.childFlags=2,a=n.children=_()),2===u?re(a,t,e,r,o,l,i):ue(a,t,e,r,o,l,i)}function ie(n,e,t){var r=n.dom=document.createTextNode(n.children);i(e)||v(e,r,t)}function ae(n,e,r,o,l,a,u){var c=n.flags,f=n.props,s=n.className,p=n.childFlags,d=n.dom=h(n.type,o=o||(32&c)>0),m=n.children;if(t(s)||""===s||(o?d.setAttribute("class",s):d.className=s),16===p)L(d,m);else if(1!==p){var g=o&&"foreignObject"!==n.type;2===p?(16384&m.flags&&(n.children=m=X(m)),re(m,d,r,g,null,a,u)):8!==p&&4!==p||ue(m,d,r,g,null,a,u)}i(e)||v(e,d,l),i(f)||Zn(n,c,f,d,o,u),On(n.ref,d,a)}function ue(n,e,t,r,o,l,i){for(var a=0;a<n.length;++a){var u=n[a];16384&u.flags&&(n[a]=u=X(u)),re(u,e,t,r,o,l,i)}}function ce(n,e,t,r,l,i,a){var u=ee(n,n.type,n.props||f,t,r,i),c=a;o(u.componentDidAppear)&&(c=new s),re(u.$LI,e,u.$CX,r,l,i,c),de(n.ref,u,i,a)}function fe(n,e,r,l,i,a,u){var c=n.ref,f=u;!t(c)&&o(c.onComponentDidAppear)&&(f=new s),re(n.children=G(te(n,r)),e,r,l,i,a,f),he(n,a,u)}function se(n){return function(){n.componentDidMount()}}function pe(n,e,t,r,o){n.componentDidAppear.push((function(){4&r?e.componentDidAppear(t):8&r&&e.onComponentDidAppear(t,o)}))}function de(n,e,t,r){On(n,e,t),o(e.componentDidMount)&&t.push(se(e)),o(e.componentDidAppear)&&pe(r,e,e.$LI.dom,4,void 0)}function ve(n,e){return function(){n.onComponentDidMount(b(e,!0),e.props||f)}}function he(n,e,r){var l=n.ref;t(l)||(N(l.onComponentWillMount,n.props||f),o(l.onComponentDidMount)&&e.push(ve(l,n)),o(l.onComponentDidAppear)&&pe(r,l,b(n,!0),8,n.props))}function me(n,e,t,r,o,l,i){Hn(n,i),0!==(e.flags&n.flags&1521)?(re(e,null,r,o,null,l,i),m(t,e.dom,n.dom)):(re(e,t,r,o,b(n,!0),l,i),D(n,t,i))}function ge(n,e,t,r,o,l,i,a){var u=e.flags|=16384;n.flags!==u||n.type!==e.type||n.key!==e.key||2048&u?16384&n.flags?me(n,e,t,r,o,i,a):re(e,t,r,o,l,i,a):481&u?Ce(n,e,r,o,u,i,a):4&u?Me(n,e,t,r,o,l,i,a):8&u?We(n,e,t,r,o,l,i,a):16&u?Pe(n,e):8192&u?be(n,e,t,r,o,i,a):we(n,e,r,i,a)}function ye(n,e,t){n!==e&&(""!==n?t.firstChild.nodeValue=e:L(t,e))}function ke(n,e){n.textContent!==e&&(n.textContent=e)}function be(n,e,t,r,o,l,i){var a=n.children,u=e.children,c=n.childFlags,f=e.childFlags,s=null;12&f&&0===u.length&&(f=e.childFlags=2,u=e.children=_());var p=0!==(2&f);if(12&c){var d=a.length;(8&c&&8&f||p||!p&&u.length>d)&&(s=b(a[d-1],!1).nextSibling)}xe(c,f,a,u,t,r,o,s,n,l,i)}function we(n,e,t,o,l){var i=n.ref,a=e.ref,u=e.children;if(xe(n.childFlags,e.childFlags,n.children,u,i,t,!1,null,n,o,l),e.dom=n.dom,i!==a&&!r(u)){var c=u.dom;g(i,c),d(a,c)}}function Ce(n,e,r,o,l,i,a){var u,c=e.dom=n.dom,s=n.props,p=e.props,d=!1,v=!1;if(o=o||(32&l)>0,s!==p){var h=s||f;if((u=p||f)!==f)for(var m in(d=(448&l)>0)&&(v=Tn(u)),u){var g=h[m],y=u[m];g!==y&&Yn(m,g,y,c,o,v,n,a)}if(h!==f)for(var k in h)t(u[k])&&!t(h[k])&&Yn(k,h[k],null,c,o,v,n,a)}var b=e.children,w=e.className;n.className!==w&&(t(w)?c.removeAttribute("class"):o?c.setAttribute("class",w):c.className=w),4096&l?ke(c,b):xe(n.childFlags,e.childFlags,n.children,b,c,r,o&&"foreignObject"!==e.type,null,n,i,a),d&&Un(l,e,c,u,!1,v);var C=e.ref,$=n.ref;$!==C&&(Bn($),On(C,c,i))}function $e(n,e,t,r,o,l,i){Hn(n,i),ue(e,t,r,o,b(n,!0),l,i),D(n,t,i)}function xe(n,e,t,r,o,l,i,a,u,c,f){switch(n){case 2:switch(e){case 2:ge(t,r,o,l,i,a,c,f);break;case 1:jn(t,o,f);break;case 16:Hn(t,f),L(o,r);break;default:$e(t,r,o,l,i,c,f)}break;case 1:switch(e){case 2:re(r,o,l,i,a,c,f);break;case 1:break;case 16:L(o,r);break;default:ue(r,o,l,i,a,c,f)}break;case 16:switch(e){case 16:ye(t,r,o);break;case 2:_n(o,t,f),re(r,o,l,i,a,c,f);break;case 1:_n(o,t,f);break;default:_n(o,t,f),ue(r,o,l,i,a,c,f)}break;default:switch(e){case 16:Rn(t,f),L(o,r);break;case 2:Kn(o,u,t,f),re(r,o,l,i,a,c,f);break;case 1:Kn(o,u,t,f);break;default:var s=0|t.length,p=0|r.length;0===s?p>0&&ue(r,o,l,i,a,c,f):0===p?Kn(o,u,t,f):8===e&&8===n?Ae(t,r,o,l,i,s,p,a,u,c,f):Le(t,r,o,l,i,s,p,a,c,f)}}}function De(n,e,t,r,o){o.push((function(){n.componentDidUpdate(e,t,r)}))}function Fe(n,e,t,r,l,i,u,c,f,s){var p=n.state,d=n.props,v=Boolean(n.$N),h=o(n.shouldComponentUpdate);if(v&&(e=W(n,t,e!==p?a(p,e):e)),u||!h||h&&n.shouldComponentUpdate(t,e,l)){!v&&o(n.componentWillUpdate)&&n.componentWillUpdate(t,e,l),n.props=t,n.state=e,n.context=l;var m=null,g=ne(n,t,l);v&&o(n.getSnapshotBeforeUpdate)&&(m=n.getSnapshotBeforeUpdate(d,p)),ge(n.$LI,g,r,n.$CX,i,c,f,s),n.$LI=g,o(n.componentDidUpdate)&&De(n,d,p,m,f)}else n.props=t,n.state=e,n.context=l}function Me(n,e,t,r,l,u,c,s){var p=e.children=n.children;if(i(p))return;p.$L=c;var d=e.props||f,v=e.ref,h=n.ref,m=p.state;if(!p.$N){if(o(p.componentWillReceiveProps)){if(p.$BR=!0,p.componentWillReceiveProps(d,r),p.$UN)return;p.$BR=!1}i(p.$PS)||(m=a(m,p.$PS),p.$PS=null)}Fe(p,m,d,t,r,l,!1,u,c,s),h!==v&&(Bn(h),On(v,p,c))}function We(n,e,r,l,i,a,u,c){var s=!0,p=e.props||f,d=e.ref,v=n.props,h=!t(d),m=n.children;if(h&&o(d.onComponentShouldUpdate)&&(s=d.onComponentShouldUpdate(v,p)),!1!==s){h&&o(d.onComponentWillUpdate)&&d.onComponentWillUpdate(v,p);var g=G(te(e,l));ge(m,g,r,l,i,a,u,c),e.children=g,h&&o(d.onComponentDidUpdate)&&d.onComponentDidUpdate(v,p)}else e.children=m}function Pe(n,e){var t=e.children,r=e.dom=n.dom;t!==n.children&&(r.nodeValue=t)}function Le(n,e,t,r,o,l,i,a,u,c){for(var f,s,p=l>i?i:l,d=0;d<p;++d)f=e[d],s=n[d],16384&f.flags&&(f=e[d]=X(f)),ge(s,f,t,r,o,a,u,c),n[d]=f;if(l<i)for(d=p;d<i;++d)16384&(f=e[d]).flags&&(f=e[d]=X(f)),re(f,t,r,o,a,u,c);else if(l>i)for(d=p;d<l;++d)jn(n[d],t,c)}function Ae(n,e,t,r,o,l,i,a,u,c,f){var s,p,d=l-1,v=i-1,h=0,m=n[h],g=e[h];n:{for(;m.key===g.key;){if(16384&g.flags&&(e[h]=g=X(g)),ge(m,g,t,r,o,a,c,f),n[h]=g,++h>d||h>v)break n;m=n[h],g=e[h]}for(m=n[d],g=e[v];m.key===g.key;){if(16384&g.flags&&(e[v]=g=X(g)),ge(m,g,t,r,o,a,c,f),n[d]=g,v--,h>--d||h>v)break n;m=n[d],g=e[v]}}if(h>d){if(h<=v)for(p=(s=v+1)<i?b(e[s],!0):a;h<=v;)16384&(g=e[h]).flags&&(e[h]=g=X(g)),++h,re(g,t,r,o,p,c,f)}else if(h>v)for(;h<=d;)jn(n[h++],t,f);else Se(n,e,r,l,i,d,v,h,t,o,a,u,c,f)}function Se(n,e,t,r,o,l,i,a,u,c,f,s,p,d){var v,h,m=0,g=0,y=a,k=a,w=l-a+1,$=i-a+1,x=new Int32Array($+1),D=w===r,F=!1,W=0,P=0;if(o<4||(w|$)<32)for(g=y;g<=l;++g)if(v=n[g],P<$){for(a=k;a<=i;a++)if(h=e[a],v.key===h.key){if(x[a-k]=g+1,D)for(D=!1;y<g;)jn(n[y++],u,d);W>a?F=!0:W=a,16384&h.flags&&(e[a]=h=X(h)),ge(v,h,u,t,c,f,p,d),++P;break}!D&&a>i&&jn(v,u,d)}else D||jn(v,u,d);else{var L={};for(g=k;g<=i;++g)L[e[g].key]=g;for(g=y;g<=l;++g)if(v=n[g],P<$)if(void 0!==(a=L[v.key])){if(D)for(D=!1;g>y;)jn(n[y++],u,d);x[a-k]=g+1,W>a?F=!0:W=a,16384&(h=e[a]).flags&&(e[a]=h=X(h)),ge(v,h,u,t,c,f,p,d),++P}else D||jn(v,u,d);else D||jn(v,u,d)}if(D)Kn(u,s,n,d),ue(e,u,t,c,f,p,d);else if(F){var A=Ve(x);for(a=A.length-1,g=$-1;g>=0;g--)0===x[g]?(16384&(h=e[W=g+k]).flags&&(e[W]=h=X(h)),re(h,u,t,c,(m=W+1)<o?b(e[m],!0):f,p,d)):a<0||g!==A[a]?M(s,h=e[W=g+k],u,(m=W+1)<o?b(e[m],!0):f,d):a--;d.componentWillMove.length>0&&C(d.componentWillMove)}else if(P!==$)for(g=$-1;g>=0;g--)0===x[g]&&(16384&(h=e[W=g+k]).flags&&(e[W]=h=X(h)),re(h,u,t,c,(m=W+1)<o?b(e[m],!0):f,p,d))}var Ne=0;function Ve(n){var e=0,t=0,r=0,o=0,l=0,i=0,a=0,u=n.length;for(u>Ne&&(Ne=u,Ln=new Int32Array(u),An=new Int32Array(u));t<u;++t)if(0!==(e=n[t])){if(n[r=Ln[o]]<e){An[t]=r,Ln[++o]=t;continue}for(l=0,i=o;l<i;)n[Ln[a=l+i>>1]]<e?l=a+1:i=a;e<n[Ln[l]]&&(l>0&&(An[t]=Ln[l-1]),Ln[l]=t)}l=o+1;var c=new Int32Array(l);for(i=Ln[l-1];l-- >0;)c[l]=i,i=An[i],Ln[l]=0;return c}function Ie(n,e,r,l){var i=[],a=new s,u=e.$V;t(u)?t(n)||(16384&n.flags&&(n=X(n)),re(n,e,l,!1,null,i,a),e.$V=n,u=n):t(n)?(jn(u,e,a),e.$V=null):(16384&n.flags&&(n=X(n)),ge(u,n,e,l,!1,null,i,a),u=e.$V=n),y(i),w(a.componentDidAppear),o(r)&&r(),o(P.renderComplete)&&P.renderComplete(u,e)}function Ue(n,e,t,r){void 0===t&&(t=null),void 0===r&&(r=f),Ie(n,e,t,r)}function Ee(n){console.log("ok",n)}"undefined"!==typeof document&&window.Node&&(Node.prototype.$EV=null,Node.prototype.$V=null),"undefined"!==typeof Promise&&Promise.resolve().then.bind(Promise.resolve());var Te=500,Be=[function(){for(var n=[],e=0;e<Te;e++)n.push(U(1,"li",null,e,16,{onclick:Ee},null,null));return U(1,"ul",null,n,4,null,null,null)},function(){for(var n=[],e=0;e<Te;e++)n.push(U(1,"li",null,e,16,{onclick:u(e,Ee)},null,null));return U(1,"ul",null,n,4,null,null,null)},function(){for(var n=[],e=0;e<Te;e++)n.push(U(1,"li",null,e,16,{onClick:Ee},null,null));return U(1,"ul",null,n,4,null,null,null)},function(){for(var n=[],e=0;e<Te;e++)n.push(U(1,"li",null,e,16,{onclick:function(){console.log("ok")}},null,null));return U(1,"ul",null,n,4,null,null,null)}],Oe=["hoistedNonSyntheticEvents","hoistedLinkEventNonSynthetic","hoistedSyntheticEvents","newFuncsNonSyntheticEvents"],je=function(n){return n.reduce((function(n,e){return n+e}),0)/n.length},He=function(n){return Math.min.apply(Math,n)},Re=function(n){return Math.max.apply(Math,n)};function Xe(n){for(var e=n.results,t=[],r=0;r<e.length;r++){var o=e[r],l=["mount","patch","unmount"];t.push(U(1,"div","test-name",o.name,0,null,null,null));for(var i=0;i<l.length;i++){var a=l[i],u=o[a];t.push(U(1,"div","test-part",a,0,null,null,null)),t.push(U(1,"div","test-result",[j("Avg: "),u.avg],0,null,null,null)),t.push(U(1,"div","test-result",[j("Min: "),u.min],0,null,null,null)),t.push(U(1,"div","test-result",[j("Max: "),u.max],0,null,null,null))}}return U(1,"div","results",t,4,null,null,null)}document.addEventListener("DOMContentLoaded",(function(n){for(var e=document.querySelector("#App"),t=[],r=[],o=[],l=[],i=0,a=0;a<3;a++)for(var u=0;u<Be.length;u++)Ue(O(8,Be[u]),e);function c(n){var t=performance.now();Ue(O(8,Be[i]),e);var o=performance.now();r.push(o-t),setTimeout(f,30,n)}function f(n){for(var t=performance.now(),r=0;r<7;r++)Ue(O(8,Be[i]),e);var l=performance.now();o.push(l-t),setTimeout(s,30,n)}function s(n){var t=performance.now();Ue(null,e);var r=performance.now();l.push(r-t),setTimeout(n,30)}Ue(null,e);var p=0;!function n(){p<10&&i<Be.length?(p++,setTimeout(c,30,n)):i<Be.length?(t.push({name:Oe[i],mount:{min:He(r),avg:je(r),max:Re(r)},patch:{min:He(o),avg:je(o),max:Re(o)},unmount:{min:He(l),avg:je(l),max:Re(l)}}),r=[],o=[],l=[],i++,p=0,n()):setTimeout((function(){Ue(O(2,Xe,{results:t},null,null),e)}),1e3)}()}))}();
