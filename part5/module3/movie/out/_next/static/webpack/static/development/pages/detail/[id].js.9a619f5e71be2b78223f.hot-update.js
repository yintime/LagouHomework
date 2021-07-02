webpackHotUpdate("static\\development\\pages\\detail\\[id].js",{

/***/ "./pages/detail/[id].js":
/*!******************************!*\
  !*** ./pages/detail/[id].js ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Detail; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/esm/index.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
var _jsxFileName = "D:\\lagou\\React\\movie\\pages\\detail\\[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }





var DetailContainer = false ? undefined : {
  name: "y0nhjz-DetailContainer",
  styles: "padding:10px;& > p{font-size:14px;margin-bottom:10px;}& > img{margin-bottom:10px;display:block;};label:DetailContainer;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxsYWdvdVxcUmVhY3RcXG1vdmllXFxwYWdlc1xcZGV0YWlsXFxbaWRdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU0yQiIsImZpbGUiOiJEOlxcbGFnb3VcXFJlYWN0XFxtb3ZpZVxccGFnZXNcXGRldGFpbFxcW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCJcclxuaW1wb3J0IHsgQm94LCBIZWFkaW5nLCBEaXZpZGVyLCBIU3RhY2ssIEltYWdlLCBUZXh0IH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJ1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IGJhc2VVUkwgfSBmcm9tIFwiLi4vLi4vYXhpb3NDb25maWdcIlxyXG5cclxuY29uc3QgRGV0YWlsQ29udGFpbmVyID0gY3NzYFxyXG4gIHBhZGRpbmc6MTBweDtcclxuICAmID4gcCB7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICB9XHJcbiAgJiA+IGltZyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGV0YWlsICh7ZGV0YWlsfSkge1xyXG4gIGNvbnNvbGUubG9nKGRldGFpbClcclxuICByZXR1cm4gKDxMYXlvdXQ+XHJcbiAgICA8Qm94IG1heFc9ezEyMDB9IG14PVwiYXV0b1wiIG10PVwiNzBweFwiPlxyXG4gICAgICA8SGVhZGluZyBhcz1cImgyXCIgU2l6ZT1cInhsXCI+e2RldGFpbC50aXRsZX08L0hlYWRpbmc+XHJcbiAgICAgIDxIZWFkaW5nIFxyXG4gICAgICAgIG10PVwiMTBweFwiIFxyXG4gICAgICAgIGFzPVwiaDRcIiBcclxuICAgICAgICBTaXplPVwibGdcIiBcclxuICAgICAgICBjb2xvcj1cImdyYXkuNTAwXCIgXHJcbiAgICAgICAgZm9udFdlaWdodD1cImxpZ2h0XCJcclxuICAgICAgPlxyXG4gICAgICAgIHtkZXRhaWwuc3VifVxyXG4gICAgICA8L0hlYWRpbmc+XHJcbiAgICAgIDxEaXZpZGVyIG10PVwiMTBweFwiIC8+XHJcbiAgICAgIDxCb3ggb3ZlcmZsb3c9XCJoaWRkZW5cIiBtdD1cIjEwcHhcIj5cclxuICAgICAgICA8VGV4dCBmbG9hdD1cImxlZnRcIj7kvZzogIXvvJp7ZGV0YWlsLmF1dGhvcn08L1RleHQ+XHJcbiAgICAgICAgPFRleHQgZmxvYXQ9XCJyaWdodFwiPuWPkeW4g+aXtumXtO+8mntkZXRhaWwucHVibGlzaH08L1RleHQ+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8RGl2aWRlciBtdD1cIjEwcHhcIiAvPlxyXG4gICAgICA8Qm94IG10PVwiMTBweFwiIGNzcz17RGV0YWlsQ29udGFpbmVyfT5cclxuICAgICAgICA8cD7mlofnq6DlhoXlrrk8L3A+XHJcbiAgICAgICAgPHA+5paH56ug5YaF5a65PC9wPlxyXG4gICAgICAgIDxwPuaWh+eroOWGheWuuTwvcD5cclxuICAgICAgICA8cD7mlofnq6DlhoXlrrk8L3A+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgPC9MYXlvdXQ+KVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMgKCl7XHJcbiAgLy/mjqXmlLbliLDnmoTmoLzlvI/vvJpbXCIxXCIsXCIyXCJdXHJcbiAgbGV0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3ZpZGVvcycseyBiYXNlVVJMIH0pXHJcbiAgLy/ovazmjaLmiJDvvJpbe3BhcmFtczp7aWQ6XCIxXCJ9fV1cclxuICBsZXQgcGF0aHMgPSBkYXRhLm1hcChpZD0+KHtwYXJhbXM6e2lkfX0pKVxyXG4gIHJldHVybntcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMgKHtwYXJhbXN9KXtcclxuICBsZXQgaWQgPSBwYXJhbXMuaWRcclxuICBsZXQgeyBkYXRhOiBkZXRhaWwgfSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9kZXRhaWw/aWQ9JHtpZH1gLHsgYmFzZVVSTCB9KVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczp7XHJcbiAgICAgIGRldGFpbFxyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
var __N_SSG = true;
function Detail(_ref) {
  var detail = _ref.detail;
  console.log(detail);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    maxW: 1200,
    mx: "auto",
    mt: "70px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    as: "h2",
    Size: "xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, detail.title), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    mt: "10px",
    as: "h4",
    Size: "lg",
    color: "gray.500",
    fontWeight: "light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, detail.sub), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    mt: "10px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    overflow: "hidden",
    mt: "10px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    "float": "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, "\u4F5C\u8005\uFF1A", detail.author), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    "float": "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, "\u53D1\u5E03\u65F6\u95F4\uFF1A", detail.publish)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    mt: "10px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    mt: "10px",
    css: DetailContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, "\u6587\u7AE0\u5185\u5BB9"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, "\u6587\u7AE0\u5185\u5BB9"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, "\u6587\u7AE0\u5185\u5BB9"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "\u6587\u7AE0\u5185\u5BB9"))));
}
_c = Detail;

var _c;

$RefreshReg$(_c, "Detail");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kZXRhaWwvLmpzIl0sIm5hbWVzIjpbIkRldGFpbENvbnRhaW5lciIsIkRldGFpbCIsImRldGFpbCIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsInN1YiIsImF1dGhvciIsInB1Ymxpc2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxlQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFyQjs7QUFZZSxTQUFTQyxNQUFULE9BQTJCO0FBQUEsTUFBVEMsTUFBUyxRQUFUQSxNQUFTO0FBQ3hDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWjtBQUNBLFNBQVEsMERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNOLDBEQUFDLG1EQUFEO0FBQUssUUFBSSxFQUFFLElBQVg7QUFBaUIsTUFBRSxFQUFDLE1BQXBCO0FBQTJCLE1BQUUsRUFBQyxNQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMERBQUMsdURBQUQ7QUFBUyxNQUFFLEVBQUMsSUFBWjtBQUFpQixRQUFJLEVBQUMsSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0QkEsTUFBTSxDQUFDRyxLQUFuQyxDQURGLEVBRUUsMERBQUMsdURBQUQ7QUFDRSxNQUFFLEVBQUMsTUFETDtBQUVFLE1BQUUsRUFBQyxJQUZMO0FBR0UsUUFBSSxFQUFDLElBSFA7QUFJRSxTQUFLLEVBQUMsVUFKUjtBQUtFLGNBQVUsRUFBQyxPQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPR0gsTUFBTSxDQUFDSSxHQVBWLENBRkYsRUFXRSwwREFBQyx1REFBRDtBQUFTLE1BQUUsRUFBQyxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixFQVlFLDBEQUFDLG1EQUFEO0FBQUssWUFBUSxFQUFDLFFBQWQ7QUFBdUIsTUFBRSxFQUFDLE1BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSwwREFBQyxvREFBRDtBQUFNLGFBQU0sTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUF1QkosTUFBTSxDQUFDSyxNQUE5QixDQURGLEVBRUUsMERBQUMsb0RBQUQ7QUFBTSxhQUFNLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FBMEJMLE1BQU0sQ0FBQ00sT0FBakMsQ0FGRixDQVpGLEVBZ0JFLDBEQUFDLHVEQUFEO0FBQVMsTUFBRSxFQUFDLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCRixFQWlCRSwwREFBQyxtREFBRDtBQUFLLE1BQUUsRUFBQyxNQUFSO0FBQWUsT0FBRyxFQUFFUixlQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FKRixDQWpCRixDQURNLENBQVI7QUEwQkQ7S0E1QnVCQyxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxkZXRhaWxcXFtpZF0uanMuOWE2MTlmNWU3MWJlMmI3ODIyM2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCJcclxuaW1wb3J0IHsgQm94LCBIZWFkaW5nLCBEaXZpZGVyLCBIU3RhY2ssIEltYWdlLCBUZXh0IH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJ1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IGJhc2VVUkwgfSBmcm9tIFwiLi4vLi4vYXhpb3NDb25maWdcIlxyXG5cclxuY29uc3QgRGV0YWlsQ29udGFpbmVyID0gY3NzYFxyXG4gIHBhZGRpbmc6MTBweDtcclxuICAmID4gcCB7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICB9XHJcbiAgJiA+IGltZyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGV0YWlsICh7ZGV0YWlsfSkge1xyXG4gIGNvbnNvbGUubG9nKGRldGFpbClcclxuICByZXR1cm4gKDxMYXlvdXQ+XHJcbiAgICA8Qm94IG1heFc9ezEyMDB9IG14PVwiYXV0b1wiIG10PVwiNzBweFwiPlxyXG4gICAgICA8SGVhZGluZyBhcz1cImgyXCIgU2l6ZT1cInhsXCI+e2RldGFpbC50aXRsZX08L0hlYWRpbmc+XHJcbiAgICAgIDxIZWFkaW5nIFxyXG4gICAgICAgIG10PVwiMTBweFwiIFxyXG4gICAgICAgIGFzPVwiaDRcIiBcclxuICAgICAgICBTaXplPVwibGdcIiBcclxuICAgICAgICBjb2xvcj1cImdyYXkuNTAwXCIgXHJcbiAgICAgICAgZm9udFdlaWdodD1cImxpZ2h0XCJcclxuICAgICAgPlxyXG4gICAgICAgIHtkZXRhaWwuc3VifVxyXG4gICAgICA8L0hlYWRpbmc+XHJcbiAgICAgIDxEaXZpZGVyIG10PVwiMTBweFwiIC8+XHJcbiAgICAgIDxCb3ggb3ZlcmZsb3c9XCJoaWRkZW5cIiBtdD1cIjEwcHhcIj5cclxuICAgICAgICA8VGV4dCBmbG9hdD1cImxlZnRcIj7kvZzogIXvvJp7ZGV0YWlsLmF1dGhvcn08L1RleHQ+XHJcbiAgICAgICAgPFRleHQgZmxvYXQ9XCJyaWdodFwiPuWPkeW4g+aXtumXtO+8mntkZXRhaWwucHVibGlzaH08L1RleHQ+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8RGl2aWRlciBtdD1cIjEwcHhcIiAvPlxyXG4gICAgICA8Qm94IG10PVwiMTBweFwiIGNzcz17RGV0YWlsQ29udGFpbmVyfT5cclxuICAgICAgICA8cD7mlofnq6DlhoXlrrk8L3A+XHJcbiAgICAgICAgPHA+5paH56ug5YaF5a65PC9wPlxyXG4gICAgICAgIDxwPuaWh+eroOWGheWuuTwvcD5cclxuICAgICAgICA8cD7mlofnq6DlhoXlrrk8L3A+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgPC9MYXlvdXQ+KVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMgKCl7XHJcbiAgLy/mjqXmlLbliLDnmoTmoLzlvI/vvJpbXCIxXCIsXCIyXCJdXHJcbiAgbGV0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3ZpZGVvcycseyBiYXNlVVJMIH0pXHJcbiAgLy/ovazmjaLmiJDvvJpbe3BhcmFtczp7aWQ6XCIxXCJ9fV1cclxuICBsZXQgcGF0aHMgPSBkYXRhLm1hcChpZD0+KHtwYXJhbXM6e2lkfX0pKVxyXG4gIHJldHVybntcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMgKHtwYXJhbXN9KXtcclxuICBsZXQgaWQgPSBwYXJhbXMuaWRcclxuICBsZXQgeyBkYXRhOiBkZXRhaWwgfSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9kZXRhaWw/aWQ9JHtpZH1gLHsgYmFzZVVSTCB9KVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczp7XHJcbiAgICAgIGRldGFpbFxyXG4gICAgfVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=