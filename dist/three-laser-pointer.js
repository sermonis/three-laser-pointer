(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("THREE"));
	else if(typeof define === 'function' && define.amd)
		define(["THREE"], factory);
	else if(typeof exports === 'object')
		exports["Laser"] = factory(require("THREE"));
	else
		root["Laser"] = factory(root["THREE"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// if THREE is global (via script-tag loading), use that THREE to prevent
// conflicts with ES6 version. (Line objects become broken, otherwise...)

// console.log('window.THREE:', window.THREE);
var THREE = window.THREE ? window.THREE : three__WEBPACK_IMPORTED_MODULE_0__;

var Line = function (_THREE$Line) {
    _inherits(Line, _THREE$Line);

    // ref. https://stackoverflow.com/questions/31399856/drawing-a-line-with-three-js-dynamically
    function Line(maxPoints) {
        var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0xff0000;

        _classCallCheck(this, Line);

        var geometry = new THREE.BufferGeometry();
        var positions = new Float32Array(maxPoints * 3);
        geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));
        var material = new THREE.LineBasicMaterial({
            color: color
        });

        var _this = _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).call(this, geometry, material));

        _this._maxPoints = maxPoints;
        _this._numPoints = 0;
        return _this;
    }

    _createClass(Line, [{
        key: '_frustumCullingWorkaround',
        value: function _frustumCullingWorkaround() {
            // https://stackoverflow.com/questions/36497763/three-js-line-disappears-if-one-point-is-outside-of-the-cameras-view
            this.geometry.computeBoundingSphere();
            //----
            // this.frustumCulled = false;
        }
    }, {
        key: 'setColor',
        value: function setColor(color) {
            this.material.color.setHex(color);
        }
    }, {
        key: 'getColor',
        value: function getColor() {
            return this.material.color;
        }
    }, {
        key: 'getPoints',
        value: function getPoints() {
            var arr = this.geometry.attributes.position.array;
            var points = [];
            for (var i = 0; i < this._numPoints; i++) {
                points.push(new THREE.Vector3(arr[3 * i], arr[3 * i + 1], arr[3 * i + 2]));
            }
            return points;
        }
    }, {
        key: 'updatePoints',
        value: function updatePoints(arr) {
            var isFlatten = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (!isFlatten) {
                arr = Laser.flattenPoints(arr);
            }
            var attrPos = this.geometry.attributes.position;
            var maxPoints = attrPos.count;
            var numPoints = arr.length / 3;
            // console.log(`numPoints/maxPoints: ${numPoints}/${maxPoints}`);
            if (numPoints > maxPoints) {
                numPoints = maxPoints;
            }
            for (var i = 0; i < numPoints; i++) {
                attrPos.array[3 * i] = arr[3 * i];
                attrPos.array[3 * i + 1] = arr[3 * i + 1];
                attrPos.array[3 * i + 2] = arr[3 * i + 2];
            }
            attrPos.needsUpdate = true;
            this.geometry.setDrawRange(0, numPoints);
            this._frustumCullingWorkaround();
            this._numPoints = numPoints;
        }
    }, {
        key: 'clearPoints',
        value: function clearPoints() {
            this.updatePoints([], true);
        }
    }, {
        key: 'updatePointsRandomWalk',
        value: function updatePointsRandomWalk(numPoints) {
            this.updatePoints(Line._getPointsRandomWalk(numPoints), true);
        }
    }], [{
        key: '_getPointsRandomWalk',
        value: function _getPointsRandomWalk(numPoints) {
            var positions = [];
            var x = 0;
            var y = 0;
            var z = 0;
            for (var i = 0; i < numPoints; i++) {
                positions.push(x);
                positions.push(y);
                positions.push(z);
                x += (Math.random() - 0.5) * 2;
                y += (Math.random() - 0.5) * 2;
                z += (Math.random() - 0.5) * 2;
            }
            return positions;
        }
    }, {
        key: 'flattenPoints',
        value: function flattenPoints(arrPoints) {
            return arrPoints.map(function (pt) {
                return [pt.x, pt.y, pt.z];
            }).reduce(function (acc, ele) {
                return acc.concat(ele);
            });
        }
    }]);

    return Line;
}(THREE.Line);

