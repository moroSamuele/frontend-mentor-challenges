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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductData; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o1) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o1);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o2, p1) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o2, p1);\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar ProductQuantitySwitcher = function() {\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(0), 2), productQuantity = ref[0], setProductQuantity = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row bg-lightGrayishBlue rounded-xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: function() {\n                    if (productQuantity - 1 >= 0) {\n                        setProductQuantity(productQuantity - 1);\n                    } else {\n                        setProductQuantity(productQuantity);\n                    }\n                },\n                className: \"text-primaryOrange select-none font-bold text-3xl w-14 text-center leading-9 pt-2 pb-4 cursor-pointer rounded-l-xl hover:bg-primaryOrange transition-all hover:text-white\",\n                children: \"-\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                className: \"bg-transparent outline-none text-center font-bold text-black w-16 hover:bg-gray-100 focus:bg-gray-200 px-1 transition-all\",\n                value: productQuantity\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: function() {\n                    return setProductQuantity(productQuantity + 1);\n                },\n                className: \"text-primaryOrange font-bold select-none text-3xl w-14 text-center leading-9 pt-2 pb-4 cursor-pointer rounded-r-xl hover:bg-primaryOrange transition-all hover:text-white\",\n                children: \"+\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, _this);\n};\n_s(ProductQuantitySwitcher, \"SLGdyhgHo4ZTFLb69Jw/wUrsT9E=\");\n_c = ProductQuantitySwitcher;\nvar ProductData = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    _inherits(ProductData, _Component);\n    var _super = _createSuper(ProductData);\n    function ProductData(props) {\n        _classCallCheck(this, ProductData);\n        return _super.call(this, props);\n    }\n    _createClass(ProductData, [\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-black/[0.75] absolute w-full h-full z-50 top-0 left-0 right-0 bottom-0\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                            lineNumber: 31,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col h-initial px-[7rem] mt-20 space-y-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"uppercase text-primaryOrange tracking-[1px] text-[0.75rem] font-bold\",\n                                    children: \"SNEAKER COMPANY\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-veryVarkBlue text-[2.35rem] leading-10 font-bold\",\n                                    children: \"Fall Limited Edition Sneakers\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"pt-5 pb-2 text-sm text-grayishBlue\",\n                                    children: \"These low-profile sneakers are your perfecte casual wear companion. Featuring a durable rubber outer sole, they'll whistand everything the weather can offer.\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-row items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-2xl font-bold text-veryVarkBlue\",\n                                            children: \"$125.00\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                                            lineNumber: 41,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-primaryOrange font-bold text-sm bg-primaryPaleOrange p-[0.15rem] px-2 rounded ml-4\",\n                                            children: \"50%\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                                            lineNumber: 42,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-grayishBlue line-through font-bold\",\n                                    children: \"$250.00\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-row items-center justify-start space-x-4 py-3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductQuantitySwitcher, {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"bg-primaryOrange grow max-w-[20rem] text-white py-4 rounded-xl shadow-2xl shadow-primaryNotToMuchOrange font-bold flex flex-row items-center justify-center\",\n                                            children: \"Add to cart\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductData.js\",\n                            lineNumber: 34,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true);\n            }\n        }\n    ]);\n    return ProductData;\n}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));\n\nvar _c;\n$RefreshReg$(_c, \"ProductQuantitySwitcher\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3REYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNUOztBQUc5QixJQUFNRyx1QkFBdUIsR0FBRyxXQUFNOztJQUNsQyxJQUE2Q0gsR0FBaUIsa0JBQWpCQSxxREFBYyxDQUFDLENBQUMsQ0FBQyxNQUF4REksZUFBZSxHQUF3QkosR0FBaUIsR0FBekMsRUFBRUssa0JBQWtCLEdBQUlMLEdBQWlCLEdBQXJCO0lBRXpDLHFCQUNJLDhEQUFDTSxLQUFHO1FBQUNDLFNBQVMsRUFBQyw4Q0FBOEM7OzBCQUN6RCw4REFBQ0QsS0FBRztnQkFBQ0UsT0FBTyxFQUFFLFdBQU07b0JBQ2hCLElBQUtKLGVBQWUsR0FBQyxDQUFDLElBQUUsQ0FBQyxFQUFHO3dCQUN4QkMsa0JBQWtCLENBQUNELGVBQWUsR0FBQyxDQUFDLENBQUM7cUJBQ3hDLE1BQU07d0JBQ0hDLGtCQUFrQixDQUFDRCxlQUFlLENBQUM7cUJBQ3RDO2lCQUNBO2dCQUFFRyxTQUFTLEVBQUMsMktBQTJLOzBCQUFDLEdBQUM7Ozs7O3FCQUFNOzBCQUNwTSw4REFBQ0UsT0FBSztnQkFBQ0MsSUFBSSxFQUFDLFFBQVE7Z0JBQUNILFNBQVMsRUFBQywySEFBMkg7Z0JBQUNJLEtBQUssRUFBRVAsZUFBZTs7Ozs7cUJBQUk7MEJBQ3JMLDhEQUFDRSxLQUFHO2dCQUFDRSxPQUFPLEVBQUU7MkJBQU1ILGtCQUFrQixDQUFDRCxlQUFlLEdBQUMsQ0FBQyxDQUFDO2lCQUFBO2dCQUFFRyxTQUFTLEVBQUMsMktBQTJLOzBCQUFDLEdBQUM7Ozs7O3FCQUFNOzs7Ozs7YUFDdFAsQ0FDVDtDQUNKO0dBaEJLSix1QkFBdUI7QUFBdkJBLEtBQUFBLHVCQUF1QjtBQWtCZCxlQUFpQixpQkF0QjVCOzs7O2FBc0JpQlMsV0FBVyxDQUNoQkMsS0FBSzs7aUNBQ1BBLEtBQUs7Ozs7WUFHZkMsR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLEdBQUc7Z0JBQ0wscUJBQ0k7O3NDQUNJLDhEQUFDUixLQUFHOzRCQUFDQyxTQUFTLEVBQUMsMkVBQTJFOzs7OztnQ0FFcEY7c0NBQ04sOERBQUNELEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxtREFBbUQ7OzhDQUM5RCw4REFBQ1EsR0FBQztvQ0FBQ1IsU0FBUyxFQUFDLHNFQUFzRTs4Q0FBQyxpQkFBZTs7Ozs7d0NBQUk7OENBQ3ZHLDhEQUFDUyxJQUFFO29DQUFDVCxTQUFTLEVBQUMsdURBQXVEOzhDQUFDLCtCQUE2Qjs7Ozs7d0NBQUs7OENBQ3hHLDhEQUFDUSxHQUFDO29DQUFDUixTQUFTLEVBQUMsb0NBQW9DOzhDQUFDLCtKQUVsRDs7Ozs7d0NBQUk7OENBQ0osOERBQUNELEtBQUc7b0NBQUNDLFNBQVMsRUFBQyw0QkFBNEI7O3NEQUN2Qyw4REFBQ1EsR0FBQzs0Q0FBQ1IsU0FBUyxFQUFDLHNDQUFzQztzREFBQyxTQUFPOzs7OztnREFBSTtzREFDL0QsOERBQUNRLEdBQUM7NENBQUNSLFNBQVMsRUFBQyx5RkFBeUY7c0RBQUMsS0FBRzs7Ozs7Z0RBQUk7Ozs7Ozt3Q0FDNUc7OENBQ04sOERBQUNRLEdBQUM7b0NBQUNSLFNBQVMsRUFBQyxpREFBaUQ7OENBQUMsU0FBTzs7Ozs7d0NBQUk7OENBRTFFLDhEQUFDRCxLQUFHO29DQUFDQyxTQUFTLEVBQUMseURBQXlEOztzREFDcEUsOERBQUNKLHVCQUF1Qjs7OztnREFBRztzREFDM0IsOERBQUNjLFFBQU07NENBQUNWLFNBQVMsRUFBQyw2SkFBNko7c0RBQUMsYUFFaEw7Ozs7O2dEQUFTOzs7Ozs7d0NBQ1A7Ozs7OztnQ0FDSjs7Z0NBQ1AsQ0FDTjthQUNKOzs7O0NBQ0osQ0FqQ3dDUCx3REFBZSxDQWlDdkQ7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2R1Y3REYXRhLmpzPzcxZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuXHJcbmNvbnN0IFByb2R1Y3RRdWFudGl0eVN3aXRjaGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3RbcHJvZHVjdFF1YW50aXR5LCBzZXRQcm9kdWN0UXVhbnRpdHldID0gUmVhY3QudXNlU3RhdGUoMClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBiZy1saWdodEdyYXlpc2hCbHVlIHJvdW5kZWQteGxcIj5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHByb2R1Y3RRdWFudGl0eS0xPj0wICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFByb2R1Y3RRdWFudGl0eShwcm9kdWN0UXVhbnRpdHktMSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvZHVjdFF1YW50aXR5KHByb2R1Y3RRdWFudGl0eSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeU9yYW5nZSBzZWxlY3Qtbm9uZSBmb250LWJvbGQgdGV4dC0zeGwgdy0xNCB0ZXh0LWNlbnRlciBsZWFkaW5nLTkgcHQtMiBwYi00IGN1cnNvci1wb2ludGVyIHJvdW5kZWQtbC14bCBob3ZlcjpiZy1wcmltYXJ5T3JhbmdlIHRyYW5zaXRpb24tYWxsIGhvdmVyOnRleHQtd2hpdGVcIj4tPC9kaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnQgb3V0bGluZS1ub25lIHRleHQtY2VudGVyIGZvbnQtYm9sZCB0ZXh0LWJsYWNrIHctMTYgaG92ZXI6YmctZ3JheS0xMDAgZm9jdXM6YmctZ3JheS0yMDAgcHgtMSB0cmFuc2l0aW9uLWFsbFwiIHZhbHVlPXtwcm9kdWN0UXVhbnRpdHl9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0UHJvZHVjdFF1YW50aXR5KHByb2R1Y3RRdWFudGl0eSsxKX0gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5T3JhbmdlIGZvbnQtYm9sZCBzZWxlY3Qtbm9uZSB0ZXh0LTN4bCB3LTE0IHRleHQtY2VudGVyIGxlYWRpbmctOSBwdC0yIHBiLTQgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1yLXhsIGhvdmVyOmJnLXByaW1hcnlPcmFuZ2UgdHJhbnNpdGlvbi1hbGwgaG92ZXI6dGV4dC13aGl0ZVwiPis8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdERhdGEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2svWzAuNzVdIGFic29sdXRlIHctZnVsbCBoLWZ1bGwgei01MCB0b3AtMCBsZWZ0LTAgcmlnaHQtMCBib3R0b20tMFwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGgtaW5pdGlhbCBweC1bN3JlbV0gbXQtMjAgc3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtcHJpbWFyeU9yYW5nZSB0cmFja2luZy1bMXB4XSB0ZXh0LVswLjc1cmVtXSBmb250LWJvbGRcIj5TTkVBS0VSIENPTVBBTlk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtdmVyeVZhcmtCbHVlIHRleHQtWzIuMzVyZW1dIGxlYWRpbmctMTAgZm9udC1ib2xkXCI+RmFsbCBMaW1pdGVkIEVkaXRpb24gU25lYWtlcnM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB0LTUgcGItMiB0ZXh0LXNtIHRleHQtZ3JheWlzaEJsdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhlc2UgbG93LXByb2ZpbGUgc25lYWtlcnMgYXJlIHlvdXIgcGVyZmVjdGUgY2FzdWFsIHdlYXIgY29tcGFuaW9uLiBGZWF0dXJpbmcgYSBkdXJhYmxlIHJ1YmJlciBvdXRlciBzb2xlLCB0aGV5J2xsIHdoaXN0YW5kIGV2ZXJ5dGhpbmcgdGhlIHdlYXRoZXIgY2FuIG9mZmVyLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LXZlcnlWYXJrQmx1ZVwiPiQxMjUuMDA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeU9yYW5nZSBmb250LWJvbGQgdGV4dC1zbSBiZy1wcmltYXJ5UGFsZU9yYW5nZSBwLVswLjE1cmVtXSBweC0yIHJvdW5kZWQgbWwtNFwiPjUwJTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheWlzaEJsdWUgbGluZS10aHJvdWdoIGZvbnQtYm9sZFwiPiQyNTAuMDA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCBzcGFjZS14LTQgcHktM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdFF1YW50aXR5U3dpdGNoZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1wcmltYXJ5T3JhbmdlIGdyb3cgbWF4LXctWzIwcmVtXSB0ZXh0LXdoaXRlIHB5LTQgcm91bmRlZC14bCBzaGFkb3ctMnhsIHNoYWRvdy1wcmltYXJ5Tm90VG9NdWNoT3JhbmdlIGZvbnQtYm9sZCBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIHRvIGNhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIlByb2R1Y3RRdWFudGl0eVN3aXRjaGVyIiwicHJvZHVjdFF1YW50aXR5Iiwic2V0UHJvZHVjdFF1YW50aXR5IiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImlucHV0IiwidHlwZSIsInZhbHVlIiwiUHJvZHVjdERhdGEiLCJwcm9wcyIsInJlbmRlciIsInAiLCJoMSIsImJ1dHRvbiIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductData.js\n");

/***/ })

});