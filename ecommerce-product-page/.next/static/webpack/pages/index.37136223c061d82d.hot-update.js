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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o1) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o1);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o2, p1) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o2, p1);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\n\n\n\nvar Header = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    _inherits(Header, _Component);\n    var _super = _createSuper(Header);\n    function Header(props1) {\n        _classCallCheck(this, Header);\n        var _this;\n        _this = _super.call(this, props1);\n        _defineProperty(_assertThisInitialized(_this), \"ProductPreviewSlider\", function(productToView) {\n            _this.state = {\n                showProductPreviewSlider: true,\n                sliderProductToView: productToView\n            };\n        });\n        _defineProperty(_assertThisInitialized(_this), \"ProductThumbnail\", function(props) {\n            var isActiveThumb = props.thumbnail === _this.state.previewedProductImage.replace(\".jpg\", \"-thumbnail.jpg\") ? \"border-primaryOrange\" : \"border-transparent\";\n            var isActiveThumbOpacity = props.thumbnail === _this.state.previewedProductImage.replace(\".jpg\", \"-thumbnail.jpg\") ? \"opacity-75\" : \"opacity-0\";\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: function() {\n                    return _this.changeProductPreview(props);\n                },\n                className: \"group relative h-auto w-full border-[2px] rounded-[0.85rem] overflow-hidden transition-all cursor-pointer \" + isActiveThumb,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"group-hover:opacity-75 w-full h-full z-10 transition-all absolute \" + isActiveThumbOpacity + \" bg-white\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, _assertThisInitialized(_this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: \"/images/products/\" + props.thumbnail,\n                        layout: \"responsive\",\n                        objectFit: \"contain\",\n                        width: \"0\",\n                        height: \"0\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, _assertThisInitialized(_this))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, _assertThisInitialized(_this));\n        });\n        _defineProperty(_assertThisInitialized(_this), \"changeProductPreview\", function(props) {\n            _this.setState({\n                previewedProductImage: props.thumbnail.replace(\"-thumbnail\", \"\")\n            });\n        });\n        _this.state = {\n            previewedProductImage: \"image-product-1.jpg\",\n            showProductPreviewSlider: false,\n            sliderProductToView: \"\"\n        };\n        _this.changeProductPreview = _this.changeProductPreview.bind(_assertThisInitialized(_this));\n        return _this;\n    }\n    _createClass(Header, [\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-black/[0.75] absolute w-full h-full z-50 top-0 left-0 right-0 bottom-0\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"max-w-[34rem] w-full h-full mx-auto bg-white flex flex-col justify-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-initial h-auto relative\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            src: \"/images/products/\" + this.state.sliderProductToView,\n                                            layout: \"responsive\",\n                                            objectFit: \"contain\",\n                                            width: \"0\",\n                                            height: \"0\",\n                                            className: \"rounded-2xl\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"grid grid-cols-4 gap-6 mt-8\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(this.ProductThumbnail, {\n                                                thumbnail: \"image-product-1-thumbnail.jpg\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                                                lineNumber: 66,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(this.ProductThumbnail, {\n                                                thumbnail: \"image-product-2-thumbnail.jpg\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                                                lineNumber: 67,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(this.ProductThumbnail, {\n                                                thumbnail: \"image-product-3-thumbnail.jpg\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                                                lineNumber: 68,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(this.ProductThumbnail, {\n                                                thumbnail: \"image-product-4-thumbnail.jpg\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                                                lineNumber: 69,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                                lineNumber: 54,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                            lineNumber: 53,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col min-w-[38%] max-w-[38%] h-initial\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-initial h-auto relative\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        src: \"/images/products/\" + this.state.previewedProductImage,\n                                        layout: \"responsive\",\n                                        objectFit: \"contain\",\n                                        width: \"0\",\n                                        height: \"0\",\n                                        className: \"rounded-2xl\",\n                                        onClick: function() {\n                                            return _this.ProductPreviewSlider(_this.state.previewedProductImage);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 25\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"grid grid-cols-4 gap-6 mt-8\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(this.ProductThumbnail, {\n                                            thumbnail: \"image-product-1-thumbnail.jpg\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                                            lineNumber: 87,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(this.ProductThumbnail, {\n                                            thumbnail: \"image-product-2-thumbnail.jpg\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                                            lineNumber: 88,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(this.ProductThumbnail, {\n                                            thumbnail: \"image-product-3-thumbnail.jpg\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                                            lineNumber: 89,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(this.ProductThumbnail, {\n                                            thumbnail: \"image-product-4-thumbnail.jpg\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                                            lineNumber: 90,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\samuele\\\\Desktop\\\\frontend-mentor-challenges\\\\ecommerce-product-page\\\\components\\\\ProductSlider.js\",\n                            lineNumber: 73,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true);\n            }\n        }\n    ]);\n    return Header;\n}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUNnQixJQUFJLENBQUNsQixnQkFBZ0I7NENBQUNFLFNBQVMsRUFBQywrQkFBK0I7Ozs7O2dEQUFHO3NEQUNuRSw4REFBQ2dCLElBQUksQ0FBQ2xCLGdCQUFnQjs0Q0FBQ0UsU0FBUyxFQUFDLCtCQUErQjs7Ozs7Z0RBQUc7Ozs7Ozt3Q0FDakU7Ozs7OztnQ0FDSjs7Z0NBQ1AsQ0FDTjthQUNKOzs7O0NBQ0osQ0ExRm1DYix3REFBZSxDQTBGbEQ7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2R1Y3RTbGlkZXIuanM/MDQ4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcHJldmlld2VkUHJvZHVjdEltYWdlOiAnaW1hZ2UtcHJvZHVjdC0xLmpwZycsXHJcbiAgICAgICAgICAgIHNob3dQcm9kdWN0UHJldmlld1NsaWRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHNsaWRlclByb2R1Y3RUb1ZpZXc6ICcnXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNoYW5nZVByb2R1Y3RQcmV2aWV3ID0gdGhpcy5jaGFuZ2VQcm9kdWN0UHJldmlldy5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgUHJvZHVjdFByZXZpZXdTbGlkZXIgPSAocHJvZHVjdFRvVmlldykgPT4ge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNob3dQcm9kdWN0UHJldmlld1NsaWRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgc2xpZGVyUHJvZHVjdFRvVmlldzogcHJvZHVjdFRvVmlld1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBQcm9kdWN0VGh1bWJuYWlsID0gKHByb3BzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNBY3RpdmVUaHVtYiA9IHByb3BzLnRodW1ibmFpbCA9PT0gdGhpcy5zdGF0ZS5wcmV2aWV3ZWRQcm9kdWN0SW1hZ2UucmVwbGFjZSgnLmpwZycsICctdGh1bWJuYWlsLmpwZycpID9cclxuICAgICAgICAgICAgXCJib3JkZXItcHJpbWFyeU9yYW5nZVwiIDogXCJib3JkZXItdHJhbnNwYXJlbnRcIlxyXG4gICAgICAgIGNvbnN0IGlzQWN0aXZlVGh1bWJPcGFjaXR5ID0gcHJvcHMudGh1bWJuYWlsID09PSB0aGlzLnN0YXRlLnByZXZpZXdlZFByb2R1Y3RJbWFnZS5yZXBsYWNlKCcuanBnJywgJy10aHVtYm5haWwuanBnJykgP1xyXG4gICAgICAgICAgICBcIm9wYWNpdHktNzVcIiA6IFwib3BhY2l0eS0wXCJcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLmNoYW5nZVByb2R1Y3RQcmV2aWV3KHByb3BzKX0gY2xhc3NOYW1lPXtcImdyb3VwIHJlbGF0aXZlIGgtYXV0byB3LWZ1bGwgYm9yZGVyLVsycHhdIHJvdW5kZWQtWzAuODVyZW1dIG92ZXJmbG93LWhpZGRlbiB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlciBcIiArIGlzQWN0aXZlVGh1bWJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZ3JvdXAtaG92ZXI6b3BhY2l0eS03NSB3LWZ1bGwgaC1mdWxsIHotMTAgdHJhbnNpdGlvbi1hbGwgYWJzb2x1dGUgXCIgKyBpc0FjdGl2ZVRodW1iT3BhY2l0eSArIFwiIGJnLXdoaXRlXCJ9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi9pbWFnZXMvcHJvZHVjdHMvXCIgKyBwcm9wcy50aHVtYm5haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIwXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VQcm9kdWN0UHJldmlldyA9IChwcm9wcykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ByZXZpZXdlZFByb2R1Y3RJbWFnZTogcHJvcHMudGh1bWJuYWlsLnJlcGxhY2UoJy10aHVtYm5haWwnLCAnJyl9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjay9bMC43NV0gYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCB6LTUwIHRvcC0wIGxlZnQtMCByaWdodC0wIGJvdHRvbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1bMzRyZW1dIHctZnVsbCBoLWZ1bGwgbXgtYXV0byBiZy13aGl0ZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1pbml0aWFsIGgtYXV0byByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi9pbWFnZXMvcHJvZHVjdHMvXCIgKyB0aGlzLnN0YXRlLnNsaWRlclByb2R1Y3RUb1ZpZXd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy00IGdhcC02IG10LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGlzLlByb2R1Y3RUaHVtYm5haWwgdGh1bWJuYWlsPVwiaW1hZ2UtcHJvZHVjdC0xLXRodW1ibmFpbC5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoaXMuUHJvZHVjdFRodW1ibmFpbCB0aHVtYm5haWw9XCJpbWFnZS1wcm9kdWN0LTItdGh1bWJuYWlsLmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhpcy5Qcm9kdWN0VGh1bWJuYWlsIHRodW1ibmFpbD1cImltYWdlLXByb2R1Y3QtMy10aHVtYm5haWwuanBnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGlzLlByb2R1Y3RUaHVtYm5haWwgdGh1bWJuYWlsPVwiaW1hZ2UtcHJvZHVjdC00LXRodW1ibmFpbC5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1pbi13LVszOCVdIG1heC13LVszOCVdIGgtaW5pdGlhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1pbml0aWFsIGgtYXV0byByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XCIvaW1hZ2VzL3Byb2R1Y3RzL1wiICsgdGhpcy5zdGF0ZS5wcmV2aWV3ZWRQcm9kdWN0SW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC0yeGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5Qcm9kdWN0UHJldmlld1NsaWRlcih0aGlzLnN0YXRlLnByZXZpZXdlZFByb2R1Y3RJbWFnZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBnYXAtNiBtdC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGlzLlByb2R1Y3RUaHVtYm5haWwgdGh1bWJuYWlsPVwiaW1hZ2UtcHJvZHVjdC0xLXRodW1ibmFpbC5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhpcy5Qcm9kdWN0VGh1bWJuYWlsIHRodW1ibmFpbD1cImltYWdlLXByb2R1Y3QtMi10aHVtYm5haWwuanBnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoaXMuUHJvZHVjdFRodW1ibmFpbCB0aHVtYm5haWw9XCJpbWFnZS1wcm9kdWN0LTMtdGh1bWJuYWlsLmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGlzLlByb2R1Y3RUaHVtYm5haWwgdGh1bWJuYWlsPVwiaW1hZ2UtcHJvZHVjdC00LXRodW1ibmFpbC5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsIkltYWdlIiwiSGVhZGVyIiwicHJvcHMiLCJQcm9kdWN0UHJldmlld1NsaWRlciIsInByb2R1Y3RUb1ZpZXciLCJzdGF0ZSIsInNob3dQcm9kdWN0UHJldmlld1NsaWRlciIsInNsaWRlclByb2R1Y3RUb1ZpZXciLCJQcm9kdWN0VGh1bWJuYWlsIiwiaXNBY3RpdmVUaHVtYiIsInRodW1ibmFpbCIsInByZXZpZXdlZFByb2R1Y3RJbWFnZSIsInJlcGxhY2UiLCJpc0FjdGl2ZVRodW1iT3BhY2l0eSIsImRpdiIsIm9uQ2xpY2siLCJjaGFuZ2VQcm9kdWN0UHJldmlldyIsImNsYXNzTmFtZSIsInNyYyIsImxheW91dCIsIm9iamVjdEZpdCIsIndpZHRoIiwiaGVpZ2h0Iiwic2V0U3RhdGUiLCJiaW5kIiwicmVuZGVyIiwidGhpcyIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductSlider.js\n");

/***/ })

});