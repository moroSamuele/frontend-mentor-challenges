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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductData; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o1) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o1);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o2, p1) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o2, p1);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\n\n\nvar ProductData = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    _inherits(ProductData, _Component);\n    var _super = _createSuper(ProductData);\n    function ProductData(props1) {\n        _classCallCheck(this, ProductData);\n        var _this;\n        _this = _super.call(this, props1);\n        _defineProperty(_assertThisInitialized(_this), \"handleProductQuantity\", function(props) {\n            _this.setState({\n                previewedProductImage: props.thumbnail.replace(\"-thumbnail\", \"\")\n            });\n        });\n        _this.state = {\n            productQuantity: 0\n        };\n        _this.handleProductQuantity = _this.handleProductQuantity.bind(_assertThisInitialized(_this));\n        return _this;\n    }\n    _createClass(ProductData, [\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col h-initial px-[7rem] mt-20 space-y-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"uppercase text-primaryOrange tracking-[1px] text-[0.75rem] font-bold\",\n                            children: \"SNEAKER COMPANY\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                            lineNumber: 23,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-veryVarkBlue text-[2.35rem] leading-10 font-bold\",\n                            children: \"Fall Limited Edition Sneakers\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                            lineNumber: 24,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"pt-5 pb-2 text-sm text-grayishBlue\",\n                            children: \"These low-profile sneakers are your perfecte casual wear companion. Featuring a durable rubber outer sole, they'll whistand everything the weather can offer.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                            lineNumber: 25,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-2xl font-bold text-veryVarkBlue\",\n                                    children: \"$125.00\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-primaryOrange font-bold text-sm bg-primaryPaleOrange p-[0.15rem] px-2 rounded ml-4\",\n                                    children: \"50%\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                            lineNumber: 28,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-grayishBlue line-through font-bold\",\n                            children: \"$250.00\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                            lineNumber: 32,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center justify-start space-x-4 py-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-row bg-lightGrayishBlue rounded-xl\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: function() {\n                                                return handleProductQuantity(-1);\n                                            },\n                                            className: \"text-primaryOrange font-bold text-3xl w-14 text-center leading-9 pt-2 pb-4 cursor-pointer rounded-l-xl hover:bg-primaryOrange transition-all hover:text-white\",\n                                            children: \"-\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                                            lineNumber: 36,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            className: \"bg-transparent outline-none text-center font-bold text-black w-16 hover:bg-gray-100 focus:bg-gray-200 transition-all\",\n                                            value: \"0\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                                            lineNumber: 37,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: function() {\n                                                return handleProductQuantity(1);\n                                            },\n                                            className: \"text-primaryOrange font-bold text-3xl w-14 text-center leading-9 pt-2 pb-4 cursor-pointer rounded-r-xl hover:bg-primaryOrange transition-all hover:text-white\",\n                                            children: \"+\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                                            lineNumber: 38,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-primaryOrange grow max-w-[20rem] text-white py-4 rounded-xl shadow-2xl shadow-primaryNotToMuchOrange font-bold flex flex-row items-center justify-center\",\n                                    children: \"Add to cart\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                            lineNumber: 34,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                    lineNumber: 22,\n                    columnNumber: 13\n                }, this);\n            }\n        }\n    ]);\n    return ProductData;\n}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3REYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ1Q7QUFHZixlQUFpQixpQkFKNUI7Ozs7YUFJaUJHLFdBQVcsQ0FDaEJDLE1BQUs7OztrQ0FDUEEsTUFBSyxDQU5uQixDQU1vQjtRQVNoQkMsK0NBQUFBLHVCQUFxQixFQUFHLFNBQUNELEtBQUssRUFBSztZQUMvQixNQUFLRSxRQUFRLENBQUM7Z0JBQUNDLHFCQUFxQixFQUFFSCxLQUFLLENBQUNJLFNBQVMsQ0FBQ0MsT0FBTyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUM7YUFBQyxDQUFDO1NBQ3BGO1FBVEcsTUFBS0MsS0FBSyxHQUFHO1lBQ1RDLGVBQWUsRUFBRSxDQUFDO1NBQ3JCO1FBRUQsTUFBS04scUJBQXFCLEdBQUcsTUFBS0EscUJBQXFCLENBQUNPLElBQUksK0JBQU07Ozs7O1lBT3RFQyxHQUFNLEVBQU5BLFFBQU07bUJBQU5BLFNBQUFBLE1BQU0sR0FBRztnQkFDTCxxQkFDSSw4REFBQ0MsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLG1EQUFtRDs7c0NBQzlELDhEQUFDQyxHQUFDOzRCQUFDRCxTQUFTLEVBQUMsc0VBQXNFO3NDQUFDLGlCQUFlOzs7OztnQ0FBSTtzQ0FDdkcsOERBQUNFLElBQUU7NEJBQUNGLFNBQVMsRUFBQyx1REFBdUQ7c0NBQUMsK0JBQTZCOzs7OztnQ0FBSztzQ0FDeEcsOERBQUNDLEdBQUM7NEJBQUNELFNBQVMsRUFBQyxvQ0FBb0M7c0NBQUMsK0pBRWxEOzs7OztnQ0FBSTtzQ0FDSiw4REFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLDRCQUE0Qjs7OENBQ3ZDLDhEQUFDQyxHQUFDO29DQUFDRCxTQUFTLEVBQUMsc0NBQXNDOzhDQUFDLFNBQU87Ozs7O3dDQUFJOzhDQUMvRCw4REFBQ0MsR0FBQztvQ0FBQ0QsU0FBUyxFQUFDLHlGQUF5Rjs4Q0FBQyxLQUFHOzs7Ozt3Q0FBSTs7Ozs7O2dDQUM1RztzQ0FDTiw4REFBQ0MsR0FBQzs0QkFBQ0QsU0FBUyxFQUFDLGlEQUFpRDtzQ0FBQyxTQUFPOzs7OztnQ0FBSTtzQ0FFMUUsOERBQUNELEtBQUc7NEJBQUNDLFNBQVMsRUFBQyx5REFBeUQ7OzhDQUNwRSw4REFBQ0QsS0FBRztvQ0FBQ0MsU0FBUyxFQUFDLDhDQUE4Qzs7c0RBQ3pELDhEQUFDRCxLQUFHOzRDQUFDSSxPQUFPLEVBQUU7dURBQU1iLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDOzZDQUFBOzRDQUFFVSxTQUFTLEVBQUMsK0pBQStKO3NEQUFDLEdBQUM7Ozs7O2dEQUFNO3NEQUNoTyw4REFBQ0ksT0FBSzs0Q0FBQ0MsSUFBSSxFQUFDLE1BQU07NENBQUNMLFNBQVMsRUFBQyxzSEFBc0g7NENBQUNNLEtBQUssRUFBQyxHQUFHOzs7OztnREFBRztzREFDaEssOERBQUNQLEtBQUc7NENBQUNJLE9BQU8sRUFBRTt1REFBTWIscUJBQXFCLENBQUMsQ0FBQyxDQUFDOzZDQUFBOzRDQUFFVSxTQUFTLEVBQUMsK0pBQStKO3NEQUFDLEdBQUM7Ozs7O2dEQUFNOzs7Ozs7d0NBQzdOOzhDQUNOLDhEQUFDTyxRQUFNO29DQUFDUCxTQUFTLEVBQUMsNkpBQTZKOzhDQUFDLGFBRWhMOzs7Ozt3Q0FBUzs7Ozs7O2dDQUNQOzs7Ozs7d0JBQ0osQ0FDVDthQUNKOzs7O0NBQ0osQ0ExQ3dDZix3REFBZSxDQTBDdkQ7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2R1Y3REYXRhLmpzPzcxZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3REYXRhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RRdWFudGl0eTogMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVQcm9kdWN0UXVhbnRpdHkgPSB0aGlzLmhhbmRsZVByb2R1Y3RRdWFudGl0eS5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUHJvZHVjdFF1YW50aXR5ID0gKHByb3BzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cHJldmlld2VkUHJvZHVjdEltYWdlOiBwcm9wcy50aHVtYm5haWwucmVwbGFjZSgnLXRodW1ibmFpbCcsICcnKX0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBoLWluaXRpYWwgcHgtWzdyZW1dIG10LTIwIHNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtcHJpbWFyeU9yYW5nZSB0cmFja2luZy1bMXB4XSB0ZXh0LVswLjc1cmVtXSBmb250LWJvbGRcIj5TTkVBS0VSIENPTVBBTlk8L3A+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC12ZXJ5VmFya0JsdWUgdGV4dC1bMi4zNXJlbV0gbGVhZGluZy0xMCBmb250LWJvbGRcIj5GYWxsIExpbWl0ZWQgRWRpdGlvbiBTbmVha2VyczwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwdC01IHBiLTIgdGV4dC1zbSB0ZXh0LWdyYXlpc2hCbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVGhlc2UgbG93LXByb2ZpbGUgc25lYWtlcnMgYXJlIHlvdXIgcGVyZmVjdGUgY2FzdWFsIHdlYXIgY29tcGFuaW9uLiBGZWF0dXJpbmcgYSBkdXJhYmxlIHJ1YmJlciBvdXRlciBzb2xlLCB0aGV5J2xsIHdoaXN0YW5kIGV2ZXJ5dGhpbmcgdGhlIHdlYXRoZXIgY2FuIG9mZmVyLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LXZlcnlWYXJrQmx1ZVwiPiQxMjUuMDA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5T3JhbmdlIGZvbnQtYm9sZCB0ZXh0LXNtIGJnLXByaW1hcnlQYWxlT3JhbmdlIHAtWzAuMTVyZW1dIHB4LTIgcm91bmRlZCBtbC00XCI+NTAlPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheWlzaEJsdWUgbGluZS10aHJvdWdoIGZvbnQtYm9sZFwiPiQyNTAuMDA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0IHNwYWNlLXgtNCBweS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGJnLWxpZ2h0R3JheWlzaEJsdWUgcm91bmRlZC14bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGhhbmRsZVByb2R1Y3RRdWFudGl0eSgtMSl9IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeU9yYW5nZSBmb250LWJvbGQgdGV4dC0zeGwgdy0xNCB0ZXh0LWNlbnRlciBsZWFkaW5nLTkgcHQtMiBwYi00IGN1cnNvci1wb2ludGVyIHJvdW5kZWQtbC14bCBob3ZlcjpiZy1wcmltYXJ5T3JhbmdlIHRyYW5zaXRpb24tYWxsIGhvdmVyOnRleHQtd2hpdGVcIj4tPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50IG91dGxpbmUtbm9uZSB0ZXh0LWNlbnRlciBmb250LWJvbGQgdGV4dC1ibGFjayB3LTE2IGhvdmVyOmJnLWdyYXktMTAwIGZvY3VzOmJnLWdyYXktMjAwIHRyYW5zaXRpb24tYWxsXCIgdmFsdWU9XCIwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQcm9kdWN0UXVhbnRpdHkoMSl9IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeU9yYW5nZSBmb250LWJvbGQgdGV4dC0zeGwgdy0xNCB0ZXh0LWNlbnRlciBsZWFkaW5nLTkgcHQtMiBwYi00IGN1cnNvci1wb2ludGVyIHJvdW5kZWQtci14bCBob3ZlcjpiZy1wcmltYXJ5T3JhbmdlIHRyYW5zaXRpb24tYWxsIGhvdmVyOnRleHQtd2hpdGVcIj4rPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1wcmltYXJ5T3JhbmdlIGdyb3cgbWF4LXctWzIwcmVtXSB0ZXh0LXdoaXRlIHB5LTQgcm91bmRlZC14bCBzaGFkb3ctMnhsIHNoYWRvdy1wcmltYXJ5Tm90VG9NdWNoT3JhbmdlIGZvbnQtYm9sZCBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGQgdG8gY2FydFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJQcm9kdWN0RGF0YSIsInByb3BzIiwiaGFuZGxlUHJvZHVjdFF1YW50aXR5Iiwic2V0U3RhdGUiLCJwcmV2aWV3ZWRQcm9kdWN0SW1hZ2UiLCJ0aHVtYm5haWwiLCJyZXBsYWNlIiwic3RhdGUiLCJwcm9kdWN0UXVhbnRpdHkiLCJiaW5kIiwicmVuZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImgxIiwib25DbGljayIsImlucHV0IiwidHlwZSIsInZhbHVlIiwiYnV0dG9uIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProductData.js\n");

/***/ })

});