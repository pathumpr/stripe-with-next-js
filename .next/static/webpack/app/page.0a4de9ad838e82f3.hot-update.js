"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProductPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/stripe-js */ \"(app-pages-browser)/./node_modules/@stripe/stripe-js/lib/index.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/card/dist/chunk-H4VOEXHF.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/card/dist/chunk-5ALFRFZW.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/image/dist/chunk-NK4BRF7C.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/card/dist/chunk-JHUBASYZ.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst stripePromise = (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__.loadStripe)(\"pk_test_51O5A1OG2dR5CN7sJ6d8vFHrsQD2nXst65e9ZOkYfX0SxbA1SlvrOvf1Yl50Dnk4DGUlPZ77mko4uXSlSzkSBdjRV00imfwEka8\");\nfunction ProductPage(param) {\n    let { product } = param;\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleCheckout = async ()=>{\n        setLoading(true);\n        try {\n            // Send a request to create the session\n            const res = await fetch('/api/checkout', {\n                method: 'POST',\n                headers: {\n                    'Content-Type': 'application/json'\n                },\n                body: JSON.stringify({\n                    items: [\n                        {\n                            name: \"Mango\",\n                            description: \"This is a mango\",\n                            price: 600,\n                            quantity: 1\n                        }\n                    ]\n                })\n            });\n            const data = await res.json();\n            console.log('Stripe session response:', data) // Log response for debugging\n            ;\n            if (data.sessionId) {\n                const stripe = await stripePromise;\n                await stripe.redirectToCheckout({\n                    sessionId: data.sessionId\n                });\n            } else {\n                throw new Error('Session ID is missing in the response');\n            }\n        } catch (error) {\n            console.error('Error during Stripe checkout:', error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    const list = [\n        {\n            title: \"Orange\",\n            img: \"/images/fruit-1.jpeg\",\n            priceText: \"$5.50\",\n            price: 5.50\n        },\n        {\n            title: \"Tangerine\",\n            img: \"/images/fruit-2.jpeg\",\n            priceText: \"$3.00\",\n            price: 3.00\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen flex justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"gap-2 grid grid-cols-2 sm:grid-cols-4\",\n            children: list.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.card_default, {\n                    shadow: \"sm\",\n                    isPressable: true,\n                    onPress: ()=>console.log(\"item pressed\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.card_body_default, {\n                            className: \"overflow-visible p-0\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__.image_default, {\n                                shadow: \"sm\",\n                                radius: \"lg\",\n                                width: \"100%\",\n                                alt: item.title,\n                                className: \"w-full object-cover h-[140px]\",\n                                src: item.img\n                            }, void 0, false, {\n                                fileName: \"E:\\\\avishka-pathum\\\\test\\\\next-stripe\\\\app\\\\page.js\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\avishka-pathum\\\\test\\\\next-stripe\\\\app\\\\page.js\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.card_footer_default, {\n                            className: \"text-small justify-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                    children: item.title\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\avishka-pathum\\\\test\\\\next-stripe\\\\app\\\\page.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-default-500\",\n                                    children: item.price\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\avishka-pathum\\\\test\\\\next-stripe\\\\app\\\\page.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\avishka-pathum\\\\test\\\\next-stripe\\\\app\\\\page.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"E:\\\\avishka-pathum\\\\test\\\\next-stripe\\\\app\\\\page.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this))\n        }, void 0, false, {\n            fileName: \"E:\\\\avishka-pathum\\\\test\\\\next-stripe\\\\app\\\\page.js\",\n            lineNumber: 67,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\avishka-pathum\\\\test\\\\next-stripe\\\\app\\\\page.js\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductPage, \"/Rjh5rPqCCqf0XYnTUk9ZNavw3Q=\");\n_c = ProductPage;\nvar _c;\n$RefreshReg$(_c, \"ProductPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBR2lDO0FBQ2M7QUFDcUI7QUFFcEUsTUFBTU0sZ0JBQWdCTCw2REFBVUEsQ0FBQ00sNkdBQThDO0FBRWhFLFNBQVNHLFlBQVksS0FBVztRQUFYLEVBQUVDLE9BQU8sRUFBRSxHQUFYOztJQUNsQyxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR2IsK0NBQVFBLENBQUM7SUFFdkMsTUFBTWMsaUJBQWlCO1FBQ3JCRCxXQUFXO1FBQ1gsSUFBSTtZQUNGLHVDQUF1QztZQUN2QyxNQUFNRSxNQUFNLE1BQU1DLE1BQU0saUJBQWlCO2dCQUN2Q0MsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQ25CQyxPQUFPO3dCQUNMOzRCQUNFQyxNQUFNOzRCQUNOQyxhQUFhOzRCQUNiQyxPQUFPOzRCQUNQQyxVQUFVO3dCQUNaO3FCQUNEO2dCQUNIO1lBQ0Y7WUFFQSxNQUFNQyxPQUFPLE1BQU1aLElBQUlhLElBQUk7WUFDM0JDLFFBQVFDLEdBQUcsQ0FBQyw0QkFBNEJILE1BQU8sNkJBQTZCOztZQUU1RSxJQUFJQSxLQUFLSSxTQUFTLEVBQUU7Z0JBQ2xCLE1BQU1DLFNBQVMsTUFBTTFCO2dCQUNyQixNQUFNMEIsT0FBT0Msa0JBQWtCLENBQUM7b0JBQUVGLFdBQVdKLEtBQUtJLFNBQVM7Z0JBQUM7WUFDOUQsT0FBTztnQkFDTCxNQUFNLElBQUlHLE1BQU07WUFDbEI7UUFDRixFQUFFLE9BQU9DLE9BQU87WUFDZE4sUUFBUU0sS0FBSyxDQUFDLGlDQUFpQ0E7UUFDakQsU0FBVTtZQUNSdEIsV0FBVztRQUNiO0lBQ0Y7SUFFQSxNQUFNdUIsT0FBTztRQUNYO1lBQ0VDLE9BQU87WUFDUEMsS0FBSztZQUNMQyxXQUFXO1lBQ1hkLE9BQU87UUFDVDtRQUNBO1lBQ0VZLE9BQU87WUFDUEMsS0FBSztZQUNMQyxXQUFXO1lBQ1hkLE9BQU87UUFDVDtLQUNEO0lBRUQscUJBQ0UsOERBQUNlO1FBQUlDLFdBQVU7a0JBQ2YsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ1pMLEtBQUtNLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDZiw4REFBQzFDLDJEQUFJQTtvQkFBQzJDLFFBQU87b0JBQWlCQyxXQUFXO29CQUFDQyxTQUFTLElBQU1sQixRQUFRQyxHQUFHLENBQUM7O3NDQUNuRSw4REFBQzNCLGdFQUFRQTs0QkFBQ3NDLFdBQVU7c0NBQ2xCLDRFQUFDcEMsNERBQUtBO2dDQUNKd0MsUUFBTztnQ0FDUEcsUUFBTztnQ0FDUEMsT0FBTTtnQ0FDTkMsS0FBS1AsS0FBS04sS0FBSztnQ0FDZkksV0FBVTtnQ0FDVlUsS0FBS1IsS0FBS0wsR0FBRzs7Ozs7Ozs7Ozs7c0NBR2pCLDhEQUFDbEMsa0VBQVVBOzRCQUFDcUMsV0FBVTs7OENBQ3BCLDhEQUFDVzs4Q0FBR1QsS0FBS04sS0FBSzs7Ozs7OzhDQUNkLDhEQUFDZ0I7b0NBQUVaLFdBQVU7OENBQW9CRSxLQUFLbEIsS0FBSzs7Ozs7Ozs7Ozs7OzttQkFieEJtQjs7Ozs7Ozs7Ozs7Ozs7O0FBMkIvQjtHQXRGd0JsQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gJ0BzdHJpcGUvc3RyaXBlLWpzJztcbmltcG9ydCB7Q2FyZCwgQ2FyZEJvZHksIENhcmRGb290ZXIsIEltYWdlfSBmcm9tIFwiQG5leHR1aS1vcmcvcmVhY3RcIjtcblxuY29uc3Qgc3RyaXBlUHJvbWlzZSA9IGxvYWRTdHJpcGUocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSSVBFX1BVQkxJU0hBQkxFX0tFWSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RQYWdlKHsgcHJvZHVjdCB9KSB7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVDaGVja291dCA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgdHJ5IHtcbiAgICAgIC8vIFNlbmQgYSByZXF1ZXN0IHRvIGNyZWF0ZSB0aGUgc2Vzc2lvblxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvY2hlY2tvdXQnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwiTWFuZ29cIixcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIG1hbmdvXCIsXG4gICAgICAgICAgICAgIHByaWNlOiA2MDAsIC8vIE1ha2Ugc3VyZSBwcmljZSBpcyBjb3JyZWN0XG4gICAgICAgICAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9KSxcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgICBjb25zb2xlLmxvZygnU3RyaXBlIHNlc3Npb24gcmVzcG9uc2U6JywgZGF0YSkgIC8vIExvZyByZXNwb25zZSBmb3IgZGVidWdnaW5nXG4gICAgICBcbiAgICAgIGlmIChkYXRhLnNlc3Npb25JZCkge1xuICAgICAgICBjb25zdCBzdHJpcGUgPSBhd2FpdCBzdHJpcGVQcm9taXNlXG4gICAgICAgIGF3YWl0IHN0cmlwZS5yZWRpcmVjdFRvQ2hlY2tvdXQoeyBzZXNzaW9uSWQ6IGRhdGEuc2Vzc2lvbklkIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Nlc3Npb24gSUQgaXMgbWlzc2luZyBpbiB0aGUgcmVzcG9uc2UnKVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgU3RyaXBlIGNoZWNrb3V0OicsIGVycm9yKVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGxpc3QgPSBbXG4gICAge1xuICAgICAgdGl0bGU6IFwiT3JhbmdlXCIsXG4gICAgICBpbWc6IFwiL2ltYWdlcy9mcnVpdC0xLmpwZWdcIixcbiAgICAgIHByaWNlVGV4dDogXCIkNS41MFwiLFxuICAgICAgcHJpY2U6IDUuNTBcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlRhbmdlcmluZVwiLFxuICAgICAgaW1nOiBcIi9pbWFnZXMvZnJ1aXQtMi5qcGVnXCIsXG4gICAgICBwcmljZVRleHQ6IFwiJDMuMDBcIixcbiAgICAgIHByaWNlOiAzLjAwXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgaC1zY3JlZW4gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FwLTIgZ3JpZCBncmlkLWNvbHMtMiBzbTpncmlkLWNvbHMtNFwiPlxuICAgICAge2xpc3QubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICA8Q2FyZCBzaGFkb3c9XCJzbVwiIGtleT17aW5kZXh9IGlzUHJlc3NhYmxlIG9uUHJlc3M9eygpID0+IGNvbnNvbGUubG9nKFwiaXRlbSBwcmVzc2VkXCIpfT5cbiAgICAgICAgICA8Q2FyZEJvZHkgY2xhc3NOYW1lPVwib3ZlcmZsb3ctdmlzaWJsZSBwLTBcIj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzaGFkb3c9XCJzbVwiXG4gICAgICAgICAgICAgIHJhZGl1cz1cImxnXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgYWx0PXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgb2JqZWN0LWNvdmVyIGgtWzE0MHB4XVwiXG4gICAgICAgICAgICAgIHNyYz17aXRlbS5pbWd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgICAgPENhcmRGb290ZXIgY2xhc3NOYW1lPVwidGV4dC1zbWFsbCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxiPntpdGVtLnRpdGxlfTwvYj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGVmYXVsdC01MDBcIj57aXRlbS5wcmljZX08L3A+XG4gICAgICAgICAgPC9DYXJkRm9vdGVyPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAvLyA8ZGl2PlxuICAgIC8vICAgPGgxPntcIk1hbmdvXCJ9PC9oMT5cbiAgICAvLyAgIDxwPntcIlRoaXMgaXMgYSBtYW5nb1wifTwvcD5cbiAgICAvLyAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2hlY2tvdXR9IGRpc2FibGVkPXtsb2FkaW5nfT5cbiAgICAvLyAgICAge2xvYWRpbmcgPyAnUHJvY2Vzc2luZy4uLicgOiAnQnV5IE5vdyd9XG4gICAgLy8gICA8L2J1dHRvbj5cbiAgICAvLyA8L2Rpdj5cbiAgKTtcbn1cblxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwibG9hZFN0cmlwZSIsIkNhcmQiLCJDYXJkQm9keSIsIkNhcmRGb290ZXIiLCJJbWFnZSIsInN0cmlwZVByb21pc2UiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1RSSVBFX1BVQkxJU0hBQkxFX0tFWSIsIlByb2R1Y3RQYWdlIiwicHJvZHVjdCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlQ2hlY2tvdXQiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIml0ZW1zIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJxdWFudGl0eSIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInNlc3Npb25JZCIsInN0cmlwZSIsInJlZGlyZWN0VG9DaGVja291dCIsIkVycm9yIiwiZXJyb3IiLCJsaXN0IiwidGl0bGUiLCJpbWciLCJwcmljZVRleHQiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJzaGFkb3ciLCJpc1ByZXNzYWJsZSIsIm9uUHJlc3MiLCJyYWRpdXMiLCJ3aWR0aCIsImFsdCIsInNyYyIsImIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});