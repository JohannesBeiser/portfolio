webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"layoutWrapper\">\r\n    <app-navbar #navBarComp class=\"navbarContainer\" id=\"navbarContainer\"></app-navbar>\r\n    <div class=\"bodyContainer\">\r\n      <flash-messages></flash-messages>\r\n      <router-outlet (onHomeSite)=\"navBarComp.hideMenuBackground()\"></router-outlet>\r\n    </div>\r\n    <app-modal></app-modal>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.less":
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: ComfortaaLight;\n  src: url('Comfortaa-Light.866333be226453f3a24c.ttf');\n}\n.defaultTextTransition {\n  -webkit-transition: color 200ms ease-in-out;\n  transition: color 200ms ease-in-out;\n}\n.quickAnimation {\n  -webkit-animation-duration: 300ms;\n  animation-duration: 300ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.animated-300ms {\n  -webkit-animation-duration: 300ms;\n  animation-duration: 300ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.animationFix {\n  -webkit-backface-visibility: hidden;\n  -webkit-transform: translateZ(0) scale(1, 1);\n  transform: translateZ(0);\n}\n.duration-100ms {\n  -webkit-animation-duration: 100ms;\n  animation-duration: 100ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-200ms {\n  -webkit-animation-duration: 200ms;\n  animation-duration: 200ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-300ms {\n  -webkit-animation-duration: 300ms;\n  animation-duration: 300ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-400ms {\n  -webkit-animation-duration: 400ms;\n  animation-duration: 400ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-500ms {\n  -webkit-animation-duration: 500ms;\n  animation-duration: 500ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-600ms {\n  -webkit-animation-duration: 600ms;\n  animation-duration: 600ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-700ms {\n  -webkit-animation-duration: 700ms;\n  animation-duration: 700ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-800ms {\n  -webkit-animation-duration: 800ms;\n  animation-duration: 800ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-900ms {\n  -webkit-animation-duration: 900ms;\n  animation-duration: 900ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.delay-100ms {\n  -webkit-animation-delay: 100ms;\n  animation-delay: 100ms;\n}\n.delay-200ms {\n  -webkit-animation-delay: 200ms;\n  animation-delay: 200ms;\n}\n.delay-300ms {\n  -webkit-animation-delay: 300ms;\n  animation-delay: 300ms;\n}\n.delay-400ms {\n  -webkit-animation-delay: 400ms;\n  animation-delay: 400ms;\n}\n.delay-500ms {\n  -webkit-animation-delay: 500ms;\n  animation-delay: 500ms;\n}\n.delay-600ms {\n  -webkit-animation-delay: 600ms;\n  animation-delay: 600ms;\n}\n.delay-700ms {\n  -webkit-animation-delay: 700ms;\n  animation-delay: 700ms;\n}\n.delay-800ms {\n  -webkit-animation-delay: 800ms;\n  animation-delay: 800ms;\n}\n.delay-900ms {\n  -webkit-animation-delay: 900ms;\n  animation-delay: 900ms;\n}\n.delay-1000ms {\n  -webkit-animation-delay: 1000ms;\n  animation-delay: 1000ms;\n}\n.delay-1100ms {\n  -webkit-animation-delay: 1100ms;\n  animation-delay: 1100ms;\n}\n.delay-1200ms {\n  -webkit-animation-delay: 1200ms;\n  animation-delay: 1200ms;\n}\n.delay-1300ms {\n  -webkit-animation-delay: 1300ms;\n  animation-delay: 1300ms;\n}\n.delay-1400ms {\n  -webkit-animation-delay: 1400ms;\n  animation-delay: 1400ms;\n}\n.delay-1500ms {\n  -webkit-animation-delay: 1500ms;\n  animation-delay: 1500ms;\n}\n.delay-1600ms {\n  -webkit-animation-delay: 1600ms;\n  animation-delay: 1600ms;\n}\n.delay-1700ms {\n  -webkit-animation-delay: 1700ms;\n  animation-delay: 1700ms;\n}\n.layoutWrapper {\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: 100px auto;\n      grid-template-rows: 100px auto;\n  -ms-grid-columns: auto;\n      grid-template-columns: auto;\n      grid-template-areas: \"navbar\" \"body\";\n}\n.layoutWrapper .navbarContainer {\n  -ms-grid-row: 1;\n  -ms-grid-column: 1;\n  grid-area: navbar;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  -webkit-transition: top 200ms;\n  transition: top 200ms;\n}\n.layoutWrapper .bodyContainer {\n  -ms-grid-row: 2;\n  -ms-grid-column: 1;\n  grid-area: body;\n  overflow: hidden;\n}\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.menuHiding = false; // set to true if menu should hide when scrolling down
    }
    AppComponent.prototype.ngOnInit = function () {
        if (this.menuHiding) {
            var prevScrollpos = window.pageYOffset;
            window.onscroll = function () {
                var currentScrollPos = window.pageYOffset;
                if (prevScrollpos > currentScrollPos) {
                    document.getElementById("navbarContainer").style.top = "0";
                }
                else {
                    document.getElementById("navbarContainer").style.top = "-100px";
                }
                prevScrollpos = currentScrollPos;
            };
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
/** Sites */
var photography_component_1 = __webpack_require__("./src/app/components/photography/photography.component.ts");
var about_component_1 = __webpack_require__("./src/app/components/about/about.component.ts");
var travel_component_1 = __webpack_require__("./src/app/components/travel/travel.component.ts");
var work_component_1 = __webpack_require__("./src/app/components/work/work.component.ts");
var modal_component_1 = __webpack_require__("./src/app/components/modal/modal.component.ts");
// Page Components
var navbar_component_1 = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
var login_component_1 = __webpack_require__("./src/app/components/login/login.component.ts");
var register_component_1 = __webpack_require__("./src/app/components/register/register.component.ts");
var home_component_1 = __webpack_require__("./src/app/components/home/home.component.ts");
var dashboard_component_1 = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
var profile_component_1 = __webpack_require__("./src/app/components/profile/profile.component.ts");
//Sub-Components
var article_detail_view_component_1 = __webpack_require__("./src/app/components/travel/article-detail-view/article-detail-view.component.ts");
//Web Components
var modal_view_component_1 = __webpack_require__("./src/app/components/modal-view/modal-view.component.ts");
// Services
var image_upload_service_1 = __webpack_require__("./src/app/services/image-upload.service.ts");
var articles_service_1 = __webpack_require__("./src/app/services/articles.service.ts");
var comp_communication_service_1 = __webpack_require__("./src/app/services/comp-communication.service.ts");
var validate_service_1 = __webpack_require__("./src/app/services/validate.service.ts");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var modal_service_1 = __webpack_require__("./src/app/services/modal.service.ts");
var angular2_flash_messages_1 = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
var auth_guard_1 = __webpack_require__("./src/app/guards/auth.guard.ts");
var validation_1 = __webpack_require__("./src/app/helperClasses/validation.ts");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'photography', component: photography_component_1.PhotographyComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'travel', component: travel_component_1.TravelComponent },
    { path: 'work', component: work_component_1.WorkComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'profile', component: profile_component_1.ProfileComponent, canActivate: [auth_guard_1.AuthGuard] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                photography_component_1.PhotographyComponent,
                about_component_1.AboutComponent,
                travel_component_1.TravelComponent,
                work_component_1.WorkComponent,
                modal_component_1.ModalComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                home_component_1.HomeComponent,
                dashboard_component_1.DashboardComponent,
                profile_component_1.ProfileComponent,
                article_detail_view_component_1.ArticleDetailViewComponent,
                modal_view_component_1.ModalViewComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(appRoutes),
                angular2_flash_messages_1.FlashMessagesModule.forRoot()
            ],
            providers: [validate_service_1.ValidateService, auth_service_1.AuthService, auth_guard_1.AuthGuard, modal_service_1.ModalService, comp_communication_service_1.CompCommunicationService, articles_service_1.ArticlesService, image_upload_service_1.ImageUploadService, validation_1.DateHelper],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"aboutWrapper\">\r\n\r\n    <div class=\"contentSectionWrapper\">\r\n        <div class=\"profileImage animated slideInLeft delay-500ms duration-500ms\"></div>\r\n        <div class=\"contentSection \">\r\n            <div class=\"sectionItem aboutSection animated fadeIn delay-1100ms\">\r\n                <div class=\"sectionHeader\"> <i class=\"material-icons\">person</i>About me</div>\r\n                <div class=\"sectionContent\">\r\n                    <p>\r\n                        I love everything that has to do with the outdoors.\r\n                        Basically skiing and hiking. <br>\r\n                        Also into Thru-hiking & Photography.\r\n                    </p>\r\n                    <p>\r\n                        My friends would probably say I'm a\r\n                        very open minded kind of person and\r\n                        really not complicated.\r\n                        Always open for new things to do and\r\n                        learn. And once I've found the\r\n                        motivation for it, I'm committed 110%.\r\n                    </p>\r\n                    <p>\r\n                       Since I discovered Web Development for me, I fell in love with it.\r\n                       To being able to create something that looks and feels exactly as you want it.\r\n                       To create a intuitive and user friendly Web Application that is easy to understand for everyone. \r\n                       All that can be accomplished in so many different kinds of ways. It never gets boring in the fast changing world of Javascript!                        \r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"sectionItem experienceSection animated fadeIn delay-700ms\">\r\n                <div class=\"sectionHeader\"> <i class=\"material-icons\">work</i>Experience</div>\r\n                <div class=\"sectionContent\">\r\n\r\n                    <div class=\"experienceLineWrapper\">\r\n                        <div class=\"exprienceItem\">\r\n                            <div class=\"experienceItemHeader\">Frontend Developer <span class=\"subHeader\">(Student\r\n                                    trainee)</span></div>\r\n                            <div class=\"experienceItemDescription\"><a href=\"http://www.softwarehelden.com/\" class=\"experienceDescriptionLink\"\r\n                                    target=\"blank\">Softwarehelden, Stuttgart</a></div>\r\n                            <div class=\"experienceItemDate\">Nov. 2017 - Mar. 2019</div>\r\n                        </div>\r\n                        <div class=\"exprienceItem\">\r\n                            <div class=\"experienceItemHeader\">Photographer</div>\r\n                            <div class=\"experienceItemDescription\">Freelancing</div>\r\n                            <div class=\"experienceItemDate\">Since Feb. 2017</div>\r\n                        </div>\r\n                        <div class=\"exprienceItem\">\r\n                            <div class=\"experienceItemHeader\">Computer Science & Media</div>\r\n                            <div class=\"experienceItemDescription\"><a href=\"https://www.hdm-stuttgart.de/english\" class=\"experienceDescriptionLink\"\r\n                                    target=\"blank\">Media University, Stuttgart</a></div>\r\n                            <div class=\"experienceItemDate\">Oct. 2016 - Mar. 2020</div>\r\n                        </div>\r\n                        <div class=\"exprienceItem\">\r\n                            <div class=\"experienceItemHeader\">Receptionist</div>\r\n                            <div class=\"experienceItemDescription\"><a href=\"https://www.hotelhinterglemm.com/en/\" class=\"experienceDescriptionLink\"\r\n                                    target=\"blank\">Hotel Edelweiss, Hinterglemm</a></div>\r\n                            <div class=\"experienceItemDate\">Dec. 2015 - Apr. 2016</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"sectionItem skillSection animated fadeIn delay-900ms\">\r\n                <div class=\"sectionHeader\"> <i class=\"material-icons\">work</i>Skills</div>\r\n                <div class=\"sectionContent\">\r\n                    <div class=\"skillItem\" *ngFor=\"let skillItem of skillItems\">\r\n                        <img class=\"skillItemIcon\" [src]=\"skillItem.iconPath\" alt=\"\">\r\n                        <div class=\"techSkillWrapper\">\r\n                            <div class=\"skillItemTitle\">{{skillItem.technology}}</div>\r\n                            <div class=\"skillItemLevel\">\r\n                                <div class=\"skillLevel\" [ngStyle]=\"{'width': skillItem.skillLevel}\"></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"infoFooter animated slideInUp duration-500ms\">\r\n\r\n        <div class=\"infoWrapper\">\r\n\r\n            <div class=\"column\">\r\n                <div class=\"itemWrapper\"><i class=\"material-icons\">star</i> 06. Feb 1996</div>\r\n                <div class=\"itemWrapper\"><i class=\"material-icons\">home</i> Stuttgart, Germany</div>\r\n            </div>\r\n\r\n            <div class=\"column\">\r\n                <div class=\"itemWrapper\"><i class=\"material-icons\">email</i>beiserjohannes@gmail.com</div>\r\n                <div class=\"itemWrapper\"><i class=\"material-icons\">phone</i>+49 17691395981</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"mobileProfilePicture\"></div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/about/about.component.less":
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: ComfortaaLight;\n  src: url('Comfortaa-Light.866333be226453f3a24c.ttf');\n}\n.defaultTextTransition {\n  -webkit-transition: color 200ms ease-in-out;\n  transition: color 200ms ease-in-out;\n}\n.quickAnimation {\n  -webkit-animation-duration: 300ms;\n  animation-duration: 300ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.animated-300ms {\n  -webkit-animation-duration: 300ms;\n  animation-duration: 300ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.animationFix {\n  -webkit-backface-visibility: hidden;\n  -webkit-transform: translateZ(0) scale(1, 1);\n  transform: translateZ(0);\n}\n.duration-100ms {\n  -webkit-animation-duration: 100ms;\n  animation-duration: 100ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-200ms {\n  -webkit-animation-duration: 200ms;\n  animation-duration: 200ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-300ms {\n  -webkit-animation-duration: 300ms;\n  animation-duration: 300ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-400ms {\n  -webkit-animation-duration: 400ms;\n  animation-duration: 400ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-500ms {\n  -webkit-animation-duration: 500ms;\n  animation-duration: 500ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-600ms {\n  -webkit-animation-duration: 600ms;\n  animation-duration: 600ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-700ms {\n  -webkit-animation-duration: 700ms;\n  animation-duration: 700ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-800ms {\n  -webkit-animation-duration: 800ms;\n  animation-duration: 800ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-900ms {\n  -webkit-animation-duration: 900ms;\n  animation-duration: 900ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.delay-100ms {\n  -webkit-animation-delay: 100ms;\n  animation-delay: 100ms;\n}\n.delay-200ms {\n  -webkit-animation-delay: 200ms;\n  animation-delay: 200ms;\n}\n.delay-300ms {\n  -webkit-animation-delay: 300ms;\n  animation-delay: 300ms;\n}\n.delay-400ms {\n  -webkit-animation-delay: 400ms;\n  animation-delay: 400ms;\n}\n.delay-500ms {\n  -webkit-animation-delay: 500ms;\n  animation-delay: 500ms;\n}\n.delay-600ms {\n  -webkit-animation-delay: 600ms;\n  animation-delay: 600ms;\n}\n.delay-700ms {\n  -webkit-animation-delay: 700ms;\n  animation-delay: 700ms;\n}\n.delay-800ms {\n  -webkit-animation-delay: 800ms;\n  animation-delay: 800ms;\n}\n.delay-900ms {\n  -webkit-animation-delay: 900ms;\n  animation-delay: 900ms;\n}\n.delay-1000ms {\n  -webkit-animation-delay: 1000ms;\n  animation-delay: 1000ms;\n}\n.delay-1100ms {\n  -webkit-animation-delay: 1100ms;\n  animation-delay: 1100ms;\n}\n.delay-1200ms {\n  -webkit-animation-delay: 1200ms;\n  animation-delay: 1200ms;\n}\n.delay-1300ms {\n  -webkit-animation-delay: 1300ms;\n  animation-delay: 1300ms;\n}\n.delay-1400ms {\n  -webkit-animation-delay: 1400ms;\n  animation-delay: 1400ms;\n}\n.delay-1500ms {\n  -webkit-animation-delay: 1500ms;\n  animation-delay: 1500ms;\n}\n.delay-1600ms {\n  -webkit-animation-delay: 1600ms;\n  animation-delay: 1600ms;\n}\n.delay-1700ms {\n  -webkit-animation-delay: 1700ms;\n  animation-delay: 1700ms;\n}\n.aboutWrapper .contentSectionWrapper {\n  min-height: calc(100vh - 100px - 150px);\n  width: 100%;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.aboutWrapper .contentSectionWrapper .contentSection {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 24px;\n  height: calc(100vh - 100px - 150px - 32px);\n  overflow: auto;\n  margin: 16px 0 16px 29%;\n  border-left: 1px solid #ccc;\n}\n.aboutWrapper .contentSectionWrapper .contentSection .sectionItem {\n  -webkit-box-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n  height: 100%;\n  padding: 16px;\n}\n.aboutWrapper .contentSectionWrapper .contentSection .sectionItem .sectionHeader {\n  font-size: 1.3em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  padding-bottom: 6px;\n  margin-bottom: 8px;\n  border-bottom: 1px solid #ccc;\n}\n.aboutWrapper .contentSectionWrapper .contentSection .sectionItem .sectionHeader i {\n  margin-right: 8px;\n}\n.aboutWrapper .contentSectionWrapper .contentSection .sectionItem .sectionContent {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  width: 100%;\n  height: 100% - 1.3em - 24px;\n}\n.aboutWrapper .contentSectionWrapper .contentSection .sectionItem.skillSection .sectionContent .skillItem {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-bottom: 16px;\n}\n.aboutWrapper .contentSectionWrapper .contentSection .sectionItem.skillSection .sectionContent .skillItem .skillItemIcon {\n  width: 28px;\n  height: 28px;\n  margin-right: 8px;\n  -webkit-filter: grayscale(55%);\n          filter: grayscale(55%);\n}\n.aboutWrapper .contentSectionWrapper .contentSection .sectionItem.skillSection .sectionContent .skillItem .techSkillWrapper {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.aboutWrapper .contentSectionWrapper .contentSection .sectionItem.skillSection .sectionContent .skillItem .techSkillWrapper .skillItemLevel {\n  width: 100%;\n  height: 6px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin: 0 auto;\n  background: #ccc;\n}\n.aboutWrapper .contentSectionWrapper .contentSection .sectionItem.skillSection .sectionContent .skillItem .techSkillWrapper .skillItemLevel .skillLevel {\n  width: 60%;\n  height: 100%;\n  background: #444;\n}\n.aboutWrapper .contentSectionWrapper .contentSection .sectionItem.skillSection .sectionContent .skillItem .skillItemHeader {\n  width: 100%;\n}\n.aboutWrapper .contentSectionWrapper .contentSection .sectionItem.skillSection .sectionContent .skillItem .skillItemHeader .skillItemTitle {\n  padding-left: 8px;\n}\n.aboutWrapper .contentSectionWrapper .contentSection .sectionItem.aboutSection {\n  min-width: 300px;\n  padding-bottom: 0 !important;\n  -webkit-box-ordinal-group: 4;\n      -ms-flex-order: 3;\n          order: 3;\n}\n.aboutWrapper .contentSectionWrapper .contentSection .sectionItem.experienceSection .sectionContent .experienceLineWrapper .exprienceItem {\n  margin-left: 8px;\n}\n.aboutWrapper .contentSectionWrapper .contentSection .sectionItem.experienceSection .sectionContent .experienceLineWrapper .exprienceItem .experienceItemHeader {\n  position: relative;\n  padding-left: 18px;\n}\n.aboutWrapper .contentSectionWrapper .contentSection .sectionItem.experienceSection .sectionContent .experienceLineWrapper .exprienceItem .experienceItemHeader:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #444;\n  top: 6px;\n  left: -3px;\n}\n.aboutWrapper .contentSectionWrapper .contentSection .sectionItem.experienceSection .sectionContent .experienceLineWrapper .exprienceItem .experienceItemHeader .subHeader {\n  font-size: 0.9em;\n  color: #93908d;\n}\n.aboutWrapper .contentSectionWrapper .contentSection .sectionItem.experienceSection .sectionContent .experienceLineWrapper .exprienceItem .experienceItemDescription {\n  color: #93908d;\n  padding: 8px 16px 0;\n  border-left: 1px solid #444;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.aboutWrapper .contentSectionWrapper .contentSection .sectionItem.experienceSection .sectionContent .experienceLineWrapper .exprienceItem .experienceItemDescription .experienceDescriptionLink {\n  -webkit-user-select: unset;\n     -moz-user-select: unset;\n      -ms-user-select: unset;\n          user-select: unset;\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n  -webkit-transition: color 200ms ease-in-out;\n  transition: color 200ms ease-in-out;\n}\n.aboutWrapper .contentSectionWrapper .contentSection .sectionItem.experienceSection .sectionContent .experienceLineWrapper .exprienceItem .experienceItemDescription .experienceDescriptionLink:hover {\n  color: #2b2a29;\n}\n.aboutWrapper .contentSectionWrapper .contentSection .sectionItem.experienceSection .sectionContent .experienceLineWrapper .exprienceItem .experienceItemDate {\n  color: #93908d;\n  padding: 0 16px;\n  border-left: 1px solid #444;\n  padding-bottom: 16px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.aboutWrapper .contentSectionWrapper .contentSection .sectionItem.experienceSection .sectionContent .experienceLineWrapper .exprienceItem:last-child {\n  position: relative;\n}\n.aboutWrapper .contentSectionWrapper .contentSection .sectionItem.experienceSection .sectionContent .experienceLineWrapper .exprienceItem:last-child:after {\n  content: \"\";\n  width: 15px;\n  height: 2px;\n  background: #444;\n  position: absolute;\n  left: -7px;\n}\n.aboutWrapper .contentSectionWrapper .profileImage {\n  max-height: 100%;\n  max-width: 30%;\n  background-size: contain;\n  background-position: bottom;\n  background-image: url('bewerbungsBild.e620128bf52ce6c94bfe.png');\n  width: 35%;\n  height: 100%;\n  background-repeat: no-repeat;\n  position: absolute;\n}\n.aboutWrapper .infoFooter {\n  width: 100%;\n  height: 150px;\n  background: #4a4a4a;\n}\n.aboutWrapper .infoFooter .infoWrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  margin-left: 10%;\n}\n.aboutWrapper .infoFooter .infoWrapper .itemWrapper {\n  color: #eee;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 1.2em;\n}\n.aboutWrapper .infoFooter .infoWrapper .itemWrapper i {\n  color: #dcb979;\n  margin-right: 16px;\n  font-size: 2em;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.aboutWrapper .infoFooter .infoWrapper .column {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  padding: 20px 0;\n  max-width: 300px;\n}\n.aboutWrapper .infoFooter .mobileProfilePicture {\n  display: none;\n}\n@media only screen and (max-width: 768px) {\n  .aboutWrapper {\n    height: unset;\n  }\n  .aboutWrapper .contentSectionWrapper {\n    min-height: calc(100vh - 100px - 202.88px);\n    height: unset;\n  }\n  .aboutWrapper .contentSectionWrapper .contentSection {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    margin: 0;\n    height: unset;\n    overflow: unset;\n    border-left: unset;\n  }\n  .aboutWrapper .contentSectionWrapper .contentSection .sectionItem {\n    width: 100%;\n    height: unset;\n    -webkit-box-flex: unset;\n        -ms-flex: unset;\n            flex: unset;\n  }\n  .aboutWrapper .contentSectionWrapper .profileImage {\n    display: none;\n  }\n  .aboutWrapper .infoFooter {\n    position: unset;\n    height: unset;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n  .aboutWrapper .infoFooter .infoWrapper {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    margin: 0;\n    padding: 16px 16px 24px;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  .aboutWrapper .infoFooter .infoWrapper .itemWrapper {\n    min-width: 100%;\n    padding: 8px 16px 0 0;\n  }\n  .aboutWrapper .infoFooter .infoWrapper .column {\n    min-width: 100%;\n    padding: 0;\n  }\n  .aboutWrapper .infoFooter .mobileProfilePicture {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    margin: 24px;\n    display: block;\n    background-image: url('bewerbungsBildMobile.15f1052a04869188e9d0.png');\n    background-size: contain;\n    background-position: bottom;\n    background-repeat: no-repeat;\n    height: 150px;\n    width: 150px;\n    min-width: 150px;\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n}\n@media only screen and (max-width: 1440px) {\n  .sectionContent {\n    height: auto;\n  }\n  .contentSection {\n    display: block !important;\n    height: calc(100vh - 250px);\n    overflow: auto;\n  }\n  .contentSection .sectionItem {\n    height: unset !important;\n  }\n}\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AboutComponent = (function () {
    function AboutComponent() {
        this.testWidth = "10%";
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.skillItems = [
            {
                iconPath: "../../../assets/icons/html.svg",
                technology: "HTML, CSS/LESS",
                skillLevel: "90%"
            }, {
                iconPath: "../../../assets/icons/javascript.png",
                technology: "Javascript, Typescript",
                skillLevel: "70%"
            }, {
                iconPath: "../../../assets/icons/node.png",
                technology: "Node.js + Express",
                skillLevel: "60%"
            }, {
                iconPath: "../../../assets/icons/angular.svg",
                technology: "Angular",
                skillLevel: "45%"
            }, {
                iconPath: "../../../assets/icons/mongodb.png",
                technology: "MongoDB",
                skillLevel: "55%"
            }, {
                iconPath: "../../../assets/icons/vue.png",
                technology: "Vue",
                skillLevel: "30%"
            }, {
                iconPath: "../../../assets/icons/git.png",
                technology: "Git",
                skillLevel: "80%"
            }, {
                iconPath: "../../../assets/icons/jquery.png",
                technology: "JQuery",
                skillLevel: "95%"
            }, {
                iconPath: "../../../assets/icons/adobe.svg",
                technology: "Photoshop & Lightroom",
                skillLevel: "65%"
            }
        ];
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'app-about-site',
            template: __webpack_require__("./src/app/components/about/about.component.html"),
            styles: [__webpack_require__("./src/app/components/about/about.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;


/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboardWrapper\">\r\n        <h4>Create a new Article</h4>\r\n        <hr>\r\n        <label>Header: <input class=\"inputItem\"  type=\"text\" placeholder=\"Header\" [(ngModel)]=\"chosenArticleTitle\" ></label>\r\n        <textarea class=\"inputItem textArea\" type=\"text\" placeholder=\"Content\" [(ngModel)]=\"chosenArticleContent\"></textarea>\r\n        <label>File: <input class=\"inputItem\" type=\"file\" (change)=\"fileChanged($event)\"></label>\r\n        <label>Date: <input class=\"inputItem\" type=\"date\" placeholder=\"Date\" [(ngModel)]=\"chosenArticleDate\"></label>\r\n        <label>Group: <input class=\"inputItem\" type=\"text\" placeholder=\"Group\" [(ngModel)]=\"chosenArticleGroup\"></label>\r\n        \r\n        <div class=\"submitButton\" (click)=\"submitPressed()\">submit</div>  \r\n        <hr>\r\n        <h4>User Actions</h4>\r\n        <div class=\"logoutButton\" (click)=\"_authService.logout()\">Logout</div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.less":
/***/ (function(module, exports) {

module.exports = ".dashboardWrapper h4 {\n  margin-top: 16px;\n}\n.dashboardWrapper label {\n  width: 100%;\n}\n.dashboardWrapper .submitButton {\n  cursor: pointer;\n  background: #489418;\n  padding: 16px;\n  color: black;\n}\n.dashboardWrapper .textArea {\n  min-height: 60vh;\n  width: 90%;\n  margin: 0 5%;\n}\n.dashboardWrapper .logoutButton {\n  margin-top: 16px;\n  padding: 16px;\n  background: tomato;\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var image_upload_service_1 = __webpack_require__("./src/app/services/image-upload.service.ts");
var articles_service_1 = __webpack_require__("./src/app/services/articles.service.ts");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var DashboardComponent = (function () {
    function DashboardComponent(_imgUpload, _articleService, _authService) {
        this._imgUpload = _imgUpload;
        this._articleService = _articleService;
        this._authService = _authService;
        this.chosenArticleTitle = "";
        this.chosenArticleContent = "";
        this.chosenArticleGroup = "";
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fileReader = new FileReader();
        this.fileReader.addEventListener("load", function () {
            _this.thumbnailAsBase64String = _this.fileReader.result.toString();
        }, false);
    };
    DashboardComponent.prototype.submitPressed = function () {
        var parsedDate = new Date(this.chosenArticleDate);
        var dateObject = {
            year: parsedDate.getFullYear().toString(),
            fullDate: parsedDate.toDateString()
        };
        var newArticle = {
            articleTitle: this.chosenArticleTitle,
            articleContent: this.chosenArticleContent,
            articleDate: dateObject,
            group: this.chosenArticleGroup,
            thumbnail: this.thumbnailAsBase64String
        };
        this._articleService.addArticle(newArticle);
    };
    DashboardComponent.prototype.fileChanged = function (event) {
        var chosenThumbnail = event.target.files[0];
        this.fileReader.readAsDataURL(chosenThumbnail);
        // var target: HTMLInputElement = event.target as HTMLInputElement;
        // for(var i=0;i < target.files.length; i++) {
        //     this._imgUpload.uploadImage(target.files[i]).subscribe((resObj)=>{
        //       console.log(resObj);        
        //     })
        // }  
    };
    //TODO: Deprecated?
    DashboardComponent.prototype.upload = function (img) {
        var formData = new FormData();
        formData.append("image", img, img.name);
        var xhr = new XMLHttpRequest();
        xhr.upload.addEventListener("progress", function (ev) {
            //You can handle progress events here if you want to track upload progress (I used an observable<number> to fire back updates to whomever called this upload)
        });
        xhr.open("PUT", "this/is/the/upload/address", true);
        xhr.send(formData);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/dashboard.component.less")]
        }),
        __metadata("design:paramtypes", [image_upload_service_1.ImageUploadService,
            articles_service_1.ArticlesService,
            auth_service_1.AuthService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home-wrapper\">   \r\n        <!-- <div class=\"interactiveMenu\">\r\n                <div class=\"first\"></div>\r\n                <div class=\"second\"></div>\r\n                <div class=\"third\"></div>\r\n                <div class=\"forth\"></div>\r\n        </div> -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.less":
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: ComfortaaLight;\n  src: url('Comfortaa-Light.866333be226453f3a24c.ttf');\n}\n.defaultTextTransition {\n  -webkit-transition: color 200ms ease-in-out;\n  transition: color 200ms ease-in-out;\n}\n.quickAnimation {\n  -webkit-animation-duration: 300ms;\n  animation-duration: 300ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.animated-300ms {\n  -webkit-animation-duration: 300ms;\n  animation-duration: 300ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.animationFix {\n  -webkit-backface-visibility: hidden;\n  -webkit-transform: translateZ(0) scale(1, 1);\n  transform: translateZ(0);\n}\n.duration-100ms {\n  -webkit-animation-duration: 100ms;\n  animation-duration: 100ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-200ms {\n  -webkit-animation-duration: 200ms;\n  animation-duration: 200ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-300ms {\n  -webkit-animation-duration: 300ms;\n  animation-duration: 300ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-400ms {\n  -webkit-animation-duration: 400ms;\n  animation-duration: 400ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-500ms {\n  -webkit-animation-duration: 500ms;\n  animation-duration: 500ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-600ms {\n  -webkit-animation-duration: 600ms;\n  animation-duration: 600ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-700ms {\n  -webkit-animation-duration: 700ms;\n  animation-duration: 700ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-800ms {\n  -webkit-animation-duration: 800ms;\n  animation-duration: 800ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-900ms {\n  -webkit-animation-duration: 900ms;\n  animation-duration: 900ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.delay-100ms {\n  -webkit-animation-delay: 100ms;\n  animation-delay: 100ms;\n}\n.delay-200ms {\n  -webkit-animation-delay: 200ms;\n  animation-delay: 200ms;\n}\n.delay-300ms {\n  -webkit-animation-delay: 300ms;\n  animation-delay: 300ms;\n}\n.delay-400ms {\n  -webkit-animation-delay: 400ms;\n  animation-delay: 400ms;\n}\n.delay-500ms {\n  -webkit-animation-delay: 500ms;\n  animation-delay: 500ms;\n}\n.delay-600ms {\n  -webkit-animation-delay: 600ms;\n  animation-delay: 600ms;\n}\n.delay-700ms {\n  -webkit-animation-delay: 700ms;\n  animation-delay: 700ms;\n}\n.delay-800ms {\n  -webkit-animation-delay: 800ms;\n  animation-delay: 800ms;\n}\n.delay-900ms {\n  -webkit-animation-delay: 900ms;\n  animation-delay: 900ms;\n}\n.delay-1000ms {\n  -webkit-animation-delay: 1000ms;\n  animation-delay: 1000ms;\n}\n.delay-1100ms {\n  -webkit-animation-delay: 1100ms;\n  animation-delay: 1100ms;\n}\n.delay-1200ms {\n  -webkit-animation-delay: 1200ms;\n  animation-delay: 1200ms;\n}\n.delay-1300ms {\n  -webkit-animation-delay: 1300ms;\n  animation-delay: 1300ms;\n}\n.delay-1400ms {\n  -webkit-animation-delay: 1400ms;\n  animation-delay: 1400ms;\n}\n.delay-1500ms {\n  -webkit-animation-delay: 1500ms;\n  animation-delay: 1500ms;\n}\n.delay-1600ms {\n  -webkit-animation-delay: 1600ms;\n  animation-delay: 1600ms;\n}\n.delay-1700ms {\n  -webkit-animation-delay: 1700ms;\n  animation-delay: 1700ms;\n}\n.navbarContainer {\n  opacity: 0.1 !important;\n}\n.home-wrapper {\n  height: calc(100vh - 100px);\n  background-image: url('frontPageImage.41b66ee5b94c3cd89223.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position-x: center;\n  background-position-y: top;\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  top: 0;\n}\n.home-wrapper .interactiveMenu {\n  width: 600px;\n  margin: 100px auto 0 auto;\n  height: 100%;\n  position: relative;\n}\n.home-wrapper .interactiveMenu > div {\n  width: 200px;\n  height: 200px;\n  background: #444;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  position: absolute;\n  cursor: pointer;\n}\n.home-wrapper .interactiveMenu .first {\n  left: 41px;\n  top: 113px;\n  -webkit-transition: left 100ms ease-in-out;\n  transition: left 100ms ease-in-out;\n}\n.home-wrapper .interactiveMenu .first:hover {\n  left: 21px;\n}\n.home-wrapper .interactiveMenu .second {\n  top: 42px;\n  left: 251px;\n  -webkit-transition: top 100ms ease-in-out;\n  transition: top 100ms ease-in-out;\n}\n.home-wrapper .interactiveMenu .second:hover {\n  top: 22px;\n}\n.home-wrapper .interactiveMenu .third {\n  top: 254px;\n  left: 320px;\n  -webkit-transition: left 100ms ease-in-out;\n  transition: left 100ms ease-in-out;\n}\n.home-wrapper .interactiveMenu .third:hover {\n  left: 340px;\n}\n.home-wrapper .interactiveMenu .forth {\n  top: 325px;\n  left: 110px;\n  -webkit-transition: top 100ms ease-in-out;\n  transition: top 100ms ease-in-out;\n}\n.home-wrapper .interactiveMenu .forth:hover {\n  top: 345px;\n}\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var comp_communication_service_1 = __webpack_require__("./src/app/services/comp-communication.service.ts");
var HomeComponent = (function () {
    function HomeComponent(_compCoService) {
        this._compCoService = _compCoService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this._compCoService.setMenuBackground(false);
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this._compCoService.setMenuBackground(true);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.less")]
        }),
        __metadata("design:paramtypes", [comp_communication_service_1.CompCommunicationService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\" >Login</h2>\r\n<form class=\"form-signin\" (submit)=\"onLoginSubmit()\">\r\n        <div class=\"form-group\">\r\n          <label for=\"Username\">Username</label>\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Enter Username\" [(ngModel)]=\"username\" name=\"username\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n        <label for=\"Password\">Password</label>\r\n        <input type=\"password\" class=\"form-control\" placeholder=\" Enter Password\" [(ngModel)]=\"password\" name=\"password\">\r\n        </div>\r\n        <div class=\"checkbox\">\r\n          <label>\r\n            <input type=\"checkbox\" value=\"remember-me\"> Remember me\r\n          </label>\r\n        </div>\r\n        <input class=\"btn btn-lg btn-primary\" type=\"submit\" value=\"Login\">\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var angular2_flash_messages_1 = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
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
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            router_1.Router,
            angular2_flash_messages_1.FlashMessagesService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/components/modal-view/modal-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-view-content\" (click)=\"closeModal()\">\r\n    <div class=\"modal-view-body animated zoomIn quickAnimation\" (click)=\"innerAreaClicked($event)\">\r\n        <ng-content></ng-content>\r\n        <i class=\"material-icons closeIcon\" (click)=\"closeModal()\">close</i>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/modal-view/modal-view.component.less":
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: ComfortaaLight;\n  src: url('Comfortaa-Light.866333be226453f3a24c.ttf');\n}\n.defaultTextTransition {\n  -webkit-transition: color 200ms ease-in-out;\n  transition: color 200ms ease-in-out;\n}\n.quickAnimation {\n  -webkit-animation-duration: 300ms;\n  animation-duration: 300ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.animated-300ms {\n  -webkit-animation-duration: 300ms;\n  animation-duration: 300ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.animationFix {\n  -webkit-backface-visibility: hidden;\n  -webkit-transform: translateZ(0) scale(1, 1);\n  transform: translateZ(0);\n}\n.duration-100ms {\n  -webkit-animation-duration: 100ms;\n  animation-duration: 100ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-200ms {\n  -webkit-animation-duration: 200ms;\n  animation-duration: 200ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-300ms {\n  -webkit-animation-duration: 300ms;\n  animation-duration: 300ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-400ms {\n  -webkit-animation-duration: 400ms;\n  animation-duration: 400ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-500ms {\n  -webkit-animation-duration: 500ms;\n  animation-duration: 500ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-600ms {\n  -webkit-animation-duration: 600ms;\n  animation-duration: 600ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-700ms {\n  -webkit-animation-duration: 700ms;\n  animation-duration: 700ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-800ms {\n  -webkit-animation-duration: 800ms;\n  animation-duration: 800ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-900ms {\n  -webkit-animation-duration: 900ms;\n  animation-duration: 900ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.delay-100ms {\n  -webkit-animation-delay: 100ms;\n  animation-delay: 100ms;\n}\n.delay-200ms {\n  -webkit-animation-delay: 200ms;\n  animation-delay: 200ms;\n}\n.delay-300ms {\n  -webkit-animation-delay: 300ms;\n  animation-delay: 300ms;\n}\n.delay-400ms {\n  -webkit-animation-delay: 400ms;\n  animation-delay: 400ms;\n}\n.delay-500ms {\n  -webkit-animation-delay: 500ms;\n  animation-delay: 500ms;\n}\n.delay-600ms {\n  -webkit-animation-delay: 600ms;\n  animation-delay: 600ms;\n}\n.delay-700ms {\n  -webkit-animation-delay: 700ms;\n  animation-delay: 700ms;\n}\n.delay-800ms {\n  -webkit-animation-delay: 800ms;\n  animation-delay: 800ms;\n}\n.delay-900ms {\n  -webkit-animation-delay: 900ms;\n  animation-delay: 900ms;\n}\n.delay-1000ms {\n  -webkit-animation-delay: 1000ms;\n  animation-delay: 1000ms;\n}\n.delay-1100ms {\n  -webkit-animation-delay: 1100ms;\n  animation-delay: 1100ms;\n}\n.delay-1200ms {\n  -webkit-animation-delay: 1200ms;\n  animation-delay: 1200ms;\n}\n.delay-1300ms {\n  -webkit-animation-delay: 1300ms;\n  animation-delay: 1300ms;\n}\n.delay-1400ms {\n  -webkit-animation-delay: 1400ms;\n  animation-delay: 1400ms;\n}\n.delay-1500ms {\n  -webkit-animation-delay: 1500ms;\n  animation-delay: 1500ms;\n}\n.delay-1600ms {\n  -webkit-animation-delay: 1600ms;\n  animation-delay: 1600ms;\n}\n.delay-1700ms {\n  -webkit-animation-delay: 1700ms;\n  animation-delay: 1700ms;\n}\n.modal-view-content {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  z-index: 4000;\n}\n.modal-view-content .modal-view-body {\n  width: 80%;\n  height: 90%;\n  background: white;\n  position: relative;\n  padding: 16px;\n  overflow: auto;\n}\n.modal-view-content .modal-view-body .closeIcon {\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 8px;\n  cursor: pointer;\n  -webkit-transition: -webkit-transform 200ms ease-in-out;\n  transition: -webkit-transform 200ms ease-in-out;\n  transition: transform 200ms ease-in-out;\n  transition: transform 200ms ease-in-out, -webkit-transform 200ms ease-in-out;\n}\n.modal-view-content .modal-view-body .closeIcon:hover {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n"

/***/ }),

/***/ "./src/app/components/modal-view/modal-view.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ModalViewComponent = (function () {
    function ModalViewComponent() {
        this.closing = new core_1.EventEmitter();
    }
    ModalViewComponent.prototype.ngOnInit = function () {
    };
    ModalViewComponent.prototype.closeModal = function () {
        this.closing.emit();
    };
    ModalViewComponent.prototype.outerAreaClicked = function () {
        this.closeModal();
    };
    ModalViewComponent.prototype.innerAreaClicked = function (e) {
        e.stopPropagation();
    };
    // remove self from modal service when directive is destroyed
    ModalViewComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ModalViewComponent.prototype, "closing", void 0);
    ModalViewComponent = __decorate([
        core_1.Component({
            selector: 'modal-view',
            template: __webpack_require__("./src/app/components/modal-view/modal-view.component.html"),
            styles: [__webpack_require__("./src/app/components/modal-view/modal-view.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], ModalViewComponent);
    return ModalViewComponent;
}());
exports.ModalViewComponent = ModalViewComponent;


/***/ }),

/***/ "./src/app/components/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modalWindow animated animated-300ms fadeIn\" *ngIf=\"_modalService.isShown\" (click)=\"_modalService.toggleIsShown()\">\r\n\r\n    <!-- <div class=\"modalContent animated animated-300ms zoomIn\" (click)=\"innerModalClicked($event)\"  [ngStyle]=\"{'background-image': getImageUrl()}\"> -->\r\n    <div class=\"imageWrapper animated animated-300ms zoomIn\" >\r\n        <img  class=\"modalContent\" src=\"{{getImageUrl()}}\" (click)=\"innerModalClicked($event)\"  alt=\"image\">    \r\n        <div class=\"close\">\r\n            <i (click)=\"_modalService.toggleIsShown()\" class=\"material-icons closeModal animated fadeIn delay-600ms\">close</i>\r\n        </div>     \r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/modal/modal.component.less":
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: ComfortaaLight;\n  src: url('Comfortaa-Light.866333be226453f3a24c.ttf');\n}\n.defaultTextTransition {\n  -webkit-transition: color 200ms ease-in-out;\n  transition: color 200ms ease-in-out;\n}\n.quickAnimation {\n  -webkit-animation-duration: 300ms;\n  animation-duration: 300ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.animated-300ms {\n  -webkit-animation-duration: 300ms;\n  animation-duration: 300ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.animationFix {\n  -webkit-backface-visibility: hidden;\n  -webkit-transform: translateZ(0) scale(1, 1);\n  transform: translateZ(0);\n}\n.duration-100ms {\n  -webkit-animation-duration: 100ms;\n  animation-duration: 100ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-200ms {\n  -webkit-animation-duration: 200ms;\n  animation-duration: 200ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-300ms {\n  -webkit-animation-duration: 300ms;\n  animation-duration: 300ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-400ms {\n  -webkit-animation-duration: 400ms;\n  animation-duration: 400ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-500ms {\n  -webkit-animation-duration: 500ms;\n  animation-duration: 500ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-600ms {\n  -webkit-animation-duration: 600ms;\n  animation-duration: 600ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-700ms {\n  -webkit-animation-duration: 700ms;\n  animation-duration: 700ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-800ms {\n  -webkit-animation-duration: 800ms;\n  animation-duration: 800ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-900ms {\n  -webkit-animation-duration: 900ms;\n  animation-duration: 900ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.delay-100ms {\n  -webkit-animation-delay: 100ms;\n  animation-delay: 100ms;\n}\n.delay-200ms {\n  -webkit-animation-delay: 200ms;\n  animation-delay: 200ms;\n}\n.delay-300ms {\n  -webkit-animation-delay: 300ms;\n  animation-delay: 300ms;\n}\n.delay-400ms {\n  -webkit-animation-delay: 400ms;\n  animation-delay: 400ms;\n}\n.delay-500ms {\n  -webkit-animation-delay: 500ms;\n  animation-delay: 500ms;\n}\n.delay-600ms {\n  -webkit-animation-delay: 600ms;\n  animation-delay: 600ms;\n}\n.delay-700ms {\n  -webkit-animation-delay: 700ms;\n  animation-delay: 700ms;\n}\n.delay-800ms {\n  -webkit-animation-delay: 800ms;\n  animation-delay: 800ms;\n}\n.delay-900ms {\n  -webkit-animation-delay: 900ms;\n  animation-delay: 900ms;\n}\n.delay-1000ms {\n  -webkit-animation-delay: 1000ms;\n  animation-delay: 1000ms;\n}\n.delay-1100ms {\n  -webkit-animation-delay: 1100ms;\n  animation-delay: 1100ms;\n}\n.delay-1200ms {\n  -webkit-animation-delay: 1200ms;\n  animation-delay: 1200ms;\n}\n.delay-1300ms {\n  -webkit-animation-delay: 1300ms;\n  animation-delay: 1300ms;\n}\n.delay-1400ms {\n  -webkit-animation-delay: 1400ms;\n  animation-delay: 1400ms;\n}\n.delay-1500ms {\n  -webkit-animation-delay: 1500ms;\n  animation-delay: 1500ms;\n}\n.delay-1600ms {\n  -webkit-animation-delay: 1600ms;\n  animation-delay: 1600ms;\n}\n.delay-1700ms {\n  -webkit-animation-delay: 1700ms;\n  animation-delay: 1700ms;\n}\n.modalWindow {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  z-index: 9000;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.modalWindow .imageWrapper {\n  margin: 0 auto;\n  display: inline-block;\n  position: relative;\n}\n.modalWindow .imageWrapper .modalContent {\n  max-height: 90vh;\n  max-width: 90vw;\n}\n.modalWindow .imageWrapper .close {\n  opacity: 0.8;\n  -webkit-transition: opacity 200ms ease-in-out;\n  transition: opacity 200ms ease-in-out;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.modalWindow .imageWrapper .close:hover {\n  opacity: 1;\n}\n.modalWindow .imageWrapper .close .closeModal {\n  background: #ddd;\n  padding: 10px;\n  cursor: pointer;\n  color: #2b2a29;\n  -webkit-transition: all 200ms ease-in-out;\n  transition: all 200ms ease-in-out;\n}\n"

/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var modal_service_1 = __webpack_require__("./src/app/services/modal.service.ts");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var ModalComponent = (function () {
    function ModalComponent(_modalService) {
        this._modalService = _modalService;
        this.sanitizer = platform_browser_1.DomSanitizer.prototype;
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.innerModalClicked = function (e) {
        e.stopPropagation();
    };
    ModalComponent.prototype.getStyle = function () {
        // snip snip -> fetch the url from somewhere
        var path = this._modalService.modalContent.path;
        var style = "background-image: url(" + path + ")";
        // sanitize the style expression
        return this.sanitizer.bypassSecurityTrustStyle(style);
    };
    ModalComponent.prototype.getImageUrl = function () {
        // return "url(" + this._modalService.modalContent.path + ")";
        return "" + this._modalService.modalContent.path;
    };
    ModalComponent = __decorate([
        core_1.Component({
            selector: 'app-modal',
            template: __webpack_require__("./src/app/components/modal/modal.component.html"),
            styles: [__webpack_require__("./src/app/components/modal/modal.component.less")]
        }),
        __metadata("design:paramtypes", [modal_service_1.ModalService])
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navBar\" [class.onHomeSite]=\"!_compCoService.backgroundVisible\">\r\n      <div class=\"navbar-logo-wrapper fadeIn animated\">\r\n        <div class=\"navbar-logo\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"  [routerLink]=\"['/']\">\r\n          <div class=\"logoJ animated fadeIn\"></div>\r\n          <div class=\"logoHome animated fadeIn\"></div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"menuWrapper\">\r\n        <div class=\"menuEntry fadeIn animated delay-500ms\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"  [routerLink]=\"['/about']\">About</div>\r\n        <div class=\"menuEntry fadeIn animated delay-1s\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"  [routerLink]=\"['/travel']\">Travel</div>\r\n        <div class=\"menuEntry fadeIn animated delay-1500ms\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"  [routerLink]=\"['/photography']\">Photography</div>\r\n        <div class=\"menuEntry fadeIn animated delay-2s\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"  [routerLink]=\"['/work']\">Work</div>\r\n      </div>\r\n\r\n      <div class=\"burgerMenu fadeIn animated\">\r\n          <i (click)=\"toggleDropdownMenu()\" class=\"material-icons\" *ngIf=\"!dropdownActive\">menu</i>\r\n          <i (click)=\"toggleDropdownMenu()\" class=\"material-icons\" *ngIf=\"dropdownActive\">close</i>\r\n\r\n      </div>\r\n\r\n      <div *ngIf=\"dropdownActive\" @swipe class=\"dropdownMenu\">\r\n          <div (click)=\"toggleDropdownMenu()\" class=\"menuEntry\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"  [routerLink]=\"['/']\">Home</div>\r\n          <div (click)=\"toggleDropdownMenu()\" class=\"menuEntry\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"  [routerLink]=\"['/about']\">About</div>\r\n          <div (click)=\"toggleDropdownMenu()\" class=\"menuEntry\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"  [routerLink]=\"['/travel']\">Travel</div>\r\n          <div (click)=\"toggleDropdownMenu()\" class=\"menuEntry\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"  [routerLink]=\"['/photography']\">Photography</div>\r\n          <div (click)=\"toggleDropdownMenu()\" class=\"menuEntry\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"  [routerLink]=\"['/work']\">Work</div>\r\n      </div>\r\n\r\n<div class=\"homeImageFadeHeader\" *ngIf=\"!_compCoService.backgroundVisible\"></div>\r\n\r\n      <!-- <a class=\"navbar-brand\" href=\"#\">Johannes Beiser</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/']\">Home<span></span></a>\r\n          </li>\r\n        </ul>\r\n        <ul class=\"navbar-nav ml-auto\">\r\n          <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard </a>\r\n          </li>\r\n          <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile </a>\r\n          </li>\r\n          <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/login']\">Login </a>\r\n          </li>\r\n          <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\r\n          </li>\r\n          <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\"><a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\r\n          </li>\r\n        </ul>\r\n      </div> -->\r\n    </nav>\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.less":
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: ComfortaaLight;\n  src: url('Comfortaa-Light.866333be226453f3a24c.ttf');\n}\n.defaultTextTransition {\n  -webkit-transition: color 200ms ease-in-out;\n  transition: color 200ms ease-in-out;\n}\n.quickAnimation {\n  -webkit-animation-duration: 300ms;\n  animation-duration: 300ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.animated-300ms {\n  -webkit-animation-duration: 300ms;\n  animation-duration: 300ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.animationFix {\n  -webkit-backface-visibility: hidden;\n  -webkit-transform: translateZ(0) scale(1, 1);\n  transform: translateZ(0);\n}\n.duration-100ms {\n  -webkit-animation-duration: 100ms;\n  animation-duration: 100ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-200ms {\n  -webkit-animation-duration: 200ms;\n  animation-duration: 200ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-300ms {\n  -webkit-animation-duration: 300ms;\n  animation-duration: 300ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-400ms {\n  -webkit-animation-duration: 400ms;\n  animation-duration: 400ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-500ms {\n  -webkit-animation-duration: 500ms;\n  animation-duration: 500ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-600ms {\n  -webkit-animation-duration: 600ms;\n  animation-duration: 600ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-700ms {\n  -webkit-animation-duration: 700ms;\n  animation-duration: 700ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-800ms {\n  -webkit-animation-duration: 800ms;\n  animation-duration: 800ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-900ms {\n  -webkit-animation-duration: 900ms;\n  animation-duration: 900ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.delay-100ms {\n  -webkit-animation-delay: 100ms;\n  animation-delay: 100ms;\n}\n.delay-200ms {\n  -webkit-animation-delay: 200ms;\n  animation-delay: 200ms;\n}\n.delay-300ms {\n  -webkit-animation-delay: 300ms;\n  animation-delay: 300ms;\n}\n.delay-400ms {\n  -webkit-animation-delay: 400ms;\n  animation-delay: 400ms;\n}\n.delay-500ms {\n  -webkit-animation-delay: 500ms;\n  animation-delay: 500ms;\n}\n.delay-600ms {\n  -webkit-animation-delay: 600ms;\n  animation-delay: 600ms;\n}\n.delay-700ms {\n  -webkit-animation-delay: 700ms;\n  animation-delay: 700ms;\n}\n.delay-800ms {\n  -webkit-animation-delay: 800ms;\n  animation-delay: 800ms;\n}\n.delay-900ms {\n  -webkit-animation-delay: 900ms;\n  animation-delay: 900ms;\n}\n.delay-1000ms {\n  -webkit-animation-delay: 1000ms;\n  animation-delay: 1000ms;\n}\n.delay-1100ms {\n  -webkit-animation-delay: 1100ms;\n  animation-delay: 1100ms;\n}\n.delay-1200ms {\n  -webkit-animation-delay: 1200ms;\n  animation-delay: 1200ms;\n}\n.delay-1300ms {\n  -webkit-animation-delay: 1300ms;\n  animation-delay: 1300ms;\n}\n.delay-1400ms {\n  -webkit-animation-delay: 1400ms;\n  animation-delay: 1400ms;\n}\n.delay-1500ms {\n  -webkit-animation-delay: 1500ms;\n  animation-delay: 1500ms;\n}\n.delay-1600ms {\n  -webkit-animation-delay: 1600ms;\n  animation-delay: 1600ms;\n}\n.delay-1700ms {\n  -webkit-animation-delay: 1700ms;\n  animation-delay: 1700ms;\n}\n.animated.delay-100ms {\n  -webkit-animation-delay: 100ms;\n  animation-delay: 100ms;\n}\n.animated.delay-500ms {\n  -webkit-animation-delay: 500ms;\n  animation-delay: 500ms;\n}\n.animated.delay-1500ms {\n  -webkit-animation-delay: 1500ms;\n  animation-delay: 1500ms;\n}\n.animated.delay-2500ms {\n  -webkit-animation-delay: 2500ms;\n  animation-delay: 2500ms;\n}\n.navBar {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  z-index: 2000;\n  height: 100px;\n  border-bottom: 1px solid #eee;\n}\n.navBar .navbar-logo-wrapper {\n  -webkit-box-flex: 4.5;\n      -ms-flex: 4.5;\n          flex: 4.5;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  z-index: 2000;\n  background: white;\n  position: relative;\n  padding-left: 4%;\n}\n.navBar .navbar-logo-wrapper .navbar-logo {\n  background-image: url(\"data:image/png;base64,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\");\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: bottom;\n  height: 60px;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  margin-bottom: 10px;\n  margin-left: 2%;\n  outline: none;\n  cursor: pointer;\n  width: 245px;\n  position: relative;\n}\n.navBar .navbar-logo-wrapper .navbar-logo:hover .logoJ {\n  display: none;\n}\n.navBar .navbar-logo-wrapper .navbar-logo:hover .logoHome {\n  display: block;\n}\n.navBar .navbar-logo-wrapper .navbar-logo .logoJ {\n  background-image: url(\"data:image/png;base64,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\");\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: bottom;\n  width: 60px;\n  height: 60px;\n}\n.navBar .navbar-logo-wrapper .navbar-logo .logoHome {\n  background-image: url(\"data:image/png;base64,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\");\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: bottom;\n  width: 60px;\n  height: 60px;\n  display: none;\n}\n.navBar .menuWrapper {\n  -webkit-box-flex: 6;\n      -ms-flex: 6;\n          flex: 6;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  padding-right: 6%;\n  z-index: 2000;\n  background-color: white;\n}\n.navBar .menuWrapper .menuEntry {\n  margin-bottom: 15px;\n  margin-left: 4%;\n  text-transform: uppercase;\n  color: #2b2a29;\n  font-family: ComfortaaLight;\n  font-size: 18px;\n  cursor: pointer;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.navBar .menuWrapper .menuEntry:after {\n  content: \"\";\n  display: block;\n  margin: 0 auto;\n  width: 0;\n  height: 2px;\n  background-color: #c3a368;\n  -webkit-transition: opacity 0.3s ease, width 0.3s ease;\n  transition: opacity 0.3s ease, width 0.3s ease;\n}\n.navBar .menuWrapper .menuEntry:hover:after,\n.navBar .menuWrapper .menuEntry:focus:after,\n.navBar .menuWrapper .menuEntry:active:after,\n.navBar .menuWrapper .menuEntry.active:after {\n  width: 100%;\n}\n.navBar .dropdownMenu {\n  display: none;\n}\n.navBar .burgerMenu {\n  display: none;\n}\n.navBar.onHomeSite {\n  border-bottom: unset;\n}\n.navBar.onHomeSite .homeImageFadeHeader {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#ffffff), to(rgba(255, 255, 255, 0)));\n  background-image: linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0));\n  width: 100%;\n  height: 200px;\n  top: 0;\n  left: 0;\n  position: absolute;\n}\n.navBar.onHomeSite .navbar-logo-wrapper {\n  background-color: unset;\n}\n.navBar.onHomeSite .menuWrapper {\n  background-color: unset;\n}\n@media only screen and (max-width: 768px) {\n  .navBar.onHomeSite .burgerMenu {\n    background-color: unset;\n  }\n  .navBar .navbar-logo-wrapper .navbar-logo:hover .logoHome {\n    display: none;\n  }\n  .navBar .navbar-logo-wrapper .navbar-logo:hover .logoJ {\n    display: block;\n  }\n  .navBar .menuWrapper {\n    display: none;\n  }\n  .navBar .dropdownMenu {\n    display: block;\n    position: absolute;\n    top: 100px;\n    left: 0;\n    width: 100%;\n    background: #d4d2cf;\n    z-index: 1;\n    cursor: pointer;\n  }\n  .navBar .dropdownMenu .menuEntry {\n    padding: 5px 0;\n    text-align: center;\n    text-transform: uppercase;\n    color: #2b2a29;\n    font-family: ComfortaaLight;\n    font-size: 15px;\n    outline: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n  }\n  .navBar .dropdownMenu .menuEntry.active {\n    background: #bfbeba;\n  }\n  .navBar .burgerMenu {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    padding-bottom: 17px;\n    background: white;\n    z-index: 2000;\n    padding-right: 4%;\n  }\n  .navBar .burgerMenu i {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    font-size: 30px;\n    cursor: pointer;\n    color: #2b2a29;\n  }\n  .navBar .burgerMenu i.inactive {\n    display: none;\n  }\n}\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var comp_communication_service_1 = __webpack_require__("./src/app/services/comp-communication.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var angular2_flash_messages_1 = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
var animations_1 = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage, _compCoService) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this._compCoService = _compCoService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.dropdownActive = false;
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success', timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent.prototype.toggleDropdownMenu = function () {
        this.dropdownActive = !this.dropdownActive;
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.less")],
            animations: [
                // trigger('fade',[
                //   transition('void => *', [
                //     style({ opacity: 0}),
                //     animate(2000)
                //   ])
                // ])
                animations_1.trigger('swipe', [
                    animations_1.transition('void => *', [
                        animations_1.style({ transform: 'translateX(+110%)' }),
                        animations_1.animate('200ms ease')
                    ]),
                    animations_1.transition('* => void', [
                        animations_1.animate('200ms ease', animations_1.style({ transform: 'translateX(+110%)' }))
                    ])
                ]),
                animations_1.trigger('fade', [
                    animations_1.transition('void <=> *', [
                        animations_1.style({ opacity: 0 }),
                        animations_1.animate(800)
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            router_1.Router,
            angular2_flash_messages_1.FlashMessagesService,
            comp_communication_service_1.CompCommunicationService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "./src/app/components/photography/photography.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"galleryWrapper animated fadeIn\">\r\n    <div *ngFor=\"let picture of pictures\" class=\"imagePreviewWrapper animated fadeIn {{picture.animationDelay}}\" (click)=\"showPicture(picture)\" >\r\n        <img class=\"picture animationFix\" src=\"{{picture.path}}\" alt=\"Photograph\">\r\n        <div class=\"hoverOverlay animated slideInUp\">\r\n            <span class=\"description\">{{picture.description}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"imagePreviewWrapper pseudoElement\" *ngFor=\"let pseudo of pseudoElements\" ></div>\r\n</div>    \r\n\r\n    \r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/photography/photography.component.less":
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: ComfortaaLight;\n  src: url('Comfortaa-Light.866333be226453f3a24c.ttf');\n}\n.defaultTextTransition {\n  -webkit-transition: color 200ms ease-in-out;\n  transition: color 200ms ease-in-out;\n}\n.quickAnimation {\n  -webkit-animation-duration: 300ms;\n  animation-duration: 300ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.animated-300ms {\n  -webkit-animation-duration: 300ms;\n  animation-duration: 300ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.animationFix {\n  -webkit-backface-visibility: hidden;\n  -webkit-transform: translateZ(0) scale(1, 1);\n  transform: translateZ(0);\n}\n.duration-100ms {\n  -webkit-animation-duration: 100ms;\n  animation-duration: 100ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-200ms {\n  -webkit-animation-duration: 200ms;\n  animation-duration: 200ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-300ms {\n  -webkit-animation-duration: 300ms;\n  animation-duration: 300ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-400ms {\n  -webkit-animation-duration: 400ms;\n  animation-duration: 400ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-500ms {\n  -webkit-animation-duration: 500ms;\n  animation-duration: 500ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-600ms {\n  -webkit-animation-duration: 600ms;\n  animation-duration: 600ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-700ms {\n  -webkit-animation-duration: 700ms;\n  animation-duration: 700ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-800ms {\n  -webkit-animation-duration: 800ms;\n  animation-duration: 800ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-900ms {\n  -webkit-animation-duration: 900ms;\n  animation-duration: 900ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.delay-100ms {\n  -webkit-animation-delay: 100ms;\n  animation-delay: 100ms;\n}\n.delay-200ms {\n  -webkit-animation-delay: 200ms;\n  animation-delay: 200ms;\n}\n.delay-300ms {\n  -webkit-animation-delay: 300ms;\n  animation-delay: 300ms;\n}\n.delay-400ms {\n  -webkit-animation-delay: 400ms;\n  animation-delay: 400ms;\n}\n.delay-500ms {\n  -webkit-animation-delay: 500ms;\n  animation-delay: 500ms;\n}\n.delay-600ms {\n  -webkit-animation-delay: 600ms;\n  animation-delay: 600ms;\n}\n.delay-700ms {\n  -webkit-animation-delay: 700ms;\n  animation-delay: 700ms;\n}\n.delay-800ms {\n  -webkit-animation-delay: 800ms;\n  animation-delay: 800ms;\n}\n.delay-900ms {\n  -webkit-animation-delay: 900ms;\n  animation-delay: 900ms;\n}\n.delay-1000ms {\n  -webkit-animation-delay: 1000ms;\n  animation-delay: 1000ms;\n}\n.delay-1100ms {\n  -webkit-animation-delay: 1100ms;\n  animation-delay: 1100ms;\n}\n.delay-1200ms {\n  -webkit-animation-delay: 1200ms;\n  animation-delay: 1200ms;\n}\n.delay-1300ms {\n  -webkit-animation-delay: 1300ms;\n  animation-delay: 1300ms;\n}\n.delay-1400ms {\n  -webkit-animation-delay: 1400ms;\n  animation-delay: 1400ms;\n}\n.delay-1500ms {\n  -webkit-animation-delay: 1500ms;\n  animation-delay: 1500ms;\n}\n.delay-1600ms {\n  -webkit-animation-delay: 1600ms;\n  animation-delay: 1600ms;\n}\n.delay-1700ms {\n  -webkit-animation-delay: 1700ms;\n  animation-delay: 1700ms;\n}\n.galleryWrapper {\n  margin: 5% 2%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.galleryWrapper .imagePreviewWrapper {\n  width: 30%;\n  min-width: 290px;\n  height: 15vw;\n  min-height: 200px;\n  margin: 5px;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n}\n.galleryWrapper .imagePreviewWrapper:hover .picture {\n  opacity: 0.85;\n}\n.galleryWrapper .imagePreviewWrapper:hover .hoverOverlay {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.galleryWrapper .imagePreviewWrapper .picture {\n  opacity: 1;\n  -webkit-transition: opacity 200ms ease-in-out;\n  transition: opacity 200ms ease-in-out;\n  width: 100%;\n  min-height: 100%;\n  position: relative;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.galleryWrapper .imagePreviewWrapper .hoverOverlay {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  background: rgba(0, 0, 0, 0.75);\n  display: none;\n  -webkit-animation-duration: 300ms;\n  animation-duration: 300ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.galleryWrapper .imagePreviewWrapper .hoverOverlay .description {\n  text-align: center;\n  margin: 0 auto;\n  color: #eee;\n}\n.galleryWrapper .pseudoElement {\n  cursor: initial;\n  height: 0px;\n  min-height: 0px;\n}\n@media screen and (max-width: 768px) {\n  .galleryWrapper .imagePreviewWrapper {\n    width: unset;\n    height: unset;\n    min-height: unset;\n    cursor: initial;\n  }\n  .galleryWrapper .imagePreviewWrapper .picture {\n    min-height: unset;\n    top: unset;\n    -webkit-transform: unset;\n            transform: unset;\n  }\n  .galleryWrapper .imagePreviewWrapper:hover .picture {\n    opacity: 1;\n  }\n  .galleryWrapper .imagePreviewWrapper:hover .hoverOverlay {\n    display: none;\n  }\n}\n"

/***/ }),

/***/ "./src/app/components/photography/photography.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var modal_service_1 = __webpack_require__("./src/app/services/modal.service.ts");
var PhotographyComponent = (function () {
    function PhotographyComponent(_modalService) {
        this._modalService = _modalService;
    }
    PhotographyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildPicturesArray();
        this.pseudoElements = [1, 2]; // Adds 2 empty pseudo elements to fill flex design for last row
        this.initializeIsInMobile();
        window.onresize = function () {
            _this.initializeIsInMobile();
        };
    };
    PhotographyComponent.prototype.initializeIsInMobile = function () {
        var w = window, d = document, e = d.documentElement, g = d.getElementsByTagName('body')[0], x = w.innerWidth || e.clientWidth || g.clientWidth, y = w.innerHeight || e.clientHeight || g.clientHeight;
        if (x <= 768) {
            this.isInMobile = true;
        }
        else {
            this.isInMobile = false;
        }
    };
    PhotographyComponent.prototype.showPicture = function (picture) {
        if (!this.isInMobile) {
            this._modalService.showModal(picture);
        }
    };
    PhotographyComponent.prototype.buildPicturesArray = function () {
        this.pictures = [];
        this.pictures.push({
            'path': "../../../assets/pictures/" + (1) + ".jpg",
            'description': "Laos - Luang Prabang",
            'animationDelay': "delay-100ms"
        });
        this.pictures.push({
            'path': "../../../assets/pictures/" + (3) + ".jpg",
            'description': "Norway - Jotunheimen",
            'animationDelay': "delay-200ms"
        });
        this.pictures.push({
            'path': "../../../assets/pictures/" + (2) + ".jpg",
            'description': "Japan - Tokyo",
            'animationDelay': "delay-300ms"
        });
        this.pictures.push({
            'path': "../../../assets/pictures/" + (10) + ".jpg",
            'description': "Tokyo - Shibuya",
            'animationDelay': "delay-400ms"
        });
        this.pictures.push({
            'path': "../../../assets/pictures/" + (11) + ".jpg",
            'description': "Cambodia - Phnom Penh",
            'animationDelay': "delay-500ms"
        });
        this.pictures.push({
            'path': "../../../assets/pictures/" + (12) + ".jpg",
            'description': "Myanmar - Yangon",
            'animationDelay': "delay-600ms"
        });
        this.pictures.push({
            'path': "../../../assets/pictures/" + (13) + ".jpg",
            'description': "Philippines - Bohol",
            'animationDelay': "delay-700ms"
        });
        this.pictures.push({
            'path': "../../../assets/pictures/" + (6) + ".jpg",
            'description': "New Zealand - Canterbury",
            'animationDelay': "delay-800ms"
        });
        this.pictures.push({
            'path': "../../../assets/pictures/" + (5) + ".jpg",
            'description': "Norway - Jotunheimen",
            'animationDelay': "delay-900ms"
        });
        this.pictures.push({
            'path': "../../../assets/pictures/" + (7) + ".jpg",
            'description': "Philippines - Virgin Island",
            'animationDelay': "delay-1s"
        });
        this.pictures.push({
            'path': "../../../assets/pictures/" + (8) + ".jpg",
            'description': "South Korea - Seoul",
            'animationDelay': "delay-1s"
        });
        this.pictures.push({
            'path': "../../../assets/pictures/" + (20) + ".jpg",
            'description': "South Africa",
            'animationDelay': "delay-1s"
        });
        this.pictures.push({
            'path': "../../../assets/pictures/" + (4) + ".jpg",
            'description': "Laos",
            'animationDelay': "delay-1s"
        });
        this.pictures.push({
            'path': "../../../assets/pictures/" + (21) + ".jpg",
            'description': "New Zealand - Richmond Forest Park",
            'animationDelay': "delay-1s"
        });
        this.pictures.push({
            'path': "../../../assets/pictures/" + (15) + ".jpg",
            'description': "Philippines",
            'animationDelay': "delay-1s"
        });
        this.pictures.push({
            'path': "../../../assets/pictures/" + (16) + ".jpg",
            'description': "After the rain",
            'animationDelay': "delay-1s"
        });
        this.pictures.push({
            'path': "../../../assets/pictures/" + (17) + ".jpg",
            'description': "Kea - New Zealand",
            'animationDelay': "delay-1s"
        });
        this.pictures.push({
            'path': "../../../assets/pictures/" + (18) + ".jpg",
            'description': "Philippines - Virgin Island",
            'animationDelay': "delay-1s"
        });
        this.pictures.push({
            'path': "../../../assets/pictures/" + (19) + ".jpg",
            'description': "Laos - Luang Prabang",
            'animationDelay': "delay-1s"
        });
        this.pictures.push({
            'path': "../../../assets/pictures/" + (9) + ".jpg",
            'description': "Philippines - Panglao Island",
            'animationDelay': "delay-1s"
        });
        this.pictures.push({
            'path': "../../../assets/pictures/" + (14) + ".jpg",
            'description': "Austria - Hinterglemm",
            'animationDelay': "delay-1s"
        });
    };
    PhotographyComponent = __decorate([
        core_1.Component({
            selector: 'app-photography-site',
            template: __webpack_require__("./src/app/components/photography/photography.component.html"),
            styles: [__webpack_require__("./src/app/components/photography/photography.component.less")]
        }),
        __metadata("design:paramtypes", [modal_service_1.ModalService])
    ], PhotographyComponent);
    return PhotographyComponent;
}());
exports.PhotographyComponent = PhotographyComponent;


/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\r\n  <h2 class=\"page-header\">{{user.name}}</h2>\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\">Username : {{user.username}}</li>\r\n    <li class=\"list-group-item\">Email : {{user.email}}</li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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
        core_1.Component({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;


/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n<h2 class=\"page-header\">Register</h2>\r\n<form (submit)=\"onRegisterSubmit()\" >\r\n  <div class=\"form-group\">\r\n    <label for=\"name\">Name</label>\r\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Enter Name\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">Username</label>\r\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" id=\"username\" placeholder=\"Enter Username\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"email\">Email</label>\r\n    <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter Email\">\r\n    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"password\">Password</label>\r\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" id=\"password\" placeholder=\" Enter Password\">\r\n  </div>\r\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n</form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var validate_service_1 = __webpack_require__("./src/app/services/validate.service.ts");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var angular2_flash_messages_1 = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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
        core_1.Component({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [validate_service_1.ValidateService,
            auth_service_1.AuthService,
            router_1.Router,
            angular2_flash_messages_1.FlashMessagesService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;


/***/ }),

/***/ "./src/app/components/travel/article-detail-view/article-detail-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"detail-view-wrapper\">\r\n\r\n  <div class=\"articleHeader\">\r\n    <i class=\"material-icons close-detailView-button\" (click)=\"closeDetailView()\">arrow_back</i>\r\n    <span class=\"headerText\">{{article.articleTitle}}</span>\r\n    <span class=\"articleDate\">{{getFormattedDate(article.articleDate.fullDate)}}</span>\r\n  </div>\r\n\r\n<ng-content ></ng-content>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/travel/article-detail-view/article-detail-view.component.less":
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: ComfortaaLight;\n  src: url('Comfortaa-Light.866333be226453f3a24c.ttf');\n}\n.defaultTextTransition {\n  -webkit-transition: color 200ms ease-in-out;\n  transition: color 200ms ease-in-out;\n}\n.quickAnimation {\n  -webkit-animation-duration: 300ms;\n  animation-duration: 300ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.animated-300ms {\n  -webkit-animation-duration: 300ms;\n  animation-duration: 300ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.animationFix {\n  -webkit-backface-visibility: hidden;\n  -webkit-transform: translateZ(0) scale(1, 1);\n  transform: translateZ(0);\n}\n.duration-100ms {\n  -webkit-animation-duration: 100ms;\n  animation-duration: 100ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-200ms {\n  -webkit-animation-duration: 200ms;\n  animation-duration: 200ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-300ms {\n  -webkit-animation-duration: 300ms;\n  animation-duration: 300ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-400ms {\n  -webkit-animation-duration: 400ms;\n  animation-duration: 400ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-500ms {\n  -webkit-animation-duration: 500ms;\n  animation-duration: 500ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-600ms {\n  -webkit-animation-duration: 600ms;\n  animation-duration: 600ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-700ms {\n  -webkit-animation-duration: 700ms;\n  animation-duration: 700ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-800ms {\n  -webkit-animation-duration: 800ms;\n  animation-duration: 800ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-900ms {\n  -webkit-animation-duration: 900ms;\n  animation-duration: 900ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.delay-100ms {\n  -webkit-animation-delay: 100ms;\n  animation-delay: 100ms;\n}\n.delay-200ms {\n  -webkit-animation-delay: 200ms;\n  animation-delay: 200ms;\n}\n.delay-300ms {\n  -webkit-animation-delay: 300ms;\n  animation-delay: 300ms;\n}\n.delay-400ms {\n  -webkit-animation-delay: 400ms;\n  animation-delay: 400ms;\n}\n.delay-500ms {\n  -webkit-animation-delay: 500ms;\n  animation-delay: 500ms;\n}\n.delay-600ms {\n  -webkit-animation-delay: 600ms;\n  animation-delay: 600ms;\n}\n.delay-700ms {\n  -webkit-animation-delay: 700ms;\n  animation-delay: 700ms;\n}\n.delay-800ms {\n  -webkit-animation-delay: 800ms;\n  animation-delay: 800ms;\n}\n.delay-900ms {\n  -webkit-animation-delay: 900ms;\n  animation-delay: 900ms;\n}\n.delay-1000ms {\n  -webkit-animation-delay: 1000ms;\n  animation-delay: 1000ms;\n}\n.delay-1100ms {\n  -webkit-animation-delay: 1100ms;\n  animation-delay: 1100ms;\n}\n.delay-1200ms {\n  -webkit-animation-delay: 1200ms;\n  animation-delay: 1200ms;\n}\n.delay-1300ms {\n  -webkit-animation-delay: 1300ms;\n  animation-delay: 1300ms;\n}\n.delay-1400ms {\n  -webkit-animation-delay: 1400ms;\n  animation-delay: 1400ms;\n}\n.delay-1500ms {\n  -webkit-animation-delay: 1500ms;\n  animation-delay: 1500ms;\n}\n.delay-1600ms {\n  -webkit-animation-delay: 1600ms;\n  animation-delay: 1600ms;\n}\n.delay-1700ms {\n  -webkit-animation-delay: 1700ms;\n  animation-delay: 1700ms;\n}\n.detail-view-wrapper {\n  max-width: 950px;\n}\n.detail-view-wrapper .articleHeader {\n  border-bottom: 1px solid #aaa;\n  margin: 50px 0 30px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-bottom: 8px;\n}\n.detail-view-wrapper .articleHeader .close-detailView-button {\n  cursor: pointer;\n}\n.detail-view-wrapper .articleHeader .headerText {\n  margin-left: 20px;\n  color: #2b2a29;\n  font-size: 1.75rem;\n}\n.detail-view-wrapper .articleHeader .articleDate {\n  margin-left: auto;\n  text-align: right;\n}\n@media only screen and (max-width: 768px) {\n  .detail-view-wrapper .articleHeader {\n    margin: 0 0 30px;\n  }\n  .detail-view-wrapper .articleHeader .articleDate {\n    display: none;\n  }\n  .detail-view-wrapper .articleHeader .headerText {\n    font-size: 1.2rem !important;\n  }\n}\n"

/***/ }),

/***/ "./src/app/components/travel/article-detail-view/article-detail-view.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var validation_1 = __webpack_require__("./src/app/helperClasses/validation.ts");
var ArticleDetailViewComponent = (function () {
    function ArticleDetailViewComponent(_dateHelper) {
        this._dateHelper = _dateHelper;
        this.detailViewClosing = new core_1.EventEmitter();
    }
    ArticleDetailViewComponent.prototype.ngOnInit = function () {
    };
    ArticleDetailViewComponent.prototype.closeDetailView = function () {
        this.detailViewClosing.next();
    };
    ArticleDetailViewComponent.prototype.getFormattedDate = function (date) {
        return this._dateHelper.getSimplifiedDate(new Date(date));
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ArticleDetailViewComponent.prototype, "article", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ArticleDetailViewComponent.prototype, "detailViewClosing", void 0);
    ArticleDetailViewComponent = __decorate([
        core_1.Component({
            selector: 'article-detail-view',
            template: __webpack_require__("./src/app/components/travel/article-detail-view/article-detail-view.component.html"),
            styles: [__webpack_require__("./src/app/components/travel/article-detail-view/article-detail-view.component.less")]
        }),
        __metadata("design:paramtypes", [validation_1.DateHelper])
    ], ArticleDetailViewComponent);
    return ArticleDetailViewComponent;
}());
exports.ArticleDetailViewComponent = ArticleDetailViewComponent;


/***/ }),

/***/ "./src/app/components/travel/travel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"travelSiteWrapper\">\r\n    <!-- Dynamic Content Area -->\r\n    <modal-view class=\"editView\" (closing)=\"closeModal()\" *ngIf=\"editModalActive && articleToEdit\">\r\n        <div class=\"editViewContentWrapper\">\r\n            <label>Title: <input class=\"inputItem\" type=\"text\" [(ngModel)]=\"articleToEdit.articleTitle\"></label>\r\n            <label>Thumbnail: <input class=\"inputItem\" type=\"file\" (change)=\"fileChanged($event)\"></label>\r\n            <label class=\"contentTextAreaWrapper\">Content: <textarea class=\"inputItem contentTextArea\" type=\"text\" [(ngModel)]=\"articleToEdit.articleContent\"></textarea></label>\r\n            <label>Date: <input class=\"inputItem\" type=\"date\" [(ngModel)]=\"articleEditDateRaw\"></label>\r\n            <label>Group: <input class=\"inputItem\" type=\"text\" [(ngModel)]=\"articleToEdit.articleGroup\"></label>\r\n            <div class=\"actionWrapper\">\r\n                <div class=\"submitEditButton\" (click)=\"submitEdit()\">Submit</div>\r\n                <div class=\"deleteButton\" (click)=\"deleteArticle()\">Delete</div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </modal-view>\r\n\r\n    <article-detail-view class=\"animated fadeIn\" *ngIf=\"chosenArticle && detailViewShown\" [article]=\"chosenArticle\"\r\n        (detailViewClosing)=\"closeDetailView($event)\">\r\n        <div class=\"articleContent\" [innerHTML]=\"chosenArticle.articleContent\"></div>\r\n    </article-detail-view>\r\n\r\n    <!-- Static Content Area -->\r\n\r\n    <div class=\"content-area animated slideInLeft\" *ngIf=\"!detailViewShown\">\r\n\r\n        <h2 class=\"content-area-header\">Articles <span class=\"articleGroupSoecification\">{{selectedArticleGroup}}</span></h2>\r\n\r\n        <div class=\"articles\">\r\n            <div (click)=\"showDetailView(article)\" class=\"article animated fadeIn\" *ngFor=\"let article of renderedArticles\">\r\n                <div class=\"article-thumbnail\" [ngStyle]=\"{ 'background-image': 'url(' + article.thumbnailUrl + ')'}\"></div>\r\n                <div class=\"articleInfo\">\r\n                    <div class=\"articleHeader\">\r\n                        <div class=\"article-title\">{{article.articleTitle}} <i (click)=\"editArticle($event, article)\"\r\n                                *ngIf=\"_authService.loggedIn()\" class=\"material-icons editButton\">edit</i></div>\r\n                        <span class=\"article-date\">{{getFormattedDate(article.articleDate.fullDate)}}</span>\r\n                    </div>\r\n                    <div class=\"article-description\" [innerHTML]=\"article.articleContent\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"timelineArea animated slideInRight\">\r\n        <h2 class=\"timelineHeader\">Timeline</h2>\r\n        <div class=\"timelineContent\">\r\n            <div class=\"timelineSection\" *ngFor=\"let timelineSection of timelineList\">\r\n                <div class=\"timelineSectionHeader\" [class.active]=\"timelineActiveStateArray[timelineSection._id]\"\r\n                    (click)=\"timelineYearSelected(timelineSection)\">\r\n                    <span *ngIf=\"timelineSection._id != currentYear\">{{timelineSection._id}}</span>\r\n                    <span *ngIf=\"timelineSection._id == currentYear\">Now</span>\r\n                </div>\r\n                <div class=\"timelineSectionContent\">\r\n                    <span class=\"timelineSectionItem\" [class.active]=\"timelineActiveStateArray[articleGroupItem.articleGroup]\"\r\n                        (click)=\"articleGroupSelected(articleGroupItem)\" *ngFor=\"let articleGroupItem of timelineSection.articleGroups\">\r\n                        {{articleGroupItem.articleGroup}}\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- <div class=\"timelineAreaMobile animated slideInRight\">\r\n        <div class=\"innerScrollWrapper\">\r\n            <div class=\"testChild\"></div>\r\n            <div class=\"testChild\"></div>\r\n            <div class=\"testChild\"></div>\r\n            <div class=\"testChild\"></div>\r\n            <div class=\"testChild\"></div>\r\n            <div class=\"testChild\"></div>\r\n            <div class=\"testChild\"></div>\r\n            <div class=\"testChild\"></div>\r\n            <div class=\"testChild\"></div>\r\n            <div class=\"testChild\"></div>\r\n            <div class=\"testChild\"></div>\r\n            <div class=\"testChild\"></div>\r\n            <div class=\"testChild\"></div>\r\n            <div class=\"testChild\"></div>\r\n            <div class=\"testChild\"></div>\r\n            <div class=\"testChild\"></div>\r\n            <div class=\"testChild\"></div>\r\n            <div class=\"testChild\"></div>\r\n            <div class=\"testChild\"></div>\r\n            <div class=\"testChild\"></div>\r\n        </div>\r\n\r\n    </div> -->\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/travel/travel.component.less":
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: ComfortaaLight;\n  src: url('Comfortaa-Light.866333be226453f3a24c.ttf');\n}\n.defaultTextTransition {\n  -webkit-transition: color 200ms ease-in-out;\n  transition: color 200ms ease-in-out;\n}\n.quickAnimation {\n  -webkit-animation-duration: 300ms;\n  animation-duration: 300ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.animated-300ms {\n  -webkit-animation-duration: 300ms;\n  animation-duration: 300ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.animationFix {\n  -webkit-backface-visibility: hidden;\n  -webkit-transform: translateZ(0) scale(1, 1);\n  transform: translateZ(0);\n}\n.duration-100ms {\n  -webkit-animation-duration: 100ms;\n  animation-duration: 100ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-200ms {\n  -webkit-animation-duration: 200ms;\n  animation-duration: 200ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-300ms {\n  -webkit-animation-duration: 300ms;\n  animation-duration: 300ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-400ms {\n  -webkit-animation-duration: 400ms;\n  animation-duration: 400ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-500ms {\n  -webkit-animation-duration: 500ms;\n  animation-duration: 500ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-600ms {\n  -webkit-animation-duration: 600ms;\n  animation-duration: 600ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-700ms {\n  -webkit-animation-duration: 700ms;\n  animation-duration: 700ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-800ms {\n  -webkit-animation-duration: 800ms;\n  animation-duration: 800ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.duration-900ms {\n  -webkit-animation-duration: 900ms;\n  animation-duration: 900ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.delay-100ms {\n  -webkit-animation-delay: 100ms;\n  animation-delay: 100ms;\n}\n.delay-200ms {\n  -webkit-animation-delay: 200ms;\n  animation-delay: 200ms;\n}\n.delay-300ms {\n  -webkit-animation-delay: 300ms;\n  animation-delay: 300ms;\n}\n.delay-400ms {\n  -webkit-animation-delay: 400ms;\n  animation-delay: 400ms;\n}\n.delay-500ms {\n  -webkit-animation-delay: 500ms;\n  animation-delay: 500ms;\n}\n.delay-600ms {\n  -webkit-animation-delay: 600ms;\n  animation-delay: 600ms;\n}\n.delay-700ms {\n  -webkit-animation-delay: 700ms;\n  animation-delay: 700ms;\n}\n.delay-800ms {\n  -webkit-animation-delay: 800ms;\n  animation-delay: 800ms;\n}\n.delay-900ms {\n  -webkit-animation-delay: 900ms;\n  animation-delay: 900ms;\n}\n.delay-1000ms {\n  -webkit-animation-delay: 1000ms;\n  animation-delay: 1000ms;\n}\n.delay-1100ms {\n  -webkit-animation-delay: 1100ms;\n  animation-delay: 1100ms;\n}\n.delay-1200ms {\n  -webkit-animation-delay: 1200ms;\n  animation-delay: 1200ms;\n}\n.delay-1300ms {\n  -webkit-animation-delay: 1300ms;\n  animation-delay: 1300ms;\n}\n.delay-1400ms {\n  -webkit-animation-delay: 1400ms;\n  animation-delay: 1400ms;\n}\n.delay-1500ms {\n  -webkit-animation-delay: 1500ms;\n  animation-delay: 1500ms;\n}\n.delay-1600ms {\n  -webkit-animation-delay: 1600ms;\n  animation-delay: 1600ms;\n}\n.delay-1700ms {\n  -webkit-animation-delay: 1700ms;\n  animation-delay: 1700ms;\n}\n.active {\n  font-weight: bold;\n  color: black;\n}\n.articleContent::ng-deep img {\n  width: 100%;\n  margin: 20px 0;\n}\n@media screen and (min-width: calc(768px + 1px)) {\n  .travelSiteWrapper {\n    width: 100%;\n    min-height: 100%;\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-rows: auto;\n        grid-template-rows: auto;\n    -ms-grid-columns: 70% 30%;\n        grid-template-columns: 70% 30%;\n        grid-template-areas: \"content timeline\";\n    padding: 0 5% 50px;\n  }\n  .travelSiteWrapper .content-area {\n    -ms-grid-row: 1;\n    -ms-grid-column: 1;\n    grid-area: content;\n  }\n  .travelSiteWrapper .content-area .content-area-header {\n    width: 100%;\n    max-width: 850px;\n    margin-top: 50px;\n    padding-bottom: 8px;\n    border-bottom: 1px solid #aaa;\n  }\n  .travelSiteWrapper .content-area .articles .article {\n    height: 250px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    max-width: 850px;\n    border: 1px solid #DDD;\n    -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.14);\n            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.14);\n    margin: 30px 0;\n    cursor: pointer;\n    position: relative;\n  }\n  .travelSiteWrapper .content-area .articles .article .wrapper {\n    background: grey;\n    width: 100%;\n    max-width: 800px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n  .travelSiteWrapper .content-area .articles .article .wrapper .header {\n    background: steelblue;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 8px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    margin-bottom: 30px;\n  }\n  .travelSiteWrapper .content-area .articles .article .wrapper .header .title {\n    background: orange;\n    font-size: 1.6rem;\n  }\n  .travelSiteWrapper .content-area .articles .article .wrapper .header .date {\n    background: limegreen;\n    margin: 16px;\n    margin-left: auto;\n  }\n  .travelSiteWrapper .content-area .articles .article .wrapper .content {\n    background: #444;\n    width: 100%;\n  }\n  .travelSiteWrapper .content-area .articles .article .articleInfo {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    margin: 16px;\n    overflow: hidden;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n  .travelSiteWrapper .content-area .articles .article .articleInfo .articleHeader {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    margin-bottom: 16px;\n  }\n  .travelSiteWrapper .content-area .articles .article .articleInfo .articleHeader .article-title {\n    width: 100%;\n    font-size: 1.4rem;\n  }\n  .travelSiteWrapper .content-area .articles .article .articleInfo .articleHeader .article-title .editButton {\n    margin-left: 20px;\n    -webkit-transition: -webkit-transform 100ms ease-in-out;\n    transition: -webkit-transform 100ms ease-in-out;\n    transition: transform 100ms ease-in-out;\n    transition: transform 100ms ease-in-out, -webkit-transform 100ms ease-in-out;\n  }\n  .travelSiteWrapper .content-area .articles .article .articleInfo .articleHeader .article-title .editButton:hover {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n  }\n  .travelSiteWrapper .content-area .articles .article .articleInfo .articleHeader .article-date {\n    width: 100%;\n    margin-top: 8px;\n    margin-left: auto;\n  }\n  .travelSiteWrapper .content-area .articles .article .articleInfo .article-description {\n    overflow: hidden;\n    width: 100%;\n    max-height: 9em;\n    position: relative;\n  }\n  .travelSiteWrapper .content-area .articles .article .articleInfo .article-description:after {\n    content: \"...\";\n    position: absolute;\n    right: 8px;\n    bottom: 0;\n  }\n  .travelSiteWrapper .content-area .articles .article .articleInfo .article-description::ng-deep img {\n    display: none;\n  }\n  .travelSiteWrapper .content-area .articles .article .article-thumbnail {\n    width: 250px;\n    height: 100%;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n  }\n  .travelSiteWrapper .timelineArea {\n    -ms-grid-row: 1;\n    -ms-grid-column: 2;\n    grid-area: timeline;\n  }\n  .travelSiteWrapper .timelineArea .timelineHeader {\n    width: 80%;\n    margin: 50px 0 0 auto;\n    padding-bottom: 8px;\n    border-bottom: 1px solid #aaa;\n  }\n  .travelSiteWrapper .timelineArea .timelineContent {\n    width: 80%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin: 20px 0 0 auto;\n  }\n  .travelSiteWrapper .timelineArea .timelineContent:after {\n    content: \"\";\n    width: 11px;\n    height: 11px;\n    background: #5e5e5e;\n    border-radius: 50%;\n    position: relative;\n    left: 19px;\n  }\n  .travelSiteWrapper .timelineArea .timelineContent .timelineSection {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  .travelSiteWrapper .timelineArea .timelineContent .timelineSection .timelineSectionHeader {\n    padding: 8px;\n    position: relative;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n  }\n  .travelSiteWrapper .timelineArea .timelineContent .timelineSection .timelineSectionHeader:before {\n    opacity: 0;\n    -webkit-transition: opacity 200ms ease-in-out;\n    transition: opacity 200ms ease-in-out;\n    content: \"\";\n  }\n  .travelSiteWrapper .timelineArea .timelineContent .timelineSection .timelineSectionHeader:after {\n    content: \"\";\n    opacity: 0;\n    -webkit-transition: opacity 200ms ease-in-out;\n    transition: opacity 200ms ease-in-out;\n  }\n  .travelSiteWrapper .timelineArea .timelineContent .timelineSection .timelineSectionHeader:hover {\n    color: #000000;\n  }\n  .travelSiteWrapper .timelineArea .timelineContent .timelineSection .timelineSectionHeader:hover:before {\n    opacity: 1;\n    content: \"- \";\n    position: absolute;\n    left: -3px;\n  }\n  .travelSiteWrapper .timelineArea .timelineContent .timelineSection .timelineSectionHeader:hover:after {\n    opacity: 1;\n    content: \" -\";\n  }\n  .travelSiteWrapper .timelineArea .timelineContent .timelineSection .timelineSectionContent {\n    margin-left: 24px;\n    padding-left: 24px;\n    border-left: 1px solid #aaa;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n  }\n  .travelSiteWrapper .timelineArea .timelineContent .timelineSection .timelineSectionContent .timelineSectionItem {\n    margin: 8px;\n    padding: 8px;\n    cursor: pointer;\n    position: relative;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    -webkit-transition: color 200ms ease-in-out;\n    transition: color 200ms ease-in-out;\n  }\n  .travelSiteWrapper .timelineArea .timelineContent .timelineSection .timelineSectionContent .timelineSectionItem:before {\n    opacity: 0;\n    -webkit-transition: opacity 200ms ease-in-out;\n    transition: opacity 200ms ease-in-out;\n    content: \"\";\n  }\n  .travelSiteWrapper .timelineArea .timelineContent .timelineSection .timelineSectionContent .timelineSectionItem:after {\n    content: \"\";\n    opacity: 0;\n    -webkit-transition: opacity 200ms ease-in-out, text-shadow 200ms ease-in-out;\n    transition: opacity 200ms ease-in-out, text-shadow 200ms ease-in-out;\n  }\n  .travelSiteWrapper .timelineArea .timelineContent .timelineSection .timelineSectionContent .timelineSectionItem:hover {\n    color: #000000;\n  }\n  .travelSiteWrapper .timelineArea .timelineContent .timelineSection .timelineSectionContent .timelineSectionItem:hover:before {\n    opacity: 1;\n    content: \"- \";\n    position: absolute;\n    left: -3px;\n  }\n  .travelSiteWrapper .timelineArea .timelineContent .timelineSection .timelineSectionContent .timelineSectionItem:hover:after {\n    opacity: 1;\n    content: \" -\";\n  }\n  .travelSiteWrapper .editViewContentWrapper {\n    height: 100%;\n  }\n  .travelSiteWrapper .editViewContentWrapper > * {\n    width: 100%;\n  }\n  .travelSiteWrapper .editViewContentWrapper .inputItem,\n  .travelSiteWrapper .editViewContentWrapper .submitEditButton,\n  .travelSiteWrapper .editViewContentWrapper .deleteButton {\n    margin-bottom: 16px;\n  }\n  .travelSiteWrapper .editViewContentWrapper .actionWrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .travelSiteWrapper .editViewContentWrapper .actionWrapper .submitEditButton {\n    width: 100px;\n    background: #6FAC01;\n    padding: 8px;\n    cursor: pointer;\n    margin-right: 16px;\n  }\n  .travelSiteWrapper .editViewContentWrapper .actionWrapper .deleteButton {\n    width: 100px;\n    background: #c4342a;\n    padding: 8px;\n    cursor: pointer;\n  }\n  .travelSiteWrapper .editViewContentWrapper .contentTextAreaWrapper .contentTextArea {\n    width: 100%;\n    min-height: 60vh;\n  }\n}\n@media screen and (max-width: 768px) {\n  .travelSiteWrapper {\n    padding: 6.5%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  .travelSiteWrapper .content-area {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  .travelSiteWrapper .content-area .content-area-header {\n    border-bottom: 1px solid #aaa;\n  }\n  .travelSiteWrapper .content-area .articles .article {\n    height: 220px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    border: 1px solid #DDD;\n    -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.14);\n            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.14);\n    margin: 30px 0;\n    position: relative;\n  }\n  .travelSiteWrapper .content-area .articles .article .articleInfo {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    padding: 8px;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  .travelSiteWrapper .content-area .articles .article .articleInfo .articleHeader {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding-bottom: 8px;\n    border-bottom: 1px solid #aaa;\n  }\n  .travelSiteWrapper .content-area .articles .article .articleInfo .articleHeader .article-title {\n    z-index: 1000;\n  }\n  .travelSiteWrapper .content-area .articles .article .articleInfo .articleHeader .article-date {\n    margin-left: auto;\n  }\n  .travelSiteWrapper .content-area .articles .article .articleInfo .article-description {\n    overflow: hidden;\n    width: 100%;\n    margin-top: 8px;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n  }\n  .travelSiteWrapper .content-area .articles .article .articleInfo .article-description::ng-deep img {\n    display: none;\n  }\n  .travelSiteWrapper .content-area .articles .article .article-thumbnail {\n    display: none;\n  }\n  .travelSiteWrapper .timelineArea {\n    display: none !important;\n  }\n  .travelSiteWrapper .timelineArea .timelineHeader {\n    border-bottom: 1px solid #aaa;\n  }\n  .travelSiteWrapper .timelineAreaMobile {\n    width: 100%;\n    height: 75px;\n    overflow: hidden;\n  }\n  .travelSiteWrapper .timelineAreaMobile .innerScrollWrapper {\n    overflow-x: scroll;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    height: 100%;\n    padding-bottom: 17px;\n    /* Increase/decrease this value for cross-browser compatibility */\n    -webkit-box-sizing: content-box;\n            box-sizing: content-box;\n    /* So the width will be 100% + 17px */\n  }\n  .travelSiteWrapper .timelineAreaMobile .innerScrollWrapper .testChild {\n    width: 100px;\n    background: red;\n    margin: 0 8px;\n    min-width: 100px;\n  }\n  .editViewContentWrapper {\n    height: 100%;\n  }\n  .editViewContentWrapper > * {\n    width: 100%;\n  }\n  .editViewContentWrapper .inputItem,\n  .editViewContentWrapper .submitEditButton,\n  .editViewContentWrapper .deleteButton {\n    margin-bottom: 16px;\n  }\n  .editViewContentWrapper .actionWrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .editViewContentWrapper .actionWrapper .submitEditButton {\n    width: 100px;\n    background: #6FAC01;\n    padding: 8px;\n    margin-right: 16px;\n  }\n  .editViewContentWrapper .actionWrapper .deleteButton {\n    width: 100px;\n    background: #c4342a;\n    padding: 8px;\n  }\n  .editViewContentWrapper .contentTextAreaWrapper .contentTextArea {\n    width: 100%;\n    min-height: 60vh;\n  }\n}\n"

/***/ }),

/***/ "./src/app/components/travel/travel.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var articles_service_1 = __webpack_require__("./src/app/services/articles.service.ts");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var validation_1 = __webpack_require__("./src/app/helperClasses/validation.ts");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var TravelComponent = (function () {
    function TravelComponent(_articleService, _authService, DateHelper, sanitized) {
        this._articleService = _articleService;
        this._authService = _authService;
        this.DateHelper = DateHelper;
        this.sanitized = sanitized;
        this.timelineActiveStateArray = [];
        this.selectedArticleGroup = "";
        this.allArticles = [];
        this.detailViewShown = false;
        this.currentYear = new Date().getFullYear().toString();
        this.editModalActive = false;
    }
    TravelComponent.prototype.ngOnInit = function () {
        var _this = this;
        //    this.articleGroups= []; //TODO: remove me when GET from backend
        this.timelineList = [];
        this.renderedArticles = [];
        // this.initArticles(); //TODO: remove me when GET from backend
        // this.initArticleGroups(); // TODO: Remove me when GET remove me when GET from backend
        // this.getArticleGroups();
        this.loadArticles();
        this.timelineActiveStateArray["initialKey"] = false;
        this.fileReader = new FileReader();
        this.fileReader.addEventListener("load", function () {
            _this.articleToEdit.thumbnailUrl = _this.fileReader.result.toString();
        }, false);
    };
    /**
     * Sorts the timeline list ranked latest first article groups and articles insite each section
     * TODO Put this into article Service
     */
    TravelComponent.prototype.sortTimelineList = function () {
        for (var l = 0; l < this.timelineList.length; l++) {
            var yearSection = this.timelineList[l];
            // _id, articleGroups[]
            //Sort articles of all groups within a section
            for (var k = 0; k < yearSection.articleGroups.length; k++) {
                var articleGroup = yearSection.articleGroups[k];
                var tempSortedArticlesArray = [];
                //sorts the articles within a single group 
                for (var j = 0; j < articleGroup.articles.length; j++) {
                    // articleGroup (name) , articles []
                    var articleToSort = articleGroup.articles[j];
                    //additionally also modify its content to safehtml
                    articleToSort.articleContent = this.transformToSaveHtml(articleToSort.articleContent);
                    //inititlize array for first element
                    if (tempSortedArticlesArray.length == 0) {
                        tempSortedArticlesArray.push(articleToSort);
                    }
                    else {
                        //Sort the actual article into right place
                        for (var i = 0; i < tempSortedArticlesArray.length; i++) {
                            var sortedArticle = tempSortedArticlesArray[i];
                            var articleToSortDate = new Date(articleToSort.articleDate.fullDate.toString());
                            var sortedArticleDate = new Date(sortedArticle.articleDate.fullDate.toString());
                            //Insert at index if date newer than element
                            if (articleToSortDate > sortedArticleDate) {
                                tempSortedArticlesArray.splice(i, 0, articleToSort);
                                break;
                            }
                            else if (i == tempSortedArticlesArray.length - 1) {
                                tempSortedArticlesArray.push(articleToSort); //must be oldest if couldt splice in before
                                break;
                            }
                        }
                    }
                }
                //Now all the articles are sorted within one group
                //--> assign sorted to origin
                articleGroup.articles = tempSortedArticlesArray;
            }
            //now the articles inside the articlegroups are sorted
            //each [0] element is the latest
            var tempArticleGroupArr = [];
            //go through the groups to re-arrange them
            for (var i = 0; i < yearSection.articleGroups.length; i++) {
                var articleGroup = yearSection.articleGroups[i];
                if (tempArticleGroupArr.length == 0) {
                    tempArticleGroupArr.push(articleGroup);
                }
                else {
                    //Go through the already sorted arr to sort in the new group
                    for (var j = 0; j < tempArticleGroupArr.length; j++) {
                        var sortedArticleGroup = tempArticleGroupArr[j];
                        var groupToSortDate = new Date(articleGroup.articles[0].articleDate.fullDate.toString());
                        var sortedGroupDate = new Date(sortedArticleGroup.articles[0].articleDate.fullDate.toString());
                        if (groupToSortDate > sortedGroupDate) {
                            tempArticleGroupArr.splice(j, 0, articleGroup);
                            break;
                        }
                        else if (j == tempArticleGroupArr.length - 1) {
                            tempArticleGroupArr.push(articleGroup);
                            break;
                        }
                    }
                }
            }
            yearSection.articleGroups = tempArticleGroupArr;
        }
        this.setAllArticles();
    };
    TravelComponent.prototype.getFormattedDate = function (date) {
        return this.DateHelper.getSimplifiedDate(new Date(date));
    };
    TravelComponent.prototype.closeModal = function () {
        this.editModalActive = false;
    };
    TravelComponent.prototype.editArticle = function (e, article) {
        e.stopPropagation();
        this.articleToEdit = article;
        var safehtml = article.articleContent;
        this.articleEditDateRaw = this.DateHelper.formatDate(article.articleDate.fullDate); //new Date(Date.parse(article.articleDate.fullDate.toString()));    
        this.editModalActive = true;
    };
    TravelComponent.prototype.submitEdit = function () {
        var parsedDate = new Date(Date.parse(this.articleEditDateRaw));
        this.articleToEdit.articleDate = this.DateHelper.getIDateFromDate(parsedDate);
        this._articleService.editArticle(this.articleToEdit);
        this.closeModal();
    };
    TravelComponent.prototype.deleteArticle = function () {
        if (confirm("Do you really want to delete the article " + this.articleToEdit.articleTitle) == true) {
            this._articleService.deleteArticle(this.articleToEdit);
        }
        this.closeModal();
    };
    /**
     * Gets called when choosing an article
     * @param article Chosen article the user selected
     */
    TravelComponent.prototype.showDetailView = function (article) {
        this.detailViewShown = true;
        this.chosenArticle = article;
    };
    TravelComponent.prototype.transformToSaveHtml = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    /**
     * Gets called when the detail-view component triggers the 'closingDetailView' event
     */
    TravelComponent.prototype.closeDetailView = function () {
        this.detailViewShown = false;
    };
    TravelComponent.prototype.fileChanged = function (event) {
        var chosenThumbnail = event.target.files[0];
        this.fileReader.readAsDataURL(chosenThumbnail);
        // var target: HTMLInputElement = event.target as HTMLInputElement;
        // for(var i=0;i < target.files.length; i++) {
        //     this._imgUpload.uploadImage(target.files[i]).subscribe((resObj)=>{
        //       console.log(resObj);        
        //     })
        // }  
    };
    /**
     * Gets called when the request finished getting all articles and the property TimelineList is set.
     */
    TravelComponent.prototype.articlesLoaded = function () {
        if (this.timelineList != null && this.timelineList.length > 0) {
            this.sortTimelineList();
        }
    };
    /**
     * gets all of the articles from the Group-section listed and pushes them into a single array
     */
    TravelComponent.prototype.setAllArticles = function () {
        var _this = this;
        this.timelineList.forEach(function (section) {
            section.articleGroups.forEach(function (articleGroup) {
                _this.allArticles = _this.allArticles.concat(articleGroup.articles);
            });
        });
        this.timelineYearSelected(this.timelineList[0]);
        //  this.allArticles.reverse();// Why exactly? doesnt array.concat push the elements in back?
    };
    TravelComponent.prototype.loadArticles = function () {
        var _this = this;
        this._articleService.getGroupedArticles().subscribe(function (articleResponseObject) {
            _this.timelineList = articleResponseObject.articles;
            _this.articlesLoaded();
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    /**
     * Applies the filter when a year is chosen in the Timeline
     * @param section selected section
     */
    TravelComponent.prototype.timelineYearSelected = function (section) {
        var _this = this;
        this.renderedArticles = [];
        this.detailViewShown = false;
        var currentYear = (new Date()).getFullYear();
        if (section._id == currentYear.toString()) {
            this.renderedArticles = this.allArticles;
            this.setActiveFilterHeader(null);
        }
        else {
            section.articleGroups.forEach(function (articleGroup) {
                _this.renderedArticles = _this.renderedArticles.concat(articleGroup.articles);
            });
            this.setActiveFilterHeader(section._id);
        }
        this.activateTimelineNode(section._id);
        // this.activateNode(section._id);
    };
    /**
   * Applies the filter for a specific articleGroup
   * @param articleGroup selected ArticleGroup
   */
    TravelComponent.prototype.articleGroupSelected = function (articleGroup) {
        this.detailViewShown = false;
        this.renderedArticles = [];
        this.renderedArticles = this.renderedArticles.concat(articleGroup.articles);
        this.activateTimelineNode(articleGroup.articleGroup); //articleGroup is actually the name for the group
        //this.activateNode(articleGroup.id);
        this.setActiveFilterHeader(articleGroup.articleGroup);
    };
    TravelComponent.prototype.setActiveFilterHeader = function (header) {
        if (header != null) {
            this.selectedArticleGroup = " - " + header;
        }
        else {
            this.selectedArticleGroup = "";
        }
    };
    /**
     * Highlights the currently active Timeline Filter Node
     * @param id Not actual any ID but what is given here will be stored as a key in an a associative array. Put _id (as sectionYear) or articleGroup (e.g "CDT") in here
     */
    TravelComponent.prototype.activateTimelineNode = function (id) {
        var key;
        for (key in this.timelineActiveStateArray) {
            this.timelineActiveStateArray[key] = false;
            if (key == id) {
                this.timelineActiveStateArray[key] = true;
            }
            else {
                this.timelineActiveStateArray["" + id] = true;
            }
        }
    };
    TravelComponent = __decorate([
        core_1.Component({
            selector: 'app-travel-site',
            template: __webpack_require__("./src/app/components/travel/travel.component.html"),
            styles: [__webpack_require__("./src/app/components/travel/travel.component.less")]
        }),
        __metadata("design:paramtypes", [articles_service_1.ArticlesService,
            auth_service_1.AuthService,
            validation_1.DateHelper,
            platform_browser_1.DomSanitizer])
    ], TravelComponent);
    return TravelComponent;
}());
exports.TravelComponent = TravelComponent;
/**
 * Will be replaced ba a call GET '/getArticleGroups'
 */
// private getArticleGroups(){
//     this.timelineList.push(
//       {
//       year: 2018,
//       articleGroups: [this.articleGroups[0],this.articleGroups[1],this.articleGroups[2]],
//       id: "0"
//       },
//       {
//         year: 2017,
//         articleGroups: [this.articleGroups[3],this.articleGroups[4]],
//         id: "1"
//       },
//       {
//         year: 2016,
//         articleGroups: [this.articleGroups[5]],
//         id: "2"
//       }  
//     )
//     if(this.timelineList.length!= 0){
//       this.timelineList[0].year= "Now"
//     }
//     this.timelineList.forEach((section)=>{
//       this.timelineActiveStateArray[section.id]=false
//     })
// }
// //TODO: Gets Remove when GETting from backend
// initArticles(){
//   this.articles.push( 
//   {
//     articleTitle: "Trip to CDT 1",
//     article: ""
//   },
//   {
//     articleTitle: "Now on CDT 2",
//     article: ""
//   },
//   {
//     articleTitle: "Almost done",
//     article: ""
//   },
//   {
//     articleTitle: "Trip to South Africa",
//     article: ""
//   },
//   {
//     articleTitle: "Trip to Scotland",
//     article: ""
//   },
//   {
//     articleTitle: "Trip to Poland",
//     article: ""
//   },
//   {
//     articleTitle: "Trip to Pyrenees",
//     article: ""
//   },
//   {
//     articleTitle: "Trip to Norway",
//     article: ""
//   })
//   this.renderedArticles= this.articles;
// }
// //TODO: Gets removed when GETting from backend
// initArticleGroups(){
//   this.articleGroups.push({
//     groupName: "CDT",
//     groupYear: 2018,
//     groupArticles:[this.articles[0],this.articles[1],this.articles[2]],
//     id: "10"
//   },
//   {
//     groupName: "South Africa",
//     groupYear: 2018,
//     groupArticles:[this.articles[3]],
//     id: "11"
//   },
//   {
//     groupName: "Scotland",
//     groupYear: 2018,
//     groupArticles:[this.articles[4]],
//     id: "12"
//   },
//   {
//     groupName: "Poland",
//     groupYear: 2017,
//     groupArticles:[this.articles[5]],
//     id: "13"
//   },
//   {
//     groupName: "Pyrenees",
//     groupYear: 2017,
//     groupArticles:[this.articles[6]],
//     id: "14"
//   },
//   {
//     groupName: "Norway",
//     groupYear: 2016,
//     groupArticles:[this.articles[7]],
//     id: "15"
//   }
//   )
//   this.articleGroups.forEach((articleGroup)=>{
//     this.timelineActiveStateArray[articleGroup.id]=false;
//   });
// }
// {"_id" : "asd","articleTitle":"PostTrail","articleContent":"I am its contente","articleDate" : {"year" : "2018","fullDate" : "15-12-2018"},"group" : "CDTT"}
// {_id:"sad547er4w2v5x85b8", name:"Jhon", jobTime:600, floor:2, dept:5, age:25},
// {age:22, floors:[{floor:2,persons:[{name:"Anne",jobTime:280,dept:8}]}]},
// {year:2017, articleGroups:[{name:"cdt",articles:[{name:"Anne",jobTime:280,dept:8}]}]}
// db.articles.aggregate([  { "$group": {    "_id": {      "year": "$articleDate.year",      "articleGroup": "$group",    },    "articles": { "$push": {      "articleTitle": "$articleTitle",      "articleContent": "$articleContent",      "articleDate": "$articleDate",      "articleGroup": "$group"    }}  }},  { "$group": {    "_id": "$_id.year","articleGroups": { "$push": {"articleGroup": "$_id.articleGroup","articles": "$articles",}}}}]).pretty()
// [
//   { "$group": {
//     "_id": {
//       "age": "$age",
//       "floor": "$floor",
//     },
//     "persons": { "$push": {
//       "name": "$name",
//       "jobTime": "$jobTime",
//       "dept": "$dept"
//     }}
//   }},
//   { "$group": {
//     "_id": "$_id.age",
//     "floors": { "$push": {
//       "floor": "$_id.floor",
//       "persons": "$persons"
//     }}
//   }}
// ]


/***/ }),

/***/ "./src/app/components/work/work.component.html":
/***/ (function(module, exports) {

module.exports = "<p>Im the work component</p>\r\n\r\n\r\n<!-- <modal-view title=\"dynamicTitle\">\r\n    This content comes from the parent component.\r\n    I want to add some <b>HTML content</b>\r\n    into it with dynamic expressions to display the {{name}}\r\n    of the current user.\r\n</modal-view> -->"

/***/ }),

/***/ "./src/app/components/work/work.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/work/work.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var WorkComponent = (function () {
    function WorkComponent() {
    }
    WorkComponent.prototype.ngOnInit = function () {
    };
    WorkComponent = __decorate([
        core_1.Component({
            selector: 'app-work-site',
            template: __webpack_require__("./src/app/components/work/work.component.html"),
            styles: [__webpack_require__("./src/app/components/work/work.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], WorkComponent);
    return WorkComponent;
}());
exports.WorkComponent = WorkComponent;


/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
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
        core_1.Injectable(),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;


/***/ }),

/***/ "./src/app/helperClasses/validation.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var DateHelper = (function () {
    function DateHelper() {
    }
    /**
     * returns "2018-11-15" from a date.toString() value
     * getFormattedDate
     */
    DateHelper.prototype.formatDate = function (date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    };
    DateHelper.prototype.getIDateFromDate = function (date) {
        var dateObject = {
            year: date.getFullYear().toString(),
            fullDate: date.toDateString()
        };
        return dateObject;
    };
    /**
     * Returns Jul-14-2018
     * @param date value as date
     */
    DateHelper.prototype.getSimplifiedDate = function (date) {
        var month = this.getMonthAbrev(date.getMonth());
        var day = this.getDayFull(date.getDate());
        var year = date.getFullYear();
        return month + " " + day + " " + year;
    };
    DateHelper.prototype.getDayFull = function (number) {
        if (number <= 9) {
            return "0" + number;
        }
        else {
            return number.toString();
        }
    };
    DateHelper.prototype.getMonthAbrev = function (month) {
        switch (month) {
            case 0:
                return "Jan";
            case 1:
                return "Feb";
            case 2:
                return "Mar";
            case 3:
                return "Apr";
            case 4:
                return "May";
            case 5:
                return "Jun";
            case 6:
                return "Jul";
            case 7:
                return "Aug";
            case 8:
                return "Sep";
            case 9:
                return "Oct";
            case 10:
                return "Nov";
            case 11:
                return "Dez";
            default:
                return "NaN";
        }
    };
    DateHelper = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], DateHelper);
    return DateHelper;
}());
exports.DateHelper = DateHelper;


/***/ }),

/***/ "./src/app/services/articles.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var image_upload_service_1 = __webpack_require__("./src/app/services/image-upload.service.ts");
var ArticlesService = (function () {
    function ArticlesService(http, _imgService) {
        this.http = http;
        this._imgService = _imgService;
    }
    ArticlesService.prototype.addArticle = function (article) {
        var newArticle = {
            articleTitle: article.articleTitle,
            articleContent: article.articleContent,
            articleDate: article.articleDate,
            group: article.group,
            thumbnailUrl: article.thumbnail
        };
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post('articles/addArticle', newArticle, { headers: headers }).subscribe(function (answer) {
            console.log(answer);
        });
    };
    ArticlesService.prototype.editArticle = function (updatedArticle) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var id = updatedArticle.id;
        this.http.post('/articles/editArticle', { id: id, updatedArticle: updatedArticle }, { headers: headers }).subscribe(function (answer) {
            console.log(answer);
        });
    };
    ArticlesService.prototype.deleteArticle = function (article) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var id = article.id;
        this.http.post('/articles/deleteArticle', { id: id }, { headers: headers }).subscribe(function (answer) {
            console.log(answer);
        });
    };
    ArticlesService.prototype.getGroupedArticles = function () {
        return this.http.get('articles/loadGroupedArticles').map(function (res) { return res.json(); });
    };
    ArticlesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http,
            image_upload_service_1.ImageUploadService])
    ], ArticlesService);
    return ArticlesService;
}());
exports.ArticlesService = ArticlesService;


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var angular2_jwt_1 = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isDev = false; // Change to false before deployment
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new http_1.Headers();
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
        return angular2_jwt_1.tokenNotExpired('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ "./src/app/services/comp-communication.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var CompCommunicationService = (function () {
    function CompCommunicationService() {
        this.backgroundVisible = true;
    }
    CompCommunicationService.prototype.setMenuBackground = function (isVisible) {
        this.backgroundVisible = isVisible;
        console.log("the background has been set to: " + isVisible);
    };
    CompCommunicationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CompCommunicationService);
    return CompCommunicationService;
}());
exports.CompCommunicationService = CompCommunicationService;


/***/ }),

/***/ "./src/app/services/image-upload.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var ImageUploadService = (function () {
    function ImageUploadService(http) {
        this.http = http;
    }
    ImageUploadService.prototype.uploadImage = function (image) {
        var fd = new FormData();
        fd.append('imageData', image, image.name);
        return this.http.post('/uploadFile', fd);
    };
    ImageUploadService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ImageUploadService);
    return ImageUploadService;
}());
exports.ImageUploadService = ImageUploadService;


/***/ }),

/***/ "./src/app/services/modal.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ModalService = (function () {
    function ModalService() {
        this.isShown = false;
    }
    ModalService.prototype.setIsShown = function (isShown) {
        this.isShown = isShown;
    };
    ModalService.prototype.toggleIsShown = function () {
        this.isShown = !this.isShown;
    };
    ModalService.prototype.showModal = function (content) {
        this.setIsShown(true);
        this.modalContent = content;
    };
    ModalService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ModalService);
    return ModalService;
}());
exports.ModalService = ModalService;


/***/ }),

/***/ "./src/app/services/validate.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());
exports.ValidateService = ValidateService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map