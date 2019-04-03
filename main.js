(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _downloadpage_downloadpage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./downloadpage/downloadpage.component */ "./src/app/downloadpage/downloadpage.component.ts");





var routes = [
    { path: '', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"] },
    { path: 'downloads/pie', component: _downloadpage_downloadpage_component__WEBPACK_IMPORTED_MODULE_4__["DownloadpageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header-main>\n    <router-outlet></router-outlet>\n</app-header-main>\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'superior';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _header_main_header_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header-main/header-main.component */ "./src/app/header-main/header-main.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _downloadpage_downloadpage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./downloadpage/downloadpage.component */ "./src/app/downloadpage/downloadpage.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_main_header_main_component__WEBPACK_IMPORTED_MODULE_6__["HeaderMainComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__["HomepageComponent"],
                _downloadpage_downloadpage_component__WEBPACK_IMPORTED_MODULE_11__["DownloadpageComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__["DialogOverviewExampleDialog"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]
            ],
            entryComponents: [_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__["HomepageComponent"], _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__["DialogOverviewExampleDialog"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/downloadpage/downloadpage.component.css":
/*!*********************************************************!*\
  !*** ./src/app/downloadpage/downloadpage.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    margin-top: 7px;\r\n    width: -webkit-max-content;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG93bmxvYWRwYWdlL2Rvd25sb2FkcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZG93bmxvYWRwYWdlL2Rvd25sb2FkcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XHJcbiAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/downloadpage/downloadpage.component.html":
/*!**********************************************************!*\
  !*** ./src/app/downloadpage/downloadpage.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" style=\"float: none; margin: 0 auto;\">\n   \n\n    <section *ngFor=\"let device of devices\">\n      <div class=\"col-md-4 ngforwala\">\n        <mat-card class=\"example-card d-block\" [ngStyle]=\"{\n          'width': acchaBro()\n        }\">\n          <mat-list-item>\n            <mat-card-header>\n              <div mat-card-avatar class=\"text-center\">\n                <i class=\"fas fa-mobile-alt fa-3x\"></i>\n              </div>\n              <mat-card-title>{{device.device_name}}</mat-card-title>\n              <mat-card-subtitle>{{device.codename}}</mat-card-subtitle>\n            </mat-card-header>\n          </mat-list-item>\n          <mat-divider></mat-divider>\n          <mat-list-item>\n            <mat-card-content>\n              <i class=\"fas fa-tools ml-2 mt-3\" style=\"font-size:18px\"></i>\n              <span style=\"margin-left: 35px;\">{{device.maintainer_name}}</span>\n            </mat-card-content>\n          </mat-list-item>\n          <mat-divider></mat-divider>\n          <mat-card-actions>\n            <button mat-button color=\"primary\"><a href=\"device.codename\" style=\"text-decoration: none\">Download</a></button>\n            <button mat-button><a href=\"device.xda_thread\" style=\"text-decoration: none; color:black\">XDA Thread</a></button>\n          </mat-card-actions>\n        </mat-card>\n      </div>\n    </section>\n\n\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/downloadpage/downloadpage.component.ts":
/*!********************************************************!*\
  !*** ./src/app/downloadpage/downloadpage.component.ts ***!
  \********************************************************/
/*! exports provided: DownloadpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadpageComponent", function() { return DownloadpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_parse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json-parse.service */ "./src/app/json-parse.service.ts");



var DownloadpageComponent = /** @class */ (function () {
    function DownloadpageComponent(jsun) {
        this.jsun = jsun;
        this.devices = [];
        this.math = Math;
        this.codenames = [];
    }
    DownloadpageComponent.prototype.onResize = function (event) {
        this.innerWidth = window.innerWidth;
        // console.log(this.innerWidth);
        var matCardWid;
        if (this.innerWidth <= 426) {
            console.log("kek");
            matCardWid = this.innerWidth - 60;
            var elements = document.getElementsByClassName('example-card');
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.width = matCardWid + 'px';
            }
        }
    };
    DownloadpageComponent.prototype.acchaBro = function () {
        this.innerWidth = window.innerWidth;
        // console.log(this.innerWidth);
        var matCardWid;
        if (this.innerWidth <= 550) {
            // console.log("kek");
            matCardWid = this.innerWidth - 60;
            var elements = document.getElementsByClassName('example-card');
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.width = matCardWid + 'px';
            }
        }
    };
    DownloadpageComponent.prototype.bytesToSize = function (bytes) {
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes == 0)
            return '0 Byte';
        var i = this.math.floor(this.math.log(bytes) / this.math.log(1024));
        return this.math.round(bytes / this.math.pow(1024, i)) + ' ' + sizes[i];
    };
    DownloadpageComponent.prototype.getDot = function (str) {
        for (var i = 0; i < str.length; i++) {
            if (str[i] == '.') {
                return i;
            }
        }
    };
    DownloadpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jsun.getJSON('https://api.github.com/repos/SuperiorOS/official_devices/contents').subscribe(function (data) {
            console.log(data);
            // @ts-ignore
            for (var i = 0; i < data.length; i++) {
                if (data[i].name == 'devices.json') {
                    _this.jsun.getJSON(data[i].git_url).subscribe(function (data) {
                        // @ts-ignore
                        data = atob(data.content);
                        var mainData;
                        // @ts-ignore
                        mainData = JSON.parse(data);
                        console.log(mainData);
                        for (var j = 0; j < mainData.length; j++) {
                            console.log(mainData[j]);
                            _this.devices.push(mainData[j]);
                            console.log(_this.devices);
                        }
                    });
                }
            }
            // this.jsun.getJSON(data[4].git_url).subscribe(data => {
            //   // // @ts-ignore
            //   // console.log(atob(data.content));
            //   // // @ts-ignore
            //   // var detaa = atob(data.content);
            //   // detaa = JSON.parse(detaa);
            //   // console.log(detaa);
            //   // console.log(detaa.response[0].size);
            //   // console.log(this.bytesToSize(detaa.response[0].size));
            // });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DownloadpageComponent.prototype, "onResize", null);
    DownloadpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-downloadpage',
            template: __webpack_require__(/*! ./downloadpage.component.html */ "./src/app/downloadpage/downloadpage.component.html"),
            styles: [__webpack_require__(/*! ./downloadpage.component.css */ "./src/app/downloadpage/downloadpage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_json_parse_service__WEBPACK_IMPORTED_MODULE_2__["JsonParseService"]])
    ], DownloadpageComponent);
    return DownloadpageComponent;
}());



/***/ }),

/***/ "./src/app/header-main/header-main.component.css":
/*!*******************************************************!*\
  !*** ./src/app/header-main/header-main.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 250px;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\nul {\n  padding: 0;\n  list-style: none;\n}\n\nli {\n  list-style-type: none;\n}\n\n.example-container {\n  height: 500px;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.example-sidenav-content {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-sidenav {\n   -webkit-user-select: none;\n      -moz-user-select: none;\n       -ms-user-select: none;\n           user-select: none;\n}\n\n.full-width {\n  width: 100%;\n  padding-left: 10px;\n}\n\n.menu-button {\n  transition: 300ms ease-in-out;\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n}\n\n.menu-button.rotated {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.submenu {\n  display: block;\n  overflow-y: hidden;\n  transition: -webkit-transform 300ms ease;\n  transition: transform 300ms ease;\n  transition: transform 300ms ease, -webkit-transform 300ms ease;\n  -webkit-transform: scaleY(0);\n          transform: scaleY(0);\n  -webkit-transform-origin: top;\n          transform-origin: top;\n  padding-left: 30px;\n}\n\n.submenu.expanded {\n  -webkit-transform: scaleY(1);\n          transform: scaleY(1);\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyLW1haW4vaGVhZGVyLW1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFVBQVU7QUFDWjs7QUFDQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBSUE7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0FBQ3RDOztBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUNBO0dBQ0cseUJBQWlCO01BQWpCLHNCQUFpQjtPQUFqQixxQkFBaUI7V0FBakIsaUJBQWlCO0FBQ3BCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QiwrQkFBdUI7VUFBdkIsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsaUNBQXlCO1VBQXpCLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsd0NBQWdDO0VBQWhDLGdDQUFnQztFQUFoQyw4REFBZ0M7RUFDaEMsNEJBQW9CO1VBQXBCLG9CQUFvQjtFQUNwQiw2QkFBcUI7VUFBckIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLDRCQUFvQjtVQUFwQixvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXItbWFpbi9oZWFkZXItbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxudWwge1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxubGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cblxuXG4uZXhhbXBsZS1jb250YWluZXIge1xuICBoZWlnaHQ6IDUwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmV4YW1wbGUtc2lkZW5hdiB7XG4gICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5tZW51LWJ1dHRvbiB7XG4gIHRyYW5zaXRpb246IDMwMG1zIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbn1cbi5tZW51LWJ1dHRvbi5yb3RhdGVkIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cbi5zdWJtZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2U7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDApO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cbi5zdWJtZW51LmV4cGFuZGVkIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/header-main/header-main.component.html":
/*!********************************************************!*\
  !*** ./src/app/header-main/header-main.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar>Menu</mat-toolbar>\n    <!-- <mat-nav-list>\n      <a mat-list-item href=\"#\"><mat-icon>home</mat-icon><span style=\"padding-left: 10px\">Home</span></a>\n      <a mat-list-item href=\"#\"><mat-icon>cloud_download</mat-icon> <span style=\"padding-left: 10px\">Downloads</span></a>\n      <a mat-list-item href=\"#\"><mat-icon>info</mat-icon><span style=\"padding-left: 10px\">About</span></a>\n    </mat-nav-list> -->\n    <mat-nav-list>\n      <a routerLink=\"/\" (click)=\"toggal() ? drawer.toggle() : null\" id=\"home\">\n        <mat-list-item class=\"parent\">\n          <span class=\"full-width\">Home</span>\n          <mat-icon mat-list-icon>home</mat-icon>\n        </mat-list-item>\n      </a>\n\n      <a href=\"#\">\n        <mat-list-item class=\"parent\">\n          <span class=\"full-width\">Team</span>\n          <mat-icon mat-list-icon>group</mat-icon>\n        </mat-list-item>\n      </a>\n      \n      <mat-list-item (click)=\"showSubmenu = !showSubmenu\" class=\"parent\">\n        <span class=\"full-width\" *ngIf=\"isExpanded || isShowing\">Downloads</span>\n        <mat-icon mat-list-icon>cloud_download</mat-icon>\n        <mat-icon class=\"menu-button\" [ngClass]=\"{'rotated' : showSubmenu}\" *ngIf=\"isExpanded || isShowing\">expand_more\n        </mat-icon>\n      </mat-list-item>\n      <div class=\"submenu\" [ngClass]=\"{'expanded' : showSubmenu}\" *ngIf=\"isShowing || isExpanded\">\n        <a mat-list-item routerLink=\"/downloads/pie\" (click)=\"toggal() ? drawer.toggle() : null\" id=\"pie\">Pie</a>\n      </div>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>Superior OS</span>\n    </mat-toolbar>\n    <!-- Add Content Here --> \n    <ng-content></ng-content>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/header-main/header-main.component.ts":
/*!******************************************************!*\
  !*** ./src/app/header-main/header-main.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderMainComponent", function() { return HeaderMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var HeaderMainComponent = /** @class */ (function () {
    function HeaderMainComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isExpanded = true;
        this.showSubmenu = false;
        this.isShowing = false;
        this.showSubSubMenu = false;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
    }
    HeaderMainComponent.prototype.toggal = function () {
        if (window.innerWidth <= 769) {
            return true;
        }
        else {
            return false;
        }
    };
    HeaderMainComponent.prototype.ngOnInit = function () {
        this.breakpoint = (window.innerWidth <= 780) ? 1 : 4;
    };
    HeaderMainComponent.prototype.onResize = function (event) {
        this.breakpoint = (event.target.window.innerWidth <= 400) ? 1 : 4;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidenav'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"])
    ], HeaderMainComponent.prototype, "sidenav", void 0);
    HeaderMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header-main',
            template: __webpack_require__(/*! ./header-main.component.html */ "./src/app/header-main/header-main.component.html"),
            styles: [__webpack_require__(/*! ./header-main.component.css */ "./src/app/header-main/header-main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], HeaderMainComponent);
    return HeaderMainComponent;
}());



/***/ }),

