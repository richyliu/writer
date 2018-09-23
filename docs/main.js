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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tutorial/tutorial.component */ "./src/app/tutorial/tutorial.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _take_picture_take_picture_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./take-picture/take-picture.component */ "./src/app/take-picture/take-picture.component.ts");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./results/results.component */ "./src/app/results/results.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"] },
    { path: 'tutorial', component: _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_3__["TutorialComponent"] },
    { path: 'game', component: _game_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"] },
    { path: 'take-picture', component: _take_picture_take_picture_component__WEBPACK_IMPORTED_MODULE_5__["TakePictureComponent"] },
    { path: 'results', component: _results_results_component__WEBPACK_IMPORTED_MODULE_6__["ResultsComponent"] },
    { path: 'intro', component: _intro_intro_component__WEBPACK_IMPORTED_MODULE_7__["IntroComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            declarations: []
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'writer';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_onsenui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-onsenui */ "./node_modules/ngx-onsenui/ngx-onsenui.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tutorial/tutorial.component */ "./src/app/tutorial/tutorial.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _take_picture_take_picture_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./take-picture/take-picture.component */ "./src/app/take-picture/take-picture.component.ts");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./results/results.component */ "./src/app/results/results.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"],
                _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_7__["TutorialComponent"],
                _game_game_component__WEBPACK_IMPORTED_MODULE_8__["GameComponent"],
                _take_picture_take_picture_component__WEBPACK_IMPORTED_MODULE_9__["TakePictureComponent"],
                _results_results_component__WEBPACK_IMPORTED_MODULE_10__["ResultsComponent"],
                _intro_intro_component__WEBPACK_IMPORTED_MODULE_11__["IntroComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                ngx_onsenui__WEBPACK_IMPORTED_MODULE_3__["OnsenModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/game/game.component.css":
/*!*****************************************!*\
  !*** ./src/app/game/game.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".game {\n  font-size: 30px;\n}\n\n.next {\n  position: relative;\n  font-size: 80px;\n  height: 200px;\n  width: 100%;\n  text-align: center;\n  line-height: 200px;\n}\n\n.next-wrapper {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100vw;\n}\n"

/***/ }),

