webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"layoutWrapper\">\r\n    <app-navbar class=\"navbarContainer\"></app-navbar>\r\n    <div class=\"bodyContainer\">\r\n      <flash-messages></flash-messages>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.less":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: ComfortaaLight;\n  src: url(" + escape(__webpack_require__("../../../../../src/assets/fonts/Comfortaa-Light.ttf")) + ");\n}\n.layoutWrapper {\n  width: 100%;\n  height: 100%;\n  background-color: #f1ede5;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: 100px auto;\n      grid-template-rows: 100px auto;\n  -ms-grid-columns: auto;\n      grid-template-columns: auto;\n  grid-template-areas: \"navbar\" \"body\";\n}\n.layoutWrapper .navbarContainer {\n  grid-area: navbar;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background-color: #f1ede5;\n}\n.layoutWrapper .bodyContainerr {\n  grid-area: body;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_photography_photography_component__ = __webpack_require__("../../../../../src/app/components/photography/photography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_travel_travel_component__ = __webpack_require__("../../../../../src/app/components/travel/travel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_work_work_component__ = __webpack_require__("../../../../../src/app/components/work/work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/** Sites */














var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'photography', component: __WEBPACK_IMPORTED_MODULE_6__components_photography_photography_component__["a" /* PhotographyComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_7__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'travel', component: __WEBPACK_IMPORTED_MODULE_8__components_travel_travel_component__["a" /* TravelComponent */] },
    { path: 'work', component: __WEBPACK_IMPORTED_MODULE_9__components_work_work_component__["a" /* WorkComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_15__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_photography_photography_component__["a" /* PhotographyComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_travel_travel_component__["a" /* TravelComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_work_work_component__["a" /* WorkComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_profile_profile_component__["a" /* ProfileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages__["FlashMessagesModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_16__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_17__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">About</h2>\r\n<p>Welcome to About</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about-site',
            template: __webpack_require__("../../../../../src/app/components/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/about/about.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Dashboard</h2>\r\n<p>Welcome to your Dashboard</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home-wrapper\">\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\" >Login</h2>\r\n<form class=\"form-signin\" (submit)=\"onLoginSubmit()\">\r\n        <div class=\"form-group\">\r\n          <label for=\"Username\">Username</label>\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Enter Username\" [(ngModel)]=\"username\" name=\"username\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n        <label for=\"Password\">Password</label>\r\n        <input type=\"password\" class=\"form-control\" placeholder=\" Enter Password\" [(ngModel)]=\"password\" name=\"password\">\r\n        </div>\r\n        <div class=\"checkbox\">\r\n          <label>\r\n            <input type=\"checkbox\" value=\"remember-me\"> Remember me\r\n          </label>\r\n        </div>\r\n        <input class=\"btn btn-lg btn-primary\" type=\"submit\" value=\"Login\">\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navBar\">\r\n      <div class=\"navbar-logo-wrapper\">\r\n        <div class=\"navbar-logo\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"  [routerLink]=\"['/']\"></div>\r\n      </div>\r\n\r\n      <div class=\"menuWrapper\">\r\n\r\n        <div class=\"menuEntry\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"  [routerLink]=\"['/about']\">About</div>\r\n        <div class=\"menuEntry\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"  [routerLink]=\"['/travel']\">Travel</div>\r\n        <div class=\"menuEntry\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"  [routerLink]=\"['/photography']\">Photography</div>\r\n        <div class=\"menuEntry\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"  [routerLink]=\"['/work']\">Work</div>\r\n      </div>\r\n\r\n      <div class=\"burgerMenu\">\r\n          <i class=\"material-icons\">menu</i>\r\n      </div>\r\n\r\n\r\n\r\n      <!-- <a class=\"navbar-brand\" href=\"#\">Johannes Beiser</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/']\">Home <span></span></a>\r\n          </li>\r\n        </ul>\r\n        <ul class=\"navbar-nav ml-auto\">\r\n          <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard </a>\r\n          </li>\r\n          <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile </a>\r\n          </li>\r\n          <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/login']\">Login </a>\r\n          </li>\r\n          <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\r\n          </li>\r\n          <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\"><a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\r\n          </li>\r\n        </ul>\r\n      </div> -->\r\n    </nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.less":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: ComfortaaLight;\n  src: url(" + escape(__webpack_require__("../../../../../src/assets/fonts/Comfortaa-Light.ttf")) + ");\n}\n.navBar {\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n}\n.navBar .navbar-logo-wrapper {\n  -ms-flex: 4.5;\n      flex: 4.5;\n  display: -ms-flexbox;\n  display: flex;\n}\n.navBar .navbar-logo-wrapper .navbar-logo {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbAAAABqCAYAAADdnATXAAAdAUlEQVR4nO2dXYwkWXaQv3Mjsn6m/yZ7Zhd7FrxSzyyyqurJ3YKVbBmh7cEIAxbGPQ9YgOBhWrYsy1iC7hd+ZPHQJbGsEAI0jWQGIXiYZr1GRovQtLAXywjJUyvkrSoWdt2zyN6ZXZjp6p7u6q6qzLiHh4jIjMyqrIzfzMju82mie6o68tyfiLznnnvPPUcAzp0/z+defZXDg4MfUcefFs8fAzygjCGCgEj8k6rq8XumMSYDVXw1GYmUonURRDIySrUnFhD/V1YGIILLyHBBp/Pwww+/9zWP/pfPvvwp9YeHfP3b3y4q1jAM45klBOj3eoD+EuiXRDNj8Qlo5k/g1HtnKqO0nDpkjNWlBhn9Xo9Pf+qlv+uR273D3i+GymFxqYZhGM8u4cWLF1leXvrJfr/3pRFjBIicQ4GO98mgPPx31cJGRiK+XhmJ7bWYMoaCTpShCgJvaui+01c2obilahiG8awSfvaHfmjFe3+91ztCksFUAUV+4/zTp/8pVC/3z5zV0FcbO0VKmCUnSxr5qYQObI8MOS5D0T8pyF/P/Ja+c7+kKm8DH5YoxTAM45kkPDo4uIDwwwPlJQKiv+xV/vkLh0eHy77P/zt7Ll5rrICq1qjEnmXkXzjn3vE++lcgnwZwyqcV6WIKzDAMY4BTJ04zmiXo9/9Zp9/7UhBFh5FzRM6V2dIxKiAu+Kq44G8NfwEn+NMYhmE814SkK4ZALwz1c+9/59++/PQp95eWuP/KD9quy8xREjfGr6nq/xGRzwJ0OqFpMMMwjAwjK4Oiur9/5oVPgsDxaGkZp0rovc39Z0zU74HwRET+EPisqnLxpe68q2UYhtEqRhRYGEXRB6+8In/oHAAXnuzTDwLCcl4ORgHUx30s6YJt2uXDE3du9rUyDMNoL6O+GSKuE0VCFCHAk+UVHi8nbvRGY6TKawqmwAzDMDKEqrE39zAuRjz3V8B5j+OYMbCAyMiB5dQjMvVdEZF436mApamqBEGAAD6KStdsqvKSjFVmGIZhDHAvv9yNB26dPkgu4kKiIsfqfVI7irr4p/GigjAk7HSGny+iBE9XXpKEuhr8aBiGYQwJwzBIzBBN/zgVZTGGUj2llrXVP1VWIoSdDqpK1O8PrLnTlKITN60iArih5WgbkYZhGFlCVR2E38i7iNZmJXaa4moaEaGztIT3niiKUO9PVGROim5nKUEQlF+nNAzDeAYZOHEMDoPlpG1KbJ6KK0uqsDqdzkCJRckemYiUUF6gKjx69LjuqhqGYSw06UHmUsxbicWxA9uhuMZJnTwIAsS52LbN522YRWKFCJ88fNRENQ3DMBaWkUgcZZiHElMWY0coXZANggDvPf1+L/dnBVEVHSwbBkFQfwUNwzAWmPDjj/eQilF2Z6fEpIQRk3wQXgACRoNjjeYyKUYA9ICn0z6rqohzuCAg6vdzeTwOEnS208A0DMOYO2G/H9USJX4WSqxEouOUl4HbwCVihQPxweBhRufYXCpyYvs88N9AfwH0YNrNwrHsKYZhGEYFwjpTnDSnxBSkkjGyhLo/AbwyFHnc57KYfEHQx1DEOXDeu4aGYRjPDrWHJ6p/a0rzHE/Lw1EdQsbIv6llGIZh1Eoj8fXqU2K1Ka8GXT7yWlTpfQvgfWIYhrEAVE20PJHKi2WD+Iy1LLk5rdkdQgRUtd/v9/t5P6O+fFzDInEaDcMwngcaU2BQTompQhAIQVircbjU73lXtxJQVa/eR/laqaCutCeHudEbhmGM0niKjiKR7BtSXmlE3ONRfeuSnu++0iWoKi+9bAktDcMwsoxoCmnIRU5h6jjflPJKZQOL7gC42LU3DMOomfGEltKkEpsoWCEIHWEDyit/JVqPrSEahmFkCL33OOd0PKFlE0zUHw5EPFFULKlkXkToAX5RlVedZ/UMwzCeFcKXXupy//4DibVI8wUeV2JxKMYKSY3z0EddkSgbbUBiT0xJlLopMcMwjCzh8vLS0Paa0SA5LKm2c14LgCLikPzpVAQILKGlYRjGyYTe+2w8wJKxcosTlyNNuQaO0yLzRSi+SmsJLQ3DMMYZmAOVcqpUQLVxT/6FRxX295/MuxqGYRitYibaQwS894NsxeM8T0osf+CpOAxJ2mcP9h42WCvDMIzFIxRxnoaNr37fc+7cGUSEx4/3JyoxkUXzswBy913sjOHjeFI5hKoqOugQi8RhGIYxSi0JLaeh6llZWY4HcO8nDsYLp8RERARHzpwqChTYZYzzk7Vo984wDKNNhEdHPZxrbpSMoojV1VXOnz/LRx/tMc38WBQlpgqBkzDoBCGaQ4EJ+L7Sj0wnGYZh1IFrUnklBbCyspw5zzSdBdoTEyGfX3zZKPSGYRjGyTSqKaLIE4YB3e55+v1iXuCLo8Tyns+yY1yGYRh10mg6lSBwnDt3lijyBEFxhVTjcmIz2iN2FMy3gygkh7YtqoZhGEYdNJfQUhXnHGfPnsH78kpI1eFcPPCXjkXRwHlpEVCvURT1e3nqFR8lsKVEwzCMumhQgUG3e6Gm4LyOIJAkC3LxT4vIUr8XBXUHY1LVKIpmk9DSAvoahmGM0ogCU4UwDFheXqpJouC9EATgXHElJiKx5lBtYPVOcsaGqprQ8mLpzxuGYTyLjG9MVR7eRYR+v0+3e54wDGtLj6KqSbqVcp+NK1dLVeZC0LS7qGEYxoIxYoEl7giVBkpV5cyZVTqdTqW9r5OIxWmynFiimgvsP6GoheIwDMPIECYegrUltOz1+nS7F1heXqbX69VRxwHpHli/r7hi6b36oAt7gtj2vwzDMI4TXrz4Ig8ePKwloWUUec6ePcPq6gr9fr+eGp6A90oURbj8nvm9BUxoiSW0NAzDmEy4urosDx5AHetrqsrKyhKdTkiv15wCW1SDRIQiCS3d6LKhJbQ0DMPIMprQEvVlh8koilhZWeHcubONKq8sqrmVWQtUnhL7zORPaCmIaJKpzRVcMzUMw3jWGThxKOXn+KrZmIc11cyARNOpwsHBYamns7G+1gXeA7rAq9s7u3s11s8wZs7G+tot4EbBj+0Bm8Dd7Z3drfprVR8b62s3gFvEdX697fWdJ7UEHExTpHS754mi2RoKi7awViChZRx8KklouXf/QdkiLwOXiBXY5bJCDKNFXCvxmS6xUnhvY33tnWRi1zqSet1KfuxSXFE/V4TOBZUTWgaB4/z5szNXXi0hf4IvVTz5+khRn01o6Qp4rBjGc8IWcKfA/deIJ3HXgMsb62uvb+/s3mukZsZMCO/ff1ApoaWqEgTVYx5WocBeWL3Ex9EkidI7FdUkoWW+ulpCS8M4na3tnd3NAvdvbqyvXQPeIl6VeBd4tZGalWR7Z3dvY33tJrEVdo942dOYQHhwcFBpdq+qdLsv1hZxY1GIE1q6MAhdR1UPp90vIvjI0/d6TCdt7+6e9JE94MfqqKthGDHbO7t3NtbX9oiV16WN9bUbBZVg4yT1aVWd2oqrujQVhiFLS52aqlOeOelPEREnkphiU65WOEMaxnPO9s7uXYZLj2X204yWUFp7iUCv16PbvVBrzMPFwxJaGsYCknr2XW6rQ4cxndLR6KNIeeGFF+h0wrntfY1zyl5YUwktJfcGoiW0NIw2kT1O0h372VgQKiiwiAsXzrK6usLRUW/qPppzDhH5CeAKxV+W9AQw8dle7QD/A/gt8imnRpKoqNd+1I9yn9pWr5bQ0jDaQdbqMuW1oJRWYEHg2N9/Sj/yaA4LTJzj6Ojo553wF4sO4er90LRSBVVE3b8B/a9ANLgPCMIAcYyrtaWo7xtKaBn1qya0TJYw3mTo4pvlHnCb2OPqbtU6j5WblvnmLMpsup2ZQ9sAV7KHtptq6zzKPKUuN4i968bLS93N71RxG088+C4xPKeUZRO4t72ze7us/BlzNfl7q+zh/qb6e2N97TLxO7W1vbN7peBnZ/KM6m77lO/RDYZHILLl3CytwJxzHDw95ODgKN82UGyyhKWdRo6X4ccVh2js7edE0IwGExEXoe1LaCmDF+20jeTBy7ixvrYF3Kw66GVciSet/dda5sb62qzamR7aTv//7gzaOo8yR0gU5VtT6ngZuLWxvnYHuF5k0E4G1Lc4/SD8jeTeG4n8WidbdbKxvnaVoQIrPJg33d8M+/nyxvrapTyKYFbPqMG2T/oevXPK/VfHFVj+4V0Ar0jk0RyfEgV1EtaoQKITf6t6TJu0MqGlcNLDuU08Ox8nnU1dBt7dWF/b3N7ZvVmm2I31tbcYnTVNKvMGw+gd726sr90s42484SVsvJ1J2TNt6zzK3Fhfe5fhYAxwN7nGSfv2GnA1OcQ7NURRxhpISa3Hcd4kHoAuUbEPmyRpT/o+bhW1Rpru7zLM6hnNsu2ZcFowoT3bO7ubJyW0zI2K4oe7U1MRWGpch0hSnZMKaov/hDA+i5k2UG8mM5/UbL+xsb7W3d7ZvV6w5FsMZ2h5ysxaErc21tco+MLPq50w47bOo8yxAeUusSU3aaDYzAwKXeIB7EqO2X128vHG9s7upMgXJ7Xn3in3z5RkkL/GMDTTFvB6QRmz6O8yNP6MZtz2q8TPaY/YgptYPxdFEYCKFB3b41jpznmc5LicdyJ5bLUKSJy1OYqOXRFtiWohpKY+DIN1TrUykpniFYYznjeToKZFSAfXvGXeScpMX7xbyXLgVDJLGlC9nWXiwc2srfMoM+mTwTLY9s7u1FluohxTJ6ouk5dn0jKuMlzWOXUgSeSPt2d8f6Ru3txYX9M8F7GFkr5Hm9s7uyP7LNOYRX+XYRbPaA5tv5HU78q09rgXX7yAqkqudcARYnNGNch3+UBRqdPf/sR9pyjy9Pv98SvS9hxUyz7I19ETTfAT2d7Z3dve2X2d4RmWG4miKMIbRda+k1lTdqaaV5mMtLNgmePtLKNMYHZtnWmZmT1FiJfBcluoycCT3n85sXgnMXi38i61Je15A7iZKadtdIt8b2bY32Vo9BnNse3X81hs7uzZF1L3vgKyBx9HJO8VKMjJ+1YlUFGnoqKiZC8Rf9K1ClraYaWmGgOSrkED3BRkq2QYyjcy/1/ECrtbZkkneZHSpa03px38TF7UQTsrrP2XbSfMqK1zKjM7ELwx8a7J5d1huKeQR0kX8tLb3tnd2t7Z3ZxBoNwt4kE47zXoY+Ko9HnfqVn3dxmaekbzaPvdvJNAF0VRNqGlqip5r2JKTwGmxgzMi6isiIoTFbKXqqDqxq8LIMt1lZ2thWrg81mhIQxfhntO3OYwxFQxxga8qwWskyqeYdmB+erEu2IG7ayykT/WzmsFrbBZtXUeZab9W8UtPi3v0inWSCq7myxVtY10EM573QQuMmz7jY31tTxLW7Pq7zI0/Yzm0fbc36OBT3uS0LKQGZYcycqp8ADYLyL/VIRPAaNBGEVxI3o1Vg4KPwCcra3sIVHSc1MvQVP3UijhunsC2QEvbzy30l5QiRWVzvImvoTJCzrvdsIM2jqPMpP+TS200g4SyQw3LW/SwHeX4QD5Vs0D71xIlqfT5TOIJ0YTLYMZ93cZGntGc2x77u9RtUi+qoj6rCY75fKg/mGl8kaK1jVxouIEcaPxLYTYEvNeURXw/DCwUlfZaSmIPnRBHxdEUy+GS2pQbaYOHBvwyuwPlSEt77QlrmehnZCvrfMoMztAVV2iSweKE/s1cXK4nrknTQa58EkWk5WB9P28ccqy7cz6uwwNP6NWtx0gDIIqCS1T6yJvgiv9fo2hlF4JnFt3Tn43ipRIo1gdJ2eVVT1R5Ak7HQRdr6vQIQpeHxRwfsk+uHs1+ZRsEc9oZjWw32N4jmQSI+2sqdxZtxPytXUeZWYH2vc21tfqKHeiwtze2b27sb52heEh2WvEVku6f3SHZHBq47mvKWwSv1dphJiT6j/T/i5Dg8+o9W13e3sPyye0FAFJwiPluETc+3VVXETwXv9OL/JEUXRyEF8Bp35dkD9bV7lZFHngNcCrm3qNfXBvdC/x2aSIm7LRXpIN/yvEm/jjy8LXiB1sbiUu6+8sylLj2NLWQtR5Es/qM5pGuL//hCAISgsouG32bUE+Ac6XLjCDV/1pVX5Z1f/jQAJGDUkB9FVx/HtV/kgd5Z3A+5Kj/cfuELrosx9ANDmE/My3c45sUkMg2ryz8sSj7A5wPXGoSfcks7Et09l/KyNxnEBq3eexDGba3yVlN/WMWtn2sIrycs4lUejzKjH53z6KPlLVWhRYHB2XLwpyDfQrKN8EDhWWnPDnnQt+SlUaUV4CT4Mg+HbeWPiR99nltEtU2PDPkM6imnZXLkKT7TRGB5E7FY4oVGLMQxQYHJ9Io6iUjWYya9L3ddKybSv6uww1PKPWt72SE4f3PlkCS93Xp1zwPal5sBVAnHxehU2QX1eRryL8BxF5U5xrRHkpICLfC13we2HgmHq5AEbbXdkLacxDqK0KrO52GqMTgla5tm/v7N7e3tl9ldGD9m1/dqnimvQdam1/l6HgM2p926t5IRIrsSjyeB9Nv6IIj/xuHRWfgJDNHdZgIaLseO8/9JEy9fKeQNwWwxeijtP42ReqFfHmYOA12FQ7n3uS/k0H27b2TXrgtUt765hy6irGgvR3GaY+o0Voe2UF5pwjDB1BkPv6sggHdVR+nqiT34pQIslxofh4rTHdXL2UBPQtRbK2nbrJ3p1BxIOiDNpZJXTOWDuNIWn/Xm3jAeOx93GWXpyFSPouzypGq/u7DAWeUavbXkmBqSpxNAmHc0HOy20p8t506e1FnHwggbwtgZDnckGyV+hHUmvcSgL7luEdhl+80ulGmiKJyZYNUFtHO40htxnuT7zV1DLdxvra5TIxKMfq02YnntTNfI/TD93PpL/LMINn1Nq2Q0UFJiJEUUSv1y90qfIv62rAPBDk19Xrx+qVPJdPXP2Thc2s6f5uESW2sb7WTdIaZFN2tG5jNWGknQWDp463s20W5lw54fDqu0UGlmTQu3HajHpjmGPq90vMvLNWcysTWyZnpLLfo4mD+Cz6uwyzeEZtbXtK5SXEIrETM+eevgL6zerVnwMij4B/mDOCFCShtgbeiko2QnOXnEFFkzw+7zGa1qB11lfKWCTqKu28jimwYyTu0qn32GXiQSxvaoz3iK2P05Zn9xjOvN/NG/g2kZ9NW9KqZ5dMjt4hkxcsj6fkDPq7DDN5Ri1tOwDjCS1LKbQSZ3EfKXJL4O0y5c0Vr//Eox9WkqHcRthjmHLkRvKwp2XvTamUqXhWbO/s3t5YX6vSzje2d3bvJErNGGN7Z/dm0r9p4sC3NuKM0Ce9G9lzQBD3/8R3aHtn997G+trrxM8uTS562rOD0YwBd2fwjl4uGDLpEqOORVsUiLDeZH+XYZbPqG1tTwmjKCIIgkFApFnFhRDkDugbwJ+bUZE14L+ByD8q/LGTwk0pdxBeJX4h0oc9bVazRZyepJXLMieRKKCi7ZyW8dVI2N7Z3dxYX9tiNBv0tJl4rgOs2zu7W0mIouyMPY9TzqwOMWcDRxfldpHcVilN9ncZZvmM2tZ2gPD8+XPsP94XyhlfAKVSggBPVOVvov73RPh06cJnhCqfiONnxOnDolpeown9o8SJ5WQQi2185gLx7OU28VJHGcWVdYWtqhDSqAWF6pEm0EvWzie1c4v4OMDdExTX3aTcafWfR1vb0L93gSvJPsNl4j4e39jfJE5vUyhDQLIHchO4mczuu5y8HLQJ7M1Icd2meH44GL5jVVKDNNrfmXpC/J2fWs9ZPqMG217qeyRf+MKf+sEPPvj+1wKRzyHySOFHgW8UKDgVVfwjgKr/CUG/DHKmlIDZ0FflZyXw75RqpT892sk3dnZKVcowDON5ZpjQUgYJLQsltawalFbR/yyOXxSRozobViNPUa4z3McphGhAmrhy0mUYhmEUZ5jQUosntBylQkYW+FVxch2RB+XLbwDV74jys8CvlhdiCsowDKMJKrvRZ6mSGkSEt50Lfhr47fpqVIaBv/uXFfkx4Ctl5QgBpsAMwzCawQVBkJ5YqoFUTPFBO/nkbwI/ruivAL9fT53yE6ctC/47yM+h+jPAd8tJUlCJk1A3tPRqGIbxvBM+/OSRysnpIEsSMRpTt/gArSp/H/RfA38N4S+jbDS1VyQCqCCO/wh8VVzwto+ip76EXsmG1vIKeAWZLmhj7cRMp13gNxB+NPl5bXtn938Wr5VhGMazSfjok8eVElpmEfFkQ04MFVlRFIR76vUfELvMfl7gCyB/BnitnrqiIvL3gG8K8n9F5He8+qiKMRr3Y6poIwgUfK2rtIZhGEZCpYSWWWLlBcMBPF2Z9MRKrMRAHov6QODXEH5NVT8jyKecc05EflK9fl7Vd736i+C6oGdEpAOgqn1EnuD9Q0Q+RuQPQP+pqjyS+OjaUxF24yhPWmmnSsQNLC+I06cMcN6UmGEYRgOE02+ZjnM6JZyUp5IiG/JdlO8igiBfV9EVUUJiWycEHKoiIiiqqHhRIqCvwpHAEWRsrIrbT2mbnUvd4ScINCVmGIZRO6UVmGq8fxSGkjgj5PlUqsjis1FZQ6Vw+fFfx/KKyfj/SXzVvYOWbW+693UqpsQMwzBqpXTwXhHodOKls6KOdCIe55QgiOWottzZXAVJVGZyXq4croLGNgzDMEYoZYENlRf4Mu56CbECc8ctuJZos0GVnI+9CevweC9piUWRKT/DMIwspSywMJSB5VQFVXAuyVaMR7WfKIo5aTCFVHuKgBNFU+VVJwUtMVWle/FCvXUwDMNYcAorMOe0FuWVkh7kja2wCFCc84ikbvjHPgET/mX4r2O/yFVXwQWCah8lyZ5ct+LKUlCJra6utsQuNQzDaAdjCS1xp6/fxYeU0z2w+hkV6lxWgcSKM1YqHk11r4Ckn8vUS9I/0itbiiiK4hGcc6MehFpjYJJpFFhO9D4yDxDDMIwMYwkt5ZShO5pVnaYgeB8ljiAOETcwI733yRmsRNmhECR/p5ZbxqpqRRinHEpMBvkCDMMwjBR39uwZ0GmbTm1RXvXSmlQm6XLiqMEJpHVsST0NwzBahHvxxfNDm0REjweZfTaVV6sQcCGIE9THkTwUFeecjNxkGIZhDAhHElpGUdjpLBGEId5HHB0dNrTXZYygIA4kEC68+CKdpQ6Hh4fy8OGjjhuuH9pMwjAMI8PAiUMVvPerzrmLQZD+ugV7RM8JscGrrKwus7q6gnr/GfX+NYIAVcVrhQN3hmEYzyBpzpMAwAWBHB4d/MKT/Uedw4On2LLVfNjff8Leg0/+SuBcNw1T9fFHe/YwDMMwMoRBEPRB+wxd0a8p+pEIX2RCUsk48WPFkjMyUrf8Yk6BqVfhUEZRdOApUTZzGcM6ZGSU6pvkOMDB04PPPH785G9E/f7fzv6z921wmTQMw2gP4f7+4z0ReQ/44zDwzPs50L8g8Jsgn5AeeI5HZ/GeMD1+pfGRqn7uU79xtAtRT+gHMlTVS0Qc6TevDFQJfYSLNYeinj5IARmgSkiE00T7aHyKOd9+U3LWWlVGZPgSMvDiVFh9sPfwR0Tcxsgtqv9LVb+fS55hGMZzQvjkyf7R8nL4xX5Pf8pH0Zmh+SB/FPirWbMk1jagHlSS+IWFTzXH96qPLaChjOG/FZKhiR1VQoZkZEBikRU0oQSpR0aSwVmcGzmf5oGw0/mVwLn7uQUahmE8B7j33/8DvvWt97/+0cf3/1IQht869XCvZP9ODgcXXC4bHddrkCH1yMguJ5aTQT0yMv2vIo+Wnx78/Iry78KllfxCDcMwngPCR4/2ARBx77722ms//mT/4cbTp09/QJyDwYKfiIi4ZKdJ4mNi3hcbqEdloKgvKgMRcRkZoN4XkwEibigDgBIyiGVA2kXeq0eK7VM5cW6wEAuiqQzF4cL74oLdsN9/30URPfMINQzDGOH/A+8IMwKyrb0VAAAAAElFTkSuQmCC\");\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: bottom;\n  height: 60px;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  margin-bottom: 10px;\n  outline: none;\n  cursor: pointer;\n  width: 245px;\n  margin-left: 20%;\n}\n.navBar .menuWrapper {\n  -ms-flex: 6;\n      flex: 6;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: end;\n      justify-content: flex-end;\n  -ms-flex-align: end;\n      align-items: flex-end;\n  padding-right: 10%;\n}\n.navBar .menuWrapper .menuEntry {\n  margin-bottom: 15px;\n  margin-left: 4%;\n  text-transform: uppercase;\n  color: #2b2a29;\n  font-family: ComfortaaLight;\n  font-size: 18px;\n  cursor: pointer;\n  outline: none;\n}\n.navBar .menuWrapper .menuEntry:after {\n  content: \"\";\n  display: block;\n  margin: 0 auto;\n  width: 0;\n  height: 2px;\n  background-color: #c3a368;\n  transition: opacity 0.3s ease, width 0.3s ease;\n}\n.navBar .menuWrapper .menuEntry:hover:after,\n.navBar .menuWrapper .menuEntry:focus:after,\n.navBar .menuWrapper .menuEntry:active:after,\n.navBar .menuWrapper .menuEntry.active:after {\n  width: 100%;\n}\n.navBar .burgerMenu {\n  display: none;\n}\n@media only screen and (max-width: 768px) {\n  .navBar .navbar-logo-wrapper .navbar-logo {\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .navBar .menuWrapper {\n    display: none;\n  }\n  .navBar .burgerMenu {\n    -ms-flex: 1;\n        flex: 1;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: end;\n        align-items: flex-end;\n    margin-bottom: 17px;\n  }\n  .navBar .burgerMenu i {\n    font-size: 30px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success', timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/photography/photography.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Photography</h2>\r\n<p>Welcome to my Photography</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/photography/photography.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/photography/photography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotographyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhotographyComponent = (function () {
    function PhotographyComponent() {
    }
    PhotographyComponent.prototype.ngOnInit = function () {
    };
    PhotographyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-photography-site',
            template: __webpack_require__("../../../../../src/app/components/photography/photography.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/photography/photography.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], PhotographyComponent);
    return PhotographyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\r\n  <h2 class=\"page-header\">{{user.name}}</h2>\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\">Username : {{user.username}}</li>\r\n    <li class=\"list-group-item\">Email : {{user.email}}</li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n<h2 class=\"page-header\">Register</h2>\r\n<form (submit)=\"onRegisterSubmit()\" >\r\n  <div class=\"form-group\">\r\n    <label for=\"name\">Name</label>\r\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Enter Name\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">Username</label>\r\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" id=\"username\" placeholder=\"Enter Username\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"email\">Email</label>\r\n    <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter Email\">\r\n    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"password\">Password</label>\r\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" id=\"password\" placeholder=\" Enter Password\">\r\n  </div>\r\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n</form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, authService, router, flashMessage) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can now login', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/travel/travel.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Travel</h2>\r\n<p>Welcome to Travels</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/travel/travel.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/travel/travel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TravelComponent = (function () {
    function TravelComponent() {
    }
    TravelComponent.prototype.ngOnInit = function () {
    };
    TravelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-travel-site',
            template: __webpack_require__("../../../../../src/app/components/travel/travel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/travel/travel.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], TravelComponent);
    return TravelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/work/work.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Work</h2>\r\n<p>Welcome to my Work</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/work/work.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/work/work.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkComponent = (function () {
    function WorkComponent() {
    }
    WorkComponent.prototype.ngOnInit = function () {
    };
    WorkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-work-site',
            template: __webpack_require__("../../../../../src/app/components/work/work.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/work/work.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isDev = false; // Change to false before deployment
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/assets/fonts/Comfortaa-Light.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Comfortaa-Light.866333be226453f3a24c.ttf";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map