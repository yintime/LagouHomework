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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxsYWdvdVxcUmVhY3RcXG1vdmllXFxwYWdlc1xcZGV0YWlsXFxbaWRdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU0yQiIsImZpbGUiOiJEOlxcbGFnb3VcXFJlYWN0XFxtb3ZpZVxccGFnZXNcXGRldGFpbFxcW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCJcclxuaW1wb3J0IHsgQm94LCBIZWFkaW5nLCBEaXZpZGVyLCBIU3RhY2ssIEltYWdlLCBUZXh0IH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJ1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IGJhc2VVUkwgfSBmcm9tIFwiLi4vLi4vYXhpb3NDb25maWdcIlxyXG5cclxuY29uc3QgRGV0YWlsQ29udGFpbmVyID0gY3NzYFxyXG4gIHBhZGRpbmc6MTBweDtcclxuICAmID4gcCB7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICB9XHJcbiAgJiA+IGltZyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGV0YWlsICh7ZGV0YWlsfSkge1xyXG4gIHJldHVybiAoPExheW91dD5cclxuICAgIDxCb3ggbWF4Vz17MTIwMH0gbXg9XCJhdXRvXCIgbXQ9XCI3MHB4XCI+XHJcbiAgICAgIDxIZWFkaW5nIGFzPVwiaDJcIiBTaXplPVwieGxcIj57ZGV0YWlsLnRpdGxlfTwvSGVhZGluZz5cclxuICAgICAgPEhlYWRpbmcgXHJcbiAgICAgICAgbXQ9XCIxMHB4XCIgXHJcbiAgICAgICAgYXM9XCJoNFwiIFxyXG4gICAgICAgIFNpemU9XCJsZ1wiIFxyXG4gICAgICAgIGNvbG9yPVwiZ3JheS41MDBcIiBcclxuICAgICAgICBmb250V2VpZ2h0PVwibGlnaHRcIlxyXG4gICAgICA+XHJcbiAgICAgICAge2RldGFpbC5zdWJ9XHJcbiAgICAgIDwvSGVhZGluZz5cclxuICAgICAgPERpdmlkZXIgbXQ9XCIxMHB4XCIgLz5cclxuICAgICAgPEJveCBvdmVyZmxvdz1cImhpZGRlblwiIG10PVwiMTBweFwiPlxyXG4gICAgICAgIDxUZXh0IGZsb2F0PVwibGVmdFwiPuS9nOiAhe+8mntkZXRhaWwuYXV0aG9yfTwvVGV4dD5cclxuICAgICAgICA8VGV4dCBmbG9hdD1cInJpZ2h0XCI+5Y+R5biD5pe26Ze077yae2RldGFpbC5wdWJsaXNofTwvVGV4dD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxEaXZpZGVyIG10PVwiMTBweFwiIC8+XHJcbiAgICAgIDxCb3ggbXQ9XCIxMHB4XCIgY3NzPXtEZXRhaWxDb250YWluZXJ9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOmRldGFpbC5jb250ZW50fX0+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgPC9MYXlvdXQ+KVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMgKCl7XHJcbiAgLy/mjqXmlLbliLDnmoTmoLzlvI/vvJpbXCIxXCIsXCIyXCJdXHJcbiAgbGV0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3ZpZGVvcycseyBiYXNlVVJMIH0pXHJcbiAgLy/ovazmjaLmiJDvvJpbe3BhcmFtczp7aWQ6XCIxXCJ9fV1cclxuICBsZXQgcGF0aHMgPSBkYXRhLm1hcChpZD0+KHtwYXJhbXM6e2lkfX0pKVxyXG4gIHJldHVybntcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMgKHtwYXJhbXN9KXtcclxuICBsZXQgaWQgPSBwYXJhbXMuaWRcclxuICBsZXQgeyBkYXRhOiBkZXRhaWwgfSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9kZXRhaWw/aWQ9JHtpZH1gLHsgYmFzZVVSTCB9KVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczp7XHJcbiAgICAgIGRldGFpbFxyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
var __N_SSG = true;
function Detail(_ref) {
  var detail = _ref.detail;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    maxW: 1200,
    mx: "auto",
    mt: "70px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    as: "h2",
    Size: "xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
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
      lineNumber: 23,
      columnNumber: 7
    }
  }, detail.sub), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    mt: "10px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    overflow: "hidden",
    mt: "10px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    "float": "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "\u4F5C\u8005\uFF1A", detail.author), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    "float": "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, "\u53D1\u5E03\u65F6\u95F4\uFF1A", detail.publish)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    mt: "10px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    mt: "10px",
    css: DetailContainer,
    dangerouslySetInnerHTML: {
      __html: detail.content
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kZXRhaWwvLmpzIl0sIm5hbWVzIjpbIkRldGFpbENvbnRhaW5lciIsIkRldGFpbCIsImRldGFpbCIsInRpdGxlIiwic3ViIiwiYXV0aG9yIiwicHVibGlzaCIsIl9faHRtbCIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxlQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFyQjs7QUFZZSxTQUFTQyxNQUFULE9BQTJCO0FBQUEsTUFBVEMsTUFBUyxRQUFUQSxNQUFTO0FBQ3hDLFNBQVEsMERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNOLDBEQUFDLG1EQUFEO0FBQUssUUFBSSxFQUFFLElBQVg7QUFBaUIsTUFBRSxFQUFDLE1BQXBCO0FBQTJCLE1BQUUsRUFBQyxNQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMERBQUMsdURBQUQ7QUFBUyxNQUFFLEVBQUMsSUFBWjtBQUFpQixRQUFJLEVBQUMsSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0QkEsTUFBTSxDQUFDQyxLQUFuQyxDQURGLEVBRUUsMERBQUMsdURBQUQ7QUFDRSxNQUFFLEVBQUMsTUFETDtBQUVFLE1BQUUsRUFBQyxJQUZMO0FBR0UsUUFBSSxFQUFDLElBSFA7QUFJRSxTQUFLLEVBQUMsVUFKUjtBQUtFLGNBQVUsRUFBQyxPQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPR0QsTUFBTSxDQUFDRSxHQVBWLENBRkYsRUFXRSwwREFBQyx1REFBRDtBQUFTLE1BQUUsRUFBQyxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixFQVlFLDBEQUFDLG1EQUFEO0FBQUssWUFBUSxFQUFDLFFBQWQ7QUFBdUIsTUFBRSxFQUFDLE1BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSwwREFBQyxvREFBRDtBQUFNLGFBQU0sTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUF1QkYsTUFBTSxDQUFDRyxNQUE5QixDQURGLEVBRUUsMERBQUMsb0RBQUQ7QUFBTSxhQUFNLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FBMEJILE1BQU0sQ0FBQ0ksT0FBakMsQ0FGRixDQVpGLEVBZ0JFLDBEQUFDLHVEQUFEO0FBQVMsTUFBRSxFQUFDLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCRixFQWlCRSwwREFBQyxtREFBRDtBQUFLLE1BQUUsRUFBQyxNQUFSO0FBQWUsT0FBRyxFQUFFTixlQUFwQjtBQUFxQywyQkFBdUIsRUFBRTtBQUFDTyxZQUFNLEVBQUNMLE1BQU0sQ0FBQ007QUFBZixLQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakJGLENBRE0sQ0FBUjtBQXNCRDtLQXZCdUJQLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGRldGFpbFxcW2lkXS5qcy5hNjg5NjI2ZDUxZDFlZGIwNTY4OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIlxyXG5pbXBvcnQgeyBCb3gsIEhlYWRpbmcsIERpdmlkZXIsIEhTdGFjaywgSW1hZ2UsIFRleHQgfSBmcm9tICdAY2hha3JhLXVpL2NvcmUnXHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgYmFzZVVSTCB9IGZyb20gXCIuLi8uLi9heGlvc0NvbmZpZ1wiXHJcblxyXG5jb25zdCBEZXRhaWxDb250YWluZXIgPSBjc3NgXHJcbiAgcGFkZGluZzoxMHB4O1xyXG4gICYgPiBwIHtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gIH1cclxuICAmID4gaW1nIHtcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXRhaWwgKHtkZXRhaWx9KSB7XHJcbiAgcmV0dXJuICg8TGF5b3V0PlxyXG4gICAgPEJveCBtYXhXPXsxMjAwfSBteD1cImF1dG9cIiBtdD1cIjcwcHhcIj5cclxuICAgICAgPEhlYWRpbmcgYXM9XCJoMlwiIFNpemU9XCJ4bFwiPntkZXRhaWwudGl0bGV9PC9IZWFkaW5nPlxyXG4gICAgICA8SGVhZGluZyBcclxuICAgICAgICBtdD1cIjEwcHhcIiBcclxuICAgICAgICBhcz1cImg0XCIgXHJcbiAgICAgICAgU2l6ZT1cImxnXCIgXHJcbiAgICAgICAgY29sb3I9XCJncmF5LjUwMFwiIFxyXG4gICAgICAgIGZvbnRXZWlnaHQ9XCJsaWdodFwiXHJcbiAgICAgID5cclxuICAgICAgICB7ZGV0YWlsLnN1Yn1cclxuICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICA8RGl2aWRlciBtdD1cIjEwcHhcIiAvPlxyXG4gICAgICA8Qm94IG92ZXJmbG93PVwiaGlkZGVuXCIgbXQ9XCIxMHB4XCI+XHJcbiAgICAgICAgPFRleHQgZmxvYXQ9XCJsZWZ0XCI+5L2c6ICF77yae2RldGFpbC5hdXRob3J9PC9UZXh0PlxyXG4gICAgICAgIDxUZXh0IGZsb2F0PVwicmlnaHRcIj7lj5HluIPml7bpl7TvvJp7ZGV0YWlsLnB1Ymxpc2h9PC9UZXh0PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPERpdmlkZXIgbXQ9XCIxMHB4XCIgLz5cclxuICAgICAgPEJveCBtdD1cIjEwcHhcIiBjc3M9e0RldGFpbENvbnRhaW5lcn0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6ZGV0YWlsLmNvbnRlbnR9fT5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICA8L0xheW91dD4pXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocyAoKXtcclxuICAvL+aOpeaUtuWIsOeahOagvOW8j++8mltcIjFcIixcIjJcIl1cclxuICBsZXQgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvdmlkZW9zJyx7IGJhc2VVUkwgfSlcclxuICAvL+i9rOaNouaIkO+8mlt7cGFyYW1zOntpZDpcIjFcIn19XVxyXG4gIGxldCBwYXRocyA9IGRhdGEubWFwKGlkPT4oe3BhcmFtczp7aWR9fSkpXHJcbiAgcmV0dXJue1xyXG4gICAgcGF0aHMsXHJcbiAgICBmYWxsYmFjazogZmFsc2VcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyAoe3BhcmFtc30pe1xyXG4gIGxldCBpZCA9IHBhcmFtcy5pZFxyXG4gIGxldCB7IGRhdGE6IGRldGFpbCB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL2RldGFpbD9pZD0ke2lkfWAseyBiYXNlVVJMIH0pXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOntcclxuICAgICAgZGV0YWlsXHJcbiAgICB9XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==