/***/ "./src/app/game/game.component.html":
/*!******************************************!*\
  !*** ./src/app/game/game.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ons-page>\n  <ons-toolbar>\n    <div class=\"center\">Game</div>\n  </ons-toolbar>\n  <div class=\"content\">\n    <div *ngIf=\"hideTakePicture\" class=\"game\">\n      <ons-card>\n        <p>\n          {{definition}}\n        </p>\n      </ons-card>\n      <div class=\"next-wrapper\">\n        <ons-button (click)=\"nextWord()\" modifier=\"large\" class=\"next\">Next</ons-button>\n      </div>\n    </div>\n  </div>\n</ons-page>\n"

/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_definitions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/definitions.service */ "./src/app/services/definitions.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! querystring */ "./node_modules/querystring/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GameComponent = /** @class */ (function () {
    function GameComponent(definitionsService, router) {
        this.definitionsService = definitionsService;
        this.router = router;
        this.hideTakePicture = true;
    }
    GameComponent.prototype.ngOnInit = function () {
        this.definitionsService.reset();
        this.nextWord();
    };
    GameComponent.prototype.nextWord = function () {
        this.definition = this.definitionsService.getNext();
        // once definitions run out, unhide the take picture button
        if (!this.definition) {
            this.hideTakePicture = false;
            this.router.navigateByUrl('/take-picture?' + querystring__WEBPACK_IMPORTED_MODULE_3__["stringify"]({
                definitions: this.definitionsService.getAllDefinitions(),
                answers: this.definitionsService.getAllAnswers()
            }));
        }
    };
    GameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [_services_definitions_service__WEBPACK_IMPORTED_MODULE_1__["DefinitionsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/intro/intro.component.css":
/*!*******************************************!*\
  !*** ./src/app/intro/intro.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/intro/intro.component.html":
/*!********************************************!*\
  !*** ./src/app/intro/intro.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ons-page>\n  <ons-toolbar>\n    <div class=\"center\">Intro to Game</div>\n  </ons-toolbar>\n  <div class=\"content\">\n\n    <p>\n      Choose which subject you want for the quiz\n    </p>\n\n    <div style=\"margin: 10px\">\n      <ons-select [(ngModel)]=\"subject\">\n        <option *ngFor=\"let subject of subjects\" [value]=\"subject\">\n          {{ subject }}\n        </option>\n      </ons-select>\n    </div>\n\n    <ons-list>\n      <ons-list-item>\n        <ons-button routerLink = \"/tutorial\"> Want to review the tutorial? </ons-button>\n      </ons-list-item>\n\n      <ons-list-item>\n        <ons-button routerLink=\"/game\">Let's begin!</ons-button>\n      </ons-list-item>\n    </ons-list>\n  </div>\n</ons-page>\n"

/***/ }),

/***/ "./src/app/intro/intro.component.ts":
/*!******************************************!*\
  !*** ./src/app/intro/intro.component.ts ***!
  \******************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroComponent = /** @class */ (function () {
    function IntroComponent() {
        this.subjects = ['Math', 'Science', 'English', 'Spanish'];
    }
    IntroComponent.prototype.ngOnInit = function () {
    };
    IntroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! ./intro.component.html */ "./src/app/intro/intro.component.html"),
            styles: [__webpack_require__(/*! ./intro.component.css */ "./src/app/intro/intro.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/results/results.component.css":
/*!***********************************************!*\
  !*** ./src/app/results/results.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/results/results.component.html":
/*!************************************************!*\
  !*** ./src/app/results/results.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ons-page>\n  <ons-toolbar>\n    <div class=\"center\">Results</div>\n  </ons-toolbar>\n  <div class=\"content\">\n    <p>Correct: 0</p>\n    <p>Your text: {{imageText}}</p>\n    <table>\n      <tr *ngFor=\"let row of displayTable\">\n        <td>{{row.userAnswer}}</td>\n        <td>{{row.answer}}</td>\n        <td>{{row.correct}}</td>\n      </tr>\n    </table>\n\n\n    <ons-button routerLink=\"/welcome\">Again!</ons-button>\n  </div>\n</ons-page>\n"

/***/ }),

/***/ "./src/app/results/results.component.ts":
/*!**********************************************!*\
  !*** ./src/app/results/results.component.ts ***!
  \**********************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! querystring */ "./node_modules/querystring/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultsComponent = /** @class */ (function () {
    function ResultsComponent() {
    }
    ResultsComponent.prototype.ngOnInit = function () {
        // get the query, removing the ? (although documentation says unnecessary, still necessary
        var query = querystring__WEBPACK_IMPORTED_MODULE_1__["parse"](document.location.search.slice(1));
        var responseText = query.text;
        this.imageText = responseText;
        console.log(query);
        var res = this.processInput(responseText, query.answers);
        this.displayTable = [];
        for (var i = 0; i < query.answers.length; i++) {
            this.displayTable.push({
                userAnswer: res.input[i],
                answer: query.answers[i],
                correct: res.correct[i]
            });
        }
    };
    // written by suraj
    // function that takes json text from user attempts and splits //data and returns a table
    ResultsComponent.prototype.processInput = function (parseText, real) {
        var correct = [];
        // goes through the input strings and takes out the numbers
        // and parentheses that represent the beginning of the
        // problem
        var string = '\n';
        for (var i = 0; i < parseText.length; i++) {
            if ((parseText.charAt(i) < '1' || parseText.charAt(i) > '9') && parseText.charAt(i) != +')') {
                string += parseText.charAt(i);
            }
        }
        // splits the string into a list of the individual inputs of
        // the user
        var input = string.split('\n');
        input.splice(0, 1);
        input.splice(input.length - 1, 1);
        // goes through each item in the inputs and the answers, and
        // if they are the same, mark it as correct
        for (var i = 0; i < real.length; i++) {
            correct.push(input[i] === real[i]);
        }
        input = input.map(function (a) {
            return a
                .trim()
                .split(' ')[a.length - 1]
                .toLowerCase();
        });
        return {
            input: input,
            correct: correct
        };
    };
    ResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-results',
            template: __webpack_require__(/*! ./results.component.html */ "./src/app/results/results.component.html"),
            styles: [__webpack_require__(/*! ./results.component.css */ "./src/app/results/results.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "./src/app/services/definitions.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/definitions.service.ts ***!
  \*************************************************/
/*! exports provided: DefinitionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinitionsService", function() { return DefinitionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DefinitionsService = /** @class */ (function () {
    function DefinitionsService() {
        this.definitions = [
            'The quality of being real and true instead of fake and contrived',
            'Kind, generous',
            'Thrilling, exciting, stimulating'
        ];
        this.answers = [
            'authenticity',
            'benevolent',
            'galvanizing'
        ];
        this.current = 0;
    }
    DefinitionsService.prototype.reset = function () {
        this.current = 0;
    };
    DefinitionsService.prototype.getNext = function () {
        var ret = this.definitions[this.current];
        this.current++;
        return ret;
    };
    // get all the definitions that have been called by getNext
    DefinitionsService.prototype.getAllDefinitions = function () {
        var ret = [];
        for (var i = 0; i < this.current - 1; i++) {
            ret.push(this.definitions[i]);
        }
        return ret;
    };
    // get all the answers for the corresponding all definitions
    DefinitionsService.prototype.getAllAnswers = function () {
        var ret = [];
        for (var i = 0; i < this.current - 1; i++) {
            ret.push(this.answers[i]);
        }
        return ret;
    };
    DefinitionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DefinitionsService);
    return DefinitionsService;
}());



/***/ }),

/***/ "./src/app/services/image-request.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/image-request.service.ts ***!
  \***************************************************/
/*! exports provided: ImageRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageRequestService", function() { return ImageRequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImageRequestService = /** @class */ (function () {
    function ImageRequestService(http) {
        this.http = http;
        this.requestUrl = 'https://vision.googleapis.com/v1p3beta1/images:annotate?key=AIzaSyCupsz_AoPxPSUNNHHKB1CMKfNJ41R0Xw0';
    }
    /**
     * Request Google Vision API for text in image
     * @param image Base64 encoding using alphanumeric, "-" and "_" characters
     */
    ImageRequestService.prototype.request = function (image) {
        var req = {
            'requests': [
                {
                    'image': {
                        'content': image
                    },
                    'features': [
                        {
                            'type': 'DOCUMENT_TEXT_DETECTION'
                        }
                    ],
                    'imageContext': {
                        'languageHints': ['en-t-i0-handwrit']
                    }
                }
            ]
        };
        return this.http.post(this.requestUrl, req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
            console.error(e);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
        }));
    };
    ImageRequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ImageRequestService);
    return ImageRequestService;
}());



