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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductData; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o1) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o1);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o2, p1) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o2, p1);\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\n\n\nvar ProductData = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    _inherits(ProductData, _Component);\n    var _super = _createSuper(ProductData);\n    function ProductData(props) {\n        _classCallCheck(this, ProductData);\n        var _this = _super.call(this, props);\n        var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(0), 2), productQuantity = ref[0], setProductQuantity = ref[1];\n        return _this;\n    }\n    _createClass(ProductData, [\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col h-initial px-[7rem] mt-20 space-y-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"uppercase text-primaryOrange tracking-[1px] text-[0.75rem] font-bold\",\n                            children: \"SNEAKER COMPANY\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                            lineNumber: 15,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-veryVarkBlue text-[2.35rem] leading-10 font-bold\",\n                            children: \"Fall Limited Edition Sneakers\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                            lineNumber: 16,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"pt-5 pb-2 text-sm text-grayishBlue\",\n                            children: \"These low-profile sneakers are your perfecte casual wear companion. Featuring a durable rubber outer sole, they'll whistand everything the weather can offer.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                            lineNumber: 17,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-2xl font-bold text-veryVarkBlue\",\n                                    children: \"$125.00\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                                    lineNumber: 21,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-primaryOrange font-bold text-sm bg-primaryPaleOrange p-[0.15rem] px-2 rounded ml-4\",\n                                    children: \"50%\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                            lineNumber: 20,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-grayishBlue line-through font-bold\",\n                            children: \"$250.00\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                            lineNumber: 24,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center justify-start space-x-4 py-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-row bg-lightGrayishBlue rounded-xl\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: function() {\n                                                return _this.handleProductQuantity(-1);\n                                            },\n                                            className: \"text-primaryOrange font-bold text-3xl w-14 text-center leading-9 pt-2 pb-4 cursor-pointer rounded-l-xl hover:bg-primaryOrange transition-all hover:text-white\",\n                                            children: \"-\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                                            lineNumber: 28,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            className: \"bg-transparent outline-none text-center font-bold text-black w-16 hover:bg-gray-100 focus:bg-gray-200 transition-all\",\n                                            value: this.state.productQuantity\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                                            lineNumber: 29,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: function() {\n                                                return _this.handleProductQuantity(1);\n                                            },\n                                            className: \"text-primaryOrange font-bold text-3xl w-14 text-center leading-9 pt-2 pb-4 cursor-pointer rounded-r-xl hover:bg-primaryOrange transition-all hover:text-white\",\n                                            children: \"+\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                                            lineNumber: 30,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-primaryOrange grow max-w-[20rem] text-white py-4 rounded-xl shadow-2xl shadow-primaryNotToMuchOrange font-bold flex flex-row items-center justify-center\",\n                                    children: \"Add to cart\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                            lineNumber: 26,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                    lineNumber: 14,\n                    columnNumber: 13\n                }, this);\n            }\n        }\n    ]);\n    return ProductData;\n}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3REYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ1Q7QUFHZixlQUFpQixpQkFKNUI7Ozs7YUFJaUJHLFdBQVcsQ0FDaEJDLEtBQUs7O3NDQUNQQSxLQUFLO1FBRVgsSUFBNkNKLEdBQWlCLGtCQUFqQkEscURBQWMsQ0FBQyxDQUFDLENBQUMsTUFBeERLLGVBQWUsR0FBd0JMLEdBQWlCLEdBQXpDLEVBQUVNLGtCQUFrQixHQUFJTixHQUFpQixHQUFyQjs7Ozs7WUFHN0NPLEdBQU0sRUFBTkEsUUFBTTttQkFBTkEsU0FBQUEsTUFBTSxHQUFHOztnQkFDTCxxQkFDSSw4REFBQ0MsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLG1EQUFtRDs7c0NBQzlELDhEQUFDQyxHQUFDOzRCQUFDRCxTQUFTLEVBQUMsc0VBQXNFO3NDQUFDLGlCQUFlOzs7OztnQ0FBSTtzQ0FDdkcsOERBQUNFLElBQUU7NEJBQUNGLFNBQVMsRUFBQyx1REFBdUQ7c0NBQUMsK0JBQTZCOzs7OztnQ0FBSztzQ0FDeEcsOERBQUNDLEdBQUM7NEJBQUNELFNBQVMsRUFBQyxvQ0FBb0M7c0NBQUMsK0pBRWxEOzs7OztnQ0FBSTtzQ0FDSiw4REFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLDRCQUE0Qjs7OENBQ3ZDLDhEQUFDQyxHQUFDO29DQUFDRCxTQUFTLEVBQUMsc0NBQXNDOzhDQUFDLFNBQU87Ozs7O3dDQUFJOzhDQUMvRCw4REFBQ0MsR0FBQztvQ0FBQ0QsU0FBUyxFQUFDLHlGQUF5Rjs4Q0FBQyxLQUFHOzs7Ozt3Q0FBSTs7Ozs7O2dDQUM1RztzQ0FDTiw4REFBQ0MsR0FBQzs0QkFBQ0QsU0FBUyxFQUFDLGlEQUFpRDtzQ0FBQyxTQUFPOzs7OztnQ0FBSTtzQ0FFMUUsOERBQUNELEtBQUc7NEJBQUNDLFNBQVMsRUFBQyx5REFBeUQ7OzhDQUNwRSw4REFBQ0QsS0FBRztvQ0FBQ0MsU0FBUyxFQUFDLDhDQUE4Qzs7c0RBQ3pELDhEQUFDRCxLQUFHOzRDQUFDSSxPQUFPLEVBQUU7dURBQU0sTUFBS0MscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7NkNBQUE7NENBQUVKLFNBQVMsRUFBQywrSkFBK0o7c0RBQUMsR0FBQzs7Ozs7Z0RBQU07c0RBQ3JPLDhEQUFDSyxPQUFLOzRDQUFDQyxJQUFJLEVBQUMsTUFBTTs0Q0FBQ04sU0FBUyxFQUFDLHNIQUFzSDs0Q0FBQ08sS0FBSyxFQUFFLElBQUksQ0FBQ0MsS0FBSyxDQUFDWixlQUFlOzs7OztnREFBSTtzREFDekwsOERBQUNHLEtBQUc7NENBQUNJLE9BQU8sRUFBRTt1REFBTSxNQUFLQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7NkNBQUE7NENBQUVKLFNBQVMsRUFBQywrSkFBK0o7c0RBQUMsR0FBQzs7Ozs7Z0RBQU07Ozs7Ozt3Q0FDbE87OENBQ04sOERBQUNTLFFBQU07b0NBQUNULFNBQVMsRUFBQyw2SkFBNko7OENBQUMsYUFFaEw7Ozs7O3dDQUFTOzs7Ozs7Z0NBQ1A7Ozs7Ozt3QkFDSixDQUNUO2FBQ0o7Ozs7Q0FDSixDQWxDd0NULHdEQUFlLENBa0N2RDtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZHVjdERhdGEuanM/NzFmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdERhdGEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICAgICAgY29uc3RbcHJvZHVjdFF1YW50aXR5LCBzZXRQcm9kdWN0UXVhbnRpdHldID0gUmVhY3QudXNlU3RhdGUoMClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGgtaW5pdGlhbCBweC1bN3JlbV0gbXQtMjAgc3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC1wcmltYXJ5T3JhbmdlIHRyYWNraW5nLVsxcHhdIHRleHQtWzAuNzVyZW1dIGZvbnQtYm9sZFwiPlNORUFLRVIgQ09NUEFOWTwvcD5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXZlcnlWYXJrQmx1ZSB0ZXh0LVsyLjM1cmVtXSBsZWFkaW5nLTEwIGZvbnQtYm9sZFwiPkZhbGwgTGltaXRlZCBFZGl0aW9uIFNuZWFrZXJzPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB0LTUgcGItMiB0ZXh0LXNtIHRleHQtZ3JheWlzaEJsdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICBUaGVzZSBsb3ctcHJvZmlsZSBzbmVha2VycyBhcmUgeW91ciBwZXJmZWN0ZSBjYXN1YWwgd2VhciBjb21wYW5pb24uIEZlYXR1cmluZyBhIGR1cmFibGUgcnViYmVyIG91dGVyIHNvbGUsIHRoZXknbGwgd2hpc3RhbmQgZXZlcnl0aGluZyB0aGUgd2VhdGhlciBjYW4gb2ZmZXIuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtdmVyeVZhcmtCbHVlXCI+JDEyNS4wMDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlPcmFuZ2UgZm9udC1ib2xkIHRleHQtc20gYmctcHJpbWFyeVBhbGVPcmFuZ2UgcC1bMC4xNXJlbV0gcHgtMiByb3VuZGVkIG1sLTRcIj41MCU8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5aXNoQmx1ZSBsaW5lLXRocm91Z2ggZm9udC1ib2xkXCI+JDI1MC4wMDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgc3BhY2UteC00IHB5LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgYmctbGlnaHRHcmF5aXNoQmx1ZSByb3VuZGVkLXhsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVQcm9kdWN0UXVhbnRpdHkoLTEpfSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlPcmFuZ2UgZm9udC1ib2xkIHRleHQtM3hsIHctMTQgdGV4dC1jZW50ZXIgbGVhZGluZy05IHB0LTIgcGItNCBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWwteGwgaG92ZXI6YmctcHJpbWFyeU9yYW5nZSB0cmFuc2l0aW9uLWFsbCBob3Zlcjp0ZXh0LXdoaXRlXCI+LTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudCBvdXRsaW5lLW5vbmUgdGV4dC1jZW50ZXIgZm9udC1ib2xkIHRleHQtYmxhY2sgdy0xNiBob3ZlcjpiZy1ncmF5LTEwMCBmb2N1czpiZy1ncmF5LTIwMCB0cmFuc2l0aW9uLWFsbFwiIHZhbHVlPXt0aGlzLnN0YXRlLnByb2R1Y3RRdWFudGl0eX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVByb2R1Y3RRdWFudGl0eSgxKX0gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5T3JhbmdlIGZvbnQtYm9sZCB0ZXh0LTN4bCB3LTE0IHRleHQtY2VudGVyIGxlYWRpbmctOSBwdC0yIHBiLTQgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1yLXhsIGhvdmVyOmJnLXByaW1hcnlPcmFuZ2UgdHJhbnNpdGlvbi1hbGwgaG92ZXI6dGV4dC13aGl0ZVwiPis8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXByaW1hcnlPcmFuZ2UgZ3JvdyBtYXgtdy1bMjByZW1dIHRleHQtd2hpdGUgcHktNCByb3VuZGVkLXhsIHNoYWRvdy0yeGwgc2hhZG93LXByaW1hcnlOb3RUb011Y2hPcmFuZ2UgZm9udC1ib2xkIGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZCB0byBjYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIlByb2R1Y3REYXRhIiwicHJvcHMiLCJwcm9kdWN0UXVhbnRpdHkiLCJzZXRQcm9kdWN0UXVhbnRpdHkiLCJyZW5kZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiaDEiLCJvbkNsaWNrIiwiaGFuZGxlUHJvZHVjdFF1YW50aXR5IiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJzdGF0ZSIsImJ1dHRvbiIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductData.js\n");

/***/ })

});