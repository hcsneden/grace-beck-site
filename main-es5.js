function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./docs/app/app.component.scss":
  /*!*************************************!*\
    !*** ./docs/app/app.component.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function docsAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2NzL2FwcC9hcHAuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./docs/app/app.component.ts":
  /*!***********************************!*\
    !*** ./docs/app/app.component.ts ***!
    \***********************************/

  /*! exports provided: AppComponent */

  /***/
  function docsAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'grace-beck-site';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./docs/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./docs/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./docs/app/app.module.ts":
  /*!********************************!*\
    !*** ./docs/app/app.module.ts ***!
    \********************************/

  /*! exports provided: AppModule */

  /***/
  function docsAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./docs/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var docs_app_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! docs/app/header/header.component */
    "./docs/app/header/header.component.ts");
    /* harmony import */


    var docs_app_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! docs/app/footer/footer.component */
    "./docs/app/footer/footer.component.ts");
    /* harmony import */


    var docs_app_body_body_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! docs/app/body/body.component */
    "./docs/app/body/body.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], docs_app_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], docs_app_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], docs_app_body_body_component__WEBPACK_IMPORTED_MODULE_7__["BodyComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./docs/app/body/body.component.scss":
  /*!*******************************************!*\
    !*** ./docs/app/body/body.component.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function docsAppBodyBodyComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".body {\n  height: 100%;\n  width: 100%;\n}\n\n.col1 {\n  width: 30%;\n  float: left;\n  border-left: 0.5px solid black;\n  border-right: 0.5px solid black;\n}\n\n.col2 {\n  width: 40%;\n  float: left;\n  max-height: 70%;\n}\n\n.col3 {\n  width: calc(30% - 2px);\n  float: right;\n  border-left: 0.5px solid black;\n  border-right: 0.5px solid black;\n  max-height: 70%;\n}\n\n.col4 {\n  width: calc(70% - 2px);\n  float: right;\n  border-top: 0.5px solid black;\n  border-right: 0.5px solid black;\n}\n\n.pic1 {\n  height: 70%;\n  width: 70%;\n  padding-left: 5%;\n  padding-top: 5%;\n  padding-right: 10%;\n}\n\n.pic2 {\n  height: 90%;\n  width: 90%;\n  padding-left: 5%;\n  padding-top: 5%;\n  padding-right: 10%;\n}\n\n.pic3 {\n  height: 80%;\n  width: 80%;\n  padding-left: 5%;\n  padding-top: 5%;\n  padding-right: 5%;\n}\n\n.pic4 {\n  height: 80%;\n  width: 80%;\n  padding-left: 5%;\n  padding-top: 5%;\n  padding-right: 15%;\n}\n\n.pic5 {\n  height: 80%;\n  width: 80%;\n  padding-left: 10%;\n  padding-top: 10%;\n  padding-right: 5%;\n}\n\n.pic6 {\n  height: 52%;\n  width: 52%;\n  padding-left: 5%;\n  padding-top: 5%;\n  padding-right: 15%;\n}\n\n.pic7 {\n  height: 70%;\n  width: 70%;\n  padding-left: 25%;\n  padding-top: 2%;\n}\n\n.pic8 {\n  height: 50%;\n  width: 50%;\n  padding-left: 10%;\n  padding-top: 10%;\n  padding-right: 5%;\n}\n\n.small-box {\n  height: 50px;\n  border-bottom: 0.5px solid black;\n}\n\n.medium-box {\n  height: 85px;\n  border-bottom: 0.5px solid black;\n}\n\n.vertical-box {\n  height: 100%;\n  width: 50px;\n  border: 0.5px solid black;\n}\n\n.pic-container {\n  height: 40%;\n  border-bottom: 0.5px solid black;\n}\n\n.pic-container-no-bottom {\n  height: 40%;\n  border-bottom: none;\n}\n\n.caption1 {\n  padding-bottom: 50%;\n  font-size: 11px;\n  margin-left: 5%;\n  margin-right: 11%;\n  font-weight: 100;\n}\n\n.caption2 {\n  padding-bottom: 20%;\n  font-size: 11px;\n  margin-left: 5%;\n  font-weight: 100;\n}\n\n.caption3 {\n  padding-bottom: 20%;\n  font-size: 11px;\n  margin-left: 5%;\n  font-weight: 100;\n}\n\n.caption4 {\n  padding-bottom: 20%;\n  font-size: 11px;\n  margin-left: 5%;\n  font-weight: 100;\n}\n\n.caption5 {\n  padding-bottom: 30%;\n  font-size: 11px;\n  margin-left: 10%;\n  font-weight: 100;\n}\n\n.caption6 {\n  padding-bottom: 20%;\n  font-size: 11px;\n  margin-left: 5%;\n  font-weight: 100;\n}\n\n.caption7 {\n  padding-bottom: 25%;\n  font-size: 11px;\n  margin-left: 25%;\n  font-weight: 100;\n}\n\n.caption8 {\n  padding-bottom: 30%;\n  font-size: 11px;\n  margin-left: 10%;\n  font-weight: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9oY3NuZWRlbi9ncmFjZWtiZWNrL2RvY3MvYXBwL2JvZHkvYm9keS5jb21wb25lbnQuc2NzcyIsImRvY3MvYXBwL2JvZHkvYm9keS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUNFRjs7QURDQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7QUNFRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNFRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNFRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxnQ0FBQTtBQ0VGOztBRENBO0VBQ0UsWUFBQTtFQUNBLGdDQUFBO0FDRUY7O0FEQ0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsZ0NBQUE7QUNFRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQ0VGOztBRENBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURBQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0dGOztBRERBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSUY7O0FERkE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNLRjs7QURIQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNNRjs7QURKQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ09GOztBRExBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1FGOztBRE5BO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1NGIiwiZmlsZSI6ImRvY3MvYXBwL2JvZHkvYm9keS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5e1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29sMXtcbiAgd2lkdGg6IDMwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1sZWZ0OiAuNXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmlnaHQ6IC41cHggc29saWQgYmxhY2s7XG59XG5cbi5jb2wyeyBcbiAgd2lkdGg6IDQwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1heC1oZWlnaHQ6IDcwJTtcbn1cbi5jb2wze1xuICB3aWR0aDogY2FsYygzMCUgLSAycHgpO1xuICBmbG9hdDogcmlnaHQ7XG4gIGJvcmRlci1sZWZ0OiAuNXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmlnaHQ6IC41cHggc29saWQgYmxhY2s7XG4gIG1heC1oZWlnaHQ6IDcwJTtcbn1cblxuLmNvbDR7XG4gIHdpZHRoOiBjYWxjKDcwJSAtIDJweCk7XG4gIGZsb2F0OiByaWdodDtcbiAgYm9yZGVyLXRvcDogLjVweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJpZ2h0OiAuNXB4IHNvbGlkIGJsYWNrO1xufVxuXG4ucGljMXtcbiAgaGVpZ2h0OiA3MCU7XG4gIHdpZHRoOiA3MCU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAgcGFkZGluZy1yaWdodDogMTAlO1xufVxuXG4ucGljMntcbiAgaGVpZ2h0OiA5MCU7XG4gIHdpZHRoOiA5MCU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAgcGFkZGluZy1yaWdodDogMTAlO1xufVxuXG4ucGljM3tcbiAgaGVpZ2h0OiA4MCU7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAgcGFkZGluZy1yaWdodDogNSU7XG59XG5cbi5waWM0e1xuICBoZWlnaHQ6IDgwJTtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgcGFkZGluZy10b3A6IDUlO1xuICBwYWRkaW5nLXJpZ2h0OiAxNSU7XG59XG5cbi5waWM1e1xuICBoZWlnaHQ6IDgwJTtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xufVxuXG4ucGljNntcbiAgaGVpZ2h0OiA1MiU7XG4gIHdpZHRoOiA1MiU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAgcGFkZGluZy1yaWdodDogMTUlO1xufVxuXG4ucGljN3tcbiAgaGVpZ2h0OiA3MCU7XG4gIHdpZHRoOiA3MCU7XG4gIHBhZGRpbmctbGVmdDogMjUlO1xuICBwYWRkaW5nLXRvcDogMiU7XG59XG5cbi5waWM4e1xuICBoZWlnaHQ6IDUwJTtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xufVxuXG4uc21hbGwtYm94e1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1ib3R0b206IC41cHggc29saWQgYmxhY2s7XG59XG5cbi5tZWRpdW0tYm94e1xuICBoZWlnaHQ6IDg1cHg7XG4gIGJvcmRlci1ib3R0b206IC41cHggc29saWQgYmxhY2s7XG59XG5cbi52ZXJ0aWNhbC1ib3h7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDUwcHg7XG4gIGJvcmRlcjogLjVweCBzb2xpZCBibGFjaztcbn1cblxuLnBpYy1jb250YWluZXJ7XG4gIGhlaWdodDogNDAlO1xuICBib3JkZXItYm90dG9tOiAuNXB4IHNvbGlkIGJsYWNrO1xufVxuXG4ucGljLWNvbnRhaW5lci1uby1ib3R0b217XG4gIGhlaWdodDogNDAlO1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uY2FwdGlvbjF7XG4gIHBhZGRpbmctYm90dG9tOiA1MCU7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tcmlnaHQ6IDExJTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cbi5jYXB0aW9uMntcbiAgcGFkZGluZy1ib3R0b206IDIwJTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG4uY2FwdGlvbjN7XG4gIHBhZGRpbmctYm90dG9tOiAyMCU7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBmb250LXdlaWdodDogMTAwO1xufVxuLmNhcHRpb240e1xuICBwYWRkaW5nLWJvdHRvbTogMjAlO1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cbi5jYXB0aW9uNXtcbiAgcGFkZGluZy1ib3R0b206IDMwJTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBmb250LXdlaWdodDogMTAwO1xufVxuLmNhcHRpb242e1xuICBwYWRkaW5nLWJvdHRvbTogMjAlO1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cbi5jYXB0aW9uN3tcbiAgcGFkZGluZy1ib3R0b206IDI1JTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW4tbGVmdDogMjUlO1xuICBmb250LXdlaWdodDogMTAwO1xufVxuLmNhcHRpb244e1xuICBwYWRkaW5nLWJvdHRvbTogMzAlO1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbiIsIi5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbDEge1xuICB3aWR0aDogMzAlO1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyLWxlZnQ6IDAuNXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmlnaHQ6IDAuNXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uY29sMiB7XG4gIHdpZHRoOiA0MCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXgtaGVpZ2h0OiA3MCU7XG59XG5cbi5jb2wzIHtcbiAgd2lkdGg6IGNhbGMoMzAlIC0gMnB4KTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3JkZXItbGVmdDogMC41cHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yaWdodDogMC41cHggc29saWQgYmxhY2s7XG4gIG1heC1oZWlnaHQ6IDcwJTtcbn1cblxuLmNvbDQge1xuICB3aWR0aDogY2FsYyg3MCUgLSAycHgpO1xuICBmbG9hdDogcmlnaHQ7XG4gIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmlnaHQ6IDAuNXB4IHNvbGlkIGJsYWNrO1xufVxuXG4ucGljMSB7XG4gIGhlaWdodDogNzAlO1xuICB3aWR0aDogNzAlO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBwYWRkaW5nLXRvcDogNSU7XG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcbn1cblxuLnBpYzIge1xuICBoZWlnaHQ6IDkwJTtcbiAgd2lkdGg6IDkwJTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgcGFkZGluZy10b3A6IDUlO1xuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG59XG5cbi5waWMzIHtcbiAgaGVpZ2h0OiA4MCU7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAgcGFkZGluZy1yaWdodDogNSU7XG59XG5cbi5waWM0IHtcbiAgaGVpZ2h0OiA4MCU7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAgcGFkZGluZy1yaWdodDogMTUlO1xufVxuXG4ucGljNSB7XG4gIGhlaWdodDogODAlO1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgcGFkZGluZy10b3A6IDEwJTtcbiAgcGFkZGluZy1yaWdodDogNSU7XG59XG5cbi5waWM2IHtcbiAgaGVpZ2h0OiA1MiU7XG4gIHdpZHRoOiA1MiU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAgcGFkZGluZy1yaWdodDogMTUlO1xufVxuXG4ucGljNyB7XG4gIGhlaWdodDogNzAlO1xuICB3aWR0aDogNzAlO1xuICBwYWRkaW5nLWxlZnQ6IDI1JTtcbiAgcGFkZGluZy10b3A6IDIlO1xufVxuXG4ucGljOCB7XG4gIGhlaWdodDogNTAlO1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgcGFkZGluZy10b3A6IDEwJTtcbiAgcGFkZGluZy1yaWdodDogNSU7XG59XG5cbi5zbWFsbC1ib3gge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkIGJsYWNrO1xufVxuXG4ubWVkaXVtLWJveCB7XG4gIGhlaWdodDogODVweDtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgYmxhY2s7XG59XG5cbi52ZXJ0aWNhbC1ib3gge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xufVxuXG4ucGljLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNDAlO1xuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCBibGFjaztcbn1cblxuLnBpYy1jb250YWluZXItbm8tYm90dG9tIHtcbiAgaGVpZ2h0OiA0MCU7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5jYXB0aW9uMSB7XG4gIHBhZGRpbmctYm90dG9tOiA1MCU7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tcmlnaHQ6IDExJTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLmNhcHRpb24yIHtcbiAgcGFkZGluZy1ib3R0b206IDIwJTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbi5jYXB0aW9uMyB7XG4gIHBhZGRpbmctYm90dG9tOiAyMCU7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG4uY2FwdGlvbjQge1xuICBwYWRkaW5nLWJvdHRvbTogMjAlO1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLmNhcHRpb241IHtcbiAgcGFkZGluZy1ib3R0b206IDMwJTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG4uY2FwdGlvbjYge1xuICBwYWRkaW5nLWJvdHRvbTogMjAlO1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLmNhcHRpb243IHtcbiAgcGFkZGluZy1ib3R0b206IDI1JTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW4tbGVmdDogMjUlO1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG4uY2FwdGlvbjgge1xuICBwYWRkaW5nLWJvdHRvbTogMzAlO1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59Il19 */";
    /***/
  },

  /***/
  "./docs/app/body/body.component.ts":
  /*!*****************************************!*\
    !*** ./docs/app/body/body.component.ts ***!
    \*****************************************/

  /*! exports provided: BodyComponent */

  /***/
  function docsAppBodyBodyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BodyComponent", function () {
      return BodyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BodyComponent = function BodyComponent() {
      _classCallCheck(this, BodyComponent);
    };

    BodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      // tslint:disable-next-line:component-selector
      selector: 'body-component',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./body.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./docs/app/body/body.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./body.component.scss */
      "./docs/app/body/body.component.scss"))["default"]]
    })], BodyComponent);
    /***/
  },

  /***/
  "./docs/app/environments/environment.ts":
  /*!**********************************************!*\
    !*** ./docs/app/environments/environment.ts ***!
    \**********************************************/

  /*! exports provided: environment */

  /***/
  function docsAppEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./docs/app/footer/footer.component.scss":
  /*!***********************************************!*\
    !*** ./docs/app/footer/footer.component.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function docsAppFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footer-container {\n  border-top: 1px solid black;\n  padding: none;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  padding: 15px;\n  font-size: x-small;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9oY3NuZWRlbi9ncmFjZWtiZWNrL2RvY3MvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJkb2NzL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNGLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNDRiIsImZpbGUiOiJkb2NzL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1jb250YWluZXIge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiBub25lO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4O1xuICBmb250LXNpemU6IHgtc21hbGw7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufSIsIi5mb290ZXItY29udGFpbmVyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./docs/app/footer/footer.component.ts":
  /*!*********************************************!*\
    !*** ./docs/app/footer/footer.component.ts ***!
    \*********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function docsAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = function FooterComponent() {
      _classCallCheck(this, FooterComponent);
    };

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      // tslint:disable-next-line:component-selector
      selector: 'footer-component',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./docs/app/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./docs/app/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./docs/app/header/header.component.scss":
  /*!***********************************************!*\
    !*** ./docs/app/header/header.component.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function docsAppHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ul {\n  list-style-type: none;\n  margin: 0;\n  overflow: hidden;\n  background-color: white;\n}\n\nli {\n  float: right;\n  border-right: 1px solid black;\n  padding: 10px;\n  padding-right: 35px;\n  padding-left: 35px;\n  font-size: x-small;\n}\n\nli:first-child {\n  float: left;\n  border-right: none;\n}\n\nli:last-child {\n  border-left: 1px solid black;\n}\n\nli a {\n  display: block;\n  color: black;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\nimg {\n  height: 40px;\n}\n\n.logo {\n  border: none;\n  height: 50px;\n  padding: 0;\n  display: block;\n}\n\n.header-container {\n  border-left: 1px solid black;\n  border-bottom: 1px solid black;\n  padding: none;\n  text-transform: uppercase;\n  text-align: center;\n}\n\n@media screen and (max-width: 620px) {\n  li {\n    padding: 0.5%;\n  }\n\n  img {\n    height: 20px;\n  }\n\n  .logo {\n    height: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9oY3NuZWRlbi9ncmFjZWtiZWNrL2RvY3MvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJkb2NzL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUU7RUFDRSw0QkFBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7QUNDSjs7QURFRTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNDTjs7QURFRTtFQUNJLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDRixrQkFBQTtBQ0NKOztBREVFO0VBQ0U7SUFDRSxhQUFBO0VDQ0o7O0VEQ0U7SUFDRSxZQUFBO0VDRUo7O0VEQUU7SUFDRSxZQUFBO0VDR0o7QUFDRiIsImZpbGUiOiJkb2NzL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgbGkge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBib3JkZXItcmlnaHQ6MXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMzVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xuICB9XG4gIFxuICBsaTpmaXJzdC1jaGlsZCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG5cbiAgbGk6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcbiAgfVxuICBcbiAgbGkgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cbiAgXG4gIC5sb2dvIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5oZWFkZXItY29udGFpbmVyIHtcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gICAgICBwYWRkaW5nOiBub25lO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xuICAgIGxpIHtcbiAgICAgIHBhZGRpbmc6IC41JTtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICB9XG4gICAgLmxvZ297XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICB9IiwidWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmxpIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMzVweDtcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICBmb250LXNpemU6IHgtc21hbGw7XG59XG5cbmxpOmZpcnN0LWNoaWxkIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxubGk6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XG59XG5cbmxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5sb2dvIHtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xuICBsaSB7XG4gICAgcGFkZGluZzogMC41JTtcbiAgfVxuXG4gIGltZyB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG5cbiAgLmxvZ28ge1xuICAgIGhlaWdodDogMzBweDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./docs/app/header/header.component.ts":
  /*!*********************************************!*\
    !*** ./docs/app/header/header.component.ts ***!
    \*********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function docsAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent = function HeaderComponent() {
      _classCallCheck(this, HeaderComponent);
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      // tslint:disable-next-line:component-selector
      selector: 'header-component',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./docs/app/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./docs/app/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./docs/main.ts":
  /*!**********************!*\
    !*** ./docs/main.ts ***!
    \**********************/

  /*! no exports provided */

  /***/
  function docsMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./docs/app/app.module.ts");
    /* harmony import */


    var _app_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/environments/environment */
    "./docs/app/environments/environment.ts");

    if (_app_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./docs/app/app.component.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./docs/app/app.component.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsDocsAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header-component></header-component>\n<body-component></body-component>\n<footer-component></footer-component>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./docs/app/body/body.component.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./docs/app/body/body.component.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsDocsAppBodyBodyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='body'>\n    <div class='col1'>\n        <div class='small-box'></div>\n        <div class='pic-container'>\n            <a href=\"http://gracebeck.co/used\">\n            <img class='pic1' src='../assets/img/image1.jpeg'>\n            </a>\n            <div class='caption1'>Used: Solo Gallery Show Minneapolis, MN</div>\n        </div>\n        <div class='pic-container'>\n            <a href=\"http://gracebeck.co/new-zealand-australia\">\n            <img class='pic5' src='../assets/img/image5.jpeg'>\n            </a>\n            <div class='caption5'>New Zealand</div>\n        </div>\n        <div class='small-box'></div>\n        <div class='pic-container-no-bottom'>\n            <a href=\"http://gracebeck.co/nourished\">\n            <img class='pic8' src='../assets/img/image8.jpeg'>\n            </a>\n            <div class='caption8'>Nourished</div>\n        </div>\n    </div>\n    <div class='square'>\n        <div class='col2'>\n            <div class='pic-container'>\n                <a href=\"http://gracebeck.co/jonxhavner\">\n                <img class='pic2' src='../assets/img/image2.jpeg'>\n                </a>\n                <div class='caption2'>Havner x GB Styling</div>\n            </div>\n            <div class='pic-container-no-bottom'>\n                <a href=\"http://gracebeck.co/richard\">\n                <img class='pic4' src='../assets/img/image4.jpeg'>\n                </a>\n                <div class='caption4'>Richard in the Spring </div>\n            </div>\n        </div>\n        <div class='col3'>\n            <div class='medium-box'></div>\n            <div class='small-box'></div>\n            <div class='pic-container'>\n                <a href=\"http://gracebeck.co/poorwill\">\n                <img class='pic3' src='../assets/img/image3.jpeg'>\n                </a>\n                <div class='caption3'>Poorwill</div>\n            </div>\n            <div class='small-box'></div>\n            <div class='pic-container-no-bottom'>\n                <a href=\"http://gracebeck.co/thedaily\">\n                <img class='pic6' src='../assets/img/image6.jpeg'>\n                </a>\n                <div class='caption6'></div>\n            </div>\n        </div>\n    </div>\n    <div class='col4'>\n        <div class='pic-container'>\n            <a href=\"http://gracebeck.co/anna-lucy\">\n            <img class='pic7' src='../../assets/img/image7.jpeg'>\n            </a>\n            <div class='caption7'>L+A</div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./docs/app/footer/footer.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./docs/app/footer/footer.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsDocsAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='footer-container'>All content Grace K Beck 2019</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./docs/app/header/header.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./docs/app/header/header.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsDocsAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header-container\">\n    <ul>\n        <li class=\"logo\">\n            <a href=\"default.asp\">\n                <img src=\"../assets/img/logo.PNG\">\n            </a>\n        </li>\n        <li><a href=\"http://gracebeck.co/contact\">Contact</a></li>\n        <li><a href=\"http://gracebeck.co/about\">About</a></li>\n        <li>\n            <div class=\"dropdown\">\n                <a class=\"dropdown-toggle\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    Work\n                </a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                  <a class=\"dropdown-item\" href=\"http://gracebeck.co/\">Action</a>\n                  <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                  <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                </div>\n            </div>\n        </li>\n    </ul>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  0:
  /*!****************************!*\
    !*** multi ./docs/main.ts ***!
    \****************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/travis/build/hcsneden/gracekbeck/docs/main.ts */
    "./docs/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map