/***/ }),

/***/ "./src/app/take-picture/take-picture.component.css":
/*!*********************************************************!*\
  !*** ./src/app/take-picture/take-picture.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/take-picture/take-picture.component.html":
/*!**********************************************************!*\
  !*** ./src/app/take-picture/take-picture.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ons-page>\n  <ons-toolbar>\n    <div class=\"center\">Take a picture!</div>\n  </ons-toolbar>\n  <div class=\"content\">\n    <ons-list>\n      <ons-list-header>Instructions</ons-list-header>\n      <ons-list-item>\n        For the picture that you take, please make sure that the\n        text is horizontal. Flash is not required while taking the\n        picture, as our program will compensate.\n      </ons-list-item>\n    </ons-list>\n\n    <ons-list>\n      <ons-list-item>\n        Remember that pictures must:\n      </ons-list-item>\n\n      <ons-list-item>\n        1) Not be too close to the red margin of the paper\n      </ons-list-item>\n\n      <ons-list-item>\n        2) Have lines in the format '#) answer'\n      </ons-list-item>\n\n      <ons-list-item>\n        3) Must be angled directly above the paper\n      </ons-list-item>\n\n      <ons-list-item>\n        4) Have no spaces that seperate individual words\n      </ons-list-item>\n    </ons-list>\n\n    <ons-list>\n      <ons-list-header> Upload Picture </ons-list-header>\n      <ons-list-item>\n        Click \"choose file\" below then click \"take picture\" in the popup\n      </ons-list-item>\n      <ons-list-item>\n        <ons-input type=\"file\" (change)=\"uploadPicture($event)\" accept=\"image/*\"></ons-input>\n      </ons-list-item>\n    </ons-list>\n\n  </div>\n</ons-page>\n"

/***/ }),

/***/ "./src/app/take-picture/take-picture.component.ts":
/*!********************************************************!*\
  !*** ./src/app/take-picture/take-picture.component.ts ***!
  \********************************************************/
