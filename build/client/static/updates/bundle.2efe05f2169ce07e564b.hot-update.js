webpackHotUpdate("bundle",{

/***/ "./src/shared/modules/pagebuilder/components/pagebuilder.component.tsx":
/*!*****************************************************************************!*\
  !*** ./src/shared/modules/pagebuilder/components/pagebuilder.component.tsx ***!
  \*****************************************************************************/
/*! exports provided: PagebuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagebuilderComponent", function() { return PagebuilderComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_util_get_modules_from_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/util/get-modules-from-page */ "./src/shared/util/get-modules-from-page.tsx");
/* harmony import */ var _pagebuilder_component_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagebuilder-component.module.scss */ "./src/shared/modules/pagebuilder/components/pagebuilder-component.module.scss");
/* harmony import */ var _pagebuilder_component_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pagebuilder_component_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_modules_empty_page_empty_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/empty-page/empty-page.component */ "./src/shared/modules/empty-page/empty-page.component.tsx");
/* harmony import */ var _app_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/util */ "./src/shared/util/index.ts");
/* harmony import */ var _app_modules_core_decor_curve__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/core/decor-curve */ "./src/shared/modules/core/decor-curve/index.ts");
/* harmony import */ var _app_util_detect_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/util/detect-view */ "./src/shared/util/detect-view.tsx");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Z_INDEX = 100;

var useWindowSize = function useWindowSize() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](window.innerWidth),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      windowSize = _React$useState2[0],
      setWindowSize = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    function handleResize() {
      setWindowSize(window.innerWidth);
    } // if (window !== undefined) {
    //   window.addEventListener("resize", handleResize);
    // }
    // return () => {
    //   if (window !== undefined) {
    //     window.removeEventListener("resize", handleResize);
    //   }
    // };

  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
};

var getBackgroundStyleProperties = function getBackgroundStyleProperties(backgroundModule) {
  var backgroundProperty = null;

  if (backgroundModule) {
    if (backgroundModule.backgroundPattern) {
      backgroundProperty = {
        background: "url(".concat(backgroundModule.backgroundPattern, ")"),
        backgroundPosition: "50% 50%",
        backgroundRepeat: "repeat"
      };
    } else {
      backgroundProperty = {
        background: backgroundModule.backgroundColour
      };
    }
  } else {
    backgroundProperty = {
      background: "#fff"
    };
  }

  return backgroundProperty;
};

var getModule = function getModule(wordPressModule, isMobile) {
  var component = Object(_app_util_get_modules_from_page__WEBPACK_IMPORTED_MODULE_1__["getComponent"])(wordPressModule);

  var styleMainContainerModule = _objectSpread({}, getBackgroundStyleProperties(wordPressModule.background), {
    paddingTop: wordPressModule.topPadding ? isMobile ? wordPressModule.topPadding.mobilePadding : wordPressModule.topPadding.desktopPadding : "0px",
    paddingBottom: wordPressModule.bottomPadding ? isMobile ? wordPressModule.bottomPadding.mobilePadding : wordPressModule.bottomPadding.desktopPadding : "0px"
  });

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _pagebuilder_component_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["contentComponent"],
    style: styleMainContainerModule
  }, component);
};

var renderWordPressModules = function renderWordPressModules(wordPressPostModules, routeProps, isMobile) {
  return wordPressPostModules.map(function (wordPressModule, index) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      style: {
        marginTop: wordPressModule.topMargin,
        marginBottom: wordPressModule.bottomMargin,
        position: "relative",
        zIndex: wordPressModule.name === "Navbar" || wordPressModule.name === "gallerySlider" ? Z_INDEX : "auto"
      },
      key: index
    }, wordPressModule.curve && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_core_decor_curve__WEBPACK_IMPORTED_MODULE_5__["DecorCurveComponent"], {
      decorCurveModule: wordPressModule.curve,
      componentNameCurveAttachedTo: wordPressModule.name
    }), getModule(wordPressModule, isMobile));
  });
};

var getRoute = function getRoute(pathname) {
  return Object(_app_util__WEBPACK_IMPORTED_MODULE_4__["getConfig"])().BASE_URL + pathname;
};

