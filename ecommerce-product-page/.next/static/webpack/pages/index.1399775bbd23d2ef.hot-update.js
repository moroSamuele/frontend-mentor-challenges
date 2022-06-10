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

/***/ "./components/ProductSlider.js":
/*!*************************************!*\
  !*** ./components/ProductSlider.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o1) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o1);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o2, p1) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o2, p1);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\n\n\n\nvar Header = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    _inherits(Header, _Component);\n    var _super = _createSuper(Header);\n    function Header(props1) {\n        _classCallCheck(this, Header);\n        var _this;\n        _this = _super.call(this, props1);\n        _defineProperty(_assertThisInitialized(_this), \"ProductPreviewSlider\", function(productToView) {\n            _this.setState({\n                showProductPreviewSlider: true,\n                sliderProductToView: productToView\n            });\n        });\n        _defineProperty(_assertThisInitialized(_this), \"ProductThumbnail\", function(props) {\n            var isActiveThumb = props.thumbnail === _this.state.previewedProductImage.replace(\".jpg\", \"-thumbnail.jpg\") ? \"border-primaryOrange\" : \"border-transparent\";\n            var isActiveThumbOpacity = props.thumbnail === _this.state.previewedProductImage.replace(\".jpg\", \"-thumbnail.jpg\") ? \"opacity-75\" : \"opacity-0\";\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: function() {\n                    return _this.changeProductPreview(props);\n                },\n                className: \"group relative h-auto w-full border-[2px] rounded-[0.85rem] overflow-hidden transition-all cursor-pointer \" + isActiveThumb,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"group-hover:opacity-75 w-full h-full z-10 transition-all absolute \" + isActiveThumbOpacity + \" bg-white\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, _assertThisInitialized(_this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: \"/images/products/\" + props.thumbnail,\n                        layout: \"responsive\",\n                        objectFit: \"contain\",\n                        width: \"0\",\n                        height: \"0\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, _assertThisInitialized(_this))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, _assertThisInitialized(_this));\n        });\n        _defineProperty(_assertThisInitialized(_this), \"changeProductPreview\", function(props) {\n            _this.setState({\n                previewedProductImage: props.thumbnail.replace(\"-thumbnail\", \"\")\n            });\n        });\n        _this.state = {\n            previewedProductImage: \"image-product-1.jpg\",\n            showProductPreviewSlider: false,\n            sliderProductToView: \"\"\n        };\n        _this.changeProductPreview = _this.changeProductPreview.bind(_assertThisInitialized(_this));\n        return _this;\n    }\n    _createClass(Header, [\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        this.state.showProductPreviewSlider ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-black/[0.75] absolute w-full h-full z-50 top-0 left-0 right-0 bottom-0\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"max-w-[34rem] w-full h-full mx-auto flex flex-col justify-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-initial h-auto relative\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            src: \"/images/products/\" + this.state.sliderProductToView,\n                                            layout: \"responsive\",\n                                            objectFit: \"contain\",\n                                            width: \"0\",\n                                            height: \"0\",\n                                            className: \"rounded-2xl\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"grid grid-cols-4 gap-6 mt-8\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(this.ProductThumbnail, {\n                                                thumbnail: \"image-product-1-thumbnail.jpg\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                                                lineNumber: 67,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(this.ProductThumbnail, {\n                                                thumbnail: \"image-product-2-thumbnail.jpg\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                                                lineNumber: 68,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(this.ProductThumbnail, {\n                                                thumbnail: \"image-product-3-thumbnail.jpg\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                                                lineNumber: 69,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(this.ProductThumbnail, {\n                                                thumbnail: \"image-product-4-thumbnail.jpg\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                                                lineNumber: 70,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                                lineNumber: 55,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                            lineNumber: 54,\n                            columnNumber: 21\n                        }, this) : null,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col min-w-[38%] max-w-[38%] h-initial\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-initial h-auto relative\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        src: \"/images/products/\" + this.state.previewedProductImage,\n                                        layout: \"responsive\",\n                                        objectFit: \"contain\",\n                                        width: \"0\",\n                                        height: \"0\",\n                                        className: \"rounded-2xl cursor-pointer\",\n                                        onClick: function() {\n                                            return _this.ProductPreviewSlider(_this.state.previewedProductImage);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 25\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"grid grid-cols-4 gap-6 mt-8\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(this.ProductThumbnail, {\n                                            thumbnail: \"image-product-1-thumbnail.jpg\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                                            lineNumber: 89,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(this.ProductThumbnail, {\n                                            thumbnail: \"image-product-2-thumbnail.jpg\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                                            lineNumber: 90,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(this.ProductThumbnail, {\n                                            thumbnail: \"image-product-3-thumbnail.jpg\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                                            lineNumber: 91,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(this.ProductThumbnail, {\n                                            thumbnail: \"image-product-4-thumbnail.jpg\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                                            lineNumber: 92,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                            lineNumber: 75,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true);\n            }\n        }\n    ]);\n    return Header;\n}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNsQixnQkFBZ0I7NENBQUNFLFNBQVMsRUFBQywrQkFBK0I7Ozs7O2dEQUFHO3NEQUNuRSw4REFBQ2dCLElBQUksQ0FBQ2xCLGdCQUFnQjs0Q0FBQ0UsU0FBUyxFQUFDLCtCQUErQjs7Ozs7Z0RBQUc7c0RBQ25FLDhEQUFDZ0IsSUFBSSxDQUFDbEIsZ0JBQWdCOzRDQUFDRSxTQUFTLEVBQUMsK0JBQStCOzs7OztnREFBRzs7Ozs7O3dDQUNqRTs7Ozs7O2dDQUNKOztnQ0FDUCxDQUNOO2FBQ0o7Ozs7Q0FDSixDQTVGbUNiLHdEQUFlLENBNEZsRDtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZHVjdFNsaWRlci5qcz8wNDg0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBwcmV2aWV3ZWRQcm9kdWN0SW1hZ2U6ICdpbWFnZS1wcm9kdWN0LTEuanBnJyxcclxuICAgICAgICAgICAgc2hvd1Byb2R1Y3RQcmV2aWV3U2xpZGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgc2xpZGVyUHJvZHVjdFRvVmlldzogJydcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbmdlUHJvZHVjdFByZXZpZXcgPSB0aGlzLmNoYW5nZVByb2R1Y3RQcmV2aWV3LmJpbmQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBQcm9kdWN0UHJldmlld1NsaWRlciA9IChwcm9kdWN0VG9WaWV3KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNob3dQcm9kdWN0UHJldmlld1NsaWRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgc2xpZGVyUHJvZHVjdFRvVmlldzogcHJvZHVjdFRvVmlld1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgUHJvZHVjdFRodW1ibmFpbCA9IChwcm9wcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzQWN0aXZlVGh1bWIgPSBwcm9wcy50aHVtYm5haWwgPT09IHRoaXMuc3RhdGUucHJldmlld2VkUHJvZHVjdEltYWdlLnJlcGxhY2UoJy5qcGcnLCAnLXRodW1ibmFpbC5qcGcnKSA/XHJcbiAgICAgICAgICAgIFwiYm9yZGVyLXByaW1hcnlPcmFuZ2VcIiA6IFwiYm9yZGVyLXRyYW5zcGFyZW50XCJcclxuICAgICAgICBjb25zdCBpc0FjdGl2ZVRodW1iT3BhY2l0eSA9IHByb3BzLnRodW1ibmFpbCA9PT0gdGhpcy5zdGF0ZS5wcmV2aWV3ZWRQcm9kdWN0SW1hZ2UucmVwbGFjZSgnLmpwZycsICctdGh1bWJuYWlsLmpwZycpID9cclxuICAgICAgICAgICAgXCJvcGFjaXR5LTc1XCIgOiBcIm9wYWNpdHktMFwiXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gdGhpcy5jaGFuZ2VQcm9kdWN0UHJldmlldyhwcm9wcyl9IGNsYXNzTmFtZT17XCJncm91cCByZWxhdGl2ZSBoLWF1dG8gdy1mdWxsIGJvcmRlci1bMnB4XSByb3VuZGVkLVswLjg1cmVtXSBvdmVyZmxvdy1oaWRkZW4gdHJhbnNpdGlvbi1hbGwgY3Vyc29yLXBvaW50ZXIgXCIgKyBpc0FjdGl2ZVRodW1ifT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImdyb3VwLWhvdmVyOm9wYWNpdHktNzUgdy1mdWxsIGgtZnVsbCB6LTEwIHRyYW5zaXRpb24tYWxsIGFic29sdXRlIFwiICsgaXNBY3RpdmVUaHVtYk9wYWNpdHkgKyBcIiBiZy13aGl0ZVwifT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17XCIvaW1hZ2VzL3Byb2R1Y3RzL1wiICsgcHJvcHMudGh1bWJuYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlUHJvZHVjdFByZXZpZXcgPSAocHJvcHMpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtwcmV2aWV3ZWRQcm9kdWN0SW1hZ2U6IHByb3BzLnRodW1ibmFpbC5yZXBsYWNlKCctdGh1bWJuYWlsJywgJycpfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5zaG93UHJvZHVjdFByZXZpZXdTbGlkZXIgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2svWzAuNzVdIGFic29sdXRlIHctZnVsbCBoLWZ1bGwgei01MCB0b3AtMCBsZWZ0LTAgcmlnaHQtMCBib3R0b20tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LVszNHJlbV0gdy1mdWxsIGgtZnVsbCBteC1hdXRvIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1pbml0aWFsIGgtYXV0byByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2ltYWdlcy9wcm9kdWN0cy9cIiArIHRoaXMuc3RhdGUuc2xpZGVyUHJvZHVjdFRvVmlld31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC0yeGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBnYXAtNiBtdC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoaXMuUHJvZHVjdFRodW1ibmFpbCB0aHVtYm5haWw9XCJpbWFnZS1wcm9kdWN0LTEtdGh1bWJuYWlsLmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoaXMuUHJvZHVjdFRodW1ibmFpbCB0aHVtYm5haWw9XCJpbWFnZS1wcm9kdWN0LTItdGh1bWJuYWlsLmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoaXMuUHJvZHVjdFRodW1ibmFpbCB0aHVtYm5haWw9XCJpbWFnZS1wcm9kdWN0LTMtdGh1bWJuYWlsLmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoaXMuUHJvZHVjdFRodW1ibmFpbCB0aHVtYm5haWw9XCJpbWFnZS1wcm9kdWN0LTQtdGh1bWJuYWlsLmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1pbi13LVszOCVdIG1heC13LVszOCVdIGgtaW5pdGlhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1pbml0aWFsIGgtYXV0byByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XCIvaW1hZ2VzL3Byb2R1Y3RzL1wiICsgdGhpcy5zdGF0ZS5wcmV2aWV3ZWRQcm9kdWN0SW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5Qcm9kdWN0UHJldmlld1NsaWRlcih0aGlzLnN0YXRlLnByZXZpZXdlZFByb2R1Y3RJbWFnZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBnYXAtNiBtdC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGlzLlByb2R1Y3RUaHVtYm5haWwgdGh1bWJuYWlsPVwiaW1hZ2UtcHJvZHVjdC0xLXRodW1ibmFpbC5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhpcy5Qcm9kdWN0VGh1bWJuYWlsIHRodW1ibmFpbD1cImltYWdlLXByb2R1Y3QtMi10aHVtYm5haWwuanBnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoaXMuUHJvZHVjdFRodW1ibmFpbCB0aHVtYm5haWw9XCJpbWFnZS1wcm9kdWN0LTMtdGh1bWJuYWlsLmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGlzLlByb2R1Y3RUaHVtYm5haWwgdGh1bWJuYWlsPVwiaW1hZ2UtcHJvZHVjdC00LXRodW1ibmFpbC5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsIkltYWdlIiwiSGVhZGVyIiwicHJvcHMiLCJQcm9kdWN0UHJldmlld1NsaWRlciIsInByb2R1Y3RUb1ZpZXciLCJzZXRTdGF0ZSIsInNob3dQcm9kdWN0UHJldmlld1NsaWRlciIsInNsaWRlclByb2R1Y3RUb1ZpZXciLCJQcm9kdWN0VGh1bWJuYWlsIiwiaXNBY3RpdmVUaHVtYiIsInRodW1ibmFpbCIsInN0YXRlIiwicHJldmlld2VkUHJvZHVjdEltYWdlIiwicmVwbGFjZSIsImlzQWN0aXZlVGh1bWJPcGFjaXR5IiwiZGl2Iiwib25DbGljayIsImNoYW5nZVByb2R1Y3RQcmV2aWV3IiwiY2xhc3NOYW1lIiwic3JjIiwibGF5b3V0Iiwib2JqZWN0Rml0Iiwid2lkdGgiLCJoZWlnaHQiLCJiaW5kIiwicmVuZGVyIiwidGhpcyIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductSlider.js\n");

/***/ })

});