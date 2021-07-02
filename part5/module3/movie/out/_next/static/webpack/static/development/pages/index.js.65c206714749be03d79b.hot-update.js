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
  }, data.map(function (movie) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/detail/[id]",
      as: "/detail/".concat(movie.vid),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 65
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      w: 290,
      key: movie.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 68
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: movie.url,
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
    }, movie.tittle))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01vdmllLmpzIl0sIm5hbWVzIjpbIk1vdmllIiwiZGF0YSIsInRpdGxlIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIm1vdmllIiwidmlkIiwiaWQiLCJ1cmwiLCJ0aXR0bGUiLCJsb2FkTW92aWUiLCJheGlvcyIsImdldCIsImJhc2VVUkwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxLQUFULE9BQThCO0FBQUE7O0FBQUEsTUFBYkMsSUFBYSxRQUFiQSxJQUFhO0FBQUEsTUFBUkMsS0FBUSxRQUFSQSxLQUFRO0FBQzNDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWjtBQUNBLFNBQU8sMERBQUMsbURBQUQ7QUFBSyxRQUFJLEVBQUUsSUFBWDtBQUFpQixNQUFFLEVBQUMsTUFBcEI7QUFBMkIsTUFBRSxFQUFDLE1BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTCwwREFBQyxzREFBRDtBQUFRLFlBQVEsRUFBQyxNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsMERBQUMsdURBQUQ7QUFBUyxNQUFFLEVBQUMsSUFBWjtBQUFpQixZQUFRLEVBQUMsTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrQ0MsS0FBbEMsQ0FGRixDQURLLEVBS0wsMERBQUMsc0RBQUQ7QUFBUSxNQUFFLEVBQUMsTUFBWDtBQUFrQixXQUFPLEVBQUUsQ0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJRCxJQUFJLENBQUNJLEdBQUwsQ0FBUyxVQUFBQyxLQUFLO0FBQUEsV0FDWiwwREFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxjQUFYO0FBQTBCLFFBQUUsb0JBQWFBLEtBQUssQ0FBQ0MsR0FBbkIsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUcsMERBQUMsbURBQUQ7QUFBSyxPQUFDLEVBQUUsR0FBUjtBQUFhLFNBQUcsRUFBRUQsS0FBSyxDQUFDRSxFQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ3pELDBEQUFDLHFEQUFEO0FBQU8sU0FBRyxFQUFFRixLQUFLLENBQUNHLEdBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEeUQsRUFFekQsMERBQUMsb0RBQUQ7QUFBTSxRQUFFLEVBQUMsTUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWlCSCxLQUFLLENBQUNJLE1BQXZCLENBRnlELENBQUgsQ0FBdEQsQ0FEWTtBQUFBLEdBQWQsQ0FGSixDQUxLLENBQVA7QUFnQkQ7S0FsQnVCVixLO0FBb0JqQixTQUFTVyxTQUFULEdBQXFCO0FBQzFCLFNBQU9DLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSxZQUFWLEVBQXVCO0FBQUVDLFdBQU8sRUFBUEEsb0RBQU9BO0FBQVQsR0FBdkIsQ0FBUDtBQUNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy42NWMyMDY3MTQ3NDliZTAzZDc5Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBIZWFkaW5nLCBIU3RhY2ssIEltYWdlLCBUZXh0IH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJ1xyXG5pbXBvcnQgeyBNZE1vdmllIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgeyBiYXNlVVJMIH0gZnJvbSAnLi4vYXhpb3NDb25maWcnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllICh7ZGF0YSx0aXRsZX0pIHtcclxuICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gIHJldHVybiA8Qm94IG1heFc9ezEyMDB9IG14PVwiYXV0b1wiIG10PVwiMjBweFwiPlxyXG4gICAgPEhTdGFjayBmb250U2l6ZT1cIjI0cHhcIj5cclxuICAgICAgPE1kTW92aWUgLz5cclxuICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiIGZvbnRTaXplPVwiMjRweFwiPnt0aXRsZX08L0hlYWRpbmc+XHJcbiAgICA8L0hTdGFjaz5cclxuICAgIDxIU3RhY2sgbXQ9XCIyMHB4XCIgc3BhY2luZz17M30+XHJcbiAgICAgIHtcclxuICAgICAgICBkYXRhLm1hcChtb3ZpZT0+KFxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9kZXRhaWwvW2lkXVwiIGFzPXtgL2RldGFpbC8ke21vdmllLnZpZH1gfT48YT48Qm94IHc9ezI5MH0ga2V5PXttb3ZpZS5pZH0+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXttb3ZpZS51cmx9IC8+XHJcbiAgICAgICAgICA8VGV4dCBtdD1cIjEwcHhcIj57bW92aWUudGl0dGxlfTwvVGV4dD5cclxuICAgICAgICA8L0JveD48L2E+PC9MaW5rPlxyXG4gICAgICAgICkpXHJcbiAgICAgIH1cclxuICAgIDwvSFN0YWNrPlxyXG4gIDwvQm94PlxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZE1vdmllKCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoJy9hcGkvbW92aWUnLHsgYmFzZVVSTCB9KVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==