var Laser = function (_Line) {
    _inherits(Laser, _Line);

    function Laser() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Laser);

        // https://stackoverflow.com/questions/9602449/a-javascript-design-pattern-for-options-with-default-values
        var defaults = {
            color: 0xff0000,
            maxPoints: 256,
            infLength: 9999.0
        };
        var actual = Object.assign({}, defaults, options);

        var _this2 = _possibleConstructorReturn(this, (Laser.__proto__ || Object.getPrototypeOf(Laser)).call(this, actual.maxPoints, actual.color));

        _this2._src = new THREE.Vector3(0, 0, 0);
        _this2._raycaster = new THREE.Raycaster();
        _this2._infLen = actual.infLength;
        _this2._meshes = [];
        return _this2;
    }

    _createClass(Laser, [{
        key: 'setSource',
        value: function setSource(src) {
            var camera = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            // in case camera is given, treat (x, y, z) as in the camera coords
            this._src = camera ? src.clone().applyMatrix4(camera.matrixWorld) : src.clone();
        }
    }, {
        key: 'getSource',
        value: function getSource() {
            return this._src.clone();
        }
    }, {
        key: '_raycast',
        value: function _raycast(meshes, recursive, faceExclude) {
            var isects = this._raycaster.intersectObjects(meshes, recursive);
            if (faceExclude) {
                for (var i = 0; i < isects.length; i++) {
                    if (isects[i].face !== faceExclude) {
                        return isects[i];
                    }
                }
                return null;
            }
            return isects.length > 0 ? isects[0] : null;
        }
    }, {
        key: 'raycast',
        value: function raycast(origin, direction, meshes) {
            var faceExclude = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            var recursive = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

            this._raycaster.set(origin, direction);
            return this._raycast(meshes, recursive, faceExclude);
        }
    }, {
        key: 'raycastFromCamera',
        value: function raycastFromCamera(mx, my, width, height, cam, meshes) {
            var recursive = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;

            var mouse = new THREE.Vector2( // normalized (-1 to +1)
            mx / width * 2 - 1, -(my / height) * 2 + 1);
            // https://threejs.org/docs/#api/core/Raycaster
            // update the picking ray with the camera and mouse position
            this._raycaster.setFromCamera(mouse, cam);
            return this._raycast(meshes, recursive, null);
        }
    }, {
        key: 'getMeshesHit',
        value: function getMeshesHit() {
            return this._meshes;
        }
    }, {
        key: 'point',
        value: function point(pt) {
            var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            // console.log("point():", this._src, pt);
            this.updatePoints([this._src.x, this._src.y, this._src.z, pt.x, pt.y, pt.z], true);
            this._meshes.length = 0;
            if (color) {
                this.material.color.setHex(color);
            }
        }
    }, {
        key: 'pointWithRaytrace',
        value: function pointWithRaytrace(pt) {
            var meshes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var maxReflect = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 16;

            this.point(pt, color);
            if (maxReflect < 1) return;

            var src = this.getSource();
            var dir = Laser.direct(src, pt);
            var isect = this.raycast(src, dir, meshes);
            if (!isect) return;

            var arrRefs = this.computeReflections(pt, dir, isect, meshes, maxReflect);
            this.updatePoints([src.x, src.y, src.z, pt.x, pt.y, pt.z].concat(_toConsumableArray(arrRefs)), true);
        }

        // DEPRECATED: this recursive version has stack depth limitation

    }, {
        key: '_computeReflectionsRecursive',
        value: function _computeReflectionsRecursive(src, dir, isect, meshes, maxReflect) {
            var arr = [];

            // https://stackoverflow.com/questions/7065120/calling-a-javascript-function-recursively
            // https://stackoverflow.com/questions/41681357/can-a-normal-or-arrow-function-invoke-itself-from-its-body-in-a-recursive-manner
            var self = this;
            (function me(src, dir, isect) {
                // https://stackoverflow.com/questions/39082673/get-face-global-normal-in-three-js
                // console.log('local normal:', isect.face.normal);
                var normalMatrix = new THREE.Matrix3().getNormalMatrix(isect.object.matrixWorld);
                var normalWorld = isect.face.normal.clone().applyMatrix3(normalMatrix).normalize();

                var ref = Laser.reflect(dir, normalWorld);
                var isectNew = self.raycast(src, ref, meshes, isect.face);
                // console.log('isectNew:', isectNew);

                if (isectNew) {
                    var pt = isectNew.point;
                    arr.push(pt.x, pt.y, pt.z);
                    if (arr.length / 3 < maxReflect) {
                        me(pt, ref, isectNew);
                    }
                } else {
                    var inf = src.clone().add(ref.multiplyScalar(self._infLen));
                    arr.push(inf.x, inf.y, inf.z);
                }
            })(src, dir, isect);
            return arr;
        }
    }, {
        key: '_computeReflections',
        value: function _computeReflections(src, dir, isect, meshes, maxReflect) {
            var arr = [];
            this._meshes = [isect.object]; // re-init

            while (1) {
                var normalMatrix = new THREE.Matrix3().getNormalMatrix(isect.object.matrixWorld);
                var normalWorld = isect.face.normal.clone().applyMatrix3(normalMatrix).normalize();

                var ref = Laser.reflect(dir, normalWorld);
                var isectNew = this.raycast(src, ref, meshes, isect.face);
                if (isectNew) {
                    var pt = isectNew.point;
                    arr.push(pt.x, pt.y, pt.z);
                    this._meshes.push(isectNew.object);
                    if (arr.length / 3 < maxReflect) {
                        src = pt;
                        dir = ref;
                        isect = isectNew;
                        continue;
                    }
                    break;
                } else {
                    var inf = src.clone().add(ref.multiplyScalar(this._infLen));
                    arr.push(inf.x, inf.y, inf.z);
                    break;
                }
            }
            return arr;
        }
    }, {
        key: 'computeReflections',
        value: function computeReflections(src, dir, isect, meshes, maxReflect) {
            // return this._computeReflectionsRecursive(src, dir, isect, meshes, maxReflect);
            return this._computeReflections(src, dir, isect, meshes, maxReflect);
        }
    }], [{
        key: 'direct',
        value: function direct(src, target) {
            return target.clone().sub(src).normalize();
        }
    }, {
        key: 'reflect',
        value: function reflect(d, n) {
            // r = d - 2 * (d.n) n;  https://math.stackexchange.com/questions/13261/how-to-get-a-reflection-vector
            return d.clone().sub(n.clone().multiplyScalar(2 * d.dot(n)));
        }
    }]);

    return Laser;
}(Line);

//export default { Line, Laser }; // seems not go well with webpack4's "libraryExport: default"


/* harmony default export */ __webpack_exports__["default"] = (Laser);

/***/ })
/******/ ])["default"];
});