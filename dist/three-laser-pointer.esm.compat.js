
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.Laser = {})));
}(this, (function (exports) { 'use strict';
    var Laser;Laser=(()=>{"use strict";var t={429:(t,e,r)=>{r.d(e,{default:()=>b});const n=JSON.parse('{"i8":"1.2.1-alpha.2"}');class o{static consoleLog(...t){const e=console;e.log.apply(e,t)}static isNodeJS(){return"undefined"!=typeof require}static async nodeRequire(t,e){const r="function"==typeof t.require?t.require:null,n="function"==typeof t.import?t.import:null;if(!r&&!n)throw"oops; maybe you should add `global.require = require;` in test script.";return r?r(e):(await n(e)).default}}o.Delta=class{constructor(){this.perf=null,this.start=0}static async new(){return await(new this).init()}async init(){if(o.isNodeJS()){const{performance:t}=await o.nodeRequire(r.g,"perf_hooks");this.perf=t}else this.perf=window.performance;return this.start=this.perf.now(),this}_checkInit(){if(!this.perf)throw"call `async .init()` first."}get(){return this._checkInit(),(this.perf.now()-this.start)/1e3}print(t="delta:"){this._checkInit()}};const i=o,a=THREE;function u(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function h(t,e,r){return e&&f(t.prototype,e),r&&f(t,r),t}function y(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return m(this,r)}}function m(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var g=function(t){y(r,t);var e=v(r);function r(){var t,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l(this,r);var u={color:16711680,maxPoints:256,infLength:9999},c=Object.assign({},u,o);return t=e.call(this,c.maxPoints,c.color),i.consoleLog("Laser ".concat(n.i8," with THREE r").concat(a.REVISION)),t.version=n.i8,t._src=new a.Vector3(0,0,0),t._raycaster=new a.Raycaster,t._infLen=c.infLength,t._meshes=[],t}return h(r,[{key:"setSource",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this._src=e?t.clone().applyMatrix4(e.matrixWorld):t.clone()}},{key:"getSource",value:function(){return this._src.clone()}},{key:"_raycast",value:function(t,e,r){var n=this._raycaster.intersectObjects(t,e);if(r){for(var o=0;o<n.length;o++)if(n[o].face!==r)return n[o];return null}return n.length>0?n[0]:null}},{key:"raycast",value:function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return this._raycaster.set(t,e),this._raycast(r,o,n)}},{key:"raycastFromCamera",value:function(t,e,r,n,o,i){var u=arguments.length>6&&void 0!==arguments[6]&&arguments[6],c=new a.Vector2(t/r*2-1,-e/n*2+1);return this._raycaster.setFromCamera(c,o),this._raycast(i,u,null)}},{key:"getMeshesHit",value:function(){return this._meshes}},{key:"point",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.updatePoints([this._src.x,this._src.y,this._src.z,t.x,t.y,t.z],!0),this._meshes.length=0,e&&this.material.color.setHex(e)}},{key:"pointWithRaytrace",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:16;if(this.point(t,n),!(o<1)){var i=this.getSource(),a=r.direct(i,t),c=this.raycast(i,a,e);if(c){var s=this.computeReflections(t,a,c,e,o);this.updatePoints([i.x,i.y,i.z,t.x,t.y,t.z].concat(u(s)),!0)}}}},{key:"_computeReflectionsRecursive",value:function(t,e,n,o,i){var u=[],c=this;return function t(e,n,s){var l=(new a.Matrix3).getNormalMatrix(s.object.matrixWorld),f=s.face.normal.clone().applyMatrix3(l).normalize(),h=r.reflect(n,f),y=c.raycast(e,h,o,s.face);if(y){var p=y.point;u.push(p.x,p.y,p.z),u.length/3<i&&t(p,h,y)}else{var v=e.clone().add(h.multiplyScalar(c._infLen));u.push(v.x,v.y,v.z)}}(t,e,n),u}},{key:"_computeReflections",value:function(t,e,n,o,i){var u=[];for(this._meshes=[n.object];;){var c=(new a.Matrix3).getNormalMatrix(n.object.matrixWorld),s=n.face.normal.clone().applyMatrix3(c).normalize(),l=r.reflect(e,s),f=this.raycast(t,l,o,n.face);if(f){var h=f.point;if(u.push(h.x,h.y,h.z),this._meshes.push(f.object),u.length/3<i){t=h,e=l,n=f;continue}break}var y=t.clone().add(l.multiplyScalar(this._infLen));u.push(y.x,y.y,y.z);break}return u}},{key:"computeReflections",value:function(t,e,r,n,o){return this._computeReflections(t,e,r,n,o)}}],[{key:"direct",value:function(t,e){return e.clone().sub(t).normalize()}},{key:"reflect",value:function(t,e){return t.clone().sub(e.clone().multiplyScalar(2*t.dot(e)))}}]),r}(function(t){y(r,t);var e=v(r);function r(t){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16711680;l(this,r);var i=new a.BufferGeometry,u=new Float32Array(3*t);i.setAttribute("position",new a.BufferAttribute(u,3));var c=new a.LineBasicMaterial({color:o});return(n=e.call(this,i,c))._maxPoints=t,n._numPoints=0,n}return h(r,[{key:"_frustumCullingWorkaround",value:function(){this.geometry.computeBoundingSphere()}},{key:"setColor",value:function(t){this.material.color.setHex(t)}},{key:"getColor",value:function(){return this.material.color}},{key:"getPoints",value:function(){for(var t=this.geometry.attributes.position.array,e=[],r=0;r<this._numPoints;r++)e.push(new a.Vector3(t[3*r],t[3*r+1],t[3*r+2]));return e}},{key:"updatePoints",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e||(t=g.flattenPoints(t));var r=this.geometry.attributes.position,n=r.count,o=t.length/3;o>n&&(o=n);for(var i=0;i<o;i++)r.array[3*i]=t[3*i],r.array[3*i+1]=t[3*i+1],r.array[3*i+2]=t[3*i+2];r.needsUpdate=!0,this.geometry.setDrawRange(0,o),this._frustumCullingWorkaround(),this._numPoints=o}},{key:"clearPoints",value:function(){this.updatePoints([],!0)}},{key:"updatePointsRandomWalk",value:function(t){this.updatePoints(r._getPointsRandomWalk(t),!0)}}],[{key:"_getPointsRandomWalk",value:function(t){for(var e=[],r=0,n=0,o=0,i=0;i<t;i++)e.push(r),e.push(n),e.push(o),r+=2*(Math.random()-.5),n+=2*(Math.random()-.5),o+=2*(Math.random()-.5);return e}},{key:"flattenPoints",value:function(t){return t.map((function(t){return[t.x,t.y,t.z]})).reduce((function(t,e){return t.concat(e)}))}}]),r}(a.Line));const b=g}},e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}return r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r(429)})().default;
    exports.default = Laser;
    Object.defineProperty(exports, '__esModule', { value: true });
})));