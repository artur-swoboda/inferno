!function(){"use strict";function e(){return(e=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function n(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,t(e,n)}function t(e,n){return(t=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var f=Array.isArray;function r(e){var n=typeof e;return"string"===n||"number"===n}function c(e){return void 0===e||null===e}function i(e){return null===e||!1===e||!0===e||void 0===e}function o(e){return"function"===typeof e}function l(e){return"string"===typeof e}function d(e){return null===e}function u(e,n){var t={};if(e)for(var a in e)t[a]=e[a];if(n)for(var f in n)t[f]=n[f];return t}function s(e){return!d(e)&&"object"===typeof e}var h={};function p(e){return e.substr(2).toLowerCase()}function b(e,n){e.appendChild(n)}function v(e,n,t){d(t)?b(e,n):e.insertBefore(n,t)}function m(e,n){if(n)return document.createElementNS("http://www.w3.org/2000/svg",e);return document.createElement(e)}function g(e,n,t){e.replaceChild(n,t)}function y(e,n){e.removeChild(n)}function x(e){for(var n=0;n<e.length;n++)e[n]()}function $(e,n,t){var a=e.children;if(4&t)return a.$LI;if(8192&t)return 2===e.childFlags?a:a[n?0:a.length-1];return a}function k(e,n){for(var t;e;){if(2033&(t=e.flags))return e.dom;e=$(e,n,t)}return null}function w(e,n){do{var t=e.flags;if(2033&t)return void y(n,e.dom);var a=e.children;if(4&t&&(e=a.$LI),8&t&&(e=a),8192&t){if(2!==e.childFlags){for(var f=0,r=a.length;f<r;++f)w(a[f],n);return}e=a}}while(e)}function C(e,n,t){do{var a=e.flags;if(2033&a)return void v(n,e.dom,t);var f=e.children;if(4&a&&(e=f.$LI),8&a&&(e=f),8192&a){if(2!==e.childFlags){for(var r=0,c=f.length;r<c;++r)C(f[r],n,t);return}e=f}}while(e)}function M(e,n,t){if(e.constructor.getDerivedStateFromProps)return u(t,e.constructor.getDerivedStateFromProps(n,t));return t}var P={v:!1},S={componentComparator:null,createVNode:null,renderComplete:null};function F(e,n){e.textContent=n}function T(e,n){return s(e)&&e.event===n.event&&e.data===n.data}function U(e,n){for(var t in n)void 0===e[t]&&(e[t]=n[t]);return e}function N(e,n){return!!o(e)&&(e(n),!0)}var L="$";function V(e,n,t,a,f,r,c,i){this.childFlags=e,this.children=n,this.className=t,this.dom=null,this.flags=a,this.key=void 0===f?null:f,this.props=void 0===r?null:r,this.ref=void 0===c?null:c,this.type=i}function _(e,n,t,a,f,r,c,i){var o=void 0===f?1:f,l=new V(o,a,t,e,c,r,i,n);return 0===o&&q(l,l.children),l}function I(e,n,t){if(4&e)return t;var a=(32768&e?n.render:n).defaultHooks;if(c(a))return t;if(c(t))return a;return U(t,a)}function H(e,n,t){var a=(32768&e?n.render:n).defaultProps;if(c(a))return t;if(c(t))return u(a,null);return U(t,a)}function E(e,n){if(12&e)return e;if(n.prototype&&n.prototype.render)return 4;if(n.render)return 32776;return 8}function A(e,n,t,a,f){return new V(1,null,null,e=E(e,n),a,H(e,n,t),I(e,n,f),n)}function B(e,n){return new V(1,c(e)||!0===e||!1===e?"":e,null,16,n,null,null,null)}function O(e,n,t){var a=_(8192,8192,null,e,n,null,t,null);switch(a.childFlags){case 1:a.children=W(),a.childFlags=2;break;case 16:a.children=[B(e)],a.childFlags=4}return a}function D(e){var n=e.children,t=e.childFlags;return O(2===t?R(n):n.map(R),t,e.key)}function R(e){var n=-16385&e.flags,t=e.props;if(14&n&&!d(t)){var a=t;for(var f in t={},a)t[f]=a[f]}if(0===(8192&n))return new V(e.childFlags,e.children,e.className,n,e.key,t,e.ref,e.type);return D(e)}function W(){return B("",null)}function j(e,n,t,a){for(var c=e.length;t<c;t++){var o=e[t];if(!i(o)){var u=a+L+t;if(f(o))j(o,n,0,u);else{if(r(o))o=B(o,u);else{var s=o.key,h=l(s)&&s[0]===L;(81920&o.flags||h)&&(o=R(o)),o.flags|=65536,h?s.substring(0,a.length)!==a&&(o.key=a+s):d(s)?o.key=u:o.key=a+s}n.push(o)}}}}function q(e,n){var t,a=1;if(i(n))t=n;else if(r(n))a=16,t=n;else if(f(n)){for(var c=n.length,o=0;o<c;++o){var u=n[o];if(i(u)||f(u)){t=t||n.slice(0,o),j(n,t,o,"");break}if(r(u))(t=t||n.slice(0,o)).push(B(u,L+o));else{var s=u.key,h=(81920&u.flags)>0,p=d(s),b=l(s)&&s[0]===L;h||p||b?(t=t||n.slice(0,o),(h||b)&&(u=R(u)),(p||b)&&(u.key=L+o),t.push(u)):t&&t.push(u),u.flags|=65536}}a=0===(t=t||n).length?1:8}else(t=n).flags|=65536,81920&n.flags&&(t=R(n)),a=2;return e.children=t,e.childFlags=a,e}function G(e){if(i(e)||r(e))return B(e,null);if(f(e))return O(e,0,null);return 16384&e.flags?R(e):e}var Q="http://www.w3.org/1999/xlink",X="http://www.w3.org/XML/1998/namespace",K={"xlink:actuate":Q,"xlink:arcrole":Q,"xlink:href":Q,"xlink:role":Q,"xlink:show":Q,"xlink:title":Q,"xlink:type":Q,"xml:base":X,"xml:lang":X,"xml:space":X};function z(e){return{onClick:e,onDblClick:e,onFocusIn:e,onFocusOut:e,onKeyDown:e,onKeyPress:e,onKeyUp:e,onMouseDown:e,onMouseMove:e,onMouseUp:e,onTouchEnd:e,onTouchMove:e,onTouchStart:e}}var J=z(0),Y=z(null),Z=z(!0);function ee(e,n){var t=n.$EV;return t||(t=n.$EV=z(null)),t[e]||1===++J[e]&&(Y[e]=ue(e)),t}function ne(e,n){var t=n.$EV;t&&t[e]&&(0===--J[e]&&(document.removeEventListener(p(e),Y[e]),Y[e]=null),t[e]=null)}function te(e,n,t,a){if(o(t))ee(e,a)[e]=t;else if(s(t)){if(T(n,t))return;ee(e,a)[e]=t}else ne(e,a)}function ae(e){return o(e.composedPath)?e.composedPath()[0]:e.target}function fe(e,n,t,a){var f=ae(e);do{if(n&&f.disabled)return;var r=f.$EV;if(r){var c=r[t];if(c&&(a.dom=f,c.event?c.event(c.data,e):c(e),e.cancelBubble))return}f=f.parentNode}while(!d(f))}function re(){this.cancelBubble=!0,this.immediatePropagationStopped||this.stopImmediatePropagation()}function ce(){return this.defaultPrevented}function ie(){return this.cancelBubble}function oe(e){var n={dom:document};return e.isDefaultPrevented=ce,e.isPropagationStopped=ie,e.stopPropagation=re,Object.defineProperty(e,"currentTarget",{configurable:!0,get:function(){return n.dom}}),n}function le(e){return function(n){if(0!==n.button)return void n.stopPropagation();fe(n,!0,e,oe(n))}}function de(e){return function(n){fe(n,!1,e,oe(n))}}function ue(e){var n="onClick"===e||"onDblClick"===e?le(e):de(e);return document.addEventListener(p(e),n),n}function se(e,n){var t=document.createElement("i");return t.innerHTML=n,t.innerHTML===e.innerHTML}function he(e,n,t){if(e[n]){var a=e[n];a.event?a.event(a.data,t):a(t)}else{var f=n.toLowerCase();e[f]&&e[f](t)}}function pe(e,n){var t=function(t){var a=this.$V;if(!a)return;var f=a.props||h,r=a.dom;if(l(e))he(f,e,t);else for(var c=0;c<e.length;++c)he(f,e[c],t);if(o(n)){var i=this.$V,d=i.props||h;n(d,r,!1,i)}};return Object.defineProperty(t,"wrapped",{configurable:!1,enumerable:!1,value:!0,writable:!1}),t}function be(e,n,t){var a="$"+n,f=e[a];if(f){if(f[1].wrapped)return;e.removeEventListener(f[0],f[1]),e[a]=null}o(t)&&(e.addEventListener(n,t),e[a]=[n,t])}function ve(e){return"checkbox"===e||"radio"===e}var me=pe("onInput",$e),ge=pe(["onClick","onChange"],$e);function ye(e){e.stopPropagation()}function xe(e,n){ve(n.type)?(be(e,"change",ge),be(e,"click",ye)):be(e,"input",me)}function $e(e,n){var t=e.type,a=e.value,f=e.checked,r=e.multiple,i=e.defaultValue,o=!c(a);t&&t!==n.type&&n.setAttribute("type",t),c(r)||r===n.multiple||(n.multiple=r),c(i)||o||(n.defaultValue=i+""),ve(t)?(o&&(n.value=a),c(f)||(n.checked=f)):o&&n.value!==a?(n.defaultValue=a,n.value=a):c(f)||(n.checked=f)}function ke(e,n){if("option"===e.type)we(e,n);else{var t=e.children,a=e.flags;if(4&a)ke(t.$LI,n);else if(8&a)ke(t,n);else if(2===e.childFlags)ke(t,n);else if(12&e.childFlags)for(var f=0,r=t.length;f<r;++f)ke(t[f],n)}}function we(e,n){var t=e.props||h,a=e.dom;a.value=t.value,t.value===n||f(n)&&-1!==n.indexOf(t.value)?a.selected=!0:c(n)&&c(t.selected)||(a.selected=t.selected||!1)}ye.wrapped=!0;var Ce=pe("onChange",Pe);function Me(e){be(e,"change",Ce)}function Pe(e,n,t,a){var f=Boolean(e.multiple);c(e.multiple)||f===n.multiple||(n.multiple=f);var r=e.selectedIndex;if(-1===r&&(n.selectedIndex=-1),1!==a.childFlags){var i=e.value;"number"===typeof r&&r>-1&&n.options[r]&&(i=n.options[r].value),t&&c(i)&&(i=e.defaultValue),ke(a,i)}}var Se,Fe,Te=pe("onInput",Le),Ue=pe("onChange");function Ne(e,n){be(e,"input",Te),n.onChange&&be(e,"change",Ue)}function Le(e,n,t){var a=e.value,f=n.value;if(c(a)){if(t){var r=e.defaultValue;c(r)||r===f||(n.defaultValue=r,n.value=r)}}else f!==a&&(n.defaultValue=a,n.value=a)}function Ve(e,n,t,a,f,r){64&e?$e(a,t):256&e?Pe(a,t,f,n):128&e&&Le(a,t,f),r&&(t.$V=n)}function _e(e,n,t){64&e?xe(n,t):256&e?Me(n):128&e&&Ne(n,t)}function Ie(e){return e.type&&ve(e.type)?!c(e.checked):!c(e.value)}function He(e){e&&!N(e,null)&&e.current&&(e.current=null)}function Ee(e,n,t){e&&(o(e)||void 0!==e.current)&&t.push((function(){N(e,n)||void 0===e.current||(e.current=n)}))}function Ae(e,n){Be(e),w(e,n)}function Be(e){var n,t=e.flags,a=e.children;if(481&t){n=e.ref;var f=e.props;He(n);var r=e.childFlags;if(!d(f))for(var i=Object.keys(f),l=0,u=i.length;l<u;l++){var s=i[l];Z[s]&&ne(s,e.dom)}12&r?Oe(a):2===r&&Be(a)}else a&&(4&t?(o(a.componentWillUnmount)&&a.componentWillUnmount(),He(e.ref),a.$UN=!0,Be(a.$LI)):8&t?(!c(n=e.ref)&&o(n.onComponentWillUnmount)&&n.onComponentWillUnmount(k(e,!0),e.props||h),Be(a)):1024&t?Ae(a,e.ref):8192&t&&12&e.childFlags&&Oe(a))}function Oe(e){for(var n=0,t=e.length;n<t;++n)Be(e[n])}function De(e){e.textContent=""}function Re(e,n,t){Oe(t),8192&n.flags?w(n,e):De(e)}function We(e){var n=e.event;return function(t){n(e.data,t)}}function je(e,n,t,a){if(s(t)){if(T(n,t))return;t=We(t)}be(a,p(e),t)}function qe(e,n,t){if(c(n))return void t.removeAttribute("style");var a,f,r=t.style;if(l(n))return void(r.cssText=n);if(c(e)||l(e))for(a in n)f=n[a],r.setProperty(a,f);else{for(a in n)(f=n[a])!==e[a]&&r.setProperty(a,f);for(a in e)c(n[a])&&r.removeProperty(a)}}function Ge(e,n,t,a){var f=e&&e.__html||"",r=n&&n.__html||"";f!==r&&(c(r)||se(a,r)||(d(t)||(12&t.childFlags?Oe(t.children):2===t.childFlags&&Be(t.children),t.children=null,t.childFlags=1),a.innerHTML=r))}function Qe(e,n,t,a,f,r,i){switch(e){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":case"selectedIndex":break;case"autoFocus":a.autofocus=!!t;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":a[e]=!!t;break;case"defaultChecked":case"value":case"volume":if(r&&"value"===e)break;var o=c(t)?"":t;a[e]!==o&&(a[e]=o);break;case"style":qe(n,t,a);break;case"dangerouslySetInnerHTML":Ge(n,t,i,a);break;default:Z[e]?te(e,n,t,a):111===e.charCodeAt(0)&&110===e.charCodeAt(1)?je(e,n,t,a):c(t)?a.removeAttribute(e):f&&K[e]?a.setAttributeNS(K[e],e,t):a.setAttribute(e,t)}}function Xe(e,n,t,a,f){var r=!1,c=(448&n)>0;for(var i in c&&(r=Ie(t))&&_e(n,a,t),t)Qe(i,null,t[i],a,f,r,null);c&&Ve(n,e,a,t,!0,r)}function Ke(e,n,t){var a=G(e.render(n,e.state,t)),f=t;return o(e.getChildContext)&&(f=u(t,e.getChildContext())),e.$CX=f,a}function ze(e,n,t,a,f,r){var c=new n(t,a),i=c.$N=Boolean(n.getDerivedStateFromProps||c.getSnapshotBeforeUpdate);if(c.$SVG=f,c.$L=r,e.children=c,c.$BS=!1,c.context=a,c.props===h&&(c.props=t),i)c.state=M(c,t,c.state);else if(o(c.componentWillMount)){c.$BR=!0,c.componentWillMount();var l=c.$PS;if(!d(l)){var u=c.state;if(d(u))c.state=l;else for(var s in l)u[s]=l[s];c.$PS=null}c.$BR=!1}return c.$LI=Ke(c,t,a),c}function Je(e,n){var t=e.props||h;return 32768&e.flags?e.type.render(t,e.ref,n):e.type(t,n)}function Ye(e,n,t,a,f,r){var c=e.flags|=16384;481&c?tn(e,n,t,a,f,r):4&c?fn(e,n,t,a,f,r):8&c?(rn(e,n,t,a,f,r),dn(e,r)):512&c||16&c?nn(e,n,f):8192&c?en(e,t,n,a,f,r):1024&c&&Ze(e,t,n,f,r)}function Ze(e,n,t,a,f){Ye(e.children,e.ref,n,!1,null,f);var r=W();nn(r,t,a),e.dom=r.dom}function en(e,n,t,a,f,r){var c=e.children,i=e.childFlags;12&i&&0===c.length&&(i=e.childFlags=2,c=e.children=W()),2===i?Ye(c,t,f,a,f,r):an(c,t,n,a,f,r)}function nn(e,n,t){var a=e.dom=document.createTextNode(e.children);d(n)||v(n,a,t)}function tn(e,n,t,a,f,r){var i=e.flags,o=e.props,l=e.className,u=e.childFlags,s=e.dom=m(e.type,a=a||(32&i)>0),h=e.children;if(c(l)||""===l||(a?s.setAttribute("class",l):s.className=l),16===u)F(s,h);else if(1!==u){var p=a&&"foreignObject"!==e.type;2===u?(16384&h.flags&&(e.children=h=R(h)),Ye(h,s,t,p,null,r)):8!==u&&4!==u||an(h,s,t,p,null,r)}d(n)||v(n,s,f),d(o)||Xe(e,i,o,s,a),Ee(e.ref,s,r)}function an(e,n,t,a,f,r){for(var c=0;c<e.length;++c){var i=e[c];16384&i.flags&&(e[c]=i=R(i)),Ye(i,n,t,a,f,r)}}function fn(e,n,t,a,f,r){var c=ze(e,e.type,e.props||h,t,a,r);Ye(c.$LI,n,c.$CX,a,f,r),on(e.ref,c,r)}function rn(e,n,t,a,f,r){Ye(e.children=G(Je(e,t)),n,t,a,f,r)}function cn(e){return function(){e.componentDidMount()}}function on(e,n,t){Ee(e,n,t),o(n.componentDidMount)&&t.push(cn(n))}function ln(e,n){return function(){e.onComponentDidMount(k(n,!0),n.props||h)}}function dn(e,n){var t=e.ref;c(t)||(N(t.onComponentWillMount,e.props||h),o(t.onComponentDidMount)&&n.push(ln(t,e)))}function un(e,n,t,a,f,r){Be(e),0!==(n.flags&e.flags&2033)?(Ye(n,null,a,f,null,r),g(t,n.dom,e.dom)):(Ye(n,t,a,f,k(e,!0),r),w(e,t))}function sn(e,n,t,a,f,r,c){var i=n.flags|=16384;e.flags!==i||e.type!==n.type||e.key!==n.key||2048&i?16384&e.flags?un(e,n,t,a,f,c):Ye(n,t,a,f,r,c):481&i?mn(e,n,a,f,i,c):4&i?kn(e,n,t,a,f,r,c):8&i?wn(e,n,t,a,f,r,c):16&i?Cn(e,n):512&i?n.dom=e.dom:8192&i?bn(e,n,t,a,f,c):vn(e,n,a,c)}function hn(e,n,t){e!==n&&(""!==e?t.firstChild.nodeValue=n:F(t,n))}function pn(e,n){e.textContent!==n&&(e.textContent=n)}function bn(e,n,t,a,f,r){var c=e.children,i=n.children,o=e.childFlags,l=n.childFlags,d=null;12&l&&0===i.length&&(l=n.childFlags=2,i=n.children=W());var u=0!==(2&l);if(12&o){var s=c.length;(8&o&&8&l||u||!u&&i.length>s)&&(d=k(c[s-1],!1).nextSibling)}yn(o,l,c,i,t,a,f,d,e,r)}function vn(e,n,t,a){var f=e.ref,r=n.ref,c=n.children;if(yn(e.childFlags,n.childFlags,e.children,c,f,t,!1,null,e,a),n.dom=e.dom,f!==r&&!i(c)){var o=c.dom;y(f,o),b(r,o)}}function mn(e,n,t,a,f,r){var i,o=n.dom=e.dom,l=e.props,d=n.props,u=!1,s=!1;if(a=a||(32&f)>0,l!==d){var p=l||h;if((i=d||h)!==h)for(var b in(u=(448&f)>0)&&(s=Ie(i)),i){var v=p[b],m=i[b];v!==m&&Qe(b,v,m,o,a,s,e)}if(p!==h)for(var g in p)c(i[g])&&!c(p[g])&&Qe(g,p[g],null,o,a,s,e)}var y=n.children,x=n.className;e.className!==x&&(c(x)?o.removeAttribute("class"):a?o.setAttribute("class",x):o.className=x),4096&f?pn(o,y):yn(e.childFlags,n.childFlags,e.children,y,o,t,a&&"foreignObject"!==n.type,null,e,r),u&&Ve(f,n,o,i,!1,s);var $=n.ref,k=e.ref;k!==$&&(He(k),Ee($,o,r))}function gn(e,n,t,a,f,r){Be(e),an(n,t,a,f,k(e,!0),r),w(e,t)}function yn(e,n,t,a,f,r,c,i,o,l){switch(e){case 2:switch(n){case 2:sn(t,a,f,r,c,i,l);break;case 1:Ae(t,f);break;case 16:Be(t),F(f,a);break;default:gn(t,a,f,r,c,l)}break;case 1:switch(n){case 2:Ye(a,f,r,c,i,l);break;case 1:break;case 16:F(f,a);break;default:an(a,f,r,c,i,l)}break;case 16:switch(n){case 16:hn(t,a,f);break;case 2:De(f),Ye(a,f,r,c,i,l);break;case 1:De(f);break;default:De(f),an(a,f,r,c,i,l)}break;default:switch(n){case 16:Oe(t),F(f,a);break;case 2:Re(f,o,t),Ye(a,f,r,c,i,l);break;case 1:Re(f,o,t);break;default:var d=0|t.length,u=0|a.length;0===d?u>0&&an(a,f,r,c,i,l):0===u?Re(f,o,t):8===n&&8===e?Pn(t,a,f,r,c,d,u,i,o,l):Mn(t,a,f,r,c,d,u,i,l)}}}function xn(e,n,t,a,f){f.push((function(){e.componentDidUpdate(n,t,a)}))}function $n(e,n,t,a,f,r,c,i,l){var d=e.state,s=e.props,h=Boolean(e.$N),p=o(e.shouldComponentUpdate);if(h&&(n=M(e,t,n!==d?u(d,n):n)),c||!p||p&&e.shouldComponentUpdate(t,n,f)){!h&&o(e.componentWillUpdate)&&e.componentWillUpdate(t,n,f),e.props=t,e.state=n,e.context=f;var b=null,v=Ke(e,t,f);h&&o(e.getSnapshotBeforeUpdate)&&(b=e.getSnapshotBeforeUpdate(s,d)),sn(e.$LI,v,a,e.$CX,r,i,l),e.$LI=v,o(e.componentDidUpdate)&&xn(e,s,d,b,l)}else e.props=t,e.state=n,e.context=f}function kn(e,n,t,a,f,r,c){var i=n.children=e.children;if(d(i))return;i.$L=c;var l=n.props||h,s=n.ref,p=e.ref,b=i.state;if(!i.$N){if(o(i.componentWillReceiveProps)){if(i.$BR=!0,i.componentWillReceiveProps(l,a),i.$UN)return;i.$BR=!1}d(i.$PS)||(b=u(b,i.$PS),i.$PS=null)}$n(i,b,l,t,a,f,!1,r,c),p!==s&&(He(p),Ee(s,i,c))}function wn(e,n,t,a,f,r,i){var l=!0,d=n.props||h,u=n.ref,s=e.props,p=!c(u),b=e.children;if(p&&o(u.onComponentShouldUpdate)&&(l=u.onComponentShouldUpdate(s,d)),!1!==l){p&&o(u.onComponentWillUpdate)&&u.onComponentWillUpdate(s,d);var v=G(Je(n,a));sn(b,v,t,a,f,r,i),n.children=v,p&&o(u.onComponentDidUpdate)&&u.onComponentDidUpdate(s,d)}else n.children=b}function Cn(e,n){var t=n.children,a=n.dom=e.dom;t!==e.children&&(a.nodeValue=t)}function Mn(e,n,t,a,f,r,c,i,o){for(var l,d,u=r>c?c:r,s=0;s<u;++s)l=n[s],d=e[s],16384&l.flags&&(l=n[s]=R(l)),sn(d,l,t,a,f,i,o),e[s]=l;if(r<c)for(s=u;s<c;++s)16384&(l=n[s]).flags&&(l=n[s]=R(l)),Ye(l,t,a,f,i,o);else if(r>c)for(s=u;s<r;++s)Ae(e[s],t)}function Pn(e,n,t,a,f,r,c,i,o,l){var d,u,s=r-1,h=c-1,p=0,b=e[p],v=n[p];e:{for(;b.key===v.key;){if(16384&v.flags&&(n[p]=v=R(v)),sn(b,v,t,a,f,i,l),e[p]=v,++p>s||p>h)break e;b=e[p],v=n[p]}for(b=e[s],v=n[h];b.key===v.key;){if(16384&v.flags&&(n[h]=v=R(v)),sn(b,v,t,a,f,i,l),e[s]=v,h--,p>--s||p>h)break e;b=e[s],v=n[h]}}if(p>s){if(p<=h)for(u=(d=h+1)<c?k(n[d],!0):i;p<=h;)16384&(v=n[p]).flags&&(n[p]=v=R(v)),++p,Ye(v,t,a,f,u,l)}else if(p>h)for(;p<=s;)Ae(e[p++],t);else Sn(e,n,a,r,c,s,h,p,t,f,i,o,l)}function Sn(e,n,t,a,f,r,c,i,o,l,d,u,s){var h,p,b,v=0,m=i,g=i,y=r-i+1,x=c-i+1,$=new Int32Array(x+1),w=y===a,M=!1,P=0,S=0;if(f<4||(y|x)<32)for(v=m;v<=r;++v)if(h=e[v],S<x){for(i=g;i<=c;i++)if(p=n[i],h.key===p.key){if($[i-g]=v+1,w)for(w=!1;m<v;)Ae(e[m++],o);P>i?M=!0:P=i,16384&p.flags&&(n[i]=p=R(p)),sn(h,p,o,t,l,d,s),++S;break}!w&&i>c&&Ae(h,o)}else w||Ae(h,o);else{var F={};for(v=g;v<=c;++v)F[n[v].key]=v;for(v=m;v<=r;++v)if(h=e[v],S<x)if(void 0!==(i=F[h.key])){if(w)for(w=!1;v>m;)Ae(e[m++],o);$[i-g]=v+1,P>i?M=!0:P=i,16384&(p=n[i]).flags&&(n[i]=p=R(p)),sn(h,p,o,t,l,d,s),++S}else w||Ae(h,o);else w||Ae(h,o)}if(w)Re(o,u,e),an(n,o,t,l,d,s);else if(M){var T=Tn($);for(i=T.length-1,v=x-1;v>=0;v--)0===$[v]?(16384&(p=n[P=v+g]).flags&&(n[P]=p=R(p)),Ye(p,o,t,l,(b=P+1)<f?k(n[b],!0):d,s)):i<0||v!==T[i]?C(p=n[P=v+g],o,(b=P+1)<f?k(n[b],!0):d):i--}else if(S!==x)for(v=x-1;v>=0;v--)0===$[v]&&(16384&(p=n[P=v+g]).flags&&(n[P]=p=R(p)),Ye(p,o,t,l,(b=P+1)<f?k(n[b],!0):d,s))}var Fn=0;function Tn(e){var n=0,t=0,a=0,f=0,r=0,c=0,i=0,o=e.length;for(o>Fn&&(Fn=o,Se=new Int32Array(o),Fe=new Int32Array(o));t<o;++t)if(0!==(n=e[t])){if(e[a=Se[f]]<n){Fe[t]=a,Se[++f]=t;continue}for(r=0,c=f;r<c;)e[Se[i=r+c>>1]]<n?r=i+1:c=i;n<e[Se[r]]&&(r>0&&(Fe[t]=Se[r-1]),Se[r]=t)}r=f+1;var l=new Int32Array(r);for(c=Se[r-1];r-- >0;)l[r]=c,c=Fe[c],Se[r]=0;return l}"undefined"!==typeof document&&window.Node&&(Node.prototype.$EV=null,Node.prototype.$V=null);var Un=[],Nn="undefined"!==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):function(e){window.setTimeout(e,0)},Ln=!1;function Vn(e,n,t,a){var f=e.$PS;if(o(n)&&(n=n(f?u(e.state,f):e.state,e.props,e.context)),c(f))e.$PS=n;else for(var r in n)f[r]=n[r];if(e.$BR)o(t)&&e.$L.push(t.bind(e));else{if(!P.v&&0===Un.length)return Hn(e,a),void(o(t)&&t.call(e));if(-1===Un.indexOf(e)&&Un.push(e),a&&(e.$F=!0),Ln||(Ln=!0,Nn(In)),o(t)){var i=e.$QU;i||(i=e.$QU=[]),i.push(t)}}}function _n(e){for(var n=e.$QU,t=0;t<n.length;++t)n[t].call(e);e.$QU=null}function In(){var e;for(Ln=!1;e=Un.shift();)if(!e.$UN){var n=e.$F;e.$F=!1,Hn(e,n),e.$QU&&_n(e)}}function Hn(e,n){if(n||!e.$BR){var t=e.$PS;e.$PS=null;var a=[];P.v=!0,$n(e,u(e.state,t),e.props,k(e.$LI,!0).parentNode,e.context,e.$SVG,n,null,a),x(a),P.v=!1}else e.state=e.$PS,e.$PS=null}var En=function(e,n){this.state=null,this.$BR=!1,this.$BS=!0,this.$PS=null,this.$LI=null,this.$UN=!1,this.$CX=null,this.$QU=null,this.$N=!1,this.$L=null,this.$SVG=!1,this.$F=!1,this.props=e||h,this.context=n||h};En.prototype.forceUpdate=function(e){if(this.$UN)return;Vn(this,{},e,!0)},En.prototype.setState=function(e,n){if(this.$UN)return;this.$BS||Vn(this,e,n,!1)},En.prototype.render=function(e,n,t){return null};var An,Bn,On=function(e,n,t,a){this.min=e,this.max=n,this.mean=t,this.last=a},Dn=function(){function e(e){this.samples=[],this.maxSamples=e,this._i=-1}return e.prototype.addSample=function(e){this._i=(this._i+1)%this.maxSamples,this.samples[this._i]=e},e.prototype.each=function(e){for(var n=this.samples,t=0;t<n.length;t++)e(n[(this._i+1+t)%n.length],t)},e.prototype.calc=function(){var e=this.samples;if(0===e.length)return new On(0,0,0,0);for(var n=e[(this._i+1)%e.length],t=n,a=0,f=0;f<e.length;f++){var r=e[(this._i+1+f)%e.length];r<n&&(n=r),r>t&&(t=r),a+=r}var c=e[this._i],i=a/e.length;return new On(n,t,i,c)},e}(),Rn=[],Wn=-1,jn=(An=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])},function(e,n){function t(){this.constructor=e}An(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),qn=function(){function e(e){var n=this;this._sync=function(){n.sync(),n._dirty=!1},this.name=e,this.element=document.createElement("div"),this.element.style.cssText="padding: 2px;background-color: #020;font-family: monospace;font-size: 12px;color: #0f0",this._dirty=!1,this.invalidate()}return e.prototype.invalidate=function(){var e;this._dirty||(this._dirty=!0,e=this._sync,Rn.push(e),-1===Wn&&requestAnimationFrame((function(e){Wn=-1;var n=Rn;Rn=[];for(var t=0;t<n.length;t++)n[t]()})))},e.prototype.sync=function(){throw new Error("sync method not implemented")},e}();!function(e){e[e.HideMin=1]="HideMin",e[e.HideMax=2]="HideMax",e[e.HideMean=4]="HideMean",e[e.HideLast=8]="HideLast",e[e.HideGraph=16]="HideGraph",e[e.RoundValues=32]="RoundValues"}(Bn||(Bn={}));var Gn=function(e){function n(n,t,a,f){var r=e.call(this,n)||this;r.flags=t,r.unitName=a,r.samples=f;var c=document.createElement("div");c.style.cssText="text-align: center",c.textContent=r.name;var i=document.createElement("div");return 0===(t&Bn.HideMin)?(r.minText=document.createElement("div"),i.appendChild(r.minText)):r.minText=null,0===(t&Bn.HideMax)?(r.maxText=document.createElement("div"),i.appendChild(r.maxText)):r.maxText=null,0===(t&Bn.HideMean)?(r.meanText=document.createElement("div"),i.appendChild(r.meanText)):r.meanText=null,0===(t&Bn.HideLast)?(r.lastText=document.createElement("div"),i.appendChild(r.lastText)):r.lastText=null,r.element.appendChild(c),r.element.appendChild(i),0===(t&Bn.HideGraph)?(r.canvas=document.createElement("canvas"),r.canvas.style.cssText="display: block; padding: 0; margin: 0",r.canvas.width=100,r.canvas.height=30,r.ctx=r.canvas.getContext("2d"),r.element.appendChild(r.canvas)):(r.canvas=null,r.ctx=null),r}return jn(n,e),n.prototype.sync=function(){var e,n,t,a,f=this,r=this.samples.calc(),c=30/(1.2*r.max);0===(this.flags&Bn.RoundValues)?(e=r.min.toFixed(2),n=r.max.toFixed(2),t=r.mean.toFixed(2),a=r.last.toFixed(2)):(e=Math.round(r.min).toString(),n=Math.round(r.max).toString(),t=Math.round(r.mean).toString(),a=Math.round(r.last).toString()),null!==this.minText&&(this.minText.textContent="min:  "+e+this.unitName),null!==this.maxText&&(this.maxText.textContent="max:  "+n+this.unitName),null!==this.meanText&&(this.meanText.textContent="mean: "+t+this.unitName),null!==this.lastText&&(this.lastText.textContent="last: "+a+this.unitName),null!==this.ctx&&(this.ctx.fillStyle="#010",this.ctx.fillRect(0,0,100,30),this.ctx.fillStyle="#0f0",this.samples.each((function(e,n){f.ctx.fillRect(n,30,1,-e*c)})))},n}(qn);!function(e){function n(n,t){var a=e.call(this,n)||this;return a.counter=t,a.text=document.createElement("div"),a.element.appendChild(a.text),a}jn(n,e),n.prototype.sync=function(){this.text.textContent=this.name+": "+this.counter.value}}(qn);var Qn=null;function Xn(){Qn||((Qn=document.createElement("div")).style.cssText="position: fixed;opacity: 0.9;right: 0;bottom: 0",document.body.appendChild(Qn))}function Kn(e){for(var n=e.length/6|0,t=new Array(n),a=0;a<n;)t[a]="#"+e.slice(6*a,6*++a);return t}function zn(e){var n=e.length;return function(t){return e[Math.max(0,Math.min(n-1,Math.floor(t*n)))]}}var Jn=zn(Kn("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));function Yn(e,n){for(var t=[],a=0;a<e.length;a++)t.push(n(e[a]));return t}zn(Kn("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),zn(Kn("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),zn(Kn("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921")),function(e){void 0===e&&(e=Bn.HideMin|Bn.HideMax|Bn.HideMean|Bn.RoundValues),Xn();var n=new Dn(100),t=new Gn("FPS",e,"",n);Qn.appendChild(t.element);var a=0,f=60;requestAnimationFrame((function e(r){a>0&&(f+=.01652892561983471*(1e3/(r-a)-f)),a=r,n.addSample(f),t.invalidate(),requestAnimationFrame(e)}))}(),function(e){if(void 0===e&&(e=Bn.HideMin|Bn.HideMean),Xn(),void 0===performance.memory)return;var n=new Dn(100),t=new Gn("Memory",e,"MB",n);Qn.appendChild(t.element),function e(){n.addSample(Math.round(performance.memory.usedJSHeapSize/1048576)),t.invalidate(),setTimeout(e,30)}()}();var Zn=function(e){function t(n,t){var f;return(f=e.call(this,n,t)||this).state={numPoints:0},f.updateCount=f.updateCount.bind(a(f)),f}n(t,e);var f=t.prototype;return f.updateCount=function(e){this.setState({numPoints:e.target.value})},f.componentDidMount=function(){this.setState({numPoints:1e3})},f.render=function(e,n){return _(1,"div","app-wrapper",[A(2,nt,{count:n.numPoints},null,null),_(1,"div","controls",[B("# Points"),_(64,"input",null,null,1,{type:"range",min:10,max:1e4,value:n.numPoints,onInput:this.updateCount},null,null),n.numPoints],0,null,null,null),_(1,"div","about",[B("InfernoJS 1k Components Demo based on the Glimmer demo by "),_(1,"a",null,"Michael Lange",16,{href:"http://mlange.io",target:"_blank"},null,null),B(".")],4,null,null,null)],4,null,null,null)},t}(En),et=[0,3,0,1,2],nt=function(t){function a(e,n){var a;return(a=t.call(this,e,n)||this).layout=0,a.phyllotaxis=ut(100),a.grid=st(100),a.wave=ht(100),a.spiral=pt(100),a.points=[],a.step=0,a.numSteps=120,a}n(a,t);var f=a.prototype;return f.next=function(){var n=this;this.step=(this.step+1)%this.numSteps,0===this.step&&(this.layout=(this.layout+1)%et.length);var t=Math.min(1,this.step/(.8*this.numSteps)),a=et[this.layout],f=et[(this.layout+1)%et.length],r=ot(a),c=ot(f),i=lt(a),o=lt(f);this.points=this.points.map((function(n){var a=e({},n);return a.x=dt(a,t,r,c),a.y=dt(a,t,i,o),a})),this.setState(),requestAnimationFrame((function(){n.next()}))},f.setAnchors=function(e){var n=this;e.map((function(e,t){var a=mt(n.grid(t)),f=a[0],r=a[1],c=mt(n.wave(t)),i=c[0],o=c[1],l=mt(n.spiral(t)),d=l[0],u=l[1],s=mt(n.phyllotaxis(t)),h=s[0],p=s[1];Object.assign(e,{gx:f,gy:r,wx:i,wy:o,sx:d,sy:u,px:h,py:p})})),this.points=e},f.makePoints=function(e){for(var n=[],t=0;t<e;t++)n.push({x:0,y:0,color:Jn(t/e)});this.setAnchors(n)},f.componentWillReceiveProps=function(e){e.count!==this.props.count&&(this.phyllotaxis=ut(e.count),this.grid=st(e.count),this.wave=ht(e.count),this.spiral=pt(e.count),this.makePoints(e.count))},f.componentDidMount=function(){this.next()},f.renderPoint=function(e){return A(2,tt,{x:e.x,y:e.y,color:e.color},null,null)},f.render=function(){return _(32,"svg","demo",_(32,"g",null,Yn(this.points,this.renderPoint),4,null,null,null),2,null,null,null)},a}(En);function tt(e){var n=e.x,t=e.y,a=e.color;return _(32,"rect","point",null,1,{transform:"translate("+Math.floor(n)+", "+Math.floor(t)+")",fill:a},null,null)}var at,ft,rt,ct,it=Math.PI*(3-Math.sqrt(5));function ot(e){switch(e){case 0:return"px";case 1:return"gx";case 2:return"wx";case 3:return"sx"}}function lt(e){switch(e){case 0:return"py";case 1:return"gy";case 2:return"wy";case 3:return"sy"}}function dt(e,n,t,a){var f=e[t];return f+(e[a]-f)*n}function ut(e){return function(n){var t=Math.sqrt(n/e),a=n*it;return[t*Math.cos(a),t*Math.sin(a)]}}function st(e){var n=Math.round(Math.sqrt(e));return function(e){return[1.6/n*(e%n)-.8,1.6/n*Math.floor(e/n)-.8]}}function ht(e){var n=2/(e-1);return function(e){var t=e*n-1;return[t,.3*Math.sin(t*Math.PI*3)]}}function pt(e){return function(n){var t=Math.sqrt(n/(e-1)),a=t*Math.PI*10;return[t*Math.cos(a),t*Math.sin(a)]}}function bt(e,n){return n.map((function(n){return n*e}))}function vt(e,n){return n.map((function(n,t){return n+e[t]}))}function mt(e){var n=window.innerHeight/2,t=window.innerWidth/2;return vt([t,n],bt(Math.min(n,t),e))}at=A(2,Zn,null,null,null),ft=document.getElementById("app"),void 0===rt&&(rt=null),void 0===ct&&(ct=h),function(e,n,t,a){var f=[],r=n.$V;P.v=!0,c(r)?c(e)||(16384&e.flags&&(e=R(e)),Ye(e,n,a,!1,null,f),n.$V=e,r=e):c(e)?(Ae(r,n),n.$V=null):(16384&e.flags&&(e=R(e)),sn(r,e,n,a,!1,null,f),r=n.$V=e),x(f),P.v=!1,o(t)&&t(),o(S.renderComplete)&&S.renderComplete(r,n)}(at,ft,rt,ct)}();
