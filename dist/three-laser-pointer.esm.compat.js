
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.Laser = {})));
}(this, (function (exports) { 'use strict';
    var Laser=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=2)}([function(t,e){t.exports=THREE},function(t){t.exports=JSON.parse('{"a":"1.2.0-dev.0"}')},function(t,e,r){"use strict";r.r(e);var n=r(1),o=r(0);function i(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e,r){return e&&l(t.prototype,e),r&&l(t,r),t}function f(t){return function(){var e,r=h(t);if(p()){var n=h(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return y(this,e)}}function y(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var d=function(t){v(r,t);var e=f(r);function r(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};c(this,r);var i={color:16711680,maxPoints:256,infLength:9999},a=Object.assign({},i,n);return(t=e.call(this,a.maxPoints,a.color))._src=new o.Vector3(0,0,0),t._raycaster=new o.Raycaster,t._infLen=a.infLength,t._meshes=[],t}return s(r,[{key:"setSource",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this._src=e?t.clone().applyMatrix4(e.matrixWorld):t.clone()}},{key:"getSource",value:function(){return this._src.clone()}},{key:"_raycast",value:function(t,e,r){var n=this._raycaster.intersectObjects(t,e);if(r){for(var o=0;o<n.length;o++)if(n[o].face!==r)return n[o];return null}return n.length>0?n[0]:null}},{key:"raycast",value:function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return this._raycaster.set(t,e),this._raycast(r,o,n)}},{key:"raycastFromCamera",value:function(t,e,r,n,i,a){var u=arguments.length>6&&void 0!==arguments[6]&&arguments[6],c=new o.Vector2(t/r*2-1,-e/n*2+1);return this._raycaster.setFromCamera(c,i),this._raycast(a,u,null)}},{key:"getMeshesHit",value:function(){return this._meshes}},{key:"point",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.updatePoints([this._src.x,this._src.y,this._src.z,t.x,t.y,t.z],!0),this._meshes.length=0,e&&this.material.color.setHex(e)}},{key:"pointWithRaytrace",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:16;if(this.point(t,n),!(o<1)){var a=this.getSource(),u=r.direct(a,t),c=this.raycast(a,u,e);if(c){var l=this.computeReflections(t,u,c,e,o);this.updatePoints([a.x,a.y,a.z,t.x,t.y,t.z].concat(i(l)),!0)}}}},{key:"_computeReflectionsRecursive",value:function(t,e,n,i,a){var u=[],c=this;return function t(e,n,l){var s=(new o.Matrix3).getNormalMatrix(l.object.matrixWorld),f=l.face.normal.clone().applyMatrix3(s).normalize(),y=r.reflect(n,f),p=c.raycast(e,y,i,l.face);if(p){var h=p.point;u.push(h.x,h.y,h.z),u.length/3<a&&t(h,y,p)}else{var v=e.clone().add(y.multiplyScalar(c._infLen));u.push(v.x,v.y,v.z)}}(t,e,n),u}},{key:"_computeReflections",value:function(t,e,n,i,a){var u=[];for(this._meshes=[n.object];;){var c=(new o.Matrix3).getNormalMatrix(n.object.matrixWorld),l=n.face.normal.clone().applyMatrix3(c).normalize(),s=r.reflect(e,l),f=this.raycast(t,s,i,n.face);if(f){var y=f.point;if(u.push(y.x,y.y,y.z),this._meshes.push(f.object),u.length/3<a){t=y,e=s,n=f;continue}break}var p=t.clone().add(s.multiplyScalar(this._infLen));u.push(p.x,p.y,p.z);break}return u}},{key:"computeReflections",value:function(t,e,r,n,o){return this._computeReflections(t,e,r,n,o)}}],[{key:"direct",value:function(t,e){return e.clone().sub(t).normalize()}},{key:"reflect",value:function(t,e){return t.clone().sub(e.clone().multiplyScalar(2*t.dot(e)))}}]),r}(function(t){v(r,t);var e=f(r);function r(t){var i,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16711680;c(this,r);var u=new o.BufferGeometry,l=new Float32Array(3*t);u.setAttribute("position",new o.BufferAttribute(l,3));var s=new o.LineBasicMaterial({color:a});return(i=e.call(this,u,s)).version=n.a,i._maxPoints=t,i._numPoints=0,i}return s(r,[{key:"_frustumCullingWorkaround",value:function(){this.geometry.computeBoundingSphere()}},{key:"setColor",value:function(t){this.material.color.setHex(t)}},{key:"getColor",value:function(){return this.material.color}},{key:"getPoints",value:function(){for(var t=this.geometry.attributes.position.array,e=[],r=0;r<this._numPoints;r++)e.push(new o.Vector3(t[3*r],t[3*r+1],t[3*r+2]));return e}},{key:"updatePoints",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e||(t=d.flattenPoints(t));var r=this.geometry.attributes.position,n=r.count,o=t.length/3;o>n&&(o=n);for(var i=0;i<o;i++)r.array[3*i]=t[3*i],r.array[3*i+1]=t[3*i+1],r.array[3*i+2]=t[3*i+2];r.needsUpdate=!0,this.geometry.setDrawRange(0,o),this._frustumCullingWorkaround(),this._numPoints=o}},{key:"clearPoints",value:function(){this.updatePoints([],!0)}},{key:"updatePointsRandomWalk",value:function(t){this.updatePoints(r._getPointsRandomWalk(t),!0)}}],[{key:"_getPointsRandomWalk",value:function(t){for(var e=[],r=0,n=0,o=0,i=0;i<t;i++)e.push(r),e.push(n),e.push(o),r+=2*(Math.random()-.5),n+=2*(Math.random()-.5),o+=2*(Math.random()-.5);return e}},{key:"flattenPoints",value:function(t){return t.map((function(t){return[t.x,t.y,t.z]})).reduce((function(t,e){return t.concat(e)}))}}]),r}(o.Line));e.default=d}]).default;
    exports.default = Laser;
    Object.defineProperty(exports, '__esModule', { value: true });
})));