/***/ "./src/app/homepage/dialog-overview-example-dialog.html":
/*!**************************************************************!*\
  !*** ./src/app/homepage/dialog-overview-example-dialog.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title> {{ findStatus }}</h1>\r\n<div mat-dialog-content>\r\n    <div class=\"container-fluid mb-2\">\r\n        <div class=\"row\">\r\n            <div class=\"col-3\">\r\n                <div *ngIf=\"loadinAnim\">\r\n                    <mat-progress-spinner [color]=\"color\" [mode]=\"mode\" [diameter]=\"30\">\r\n                    </mat-progress-spinner>\r\n                </div>\r\n            </div>\r\n\r\n            <div [class.col-9]=\"\">\r\n                <div *ngIf=\"!loadin\" [innerHTML]=\"tekst\">\r\n                    <!-- device info will be dispayed here-->\r\n                </div>\r\n                <div *ngIf=\"loadin\">\r\n                     {{ processMessage }}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n</div>\r\n<div mat-dialog-actions class=\"mt-3\">\r\n    <button mat-button class=\"primary\"><a [href]=\"buildURL\" *ngIf=\"!loadin && buildFound\" style=\"text-decoration: none\" >Download</a></button>\r\n    <button mat-button [mat-dialog-close]=\"null\">Cancel</button>\r\n</div>"

/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.mein {\r\n    margin-top: 100px;\r\n}\r\n.logo {\r\n    width: 50%\r\n}\r\n@media only screen \r\nand (min-device-width : 320px) \r\nand (max-device-width : 480px) {\r\n    .mein {\r\n        margin-top: 70px;\r\n    }\r\n    .logo {\r\n        width: 100%;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJO0FBQ0o7QUFFQTs7O0lBR0k7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFdBQVc7SUFDZjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubWVpbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG4ubG9nbyB7XHJcbiAgICB3aWR0aDogNTAlXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBcclxuYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzIwcHgpIFxyXG5hbmQgKG1heC1kZXZpY2Utd2lkdGggOiA0ODBweCkge1xyXG4gICAgLm1laW4ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgICB9XHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row mein\">\n    <div class=\"col-md-12 text-center\">\n      <img src=\"/assets/logo.png\" class=\"logo\" alt=\"LOGO\">\n    </div>\n    <div class=\"col-md-12 text-center\">\n      <section class=\"text-muted superior\">\n        <h1>Experience the authority</h1>\n      </section>\n      <button class=\"w-75\" mat-raised-button (click)=\"openDialog()\">Detect Device</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent, DialogOverviewExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function() { return DialogOverviewExampleDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _json_parse_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../json-parse.service */ "./src/app/json-parse.service.ts");




