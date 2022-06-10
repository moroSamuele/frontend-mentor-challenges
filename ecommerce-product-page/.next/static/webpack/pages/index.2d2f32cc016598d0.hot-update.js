"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ProductData.js":
/*!***********************************!*\
  !*** ./components/ProductData.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductData; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o1) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o1);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o2, p1) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o2, p1);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\n\n\nvar ProductData = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    _inherits(ProductData, _Component);\n    var _super = _createSuper(ProductData);\n    function ProductData(props) {\n        _classCallCheck(this, ProductData);\n        var _this;\n        _this = _super.call(this, props);\n        _defineProperty(_assertThisInitialized(_this), \"handleProductQuantity\", function(quantity) {\n            _this.setState(function(prevState, currState) {\n                alert(prevState.value);\n                return {\n                    productQuantity: prevState.value + quantity\n                };\n            });\n        });\n        _this.state = {\n            productQuantity: 0\n        };\n        _this.handleProductQuantity = _this.handleProductQuantity.bind(_assertThisInitialized(_this));\n        return _this;\n    }\n    _createClass(ProductData, [\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col h-initial px-[7rem] mt-20 space-y-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"uppercase text-primaryOrange tracking-[1px] text-[0.75rem] font-bold\",\n                            children: \"SNEAKER COMPANY\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                            lineNumber: 28,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-veryVarkBlue text-[2.35rem] leading-10 font-bold\",\n                            children: \"Fall Limited Edition Sneakers\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                            lineNumber: 29,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"pt-5 pb-2 text-sm text-grayishBlue\",\n                            children: \"These low-profile sneakers are your perfecte casual wear companion. Featuring a durable rubber outer sole, they'll whistand everything the weather can offer.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                            lineNumber: 30,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-2xl font-bold text-veryVarkBlue\",\n                                    children: \"$125.00\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-primaryOrange font-bold text-sm bg-primaryPaleOrange p-[0.15rem] px-2 rounded ml-4\",\n                                    children: \"50%\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                            lineNumber: 33,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-grayishBlue line-through font-bold\",\n                            children: \"$250.00\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                            lineNumber: 37,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center justify-start space-x-4 py-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-row bg-lightGrayishBlue rounded-xl\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: function() {\n                                                return _this.handleProductQuantity(-1);\n                                            },\n                                            className: \"text-primaryOrange font-bold text-3xl w-14 text-center leading-9 pt-2 pb-4 cursor-pointer rounded-l-xl hover:bg-primaryOrange transition-all hover:text-white\",\n                                            children: \"-\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                                            lineNumber: 41,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            className: \"bg-transparent outline-none text-center font-bold text-black w-16 hover:bg-gray-100 focus:bg-gray-200 transition-all\",\n                                            value: this.state.productQuantity\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                                            lineNumber: 42,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: function() {\n                                                return _this.handleProductQuantity(1);\n                                            },\n                                            className: \"text-primaryOrange font-bold text-3xl w-14 text-center leading-9 pt-2 pb-4 cursor-pointer rounded-r-xl hover:bg-primaryOrange transition-all hover:text-white\",\n                                            children: \"+\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                                            lineNumber: 43,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-primaryOrange grow max-w-[20rem] text-white py-4 rounded-xl shadow-2xl shadow-primaryNotToMuchOrange font-bold flex flex-row items-center justify-center\",\n                                    children: \"Add to cart\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                            lineNumber: 39,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                    lineNumber: 27,\n                    columnNumber: 13\n                }, this);\n            }\n        }\n    ]);\n    return ProductData;\n}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3REYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ1Q7QUFHZixlQUFpQixpQkFKNUI7Ozs7YUFJaUJHLFdBQVcsQ0FDaEJDLEtBQUs7OztrQ0FDUEEsS0FBSyxDQU5uQixDQU1vQjtRQVNoQkMsK0NBQUFBLHVCQUFxQixFQUFHLFNBQUNDLFFBQVEsRUFBSztZQUNsQyxNQUFLQyxRQUFRLENBQUMsU0FBU0MsU0FBUyxFQUFFQyxTQUFTLEVBQUU7Z0JBQ3pDQyxLQUFLLENBQUVGLFNBQVMsQ0FBQ0csS0FBSyxDQUFDO2dCQUN2QixPQUFPO29CQUNIQyxlQUFlLEVBQUVKLFNBQVMsQ0FBQ0csS0FBSyxHQUFHTCxRQUFRO2lCQUM5QzthQUNKLENBQUM7U0FDTDtRQWRHLE1BQUtPLEtBQUssR0FBRztZQUNURCxlQUFlLEVBQUUsQ0FBQztTQUNyQjtRQUVELE1BQUtQLHFCQUFxQixHQUFHLE1BQUtBLHFCQUFxQixDQUFDUyxJQUFJLCtCQUFNOzs7OztZQVl0RUMsR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLEdBQUc7O2dCQUNMLHFCQUNJLDhEQUFDQyxLQUFHO29CQUFDQyxTQUFTLEVBQUMsbURBQW1EOztzQ0FDOUQsOERBQUNDLEdBQUM7NEJBQUNELFNBQVMsRUFBQyxzRUFBc0U7c0NBQUMsaUJBQWU7Ozs7O2dDQUFJO3NDQUN2Ryw4REFBQ0UsSUFBRTs0QkFBQ0YsU0FBUyxFQUFDLHVEQUF1RDtzQ0FBQywrQkFBNkI7Ozs7O2dDQUFLO3NDQUN4Ryw4REFBQ0MsR0FBQzs0QkFBQ0QsU0FBUyxFQUFDLG9DQUFvQztzQ0FBQywrSkFFbEQ7Ozs7O2dDQUFJO3NDQUNKLDhEQUFDRCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsNEJBQTRCOzs4Q0FDdkMsOERBQUNDLEdBQUM7b0NBQUNELFNBQVMsRUFBQyxzQ0FBc0M7OENBQUMsU0FBTzs7Ozs7d0NBQUk7OENBQy9ELDhEQUFDQyxHQUFDO29DQUFDRCxTQUFTLEVBQUMseUZBQXlGOzhDQUFDLEtBQUc7Ozs7O3dDQUFJOzs7Ozs7Z0NBQzVHO3NDQUNOLDhEQUFDQyxHQUFDOzRCQUFDRCxTQUFTLEVBQUMsaURBQWlEO3NDQUFDLFNBQU87Ozs7O2dDQUFJO3NDQUUxRSw4REFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLHlEQUF5RDs7OENBQ3BFLDhEQUFDRCxLQUFHO29DQUFDQyxTQUFTLEVBQUMsOENBQThDOztzREFDekQsOERBQUNELEtBQUc7NENBQUNJLE9BQU8sRUFBRTt1REFBTSxNQUFLZixxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQzs2Q0FBQTs0Q0FBRVksU0FBUyxFQUFDLCtKQUErSjtzREFBQyxHQUFDOzs7OztnREFBTTtzREFDck8sOERBQUNJLE9BQUs7NENBQUNDLElBQUksRUFBQyxNQUFNOzRDQUFDTCxTQUFTLEVBQUMsc0hBQXNIOzRDQUFDTixLQUFLLEVBQUUsSUFBSSxDQUFDRSxLQUFLLENBQUNELGVBQWU7Ozs7O2dEQUFJO3NEQUN6TCw4REFBQ0ksS0FBRzs0Q0FBQ0ksT0FBTyxFQUFFO3VEQUFNLE1BQUtmLHFCQUFxQixDQUFDLENBQUMsQ0FBQzs2Q0FBQTs0Q0FBRVksU0FBUyxFQUFDLCtKQUErSjtzREFBQyxHQUFDOzs7OztnREFBTTs7Ozs7O3dDQUNsTzs4Q0FDTiw4REFBQ00sUUFBTTtvQ0FBQ04sU0FBUyxFQUFDLDZKQUE2Sjs4Q0FBQyxhQUVoTDs7Ozs7d0NBQVM7Ozs7OztnQ0FDUDs7Ozs7O3dCQUNKLENBQ1Q7YUFDSjs7OztDQUNKLENBL0N3Q2pCLHdEQUFlLENBK0N2RDtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZHVjdERhdGEuanM/NzFmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdERhdGEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcHJvZHVjdFF1YW50aXR5OiAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVByb2R1Y3RRdWFudGl0eSA9IHRoaXMuaGFuZGxlUHJvZHVjdFF1YW50aXR5LmJpbmQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQcm9kdWN0UXVhbnRpdHkgPSAocXVhbnRpdHkpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uKHByZXZTdGF0ZSwgY3VyclN0YXRlKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCBwcmV2U3RhdGUudmFsdWUpXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0UXVhbnRpdHk6IHByZXZTdGF0ZS52YWx1ZSArIHF1YW50aXR5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaC1pbml0aWFsIHB4LVs3cmVtXSBtdC0yMCBzcGFjZS15LTRcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LXByaW1hcnlPcmFuZ2UgdHJhY2tpbmctWzFweF0gdGV4dC1bMC43NXJlbV0gZm9udC1ib2xkXCI+U05FQUtFUiBDT01QQU5ZPC9wPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtdmVyeVZhcmtCbHVlIHRleHQtWzIuMzVyZW1dIGxlYWRpbmctMTAgZm9udC1ib2xkXCI+RmFsbCBMaW1pdGVkIEVkaXRpb24gU25lYWtlcnM8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHQtNSBwYi0yIHRleHQtc20gdGV4dC1ncmF5aXNoQmx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFRoZXNlIGxvdy1wcm9maWxlIHNuZWFrZXJzIGFyZSB5b3VyIHBlcmZlY3RlIGNhc3VhbCB3ZWFyIGNvbXBhbmlvbi4gRmVhdHVyaW5nIGEgZHVyYWJsZSBydWJiZXIgb3V0ZXIgc29sZSwgdGhleSdsbCB3aGlzdGFuZCBldmVyeXRoaW5nIHRoZSB3ZWF0aGVyIGNhbiBvZmZlci5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC12ZXJ5VmFya0JsdWVcIj4kMTI1LjAwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeU9yYW5nZSBmb250LWJvbGQgdGV4dC1zbSBiZy1wcmltYXJ5UGFsZU9yYW5nZSBwLVswLjE1cmVtXSBweC0yIHJvdW5kZWQgbWwtNFwiPjUwJTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXlpc2hCbHVlIGxpbmUtdGhyb3VnaCBmb250LWJvbGRcIj4kMjUwLjAwPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCBzcGFjZS14LTQgcHktM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBiZy1saWdodEdyYXlpc2hCbHVlIHJvdW5kZWQteGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVByb2R1Y3RRdWFudGl0eSgtMSl9IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeU9yYW5nZSBmb250LWJvbGQgdGV4dC0zeGwgdy0xNCB0ZXh0LWNlbnRlciBsZWFkaW5nLTkgcHQtMiBwYi00IGN1cnNvci1wb2ludGVyIHJvdW5kZWQtbC14bCBob3ZlcjpiZy1wcmltYXJ5T3JhbmdlIHRyYW5zaXRpb24tYWxsIGhvdmVyOnRleHQtd2hpdGVcIj4tPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50IG91dGxpbmUtbm9uZSB0ZXh0LWNlbnRlciBmb250LWJvbGQgdGV4dC1ibGFjayB3LTE2IGhvdmVyOmJnLWdyYXktMTAwIGZvY3VzOmJnLWdyYXktMjAwIHRyYW5zaXRpb24tYWxsXCIgdmFsdWU9e3RoaXMuc3RhdGUucHJvZHVjdFF1YW50aXR5fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUHJvZHVjdFF1YW50aXR5KDEpfSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlPcmFuZ2UgZm9udC1ib2xkIHRleHQtM3hsIHctMTQgdGV4dC1jZW50ZXIgbGVhZGluZy05IHB0LTIgcGItNCBjdXJzb3ItcG9pbnRlciByb3VuZGVkLXIteGwgaG92ZXI6YmctcHJpbWFyeU9yYW5nZSB0cmFuc2l0aW9uLWFsbCBob3Zlcjp0ZXh0LXdoaXRlXCI+KzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctcHJpbWFyeU9yYW5nZSBncm93IG1heC13LVsyMHJlbV0gdGV4dC13aGl0ZSBweS00IHJvdW5kZWQteGwgc2hhZG93LTJ4bCBzaGFkb3ctcHJpbWFyeU5vdFRvTXVjaE9yYW5nZSBmb250LWJvbGQgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkIHRvIGNhcnRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiUHJvZHVjdERhdGEiLCJwcm9wcyIsImhhbmRsZVByb2R1Y3RRdWFudGl0eSIsInF1YW50aXR5Iiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJjdXJyU3RhdGUiLCJhbGVydCIsInZhbHVlIiwicHJvZHVjdFF1YW50aXR5Iiwic3RhdGUiLCJiaW5kIiwicmVuZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImgxIiwib25DbGljayIsImlucHV0IiwidHlwZSIsImJ1dHRvbiIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductData.js\n");

/***/ })

});