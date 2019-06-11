webpackHotUpdate("bundle",{

/***/ "./src/assets/icons/PDF.svg":
/*!**********************************!*\
  !*** ./src/assets/icons/PDF.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/PDF.c4afc675.svg";

/***/ }),

/***/ "./src/shared/middleware/thunk/news.thunk.ts":
/*!***************************************************!*\
  !*** ./src/shared/middleware/thunk/news.thunk.ts ***!
  \***************************************************/
/*! exports provided: newsThunks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsThunks", function() { return newsThunks; });
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/api */ "./src/shared/api/index.ts");
/* harmony import */ var _app_stores_news__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/stores/news */ "./src/shared/stores/news/index.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var getCards = function getCards(take, page, filter, category) {
  var skip = page * take - take;
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(dispatch) {
        var api;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _app_stores_news__WEBPACK_IMPORTED_MODULE_1__["newsActions"].setCards({
                  currentPageNumber: page,
                  currentFilter: filter
                });

                try {
                  api = new _app_api__WEBPACK_IMPORTED_MODULE_0__["NewsApi"]();
                  api.newsGet(take, skip, filter, category).then(function (response) {
                    return response.json();
                  }).then(function (response) {
                    var totalPages = response.totalItems / take;

                    if (response.totalItems === 0) {
                      totalPages = 0;
                    }

                    dispatch(_app_stores_news__WEBPACK_IMPORTED_MODULE_1__["newsActions"].setCards({
                      cards: response.cards,
                      currentPageNumber: page,
                      totalPages: totalPages
                    }));
                  });
                } catch (error) {// TODO: error handling
                }

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

var newsThunks = {
  getCards: getCards
};

/***/ }),

/***/ "./src/shared/modules/author-info/author-info-component.module.scss":
/*!**************************************************************************!*\
  !*** ./src/shared/modules/author-info/author-info-component.module.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"author-info__post-info":"author-info-component_author-info__post-info__9KZ_P","authorInfoPostInfo":"author-info-component_author-info__post-info__9KZ_P","author-info__post-info--bottom":"author-info-component_author-info__post-info--bottom__2Kkvg","authorInfoPostInfoBottom":"author-info-component_author-info__post-info--bottom__2Kkvg","author-info__post-info-author":"author-info-component_author-info__post-info-author__2wjCH","authorInfoPostInfoAuthor":"author-info-component_author-info__post-info-author__2wjCH","author-info__top-border":"author-info-component_author-info__top-border__1l9ba","authorInfoTopBorder":"author-info-component_author-info__top-border__1l9ba","author-info__bottom-border":"author-info-component_author-info__bottom-border__352Za","authorInfoBottomBorder":"author-info-component_author-info__bottom-border__352Za","author-info__post-info-avatar":"author-info-component_author-info__post-info-avatar__1_4r0","authorInfoPostInfoAvatar":"author-info-component_author-info__post-info-avatar__1_4r0","author-info__post-info-name":"author-info-component_author-info__post-info-name__1_gCt","authorInfoPostInfoName":"author-info-component_author-info__post-info-name__1_gCt"};
    if(true) {
      // 1559913278708
      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/body-text/body-text-component.module.scss":
/*!**********************************************************************!*\
  !*** ./src/shared/modules/body-text/body-text-component.module.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"body-text":"body-text-component_body-text__13kJa","bodyText":"body-text-component_body-text__13kJa","body-text-container":"body-text-component_body-text-container__2e6Vr","bodyTextContainer":"body-text-component_body-text-container__2e6Vr","body-text-container-outer":"body-text-component_body-text-container-outer__Gpy6w","bodyTextContainerOuter":"body-text-component_body-text-container-outer__Gpy6w","uk-grid":"body-text-component_uk-grid__1VZzU","ukGrid":"body-text-component_uk-grid__1VZzU","body-text_foreground":"body-text-component_body-text_foreground__3QDH_","bodyTextForeground":"body-text-component_body-text_foreground__3QDH_","body-text--left":"body-text-component_body-text--left__3Kohs","bodyTextLeft":"body-text-component_body-text--left__3Kohs","body-text--center":"body-text-component_body-text--center__8UYH4","bodyTextCenter":"body-text-component_body-text--center__8UYH4","body-text--right":"body-text-component_body-text--right__1IZH_","bodyTextRight":"body-text-component_body-text--right__1IZH_","body-text--large":"body-text-component_body-text--large__2od__","bodyTextLarge":"body-text-component_body-text--large__2od__","body-text--medium":"body-text-component_body-text--medium__KHNj7","bodyTextMedium":"body-text-component_body-text--medium__KHNj7","body-text--small":"body-text-component_body-text--small__3F6XR","bodyTextSmall":"body-text-component_body-text--small__3F6XR","body-text--full":"body-text-component_body-text--full__8Dlsa","bodyTextFull":"body-text-component_body-text--full__8Dlsa"};
    if(true) {
      // 1559913276179
      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/contact-form/contact-form-component.module.scss":
/*!****************************************************************************!*\
  !*** ./src/shared/modules/contact-form/contact-form-component.module.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"error":"contact-form-component_error__8oAYX","input_error":"contact-form-component_input_error__3fP_k","inputError":"contact-form-component_input_error__3fP_k"};
    if(true) {
      // 1559913281644
      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/contact/contact-component.module.scss":
/*!******************************************************************!*\
  !*** ./src/shared/modules/contact/contact-component.module.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"contactformulier":"contact-component_contactformulier__32OJf","contactformulier__items":"contact-component_contactformulier__items__2e3D6","contactformulierItems":"contact-component_contactformulier__items__2e3D6","contactformulier__item":"contact-component_contactformulier__item__hXXs8","contactformulierItem":"contact-component_contactformulier__item__hXXs8","contactformulier__sub-title":"contact-component_contactformulier__sub-title__2V-Iq","contactformulierSubTitle":"contact-component_contactformulier__sub-title__2V-Iq"};
    if(true) {
      // 1559913277117
      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/core/button/button-component.module.scss":
/*!*********************************************************************!*\
  !*** ./src/shared/modules/core/button/button-component.module.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"button":"button-component_button__1XjbX","button--fullWidth":"button-component_button--fullWidth__3VghZ","buttonFullWidth":"button-component_button--fullWidth__3VghZ","button--FAB":"button-component_button--FAB__uHkGk","buttonFab":"button-component_button--FAB__uHkGk","button--default":"button-component_button--default__2Sd4R","buttonDefault":"button-component_button--default__2Sd4R","button--primary":"button-component_button--primary__2fwYy","buttonPrimary":"button-component_button--primary__2fwYy","button--secondary":"button-component_button--secondary__3vRIF","buttonSecondary":"button-component_button--secondary__3vRIF","button--transparent":"button-component_button--transparent__1mH-F","buttonTransparent":"button-component_button--transparent__1mH-F","button--small":"button-component_button--small__OskfT","buttonSmall":"button-component_button--small__OskfT"};
    if(true) {
      // 1559913278581
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/core/category-card/category-card-component.module.scss":
/*!***********************************************************************************!*\
  !*** ./src/shared/modules/core/category-card/category-card-component.module.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"card":"category-card-component_card__2X1Rw","card--featured-slider":"category-card-component_card--featured-slider__3gzMC","cardFeaturedSlider":"category-card-component_card--featured-slider__3gzMC","card--category":"category-card-component_card--category__IufFa","cardCategory":"category-card-component_card--category__IufFa","card--modify":"category-card-component_card--modify__EjOPe","cardModify":"category-card-component_card--modify__EjOPe","card__bottom":"category-card-component_card__bottom__1BJoX","cardBottom":"category-card-component_card__bottom__1BJoX","card__title":"category-card-component_card__title__lQN7V","cardTitle":"category-card-component_card__title__lQN7V","card__head":"category-card-component_card__head__k3KeD","cardHead":"category-card-component_card__head__k3KeD","card__body":"category-card-component_card__body__2bfJO","cardBody":"category-card-component_card__body__2bfJO","button":"category-card-component_button__1I5q4"};
    if(true) {
      // 1559913278963
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/core/expandable-panel/expandable-panel-component.module.scss":
/*!*****************************************************************************************!*\
  !*** ./src/shared/modules/core/expandable-panel/expandable-panel-component.module.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"expandable-panel":"expandable-panel-component_expandable-panel__120ok","expandablePanel":"expandable-panel-component_expandable-panel__120ok","expandable-panel__list":"expandable-panel-component_expandable-panel__list__1tVPR","expandablePanelList":"expandable-panel-component_expandable-panel__list__1tVPR","expandable-panel__content":"expandable-panel-component_expandable-panel__content__3b-4x","expandablePanelContent":"expandable-panel-component_expandable-panel__content__3b-4x","expandable-panel__block":"expandable-panel-component_expandable-panel__block__qthT-","expandablePanelBlock":"expandable-panel-component_expandable-panel__block__qthT-","expandable-panel__title":"expandable-panel-component_expandable-panel__title__EniDj","expandablePanelTitle":"expandable-panel-component_expandable-panel__title__EniDj","expandable-panel__block__open":"expandable-panel-component_expandable-panel__block__open__1lKoL","expandablePanelBlockOpen":"expandable-panel-component_expandable-panel__block__open__1lKoL"};
    if(true) {
      // 1559913279101
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/core/gallery-slider/gallery-slider-component.module.scss":
/*!*************************************************************************************!*\
  !*** ./src/shared/modules/core/gallery-slider/gallery-slider-component.module.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"gallery-slider":"gallery-slider-component_gallery-slider__3Ws6f","gallerySlider":"gallery-slider-component_gallery-slider__3Ws6f","size":"gallery-slider-component_size__24laL","lightbox__background":"gallery-slider-component_lightbox__background__3-k2r","lightboxBackground":"gallery-slider-component_lightbox__background__3-k2r","size__lightbox":"gallery-slider-component_size__lightbox__2HZgC","sizeLightbox":"gallery-slider-component_size__lightbox__2HZgC","caption-lightbox":"gallery-slider-component_caption-lightbox__1ZzXp","captionLightbox":"gallery-slider-component_caption-lightbox__1ZzXp","thumb_item":"gallery-slider-component_thumb_item__2To_h","thumbItem":"gallery-slider-component_thumb_item__2To_h","thumb_opacity-layer":"gallery-slider-component_thumb_opacity-layer__2iU8h","thumbOpacityLayer":"gallery-slider-component_thumb_opacity-layer__2iU8h","thumb-container":"gallery-slider-component_thumb-container__1OOQf","thumbContainer":"gallery-slider-component_thumb-container__1OOQf","gallery-slider-arrow":"gallery-slider-component_gallery-slider-arrow__n1jt-","gallerySliderArrow":"gallery-slider-component_gallery-slider-arrow__n1jt-","gallery-slider-arrow-prev":"gallery-slider-component_gallery-slider-arrow-prev__3wERz","gallerySliderArrowPrev":"gallery-slider-component_gallery-slider-arrow-prev__3wERz","gallery-slider-arrow-next":"gallery-slider-component_gallery-slider-arrow-next__1HR2z","gallerySliderArrowNext":"gallery-slider-component_gallery-slider-arrow-next__1HR2z"};
    if(true) {
      // 1559913281785
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/core/hamburger-button/hamburger.button-component.module.scss":
/*!*****************************************************************************************!*\
  !*** ./src/shared/modules/core/hamburger-button/hamburger.button-component.module.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"hamburger.button-component_container__3zPuO","opened":"hamburger.button-component_opened__AW1GL","hamburger-container":"hamburger.button-component_hamburger-container__HDNht","hamburgerContainer":"hamburger.button-component_hamburger-container__HDNht","hamburger-menu":"hamburger.button-component_hamburger-menu__3Etp7","hamburgerMenu":"hamburger.button-component_hamburger-menu__3Etp7"};
    if(true) {
      // 1559913279260
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/core/ingredient-list/ingredient-list.component.scss":
/*!********************************************************************************!*\
  !*** ./src/shared/modules/core/ingredient-list/ingredient-list.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1559913279384
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/core/item-card/item-card.component.scss":
/*!********************************************************************!*\
  !*** ./src/shared/modules/core/item-card/item-card.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1559913279521
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/core/language-switch/language-switch.component.scss":
/*!********************************************************************************!*\
  !*** ./src/shared/modules/core/language-switch/language-switch.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1559913280921
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/core/lightbox/lightbox-component.module.scss":
/*!*************************************************************************!*\
  !*** ./src/shared/modules/core/lightbox/lightbox-component.module.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"modal":"lightbox-component_modal__1__YN","close":"lightbox-component_close__1RTES","modal__center-content":"lightbox-component_modal__center-content__2Rn5W","modalCenterContent":"lightbox-component_modal__center-content__2Rn5W","modal-open":"lightbox-component_modal-open__1TLTm","modalOpen":"lightbox-component_modal-open__1TLTm"};
    if(true) {
      // 1559913279655
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/core/not-yet-implemented/not-yet-implemented-component.module.scss":
/*!***********************************************************************************************!*\
  !*** ./src/shared/modules/core/not-yet-implemented/not-yet-implemented-component.module.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"not-implemented":"not-yet-implemented-component_not-implemented__1MDdK","notImplemented":"not-yet-implemented-component_not-implemented__1MDdK"};
    if(true) {
      // 1559913276849
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/core/product-card/product-card-component.module.scss":
/*!*********************************************************************************!*\
  !*** ./src/shared/modules/core/product-card/product-card-component.module.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"card":"product-card-component_card__1TKkV","card--featured-slider":"product-card-component_card--featured-slider__3zq5x","cardFeaturedSlider":"product-card-component_card--featured-slider__3zq5x","card--product":"product-card-component_card--product__2i05H","cardProduct":"product-card-component_card--product__2i05H","card__image":"product-card-component_card__image__3jPns","cardImage":"product-card-component_card__image__3jPns","card__media":"product-card-component_card__media__17ZRF","cardMedia":"product-card-component_card__media__17ZRF","card__body":"product-card-component_card__body__2jNrt","cardBody":"product-card-component_card__body__2jNrt","card__title":"product-card-component_card__title__gwfrR","cardTitle":"product-card-component_card__title__gwfrR","card__head":"product-card-component_card__head__2Gp9-","cardHead":"product-card-component_card__head__2Gp9-","card__content":"product-card-component_card__content__1Htcu","cardContent":"product-card-component_card__content__1Htcu"};
    if(true) {
      // 1559913279822
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/core/recipe-head-card/recipe-head-card-component.module.scss":
/*!*****************************************************************************************!*\
  !*** ./src/shared/modules/core/recipe-head-card/recipe-head-card-component.module.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"recipe-head-card":"recipe-head-card-component_recipe-head-card__2Bt-e","recipeHeadCard":"recipe-head-card-component_recipe-head-card__2Bt-e","recipe-head-card__foreground":"recipe-head-card-component_recipe-head-card__foreground__28C64","recipeHeadCardForeground":"recipe-head-card-component_recipe-head-card__foreground__28C64","recipe-head-card__header":"recipe-head-card-component_recipe-head-card__header__2Ew-6","recipeHeadCardHeader":"recipe-head-card-component_recipe-head-card__header__2Ew-6","recipe-head-card__header-background":"recipe-head-card-component_recipe-head-card__header-background__1VEIY","recipeHeadCardHeaderBackground":"recipe-head-card-component_recipe-head-card__header-background__1VEIY","recipe-head-card__info":"recipe-head-card-component_recipe-head-card__info__EPOj0","recipeHeadCardInfo":"recipe-head-card-component_recipe-head-card__info__EPOj0","recipe-head-card__info-box":"recipe-head-card-component_recipe-head-card__info-box__26Lrd","recipeHeadCardInfoBox":"recipe-head-card-component_recipe-head-card__info-box__26Lrd","recipe-head-card__info-box-holder":"recipe-head-card-component_recipe-head-card__info-box-holder__3XPEA","recipeHeadCardInfoBoxHolder":"recipe-head-card-component_recipe-head-card__info-box-holder__3XPEA","recipe-head-card__info-list":"recipe-head-card-component_recipe-head-card__info-list__yxibc","recipeHeadCardInfoList":"recipe-head-card-component_recipe-head-card__info-list__yxibc"};
    if(true) {
      // 1559913280008
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/core/related-post-card/related-post-card-component.module.scss":
/*!*******************************************************************************************!*\
  !*** ./src/shared/modules/core/related-post-card/related-post-card-component.module.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"related-post-card":"related-post-card-component_related-post-card__2Q3ao","relatedPostCard":"related-post-card-component_related-post-card__2Q3ao","related-post-card__holder":"related-post-card-component_related-post-card__holder__1qvSN","relatedPostCardHolder":"related-post-card-component_related-post-card__holder__1qvSN","related-post-card--featured-slider":"related-post-card-component_related-post-card--featured-slider__2jT26","relatedPostCardFeaturedSlider":"related-post-card-component_related-post-card--featured-slider__2jT26","related-post-card--product":"related-post-card-component_related-post-card--product__3oxV-","relatedPostCardProduct":"related-post-card-component_related-post-card--product__3oxV-","related-post-card__image":"related-post-card-component_related-post-card__image__MlBWl","relatedPostCardImage":"related-post-card-component_related-post-card__image__MlBWl","related-post-card__media":"related-post-card-component_related-post-card__media__2xJGK","relatedPostCardMedia":"related-post-card-component_related-post-card__media__2xJGK","related-post-card__body":"related-post-card-component_related-post-card__body__1t6qa","relatedPostCardBody":"related-post-card-component_related-post-card__body__1t6qa","related-post-card__title":"related-post-card-component_related-post-card__title__1Ye2x","relatedPostCardTitle":"related-post-card-component_related-post-card__title__1Ye2x","related-post-card__head":"related-post-card-component_related-post-card__head__2aOxm","relatedPostCardHead":"related-post-card-component_related-post-card__head__2aOxm","related-post-card__content":"related-post-card-component_related-post-card__content__3rqQJ","relatedPostCardContent":"related-post-card-component_related-post-card__content__3rqQJ","related-post-card__shadow":"related-post-card-component_related-post-card__shadow__2vOb9","relatedPostCardShadow":"related-post-card-component_related-post-card__shadow__2vOb9"};
    if(true) {
      // 1559913280291
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/core/related-posts/related-posts-component.module.scss":
/*!***********************************************************************************!*\
  !*** ./src/shared/modules/core/related-posts/related-posts-component.module.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"related-posts__header":"related-posts-component_related-posts__header__gtK7g","relatedPostsHeader":"related-posts-component_related-posts__header__gtK7g","related-posts__title":"related-posts-component_related-posts__title__2ExB3","relatedPostsTitle":"related-posts-component_related-posts__title__2ExB3","related-posts__action":"related-posts-component_related-posts__action__3f39C","relatedPostsAction":"related-posts-component_related-posts__action__3f39C","related-posts__list":"related-posts-component_related-posts__list__21eCO","relatedPostsList":"related-posts-component_related-posts__list__21eCO","related-posts":"related-posts-component_related-posts__FyooP","relatedPosts":"related-posts-component_related-posts__FyooP","card":"related-posts-component_card__1UJF8","card__media":"related-posts-component_card__media__1FzP-","cardMedia":"related-posts-component_card__media__1FzP-","card__image":"related-posts-component_card__image__3wpsM","cardImage":"related-posts-component_card__image__3wpsM","card__body":"related-posts-component_card__body__1En9B","cardBody":"related-posts-component_card__body__1En9B"};
    if(true) {
      // 1559913280139
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/core/search-form/search-form.component.scss":
/*!************************************************************************!*\
  !*** ./src/shared/modules/core/search-form/search-form.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1559913280433
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/core/share-social/share-social.component.scss":
/*!**************************************************************************!*\
  !*** ./src/shared/modules/core/share-social/share-social.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1559913280547
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/core/sidebar-menu/menu-item/menu-item-component.module.scss":
/*!****************************************************************************************!*\
  !*** ./src/shared/modules/core/sidebar-menu/menu-item/menu-item-component.module.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"menu-item":"menu-item-component_menu-item__22XdQ","menuItem":"menu-item-component_menu-item__22XdQ","active":"menu-item-component_active__Q6uH5","menu-item--active":"menu-item-component_menu-item--active__2POwK","menuItemActive":"menu-item-component_menu-item--active__2POwK"};
    if(true) {
      // 1559913282701
      var cssReload = __webpack_require__(/*! ../../../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/core/sidebar-menu/sidebar-menu-component.module.scss":
/*!*********************************************************************************!*\
  !*** ./src/shared/modules/core/sidebar-menu/sidebar-menu-component.module.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"sidebar-menu":"sidebar-menu-component_sidebar-menu__EVw3t","sidebarMenu":"sidebar-menu-component_sidebar-menu__EVw3t","sidebar-menu__title":"sidebar-menu-component_sidebar-menu__title__WESLU","sidebarMenuTitle":"sidebar-menu-component_sidebar-menu__title__WESLU","sidebar-menu__list":"sidebar-menu-component_sidebar-menu__list__2BW6D","sidebarMenuList":"sidebar-menu-component_sidebar-menu__list__2BW6D","sidebar-menu__list--check":"sidebar-menu-component_sidebar-menu__list--check__1P2_7","sidebarMenuListCheck":"sidebar-menu-component_sidebar-menu__list--check__1P2_7","sidebar-menu__item":"sidebar-menu-component_sidebar-menu__item__fANHr","sidebarMenuItem":"sidebar-menu-component_sidebar-menu__item__fANHr","sidebar-menu__select":"sidebar-menu-component_sidebar-menu__select__3GXQQ","sidebarMenuSelect":"sidebar-menu-component_sidebar-menu__select__3GXQQ"};
    if(true) {
      // 1559913280681
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/core/simple-card/simple-card-component.module.scss":
/*!*******************************************************************************!*\
  !*** ./src/shared/modules/core/simple-card/simple-card-component.module.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"simple-card":"simple-card-component_simple-card__2LZAq","simpleCard":"simple-card-component_simple-card__2LZAq","simple-card--container":"simple-card-component_simple-card--container__3NAg3","simpleCardContainer":"simple-card-component_simple-card--container__3NAg3","simple-card__media":"simple-card-component_simple-card__media__r8iZ1","simpleCardMedia":"simple-card-component_simple-card__media__r8iZ1","simple-card__image":"simple-card-component_simple-card__image__-bKoK","simpleCardImage":"simple-card-component_simple-card__image__-bKoK","simple-card__body":"simple-card-component_simple-card__body__3lh0h","simpleCardBody":"simple-card-component_simple-card__body__3lh0h","simple-card__title":"simple-card-component_simple-card__title__2KnsD","simpleCardTitle":"simple-card-component_simple-card__title__2KnsD","simple-card__icon":"simple-card-component_simple-card__icon__3rR4B","simpleCardIcon":"simple-card-component_simple-card__icon__3rR4B"};
    if(true) {
      // 1559913281209
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/core/subscribe/subscribe-component.module.scss":
/*!***************************************************************************!*\
  !*** ./src/shared/modules/core/subscribe/subscribe-component.module.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"form__row":"subscribe-component_form__row__38nSJ","formRow":"subscribe-component_form__row__38nSJ","form__row--footer":"subscribe-component_form__row--footer__2Ir8l","formRowFooter":"subscribe-component_form__row--footer__2Ir8l","form__area":"subscribe-component_form__area__2VQMM","formArea":"subscribe-component_form__area__2VQMM","form__text":"subscribe-component_form__text__1has1","formText":"subscribe-component_form__text__1has1","form__bottom":"subscribe-component_form__bottom__3uak7","formBottom":"subscribe-component_form__bottom__3uak7","form__input":"subscribe-component_form__input__3D9Ql","formInput":"subscribe-component_form__input__3D9Ql"};
    if(true) {
      // 1559913281350
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/core/top-filter/top-filter-component.module.scss":
/*!*****************************************************************************!*\
  !*** ./src/shared/modules/core/top-filter/top-filter-component.module.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1559913280808
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/core/widget-items/widget-items-component.module.scss":
/*!*********************************************************************************!*\
  !*** ./src/shared/modules/core/widget-items/widget-items-component.module.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"widget-items__title":"widget-items-component_widget-items__title__3GabW","widgetItemsTitle":"widget-items-component_widget-items__title__3GabW","widget-items__list":"widget-items-component_widget-items__list__G2Xvz","widgetItemsList":"widget-items-component_widget-items__list__G2Xvz","widget-items__card":"widget-items-component_widget-items__card__gMv7A","widgetItemsCard":"widget-items-component_widget-items__card__gMv7A","widget-items__card-image":"widget-items-component_widget-items__card-image__OP8S5","widgetItemsCardImage":"widget-items-component_widget-items__card-image__OP8S5","widget-items__bottom":"widget-items-component_widget-items__bottom__2IzWS","widgetItemsBottom":"widget-items-component_widget-items__bottom__2IzWS"};
    if(true) {
      // 1559913281033
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/cta/cta-component.module.scss":
/*!**********************************************************!*\
  !*** ./src/shared/modules/cta/cta-component.module.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"cta-new":"cta-component_cta-new__2SgJL","ctaNew":"cta-component_cta-new__2SgJL","cta-new__foreground":"cta-component_cta-new__foreground__3gp5J","ctaNewForeground":"cta-component_cta-new__foreground__3gp5J","cta-new__foreground--left":"cta-component_cta-new__foreground--left__oU8Z0","ctaNewForegroundLeft":"cta-component_cta-new__foreground--left__oU8Z0","cta-new__foreground--center":"cta-component_cta-new__foreground--center__k1HPM","ctaNewForegroundCenter":"cta-component_cta-new__foreground--center__k1HPM","cta-new__foreground--right":"cta-component_cta-new__foreground--right__jg_I8","ctaNewForegroundRight":"cta-component_cta-new__foreground--right__jg_I8","cta-new__foreground--content-left":"cta-component_cta-new__foreground--content-left__2H_He","ctaNewForegroundContentLeft":"cta-component_cta-new__foreground--content-left__2H_He","cta-new__foreground--content-center":"cta-component_cta-new__foreground--content-center__3qoe7","ctaNewForegroundContentCenter":"cta-component_cta-new__foreground--content-center__3qoe7","cta-new__foreground--content-right":"cta-component_cta-new__foreground--content-right__3EPI1","ctaNewForegroundContentRight":"cta-component_cta-new__foreground--content-right__3EPI1","uk-container":"cta-component_uk-container__2KTO5","ukContainer":"cta-component_uk-container__2KTO5","cta-new__background":"cta-component_cta-new__background__FKdCx","ctaNewBackground":"cta-component_cta-new__background__FKdCx","cta-new__title":"cta-component_cta-new__title__2UQ5a","ctaNewTitle":"cta-component_cta-new__title__2UQ5a","cta-new__body":"cta-component_cta-new__body__2XpoI","ctaNewBody":"cta-component_cta-new__body__2XpoI","cta-new__description":"cta-component_cta-new__description__3cAxE","ctaNewDescription":"cta-component_cta-new__description__3cAxE","cta-new__button-list":"cta-component_cta-new__button-list__1u4aq","ctaNewButtonList":"cta-component_cta-new__button-list__1u4aq","cta-new__button-list--content-left":"cta-component_cta-new__button-list--content-left__3m0HQ","ctaNewButtonListContentLeft":"cta-component_cta-new__button-list--content-left__3m0HQ","cta-new__button-list--content-center":"cta-component_cta-new__button-list--content-center__1TXmu","ctaNewButtonListContentCenter":"cta-component_cta-new__button-list--content-center__1TXmu","cta-new__button-list--content-right":"cta-component_cta-new__button-list--content-right__G6JH5","ctaNewButtonListContentRight":"cta-component_cta-new__button-list--content-right__G6JH5","cta-new__decor":"cta-component_cta-new__decor__EZN_8","ctaNewDecor":"cta-component_cta-new__decor__EZN_8"};
    if(true) {
      // 1559913276004
      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/faq-overview/faq-overview-component.module.scss":
/*!****************************************************************************!*\
  !*** ./src/shared/modules/faq-overview/faq-overview-component.module.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"faq-overview":"faq-overview-component_faq-overview__1dYzb","faqOverview":"faq-overview-component_faq-overview__1dYzb","faq-overview__sidebar":"faq-overview-component_faq-overview__sidebar___OhHE","faqOverviewSidebar":"faq-overview-component_faq-overview__sidebar___OhHE","faq-overview__sidebar__search":"faq-overview-component_faq-overview__sidebar__search__3mfmM","faqOverviewSidebarSearch":"faq-overview-component_faq-overview__sidebar__search__3mfmM","faq-overview__sidebar__block":"faq-overview-component_faq-overview__sidebar__block__3UILs","faqOverviewSidebarBlock":"faq-overview-component_faq-overview__sidebar__block__3UILs","empty-state":"faq-overview-component_empty-state__2Sv6W","emptyState":"faq-overview-component_empty-state__2Sv6W"};
    if(true) {
      // 1559913277369
      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/featured-item/dummy-data-generator.ts":
/*!******************************************************************!*\
  !*** ./src/shared/modules/featured-item/dummy-data-generator.ts ***!
  \******************************************************************/
/*! exports provided: generateEmptydFeaturedItemModule, generateFilledFeaturedItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateEmptydFeaturedItemModule", function() { return generateEmptydFeaturedItemModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilledFeaturedItemModule", function() { return generateFilledFeaturedItemModule; });
var generateEmptydFeaturedItemModule = function generateEmptydFeaturedItemModule() {
  return {
    id: "",
    name: "",
    topMargin: "",
    bottomMargin: "",
    title: "",
    buttonText: "",
    recipes: [{
      imageUrl: "",
      label: [{
        icon: "",
        label: ""
      }, {
        icon: "",
        label: ""
      }],
      content: "",
      category: "",
      buttonText: "",
      link: ""
    }, {
      imageUrl: "",
      label: [{
        icon: "",
        label: ""
      }, {
        icon: "",
        label: ""
      }],
      content: "",
      category: "",
      buttonText: "",
      link: ""
    }, {
      imageUrl: "",
      label: [{
        icon: "",
        label: ""
      }, {
        icon: "",
        label: ""
      }],
      content: "",
      category: "",
      buttonText: "",
      link: ""
    }]
  };
};

var generateDummyRecipes = function generateDummyRecipes() {
  return [{
    label: [{
      icon: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/person.svg",
      label: "1 persoon"
    }, {
      icon: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/recipe-detail/time.svg",
      label: "20 minuten"
    }],
    imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg",
    content: "Soba met frisse gember-sojasaus",
    category: "Recept",
    buttonText: "Bekijk meer recepten",
    link: "./"
  }, {
    imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg",
    label: [{
      icon: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/person.svg",
      label: "2 persoon"
    }, {
      icon: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/recipe-detail/time.svg",
      label: "20 minuten"
    }],
    content: "Yaki soba (gebakken sobanoedels)",
    category: "Recept",
    buttonText: "Bekijk meer recepten",
    link: "./"
  }, {
    imageUrl: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/image-featured.jpg",
    label: [{
      icon: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/person.svg",
      label: "3 persoon"
    }, {
      icon: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/recipe-detail/time.svg",
      label: "15 minuten"
    }],
    content: "Udon met daikon in miso-tamarisaus",
    category: "Recept",
    buttonText: "Bekijk meer recepten",
    link: "./"
  }];
};

var generateFilledFeaturedItemModule = function generateFilledFeaturedItemModule() {
  return {
    id: "555",
    name: "featuredItemModule",
    topMargin: "0px",
    bottomMargin: "0px",
    title: "Heerlijke recepten!",
    buttonText: "Bekijk meer recepten",
    recipes: generateDummyRecipes()
  };
};

/***/ }),

/***/ "./src/shared/modules/featured-item/featured-item-component.module.scss":
/*!******************************************************************************!*\
  !*** ./src/shared/modules/featured-item/featured-item-component.module.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"featured":"featured-item-component_featured__2giur","featured__header":"featured-item-component_featured__header__15wkV","featuredHeader":"featured-item-component_featured__header__15wkV","featured__header-button":"featured-item-component_featured__header-button__3d-ez","featuredHeaderButton":"featured-item-component_featured__header-button__3d-ez","featured__bottom-button":"featured-item-component_featured__bottom-button__1oMRM","featuredBottomButton":"featured-item-component_featured__bottom-button__1oMRM","featured__body":"featured-item-component_featured__body__4Y-qW","featuredBody":"featured-item-component_featured__body__4Y-qW"};
    if(true) {
      // 1559913283606
      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/featured-item/featured-item.component.tsx":
/*!**********************************************************************!*\
  !*** ./src/shared/modules/featured-item/featured-item.component.tsx ***!
  \**********************************************************************/
/*! exports provided: FeaturedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedComponent", function() { return FeaturedComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _featured_item_component_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./featured-item-component.module.scss */ "./src/shared/modules/featured-item/featured-item-component.module.scss");
/* harmony import */ var _featured_item_component_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_featured_item_component_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_modules_core_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/modules/core/button */ "./src/shared/modules/core/button/index.ts");
/* harmony import */ var _core_item_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/item-card */ "./src/shared/modules/core/item-card/index.ts");
/* harmony import */ var _assets_icons_arrow_right_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @assets/icons/arrow-right.svg */ "./src/assets/icons/arrow-right.svg");
/* harmony import */ var _assets_icons_arrow_right_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_arrow_right_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_modules_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/core */ "./src/shared/modules/core/index.ts");







var FeaturedComponent = function FeaturedComponent(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _featured_item_component_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["featured"]
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "uk-container"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _featured_item_component_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["featured__header"]
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, props.featuredModule.title), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _featured_item_component_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["featured__header-button"]
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_core_button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    title: props.featuredModule.buttonText,
    variant: "primary",
    icon: _assets_icons_arrow_right_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _featured_item_component_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["featured__body"]
  }, props.featuredModule.recipes.map(function (card, index) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_core_item_card__WEBPACK_IMPORTED_MODULE_3__["ItemCard"], {
      labels: card.label.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_core__WEBPACK_IMPORTED_MODULE_5__["IconComponent"], {
          icon: item.icon,
          size: "14px"
        }), " ", item.label);
      }),
      link: card.link,
      title: card.content,
      image: {
        url: card.imageUrl,
        alt: "Alt"
      },
      category: card.category,
      button: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_core_button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        title: card.buttonText,
        href: card.link,
        variant: "default"
      })
    }));
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _featured_item_component_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["featured__bottom-button"]
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_core_button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    title: props.featuredModule.buttonText,
    variant: "primary",
    icon: _assets_icons_arrow_right_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  }))));
};



/***/ }),

/***/ "./src/shared/modules/featured-item/index.ts":
/*!***************************************************!*\
  !*** ./src/shared/modules/featured-item/index.ts ***!
  \***************************************************/
/*! exports provided: FeaturedComponent, generateEmptydFeaturedItemModule, generateFilledFeaturedItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _featured_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./featured-item.component */ "./src/shared/modules/featured-item/featured-item.component.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeaturedComponent", function() { return _featured_item_component__WEBPACK_IMPORTED_MODULE_0__["FeaturedComponent"]; });

/* harmony import */ var _dummy_data_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dummy-data-generator */ "./src/shared/modules/featured-item/dummy-data-generator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateEmptydFeaturedItemModule", function() { return _dummy_data_generator__WEBPACK_IMPORTED_MODULE_1__["generateEmptydFeaturedItemModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateFilledFeaturedItemModule", function() { return _dummy_data_generator__WEBPACK_IMPORTED_MODULE_1__["generateFilledFeaturedItemModule"]; });




/***/ }),

/***/ "./src/shared/modules/footer/footer-component.module.scss":
/*!****************************************************************!*\
  !*** ./src/shared/modules/footer/footer-component.module.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"footer":"footer-component_footer__2DVSh","footer__top":"footer-component_footer__top__2GN6B","footerTop":"footer-component_footer__top__2GN6B","footer__section":"footer-component_footer__section__2tIRV","footerSection":"footer-component_footer__section__2tIRV","footer__section-title":"footer-component_footer__section-title__33TWF","footerSectionTitle":"footer-component_footer__section-title__33TWF","footer__section-list":"footer-component_footer__section-list__3qucZ","footerSectionList":"footer-component_footer__section-list__3qucZ","footer__bottom":"footer-component_footer__bottom__3HjEL","footerBottom":"footer-component_footer__bottom__3HjEL","footer__bottom-left":"footer-component_footer__bottom-left__2m0R1","footerBottomLeft":"footer-component_footer__bottom-left__2m0R1","footer__logo":"footer-component_footer__logo__1ITDA","footerLogo":"footer-component_footer__logo__1ITDA","footer__nav":"footer-component_footer__nav__ox4mr","footerNav":"footer-component_footer__nav__ox4mr","footer__social":"footer-component_footer__social__2dEsb","footerSocial":"footer-component_footer__social__2dEsb"};
    if(true) {
      // 1559913276319
      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/info-header/info-header-component.module.scss":
/*!**************************************************************************!*\
  !*** ./src/shared/modules/info-header/info-header-component.module.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"info-header":"info-header-component_info-header__3VKK6","infoHeader":"info-header-component_info-header__3VKK6","info-header__button":"info-header-component_info-header__button__3c7mb","infoHeaderButton":"info-header-component_info-header__button__3c7mb","info-header__foreground":"info-header-component_info-header__foreground__3oEjp","infoHeaderForeground":"info-header-component_info-header__foreground__3oEjp","info-header__foreground--left":"info-header-component_info-header__foreground--left__1Ar_p","infoHeaderForegroundLeft":"info-header-component_info-header__foreground--left__1Ar_p","info-header__body-text":"info-header-component_info-header__body-text__1Jv18","infoHeaderBodyText":"info-header-component_info-header__body-text__1Jv18","info-header__back":"info-header-component_info-header__back__2hO2X","infoHeaderBack":"info-header-component_info-header__back__2hO2X","info-header__body":"info-header-component_info-header__body__54Toa","infoHeaderBody":"info-header-component_info-header__body__54Toa","button":"info-header-component_button__3Ud0B","info-header__image":"info-header-component_info-header__image__2Pu83","infoHeaderImage":"info-header-component_info-header__image__2Pu83","info-header--center":"info-header-component_info-header--center__1-8tD","infoHeaderCenter":"info-header-component_info-header--center__1-8tD"};
    if(true) {
      // 1559913276011
      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/instagram-wall/instagram-wall-component.module.scss":
/*!********************************************************************************!*\
  !*** ./src/shared/modules/instagram-wall/instagram-wall-component.module.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"instagram-wall":"instagram-wall-component_instagram-wall__2n1iR","instagramWall":"instagram-wall-component_instagram-wall__2n1iR","instagram-wall__title":"instagram-wall-component_instagram-wall__title__9kPAE","instagramWallTitle":"instagram-wall-component_instagram-wall__title__9kPAE","big-card":"instagram-wall-component_big-card__kPdkA","bigCard":"instagram-wall-component_big-card__kPdkA","instagram-wall__collection":"instagram-wall-component_instagram-wall__collection__3fHzn","instagramWallCollection":"instagram-wall-component_instagram-wall__collection__3fHzn","instagram__slick-arrow":"instagram-wall-component_instagram__slick-arrow__2pL4v","instagramSlickArrow":"instagram-wall-component_instagram__slick-arrow__2pL4v","instagram__slick-arrow-prev":"instagram-wall-component_instagram__slick-arrow-prev__34WCX","instagramSlickArrowPrev":"instagram-wall-component_instagram__slick-arrow-prev__34WCX","instagram__slick-arrow-next":"instagram-wall-component_instagram__slick-arrow-next__nMnZb","instagramSlickArrowNext":"instagram-wall-component_instagram__slick-arrow-next__nMnZb","instagram__slick-slider":"instagram-wall-component_instagram__slick-slider__xRwcW","instagramSlickSlider":"instagram-wall-component_instagram__slick-slider__xRwcW"};
    if(true) {
      // 1559913277972
      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/item-overview/item-overview-component.module.scss":
/*!******************************************************************************!*\
  !*** ./src/shared/modules/item-overview/item-overview-component.module.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"item-overview":"item-overview-component_item-overview__F1yw3","itemOverview":"item-overview-component_item-overview__F1yw3","item-overview__posts":"item-overview-component_item-overview__posts__3-g5g","itemOverviewPosts":"item-overview-component_item-overview__posts__3-g5g","item-overview__filters":"item-overview-component_item-overview__filters__18io8","itemOverviewFilters":"item-overview-component_item-overview__filters__18io8","empty-state":"item-overview-component_empty-state__3lVBh","emptyState":"item-overview-component_empty-state__3lVBh"};
    if(true) {
      // 1559913278835
      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/more-products/dummy-data-generators.ts":
/*!*******************************************************************!*\
  !*** ./src/shared/modules/more-products/dummy-data-generators.ts ***!
  \*******************************************************************/
/*! exports provided: generateEmptyMoreProductsModule, generateFilledMoreProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateEmptyMoreProductsModule", function() { return generateEmptyMoreProductsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilledMoreProductsModule", function() { return generateFilledMoreProductsModule; });
var generateEmptyMoreProductsModule = function generateEmptyMoreProductsModule() {
  return {
    id: "",
    name: "",
    topMargin: "",
    bottomMargin: "",
    title: "",
    buttonText: "",
    relatedProducts: [{
      title: "",
      picture: "",
      URL: "/"
    }, {
      title: "",
      picture: "",
      URL: "/"
    }, {
      title: "",
      picture: "",
      URL: "/"
    }, {
      title: "",
      picture: "",
      URL: "/"
    }, {
      title: "",
      picture: "",
      URL: "/"
    }]
  };
};
var generateFilledMoreProductsModule = function generateFilledMoreProductsModule() {
  return {
    id: "9",
    name: "MoreProducts",
    topMargin: "0px",
    bottomMargin: "0px",
    title: "Meer Noedels!",
    buttonText: "Meer noedels",
    relatedProducts: [{
      title: "100% Bruine rijstnoedels",
      picture: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/2.png",
      URL: "/"
    }, {
      title: "Boekweitnoedels met zoete aardappel",
      picture: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/4.jpg",
      URL: "/"
    }, {
      title: "Bruine rijstnoedels met pompoen en gember",
      picture: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/2.png",
      URL: "/"
    }, {
      title: "Bruine rijstnoedels met wakame",
      picture: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/3.jpg",
      URL: "/"
    }, {
      title: "100% Bruine rijstnoedels",
      picture: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/2.png",
      URL: "/"
    }]
  };
};

/***/ }),

/***/ "./src/shared/modules/more-products/index.ts":
/*!***************************************************!*\
  !*** ./src/shared/modules/more-products/index.ts ***!
  \***************************************************/
/*! exports provided: MoreProductsComponent, generateEmptyMoreProductsModule, generateFilledMoreProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _more_products_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./more-products.components */ "./src/shared/modules/more-products/more-products.components.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MoreProductsComponent", function() { return _more_products_components__WEBPACK_IMPORTED_MODULE_0__["MoreProductsComponent"]; });

/* harmony import */ var _dummy_data_generators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dummy-data-generators */ "./src/shared/modules/more-products/dummy-data-generators.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateEmptyMoreProductsModule", function() { return _dummy_data_generators__WEBPACK_IMPORTED_MODULE_1__["generateEmptyMoreProductsModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateFilledMoreProductsModule", function() { return _dummy_data_generators__WEBPACK_IMPORTED_MODULE_1__["generateFilledMoreProductsModule"]; });




/***/ }),

/***/ "./src/shared/modules/more-products/more-products.components.module.scss":
/*!*******************************************************************************!*\
  !*** ./src/shared/modules/more-products/more-products.components.module.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"more-products":"more-products.components_more-products__3h2oi","moreProducts":"more-products.components_more-products__3h2oi","more-products__header":"more-products.components_more-products__header__2Y-P1","moreProductsHeader":"more-products.components_more-products__header__2Y-P1","more-products__header-button":"more-products.components_more-products__header-button__2r9Ds","moreProductsHeaderButton":"more-products.components_more-products__header-button__2r9Ds","more-products__bottom":"more-products.components_more-products__bottom__2xY3B","moreProductsBottom":"more-products.components_more-products__bottom__2xY3B","more-products__slide":"more-products.components_more-products__slide__2dKFf","moreProductsSlide":"more-products.components_more-products__slide__2dKFf","more-products__bottom-button":"more-products.components_more-products__bottom-button__1aoYv","moreProductsBottomButton":"more-products.components_more-products__bottom-button__1aoYv"};
    if(true) {
      // 1559913284318
      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/more-products/more-products.components.tsx":
/*!***********************************************************************!*\
  !*** ./src/shared/modules/more-products/more-products.components.tsx ***!
  \***********************************************************************/
/*! exports provided: MoreProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreProductsComponent", function() { return MoreProductsComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _more_products_components_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./more-products.components.module.scss */ "./src/shared/modules/more-products/more-products.components.module.scss");
/* harmony import */ var _more_products_components_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_more_products_components_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_related_post_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/related-post-card */ "./src/shared/modules/core/related-post-card/index.ts");
/* harmony import */ var _app_modules_core_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/core/button */ "./src/shared/modules/core/button/index.ts");
/* harmony import */ var _assets_icons_arrow_right_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @assets/icons/arrow-right.svg */ "./src/assets/icons/arrow-right.svg");
/* harmony import */ var _assets_icons_arrow_right_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_arrow_right_svg__WEBPACK_IMPORTED_MODULE_4__);






var MoreProductsComponent = function MoreProductsComponent(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "uk-container"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _more_products_components_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["more-products"]
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _more_products_components_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["more-products__header"]
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, props.moreProductsModule.title), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _more_products_components_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["more-products__header-button"]
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_core_button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    title: props.moreProductsModule.buttonText,
    variant: "primary",
    icon: _assets_icons_arrow_right_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _more_products_components_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["more-products__bottom"]
  }, props.moreProductsModule.relatedProducts.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: _more_products_components_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["more-products__slide"],
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_core_related_post_card__WEBPACK_IMPORTED_MODULE_2__["RelatedPostCard"], {
      link: item.URL,
      title: item.title,
      image: item.picture
    }));
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "".concat(_more_products_components_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["more-products__bottom-button"])
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_core_button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    title: props.moreProductsModule.buttonText,
    variant: "primary",
    icon: _assets_icons_arrow_right_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  }))));
};



/***/ }),

/***/ "./src/shared/modules/nav-bar/nav-bar-component.module.scss":
/*!******************************************************************!*\
  !*** ./src/shared/modules/nav-bar/nav-bar-component.module.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"nav-bar":"nav-bar-component_nav-bar__2sjwL","navBar":"nav-bar-component_nav-bar__2sjwL","icon":"nav-bar-component_icon__Mg7TE","responsive":"nav-bar-component_responsive__2QsFT","nav-bar__top":"nav-bar-component_nav-bar__top__24W-S","navBarTop":"nav-bar-component_nav-bar__top__24W-S","nav-bar__top-menu":"nav-bar-component_nav-bar__top-menu__JAzbW","navBarTopMenu":"nav-bar-component_nav-bar__top-menu__JAzbW","responsive-order":"nav-bar-component_responsive-order__x8wS2","responsiveOrder":"nav-bar-component_responsive-order__x8wS2","nav-bar__bottom":"nav-bar-component_nav-bar__bottom__3yBca","navBarBottom":"nav-bar-component_nav-bar__bottom__3yBca","nav-bar__bottom__search":"nav-bar-component_nav-bar__bottom__search__2vxE2","navBarBottomSearch":"nav-bar-component_nav-bar__bottom__search__2vxE2","nav-bar__bottom-logo":"nav-bar-component_nav-bar__bottom-logo__LpPjy","navBarBottomLogo":"nav-bar-component_nav-bar__bottom-logo__LpPjy","nav-bar__bottom-logo__image":"nav-bar-component_nav-bar__bottom-logo__image__32qkE","navBarBottomLogoImage":"nav-bar-component_nav-bar__bottom-logo__image__32qkE","nav-bar__bottom-logo__text":"nav-bar-component_nav-bar__bottom-logo__text__25LlX","navBarBottomLogoText":"nav-bar-component_nav-bar__bottom-logo__text__25LlX","nav-bar__bottom-menu":"nav-bar-component_nav-bar__bottom-menu__3YhYa","navBarBottomMenu":"nav-bar-component_nav-bar__bottom-menu__3YhYa"};
    if(true) {
      // 1559913276998
      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/navbar-search/navbar-search-component.module.scss":
/*!******************************************************************************!*\
  !*** ./src/shared/modules/navbar-search/navbar-search-component.module.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"opened":"navbar-search-component_opened__3X83U","closed":"navbar-search-component_closed__1bWVD","highlighted":"navbar-search-component_highlighted__2vpd7","navbar-search":"navbar-search-component_navbar-search__3UbSG","navbarSearch":"navbar-search-component_navbar-search__3UbSG","navbar-search__shadow":"navbar-search-component_navbar-search__shadow__1eEK2","navbarSearchShadow":"navbar-search-component_navbar-search__shadow__1eEK2","navbar-search__results":"navbar-search-component_navbar-search__results__1eenl","navbarSearchResults":"navbar-search-component_navbar-search__results__1eenl","navbar-search__results__item":"navbar-search-component_navbar-search__results__item__1C3W6","navbarSearchResultsItem":"navbar-search-component_navbar-search__results__item__1C3W6","navbar-search__results__item__details":"navbar-search-component_navbar-search__results__item__details__1AAoR","navbarSearchResultsItemDetails":"navbar-search-component_navbar-search__results__item__details__1AAoR","navbar-search__bar":"navbar-search-component_navbar-search__bar__h6Bt_","navbarSearchBar":"navbar-search-component_navbar-search__bar__h6Bt_","navbar-search__bar__top":"navbar-search-component_navbar-search__bar__top__37dfE","navbarSearchBarTop":"navbar-search-component_navbar-search__bar__top__37dfE","navbar-search__bar__top__item":"navbar-search-component_navbar-search__bar__top__item__GZmwz","navbarSearchBarTopItem":"navbar-search-component_navbar-search__bar__top__item__GZmwz","navbar-search__bar__top__item__close":"navbar-search-component_navbar-search__bar__top__item__close__3jrpx","navbarSearchBarTopItemClose":"navbar-search-component_navbar-search__bar__top__item__close__3jrpx","navbar-search__bar__top__item__input":"navbar-search-component_navbar-search__bar__top__item__input__10Ren","navbarSearchBarTopItemInput":"navbar-search-component_navbar-search__bar__top__item__input__10Ren"};
    if(true) {
      // 1559913278120
      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/news-overview/containers/news-overview.container.ts":
/*!********************************************************************************!*\
  !*** ./src/shared/modules/news-overview/containers/news-overview.container.ts ***!
  \********************************************************************************/
/*! exports provided: NewsOverviewContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsOverviewContainer", function() { return NewsOverviewContainer; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _app_stores__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/stores */ "./src/shared/stores/index.ts");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _news_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../news-overview.component */ "./src/shared/modules/news-overview/news-overview.component.tsx");
/* harmony import */ var _app_middleware_thunk_news_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/middleware/thunk/news.thunk */ "./src/shared/middleware/thunk/news.thunk.ts");






var mapStateToProps = function mapStateToProps(state) {
  var _state$card = state.card,
      cards = _state$card.cards,
      totalPages = _state$card.totalPages,
      currentPageNumber = _state$card.currentPageNumber;
  return {
    cards: cards,
    totalPages: totalPages,
    currentPageNumber: currentPageNumber
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getCards: function getCards(take, page, filter, category) {
      return dispatch(_app_middleware_thunk_news_thunk__WEBPACK_IMPORTED_MODULE_4__["newsThunks"].getCards(take, page, filter, category));
    },
    setCards: function setCards(cards) {
      dispatch(_app_stores__WEBPACK_IMPORTED_MODULE_1__["newsActions"].setCards({
        cards: cards
      }));
    },
    setCurrentPage: function setCurrentPage(currentPageNumber) {
      dispatch(_app_stores__WEBPACK_IMPORTED_MODULE_1__["newsActions"].setCards({
        currentPageNumber: currentPageNumber
      }));
    },
    setTotalPage: function setTotalPage(totalPages) {
      dispatch(_app_stores__WEBPACK_IMPORTED_MODULE_1__["newsActions"].setCards({
        totalPages: totalPages
      }));
    }
  };
};

var NewsOverviewContainer = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_news_overview_component__WEBPACK_IMPORTED_MODULE_3__["NewsOverviewComponent"]));

/***/ }),

/***/ "./src/shared/modules/news-overview/news-overview-component.module.scss":
/*!******************************************************************************!*\
  !*** ./src/shared/modules/news-overview/news-overview-component.module.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"item-overview":"news-overview-component_item-overview__2kXOa","itemOverview":"news-overview-component_item-overview__2kXOa","item-overview__posts":"news-overview-component_item-overview__posts__3LUh0","itemOverviewPosts":"news-overview-component_item-overview__posts__3LUh0","item-overview__filters":"news-overview-component_item-overview__filters__3rQ3-","itemOverviewFilters":"news-overview-component_item-overview__filters__3rQ3-","empty-state":"news-overview-component_empty-state__ppYmU","emptyState":"news-overview-component_empty-state__ppYmU"};
    if(true) {
      // 1559913283199
      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/news-overview/news-overview.component.tsx":
/*!**********************************************************************!*\
  !*** ./src/shared/modules/news-overview/news-overview.component.tsx ***!
  \**********************************************************************/
/*! exports provided: NewsOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsOverviewComponent", function() { return NewsOverviewComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_icons_arrow_right_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @assets/icons/arrow-right.svg */ "./src/assets/icons/arrow-right.svg");
/* harmony import */ var _assets_icons_arrow_right_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_arrow_right_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_modules_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/modules/core */ "./src/shared/modules/core/index.ts");
/* harmony import */ var _app_modules_core_item_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/core/item-card */ "./src/shared/modules/core/item-card/index.ts");
/* harmony import */ var _app_util_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/util/pagination */ "./src/shared/util/pagination/index.ts");
/* harmony import */ var _news_overview_component_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news-overview-component.module.scss */ "./src/shared/modules/news-overview/news-overview-component.module.scss");
/* harmony import */ var _news_overview_component_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_news_overview_component_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _core_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/button */ "./src/shared/modules/core/button/index.ts");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var component = function component(props) {
  var TAKE = 9;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      currentFilter = _React$useState2[0],
      setCurrentFilter = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__["useState"](0),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      currentCategoryFilter = _React$useState4[0],
      setCurrentCategoryFilter = _React$useState4[1];

  function setInitialState() {
    var totalPages = props.newsOverviewModule.state.totalItems / TAKE;
    setCurrentCategoryFilter(0);
    setCurrentFilter("");
    props.setCards(props.newsOverviewModule.state.cards);
    props.setCurrentPage(1);
    props.setTotalPage(totalPages);
  }

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    setInitialState();
  }, []);

  function changePage(pageNumber) {
    props.getCards(TAKE, pageNumber, currentFilter, props.newsOverviewModule.categories[currentCategoryFilter - 1]);
  }

  function applyFilter(keyword) {
    setCurrentFilter(keyword);
    props.getCards(TAKE, 1, keyword, props.newsOverviewModule.categories[currentCategoryFilter - 1]);
  }

  function onCategoryChanged(event) {
    var index = event.target.selectedIndex;

    if (index === 0) {
      setInitialState();
    } else {
      setCurrentCategoryFilter(index);
      setCurrentFilter("");
      props.getCards(TAKE, 1, "", props.newsOverviewModule.categories[index - 1]);
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _news_overview_component_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a["item-overview"]
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _news_overview_component_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a["item-overview__filters"]
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", {
    onChange: onCategoryChanged,
    className: "form__select"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
    "aria-selected": true
  }, props.intl.formatMessage({
    id: "news_overview_sortByProductLine"
  })), props.newsOverviewModule.categories.map(function (item, key) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
      key: key,
      "aria-selected": true
    }, item);
  }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_core__WEBPACK_IMPORTED_MODULE_2__["SearchForm"], {
    onChange: applyFilter,
    placeholder: props.intl.formatMessage({
      id: "news_overview_sortByText"
    })
  }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _news_overview_component_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a["item-overview__posts"]
  }, props.cards.map(function (card) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_core_item_card__WEBPACK_IMPORTED_MODULE_3__["ItemCard"], {
      key: card.id,
      labels: card.cardLabels.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, item.title);
      }),
      link: card.URL,
      title: card.title,
      image: card.picture,
      category: card.category,
      button: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_core_button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        icon: _assets_icons_arrow_right_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
        href: card.URL,
        variant: "default",
        title: card.buttonText
      })
    });
  })), props.cards.length === 0 ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _news_overview_component_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a["empty-state"]
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_core__WEBPACK_IMPORTED_MODULE_2__["ResourceTextComponent"], {
    resourceKey: "search-empty-state"
  }))) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _news_overview_component_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a["item-overview__pagination"]
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_util_pagination__WEBPACK_IMPORTED_MODULE_4__["Pagination"], {
    currentPage: props.currentPageNumber,
    changePage: changePage,
    totalItems: props.totalPages
  })));
};

var NewsOverviewComponent = Object(react_intl__WEBPACK_IMPORTED_MODULE_7__["injectIntl"])(component);


/***/ }),

/***/ "./src/shared/modules/newsletter/newsletter-component.module.scss":
/*!************************************************************************!*\
  !*** ./src/shared/modules/newsletter/newsletter-component.module.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"newsletter":"newsletter-component_newsletter__1vLCH","newsletter__container":"newsletter-component_newsletter__container__2fxIU","newsletterContainer":"newsletter-component_newsletter__container__2fxIU","newsletter__foreground":"newsletter-component_newsletter__foreground__OP3jQ","newsletterForeground":"newsletter-component_newsletter__foreground__OP3jQ","newsletter__body":"newsletter-component_newsletter__body__1NLfm","newsletterBody":"newsletter-component_newsletter__body__1NLfm","newsletter__description":"newsletter-component_newsletter__description__JHNFT","newsletterDescription":"newsletter-component_newsletter__description__JHNFT","newsletter__image":"newsletter-component_newsletter__image__1lAkY","newsletterImage":"newsletter-component_newsletter__image__1lAkY","newsletter__inner":"newsletter-component_newsletter__inner__7aldU","newsletterInner":"newsletter-component_newsletter__inner__7aldU","newsletter__title":"newsletter-component_newsletter__title__fVwh5","newsletterTitle":"newsletter-component_newsletter__title__fVwh5","newsletter__wrap":"newsletter-component_newsletter__wrap__2sInT","newsletterWrap":"newsletter-component_newsletter__wrap__2sInT"};
    if(true) {
      // 1559913276733
      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/not-found/index.ts":
/*!***********************************************!*\
  !*** ./src/shared/modules/not-found/index.ts ***!
  \***********************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found.component */ "./src/shared/modules/not-found/not-found.component.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return _not_found_component__WEBPACK_IMPORTED_MODULE_0__["NotFoundComponent"]; });



/***/ }),

/***/ "./src/shared/modules/not-found/not-found-component.module.scss":
/*!**********************************************************************!*\
  !*** ./src/shared/modules/not-found/not-found-component.module.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"not-found__container":"not-found-component_not-found__container__25PjB","notFoundContainer":"not-found-component_not-found__container__25PjB","not-found__text":"not-found-component_not-found__text__Y8fKq","notFoundText":"not-found-component_not-found__text__Y8fKq","not-found":"not-found-component_not-found__JlCkd","notFound":"not-found-component_not-found__JlCkd"};
    if(true) {
      // 1559913283738
      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/not-found/not-found.component.tsx":
/*!**************************************************************!*\
  !*** ./src/shared/modules/not-found/not-found.component.tsx ***!
  \**************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _not_found_component_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found-component.module.scss */ "./src/shared/modules/not-found/not-found-component.module.scss");
/* harmony import */ var _not_found_component_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_not_found_component_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_icons_arrow_right_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @assets/icons/arrow-right.svg */ "./src/assets/icons/arrow-right.svg");
/* harmony import */ var _assets_icons_arrow_right_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_arrow_right_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/button */ "./src/shared/modules/core/button/index.ts");





var NotFoundComponent = function NotFoundComponent(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _not_found_component_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["not-found"]
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _not_found_component_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["not-found__container"]
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, props.notFoundModule.title), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: _not_found_component_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["not-found__text"]
  }, props.notFoundModule.text), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_core_button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    fullWidth: true,
    icon: _assets_icons_arrow_right_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    title: props.notFoundModule.backButtonText,
    variant: "primary"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_core_button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    href: "#",
    fullWidth: true,
    title: props.notFoundModule.homeButtonText,
    variant: "transparent"
  })));
};



/***/ }),

/***/ "./src/shared/modules/our-team-card/card-component.module.scss":
/*!*********************************************************************!*\
  !*** ./src/shared/modules/our-team-card/card-component.module.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"card-component_container__eRCZi","card":"card-component_card__1KAGz","card__user":"card-component_card__user__xhHzw","cardUser":"card-component_card__user__xhHzw","card__body":"card-component_card__body__3o1c7","cardBody":"card-component_card__body__3o1c7","card__title":"card-component_card__title__3ej-C","cardTitle":"card-component_card__title__3ej-C","card__position":"card-component_card__position__2vf2H","cardPosition":"card-component_card__position__2vf2H","card__media":"card-component_card__media__IsezQ","cardMedia":"card-component_card__media__IsezQ","card__image":"card-component_card__image__2QV0q","cardImage":"card-component_card__image__2QV0q","card__social":"card-component_card__social__1vsVj","cardSocial":"card-component_card__social__1vsVj"};
    if(true) {
      // 1559913277639
      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/our-team/our-team-component.module.scss":
/*!********************************************************************!*\
  !*** ./src/shared/modules/our-team/our-team-component.module.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"onze-mensen":"our-team-component_onze-mensen__3sbu7","onzeMensen":"our-team-component_onze-mensen__3sbu7","onze-mensen__header":"our-team-component_onze-mensen__header__DB1fN","onzeMensenHeader":"our-team-component_onze-mensen__header__DB1fN","onze-mensen__posts":"our-team-component_onze-mensen__posts__1DXVp","onzeMensenPosts":"our-team-component_onze-mensen__posts__1DXVp"};
    if(true) {
      // 1559913276605
      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/product-detail-header/dummy-data-generators.ts":
/*!***************************************************************************!*\
  !*** ./src/shared/modules/product-detail-header/dummy-data-generators.ts ***!
  \***************************************************************************/
/*! exports provided: generateFilledSocialMediaButtonsProductDetailHeaderModule, generateEmptySocialMediaButtonsProductDetailHeaderModule, generateEmptyProductDetailHeader, generateFilledProductDetailHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilledSocialMediaButtonsProductDetailHeaderModule", function() { return generateFilledSocialMediaButtonsProductDetailHeaderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateEmptySocialMediaButtonsProductDetailHeaderModule", function() { return generateEmptySocialMediaButtonsProductDetailHeaderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateEmptyProductDetailHeader", function() { return generateEmptyProductDetailHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilledProductDetailHeader", function() { return generateFilledProductDetailHeader; });
var generateFilledSocialMediaButtonsProductDetailHeaderModule = function generateFilledSocialMediaButtonsProductDetailHeaderModule() {
  return {
    footerButtons: [{
      href: "fb",
      icon: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/facebook.svg"
    }, {
      href: "linked",
      icon: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/linkedin.svg"
    }, {
      href: "twitter",
      icon: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/twitter.svg"
    }],
    id: "42",
    topMargin: "1",
    bottomMargin: "5",
    name: "productDetailHeader"
  };
};
var generateEmptySocialMediaButtonsProductDetailHeaderModule = function generateEmptySocialMediaButtonsProductDetailHeaderModule() {
  return {
    footerButtons: [{
      href: "",
      icon: ""
    }, {
      href: "",
      icon: ""
    }, {
      href: "",
      icon: ""
    }],
    id: "",
    topMargin: "",
    bottomMargin: "",
    name: ""
  };
};
var generateEmptyProductDetailHeader = function generateEmptyProductDetailHeader() {
  return {
    id: "",
    name: "",
    topMargin: "",
    bottomMargin: "",
    header: "",
    subHeader: "",
    backButtonText: "",
    listPictures: ["", "", ""],
    body: "",
    links: [{
      content: "",
      route: "/",
      icon: ""
    }, {
      content: "",
      route: "/",
      icon: ""
    }, {
      content: "",
      route: "/",
      icon: ""
    }]
  };
};
var generateFilledProductDetailHeader = function generateFilledProductDetailHeader() {
  return {
    id: "9",
    name: "ProductDetailHeader",
    topMargin: "0px",
    bottomMargin: "0px",
    header: "100% brunine rijstnoedels",
    subHeader: "Glutenvrij - 250g ",
    backButtonText: "Terug naar alle noedels",
    listPictures: ["https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/4.jpg", "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/2.png", "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/products/Noedels/3.jpg"],
    body: "Deze heerlijke, glutenvrije noedels zijn gemaakt van biologische bruine rijst en water. Verder niets. Ze smaken heerlijk, zijn binnen 5 minuten gaar en passen perfect bij groentegerechten, zeewier, vlees, vis en Japanse smaakmakers als miso, tamari en sesamolie.",
    links: [{
      content: "Waar kan ik dit kopen?",
      route: "/",
      icon: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/product-detail-header/location-line.svg"
    }, {
      content: "Ik heb een vraag",
      route: "/",
      icon: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/product-detail-header/chat.svg"
    }, {
      content: "Mail PDF",
      route: "/",
      icon: "https://s3-eu-west-1.amazonaws.com/viper-development-images/Terrasana/product-detail-header/PDF.svg"
    }]
  };
};

/***/ }),

/***/ "./src/shared/modules/product-detail-header/index.ts":
/*!***********************************************************!*\
  !*** ./src/shared/modules/product-detail-header/index.ts ***!
  \***********************************************************/
/*! exports provided: ProductDetailHeaderComponent, generateFilledSocialMediaButtonsProductDetailHeaderModule, generateEmptySocialMediaButtonsProductDetailHeaderModule, generateEmptyProductDetailHeader, generateFilledProductDetailHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_detail_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-detail-header.component */ "./src/shared/modules/product-detail-header/product-detail-header.component.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductDetailHeaderComponent", function() { return _product_detail_header_component__WEBPACK_IMPORTED_MODULE_0__["ProductDetailHeaderComponent"]; });

/* harmony import */ var _dummy_data_generators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dummy-data-generators */ "./src/shared/modules/product-detail-header/dummy-data-generators.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateFilledSocialMediaButtonsProductDetailHeaderModule", function() { return _dummy_data_generators__WEBPACK_IMPORTED_MODULE_1__["generateFilledSocialMediaButtonsProductDetailHeaderModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateEmptySocialMediaButtonsProductDetailHeaderModule", function() { return _dummy_data_generators__WEBPACK_IMPORTED_MODULE_1__["generateEmptySocialMediaButtonsProductDetailHeaderModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateEmptyProductDetailHeader", function() { return _dummy_data_generators__WEBPACK_IMPORTED_MODULE_1__["generateEmptyProductDetailHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateFilledProductDetailHeader", function() { return _dummy_data_generators__WEBPACK_IMPORTED_MODULE_1__["generateFilledProductDetailHeader"]; });




/***/ }),

/***/ "./src/shared/modules/product-detail-header/product-detail-header-component.module.scss":
/*!**********************************************************************************************!*\
  !*** ./src/shared/modules/product-detail-header/product-detail-header-component.module.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"product-detail-header":"product-detail-header-component_product-detail-header__2Ww_x","productDetailHeader":"product-detail-header-component_product-detail-header__2Ww_x","product-detail-header__slider__image-container":"product-detail-header-component_product-detail-header__slider__image-container__2f0qZ","productDetailHeaderSliderImageContainer":"product-detail-header-component_product-detail-header__slider__image-container__2f0qZ","product-detail-header__body-text":"product-detail-header-component_product-detail-header__body-text__2n2-g","productDetailHeaderBodyText":"product-detail-header-component_product-detail-header__body-text__2n2-g","product-detail-header__picture-slider":"product-detail-header-component_product-detail-header__picture-slider__2UhL-","productDetailHeaderPictureSlider":"product-detail-header-component_product-detail-header__picture-slider__2UhL-","product-detail-header__picture-slider__main-image":"product-detail-header-component_product-detail-header__picture-slider__main-image__1KO5-","productDetailHeaderPictureSliderMainImage":"product-detail-header-component_product-detail-header__picture-slider__main-image__1KO5-","product-detail-header__picture-slider__small-images-container":"product-detail-header-component_product-detail-header__picture-slider__small-images-container__2kO0b","productDetailHeaderPictureSliderSmallImagesContainer":"product-detail-header-component_product-detail-header__picture-slider__small-images-container__2kO0b","product-detail-header__picture-slider__small-image":"product-detail-header-component_product-detail-header__picture-slider__small-image__gaSl2","productDetailHeaderPictureSliderSmallImage":"product-detail-header-component_product-detail-header__picture-slider__small-image__gaSl2","product-detail-header__slider":"product-detail-header-component_product-detail-header__slider__23wf0","productDetailHeaderSlider":"product-detail-header-component_product-detail-header__slider__23wf0","product-detail-header__links":"product-detail-header-component_product-detail-header__links__2da7a","productDetailHeaderLinks":"product-detail-header-component_product-detail-header__links__2da7a","product-detail-header__links__icon":"product-detail-header-component_product-detail-header__links__icon__ePu4L","productDetailHeaderLinksIcon":"product-detail-header-component_product-detail-header__links__icon__ePu4L","product-detail-header__social-icon":"product-detail-header-component_product-detail-header__social-icon__OVOh4","productDetailHeaderSocialIcon":"product-detail-header-component_product-detail-header__social-icon__OVOh4","button-back":"product-detail-header-component_button-back__3KE0T","buttonBack":"product-detail-header-component_button-back__3KE0T"};
    if(true) {
      // 1559913283914
      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/product-detail-header/product-detail-header.component.tsx":
/*!**************************************************************************************!*\
  !*** ./src/shared/modules/product-detail-header/product-detail-header.component.tsx ***!
  \**************************************************************************************/
/*! exports provided: ProductDetailHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailHeaderComponent", function() { return ProductDetailHeaderComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _product_detail_header_component_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-detail-header-component.module.scss */ "./src/shared/modules/product-detail-header/product-detail-header-component.module.scss");
/* harmony import */ var _product_detail_header_component_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_product_detail_header_component_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_icons_arrow_left_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @assets/icons/arrow-left.svg */ "./src/assets/icons/arrow-left.svg");
/* harmony import */ var _assets_icons_arrow_left_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_arrow_left_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_modules_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/core */ "./src/shared/modules/core/index.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_modules_social_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/modules/social-media */ "./src/shared/modules/social-media/index.ts");
/* harmony import */ var _settings_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings-slider */ "./src/shared/modules/product-detail-header/settings-slider.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var ProductDetailHeaderComponent = function ProductDetailHeaderComponent(props) {
  var settingsSlider = Object(_settings_slider__WEBPACK_IMPORTED_MODULE_7__["settingSlider"])(props.customNextArrow, props.customPrevArrow);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](props.productDetailHeaderModule.listPictures[0]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      urlBigPicture = _React$useState2[0],
      seturlBigPicture = _React$useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "uk-container"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: "/",
    className: _product_detail_header_component_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["button-back"]
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_core__WEBPACK_IMPORTED_MODULE_4__["IconComponent"], {
    icon: _assets_icons_arrow_left_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    size: "12px"
  }), props.productDetailHeaderModule.backButtonText), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _product_detail_header_component_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["product-detail-header"]
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _product_detail_header_component_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["product-detail-header__picture-slider"]
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _product_detail_header_component_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["product-detail-header__picture-slider__main-image"]
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: urlBigPicture,
    alt: "img"
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _product_detail_header_component_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["product-detail-header__picture-slider__small-images-container"]
  }, props.productDetailHeaderModule.listPictures.map(function (url) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: _product_detail_header_component_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["product-detail-header__picture-slider__small-image"]
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
      src: url,
      alt: "img",
      onClick: function onClick() {
        seturlBigPicture(url);
      }
    }));
  }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _product_detail_header_component_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["product-detail-header__body-text"]
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, props.productDetailHeaderModule.header), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, props.productDetailHeaderModule.subHeader), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _product_detail_header_component_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["product-detail-header__slider"]
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, settingsSlider, props.productDetailHeaderModule.listPictures.map(function (url) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: _product_detail_header_component_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["product-detail-header__slider__image-container"]
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
      src: url,
      alt: "img"
    }));
  }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, props.productDetailHeaderModule.body), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _product_detail_header_component_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["product-detail-header__links"]
  }, props.productDetailHeaderModule.links.map(function (link) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: link.route
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      className: _product_detail_header_component_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["product-detail-header__links__icon"]
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_core__WEBPACK_IMPORTED_MODULE_4__["IconComponent"], {
      icon: link.icon,
      size: "18px"
    })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, link.content));
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _product_detail_header_component_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["product-detail-header__social-icon"]
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_social_media__WEBPACK_IMPORTED_MODULE_6__["SocialMediaComponent"], {
    socialMediaButtons: props.socialMediaButtons,
    socialMediaComponentType: _app_modules_social_media__WEBPACK_IMPORTED_MODULE_6__["SocialMediaComponentType"].SHARE
  })))));
};



/***/ }),

/***/ "./src/shared/modules/product-detail-header/settings-slider.tsx":
/*!**********************************************************************!*\
  !*** ./src/shared/modules/product-detail-header/settings-slider.tsx ***!
  \**********************************************************************/
/*! exports provided: settingSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingSlider", function() { return settingSlider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_constants_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/constants/icons */ "./src/shared/constants/icons.ts");


var scrollingSpeed = 500;

var BasicArrow = function BasicArrow(props) {
  var className = props.className,
      onClick = props.onClick;
  var result = null;

  if (props.customArrow === undefined) {
    result = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
      className: "".concat(className),
      style: {
        display: "block"
      },
      onClick: onClick
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
      src: Object(_app_constants_icons__WEBPACK_IMPORTED_MODULE_1__["getArrow"])(props.prev),
      alt: "arrow"
    }));
  } else {
    result = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: className,
      onClick: onClick,
      role: "button"
    }, props.customArrow);
  }

  return result;
};

var settingSlider = function settingSlider(nextArrow, prevArrow) {
  return {
    arrows: true,
    nextArrow: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](BasicArrow, {
      customArrow: nextArrow
    }),
    prevArrow: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](BasicArrow, {
      customArrow: prevArrow,
      prev: true
    }),
    dots: false,
    draggable: true,
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: scrollingSpeed
  };
};

/***/ }),

/***/ "./src/shared/modules/product-line-filter/components/product-line-cards-component.module.scss":
/*!****************************************************************************************************!*\
  !*** ./src/shared/modules/product-line-filter/components/product-line-cards-component.module.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"product-overview__header":"product-line-cards-component_product-overview__header__16jtw","productOverviewHeader":"product-line-cards-component_product-overview__header__16jtw","product-overview__wrap":"product-line-cards-component_product-overview__wrap___rUtN","productOverviewWrap":"product-line-cards-component_product-overview__wrap___rUtN","product-overview__space":"product-line-cards-component_product-overview__space__2NUCy","productOverviewSpace":"product-line-cards-component_product-overview__space__2NUCy","product-overview__block":"product-line-cards-component_product-overview__block__2dLj_","productOverviewBlock":"product-line-cards-component_product-overview__block__2dLj_","slick-slide":"product-line-cards-component_slick-slide__3RaTj","slickSlide":"product-line-cards-component_slick-slide__3RaTj","card--product":"product-line-cards-component_card--product__11HDr","cardProduct":"product-line-cards-component_card--product__11HDr","product-overview":"product-line-cards-component_product-overview__2FYCJ","productOverview":"product-line-cards-component_product-overview__2FYCJ","slick-slider":"product-line-cards-component_slick-slider__3-4aR","slickSlider":"product-line-cards-component_slick-slider__3-4aR","slick-list":"product-line-cards-component_slick-list__ysA1X","slickList":"product-line-cards-component_slick-list__ysA1X","empty-state":"product-line-cards-component_empty-state__1yipS","emptyState":"product-line-cards-component_empty-state__1yipS"};
    if(true) {
      // 1559913282483
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/product-line-filter/components/product-line-filter-component.module.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/shared/modules/product-line-filter/components/product-line-filter-component.module.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"layout-two-columns":"product-line-filter-component_layout-two-columns__1OWgT","layoutTwoColumns":"product-line-filter-component_layout-two-columns__1OWgT","layout-two-columns__foreground":"product-line-filter-component_layout-two-columns__foreground__qDXK-","layoutTwoColumnsForeground":"product-line-filter-component_layout-two-columns__foreground__qDXK-","layout-two-columns--decor-top":"product-line-filter-component_layout-two-columns--decor-top__kVPhY","layoutTwoColumnsDecorTop":"product-line-filter-component_layout-two-columns--decor-top__kVPhY","layout-two-columns--decor-bottom":"product-line-filter-component_layout-two-columns--decor-bottom__3ifwF","layoutTwoColumnsDecorBottom":"product-line-filter-component_layout-two-columns--decor-bottom__3ifwF","product-overview__header":"product-line-filter-component_product-overview__header__3EoqH","productOverviewHeader":"product-line-filter-component_product-overview__header__3EoqH","product-overview__wrap":"product-line-filter-component_product-overview__wrap__GzM6x","productOverviewWrap":"product-line-filter-component_product-overview__wrap__GzM6x","product-overview__block":"product-line-filter-component_product-overview__block__HGNvb","productOverviewBlock":"product-line-filter-component_product-overview__block__HGNvb","slick-slide":"product-line-filter-component_slick-slide__q0cFv","slickSlide":"product-line-filter-component_slick-slide__q0cFv","card--product":"product-line-filter-component_card--product__11aJU","cardProduct":"product-line-filter-component_card--product__11aJU","product-overview":"product-line-filter-component_product-overview__1ZTrY","productOverview":"product-line-filter-component_product-overview__1ZTrY","slick-slider":"product-line-filter-component_slick-slider__2fxrF","slickSlider":"product-line-filter-component_slick-slider__2fxrF","slick-list":"product-line-filter-component_slick-list__1kNbB","slickList":"product-line-filter-component_slick-list__1kNbB","empty-state":"product-line-filter-component_empty-state__2bur9","emptyState":"product-line-filter-component_empty-state__2bur9"};
    if(true) {
      // 1559913282051
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/product-line-filter/components/product-overview-sidebar-component.module.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/shared/modules/product-line-filter/components/product-overview-sidebar-component.module.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"responsive":"product-overview-sidebar-component_responsive__3rxFe","sidebar":"product-overview-sidebar-component_sidebar__E7cl8","sidebar__block":"product-overview-sidebar-component_sidebar__block__3QuUx","sidebarBlock":"product-overview-sidebar-component_sidebar__block__3QuUx","sidebar__search":"product-overview-sidebar-component_sidebar__search___ec-q","sidebarSearch":"product-overview-sidebar-component_sidebar__search___ec-q","uk-accordion":"product-overview-sidebar-component_uk-accordion__3_4j8","ukAccordion":"product-overview-sidebar-component_uk-accordion__3_4j8","uk-accordion-title":"product-overview-sidebar-component_uk-accordion-title__2HBTH","ukAccordionTitle":"product-overview-sidebar-component_uk-accordion-title__2HBTH","uk-accordion-content":"product-overview-sidebar-component_uk-accordion-content__1V6WX","ukAccordionContent":"product-overview-sidebar-component_uk-accordion-content__1V6WX","sidebar--modify":"product-overview-sidebar-component_sidebar--modify__3kuM3","sidebarModify":"product-overview-sidebar-component_sidebar--modify__3kuM3"};
    if(true) {
      // 1559913281914
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/product-line-overview/card/product-card.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/shared/modules/product-line-overview/card/product-card.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1559913282365
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/product-line-overview/components/product-line-overview.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/shared/modules/product-line-overview/components/product-line-overview.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1559913277500
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/product-overview-simple/component/product-overview-simple-component.module.scss":
/*!************************************************************************************************************!*\
  !*** ./src/shared/modules/product-overview-simple/component/product-overview-simple-component.module.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"product-overview__header":"product-overview-simple-component_product-overview__header__224Rk","productOverviewHeader":"product-overview-simple-component_product-overview__header__224Rk","product-overview__wrap":"product-overview-simple-component_product-overview__wrap__ZcWMe","productOverviewWrap":"product-overview-simple-component_product-overview__wrap__ZcWMe","product-overview__space":"product-overview-simple-component_product-overview__space__3Jjol","productOverviewSpace":"product-overview-simple-component_product-overview__space__3Jjol","product-overview__block":"product-overview-simple-component_product-overview__block__1ecPK","productOverviewBlock":"product-overview-simple-component_product-overview__block__1ecPK","slick-slide":"product-overview-simple-component_slick-slide__1CNwu","slickSlide":"product-overview-simple-component_slick-slide__1CNwu","card--product":"product-overview-simple-component_card--product__1-uX9","cardProduct":"product-overview-simple-component_card--product__1-uX9","product-overview":"product-overview-simple-component_product-overview__2TLlj","productOverview":"product-overview-simple-component_product-overview__2TLlj","slick-slider":"product-overview-simple-component_slick-slider__2CBlQ","slickSlider":"product-overview-simple-component_slick-slider__2CBlQ","slick-list":"product-overview-simple-component_slick-list__2aB1E","slickList":"product-overview-simple-component_slick-list__2aB1E","empty-state":"product-overview-simple-component_empty-state__Y8181","emptyState":"product-overview-simple-component_empty-state__Y8181"};
    if(true) {
      // 1559913281478
      var cssReload = __webpack_require__(/*! ../../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/recipe-detail/index.ts":
/*!***************************************************!*\
  !*** ./src/shared/modules/recipe-detail/index.ts ***!
  \***************************************************/
/*! exports provided: RecipeDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _recipe_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe-detail.component */ "./src/shared/modules/recipe-detail/recipe-detail.component.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecipeDetail", function() { return _recipe_detail_component__WEBPACK_IMPORTED_MODULE_0__["RecipeDetail"]; });



/***/ }),

/***/ "./src/shared/modules/recipe-detail/recipe-detail-component.module.scss":
/*!******************************************************************************!*\
  !*** ./src/shared/modules/recipe-detail/recipe-detail-component.module.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"header-background":"recipe-detail-component_header-background__3rFKt","headerBackground":"recipe-detail-component_header-background__3rFKt","recipe-detail":"recipe-detail-component_recipe-detail__2fUv6","recipeDetail":"recipe-detail-component_recipe-detail__2fUv6","recipe-detail__back":"recipe-detail-component_recipe-detail__back__3hKZq","recipeDetailBack":"recipe-detail-component_recipe-detail__back__3hKZq","recipe-detail__ingredients":"recipe-detail-component_recipe-detail__ingredients__1f8Yc","recipeDetailIngredients":"recipe-detail-component_recipe-detail__ingredients__1f8Yc","recipe-detail__howto":"recipe-detail-component_recipe-detail__howto__uT-Cx","recipeDetailHowto":"recipe-detail-component_recipe-detail__howto__uT-Cx","recipe-detail__howto__foreground":"recipe-detail-component_recipe-detail__howto__foreground__P2XsS","recipeDetailHowtoForeground":"recipe-detail-component_recipe-detail__howto__foreground__P2XsS","recipe-detail__howto__header":"recipe-detail-component_recipe-detail__howto__header__1GXM_","recipeDetailHowtoHeader":"recipe-detail-component_recipe-detail__howto__header__1GXM_","recipe-detail__howto__header-background":"recipe-detail-component_recipe-detail__howto__header-background__yFjCK","recipeDetailHowtoHeaderBackground":"recipe-detail-component_recipe-detail__howto__header-background__yFjCK","recipe-detail__howto__info":"recipe-detail-component_recipe-detail__howto__info__2tHMH","recipeDetailHowtoInfo":"recipe-detail-component_recipe-detail__howto__info__2tHMH","recipe-detail__howto__info-box":"recipe-detail-component_recipe-detail__howto__info-box__33dID","recipeDetailHowtoInfoBox":"recipe-detail-component_recipe-detail__howto__info-box__33dID","recipe-detail__howto__info-box-holder":"recipe-detail-component_recipe-detail__howto__info-box-holder__3hlhh","recipeDetailHowtoInfoBoxHolder":"recipe-detail-component_recipe-detail__howto__info-box-holder__3hlhh","recipe-detail__howto__info-list":"recipe-detail-component_recipe-detail__howto__info-list__2_-8l","recipeDetailHowtoInfoList":"recipe-detail-component_recipe-detail__howto__info-list__2_-8l","icon-svg":"recipe-detail-component_icon-svg__3TZsO","iconSvg":"recipe-detail-component_icon-svg__3TZsO","recipe-detail__howto__item":"recipe-detail-component_recipe-detail__howto__item__1t9mG","recipeDetailHowtoItem":"recipe-detail-component_recipe-detail__howto__item__1t9mG","recipe-detail__howto__item-title":"recipe-detail-component_recipe-detail__howto__item-title__B6CeX","recipeDetailHowtoItemTitle":"recipe-detail-component_recipe-detail__howto__item-title__B6CeX","recipe-detail__howto__gallery":"recipe-detail-component_recipe-detail__howto__gallery__3Tba3","recipeDetailHowtoGallery":"recipe-detail-component_recipe-detail__howto__gallery__3Tba3"};
    if(true) {
      // 1559913284609
      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/recipe-detail/recipe-detail.component.tsx":
/*!**********************************************************************!*\
  !*** ./src/shared/modules/recipe-detail/recipe-detail.component.tsx ***!
  \**********************************************************************/
/*! exports provided: RecipeDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetail", function() { return RecipeDetail; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_modules_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/modules/core */ "./src/shared/modules/core/index.ts");
/* harmony import */ var _recipe_detail_component_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipe-detail-component.module.scss */ "./src/shared/modules/recipe-detail/recipe-detail-component.module.scss");
/* harmony import */ var _recipe_detail_component_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_recipe_detail_component_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_icons_arrow_left_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @assets/icons/arrow-left.svg */ "./src/assets/icons/arrow-left.svg");
/* harmony import */ var _assets_icons_arrow_left_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_arrow_left_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_recipe_head_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/recipe-head-card */ "./src/shared/modules/core/recipe-head-card/index.ts");
/* harmony import */ var _core_ingredient_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/ingredient-list */ "./src/shared/modules/core/ingredient-list/index.ts");
/* harmony import */ var _core_related_posts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/related-posts */ "./src/shared/modules/core/related-posts/index.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_constants_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/constants/icons */ "./src/shared/constants/icons.ts");











var RecipeDetail = function RecipeDetail(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _recipe_detail_component_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a["recipe-detail"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _recipe_detail_component_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a["header-background"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _recipe_detail_component_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a["recipe-detail__foreground"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "uk-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: _recipe_detail_component_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a["recipe-detail__back"],
    to: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_modules_core__WEBPACK_IMPORTED_MODULE_2__["IconComponent"], {
    icon: _assets_icons_arrow_left_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    size: "12px"
  }), "Terug naar alle recepten"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, props.recipeDetailModule.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.recipeDetailModule.subTitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_core_recipe_head_card__WEBPACK_IMPORTED_MODULE_5__["RecipeHeadCard"], {
    itemsRecipeInfo: props.recipeDetailModule.itensRecipeInfo,
    pictureBG: _app_constants_icons__WEBPACK_IMPORTED_MODULE_9__["IMAGE_FEATURED"]
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "uk-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "uk-grid uk-grid-large"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()("uk-width-1-3@m ".concat(_recipe_detail_component_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a["recipe-detail__ingredients"]))
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_core_ingredient_list__WEBPACK_IMPORTED_MODULE_6__["IngredientList"], {
    title: props.recipeDetailModule.sidebarTitle,
    pictures: props.recipeDetailModule.ingredientsPics,
    ingredients: props.recipeDetailModule.ingredients
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "uk-width-2-3@m"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _recipe_detail_component_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a["recipe-detail__howto"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Bereiden"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, props.recipeDetailModule.howTo.steps.map(function (step, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: index
    }, step);
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.recipeDetailModule.howTo.extraText)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_core_related_posts__WEBPACK_IMPORTED_MODULE_7__["RelatedPosts"], {
    title: props.recipeDetailModule.titleRelatedPosts,
    buttonURL: props.recipeDetailModule.buttonURLRelatedPosts,
    buttonText: props.recipeDetailModule.buttonTextRelatedPosts,
    products: props.recipeDetailModule.productsRelatedPosts
  })))));
};



/***/ }),

/***/ "./src/shared/modules/related-products-slider/related-products-slider-component.module.scss":
/*!**************************************************************************************************!*\
  !*** ./src/shared/modules/related-products-slider/related-products-slider-component.module.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"related-product-slider":"related-products-slider-component_related-product-slider__3XQ8r","relatedProductSlider":"related-products-slider-component_related-product-slider__3XQ8r","related-product-slider__foreground":"related-products-slider-component_related-product-slider__foreground__3kAkE","relatedProductSliderForeground":"related-products-slider-component_related-product-slider__foreground__3kAkE","related-product-slider__header":"related-products-slider-component_related-product-slider__header__2iPYg","relatedProductSliderHeader":"related-products-slider-component_related-product-slider__header__2iPYg","related-product-slider__header-button":"related-products-slider-component_related-product-slider__header-button__p3s8q","relatedProductSliderHeaderButton":"related-products-slider-component_related-product-slider__header-button__p3s8q","related-product-slider__slide":"related-products-slider-component_related-product-slider__slide__14Muz","relatedProductSliderSlide":"related-products-slider-component_related-product-slider__slide__14Muz","related-product-slider__bottom-button":"related-products-slider-component_related-product-slider__bottom-button__pFtMs","relatedProductSliderBottomButton":"related-products-slider-component_related-product-slider__bottom-button__pFtMs","related-product-slider__mobile-container":"related-products-slider-component_related-product-slider__mobile-container__N6l3N","relatedProductSliderMobileContainer":"related-products-slider-component_related-product-slider__mobile-container__N6l3N"};
    if(true) {
      // 1559913277243
      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/sale-point/sale-point-component.module.scss":
/*!************************************************************************!*\
  !*** ./src/shared/modules/sale-point/sale-point-component.module.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"sale-point":"sale-point-component_sale-point__1nbYM","salePoint":"sale-point-component_sale-point__1nbYM","sale-point__content":"sale-point-component_sale-point__content__1vyrt","salePointContent":"sale-point-component_sale-point__content__1vyrt","uk-grid":"sale-point-component_uk-grid__Go8t9","ukGrid":"sale-point-component_uk-grid__Go8t9","sale-point__partner":"sale-point-component_sale-point__partner__2epZI","salePointPartner":"sale-point-component_sale-point__partner__2epZI","sale-point__partner-item":"sale-point-component_sale-point__partner-item__1EG7d","salePointPartnerItem":"sale-point-component_sale-point__partner-item__1EG7d","sale-point__decor":"sale-point-component_sale-point__decor__1ExPE","salePointDecor":"sale-point-component_sale-point__decor__1ExPE","sale-point__decor--top":"sale-point-component_sale-point__decor--top__1LrIy","salePointDecorTop":"sale-point-component_sale-point--decor-top__3XHi7","sale-point--decor-top":"sale-point-component_sale-point--decor-top__3XHi7","sale-point__decor--bottom":"sale-point-component_sale-point__decor--bottom__2yOKy","salePointDecorBottom":"sale-point-component_sale-point--decor-bottom__2GJ4M","sale-point--decor-bottom":"sale-point-component_sale-point--decor-bottom__2GJ4M"};
    if(true) {
      // 1559913276473
      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/social-media/social-media-component.module.scss":
/*!****************************************************************************!*\
  !*** ./src/shared/modules/social-media/social-media-component.module.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"social-media__nav":"social-media-component_social-media__nav__2zZpk","socialMediaNav":"social-media-component_social-media__nav__2zZpk","social-media__social":"social-media-component_social-media__social__6UfHK","socialMediaSocial":"social-media-component_social-media__social__6UfHK"};
    if(true) {
      // 1559913278450
      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/tab/B2B-data/b2b-data.component.tsx":
/*!****************************************************************!*\
  !*** ./src/shared/modules/tab/B2B-data/b2b-data.component.tsx ***!
  \****************************************************************/
/*! exports provided: B2bDataTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B2bDataTabComponent", function() { return B2bDataTabComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_TabContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/TabContent */ "./node_modules/react-bootstrap/TabContent.js");
/* harmony import */ var react_bootstrap_TabContent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_TabContent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tab_component_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tab-component.module.scss */ "./src/shared/modules/tab/tab-component.module.scss");
/* harmony import */ var _tab_component_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tab_component_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_modules_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/core */ "./src/shared/modules/core/index.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _assets_icons_PDF_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @assets/icons/PDF.svg */ "./src/assets/icons/PDF.svg");
/* harmony import */ var _assets_icons_PDF_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_PDF_svg__WEBPACK_IMPORTED_MODULE_5__);






var numberOfLines = 3;

var B2bDataTabComponent = function B2bDataTabComponent(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_TabContent__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, props.b2bData.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.b2bData.content), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _tab_component_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["tabs__table"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _tab_component_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["tabs__table-column"]
  }, props.b2bData.tabInformation.slice(0, numberOfLines).map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _tab_component_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["tabs__table-item"]
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, item.information), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, item.detail));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _tab_component_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["tabs__table-column"]
  }, props.b2bData.tabInformation.slice(numberOfLines, props.b2bData.tabInformation.length).map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _tab_component_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["tabs__table-item"]
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, item.information), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, item.detail));
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, props.b2bData.downloadTitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.b2bData.downloadContent), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: _tab_component_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["tabs__downloads"]
  }, props.b2bData.downloadLinks.map(function (links) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "#"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_modules_core__WEBPACK_IMPORTED_MODULE_3__["IconComponent"], {
      size: "14px",
      icon: _assets_icons_PDF_svg__WEBPACK_IMPORTED_MODULE_5___default.a
    }), links.content));
  })));
};



/***/ }),

/***/ "./src/shared/modules/tab/general-product-information/general-product-information.component.tsx":
/*!******************************************************************************************************!*\
  !*** ./src/shared/modules/tab/general-product-information/general-product-information.component.tsx ***!
  \******************************************************************************************************/
/*! exports provided: GeneralProductInformationTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralProductInformationTabComponent", function() { return GeneralProductInformationTabComponent; });
/* harmony import */ var react_bootstrap_TabContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-bootstrap/TabContent */ "./node_modules/react-bootstrap/TabContent.js");
/* harmony import */ var react_bootstrap_TabContent__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_TabContent__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_modules_body_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/modules/body-text */ "./src/shared/modules/body-text/index.ts");




var GeneralProductInformationTabComponent = function GeneralProductInformationTabComponent(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_TabContent__WEBPACK_IMPORTED_MODULE_0___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_app_modules_body_text__WEBPACK_IMPORTED_MODULE_2__["BodyTextComponent"], {
    bodyTextModule: props.generalProductInformation
  }));
};



/***/ }),

/***/ "./src/shared/modules/tab/product-information/product-information.component.tsx":
/*!**************************************************************************************!*\
  !*** ./src/shared/modules/tab/product-information/product-information.component.tsx ***!
  \**************************************************************************************/
/*! exports provided: ProductInformationTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductInformationTabComponent", function() { return ProductInformationTabComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_TabContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/TabContent */ "./node_modules/react-bootstrap/TabContent.js");
/* harmony import */ var react_bootstrap_TabContent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_TabContent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tab_component_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tab-component.module.scss */ "./src/shared/modules/tab/tab-component.module.scss");
/* harmony import */ var _tab_component_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tab_component_module_scss__WEBPACK_IMPORTED_MODULE_2__);



var numberOfLines = 5;

var ProductInformationTabComponent = function ProductInformationTabComponent(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_TabContent__WEBPACK_IMPORTED_MODULE_1___default.a, null, props.productInformation.map(function (product) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, product.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _tab_component_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["tabs__table"]
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _tab_component_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["tabs__table-column"]
    }, product.tabInformation.slice(0, numberOfLines).map(function (item) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _tab_component_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["tabs__table-item"]
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, item.information), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, item.detail));
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _tab_component_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["tabs__table-column"]
    }, product.tabInformation.slice(numberOfLines, product.tabInformation.length).map(function (item) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _tab_component_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["tabs__table-item"]
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, item.information), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, item.detail));
    }))));
  }));
};



/***/ }),

/***/ "./src/shared/modules/tab/sale-points/sale-points.tsx":
/*!************************************************************!*\
  !*** ./src/shared/modules/tab/sale-points/sale-points.tsx ***!
  \************************************************************/
/*! exports provided: SalePointTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalePointTabComponent", function() { return SalePointTabComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_TabContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/TabContent */ "./node_modules/react-bootstrap/TabContent.js");
/* harmony import */ var react_bootstrap_TabContent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_TabContent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tab_component_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tab-component.module.scss */ "./src/shared/modules/tab/tab-component.module.scss");
/* harmony import */ var _tab_component_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tab_component_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_modules_core_google_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/core/google-maps */ "./src/shared/modules/core/google-maps/index.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");






var SalePointTabComponent = function SalePointTabComponent(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_TabContent__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, props.salePoints.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.salePoints.content), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_modules_core_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsComponent"], {
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyD_5JHVDtu9mqaI3rB4zHebT-KQSOb6azs&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        height: "100%"
      }
    }),
    containerElement: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        height: "472px"
      }
    }),
    mapElement: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        height: "100%"
      }
    }),
    mapTypeControl: false,
    markers: props.salePoints.markers
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _tab_component_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["tabs__logos"]
  }, props.salePoints.imageLinks.map(function (image) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: image.url
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: image.logo,
      alt: "image"
    }));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Verkoopt u TerraSana producten en staat uw adres niet vermeld? Neemt u dan contact met ons op? Dan passen wij het z.s.m. aan."));
};



/***/ }),

/***/ "./src/shared/modules/tab/tab-component.module.scss":
/*!**********************************************************!*\
  !*** ./src/shared/modules/tab/tab-component.module.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"tabs__nav":"tab-component_tabs__nav__1uySL","tabsNav":"tab-component_tabs__nav__1uySL","uk-active":"tab-component_uk-active__Q7eUa","ukActive":"tab-component_uk-active__Q7eUa","tabs__content":"tab-component_tabs__content__u0PU_","tabsContent":"tab-component_tabs__content__u0PU_","tabs__table":"tab-component_tabs__table__5roXG","tabsTable":"tab-component_tabs__table__5roXG","tabs__table-column":"tab-component_tabs__table-column__24O2r","tabsTableColumn":"tab-component_tabs__table-column__24O2r","tabs__table-item":"tab-component_tabs__table-item__1i1ng","tabsTableItem":"tab-component_tabs__table-item__1i1ng","tabs__downloads":"tab-component_tabs__downloads__3NftD","tabsDownloads":"tab-component_tabs__downloads__3NftD","icon-svg":"tab-component_icon-svg__3TplS","iconSvg":"tab-component_icon-svg__3TplS","tabs__logos":"tab-component_tabs__logos__1GDZl","tabsLogos":"tab-component_tabs__logos__1GDZl","algemene-product-informatie":"tab-component_algemene-product-informatie__BAlyM","algemeneProductInformatie":"tab-component_algemene-product-informatie__BAlyM"};
    if(true) {
      // 1559913282256
      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/tab/tab-title.component.tsx":
/*!********************************************************!*\
  !*** ./src/shared/modules/tab/tab-title.component.tsx ***!
  \********************************************************/
/*! exports provided: TabsTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsTitleComponent", function() { return TabsTitleComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _tab_component_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab-component.module.scss */ "./src/shared/modules/tab/tab-component.module.scss");
/* harmony import */ var _tab_component_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tab_component_module_scss__WEBPACK_IMPORTED_MODULE_2__);




var TabsTitleComponent = function TabsTitleComponent(props) {
  function getKey(value) {
    props.onKeyChange(value);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "#",
    onClick: function onClick() {
      getKey(props.children);
    }
  }, props.children));
};



/***/ }),

/***/ "./src/shared/modules/tab/tab.component.tsx":
/*!**************************************************!*\
  !*** ./src/shared/modules/tab/tab.component.tsx ***!
  \**************************************************/
/*! exports provided: TabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tab_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-title.component */ "./src/shared/modules/tab/tab-title.component.tsx");
/* harmony import */ var _tab_component_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab-component.module.scss */ "./src/shared/modules/tab/tab-component.module.scss");
/* harmony import */ var _tab_component_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tab_component_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sale_points_sale_points__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sale-points/sale-points */ "./src/shared/modules/tab/sale-points/sale-points.tsx");
/* harmony import */ var _general_product_information_general_product_information_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general-product-information/general-product-information.component */ "./src/shared/modules/tab/general-product-information/general-product-information.component.tsx");
/* harmony import */ var _product_information_product_information_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-information/product-information.component */ "./src/shared/modules/tab/product-information/product-information.component.tsx");
/* harmony import */ var _B2B_data_b2b_data_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./B2B-data/b2b-data.component */ "./src/shared/modules/tab/B2B-data/b2b-data.component.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var TabComponent = function TabComponent(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(1),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      tabIndex = _React$useState2[0],
      setTabIndex = _React$useState2[1];

  var generalProductInformation = 1;
  var productInformation = 2;
  var salePoints = 3;
  var b2bData = 4;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "uk-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: _tab_component_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["tabs__nav"]
  }, props.tab.tabsTitle.map(function (tab) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tab_title_component__WEBPACK_IMPORTED_MODULE_1__["TabsTitleComponent"], {
      onKeyChange: function onKeyChange() {
        setTabIndex(tab.tabIndex);
      }
    }, tab.title));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "".concat(_tab_component_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["tabs__content"], " ")
  }, tabIndex === generalProductInformation ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _tab_component_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["algemene-product-informatie"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_general_product_information_general_product_information_component__WEBPACK_IMPORTED_MODULE_4__["GeneralProductInformationTabComponent"], {
    generalProductInformation: props.tab.generalInformation
  })) : tabIndex === productInformation ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_product_information_product_information_component__WEBPACK_IMPORTED_MODULE_5__["ProductInformationTabComponent"], {
    productInformation: props.tab.productInformation
  }) : tabIndex === salePoints ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sale_points_sale_points__WEBPACK_IMPORTED_MODULE_3__["SalePointTabComponent"], {
    salePoints: props.tab.salePoints
  }) : tabIndex === b2bData && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_B2B_data_b2b_data_component__WEBPACK_IMPORTED_MODULE_6__["B2bDataTabComponent"], {
    b2bData: props.tab.b2bData
  })));
};



/***/ }),

/***/ "./src/shared/modules/toggle/toggle-component.module.scss":
/*!****************************************************************!*\
  !*** ./src/shared/modules/toggle/toggle-component.module.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"toggle":"toggle-component_toggle__1ph3_","toggle__title":"toggle-component_toggle__title__2wvqt","toggleTitle":"toggle-component_toggle__title__2wvqt","toggle__block":"toggle-component_toggle__block__zo67O","toggleBlock":"toggle-component_toggle__block__zo67O","toggle--pattern":"toggle-component_toggle--pattern__3e0KM","togglePattern":"toggle-component_toggle--pattern__3e0KM","toggle--decor-top":"toggle-component_toggle--decor-top__3pFrb","toggleDecorTop":"toggle-component_toggle--decor-top__3pFrb","toggle--decor-bottom":"toggle-component_toggle--decor-bottom__3T2Le","toggleDecorBottom":"toggle-component_toggle--decor-bottom__3T2Le"};
    if(true) {
      // 1559913278318
      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/modules/toggle/toggle-module.component.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/modules/toggle/toggle-module.component.tsx ***!
  \***************************************************************/
/*! exports provided: ToggleComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleComponentModule", function() { return ToggleComponentModule; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _toggle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggle.component */ "./src/shared/modules/toggle/toggle.component.tsx");



var ToggleComponentModule = function ToggleComponentModule(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_toggle_component__WEBPACK_IMPORTED_MODULE_1__["ToggleComponent"], {
    centered: true,
    items: props.toggleModule.toggle.items,
    title: props.toggleModule.toggle.title
  });
};



/***/ }),

/***/ "./src/shared/modules/welcome/welcome-component.module.scss":
/*!******************************************************************!*\
  !*** ./src/shared/modules/welcome/welcome-component.module.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"welcome":"welcome-component_welcome__1ir3h","welcome__background":"welcome-component_welcome__background__2w0Tt","welcomeBackground":"welcome-component_welcome__background__2w0Tt","welcome__background-pattern":"welcome-component_welcome__background-pattern__76XwI","welcomeBackgroundPattern":"welcome-component_welcome__background-pattern__76XwI","welcome__decor":"welcome-component_welcome__decor__2xPKL","welcomeDecor":"welcome-component_welcome__decor__2xPKL","welcome__content":"welcome-component_welcome__content__3tg_P","welcomeContent":"welcome-component_welcome__content__3tg_P","welcome__text":"welcome-component_welcome__text__1TFm8","welcomeText":"welcome-component_welcome__text__1TFm8","welcome__card-container":"welcome-component_welcome__card-container__1_2Hd","welcomeCardContainer":"welcome-component_welcome__card-container__1_2Hd","welcome__medium-card-container":"welcome-component_welcome__medium-card-container__3JX6j","welcomeMediumCardContainer":"welcome-component_welcome__medium-card-container__3JX6j","welcome__card":"welcome-component_welcome__card__3hdhn","welcomeCard":"welcome-component_welcome__card__3hdhn","welcome__link":"welcome-component_welcome__link__2IOxD","welcomeLink":"welcome-component_welcome__link__2IOxD","welcome__small-card-container":"welcome-component_welcome__small-card-container__1rx2K","welcomeSmallCardContainer":"welcome-component_welcome__small-card-container__1rx2K","welcome__small-card":"welcome-component_welcome__small-card__3nPRl","welcomeSmallCard":"welcome-component_welcome__small-card__3nPRl"};
    if(true) {
      // 1559913277825
      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/util/get-modules-from-page.tsx":
/*!***************************************************!*\
  !*** ./src/shared/util/get-modules-from-page.tsx ***!
  \***************************************************/
/*! exports provided: getModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModule", function() { return getModule; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _get_modules_from_page_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-modules-from-page.module.scss */ "./src/shared/util/get-modules-from-page.module.scss");
/* harmony import */ var _get_modules_from_page_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_get_modules_from_page_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_modules_nav_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/modules/nav-bar */ "./src/shared/modules/nav-bar/index.ts");
/* harmony import */ var _app_modules_cta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/cta */ "./src/shared/modules/cta/index.ts");
/* harmony import */ var _app_modules_info_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/info-header */ "./src/shared/modules/info-header/index.ts");
/* harmony import */ var _app_modules_body_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/body-text */ "./src/shared/modules/body-text/index.ts");
/* harmony import */ var _app_modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/modules */ "./src/shared/modules/index.ts");
/* harmony import */ var _app_modules_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/modules/footer */ "./src/shared/modules/footer/index.ts");
/* harmony import */ var _app_modules_core_not_yet_implemented__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/modules/core/not-yet-implemented */ "./src/shared/modules/core/not-yet-implemented/index.ts");
/* harmony import */ var _app_modules_news_single_item__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/modules/news-single-item */ "./src/shared/modules/news-single-item/index.ts");
/* harmony import */ var _app_modules_our_team__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/modules/our-team */ "./src/shared/modules/our-team/index.ts");
/* harmony import */ var _app_modules_contact__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/modules/contact */ "./src/shared/modules/contact/index.ts");
/* harmony import */ var _app_modules_related_products_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/modules/related-products-slider */ "./src/shared/modules/related-products-slider/index.ts");
/* harmony import */ var _app_modules_sale_point__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/modules/sale-point */ "./src/shared/modules/sale-point/index.ts");
/* harmony import */ var _app_modules_product_line_filter_container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/modules/product-line-filter/container */ "./src/shared/modules/product-line-filter/container/index.ts");
/* harmony import */ var _app_modules_product_overview_simple_container__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/modules/product-overview-simple/container */ "./src/shared/modules/product-overview-simple/container/index.ts");
/* harmony import */ var _app_modules_faq_overview__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/modules/faq-overview */ "./src/shared/modules/faq-overview/index.ts");
/* harmony import */ var _app_modules_newsletter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/modules/newsletter */ "./src/shared/modules/newsletter/index.ts");
/* harmony import */ var _app_modules_recipe_detail__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/modules/recipe-detail */ "./src/shared/modules/recipe-detail/index.ts");
/* harmony import */ var _app_modules_tab_tab_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @app/modules/tab/tab.component */ "./src/shared/modules/tab/tab.component.tsx");
/* harmony import */ var _app_modules_more_products__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/modules/more-products */ "./src/shared/modules/more-products/index.ts");
/* harmony import */ var _app_modules_related_links_related_links_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @app/modules/related-links/related-links.component */ "./src/shared/modules/related-links/related-links.component.tsx");
/* harmony import */ var _app_modules_product_line_overview_components__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @app/modules/product-line-overview/components */ "./src/shared/modules/product-line-overview/components/index.ts");
/* harmony import */ var _app_modules_item_overview_containers__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @app/modules/item-overview/containers */ "./src/shared/modules/item-overview/containers/index.ts");
/* harmony import */ var _app_modules_news_overview_containers_news_overview_container__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @app/modules/news-overview/containers/news-overview.container */ "./src/shared/modules/news-overview/containers/news-overview.container.ts");
/* harmony import */ var _app_modules_product_detail_header__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @app/modules/product-detail-header */ "./src/shared/modules/product-detail-header/index.ts");
/* harmony import */ var _app_modules_not_found__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @app/modules/not-found */ "./src/shared/modules/not-found/index.ts");
/* harmony import */ var _app_modules_featured_item__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @app/modules/featured-item */ "./src/shared/modules/featured-item/index.ts");
/* harmony import */ var _app_modules_toggle_toggle_module_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @app/modules/toggle/toggle-module.component */ "./src/shared/modules/toggle/toggle-module.component.tsx");
/* harmony import */ var _app_modules_core_gallery_slider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @app/modules/core/gallery-slider */ "./src/shared/modules/core/gallery-slider/index.ts");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
































var getModule = function getModule(wordPressModule) {
  var component = getComponent(wordPressModule);

  var styleMainContainerModule = _objectSpread({}, getBackgroundStyleProperties(wordPressModule.background), {
    paddingTop: wordPressModule.topPadding,
    paddingBottom: wordPressModule.bottomPadding
  });

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _get_modules_from_page_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["contentComponent"],
    style: styleMainContainerModule
  }, component);
};

var getComponent = function getComponent(wordPressModule) {
  switch (wordPressModule.name) {
    case "Navbar":
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_nav_bar__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"], {
        navBarModule: wordPressModule
      });

    case "WelcomeModule":
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"], {
        bgcolor: "white",
        welcomeModule: wordPressModule
      });

    case "CTAModule":
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_cta__WEBPACK_IMPORTED_MODULE_3__["CtaComponent"], {
        ctaModule: wordPressModule
      });

    case "infoHeaderModule":
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_info_header__WEBPACK_IMPORTED_MODULE_4__["InfoHeaderComponent"], {
        infoHeaderModule: wordPressModule
      });

    case "bodyTextModule":
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_body_text__WEBPACK_IMPORTED_MODULE_5__["BodyTextComponent"], {
        bodyTextModule: wordPressModule
      });

    case "NewsOverviewModule":
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_news_overview_containers_news_overview_container__WEBPACK_IMPORTED_MODULE_24__["NewsOverviewContainer"], {
        newsOverviewModule: wordPressModule
      });

    case "FooterModule":
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_footer__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], {
        socialMediaButtons: Object(_app_modules_footer__WEBPACK_IMPORTED_MODULE_7__["generateFilledFSocialMediaButtons"])(),
        footerModule: wordPressModule
      });

    case "InstagramModule":
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules__WEBPACK_IMPORTED_MODULE_6__["InstagramWallComponent"], {
        instagramWallModule: wordPressModule
      });

    case "ProductLineStoryOverviewModule":
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_product_line_overview_components__WEBPACK_IMPORTED_MODULE_22__["ProductsLineOverviewComponent"], {
        productLineOverviewModule: wordPressModule
      });

    case "bodyTextExpandedModule":
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_news_single_item__WEBPACK_IMPORTED_MODULE_9__["NewsSingleItemComponent"], {
        bodyTextExpandedModule: wordPressModule
      });

    case "OurTeamComponent":
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_our_team__WEBPACK_IMPORTED_MODULE_10__["OurTeamComponent"], {
        ourTeam: wordPressModule
      });

    case "ContactComponent":
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_contact__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"], {
        contact: wordPressModule
      });

    case "RelatedLinksModule":
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_related_links_related_links_component__WEBPACK_IMPORTED_MODULE_21__["RelatedLinksComponent"], {
        relatedLinks: wordPressModule
      });

    case "SalePointComponent":
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_sale_point__WEBPACK_IMPORTED_MODULE_13__["SalePointComponent"], {
        salePoint: wordPressModule
      });

    case "TabsComponent":
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_tab_tab_component__WEBPACK_IMPORTED_MODULE_19__["TabComponent"], {
        tab: wordPressModule
      });

    case "ProductLineSingleModule":
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_product_line_filter_container__WEBPACK_IMPORTED_MODULE_14__["ProductOverviewContainer"], {
        productLine: wordPressModule
      });

    case "ProductOverviewSimpleModule":
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_product_overview_simple_container__WEBPACK_IMPORTED_MODULE_15__["ProductOverviewSimpleContainer"], {
        productOverview: wordPressModule
      });

    case "FAQOverviewModule":
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_faq_overview__WEBPACK_IMPORTED_MODULE_16__["FaqOverviewComponent"], {
        faqOverviewModule: wordPressModule
      });

    case "RecipeOverviewModule":
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_item_overview_containers__WEBPACK_IMPORTED_MODULE_23__["ItemOverviewContainer"], {
        itemOverviewModule: wordPressModule
      });

    case "NewsletterComponent":
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_newsletter__WEBPACK_IMPORTED_MODULE_17__["NewsletterComponent"], {
        newsletterModule: wordPressModule
      });

    case "RecipeDetailModule":
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_recipe_detail__WEBPACK_IMPORTED_MODULE_18__["RecipeDetail"], {
        recipeDetailModule: wordPressModule
      });

    case "MoreProducts":
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_more_products__WEBPACK_IMPORTED_MODULE_20__["MoreProductsComponent"], {
        moreProductsModule: wordPressModule
      });

    case "RecipeOverviewModule":
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_item_overview_containers__WEBPACK_IMPORTED_MODULE_23__["ItemOverviewContainer"], {
        itemOverviewModule: wordPressModule
      });

    case "RelatedProductsSlider":
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_related_products_slider__WEBPACK_IMPORTED_MODULE_12__["RelatedProductsSliderComponent"], {
        relatedProductsModule: wordPressModule
      });

    case "ProductDetailHeader":
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_product_detail_header__WEBPACK_IMPORTED_MODULE_25__["ProductDetailHeaderComponent"], {
        productDetailHeaderModule: wordPressModule,
        socialMediaButtons: Object(_app_modules_product_detail_header__WEBPACK_IMPORTED_MODULE_25__["generateFilledSocialMediaButtonsProductDetailHeaderModule"])()
      });

    case "NotFoundModule":
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_not_found__WEBPACK_IMPORTED_MODULE_26__["NotFoundComponent"], {
        notFoundModule: wordPressModule
      });

    case "featuredItemModule":
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_featured_item__WEBPACK_IMPORTED_MODULE_27__["FeaturedComponent"], {
        featuredModule: wordPressModule
      });

    case "ToggleModule":
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_toggle_toggle_module_component__WEBPACK_IMPORTED_MODULE_28__["ToggleComponentModule"], {
        toggleModule: wordPressModule
      });

    case "notYetImplemented":
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_core_not_yet_implemented__WEBPACK_IMPORTED_MODULE_8__["NotYetImplementedComponent"], {
        notYetImplemented: wordPressModule
      });

    case "gallerySlider":
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_modules_core_gallery_slider__WEBPACK_IMPORTED_MODULE_29__["GallerySliderComponent"], {
        gallerySliderModule: wordPressModule
      });

    default:
  }
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

/***/ }),

/***/ "./src/shared/util/pagination/pagination-component.module.scss":
/*!*********************************************************************!*\
  !*** ./src/shared/util/pagination/pagination-component.module.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"pagination":"pagination-component_pagination__3GsN4","pagination-list":"pagination-component_pagination-list__2qahZ","paginationList":"pagination-component_pagination-list__2qahZ","pagination-item":"pagination-component_pagination-item__1pSvQ","paginationItem":"pagination-component_pagination-item__1pSvQ","pagination-item--current":"pagination-component_pagination-item--current__1qeji","paginationItemCurrent":"pagination-component_pagination-item--current__1qeji","pagination-prev":"pagination-component_pagination-prev__3VEUD","paginationPrev":"pagination-component_pagination-prev__3VEUD","pagination-next":"pagination-component_pagination-next__2mwhQ","paginationNext":"pagination-component_pagination-next__2mwhQ"};
    if(true) {
      // 1559913282883
      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy9idW5kbGUuODI5ZmQxM2ZiYmE2Y2NhNzAxYmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWNvbnMvUERGLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL21pZGRsZXdhcmUvdGh1bmsvbmV3cy50aHVuay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL21vZHVsZXMvYXV0aG9yLWluZm8vYXV0aG9yLWluZm8tY29tcG9uZW50Lm1vZHVsZS5zY3NzP2Q1Y2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9tb2R1bGVzL2JvZHktdGV4dC9ib2R5LXRleHQtY29tcG9uZW50Lm1vZHVsZS5zY3NzP2E1YTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9tb2R1bGVzL2NvbnRhY3QtZm9ybS9jb250YWN0LWZvcm0tY29tcG9uZW50Lm1vZHVsZS5zY3NzP2JhMGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9tb2R1bGVzL2NvbnRhY3QvY29udGFjdC1jb21wb25lbnQubW9kdWxlLnNjc3M/ODJlMSIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL21vZHVsZXMvY29yZS9idXR0b24vYnV0dG9uLWNvbXBvbmVudC5tb2R1bGUuc2Nzcz9iZTBmIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvbW9kdWxlcy9jb3JlL2NhdGVnb3J5LWNhcmQvY2F0ZWdvcnktY2FyZC1jb21wb25lbnQubW9kdWxlLnNjc3M/YjdmYyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL21vZHVsZXMvY29yZS9leHBhbmRhYmxlLXBhbmVsL2V4cGFuZGFibGUtcGFuZWwtY29tcG9uZW50Lm1vZHVsZS5zY3NzPzM5MTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9tb2R1bGVzL2NvcmUvZ2FsbGVyeS1zbGlkZXIvZ2FsbGVyeS1zbGlkZXItY29tcG9uZW50Lm1vZHVsZS5zY3NzPzYwOGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9tb2R1bGVzL2NvcmUvaGFtYnVyZ2VyLWJ1dHRvbi9oYW1idXJnZXIuYnV0dG9uLWNvbXBvbmVudC5tb2R1bGUuc2Nzcz80ZGU4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvbW9kdWxlcy9jb3JlL2luZ3JlZGllbnQtbGlzdC9pbmdyZWRpZW50LWxpc3QuY29tcG9uZW50LnNjc3M/NDM3YiIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL21vZHVsZXMvY29yZS9pdGVtLWNhcmQvaXRlbS1jYXJkLmNvbXBvbmVudC5zY3NzP2YzOTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9tb2R1bGVzL2NvcmUvbGFuZ3VhZ2Utc3dpdGNoL2xhbmd1YWdlLXN3aXRjaC5jb21wb25lbnQuc2Nzcz80ZDc2Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvbW9kdWxlcy9jb3JlL2xpZ2h0Ym94L2xpZ2h0Ym94LWNvbXBvbmVudC5tb2R1bGUuc2Nzcz84ZDVhIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvbW9kdWxlcy9jb3JlL25vdC15ZXQtaW1wbGVtZW50ZWQvbm90LXlldC1pbXBsZW1lbnRlZC1jb21wb25lbnQubW9kdWxlLnNjc3M/NjAzYiIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL21vZHVsZXMvY29yZS9wcm9kdWN0LWNhcmQvcHJvZHVjdC1jYXJkLWNvbXBvbmVudC5tb2R1bGUuc2Nzcz80OGJiIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvbW9kdWxlcy9jb3JlL3JlY2lwZS1oZWFkLWNhcmQvcmVjaXBlLWhlYWQtY2FyZC1jb21wb25lbnQubW9kdWxlLnNjc3M/N2ZhMCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL21vZHVsZXMvY29yZS9yZWxhdGVkLXBvc3QtY2FyZC9yZWxhdGVkLXBvc3QtY2FyZC1jb21wb25lbnQubW9kdWxlLnNjc3M/MTExNiIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL21vZHVsZXMvY29yZS9yZWxhdGVkLXBvc3RzL3JlbGF0ZWQtcG9zdHMtY29tcG9uZW50Lm1vZHVsZS5zY3NzPzlkYjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9tb2R1bGVzL2NvcmUvc2VhcmNoLWZvcm0vc2VhcmNoLWZvcm0uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9tb2R1bGVzL2NvcmUvc2hhcmUtc29jaWFsL3NoYXJlLXNvY2lhbC5jb21wb25lbnQuc2Nzcz9mY2JhIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvbW9kdWxlcy9jb3JlL3NpZGViYXItbWVudS9tZW51LWl0ZW0vbWVudS1pdGVtLWNvbXBvbmVudC5tb2R1bGUuc2Nzcz9jYjQ2Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvbW9kdWxlcy9jb3JlL3NpZGViYXItbWVudS9zaWRlYmFyLW1lbnUtY29tcG9uZW50Lm1vZHVsZS5zY3NzP2JmZjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9tb2R1bGVzL2NvcmUvc2ltcGxlLWNhcmQvc2ltcGxlLWNhcmQtY29tcG9uZW50Lm1vZHVsZS5zY3NzP2M5ZGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9tb2R1bGVzL2NvcmUvc3Vic2NyaWJlL3N1YnNjcmliZS1jb21wb25lbnQubW9kdWxlLnNjc3M/MjFiNCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL21vZHVsZXMvY29yZS90b3AtZmlsdGVyL3RvcC1maWx0ZXItY29tcG9uZW50Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvbW9kdWxlcy9jb3JlL3dpZGdldC1pdGVtcy93aWRnZXQtaXRlbXMtY29tcG9uZW50Lm1vZHVsZS5zY3NzP2FiYjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9tb2R1bGVzL2N0YS9jdGEtY29tcG9uZW50Lm1vZHVsZS5zY3NzP2JhZWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9tb2R1bGVzL2ZhcS1vdmVydmlldy9mYXEtb3ZlcnZpZXctY29tcG9uZW50Lm1vZHVsZS5zY3NzPzc1NDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9tb2R1bGVzL2ZlYXR1cmVkLWl0ZW0vZHVtbXktZGF0YS1nZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9tb2R1bGVzL2ZlYXR1cmVkLWl0ZW0vZmVhdHVyZWQtaXRlbS1jb21wb25lbnQubW9kdWxlLnNjc3M/NTk3OCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL21vZHVsZXMvZmVhdHVyZWQtaXRlbS9mZWF0dXJlZC1pdGVtLmNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9tb2R1bGVzL2ZlYXR1cmVkLWl0ZW0vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9tb2R1bGVzL2Zvb3Rlci9mb290ZXItY29tcG9uZW50Lm1vZHVsZS5zY3NzP2UxZWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9tb2R1bGVzL2luZm8taGVhZGVyL2luZm8taGVhZGVyLWNvbXBvbmVudC5tb2R1bGUuc2Nzcz85M2I0Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvbW9kdWxlcy9pbnN0YWdyYW0td2FsbC9pbnN0YWdyYW0td2FsbC1jb21wb25lbnQubW9kdWxlLnNjc3M/NWE0MiIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL21vZHVsZXMvaXRlbS1vdmVydmlldy9pdGVtLW92ZXJ2aWV3LWNvbXBvbmVudC5tb2R1bGUuc2Nzcz84MGQ4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvbW9kdWxlcy9tb3JlLXByb2R1Y3RzL2R1bW15LWRhdGEtZ2VuZXJhdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL21vZHVsZXMvbW9yZS1wcm9kdWN0cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL21vZHVsZXMvbW9yZS1wcm9kdWN0cy9tb3JlLXByb2R1Y3RzLmNvbXBvbmVudHMubW9kdWxlLnNjc3M/NjFkYyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL21vZHVsZXMvbW9yZS1wcm9kdWN0cy9tb3JlLXByb2R1Y3RzLmNvbXBvbmVudHMudHN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvbW9kdWxlcy9uYXYtYmFyL25hdi1iYXItY29tcG9uZW50Lm1vZHVsZS5zY3NzP2M0ZTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9tb2R1bGVzL25hdmJhci1zZWFyY2gvbmF2YmFyLXNlYXJjaC1jb21wb25lbnQubW9kdWxlLnNjc3M/YjdiZiIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL21vZHVsZXMvbmV3cy1vdmVydmlldy9jb250YWluZXJzL25ld3Mtb3ZlcnZpZXcuY29udGFpbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvbW9kdWxlcy9uZXdzLW92ZXJ2aWV3L25ld3Mtb3ZlcnZpZXctY29tcG9uZW50Lm1vZHVsZS5zY3NzPzlmYmMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9tb2R1bGVzL25ld3Mtb3ZlcnZpZXcvbmV3cy1vdmVydmlldy5jb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvbW9kdWxlcy9uZXdzbGV0dGVyL25ld3NsZXR0ZXItY29tcG9uZW50Lm1vZHVsZS5zY3NzP2FjNjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9tb2R1bGVzL25vdC1mb3VuZC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL21vZHVsZXMvbm90LWZvdW5kL25vdC1mb3VuZC1jb21wb25lbnQubW9kdWxlLnNjc3M/OTE4MiIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL21vZHVsZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvbW9kdWxlcy9vdXItdGVhbS1jYXJkL2NhcmQtY29tcG9uZW50Lm1vZHVsZS5zY3NzPzY1ZDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9tb2R1bGVzL291ci10ZWFtL291ci10ZWFtLWNvbXBvbmVudC5tb2R1bGUuc2Nzcz8wY2YwIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvbW9kdWxlcy9wcm9kdWN0LWRldGFpbC1oZWFkZXIvZHVtbXktZGF0YS1nZW5lcmF0b3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvbW9kdWxlcy9wcm9kdWN0LWRldGFpbC1oZWFkZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9tb2R1bGVzL3Byb2R1Y3QtZGV0YWlsLWhlYWRlci9wcm9kdWN0LWRldGFpbC1oZWFkZXItY29tcG9uZW50Lm1vZHVsZS5zY3NzP2RlMzIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9tb2R1bGVzL3Byb2R1Y3QtZGV0YWlsLWhlYWRlci9wcm9kdWN0LWRldGFpbC1oZWFkZXIuY29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL21vZHVsZXMvcHJvZHVjdC1kZXRhaWwtaGVhZGVyL3NldHRpbmdzLXNsaWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9tb2R1bGVzL3Byb2R1Y3QtbGluZS1maWx0ZXIvY29tcG9uZW50cy9wcm9kdWN0LWxpbmUtY2FyZHMtY29tcG9uZW50Lm1vZHVsZS5zY3NzPzQ3NzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9tb2R1bGVzL3Byb2R1Y3QtbGluZS1maWx0ZXIvY29tcG9uZW50cy9wcm9kdWN0LWxpbmUtZmlsdGVyLWNvbXBvbmVudC5tb2R1bGUuc2Nzcz80NDUzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvbW9kdWxlcy9wcm9kdWN0LWxpbmUtZmlsdGVyL2NvbXBvbmVudHMvcHJvZHVjdC1vdmVydmlldy1zaWRlYmFyLWNvbXBvbmVudC5tb2R1bGUuc2Nzcz8wNjRiIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvbW9kdWxlcy9wcm9kdWN0LWxpbmUtb3ZlcnZpZXcvY2FyZC9wcm9kdWN0LWNhcmQuY29tcG9uZW50LnNjc3M/YjI3NiIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL21vZHVsZXMvcHJvZHVjdC1saW5lLW92ZXJ2aWV3L2NvbXBvbmVudHMvcHJvZHVjdC1saW5lLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzPzU2ODgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9tb2R1bGVzL3Byb2R1Y3Qtb3ZlcnZpZXctc2ltcGxlL2NvbXBvbmVudC9wcm9kdWN0LW92ZXJ2aWV3LXNpbXBsZS1jb21wb25lbnQubW9kdWxlLnNjc3M/Y2ExMyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL21vZHVsZXMvcmVjaXBlLWRldGFpbC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL21vZHVsZXMvcmVjaXBlLWRldGFpbC9yZWNpcGUtZGV0YWlsLWNvbXBvbmVudC5tb2R1bGUuc2Nzcz8xODVjIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvbW9kdWxlcy9yZWNpcGUtZGV0YWlsL3JlY2lwZS1kZXRhaWwuY29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL21vZHVsZXMvcmVsYXRlZC1wcm9kdWN0cy1zbGlkZXIvcmVsYXRlZC1wcm9kdWN0cy1zbGlkZXItY29tcG9uZW50Lm1vZHVsZS5zY3NzPzI4YzciLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9tb2R1bGVzL3NhbGUtcG9pbnQvc2FsZS1wb2ludC1jb21wb25lbnQubW9kdWxlLnNjc3M/YjZjMSIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL21vZHVsZXMvc29jaWFsLW1lZGlhL3NvY2lhbC1tZWRpYS1jb21wb25lbnQubW9kdWxlLnNjc3M/MjgxNCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL21vZHVsZXMvdGFiL0IyQi1kYXRhL2IyYi1kYXRhLmNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9tb2R1bGVzL3RhYi9nZW5lcmFsLXByb2R1Y3QtaW5mb3JtYXRpb24vZ2VuZXJhbC1wcm9kdWN0LWluZm9ybWF0aW9uLmNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9tb2R1bGVzL3RhYi9wcm9kdWN0LWluZm9ybWF0aW9uL3Byb2R1Y3QtaW5mb3JtYXRpb24uY29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL21vZHVsZXMvdGFiL3NhbGUtcG9pbnRzL3NhbGUtcG9pbnRzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL21vZHVsZXMvdGFiL3RhYi1jb21wb25lbnQubW9kdWxlLnNjc3M/NGU2NCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL21vZHVsZXMvdGFiL3RhYi10aXRsZS5jb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvbW9kdWxlcy90YWIvdGFiLmNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9tb2R1bGVzL3RvZ2dsZS90b2dnbGUtY29tcG9uZW50Lm1vZHVsZS5zY3NzPzk2YTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9tb2R1bGVzL3RvZ2dsZS90b2dnbGUtbW9kdWxlLmNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9tb2R1bGVzL3dlbGNvbWUvd2VsY29tZS1jb21wb25lbnQubW9kdWxlLnNjc3M/YjNlMyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3V0aWwvZ2V0LW1vZHVsZXMtZnJvbS1wYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3V0aWwvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLWNvbXBvbmVudC5tb2R1bGUuc2Nzcz81ODZkIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9QREYuYzRhZmM2NzUuc3ZnXCI7IiwiaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IE5ld3NBcGksIE5ld3NPdmVydmlld1N0YXRlTW9kdWxlIH0gZnJvbSBcIkBhcHAvYXBpXCI7XG5pbXBvcnQgeyBuZXdzQWN0aW9ucyB9IGZyb20gXCJAYXBwL3N0b3Jlcy9uZXdzXCI7XG5cbmNvbnN0IGdldENhcmRzID0gKHRha2U6IG51bWJlciwgcGFnZTogbnVtYmVyLCBmaWx0ZXI/OiBzdHJpbmcsIGNhdGVnb3J5Pzogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHNraXAgPSBwYWdlICogdGFrZSAtIHRha2U7XG5cbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaDogRGlzcGF0Y2g8YW55PikgPT4ge1xuICAgIG5ld3NBY3Rpb25zLnNldENhcmRzKHtcbiAgICAgIGN1cnJlbnRQYWdlTnVtYmVyOiBwYWdlLFxuICAgICAgY3VycmVudEZpbHRlcjogZmlsdGVyXG4gICAgfSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFwaSA9IG5ldyBOZXdzQXBpKCk7XG4gICAgICBhcGlcbiAgICAgICAgLm5ld3NHZXQodGFrZSwgc2tpcCwgZmlsdGVyLCBjYXRlZ29yeSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbigocmVzcG9uc2U6IE5ld3NPdmVydmlld1N0YXRlTW9kdWxlKSA9PiB7XG4gICAgICAgICAgbGV0IHRvdGFsUGFnZXMgPSByZXNwb25zZS50b3RhbEl0ZW1zIC8gdGFrZTtcbiAgICAgICAgICBpZiAocmVzcG9uc2UudG90YWxJdGVtcyA9PT0gMCkge1xuICAgICAgICAgICAgdG90YWxQYWdlcyA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgICAgbmV3c0FjdGlvbnMuc2V0Q2FyZHMoe1xuICAgICAgICAgICAgICBjYXJkczogcmVzcG9uc2UuY2FyZHMsXG4gICAgICAgICAgICAgIGN1cnJlbnRQYWdlTnVtYmVyOiBwYWdlLFxuICAgICAgICAgICAgICB0b3RhbFBhZ2VzXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBUT0RPOiBlcnJvciBoYW5kbGluZ1xuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBuZXdzVGh1bmtzID0ge1xuICBnZXRDYXJkc1xufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJhdXRob3ItaW5mb19fcG9zdC1pbmZvXCI6XCJhdXRob3ItaW5mby1jb21wb25lbnRfYXV0aG9yLWluZm9fX3Bvc3QtaW5mb19fOUtaX1BcIixcImF1dGhvckluZm9Qb3N0SW5mb1wiOlwiYXV0aG9yLWluZm8tY29tcG9uZW50X2F1dGhvci1pbmZvX19wb3N0LWluZm9fXzlLWl9QXCIsXCJhdXRob3ItaW5mb19fcG9zdC1pbmZvLS1ib3R0b21cIjpcImF1dGhvci1pbmZvLWNvbXBvbmVudF9hdXRob3ItaW5mb19fcG9zdC1pbmZvLS1ib3R0b21fXzJLa3ZnXCIsXCJhdXRob3JJbmZvUG9zdEluZm9Cb3R0b21cIjpcImF1dGhvci1pbmZvLWNvbXBvbmVudF9hdXRob3ItaW5mb19fcG9zdC1pbmZvLS1ib3R0b21fXzJLa3ZnXCIsXCJhdXRob3ItaW5mb19fcG9zdC1pbmZvLWF1dGhvclwiOlwiYXV0aG9yLWluZm8tY29tcG9uZW50X2F1dGhvci1pbmZvX19wb3N0LWluZm8tYXV0aG9yX18yd2pDSFwiLFwiYXV0aG9ySW5mb1Bvc3RJbmZvQXV0aG9yXCI6XCJhdXRob3ItaW5mby1jb21wb25lbnRfYXV0aG9yLWluZm9fX3Bvc3QtaW5mby1hdXRob3JfXzJ3akNIXCIsXCJhdXRob3ItaW5mb19fdG9wLWJvcmRlclwiOlwiYXV0aG9yLWluZm8tY29tcG9uZW50X2F1dGhvci1pbmZvX190b3AtYm9yZGVyX18xbDliYVwiLFwiYXV0aG9ySW5mb1RvcEJvcmRlclwiOlwiYXV0aG9yLWluZm8tY29tcG9uZW50X2F1dGhvci1pbmZvX190b3AtYm9yZGVyX18xbDliYVwiLFwiYXV0aG9yLWluZm9fX2JvdHRvbS1ib3JkZXJcIjpcImF1dGhvci1pbmZvLWNvbXBvbmVudF9hdXRob3ItaW5mb19fYm90dG9tLWJvcmRlcl9fMzUyWmFcIixcImF1dGhvckluZm9Cb3R0b21Cb3JkZXJcIjpcImF1dGhvci1pbmZvLWNvbXBvbmVudF9hdXRob3ItaW5mb19fYm90dG9tLWJvcmRlcl9fMzUyWmFcIixcImF1dGhvci1pbmZvX19wb3N0LWluZm8tYXZhdGFyXCI6XCJhdXRob3ItaW5mby1jb21wb25lbnRfYXV0aG9yLWluZm9fX3Bvc3QtaW5mby1hdmF0YXJfXzFfNHIwXCIsXCJhdXRob3JJbmZvUG9zdEluZm9BdmF0YXJcIjpcImF1dGhvci1pbmZvLWNvbXBvbmVudF9hdXRob3ItaW5mb19fcG9zdC1pbmZvLWF2YXRhcl9fMV80cjBcIixcImF1dGhvci1pbmZvX19wb3N0LWluZm8tbmFtZVwiOlwiYXV0aG9yLWluZm8tY29tcG9uZW50X2F1dGhvci1pbmZvX19wb3N0LWluZm8tbmFtZV9fMV9nQ3RcIixcImF1dGhvckluZm9Qb3N0SW5mb05hbWVcIjpcImF1dGhvci1pbmZvLWNvbXBvbmVudF9hdXRob3ItaW5mb19fcG9zdC1pbmZvLW5hbWVfXzFfZ0N0XCJ9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1NTk5MTMyNzg3MDhcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImJvZHktdGV4dFwiOlwiYm9keS10ZXh0LWNvbXBvbmVudF9ib2R5LXRleHRfXzEza0phXCIsXCJib2R5VGV4dFwiOlwiYm9keS10ZXh0LWNvbXBvbmVudF9ib2R5LXRleHRfXzEza0phXCIsXCJib2R5LXRleHQtY29udGFpbmVyXCI6XCJib2R5LXRleHQtY29tcG9uZW50X2JvZHktdGV4dC1jb250YWluZXJfXzJlNlZyXCIsXCJib2R5VGV4dENvbnRhaW5lclwiOlwiYm9keS10ZXh0LWNvbXBvbmVudF9ib2R5LXRleHQtY29udGFpbmVyX18yZTZWclwiLFwiYm9keS10ZXh0LWNvbnRhaW5lci1vdXRlclwiOlwiYm9keS10ZXh0LWNvbXBvbmVudF9ib2R5LXRleHQtY29udGFpbmVyLW91dGVyX19HcHk2d1wiLFwiYm9keVRleHRDb250YWluZXJPdXRlclwiOlwiYm9keS10ZXh0LWNvbXBvbmVudF9ib2R5LXRleHQtY29udGFpbmVyLW91dGVyX19HcHk2d1wiLFwidWstZ3JpZFwiOlwiYm9keS10ZXh0LWNvbXBvbmVudF91ay1ncmlkX18xVlp6VVwiLFwidWtHcmlkXCI6XCJib2R5LXRleHQtY29tcG9uZW50X3VrLWdyaWRfXzFWWnpVXCIsXCJib2R5LXRleHRfZm9yZWdyb3VuZFwiOlwiYm9keS10ZXh0LWNvbXBvbmVudF9ib2R5LXRleHRfZm9yZWdyb3VuZF9fM1FESF9cIixcImJvZHlUZXh0Rm9yZWdyb3VuZFwiOlwiYm9keS10ZXh0LWNvbXBvbmVudF9ib2R5LXRleHRfZm9yZWdyb3VuZF9fM1FESF9cIixcImJvZHktdGV4dC0tbGVmdFwiOlwiYm9keS10ZXh0LWNvbXBvbmVudF9ib2R5LXRleHQtLWxlZnRfXzNLb2hzXCIsXCJib2R5VGV4dExlZnRcIjpcImJvZHktdGV4dC1jb21wb25lbnRfYm9keS10ZXh0LS1sZWZ0X18zS29oc1wiLFwiYm9keS10ZXh0LS1jZW50ZXJcIjpcImJvZHktdGV4dC1jb21wb25lbnRfYm9keS10ZXh0LS1jZW50ZXJfXzhVWUg0XCIsXCJib2R5VGV4dENlbnRlclwiOlwiYm9keS10ZXh0LWNvbXBvbmVudF9ib2R5LXRleHQtLWNlbnRlcl9fOFVZSDRcIixcImJvZHktdGV4dC0tcmlnaHRcIjpcImJvZHktdGV4dC1jb21wb25lbnRfYm9keS10ZXh0LS1yaWdodF9fMUlaSF9cIixcImJvZHlUZXh0UmlnaHRcIjpcImJvZHktdGV4dC1jb21wb25lbnRfYm9keS10ZXh0LS1yaWdodF9fMUlaSF9cIixcImJvZHktdGV4dC0tbGFyZ2VcIjpcImJvZHktdGV4dC1jb21wb25lbnRfYm9keS10ZXh0LS1sYXJnZV9fMm9kX19cIixcImJvZHlUZXh0TGFyZ2VcIjpcImJvZHktdGV4dC1jb21wb25lbnRfYm9keS10ZXh0LS1sYXJnZV9fMm9kX19cIixcImJvZHktdGV4dC0tbWVkaXVtXCI6XCJib2R5LXRleHQtY29tcG9uZW50X2JvZHktdGV4dC0tbWVkaXVtX19LSE5qN1wiLFwiYm9keVRleHRNZWRpdW1cIjpcImJvZHktdGV4dC1jb21wb25lbnRfYm9keS10ZXh0LS1tZWRpdW1fX0tITmo3XCIsXCJib2R5LXRleHQtLXNtYWxsXCI6XCJib2R5LXRleHQtY29tcG9uZW50X2JvZHktdGV4dC0tc21hbGxfXzNGNlhSXCIsXCJib2R5VGV4dFNtYWxsXCI6XCJib2R5LXRleHQtY29tcG9uZW50X2JvZHktdGV4dC0tc21hbGxfXzNGNlhSXCIsXCJib2R5LXRleHQtLWZ1bGxcIjpcImJvZHktdGV4dC1jb21wb25lbnRfYm9keS10ZXh0LS1mdWxsX184RGxzYVwiLFwiYm9keVRleHRGdWxsXCI6XCJib2R5LXRleHQtY29tcG9uZW50X2JvZHktdGV4dC0tZnVsbF9fOERsc2FcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU1OTkxMzI3NjE3OVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiZXJyb3JcIjpcImNvbnRhY3QtZm9ybS1jb21wb25lbnRfZXJyb3JfXzhvQVlYXCIsXCJpbnB1dF9lcnJvclwiOlwiY29udGFjdC1mb3JtLWNvbXBvbmVudF9pbnB1dF9lcnJvcl9fM2ZQX2tcIixcImlucHV0RXJyb3JcIjpcImNvbnRhY3QtZm9ybS1jb21wb25lbnRfaW5wdXRfZXJyb3JfXzNmUF9rXCJ9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1NTk5MTMyODE2NDRcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImNvbnRhY3Rmb3JtdWxpZXJcIjpcImNvbnRhY3QtY29tcG9uZW50X2NvbnRhY3Rmb3JtdWxpZXJfXzMyT0pmXCIsXCJjb250YWN0Zm9ybXVsaWVyX19pdGVtc1wiOlwiY29udGFjdC1jb21wb25lbnRfY29udGFjdGZvcm11bGllcl9faXRlbXNfXzJlM0Q2XCIsXCJjb250YWN0Zm9ybXVsaWVySXRlbXNcIjpcImNvbnRhY3QtY29tcG9uZW50X2NvbnRhY3Rmb3JtdWxpZXJfX2l0ZW1zX18yZTNENlwiLFwiY29udGFjdGZvcm11bGllcl9faXRlbVwiOlwiY29udGFjdC1jb21wb25lbnRfY29udGFjdGZvcm11bGllcl9faXRlbV9faFhYczhcIixcImNvbnRhY3Rmb3JtdWxpZXJJdGVtXCI6XCJjb250YWN0LWNvbXBvbmVudF9jb250YWN0Zm9ybXVsaWVyX19pdGVtX19oWFhzOFwiLFwiY29udGFjdGZvcm11bGllcl9fc3ViLXRpdGxlXCI6XCJjb250YWN0LWNvbXBvbmVudF9jb250YWN0Zm9ybXVsaWVyX19zdWItdGl0bGVfXzJWLUlxXCIsXCJjb250YWN0Zm9ybXVsaWVyU3ViVGl0bGVcIjpcImNvbnRhY3QtY29tcG9uZW50X2NvbnRhY3Rmb3JtdWxpZXJfX3N1Yi10aXRsZV9fMlYtSXFcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU1OTkxMzI3NzExN1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiYnV0dG9uXCI6XCJidXR0b24tY29tcG9uZW50X2J1dHRvbl9fMVhqYlhcIixcImJ1dHRvbi0tZnVsbFdpZHRoXCI6XCJidXR0b24tY29tcG9uZW50X2J1dHRvbi0tZnVsbFdpZHRoX18zVmdoWlwiLFwiYnV0dG9uRnVsbFdpZHRoXCI6XCJidXR0b24tY29tcG9uZW50X2J1dHRvbi0tZnVsbFdpZHRoX18zVmdoWlwiLFwiYnV0dG9uLS1GQUJcIjpcImJ1dHRvbi1jb21wb25lbnRfYnV0dG9uLS1GQUJfX3VIa0drXCIsXCJidXR0b25GYWJcIjpcImJ1dHRvbi1jb21wb25lbnRfYnV0dG9uLS1GQUJfX3VIa0drXCIsXCJidXR0b24tLWRlZmF1bHRcIjpcImJ1dHRvbi1jb21wb25lbnRfYnV0dG9uLS1kZWZhdWx0X18yU2Q0UlwiLFwiYnV0dG9uRGVmYXVsdFwiOlwiYnV0dG9uLWNvbXBvbmVudF9idXR0b24tLWRlZmF1bHRfXzJTZDRSXCIsXCJidXR0b24tLXByaW1hcnlcIjpcImJ1dHRvbi1jb21wb25lbnRfYnV0dG9uLS1wcmltYXJ5X18yZndZeVwiLFwiYnV0dG9uUHJpbWFyeVwiOlwiYnV0dG9uLWNvbXBvbmVudF9idXR0b24tLXByaW1hcnlfXzJmd1l5XCIsXCJidXR0b24tLXNlY29uZGFyeVwiOlwiYnV0dG9uLWNvbXBvbmVudF9idXR0b24tLXNlY29uZGFyeV9fM3ZSSUZcIixcImJ1dHRvblNlY29uZGFyeVwiOlwiYnV0dG9uLWNvbXBvbmVudF9idXR0b24tLXNlY29uZGFyeV9fM3ZSSUZcIixcImJ1dHRvbi0tdHJhbnNwYXJlbnRcIjpcImJ1dHRvbi1jb21wb25lbnRfYnV0dG9uLS10cmFuc3BhcmVudF9fMW1ILUZcIixcImJ1dHRvblRyYW5zcGFyZW50XCI6XCJidXR0b24tY29tcG9uZW50X2J1dHRvbi0tdHJhbnNwYXJlbnRfXzFtSC1GXCIsXCJidXR0b24tLXNtYWxsXCI6XCJidXR0b24tY29tcG9uZW50X2J1dHRvbi0tc21hbGxfX09za2ZUXCIsXCJidXR0b25TbWFsbFwiOlwiYnV0dG9uLWNvbXBvbmVudF9idXR0b24tLXNtYWxsX19Pc2tmVFwifTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTU5OTEzMjc4NTgxXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJjYXJkXCI6XCJjYXRlZ29yeS1jYXJkLWNvbXBvbmVudF9jYXJkX18yWDFSd1wiLFwiY2FyZC0tZmVhdHVyZWQtc2xpZGVyXCI6XCJjYXRlZ29yeS1jYXJkLWNvbXBvbmVudF9jYXJkLS1mZWF0dXJlZC1zbGlkZXJfXzNnek1DXCIsXCJjYXJkRmVhdHVyZWRTbGlkZXJcIjpcImNhdGVnb3J5LWNhcmQtY29tcG9uZW50X2NhcmQtLWZlYXR1cmVkLXNsaWRlcl9fM2d6TUNcIixcImNhcmQtLWNhdGVnb3J5XCI6XCJjYXRlZ29yeS1jYXJkLWNvbXBvbmVudF9jYXJkLS1jYXRlZ29yeV9fSXVmRmFcIixcImNhcmRDYXRlZ29yeVwiOlwiY2F0ZWdvcnktY2FyZC1jb21wb25lbnRfY2FyZC0tY2F0ZWdvcnlfX0l1ZkZhXCIsXCJjYXJkLS1tb2RpZnlcIjpcImNhdGVnb3J5LWNhcmQtY29tcG9uZW50X2NhcmQtLW1vZGlmeV9fRWpPUGVcIixcImNhcmRNb2RpZnlcIjpcImNhdGVnb3J5LWNhcmQtY29tcG9uZW50X2NhcmQtLW1vZGlmeV9fRWpPUGVcIixcImNhcmRfX2JvdHRvbVwiOlwiY2F0ZWdvcnktY2FyZC1jb21wb25lbnRfY2FyZF9fYm90dG9tX18xQkpvWFwiLFwiY2FyZEJvdHRvbVwiOlwiY2F0ZWdvcnktY2FyZC1jb21wb25lbnRfY2FyZF9fYm90dG9tX18xQkpvWFwiLFwiY2FyZF9fdGl0bGVcIjpcImNhdGVnb3J5LWNhcmQtY29tcG9uZW50X2NhcmRfX3RpdGxlX19sUU43VlwiLFwiY2FyZFRpdGxlXCI6XCJjYXRlZ29yeS1jYXJkLWNvbXBvbmVudF9jYXJkX190aXRsZV9fbFFON1ZcIixcImNhcmRfX2hlYWRcIjpcImNhdGVnb3J5LWNhcmQtY29tcG9uZW50X2NhcmRfX2hlYWRfX2szS2VEXCIsXCJjYXJkSGVhZFwiOlwiY2F0ZWdvcnktY2FyZC1jb21wb25lbnRfY2FyZF9faGVhZF9fazNLZURcIixcImNhcmRfX2JvZHlcIjpcImNhdGVnb3J5LWNhcmQtY29tcG9uZW50X2NhcmRfX2JvZHlfXzJiZkpPXCIsXCJjYXJkQm9keVwiOlwiY2F0ZWdvcnktY2FyZC1jb21wb25lbnRfY2FyZF9fYm9keV9fMmJmSk9cIixcImJ1dHRvblwiOlwiY2F0ZWdvcnktY2FyZC1jb21wb25lbnRfYnV0dG9uX18xSTVxNFwifTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTU5OTEzMjc4OTYzXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJleHBhbmRhYmxlLXBhbmVsXCI6XCJleHBhbmRhYmxlLXBhbmVsLWNvbXBvbmVudF9leHBhbmRhYmxlLXBhbmVsX18xMjBva1wiLFwiZXhwYW5kYWJsZVBhbmVsXCI6XCJleHBhbmRhYmxlLXBhbmVsLWNvbXBvbmVudF9leHBhbmRhYmxlLXBhbmVsX18xMjBva1wiLFwiZXhwYW5kYWJsZS1wYW5lbF9fbGlzdFwiOlwiZXhwYW5kYWJsZS1wYW5lbC1jb21wb25lbnRfZXhwYW5kYWJsZS1wYW5lbF9fbGlzdF9fMXRWUFJcIixcImV4cGFuZGFibGVQYW5lbExpc3RcIjpcImV4cGFuZGFibGUtcGFuZWwtY29tcG9uZW50X2V4cGFuZGFibGUtcGFuZWxfX2xpc3RfXzF0VlBSXCIsXCJleHBhbmRhYmxlLXBhbmVsX19jb250ZW50XCI6XCJleHBhbmRhYmxlLXBhbmVsLWNvbXBvbmVudF9leHBhbmRhYmxlLXBhbmVsX19jb250ZW50X18zYi00eFwiLFwiZXhwYW5kYWJsZVBhbmVsQ29udGVudFwiOlwiZXhwYW5kYWJsZS1wYW5lbC1jb21wb25lbnRfZXhwYW5kYWJsZS1wYW5lbF9fY29udGVudF9fM2ItNHhcIixcImV4cGFuZGFibGUtcGFuZWxfX2Jsb2NrXCI6XCJleHBhbmRhYmxlLXBhbmVsLWNvbXBvbmVudF9leHBhbmRhYmxlLXBhbmVsX19ibG9ja19fcXRoVC1cIixcImV4cGFuZGFibGVQYW5lbEJsb2NrXCI6XCJleHBhbmRhYmxlLXBhbmVsLWNvbXBvbmVudF9leHBhbmRhYmxlLXBhbmVsX19ibG9ja19fcXRoVC1cIixcImV4cGFuZGFibGUtcGFuZWxfX3RpdGxlXCI6XCJleHBhbmRhYmxlLXBhbmVsLWNvbXBvbmVudF9leHBhbmRhYmxlLXBhbmVsX190aXRsZV9fRW5pRGpcIixcImV4cGFuZGFibGVQYW5lbFRpdGxlXCI6XCJleHBhbmRhYmxlLXBhbmVsLWNvbXBvbmVudF9leHBhbmRhYmxlLXBhbmVsX190aXRsZV9fRW5pRGpcIixcImV4cGFuZGFibGUtcGFuZWxfX2Jsb2NrX19vcGVuXCI6XCJleHBhbmRhYmxlLXBhbmVsLWNvbXBvbmVudF9leHBhbmRhYmxlLXBhbmVsX19ibG9ja19fb3Blbl9fMWxLb0xcIixcImV4cGFuZGFibGVQYW5lbEJsb2NrT3BlblwiOlwiZXhwYW5kYWJsZS1wYW5lbC1jb21wb25lbnRfZXhwYW5kYWJsZS1wYW5lbF9fYmxvY2tfX29wZW5fXzFsS29MXCJ9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1NTk5MTMyNzkxMDFcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImdhbGxlcnktc2xpZGVyXCI6XCJnYWxsZXJ5LXNsaWRlci1jb21wb25lbnRfZ2FsbGVyeS1zbGlkZXJfXzNXczZmXCIsXCJnYWxsZXJ5U2xpZGVyXCI6XCJnYWxsZXJ5LXNsaWRlci1jb21wb25lbnRfZ2FsbGVyeS1zbGlkZXJfXzNXczZmXCIsXCJzaXplXCI6XCJnYWxsZXJ5LXNsaWRlci1jb21wb25lbnRfc2l6ZV9fMjRsYUxcIixcImxpZ2h0Ym94X19iYWNrZ3JvdW5kXCI6XCJnYWxsZXJ5LXNsaWRlci1jb21wb25lbnRfbGlnaHRib3hfX2JhY2tncm91bmRfXzMtazJyXCIsXCJsaWdodGJveEJhY2tncm91bmRcIjpcImdhbGxlcnktc2xpZGVyLWNvbXBvbmVudF9saWdodGJveF9fYmFja2dyb3VuZF9fMy1rMnJcIixcInNpemVfX2xpZ2h0Ym94XCI6XCJnYWxsZXJ5LXNsaWRlci1jb21wb25lbnRfc2l6ZV9fbGlnaHRib3hfXzJIWmdDXCIsXCJzaXplTGlnaHRib3hcIjpcImdhbGxlcnktc2xpZGVyLWNvbXBvbmVudF9zaXplX19saWdodGJveF9fMkhaZ0NcIixcImNhcHRpb24tbGlnaHRib3hcIjpcImdhbGxlcnktc2xpZGVyLWNvbXBvbmVudF9jYXB0aW9uLWxpZ2h0Ym94X18xWnpYcFwiLFwiY2FwdGlvbkxpZ2h0Ym94XCI6XCJnYWxsZXJ5LXNsaWRlci1jb21wb25lbnRfY2FwdGlvbi1saWdodGJveF9fMVp6WHBcIixcInRodW1iX2l0ZW1cIjpcImdhbGxlcnktc2xpZGVyLWNvbXBvbmVudF90aHVtYl9pdGVtX18yVG9faFwiLFwidGh1bWJJdGVtXCI6XCJnYWxsZXJ5LXNsaWRlci1jb21wb25lbnRfdGh1bWJfaXRlbV9fMlRvX2hcIixcInRodW1iX29wYWNpdHktbGF5ZXJcIjpcImdhbGxlcnktc2xpZGVyLWNvbXBvbmVudF90aHVtYl9vcGFjaXR5LWxheWVyX18yaVU4aFwiLFwidGh1bWJPcGFjaXR5TGF5ZXJcIjpcImdhbGxlcnktc2xpZGVyLWNvbXBvbmVudF90aHVtYl9vcGFjaXR5LWxheWVyX18yaVU4aFwiLFwidGh1bWItY29udGFpbmVyXCI6XCJnYWxsZXJ5LXNsaWRlci1jb21wb25lbnRfdGh1bWItY29udGFpbmVyX18xT09RZlwiLFwidGh1bWJDb250YWluZXJcIjpcImdhbGxlcnktc2xpZGVyLWNvbXBvbmVudF90aHVtYi1jb250YWluZXJfXzFPT1FmXCIsXCJnYWxsZXJ5LXNsaWRlci1hcnJvd1wiOlwiZ2FsbGVyeS1zbGlkZXItY29tcG9uZW50X2dhbGxlcnktc2xpZGVyLWFycm93X19uMWp0LVwiLFwiZ2FsbGVyeVNsaWRlckFycm93XCI6XCJnYWxsZXJ5LXNsaWRlci1jb21wb25lbnRfZ2FsbGVyeS1zbGlkZXItYXJyb3dfX24xanQtXCIsXCJnYWxsZXJ5LXNsaWRlci1hcnJvdy1wcmV2XCI6XCJnYWxsZXJ5LXNsaWRlci1jb21wb25lbnRfZ2FsbGVyeS1zbGlkZXItYXJyb3ctcHJldl9fM3dFUnpcIixcImdhbGxlcnlTbGlkZXJBcnJvd1ByZXZcIjpcImdhbGxlcnktc2xpZGVyLWNvbXBvbmVudF9nYWxsZXJ5LXNsaWRlci1hcnJvdy1wcmV2X18zd0VSelwiLFwiZ2FsbGVyeS1zbGlkZXItYXJyb3ctbmV4dFwiOlwiZ2FsbGVyeS1zbGlkZXItY29tcG9uZW50X2dhbGxlcnktc2xpZGVyLWFycm93LW5leHRfXzFIUjJ6XCIsXCJnYWxsZXJ5U2xpZGVyQXJyb3dOZXh0XCI6XCJnYWxsZXJ5LXNsaWRlci1jb21wb25lbnRfZ2FsbGVyeS1zbGlkZXItYXJyb3ctbmV4dF9fMUhSMnpcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU1OTkxMzI4MTc4NVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiY29udGFpbmVyXCI6XCJoYW1idXJnZXIuYnV0dG9uLWNvbXBvbmVudF9jb250YWluZXJfXzN6UHVPXCIsXCJvcGVuZWRcIjpcImhhbWJ1cmdlci5idXR0b24tY29tcG9uZW50X29wZW5lZF9fQVcxR0xcIixcImhhbWJ1cmdlci1jb250YWluZXJcIjpcImhhbWJ1cmdlci5idXR0b24tY29tcG9uZW50X2hhbWJ1cmdlci1jb250YWluZXJfX0hETmh0XCIsXCJoYW1idXJnZXJDb250YWluZXJcIjpcImhhbWJ1cmdlci5idXR0b24tY29tcG9uZW50X2hhbWJ1cmdlci1jb250YWluZXJfX0hETmh0XCIsXCJoYW1idXJnZXItbWVudVwiOlwiaGFtYnVyZ2VyLmJ1dHRvbi1jb21wb25lbnRfaGFtYnVyZ2VyLW1lbnVfXzNFdHA3XCIsXCJoYW1idXJnZXJNZW51XCI6XCJoYW1idXJnZXIuYnV0dG9uLWNvbXBvbmVudF9oYW1idXJnZXItbWVudV9fM0V0cDdcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU1OTkxMzI3OTI2MFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTU5OTEzMjc5Mzg0XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1NTk5MTMyNzk1MjFcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU1OTkxMzI4MDkyMVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wibW9kYWxcIjpcImxpZ2h0Ym94LWNvbXBvbmVudF9tb2RhbF9fMV9fWU5cIixcImNsb3NlXCI6XCJsaWdodGJveC1jb21wb25lbnRfY2xvc2VfXzFSVEVTXCIsXCJtb2RhbF9fY2VudGVyLWNvbnRlbnRcIjpcImxpZ2h0Ym94LWNvbXBvbmVudF9tb2RhbF9fY2VudGVyLWNvbnRlbnRfXzJSbjVXXCIsXCJtb2RhbENlbnRlckNvbnRlbnRcIjpcImxpZ2h0Ym94LWNvbXBvbmVudF9tb2RhbF9fY2VudGVyLWNvbnRlbnRfXzJSbjVXXCIsXCJtb2RhbC1vcGVuXCI6XCJsaWdodGJveC1jb21wb25lbnRfbW9kYWwtb3Blbl9fMVRMVG1cIixcIm1vZGFsT3BlblwiOlwibGlnaHRib3gtY29tcG9uZW50X21vZGFsLW9wZW5fXzFUTFRtXCJ9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1NTk5MTMyNzk2NTVcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIm5vdC1pbXBsZW1lbnRlZFwiOlwibm90LXlldC1pbXBsZW1lbnRlZC1jb21wb25lbnRfbm90LWltcGxlbWVudGVkX18xTURkS1wiLFwibm90SW1wbGVtZW50ZWRcIjpcIm5vdC15ZXQtaW1wbGVtZW50ZWQtY29tcG9uZW50X25vdC1pbXBsZW1lbnRlZF9fMU1EZEtcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU1OTkxMzI3Njg0OVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiY2FyZFwiOlwicHJvZHVjdC1jYXJkLWNvbXBvbmVudF9jYXJkX18xVEtrVlwiLFwiY2FyZC0tZmVhdHVyZWQtc2xpZGVyXCI6XCJwcm9kdWN0LWNhcmQtY29tcG9uZW50X2NhcmQtLWZlYXR1cmVkLXNsaWRlcl9fM3pxNXhcIixcImNhcmRGZWF0dXJlZFNsaWRlclwiOlwicHJvZHVjdC1jYXJkLWNvbXBvbmVudF9jYXJkLS1mZWF0dXJlZC1zbGlkZXJfXzN6cTV4XCIsXCJjYXJkLS1wcm9kdWN0XCI6XCJwcm9kdWN0LWNhcmQtY29tcG9uZW50X2NhcmQtLXByb2R1Y3RfXzJpMDVIXCIsXCJjYXJkUHJvZHVjdFwiOlwicHJvZHVjdC1jYXJkLWNvbXBvbmVudF9jYXJkLS1wcm9kdWN0X18yaTA1SFwiLFwiY2FyZF9faW1hZ2VcIjpcInByb2R1Y3QtY2FyZC1jb21wb25lbnRfY2FyZF9faW1hZ2VfXzNqUG5zXCIsXCJjYXJkSW1hZ2VcIjpcInByb2R1Y3QtY2FyZC1jb21wb25lbnRfY2FyZF9faW1hZ2VfXzNqUG5zXCIsXCJjYXJkX19tZWRpYVwiOlwicHJvZHVjdC1jYXJkLWNvbXBvbmVudF9jYXJkX19tZWRpYV9fMTdaUkZcIixcImNhcmRNZWRpYVwiOlwicHJvZHVjdC1jYXJkLWNvbXBvbmVudF9jYXJkX19tZWRpYV9fMTdaUkZcIixcImNhcmRfX2JvZHlcIjpcInByb2R1Y3QtY2FyZC1jb21wb25lbnRfY2FyZF9fYm9keV9fMmpOcnRcIixcImNhcmRCb2R5XCI6XCJwcm9kdWN0LWNhcmQtY29tcG9uZW50X2NhcmRfX2JvZHlfXzJqTnJ0XCIsXCJjYXJkX190aXRsZVwiOlwicHJvZHVjdC1jYXJkLWNvbXBvbmVudF9jYXJkX190aXRsZV9fZ3dmclJcIixcImNhcmRUaXRsZVwiOlwicHJvZHVjdC1jYXJkLWNvbXBvbmVudF9jYXJkX190aXRsZV9fZ3dmclJcIixcImNhcmRfX2hlYWRcIjpcInByb2R1Y3QtY2FyZC1jb21wb25lbnRfY2FyZF9faGVhZF9fMkdwOS1cIixcImNhcmRIZWFkXCI6XCJwcm9kdWN0LWNhcmQtY29tcG9uZW50X2NhcmRfX2hlYWRfXzJHcDktXCIsXCJjYXJkX19jb250ZW50XCI6XCJwcm9kdWN0LWNhcmQtY29tcG9uZW50X2NhcmRfX2NvbnRlbnRfXzFIdGN1XCIsXCJjYXJkQ29udGVudFwiOlwicHJvZHVjdC1jYXJkLWNvbXBvbmVudF9jYXJkX19jb250ZW50X18xSHRjdVwifTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTU5OTEzMjc5ODIyXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJyZWNpcGUtaGVhZC1jYXJkXCI6XCJyZWNpcGUtaGVhZC1jYXJkLWNvbXBvbmVudF9yZWNpcGUtaGVhZC1jYXJkX18yQnQtZVwiLFwicmVjaXBlSGVhZENhcmRcIjpcInJlY2lwZS1oZWFkLWNhcmQtY29tcG9uZW50X3JlY2lwZS1oZWFkLWNhcmRfXzJCdC1lXCIsXCJyZWNpcGUtaGVhZC1jYXJkX19mb3JlZ3JvdW5kXCI6XCJyZWNpcGUtaGVhZC1jYXJkLWNvbXBvbmVudF9yZWNpcGUtaGVhZC1jYXJkX19mb3JlZ3JvdW5kX18yOEM2NFwiLFwicmVjaXBlSGVhZENhcmRGb3JlZ3JvdW5kXCI6XCJyZWNpcGUtaGVhZC1jYXJkLWNvbXBvbmVudF9yZWNpcGUtaGVhZC1jYXJkX19mb3JlZ3JvdW5kX18yOEM2NFwiLFwicmVjaXBlLWhlYWQtY2FyZF9faGVhZGVyXCI6XCJyZWNpcGUtaGVhZC1jYXJkLWNvbXBvbmVudF9yZWNpcGUtaGVhZC1jYXJkX19oZWFkZXJfXzJFdy02XCIsXCJyZWNpcGVIZWFkQ2FyZEhlYWRlclwiOlwicmVjaXBlLWhlYWQtY2FyZC1jb21wb25lbnRfcmVjaXBlLWhlYWQtY2FyZF9faGVhZGVyX18yRXctNlwiLFwicmVjaXBlLWhlYWQtY2FyZF9faGVhZGVyLWJhY2tncm91bmRcIjpcInJlY2lwZS1oZWFkLWNhcmQtY29tcG9uZW50X3JlY2lwZS1oZWFkLWNhcmRfX2hlYWRlci1iYWNrZ3JvdW5kX18xVkVJWVwiLFwicmVjaXBlSGVhZENhcmRIZWFkZXJCYWNrZ3JvdW5kXCI6XCJyZWNpcGUtaGVhZC1jYXJkLWNvbXBvbmVudF9yZWNpcGUtaGVhZC1jYXJkX19oZWFkZXItYmFja2dyb3VuZF9fMVZFSVlcIixcInJlY2lwZS1oZWFkLWNhcmRfX2luZm9cIjpcInJlY2lwZS1oZWFkLWNhcmQtY29tcG9uZW50X3JlY2lwZS1oZWFkLWNhcmRfX2luZm9fX0VQT2owXCIsXCJyZWNpcGVIZWFkQ2FyZEluZm9cIjpcInJlY2lwZS1oZWFkLWNhcmQtY29tcG9uZW50X3JlY2lwZS1oZWFkLWNhcmRfX2luZm9fX0VQT2owXCIsXCJyZWNpcGUtaGVhZC1jYXJkX19pbmZvLWJveFwiOlwicmVjaXBlLWhlYWQtY2FyZC1jb21wb25lbnRfcmVjaXBlLWhlYWQtY2FyZF9faW5mby1ib3hfXzI2THJkXCIsXCJyZWNpcGVIZWFkQ2FyZEluZm9Cb3hcIjpcInJlY2lwZS1oZWFkLWNhcmQtY29tcG9uZW50X3JlY2lwZS1oZWFkLWNhcmRfX2luZm8tYm94X18yNkxyZFwiLFwicmVjaXBlLWhlYWQtY2FyZF9faW5mby1ib3gtaG9sZGVyXCI6XCJyZWNpcGUtaGVhZC1jYXJkLWNvbXBvbmVudF9yZWNpcGUtaGVhZC1jYXJkX19pbmZvLWJveC1ob2xkZXJfXzNYUEVBXCIsXCJyZWNpcGVIZWFkQ2FyZEluZm9Cb3hIb2xkZXJcIjpcInJlY2lwZS1oZWFkLWNhcmQtY29tcG9uZW50X3JlY2lwZS1oZWFkLWNhcmRfX2luZm8tYm94LWhvbGRlcl9fM1hQRUFcIixcInJlY2lwZS1oZWFkLWNhcmRfX2luZm8tbGlzdFwiOlwicmVjaXBlLWhlYWQtY2FyZC1jb21wb25lbnRfcmVjaXBlLWhlYWQtY2FyZF9faW5mby1saXN0X195eGliY1wiLFwicmVjaXBlSGVhZENhcmRJbmZvTGlzdFwiOlwicmVjaXBlLWhlYWQtY2FyZC1jb21wb25lbnRfcmVjaXBlLWhlYWQtY2FyZF9faW5mby1saXN0X195eGliY1wifTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTU5OTEzMjgwMDA4XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJyZWxhdGVkLXBvc3QtY2FyZFwiOlwicmVsYXRlZC1wb3N0LWNhcmQtY29tcG9uZW50X3JlbGF0ZWQtcG9zdC1jYXJkX18yUTNhb1wiLFwicmVsYXRlZFBvc3RDYXJkXCI6XCJyZWxhdGVkLXBvc3QtY2FyZC1jb21wb25lbnRfcmVsYXRlZC1wb3N0LWNhcmRfXzJRM2FvXCIsXCJyZWxhdGVkLXBvc3QtY2FyZF9faG9sZGVyXCI6XCJyZWxhdGVkLXBvc3QtY2FyZC1jb21wb25lbnRfcmVsYXRlZC1wb3N0LWNhcmRfX2hvbGRlcl9fMXF2U05cIixcInJlbGF0ZWRQb3N0Q2FyZEhvbGRlclwiOlwicmVsYXRlZC1wb3N0LWNhcmQtY29tcG9uZW50X3JlbGF0ZWQtcG9zdC1jYXJkX19ob2xkZXJfXzFxdlNOXCIsXCJyZWxhdGVkLXBvc3QtY2FyZC0tZmVhdHVyZWQtc2xpZGVyXCI6XCJyZWxhdGVkLXBvc3QtY2FyZC1jb21wb25lbnRfcmVsYXRlZC1wb3N0LWNhcmQtLWZlYXR1cmVkLXNsaWRlcl9fMmpUMjZcIixcInJlbGF0ZWRQb3N0Q2FyZEZlYXR1cmVkU2xpZGVyXCI6XCJyZWxhdGVkLXBvc3QtY2FyZC1jb21wb25lbnRfcmVsYXRlZC1wb3N0LWNhcmQtLWZlYXR1cmVkLXNsaWRlcl9fMmpUMjZcIixcInJlbGF0ZWQtcG9zdC1jYXJkLS1wcm9kdWN0XCI6XCJyZWxhdGVkLXBvc3QtY2FyZC1jb21wb25lbnRfcmVsYXRlZC1wb3N0LWNhcmQtLXByb2R1Y3RfXzNveFYtXCIsXCJyZWxhdGVkUG9zdENhcmRQcm9kdWN0XCI6XCJyZWxhdGVkLXBvc3QtY2FyZC1jb21wb25lbnRfcmVsYXRlZC1wb3N0LWNhcmQtLXByb2R1Y3RfXzNveFYtXCIsXCJyZWxhdGVkLXBvc3QtY2FyZF9faW1hZ2VcIjpcInJlbGF0ZWQtcG9zdC1jYXJkLWNvbXBvbmVudF9yZWxhdGVkLXBvc3QtY2FyZF9faW1hZ2VfX01sQldsXCIsXCJyZWxhdGVkUG9zdENhcmRJbWFnZVwiOlwicmVsYXRlZC1wb3N0LWNhcmQtY29tcG9uZW50X3JlbGF0ZWQtcG9zdC1jYXJkX19pbWFnZV9fTWxCV2xcIixcInJlbGF0ZWQtcG9zdC1jYXJkX19tZWRpYVwiOlwicmVsYXRlZC1wb3N0LWNhcmQtY29tcG9uZW50X3JlbGF0ZWQtcG9zdC1jYXJkX19tZWRpYV9fMnhKR0tcIixcInJlbGF0ZWRQb3N0Q2FyZE1lZGlhXCI6XCJyZWxhdGVkLXBvc3QtY2FyZC1jb21wb25lbnRfcmVsYXRlZC1wb3N0LWNhcmRfX21lZGlhX18yeEpHS1wiLFwicmVsYXRlZC1wb3N0LWNhcmRfX2JvZHlcIjpcInJlbGF0ZWQtcG9zdC1jYXJkLWNvbXBvbmVudF9yZWxhdGVkLXBvc3QtY2FyZF9fYm9keV9fMXQ2cWFcIixcInJlbGF0ZWRQb3N0Q2FyZEJvZHlcIjpcInJlbGF0ZWQtcG9zdC1jYXJkLWNvbXBvbmVudF9yZWxhdGVkLXBvc3QtY2FyZF9fYm9keV9fMXQ2cWFcIixcInJlbGF0ZWQtcG9zdC1jYXJkX190aXRsZVwiOlwicmVsYXRlZC1wb3N0LWNhcmQtY29tcG9uZW50X3JlbGF0ZWQtcG9zdC1jYXJkX190aXRsZV9fMVllMnhcIixcInJlbGF0ZWRQb3N0Q2FyZFRpdGxlXCI6XCJyZWxhdGVkLXBvc3QtY2FyZC1jb21wb25lbnRfcmVsYXRlZC1wb3N0LWNhcmRfX3RpdGxlX18xWWUyeFwiLFwicmVsYXRlZC1wb3N0LWNhcmRfX2hlYWRcIjpcInJlbGF0ZWQtcG9zdC1jYXJkLWNvbXBvbmVudF9yZWxhdGVkLXBvc3QtY2FyZF9faGVhZF9fMmFPeG1cIixcInJlbGF0ZWRQb3N0Q2FyZEhlYWRcIjpcInJlbGF0ZWQtcG9zdC1jYXJkLWNvbXBvbmVudF9yZWxhdGVkLXBvc3QtY2FyZF9faGVhZF9fMmFPeG1cIixcInJlbGF0ZWQtcG9zdC1jYXJkX19jb250ZW50XCI6XCJyZWxhdGVkLXBvc3QtY2FyZC1jb21wb25lbnRfcmVsYXRlZC1wb3N0LWNhcmRfX2NvbnRlbnRfXzNycVFKXCIsXCJyZWxhdGVkUG9zdENhcmRDb250ZW50XCI6XCJyZWxhdGVkLXBvc3QtY2FyZC1jb21wb25lbnRfcmVsYXRlZC1wb3N0LWNhcmRfX2NvbnRlbnRfXzNycVFKXCIsXCJyZWxhdGVkLXBvc3QtY2FyZF9fc2hhZG93XCI6XCJyZWxhdGVkLXBvc3QtY2FyZC1jb21wb25lbnRfcmVsYXRlZC1wb3N0LWNhcmRfX3NoYWRvd19fMnZPYjlcIixcInJlbGF0ZWRQb3N0Q2FyZFNoYWRvd1wiOlwicmVsYXRlZC1wb3N0LWNhcmQtY29tcG9uZW50X3JlbGF0ZWQtcG9zdC1jYXJkX19zaGFkb3dfXzJ2T2I5XCJ9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1NTk5MTMyODAyOTFcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInJlbGF0ZWQtcG9zdHNfX2hlYWRlclwiOlwicmVsYXRlZC1wb3N0cy1jb21wb25lbnRfcmVsYXRlZC1wb3N0c19faGVhZGVyX19ndEs3Z1wiLFwicmVsYXRlZFBvc3RzSGVhZGVyXCI6XCJyZWxhdGVkLXBvc3RzLWNvbXBvbmVudF9yZWxhdGVkLXBvc3RzX19oZWFkZXJfX2d0SzdnXCIsXCJyZWxhdGVkLXBvc3RzX190aXRsZVwiOlwicmVsYXRlZC1wb3N0cy1jb21wb25lbnRfcmVsYXRlZC1wb3N0c19fdGl0bGVfXzJFeEIzXCIsXCJyZWxhdGVkUG9zdHNUaXRsZVwiOlwicmVsYXRlZC1wb3N0cy1jb21wb25lbnRfcmVsYXRlZC1wb3N0c19fdGl0bGVfXzJFeEIzXCIsXCJyZWxhdGVkLXBvc3RzX19hY3Rpb25cIjpcInJlbGF0ZWQtcG9zdHMtY29tcG9uZW50X3JlbGF0ZWQtcG9zdHNfX2FjdGlvbl9fM2YzOUNcIixcInJlbGF0ZWRQb3N0c0FjdGlvblwiOlwicmVsYXRlZC1wb3N0cy1jb21wb25lbnRfcmVsYXRlZC1wb3N0c19fYWN0aW9uX18zZjM5Q1wiLFwicmVsYXRlZC1wb3N0c19fbGlzdFwiOlwicmVsYXRlZC1wb3N0cy1jb21wb25lbnRfcmVsYXRlZC1wb3N0c19fbGlzdF9fMjFlQ09cIixcInJlbGF0ZWRQb3N0c0xpc3RcIjpcInJlbGF0ZWQtcG9zdHMtY29tcG9uZW50X3JlbGF0ZWQtcG9zdHNfX2xpc3RfXzIxZUNPXCIsXCJyZWxhdGVkLXBvc3RzXCI6XCJyZWxhdGVkLXBvc3RzLWNvbXBvbmVudF9yZWxhdGVkLXBvc3RzX19GeW9vUFwiLFwicmVsYXRlZFBvc3RzXCI6XCJyZWxhdGVkLXBvc3RzLWNvbXBvbmVudF9yZWxhdGVkLXBvc3RzX19GeW9vUFwiLFwiY2FyZFwiOlwicmVsYXRlZC1wb3N0cy1jb21wb25lbnRfY2FyZF9fMVVKRjhcIixcImNhcmRfX21lZGlhXCI6XCJyZWxhdGVkLXBvc3RzLWNvbXBvbmVudF9jYXJkX19tZWRpYV9fMUZ6UC1cIixcImNhcmRNZWRpYVwiOlwicmVsYXRlZC1wb3N0cy1jb21wb25lbnRfY2FyZF9fbWVkaWFfXzFGelAtXCIsXCJjYXJkX19pbWFnZVwiOlwicmVsYXRlZC1wb3N0cy1jb21wb25lbnRfY2FyZF9faW1hZ2VfXzN3cHNNXCIsXCJjYXJkSW1hZ2VcIjpcInJlbGF0ZWQtcG9zdHMtY29tcG9uZW50X2NhcmRfX2ltYWdlX18zd3BzTVwiLFwiY2FyZF9fYm9keVwiOlwicmVsYXRlZC1wb3N0cy1jb21wb25lbnRfY2FyZF9fYm9keV9fMUVuOUJcIixcImNhcmRCb2R5XCI6XCJyZWxhdGVkLXBvc3RzLWNvbXBvbmVudF9jYXJkX19ib2R5X18xRW45QlwifTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTU5OTEzMjgwMTM5XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1NTk5MTMyODA0MzNcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU1OTkxMzI4MDU0N1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wibWVudS1pdGVtXCI6XCJtZW51LWl0ZW0tY29tcG9uZW50X21lbnUtaXRlbV9fMjJYZFFcIixcIm1lbnVJdGVtXCI6XCJtZW51LWl0ZW0tY29tcG9uZW50X21lbnUtaXRlbV9fMjJYZFFcIixcImFjdGl2ZVwiOlwibWVudS1pdGVtLWNvbXBvbmVudF9hY3RpdmVfX1E2dUg1XCIsXCJtZW51LWl0ZW0tLWFjdGl2ZVwiOlwibWVudS1pdGVtLWNvbXBvbmVudF9tZW51LWl0ZW0tLWFjdGl2ZV9fMlBPd0tcIixcIm1lbnVJdGVtQWN0aXZlXCI6XCJtZW51LWl0ZW0tY29tcG9uZW50X21lbnUtaXRlbS0tYWN0aXZlX18yUE93S1wifTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTU5OTEzMjgyNzAxXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJzaWRlYmFyLW1lbnVcIjpcInNpZGViYXItbWVudS1jb21wb25lbnRfc2lkZWJhci1tZW51X19FVnczdFwiLFwic2lkZWJhck1lbnVcIjpcInNpZGViYXItbWVudS1jb21wb25lbnRfc2lkZWJhci1tZW51X19FVnczdFwiLFwic2lkZWJhci1tZW51X190aXRsZVwiOlwic2lkZWJhci1tZW51LWNvbXBvbmVudF9zaWRlYmFyLW1lbnVfX3RpdGxlX19XRVNMVVwiLFwic2lkZWJhck1lbnVUaXRsZVwiOlwic2lkZWJhci1tZW51LWNvbXBvbmVudF9zaWRlYmFyLW1lbnVfX3RpdGxlX19XRVNMVVwiLFwic2lkZWJhci1tZW51X19saXN0XCI6XCJzaWRlYmFyLW1lbnUtY29tcG9uZW50X3NpZGViYXItbWVudV9fbGlzdF9fMkJXNkRcIixcInNpZGViYXJNZW51TGlzdFwiOlwic2lkZWJhci1tZW51LWNvbXBvbmVudF9zaWRlYmFyLW1lbnVfX2xpc3RfXzJCVzZEXCIsXCJzaWRlYmFyLW1lbnVfX2xpc3QtLWNoZWNrXCI6XCJzaWRlYmFyLW1lbnUtY29tcG9uZW50X3NpZGViYXItbWVudV9fbGlzdC0tY2hlY2tfXzFQMl83XCIsXCJzaWRlYmFyTWVudUxpc3RDaGVja1wiOlwic2lkZWJhci1tZW51LWNvbXBvbmVudF9zaWRlYmFyLW1lbnVfX2xpc3QtLWNoZWNrX18xUDJfN1wiLFwic2lkZWJhci1tZW51X19pdGVtXCI6XCJzaWRlYmFyLW1lbnUtY29tcG9uZW50X3NpZGViYXItbWVudV9faXRlbV9fZkFOSHJcIixcInNpZGViYXJNZW51SXRlbVwiOlwic2lkZWJhci1tZW51LWNvbXBvbmVudF9zaWRlYmFyLW1lbnVfX2l0ZW1fX2ZBTkhyXCIsXCJzaWRlYmFyLW1lbnVfX3NlbGVjdFwiOlwic2lkZWJhci1tZW51LWNvbXBvbmVudF9zaWRlYmFyLW1lbnVfX3NlbGVjdF9fM0dYUVFcIixcInNpZGViYXJNZW51U2VsZWN0XCI6XCJzaWRlYmFyLW1lbnUtY29tcG9uZW50X3NpZGViYXItbWVudV9fc2VsZWN0X18zR1hRUVwifTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTU5OTEzMjgwNjgxXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJzaW1wbGUtY2FyZFwiOlwic2ltcGxlLWNhcmQtY29tcG9uZW50X3NpbXBsZS1jYXJkX18yTFpBcVwiLFwic2ltcGxlQ2FyZFwiOlwic2ltcGxlLWNhcmQtY29tcG9uZW50X3NpbXBsZS1jYXJkX18yTFpBcVwiLFwic2ltcGxlLWNhcmQtLWNvbnRhaW5lclwiOlwic2ltcGxlLWNhcmQtY29tcG9uZW50X3NpbXBsZS1jYXJkLS1jb250YWluZXJfXzNOQWczXCIsXCJzaW1wbGVDYXJkQ29udGFpbmVyXCI6XCJzaW1wbGUtY2FyZC1jb21wb25lbnRfc2ltcGxlLWNhcmQtLWNvbnRhaW5lcl9fM05BZzNcIixcInNpbXBsZS1jYXJkX19tZWRpYVwiOlwic2ltcGxlLWNhcmQtY29tcG9uZW50X3NpbXBsZS1jYXJkX19tZWRpYV9fcjhpWjFcIixcInNpbXBsZUNhcmRNZWRpYVwiOlwic2ltcGxlLWNhcmQtY29tcG9uZW50X3NpbXBsZS1jYXJkX19tZWRpYV9fcjhpWjFcIixcInNpbXBsZS1jYXJkX19pbWFnZVwiOlwic2ltcGxlLWNhcmQtY29tcG9uZW50X3NpbXBsZS1jYXJkX19pbWFnZV9fLWJLb0tcIixcInNpbXBsZUNhcmRJbWFnZVwiOlwic2ltcGxlLWNhcmQtY29tcG9uZW50X3NpbXBsZS1jYXJkX19pbWFnZV9fLWJLb0tcIixcInNpbXBsZS1jYXJkX19ib2R5XCI6XCJzaW1wbGUtY2FyZC1jb21wb25lbnRfc2ltcGxlLWNhcmRfX2JvZHlfXzNsaDBoXCIsXCJzaW1wbGVDYXJkQm9keVwiOlwic2ltcGxlLWNhcmQtY29tcG9uZW50X3NpbXBsZS1jYXJkX19ib2R5X18zbGgwaFwiLFwic2ltcGxlLWNhcmRfX3RpdGxlXCI6XCJzaW1wbGUtY2FyZC1jb21wb25lbnRfc2ltcGxlLWNhcmRfX3RpdGxlX18yS25zRFwiLFwic2ltcGxlQ2FyZFRpdGxlXCI6XCJzaW1wbGUtY2FyZC1jb21wb25lbnRfc2ltcGxlLWNhcmRfX3RpdGxlX18yS25zRFwiLFwic2ltcGxlLWNhcmRfX2ljb25cIjpcInNpbXBsZS1jYXJkLWNvbXBvbmVudF9zaW1wbGUtY2FyZF9faWNvbl9fM3JSNEJcIixcInNpbXBsZUNhcmRJY29uXCI6XCJzaW1wbGUtY2FyZC1jb21wb25lbnRfc2ltcGxlLWNhcmRfX2ljb25fXzNyUjRCXCJ9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1NTk5MTMyODEyMDlcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImZvcm1fX3Jvd1wiOlwic3Vic2NyaWJlLWNvbXBvbmVudF9mb3JtX19yb3dfXzM4blNKXCIsXCJmb3JtUm93XCI6XCJzdWJzY3JpYmUtY29tcG9uZW50X2Zvcm1fX3Jvd19fMzhuU0pcIixcImZvcm1fX3Jvdy0tZm9vdGVyXCI6XCJzdWJzY3JpYmUtY29tcG9uZW50X2Zvcm1fX3Jvdy0tZm9vdGVyX18ySXI4bFwiLFwiZm9ybVJvd0Zvb3RlclwiOlwic3Vic2NyaWJlLWNvbXBvbmVudF9mb3JtX19yb3ctLWZvb3Rlcl9fMklyOGxcIixcImZvcm1fX2FyZWFcIjpcInN1YnNjcmliZS1jb21wb25lbnRfZm9ybV9fYXJlYV9fMlZRTU1cIixcImZvcm1BcmVhXCI6XCJzdWJzY3JpYmUtY29tcG9uZW50X2Zvcm1fX2FyZWFfXzJWUU1NXCIsXCJmb3JtX190ZXh0XCI6XCJzdWJzY3JpYmUtY29tcG9uZW50X2Zvcm1fX3RleHRfXzFoYXMxXCIsXCJmb3JtVGV4dFwiOlwic3Vic2NyaWJlLWNvbXBvbmVudF9mb3JtX190ZXh0X18xaGFzMVwiLFwiZm9ybV9fYm90dG9tXCI6XCJzdWJzY3JpYmUtY29tcG9uZW50X2Zvcm1fX2JvdHRvbV9fM3VhazdcIixcImZvcm1Cb3R0b21cIjpcInN1YnNjcmliZS1jb21wb25lbnRfZm9ybV9fYm90dG9tX18zdWFrN1wiLFwiZm9ybV9faW5wdXRcIjpcInN1YnNjcmliZS1jb21wb25lbnRfZm9ybV9faW5wdXRfXzNEOVFsXCIsXCJmb3JtSW5wdXRcIjpcInN1YnNjcmliZS1jb21wb25lbnRfZm9ybV9faW5wdXRfXzNEOVFsXCJ9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1NTk5MTMyODEzNTBcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU1OTkxMzI4MDgwOFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wid2lkZ2V0LWl0ZW1zX190aXRsZVwiOlwid2lkZ2V0LWl0ZW1zLWNvbXBvbmVudF93aWRnZXQtaXRlbXNfX3RpdGxlX18zR2FiV1wiLFwid2lkZ2V0SXRlbXNUaXRsZVwiOlwid2lkZ2V0LWl0ZW1zLWNvbXBvbmVudF93aWRnZXQtaXRlbXNfX3RpdGxlX18zR2FiV1wiLFwid2lkZ2V0LWl0ZW1zX19saXN0XCI6XCJ3aWRnZXQtaXRlbXMtY29tcG9uZW50X3dpZGdldC1pdGVtc19fbGlzdF9fRzJYdnpcIixcIndpZGdldEl0ZW1zTGlzdFwiOlwid2lkZ2V0LWl0ZW1zLWNvbXBvbmVudF93aWRnZXQtaXRlbXNfX2xpc3RfX0cyWHZ6XCIsXCJ3aWRnZXQtaXRlbXNfX2NhcmRcIjpcIndpZGdldC1pdGVtcy1jb21wb25lbnRfd2lkZ2V0LWl0ZW1zX19jYXJkX19nTXY3QVwiLFwid2lkZ2V0SXRlbXNDYXJkXCI6XCJ3aWRnZXQtaXRlbXMtY29tcG9uZW50X3dpZGdldC1pdGVtc19fY2FyZF9fZ012N0FcIixcIndpZGdldC1pdGVtc19fY2FyZC1pbWFnZVwiOlwid2lkZ2V0LWl0ZW1zLWNvbXBvbmVudF93aWRnZXQtaXRlbXNfX2NhcmQtaW1hZ2VfX09QOFM1XCIsXCJ3aWRnZXRJdGVtc0NhcmRJbWFnZVwiOlwid2lkZ2V0LWl0ZW1zLWNvbXBvbmVudF93aWRnZXQtaXRlbXNfX2NhcmQtaW1hZ2VfX09QOFM1XCIsXCJ3aWRnZXQtaXRlbXNfX2JvdHRvbVwiOlwid2lkZ2V0LWl0ZW1zLWNvbXBvbmVudF93aWRnZXQtaXRlbXNfX2JvdHRvbV9fMkl6V1NcIixcIndpZGdldEl0ZW1zQm90dG9tXCI6XCJ3aWRnZXQtaXRlbXMtY29tcG9uZW50X3dpZGdldC1pdGVtc19fYm90dG9tX18ySXpXU1wifTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTU5OTEzMjgxMDMzXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJjdGEtbmV3XCI6XCJjdGEtY29tcG9uZW50X2N0YS1uZXdfXzJTZ0pMXCIsXCJjdGFOZXdcIjpcImN0YS1jb21wb25lbnRfY3RhLW5ld19fMlNnSkxcIixcImN0YS1uZXdfX2ZvcmVncm91bmRcIjpcImN0YS1jb21wb25lbnRfY3RhLW5ld19fZm9yZWdyb3VuZF9fM2dwNUpcIixcImN0YU5ld0ZvcmVncm91bmRcIjpcImN0YS1jb21wb25lbnRfY3RhLW5ld19fZm9yZWdyb3VuZF9fM2dwNUpcIixcImN0YS1uZXdfX2ZvcmVncm91bmQtLWxlZnRcIjpcImN0YS1jb21wb25lbnRfY3RhLW5ld19fZm9yZWdyb3VuZC0tbGVmdF9fb1U4WjBcIixcImN0YU5ld0ZvcmVncm91bmRMZWZ0XCI6XCJjdGEtY29tcG9uZW50X2N0YS1uZXdfX2ZvcmVncm91bmQtLWxlZnRfX29VOFowXCIsXCJjdGEtbmV3X19mb3JlZ3JvdW5kLS1jZW50ZXJcIjpcImN0YS1jb21wb25lbnRfY3RhLW5ld19fZm9yZWdyb3VuZC0tY2VudGVyX19rMUhQTVwiLFwiY3RhTmV3Rm9yZWdyb3VuZENlbnRlclwiOlwiY3RhLWNvbXBvbmVudF9jdGEtbmV3X19mb3JlZ3JvdW5kLS1jZW50ZXJfX2sxSFBNXCIsXCJjdGEtbmV3X19mb3JlZ3JvdW5kLS1yaWdodFwiOlwiY3RhLWNvbXBvbmVudF9jdGEtbmV3X19mb3JlZ3JvdW5kLS1yaWdodF9famdfSThcIixcImN0YU5ld0ZvcmVncm91bmRSaWdodFwiOlwiY3RhLWNvbXBvbmVudF9jdGEtbmV3X19mb3JlZ3JvdW5kLS1yaWdodF9famdfSThcIixcImN0YS1uZXdfX2ZvcmVncm91bmQtLWNvbnRlbnQtbGVmdFwiOlwiY3RhLWNvbXBvbmVudF9jdGEtbmV3X19mb3JlZ3JvdW5kLS1jb250ZW50LWxlZnRfXzJIX0hlXCIsXCJjdGFOZXdGb3JlZ3JvdW5kQ29udGVudExlZnRcIjpcImN0YS1jb21wb25lbnRfY3RhLW5ld19fZm9yZWdyb3VuZC0tY29udGVudC1sZWZ0X18ySF9IZVwiLFwiY3RhLW5ld19fZm9yZWdyb3VuZC0tY29udGVudC1jZW50ZXJcIjpcImN0YS1jb21wb25lbnRfY3RhLW5ld19fZm9yZWdyb3VuZC0tY29udGVudC1jZW50ZXJfXzNxb2U3XCIsXCJjdGFOZXdGb3JlZ3JvdW5kQ29udGVudENlbnRlclwiOlwiY3RhLWNvbXBvbmVudF9jdGEtbmV3X19mb3JlZ3JvdW5kLS1jb250ZW50LWNlbnRlcl9fM3FvZTdcIixcImN0YS1uZXdfX2ZvcmVncm91bmQtLWNvbnRlbnQtcmlnaHRcIjpcImN0YS1jb21wb25lbnRfY3RhLW5ld19fZm9yZWdyb3VuZC0tY29udGVudC1yaWdodF9fM0VQSTFcIixcImN0YU5ld0ZvcmVncm91bmRDb250ZW50UmlnaHRcIjpcImN0YS1jb21wb25lbnRfY3RhLW5ld19fZm9yZWdyb3VuZC0tY29udGVudC1yaWdodF9fM0VQSTFcIixcInVrLWNvbnRhaW5lclwiOlwiY3RhLWNvbXBvbmVudF91ay1jb250YWluZXJfXzJLVE81XCIsXCJ1a0NvbnRhaW5lclwiOlwiY3RhLWNvbXBvbmVudF91ay1jb250YWluZXJfXzJLVE81XCIsXCJjdGEtbmV3X19iYWNrZ3JvdW5kXCI6XCJjdGEtY29tcG9uZW50X2N0YS1uZXdfX2JhY2tncm91bmRfX0ZLZEN4XCIsXCJjdGFOZXdCYWNrZ3JvdW5kXCI6XCJjdGEtY29tcG9uZW50X2N0YS1uZXdfX2JhY2tncm91bmRfX0ZLZEN4XCIsXCJjdGEtbmV3X190aXRsZVwiOlwiY3RhLWNvbXBvbmVudF9jdGEtbmV3X190aXRsZV9fMlVRNWFcIixcImN0YU5ld1RpdGxlXCI6XCJjdGEtY29tcG9uZW50X2N0YS1uZXdfX3RpdGxlX18yVVE1YVwiLFwiY3RhLW5ld19fYm9keVwiOlwiY3RhLWNvbXBvbmVudF9jdGEtbmV3X19ib2R5X18yWHBvSVwiLFwiY3RhTmV3Qm9keVwiOlwiY3RhLWNvbXBvbmVudF9jdGEtbmV3X19ib2R5X18yWHBvSVwiLFwiY3RhLW5ld19fZGVzY3JpcHRpb25cIjpcImN0YS1jb21wb25lbnRfY3RhLW5ld19fZGVzY3JpcHRpb25fXzNjQXhFXCIsXCJjdGFOZXdEZXNjcmlwdGlvblwiOlwiY3RhLWNvbXBvbmVudF9jdGEtbmV3X19kZXNjcmlwdGlvbl9fM2NBeEVcIixcImN0YS1uZXdfX2J1dHRvbi1saXN0XCI6XCJjdGEtY29tcG9uZW50X2N0YS1uZXdfX2J1dHRvbi1saXN0X18xdTRhcVwiLFwiY3RhTmV3QnV0dG9uTGlzdFwiOlwiY3RhLWNvbXBvbmVudF9jdGEtbmV3X19idXR0b24tbGlzdF9fMXU0YXFcIixcImN0YS1uZXdfX2J1dHRvbi1saXN0LS1jb250ZW50LWxlZnRcIjpcImN0YS1jb21wb25lbnRfY3RhLW5ld19fYnV0dG9uLWxpc3QtLWNvbnRlbnQtbGVmdF9fM20wSFFcIixcImN0YU5ld0J1dHRvbkxpc3RDb250ZW50TGVmdFwiOlwiY3RhLWNvbXBvbmVudF9jdGEtbmV3X19idXR0b24tbGlzdC0tY29udGVudC1sZWZ0X18zbTBIUVwiLFwiY3RhLW5ld19fYnV0dG9uLWxpc3QtLWNvbnRlbnQtY2VudGVyXCI6XCJjdGEtY29tcG9uZW50X2N0YS1uZXdfX2J1dHRvbi1saXN0LS1jb250ZW50LWNlbnRlcl9fMVRYbXVcIixcImN0YU5ld0J1dHRvbkxpc3RDb250ZW50Q2VudGVyXCI6XCJjdGEtY29tcG9uZW50X2N0YS1uZXdfX2J1dHRvbi1saXN0LS1jb250ZW50LWNlbnRlcl9fMVRYbXVcIixcImN0YS1uZXdfX2J1dHRvbi1saXN0LS1jb250ZW50LXJpZ2h0XCI6XCJjdGEtY29tcG9uZW50X2N0YS1uZXdfX2J1dHRvbi1saXN0LS1jb250ZW50LXJpZ2h0X19HNkpINVwiLFwiY3RhTmV3QnV0dG9uTGlzdENvbnRlbnRSaWdodFwiOlwiY3RhLWNvbXBvbmVudF9jdGEtbmV3X19idXR0b24tbGlzdC0tY29udGVudC1yaWdodF9fRzZKSDVcIixcImN0YS1uZXdfX2RlY29yXCI6XCJjdGEtY29tcG9uZW50X2N0YS1uZXdfX2RlY29yX19FWk5fOFwiLFwiY3RhTmV3RGVjb3JcIjpcImN0YS1jb21wb25lbnRfY3RhLW5ld19fZGVjb3JfX0VaTl84XCJ9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1NTk5MTMyNzYwMDRcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImZhcS1vdmVydmlld1wiOlwiZmFxLW92ZXJ2aWV3LWNvbXBvbmVudF9mYXEtb3ZlcnZpZXdfXzFkWXpiXCIsXCJmYXFPdmVydmlld1wiOlwiZmFxLW92ZXJ2aWV3LWNvbXBvbmVudF9mYXEtb3ZlcnZpZXdfXzFkWXpiXCIsXCJmYXEtb3ZlcnZpZXdfX3NpZGViYXJcIjpcImZhcS1vdmVydmlldy1jb21wb25lbnRfZmFxLW92ZXJ2aWV3X19zaWRlYmFyX19fT2hIRVwiLFwiZmFxT3ZlcnZpZXdTaWRlYmFyXCI6XCJmYXEtb3ZlcnZpZXctY29tcG9uZW50X2ZhcS1vdmVydmlld19fc2lkZWJhcl9fX09oSEVcIixcImZhcS1vdmVydmlld19fc2lkZWJhcl9fc2VhcmNoXCI6XCJmYXEtb3ZlcnZpZXctY29tcG9uZW50X2ZhcS1vdmVydmlld19fc2lkZWJhcl9fc2VhcmNoX18zbWZtTVwiLFwiZmFxT3ZlcnZpZXdTaWRlYmFyU2VhcmNoXCI6XCJmYXEtb3ZlcnZpZXctY29tcG9uZW50X2ZhcS1vdmVydmlld19fc2lkZWJhcl9fc2VhcmNoX18zbWZtTVwiLFwiZmFxLW92ZXJ2aWV3X19zaWRlYmFyX19ibG9ja1wiOlwiZmFxLW92ZXJ2aWV3LWNvbXBvbmVudF9mYXEtb3ZlcnZpZXdfX3NpZGViYXJfX2Jsb2NrX18zVUlMc1wiLFwiZmFxT3ZlcnZpZXdTaWRlYmFyQmxvY2tcIjpcImZhcS1vdmVydmlldy1jb21wb25lbnRfZmFxLW92ZXJ2aWV3X19zaWRlYmFyX19ibG9ja19fM1VJTHNcIixcImVtcHR5LXN0YXRlXCI6XCJmYXEtb3ZlcnZpZXctY29tcG9uZW50X2VtcHR5LXN0YXRlX18yU3Y2V1wiLFwiZW1wdHlTdGF0ZVwiOlwiZmFxLW92ZXJ2aWV3LWNvbXBvbmVudF9lbXB0eS1zdGF0ZV9fMlN2NldcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU1OTkxMzI3NzM2OVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCJleHBvcnQgY29uc3QgZ2VuZXJhdGVFbXB0eWRGZWF0dXJlZEl0ZW1Nb2R1bGUgPSAoKSA9PiAoe1xuICBpZDogXCJcIixcbiAgbmFtZTogXCJcIixcbiAgdG9wTWFyZ2luOiBcIlwiLFxuICBib3R0b21NYXJnaW46IFwiXCIsXG4gIHRpdGxlOiBcIlwiLFxuICBidXR0b25UZXh0OiBcIlwiLFxuICByZWNpcGVzOiBbXG4gICAge1xuICAgICAgaW1hZ2VVcmw6IFwiXCIsXG4gICAgICBsYWJlbDogW1xuICAgICAgICB7XG4gICAgICAgICAgaWNvbjogXCJcIixcbiAgICAgICAgICBsYWJlbDogXCJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWNvbjogXCJcIixcbiAgICAgICAgICBsYWJlbDogXCJcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgY29udGVudDogXCJcIixcbiAgICAgIGNhdGVnb3J5OiBcIlwiLFxuICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgIGxpbms6IFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGltYWdlVXJsOiBcIlwiLFxuICAgICAgbGFiZWw6IFtcbiAgICAgICAge1xuICAgICAgICAgIGljb246IFwiXCIsXG4gICAgICAgICAgbGFiZWw6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGljb246IFwiXCIsXG4gICAgICAgICAgbGFiZWw6IFwiXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGNvbnRlbnQ6IFwiXCIsXG4gICAgICBjYXRlZ29yeTogXCJcIixcbiAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICBsaW5rOiBcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWFnZVVybDogXCJcIixcbiAgICAgIGxhYmVsOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uOiBcIlwiLFxuICAgICAgICAgIGxhYmVsOiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uOiBcIlwiLFxuICAgICAgICAgIGxhYmVsOiBcIlwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBjb250ZW50OiBcIlwiLFxuICAgICAgY2F0ZWdvcnk6IFwiXCIsXG4gICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgbGluazogXCJcIlxuICAgIH1cbiAgXVxufSk7XG5jb25zdCBnZW5lcmF0ZUR1bW15UmVjaXBlcyA9ICgpID0+IFtcbiAge1xuICAgIGxhYmVsOiBbXG4gICAgICB7XG4gICAgICAgIGljb246IFwiaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS92aXBlci1kZXZlbG9wbWVudC1pbWFnZXMvVGVycmFzYW5hL3BlcnNvbi5zdmdcIixcbiAgICAgICAgbGFiZWw6IFwiMSBwZXJzb29uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IFwiaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS92aXBlci1kZXZlbG9wbWVudC1pbWFnZXMvVGVycmFzYW5hL3JlY2lwZS1kZXRhaWwvdGltZS5zdmdcIixcbiAgICAgICAgbGFiZWw6IFwiMjAgbWludXRlblwiXG4gICAgICB9XG4gICAgXSxcbiAgICBpbWFnZVVybDogXCJodHRwczovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL3ZpcGVyLWRldmVsb3BtZW50LWltYWdlcy9UZXJyYXNhbmEvaW1hZ2UtZmVhdHVyZWQuanBnXCIsXG4gICAgY29udGVudDogXCJTb2JhIG1ldCBmcmlzc2UgZ2VtYmVyLXNvamFzYXVzXCIsXG4gICAgY2F0ZWdvcnk6IFwiUmVjZXB0XCIsXG4gICAgYnV0dG9uVGV4dDogXCJCZWtpamsgbWVlciByZWNlcHRlblwiLFxuICAgIGxpbms6IFwiLi9cIlxuICB9LFxuICB7XG4gICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS92aXBlci1kZXZlbG9wbWVudC1pbWFnZXMvVGVycmFzYW5hL2ltYWdlLWZlYXR1cmVkLmpwZ1wiLFxuICAgIGxhYmVsOiBbXG4gICAgICB7XG4gICAgICAgIGljb246IFwiaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS92aXBlci1kZXZlbG9wbWVudC1pbWFnZXMvVGVycmFzYW5hL3BlcnNvbi5zdmdcIixcbiAgICAgICAgbGFiZWw6IFwiMiBwZXJzb29uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IFwiaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS92aXBlci1kZXZlbG9wbWVudC1pbWFnZXMvVGVycmFzYW5hL3JlY2lwZS1kZXRhaWwvdGltZS5zdmdcIixcbiAgICAgICAgbGFiZWw6IFwiMjAgbWludXRlblwiXG4gICAgICB9XG4gICAgXSxcbiAgICBjb250ZW50OiBcIllha2kgc29iYSAoZ2ViYWtrZW4gc29iYW5vZWRlbHMpXCIsXG4gICAgY2F0ZWdvcnk6IFwiUmVjZXB0XCIsXG4gICAgYnV0dG9uVGV4dDogXCJCZWtpamsgbWVlciByZWNlcHRlblwiLFxuICAgIGxpbms6IFwiLi9cIlxuICB9LFxuICB7XG4gICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS92aXBlci1kZXZlbG9wbWVudC1pbWFnZXMvVGVycmFzYW5hL2ltYWdlLWZlYXR1cmVkLmpwZ1wiLFxuICAgIGxhYmVsOiBbXG4gICAgICB7XG4gICAgICAgIGljb246IFwiaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS92aXBlci1kZXZlbG9wbWVudC1pbWFnZXMvVGVycmFzYW5hL3BlcnNvbi5zdmdcIixcbiAgICAgICAgbGFiZWw6IFwiMyBwZXJzb29uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IFwiaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS92aXBlci1kZXZlbG9wbWVudC1pbWFnZXMvVGVycmFzYW5hL3JlY2lwZS1kZXRhaWwvdGltZS5zdmdcIixcbiAgICAgICAgbGFiZWw6IFwiMTUgbWludXRlblwiXG4gICAgICB9XG4gICAgXSxcbiAgICBjb250ZW50OiBcIlVkb24gbWV0IGRhaWtvbiBpbiBtaXNvLXRhbWFyaXNhdXNcIixcbiAgICBjYXRlZ29yeTogXCJSZWNlcHRcIixcbiAgICBidXR0b25UZXh0OiBcIkJla2lqayBtZWVyIHJlY2VwdGVuXCIsXG4gICAgbGluazogXCIuL1wiXG4gIH1cbl07XG5leHBvcnQgY29uc3QgZ2VuZXJhdGVGaWxsZWRGZWF0dXJlZEl0ZW1Nb2R1bGUgPSAoKSA9PiAoe1xuICBpZDogXCI1NTVcIixcbiAgbmFtZTogXCJmZWF0dXJlZEl0ZW1Nb2R1bGVcIixcbiAgdG9wTWFyZ2luOiBcIjBweFwiLFxuICBib3R0b21NYXJnaW46IFwiMHB4XCIsXG4gIHRpdGxlOiBcIkhlZXJsaWprZSByZWNlcHRlbiFcIixcbiAgYnV0dG9uVGV4dDogXCJCZWtpamsgbWVlciByZWNlcHRlblwiLFxuICByZWNpcGVzOiBnZW5lcmF0ZUR1bW15UmVjaXBlcygpXG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJmZWF0dXJlZFwiOlwiZmVhdHVyZWQtaXRlbS1jb21wb25lbnRfZmVhdHVyZWRfXzJnaXVyXCIsXCJmZWF0dXJlZF9faGVhZGVyXCI6XCJmZWF0dXJlZC1pdGVtLWNvbXBvbmVudF9mZWF0dXJlZF9faGVhZGVyX18xNXdrVlwiLFwiZmVhdHVyZWRIZWFkZXJcIjpcImZlYXR1cmVkLWl0ZW0tY29tcG9uZW50X2ZlYXR1cmVkX19oZWFkZXJfXzE1d2tWXCIsXCJmZWF0dXJlZF9faGVhZGVyLWJ1dHRvblwiOlwiZmVhdHVyZWQtaXRlbS1jb21wb25lbnRfZmVhdHVyZWRfX2hlYWRlci1idXR0b25fXzNkLWV6XCIsXCJmZWF0dXJlZEhlYWRlckJ1dHRvblwiOlwiZmVhdHVyZWQtaXRlbS1jb21wb25lbnRfZmVhdHVyZWRfX2hlYWRlci1idXR0b25fXzNkLWV6XCIsXCJmZWF0dXJlZF9fYm90dG9tLWJ1dHRvblwiOlwiZmVhdHVyZWQtaXRlbS1jb21wb25lbnRfZmVhdHVyZWRfX2JvdHRvbS1idXR0b25fXzFvTVJNXCIsXCJmZWF0dXJlZEJvdHRvbUJ1dHRvblwiOlwiZmVhdHVyZWQtaXRlbS1jb21wb25lbnRfZmVhdHVyZWRfX2JvdHRvbS1idXR0b25fXzFvTVJNXCIsXCJmZWF0dXJlZF9fYm9keVwiOlwiZmVhdHVyZWQtaXRlbS1jb21wb25lbnRfZmVhdHVyZWRfX2JvZHlfXzRZLXFXXCIsXCJmZWF0dXJlZEJvZHlcIjpcImZlYXR1cmVkLWl0ZW0tY29tcG9uZW50X2ZlYXR1cmVkX19ib2R5X180WS1xV1wifTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTU5OTEzMjgzNjA2XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9mZWF0dXJlZC1pdGVtLWNvbXBvbmVudC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgRmVhdHVyZWRJdGVtTW9kdWxlIH0gZnJvbSBcIkBhcHAvYXBpXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGFwcC9tb2R1bGVzL2NvcmUvYnV0dG9uXCI7XG5pbXBvcnQgeyBJdGVtQ2FyZCB9IGZyb20gXCIuLi9jb3JlL2l0ZW0tY2FyZFwiO1xuaW1wb3J0IEFycm93UmlnaHQgZnJvbSBcIkBhc3NldHMvaWNvbnMvYXJyb3ctcmlnaHQuc3ZnXCI7XG5pbXBvcnQgeyBJY29uQ29tcG9uZW50IH0gZnJvbSBcIkBhcHAvbW9kdWxlcy9jb3JlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZlYXR1cmVkQ29tcG9uZW50UHJvcHMge1xuICBmZWF0dXJlZE1vZHVsZTogRmVhdHVyZWRJdGVtTW9kdWxlO1xufVxuXG5jb25zdCBGZWF0dXJlZENvbXBvbmVudCA9IChwcm9wczogSUZlYXR1cmVkQ29tcG9uZW50UHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImZlYXR1cmVkXCJdfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImZlYXR1cmVkX19oZWFkZXJcIl19PlxuICAgICAgICA8aDI+e3Byb3BzLmZlYXR1cmVkTW9kdWxlLnRpdGxlfTwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJmZWF0dXJlZF9faGVhZGVyLWJ1dHRvblwiXX0+XG4gICAgICAgICAgPEJ1dHRvbiB0aXRsZT17cHJvcHMuZmVhdHVyZWRNb2R1bGUuYnV0dG9uVGV4dH0gdmFyaWFudD1cInByaW1hcnlcIiBpY29uPXtBcnJvd1JpZ2h0fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImZlYXR1cmVkX19ib2R5XCJdfT5cbiAgICAgICAge3Byb3BzLmZlYXR1cmVkTW9kdWxlLnJlY2lwZXMubWFwKChjYXJkLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8SXRlbUNhcmRcbiAgICAgICAgICAgICAgbGFiZWxzPXtjYXJkLmxhYmVsLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPEljb25Db21wb25lbnQgaWNvbj17aXRlbS5pY29ufSBzaXplPVwiMTRweFwiIC8+IHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgbGluaz17Y2FyZC5saW5rfVxuICAgICAgICAgICAgICB0aXRsZT17Y2FyZC5jb250ZW50fVxuICAgICAgICAgICAgICBpbWFnZT17eyB1cmw6IGNhcmQuaW1hZ2VVcmwsIGFsdDogXCJBbHRcIiB9fVxuICAgICAgICAgICAgICBjYXRlZ29yeT17Y2FyZC5jYXRlZ29yeX1cbiAgICAgICAgICAgICAgYnV0dG9uPXs8QnV0dG9uIHRpdGxlPXtjYXJkLmJ1dHRvblRleHR9IGhyZWY9e2NhcmQubGlua30gdmFyaWFudD1cImRlZmF1bHRcIiAvPn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiZmVhdHVyZWRfX2JvdHRvbS1idXR0b25cIl19PlxuICAgICAgICA8QnV0dG9uIHRpdGxlPXtwcm9wcy5mZWF0dXJlZE1vZHVsZS5idXR0b25UZXh0fSB2YXJpYW50PVwicHJpbWFyeVwiIGljb249e0Fycm93UmlnaHR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgeyBGZWF0dXJlZENvbXBvbmVudCB9O1xuIiwiZXhwb3J0ICogZnJvbSBcIi4vZmVhdHVyZWQtaXRlbS5jb21wb25lbnRcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2R1bW15LWRhdGEtZ2VuZXJhdG9yXCI7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiZm9vdGVyXCI6XCJmb290ZXItY29tcG9uZW50X2Zvb3Rlcl9fMkRWU2hcIixcImZvb3Rlcl9fdG9wXCI6XCJmb290ZXItY29tcG9uZW50X2Zvb3Rlcl9fdG9wX18yR042QlwiLFwiZm9vdGVyVG9wXCI6XCJmb290ZXItY29tcG9uZW50X2Zvb3Rlcl9fdG9wX18yR042QlwiLFwiZm9vdGVyX19zZWN0aW9uXCI6XCJmb290ZXItY29tcG9uZW50X2Zvb3Rlcl9fc2VjdGlvbl9fMnRJUlZcIixcImZvb3RlclNlY3Rpb25cIjpcImZvb3Rlci1jb21wb25lbnRfZm9vdGVyX19zZWN0aW9uX18ydElSVlwiLFwiZm9vdGVyX19zZWN0aW9uLXRpdGxlXCI6XCJmb290ZXItY29tcG9uZW50X2Zvb3Rlcl9fc2VjdGlvbi10aXRsZV9fMzNUV0ZcIixcImZvb3RlclNlY3Rpb25UaXRsZVwiOlwiZm9vdGVyLWNvbXBvbmVudF9mb290ZXJfX3NlY3Rpb24tdGl0bGVfXzMzVFdGXCIsXCJmb290ZXJfX3NlY3Rpb24tbGlzdFwiOlwiZm9vdGVyLWNvbXBvbmVudF9mb290ZXJfX3NlY3Rpb24tbGlzdF9fM3F1Y1pcIixcImZvb3RlclNlY3Rpb25MaXN0XCI6XCJmb290ZXItY29tcG9uZW50X2Zvb3Rlcl9fc2VjdGlvbi1saXN0X18zcXVjWlwiLFwiZm9vdGVyX19ib3R0b21cIjpcImZvb3Rlci1jb21wb25lbnRfZm9vdGVyX19ib3R0b21fXzNIakVMXCIsXCJmb290ZXJCb3R0b21cIjpcImZvb3Rlci1jb21wb25lbnRfZm9vdGVyX19ib3R0b21fXzNIakVMXCIsXCJmb290ZXJfX2JvdHRvbS1sZWZ0XCI6XCJmb290ZXItY29tcG9uZW50X2Zvb3Rlcl9fYm90dG9tLWxlZnRfXzJtMFIxXCIsXCJmb290ZXJCb3R0b21MZWZ0XCI6XCJmb290ZXItY29tcG9uZW50X2Zvb3Rlcl9fYm90dG9tLWxlZnRfXzJtMFIxXCIsXCJmb290ZXJfX2xvZ29cIjpcImZvb3Rlci1jb21wb25lbnRfZm9vdGVyX19sb2dvX18xSVREQVwiLFwiZm9vdGVyTG9nb1wiOlwiZm9vdGVyLWNvbXBvbmVudF9mb290ZXJfX2xvZ29fXzFJVERBXCIsXCJmb290ZXJfX25hdlwiOlwiZm9vdGVyLWNvbXBvbmVudF9mb290ZXJfX25hdl9fb3g0bXJcIixcImZvb3Rlck5hdlwiOlwiZm9vdGVyLWNvbXBvbmVudF9mb290ZXJfX25hdl9fb3g0bXJcIixcImZvb3Rlcl9fc29jaWFsXCI6XCJmb290ZXItY29tcG9uZW50X2Zvb3Rlcl9fc29jaWFsX18yZEVzYlwiLFwiZm9vdGVyU29jaWFsXCI6XCJmb290ZXItY29tcG9uZW50X2Zvb3Rlcl9fc29jaWFsX18yZEVzYlwifTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTU5OTEzMjc2MzE5XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJpbmZvLWhlYWRlclwiOlwiaW5mby1oZWFkZXItY29tcG9uZW50X2luZm8taGVhZGVyX18zVktLNlwiLFwiaW5mb0hlYWRlclwiOlwiaW5mby1oZWFkZXItY29tcG9uZW50X2luZm8taGVhZGVyX18zVktLNlwiLFwiaW5mby1oZWFkZXJfX2J1dHRvblwiOlwiaW5mby1oZWFkZXItY29tcG9uZW50X2luZm8taGVhZGVyX19idXR0b25fXzNjN21iXCIsXCJpbmZvSGVhZGVyQnV0dG9uXCI6XCJpbmZvLWhlYWRlci1jb21wb25lbnRfaW5mby1oZWFkZXJfX2J1dHRvbl9fM2M3bWJcIixcImluZm8taGVhZGVyX19mb3JlZ3JvdW5kXCI6XCJpbmZvLWhlYWRlci1jb21wb25lbnRfaW5mby1oZWFkZXJfX2ZvcmVncm91bmRfXzNvRWpwXCIsXCJpbmZvSGVhZGVyRm9yZWdyb3VuZFwiOlwiaW5mby1oZWFkZXItY29tcG9uZW50X2luZm8taGVhZGVyX19mb3JlZ3JvdW5kX18zb0VqcFwiLFwiaW5mby1oZWFkZXJfX2ZvcmVncm91bmQtLWxlZnRcIjpcImluZm8taGVhZGVyLWNvbXBvbmVudF9pbmZvLWhlYWRlcl9fZm9yZWdyb3VuZC0tbGVmdF9fMUFyX3BcIixcImluZm9IZWFkZXJGb3JlZ3JvdW5kTGVmdFwiOlwiaW5mby1oZWFkZXItY29tcG9uZW50X2luZm8taGVhZGVyX19mb3JlZ3JvdW5kLS1sZWZ0X18xQXJfcFwiLFwiaW5mby1oZWFkZXJfX2JvZHktdGV4dFwiOlwiaW5mby1oZWFkZXItY29tcG9uZW50X2luZm8taGVhZGVyX19ib2R5LXRleHRfXzFKdjE4XCIsXCJpbmZvSGVhZGVyQm9keVRleHRcIjpcImluZm8taGVhZGVyLWNvbXBvbmVudF9pbmZvLWhlYWRlcl9fYm9keS10ZXh0X18xSnYxOFwiLFwiaW5mby1oZWFkZXJfX2JhY2tcIjpcImluZm8taGVhZGVyLWNvbXBvbmVudF9pbmZvLWhlYWRlcl9fYmFja19fMmhPMlhcIixcImluZm9IZWFkZXJCYWNrXCI6XCJpbmZvLWhlYWRlci1jb21wb25lbnRfaW5mby1oZWFkZXJfX2JhY2tfXzJoTzJYXCIsXCJpbmZvLWhlYWRlcl9fYm9keVwiOlwiaW5mby1oZWFkZXItY29tcG9uZW50X2luZm8taGVhZGVyX19ib2R5X181NFRvYVwiLFwiaW5mb0hlYWRlckJvZHlcIjpcImluZm8taGVhZGVyLWNvbXBvbmVudF9pbmZvLWhlYWRlcl9fYm9keV9fNTRUb2FcIixcImJ1dHRvblwiOlwiaW5mby1oZWFkZXItY29tcG9uZW50X2J1dHRvbl9fM1VkMEJcIixcImluZm8taGVhZGVyX19pbWFnZVwiOlwiaW5mby1oZWFkZXItY29tcG9uZW50X2luZm8taGVhZGVyX19pbWFnZV9fMlB1ODNcIixcImluZm9IZWFkZXJJbWFnZVwiOlwiaW5mby1oZWFkZXItY29tcG9uZW50X2luZm8taGVhZGVyX19pbWFnZV9fMlB1ODNcIixcImluZm8taGVhZGVyLS1jZW50ZXJcIjpcImluZm8taGVhZGVyLWNvbXBvbmVudF9pbmZvLWhlYWRlci0tY2VudGVyX18xLTh0RFwiLFwiaW5mb0hlYWRlckNlbnRlclwiOlwiaW5mby1oZWFkZXItY29tcG9uZW50X2luZm8taGVhZGVyLS1jZW50ZXJfXzEtOHREXCJ9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1NTk5MTMyNzYwMTFcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImluc3RhZ3JhbS13YWxsXCI6XCJpbnN0YWdyYW0td2FsbC1jb21wb25lbnRfaW5zdGFncmFtLXdhbGxfXzJuMWlSXCIsXCJpbnN0YWdyYW1XYWxsXCI6XCJpbnN0YWdyYW0td2FsbC1jb21wb25lbnRfaW5zdGFncmFtLXdhbGxfXzJuMWlSXCIsXCJpbnN0YWdyYW0td2FsbF9fdGl0bGVcIjpcImluc3RhZ3JhbS13YWxsLWNvbXBvbmVudF9pbnN0YWdyYW0td2FsbF9fdGl0bGVfXzlrUEFFXCIsXCJpbnN0YWdyYW1XYWxsVGl0bGVcIjpcImluc3RhZ3JhbS13YWxsLWNvbXBvbmVudF9pbnN0YWdyYW0td2FsbF9fdGl0bGVfXzlrUEFFXCIsXCJiaWctY2FyZFwiOlwiaW5zdGFncmFtLXdhbGwtY29tcG9uZW50X2JpZy1jYXJkX19rUGRrQVwiLFwiYmlnQ2FyZFwiOlwiaW5zdGFncmFtLXdhbGwtY29tcG9uZW50X2JpZy1jYXJkX19rUGRrQVwiLFwiaW5zdGFncmFtLXdhbGxfX2NvbGxlY3Rpb25cIjpcImluc3RhZ3JhbS13YWxsLWNvbXBvbmVudF9pbnN0YWdyYW0td2FsbF9fY29sbGVjdGlvbl9fM2ZIem5cIixcImluc3RhZ3JhbVdhbGxDb2xsZWN0aW9uXCI6XCJpbnN0YWdyYW0td2FsbC1jb21wb25lbnRfaW5zdGFncmFtLXdhbGxfX2NvbGxlY3Rpb25fXzNmSHpuXCIsXCJpbnN0YWdyYW1fX3NsaWNrLWFycm93XCI6XCJpbnN0YWdyYW0td2FsbC1jb21wb25lbnRfaW5zdGFncmFtX19zbGljay1hcnJvd19fMnBMNHZcIixcImluc3RhZ3JhbVNsaWNrQXJyb3dcIjpcImluc3RhZ3JhbS13YWxsLWNvbXBvbmVudF9pbnN0YWdyYW1fX3NsaWNrLWFycm93X18ycEw0dlwiLFwiaW5zdGFncmFtX19zbGljay1hcnJvdy1wcmV2XCI6XCJpbnN0YWdyYW0td2FsbC1jb21wb25lbnRfaW5zdGFncmFtX19zbGljay1hcnJvdy1wcmV2X18zNFdDWFwiLFwiaW5zdGFncmFtU2xpY2tBcnJvd1ByZXZcIjpcImluc3RhZ3JhbS13YWxsLWNvbXBvbmVudF9pbnN0YWdyYW1fX3NsaWNrLWFycm93LXByZXZfXzM0V0NYXCIsXCJpbnN0YWdyYW1fX3NsaWNrLWFycm93LW5leHRcIjpcImluc3RhZ3JhbS13YWxsLWNvbXBvbmVudF9pbnN0YWdyYW1fX3NsaWNrLWFycm93LW5leHRfX25NblpiXCIsXCJpbnN0YWdyYW1TbGlja0Fycm93TmV4dFwiOlwiaW5zdGFncmFtLXdhbGwtY29tcG9uZW50X2luc3RhZ3JhbV9fc2xpY2stYXJyb3ctbmV4dF9fbk1uWmJcIixcImluc3RhZ3JhbV9fc2xpY2stc2xpZGVyXCI6XCJpbnN0YWdyYW0td2FsbC1jb21wb25lbnRfaW5zdGFncmFtX19zbGljay1zbGlkZXJfX3hSd2NXXCIsXCJpbnN0YWdyYW1TbGlja1NsaWRlclwiOlwiaW5zdGFncmFtLXdhbGwtY29tcG9uZW50X2luc3RhZ3JhbV9fc2xpY2stc2xpZGVyX194UndjV1wifTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTU5OTEzMjc3OTcyXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJpdGVtLW92ZXJ2aWV3XCI6XCJpdGVtLW92ZXJ2aWV3LWNvbXBvbmVudF9pdGVtLW92ZXJ2aWV3X19GMXl3M1wiLFwiaXRlbU92ZXJ2aWV3XCI6XCJpdGVtLW92ZXJ2aWV3LWNvbXBvbmVudF9pdGVtLW92ZXJ2aWV3X19GMXl3M1wiLFwiaXRlbS1vdmVydmlld19fcG9zdHNcIjpcIml0ZW0tb3ZlcnZpZXctY29tcG9uZW50X2l0ZW0tb3ZlcnZpZXdfX3Bvc3RzX18zLWc1Z1wiLFwiaXRlbU92ZXJ2aWV3UG9zdHNcIjpcIml0ZW0tb3ZlcnZpZXctY29tcG9uZW50X2l0ZW0tb3ZlcnZpZXdfX3Bvc3RzX18zLWc1Z1wiLFwiaXRlbS1vdmVydmlld19fZmlsdGVyc1wiOlwiaXRlbS1vdmVydmlldy1jb21wb25lbnRfaXRlbS1vdmVydmlld19fZmlsdGVyc19fMThpbzhcIixcIml0ZW1PdmVydmlld0ZpbHRlcnNcIjpcIml0ZW0tb3ZlcnZpZXctY29tcG9uZW50X2l0ZW0tb3ZlcnZpZXdfX2ZpbHRlcnNfXzE4aW84XCIsXCJlbXB0eS1zdGF0ZVwiOlwiaXRlbS1vdmVydmlldy1jb21wb25lbnRfZW1wdHktc3RhdGVfXzNsVkJoXCIsXCJlbXB0eVN0YXRlXCI6XCJpdGVtLW92ZXJ2aWV3LWNvbXBvbmVudF9lbXB0eS1zdGF0ZV9fM2xWQmhcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU1OTkxMzI3ODgzNVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCJleHBvcnQgY29uc3QgZ2VuZXJhdGVFbXB0eU1vcmVQcm9kdWN0c01vZHVsZSA9ICgpID0+ICh7XG4gIGlkOiBcIlwiLFxuICBuYW1lOiBcIlwiLFxuICB0b3BNYXJnaW46IFwiXCIsXG4gIGJvdHRvbU1hcmdpbjogXCJcIixcbiAgdGl0bGU6IFwiXCIsXG4gIGJ1dHRvblRleHQ6IFwiXCIsXG4gIHJlbGF0ZWRQcm9kdWN0czogW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgcGljdHVyZTogXCJcIixcbiAgICAgIFVSTDogXCIvXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgcGljdHVyZTogXCJcIixcbiAgICAgIFVSTDogXCIvXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgcGljdHVyZTogXCJcIixcbiAgICAgIFVSTDogXCIvXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgcGljdHVyZTogXCJcIixcbiAgICAgIFVSTDogXCIvXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgcGljdHVyZTogXCJcIixcbiAgICAgIFVSTDogXCIvXCJcbiAgICB9XG4gIF1cbn0pO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVGaWxsZWRNb3JlUHJvZHVjdHNNb2R1bGUgPSAoKSA9PiAoe1xuICBpZDogXCI5XCIsXG4gIG5hbWU6IFwiTW9yZVByb2R1Y3RzXCIsXG4gIHRvcE1hcmdpbjogXCIwcHhcIixcbiAgYm90dG9tTWFyZ2luOiBcIjBweFwiLFxuICB0aXRsZTogXCJNZWVyIE5vZWRlbHMhXCIsXG4gIGJ1dHRvblRleHQ6IFwiTWVlciBub2VkZWxzXCIsXG4gIHJlbGF0ZWRQcm9kdWN0czogW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIjEwMCUgQnJ1aW5lIHJpanN0bm9lZGVsc1wiLFxuICAgICAgcGljdHVyZTogXCJodHRwczovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL3ZpcGVyLWRldmVsb3BtZW50LWltYWdlcy9UZXJyYXNhbmEvcHJvZHVjdHMvTm9lZGVscy8yLnBuZ1wiLFxuICAgICAgVVJMOiBcIi9cIlxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiQm9la3dlaXRub2VkZWxzIG1ldCB6b2V0ZSBhYXJkYXBwZWxcIixcbiAgICAgIHBpY3R1cmU6IFwiaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS92aXBlci1kZXZlbG9wbWVudC1pbWFnZXMvVGVycmFzYW5hL3Byb2R1Y3RzL05vZWRlbHMvNC5qcGdcIixcbiAgICAgIFVSTDogXCIvXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkJydWluZSByaWpzdG5vZWRlbHMgbWV0IHBvbXBvZW4gZW4gZ2VtYmVyXCIsXG4gICAgICBwaWN0dXJlOiBcImh0dHBzOi8vczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vdmlwZXItZGV2ZWxvcG1lbnQtaW1hZ2VzL1RlcnJhc2FuYS9wcm9kdWN0cy9Ob2VkZWxzLzIucG5nXCIsXG4gICAgICBVUkw6IFwiL1wiXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJCcnVpbmUgcmlqc3Rub2VkZWxzIG1ldCB3YWthbWVcIixcbiAgICAgIHBpY3R1cmU6IFwiaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS92aXBlci1kZXZlbG9wbWVudC1pbWFnZXMvVGVycmFzYW5hL3Byb2R1Y3RzL05vZWRlbHMvMy5qcGdcIixcbiAgICAgIFVSTDogXCIvXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIjEwMCUgQnJ1aW5lIHJpanN0bm9lZGVsc1wiLFxuICAgICAgcGljdHVyZTogXCJodHRwczovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL3ZpcGVyLWRldmVsb3BtZW50LWltYWdlcy9UZXJyYXNhbmEvcHJvZHVjdHMvTm9lZGVscy8yLnBuZ1wiLFxuICAgICAgVVJMOiBcIi9cIlxuICAgIH1cbiAgXVxufSk7XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9tb3JlLXByb2R1Y3RzLmNvbXBvbmVudHNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2R1bW15LWRhdGEtZ2VuZXJhdG9yc1wiO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIm1vcmUtcHJvZHVjdHNcIjpcIm1vcmUtcHJvZHVjdHMuY29tcG9uZW50c19tb3JlLXByb2R1Y3RzX18zaDJvaVwiLFwibW9yZVByb2R1Y3RzXCI6XCJtb3JlLXByb2R1Y3RzLmNvbXBvbmVudHNfbW9yZS1wcm9kdWN0c19fM2gyb2lcIixcIm1vcmUtcHJvZHVjdHNfX2hlYWRlclwiOlwibW9yZS1wcm9kdWN0cy5jb21wb25lbnRzX21vcmUtcHJvZHVjdHNfX2hlYWRlcl9fMlktUDFcIixcIm1vcmVQcm9kdWN0c0hlYWRlclwiOlwibW9yZS1wcm9kdWN0cy5jb21wb25lbnRzX21vcmUtcHJvZHVjdHNfX2hlYWRlcl9fMlktUDFcIixcIm1vcmUtcHJvZHVjdHNfX2hlYWRlci1idXR0b25cIjpcIm1vcmUtcHJvZHVjdHMuY29tcG9uZW50c19tb3JlLXByb2R1Y3RzX19oZWFkZXItYnV0dG9uX18ycjlEc1wiLFwibW9yZVByb2R1Y3RzSGVhZGVyQnV0dG9uXCI6XCJtb3JlLXByb2R1Y3RzLmNvbXBvbmVudHNfbW9yZS1wcm9kdWN0c19faGVhZGVyLWJ1dHRvbl9fMnI5RHNcIixcIm1vcmUtcHJvZHVjdHNfX2JvdHRvbVwiOlwibW9yZS1wcm9kdWN0cy5jb21wb25lbnRzX21vcmUtcHJvZHVjdHNfX2JvdHRvbV9fMnhZM0JcIixcIm1vcmVQcm9kdWN0c0JvdHRvbVwiOlwibW9yZS1wcm9kdWN0cy5jb21wb25lbnRzX21vcmUtcHJvZHVjdHNfX2JvdHRvbV9fMnhZM0JcIixcIm1vcmUtcHJvZHVjdHNfX3NsaWRlXCI6XCJtb3JlLXByb2R1Y3RzLmNvbXBvbmVudHNfbW9yZS1wcm9kdWN0c19fc2xpZGVfXzJkS0ZmXCIsXCJtb3JlUHJvZHVjdHNTbGlkZVwiOlwibW9yZS1wcm9kdWN0cy5jb21wb25lbnRzX21vcmUtcHJvZHVjdHNfX3NsaWRlX18yZEtGZlwiLFwibW9yZS1wcm9kdWN0c19fYm90dG9tLWJ1dHRvblwiOlwibW9yZS1wcm9kdWN0cy5jb21wb25lbnRzX21vcmUtcHJvZHVjdHNfX2JvdHRvbS1idXR0b25fXzFhb1l2XCIsXCJtb3JlUHJvZHVjdHNCb3R0b21CdXR0b25cIjpcIm1vcmUtcHJvZHVjdHMuY29tcG9uZW50c19tb3JlLXByb2R1Y3RzX19ib3R0b20tYnV0dG9uX18xYW9ZdlwifTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTU5OTEzMjg0MzE4XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9tb3JlLXByb2R1Y3RzLmNvbXBvbmVudHMubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IFJlbGF0ZWRQb3N0Q2FyZCB9IGZyb20gXCIuLi9jb3JlL3JlbGF0ZWQtcG9zdC1jYXJkXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGFwcC9tb2R1bGVzL2NvcmUvYnV0dG9uXCI7XG5pbXBvcnQgQXJyb3dSaWdodCBmcm9tIFwiQGFzc2V0cy9pY29ucy9hcnJvdy1yaWdodC5zdmdcIjtcbmltcG9ydCB7IE1vcmVQcm9kdWN0cyB9IGZyb20gXCJAYXBwL2FwaVwiO1xuZXhwb3J0IGludGVyZmFjZSBJTW9yZVByb2R1Y3RzQ29tcG9uZW50UHJvcHMge1xuICBtb3JlUHJvZHVjdHNNb2R1bGU6IE1vcmVQcm9kdWN0cztcbn1cblxuY29uc3QgTW9yZVByb2R1Y3RzQ29tcG9uZW50ID0gKHByb3BzOiBJTW9yZVByb2R1Y3RzQ29tcG9uZW50UHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e1widWstY29udGFpbmVyXCJ9PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJtb3JlLXByb2R1Y3RzXCJdfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJtb3JlLXByb2R1Y3RzX19oZWFkZXJcIl19PlxuICAgICAgICA8aDI+e3Byb3BzLm1vcmVQcm9kdWN0c01vZHVsZS50aXRsZX08L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wibW9yZS1wcm9kdWN0c19faGVhZGVyLWJ1dHRvblwiXX0+XG4gICAgICAgICAgPEJ1dHRvbiB0aXRsZT17cHJvcHMubW9yZVByb2R1Y3RzTW9kdWxlLmJ1dHRvblRleHR9IHZhcmlhbnQ9XCJwcmltYXJ5XCIgaWNvbj17QXJyb3dSaWdodH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJtb3JlLXByb2R1Y3RzX19ib3R0b21cIl19PlxuICAgICAgICB7cHJvcHMubW9yZVByb2R1Y3RzTW9kdWxlLnJlbGF0ZWRQcm9kdWN0cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIm1vcmUtcHJvZHVjdHNfX3NsaWRlXCJdfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxSZWxhdGVkUG9zdENhcmQgbGluaz17aXRlbS5VUkx9IHRpdGxlPXtpdGVtLnRpdGxlfSBpbWFnZT17aXRlbS5waWN0dXJlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlc1tcIm1vcmUtcHJvZHVjdHNfX2JvdHRvbS1idXR0b25cIl19YH0+XG4gICAgICAgIDxCdXR0b24gdGl0bGU9e3Byb3BzLm1vcmVQcm9kdWN0c01vZHVsZS5idXR0b25UZXh0fSB2YXJpYW50PVwicHJpbWFyeVwiIGljb249e0Fycm93UmlnaHR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgeyBNb3JlUHJvZHVjdHNDb21wb25lbnQgfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJuYXYtYmFyXCI6XCJuYXYtYmFyLWNvbXBvbmVudF9uYXYtYmFyX18yc2p3TFwiLFwibmF2QmFyXCI6XCJuYXYtYmFyLWNvbXBvbmVudF9uYXYtYmFyX18yc2p3TFwiLFwiaWNvblwiOlwibmF2LWJhci1jb21wb25lbnRfaWNvbl9fTWc3VEVcIixcInJlc3BvbnNpdmVcIjpcIm5hdi1iYXItY29tcG9uZW50X3Jlc3BvbnNpdmVfXzJRc0ZUXCIsXCJuYXYtYmFyX190b3BcIjpcIm5hdi1iYXItY29tcG9uZW50X25hdi1iYXJfX3RvcF9fMjRXLVNcIixcIm5hdkJhclRvcFwiOlwibmF2LWJhci1jb21wb25lbnRfbmF2LWJhcl9fdG9wX18yNFctU1wiLFwibmF2LWJhcl9fdG9wLW1lbnVcIjpcIm5hdi1iYXItY29tcG9uZW50X25hdi1iYXJfX3RvcC1tZW51X19KQXpiV1wiLFwibmF2QmFyVG9wTWVudVwiOlwibmF2LWJhci1jb21wb25lbnRfbmF2LWJhcl9fdG9wLW1lbnVfX0pBemJXXCIsXCJyZXNwb25zaXZlLW9yZGVyXCI6XCJuYXYtYmFyLWNvbXBvbmVudF9yZXNwb25zaXZlLW9yZGVyX194OHdTMlwiLFwicmVzcG9uc2l2ZU9yZGVyXCI6XCJuYXYtYmFyLWNvbXBvbmVudF9yZXNwb25zaXZlLW9yZGVyX194OHdTMlwiLFwibmF2LWJhcl9fYm90dG9tXCI6XCJuYXYtYmFyLWNvbXBvbmVudF9uYXYtYmFyX19ib3R0b21fXzN5QmNhXCIsXCJuYXZCYXJCb3R0b21cIjpcIm5hdi1iYXItY29tcG9uZW50X25hdi1iYXJfX2JvdHRvbV9fM3lCY2FcIixcIm5hdi1iYXJfX2JvdHRvbV9fc2VhcmNoXCI6XCJuYXYtYmFyLWNvbXBvbmVudF9uYXYtYmFyX19ib3R0b21fX3NlYXJjaF9fMnZ4RTJcIixcIm5hdkJhckJvdHRvbVNlYXJjaFwiOlwibmF2LWJhci1jb21wb25lbnRfbmF2LWJhcl9fYm90dG9tX19zZWFyY2hfXzJ2eEUyXCIsXCJuYXYtYmFyX19ib3R0b20tbG9nb1wiOlwibmF2LWJhci1jb21wb25lbnRfbmF2LWJhcl9fYm90dG9tLWxvZ29fX0xwUGp5XCIsXCJuYXZCYXJCb3R0b21Mb2dvXCI6XCJuYXYtYmFyLWNvbXBvbmVudF9uYXYtYmFyX19ib3R0b20tbG9nb19fTHBQanlcIixcIm5hdi1iYXJfX2JvdHRvbS1sb2dvX19pbWFnZVwiOlwibmF2LWJhci1jb21wb25lbnRfbmF2LWJhcl9fYm90dG9tLWxvZ29fX2ltYWdlX18zMnFrRVwiLFwibmF2QmFyQm90dG9tTG9nb0ltYWdlXCI6XCJuYXYtYmFyLWNvbXBvbmVudF9uYXYtYmFyX19ib3R0b20tbG9nb19faW1hZ2VfXzMycWtFXCIsXCJuYXYtYmFyX19ib3R0b20tbG9nb19fdGV4dFwiOlwibmF2LWJhci1jb21wb25lbnRfbmF2LWJhcl9fYm90dG9tLWxvZ29fX3RleHRfXzI1TGxYXCIsXCJuYXZCYXJCb3R0b21Mb2dvVGV4dFwiOlwibmF2LWJhci1jb21wb25lbnRfbmF2LWJhcl9fYm90dG9tLWxvZ29fX3RleHRfXzI1TGxYXCIsXCJuYXYtYmFyX19ib3R0b20tbWVudVwiOlwibmF2LWJhci1jb21wb25lbnRfbmF2LWJhcl9fYm90dG9tLW1lbnVfXzNZaFlhXCIsXCJuYXZCYXJCb3R0b21NZW51XCI6XCJuYXYtYmFyLWNvbXBvbmVudF9uYXYtYmFyX19ib3R0b20tbWVudV9fM1loWWFcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU1OTkxMzI3Njk5OFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wib3BlbmVkXCI6XCJuYXZiYXItc2VhcmNoLWNvbXBvbmVudF9vcGVuZWRfXzNYODNVXCIsXCJjbG9zZWRcIjpcIm5hdmJhci1zZWFyY2gtY29tcG9uZW50X2Nsb3NlZF9fMWJXVkRcIixcImhpZ2hsaWdodGVkXCI6XCJuYXZiYXItc2VhcmNoLWNvbXBvbmVudF9oaWdobGlnaHRlZF9fMnZwZDdcIixcIm5hdmJhci1zZWFyY2hcIjpcIm5hdmJhci1zZWFyY2gtY29tcG9uZW50X25hdmJhci1zZWFyY2hfXzNVYlNHXCIsXCJuYXZiYXJTZWFyY2hcIjpcIm5hdmJhci1zZWFyY2gtY29tcG9uZW50X25hdmJhci1zZWFyY2hfXzNVYlNHXCIsXCJuYXZiYXItc2VhcmNoX19zaGFkb3dcIjpcIm5hdmJhci1zZWFyY2gtY29tcG9uZW50X25hdmJhci1zZWFyY2hfX3NoYWRvd19fMWVFSzJcIixcIm5hdmJhclNlYXJjaFNoYWRvd1wiOlwibmF2YmFyLXNlYXJjaC1jb21wb25lbnRfbmF2YmFyLXNlYXJjaF9fc2hhZG93X18xZUVLMlwiLFwibmF2YmFyLXNlYXJjaF9fcmVzdWx0c1wiOlwibmF2YmFyLXNlYXJjaC1jb21wb25lbnRfbmF2YmFyLXNlYXJjaF9fcmVzdWx0c19fMWVlbmxcIixcIm5hdmJhclNlYXJjaFJlc3VsdHNcIjpcIm5hdmJhci1zZWFyY2gtY29tcG9uZW50X25hdmJhci1zZWFyY2hfX3Jlc3VsdHNfXzFlZW5sXCIsXCJuYXZiYXItc2VhcmNoX19yZXN1bHRzX19pdGVtXCI6XCJuYXZiYXItc2VhcmNoLWNvbXBvbmVudF9uYXZiYXItc2VhcmNoX19yZXN1bHRzX19pdGVtX18xQzNXNlwiLFwibmF2YmFyU2VhcmNoUmVzdWx0c0l0ZW1cIjpcIm5hdmJhci1zZWFyY2gtY29tcG9uZW50X25hdmJhci1zZWFyY2hfX3Jlc3VsdHNfX2l0ZW1fXzFDM1c2XCIsXCJuYXZiYXItc2VhcmNoX19yZXN1bHRzX19pdGVtX19kZXRhaWxzXCI6XCJuYXZiYXItc2VhcmNoLWNvbXBvbmVudF9uYXZiYXItc2VhcmNoX19yZXN1bHRzX19pdGVtX19kZXRhaWxzX18xQUFvUlwiLFwibmF2YmFyU2VhcmNoUmVzdWx0c0l0ZW1EZXRhaWxzXCI6XCJuYXZiYXItc2VhcmNoLWNvbXBvbmVudF9uYXZiYXItc2VhcmNoX19yZXN1bHRzX19pdGVtX19kZXRhaWxzX18xQUFvUlwiLFwibmF2YmFyLXNlYXJjaF9fYmFyXCI6XCJuYXZiYXItc2VhcmNoLWNvbXBvbmVudF9uYXZiYXItc2VhcmNoX19iYXJfX2g2QnRfXCIsXCJuYXZiYXJTZWFyY2hCYXJcIjpcIm5hdmJhci1zZWFyY2gtY29tcG9uZW50X25hdmJhci1zZWFyY2hfX2Jhcl9faDZCdF9cIixcIm5hdmJhci1zZWFyY2hfX2Jhcl9fdG9wXCI6XCJuYXZiYXItc2VhcmNoLWNvbXBvbmVudF9uYXZiYXItc2VhcmNoX19iYXJfX3RvcF9fMzdkZkVcIixcIm5hdmJhclNlYXJjaEJhclRvcFwiOlwibmF2YmFyLXNlYXJjaC1jb21wb25lbnRfbmF2YmFyLXNlYXJjaF9fYmFyX190b3BfXzM3ZGZFXCIsXCJuYXZiYXItc2VhcmNoX19iYXJfX3RvcF9faXRlbVwiOlwibmF2YmFyLXNlYXJjaC1jb21wb25lbnRfbmF2YmFyLXNlYXJjaF9fYmFyX190b3BfX2l0ZW1fX0dabXd6XCIsXCJuYXZiYXJTZWFyY2hCYXJUb3BJdGVtXCI6XCJuYXZiYXItc2VhcmNoLWNvbXBvbmVudF9uYXZiYXItc2VhcmNoX19iYXJfX3RvcF9faXRlbV9fR1ptd3pcIixcIm5hdmJhci1zZWFyY2hfX2Jhcl9fdG9wX19pdGVtX19jbG9zZVwiOlwibmF2YmFyLXNlYXJjaC1jb21wb25lbnRfbmF2YmFyLXNlYXJjaF9fYmFyX190b3BfX2l0ZW1fX2Nsb3NlX18zanJweFwiLFwibmF2YmFyU2VhcmNoQmFyVG9wSXRlbUNsb3NlXCI6XCJuYXZiYXItc2VhcmNoLWNvbXBvbmVudF9uYXZiYXItc2VhcmNoX19iYXJfX3RvcF9faXRlbV9fY2xvc2VfXzNqcnB4XCIsXCJuYXZiYXItc2VhcmNoX19iYXJfX3RvcF9faXRlbV9faW5wdXRcIjpcIm5hdmJhci1zZWFyY2gtY29tcG9uZW50X25hdmJhci1zZWFyY2hfX2Jhcl9fdG9wX19pdGVtX19pbnB1dF9fMTBSZW5cIixcIm5hdmJhclNlYXJjaEJhclRvcEl0ZW1JbnB1dFwiOlwibmF2YmFyLXNlYXJjaC1jb21wb25lbnRfbmF2YmFyLXNlYXJjaF9fYmFyX190b3BfX2l0ZW1fX2lucHV0X18xMFJlblwifTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTU5OTEzMjc4MTIwXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICIsImltcG9ydCB7IGNvbm5lY3QsIE1hcFN0YXRlVG9Qcm9wcywgTWFwRGlzcGF0Y2hUb1Byb3BzIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBJQXBwU3RhdGUsIG5ld3NBY3Rpb25zIH0gZnJvbSBcIkBhcHAvc3RvcmVzXCI7XG5pbXBvcnQgeyBDYXJkTW9kZWwgfSBmcm9tIFwiQGFwcC9hcGlcIjtcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgeyBJTmV3c092ZXJ2aWV3Q29tcG9uZW50UHJvcHMsIE5ld3NPdmVydmlld0NvbXBvbmVudCB9IGZyb20gXCIuLi9uZXdzLW92ZXJ2aWV3LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgbmV3c1RodW5rcyB9IGZyb20gXCJAYXBwL21pZGRsZXdhcmUvdGh1bmsvbmV3cy50aHVua1wiO1xuXG5pbnRlcmZhY2UgSVN0YXRlUHJvcHMge1xuICBjYXJkczogQ2FyZE1vZGVsW107XG4gIHRvdGFsUGFnZXM6IG51bWJlcjtcbiAgY3VycmVudFBhZ2VOdW1iZXI6IG51bWJlcjtcbn1cbmludGVyZmFjZSBJRGlzcGF0Y2hQcm9wcyB7XG4gIGdldENhcmRzOiAodGFrZTogbnVtYmVyLCBwYWdlOiBudW1iZXIsIGZpbHRlcj86IHN0cmluZywgY2F0ZWdvcnk/OiBzdHJpbmcpID0+IHZvaWQ7XG4gIHNldFRvdGFsUGFnZTogKHRvdGFsUGFnZXM6IG51bWJlcikgPT4gdm9pZDtcbiAgc2V0Q3VycmVudFBhZ2U6ICh0b3RhbFBhZ2VzOiBudW1iZXIpID0+IHZvaWQ7XG4gIHNldENhcmRzOiAoY2FyZHM6IENhcmRNb2RlbFtdKSA9PiB2b2lkO1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHM6IE1hcFN0YXRlVG9Qcm9wczxJU3RhdGVQcm9wcywgSU5ld3NPdmVydmlld0NvbXBvbmVudFByb3BzLCBJQXBwU3RhdGU+ID0gc3RhdGUgPT4ge1xuICBjb25zdCB7IGNhcmRzLCB0b3RhbFBhZ2VzLCBjdXJyZW50UGFnZU51bWJlciB9ID0gc3RhdGUuY2FyZDtcblxuICByZXR1cm4geyBjYXJkcywgdG90YWxQYWdlcywgY3VycmVudFBhZ2VOdW1iZXIgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wczogTWFwRGlzcGF0Y2hUb1Byb3BzPElEaXNwYXRjaFByb3BzLCBJTmV3c092ZXJ2aWV3Q29tcG9uZW50UHJvcHM+ID0gZGlzcGF0Y2ggPT4gKHtcbiAgZ2V0Q2FyZHM6ICh0YWtlOiBudW1iZXIsIHBhZ2U6IG51bWJlciwgZmlsdGVyPzogc3RyaW5nLCBjYXRlZ29yeT86IHN0cmluZykgPT5cbiAgICBkaXNwYXRjaChuZXdzVGh1bmtzLmdldENhcmRzKHRha2UsIHBhZ2UsIGZpbHRlciwgY2F0ZWdvcnkpKSxcbiAgc2V0Q2FyZHM6IChjYXJkczogQ2FyZE1vZGVsW10pID0+IHtcbiAgICBkaXNwYXRjaChcbiAgICAgIG5ld3NBY3Rpb25zLnNldENhcmRzKHtcbiAgICAgICAgY2FyZHM6IGNhcmRzXG4gICAgICB9KVxuICAgICk7XG4gIH0sXG4gIHNldEN1cnJlbnRQYWdlOiAoY3VycmVudFBhZ2VOdW1iZXI6IG51bWJlcikgPT4ge1xuICAgIGRpc3BhdGNoKFxuICAgICAgbmV3c0FjdGlvbnMuc2V0Q2FyZHMoe1xuICAgICAgICBjdXJyZW50UGFnZU51bWJlclxuICAgICAgfSlcbiAgICApO1xuICB9LFxuICBzZXRUb3RhbFBhZ2U6ICh0b3RhbFBhZ2VzOiBudW1iZXIpID0+IHtcbiAgICBkaXNwYXRjaChcbiAgICAgIG5ld3NBY3Rpb25zLnNldENhcmRzKHtcbiAgICAgICAgdG90YWxQYWdlc1xuICAgICAgfSlcbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0IHR5cGUgTmV3c092ZXJ2aWV3Q29udGFpbmVyUHJvcHMgPSBJU3RhdGVQcm9wcyAmIElEaXNwYXRjaFByb3BzO1xuZXhwb3J0IGNvbnN0IE5ld3NPdmVydmlld0NvbnRhaW5lciA9IHdpdGhSb3V0ZXIoXG4gIGNvbm5lY3QoXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xuICApKE5ld3NPdmVydmlld0NvbXBvbmVudClcbik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiaXRlbS1vdmVydmlld1wiOlwibmV3cy1vdmVydmlldy1jb21wb25lbnRfaXRlbS1vdmVydmlld19fMmtYT2FcIixcIml0ZW1PdmVydmlld1wiOlwibmV3cy1vdmVydmlldy1jb21wb25lbnRfaXRlbS1vdmVydmlld19fMmtYT2FcIixcIml0ZW0tb3ZlcnZpZXdfX3Bvc3RzXCI6XCJuZXdzLW92ZXJ2aWV3LWNvbXBvbmVudF9pdGVtLW92ZXJ2aWV3X19wb3N0c19fM0xVaDBcIixcIml0ZW1PdmVydmlld1Bvc3RzXCI6XCJuZXdzLW92ZXJ2aWV3LWNvbXBvbmVudF9pdGVtLW92ZXJ2aWV3X19wb3N0c19fM0xVaDBcIixcIml0ZW0tb3ZlcnZpZXdfX2ZpbHRlcnNcIjpcIm5ld3Mtb3ZlcnZpZXctY29tcG9uZW50X2l0ZW0tb3ZlcnZpZXdfX2ZpbHRlcnNfXzNyUTMtXCIsXCJpdGVtT3ZlcnZpZXdGaWx0ZXJzXCI6XCJuZXdzLW92ZXJ2aWV3LWNvbXBvbmVudF9pdGVtLW92ZXJ2aWV3X19maWx0ZXJzX18zclEzLVwiLFwiZW1wdHktc3RhdGVcIjpcIm5ld3Mtb3ZlcnZpZXctY29tcG9uZW50X2VtcHR5LXN0YXRlX19wcFltVVwiLFwiZW1wdHlTdGF0ZVwiOlwibmV3cy1vdmVydmlldy1jb21wb25lbnRfZW1wdHktc3RhdGVfX3BwWW1VXCJ9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1NTk5MTMyODMxOTlcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBBcnJvd1JpZ2h0IGZyb20gXCJAYXNzZXRzL2ljb25zL2Fycm93LXJpZ2h0LnN2Z1wiO1xuaW1wb3J0IHsgU2VhcmNoRm9ybSwgUmVzb3VyY2VUZXh0Q29tcG9uZW50IH0gZnJvbSBcIkBhcHAvbW9kdWxlcy9jb3JlXCI7XG5pbXBvcnQgeyBJdGVtQ2FyZCB9IGZyb20gXCJAYXBwL21vZHVsZXMvY29yZS9pdGVtLWNhcmRcIjtcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tIFwiQGFwcC91dGlsL3BhZ2luYXRpb25cIjtcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9uZXdzLW92ZXJ2aWV3LWNvbXBvbmVudC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgTmV3c092ZXJ2aWV3TW9kdWxlIH0gZnJvbSBcIkBhcHAvYXBpXCI7XG5pbXBvcnQgeyBOZXdzT3ZlcnZpZXdDb250YWluZXJQcm9wcyB9IGZyb20gXCIuL2NvbnRhaW5lcnMvbmV3cy1vdmVydmlldy5jb250YWluZXJcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi9jb3JlL2J1dHRvblwiO1xuaW1wb3J0IHsgaW5qZWN0SW50bCwgSW5qZWN0ZWRJbnRsUHJvcHMgfSBmcm9tIFwicmVhY3QtaW50bFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElOZXdzT3ZlcnZpZXdDb21wb25lbnRQcm9wcyB7XG4gIG5ld3NPdmVydmlld01vZHVsZTogTmV3c092ZXJ2aWV3TW9kdWxlO1xufVxuXG5jb25zdCBjb21wb25lbnQgPSAoXG4gIHByb3BzOiBJTmV3c092ZXJ2aWV3Q29tcG9uZW50UHJvcHMgJiBOZXdzT3ZlcnZpZXdDb250YWluZXJQcm9wcyAmIFJvdXRlQ29tcG9uZW50UHJvcHMgJiBJbmplY3RlZEludGxQcm9wc1xuKSA9PiB7XG4gIGNvbnN0IFRBS0UgPSA5O1xuICBjb25zdCBbY3VycmVudEZpbHRlciwgc2V0Q3VycmVudEZpbHRlcl0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2N1cnJlbnRDYXRlZ29yeUZpbHRlciwgc2V0Q3VycmVudENhdGVnb3J5RmlsdGVyXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuXG4gIGZ1bmN0aW9uIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCB0b3RhbFBhZ2VzID0gcHJvcHMubmV3c092ZXJ2aWV3TW9kdWxlLnN0YXRlLnRvdGFsSXRlbXMgLyBUQUtFO1xuICAgIHNldEN1cnJlbnRDYXRlZ29yeUZpbHRlcigwKTtcbiAgICBzZXRDdXJyZW50RmlsdGVyKFwiXCIpO1xuICAgIHByb3BzLnNldENhcmRzKHByb3BzLm5ld3NPdmVydmlld01vZHVsZS5zdGF0ZS5jYXJkcyk7XG4gICAgcHJvcHMuc2V0Q3VycmVudFBhZ2UoMSk7XG4gICAgcHJvcHMuc2V0VG90YWxQYWdlKHRvdGFsUGFnZXMpO1xuICB9XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJbml0aWFsU3RhdGUoKTtcbiAgfSwgW10pO1xuXG4gIGZ1bmN0aW9uIGNoYW5nZVBhZ2UocGFnZU51bWJlcjogbnVtYmVyKSB7XG4gICAgcHJvcHMuZ2V0Q2FyZHMoVEFLRSwgcGFnZU51bWJlciwgY3VycmVudEZpbHRlciwgcHJvcHMubmV3c092ZXJ2aWV3TW9kdWxlLmNhdGVnb3JpZXNbY3VycmVudENhdGVnb3J5RmlsdGVyIC0gMV0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwbHlGaWx0ZXIoa2V5d29yZDogc3RyaW5nKSB7XG4gICAgc2V0Q3VycmVudEZpbHRlcihrZXl3b3JkKTtcbiAgICBwcm9wcy5nZXRDYXJkcyhUQUtFLCAxLCBrZXl3b3JkLCBwcm9wcy5uZXdzT3ZlcnZpZXdNb2R1bGUuY2F0ZWdvcmllc1tjdXJyZW50Q2F0ZWdvcnlGaWx0ZXIgLSAxXSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNhdGVnb3J5Q2hhbmdlZChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSB7XG4gICAgY29uc3QgaW5kZXggPSBldmVudC50YXJnZXQuc2VsZWN0ZWRJbmRleDtcbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgIHNldEluaXRpYWxTdGF0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRDdXJyZW50Q2F0ZWdvcnlGaWx0ZXIoaW5kZXgpO1xuICAgICAgc2V0Q3VycmVudEZpbHRlcihcIlwiKTtcbiAgICAgIHByb3BzLmdldENhcmRzKFRBS0UsIDEsIFwiXCIsIHByb3BzLm5ld3NPdmVydmlld01vZHVsZS5jYXRlZ29yaWVzW2luZGV4IC0gMV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlW1wiaXRlbS1vdmVydmlld1wiXX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVbXCJpdGVtLW92ZXJ2aWV3X19maWx0ZXJzXCJdfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtvbkNhdGVnb3J5Q2hhbmdlZH0gY2xhc3NOYW1lPVwiZm9ybV9fc2VsZWN0XCI+XG4gICAgICAgICAgICA8b3B0aW9uIGFyaWEtc2VsZWN0ZWQ+e3Byb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiBcIm5ld3Nfb3ZlcnZpZXdfc29ydEJ5UHJvZHVjdExpbmVcIiB9KX08L29wdGlvbj5cbiAgICAgICAgICAgIHtwcm9wcy5uZXdzT3ZlcnZpZXdNb2R1bGUuY2F0ZWdvcmllcy5tYXAoKGl0ZW0sIGtleSkgPT4gKFxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT17a2V5fSBhcmlhLXNlbGVjdGVkPlxuICAgICAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8U2VhcmNoRm9ybVxuICAgICAgICAgICAgb25DaGFuZ2U9e2FwcGx5RmlsdGVyfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiBcIm5ld3Nfb3ZlcnZpZXdfc29ydEJ5VGV4dFwiIH0pfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVbXCJpdGVtLW92ZXJ2aWV3X19wb3N0c1wiXX0+XG4gICAgICAgIHtwcm9wcy5jYXJkcy5tYXAoY2FyZCA9PiAoXG4gICAgICAgICAgPEl0ZW1DYXJkXG4gICAgICAgICAgICBrZXk9e2NhcmQuaWR9XG4gICAgICAgICAgICBsYWJlbHM9e2NhcmQuY2FyZExhYmVscy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgIDxkaXY+e2l0ZW0udGl0bGV9PC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIGxpbms9e2NhcmQuVVJMfVxuICAgICAgICAgICAgdGl0bGU9e2NhcmQudGl0bGV9XG4gICAgICAgICAgICBpbWFnZT17Y2FyZC5waWN0dXJlfVxuICAgICAgICAgICAgY2F0ZWdvcnk9e2NhcmQuY2F0ZWdvcnl9XG4gICAgICAgICAgICBidXR0b249ezxCdXR0b24gaWNvbj17QXJyb3dSaWdodH0gaHJlZj17Y2FyZC5VUkx9IHZhcmlhbnQ9XCJkZWZhdWx0XCIgdGl0bGU9e2NhcmQuYnV0dG9uVGV4dH0gLz59XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtwcm9wcy5jYXJkcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVtcImVtcHR5LXN0YXRlXCJdfT5cbiAgICAgICAgICA8aDM+XG4gICAgICAgICAgICA8UmVzb3VyY2VUZXh0Q29tcG9uZW50IHJlc291cmNlS2V5PVwic2VhcmNoLWVtcHR5LXN0YXRlXCIgLz5cbiAgICAgICAgICA8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVtcIml0ZW0tb3ZlcnZpZXdfX3BhZ2luYXRpb25cIl19PlxuICAgICAgICAgIDxQYWdpbmF0aW9uIGN1cnJlbnRQYWdlPXtwcm9wcy5jdXJyZW50UGFnZU51bWJlcn0gY2hhbmdlUGFnZT17Y2hhbmdlUGFnZX0gdG90YWxJdGVtcz17cHJvcHMudG90YWxQYWdlc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgTmV3c092ZXJ2aWV3Q29tcG9uZW50ID0gaW5qZWN0SW50bChjb21wb25lbnQpO1xuXG5leHBvcnQgeyBOZXdzT3ZlcnZpZXdDb21wb25lbnQgfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJuZXdzbGV0dGVyXCI6XCJuZXdzbGV0dGVyLWNvbXBvbmVudF9uZXdzbGV0dGVyX18xdkxDSFwiLFwibmV3c2xldHRlcl9fY29udGFpbmVyXCI6XCJuZXdzbGV0dGVyLWNvbXBvbmVudF9uZXdzbGV0dGVyX19jb250YWluZXJfXzJmeElVXCIsXCJuZXdzbGV0dGVyQ29udGFpbmVyXCI6XCJuZXdzbGV0dGVyLWNvbXBvbmVudF9uZXdzbGV0dGVyX19jb250YWluZXJfXzJmeElVXCIsXCJuZXdzbGV0dGVyX19mb3JlZ3JvdW5kXCI6XCJuZXdzbGV0dGVyLWNvbXBvbmVudF9uZXdzbGV0dGVyX19mb3JlZ3JvdW5kX19PUDNqUVwiLFwibmV3c2xldHRlckZvcmVncm91bmRcIjpcIm5ld3NsZXR0ZXItY29tcG9uZW50X25ld3NsZXR0ZXJfX2ZvcmVncm91bmRfX09QM2pRXCIsXCJuZXdzbGV0dGVyX19ib2R5XCI6XCJuZXdzbGV0dGVyLWNvbXBvbmVudF9uZXdzbGV0dGVyX19ib2R5X18xTkxmbVwiLFwibmV3c2xldHRlckJvZHlcIjpcIm5ld3NsZXR0ZXItY29tcG9uZW50X25ld3NsZXR0ZXJfX2JvZHlfXzFOTGZtXCIsXCJuZXdzbGV0dGVyX19kZXNjcmlwdGlvblwiOlwibmV3c2xldHRlci1jb21wb25lbnRfbmV3c2xldHRlcl9fZGVzY3JpcHRpb25fX0pITkZUXCIsXCJuZXdzbGV0dGVyRGVzY3JpcHRpb25cIjpcIm5ld3NsZXR0ZXItY29tcG9uZW50X25ld3NsZXR0ZXJfX2Rlc2NyaXB0aW9uX19KSE5GVFwiLFwibmV3c2xldHRlcl9faW1hZ2VcIjpcIm5ld3NsZXR0ZXItY29tcG9uZW50X25ld3NsZXR0ZXJfX2ltYWdlX18xbEFrWVwiLFwibmV3c2xldHRlckltYWdlXCI6XCJuZXdzbGV0dGVyLWNvbXBvbmVudF9uZXdzbGV0dGVyX19pbWFnZV9fMWxBa1lcIixcIm5ld3NsZXR0ZXJfX2lubmVyXCI6XCJuZXdzbGV0dGVyLWNvbXBvbmVudF9uZXdzbGV0dGVyX19pbm5lcl9fN2FsZFVcIixcIm5ld3NsZXR0ZXJJbm5lclwiOlwibmV3c2xldHRlci1jb21wb25lbnRfbmV3c2xldHRlcl9faW5uZXJfXzdhbGRVXCIsXCJuZXdzbGV0dGVyX190aXRsZVwiOlwibmV3c2xldHRlci1jb21wb25lbnRfbmV3c2xldHRlcl9fdGl0bGVfX2ZWd2g1XCIsXCJuZXdzbGV0dGVyVGl0bGVcIjpcIm5ld3NsZXR0ZXItY29tcG9uZW50X25ld3NsZXR0ZXJfX3RpdGxlX19mVndoNVwiLFwibmV3c2xldHRlcl9fd3JhcFwiOlwibmV3c2xldHRlci1jb21wb25lbnRfbmV3c2xldHRlcl9fd3JhcF9fMnNJblRcIixcIm5ld3NsZXR0ZXJXcmFwXCI6XCJuZXdzbGV0dGVyLWNvbXBvbmVudF9uZXdzbGV0dGVyX193cmFwX18yc0luVFwifTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTU5OTEzMjc2NzMzXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICIsImV4cG9ydCAqIGZyb20gXCIuL25vdC1mb3VuZC5jb21wb25lbnRcIjtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJub3QtZm91bmRfX2NvbnRhaW5lclwiOlwibm90LWZvdW5kLWNvbXBvbmVudF9ub3QtZm91bmRfX2NvbnRhaW5lcl9fMjVQakJcIixcIm5vdEZvdW5kQ29udGFpbmVyXCI6XCJub3QtZm91bmQtY29tcG9uZW50X25vdC1mb3VuZF9fY29udGFpbmVyX18yNVBqQlwiLFwibm90LWZvdW5kX190ZXh0XCI6XCJub3QtZm91bmQtY29tcG9uZW50X25vdC1mb3VuZF9fdGV4dF9fWThmS3FcIixcIm5vdEZvdW5kVGV4dFwiOlwibm90LWZvdW5kLWNvbXBvbmVudF9ub3QtZm91bmRfX3RleHRfX1k4ZktxXCIsXCJub3QtZm91bmRcIjpcIm5vdC1mb3VuZC1jb21wb25lbnRfbm90LWZvdW5kX19KbENrZFwiLFwibm90Rm91bmRcIjpcIm5vdC1mb3VuZC1jb21wb25lbnRfbm90LWZvdW5kX19KbENrZFwifTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTU5OTEzMjgzNzM4XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9ub3QtZm91bmQtY29tcG9uZW50Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgQXJyb3dSaWdodCBmcm9tIFwiQGFzc2V0cy9pY29ucy9hcnJvdy1yaWdodC5zdmdcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi9jb3JlL2J1dHRvblwiO1xuaW1wb3J0IHsgTm90Rm91bmRNb2R1bGUgfSBmcm9tIFwiQGFwcC9hcGlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJTm90Rm91bmRDb21wb25lbnRQcm9wcyB7XG4gIG5vdEZvdW5kTW9kdWxlOiBOb3RGb3VuZE1vZHVsZTtcbn1cblxuY29uc3QgTm90Rm91bmRDb21wb25lbnQgPSAocHJvcHM6IElOb3RGb3VuZENvbXBvbmVudFByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJub3QtZm91bmRcIl19PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJub3QtZm91bmRfX2NvbnRhaW5lclwiXX0+XG4gICAgICA8aDM+e3Byb3BzLm5vdEZvdW5kTW9kdWxlLnRpdGxlfTwvaDM+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlc1tcIm5vdC1mb3VuZF9fdGV4dFwiXX0+e3Byb3BzLm5vdEZvdW5kTW9kdWxlLnRleHR9PC9zcGFuPlxuICAgICAgPEJ1dHRvbiBmdWxsV2lkdGggaWNvbj17QXJyb3dSaWdodH0gdGl0bGU9e3Byb3BzLm5vdEZvdW5kTW9kdWxlLmJhY2tCdXR0b25UZXh0fSB2YXJpYW50PVwicHJpbWFyeVwiIC8+XG4gICAgICA8QnV0dG9uIGhyZWY9XCIjXCIgZnVsbFdpZHRoIHRpdGxlPXtwcm9wcy5ub3RGb3VuZE1vZHVsZS5ob21lQnV0dG9uVGV4dH0gdmFyaWFudD1cInRyYW5zcGFyZW50XCIgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgeyBOb3RGb3VuZENvbXBvbmVudCB9O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImNvbnRhaW5lclwiOlwiY2FyZC1jb21wb25lbnRfY29udGFpbmVyX19lUkNaaVwiLFwiY2FyZFwiOlwiY2FyZC1jb21wb25lbnRfY2FyZF9fMUtBR3pcIixcImNhcmRfX3VzZXJcIjpcImNhcmQtY29tcG9uZW50X2NhcmRfX3VzZXJfX3hoSHp3XCIsXCJjYXJkVXNlclwiOlwiY2FyZC1jb21wb25lbnRfY2FyZF9fdXNlcl9feGhIendcIixcImNhcmRfX2JvZHlcIjpcImNhcmQtY29tcG9uZW50X2NhcmRfX2JvZHlfXzNvMWM3XCIsXCJjYXJkQm9keVwiOlwiY2FyZC1jb21wb25lbnRfY2FyZF9fYm9keV9fM28xYzdcIixcImNhcmRfX3RpdGxlXCI6XCJjYXJkLWNvbXBvbmVudF9jYXJkX190aXRsZV9fM2VqLUNcIixcImNhcmRUaXRsZVwiOlwiY2FyZC1jb21wb25lbnRfY2FyZF9fdGl0bGVfXzNlai1DXCIsXCJjYXJkX19wb3NpdGlvblwiOlwiY2FyZC1jb21wb25lbnRfY2FyZF9fcG9zaXRpb25fXzJ2ZjJIXCIsXCJjYXJkUG9zaXRpb25cIjpcImNhcmQtY29tcG9uZW50X2NhcmRfX3Bvc2l0aW9uX18ydmYySFwiLFwiY2FyZF9fbWVkaWFcIjpcImNhcmQtY29tcG9uZW50X2NhcmRfX21lZGlhX19Jc2V6UVwiLFwiY2FyZE1lZGlhXCI6XCJjYXJkLWNvbXBvbmVudF9jYXJkX19tZWRpYV9fSXNlelFcIixcImNhcmRfX2ltYWdlXCI6XCJjYXJkLWNvbXBvbmVudF9jYXJkX19pbWFnZV9fMlFWMHFcIixcImNhcmRJbWFnZVwiOlwiY2FyZC1jb21wb25lbnRfY2FyZF9faW1hZ2VfXzJRVjBxXCIsXCJjYXJkX19zb2NpYWxcIjpcImNhcmQtY29tcG9uZW50X2NhcmRfX3NvY2lhbF9fMXZzVmpcIixcImNhcmRTb2NpYWxcIjpcImNhcmQtY29tcG9uZW50X2NhcmRfX3NvY2lhbF9fMXZzVmpcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU1OTkxMzI3NzYzOVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wib256ZS1tZW5zZW5cIjpcIm91ci10ZWFtLWNvbXBvbmVudF9vbnplLW1lbnNlbl9fM3NidTdcIixcIm9uemVNZW5zZW5cIjpcIm91ci10ZWFtLWNvbXBvbmVudF9vbnplLW1lbnNlbl9fM3NidTdcIixcIm9uemUtbWVuc2VuX19oZWFkZXJcIjpcIm91ci10ZWFtLWNvbXBvbmVudF9vbnplLW1lbnNlbl9faGVhZGVyX19EQjFmTlwiLFwib256ZU1lbnNlbkhlYWRlclwiOlwib3VyLXRlYW0tY29tcG9uZW50X29uemUtbWVuc2VuX19oZWFkZXJfX0RCMWZOXCIsXCJvbnplLW1lbnNlbl9fcG9zdHNcIjpcIm91ci10ZWFtLWNvbXBvbmVudF9vbnplLW1lbnNlbl9fcG9zdHNfXzFEWFZwXCIsXCJvbnplTWVuc2VuUG9zdHNcIjpcIm91ci10ZWFtLWNvbXBvbmVudF9vbnplLW1lbnNlbl9fcG9zdHNfXzFEWFZwXCJ9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1NTk5MTMyNzY2MDVcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwiZXhwb3J0IGNvbnN0IGdlbmVyYXRlRmlsbGVkU29jaWFsTWVkaWFCdXR0b25zUHJvZHVjdERldGFpbEhlYWRlck1vZHVsZSA9ICgpID0+ICh7XG4gIGZvb3RlckJ1dHRvbnM6IFtcbiAgICB7XG4gICAgICBocmVmOiBcImZiXCIsXG4gICAgICBpY29uOiBcImh0dHBzOi8vczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vdmlwZXItZGV2ZWxvcG1lbnQtaW1hZ2VzL1RlcnJhc2FuYS9mYWNlYm9vay5zdmdcIlxuICAgIH0sXG4gICAge1xuICAgICAgaHJlZjogXCJsaW5rZWRcIixcbiAgICAgIGljb246IFwiaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS92aXBlci1kZXZlbG9wbWVudC1pbWFnZXMvVGVycmFzYW5hL2xpbmtlZGluLnN2Z1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBocmVmOiBcInR3aXR0ZXJcIixcbiAgICAgIGljb246IFwiaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS92aXBlci1kZXZlbG9wbWVudC1pbWFnZXMvVGVycmFzYW5hL3R3aXR0ZXIuc3ZnXCJcbiAgICB9XG4gIF0sXG5cbiAgaWQ6IFwiNDJcIixcbiAgdG9wTWFyZ2luOiBcIjFcIixcbiAgYm90dG9tTWFyZ2luOiBcIjVcIixcbiAgbmFtZTogXCJwcm9kdWN0RGV0YWlsSGVhZGVyXCJcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVFbXB0eVNvY2lhbE1lZGlhQnV0dG9uc1Byb2R1Y3REZXRhaWxIZWFkZXJNb2R1bGUgPSAoKSA9PiAoe1xuICBmb290ZXJCdXR0b25zOiBbXG4gICAge1xuICAgICAgaHJlZjogXCJcIixcbiAgICAgIGljb246IFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGhyZWY6IFwiXCIsXG4gICAgICBpY29uOiBcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBocmVmOiBcIlwiLFxuICAgICAgaWNvbjogXCJcIlxuICAgIH1cbiAgXSxcblxuICBpZDogXCJcIixcbiAgdG9wTWFyZ2luOiBcIlwiLFxuICBib3R0b21NYXJnaW46IFwiXCIsXG4gIG5hbWU6IFwiXCJcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVFbXB0eVByb2R1Y3REZXRhaWxIZWFkZXIgPSAoKSA9PiAoe1xuICBpZDogXCJcIixcbiAgbmFtZTogXCJcIixcbiAgdG9wTWFyZ2luOiBcIlwiLFxuICBib3R0b21NYXJnaW46IFwiXCIsXG4gIGhlYWRlcjogXCJcIixcbiAgc3ViSGVhZGVyOiBcIlwiLFxuICBiYWNrQnV0dG9uVGV4dDogXCJcIixcbiAgbGlzdFBpY3R1cmVzOiBbXCJcIiwgXCJcIiwgXCJcIl0sXG4gIGJvZHk6IFwiXCIsXG4gIGxpbmtzOiBbXG4gICAge1xuICAgICAgY29udGVudDogXCJcIixcbiAgICAgIHJvdXRlOiBcIi9cIixcbiAgICAgIGljb246IFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCIsXG4gICAgICByb3V0ZTogXCIvXCIsXG4gICAgICBpY29uOiBcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBjb250ZW50OiBcIlwiLFxuICAgICAgcm91dGU6IFwiL1wiLFxuICAgICAgaWNvbjogXCJcIlxuICAgIH1cbiAgXVxufSk7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUZpbGxlZFByb2R1Y3REZXRhaWxIZWFkZXIgPSAoKSA9PiAoe1xuICBpZDogXCI5XCIsXG4gIG5hbWU6IFwiUHJvZHVjdERldGFpbEhlYWRlclwiLFxuICB0b3BNYXJnaW46IFwiMHB4XCIsXG4gIGJvdHRvbU1hcmdpbjogXCIwcHhcIixcbiAgaGVhZGVyOiBcIjEwMCUgYnJ1bmluZSByaWpzdG5vZWRlbHNcIixcbiAgc3ViSGVhZGVyOiBcIkdsdXRlbnZyaWogLSAyNTBnIFwiLFxuICBiYWNrQnV0dG9uVGV4dDogXCJUZXJ1ZyBuYWFyIGFsbGUgbm9lZGVsc1wiLFxuICBsaXN0UGljdHVyZXM6IFtcbiAgICBcImh0dHBzOi8vczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vdmlwZXItZGV2ZWxvcG1lbnQtaW1hZ2VzL1RlcnJhc2FuYS9wcm9kdWN0cy9Ob2VkZWxzLzQuanBnXCIsXG4gICAgXCJodHRwczovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL3ZpcGVyLWRldmVsb3BtZW50LWltYWdlcy9UZXJyYXNhbmEvcHJvZHVjdHMvTm9lZGVscy8yLnBuZ1wiLFxuICAgIFwiaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS92aXBlci1kZXZlbG9wbWVudC1pbWFnZXMvVGVycmFzYW5hL3Byb2R1Y3RzL05vZWRlbHMvMy5qcGdcIlxuICBdLFxuICBib2R5OlxuICAgIFwiRGV6ZSBoZWVybGlqa2UsIGdsdXRlbnZyaWplIG5vZWRlbHMgemlqbiBnZW1hYWt0IHZhbiBiaW9sb2dpc2NoZSBicnVpbmUgcmlqc3QgZW4gd2F0ZXIuIFZlcmRlciBuaWV0cy4gWmUgc21ha2VuIGhlZXJsaWprLCB6aWpuIGJpbm5lbiA1IG1pbnV0ZW4gZ2FhciBlbiBwYXNzZW4gcGVyZmVjdCBiaWogZ3JvZW50ZWdlcmVjaHRlbiwgemVld2llciwgdmxlZXMsIHZpcyBlbiBKYXBhbnNlIHNtYWFrbWFrZXJzIGFscyBtaXNvLCB0YW1hcmkgZW4gc2VzYW1vbGllLlwiLFxuICBsaW5rczogW1xuICAgIHtcbiAgICAgIGNvbnRlbnQ6IFwiV2FhciBrYW4gaWsgZGl0IGtvcGVuP1wiLFxuICAgICAgcm91dGU6IFwiL1wiLFxuICAgICAgaWNvbjpcbiAgICAgICAgXCJodHRwczovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL3ZpcGVyLWRldmVsb3BtZW50LWltYWdlcy9UZXJyYXNhbmEvcHJvZHVjdC1kZXRhaWwtaGVhZGVyL2xvY2F0aW9uLWxpbmUuc3ZnXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbnRlbnQ6IFwiSWsgaGViIGVlbiB2cmFhZ1wiLFxuICAgICAgcm91dGU6IFwiL1wiLFxuICAgICAgaWNvbjogXCJodHRwczovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL3ZpcGVyLWRldmVsb3BtZW50LWltYWdlcy9UZXJyYXNhbmEvcHJvZHVjdC1kZXRhaWwtaGVhZGVyL2NoYXQuc3ZnXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbnRlbnQ6IFwiTWFpbCBQREZcIixcbiAgICAgIHJvdXRlOiBcIi9cIixcbiAgICAgIGljb246IFwiaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS92aXBlci1kZXZlbG9wbWVudC1pbWFnZXMvVGVycmFzYW5hL3Byb2R1Y3QtZGV0YWlsLWhlYWRlci9QREYuc3ZnXCJcbiAgICB9XG4gIF1cbn0pO1xuIiwiZXhwb3J0ICogZnJvbSBcIi4vcHJvZHVjdC1kZXRhaWwtaGVhZGVyLmNvbXBvbmVudFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vZHVtbXktZGF0YS1nZW5lcmF0b3JzXCI7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wicHJvZHVjdC1kZXRhaWwtaGVhZGVyXCI6XCJwcm9kdWN0LWRldGFpbC1oZWFkZXItY29tcG9uZW50X3Byb2R1Y3QtZGV0YWlsLWhlYWRlcl9fMld3X3hcIixcInByb2R1Y3REZXRhaWxIZWFkZXJcIjpcInByb2R1Y3QtZGV0YWlsLWhlYWRlci1jb21wb25lbnRfcHJvZHVjdC1kZXRhaWwtaGVhZGVyX18yV3dfeFwiLFwicHJvZHVjdC1kZXRhaWwtaGVhZGVyX19zbGlkZXJfX2ltYWdlLWNvbnRhaW5lclwiOlwicHJvZHVjdC1kZXRhaWwtaGVhZGVyLWNvbXBvbmVudF9wcm9kdWN0LWRldGFpbC1oZWFkZXJfX3NsaWRlcl9faW1hZ2UtY29udGFpbmVyX18yZjBxWlwiLFwicHJvZHVjdERldGFpbEhlYWRlclNsaWRlckltYWdlQ29udGFpbmVyXCI6XCJwcm9kdWN0LWRldGFpbC1oZWFkZXItY29tcG9uZW50X3Byb2R1Y3QtZGV0YWlsLWhlYWRlcl9fc2xpZGVyX19pbWFnZS1jb250YWluZXJfXzJmMHFaXCIsXCJwcm9kdWN0LWRldGFpbC1oZWFkZXJfX2JvZHktdGV4dFwiOlwicHJvZHVjdC1kZXRhaWwtaGVhZGVyLWNvbXBvbmVudF9wcm9kdWN0LWRldGFpbC1oZWFkZXJfX2JvZHktdGV4dF9fMm4yLWdcIixcInByb2R1Y3REZXRhaWxIZWFkZXJCb2R5VGV4dFwiOlwicHJvZHVjdC1kZXRhaWwtaGVhZGVyLWNvbXBvbmVudF9wcm9kdWN0LWRldGFpbC1oZWFkZXJfX2JvZHktdGV4dF9fMm4yLWdcIixcInByb2R1Y3QtZGV0YWlsLWhlYWRlcl9fcGljdHVyZS1zbGlkZXJcIjpcInByb2R1Y3QtZGV0YWlsLWhlYWRlci1jb21wb25lbnRfcHJvZHVjdC1kZXRhaWwtaGVhZGVyX19waWN0dXJlLXNsaWRlcl9fMlVoTC1cIixcInByb2R1Y3REZXRhaWxIZWFkZXJQaWN0dXJlU2xpZGVyXCI6XCJwcm9kdWN0LWRldGFpbC1oZWFkZXItY29tcG9uZW50X3Byb2R1Y3QtZGV0YWlsLWhlYWRlcl9fcGljdHVyZS1zbGlkZXJfXzJVaEwtXCIsXCJwcm9kdWN0LWRldGFpbC1oZWFkZXJfX3BpY3R1cmUtc2xpZGVyX19tYWluLWltYWdlXCI6XCJwcm9kdWN0LWRldGFpbC1oZWFkZXItY29tcG9uZW50X3Byb2R1Y3QtZGV0YWlsLWhlYWRlcl9fcGljdHVyZS1zbGlkZXJfX21haW4taW1hZ2VfXzFLTzUtXCIsXCJwcm9kdWN0RGV0YWlsSGVhZGVyUGljdHVyZVNsaWRlck1haW5JbWFnZVwiOlwicHJvZHVjdC1kZXRhaWwtaGVhZGVyLWNvbXBvbmVudF9wcm9kdWN0LWRldGFpbC1oZWFkZXJfX3BpY3R1cmUtc2xpZGVyX19tYWluLWltYWdlX18xS081LVwiLFwicHJvZHVjdC1kZXRhaWwtaGVhZGVyX19waWN0dXJlLXNsaWRlcl9fc21hbGwtaW1hZ2VzLWNvbnRhaW5lclwiOlwicHJvZHVjdC1kZXRhaWwtaGVhZGVyLWNvbXBvbmVudF9wcm9kdWN0LWRldGFpbC1oZWFkZXJfX3BpY3R1cmUtc2xpZGVyX19zbWFsbC1pbWFnZXMtY29udGFpbmVyX18ya08wYlwiLFwicHJvZHVjdERldGFpbEhlYWRlclBpY3R1cmVTbGlkZXJTbWFsbEltYWdlc0NvbnRhaW5lclwiOlwicHJvZHVjdC1kZXRhaWwtaGVhZGVyLWNvbXBvbmVudF9wcm9kdWN0LWRldGFpbC1oZWFkZXJfX3BpY3R1cmUtc2xpZGVyX19zbWFsbC1pbWFnZXMtY29udGFpbmVyX18ya08wYlwiLFwicHJvZHVjdC1kZXRhaWwtaGVhZGVyX19waWN0dXJlLXNsaWRlcl9fc21hbGwtaW1hZ2VcIjpcInByb2R1Y3QtZGV0YWlsLWhlYWRlci1jb21wb25lbnRfcHJvZHVjdC1kZXRhaWwtaGVhZGVyX19waWN0dXJlLXNsaWRlcl9fc21hbGwtaW1hZ2VfX2dhU2wyXCIsXCJwcm9kdWN0RGV0YWlsSGVhZGVyUGljdHVyZVNsaWRlclNtYWxsSW1hZ2VcIjpcInByb2R1Y3QtZGV0YWlsLWhlYWRlci1jb21wb25lbnRfcHJvZHVjdC1kZXRhaWwtaGVhZGVyX19waWN0dXJlLXNsaWRlcl9fc21hbGwtaW1hZ2VfX2dhU2wyXCIsXCJwcm9kdWN0LWRldGFpbC1oZWFkZXJfX3NsaWRlclwiOlwicHJvZHVjdC1kZXRhaWwtaGVhZGVyLWNvbXBvbmVudF9wcm9kdWN0LWRldGFpbC1oZWFkZXJfX3NsaWRlcl9fMjN3ZjBcIixcInByb2R1Y3REZXRhaWxIZWFkZXJTbGlkZXJcIjpcInByb2R1Y3QtZGV0YWlsLWhlYWRlci1jb21wb25lbnRfcHJvZHVjdC1kZXRhaWwtaGVhZGVyX19zbGlkZXJfXzIzd2YwXCIsXCJwcm9kdWN0LWRldGFpbC1oZWFkZXJfX2xpbmtzXCI6XCJwcm9kdWN0LWRldGFpbC1oZWFkZXItY29tcG9uZW50X3Byb2R1Y3QtZGV0YWlsLWhlYWRlcl9fbGlua3NfXzJkYTdhXCIsXCJwcm9kdWN0RGV0YWlsSGVhZGVyTGlua3NcIjpcInByb2R1Y3QtZGV0YWlsLWhlYWRlci1jb21wb25lbnRfcHJvZHVjdC1kZXRhaWwtaGVhZGVyX19saW5rc19fMmRhN2FcIixcInByb2R1Y3QtZGV0YWlsLWhlYWRlcl9fbGlua3NfX2ljb25cIjpcInByb2R1Y3QtZGV0YWlsLWhlYWRlci1jb21wb25lbnRfcHJvZHVjdC1kZXRhaWwtaGVhZGVyX19saW5rc19faWNvbl9fZVB1NExcIixcInByb2R1Y3REZXRhaWxIZWFkZXJMaW5rc0ljb25cIjpcInByb2R1Y3QtZGV0YWlsLWhlYWRlci1jb21wb25lbnRfcHJvZHVjdC1kZXRhaWwtaGVhZGVyX19saW5rc19faWNvbl9fZVB1NExcIixcInByb2R1Y3QtZGV0YWlsLWhlYWRlcl9fc29jaWFsLWljb25cIjpcInByb2R1Y3QtZGV0YWlsLWhlYWRlci1jb21wb25lbnRfcHJvZHVjdC1kZXRhaWwtaGVhZGVyX19zb2NpYWwtaWNvbl9fT1ZPaDRcIixcInByb2R1Y3REZXRhaWxIZWFkZXJTb2NpYWxJY29uXCI6XCJwcm9kdWN0LWRldGFpbC1oZWFkZXItY29tcG9uZW50X3Byb2R1Y3QtZGV0YWlsLWhlYWRlcl9fc29jaWFsLWljb25fX09WT2g0XCIsXCJidXR0b24tYmFja1wiOlwicHJvZHVjdC1kZXRhaWwtaGVhZGVyLWNvbXBvbmVudF9idXR0b24tYmFja19fM0tFMFRcIixcImJ1dHRvbkJhY2tcIjpcInByb2R1Y3QtZGV0YWlsLWhlYWRlci1jb21wb25lbnRfYnV0dG9uLWJhY2tfXzNLRTBUXCJ9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1NTk5MTMyODM5MTRcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wcm9kdWN0LWRldGFpbC1oZWFkZXItY29tcG9uZW50Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBQcm9kdWN0RGV0YWlsSGVhZGVyLCBTb2NpYWxNZWRpYUJ1dHRvbnMgfSBmcm9tIFwiQGFwcC9hcGlcIjtcbmltcG9ydCBBcnJvd0xlZnQgZnJvbSBcIkBhc3NldHMvaWNvbnMvYXJyb3ctbGVmdC5zdmdcIjtcbmltcG9ydCB7IEljb25Db21wb25lbnQgfSBmcm9tIFwiQGFwcC9tb2R1bGVzL2NvcmVcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgU29jaWFsTWVkaWFDb21wb25lbnQsIFNvY2lhbE1lZGlhQ29tcG9uZW50VHlwZSB9IGZyb20gXCJAYXBwL21vZHVsZXMvc29jaWFsLW1lZGlhXCI7XG5pbXBvcnQgeyBzZXR0aW5nU2xpZGVyIH0gZnJvbSBcIi4vc2V0dGluZ3Mtc2xpZGVyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb2R1Y3REZXRhaWxIZWFkZXJQcm9wcyB7XG4gIHByb2R1Y3REZXRhaWxIZWFkZXJNb2R1bGU6IFByb2R1Y3REZXRhaWxIZWFkZXI7XG4gIHNvY2lhbE1lZGlhQnV0dG9uczogU29jaWFsTWVkaWFCdXR0b25zO1xuICBjdXN0b21OZXh0QXJyb3c/OiBKU1guRWxlbWVudCB8IHVuZGVmaW5lZDtcbiAgY3VzdG9tUHJldkFycm93PzogSlNYLkVsZW1lbnQgfCB1bmRlZmluZWQ7XG59XG5cbmNvbnN0IFByb2R1Y3REZXRhaWxIZWFkZXJDb21wb25lbnQgPSAocHJvcHM6IElQcm9kdWN0RGV0YWlsSGVhZGVyUHJvcHMpID0+IHtcbiAgY29uc3Qgc2V0dGluZ3NTbGlkZXIgPSBzZXR0aW5nU2xpZGVyKHByb3BzLmN1c3RvbU5leHRBcnJvdywgcHJvcHMuY3VzdG9tUHJldkFycm93KTtcbiAgY29uc3QgW3VybEJpZ1BpY3R1cmUsIHNldHVybEJpZ1BpY3R1cmVdID0gUmVhY3QudXNlU3RhdGUocHJvcHMucHJvZHVjdERldGFpbEhlYWRlck1vZHVsZS5saXN0UGljdHVyZXNbMF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1jb250YWluZXJcIj5cbiAgICAgIDxMaW5rIHRvPXtcIi9cIn0gY2xhc3NOYW1lPXtzdHlsZXNbXCJidXR0b24tYmFja1wiXX0+XG4gICAgICAgIDxJY29uQ29tcG9uZW50IGljb249e0Fycm93TGVmdH0gc2l6ZT1cIjEycHhcIiAvPlxuICAgICAgICB7cHJvcHMucHJvZHVjdERldGFpbEhlYWRlck1vZHVsZS5iYWNrQnV0dG9uVGV4dH1cbiAgICAgIDwvTGluaz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9kdWN0LWRldGFpbC1oZWFkZXJcIl19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvZHVjdC1kZXRhaWwtaGVhZGVyX19waWN0dXJlLXNsaWRlclwiXX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2R1Y3QtZGV0YWlsLWhlYWRlcl9fcGljdHVyZS1zbGlkZXJfX21haW4taW1hZ2VcIl19PlxuICAgICAgICAgICAgPGltZyBzcmM9e3VybEJpZ1BpY3R1cmV9IGFsdD17XCJpbWdcIn0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvZHVjdC1kZXRhaWwtaGVhZGVyX19waWN0dXJlLXNsaWRlcl9fc21hbGwtaW1hZ2VzLWNvbnRhaW5lclwiXX0+XG4gICAgICAgICAgICB7cHJvcHMucHJvZHVjdERldGFpbEhlYWRlck1vZHVsZS5saXN0UGljdHVyZXMubWFwKHVybCA9PiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9kdWN0LWRldGFpbC1oZWFkZXJfX3BpY3R1cmUtc2xpZGVyX19zbWFsbC1pbWFnZVwiXX0+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPXt1cmx9XG4gICAgICAgICAgICAgICAgICBhbHQ9e1wiaW1nXCJ9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldHVybEJpZ1BpY3R1cmUodXJsKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2R1Y3QtZGV0YWlsLWhlYWRlcl9fYm9keS10ZXh0XCJdfT5cbiAgICAgICAgICA8aDE+e3Byb3BzLnByb2R1Y3REZXRhaWxIZWFkZXJNb2R1bGUuaGVhZGVyfTwvaDE+XG4gICAgICAgICAgPHNwYW4+e3Byb3BzLnByb2R1Y3REZXRhaWxIZWFkZXJNb2R1bGUuc3ViSGVhZGVyfTwvc3Bhbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvZHVjdC1kZXRhaWwtaGVhZGVyX19zbGlkZXJcIl19PlxuICAgICAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3NTbGlkZXJ9PlxuICAgICAgICAgICAgICB7cHJvcHMucHJvZHVjdERldGFpbEhlYWRlck1vZHVsZS5saXN0UGljdHVyZXMubWFwKHVybCA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2R1Y3QtZGV0YWlsLWhlYWRlcl9fc2xpZGVyX19pbWFnZS1jb250YWluZXJcIl19PlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3VybH0gYWx0PXtcImltZ1wifSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvU2xpZGVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzcGFuPntwcm9wcy5wcm9kdWN0RGV0YWlsSGVhZGVyTW9kdWxlLmJvZHl9PC9zcGFuPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9kdWN0LWRldGFpbC1oZWFkZXJfX2xpbmtzXCJdfT5cbiAgICAgICAgICAgIHtwcm9wcy5wcm9kdWN0RGV0YWlsSGVhZGVyTW9kdWxlLmxpbmtzLm1hcChsaW5rID0+IChcbiAgICAgICAgICAgICAgPExpbmsgdG89e2xpbmsucm91dGV9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvZHVjdC1kZXRhaWwtaGVhZGVyX19saW5rc19faWNvblwiXX0+XG4gICAgICAgICAgICAgICAgICA8SWNvbkNvbXBvbmVudCBpY29uPXtsaW5rLmljb259IHNpemU9XCIxOHB4XCIgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICA8c3Bhbj57bGluay5jb250ZW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2R1Y3QtZGV0YWlsLWhlYWRlcl9fc29jaWFsLWljb25cIl19PlxuICAgICAgICAgICAgPFNvY2lhbE1lZGlhQ29tcG9uZW50XG4gICAgICAgICAgICAgIHNvY2lhbE1lZGlhQnV0dG9ucz17cHJvcHMuc29jaWFsTWVkaWFCdXR0b25zfVxuICAgICAgICAgICAgICBzb2NpYWxNZWRpYUNvbXBvbmVudFR5cGU9e1NvY2lhbE1lZGlhQ29tcG9uZW50VHlwZS5TSEFSRX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgeyBQcm9kdWN0RGV0YWlsSGVhZGVyQ29tcG9uZW50IH07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQgeyBnZXRBcnJvdyB9IGZyb20gXCJAYXBwL2NvbnN0YW50cy9pY29uc1wiO1xuXG5pbnRlcmZhY2UgSUJhc2ljQXJyb3dQcm9wcyB7XG4gIHByZXY/OiBib29sZWFuO1xuICBjdXN0b21BcnJvdz86IEpTWC5FbGVtZW50O1xuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufVxuY29uc3Qgc2Nyb2xsaW5nU3BlZWQgPSA1MDA7XG5cbmNvbnN0IEJhc2ljQXJyb3cgPSAocHJvcHM6IElCYXNpY0Fycm93UHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUsIG9uQ2xpY2sgfSA9IHByb3BzO1xuICBsZXQgcmVzdWx0ID0gbnVsbDtcblxuICBpZiAocHJvcHMuY3VzdG9tQXJyb3cgPT09IHVuZGVmaW5lZCkge1xuICAgIHJlc3VsdCA9IChcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9YH0gc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiIH19IG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgICA8aW1nIHNyYz17Z2V0QXJyb3cocHJvcHMucHJldil9IGFsdD1cImFycm93XCIgLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25DbGljaz17b25DbGlja30gcm9sZT1cImJ1dHRvblwiPlxuICAgICAgICB7cHJvcHMuY3VzdG9tQXJyb3d9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXR0aW5nU2xpZGVyID0gKG5leHRBcnJvdz86IEpTWC5FbGVtZW50IHwgdW5kZWZpbmVkLCBwcmV2QXJyb3c/OiBKU1guRWxlbWVudCB8IHVuZGVmaW5lZCk6IFNldHRpbmdzID0+ICh7XG4gIGFycm93czogdHJ1ZSxcbiAgbmV4dEFycm93OiA8QmFzaWNBcnJvdyBjdXN0b21BcnJvdz17bmV4dEFycm93fSAvPixcbiAgcHJldkFycm93OiA8QmFzaWNBcnJvdyBjdXN0b21BcnJvdz17cHJldkFycm93fSBwcmV2IC8+LFxuICBkb3RzOiBmYWxzZSxcbiAgZHJhZ2dhYmxlOiB0cnVlLFxuICBpbmZpbml0ZTogZmFsc2UsXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICBzbGlkZXNUb1Nob3c6IDEsXG4gIHNwZWVkOiBzY3JvbGxpbmdTcGVlZFxufSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wicHJvZHVjdC1vdmVydmlld19faGVhZGVyXCI6XCJwcm9kdWN0LWxpbmUtY2FyZHMtY29tcG9uZW50X3Byb2R1Y3Qtb3ZlcnZpZXdfX2hlYWRlcl9fMTZqdHdcIixcInByb2R1Y3RPdmVydmlld0hlYWRlclwiOlwicHJvZHVjdC1saW5lLWNhcmRzLWNvbXBvbmVudF9wcm9kdWN0LW92ZXJ2aWV3X19oZWFkZXJfXzE2anR3XCIsXCJwcm9kdWN0LW92ZXJ2aWV3X193cmFwXCI6XCJwcm9kdWN0LWxpbmUtY2FyZHMtY29tcG9uZW50X3Byb2R1Y3Qtb3ZlcnZpZXdfX3dyYXBfX19yVXROXCIsXCJwcm9kdWN0T3ZlcnZpZXdXcmFwXCI6XCJwcm9kdWN0LWxpbmUtY2FyZHMtY29tcG9uZW50X3Byb2R1Y3Qtb3ZlcnZpZXdfX3dyYXBfX19yVXROXCIsXCJwcm9kdWN0LW92ZXJ2aWV3X19zcGFjZVwiOlwicHJvZHVjdC1saW5lLWNhcmRzLWNvbXBvbmVudF9wcm9kdWN0LW92ZXJ2aWV3X19zcGFjZV9fMk5VQ3lcIixcInByb2R1Y3RPdmVydmlld1NwYWNlXCI6XCJwcm9kdWN0LWxpbmUtY2FyZHMtY29tcG9uZW50X3Byb2R1Y3Qtb3ZlcnZpZXdfX3NwYWNlX18yTlVDeVwiLFwicHJvZHVjdC1vdmVydmlld19fYmxvY2tcIjpcInByb2R1Y3QtbGluZS1jYXJkcy1jb21wb25lbnRfcHJvZHVjdC1vdmVydmlld19fYmxvY2tfXzJkTGpfXCIsXCJwcm9kdWN0T3ZlcnZpZXdCbG9ja1wiOlwicHJvZHVjdC1saW5lLWNhcmRzLWNvbXBvbmVudF9wcm9kdWN0LW92ZXJ2aWV3X19ibG9ja19fMmRMal9cIixcInNsaWNrLXNsaWRlXCI6XCJwcm9kdWN0LWxpbmUtY2FyZHMtY29tcG9uZW50X3NsaWNrLXNsaWRlX18zUmFUalwiLFwic2xpY2tTbGlkZVwiOlwicHJvZHVjdC1saW5lLWNhcmRzLWNvbXBvbmVudF9zbGljay1zbGlkZV9fM1JhVGpcIixcImNhcmQtLXByb2R1Y3RcIjpcInByb2R1Y3QtbGluZS1jYXJkcy1jb21wb25lbnRfY2FyZC0tcHJvZHVjdF9fMTFIRHJcIixcImNhcmRQcm9kdWN0XCI6XCJwcm9kdWN0LWxpbmUtY2FyZHMtY29tcG9uZW50X2NhcmQtLXByb2R1Y3RfXzExSERyXCIsXCJwcm9kdWN0LW92ZXJ2aWV3XCI6XCJwcm9kdWN0LWxpbmUtY2FyZHMtY29tcG9uZW50X3Byb2R1Y3Qtb3ZlcnZpZXdfXzJGWUNKXCIsXCJwcm9kdWN0T3ZlcnZpZXdcIjpcInByb2R1Y3QtbGluZS1jYXJkcy1jb21wb25lbnRfcHJvZHVjdC1vdmVydmlld19fMkZZQ0pcIixcInNsaWNrLXNsaWRlclwiOlwicHJvZHVjdC1saW5lLWNhcmRzLWNvbXBvbmVudF9zbGljay1zbGlkZXJfXzMtNGFSXCIsXCJzbGlja1NsaWRlclwiOlwicHJvZHVjdC1saW5lLWNhcmRzLWNvbXBvbmVudF9zbGljay1zbGlkZXJfXzMtNGFSXCIsXCJzbGljay1saXN0XCI6XCJwcm9kdWN0LWxpbmUtY2FyZHMtY29tcG9uZW50X3NsaWNrLWxpc3RfX3lzQTFYXCIsXCJzbGlja0xpc3RcIjpcInByb2R1Y3QtbGluZS1jYXJkcy1jb21wb25lbnRfc2xpY2stbGlzdF9feXNBMVhcIixcImVtcHR5LXN0YXRlXCI6XCJwcm9kdWN0LWxpbmUtY2FyZHMtY29tcG9uZW50X2VtcHR5LXN0YXRlX18xeWlwU1wiLFwiZW1wdHlTdGF0ZVwiOlwicHJvZHVjdC1saW5lLWNhcmRzLWNvbXBvbmVudF9lbXB0eS1zdGF0ZV9fMXlpcFNcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU1OTkxMzI4MjQ4M1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wibGF5b3V0LXR3by1jb2x1bW5zXCI6XCJwcm9kdWN0LWxpbmUtZmlsdGVyLWNvbXBvbmVudF9sYXlvdXQtdHdvLWNvbHVtbnNfXzFPV2dUXCIsXCJsYXlvdXRUd29Db2x1bW5zXCI6XCJwcm9kdWN0LWxpbmUtZmlsdGVyLWNvbXBvbmVudF9sYXlvdXQtdHdvLWNvbHVtbnNfXzFPV2dUXCIsXCJsYXlvdXQtdHdvLWNvbHVtbnNfX2ZvcmVncm91bmRcIjpcInByb2R1Y3QtbGluZS1maWx0ZXItY29tcG9uZW50X2xheW91dC10d28tY29sdW1uc19fZm9yZWdyb3VuZF9fcURYSy1cIixcImxheW91dFR3b0NvbHVtbnNGb3JlZ3JvdW5kXCI6XCJwcm9kdWN0LWxpbmUtZmlsdGVyLWNvbXBvbmVudF9sYXlvdXQtdHdvLWNvbHVtbnNfX2ZvcmVncm91bmRfX3FEWEstXCIsXCJsYXlvdXQtdHdvLWNvbHVtbnMtLWRlY29yLXRvcFwiOlwicHJvZHVjdC1saW5lLWZpbHRlci1jb21wb25lbnRfbGF5b3V0LXR3by1jb2x1bW5zLS1kZWNvci10b3BfX2tWUGhZXCIsXCJsYXlvdXRUd29Db2x1bW5zRGVjb3JUb3BcIjpcInByb2R1Y3QtbGluZS1maWx0ZXItY29tcG9uZW50X2xheW91dC10d28tY29sdW1ucy0tZGVjb3ItdG9wX19rVlBoWVwiLFwibGF5b3V0LXR3by1jb2x1bW5zLS1kZWNvci1ib3R0b21cIjpcInByb2R1Y3QtbGluZS1maWx0ZXItY29tcG9uZW50X2xheW91dC10d28tY29sdW1ucy0tZGVjb3ItYm90dG9tX18zaWZ3RlwiLFwibGF5b3V0VHdvQ29sdW1uc0RlY29yQm90dG9tXCI6XCJwcm9kdWN0LWxpbmUtZmlsdGVyLWNvbXBvbmVudF9sYXlvdXQtdHdvLWNvbHVtbnMtLWRlY29yLWJvdHRvbV9fM2lmd0ZcIixcInByb2R1Y3Qtb3ZlcnZpZXdfX2hlYWRlclwiOlwicHJvZHVjdC1saW5lLWZpbHRlci1jb21wb25lbnRfcHJvZHVjdC1vdmVydmlld19faGVhZGVyX18zRW9xSFwiLFwicHJvZHVjdE92ZXJ2aWV3SGVhZGVyXCI6XCJwcm9kdWN0LWxpbmUtZmlsdGVyLWNvbXBvbmVudF9wcm9kdWN0LW92ZXJ2aWV3X19oZWFkZXJfXzNFb3FIXCIsXCJwcm9kdWN0LW92ZXJ2aWV3X193cmFwXCI6XCJwcm9kdWN0LWxpbmUtZmlsdGVyLWNvbXBvbmVudF9wcm9kdWN0LW92ZXJ2aWV3X193cmFwX19Hek02eFwiLFwicHJvZHVjdE92ZXJ2aWV3V3JhcFwiOlwicHJvZHVjdC1saW5lLWZpbHRlci1jb21wb25lbnRfcHJvZHVjdC1vdmVydmlld19fd3JhcF9fR3pNNnhcIixcInByb2R1Y3Qtb3ZlcnZpZXdfX2Jsb2NrXCI6XCJwcm9kdWN0LWxpbmUtZmlsdGVyLWNvbXBvbmVudF9wcm9kdWN0LW92ZXJ2aWV3X19ibG9ja19fSEdOdmJcIixcInByb2R1Y3RPdmVydmlld0Jsb2NrXCI6XCJwcm9kdWN0LWxpbmUtZmlsdGVyLWNvbXBvbmVudF9wcm9kdWN0LW92ZXJ2aWV3X19ibG9ja19fSEdOdmJcIixcInNsaWNrLXNsaWRlXCI6XCJwcm9kdWN0LWxpbmUtZmlsdGVyLWNvbXBvbmVudF9zbGljay1zbGlkZV9fcTBjRnZcIixcInNsaWNrU2xpZGVcIjpcInByb2R1Y3QtbGluZS1maWx0ZXItY29tcG9uZW50X3NsaWNrLXNsaWRlX19xMGNGdlwiLFwiY2FyZC0tcHJvZHVjdFwiOlwicHJvZHVjdC1saW5lLWZpbHRlci1jb21wb25lbnRfY2FyZC0tcHJvZHVjdF9fMTFhSlVcIixcImNhcmRQcm9kdWN0XCI6XCJwcm9kdWN0LWxpbmUtZmlsdGVyLWNvbXBvbmVudF9jYXJkLS1wcm9kdWN0X18xMWFKVVwiLFwicHJvZHVjdC1vdmVydmlld1wiOlwicHJvZHVjdC1saW5lLWZpbHRlci1jb21wb25lbnRfcHJvZHVjdC1vdmVydmlld19fMVpUcllcIixcInByb2R1Y3RPdmVydmlld1wiOlwicHJvZHVjdC1saW5lLWZpbHRlci1jb21wb25lbnRfcHJvZHVjdC1vdmVydmlld19fMVpUcllcIixcInNsaWNrLXNsaWRlclwiOlwicHJvZHVjdC1saW5lLWZpbHRlci1jb21wb25lbnRfc2xpY2stc2xpZGVyX18yZnhyRlwiLFwic2xpY2tTbGlkZXJcIjpcInByb2R1Y3QtbGluZS1maWx0ZXItY29tcG9uZW50X3NsaWNrLXNsaWRlcl9fMmZ4ckZcIixcInNsaWNrLWxpc3RcIjpcInByb2R1Y3QtbGluZS1maWx0ZXItY29tcG9uZW50X3NsaWNrLWxpc3RfXzFrTmJCXCIsXCJzbGlja0xpc3RcIjpcInByb2R1Y3QtbGluZS1maWx0ZXItY29tcG9uZW50X3NsaWNrLWxpc3RfXzFrTmJCXCIsXCJlbXB0eS1zdGF0ZVwiOlwicHJvZHVjdC1saW5lLWZpbHRlci1jb21wb25lbnRfZW1wdHktc3RhdGVfXzJidXI5XCIsXCJlbXB0eVN0YXRlXCI6XCJwcm9kdWN0LWxpbmUtZmlsdGVyLWNvbXBvbmVudF9lbXB0eS1zdGF0ZV9fMmJ1cjlcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU1OTkxMzI4MjA1MVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wicmVzcG9uc2l2ZVwiOlwicHJvZHVjdC1vdmVydmlldy1zaWRlYmFyLWNvbXBvbmVudF9yZXNwb25zaXZlX18zcnhGZVwiLFwic2lkZWJhclwiOlwicHJvZHVjdC1vdmVydmlldy1zaWRlYmFyLWNvbXBvbmVudF9zaWRlYmFyX19FN2NsOFwiLFwic2lkZWJhcl9fYmxvY2tcIjpcInByb2R1Y3Qtb3ZlcnZpZXctc2lkZWJhci1jb21wb25lbnRfc2lkZWJhcl9fYmxvY2tfXzNRdVV4XCIsXCJzaWRlYmFyQmxvY2tcIjpcInByb2R1Y3Qtb3ZlcnZpZXctc2lkZWJhci1jb21wb25lbnRfc2lkZWJhcl9fYmxvY2tfXzNRdVV4XCIsXCJzaWRlYmFyX19zZWFyY2hcIjpcInByb2R1Y3Qtb3ZlcnZpZXctc2lkZWJhci1jb21wb25lbnRfc2lkZWJhcl9fc2VhcmNoX19fZWMtcVwiLFwic2lkZWJhclNlYXJjaFwiOlwicHJvZHVjdC1vdmVydmlldy1zaWRlYmFyLWNvbXBvbmVudF9zaWRlYmFyX19zZWFyY2hfX19lYy1xXCIsXCJ1ay1hY2NvcmRpb25cIjpcInByb2R1Y3Qtb3ZlcnZpZXctc2lkZWJhci1jb21wb25lbnRfdWstYWNjb3JkaW9uX18zXzRqOFwiLFwidWtBY2NvcmRpb25cIjpcInByb2R1Y3Qtb3ZlcnZpZXctc2lkZWJhci1jb21wb25lbnRfdWstYWNjb3JkaW9uX18zXzRqOFwiLFwidWstYWNjb3JkaW9uLXRpdGxlXCI6XCJwcm9kdWN0LW92ZXJ2aWV3LXNpZGViYXItY29tcG9uZW50X3VrLWFjY29yZGlvbi10aXRsZV9fMkhCVEhcIixcInVrQWNjb3JkaW9uVGl0bGVcIjpcInByb2R1Y3Qtb3ZlcnZpZXctc2lkZWJhci1jb21wb25lbnRfdWstYWNjb3JkaW9uLXRpdGxlX18ySEJUSFwiLFwidWstYWNjb3JkaW9uLWNvbnRlbnRcIjpcInByb2R1Y3Qtb3ZlcnZpZXctc2lkZWJhci1jb21wb25lbnRfdWstYWNjb3JkaW9uLWNvbnRlbnRfXzFWNldYXCIsXCJ1a0FjY29yZGlvbkNvbnRlbnRcIjpcInByb2R1Y3Qtb3ZlcnZpZXctc2lkZWJhci1jb21wb25lbnRfdWstYWNjb3JkaW9uLWNvbnRlbnRfXzFWNldYXCIsXCJzaWRlYmFyLS1tb2RpZnlcIjpcInByb2R1Y3Qtb3ZlcnZpZXctc2lkZWJhci1jb21wb25lbnRfc2lkZWJhci0tbW9kaWZ5X18za3VNM1wiLFwic2lkZWJhck1vZGlmeVwiOlwicHJvZHVjdC1vdmVydmlldy1zaWRlYmFyLWNvbXBvbmVudF9zaWRlYmFyLS1tb2RpZnlfXzNrdU0zXCJ9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1NTk5MTMyODE5MTRcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU1OTkxMzI4MjM2NVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTU5OTEzMjc3NTAwXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJwcm9kdWN0LW92ZXJ2aWV3X19oZWFkZXJcIjpcInByb2R1Y3Qtb3ZlcnZpZXctc2ltcGxlLWNvbXBvbmVudF9wcm9kdWN0LW92ZXJ2aWV3X19oZWFkZXJfXzIyNFJrXCIsXCJwcm9kdWN0T3ZlcnZpZXdIZWFkZXJcIjpcInByb2R1Y3Qtb3ZlcnZpZXctc2ltcGxlLWNvbXBvbmVudF9wcm9kdWN0LW92ZXJ2aWV3X19oZWFkZXJfXzIyNFJrXCIsXCJwcm9kdWN0LW92ZXJ2aWV3X193cmFwXCI6XCJwcm9kdWN0LW92ZXJ2aWV3LXNpbXBsZS1jb21wb25lbnRfcHJvZHVjdC1vdmVydmlld19fd3JhcF9fWmNXTWVcIixcInByb2R1Y3RPdmVydmlld1dyYXBcIjpcInByb2R1Y3Qtb3ZlcnZpZXctc2ltcGxlLWNvbXBvbmVudF9wcm9kdWN0LW92ZXJ2aWV3X193cmFwX19aY1dNZVwiLFwicHJvZHVjdC1vdmVydmlld19fc3BhY2VcIjpcInByb2R1Y3Qtb3ZlcnZpZXctc2ltcGxlLWNvbXBvbmVudF9wcm9kdWN0LW92ZXJ2aWV3X19zcGFjZV9fM0pqb2xcIixcInByb2R1Y3RPdmVydmlld1NwYWNlXCI6XCJwcm9kdWN0LW92ZXJ2aWV3LXNpbXBsZS1jb21wb25lbnRfcHJvZHVjdC1vdmVydmlld19fc3BhY2VfXzNKam9sXCIsXCJwcm9kdWN0LW92ZXJ2aWV3X19ibG9ja1wiOlwicHJvZHVjdC1vdmVydmlldy1zaW1wbGUtY29tcG9uZW50X3Byb2R1Y3Qtb3ZlcnZpZXdfX2Jsb2NrX18xZWNQS1wiLFwicHJvZHVjdE92ZXJ2aWV3QmxvY2tcIjpcInByb2R1Y3Qtb3ZlcnZpZXctc2ltcGxlLWNvbXBvbmVudF9wcm9kdWN0LW92ZXJ2aWV3X19ibG9ja19fMWVjUEtcIixcInNsaWNrLXNsaWRlXCI6XCJwcm9kdWN0LW92ZXJ2aWV3LXNpbXBsZS1jb21wb25lbnRfc2xpY2stc2xpZGVfXzFDTnd1XCIsXCJzbGlja1NsaWRlXCI6XCJwcm9kdWN0LW92ZXJ2aWV3LXNpbXBsZS1jb21wb25lbnRfc2xpY2stc2xpZGVfXzFDTnd1XCIsXCJjYXJkLS1wcm9kdWN0XCI6XCJwcm9kdWN0LW92ZXJ2aWV3LXNpbXBsZS1jb21wb25lbnRfY2FyZC0tcHJvZHVjdF9fMS11WDlcIixcImNhcmRQcm9kdWN0XCI6XCJwcm9kdWN0LW92ZXJ2aWV3LXNpbXBsZS1jb21wb25lbnRfY2FyZC0tcHJvZHVjdF9fMS11WDlcIixcInByb2R1Y3Qtb3ZlcnZpZXdcIjpcInByb2R1Y3Qtb3ZlcnZpZXctc2ltcGxlLWNvbXBvbmVudF9wcm9kdWN0LW92ZXJ2aWV3X18yVExsalwiLFwicHJvZHVjdE92ZXJ2aWV3XCI6XCJwcm9kdWN0LW92ZXJ2aWV3LXNpbXBsZS1jb21wb25lbnRfcHJvZHVjdC1vdmVydmlld19fMlRMbGpcIixcInNsaWNrLXNsaWRlclwiOlwicHJvZHVjdC1vdmVydmlldy1zaW1wbGUtY29tcG9uZW50X3NsaWNrLXNsaWRlcl9fMkNCbFFcIixcInNsaWNrU2xpZGVyXCI6XCJwcm9kdWN0LW92ZXJ2aWV3LXNpbXBsZS1jb21wb25lbnRfc2xpY2stc2xpZGVyX18yQ0JsUVwiLFwic2xpY2stbGlzdFwiOlwicHJvZHVjdC1vdmVydmlldy1zaW1wbGUtY29tcG9uZW50X3NsaWNrLWxpc3RfXzJhQjFFXCIsXCJzbGlja0xpc3RcIjpcInByb2R1Y3Qtb3ZlcnZpZXctc2ltcGxlLWNvbXBvbmVudF9zbGljay1saXN0X18yYUIxRVwiLFwiZW1wdHktc3RhdGVcIjpcInByb2R1Y3Qtb3ZlcnZpZXctc2ltcGxlLWNvbXBvbmVudF9lbXB0eS1zdGF0ZV9fWTgxODFcIixcImVtcHR5U3RhdGVcIjpcInByb2R1Y3Qtb3ZlcnZpZXctc2ltcGxlLWNvbXBvbmVudF9lbXB0eS1zdGF0ZV9fWTgxODFcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU1OTkxMzI4MTQ3OFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCJleHBvcnQgKiBmcm9tIFwiLi9yZWNpcGUtZGV0YWlsLmNvbXBvbmVudFwiO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImhlYWRlci1iYWNrZ3JvdW5kXCI6XCJyZWNpcGUtZGV0YWlsLWNvbXBvbmVudF9oZWFkZXItYmFja2dyb3VuZF9fM3JGS3RcIixcImhlYWRlckJhY2tncm91bmRcIjpcInJlY2lwZS1kZXRhaWwtY29tcG9uZW50X2hlYWRlci1iYWNrZ3JvdW5kX18zckZLdFwiLFwicmVjaXBlLWRldGFpbFwiOlwicmVjaXBlLWRldGFpbC1jb21wb25lbnRfcmVjaXBlLWRldGFpbF9fMmZVdjZcIixcInJlY2lwZURldGFpbFwiOlwicmVjaXBlLWRldGFpbC1jb21wb25lbnRfcmVjaXBlLWRldGFpbF9fMmZVdjZcIixcInJlY2lwZS1kZXRhaWxfX2JhY2tcIjpcInJlY2lwZS1kZXRhaWwtY29tcG9uZW50X3JlY2lwZS1kZXRhaWxfX2JhY2tfXzNoS1pxXCIsXCJyZWNpcGVEZXRhaWxCYWNrXCI6XCJyZWNpcGUtZGV0YWlsLWNvbXBvbmVudF9yZWNpcGUtZGV0YWlsX19iYWNrX18zaEtacVwiLFwicmVjaXBlLWRldGFpbF9faW5ncmVkaWVudHNcIjpcInJlY2lwZS1kZXRhaWwtY29tcG9uZW50X3JlY2lwZS1kZXRhaWxfX2luZ3JlZGllbnRzX18xZjhZY1wiLFwicmVjaXBlRGV0YWlsSW5ncmVkaWVudHNcIjpcInJlY2lwZS1kZXRhaWwtY29tcG9uZW50X3JlY2lwZS1kZXRhaWxfX2luZ3JlZGllbnRzX18xZjhZY1wiLFwicmVjaXBlLWRldGFpbF9faG93dG9cIjpcInJlY2lwZS1kZXRhaWwtY29tcG9uZW50X3JlY2lwZS1kZXRhaWxfX2hvd3RvX191VC1DeFwiLFwicmVjaXBlRGV0YWlsSG93dG9cIjpcInJlY2lwZS1kZXRhaWwtY29tcG9uZW50X3JlY2lwZS1kZXRhaWxfX2hvd3RvX191VC1DeFwiLFwicmVjaXBlLWRldGFpbF9faG93dG9fX2ZvcmVncm91bmRcIjpcInJlY2lwZS1kZXRhaWwtY29tcG9uZW50X3JlY2lwZS1kZXRhaWxfX2hvd3RvX19mb3JlZ3JvdW5kX19QMlhzU1wiLFwicmVjaXBlRGV0YWlsSG93dG9Gb3JlZ3JvdW5kXCI6XCJyZWNpcGUtZGV0YWlsLWNvbXBvbmVudF9yZWNpcGUtZGV0YWlsX19ob3d0b19fZm9yZWdyb3VuZF9fUDJYc1NcIixcInJlY2lwZS1kZXRhaWxfX2hvd3RvX19oZWFkZXJcIjpcInJlY2lwZS1kZXRhaWwtY29tcG9uZW50X3JlY2lwZS1kZXRhaWxfX2hvd3RvX19oZWFkZXJfXzFHWE1fXCIsXCJyZWNpcGVEZXRhaWxIb3d0b0hlYWRlclwiOlwicmVjaXBlLWRldGFpbC1jb21wb25lbnRfcmVjaXBlLWRldGFpbF9faG93dG9fX2hlYWRlcl9fMUdYTV9cIixcInJlY2lwZS1kZXRhaWxfX2hvd3RvX19oZWFkZXItYmFja2dyb3VuZFwiOlwicmVjaXBlLWRldGFpbC1jb21wb25lbnRfcmVjaXBlLWRldGFpbF9faG93dG9fX2hlYWRlci1iYWNrZ3JvdW5kX195RmpDS1wiLFwicmVjaXBlRGV0YWlsSG93dG9IZWFkZXJCYWNrZ3JvdW5kXCI6XCJyZWNpcGUtZGV0YWlsLWNvbXBvbmVudF9yZWNpcGUtZGV0YWlsX19ob3d0b19faGVhZGVyLWJhY2tncm91bmRfX3lGakNLXCIsXCJyZWNpcGUtZGV0YWlsX19ob3d0b19faW5mb1wiOlwicmVjaXBlLWRldGFpbC1jb21wb25lbnRfcmVjaXBlLWRldGFpbF9faG93dG9fX2luZm9fXzJ0SE1IXCIsXCJyZWNpcGVEZXRhaWxIb3d0b0luZm9cIjpcInJlY2lwZS1kZXRhaWwtY29tcG9uZW50X3JlY2lwZS1kZXRhaWxfX2hvd3RvX19pbmZvX18ydEhNSFwiLFwicmVjaXBlLWRldGFpbF9faG93dG9fX2luZm8tYm94XCI6XCJyZWNpcGUtZGV0YWlsLWNvbXBvbmVudF9yZWNpcGUtZGV0YWlsX19ob3d0b19faW5mby1ib3hfXzMzZElEXCIsXCJyZWNpcGVEZXRhaWxIb3d0b0luZm9Cb3hcIjpcInJlY2lwZS1kZXRhaWwtY29tcG9uZW50X3JlY2lwZS1kZXRhaWxfX2hvd3RvX19pbmZvLWJveF9fMzNkSURcIixcInJlY2lwZS1kZXRhaWxfX2hvd3RvX19pbmZvLWJveC1ob2xkZXJcIjpcInJlY2lwZS1kZXRhaWwtY29tcG9uZW50X3JlY2lwZS1kZXRhaWxfX2hvd3RvX19pbmZvLWJveC1ob2xkZXJfXzNobGhoXCIsXCJyZWNpcGVEZXRhaWxIb3d0b0luZm9Cb3hIb2xkZXJcIjpcInJlY2lwZS1kZXRhaWwtY29tcG9uZW50X3JlY2lwZS1kZXRhaWxfX2hvd3RvX19pbmZvLWJveC1ob2xkZXJfXzNobGhoXCIsXCJyZWNpcGUtZGV0YWlsX19ob3d0b19faW5mby1saXN0XCI6XCJyZWNpcGUtZGV0YWlsLWNvbXBvbmVudF9yZWNpcGUtZGV0YWlsX19ob3d0b19faW5mby1saXN0X18yXy04bFwiLFwicmVjaXBlRGV0YWlsSG93dG9JbmZvTGlzdFwiOlwicmVjaXBlLWRldGFpbC1jb21wb25lbnRfcmVjaXBlLWRldGFpbF9faG93dG9fX2luZm8tbGlzdF9fMl8tOGxcIixcImljb24tc3ZnXCI6XCJyZWNpcGUtZGV0YWlsLWNvbXBvbmVudF9pY29uLXN2Z19fM1Rac09cIixcImljb25TdmdcIjpcInJlY2lwZS1kZXRhaWwtY29tcG9uZW50X2ljb24tc3ZnX18zVFpzT1wiLFwicmVjaXBlLWRldGFpbF9faG93dG9fX2l0ZW1cIjpcInJlY2lwZS1kZXRhaWwtY29tcG9uZW50X3JlY2lwZS1kZXRhaWxfX2hvd3RvX19pdGVtX18xdDltR1wiLFwicmVjaXBlRGV0YWlsSG93dG9JdGVtXCI6XCJyZWNpcGUtZGV0YWlsLWNvbXBvbmVudF9yZWNpcGUtZGV0YWlsX19ob3d0b19faXRlbV9fMXQ5bUdcIixcInJlY2lwZS1kZXRhaWxfX2hvd3RvX19pdGVtLXRpdGxlXCI6XCJyZWNpcGUtZGV0YWlsLWNvbXBvbmVudF9yZWNpcGUtZGV0YWlsX19ob3d0b19faXRlbS10aXRsZV9fQjZDZVhcIixcInJlY2lwZURldGFpbEhvd3RvSXRlbVRpdGxlXCI6XCJyZWNpcGUtZGV0YWlsLWNvbXBvbmVudF9yZWNpcGUtZGV0YWlsX19ob3d0b19faXRlbS10aXRsZV9fQjZDZVhcIixcInJlY2lwZS1kZXRhaWxfX2hvd3RvX19nYWxsZXJ5XCI6XCJyZWNpcGUtZGV0YWlsLWNvbXBvbmVudF9yZWNpcGUtZGV0YWlsX19ob3d0b19fZ2FsbGVyeV9fM1RiYTNcIixcInJlY2lwZURldGFpbEhvd3RvR2FsbGVyeVwiOlwicmVjaXBlLWRldGFpbC1jb21wb25lbnRfcmVjaXBlLWRldGFpbF9faG93dG9fX2dhbGxlcnlfXzNUYmEzXCJ9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1NTk5MTMyODQ2MDlcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCB7IEljb25Db21wb25lbnQgfSBmcm9tIFwiQGFwcC9tb2R1bGVzL2NvcmVcIjtcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9yZWNpcGUtZGV0YWlsLWNvbXBvbmVudC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IEFycm93TGVmdCBmcm9tIFwiQGFzc2V0cy9pY29ucy9hcnJvdy1sZWZ0LnN2Z1wiO1xuaW1wb3J0IHsgUmVjaXBlSGVhZENhcmQgfSBmcm9tIFwiLi4vY29yZS9yZWNpcGUtaGVhZC1jYXJkXCI7XG5pbXBvcnQgeyBJbmdyZWRpZW50TGlzdCB9IGZyb20gXCIuLi9jb3JlL2luZ3JlZGllbnQtbGlzdFwiO1xuaW1wb3J0IHsgUmVsYXRlZFBvc3RzIH0gZnJvbSBcIi4uL2NvcmUvcmVsYXRlZC1wb3N0c1wiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7IFJlY2lwZURldGFpbE1vZHVsZSB9IGZyb20gXCJAYXBwL2FwaVwiO1xuaW1wb3J0IHsgSU1BR0VfRkVBVFVSRUQgfSBmcm9tIFwiQGFwcC9jb25zdGFudHMvaWNvbnNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJUmVjaXBlRGV0YWlsUHJvcHMge1xuICByZWNpcGVEZXRhaWxNb2R1bGU6IFJlY2lwZURldGFpbE1vZHVsZTtcbn1cblxuY29uc3QgUmVjaXBlRGV0YWlsID0gKHByb3BzOiBJUmVjaXBlRGV0YWlsUHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlW1wicmVjaXBlLWRldGFpbFwiXX0+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlW1wiaGVhZGVyLWJhY2tncm91bmRcIl19IC8+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlW1wicmVjaXBlLWRldGFpbF9fZm9yZWdyb3VuZFwiXX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLWNvbnRhaW5lclwiPlxuICAgICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlW1wicmVjaXBlLWRldGFpbF9fYmFja1wiXX0gdG89XCIvXCI+XG4gICAgICAgICAgPEljb25Db21wb25lbnQgaWNvbj17QXJyb3dMZWZ0fSBzaXplPVwiMTJweFwiIC8+XG4gICAgICAgICAgVGVydWcgbmFhciBhbGxlIHJlY2VwdGVuXG4gICAgICAgIDwvTGluaz5cblxuICAgICAgICA8aDE+e3Byb3BzLnJlY2lwZURldGFpbE1vZHVsZS50aXRsZX08L2gxPlxuICAgICAgICA8cD57cHJvcHMucmVjaXBlRGV0YWlsTW9kdWxlLnN1YlRpdGxlfTwvcD5cblxuICAgICAgICA8UmVjaXBlSGVhZENhcmQgaXRlbXNSZWNpcGVJbmZvPXtwcm9wcy5yZWNpcGVEZXRhaWxNb2R1bGUuaXRlbnNSZWNpcGVJbmZvfSBwaWN0dXJlQkc9e0lNQUdFX0ZFQVRVUkVEfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstZ3JpZCB1ay1ncmlkLWxhcmdlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGB1ay13aWR0aC0xLTNAbSAke3N0eWxlW1wicmVjaXBlLWRldGFpbF9faW5ncmVkaWVudHNcIl19YCl9PlxuICAgICAgICAgIDxJbmdyZWRpZW50TGlzdFxuICAgICAgICAgICAgdGl0bGU9e3Byb3BzLnJlY2lwZURldGFpbE1vZHVsZS5zaWRlYmFyVGl0bGV9XG4gICAgICAgICAgICBwaWN0dXJlcz17cHJvcHMucmVjaXBlRGV0YWlsTW9kdWxlLmluZ3JlZGllbnRzUGljc31cbiAgICAgICAgICAgIGluZ3JlZGllbnRzPXtwcm9wcy5yZWNpcGVEZXRhaWxNb2R1bGUuaW5ncmVkaWVudHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstd2lkdGgtMi0zQG1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVbXCJyZWNpcGUtZGV0YWlsX19ob3d0b1wiXX0+XG4gICAgICAgICAgICA8aDM+QmVyZWlkZW48L2gzPlxuICAgICAgICAgICAgPG9sPlxuICAgICAgICAgICAgICB7cHJvcHMucmVjaXBlRGV0YWlsTW9kdWxlLmhvd1RvLnN0ZXBzLm1hcCgoc3RlcCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+e3N0ZXB9PC9saT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgPHA+e3Byb3BzLnJlY2lwZURldGFpbE1vZHVsZS5ob3dUby5leHRyYVRleHR9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxSZWxhdGVkUG9zdHNcbiAgICAgICAgICAgIHRpdGxlPXtwcm9wcy5yZWNpcGVEZXRhaWxNb2R1bGUudGl0bGVSZWxhdGVkUG9zdHN9XG4gICAgICAgICAgICBidXR0b25VUkw9e3Byb3BzLnJlY2lwZURldGFpbE1vZHVsZS5idXR0b25VUkxSZWxhdGVkUG9zdHN9XG4gICAgICAgICAgICBidXR0b25UZXh0PXtwcm9wcy5yZWNpcGVEZXRhaWxNb2R1bGUuYnV0dG9uVGV4dFJlbGF0ZWRQb3N0c31cbiAgICAgICAgICAgIHByb2R1Y3RzPXtwcm9wcy5yZWNpcGVEZXRhaWxNb2R1bGUucHJvZHVjdHNSZWxhdGVkUG9zdHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgeyBSZWNpcGVEZXRhaWwgfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJyZWxhdGVkLXByb2R1Y3Qtc2xpZGVyXCI6XCJyZWxhdGVkLXByb2R1Y3RzLXNsaWRlci1jb21wb25lbnRfcmVsYXRlZC1wcm9kdWN0LXNsaWRlcl9fM1hROHJcIixcInJlbGF0ZWRQcm9kdWN0U2xpZGVyXCI6XCJyZWxhdGVkLXByb2R1Y3RzLXNsaWRlci1jb21wb25lbnRfcmVsYXRlZC1wcm9kdWN0LXNsaWRlcl9fM1hROHJcIixcInJlbGF0ZWQtcHJvZHVjdC1zbGlkZXJfX2ZvcmVncm91bmRcIjpcInJlbGF0ZWQtcHJvZHVjdHMtc2xpZGVyLWNvbXBvbmVudF9yZWxhdGVkLXByb2R1Y3Qtc2xpZGVyX19mb3JlZ3JvdW5kX18za0FrRVwiLFwicmVsYXRlZFByb2R1Y3RTbGlkZXJGb3JlZ3JvdW5kXCI6XCJyZWxhdGVkLXByb2R1Y3RzLXNsaWRlci1jb21wb25lbnRfcmVsYXRlZC1wcm9kdWN0LXNsaWRlcl9fZm9yZWdyb3VuZF9fM2tBa0VcIixcInJlbGF0ZWQtcHJvZHVjdC1zbGlkZXJfX2hlYWRlclwiOlwicmVsYXRlZC1wcm9kdWN0cy1zbGlkZXItY29tcG9uZW50X3JlbGF0ZWQtcHJvZHVjdC1zbGlkZXJfX2hlYWRlcl9fMmlQWWdcIixcInJlbGF0ZWRQcm9kdWN0U2xpZGVySGVhZGVyXCI6XCJyZWxhdGVkLXByb2R1Y3RzLXNsaWRlci1jb21wb25lbnRfcmVsYXRlZC1wcm9kdWN0LXNsaWRlcl9faGVhZGVyX18yaVBZZ1wiLFwicmVsYXRlZC1wcm9kdWN0LXNsaWRlcl9faGVhZGVyLWJ1dHRvblwiOlwicmVsYXRlZC1wcm9kdWN0cy1zbGlkZXItY29tcG9uZW50X3JlbGF0ZWQtcHJvZHVjdC1zbGlkZXJfX2hlYWRlci1idXR0b25fX3AzczhxXCIsXCJyZWxhdGVkUHJvZHVjdFNsaWRlckhlYWRlckJ1dHRvblwiOlwicmVsYXRlZC1wcm9kdWN0cy1zbGlkZXItY29tcG9uZW50X3JlbGF0ZWQtcHJvZHVjdC1zbGlkZXJfX2hlYWRlci1idXR0b25fX3AzczhxXCIsXCJyZWxhdGVkLXByb2R1Y3Qtc2xpZGVyX19zbGlkZVwiOlwicmVsYXRlZC1wcm9kdWN0cy1zbGlkZXItY29tcG9uZW50X3JlbGF0ZWQtcHJvZHVjdC1zbGlkZXJfX3NsaWRlX18xNE11elwiLFwicmVsYXRlZFByb2R1Y3RTbGlkZXJTbGlkZVwiOlwicmVsYXRlZC1wcm9kdWN0cy1zbGlkZXItY29tcG9uZW50X3JlbGF0ZWQtcHJvZHVjdC1zbGlkZXJfX3NsaWRlX18xNE11elwiLFwicmVsYXRlZC1wcm9kdWN0LXNsaWRlcl9fYm90dG9tLWJ1dHRvblwiOlwicmVsYXRlZC1wcm9kdWN0cy1zbGlkZXItY29tcG9uZW50X3JlbGF0ZWQtcHJvZHVjdC1zbGlkZXJfX2JvdHRvbS1idXR0b25fX3BGdE1zXCIsXCJyZWxhdGVkUHJvZHVjdFNsaWRlckJvdHRvbUJ1dHRvblwiOlwicmVsYXRlZC1wcm9kdWN0cy1zbGlkZXItY29tcG9uZW50X3JlbGF0ZWQtcHJvZHVjdC1zbGlkZXJfX2JvdHRvbS1idXR0b25fX3BGdE1zXCIsXCJyZWxhdGVkLXByb2R1Y3Qtc2xpZGVyX19tb2JpbGUtY29udGFpbmVyXCI6XCJyZWxhdGVkLXByb2R1Y3RzLXNsaWRlci1jb21wb25lbnRfcmVsYXRlZC1wcm9kdWN0LXNsaWRlcl9fbW9iaWxlLWNvbnRhaW5lcl9fTjZsM05cIixcInJlbGF0ZWRQcm9kdWN0U2xpZGVyTW9iaWxlQ29udGFpbmVyXCI6XCJyZWxhdGVkLXByb2R1Y3RzLXNsaWRlci1jb21wb25lbnRfcmVsYXRlZC1wcm9kdWN0LXNsaWRlcl9fbW9iaWxlLWNvbnRhaW5lcl9fTjZsM05cIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU1OTkxMzI3NzI0M1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wic2FsZS1wb2ludFwiOlwic2FsZS1wb2ludC1jb21wb25lbnRfc2FsZS1wb2ludF9fMW5iWU1cIixcInNhbGVQb2ludFwiOlwic2FsZS1wb2ludC1jb21wb25lbnRfc2FsZS1wb2ludF9fMW5iWU1cIixcInNhbGUtcG9pbnRfX2NvbnRlbnRcIjpcInNhbGUtcG9pbnQtY29tcG9uZW50X3NhbGUtcG9pbnRfX2NvbnRlbnRfXzF2eXJ0XCIsXCJzYWxlUG9pbnRDb250ZW50XCI6XCJzYWxlLXBvaW50LWNvbXBvbmVudF9zYWxlLXBvaW50X19jb250ZW50X18xdnlydFwiLFwidWstZ3JpZFwiOlwic2FsZS1wb2ludC1jb21wb25lbnRfdWstZ3JpZF9fR284dDlcIixcInVrR3JpZFwiOlwic2FsZS1wb2ludC1jb21wb25lbnRfdWstZ3JpZF9fR284dDlcIixcInNhbGUtcG9pbnRfX3BhcnRuZXJcIjpcInNhbGUtcG9pbnQtY29tcG9uZW50X3NhbGUtcG9pbnRfX3BhcnRuZXJfXzJlcFpJXCIsXCJzYWxlUG9pbnRQYXJ0bmVyXCI6XCJzYWxlLXBvaW50LWNvbXBvbmVudF9zYWxlLXBvaW50X19wYXJ0bmVyX18yZXBaSVwiLFwic2FsZS1wb2ludF9fcGFydG5lci1pdGVtXCI6XCJzYWxlLXBvaW50LWNvbXBvbmVudF9zYWxlLXBvaW50X19wYXJ0bmVyLWl0ZW1fXzFFRzdkXCIsXCJzYWxlUG9pbnRQYXJ0bmVySXRlbVwiOlwic2FsZS1wb2ludC1jb21wb25lbnRfc2FsZS1wb2ludF9fcGFydG5lci1pdGVtX18xRUc3ZFwiLFwic2FsZS1wb2ludF9fZGVjb3JcIjpcInNhbGUtcG9pbnQtY29tcG9uZW50X3NhbGUtcG9pbnRfX2RlY29yX18xRXhQRVwiLFwic2FsZVBvaW50RGVjb3JcIjpcInNhbGUtcG9pbnQtY29tcG9uZW50X3NhbGUtcG9pbnRfX2RlY29yX18xRXhQRVwiLFwic2FsZS1wb2ludF9fZGVjb3ItLXRvcFwiOlwic2FsZS1wb2ludC1jb21wb25lbnRfc2FsZS1wb2ludF9fZGVjb3ItLXRvcF9fMUxySXlcIixcInNhbGVQb2ludERlY29yVG9wXCI6XCJzYWxlLXBvaW50LWNvbXBvbmVudF9zYWxlLXBvaW50LS1kZWNvci10b3BfXzNYSGk3XCIsXCJzYWxlLXBvaW50LS1kZWNvci10b3BcIjpcInNhbGUtcG9pbnQtY29tcG9uZW50X3NhbGUtcG9pbnQtLWRlY29yLXRvcF9fM1hIaTdcIixcInNhbGUtcG9pbnRfX2RlY29yLS1ib3R0b21cIjpcInNhbGUtcG9pbnQtY29tcG9uZW50X3NhbGUtcG9pbnRfX2RlY29yLS1ib3R0b21fXzJ5T0t5XCIsXCJzYWxlUG9pbnREZWNvckJvdHRvbVwiOlwic2FsZS1wb2ludC1jb21wb25lbnRfc2FsZS1wb2ludC0tZGVjb3ItYm90dG9tX18yR0o0TVwiLFwic2FsZS1wb2ludC0tZGVjb3ItYm90dG9tXCI6XCJzYWxlLXBvaW50LWNvbXBvbmVudF9zYWxlLXBvaW50LS1kZWNvci1ib3R0b21fXzJHSjRNXCJ9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1NTk5MTMyNzY0NzNcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInNvY2lhbC1tZWRpYV9fbmF2XCI6XCJzb2NpYWwtbWVkaWEtY29tcG9uZW50X3NvY2lhbC1tZWRpYV9fbmF2X18yelpwa1wiLFwic29jaWFsTWVkaWFOYXZcIjpcInNvY2lhbC1tZWRpYS1jb21wb25lbnRfc29jaWFsLW1lZGlhX19uYXZfXzJ6WnBrXCIsXCJzb2NpYWwtbWVkaWFfX3NvY2lhbFwiOlwic29jaWFsLW1lZGlhLWNvbXBvbmVudF9zb2NpYWwtbWVkaWFfX3NvY2lhbF9fNlVmSEtcIixcInNvY2lhbE1lZGlhU29jaWFsXCI6XCJzb2NpYWwtbWVkaWEtY29tcG9uZW50X3NvY2lhbC1tZWRpYV9fc29jaWFsX182VWZIS1wifTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTU5OTEzMjc4NDUwXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUYWJDb250ZW50IGZyb20gXCJyZWFjdC1ib290c3RyYXAvVGFiQ29udGVudFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vdGFiLWNvbXBvbmVudC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgSWNvbkNvbXBvbmVudCB9IGZyb20gXCJAYXBwL21vZHVsZXMvY29yZVwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgUGRmSWNvbiBmcm9tIFwiQGFzc2V0cy9pY29ucy9QREYuc3ZnXCI7XG5pbXBvcnQgeyBCMkJEYXRhVGFiIH0gZnJvbSBcIkBhcHAvYXBpXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUIyYkRhdGFUYWJDb21wb25lbnRQcm9wcyB7XG4gIGIyYkRhdGE6IEIyQkRhdGFUYWI7XG59XG5jb25zdCBudW1iZXJPZkxpbmVzID0gMztcblxuY29uc3QgQjJiRGF0YVRhYkNvbXBvbmVudCA9IChwcm9wczogSUIyYkRhdGFUYWJDb21wb25lbnRQcm9wcykgPT4gKFxuICA8VGFiQ29udGVudD5cbiAgICA8aDQ+e3Byb3BzLmIyYkRhdGEudGl0bGV9PC9oND5cbiAgICA8cD57cHJvcHMuYjJiRGF0YS5jb250ZW50fTwvcD5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW2B0YWJzX190YWJsZWBdfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbYHRhYnNfX3RhYmxlLWNvbHVtbmBdfT5cbiAgICAgICAge3Byb3BzLmIyYkRhdGEudGFiSW5mb3JtYXRpb24uc2xpY2UoMCwgbnVtYmVyT2ZMaW5lcykubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbYHRhYnNfX3RhYmxlLWl0ZW1gXX0+XG4gICAgICAgICAgICA8ZGl2PntpdGVtLmluZm9ybWF0aW9ufTwvZGl2PlxuICAgICAgICAgICAgPGRpdj57aXRlbS5kZXRhaWx9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW2B0YWJzX190YWJsZS1jb2x1bW5gXX0+XG4gICAgICAgIHtwcm9wcy5iMmJEYXRhLnRhYkluZm9ybWF0aW9uLnNsaWNlKG51bWJlck9mTGluZXMsIHByb3BzLmIyYkRhdGEudGFiSW5mb3JtYXRpb24ubGVuZ3RoKS5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tgdGFic19fdGFibGUtaXRlbWBdfT5cbiAgICAgICAgICAgIDxkaXY+e2l0ZW0uaW5mb3JtYXRpb259PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PntpdGVtLmRldGFpbH08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8aDQ+e3Byb3BzLmIyYkRhdGEuZG93bmxvYWRUaXRsZX08L2g0PlxuICAgIDxwPntwcm9wcy5iMmJEYXRhLmRvd25sb2FkQ29udGVudH08L3A+XG4gICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzW2B0YWJzX19kb3dubG9hZHNgXX0+XG4gICAgICB7cHJvcHMuYjJiRGF0YS5kb3dubG9hZExpbmtzLm1hcChsaW5rcyA9PiAoXG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8TGluayB0bz1cIiNcIj5cbiAgICAgICAgICAgIDxJY29uQ29tcG9uZW50IHNpemU9XCIxNHB4XCIgaWNvbj17UGRmSWNvbn0gLz5cbiAgICAgICAgICAgIHtsaW5rcy5jb250ZW50fVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gIDwvVGFiQ29udGVudD5cbik7XG5cbmV4cG9ydCB7IEIyYkRhdGFUYWJDb21wb25lbnQgfTtcbiIsImltcG9ydCBUYWJDb250ZW50IGZyb20gXCJyZWFjdC1ib290c3RyYXAvVGFiQ29udGVudFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm9keVRleHRDb21wb25lbnQgfSBmcm9tIFwiQGFwcC9tb2R1bGVzL2JvZHktdGV4dFwiO1xuaW1wb3J0IHsgQm9keVRleHRNb2R1bGUgfSBmcm9tIFwiQGFwcC9hcGlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJR2VuZXJhbFByb2R1Y3RJbmZvcm1hdGlvblRhYkNvbXBvbmVudFByb3BzIHtcbiAgZ2VuZXJhbFByb2R1Y3RJbmZvcm1hdGlvbjogQm9keVRleHRNb2R1bGU7XG59XG5cbmNvbnN0IEdlbmVyYWxQcm9kdWN0SW5mb3JtYXRpb25UYWJDb21wb25lbnQgPSAocHJvcHM6IElHZW5lcmFsUHJvZHVjdEluZm9ybWF0aW9uVGFiQ29tcG9uZW50UHJvcHMpID0+IChcbiAgPFRhYkNvbnRlbnQ+XG4gICAgPEJvZHlUZXh0Q29tcG9uZW50IGJvZHlUZXh0TW9kdWxlPXtwcm9wcy5nZW5lcmFsUHJvZHVjdEluZm9ybWF0aW9ufSAvPlxuICA8L1RhYkNvbnRlbnQ+XG4pO1xuZXhwb3J0IHsgR2VuZXJhbFByb2R1Y3RJbmZvcm1hdGlvblRhYkNvbXBvbmVudCB9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRhYkNvbnRlbnQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9UYWJDb250ZW50XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi90YWItY29tcG9uZW50Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBQcm9kdWN0SW5mb3JtYXRpb24gfSBmcm9tIFwiQGFwcC9hcGlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJUHJvZHVjdEluZm9ybWF0aW9uVGFiQ29tcG9uZW50UHJvcHMge1xuICBwcm9kdWN0SW5mb3JtYXRpb246IFByb2R1Y3RJbmZvcm1hdGlvbltdO1xufVxuY29uc3QgbnVtYmVyT2ZMaW5lcyA9IDU7XG5jb25zdCBQcm9kdWN0SW5mb3JtYXRpb25UYWJDb21wb25lbnQgPSAocHJvcHM6IElQcm9kdWN0SW5mb3JtYXRpb25UYWJDb21wb25lbnRQcm9wcykgPT4gKFxuICA8VGFiQ29udGVudD5cbiAgICB7cHJvcHMucHJvZHVjdEluZm9ybWF0aW9uLm1hcChwcm9kdWN0ID0+IChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPGg0Pntwcm9kdWN0LnRpdGxlfTwvaDQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbYHRhYnNfX3RhYmxlYF19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbYHRhYnNfX3RhYmxlLWNvbHVtbmBdfT5cbiAgICAgICAgICAgIHtwcm9kdWN0LnRhYkluZm9ybWF0aW9uLnNsaWNlKDAsIG51bWJlck9mTGluZXMpLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tgdGFic19fdGFibGUtaXRlbWBdfT5cbiAgICAgICAgICAgICAgICA8ZGl2PntpdGVtLmluZm9ybWF0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+e2l0ZW0uZGV0YWlsfTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tgdGFic19fdGFibGUtY29sdW1uYF19PlxuICAgICAgICAgICAge3Byb2R1Y3QudGFiSW5mb3JtYXRpb24uc2xpY2UobnVtYmVyT2ZMaW5lcywgcHJvZHVjdC50YWJJbmZvcm1hdGlvbi5sZW5ndGgpLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tgdGFic19fdGFibGUtaXRlbWBdfT5cbiAgICAgICAgICAgICAgICA8ZGl2PntpdGVtLmluZm9ybWF0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+e2l0ZW0uZGV0YWlsfTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKSl9XG4gIDwvVGFiQ29udGVudD5cbik7XG5cbmV4cG9ydCB7IFByb2R1Y3RJbmZvcm1hdGlvblRhYkNvbXBvbmVudCB9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRhYkNvbnRlbnQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9UYWJDb250ZW50XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi90YWItY29tcG9uZW50Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBTYWxlUG9pbnRNb2R1bGUgfSBmcm9tIFwiQGFwcC9hcGlcIjtcbmltcG9ydCB7IEdvb2dsZU1hcHNDb21wb25lbnQgfSBmcm9tIFwiQGFwcC9tb2R1bGVzL2NvcmUvZ29vZ2xlLW1hcHNcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTYWxlUG9pbnRUYWJDb21wb25lbnRQcm9wcyB7XG4gIHNhbGVQb2ludHM6IFNhbGVQb2ludE1vZHVsZTtcbn1cblxuY29uc3QgU2FsZVBvaW50VGFiQ29tcG9uZW50ID0gKHByb3BzOiBJU2FsZVBvaW50VGFiQ29tcG9uZW50UHJvcHMpID0+IChcbiAgPFRhYkNvbnRlbnQ+XG4gICAgPGg0Pntwcm9wcy5zYWxlUG9pbnRzLnRpdGxlfTwvaDQ+XG4gICAgPHA+e3Byb3BzLnNhbGVQb2ludHMuY29udGVudH08L3A+XG4gICAgPEdvb2dsZU1hcHNDb21wb25lbnRcbiAgICAgIGdvb2dsZU1hcFVSTD1cImh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9QUl6YVN5RF81SkhWRHR1OW1xYUkzckI0ekhlYlQtS1FTT2I2YXpzJnY9My5leHAmbGlicmFyaWVzPWdlb21ldHJ5LGRyYXdpbmcscGxhY2VzXCJcbiAgICAgIGxvYWRpbmdFbGVtZW50PXs8ZGl2IHN0eWxlPXt7IGhlaWdodDogYDEwMCVgIH19IC8+fVxuICAgICAgY29udGFpbmVyRWxlbWVudD17PGRpdiBzdHlsZT17eyBoZWlnaHQ6IGA0NzJweGAgfX0gLz59XG4gICAgICBtYXBFbGVtZW50PXs8ZGl2IHN0eWxlPXt7IGhlaWdodDogYDEwMCVgIH19IC8+fVxuICAgICAgbWFwVHlwZUNvbnRyb2w9e2ZhbHNlfVxuICAgICAgbWFya2Vycz17cHJvcHMuc2FsZVBvaW50cy5tYXJrZXJzfVxuICAgIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tgdGFic19fbG9nb3NgXX0+XG4gICAgICB7cHJvcHMuc2FsZVBvaW50cy5pbWFnZUxpbmtzLm1hcChpbWFnZSA9PiAoXG4gICAgICAgIDxMaW5rIHRvPXtpbWFnZS51cmx9PlxuICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZS5sb2dvfSBhbHQ9XCJpbWFnZVwiIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICAgIDxwPlxuICAgICAgVmVya29vcHQgdSBUZXJyYVNhbmEgcHJvZHVjdGVuIGVuIHN0YWF0IHV3IGFkcmVzIG5pZXQgdmVybWVsZD8gTmVlbXQgdSBkYW4gY29udGFjdCBtZXQgb25zIG9wPyBEYW4gcGFzc2VuIHdpaiBoZXRcbiAgICAgIHoucy5tLiBhYW4uXG4gICAgPC9wPlxuICA8L1RhYkNvbnRlbnQ+XG4pO1xuXG5leHBvcnQgeyBTYWxlUG9pbnRUYWJDb21wb25lbnQgfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJ0YWJzX19uYXZcIjpcInRhYi1jb21wb25lbnRfdGFic19fbmF2X18xdXlTTFwiLFwidGFic05hdlwiOlwidGFiLWNvbXBvbmVudF90YWJzX19uYXZfXzF1eVNMXCIsXCJ1ay1hY3RpdmVcIjpcInRhYi1jb21wb25lbnRfdWstYWN0aXZlX19RN2VVYVwiLFwidWtBY3RpdmVcIjpcInRhYi1jb21wb25lbnRfdWstYWN0aXZlX19RN2VVYVwiLFwidGFic19fY29udGVudFwiOlwidGFiLWNvbXBvbmVudF90YWJzX19jb250ZW50X191MFBVX1wiLFwidGFic0NvbnRlbnRcIjpcInRhYi1jb21wb25lbnRfdGFic19fY29udGVudF9fdTBQVV9cIixcInRhYnNfX3RhYmxlXCI6XCJ0YWItY29tcG9uZW50X3RhYnNfX3RhYmxlX181cm9YR1wiLFwidGFic1RhYmxlXCI6XCJ0YWItY29tcG9uZW50X3RhYnNfX3RhYmxlX181cm9YR1wiLFwidGFic19fdGFibGUtY29sdW1uXCI6XCJ0YWItY29tcG9uZW50X3RhYnNfX3RhYmxlLWNvbHVtbl9fMjRPMnJcIixcInRhYnNUYWJsZUNvbHVtblwiOlwidGFiLWNvbXBvbmVudF90YWJzX190YWJsZS1jb2x1bW5fXzI0TzJyXCIsXCJ0YWJzX190YWJsZS1pdGVtXCI6XCJ0YWItY29tcG9uZW50X3RhYnNfX3RhYmxlLWl0ZW1fXzFpMW5nXCIsXCJ0YWJzVGFibGVJdGVtXCI6XCJ0YWItY29tcG9uZW50X3RhYnNfX3RhYmxlLWl0ZW1fXzFpMW5nXCIsXCJ0YWJzX19kb3dubG9hZHNcIjpcInRhYi1jb21wb25lbnRfdGFic19fZG93bmxvYWRzX18zTmZ0RFwiLFwidGFic0Rvd25sb2Fkc1wiOlwidGFiLWNvbXBvbmVudF90YWJzX19kb3dubG9hZHNfXzNOZnREXCIsXCJpY29uLXN2Z1wiOlwidGFiLWNvbXBvbmVudF9pY29uLXN2Z19fM1RwbFNcIixcImljb25TdmdcIjpcInRhYi1jb21wb25lbnRfaWNvbi1zdmdfXzNUcGxTXCIsXCJ0YWJzX19sb2dvc1wiOlwidGFiLWNvbXBvbmVudF90YWJzX19sb2dvc19fMUdEWmxcIixcInRhYnNMb2dvc1wiOlwidGFiLWNvbXBvbmVudF90YWJzX19sb2dvc19fMUdEWmxcIixcImFsZ2VtZW5lLXByb2R1Y3QtaW5mb3JtYXRpZVwiOlwidGFiLWNvbXBvbmVudF9hbGdlbWVuZS1wcm9kdWN0LWluZm9ybWF0aWVfX0JBbHlNXCIsXCJhbGdlbWVuZVByb2R1Y3RJbmZvcm1hdGllXCI6XCJ0YWItY29tcG9uZW50X2FsZ2VtZW5lLXByb2R1Y3QtaW5mb3JtYXRpZV9fQkFseU1cIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU1OTkxMzI4MjI1NlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IFwiLi90YWItY29tcG9uZW50Lm1vZHVsZS5zY3NzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYkl0ZW1Qcm9wcyB7XG4gIGNoaWxkcmVuOiBzdHJpbmc7XG4gIG9uS2V5Q2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuY29uc3QgVGFic1RpdGxlQ29tcG9uZW50ID0gKHByb3BzOiBJVGFiSXRlbVByb3BzKSA9PiB7XG4gIGZ1bmN0aW9uIGdldEtleSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgcHJvcHMub25LZXlDaGFuZ2UodmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8TGlua1xuICAgICAgICB0bz1cIiNcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgZ2V0S2V5KHByb3BzLmNoaWxkcmVuKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgPC9MaW5rPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgeyBUYWJzVGl0bGVDb21wb25lbnQgfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRhYnNUaXRsZUNvbXBvbmVudCB9IGZyb20gXCIuL3RhYi10aXRsZS5jb21wb25lbnRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vdGFiLWNvbXBvbmVudC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgVGFic01vZHVsZSB9IGZyb20gXCJAYXBwL2FwaVwiO1xuXG5pbXBvcnQgeyBTYWxlUG9pbnRUYWJDb21wb25lbnQgfSBmcm9tIFwiLi9zYWxlLXBvaW50cy9zYWxlLXBvaW50c1wiO1xuaW1wb3J0IHsgR2VuZXJhbFByb2R1Y3RJbmZvcm1hdGlvblRhYkNvbXBvbmVudCB9IGZyb20gXCIuL2dlbmVyYWwtcHJvZHVjdC1pbmZvcm1hdGlvbi9nZW5lcmFsLXByb2R1Y3QtaW5mb3JtYXRpb24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQcm9kdWN0SW5mb3JtYXRpb25UYWJDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9kdWN0LWluZm9ybWF0aW9uL3Byb2R1Y3QtaW5mb3JtYXRpb24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBCMmJEYXRhVGFiQ29tcG9uZW50IH0gZnJvbSBcIi4vQjJCLWRhdGEvYjJiLWRhdGEuY29tcG9uZW50XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYkNvbXBvbmVudFByb3BzIHtcbiAgdGFiOiBUYWJzTW9kdWxlO1xufVxuXG5jb25zdCBUYWJDb21wb25lbnQgPSAocHJvcHM6IElUYWJDb21wb25lbnRQcm9wcykgPT4ge1xuICBjb25zdCBbdGFiSW5kZXgsIHNldFRhYkluZGV4XSA9IFJlYWN0LnVzZVN0YXRlKDEpO1xuICBjb25zdCBnZW5lcmFsUHJvZHVjdEluZm9ybWF0aW9uID0gMTtcbiAgY29uc3QgcHJvZHVjdEluZm9ybWF0aW9uID0gMjtcbiAgY29uc3Qgc2FsZVBvaW50cyA9IDM7XG4gIGNvbnN0IGIyYkRhdGEgPSA0O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1jb250YWluZXJcIj5cbiAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlc1tgdGFic19fbmF2YF19PlxuICAgICAgICB7cHJvcHMudGFiLnRhYnNUaXRsZS5tYXAodGFiID0+IChcbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8VGFic1RpdGxlQ29tcG9uZW50XG4gICAgICAgICAgICAgIG9uS2V5Q2hhbmdlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGFiSW5kZXgodGFiLnRhYkluZGV4KTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RhYi50aXRsZX1cbiAgICAgICAgICAgIDwvVGFic1RpdGxlQ29tcG9uZW50PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIDx1bCBjbGFzc05hbWU9e2Ake3N0eWxlc1tgdGFic19fY29udGVudGBdfSBgfT5cbiAgICAgICAge3RhYkluZGV4ID09PSBnZW5lcmFsUHJvZHVjdEluZm9ybWF0aW9uID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbYGFsZ2VtZW5lLXByb2R1Y3QtaW5mb3JtYXRpZWBdfT5cbiAgICAgICAgICAgIDxHZW5lcmFsUHJvZHVjdEluZm9ybWF0aW9uVGFiQ29tcG9uZW50IGdlbmVyYWxQcm9kdWN0SW5mb3JtYXRpb249e3Byb3BzLnRhYi5nZW5lcmFsSW5mb3JtYXRpb259IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiB0YWJJbmRleCA9PT0gcHJvZHVjdEluZm9ybWF0aW9uID8gKFxuICAgICAgICAgIDxQcm9kdWN0SW5mb3JtYXRpb25UYWJDb21wb25lbnQgcHJvZHVjdEluZm9ybWF0aW9uPXtwcm9wcy50YWIucHJvZHVjdEluZm9ybWF0aW9ufSAvPlxuICAgICAgICApIDogdGFiSW5kZXggPT09IHNhbGVQb2ludHMgPyAoXG4gICAgICAgICAgPFNhbGVQb2ludFRhYkNvbXBvbmVudCBzYWxlUG9pbnRzPXtwcm9wcy50YWIuc2FsZVBvaW50c30gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICB0YWJJbmRleCA9PT0gYjJiRGF0YSAmJiA8QjJiRGF0YVRhYkNvbXBvbmVudCBiMmJEYXRhPXtwcm9wcy50YWIuYjJiRGF0YX0gLz5cbiAgICAgICAgKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgeyBUYWJDb21wb25lbnQgfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJ0b2dnbGVcIjpcInRvZ2dsZS1jb21wb25lbnRfdG9nZ2xlX18xcGgzX1wiLFwidG9nZ2xlX190aXRsZVwiOlwidG9nZ2xlLWNvbXBvbmVudF90b2dnbGVfX3RpdGxlX18yd3ZxdFwiLFwidG9nZ2xlVGl0bGVcIjpcInRvZ2dsZS1jb21wb25lbnRfdG9nZ2xlX190aXRsZV9fMnd2cXRcIixcInRvZ2dsZV9fYmxvY2tcIjpcInRvZ2dsZS1jb21wb25lbnRfdG9nZ2xlX19ibG9ja19fem82N09cIixcInRvZ2dsZUJsb2NrXCI6XCJ0b2dnbGUtY29tcG9uZW50X3RvZ2dsZV9fYmxvY2tfX3pvNjdPXCIsXCJ0b2dnbGUtLXBhdHRlcm5cIjpcInRvZ2dsZS1jb21wb25lbnRfdG9nZ2xlLS1wYXR0ZXJuX18zZTBLTVwiLFwidG9nZ2xlUGF0dGVyblwiOlwidG9nZ2xlLWNvbXBvbmVudF90b2dnbGUtLXBhdHRlcm5fXzNlMEtNXCIsXCJ0b2dnbGUtLWRlY29yLXRvcFwiOlwidG9nZ2xlLWNvbXBvbmVudF90b2dnbGUtLWRlY29yLXRvcF9fM3BGcmJcIixcInRvZ2dsZURlY29yVG9wXCI6XCJ0b2dnbGUtY29tcG9uZW50X3RvZ2dsZS0tZGVjb3ItdG9wX18zcEZyYlwiLFwidG9nZ2xlLS1kZWNvci1ib3R0b21cIjpcInRvZ2dsZS1jb21wb25lbnRfdG9nZ2xlLS1kZWNvci1ib3R0b21fXzNUMkxlXCIsXCJ0b2dnbGVEZWNvckJvdHRvbVwiOlwidG9nZ2xlLWNvbXBvbmVudF90b2dnbGUtLWRlY29yLWJvdHRvbV9fM1QyTGVcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU1OTkxMzI3ODMxOFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgVG9nZ2xlTW9kdWxlIH0gZnJvbSBcIkBhcHAvYXBpXCI7XG5pbXBvcnQgeyBUb2dnbGVDb21wb25lbnQgfSBmcm9tIFwiLi90b2dnbGUuY29tcG9uZW50XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRvZ2dsZU1vZHVsZVByb3BzIHtcbiAgdG9nZ2xlTW9kdWxlOiBUb2dnbGVNb2R1bGU7XG59XG5cbmNvbnN0IFRvZ2dsZUNvbXBvbmVudE1vZHVsZSA9IChwcm9wczogSVRvZ2dsZU1vZHVsZVByb3BzKSA9PiAoXG4gIDxUb2dnbGVDb21wb25lbnQgY2VudGVyZWQgaXRlbXM9e3Byb3BzLnRvZ2dsZU1vZHVsZS50b2dnbGUuaXRlbXN9IHRpdGxlPXtwcm9wcy50b2dnbGVNb2R1bGUudG9nZ2xlLnRpdGxlfSAvPlxuKTtcblxuZXhwb3J0IHsgVG9nZ2xlQ29tcG9uZW50TW9kdWxlIH07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wid2VsY29tZVwiOlwid2VsY29tZS1jb21wb25lbnRfd2VsY29tZV9fMWlyM2hcIixcIndlbGNvbWVfX2JhY2tncm91bmRcIjpcIndlbGNvbWUtY29tcG9uZW50X3dlbGNvbWVfX2JhY2tncm91bmRfXzJ3MFR0XCIsXCJ3ZWxjb21lQmFja2dyb3VuZFwiOlwid2VsY29tZS1jb21wb25lbnRfd2VsY29tZV9fYmFja2dyb3VuZF9fMncwVHRcIixcIndlbGNvbWVfX2JhY2tncm91bmQtcGF0dGVyblwiOlwid2VsY29tZS1jb21wb25lbnRfd2VsY29tZV9fYmFja2dyb3VuZC1wYXR0ZXJuX183Nlh3SVwiLFwid2VsY29tZUJhY2tncm91bmRQYXR0ZXJuXCI6XCJ3ZWxjb21lLWNvbXBvbmVudF93ZWxjb21lX19iYWNrZ3JvdW5kLXBhdHRlcm5fXzc2WHdJXCIsXCJ3ZWxjb21lX19kZWNvclwiOlwid2VsY29tZS1jb21wb25lbnRfd2VsY29tZV9fZGVjb3JfXzJ4UEtMXCIsXCJ3ZWxjb21lRGVjb3JcIjpcIndlbGNvbWUtY29tcG9uZW50X3dlbGNvbWVfX2RlY29yX18yeFBLTFwiLFwid2VsY29tZV9fY29udGVudFwiOlwid2VsY29tZS1jb21wb25lbnRfd2VsY29tZV9fY29udGVudF9fM3RnX1BcIixcIndlbGNvbWVDb250ZW50XCI6XCJ3ZWxjb21lLWNvbXBvbmVudF93ZWxjb21lX19jb250ZW50X18zdGdfUFwiLFwid2VsY29tZV9fdGV4dFwiOlwid2VsY29tZS1jb21wb25lbnRfd2VsY29tZV9fdGV4dF9fMVRGbThcIixcIndlbGNvbWVUZXh0XCI6XCJ3ZWxjb21lLWNvbXBvbmVudF93ZWxjb21lX190ZXh0X18xVEZtOFwiLFwid2VsY29tZV9fY2FyZC1jb250YWluZXJcIjpcIndlbGNvbWUtY29tcG9uZW50X3dlbGNvbWVfX2NhcmQtY29udGFpbmVyX18xXzJIZFwiLFwid2VsY29tZUNhcmRDb250YWluZXJcIjpcIndlbGNvbWUtY29tcG9uZW50X3dlbGNvbWVfX2NhcmQtY29udGFpbmVyX18xXzJIZFwiLFwid2VsY29tZV9fbWVkaXVtLWNhcmQtY29udGFpbmVyXCI6XCJ3ZWxjb21lLWNvbXBvbmVudF93ZWxjb21lX19tZWRpdW0tY2FyZC1jb250YWluZXJfXzNKWDZqXCIsXCJ3ZWxjb21lTWVkaXVtQ2FyZENvbnRhaW5lclwiOlwid2VsY29tZS1jb21wb25lbnRfd2VsY29tZV9fbWVkaXVtLWNhcmQtY29udGFpbmVyX18zSlg2alwiLFwid2VsY29tZV9fY2FyZFwiOlwid2VsY29tZS1jb21wb25lbnRfd2VsY29tZV9fY2FyZF9fM2hkaG5cIixcIndlbGNvbWVDYXJkXCI6XCJ3ZWxjb21lLWNvbXBvbmVudF93ZWxjb21lX19jYXJkX18zaGRoblwiLFwid2VsY29tZV9fbGlua1wiOlwid2VsY29tZS1jb21wb25lbnRfd2VsY29tZV9fbGlua19fMklPeERcIixcIndlbGNvbWVMaW5rXCI6XCJ3ZWxjb21lLWNvbXBvbmVudF93ZWxjb21lX19saW5rX18ySU94RFwiLFwid2VsY29tZV9fc21hbGwtY2FyZC1jb250YWluZXJcIjpcIndlbGNvbWUtY29tcG9uZW50X3dlbGNvbWVfX3NtYWxsLWNhcmQtY29udGFpbmVyX18xcngyS1wiLFwid2VsY29tZVNtYWxsQ2FyZENvbnRhaW5lclwiOlwid2VsY29tZS1jb21wb25lbnRfd2VsY29tZV9fc21hbGwtY2FyZC1jb250YWluZXJfXzFyeDJLXCIsXCJ3ZWxjb21lX19zbWFsbC1jYXJkXCI6XCJ3ZWxjb21lLWNvbXBvbmVudF93ZWxjb21lX19zbWFsbC1jYXJkX18zblBSbFwiLFwid2VsY29tZVNtYWxsQ2FyZFwiOlwid2VsY29tZS1jb21wb25lbnRfd2VsY29tZV9fc21hbGwtY2FyZF9fM25QUmxcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU1OTkxMzI3NzgyNVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vZ2V0LW1vZHVsZXMtZnJvbS1wYWdlLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBOYXZCYXJDb21wb25lbnQgfSBmcm9tIFwiQGFwcC9tb2R1bGVzL25hdi1iYXJcIjtcbmltcG9ydCB7XG4gIFdvcmRQcmVzc1Bvc3RNb2R1bGUsXG4gIE5hdkJhck1vZHVsZSxcbiAgQ1RBTW9kdWxlLFxuICBJbmZvSGVhZGVyTW9kdWxlLFxuICBXZWxjb21lTW9kdWxlLFxuICBGb290ZXJNb2R1bGUsXG4gIE5vdFlldEltcGxlbWVudGVkLFxuICBJbnN0YWdyYW1XYWxsbE1vZHVsZSxcbiAgQm9keVRleHRFeHBhbmRlZE1vZHVsZSxcbiAgT3VyVGVhbU1vZHVsZSxcbiAgQ29udGFjdE1vZHVsZSxcbiAgU2FsZVBvaW50TW9kdWxlLFxuICBHYWxsZXJ5U2xpZGVyTW9kdWxlLFxuICBCYWNrZ3JvdW5kLFxuICBOZXdzbGV0dGVyTW9kdWxlLFxuICBSZWNpcGVEZXRhaWxNb2R1bGUsXG4gIFRhYnNNb2R1bGUsXG4gIE1vcmVQcm9kdWN0cyxcbiAgUmVsYXRlZExpbmtzTW9kdWxlLFxuICBJdGVtT3ZlcnZpZXdNb2R1bGUsXG4gIEZBUU92ZXJ2aWV3TW9kdWxlLFxuICBQcm9kdWN0T3ZlcnZpZXdTaW1wbGVNb2R1bGUsXG4gIFByb2R1Y3RMaW5lU2luZ2xlTW9kdWxlLFxuICBQcm9kdWN0TGluZU92ZXJ2aWV3TW9kdWxlLFxuICBOZXdzT3ZlcnZpZXdNb2R1bGUsXG4gIFByb2R1Y3REZXRhaWxIZWFkZXIsXG4gIEZlYXR1cmVkSXRlbU1vZHVsZSxcbiAgUmVsYXRlZFByb2R1Y3RzU2xpZGVyLFxuICBOb3RGb3VuZE1vZHVsZSxcbiAgVG9nZ2xlTW9kdWxlXG59IGZyb20gXCJAYXBwL2FwaVwiO1xuaW1wb3J0IHsgQ3RhQ29tcG9uZW50IH0gZnJvbSBcIkBhcHAvbW9kdWxlcy9jdGFcIjtcbmltcG9ydCB7IEluZm9IZWFkZXJDb21wb25lbnQgfSBmcm9tIFwiQGFwcC9tb2R1bGVzL2luZm8taGVhZGVyXCI7XG5pbXBvcnQgeyBCb2R5VGV4dENvbXBvbmVudCB9IGZyb20gXCJAYXBwL21vZHVsZXMvYm9keS10ZXh0XCI7XG5pbXBvcnQgeyBXZWxjb21lQ29tcG9uZW50LCBJbnN0YWdyYW1XYWxsQ29tcG9uZW50IH0gZnJvbSBcIkBhcHAvbW9kdWxlc1wiO1xuaW1wb3J0IHsgRm9vdGVyQ29tcG9uZW50LCBnZW5lcmF0ZUZpbGxlZEZTb2NpYWxNZWRpYUJ1dHRvbnMgfSBmcm9tIFwiQGFwcC9tb2R1bGVzL2Zvb3RlclwiO1xuaW1wb3J0IHsgTm90WWV0SW1wbGVtZW50ZWRDb21wb25lbnQgfSBmcm9tIFwiQGFwcC9tb2R1bGVzL2NvcmUvbm90LXlldC1pbXBsZW1lbnRlZFwiO1xuaW1wb3J0IHsgTmV3c1NpbmdsZUl0ZW1Db21wb25lbnQgfSBmcm9tIFwiQGFwcC9tb2R1bGVzL25ld3Mtc2luZ2xlLWl0ZW1cIjtcbmltcG9ydCB7IE91clRlYW1Db21wb25lbnQgfSBmcm9tIFwiQGFwcC9tb2R1bGVzL291ci10ZWFtXCI7XG5pbXBvcnQgeyBDb250YWN0Q29tcG9uZW50IH0gZnJvbSBcIkBhcHAvbW9kdWxlcy9jb250YWN0XCI7XG5pbXBvcnQgeyBSZWxhdGVkUHJvZHVjdHNTbGlkZXJDb21wb25lbnQgfSBmcm9tIFwiQGFwcC9tb2R1bGVzL3JlbGF0ZWQtcHJvZHVjdHMtc2xpZGVyXCI7XG5pbXBvcnQgeyBTYWxlUG9pbnRDb21wb25lbnQgfSBmcm9tIFwiQGFwcC9tb2R1bGVzL3NhbGUtcG9pbnRcIjtcbmltcG9ydCB7IFByb2R1Y3RPdmVydmlld0NvbnRhaW5lciB9IGZyb20gXCJAYXBwL21vZHVsZXMvcHJvZHVjdC1saW5lLWZpbHRlci9jb250YWluZXJcIjtcbmltcG9ydCB7IFByb2R1Y3RPdmVydmlld1NpbXBsZUNvbnRhaW5lciB9IGZyb20gXCJAYXBwL21vZHVsZXMvcHJvZHVjdC1vdmVydmlldy1zaW1wbGUvY29udGFpbmVyXCI7XG5pbXBvcnQgeyBGYXFPdmVydmlld0NvbXBvbmVudCB9IGZyb20gXCJAYXBwL21vZHVsZXMvZmFxLW92ZXJ2aWV3XCI7XG5pbXBvcnQgeyBOZXdzbGV0dGVyQ29tcG9uZW50IH0gZnJvbSBcIkBhcHAvbW9kdWxlcy9uZXdzbGV0dGVyXCI7XG5pbXBvcnQgeyBSZWNpcGVEZXRhaWwgfSBmcm9tIFwiQGFwcC9tb2R1bGVzL3JlY2lwZS1kZXRhaWxcIjtcbmltcG9ydCB7IFRhYkNvbXBvbmVudCB9IGZyb20gXCJAYXBwL21vZHVsZXMvdGFiL3RhYi5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1vcmVQcm9kdWN0c0NvbXBvbmVudCB9IGZyb20gXCJAYXBwL21vZHVsZXMvbW9yZS1wcm9kdWN0c1wiO1xuaW1wb3J0IHsgUmVsYXRlZExpbmtzQ29tcG9uZW50IH0gZnJvbSBcIkBhcHAvbW9kdWxlcy9yZWxhdGVkLWxpbmtzL3JlbGF0ZWQtbGlua3MuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQcm9kdWN0c0xpbmVPdmVydmlld0NvbXBvbmVudCB9IGZyb20gXCJAYXBwL21vZHVsZXMvcHJvZHVjdC1saW5lLW92ZXJ2aWV3L2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IEl0ZW1PdmVydmlld0NvbnRhaW5lciB9IGZyb20gXCJAYXBwL21vZHVsZXMvaXRlbS1vdmVydmlldy9jb250YWluZXJzXCI7XG5pbXBvcnQgeyBOZXdzT3ZlcnZpZXdDb250YWluZXIgfSBmcm9tIFwiQGFwcC9tb2R1bGVzL25ld3Mtb3ZlcnZpZXcvY29udGFpbmVycy9uZXdzLW92ZXJ2aWV3LmNvbnRhaW5lclwiO1xuaW1wb3J0IHtcbiAgUHJvZHVjdERldGFpbEhlYWRlckNvbXBvbmVudCxcbiAgZ2VuZXJhdGVGaWxsZWRTb2NpYWxNZWRpYUJ1dHRvbnNQcm9kdWN0RGV0YWlsSGVhZGVyTW9kdWxlXG59IGZyb20gXCJAYXBwL21vZHVsZXMvcHJvZHVjdC1kZXRhaWwtaGVhZGVyXCI7XG5pbXBvcnQgeyBOb3RGb3VuZENvbXBvbmVudCB9IGZyb20gXCJAYXBwL21vZHVsZXMvbm90LWZvdW5kXCI7XG5pbXBvcnQgeyBGZWF0dXJlZENvbXBvbmVudCB9IGZyb20gXCJAYXBwL21vZHVsZXMvZmVhdHVyZWQtaXRlbVwiO1xuaW1wb3J0IHt9IGZyb20gXCJAYXBwL21vZHVsZXMvXCI7XG5pbXBvcnQgeyBUb2dnbGVDb21wb25lbnQgfSBmcm9tIFwiQGFwcC9tb2R1bGVzL3RvZ2dsZVwiO1xuaW1wb3J0IHsgVG9nZ2xlQ29tcG9uZW50TW9kdWxlIH0gZnJvbSBcIkBhcHAvbW9kdWxlcy90b2dnbGUvdG9nZ2xlLW1vZHVsZS5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgR2FsbGVyeVNsaWRlckNvbXBvbmVudCB9IGZyb20gXCJAYXBwL21vZHVsZXMvY29yZS9nYWxsZXJ5LXNsaWRlclwiO1xuXG5leHBvcnQgY29uc3QgZ2V0TW9kdWxlID0gKHdvcmRQcmVzc01vZHVsZTogV29yZFByZXNzUG9zdE1vZHVsZSkgPT4ge1xuICBjb25zdCBjb21wb25lbnQgPSBnZXRDb21wb25lbnQod29yZFByZXNzTW9kdWxlKTtcblxuICBjb25zdCBzdHlsZU1haW5Db250YWluZXJNb2R1bGUgPSB7XG4gICAgLi4uZ2V0QmFja2dyb3VuZFN0eWxlUHJvcGVydGllcyh3b3JkUHJlc3NNb2R1bGUuYmFja2dyb3VuZCBhcyBCYWNrZ3JvdW5kKSxcbiAgICBwYWRkaW5nVG9wOiB3b3JkUHJlc3NNb2R1bGUudG9wUGFkZGluZyxcbiAgICBwYWRkaW5nQm90dG9tOiB3b3JkUHJlc3NNb2R1bGUuYm90dG9tUGFkZGluZ1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImNvbnRlbnRDb21wb25lbnRcIl19IHN0eWxlPXtzdHlsZU1haW5Db250YWluZXJNb2R1bGV9PlxuICAgICAge2NvbXBvbmVudH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldENvbXBvbmVudCA9ICh3b3JkUHJlc3NNb2R1bGU6IFdvcmRQcmVzc1Bvc3RNb2R1bGUpID0+IHtcbiAgc3dpdGNoICh3b3JkUHJlc3NNb2R1bGUubmFtZSkge1xuICAgIGNhc2UgXCJOYXZiYXJcIjpcbiAgICAgIHJldHVybiA8TmF2QmFyQ29tcG9uZW50IG5hdkJhck1vZHVsZT17d29yZFByZXNzTW9kdWxlIGFzIE5hdkJhck1vZHVsZX0gLz47XG4gICAgY2FzZSBcIldlbGNvbWVNb2R1bGVcIjpcbiAgICAgIHJldHVybiA8V2VsY29tZUNvbXBvbmVudCBiZ2NvbG9yPVwid2hpdGVcIiB3ZWxjb21lTW9kdWxlPXt3b3JkUHJlc3NNb2R1bGUgYXMgV2VsY29tZU1vZHVsZX0gLz47XG4gICAgY2FzZSBcIkNUQU1vZHVsZVwiOlxuICAgICAgcmV0dXJuIDxDdGFDb21wb25lbnQgY3RhTW9kdWxlPXt3b3JkUHJlc3NNb2R1bGUgYXMgQ1RBTW9kdWxlfSAvPjtcbiAgICBjYXNlIFwiaW5mb0hlYWRlck1vZHVsZVwiOlxuICAgICAgcmV0dXJuIDxJbmZvSGVhZGVyQ29tcG9uZW50IGluZm9IZWFkZXJNb2R1bGU9e3dvcmRQcmVzc01vZHVsZSBhcyBJbmZvSGVhZGVyTW9kdWxlfSAvPjtcbiAgICBjYXNlIFwiYm9keVRleHRNb2R1bGVcIjpcbiAgICAgIHJldHVybiA8Qm9keVRleHRDb21wb25lbnQgYm9keVRleHRNb2R1bGU9e3dvcmRQcmVzc01vZHVsZSBhcyBCb2R5VGV4dEV4cGFuZGVkTW9kdWxlfSAvPjtcbiAgICBjYXNlIFwiTmV3c092ZXJ2aWV3TW9kdWxlXCI6XG4gICAgICByZXR1cm4gPE5ld3NPdmVydmlld0NvbnRhaW5lciBuZXdzT3ZlcnZpZXdNb2R1bGU9e3dvcmRQcmVzc01vZHVsZSBhcyBOZXdzT3ZlcnZpZXdNb2R1bGV9IC8+O1xuICAgIGNhc2UgXCJGb290ZXJNb2R1bGVcIjpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxGb290ZXJDb21wb25lbnRcbiAgICAgICAgICBzb2NpYWxNZWRpYUJ1dHRvbnM9e2dlbmVyYXRlRmlsbGVkRlNvY2lhbE1lZGlhQnV0dG9ucygpfVxuICAgICAgICAgIGZvb3Rlck1vZHVsZT17d29yZFByZXNzTW9kdWxlIGFzIEZvb3Rlck1vZHVsZX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgY2FzZSBcIkluc3RhZ3JhbU1vZHVsZVwiOlxuICAgICAgcmV0dXJuIDxJbnN0YWdyYW1XYWxsQ29tcG9uZW50IGluc3RhZ3JhbVdhbGxNb2R1bGU9e3dvcmRQcmVzc01vZHVsZSBhcyBJbnN0YWdyYW1XYWxsbE1vZHVsZX0gLz47XG4gICAgY2FzZSBcIlByb2R1Y3RMaW5lU3RvcnlPdmVydmlld01vZHVsZVwiOlxuICAgICAgcmV0dXJuIDxQcm9kdWN0c0xpbmVPdmVydmlld0NvbXBvbmVudCBwcm9kdWN0TGluZU92ZXJ2aWV3TW9kdWxlPXt3b3JkUHJlc3NNb2R1bGUgYXMgUHJvZHVjdExpbmVPdmVydmlld01vZHVsZX0gLz47XG4gICAgY2FzZSBcImJvZHlUZXh0RXhwYW5kZWRNb2R1bGVcIjpcbiAgICAgIHJldHVybiA8TmV3c1NpbmdsZUl0ZW1Db21wb25lbnQgYm9keVRleHRFeHBhbmRlZE1vZHVsZT17d29yZFByZXNzTW9kdWxlIGFzIEJvZHlUZXh0RXhwYW5kZWRNb2R1bGV9IC8+O1xuICAgIGNhc2UgXCJPdXJUZWFtQ29tcG9uZW50XCI6XG4gICAgICByZXR1cm4gPE91clRlYW1Db21wb25lbnQgb3VyVGVhbT17d29yZFByZXNzTW9kdWxlIGFzIE91clRlYW1Nb2R1bGV9IC8+O1xuICAgIGNhc2UgXCJDb250YWN0Q29tcG9uZW50XCI6XG4gICAgICByZXR1cm4gPENvbnRhY3RDb21wb25lbnQgY29udGFjdD17d29yZFByZXNzTW9kdWxlIGFzIENvbnRhY3RNb2R1bGV9IC8+O1xuICAgIGNhc2UgXCJSZWxhdGVkTGlua3NNb2R1bGVcIjpcbiAgICAgIHJldHVybiA8UmVsYXRlZExpbmtzQ29tcG9uZW50IHJlbGF0ZWRMaW5rcz17d29yZFByZXNzTW9kdWxlIGFzIFJlbGF0ZWRMaW5rc01vZHVsZX0gLz47XG4gICAgY2FzZSBcIlNhbGVQb2ludENvbXBvbmVudFwiOlxuICAgICAgcmV0dXJuIDxTYWxlUG9pbnRDb21wb25lbnQgc2FsZVBvaW50PXt3b3JkUHJlc3NNb2R1bGUgYXMgU2FsZVBvaW50TW9kdWxlfSAvPjtcbiAgICBjYXNlIFwiVGFic0NvbXBvbmVudFwiOlxuICAgICAgcmV0dXJuIDxUYWJDb21wb25lbnQgdGFiPXt3b3JkUHJlc3NNb2R1bGUgYXMgVGFic01vZHVsZX0gLz47XG4gICAgY2FzZSBcIlByb2R1Y3RMaW5lU2luZ2xlTW9kdWxlXCI6XG4gICAgICByZXR1cm4gPFByb2R1Y3RPdmVydmlld0NvbnRhaW5lciBwcm9kdWN0TGluZT17d29yZFByZXNzTW9kdWxlIGFzIFByb2R1Y3RMaW5lU2luZ2xlTW9kdWxlfSAvPjtcbiAgICBjYXNlIFwiUHJvZHVjdE92ZXJ2aWV3U2ltcGxlTW9kdWxlXCI6XG4gICAgICByZXR1cm4gPFByb2R1Y3RPdmVydmlld1NpbXBsZUNvbnRhaW5lciBwcm9kdWN0T3ZlcnZpZXc9e3dvcmRQcmVzc01vZHVsZSBhcyBQcm9kdWN0T3ZlcnZpZXdTaW1wbGVNb2R1bGV9IC8+O1xuICAgIGNhc2UgXCJGQVFPdmVydmlld01vZHVsZVwiOlxuICAgICAgcmV0dXJuIDxGYXFPdmVydmlld0NvbXBvbmVudCBmYXFPdmVydmlld01vZHVsZT17d29yZFByZXNzTW9kdWxlIGFzIEZBUU92ZXJ2aWV3TW9kdWxlfSAvPjtcbiAgICBjYXNlIFwiUmVjaXBlT3ZlcnZpZXdNb2R1bGVcIjpcbiAgICAgIHJldHVybiA8SXRlbU92ZXJ2aWV3Q29udGFpbmVyIGl0ZW1PdmVydmlld01vZHVsZT17d29yZFByZXNzTW9kdWxlIGFzIEl0ZW1PdmVydmlld01vZHVsZX0gLz47XG4gICAgY2FzZSBcIk5ld3NsZXR0ZXJDb21wb25lbnRcIjpcbiAgICAgIHJldHVybiA8TmV3c2xldHRlckNvbXBvbmVudCBuZXdzbGV0dGVyTW9kdWxlPXt3b3JkUHJlc3NNb2R1bGUgYXMgTmV3c2xldHRlck1vZHVsZX0gLz47XG4gICAgY2FzZSBcIlJlY2lwZURldGFpbE1vZHVsZVwiOlxuICAgICAgcmV0dXJuIDxSZWNpcGVEZXRhaWwgcmVjaXBlRGV0YWlsTW9kdWxlPXt3b3JkUHJlc3NNb2R1bGUgYXMgUmVjaXBlRGV0YWlsTW9kdWxlfSAvPjtcbiAgICBjYXNlIFwiTW9yZVByb2R1Y3RzXCI6XG4gICAgICByZXR1cm4gPE1vcmVQcm9kdWN0c0NvbXBvbmVudCBtb3JlUHJvZHVjdHNNb2R1bGU9e3dvcmRQcmVzc01vZHVsZSBhcyBNb3JlUHJvZHVjdHN9IC8+O1xuICAgIGNhc2UgXCJSZWNpcGVPdmVydmlld01vZHVsZVwiOlxuICAgICAgcmV0dXJuIDxJdGVtT3ZlcnZpZXdDb250YWluZXIgaXRlbU92ZXJ2aWV3TW9kdWxlPXt3b3JkUHJlc3NNb2R1bGUgYXMgSXRlbU92ZXJ2aWV3TW9kdWxlfSAvPjtcbiAgICBjYXNlIFwiUmVsYXRlZFByb2R1Y3RzU2xpZGVyXCI6XG4gICAgICByZXR1cm4gPFJlbGF0ZWRQcm9kdWN0c1NsaWRlckNvbXBvbmVudCByZWxhdGVkUHJvZHVjdHNNb2R1bGU9e3dvcmRQcmVzc01vZHVsZSBhcyBSZWxhdGVkUHJvZHVjdHNTbGlkZXJ9IC8+O1xuICAgIGNhc2UgXCJQcm9kdWN0RGV0YWlsSGVhZGVyXCI6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UHJvZHVjdERldGFpbEhlYWRlckNvbXBvbmVudFxuICAgICAgICAgIHByb2R1Y3REZXRhaWxIZWFkZXJNb2R1bGU9e3dvcmRQcmVzc01vZHVsZSBhcyBQcm9kdWN0RGV0YWlsSGVhZGVyfVxuICAgICAgICAgIHNvY2lhbE1lZGlhQnV0dG9ucz17Z2VuZXJhdGVGaWxsZWRTb2NpYWxNZWRpYUJ1dHRvbnNQcm9kdWN0RGV0YWlsSGVhZGVyTW9kdWxlKCl9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIGNhc2UgXCJOb3RGb3VuZE1vZHVsZVwiOlxuICAgICAgcmV0dXJuIDxOb3RGb3VuZENvbXBvbmVudCBub3RGb3VuZE1vZHVsZT17d29yZFByZXNzTW9kdWxlIGFzIE5vdEZvdW5kTW9kdWxlfSAvPjtcbiAgICBjYXNlIFwiZmVhdHVyZWRJdGVtTW9kdWxlXCI6XG4gICAgICByZXR1cm4gPEZlYXR1cmVkQ29tcG9uZW50IGZlYXR1cmVkTW9kdWxlPXt3b3JkUHJlc3NNb2R1bGUgYXMgRmVhdHVyZWRJdGVtTW9kdWxlfSAvPjtcbiAgICBjYXNlIFwiVG9nZ2xlTW9kdWxlXCI6XG4gICAgICByZXR1cm4gPFRvZ2dsZUNvbXBvbmVudE1vZHVsZSB0b2dnbGVNb2R1bGU9e3dvcmRQcmVzc01vZHVsZSBhcyBUb2dnbGVNb2R1bGV9IC8+O1xuICAgIGNhc2UgXCJub3RZZXRJbXBsZW1lbnRlZFwiOlxuICAgICAgcmV0dXJuIDxOb3RZZXRJbXBsZW1lbnRlZENvbXBvbmVudCBub3RZZXRJbXBsZW1lbnRlZD17d29yZFByZXNzTW9kdWxlIGFzIE5vdFlldEltcGxlbWVudGVkfSAvPjtcbiAgICBjYXNlIFwiZ2FsbGVyeVNsaWRlclwiOlxuICAgICAgcmV0dXJuIDxHYWxsZXJ5U2xpZGVyQ29tcG9uZW50IGdhbGxlcnlTbGlkZXJNb2R1bGU9e3dvcmRQcmVzc01vZHVsZSBhcyBHYWxsZXJ5U2xpZGVyTW9kdWxlfSAvPjtcbiAgICBkZWZhdWx0OlxuICB9XG59O1xuXG5jb25zdCBnZXRCYWNrZ3JvdW5kU3R5bGVQcm9wZXJ0aWVzID0gKGJhY2tncm91bmRNb2R1bGU6IEJhY2tncm91bmQpID0+IHtcbiAgbGV0IGJhY2tncm91bmRQcm9wZXJ0eSA9IG51bGw7XG5cbiAgaWYgKGJhY2tncm91bmRNb2R1bGUpIHtcbiAgICBpZiAoYmFja2dyb3VuZE1vZHVsZS5iYWNrZ3JvdW5kUGF0dGVybikge1xuICAgICAgYmFja2dyb3VuZFByb3BlcnR5ID0ge1xuICAgICAgICBiYWNrZ3JvdW5kOiBgdXJsKCR7YmFja2dyb3VuZE1vZHVsZS5iYWNrZ3JvdW5kUGF0dGVybn0pYCxcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcIjUwJSA1MCVcIixcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogYHJlcGVhdGBcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGJhY2tncm91bmRQcm9wZXJ0eSA9IHtcbiAgICAgICAgYmFja2dyb3VuZDogYmFja2dyb3VuZE1vZHVsZS5iYWNrZ3JvdW5kQ29sb3VyXG4gICAgICB9O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBiYWNrZ3JvdW5kUHJvcGVydHkgPSB7XG4gICAgICBiYWNrZ3JvdW5kOiBcIiNmZmZcIlxuICAgIH07XG4gIH1cblxuICByZXR1cm4gYmFja2dyb3VuZFByb3BlcnR5O1xufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJwYWdpbmF0aW9uXCI6XCJwYWdpbmF0aW9uLWNvbXBvbmVudF9wYWdpbmF0aW9uX18zR3NONFwiLFwicGFnaW5hdGlvbi1saXN0XCI6XCJwYWdpbmF0aW9uLWNvbXBvbmVudF9wYWdpbmF0aW9uLWxpc3RfXzJxYWhaXCIsXCJwYWdpbmF0aW9uTGlzdFwiOlwicGFnaW5hdGlvbi1jb21wb25lbnRfcGFnaW5hdGlvbi1saXN0X18ycWFoWlwiLFwicGFnaW5hdGlvbi1pdGVtXCI6XCJwYWdpbmF0aW9uLWNvbXBvbmVudF9wYWdpbmF0aW9uLWl0ZW1fXzFwU3ZRXCIsXCJwYWdpbmF0aW9uSXRlbVwiOlwicGFnaW5hdGlvbi1jb21wb25lbnRfcGFnaW5hdGlvbi1pdGVtX18xcFN2UVwiLFwicGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50XCI6XCJwYWdpbmF0aW9uLWNvbXBvbmVudF9wYWdpbmF0aW9uLWl0ZW0tLWN1cnJlbnRfXzFxZWppXCIsXCJwYWdpbmF0aW9uSXRlbUN1cnJlbnRcIjpcInBhZ2luYXRpb24tY29tcG9uZW50X3BhZ2luYXRpb24taXRlbS0tY3VycmVudF9fMXFlamlcIixcInBhZ2luYXRpb24tcHJldlwiOlwicGFnaW5hdGlvbi1jb21wb25lbnRfcGFnaW5hdGlvbi1wcmV2X18zVkVVRFwiLFwicGFnaW5hdGlvblByZXZcIjpcInBhZ2luYXRpb24tY29tcG9uZW50X3BhZ2luYXRpb24tcHJldl9fM1ZFVURcIixcInBhZ2luYXRpb24tbmV4dFwiOlwicGFnaW5hdGlvbi1jb21wb25lbnRfcGFnaW5hdGlvbi1uZXh0X18ybXdoUVwiLFwicGFnaW5hdGlvbk5leHRcIjpcInBhZ2luYXRpb24tY29tcG9uZW50X3BhZ2luYXRpb24tbmV4dF9fMm13aFFcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU1OTkxMzI4Mjg4M1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUExQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQWtCQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQWtCQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQTFDQTtBQUFBO0FBQ0E7QUE0REE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBa0JBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBa0JBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBbkNBO0FBQ0E7QUFvREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFBQTs7Ozs7Ozs7Ozs7QUNsSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkE7QUFGQTtBQWlCQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUE1QkE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUE1QkE7QUFBQTtBQW9DQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBNUJBO0FBQUE7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFPQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQWpCQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQWFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBSUE7QUF2QkE7QUFBQTtBQUNBO0FBMEJBOzs7Ozs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBS0E7QUFHQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFTQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBTUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRBO0FBREE7QUFlQTtBQUFBO0FBRUE7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDMUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFDQTs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBbkJBO0FBQUE7QUFzQkE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFuQkE7QUFBQTtBQXNCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFyQkE7QUFBQTtBQTZCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUEzQkE7QUFBQTs7Ozs7Ozs7Ozs7O0FDekVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFGQTtBQWNBO0FBQUE7QUFHQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFRQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBVUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQVNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUFBOzs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQW5DQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQURBO0FBT0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQURBO0FBVUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBekJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFBQTtBQUVBO0FBQUE7QUFGQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQURBO0FBUUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQURBO0FBZEE7QUFGQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQUFBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFiQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBVUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQVlBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUtBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQXZFQTtBQXlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN2TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=