var PagebuilderComponent = function PagebuilderComponent(props) {
  var width = useWindowSize();
  var isMobile = Object(_app_util_detect_view__WEBPACK_IMPORTED_MODULE_6__["detectView"])(width);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    if (props.location) {
      props.getPage(getRoute(props.location.pathname));
    } // tslint:disable-next-line: align

  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, !!props.currentPage ? renderWordPressModules(props.currentPage.wordPressPostModules, _objectSpread({}, props), isMobile) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_empty_page_empty_page_component__WEBPACK_IMPORTED_MODULE_3__["EmptyPageComponent"], null));
};



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy9idW5kbGUuMmVmZTA1ZjIxNjljZTA3ZTU2NGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zaGFyZWQvbW9kdWxlcy9wYWdlYnVpbGRlci9jb21wb25lbnRzL3BhZ2VidWlsZGVyLmNvbXBvbmVudC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuaW1wb3J0IHsgUGFnZWJ1aWxkZXJDb250YWluZXJQcm9wcyB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgZ2V0Q29tcG9uZW50IH0gZnJvbSBcIkBhcHAvdXRpbC9nZXQtbW9kdWxlcy1mcm9tLXBhZ2VcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZWJ1aWxkZXItY29tcG9uZW50Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBFbXB0eVBhZ2VDb21wb25lbnQgfSBmcm9tIFwiQGFwcC9tb2R1bGVzL2VtcHR5LXBhZ2UvZW1wdHktcGFnZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFdvcmRQcmVzc1Bvc3RNb2R1bGUsIEJhY2tncm91bmQgfSBmcm9tIFwiQGFwcC9hcGlcIjtcbmltcG9ydCB7IGdldENvbmZpZyB9IGZyb20gXCJAYXBwL3V0aWxcIjtcbmltcG9ydCB7IERlY29yQ3VydmVDb21wb25lbnQgfSBmcm9tIFwiQGFwcC9tb2R1bGVzL2NvcmUvZGVjb3ItY3VydmVcIjtcbmltcG9ydCB7IGRldGVjdFZpZXcgfSBmcm9tIFwiQGFwcC91dGlsL2RldGVjdC12aWV3XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBhZ2VidWlsZGVyQ29tcG9uZW50UHJvcHMge31cbmNvbnN0IFpfSU5ERVggPSAxMDA7XG5jb25zdCB1c2VXaW5kb3dTaXplID0gKCkgPT4ge1xuICBjb25zdCBbd2luZG93U2l6ZSwgc2V0V2luZG93U2l6ZV0gPSBSZWFjdC51c2VTdGF0ZSh3aW5kb3cuaW5uZXJXaWR0aCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XG4gICAgICBzZXRXaW5kb3dTaXplKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICB9XG5cbiAgICAvLyBpZiAod2luZG93ICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG4gICAgLy8gfVxuXG4gICAgLy8gcmV0dXJuICgpID0+IHtcbiAgICAvLyAgIGlmICh3aW5kb3cgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xuICAgIC8vICAgfVxuICAgIC8vIH07XG4gIH0sIFtdKTsgLy8gRW1wdHkgYXJyYXkgZW5zdXJlcyB0aGF0IGVmZmVjdCBpcyBvbmx5IHJ1biBvbiBtb3VudCBhbmQgdW5tb3VudFxuXG4gIHJldHVybiB3aW5kb3dTaXplO1xufTtcblxuY29uc3QgZ2V0QmFja2dyb3VuZFN0eWxlUHJvcGVydGllcyA9IChiYWNrZ3JvdW5kTW9kdWxlOiBCYWNrZ3JvdW5kKSA9PiB7XG4gIGxldCBiYWNrZ3JvdW5kUHJvcGVydHkgPSBudWxsO1xuXG4gIGlmIChiYWNrZ3JvdW5kTW9kdWxlKSB7XG4gICAgaWYgKGJhY2tncm91bmRNb2R1bGUuYmFja2dyb3VuZFBhdHRlcm4pIHtcbiAgICAgIGJhY2tncm91bmRQcm9wZXJ0eSA9IHtcbiAgICAgICAgYmFja2dyb3VuZDogYHVybCgke2JhY2tncm91bmRNb2R1bGUuYmFja2dyb3VuZFBhdHRlcm59KWAsXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCI1MCUgNTAlXCIsXG4gICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IGByZXBlYXRgXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBiYWNrZ3JvdW5kUHJvcGVydHkgPSB7XG4gICAgICAgIGJhY2tncm91bmQ6IGJhY2tncm91bmRNb2R1bGUuYmFja2dyb3VuZENvbG91clxuICAgICAgfTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgYmFja2dyb3VuZFByb3BlcnR5ID0ge1xuICAgICAgYmFja2dyb3VuZDogXCIjZmZmXCJcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGJhY2tncm91bmRQcm9wZXJ0eTtcbn07XG5jb25zdCBnZXRNb2R1bGUgPSAod29yZFByZXNzTW9kdWxlOiBXb3JkUHJlc3NQb3N0TW9kdWxlLCBpc01vYmlsZTogYm9vbGVhbikgPT4ge1xuICBjb25zdCBjb21wb25lbnQgPSBnZXRDb21wb25lbnQod29yZFByZXNzTW9kdWxlKTtcblxuICBjb25zdCBzdHlsZU1haW5Db250YWluZXJNb2R1bGUgPSB7XG4gICAgLi4uZ2V0QmFja2dyb3VuZFN0eWxlUHJvcGVydGllcyh3b3JkUHJlc3NNb2R1bGUuYmFja2dyb3VuZCBhcyBCYWNrZ3JvdW5kKSxcbiAgICBwYWRkaW5nVG9wOiB3b3JkUHJlc3NNb2R1bGUudG9wUGFkZGluZ1xuICAgICAgPyBpc01vYmlsZVxuICAgICAgICA/IHdvcmRQcmVzc01vZHVsZS50b3BQYWRkaW5nLm1vYmlsZVBhZGRpbmdcbiAgICAgICAgOiB3b3JkUHJlc3NNb2R1bGUudG9wUGFkZGluZy5kZXNrdG9wUGFkZGluZ1xuICAgICAgOiBcIjBweFwiLFxuICAgIHBhZGRpbmdCb3R0b206IHdvcmRQcmVzc01vZHVsZS5ib3R0b21QYWRkaW5nXG4gICAgICA/IGlzTW9iaWxlXG4gICAgICAgID8gd29yZFByZXNzTW9kdWxlLmJvdHRvbVBhZGRpbmcubW9iaWxlUGFkZGluZ1xuICAgICAgICA6IHdvcmRQcmVzc01vZHVsZS5ib3R0b21QYWRkaW5nLmRlc2t0b3BQYWRkaW5nXG4gICAgICA6IFwiMHB4XCJcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJjb250ZW50Q29tcG9uZW50XCJdfSBzdHlsZT17c3R5bGVNYWluQ29udGFpbmVyTW9kdWxlfT5cbiAgICAgIHtjb21wb25lbnR9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCByZW5kZXJXb3JkUHJlc3NNb2R1bGVzID0gKFxuICB3b3JkUHJlc3NQb3N0TW9kdWxlczogV29yZFByZXNzUG9zdE1vZHVsZVtdLFxuICByb3V0ZVByb3BzOiBSb3V0ZUNvbXBvbmVudFByb3BzLFxuICBpc01vYmlsZTogYm9vbGVhblxuKTogSlNYLkVsZW1lbnRbXSA9PlxuICB3b3JkUHJlc3NQb3N0TW9kdWxlcy5tYXAoKHdvcmRQcmVzc01vZHVsZSwgaW5kZXgpID0+IChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBtYXJnaW5Ub3A6IHdvcmRQcmVzc01vZHVsZS50b3BNYXJnaW4sXG4gICAgICAgIG1hcmdpbkJvdHRvbTogd29yZFByZXNzTW9kdWxlLmJvdHRvbU1hcmdpbixcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgekluZGV4OiB3b3JkUHJlc3NNb2R1bGUubmFtZSA9PT0gXCJOYXZiYXJcIiB8fCB3b3JkUHJlc3NNb2R1bGUubmFtZSA9PT0gXCJnYWxsZXJ5U2xpZGVyXCIgPyBaX0lOREVYIDogXCJhdXRvXCJcbiAgICAgIH19XG4gICAgICBrZXk9e2luZGV4fVxuICAgID5cbiAgICAgIHt3b3JkUHJlc3NNb2R1bGUuY3VydmUgJiYgKFxuICAgICAgICA8RGVjb3JDdXJ2ZUNvbXBvbmVudFxuICAgICAgICAgIGRlY29yQ3VydmVNb2R1bGU9e3dvcmRQcmVzc01vZHVsZS5jdXJ2ZX1cbiAgICAgICAgICBjb21wb25lbnROYW1lQ3VydmVBdHRhY2hlZFRvPXt3b3JkUHJlc3NNb2R1bGUubmFtZX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7Z2V0TW9kdWxlKHdvcmRQcmVzc01vZHVsZSwgaXNNb2JpbGUpfVxuICAgIDwvZGl2PlxuICApKTtcbmNvbnN0IGdldFJvdXRlID0gKHBhdGhuYW1lOiBzdHJpbmcpID0+IGdldENvbmZpZygpLkJBU0VfVVJMICsgcGF0aG5hbWU7XG5cbmNvbnN0IFBhZ2VidWlsZGVyQ29tcG9uZW50ID0gKHByb3BzOiBJUGFnZWJ1aWxkZXJDb21wb25lbnRQcm9wcyAmIFBhZ2VidWlsZGVyQ29udGFpbmVyUHJvcHMgJiBSb3V0ZUNvbXBvbmVudFByb3BzKSA9PiB7XG4gIGNvbnN0IHdpZHRoID0gdXNlV2luZG93U2l6ZSgpO1xuICBjb25zdCBpc01vYmlsZSA9IGRldGVjdFZpZXcod2lkdGgpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9wcy5sb2NhdGlvbikge1xuICAgICAgcHJvcHMuZ2V0UGFnZShnZXRSb3V0ZShwcm9wcy5sb2NhdGlvbi5wYXRobmFtZSkpO1xuICAgIH1cblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogYWxpZ25cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgeyEhcHJvcHMuY3VycmVudFBhZ2UgPyAoXG4gICAgICAgIHJlbmRlcldvcmRQcmVzc01vZHVsZXMocHJvcHMuY3VycmVudFBhZ2Uud29yZFByZXNzUG9zdE1vZHVsZXMsIHsgLi4ucHJvcHMgfSwgaXNNb2JpbGUpXG4gICAgICApIDogKFxuICAgICAgICA8RW1wdHlQYWdlQ29tcG9uZW50IC8+XG4gICAgICApfVxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgeyBQYWdlYnVpbGRlckNvbXBvbmVudCB9O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBUEE7QUFDQTtBQWFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBUEE7QUFXQTtBQUNBO0FBRkE7QUFYQTtBQUxBO0FBQ0E7QUF1QkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQVNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=