/*! exports provided: TakePictureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakePictureComponent", function() { return TakePictureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! querystring */ "./node_modules/querystring/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_image_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/image-request.service */ "./src/app/services/image-request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TakePictureComponent = /** @class */ (function () {
    function TakePictureComponent(imageRequestService, router) {
        this.imageRequestService = imageRequestService;
        this.router = router;
    }
    TakePictureComponent.prototype.ngOnInit = function () {
    };
    /**
     * Gets the image data, sends it to the Google Vision API, and pass the words to results via image-text service
     * @param event Event passed in by the event emitter
     */
    TakePictureComponent.prototype.uploadPicture = function (event) {
        var _this = this;
        // get the file
        var eventObj = event;
        var target = eventObj.target;
        var files = target.files;
        var file = files[0];
        // read image data in b64
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            // base 64 of image
            var b64 = fileReader.result;
            var imgObj = new Image();
            imgObj.addEventListener('load', function () {
                // TODO: using grayscale?
                // grayscale base 64 image
                var gray64 = _this.gray(imgObj);
                // let gray64 = b64;
                // change to RFC 4648 "Base 64 Encoding with URL and Filename Safe Alphabet"
                gray64 = gray64.replace(/\+/g, '-').replace(/\//g, '_');
                // remove "data:image_jpeg;base64,"
                gray64 = gray64.slice(23);
                // google vision api request with base64 image
                _this.imageRequestService.request(gray64).subscribe(function (data) {
                    // get the text from the json
                    var text = data.responses[0].fullTextAnnotation.text;
                    // navigate to results with the text interpretation from google vision, pass current query along
                    _this.router.navigateByUrl("/results" + document.location.search + "&" + querystring__WEBPACK_IMPORTED_MODULE_1__["stringify"]({
                        text: text
                    }));
                });
            });
            imgObj.src = b64;
        };
        fileReader.readAsDataURL(file);
    };
    // grayscale helper function written by Eric
    TakePictureComponent.prototype.gray = function (imgObj) {
        console.log(imgObj);
        var canvas = document.createElement('canvas');
        var canvasContext = canvas.getContext('2d');
        var imgW = imgObj.width;
        console.log('W:' + imgW);
        var imgH = imgObj.height;
        canvas.width = imgW;
        canvas.height = imgH;
        canvasContext.drawImage(imgObj, 0, 0);
        var imgPixels = canvasContext.getImageData(0, 0, imgW, imgH);
        for (var y = 0; y < imgPixels.height; y++) {
            for (var x = 0; x < imgPixels.width; x++) {
                var i = (y * 4) * imgPixels.width + x * 4;
                var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
                imgPixels.data[i] = avg;
                imgPixels.data[i + 1] = avg;
                imgPixels.data[i + 2] = avg;
            }
        }
        canvasContext.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
        return canvas.toDataURL('image/jpeg');
    };
    TakePictureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-take-picture',
            template: __webpack_require__(/*! ./take-picture.component.html */ "./src/app/take-picture/take-picture.component.html"),
            styles: [__webpack_require__(/*! ./take-picture.component.css */ "./src/app/take-picture/take-picture.component.css")]
        }),
        __metadata("design:paramtypes", [_services_image_request_service__WEBPACK_IMPORTED_MODULE_2__["ImageRequestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TakePictureComponent);
    return TakePictureComponent;
}());



/***/ }),

