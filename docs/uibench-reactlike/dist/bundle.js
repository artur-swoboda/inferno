!function(){"use strict";function n(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,e(n,t)}function e(n,t){return(e=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,t)}function t(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}var r=Array.isArray;function o(n){var e=typeof n;return"string"===e||"number"===e}function l(n){return void 0===n||null===n}function i(n){return null===n||!1===n||!0===n||void 0===n}function a(n){return"function"===typeof n}function u(n){return"string"===typeof n}function c(n){return null===n}function s(n,e){var t={};if(n)for(var r in n)t[r]=n[r];if(e)for(var o in e)t[o]=e[o];return t}function f(n){return!c(n)&&"object"===typeof n}var d={};function p(n){return n.substr(2).toLowerCase()}function h(n,e){n.appendChild(e)}function v(n,e,t){c(t)?h(n,e):n.insertBefore(e,t)}function m(n,e){if(e)return document.createElementNS("http://www.w3.org/2000/svg",n);return document.createElement(n)}function g(n,e,t){n.replaceChild(e,t)}function y(n,e){n.removeChild(e)}function b(n){for(var e=0;e<n.length;e++)n[e]()}function $(n,e,t){var r=n.children;if(4&t)return r.$LI;if(8192&t)return 2===n.childFlags?r:r[e?0:r.length-1];return r}function k(n,e){for(var t;n;){if(2033&(t=n.flags))return n.dom;n=$(n,e,t)}return null}function C(n,e){do{var t=n.flags;if(2033&t)return void y(e,n.dom);var r=n.children;if(4&t&&(n=r.$LI),8&t&&(n=r),8192&t){if(2!==n.childFlags){for(var o=0,l=r.length;o<l;++o)C(r[o],e);return}n=r}}while(n)}function w(n,e,t){do{var r=n.flags;if(2033&r)return void v(e,n.dom,t);var o=n.children;if(4&r&&(n=o.$LI),8&r&&(n=o),8192&r){if(2!==n.childFlags){for(var l=0,i=o.length;l<i;++l)w(o[l],e,t);return}n=o}}while(n)}function U(n,e,t){if(n.constructor.getDerivedStateFromProps)return s(t,n.constructor.getDerivedStateFromProps(e,t));return t}var x={v:!1},P={componentComparator:null,createVNode:null,renderComplete:null};function F(n,e){n.textContent=e}function S(n,e){return f(n)&&n.event===e.event&&n.data===e.data}function L(n,e){for(var t in e)void 0===n[t]&&(n[t]=e[t]);return n}function N(n,e){return!!a(n)&&(n(e),!0)}var V="$";function I(n,e,t,r,o,l,i,a){this.childFlags=n,this.children=e,this.className=t,this.dom=null,this.flags=r,this.key=void 0===o?null:o,this.props=void 0===l?null:l,this.ref=void 0===i?null:i,this.type=a}function B(n,e,t,r,o,l,i,a){var u=void 0===o?1:o,c=new I(u,r,t,n,i,l,a,e);return 0===u&&H(c,c.children),c}function M(n,e,t){if(4&n)return t;var r=(32768&n?e.render:e).defaultHooks;if(l(r))return t;if(l(t))return r;return L(t,r)}function T(n,e,t){var r=(32768&n?e.render:e).defaultProps;if(l(r))return t;if(l(t))return s(r,null);return L(t,r)}function A(n,e){if(12&n)return n;if(e.prototype&&e.prototype.render)return 4;if(e.render)return 32776;return 8}function D(n,e,t,r,o){return new I(1,null,null,n=A(n,e),r,T(n,e,t),M(n,e,o),e)}function E(n,e){return new I(1,l(n)||!0===n||!1===n?"":n,null,16,e,null,null,null)}function O(n,e,t){var r=B(8192,8192,null,n,e,null,t,null);switch(r.childFlags){case 1:r.children=j(),r.childFlags=2;break;case 16:r.children=[E(n)],r.childFlags=4}return r}function W(n){var e=n.children,t=n.childFlags;return O(2===t?R(e):e.map(R),t,n.key)}function R(n){var e=-16385&n.flags,t=n.props;if(14&e&&!c(t)){var r=t;for(var o in t={},r)t[o]=r[o]}if(0===(8192&e))return new I(n.childFlags,n.children,n.className,e,n.key,t,n.ref,n.type);return W(n)}function j(){return E("",null)}function _(n,e,t,l){for(var a=n.length;t<a;t++){var s=n[t];if(!i(s)){var f=l+V+t;if(r(s))_(s,e,0,f);else{if(o(s))s=E(s,f);else{var d=s.key,p=u(d)&&d[0]===V;(81920&s.flags||p)&&(s=R(s)),s.flags|=65536,p?d.substring(0,l.length)!==l&&(s.key=l+d):c(d)?s.key=f:s.key=l+d}e.push(s)}}}}function H(n,e){var t,l=1;if(i(e))t=e;else if(o(e))l=16,t=e;else if(r(e)){for(var a=e.length,s=0;s<a;++s){var f=e[s];if(i(f)||r(f)){t=t||e.slice(0,s),_(e,t,s,"");break}if(o(f))(t=t||e.slice(0,s)).push(E(f,V+s));else{var d=f.key,p=(81920&f.flags)>0,h=c(d),v=u(d)&&d[0]===V;p||h||v?(t=t||e.slice(0,s),(p||v)&&(f=R(f)),(h||v)&&(f.key=V+s),t.push(f)):t&&t.push(f),f.flags|=65536}}l=0===(t=t||e).length?1:8}else(t=e).flags|=65536,81920&e.flags&&(t=R(e)),l=2;return n.children=t,n.childFlags=l,n}function Q(n){if(i(n)||o(n))return E(n,null);if(r(n))return O(n,0,null);return 16384&n.flags?R(n):n}var X="http://www.w3.org/1999/xlink",G="http://www.w3.org/XML/1998/namespace",K={"xlink:actuate":X,"xlink:arcrole":X,"xlink:href":X,"xlink:role":X,"xlink:show":X,"xlink:title":X,"xlink:type":X,"xml:base":G,"xml:lang":G,"xml:space":G};function q(n){return{onClick:n,onDblClick:n,onFocusIn:n,onFocusOut:n,onKeyDown:n,onKeyPress:n,onKeyUp:n,onMouseDown:n,onMouseMove:n,onMouseUp:n,onTouchEnd:n,onTouchMove:n,onTouchStart:n}}var J=q(0),z=q(null),Y=q(!0);function Z(n,e){var t=e.$EV;return t||(t=e.$EV=q(null)),t[n]||1===++J[n]&&(z[n]=fn(n)),t}function nn(n,e){var t=e.$EV;t&&t[n]&&(0===--J[n]&&(document.removeEventListener(p(n),z[n]),z[n]=null),t[n]=null)}function en(n,e,t,r){if(a(t))Z(n,r)[n]=t;else if(f(t)){if(S(e,t))return;Z(n,r)[n]=t}else nn(n,r)}function tn(n){return a(n.composedPath)?n.composedPath()[0]:n.target}function rn(n,e,t,r){var o=tn(n);do{if(e&&o.disabled)return;var l=o.$EV;if(l){var i=l[t];if(i&&(r.dom=o,i.event?i.event(i.data,n):i(n),n.cancelBubble))return}o=o.parentNode}while(!c(o))}function on(){this.cancelBubble=!0,this.immediatePropagationStopped||this.stopImmediatePropagation()}function ln(){return this.defaultPrevented}function an(){return this.cancelBubble}function un(n){var e={dom:document};return n.isDefaultPrevented=ln,n.isPropagationStopped=an,n.stopPropagation=on,Object.defineProperty(n,"currentTarget",{configurable:!0,get:function(){return e.dom}}),e}function cn(n){return function(e){if(0!==e.button)return void e.stopPropagation();rn(e,!0,n,un(e))}}function sn(n){return function(e){rn(e,!1,n,un(e))}}function fn(n){var e="onClick"===n||"onDblClick"===n?cn(n):sn(n);return document.addEventListener(p(n),e),e}function dn(n,e){var t=document.createElement("i");return t.innerHTML=e,t.innerHTML===n.innerHTML}function pn(n,e,t){if(n[e]){var r=n[e];r.event?r.event(r.data,t):r(t)}else{var o=e.toLowerCase();n[o]&&n[o](t)}}function hn(n,e){var t=function(t){var r=this.$V;if(!r)return;var o=r.props||d,l=r.dom;if(u(n))pn(o,n,t);else for(var i=0;i<n.length;++i)pn(o,n[i],t);if(a(e)){var c=this.$V,s=c.props||d;e(s,l,!1,c)}};return Object.defineProperty(t,"wrapped",{configurable:!1,enumerable:!1,value:!0,writable:!1}),t}function vn(n,e,t){var r="$"+e,o=n[r];if(o){if(o[1].wrapped)return;n.removeEventListener(o[0],o[1]),n[r]=null}a(t)&&(n.addEventListener(e,t),n[r]=[e,t])}function mn(n){return"checkbox"===n||"radio"===n}var gn=hn("onInput",kn),yn=hn(["onClick","onChange"],kn);function bn(n){n.stopPropagation()}function $n(n,e){mn(e.type)?(vn(n,"change",yn),vn(n,"click",bn)):vn(n,"input",gn)}function kn(n,e){var t=n.type,r=n.value,o=n.checked,i=n.multiple,a=n.defaultValue,u=!l(r);t&&t!==e.type&&e.setAttribute("type",t),l(i)||i===e.multiple||(e.multiple=i),l(a)||u||(e.defaultValue=a+""),mn(t)?(u&&(e.value=r),l(o)||(e.checked=o)):u&&e.value!==r?(e.defaultValue=r,e.value=r):l(o)||(e.checked=o)}function Cn(n,e){if("option"===n.type)wn(n,e);else{var t=n.children,r=n.flags;if(4&r)Cn(t.$LI,e);else if(8&r)Cn(t,e);else if(2===n.childFlags)Cn(t,e);else if(12&n.childFlags)for(var o=0,l=t.length;o<l;++o)Cn(t[o],e)}}function wn(n,e){var t=n.props||d,o=n.dom;o.value=t.value,t.value===e||r(e)&&-1!==e.indexOf(t.value)?o.selected=!0:l(e)&&l(t.selected)||(o.selected=t.selected||!1)}bn.wrapped=!0;var Un=hn("onChange",Pn);function xn(n){vn(n,"change",Un)}function Pn(n,e,t,r){var o=Boolean(n.multiple);l(n.multiple)||o===e.multiple||(e.multiple=o);var i=n.selectedIndex;if(-1===i&&(e.selectedIndex=-1),1!==r.childFlags){var a=n.value;"number"===typeof i&&i>-1&&e.options[i]&&(a=e.options[i].value),t&&l(a)&&(a=n.defaultValue),Cn(r,a)}}var Fn,Sn,Ln=hn("onInput",In),Nn=hn("onChange");function Vn(n,e){vn(n,"input",Ln),e.onChange&&vn(n,"change",Nn)}function In(n,e,t){var r=n.value,o=e.value;if(l(r)){if(t){var i=n.defaultValue;l(i)||i===o||(e.defaultValue=i,e.value=i)}}else o!==r&&(e.defaultValue=r,e.value=r)}function Bn(n,e,t,r,o,l){64&n?kn(r,t):256&n?Pn(r,t,o,e):128&n&&In(r,t,o),l&&(t.$V=e)}function Mn(n,e,t){64&n?$n(e,t):256&n?xn(e):128&n&&Vn(e,t)}function Tn(n){return n.type&&mn(n.type)?!l(n.checked):!l(n.value)}function An(n){n&&!N(n,null)&&n.current&&(n.current=null)}function Dn(n,e,t){n&&(a(n)||void 0!==n.current)&&t.push((function(){N(n,e)||void 0===n.current||(n.current=e)}))}function En(n,e){On(n),C(n,e)}function On(n){var e,t=n.flags,r=n.children;if(481&t){e=n.ref;var o=n.props;An(e);var i=n.childFlags;if(!c(o))for(var u=Object.keys(o),s=0,f=u.length;s<f;s++){var p=u[s];Y[p]&&nn(p,n.dom)}12&i?Wn(r):2===i&&On(r)}else r&&(4&t?(a(r.componentWillUnmount)&&r.componentWillUnmount(),An(n.ref),r.$UN=!0,On(r.$LI)):8&t?(!l(e=n.ref)&&a(e.onComponentWillUnmount)&&e.onComponentWillUnmount(k(n,!0),n.props||d),On(r)):1024&t?En(r,n.ref):8192&t&&12&n.childFlags&&Wn(r))}function Wn(n){for(var e=0,t=n.length;e<t;++e)On(n[e])}function Rn(n){n.textContent=""}function jn(n,e,t){Wn(t),8192&e.flags?C(e,n):Rn(n)}function _n(n){var e=n.event;return function(t){e(n.data,t)}}function Hn(n,e,t,r){if(f(t)){if(S(e,t))return;t=_n(t)}vn(r,p(n),t)}function Qn(n,e,t){if(l(e))return void t.removeAttribute("style");var r,o,i=t.style;if(u(e))return void(i.cssText=e);if(l(n)||u(n))for(r in e)o=e[r],i.setProperty(r,o);else{for(r in e)(o=e[r])!==n[r]&&i.setProperty(r,o);for(r in n)l(e[r])&&i.removeProperty(r)}}function Xn(n,e,t,r){var o=n&&n.__html||"",i=e&&e.__html||"";o!==i&&(l(i)||dn(r,i)||(c(t)||(12&t.childFlags?Wn(t.children):2===t.childFlags&&On(t.children),t.children=null,t.childFlags=1),r.innerHTML=i))}function Gn(n,e,t,r,o,i,a){switch(n){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":case"selectedIndex":break;case"autoFocus":r.autofocus=!!t;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":r[n]=!!t;break;case"defaultChecked":case"value":case"volume":if(i&&"value"===n)break;var u=l(t)?"":t;r[n]!==u&&(r[n]=u);break;case"style":Qn(e,t,r);break;case"dangerouslySetInnerHTML":Xn(e,t,a,r);break;default:Y[n]?en(n,e,t,r):111===n.charCodeAt(0)&&110===n.charCodeAt(1)?Hn(n,e,t,r):l(t)?r.removeAttribute(n):o&&K[n]?r.setAttributeNS(K[n],n,t):r.setAttribute(n,t)}}function Kn(n,e,t,r,o){var l=!1,i=(448&e)>0;for(var a in i&&(l=Tn(t))&&Mn(e,r,t),t)Gn(a,null,t[a],r,o,l,null);i&&Bn(e,n,r,t,!0,l)}function qn(n,e,t){var r=Q(n.render(e,n.state,t)),o=t;return a(n.getChildContext)&&(o=s(t,n.getChildContext())),n.$CX=o,r}function Jn(n,e,t,r,o,l){var i=new e(t,r),u=i.$N=Boolean(e.getDerivedStateFromProps||i.getSnapshotBeforeUpdate);if(i.$SVG=o,i.$L=l,n.children=i,i.$BS=!1,i.context=r,i.props===d&&(i.props=t),u)i.state=U(i,t,i.state);else if(a(i.componentWillMount)){i.$BR=!0,i.componentWillMount();var s=i.$PS;if(!c(s)){var f=i.state;if(c(f))i.state=s;else for(var p in s)f[p]=s[p];i.$PS=null}i.$BR=!1}return i.$LI=qn(i,t,r),i}function zn(n,e){var t=n.props||d;return 32768&n.flags?n.type.render(t,n.ref,e):n.type(t,e)}function Yn(n,e,t,r,o,l){var i=n.flags|=16384;481&i?te(n,e,t,r,o,l):4&i?oe(n,e,t,r,o,l):8&i?(le(n,e,t,r,o,l),ce(n,l)):512&i||16&i?ee(n,e,o):8192&i?ne(n,t,e,r,o,l):1024&i&&Zn(n,t,e,o,l)}function Zn(n,e,t,r,o){Yn(n.children,n.ref,e,!1,null,o);var l=j();ee(l,t,r),n.dom=l.dom}function ne(n,e,t,r,o,l){var i=n.children,a=n.childFlags;12&a&&0===i.length&&(a=n.childFlags=2,i=n.children=j()),2===a?Yn(i,t,o,r,o,l):re(i,t,e,r,o,l)}function ee(n,e,t){var r=n.dom=document.createTextNode(n.children);c(e)||v(e,r,t)}function te(n,e,t,r,o,i){var a=n.flags,u=n.props,s=n.className,f=n.childFlags,d=n.dom=m(n.type,r=r||(32&a)>0),p=n.children;if(l(s)||""===s||(r?d.setAttribute("class",s):d.className=s),16===f)F(d,p);else if(1!==f){var h=r&&"foreignObject"!==n.type;2===f?(16384&p.flags&&(n.children=p=R(p)),Yn(p,d,t,h,null,i)):8!==f&&4!==f||re(p,d,t,h,null,i)}c(e)||v(e,d,o),c(u)||Kn(n,a,u,d,r),Dn(n.ref,d,i)}function re(n,e,t,r,o,l){for(var i=0;i<n.length;++i){var a=n[i];16384&a.flags&&(n[i]=a=R(a)),Yn(a,e,t,r,o,l)}}function oe(n,e,t,r,o,l){var i=Jn(n,n.type,n.props||d,t,r,l);Yn(i.$LI,e,i.$CX,r,o,l),ae(n.ref,i,l)}function le(n,e,t,r,o,l){Yn(n.children=Q(zn(n,t)),e,t,r,o,l)}function ie(n){return function(){n.componentDidMount()}}function ae(n,e,t){Dn(n,e,t),a(e.componentDidMount)&&t.push(ie(e))}function ue(n,e){return function(){n.onComponentDidMount(k(e,!0),e.props||d)}}function ce(n,e){var t=n.ref;l(t)||(N(t.onComponentWillMount,n.props||d),a(t.onComponentDidMount)&&e.push(ue(t,n)))}function se(n,e,t,r,o,l){On(n),0!==(e.flags&n.flags&2033)?(Yn(e,null,r,o,null,l),g(t,e.dom,n.dom)):(Yn(e,t,r,o,k(n,!0),l),C(n,t))}function fe(n,e,t,r,o,l,i){var a=e.flags|=16384;n.flags!==a||n.type!==e.type||n.key!==e.key||2048&a?16384&n.flags?se(n,e,t,r,o,i):Yn(e,t,r,o,l,i):481&a?me(n,e,r,o,a,i):4&a?ke(n,e,t,r,o,l,i):8&a?Ce(n,e,t,r,o,l,i):16&a?we(n,e):512&a?e.dom=n.dom:8192&a?he(n,e,t,r,o,i):ve(n,e,r,i)}function de(n,e,t){n!==e&&(""!==n?t.firstChild.nodeValue=e:F(t,e))}function pe(n,e){n.textContent!==e&&(n.textContent=e)}function he(n,e,t,r,o,l){var i=n.children,a=e.children,u=n.childFlags,c=e.childFlags,s=null;12&c&&0===a.length&&(c=e.childFlags=2,a=e.children=j());var f=0!==(2&c);if(12&u){var d=i.length;(8&u&&8&c||f||!f&&a.length>d)&&(s=k(i[d-1],!1).nextSibling)}ye(u,c,i,a,t,r,o,s,n,l)}function ve(n,e,t,r){var o=n.ref,l=e.ref,a=e.children;if(ye(n.childFlags,e.childFlags,n.children,a,o,t,!1,null,n,r),e.dom=n.dom,o!==l&&!i(a)){var u=a.dom;y(o,u),h(l,u)}}function me(n,e,t,r,o,i){var a,u=e.dom=n.dom,c=n.props,s=e.props,f=!1,p=!1;if(r=r||(32&o)>0,c!==s){var h=c||d;if((a=s||d)!==d)for(var v in(f=(448&o)>0)&&(p=Tn(a)),a){var m=h[v],g=a[v];m!==g&&Gn(v,m,g,u,r,p,n)}if(h!==d)for(var y in h)l(a[y])&&!l(h[y])&&Gn(y,h[y],null,u,r,p,n)}var b=e.children,$=e.className;n.className!==$&&(l($)?u.removeAttribute("class"):r?u.setAttribute("class",$):u.className=$),4096&o?pe(u,b):ye(n.childFlags,e.childFlags,n.children,b,u,t,r&&"foreignObject"!==e.type,null,n,i),f&&Bn(o,e,u,a,!1,p);var k=e.ref,C=n.ref;C!==k&&(An(C),Dn(k,u,i))}function ge(n,e,t,r,o,l){On(n),re(e,t,r,o,k(n,!0),l),C(n,t)}function ye(n,e,t,r,o,l,i,a,u,c){switch(n){case 2:switch(e){case 2:fe(t,r,o,l,i,a,c);break;case 1:En(t,o);break;case 16:On(t),F(o,r);break;default:ge(t,r,o,l,i,c)}break;case 1:switch(e){case 2:Yn(r,o,l,i,a,c);break;case 1:break;case 16:F(o,r);break;default:re(r,o,l,i,a,c)}break;case 16:switch(e){case 16:de(t,r,o);break;case 2:Rn(o),Yn(r,o,l,i,a,c);break;case 1:Rn(o);break;default:Rn(o),re(r,o,l,i,a,c)}break;default:switch(e){case 16:Wn(t),F(o,r);break;case 2:jn(o,u,t),Yn(r,o,l,i,a,c);break;case 1:jn(o,u,t);break;default:var s=0|t.length,f=0|r.length;0===s?f>0&&re(r,o,l,i,a,c):0===f?jn(o,u,t):8===e&&8===n?xe(t,r,o,l,i,s,f,a,u,c):Ue(t,r,o,l,i,s,f,a,c)}}}function be(n,e,t,r,o){o.push((function(){n.componentDidUpdate(e,t,r)}))}function $e(n,e,t,r,o,l,i,u,c){var f=n.state,d=n.props,p=Boolean(n.$N),h=a(n.shouldComponentUpdate);if(p&&(e=U(n,t,e!==f?s(f,e):e)),i||!h||h&&n.shouldComponentUpdate(t,e,o)){!p&&a(n.componentWillUpdate)&&n.componentWillUpdate(t,e,o),n.props=t,n.state=e,n.context=o;var v=null,m=qn(n,t,o);p&&a(n.getSnapshotBeforeUpdate)&&(v=n.getSnapshotBeforeUpdate(d,f)),fe(n.$LI,m,r,n.$CX,l,u,c),n.$LI=m,a(n.componentDidUpdate)&&be(n,d,f,v,c)}else n.props=t,n.state=e,n.context=o}function ke(n,e,t,r,o,l,i){var u=e.children=n.children;if(c(u))return;u.$L=i;var f=e.props||d,p=e.ref,h=n.ref,v=u.state;if(!u.$N){if(a(u.componentWillReceiveProps)){if(u.$BR=!0,u.componentWillReceiveProps(f,r),u.$UN)return;u.$BR=!1}c(u.$PS)||(v=s(v,u.$PS),u.$PS=null)}$e(u,v,f,t,r,o,!1,l,i),h!==p&&(An(h),Dn(p,u,i))}function Ce(n,e,t,r,o,i,u){var c=!0,s=e.props||d,f=e.ref,p=n.props,h=!l(f),v=n.children;if(h&&a(f.onComponentShouldUpdate)&&(c=f.onComponentShouldUpdate(p,s)),!1!==c){h&&a(f.onComponentWillUpdate)&&f.onComponentWillUpdate(p,s);var m=Q(zn(e,r));fe(v,m,t,r,o,i,u),e.children=m,h&&a(f.onComponentDidUpdate)&&f.onComponentDidUpdate(p,s)}else e.children=v}function we(n,e){var t=e.children,r=e.dom=n.dom;t!==n.children&&(r.nodeValue=t)}function Ue(n,e,t,r,o,l,i,a,u){for(var c,s,f=l>i?i:l,d=0;d<f;++d)c=e[d],s=n[d],16384&c.flags&&(c=e[d]=R(c)),fe(s,c,t,r,o,a,u),n[d]=c;if(l<i)for(d=f;d<i;++d)16384&(c=e[d]).flags&&(c=e[d]=R(c)),Yn(c,t,r,o,a,u);else if(l>i)for(d=f;d<l;++d)En(n[d],t)}function xe(n,e,t,r,o,l,i,a,u,c){var s,f,d=l-1,p=i-1,h=0,v=n[h],m=e[h];n:{for(;v.key===m.key;){if(16384&m.flags&&(e[h]=m=R(m)),fe(v,m,t,r,o,a,c),n[h]=m,++h>d||h>p)break n;v=n[h],m=e[h]}for(v=n[d],m=e[p];v.key===m.key;){if(16384&m.flags&&(e[p]=m=R(m)),fe(v,m,t,r,o,a,c),n[d]=m,p--,h>--d||h>p)break n;v=n[d],m=e[p]}}if(h>d){if(h<=p)for(f=(s=p+1)<i?k(e[s],!0):a;h<=p;)16384&(m=e[h]).flags&&(e[h]=m=R(m)),++h,Yn(m,t,r,o,f,c)}else if(h>p)for(;h<=d;)En(n[h++],t);else Pe(n,e,r,l,i,d,p,h,t,o,a,u,c)}function Pe(n,e,t,r,o,l,i,a,u,c,s,f,d){var p,h,v,m=0,g=a,y=a,b=l-a+1,$=i-a+1,C=new Int32Array($+1),U=b===r,x=!1,P=0,F=0;if(o<4||(b|$)<32)for(m=g;m<=l;++m)if(p=n[m],F<$){for(a=y;a<=i;a++)if(h=e[a],p.key===h.key){if(C[a-y]=m+1,U)for(U=!1;g<m;)En(n[g++],u);P>a?x=!0:P=a,16384&h.flags&&(e[a]=h=R(h)),fe(p,h,u,t,c,s,d),++F;break}!U&&a>i&&En(p,u)}else U||En(p,u);else{var S={};for(m=y;m<=i;++m)S[e[m].key]=m;for(m=g;m<=l;++m)if(p=n[m],F<$)if(void 0!==(a=S[p.key])){if(U)for(U=!1;m>g;)En(n[g++],u);C[a-y]=m+1,P>a?x=!0:P=a,16384&(h=e[a]).flags&&(e[a]=h=R(h)),fe(p,h,u,t,c,s,d),++F}else U||En(p,u);else U||En(p,u)}if(U)jn(u,f,n),re(e,u,t,c,s,d);else if(x){var L=Se(C);for(a=L.length-1,m=$-1;m>=0;m--)0===C[m]?(16384&(h=e[P=m+y]).flags&&(e[P]=h=R(h)),Yn(h,u,t,c,(v=P+1)<o?k(e[v],!0):s,d)):a<0||m!==L[a]?w(h=e[P=m+y],u,(v=P+1)<o?k(e[v],!0):s):a--}else if(F!==$)for(m=$-1;m>=0;m--)0===C[m]&&(16384&(h=e[P=m+y]).flags&&(e[P]=h=R(h)),Yn(h,u,t,c,(v=P+1)<o?k(e[v],!0):s,d))}var Fe=0;function Se(n){var e=0,t=0,r=0,o=0,l=0,i=0,a=0,u=n.length;for(u>Fe&&(Fe=u,Fn=new Int32Array(u),Sn=new Int32Array(u));t<u;++t)if(0!==(e=n[t])){if(n[r=Fn[o]]<e){Sn[t]=r,Fn[++o]=t;continue}for(l=0,i=o;l<i;)n[Fn[a=l+i>>1]]<e?l=a+1:i=a;e<n[Fn[l]]&&(l>0&&(Sn[t]=Fn[l-1]),Fn[l]=t)}l=o+1;var c=new Int32Array(l);for(i=Fn[l-1];l-- >0;)c[l]=i,i=Sn[i],Fn[l]=0;return c}function Le(n,e,t,r){var o=[],i=e.$V;x.v=!0,l(i)?l(n)||(16384&n.flags&&(n=R(n)),Yn(n,e,r,!1,null,o),e.$V=n,i=n):l(n)?(En(i,e),e.$V=null):(16384&n.flags&&(n=R(n)),fe(i,n,e,r,!1,null,o),i=e.$V=n),b(o),x.v=!1,a(t)&&t(),a(P.renderComplete)&&P.renderComplete(i,e)}function Ne(n,e,t,r){void 0===t&&(t=null),void 0===r&&(r=d),Le(n,e,t,r)}"undefined"!==typeof document&&window.Node&&(Node.prototype.$EV=null,Node.prototype.$V=null);var Ve=[],Ie="undefined"!==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):function(n){window.setTimeout(n,0)},Be=!1;function Me(n,e,t,r){var o=n.$PS;if(a(e)&&(e=e(o?s(n.state,o):n.state,n.props,n.context)),l(o))n.$PS=e;else for(var i in e)o[i]=e[i];if(n.$BR)a(t)&&n.$L.push(t.bind(n));else{if(!x.v&&0===Ve.length)return De(n,r),void(a(t)&&t.call(n));if(-1===Ve.indexOf(n)&&Ve.push(n),r&&(n.$F=!0),Be||(Be=!0,Ie(Ae)),a(t)){var u=n.$QU;u||(u=n.$QU=[]),u.push(t)}}}function Te(n){for(var e=n.$QU,t=0;t<e.length;++t)e[t].call(n);n.$QU=null}function Ae(){var n;for(Be=!1;n=Ve.shift();)if(!n.$UN){var e=n.$F;n.$F=!1,De(n,e),n.$QU&&Te(n)}}function De(n,e){if(e||!n.$BR){var t=n.$PS;n.$PS=null;var r=[];x.v=!0,$e(n,s(n.state,t),n.props,k(n.$LI,!0).parentNode,n.context,n.$SVG,e,null,r),b(r),x.v=!1}else n.state=n.$PS,n.$PS=null}var Ee=function(n,e){this.state=null,this.$BR=!1,this.$BS=!0,this.$PS=null,this.$LI=null,this.$UN=!1,this.$CX=null,this.$QU=null,this.$N=!1,this.$L=null,this.$SVG=!1,this.$F=!1,this.props=n||d,this.context=e||d};Ee.prototype.forceUpdate=function(n){if(this.$UN)return;Me(this,{},n,!0)},Ee.prototype.setState=function(n,e){if(this.$UN)return;this.$BS||Me(this,n,e,!1)},Ee.prototype.render=function(n,e,t){return null},uibench.init("Inferno [same as react]","7.4.8");var Oe=function(e){function r(n){var r;return(r=e.call(this,n)||this).onClick=r.onClick.bind(t(r)),r}n(r,e);var o=r.prototype;return o.shouldComponentUpdate=function(n,e){return this.props.text!==n.text},o.onClick=function(n){console.log("Clicked"+this.props.text),n.stopPropagation()},o.render=function(){return B(1,"td","TableCell",this.props.text,0,{onClick:this.onClick},null,null)},r}(Ee),We=function(e){function t(){return e.apply(this,arguments)||this}n(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(n,e){return this.props.data!==n.data},r.render=function(){for(var n=this.props.data,e=n.active?"TableRow active":"TableRow",t=n.props,r=[D(2,Oe,{text:"#"+n.id},-1,null)],o=0;o<t.length;o++)r.push(D(2,Oe,{text:t[o]},o,null));return B(1,"tr",e,r,0,{"data-id":n.id},null,null)},t}(Ee),Re=function(e){function t(){return e.apply(this,arguments)||this}n(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(n,e){return this.props.data!==n.data},r.render=function(){for(var n=this.props.data.items,e=[],t=0;t<n.length;t++){var r=n[t];e.push(D(2,We,{data:r},r.id,null))}return B(1,"table","Table",B(1,"tbody",null,e,0,null,null,null),2,null,null,null)},t}(Ee),je=function(e){function t(){return e.apply(this,arguments)||this}n(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(n,e){return this.props.data!==n.data},r.render=function(){var n=this.props.data,e=n.time,t={"border-radius":(e%10).toString()+"px",background:"rgba(0,0,0,"+(.5+e%10/10).toString()+")"};return B(1,"div","AnimBox",null,1,{"data-id":n.id,style:t},null,null)},t}(Ee),_e=function(e){function t(){return e.apply(this,arguments)||this}n(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(n,e){return this.props.data!==n.data},r.render=function(){for(var n=this.props.data.items,e=[],t=0;t<n.length;t++){var r=n[t];e.push(D(2,je,{data:r},r.id,null))}return B(1,"div","Anim",e,0,null,null,null)},t}(Ee),He=function(e){function t(){return e.apply(this,arguments)||this}n(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(n,e){return this.props.data!==n.data},r.render=function(){return B(1,"li","TreeLeaf",this.props.data.id,0,null,null,null)},t}(Ee),Qe=function(e){function t(){return e.apply(this,arguments)||this}n(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(n,e){return this.props.data!==n.data},r.render=function(){for(var n=this.props.data,e=[],r=0;r<n.children.length;r++){var o=n.children[r];o.container?e.push(D(2,t,{data:o},o.id,null)):e.push(D(2,He,{data:o},o.id,null))}return B(1,"ul","TreeNode",e,0,null,null,null)},t}(Ee),Xe=function(e){function t(){return e.apply(this,arguments)||this}n(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(n,e){return this.props.data!==n.data},r.render=function(){return B(1,"div","Tree",D(2,Qe,{data:this.props.data.root},null,null),2,null,null,null)},t}(Ee),Ge=function(e){function t(){return e.apply(this,arguments)||this}n(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(n,e){return this.props.data!==n.data},r.render=function(){var n,e=this.props.data,t=e.location;return"table"===t?n=D(2,Re,{data:e.table},null,null):"anim"===t?n=D(2,_e,{data:e.anim},null,null):"tree"===t&&(n=D(2,Xe,{data:e.tree},null,null)),B(1,"div","Main",n,0,null,null,null)},t}(Ee);document.addEventListener("DOMContentLoaded",(function(n){var e=document.querySelector("#App");uibench.run((function(n){Ne(D(2,Ge,{data:n},null,null),e)}),(function(n){Ne(B(1,"pre",null,JSON.stringify(n,null," "),0,null,null,null),e)}))}))}();
