webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Movie.js":
/*!*****************************!*\
  !*** ./components/Movie.js ***!
  \*****************************/
/*! exports provided: default, loadMovie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Movie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMovie", function() { return loadMovie; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/esm/index.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _axiosConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../axiosConfig */ "./axiosConfig.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
var _jsxFileName = "D:\\lagou\\React\\movie\\components\\Movie.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Movie(_ref) {
  var _this = this;

  var data = _ref.data,
      title = _ref.title;
  console.log(data);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    maxW: 1200,
    mx: "auto",
    mt: "20px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 10
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["HStack"], {
    fontSize: "24px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdMovie"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    fontSize: "24px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, title)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["HStack"], {
    mt: "20px",
    spacing: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, data.map(function (move) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      w: 290,
      key: move.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: move.url,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      mt: "10px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }
    }, move.tittle));
  })));
}
_c = Movie;
function loadMovie() {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/movie', {
    baseURL: _axiosConfig__WEBPACK_IMPORTED_MODULE_4__["baseURL"]
  });
}

var _c;

$RefreshReg$(_c, "Movie");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01vdmllLmpzIl0sIm5hbWVzIjpbIk1vdmllIiwiZGF0YSIsInRpdGxlIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIm1vdmUiLCJpZCIsInVybCIsInRpdHRsZSIsImxvYWRNb3ZpZSIsImF4aW9zIiwiZ2V0IiwiYmFzZVVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNBLEtBQVQsT0FBOEI7QUFBQTs7QUFBQSxNQUFiQyxJQUFhLFFBQWJBLElBQWE7QUFBQSxNQUFSQyxLQUFRLFFBQVJBLEtBQVE7QUFDM0NDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFaO0FBQ0EsU0FBTywwREFBQyxtREFBRDtBQUFLLFFBQUksRUFBRSxJQUFYO0FBQWlCLE1BQUUsRUFBQyxNQUFwQjtBQUEyQixNQUFFLEVBQUMsTUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNMLDBEQUFDLHNEQUFEO0FBQVEsWUFBUSxFQUFDLE1BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSwwREFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSwwREFBQyx1REFBRDtBQUFTLE1BQUUsRUFBQyxJQUFaO0FBQWlCLFlBQVEsRUFBQyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtDQyxLQUFsQyxDQUZGLENBREssRUFLTCwwREFBQyxzREFBRDtBQUFRLE1BQUUsRUFBQyxNQUFYO0FBQWtCLFdBQU8sRUFBRSxDQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUlELElBQUksQ0FBQ0ksR0FBTCxDQUFTLFVBQUFDLElBQUk7QUFBQSxXQUNiLDBEQUFDLG1EQUFEO0FBQUssT0FBQyxFQUFFLEdBQVI7QUFBYSxTQUFHLEVBQUVBLElBQUksQ0FBQ0MsRUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLDBEQUFDLHFEQUFEO0FBQU8sU0FBRyxFQUFFRCxJQUFJLENBQUNFLEdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFLDBEQUFDLG9EQUFEO0FBQU0sUUFBRSxFQUFDLE1BQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFpQkYsSUFBSSxDQUFDRyxNQUF0QixDQUZGLENBRGE7QUFBQSxHQUFiLENBRkosQ0FMSyxDQUFQO0FBZUQ7S0FqQnVCVCxLO0FBbUJqQixTQUFTVSxTQUFULEdBQXFCO0FBQzFCLFNBQU9DLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSxZQUFWLEVBQXVCO0FBQUVDLFdBQU8sRUFBUEEsb0RBQU9BO0FBQVQsR0FBdkIsQ0FBUDtBQUNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy45YjQ3MTUyNjNhZjFhMDRlMmM3Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBIZWFkaW5nLCBIU3RhY2ssIEltYWdlLCBUZXh0IH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJ1xyXG5pbXBvcnQgeyBNZE1vdmllIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgeyBiYXNlVVJMIH0gZnJvbSAnLi4vYXhpb3NDb25maWcnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllICh7ZGF0YSx0aXRsZX0pIHtcclxuICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gIHJldHVybiA8Qm94IG1heFc9ezEyMDB9IG14PVwiYXV0b1wiIG10PVwiMjBweFwiPlxyXG4gICAgPEhTdGFjayBmb250U2l6ZT1cIjI0cHhcIj5cclxuICAgICAgPE1kTW92aWUgLz5cclxuICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiIGZvbnRTaXplPVwiMjRweFwiPnt0aXRsZX08L0hlYWRpbmc+XHJcbiAgICA8L0hTdGFjaz5cclxuICAgIDxIU3RhY2sgbXQ9XCIyMHB4XCIgc3BhY2luZz17M30+XHJcbiAgICAgIHtcclxuICAgICAgICBkYXRhLm1hcChtb3ZlPT4oXHJcbiAgICAgICAgPEJveCB3PXsyOTB9IGtleT17bW92ZS5pZH0+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXttb3ZlLnVybH0gLz5cclxuICAgICAgICAgIDxUZXh0IG10PVwiMTBweFwiPnttb3ZlLnRpdHRsZX08L1RleHQ+XHJcbiAgICAgICAgPC9Cb3g+KSlcclxuICAgICAgfVxyXG4gICAgPC9IU3RhY2s+XHJcbiAgPC9Cb3g+XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkTW92aWUoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldCgnL2FwaS9tb3ZpZScseyBiYXNlVVJMIH0pXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9