/***/ "./src/app/tutorial/tutorial.component.css":
/*!*************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/tutorial/tutorial.component.html":
/*!**************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ons-page>\n  <ons-toolbar>\n    <div class=\"center\">Tutorial</div>\n  </ons-toolbar>\n  <div class=\"content\">\n    <ons-list>\n      <ons-list-header>Instructions</ons-list-header>\n      <ons-list-item>\n        For the picture that you take, please make sure that the\n        text is horizontal. Flash is not required while taking the\n        picture, as our program will compensate. Follow the\n        instructions below for the highest grading accuracy.\n      </ons-list-item>\n    </ons-list>\n\n    <ons-list>\n      <ons-list-header> Common Mistakes </ons-list-header>\n      <ons-list>\n        <ons-list-item>\n          Here's an image with a couple of mistakes. The errors\n          are listed with their corresponding number:\n        </ons-list-item>\n\n        <ons-list-item>\n          1) The space between the '1)' symbol and word is too large.\n        </ons-list-item>\n\n        <ons-list-item>\n        2) This answer completely fine.\n        </ons-list-item>\n\n        <ons-list-item>\n        3) The space between the word is too large.\n        Our grader may read it as two seperate words.\n        </ons-list-item>\n\n        <ons-list-item>\n        4) There is a '.' instead of a ')' symbol.\n        </ons-list-item>\n      </ons-list>\n    </ons-list>\n\n    <img src=\"../../assets/WriteletMistake1.png\">\n\n    <ons-list>\n      <ons-list-header> Taking the Picture </ons-list-header>\n      <ons-list>\n        <ons-list-item>\n          <b> A Good Picture </b>\n        </ons-list-item>\n\n        <img src=\"../../assets/GoodImage.jpg\">\n\n        <ons-list-item>\n          Notice how the image only has numbers with their\n          respective answers, and the lighting is relatively consistent.\n        </ons-list-item>\n      </ons-list>\n\n      <ons-list>\n        <ons-list-item>\n          <b> A Bad Picture #1 </b>\n        </ons-list-item>\n\n        <img src = \"../../assets/BadImage1.jpg\">\n\n        <ons-list-item>\n          This picture contains a lot of useless information\n          such as the image of another paper, the table, and\n          some black space at the bottom. Pictures should be\n          clear and concise.\n        </ons-list-item>\n      </ons-list>\n\n      <ons-list>\n        <ons-list-item>\n          <b> Bad Picture #2 </b>\n        </ons-list-item>\n\n        <img src = \"../../assets/BadImage2.jpg\">\n\n        <ons-list-item>\n          This picture is taken at a diagonal angle. This won't hinder\n          the Machine Learning algorithm that much, but to ensure\n          the highest accuracy from our training model we encourage\n          pictures to be taken directly above the paper.\n        </ons-list-item>\n      </ons-list>\n\n      <ons-list>\n        <ons-list-item>\n          <b> Bad Picture #3 </b>\n        </ons-list-item>\n\n        <img src = \"../../assets/BadImage3.jpg\">\n\n        <ons-list-item>\n          The red line from the margin is too close to the\n          answers. This can disrupt our program as it will interpret\n          this line as a stream of '1' characters\n        </ons-list-item>\n      </ons-list>\n    </ons-list>\n\n    <ons-list>\n      <ons-list-header>Links</ons-list-header>\n      <ons-list-item modifier=\"chevron\" tappable routerLink=\"/intro\">Take the Quiz!</ons-list-item>\n    </ons-list>\n  </div>\n</ons-page>\n"

/***/ }),

/***/ "./src/app/tutorial/tutorial.component.ts":
/*!************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.ts ***!
  \************************************************/
/*! exports provided: TutorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialComponent", function() { return TutorialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TutorialComponent = /** @class */ (function () {
    function TutorialComponent() {
    }
    TutorialComponent.prototype.ngOnInit = function () {
    };
    TutorialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tutorial',
            template: __webpack_require__(/*! ./tutorial.component.html */ "./src/app/tutorial/tutorial.component.html"),
            styles: [__webpack_require__(/*! ./tutorial.component.css */ "./src/app/tutorial/tutorial.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TutorialComponent);
    return TutorialComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ons-page>\n  <ons-toolbar>\n    <div class=\"center\">Welcome to Writelet</div>\n  </ons-toolbar>\n  <div class=\"content\">\n    <ons-list>\n      <ons-list-header>About</ons-list-header>\n      <ons-list-item>Writlet is an application focused around teaching students how to best\n        retain information. Our inspiration for this project originates from flaws\n        we have found in the popular application 'Quizlet'\n      </ons-list-item>\n\n      <ons-list>\n        <ons-list-item>\n          <ons-button routerLink = \"/tutorial\"> Want to review the tutorial? </ons-button>\n        </ons-list-item>\n\n        <ons-list-item>\n          <ons-button routerLink=\"/intro\"> Take the Quiz! </ons-button>\n        </ons-list-item>\n      </ons-list>\n    </ons-list>\n  </div>\n</ons-page>\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /nfs/events/hackathon100/WebstormProjects/writer/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map