var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(dialog) {
        this.dialog = dialog;
    }
    HomepageComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '400px'
        });
        console.log("opened");
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], HomepageComponent);
    return HomepageComponent;
}());

var DialogOverviewExampleDialog = /** @class */ (function () {
    function DialogOverviewExampleDialog(dialogRef, jsun) {
        this.dialogRef = dialogRef;
        this.jsun = jsun;
        this.displee = false;
        this.color = 'primary';
        this.mode = 'indeterminate';
        this.math = Math;
        this.buildFound = true;
        this.loadinAnim = true;
        this.loadin = true;
    }
    DialogOverviewExampleDialog.prototype.bytesToSize = function (bytes) {
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes == 0)
            return '0 Byte';
        var i = this.math.floor(this.math.log(bytes) / this.math.log(1024));
        return this.math.round(bytes / this.math.pow(1024, i)) + ' ' + sizes[i];
    };
    DialogOverviewExampleDialog.prototype.kekNibba = function () {
        // this.loadinAnim = true;
        var deviceName = navigator.userAgent.slice(this.getBracketStart(), this.getBracketEnd());
        console.log(navigator.userAgent);
        console.log(deviceName);
        this.deviceNaam = deviceName;
        //this.displee = true;
        //this.findStatus = "Found!";
    };
    DialogOverviewExampleDialog.prototype.getBracketStart = function () {
        var cont = 0;
        var ekBarBracMilGaya = false, ekBarSemMilGaya = false;
        for (var i = 0; i < navigator.userAgent.length; i++) {
            if (navigator.userAgent[i] == '(') {
                if (!ekBarBracMilGaya) {
                    ekBarBracMilGaya = true;
                    for (var j = i; j < navigator.userAgent.length; j++) {
                        if (navigator.userAgent[j] == ';') {
                            if (!ekBarSemMilGaya) {
                                cont++;
                                if (cont == 2) {
                                    ekBarSemMilGaya = true;
                                    console.log("Found ; at", j);
                                    return j + 2;
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    DialogOverviewExampleDialog.prototype.getBracketEnd = function () {
        var ekBarBracMilGaya = false;
        for (var i = 0; i < navigator.userAgent.length; i++) {
            if (navigator.userAgent[i] == ')') {
                if (!ekBarBracMilGaya) {
                    ekBarBracMilGaya = true;
                    return i;
                }
            }
        }
    };
    DialogOverviewExampleDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewExampleDialog.prototype.ngOnInit = function () {
        var _this = this;
        var boxMessage;
        this.findStatus = "Processing...";
        this.processMessage = "Reading device name...";
        this.jsun.getJSON('https://api.github.com/repos/SuperiorOS/official_devices/contents').subscribe(function (data) {
            console.log(data);
            // @ts-ignore
            for (var i = 0; i < data.length; i++) {
                if (data[i].name == 'devices.json') {
                    _this.jsun.getJSON(data[i].git_url).subscribe(function (data) {
                        // @ts-ignore
                        data = atob(data.content);
                        var mainData;
                        // @ts-ignore
                        mainData = JSON.parse(data);
                        console.log(mainData);
                        _this.processMessage = "Searching your deivce from available builds...";
                        for (var j = 0; j < mainData.length; j++) {
                            console.log(mainData[j].assert);
                            for (var asset = 0; asset < mainData[j].assert.length; asset++) {
                                console.log(mainData[j].assert[asset]);
                                console.log(mainData[j].assert.length);
                                for (var k = 0; k < mainData[j].assert.length; k++) {
                                    // console.log(this.asserts[i]);
                                    console.log(navigator.userAgent.includes(mainData[j].assert[k]));
                                    if (navigator.userAgent.includes(mainData[j].assert[k])) {
                                        _this.findStatus = "Found!";
                                        _this.loadinAnim = false;
                                        _this.buildFound = true;
                                        console.log("this", mainData[j]);
                                        boxMessage = "\n                      Name: " + mainData[j].device_name + " <br>\n                      codename: " + mainData[j].codename + " <br>\n                      Build: " + mainData[j].filename + " <br>\n                      Size: " + _this.bytesToSize(mainData[j].size) + " <br>\n                      Maintainer: " + mainData[j].maintainer_name + " <br>\n                      Date: " + mainData[j].date + " <br>\n                      Version: " + mainData[j].version + " <br>\n                      <a href=\"" + mainData[j].xda_thread + "\">XDA Thread</a> <br>\n                    ";
                                        _this.tekst = boxMessage;
                                        _this.loadin = false;
                                        _this.buildURL = mainData[j].url;
                                        break;
                                    }
                                    else {
                                        _this.loadinAnim = false;
                                        _this.processMessage = "Build not found! Try to find your device from downloads section.";
                                    }
                                }
                            }
                        }
                    });
                }
            }
        });
    };
    DialogOverviewExampleDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dialog-overview-example-dialog',
            template: __webpack_require__(/*! ./dialog-overview-example-dialog.html */ "./src/app/homepage/dialog-overview-example-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], _json_parse_service__WEBPACK_IMPORTED_MODULE_3__["JsonParseService"]])
    ], DialogOverviewExampleDialog);
    return DialogOverviewExampleDialog;
}());



/***/ }),

/***/ "./src/app/json-parse.service.ts":
/*!***************************************!*\
  !*** ./src/app/json-parse.service.ts ***!
  \***************************************/
/*! exports provided: JsonParseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonParseService", function() { return JsonParseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var JsonParseService = /** @class */ (function () {
    function JsonParseService(http) {
        this.http = http;
    }
    JsonParseService.prototype.getJSON = function (url) {
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
        }));
    };
    JsonParseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], JsonParseService);
    return JsonParseService;
}());

//https://api.github.com/repos/SuperiorOS/official_devices/contents


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Angular\superior\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map