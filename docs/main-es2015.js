(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-about.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n                    <h1>About ARKEDGE</h1>\n                    <h6>We value loyalty, creativity and productivity with results...</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<section class=\"about-tab\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 col-lg-3 col-md-3\">\n            <ul ngbNav #nav=\"ngbNav\" [(activeId)]=\"active\" class=\"nav-tabs\">\n                <li [ngbNavItem]=\"i + 1\" *ngFor=\"let tab of tabs; index as i\">\n                    <a ngbNavLink>{{tab.title}}</a>\n                    <ng-template ngbNavContent>\n                        <h5>{{tab.title}}</h5>\n                        <p>\n                            {{tab.decs}}\n                        </p>\n                    </ng-template>\n                </li>\n             </ul>\n        </div>\n            <div class=\"col-sm-12 col-lg-9 col-md-9\">\n            <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\n        </div>\n    </div>\n    </div>\n</section>\n\n<section class=\"about-key-diff\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <h1>Key Differentiators</h1>\n                <ul>\n                    <li *ngFor=\"let key of keydiff\">\n                        {{key.list}}\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</section>\n\n\n<section class=\"about-info\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-12 v-align\">\n                <p>Ever-growing demand for Web Application solutions is driven by rapidly changing market conditions and\n                    technology progress. To streamline your business, we address those issues with our Internet and\n                    Intranet solutions. In addition we also provide you web / animation design services.</p>\n\n            </div>\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                <img src=\"assets/images/about-info.jpg\">\n            </div>\n        </div>\n    </div>\n</section>\n\n\n<section class=\"section-info\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <p>\n                    Along with the engineering solution and services ARKEDGE is specialized in helpings client\n                    organizations identify, evaluate, and recruit executives at various levels. It comprises of\n                    well-qualified group of people having faith in camaraderie and serving the industry to find the\n                    solutions to various key areas as Staffing, Executive Search and IT training.\n                    <br><br>\n                    In addition ARKEDGE specializes in a bunch of IT training services for corporate, institutions and\n                    individuals. We do organize corporate training programs for industry officials who find it difficult\n                    to mingle their expertise with latest IT tools and IT based technology. We do impart IT training for\n                    graduates in multiple discipline including computer application, hard core technology, business\n                    administration, and individuals who are in the mid of their management education.\n                </p>\n            </div>\n            <div *ngFor=\"let item of solution\" class=\"col-lg-4 col-md-4 col-sm-12 panel-container\">\n                <div class=\"panel\">\n                    <div class=\"panel-front {{item.color}}\">\n                        <div class=\"panel-heading\">\n                            <div class=\"icon-circle circle-bg\">\n                                <i class=\"icon icon-medium\">\n                                    <svg focusable=\"false\">\n                                        <use attr.xlink:href=\"{{item.icon}}\"></use>\n                                    </svg>\n                                </i>\n                            </div>\n                            <h5>{{item.title}}</h5>\n                        </div>\n                        <div class=\"panel-body\">\n\n                            <p *ngFor=\"let data of item.list\">{{data.name}}</p>\n                        </div>\n                    </div>\n                    <div class=\"panel-back {{item.color}}\">\n                        <h5>{{item.title}}</h5>\n                        <p>{{item.description}}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/advancesolution/advancesolution.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/advancesolution/advancesolution.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-advance-solution.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n                    <h1>Advance solutions</h1>\n                    <h6>Technical solution for all industries</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<section class=\"section-advance-solution\">\n    <div class=\"container\">\n        <div class=\"row\">\n                <div class=\"col-lg-4 col-md-4 col-sm-12\">\n                    <ul>\n                        <li><a routerLink=\"Advancesolution\" routerLinkActive=\"active\" skipLocationChange=true>Solutions</a></li>\n                        <li><a routerLink=\"Technology\" routerLinkActive=\"active\" skipLocationChange=true>Technology</a></li>\n                        <li><a routerLink=\"Industries\" routerLinkActive=\"active\" skipLocationChange=true>Industries</a></li>\n                    </ul>\n                </div>\n\n                <div class=\"col-lg-8 col-md-8 col-sm-12\">\n                    <p>\n                        ARKEDGE technologies approaches each business as an individual so \n                        that we can provide you with IT solutions that suit your needs.\n                         We offer holistic solutions, consisting of different offerings. \n                    </p>\n                </div>\n        </div>\n    </div>\n</section>\n\n<section>\n    <div class=\"container\">\n    <div class=\"row\">\n         <div class=\"col-lg-6 col-md-6 col-sm-12\">\n            <h2>Transformation</h2>\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>\n           \n          </div>\n\n          <div class=\"col-lg-6 col-md-6 col-sm-12\">\n            <img src=\"assets/images/advance-solution-1.png\">\n        </div>\n     \n    </div>\n</div>\n</section>\n\n\n<section>\n    <div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-12\">\n            <img src=\"assets/images/advance-solution-2.jpg\">\n        </div>\n\n         <div class=\"col-lg-6 col-md-6 col-sm-12\">\n            <h2>Transformation</h2>\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>\n           \n          </div>\n     </div>\n</div>\n</section>\n\n<section>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                <div class=\"panel info\">\n                        <div class=\"panel-heading\">\n                           <h6>Enterprise Solution</h6>\n                        </div>\n                        <div class=\"panel-body\">\n                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n                            <i class=\"icon icon-large\">\n                                <svg focusable=\"false\">\n                                  <use xlink:href=\"#icon_phone\"></use>\n                                </svg>\n                              </i>\n                            </p>\n                        </div>\n                 </div>\n            </div>\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                <div class=\"panel info\">\n                        <div class=\"panel-heading\">\n                           <h6>Intelligent Process Automation</h6>\n                        </div>\n                        <div class=\"panel-body\">\n                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n                            <i class=\"icon icon-large\">\n                                <svg focusable=\"false\">\n                                  <use xlink:href=\"#icon_phone\"></use>\n                                </svg>\n                              </i>\n                            </p>\n                        </div>\n                 </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<router-outlet></router-outlet>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/career/career.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/career/career.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-inner-page-header></app-inner-page-header> -->\r\n<div class=\"inner-banner\">\r\n    <img src=\"assets/images/inner-banner-career.jpg\">\r\n    <div class=\"page-title\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12 center\">\r\n        <h1>Career @ Arkedge</h1>\r\n        <h6>come and join us our family...</h6>\r\n    </div></div></div>\r\n    </div>\r\n</div>\r\n<section class=\"section-career\">\r\n    <div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n        <h6 class=\"center career\">Arkedge Technologies has a very ambitious plan for future and we are looking for energetic, motivated, ambitious team players who relish the challenge of joining a growing business in the field of IT, Resourcing and Training. You will have the opportunity to grow professionally and financially.\r\n        </h6>\r\n        </div>\r\n       <div *ngFor=\"let data of careerInfo\" class=\"col-lg-6 col-md-6 col-sm-12 career-info\">\r\n            <div class=\"panel\">\r\n                    <div class=\"panel-heading\">\r\n                       <h6>{{data.title}}</h6>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <p>{{data.info}}</p>\r\n                    </div>\r\n             </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12\">\r\n            <h6 class=\"text-wrap\">If you are interested in working in a fast-paced, challenging environment, Below are the Current Openings for open positions.</h6>\r\n\r\n            <table class=\"table table-striped table-bordered\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Job Code</th>\r\n                    <th>Job Title</th>\r\n                    <th>Location</th>\r\n                    <th>Target Date</th>\r\n                    <th>Details</th>\r\n                   </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let data of career\">\r\n                    <td>{{data.jobcode}}</td>\r\n                    <td>{{data.jobtitle}}</td>\r\n                    <td>{{data.location}}</td>\r\n                    <td>{{data.targetDate}}</td>\r\n                    <td><a>View Details</a></td>\r\n                  </tr>\r\n                </tbody>\r\n                </table>\r\n\r\n            </div>\r\n\r\n\r\n        <div class=\"col-sm-12\">\r\n           <form>\r\n            <h2 class=\"center\">Post your profile here...</h2>\r\n                <div class=\"row form-group\">\r\n                    <div class=\"col\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Your Name\" name=\"name\">\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"yourMail\" placeholder=\"Your Mail\" name=\"yourMail\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row form-group\">\r\n                    <div class=\"col\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"phone\" placeholder=\"Phone Number\" name=\"phone\">\r\n                    </div>\r\n                    <div class=\"col custom-file mb-3\">\r\n                        <input type=\"file\" class=\"custom-file-input\" id=\"customFile\" name=\"filename\">\r\n                        <label class=\"custom-file-label\" for=\"customFile\">Attachment</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" placeholder=\"Message\" rows=\"5\"></textarea>\r\n                </div>\r\n                <button type=\"submit\" class=\"btn btn-primary\">SUBMIT</button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>    \r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/client/client.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client/client.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-client.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n                    <h1>CLIENTELE</h1>\n                    <h6>We value loyalty, creativity and productivity with results...</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<section class=\"client-info\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div *ngFor=\"let data of clientInfo; index as i\" class=\"col-lg-4 col-md-4 col-sm-12\">\n                <div class=\"panel\" (click)=\"open(content)\">\n                   <div class=\"panel-body {{data.clientimg}}-{{i+1}}\">\n                       <a><img src=\"assets/images/logo{{i+1}}.png\"></a>\n                    </div>\n             </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n\n<section class=\"client-speak\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-12 \">\n                <h1>Client Speaks</h1>\n                <p>Ever-growing demand for Web Application solutions is driven by rapidly changing market conditions and\n                    technology progress. To streamline your business, we address those issues with our Internet and\n                    Intranet solutions. In addition we also provide you web / animation design services.</p>\n\n            </div>\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                 <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/zmEG-5zEmPw\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n        </div>\n    </div>\n</section>\n\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n        </div>\n    <div class=\"modal-body\">\n      <p>Data goes here.</p>\n    </div>\n  </ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/company.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/company.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>company works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-inner-page-header></app-inner-page-header> -->\r\n<div class=\"inner-banner\">\r\n    <img src=\"assets/images/inner-banner-contact.jpg\">\r\n    <div class=\"page-title\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12 center\">\r\n        <h1>We Are Here For You</h1>\r\n        <h6>Hello. What can we help you with?</h6>\r\n    </div></div></div>\r\n    </div>\r\n</div>\r\n\r\n<section class=\"section-contact\">\r\n    <div class=\"container\">\r\n    <div class=\"row\">\r\n       <div *ngFor=\"let data of contactInfo\" class=\"col-lg-4 col-md-4 col-sm-12 contact-emails\">\r\n            <div class=\"panel\">\r\n                    <div class=\"panel-heading\">\r\n                       <h5>{{data.title}}</h5>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <p>{{data.subtitle}}</p>\r\n                        <p>{{data.id}}</p>\r\n                    </div>\r\n             </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12\">\r\n           <form>\r\n            <h1 class=\"center\">Feel free to contact...</h1>\r\n                <div class=\"row form-group\">\r\n                    <div class=\"col\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Your Name\" name=\"name\">\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"yourMail\" placeholder=\"Your Mail\" name=\"yourMail\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row form-group\">\r\n                    <div class=\"col\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"phone\" placeholder=\"Phone Number\" name=\"phone\">\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"country\" placeholder=\"Country\" name=\"country\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" placeholder=\"Message\" rows=\"5\"></textarea>\r\n                </div>\r\n\r\n                <button type=\"submit\" class=\"btn btn-primary\">SUBMIT</button>\r\n            </form>\r\n        </div>\r\n\r\n\r\n        <div *ngFor=\"let data of getTouch; index as i\" class=\"col-lg-4 col-md-4 col-sm-12 contact-address\">\r\n            <div class=\"panel\">\r\n                    <div class=\"panel-heading\">\r\n                       <img src={{data.img}}-{{i+1}}.jpg alt=\"{{data.subtitle}}\">\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <h5>{{data.subtitle}}</h5>\r\n                        <p>{{data.street_1}}</p>\r\n                        <p>{{data.street_2}}</p>\r\n                        <p>{{data.state}}</p>\r\n                        <p>{{data.contact}}</p>\r\n                    </div>\r\n             </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n        </div>\r\n\r\n            <div class=\"mapouter\"><div class=\"gmap_canvas\"><iframe id=\"gmap_canvas\" src=\"https://maps.google.com/maps?q=Arkedge%20Technologies%20Pvt.%20Ltd%20Msthal%20Height%2C%20Next%20to%20Marwah%20Estate%2C%20Saki%20Naka%2C%20Andheri%20(E)%2C%20Mumbai%2C%20Maharashtra%20400072&t=&z=13&ie=UTF8&iwloc=&output=embed\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe><a href=\"https://www.bitgeeks.net\"></a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:100%;}</style></div>\r\n     \r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-5 col-md-5 col-sm-12\">\r\n                <div class=\"logo\">\r\n                    <i class=\"icon icon-small\">\r\n                        <svg focusable=\"false\">\r\n                            <use xlink:href=\"#icon_logoFlat\"></use>\r\n                        </svg>\r\n                      </i>\r\n                </div>\r\n                <p>\r\n                    ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. The organization is making its presence felt on the engineering solution and services, Staffing and IT training circuit. Equipped with cross cultural operating experience; an asset, it drives the organization to deliver nothing but the best.\r\n                </p>\r\n\r\n                <p class=\"copyright\">\r\n                    <span>© Copyright Arkedge Technologies Pvt. Ltd.</span>\r\n                </p>\r\n            </div>\r\n\r\n            <div class=\"col-lg-2 col-md-2 col-sm-12\">\r\n                <h5>Quick Links</h5>\r\n                <ul class=\"footer-li\">\r\n                    <li>\r\n                        <a routerLink=\"OurProduct\" routerLinkActive=\"active\" skipLocationChange=true>Our\r\n                            Product</a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"Advancesolution\" routerLinkActive=\"active\" skipLocationChange=true>Advance\r\n                            Solution</a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"ManagedServiceComponent\" routerLinkActive=\"active\" skipLocationChange=true>Managed Service</a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"Company\" routerLinkActive=\"active\" skipLocationChange=true>COMPANY</a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"Career\" routerLinkActive=\"active\" skipLocationChange=true>CAREER</a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"Contactus\" routerLinkActive=\"active\" skipLocationChange=true>CONTACT US</a>\r\n                    </li>\r\n                </ul>\r\n                <div class=\"social-net\">\r\n\r\n                    <ul>\r\n                        <li><a href=\"https://www.facebook.com\" target=\"_blank\">\r\n                                <i class=\"icon icon-ex-small\">\r\n                                    <svg focusable=\"false\">\r\n                                        <use xlink:href=\"#icon_facebook\"></use>\r\n                                    </svg>\r\n                                </i>\r\n                            </a>\r\n                        </li>\r\n                        <li><a href=\"https://www.instagram.com\" target=\"_blank\">\r\n                                <i class=\"icon icon-ex-small\">\r\n                                    <svg focusable=\"false\">\r\n                                        <use xlink:href=\"#icon_instagram\"></use>\r\n                                    </svg>\r\n                                </i>\r\n                            </a>\r\n                        </li>\r\n                        <li><a href=\"https://www.twitter.com\" target=\"_blank\">\r\n                                <i class=\"icon icon-ex-small\">\r\n                                    <svg focusable=\"false\">\r\n                                        <use xlink:href=\"#icon_twitter\"></use>\r\n                                    </svg>\r\n                                </i>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"col-lg-5 col-md-5 col-sm-12 map\">\r\n                    <img src=\"assets/images/map.png\" alt=\"Map\">\r\n             </div>\r\n        </div>\r\n    </div>\r\n    <!-- /.container -->\r\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n<div class=\"container\">\r\n    <a class=\"navbar-brand\" routerLink=\"home\" skipLocationChange=true>\r\n      <i class=\"icon icon-small\">\r\n        <svg focusable=\"false\">\r\n          <use xlink:href=\"#icon_logoFlat\"></use>\r\n        </svg>\r\n      </i>\r\n      <div>\r\n        <span class=\"company-name\">ARKEDGE</span>\r\n        <span class=\"company-type\">TECHNOLOGIES</span>\r\n      </div>\r\n    </a>\r\n    <ul class=\"navbar-nav-list\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"OurProduct\" routerLinkActive=\"active\" skipLocationChange=true>Our\r\n          Product</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"Advancesolution\" routerLinkActive=\"active\" skipLocationChange=true>Advance\r\n          Solution</a>\r\n      </li>\r\n      <li class=\"nav-item nav-dropdown-list\">\r\n        <a class=\"nav-link\" routerLink=\"ManagedServiceComponent\" routerLinkActive=\"active\"\r\n          skipLocationChange=true>Managed Service</a>\r\n        <ul class=\"sub-nav\">\r\n          <li class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-8 col-md-8 col-sm-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngFor=\"let list of managedService\">\r\n                     <h6> {{list.name}}</h6>\r\n                      <li class=\"inner-list\" *ngFor=\"let inlist of list.managedServiceList\">\r\n                        <a>{{inlist.name}}</a>\r\n                      </li>\r\n              </div>\r\n  </div>\r\n  </div>\r\n  <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n    <h5>Heading goes here.</h5>\r\n    <img src=\"../../assets/images/3.jpg\" alt=\"\">\r\n    <a>Read more...</a>\r\n  </div>\r\n\r\n  </div>\r\n  </li>\r\n  </ul>\r\n  </li>\r\n\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"Company\" routerLinkActive=\"active\" skipLocationChange=true>COMPANY</a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"Career\" routerLinkActive=\"active\" skipLocationChange=true>CAREER</a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"Contactus\" routerLinkActive=\"active\" skipLocationChange=true>CONTACT US</a>\r\n  </li>\r\n  <li class=\"nav-item tele-no\">\r\n    <a class=\"nav-link\">\r\n      <i class=\"icon icon-ex-small\">\r\n        <svg focusable=\"false\">\r\n          <use xlink:href=\"#icon_phone\"></use>\r\n        </svg>\r\n      </i>\r\n      321-321-6544\r\n    </a>\r\n  </li>\r\n  <li class=\"nav-item quick-link\">\r\n    <a class=\"nav-link\" (click)=\"slideToggel()\">\r\n      <i class=\"icon icon-ex-small\">\r\n        <svg focusable=\"false\">\r\n          <use xlink:href=\"#icon_menu\"></use>\r\n        </svg>\r\n      </i>\r\n    </a>\r\n  </li>\r\n  </ul>\r\n</div>\r\n</nav>\r\n\r\n<div class=\"slider-menu\" [ngClass]=\"isOpen ? '' : 'active'\">\r\n  <a class=\"close-slide\" (click)=\"slideToggel()\">\r\n    <i class=\"icon icon-ex-small\">\r\n      <svg focusable=\"false\">\r\n        <use xlink:href=\"#icon_menu\"></use>\r\n      </svg>\r\n    </i>\r\n  </a>\r\n\r\n  <a class=\"navbar-brand\">\r\n    <i class=\"icon icon-small\">\r\n      <svg focusable=\"false\">\r\n        <use xlink:href=\"#icon_logo_color\"></use>\r\n      </svg>\r\n    </i>\r\n    <div>\r\n      <span class=\"company-name\">ARKEDGE</span>\r\n      <span class=\"company-type\">TECHNOLOGIES</span>\r\n    </div>\r\n  </a>\r\n\r\n  <ul>\r\n    <li *ngFor=\"let item of list; index as i\" class=\"menu-list\">\r\n      <a (click)=\"slideToggel()\" routerLink=\"{{item.name}}\" routerLinkActive=\"active\" skipLocationChange=true>{{item.name | createSpace}}</a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n<div class=\"overlay\" [ngClass]=\"isOpen ? '' : 'active'\" (click)=\"slideToggel()\">\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-banner\">\r\n    <ngb-carousel #carousel interval=\"5000\" [showNavigationArrows]=\"showNavigationArrows\" [pauseOnHover]=\"pauseOnHover\"\r\n        (slide)=\"onSlide($event)\">\r\n        <ng-template ngbSlide *ngFor=\"let info of banner; index as i\">\r\n            <div class=\"container\">\r\n                    <div class=\"carousel-caption\">\r\n                        <h1>{{info.title}}</h1>\r\n                        <h1>{{info.title_2}}</h1>\r\n                        <h3>{{info.description}}</h3>\r\n                        <button type=\"submit\" class=\"btn btn-primary\">LEARN MORE</button>\r\n                        <button type=\"submit\" class=\"btn btn-warning\">CONTACT US</button>\r\n                    </div>\r\n                    <div class=\"info-img\">\r\n                        <img src=\"assets/images/banner-{{i+1}}-info.png\" alt=\"My image {{i + 1}} description\">\r\n                    </div>\r\n            </div>\r\n            <div class=\"picsum-img-wrapper\">\r\n                <img src=\"assets/images/banner-1.jpg\" alt=\"My image {{i + 1}} description\">\r\n            </div>\r\n\r\n        </ng-template>\r\n    </ngb-carousel>\r\n</div>\r\n<section class=\"section-info\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 center\">\r\n                <h1>Expand Your Business Through a <span class=\"heading-highlight\">Strong Virtual Presence</span></h1>\r\n                <h6>\r\n                    <b>The ultimate objective behind our every move is to give our customers utmost satisfaction with\r\n                        our\r\n                        quality services and support.</b><br>\r\n                    We try the best possible way out to provide our customers with top-notch services and at affordable\r\n                    rates. So, give us a Oppurtunity to serve you !\r\n                </h6>\r\n            </div>\r\n            <div *ngFor=\"let item of solution\" class=\"col-lg-4 col-md-4 col-sm-12 panel-container\">\r\n                <div class=\"panel\">\r\n                    <div class=\"panel-front {{item.color}}\">\r\n                        <div class=\"panel-heading\">\r\n                            <div class=\"icon-circle circle-bg\">\r\n                                <i class=\"icon icon-medium\">\r\n                                    <svg focusable=\"false\">\r\n                                        <use attr.xlink:href=\"{{item.icon}}\"></use>\r\n                                    </svg>\r\n                                </i>\r\n                            </div>\r\n                            <h5>{{item.title}}</h5>\r\n                        </div>\r\n                        <div class=\"panel-body\">\r\n\r\n                            <p *ngFor=\"let data of item.list\">{{data.name}}</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"panel-back {{item.color}}\">\r\n                        <h5>{{item.title}}</h5>\r\n                        <p>{{item.description}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<section class=\"section-sevices\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 center\">\r\n                <h1>INDUSTRIES <span class=\"heading-highlight\">WE SERVE</span></h1>\r\n                <h6>\r\n                    <b>We ensure excellence in service through understanding of our client's business and their unique\r\n                        requirements.</b><br>\r\n\r\n                    Due to our close relationships and constant interactions with clients,<br>\r\n\r\n                    we have developed solid understanding and insight in our focus industries that include:\r\n                </h6>\r\n            </div>\r\n\r\n            <div *ngFor=\"let item of sevices\" class=\"col-lg-4 col-md-4 col-sm-12\">\r\n                <div class=\"panel\">\r\n                    <div class=\"panel-heading\">\r\n                        <div class=\"icon-circle {{item.color}}\">\r\n                            <i class=\"icon icon-medium\">\r\n                                <svg focusable=\"false\">\r\n                                    <use attr.xlink:href=\"{{item.icon}}\"></use>\r\n                                </svg>\r\n                            </i>\r\n                        </div>\r\n                        <h5>{{item.title}}</h5>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <p>{{item.description}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"section-projects\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 center\">\r\n                <h1>OUR <span class=\"heading-highlight\">PROJECTS</span></h1>\r\n                <h6>\r\n                    <b>We bring powerful TOOLS for enhance your productivity.</b><br>\r\n                \r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.<br>  Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. \r\n                </h6>\r\n            </div>\r\n        </div>\r\n        <div class=\"project-grid\">\r\n            <li *ngFor=\"let info of projects; index as i\" class=\"p2\">\r\n                <a>\r\n                    <figure>\r\n                        <img src=\"{{info.imgPath}}-{{i + 1}}.jpg\" alt=\"Experience\">\r\n                        <div class=\"show-more-overlay\"></div>\r\n                        <figcaption>\r\n                            <h2 class=\"show_more-title\">{{info.title}}</h2>\r\n                            <p class=\"show_more-desc\">\r\n                                {{info.description}}\r\n                            </p>\r\n                            <button *ngIf=\"i === 0\" type=\"submit\" class=\"btn btn-primary\">LEARN MORE</button>\r\n                        </figcaption>\r\n                    </figure>\r\n                </a>\r\n            </li>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<div class=\"clear-float\"></div>\r\n<section class=\"clients\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 center\">\r\n                <h1>HAPPY <span class=\"heading-highlight\">CLIENTS</span></h1>\r\n                <h6>\r\n                    consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus\r\n                    accumsan et viverra justo commodo. <br>Proin sodales pulvinar tempor.lacus accumsan et viverra justo\r\n                    commodo. Proin sodales pulvinar tempor.</h6>\r\n            </div>\r\n\r\n            <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\" [config]=\"slideConfig\">\r\n                <div ngxSlickItem *ngFor=\"let client of client; index as i\" class=\"slide col-lg-3 col-md-3 col-sm-12\">\r\n                    <img src=\"assets/images/logo{{i+1}}.png\" alt=\"\" width=\"100%\">\r\n                </div>\r\n            </ngx-slick-carousel>\r\n\r\n            <!-- <div *ngFor=\"let client of client; index as i\" class=\"col-lg-3 col-md-3 col-sm-12\">\r\n                <img src=\"{{client.img}}-{{i+1}}.jpg\" alt=\"client\">\r\n            </div> -->\r\n\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"testimonials\">\r\n    <img src=\"assets/images/testimonials.jpg\"> \r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 center\">\r\n                <h1>TESTIMONIALS</h1>\r\n                <ngb-carousel #carousel interval=\"5000\" [showNavigationArrows]=\"showNavigationArrows\" [pauseOnHover]=\"pauseOnHover\" (slide)=\"onSlide($event)\">\r\n                    <ng-template ngbSlide *ngFor=\"let info of testimonials; index as i\">\r\n                        <p>\r\n                            {{info.clientView_1}}\r\n                        </p>\r\n                        <p>\r\n                            {{info.clientView_2}}\r\n                        </p>\r\n                        <p>\r\n                            {{info.clientView_3}}\r\n                        </p>\r\n                        <p>\r\n                            - {{info.clientName}}\r\n                        </p>\r\n\r\n                    </ng-template>\r\n                </ngb-carousel>\r\n\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</section>\r\n<section class=\"contact-info\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                <h1>WHAT SET US <span class=\"heading-highlight\">APART</span></h1>\r\n                <p class=\"set-part\">\r\n                    We ensure excellence in service through understanding of our client's business and their unique\r\n                    requirements.\r\n\r\n                    Due to our close relationships and constant interactions with clients,\r\n\r\n                    we have developed solid understanding and insight in our focus industries that include:\r\n                </p>\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                        <div>\r\n                            <h6>Address</h6>\r\n                            <p>703, Wing \"B\", Galaxy L.X.APT.<br>\r\n\r\n                                Navre Park, Ambarnath (W),<br>\r\n\r\n                                Thane-421501, Maharashtra,<br>\r\n\r\n                                INDIA</p>\r\n\r\n                            <h6>Contact</h6>\r\n                            <p>\r\n                                info@arkedge.com<br>\r\n\r\n                                calling +91 9029290808.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                        <div>\r\n                            <h6>Working Hours</h6>\r\n                            <p>Monday To Friday: 11AM - 8PM<br>\r\n\r\n                                Week-End: 11 AM - 2PM</p>\r\n\r\n\r\n                            <h6>Socials</h6>\r\n                            <div class=\"social-net\">\r\n\r\n                                <ul>\r\n                                    <li><a href=\"https://www.facebook.com\" target=\"_blank\">\r\n                                            <i class=\"icon icon-ex-small\">\r\n                                                <svg focusable=\"false\">\r\n                                                    <use xlink:href=\"#icon_facebook\"></use>\r\n                                                </svg>\r\n                                            </i>\r\n                                            <span>Facebook</span>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li><a href=\"https://www.instagram.com\" target=\"_blank\">\r\n                                            <i class=\"icon icon-ex-small\">\r\n                                                <svg focusable=\"false\">\r\n                                                    <use xlink:href=\"#icon_instagram\"></use>\r\n                                                </svg>\r\n                                            </i>\r\n                                            <span>Tweeter</span>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li><a href=\"https://www.twitter.com\" target=\"_blank\">\r\n                                            <i class=\"icon icon-ex-small\">\r\n                                                <svg focusable=\"false\">\r\n                                                    <use xlink:href=\"#icon_twitter\"></use>\r\n                                                </svg>\r\n                                            </i>\r\n                                            <span>Instragram</span>\r\n                                        </a>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                <h1>GET IN <span class=\"heading-highlight\">TOUCH</span></h1>\r\n                <form>\r\n                    <div class=\"row form-group\">\r\n                        <div class=\"col\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Your Name\" name=\"name\">\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Your Mail\" name=\"yourMail\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"subject\" placeholder=\"Subject\" name=\"subject\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"5\"></textarea>\r\n                    </div>\r\n\r\n                    <button type=\"submit\" class=\"btn btn-primary\">SUBMIT</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/industries/industries.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/industries/industries.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-industries.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n                    <h1>Industries</h1>\n                    <h6>Transforming industries with smarter ways</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<section class=\"section-advance-solution\">\n    <div class=\"container\">\n        <div class=\"row\">\n                <div class=\"col-lg-4 col-md-4 col-sm-12\">\n                    <ul>\n                        <li><a routerLink=\"Advancesolution\" routerLinkActive=\"active\" skipLocationChange=true>Solutions</a></li>\n                        <li><a routerLink=\"Technology\" routerLinkActive=\"active\" skipLocationChange=true>Technology</a></li>\n                        <li><a routerLink=\"Industries\" routerLinkActive=\"active\" skipLocationChange=true>Industries</a></li>\n                    </ul>\n                </div>\n\n                <div class=\"col-lg-8 col-md-8 col-sm-12\">\n                        <p>\n                            ARKEDGE technologies approaches each business as an individual so \n                            that we can provide you with IT solutions that suit your needs.\n                             We offer holistic solutions, consisting of different offerings.\n                        </p>\n\n                </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"section-industy-info\">\n    <div class=\"container\">\n    <div class=\"row\">\n       <div *ngFor=\"let data of industryInfo\" class=\"col-lg-4 col-md-4 col-sm-12 col\">\n            <div class=\"panel\">\n                    <div class=\"panel-heading\">\n                       \n                    </div>\n                    <div class=\"panel-body\">\n                        <p>{{data.title}}</p>\n                    </div>\n             </div>\n        </div>\n\n    </div>\n</div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/inner-page-header/inner-page-header.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inner-page-header/inner-page-header.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [class]=\"className\">\n    <div class=\"page-title\">\n        <h1>{{pageName}}</h1>\n        <h6>{{subtitle}}</h6>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/managedservice/managedservice.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/managedservice/managedservice.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\r\n    <img src=\"assets/images/inner-banner-manage-service.jpg\">\r\n    <div class=\"page-title\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12 center\">\r\n                    <h1>Managed Services</h1>\r\n                    <h6>Softwares : Data Life-cycle Management : IT Staffing & Training</h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<section class=\"section-manage-service\">\r\n    <div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n        <h6 class=\"center career\">\r\n            ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. The organization is making its presence felt on the engineering solution and services, Staffing and IT training circuit. Equipped with cross cultural operating experience; an asset, it drives the organization to deliver nothing but the best.        </h6>\r\n        \r\n            <h5>\r\n                Arkedge Technologies provide following services\r\n            </h5>\r\n        \r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n         <ul>\r\n               <li>\r\n                Product Engineering\r\n               </li>\r\n               <li>\r\n                Application Development\r\n                </li>\r\n               <li>\r\n                UX/UI Development\r\n                </li>\r\n               <li>\r\n                Software Testing & QA\r\n                </li>\r\n               <li>\r\n                Cleanse Dataset\r\n               </li>\r\n               <li>\r\n                Data Mapping & Conversion\r\n                </li>\r\n               <li>\r\n                Staffing Servicesdevelopment.\r\n               </li>\r\n           </ul>\r\n        </div>\r\n        \r\n        <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n            <img src=\"assets/images/manage-service-1.png\">\r\n        </div>\r\n    </div>\r\n\r\n <div class=\"row\">\r\n\r\n        <div *ngFor=\"let item of solution; index as i\" class=\"col-lg-6 col-md-6 col-sm-12 panel-container\">\r\n            <div class=\"panel\">\r\n                <div class=\"panel-front\">\r\n                    <div class=\"panel-heading\">\r\n                       <img src=\"assets/images/ourServices-{{i+1}}.jpg\">\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n\r\n                        <p>{{item.description}}</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"panel-back {{item.color}}\">\r\n                    <h5>{{item.title}}</h5>\r\n                    <p>{{item.description_2}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n</div>\r\n</div>\r\n</section>    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-news.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n        <h1>News Update</h1>\n        <h6>News, Press release and Media reports</h6>\n    </div></div></div>\n    </div>\n</div>\n<div class=\"container section-news\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n        <ul ngbNav #nav=\"ngbNav\" [(activeId)]=\"active\" class=\"nav-tabs\">\n            <li [ngbNavItem]=\"1\">\n              <a ngbNavLink>News</a>\n              <ng-template ngbNavContent>\n                <li *ngFor=\"let data of news; index as i\" class=\"p2 grid-li\">\n                    <div class=\"panel\">\n                        <div class=\"panel-heading\">\n                           <img src={{data.img}}-{{i+1}}.jpg alt=\"{{data.subtitle}}\">\n                        </div>\n                        <div class=\"panel-body\">\n                            <p>{{data.desc_1}}</p>\n                            <p>{{data.desc_2}}</p>\n                           \n                        </div>\n                 </div>\n                </li>\n            </ng-template>\n            </li>\n            <li [ngbNavItem]=\"2\">\n                <a ngbNavLink>Events</a>\n                <ng-template ngbNavContent>\n                \n              </ng-template>\n              </li>\n              <li [ngbNavItem]=\"3\">\n                <a ngbNavLink>Webinars</a>\n                <ng-template ngbNavContent>\n                  \n              </ng-template>\n              </li>\n              <li [ngbNavItem]=\"4\">\n                <a ngbNavLink>Press Releases</a>\n                <ng-template ngbNavContent>\n                \n              </ng-template>\n              </li>\n              <li [ngbNavItem]=\"5\">\n                <a ngbNavLink>Video Gallery</a>\n                <ng-template ngbNavContent>\n                 \n              </ng-template>\n              </li>\n          </ul>\n          \n          <div [ngbNavOutlet]=\"nav\" class=\"mt-4\"></div>\n    </div> </div>\n</div>\n\n<section class=\"news-video\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n\n                <div class=\"video\">\n                    <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/zmEG-5zEmPw\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n                </div>\n\n                <h6 class=\"center\">\n                    Arkedge Technologies has a very ambitious plan for future and we are looking for energetic, motivated, ambitious team players who relish the challenge of joining a growing business in the field of IT, Resourcing and Training. You will have the opportunity to grow professionally and financially.\n                </h6>\n            </div>\n        </div>\n    </div>\n</section>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ourproduct/ourproduct.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ourproduct/ourproduct.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\r\n    <img src=\"assets/images/inner-banner-ourproduct.jpg\">\r\n    <div class=\"page-title\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12 center\">\r\n                    <h1>Our Products</h1>\r\n                    <h6>Transforming industries with smarter ways</h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<section class=\"section-product\">\r\n    <div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n        <h6 class=\"center career\">\r\n            Arkedge Technologies has a very ambitious plan for future and we are looking for energetic, motivated, ambitious team players who relish the challenge of joining a growing business in the field of IT, Resourcing and Training. You will have the opportunity to grow professionally and financially.\r\n        </h6>\r\n        </div>\r\n    </div>\r\n</div>\r\n</section>\r\n\r\n    <section class=\"section-product-detail\">\r\n        <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n               <h2>Product Name 1</h2>\r\n               <p>\r\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.\r\n               </p>\r\n               <ul>\r\n                   <li>\r\n                    Robust version design\r\n                   </li>\r\n                   <li>\r\n                    Cross-platform architecture\r\n                   </li>\r\n                   <li>\r\n                    Wide variety of integration requirements\r\n                   </li>\r\n               </ul>\r\n               <button type=\"submit\" class=\"btn btn-primary\">Inquiry</button>\r\n               <button type=\"submit\" class=\"btn btn-primary\">Demo</button>\r\n\r\n            </div>\r\n            \r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                <img src=\"assets/images/product-detail-1.png\">\r\n            </div>\r\n\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                <img src=\"assets/images/product-detail-2.png\">\r\n            </div>\r\n\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                <h2>Product Name 2</h2>\r\n                <p>\r\n                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.\r\n                </p>\r\n                <ul>\r\n                    <li>\r\n                     Robust version design\r\n                    </li>\r\n                    <li>\r\n                     Cross-platform architecture\r\n                    </li>\r\n                    <li>\r\n                     Wide variety of integration requirements\r\n                    </li>\r\n                </ul>\r\n                <button type=\"submit\" class=\"btn btn-primary\">Inquiry</button>\r\n                <button type=\"submit\" class=\"btn btn-primary\">Demo</button>\r\n \r\n             </div>\r\n         \r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"section-product\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n            <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\" [config]=\"slideConfig\">\r\n                <div ngxSlickItem *ngFor=\"let product of products; index as i\" class=\"slide\">\r\n                    <img src=\"{{product.img}}-{{i+1}}.jpg\" alt=\"\" width=\"100%\">\r\n                </div>\r\n            </ngx-slick-carousel>\r\n        </div>\r\n    </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectengineering/projectengineering.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projectengineering/projectengineering.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-projectengineering.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n                    <h1>Product Engineering</h1>\n                    <h6>Softwares : Data Life-cycle Management : IT Staffing & Training</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<section class=\"section-project-engineering\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-3 col-lg-3 col-sm-12\">\n                <ngb-accordion [closeOthers]=\"true\" activeIds=\"static-1\">\n                    <ngb-panel id=\"static-1\" title=\"Software Engineering\">\n                        <ng-template ngbPanelContent>\n                            <ul>\n                                <li>Product Engineering</li>\n                                <li>Application Development</li>\n                                <li>UX/UI Development</li>\n                                <li>Software Testing & QA</li>\n                            </ul>\n                        </ng-template>\n                    </ngb-panel>\n                    <ngb-panel id=\"static-2\" title=\"Data Management\">\n                        <ng-template ngbPanelContent>\n                            <ul>\n                                <li>link goes here</li>\n\n                            </ul>\n                        </ng-template>\n                    </ngb-panel>\n                    <ngb-panel id=\"static-3\" title=\"IT Staffing & Training \">\n                        <ng-template ngbPanelContent>\n                            <ul>\n                                <li>link goes here</li>\n\n                            </ul>\n                        </ng-template>\n                    </ngb-panel>\n                </ngb-accordion>\n            </div>\n            <div class=\"col-md-9 col-lg-9 col-sm-12\">\n                <p>\n                    Competitive pressures, reduced time-to-market, increased demands of customers, and globalization are\n                    driving global product companies to explore the offshore route. A reliable offshore partner can play\n                    a key role from concept to the launch of the product. Product companies have increased their\n                    competitive advantage by partnering with offshore players for product development.\n                </p>\n                <p>\n                    We have been involved in architecting and building .NET driven business solutions right from the\n                    inception. Our .NET CoE has proven expertise in building world class products using the latest\n                    Microsoft® technologies and standards. Our knowledge of Microsoft® .NET technologies and product\n                    development methodologies enables us to work with customers across domains and successfully address\n                    their functional, usability, performance and scalability requirements.\n                </p>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"methodologies\">\n    <img src=\"assets/images/methodologies.jpg\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 center\">\n                <h1>Our Methodology</h1>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <ul class=\"panel-container\">\n\n                <li *ngFor=\"let item of solution; index as i\">\n                    <div class=\"icon-circle\">\n                        <i class=\"icon icon-medium\">\n                            <svg focusable=\"false\">\n                                <use attr.xlink:href=\"{{item.icon}}\"></use>\n                            </svg>\n                        </i>\n                    </div>\n                    <h6>{{item.title}}</h6>\n                    <ul class=\"info-bar\">\n                        <li>\n                            {{item.info}}\n                        </li>\n                    </ul>\n\n                </li>\n            </ul>\n\n        </div>\n    </div>\n</section>\n\n<section class=\"engeering-grap\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6 col-lg-6 col-sm-12\">\n                <h6>\n                    We practice agile development methodologies to help you take advantage of emerging market\n                    opportunities. We develop software in time-boxed iterations; each iteration is a discrete project\n                    encompassing all the PDLC stages. Our agile software project is capable of releasing standalone\n                    working software at the end of each iteration.\n                </h6>\n            </div>\n\n            <div class=\"col-md-6 col-lg-6 col-sm-12\">\n                <img src=\"assets/images/engeering-grap.jpg\">\n            </div>\n            <div class=\"col-sm-12\">\n                <p>\n                    Our solution architects also help you realize your vision of services based products through\n                    implementation of the Service Oriented Architecture (SOA) approach. They provide consulting,\n                    implementation, and re-engineering of existing product architectures using the SOA framework<br><br>\n\n                    The software products industry depends on bringing new concepts, new versions and new features to\n                    the market quickly. At the same time, development costs must be low, predictable, and flexible. We\n                    can help you address these daunting and seemingly conflicting requirements for software products.\n\n                </p>\n            </div>\n        </div>\n    </div>\n</section>\n\n\n<section>\n    <div class=\"container our-services\">\n        <div class=\"row\">\n            <div class=\"col-md-4 col-lg-4 col-sm-12 triangle\">\n                <div class=\"v-center\">\n                    <div class=\"logo-circle\">\n                        <i class=\"icon icon-large\">\n                            <svg focusable=\"false\">\n                                <use xlink:href=\"#icon_logoFlat\"></use>\n                            </svg>\n                        </i>\n                    </div>\n                    <h5>\n                        Arkedge Technologies<br>\n                        Services\n                    </h5>\n                </div>\n            </div>\n\n            <div class=\"col-md-8 col-lg-8 col-sm-12 v-flex\">\n                <ul>\n                    <li>\n                        Robust version design\n                    </li>\n                    <li>\n                        Cross-platform architecture\n                    </li>\n                    <li>\n                        Wide variety of integration requirements\n                    </li>\n                    <li>\n                        Comprehensive packaging\n                    </li>\n                    <li>\n                        Support over a range of environments\n                    </li>\n                </ul>\n            </div>\n\n        </div>\n    </div>\n</section>\n\n\n<section class=\"engeering-grap\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <p>\n                    Our solution architects also help you realize your vision of services based products through\n                    implementation of the Service Oriented Architecture (SOA) approach. They provide consulting,\n                    implementation, and re-engineering of existing product architectures using the SOA framework\n                    <br> <br>\n                    The software products industry depends on bringing new concepts, new versions and new features to\n                    the market quickly. At the same time, development costs must be low, predictable, and flexible. We\n                    can help you address these daunting and seemingly conflicting requirements for software products.\n                </p>\n            </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/technology/technology.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/technology/technology.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-technology.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n                    <h1>Technology</h1>\n                    <h6>Technical solution for all industries</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<section class=\"section-technology\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-4 col-md-4 col-sm-12\">\n                <ul>\n                    <li><a routerLink=\"Advancesolution\" routerLinkActive=\"active\" skipLocationChange=true>Solutions</a>\n                    </li>\n                    <li><a routerLink=\"Technology\" routerLinkActive=\"active\" skipLocationChange=true>Technology</a></li>\n                    <li><a routerLink=\"Industries\" routerLinkActive=\"active\" skipLocationChange=true>Industries</a></li>\n                </ul>\n            </div>\n\n            <div class=\"col-lg-8 col-md-8 col-sm-12\">\n                <p>ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass\n                    at the helm of the affairs. The organization is making its presence felt on the engineering solution\n                    and services, Staffing and IT training circuit. Equipped with cross cultural operating experience;\n                    an asset, it drives the organization to deliver nothing but the best.\n                </p>\n            </div>\n\n            <div class=\"col-sm-12\">\n                <p>Over the years we have built up a solid team of software professionals that come from different\n                    backgrounds & enlarge the creative potential of ARKEDGE. The competence that they offer contains a\n                    wide range of custom programming skills including the latest and most effective development in\n                    Microsoft technologies. </p>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <h3>\n                    Key Differentiators\n                </h3>\n            </div>\n            <div class=\"col-md-8 col-lg-8 col-sm-12\">\n                <ul>\n                    <li>\n                        We provide custom application programming services to end customers.\n                    </li>\n                    <li>\n                        Our competence and experience ensure that we provide excellent services and products to our\n                        customers.\n                    </li>\n                    <li>\n                        At every stage of the development process, from conceptual design to product release, the\n                        highest quality standards are maintained.\n                    </li>\n                    <li>\n                        Our extensive communication facilities allow us to keep in touch with our customers 24X7.\n                    </li>\n                </ul>\n            </div>\n\n        </div>\n    </div>\n</section>\n\n<section>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <p>\n                    Ever-growing demand for Web Application solutions is driven by rapidly changing market conditions\n                    and technology progress. To streamline your business, we address those issues with our Internet and\n                    Intranet solutions. In addition we also provide you web / animation design services.<br><br>\n\n                    Along with the engineering solution and services ARKEDGE is specialized in helpings client\n                    organizations identify, evaluate, and recruit executives at various levels. It comprises of\n                    well-qualified group of people having faith in camaraderie and serving the industry to find the\n                    solutions to various key areas as Staffing, Executive Search and IT training.<br><br>\n\n                    In addition ARKEDGE specializes in a bunch of IT training services for corporate, institutions and\n                    individuals. We do organize corporate training programs for industry officials who find it difficult\n                    to mingle their expertise with latest IT tools and IT based technology. We do impart IT training for\n                    graduates in multiple discipline including computer application, hard core technology, business\n                    administration, and individuals who are in the mid of their management education.\n                </p>\n            </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
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


/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".about-key-diff {\n  background: url('about.jpg') no-repeat bottom center #1d4b76;\n  padding: 70px 0;\n}\n.about-key-diff h1 {\n  color: #fff;\n  font-weight: normal;\n}\n.about-key-diff ul {\n  margin-top: 35px;\n}\n.about-key-diff ul li {\n  color: #fff;\n  padding: 10px 0;\n  list-style: inside disc;\n  font-size: 16px;\n}\n.about-info {\n  background: #e5f0fa;\n}\n.about-info .v-align {\n  display: flex;\n}\n.about-info .v-align p {\n  align-self: center;\n}\n.icon-circle {\n  height: 90px;\n  width: 90px;\n  border-radius: 50%;\n  margin: 0 auto;\n}\n.icon-circle i {\n  line-height: 90px;\n}\n.icon-circle i svg {\n  fill: #fff;\n}\n.section-info {\n  padding: 70px 0;\n}\n.section-info .panel-container {\n  margin-top: 60px;\n  min-height: 330px;\n  perspective: 1000px;\n}\n.section-info .panel-container:hover .panel {\n  transform: rotateX(180deg);\n}\n.section-info .panel {\n  color: #fff;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 1s;\n  transform-style: preserve-3d;\n}\n.section-info .panel .panel-front {\n  border-top: 5px solid;\n  padding-top: 25px;\n  z-index: 1;\n}\n.section-info .panel .panel-front::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n.section-info .panel .panel-front.red {\n  background: url('1.jpg') no-repeat top center;\n  border-color: #b9646e;\n}\n.section-info .panel .panel-front.red .circle-bg {\n  background-color: #b9646e;\n}\n.section-info .panel .panel-front.blue {\n  background: url('2.jpg') no-repeat top center;\n  border-color: #276caa;\n}\n.section-info .panel .panel-front.blue .circle-bg {\n  background-color: #276caa;\n}\n.section-info .panel .panel-front.green {\n  background: url('3.jpg') no-repeat top center;\n  border-color: #4bbb57;\n}\n.section-info .panel .panel-front.green .circle-bg {\n  background-color: #4bbb57;\n}\n.section-info .panel .panel-back {\n  padding-top: 25px;\n}\n.section-info .panel .panel-back.red {\n  background-color: #b9646e;\n}\n.section-info .panel .panel-back.blue {\n  background-color: #276caa;\n}\n.section-info .panel .panel-back.green {\n  background-color: #4bbb57;\n}\n.section-info .panel .panel-front, .section-info .panel .panel-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.section-info .panel .panel-back {\n  transform: rotateX(180deg);\n}\n.section-info .panel .panel-back p {\n  padding: 10px;\n}\n.section-info .panel h5 {\n  margin: 20px 0;\n}\n.section-info .panel p {\n  margin: 0;\n}\n.about-tab .nav-tabs {\n  border: none;\n}\n.about-tab .nav-tabs .nav-item {\n  width: 100%;\n}\n.about-tab .nav-tabs .nav-item .nav-link {\n  border: none;\n  background: #e5e5e5;\n  margin-bottom: 10px;\n  display: block;\n  border-radius: 0;\n  color: #333333;\n}\n.about-tab .nav-tabs .nav-item .nav-link.active, .about-tab .nav-tabs .nav-item .nav-link:hover {\n  background: #214f7a;\n  color: #fff;\n}\n.about-tab {\n  margin: 70px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvRjpcXGdpdGh1Ylxcd29yay9zcmNcXGFwcFxcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDREQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQUk7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUNFUjtBREFJO0VBQ0ksZ0JBQUE7QUNFUjtBRERTO0VBQ0csV0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNHWjtBREVBO0VBQ0ksbUJBQUE7QUNDSjtBREFJO0VBQ0ksYUFBQTtBQ0VSO0FERFE7RUFDSSxrQkFBQTtBQ0daO0FET0E7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0pEO0FES0M7RUFDQyxpQkFBQTtBQ0hGO0FESUU7RUFDQyxVQUFBO0FDRkg7QURRQTtFQUNJLGVBQUE7QUNMSjtBRE1DO0VBQ08sZ0JBQUE7RUFDTixpQkFBQTtFQUNBLG1CQUFBO0FDSkY7QURLRTtFQUNDLDBCQUFBO0FDSEg7QURNQztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FDSkY7QURLRTtFQUNDLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FDSEg7QURJRztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUNGSjtBRElHO0VBQ0MsNkNBQUE7RUFDQSxxQkFwREM7QUNrREw7QURHSTtFQUNDLHlCQXREQTtBQ3FETDtBREtHO0VBQ0MsNkNBQUE7RUFDQSxxQkEzREU7QUN3RE47QURJSTtFQUNDLHlCQTdEQztBQzJETjtBRE1HO0VBQ0MsNkNBQUE7RUFDQSxxQkFsRUc7QUM4RFA7QURLSTtFQUNDLHlCQXBFRTtBQ2lFUDtBRFFFO0VBQ0MsaUJBQUE7QUNOSDtBRE9HO0VBQ0MseUJBOUVDO0FDeUVMO0FEUUc7RUFDQyx5QkFqRkU7QUMyRU47QURTRztFQUNDLHlCQXBGRztBQzZFUDtBRFdFO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7QUNUSDtBRFdFO0VBRUMsMEJBQUE7QUNWSDtBRFdHO0VBQ0MsYUFBQTtBQ1RKO0FEWUU7RUFDQyxjQUFBO0FDVkg7QURZRTtFQUNDLFNBQUE7QUNWSDtBRGlCQztFQUNDLFlBQUE7QUNkRjtBRGVFO0VBQ0MsV0FBQTtBQ2JIO0FEY0c7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNaSDtBRGFHO0VBQ0MsbUJBQUE7RUFDQSxXQUFBO0FDWEo7QURrQkE7RUFDQyxjQUFBO0FDZkQiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC1rZXktZGlmZntcclxuICAgIGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQuanBnKSBuby1yZXBlYXQgYm90dG9tIGNlbnRlciAjMWQ0Yjc2O1xyXG4gICAgcGFkZGluZzo3MHB4IDA7XHJcbiAgICBoMXtcclxuICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuICAgIH1cclxuICAgIHVse1xyXG4gICAgICAgIG1hcmdpbi10b3A6MzVweDtcclxuICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTppbnNpZGUgZGlzYztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmFib3V0LWluZm97XHJcbiAgICBiYWNrZ3JvdW5kOiNlNWYwZmE7XHJcbiAgICAudi1hbGlnbntcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbiRyZWQ6I2I5NjQ2ZTtcclxuJGJsdWU6IzI3NmNhYTtcclxuJGdyZWVuOiM0YmJiNTc7XHJcblxyXG4uaWNvbi1jaXJjbGV7XHJcblx0aGVpZ2h0OjkwcHg7XHJcblx0d2lkdGg6OTBweDtcclxuXHRib3JkZXItcmFkaXVzOjUwJTtcclxuXHRtYXJnaW46MCBhdXRvO1xyXG5cdGl7XHJcblx0XHRsaW5lLWhlaWdodDo5MHB4O1xyXG5cdFx0c3Zne1xyXG5cdFx0XHRmaWxsOiNmZmY7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG59XHJcblxyXG4uc2VjdGlvbi1pbmZve1xyXG4gICAgcGFkZGluZzo3MHB4IDA7XHJcblx0LnBhbmVsLWNvbnRhaW5lcntcclxuICAgICAgICBtYXJnaW4tdG9wOjYwcHg7XHJcblx0XHRtaW4taGVpZ2h0OiAzMzBweDtcclxuXHRcdHBlcnNwZWN0aXZlOiAxMDAwcHg7XHJcblx0XHQmOmhvdmVyIC5wYW5lbHtcclxuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5wYW5lbHtcclxuXHRcdGNvbG9yOiNmZmY7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcclxuXHRcdHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcblx0XHQucGFuZWwtZnJvbnR7XHJcblx0XHRcdGJvcmRlci10b3A6IDVweCBzb2xpZDtcclxuXHRcdFx0cGFkZGluZy10b3A6IDI1cHg7XHJcblx0XHRcdHotaW5kZXg6IDE7XHJcblx0XHRcdCY6OmFmdGVye1xyXG5cdFx0XHRcdGNvbnRlbnQ6Jyc7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHRcdFx0aGVpZ2h0OjEwMCU7XHJcblx0XHRcdFx0YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC41KTtcclxuXHRcdFx0XHR0b3A6IDA7XHJcblx0XHRcdFx0bGVmdDogMDtcclxuXHRcdFx0XHR6LWluZGV4OiAtMTtcclxuXHRcdFx0fVxyXG5cdFx0XHQmLnJlZHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOnVybCguLi8uLi9hc3NldHMvaW1hZ2VzLzEuanBnKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcclxuXHRcdFx0XHRib3JkZXItY29sb3I6ICRyZWQ7XHJcblx0XHRcdFx0LmNpcmNsZS1iZ3tcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6JHJlZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdCYuYmx1ZXtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOnVybCguLi8uLi9hc3NldHMvaW1hZ2VzLzIuanBnKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcclxuXHRcdFx0XHRib3JkZXItY29sb3I6ICRibHVlO1xyXG5cdFx0XHRcdC5jaXJjbGUtYmd7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiRibHVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0Ji5ncmVlbntcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOnVybCguLi8uLi9hc3NldHMvaW1hZ2VzLzMuanBnKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcclxuXHRcdFx0XHRib3JkZXItY29sb3I6ICRncmVlbjtcclxuXHRcdFx0XHQuY2lyY2xlLWJne1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjokZ3JlZW47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0LnBhbmVsLWJhY2t7XHJcblx0XHRcdHBhZGRpbmctdG9wOiAyNXB4O1xyXG5cdFx0XHQmLnJlZHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiRyZWQ7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdCYuYmx1ZXtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiRibHVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQmLmdyZWVue1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6JGdyZWVuO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHJcblx0XHQucGFuZWwtZnJvbnQsIC5wYW5lbC1iYWNre1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdFx0XHRiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0XHR9XHJcblx0XHQucGFuZWwtYmFja1xyXG5cdFx0e1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxuXHRcdFx0cHtcclxuXHRcdFx0XHRwYWRkaW5nOjEwcHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGg1e1xyXG5cdFx0XHRtYXJnaW46MjBweCAwO1xyXG5cdFx0fVxyXG5cdFx0cHtcclxuXHRcdFx0bWFyZ2luOjA7XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLmFib3V0LXRhYntcclxuXHQubmF2LXRhYnMge1xyXG5cdFx0Ym9yZGVyOm5vbmU7XHJcblx0XHQubmF2LWl0ZW17XHJcblx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHRcdC5uYXYtbGlua3tcclxuXHRcdFx0Ym9yZGVyOm5vbmU7XHJcblx0XHRcdGJhY2tncm91bmQ6ICNlNWU1ZTU7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206MTBweDtcclxuXHRcdFx0ZGlzcGxheTpibG9jaztcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMDtcclxuXHRcdFx0Y29sb3I6IzMzMzMzMztcclxuXHRcdFx0Ji5hY3RpdmUsICY6aG92ZXJ7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogIzIxNGY3YTtcclxuXHRcdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5hYm91dC10YWJ7XHJcblx0bWFyZ2luOjcwcHggMDtcclxufSIsIi5hYm91dC1rZXktZGlmZiB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0LmpwZykgbm8tcmVwZWF0IGJvdHRvbSBjZW50ZXIgIzFkNGI3NjtcbiAgcGFkZGluZzogNzBweCAwO1xufVxuLmFib3V0LWtleS1kaWZmIGgxIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uYWJvdXQta2V5LWRpZmYgdWwge1xuICBtYXJnaW4tdG9wOiAzNXB4O1xufVxuLmFib3V0LWtleS1kaWZmIHVsIGxpIHtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgbGlzdC1zdHlsZTogaW5zaWRlIGRpc2M7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmFib3V0LWluZm8ge1xuICBiYWNrZ3JvdW5kOiAjZTVmMGZhO1xufVxuLmFib3V0LWluZm8gLnYtYWxpZ24ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmFib3V0LWluZm8gLnYtYWxpZ24gcCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmljb24tY2lyY2xlIHtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5pY29uLWNpcmNsZSBpIHtcbiAgbGluZS1oZWlnaHQ6IDkwcHg7XG59XG4uaWNvbi1jaXJjbGUgaSBzdmcge1xuICBmaWxsOiAjZmZmO1xufVxuXG4uc2VjdGlvbi1pbmZvIHtcbiAgcGFkZGluZzogNzBweCAwO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgbWluLWhlaWdodDogMzMwcHg7XG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbC1jb250YWluZXI6aG92ZXIgLnBhbmVsIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCB7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWZyb250IHtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkO1xuICBwYWRkaW5nLXRvcDogMjVweDtcbiAgei1pbmRleDogMTtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1mcm9udDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAtMTtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1mcm9udC5yZWQge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy8xLmpwZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XG4gIGJvcmRlci1jb2xvcjogI2I5NjQ2ZTtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1mcm9udC5yZWQgLmNpcmNsZS1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOTY0NmU7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtZnJvbnQuYmx1ZSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzLzIuanBnKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcbiAgYm9yZGVyLWNvbG9yOiAjMjc2Y2FhO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWZyb250LmJsdWUgLmNpcmNsZS1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzZjYWE7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtZnJvbnQuZ3JlZW4ge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy8zLmpwZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XG4gIGJvcmRlci1jb2xvcjogIzRiYmI1Nztcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1mcm9udC5ncmVlbiAuY2lyY2xlLWJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiYmI1Nztcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1iYWNrIHtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtYmFjay5yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjk2NDZlO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWJhY2suYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzZjYWE7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtYmFjay5ncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YmJiNTc7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtZnJvbnQsIC5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWJhY2sge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1iYWNrIHAge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgaDUge1xuICBtYXJnaW46IDIwcHggMDtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIHAge1xuICBtYXJnaW46IDA7XG59XG5cbi5hYm91dC10YWIgLm5hdi10YWJzIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLmFib3V0LXRhYiAubmF2LXRhYnMgLm5hdi1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYWJvdXQtdGFiIC5uYXYtdGFicyAubmF2LWl0ZW0gLm5hdi1saW5rIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4uYWJvdXQtdGFiIC5uYXYtdGFicyAubmF2LWl0ZW0gLm5hdi1saW5rLmFjdGl2ZSwgLmFib3V0LXRhYiAubmF2LXRhYnMgLm5hdi1pdGVtIC5uYXYtbGluazpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyMTRmN2E7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYWJvdXQtdGFiIHtcbiAgbWFyZ2luOiA3MHB4IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() {
        this.keydiff = [
            { list: 'We provide custom application programming services to end customers.' },
            { list: 'Our competence and experience ensure that we provide excellent services and products to our customers.' },
            { list: 'At every stage of the development process, from conceptual design to product release, the highest quality standards are maintained.' },
            { list: 'Our extensive communication facilities allow us to keep in touch with our customers 24X7.' }
        ];
        this.tabs = [
            { title: 'About Us', decs: 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. The organization is making its presence felt on the engineering solution and services, Staffing and IT training circuit. Equipped with cross cultural operating experience; an asset, it drives the organization to deliver nothing but the best. Over the years we have built up a solid team of software professionals that come from different backgrounds and enlarge the creative potential of ARKEDGE. The competence that they offer contains a wide range of custom programming skills including the latest and most effective development in Microsoft technologies.' },
            { title: 'Why ARKEDGE', decs: 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. ' },
            { title: 'Centers of Excellence', decs: 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. ' },
            { title: 'Vision & Mission', decs: 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. ' },
            { title: 'Values', decs: 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. ' },
            { title: 'Leadership', decs: 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. ' },
            { title: 'News', decs: 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. ' },
        ];
        this.solution = [
            {
                title: 'Data Management',
                color: 'red',
                list: [
                    { name: 'Cleanse Dataset' },
                    { name: 'Data Mapping & Conversion' },
                    { name: 'Data Migration & Consolidation' },
                    { name: 'Spend Analysis' }
                ],
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio',
                icon: '#icon_mgmt'
            },
            {
                title: 'Software Engineering',
                color: 'blue',
                list: [
                    { name: 'Product Engineering' },
                    { name: 'Application Development' },
                    { name: 'UX/UI Development' },
                    { name: 'Software Testing & QA' }
                ],
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio',
                icon: '#icon_softEngg'
            },
            {
                title: 'IT Staffing & Training',
                color: 'green',
                list: [
                    { name: 'Staffing Services' },
                    { name: 'Industries' },
                    { name: 'Courses' },
                    { name: 'Program Calendar' }
                ],
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio',
                icon: '#icon_training'
            },
        ];
    }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/advancesolution/advancesolution.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/advancesolution/advancesolution.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section-advance-solution ul li a {\n  padding: 15px;\n  margin-bottom: 15px;\n  background: #e5e5e5;\n  color: #333333;\n  display: block;\n}\n.section-advance-solution ul li a.active {\n  background: #214f7a;\n  color: #fff;\n}\n.section-advance-solution + section {\n  background: #e5f0fa;\n}\n.section-advance-solution + section img {\n  max-width: 100%;\n}\n.info {\n  background: #e5f0fa;\n  padding: 15px;\n}\n.info p {\n  position: relative;\n  padding-right: 100px;\n}\n.info p i {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWR2YW5jZXNvbHV0aW9uL0Y6XFxnaXRodWJcXHdvcmsvc3JjXFxhcHBcXGFkdmFuY2Vzb2x1dGlvblxcYWR2YW5jZXNvbHV0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZHZhbmNlc29sdXRpb24vYWR2YW5jZXNvbHV0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0ZoQjtBREdnQjtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQ0RwQjtBRE1JO0VBQ0ksbUJBQUE7QUNKUjtBREtRO0VBQ0ksZUFBQTtBQ0haO0FEUUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUNMSjtBRE1JO0VBQ0csa0JBQUE7RUFDQSxvQkFBQTtBQ0pQO0FES087RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0FDSFgiLCJmaWxlIjoic3JjL2FwcC9hZHZhbmNlc29sdXRpb24vYWR2YW5jZXNvbHV0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24tYWR2YW5jZS1zb2x1dGlvbntcclxuICAgIHVse1xyXG4gICAgICAgIGxpe1xyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzoxNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxNXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDojZTVlNWU1O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IzMzMzMzMztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICAmLmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiMyMTRmN2E7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJiArIHNlY3Rpb257XHJcbiAgICAgICAgYmFja2dyb3VuZDojZTVmMGZhO1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmluZm97XHJcbiAgICBiYWNrZ3JvdW5kOiNlNWYwZmE7XHJcbiAgICBwYWRkaW5nOjE1cHg7XHJcbiAgICBwe1xyXG4gICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgcGFkZGluZy1yaWdodDoxMDBweDtcclxuICAgICAgIGl7XHJcbiAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgIHJpZ2h0OjA7XHJcbiAgICAgICAgICAgdG9wOjA7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuc2VjdGlvbi1hZHZhbmNlLXNvbHV0aW9uIHVsIGxpIGEge1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xuICBjb2xvcjogIzMzMzMzMztcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uc2VjdGlvbi1hZHZhbmNlLXNvbHV0aW9uIHVsIGxpIGEuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzIxNGY3YTtcbiAgY29sb3I6ICNmZmY7XG59XG4uc2VjdGlvbi1hZHZhbmNlLXNvbHV0aW9uICsgc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNlNWYwZmE7XG59XG4uc2VjdGlvbi1hZHZhbmNlLXNvbHV0aW9uICsgc2VjdGlvbiBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5pbmZvIHtcbiAgYmFja2dyb3VuZDogI2U1ZjBmYTtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5pbmZvIHAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xufVxuLmluZm8gcCBpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/advancesolution/advancesolution.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/advancesolution/advancesolution.component.ts ***!
  \**************************************************************/
/*! exports provided: AdvancesolutionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancesolutionComponent", function() { return AdvancesolutionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdvancesolutionComponent = class AdvancesolutionComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdvancesolutionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-advancesolution',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./advancesolution.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/advancesolution/advancesolution.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./advancesolution.component.scss */ "./src/app/advancesolution/advancesolution.component.scss")).default]
    })
], AdvancesolutionComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _advancesolution_advancesolution_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./advancesolution/advancesolution.component */ "./src/app/advancesolution/advancesolution.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _ourproduct_ourproduct_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ourproduct/ourproduct.component */ "./src/app/ourproduct/ourproduct.component.ts");
/* harmony import */ var _managedservice_managedservice_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./managedservice/managedservice.component */ "./src/app/managedservice/managedservice.component.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./company/company.component */ "./src/app/company/company.component.ts");
/* harmony import */ var _career_career_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./career/career.component */ "./src/app/career/career.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _inner_page_header_inner_page_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./inner-page-header/inner-page-header.component */ "./src/app/inner-page-header/inner-page-header.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./client/client.component */ "./src/app/client/client.component.ts");
/* harmony import */ var _industries_industries_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./industries/industries.component */ "./src/app/industries/industries.component.ts");
/* harmony import */ var _technology_technology_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./technology/technology.component */ "./src/app/technology/technology.component.ts");
/* harmony import */ var _projectengineering_projectengineering_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./projectengineering/projectengineering.component */ "./src/app/projectengineering/projectengineering.component.ts");




















const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'Advancesolution', component: _advancesolution_advancesolution_component__WEBPACK_IMPORTED_MODULE_3__["AdvancesolutionComponent"] },
    { path: 'Technology', component: _technology_technology_component__WEBPACK_IMPORTED_MODULE_18__["TechnologyComponent"] },
    { path: 'Industries', component: _industries_industries_component__WEBPACK_IMPORTED_MODULE_17__["IndustriesComponent"] },
    { path: 'OurProduct', component: _ourproduct_ourproduct_component__WEBPACK_IMPORTED_MODULE_5__["OurproductComponent"] },
    { path: 'ManagedService', component: _managedservice_managedservice_component__WEBPACK_IMPORTED_MODULE_6__["ManagedserviceComponent"] },
    { path: 'WhoWeAre', component: _company_company_component__WEBPACK_IMPORTED_MODULE_7__["CompanyComponent"] },
    { path: 'Career', component: _career_career_component__WEBPACK_IMPORTED_MODULE_8__["CareerComponent"] },
    { path: 'Contactus', component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_9__["ContactusComponent"] },
    { path: 'NewsAndEventUpdate', component: _news_news_component__WEBPACK_IMPORTED_MODULE_14__["NewsComponent"] },
    { path: 'WhoWeAre', component: _about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"] },
    { path: 'OurHappyClients', component: _client_client_component__WEBPACK_IMPORTED_MODULE_16__["ClientComponent"] },
    { path: 'ProjectEngineering', component: _projectengineering_projectengineering_component__WEBPACK_IMPORTED_MODULE_19__["ProjectengineeringComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _advancesolution_advancesolution_component__WEBPACK_IMPORTED_MODULE_3__["AdvancesolutionComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
            _ourproduct_ourproduct_component__WEBPACK_IMPORTED_MODULE_5__["OurproductComponent"],
            _managedservice_managedservice_component__WEBPACK_IMPORTED_MODULE_6__["ManagedserviceComponent"],
            _company_company_component__WEBPACK_IMPORTED_MODULE_7__["CompanyComponent"],
            _career_career_component__WEBPACK_IMPORTED_MODULE_8__["CareerComponent"],
            _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_9__["ContactusComponent"],
            _inner_page_header_inner_page_header_component__WEBPACK_IMPORTED_MODULE_13__["InnerPageHeaderComponent"],
            _news_news_component__WEBPACK_IMPORTED_MODULE_14__["NewsComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"],
            _client_client_component__WEBPACK_IMPORTED_MODULE_16__["ClientComponent"],
            _technology_technology_component__WEBPACK_IMPORTED_MODULE_18__["TechnologyComponent"],
            _industries_industries_component__WEBPACK_IMPORTED_MODULE_17__["IndustriesComponent"],
            _projectengineering_projectengineering_component__WEBPACK_IMPORTED_MODULE_19__["ProjectengineeringComponent"]
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_12__["SlickCarouselModule"]
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  color: #555555;\n  font-family: \"Noto Sans\", sans-serif;\n  font-size: 16px;\n}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\nh1 {\n  font-size: 40px;\n}\n\nh2 {\n  font-size: 34px;\n}\n\nh3 {\n  font-size: 30px;\n}\n\nh4 {\n  font-size: 26px;\n}\n\nh5 {\n  font-size: 22px;\n}\n\nh6 {\n  font-size: 18px;\n  line-height: 32px;\n}\n\nh1 {\n  font-weight: bold;\n}\n\n.center {\n  text-align: center;\n}\n\n.heading-highlight {\n  color: #276CAA;\n}\n\nsection {\n  padding: 70px 0;\n}\n\n.btn {\n  font-size: 16px;\n  font-weight: bold;\n  border-radius: 30px;\n  padding: 15px 50px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  border: none;\n}\n\n.btn + .btn {\n  margin-left: 15px;\n}\n\n.btn.btn-primary {\n  background: #276caa;\n}\n\n.btn:hover {\n  opacity: 0.8;\n}\n\nsvg {\n  vertical-align: middle;\n  margin: auto;\n  align-content: center;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n.icon-large > svg {\n  width: 100px;\n  height: 100px;\n}\n\n.icon-medium > svg {\n  width: 50px;\n  height: 50px;\n}\n\n.icon-small > svg {\n  width: 34px;\n  height: 34px;\n}\n\n.icon-ex-small > svg {\n  width: 24px;\n  height: 24px;\n}\n\n.slick-slider {\n  width: 100%;\n  margin: auto;\n}\n\n.section-product .slick-prev:before, .section-product .slick-next:before {\n  color: #000;\n}\n\n.section-product .slick-list {\n  padding: 70px 0 !important;\n}\n\n.inner-banner {\n  margin-top: 73px;\n  position: relative;\n}\n\n.inner-banner img {\n  width: 100%;\n}\n\n.inner-banner .page-title {\n  position: absolute;\n  bottom: 60px;\n  background: rgba(255, 255, 255, 0.8);\n  width: 100%;\n  padding: 10px 0;\n  color: #214f7a;\n}\n\ninput.form-control {\n  border-radius: 150px;\n}\n\ntextarea.form-control {\n  border-radius: 15px;\n  resize: none;\n}\n\n.accordion .card {\n  border-radius: 0px;\n  border: none;\n}\n\n.accordion .card .card-header {\n  border: none;\n  background: none;\n  padding: 0 0 15px;\n}\n\n.accordion .card .card-header .btn {\n  border-radius: 0;\n  padding: 10px 15px;\n  background: #214f7a;\n  width: 100%;\n  text-align: left;\n  color: #fff;\n  text-decoration: none;\n}\n\n.accordion .card .card-header .btn.collapsed {\n  background: #e5e5e5;\n  color: #333333;\n}\n\n.section-project-engineering .card-body {\n  padding: 0px;\n}\n\n.main-banner .carousel-indicators {\n  bottom: 70px;\n}\n\n@media (min-width: 1200px) {\n  .container, .container-lg, .container-md, .container-sm, .container-xl {\n    max-width: 1399px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRjpcXGdpdGh1Ylxcd29yay9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxjQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDRUQ7O0FEQUE7RUFDQyxlQUFBO0FDR0Q7O0FEREE7RUFDQyxlQUFBO0FDSUQ7O0FERkE7RUFDQyxlQUFBO0FDS0Q7O0FESEE7RUFDQyxlQUFBO0FDTUQ7O0FESkE7RUFDQyxlQUFBO0FDT0Q7O0FETEE7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7QUNRRDs7QUROQTtFQUNDLGlCQUFBO0FDU0Q7O0FEUEE7RUFDQyxrQkFBQTtBQ1VEOztBRFJBO0VBQ0ksY0FBQTtBQ1dKOztBRFRBO0VBQ0ksZUFBQTtBQ1lKOztBRFZBO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDYUQ7O0FEWkM7RUFDRSxpQkFBQTtBQ2NIOztBRFpDO0VBQ0MsbUJBQUE7QUNjRjs7QURaQztFQUNDLFlBQUE7QUNjRjs7QURYQTtFQUNDLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDY0Q7O0FEWkE7RUFDQyxnQkFBQTtBQ2VEOztBRGJBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7QUNnQkQ7O0FEZEE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ2lCRDs7QURmQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDa0JEOztBRGhCQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDbUJEOztBRGhCQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDbUJEOztBRGZDO0VBQ0MsV0FBQTtBQ2tCRjs7QURoQkM7RUFDQywwQkFBQTtBQ2tCRjs7QURiRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNnQko7O0FEZkk7RUFDSSxXQUFBO0FDaUJSOztBRGZJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNpQlI7O0FEZEE7RUFDQyxvQkFBQTtBQ2lCRDs7QURkQTtFQUNDLG1CQUFBO0VBQ0EsWUFBQTtBQ2lCRDs7QURYRTtFQUNDLGtCQUFBO0VBQ0EsWUFBQTtBQ2NIOztBRGJJO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNlTDs7QURkSTtFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ2dCTDs7QURmSztFQUNDLG1CQUFBO0VBQ0EsY0FBQTtBQ2lCTjs7QURUQztFQUNDLFlBQUE7QUNZRjs7QURSRTtFQUNDLFlBQUE7QUNXSDs7QURQQztFQUNDO0lBQ0MsaUJBQUE7RUNVRDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuXHRjb2xvcjojNTU1NTU1O1xyXG5cdGZvbnQtZmFtaWx5OiAnTm90byBTYW5zJywgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6MTZweDtcclxufVxyXG51bHtcclxuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcblx0bWFyZ2luOjA7XHJcblx0cGFkZGluZzowO1xyXG59XHJcbmgxe1xyXG5cdGZvbnQtc2l6ZTo0MHB4O1xyXG59XHJcbmgye1xyXG5cdGZvbnQtc2l6ZTozNHB4O1xyXG59XHJcbmgze1xyXG5cdGZvbnQtc2l6ZTozMHB4O1xyXG59XHJcbmg0e1xyXG5cdGZvbnQtc2l6ZToyNnB4O1xyXG59XHJcbmg1e1xyXG5cdGZvbnQtc2l6ZToyMnB4O1xyXG59XHJcbmg2e1xyXG5cdGZvbnQtc2l6ZToxOHB4OyBcclxuXHRsaW5lLWhlaWdodDogMzJweDtcclxufVxyXG5oMXtcclxuXHRmb250LXdlaWdodDpib2xkO1xyXG59XHJcbi5jZW50ZXJ7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyOyBcclxufVx0XHJcbi5oZWFkaW5nLWhpZ2hsaWdodHtcclxuICAgIGNvbG9yOiMyNzZDQUE7XHJcbn1cclxuc2VjdGlvbntcclxuICAgIHBhZGRpbmc6NzBweCAwO1xyXG59XHJcbi5idG57XHJcblx0Zm9udC1zaXplOjE2cHg7XHJcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRib3JkZXItcmFkaXVzOiAzMHB4O1xyXG5cdHBhZGRpbmc6IDE1cHggNTBweDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGxldHRlci1zcGFjaW5nOiAxcHg7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdCYrIC5idG57XHJcblx0XHRcdG1hcmdpbi1sZWZ0OjE1cHg7XHJcblx0fVxyXG5cdCYuYnRuLXByaW1hcnl7XHJcblx0XHRiYWNrZ3JvdW5kOiMyNzZjYWE7XHJcblx0fVxyXG5cdCY6aG92ZXJ7XHJcblx0XHRvcGFjaXR5OjAuODtcclxuXHR9XHJcbn1cclxuc3ZnIHtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdG1hcmdpbjogYXV0bztcclxuXHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuc3ZnOm5vdCg6cm9vdCkge1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmljb24tbGFyZ2U+c3ZnIHtcclxuXHR3aWR0aDogMTAwcHg7XHJcblx0aGVpZ2h0OiAxMDBweDtcclxufVxyXG4uaWNvbi1tZWRpdW0+c3ZnIHtcclxuXHR3aWR0aDogNTBweDtcclxuXHRoZWlnaHQ6IDUwcHg7XHJcbn1cclxuLmljb24tc21hbGw+c3ZnIHtcclxuXHR3aWR0aDogMzRweDtcclxuXHRoZWlnaHQ6IDM0cHg7XHJcbn1cclxuLmljb24tZXgtc21hbGw+c3ZnIHtcclxuXHR3aWR0aDogMjRweDtcclxuXHRoZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5zbGljay1zbGlkZXIge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbjogYXV0bztcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLXByb2R1Y3R7XHJcblx0LnNsaWNrLXByZXY6YmVmb3JlLCAuc2xpY2stbmV4dDpiZWZvcmV7XHJcblx0XHRjb2xvcjojMDAwO1xyXG5cdH1cclxuXHQuc2xpY2stbGlzdHtcclxuXHRcdHBhZGRpbmc6NzBweCAwICFpbXBvcnRhbnQ7XHJcblx0fVxyXG4gIH1cclxuIFxyXG5cclxuICAuaW5uZXItYmFubmVye1xyXG4gICAgbWFyZ2luLXRvcDo3M3B4O1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgIH1cclxuICAgIC5wYWdlLXRpdGxle1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDYwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDpyZ2IoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgY29sb3I6IzIxNGY3YTtcclxuICAgIH1cclxufVxyXG5pbnB1dC5mb3JtLWNvbnRyb2x7XHJcblx0Ym9yZGVyLXJhZGl1czogMTUwcHg7XHJcbn1cclxuXHJcbnRleHRhcmVhLmZvcm0tY29udHJvbHtcclxuXHRib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cdHJlc2l6ZTogbm9uZTtcclxufVxyXG5cclxuXHJcblxyXG5cdC5hY2NvcmRpb257XHJcblx0XHQuY2FyZHtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czowcHg7XHJcblx0XHRcdGJvcmRlcjpub25lO1xyXG5cdFx0XHQgLmNhcmQtaGVhZGVye1xyXG5cdFx0XHRcdCBib3JkZXI6bm9uZTtcclxuXHRcdFx0XHQgYmFja2dyb3VuZDpub25lO1xyXG5cdFx0XHRcdCBwYWRkaW5nOjAgMCAxNXB4O1xyXG5cdFx0XHRcdC5idG57XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOjA7XHJcblx0XHRcdFx0XHRwYWRkaW5nOjEwcHggMTVweDtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IzIxNGY3YTtcclxuXHRcdFx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdFx0XHRcdFx0Y29sb3I6I2ZmZjtcclxuXHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdFx0XHRcdCYuY29sbGFwc2Vke1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiNlNWU1ZTU7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiMzMzMzMzM7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuc2VjdGlvbi1wcm9qZWN0LWVuZ2luZWVyaW5ne1xyXG5cdC5jYXJkLWJvZHl7XHJcblx0XHRwYWRkaW5nOjBweDtcclxuXHR9IFxyXG5cdH1cclxuXHQubWFpbi1iYW5uZXJ7XHJcblx0XHQuY2Fyb3VzZWwtaW5kaWNhdG9yc3tcclxuXHRcdFx0Ym90dG9tOiA3MHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0QG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCl7XHJcblx0XHQuY29udGFpbmVyLCAuY29udGFpbmVyLWxnLCAuY29udGFpbmVyLW1kLCAuY29udGFpbmVyLXNtLCAuY29udGFpbmVyLXhse1xyXG5cdFx0XHRtYXgtd2lkdGg6IDEzOTlweDtcclxuXHRcdH1cclxuXHR9XHJcblx0IiwiYm9keSB7XG4gIGNvbG9yOiAjNTU1NTU1O1xuICBmb250LWZhbWlseTogXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDM0cHg7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cblxuaDUge1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbmg2IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbn1cblxuaDEge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRpbmctaGlnaGxpZ2h0IHtcbiAgY29sb3I6ICMyNzZDQUE7XG59XG5cbnNlY3Rpb24ge1xuICBwYWRkaW5nOiA3MHB4IDA7XG59XG5cbi5idG4ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwYWRkaW5nOiAxNXB4IDUwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5idG4gKyAuYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG4uYnRuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogIzI3NmNhYTtcbn1cbi5idG46aG92ZXIge1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbnN2ZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbjogYXV0bztcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG5zdmc6bm90KDpyb290KSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5pY29uLWxhcmdlID4gc3ZnIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uaWNvbi1tZWRpdW0gPiBzdmcge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uaWNvbi1zbWFsbCA+IHN2ZyB7XG4gIHdpZHRoOiAzNHB4O1xuICBoZWlnaHQ6IDM0cHg7XG59XG5cbi5pY29uLWV4LXNtYWxsID4gc3ZnIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cblxuLnNsaWNrLXNsaWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5zZWN0aW9uLXByb2R1Y3QgLnNsaWNrLXByZXY6YmVmb3JlLCAuc2VjdGlvbi1wcm9kdWN0IC5zbGljay1uZXh0OmJlZm9yZSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnNlY3Rpb24tcHJvZHVjdCAuc2xpY2stbGlzdCB7XG4gIHBhZGRpbmc6IDcwcHggMCAhaW1wb3J0YW50O1xufVxuXG4uaW5uZXItYmFubmVyIHtcbiAgbWFyZ2luLXRvcDogNzNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmlubmVyLWJhbm5lciBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5pbm5lci1iYW5uZXIgLnBhZ2UtdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNjBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweCAwO1xuICBjb2xvcjogIzIxNGY3YTtcbn1cblxuaW5wdXQuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLXJhZGl1czogMTUwcHg7XG59XG5cbnRleHRhcmVhLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuLmFjY29yZGlvbiAuY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYm9yZGVyOiBub25lO1xufVxuLmFjY29yZGlvbiAuY2FyZCAuY2FyZC1oZWFkZXIge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmc6IDAgMCAxNXB4O1xufVxuLmFjY29yZGlvbiAuY2FyZCAuY2FyZC1oZWFkZXIgLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYmFja2dyb3VuZDogIzIxNGY3YTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYWNjb3JkaW9uIC5jYXJkIC5jYXJkLWhlYWRlciAuYnRuLmNvbGxhcHNlZCB7XG4gIGJhY2tncm91bmQ6ICNlNWU1ZTU7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuXG4uc2VjdGlvbi1wcm9qZWN0LWVuZ2luZWVyaW5nIC5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5tYWluLWJhbm5lciAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gIGJvdHRvbTogNzBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuY29udGFpbmVyLCAuY29udGFpbmVyLWxnLCAuY29udGFpbmVyLW1kLCAuY29udGFpbmVyLXNtLCAuY29udGFpbmVyLXhsIHtcbiAgICBtYXgtd2lkdGg6IDEzOTlweDtcbiAgfVxufSJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'arkedge';
        this.router.events.subscribe(routerEvent => {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (routerEvent.url === '/') {
                    this.router.navigate(['home'], { skipLocationChange: true });
                }
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _space_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./space.pipe */ "./src/app/space.pipe.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
            _space_pipe__WEBPACK_IMPORTED_MODULE_9__["CreateSpace"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__["SlickCarouselModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/career/career.component.scss":
/*!**********************************************!*\
  !*** ./src/app/career/career.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-wrap {\n  margin: 50px 0 30px;\n}\n\n.section-career .career {\n  margin-bottom: 70px;\n}\n\n.section-career form {\n  margin-top: 70px;\n}\n\n.section-career form h2 {\n  margin-bottom: 50px;\n}\n\n.section-career form button {\n  margin: 30px auto 0;\n  display: table;\n}\n\n.section-career .career-info .panel {\n  padding: 30px;\n  background: #e5f0fa;\n}\n\n.section-career .career-info .panel .panel-body {\n  margin-top: 50px;\n}\n\n.section-career .career-info .panel h6 {\n  font-weight: bold;\n  margin: 0;\n  line-height: 18px;\n}\n\n.section-career .career-info .panel p {\n  margin: 0;\n}\n\n.section-career .career-info .panel:hover {\n  background: #214f7a;\n}\n\n.section-career .career-info .panel:hover h6, .section-career .career-info .panel:hover p {\n  color: #fff;\n}\n\n.section-career .custom-file-label {\n  left: 15px;\n  width: calc(100% - 30px);\n  border-radius: 150px;\n  overflow: hidden;\n}\n\n.section-career .table {\n  margin-bottom: 0px;\n}\n\n.section-career .table thead th {\n  border-bottom: 1px;\n  background: #d6d5d5;\n  color: #000;\n}\n\n.section-career td a {\n  color: #0761a9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZWVyL0Y6XFxnaXRodWJcXHdvcmsvc3JjXFxhcHBcXGNhcmVlclxcY2FyZWVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXJlZXIvY2FyZWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSjs7QURFSTtFQUNJLG1CQUFBO0FDQ1I7O0FEQ0k7RUFJSSxnQkFBQTtBQ0ZSOztBRERRO0VBQ0ksbUJBQUE7QUNHWjs7QURBUTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQ0VaOztBREVJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDQVI7O0FEQ1E7RUFDSSxnQkFBQTtBQ0NaOztBRENTO0VBQ0csaUJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUNDWjs7QURDUTtFQUNJLFNBQUE7QUNDWjs7QURDUTtFQUNJLG1CQUFBO0FDQ1o7O0FEQVk7RUFDSSxXQUFBO0FDRWhCOztBRElBO0VBQ0ksVUFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBRElBO0VBQ0ksa0JBQUE7QUNGSjs7QURJUTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDRlo7O0FET0k7RUFDSSxjQUFBO0FDTFIiLCJmaWxlIjoic3JjL2FwcC9jYXJlZXIvY2FyZWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtd3JhcHtcclxuICAgIG1hcmdpbjo1MHB4IDAgMzBweDtcclxufVxyXG4uc2VjdGlvbi1jYXJlZXJ7XHJcbiAgICAuY2FyZWVye1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206NzBweDtcclxuICAgIH1cclxuICAgIGZvcm17XHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206NTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWFyZ2luLXRvcDo3MHB4O1xyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgbWFyZ2luOjMwcHggYXV0byAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICB9ICAgXHJcbiAgICB9XHJcbiAgICAuY2FyZWVyLWluZm97XHJcbiAgICAucGFuZWx7XHJcbiAgICAgICAgcGFkZGluZzozMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6I2U1ZjBmYTtcclxuICAgICAgICAucGFuZWwtYm9keXtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDo1MHB4O1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGg2e1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiMyMTRmN2E7XHJcbiAgICAgICAgICAgIGg2LCBwe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICB9XHJcbiAgICBcclxufVxyXG4uY3VzdG9tLWZpbGUtbGFiZWx7XHJcbiAgICBsZWZ0OjE1cHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XHJcbiAgICBib3JkZXItcmFkaXVzOjE1MHB4O1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG59XHJcbi50YWJsZXtcclxuICAgIG1hcmdpbi1ib3R0b206MHB4O1xyXG4gICAgdGhlYWR7XHJcbiAgICAgICAgdGh7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDojZDZkNWQ1O1xyXG4gICAgICAgICAgICBjb2xvcjojMDAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG50ZHtcclxuICAgIGF7XHJcbiAgICAgICAgY29sb3I6IzA3NjFhOTtcclxuICAgIH1cclxufVxyXG59IiwiLnRleHQtd3JhcCB7XG4gIG1hcmdpbjogNTBweCAwIDMwcHg7XG59XG5cbi5zZWN0aW9uLWNhcmVlciAuY2FyZWVyIHtcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcbn1cbi5zZWN0aW9uLWNhcmVlciBmb3JtIHtcbiAgbWFyZ2luLXRvcDogNzBweDtcbn1cbi5zZWN0aW9uLWNhcmVlciBmb3JtIGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5zZWN0aW9uLWNhcmVlciBmb3JtIGJ1dHRvbiB7XG4gIG1hcmdpbjogMzBweCBhdXRvIDA7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuLnNlY3Rpb24tY2FyZWVyIC5jYXJlZXItaW5mbyAucGFuZWwge1xuICBwYWRkaW5nOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjZTVmMGZhO1xufVxuLnNlY3Rpb24tY2FyZWVyIC5jYXJlZXItaW5mbyAucGFuZWwgLnBhbmVsLWJvZHkge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLnNlY3Rpb24tY2FyZWVyIC5jYXJlZXItaW5mbyAucGFuZWwgaDYge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cbi5zZWN0aW9uLWNhcmVlciAuY2FyZWVyLWluZm8gLnBhbmVsIHAge1xuICBtYXJnaW46IDA7XG59XG4uc2VjdGlvbi1jYXJlZXIgLmNhcmVlci1pbmZvIC5wYW5lbDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyMTRmN2E7XG59XG4uc2VjdGlvbi1jYXJlZXIgLmNhcmVlci1pbmZvIC5wYW5lbDpob3ZlciBoNiwgLnNlY3Rpb24tY2FyZWVyIC5jYXJlZXItaW5mbyAucGFuZWw6aG92ZXIgcCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnNlY3Rpb24tY2FyZWVyIC5jdXN0b20tZmlsZS1sYWJlbCB7XG4gIGxlZnQ6IDE1cHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgYm9yZGVyLXJhZGl1czogMTUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc2VjdGlvbi1jYXJlZXIgLnRhYmxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLnNlY3Rpb24tY2FyZWVyIC50YWJsZSB0aGVhZCB0aCB7XG4gIGJvcmRlci1ib3R0b206IDFweDtcbiAgYmFja2dyb3VuZDogI2Q2ZDVkNTtcbiAgY29sb3I6ICMwMDA7XG59XG4uc2VjdGlvbi1jYXJlZXIgdGQgYSB7XG4gIGNvbG9yOiAjMDc2MWE5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/career/career.component.ts":
/*!********************************************!*\
  !*** ./src/app/career/career.component.ts ***!
  \********************************************/
/*! exports provided: CareerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerComponent", function() { return CareerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CareerComponent = class CareerComponent {
    constructor() {
        this.careerInfo = [
            { title: 'How We Hire', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. ' },
            { title: 'Employee Benefits', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. ' },
        ];
        this.career = [
            { jobcode: 'B302', jobtitle: 'Sr. Business Analyst', location: 'Mumbai, India', targetDate: '20-Feb-2020' },
            { jobcode: 'B302', jobtitle: 'Sr. Business Analyst', location: 'Mumbai, India', targetDate: '20-Feb-2020' },
            { jobcode: 'B302', jobtitle: 'Sr. Business Analyst', location: 'Mumbai, India', targetDate: '20-Feb-2020' },
            { jobcode: 'B302', jobtitle: 'Sr. Business Analyst', location: 'Mumbai, India', targetDate: '20-Feb-2020' },
            { jobcode: 'B302', jobtitle: 'Sr. Business Analyst', location: 'Mumbai, India', targetDate: '20-Feb-2020' },
        ];
    }
    ngOnInit() {
    }
};
CareerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-career',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./career.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/career/career.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./career.component.scss */ "./src/app/career/career.component.scss")).default]
    })
], CareerComponent);



/***/ }),

/***/ "./src/app/client/client.component.scss":
/*!**********************************************!*\
  !*** ./src/app/client/client.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".client-speak, .client-info {\n  padding: 70px 0;\n}\n\n.client-info {\n  padding-bottom: 20px;\n}\n\n.client-info .panel {\n  margin-bottom: 50px;\n}\n\n.client-speak {\n  background: #e5f0fa;\n}\n\n.client-speak h1 {\n  margin-bottom: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50L0Y6XFxnaXRodWJcXHdvcmsvc3JjXFxhcHBcXGNsaWVudFxcY2xpZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jbGllbnQvY2xpZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7QUNDSjs7QURBSTtFQUNJLG1CQUFBO0FDRVI7O0FEQ0E7RUFDSSxtQkFBQTtBQ0VKOztBRERJO0VBQ0ksbUJBQUE7QUNHUiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC9jbGllbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xpZW50LXNwZWFrLCAuY2xpZW50LWluZm8ge1xyXG4gICAgcGFkZGluZzo3MHB4IDA7XHJcbn1cclxuXHJcbi5jbGllbnQtaW5mb3tcclxuICAgIHBhZGRpbmctYm90dG9tOjIwcHg7XHJcbiAgICAucGFuZWx7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTo1MHB4O1xyXG4gICAgfVxyXG59XHJcbi5jbGllbnQtc3BlYWt7XHJcbiAgICBiYWNrZ3JvdW5kOiNlNWYwZmE7XHJcbiAgICBoMXtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjI1cHg7XHJcbiAgICB9XHJcbn0iLCIuY2xpZW50LXNwZWFrLCAuY2xpZW50LWluZm8ge1xuICBwYWRkaW5nOiA3MHB4IDA7XG59XG5cbi5jbGllbnQtaW5mbyB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuLmNsaWVudC1pbmZvIC5wYW5lbCB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5jbGllbnQtc3BlYWsge1xuICBiYWNrZ3JvdW5kOiAjZTVmMGZhO1xufVxuLmNsaWVudC1zcGVhayBoMSB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/client/client.component.ts":
/*!********************************************!*\
  !*** ./src/app/client/client.component.ts ***!
  \********************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let ClientComponent = class ClientComponent {
    constructor(config, modalService) {
        this.modalService = modalService;
        this.clientInfo = [
            { clientimg: 'client' },
            { clientimg: 'client' },
            { clientimg: 'client' },
            { clientimg: 'client' },
            { clientimg: 'client' },
            { clientimg: 'client' }
        ];
        // customize default values of modals used by this component tree
        config.backdrop = 'static';
        config.keyboard = false;
    }
    open(content) {
        this.modalService.open(content);
    }
    ngOnInit() {
    }
};
ClientComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModalConfig"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
ClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-client',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/client/client.component.html")).default,
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./client.component.scss */ "./src/app/client/client.component.scss")).default]
    })
], ClientComponent);



/***/ }),

/***/ "./src/app/company/company.component.scss":
/*!************************************************!*\
  !*** ./src/app/company/company.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvY29tcGFueS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/company/company.component.ts":
/*!**********************************************!*\
  !*** ./src/app/company/company.component.ts ***!
  \**********************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CompanyComponent = class CompanyComponent {
    constructor() { }
    ngOnInit() {
    }
};
CompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/company.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company.component.scss */ "./src/app/company/company.component.scss")).default]
    })
], CompanyComponent);



/***/ }),

/***/ "./src/app/contactus/contactus.component.scss":
/*!****************************************************!*\
  !*** ./src/app/contactus/contactus.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section-contact {\n  padding-bottom: 0;\n}\n.section-contact form {\n  margin: 70px 0px;\n}\n.section-contact form h1 {\n  margin-bottom: 50px;\n  font-weight: normal;\n}\n.section-contact form button {\n  margin: 30px auto 0;\n  display: table;\n}\n.section-contact .contact-emails .panel {\n  border: 1px solid #214f7a;\n  border-bottom: 10px solid #214f7a;\n  padding: 20px;\n  padding-top: 30px;\n}\n.section-contact .contact-emails .panel .panel-body {\n  margin-top: 60px;\n}\n.section-contact .contact-emails .panel .panel-body h5 {\n  font-weight: bold;\n}\n.section-contact .contact-emails .panel .panel-body p {\n  margin: 0;\n}\n.section-contact .contact-emails .panel .panel-body p:first-child {\n  font-weight: bold;\n}\n.section-contact .contact-address .panel {\n  cursor: pointer;\n}\n.section-contact .contact-address .panel img {\n  max-width: 100%;\n  height: auto;\n}\n.section-contact .contact-address .panel h5 {\n  font-weight: bold;\n}\n.section-contact .contact-address .panel p {\n  margin: 0;\n  font-size: 16px;\n}\n.section-contact .contact-address .panel .panel-body {\n  padding: 20px;\n  background: #e5f0fa;\n  min-height: 220px;\n}\n.section-contact .contact-address .panel:hover .panel-body {\n  background: #ffc201;\n}\n.mapouter {\n  width: 100% !important;\n  height: 300px !important;\n  margin-top: 70px;\n}\n.mapouter .gmap_canvas {\n  height: 300px !important;\n}\n.mapouter .gmap_canvas iframe {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHVzL0Y6XFxnaXRodWJcXHdvcmsvc3JjXFxhcHBcXGNvbnRhY3R1c1xcY29udGFjdHVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0dXMvY29udGFjdHVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjtBREFJO0VBS0ksZ0JBQUE7QUNGUjtBREZRO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtBQ0laO0FERFE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUNHWjtBRENJO0VBQ0kseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ0NSO0FEQVE7RUFDSSxnQkFBQTtBQ0VaO0FERFk7RUFDSSxpQkFBQTtBQ0doQjtBRERZO0VBSUksU0FBQTtBQ0FoQjtBREhnQjtFQUNJLGlCQUFBO0FDS3BCO0FESVE7RUFDSSxlQUFBO0FDRlo7QURHWTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDRGhCO0FER1k7RUFDSSxpQkFBQTtBQ0RoQjtBREdZO0VBQ0ksU0FBQTtFQUNBLGVBQUE7QUNEaEI7QURHWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDRGhCO0FESWdCO0VBQ0ksbUJBQUE7QUNGcEI7QURVQTtFQUNJLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ1BKO0FEUUk7RUFDSSx3QkFBQTtBQ05SO0FET1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0xaIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLWNvbnRhY3R7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTowO1xyXG4gICAgZm9ybXtcclxuICAgICAgICBoMXtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo1MHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDpub3JtYWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hcmdpbjo3MHB4IDBweDtcclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIG1hcmdpbjozMHB4IGF1dG8gMDtcclxuICAgICAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgfSAgIFxyXG4gICAgfVxyXG4gICAgLmNvbnRhY3QtZW1haWxze1xyXG4gICAgLnBhbmVse1xyXG4gICAgICAgIGJvcmRlcjoxcHggc29saWQgIzIxNGY3YTtcclxuICAgICAgICBib3JkZXItYm90dG9tOjEwcHggc29saWQgIzIxNGY3YTtcclxuICAgICAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6MzBweDtcclxuICAgICAgICAucGFuZWwtYm9keXtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDo2MHB4O1xyXG4gICAgICAgICAgICBoNXtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfX1cclxuXHJcbiAgICAuY29udGFjdC1hZGRyZXNze1xyXG4gICAgICAgIC5wYW5lbHtcclxuICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoNXtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnBhbmVsLWJvZHl7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNlNWYwZmE7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OjIyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgLnBhbmVsLWJvZHl7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojZmZjMjAxOyBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4ubWFwb3V0ZXJ7XHJcbiAgICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6MzAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6NzBweDtcclxuICAgIC5nbWFwX2NhbnZhc3tcclxuICAgICAgICBoZWlnaHQ6MzAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBpZnJhbWV7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5zZWN0aW9uLWNvbnRhY3Qge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi5zZWN0aW9uLWNvbnRhY3QgZm9ybSB7XG4gIG1hcmdpbjogNzBweCAwcHg7XG59XG4uc2VjdGlvbi1jb250YWN0IGZvcm0gaDEge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLnNlY3Rpb24tY29udGFjdCBmb3JtIGJ1dHRvbiB7XG4gIG1hcmdpbjogMzBweCBhdXRvIDA7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuLnNlY3Rpb24tY29udGFjdCAuY29udGFjdC1lbWFpbHMgLnBhbmVsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzIxNGY3YTtcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjMjE0ZjdhO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cbi5zZWN0aW9uLWNvbnRhY3QgLmNvbnRhY3QtZW1haWxzIC5wYW5lbCAucGFuZWwtYm9keSB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59XG4uc2VjdGlvbi1jb250YWN0IC5jb250YWN0LWVtYWlscyAucGFuZWwgLnBhbmVsLWJvZHkgaDUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zZWN0aW9uLWNvbnRhY3QgLmNvbnRhY3QtZW1haWxzIC5wYW5lbCAucGFuZWwtYm9keSBwIHtcbiAgbWFyZ2luOiAwO1xufVxuLnNlY3Rpb24tY29udGFjdCAuY29udGFjdC1lbWFpbHMgLnBhbmVsIC5wYW5lbC1ib2R5IHA6Zmlyc3QtY2hpbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zZWN0aW9uLWNvbnRhY3QgLmNvbnRhY3QtYWRkcmVzcyAucGFuZWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2VjdGlvbi1jb250YWN0IC5jb250YWN0LWFkZHJlc3MgLnBhbmVsIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLnNlY3Rpb24tY29udGFjdCAuY29udGFjdC1hZGRyZXNzIC5wYW5lbCBoNSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNlY3Rpb24tY29udGFjdCAuY29udGFjdC1hZGRyZXNzIC5wYW5lbCBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uc2VjdGlvbi1jb250YWN0IC5jb250YWN0LWFkZHJlc3MgLnBhbmVsIC5wYW5lbC1ib2R5IHtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogI2U1ZjBmYTtcbiAgbWluLWhlaWdodDogMjIwcHg7XG59XG4uc2VjdGlvbi1jb250YWN0IC5jb250YWN0LWFkZHJlc3MgLnBhbmVsOmhvdmVyIC5wYW5lbC1ib2R5IHtcbiAgYmFja2dyb3VuZDogI2ZmYzIwMTtcbn1cblxuLm1hcG91dGVyIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA3MHB4O1xufVxuLm1hcG91dGVyIC5nbWFwX2NhbnZhcyB7XG4gIGhlaWdodDogMzAwcHggIWltcG9ydGFudDtcbn1cbi5tYXBvdXRlciAuZ21hcF9jYW52YXMgaWZyYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/contactus/contactus.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contactus/contactus.component.ts ***!
  \**************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactusComponent = class ContactusComponent {
    constructor() {
        this.contactInfo = [
            { title: 'General Informaton', subtitle: 'Inquiry', id: 'info@arkedge.com' },
            { title: 'Sales & Learning', subtitle: 'Business development', id: 'sales@arkedge.com' },
            { title: 'Current Openings', subtitle: 'Job apply', id: 'careers@arkedge.com' }
        ];
        this.getTouch = [
            { img: 'assets/images/contact', subtitle: 'Corporate Office', street_1: 'Arkedge Technologies Pvt Ltd.703, Wing "B", Galaxy L.X.APT.,', street_2: 'Navre Park, Ambarnath (W),Thane - 421501', state: 'Maharashtra, India', contact: '+91 9029290808', id: 'info@arkedge.com' },
            { img: 'assets/images/contact', subtitle: 'Mumbai', street_1: '201, B Tower Ashok Nagar, Marol Maroshi Road,', street_2: 'Andheri (E), Mumbai - 400047', state: 'Maharashtra, India', contact: '+91 9029290808', id: 'info@arkedge.com' },
            { img: 'assets/images/contact', subtitle: 'Thane', street_1: 'B-103, Elegant Tower,Shangvi Complex,,', street_2: 'Mira Road, Thane Mumbai ', state: 'Maharashtra, India', contact: '+91 9029290808', id: 'info@arkedge.com' },
        ];
    }
    ngOnInit() {
    }
};
ContactusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contactus',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contactus.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contactus.component.scss */ "./src/app/contactus/contactus.component.scss")).default]
    })
], ContactusComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("footer {\n  background: #172947;\n  padding: 35px 0 15px;\n}\nfooter .logo {\n  margin-bottom: 15px;\n}\nfooter a {\n  text-transform: uppercase;\n  color: #fff;\n}\nfooter p {\n  color: #fff;\n}\nfooter address {\n  color: #dddddd;\n}\nfooter h5 {\n  color: #fff;\n}\nfooter ul.footer-li {\n  list-style: none inside;\n  margin: 0;\n  padding: 10px 0;\n  clear: both;\n}\nfooter ul.footer-li li {\n  padding: 10px 0;\n  line-height: 12px;\n}\nfooter ul.footer-li li a.active {\n  color: #eab119;\n}\nfooter .social-net {\n  padding: 0;\n}\nfooter .social-net ul {\n  list-style: none inside;\n  margin-top: 20px;\n  padding: 0;\n  float: left;\n  width: 100%;\n}\nfooter .social-net ul li {\n  float: left;\n  margin-right: 20px;\n}\nfooter .social-net ul li a {\n  color: #fff;\n  font-size: 12px;\n}\nfooter .social-net ul li svg {\n  width: 24px;\n  height: 24px;\n  fill: #fff;\n}\nfooter .copyright {\n  color: #ffffff;\n  position: absolute;\n  bottom: 0;\n  left: 15px;\n}\nfooter .copyright span {\n  float: left;\n  margin-right: 10px;\n}\nfooter .map img {\n  max-width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0Y6XFxnaXRodWJcXHdvcmsvc3JjXFxhcHBcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtBQ0NKO0FEQUk7RUFDSSxtQkFBQTtBQ0VSO0FEQUk7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUNFUjtBREFJO0VBQ0ksV0FBQTtBQ0VSO0FEQUk7RUFDSSxjQUFBO0FDRVI7QURBSTtFQUNJLFdBQUE7QUNFUjtBREFJO0VBQ0ksdUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNFUjtBRERRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDR1o7QUREZ0I7RUFDSSxjQUFBO0FDR3BCO0FERUk7RUFDSSxVQUFBO0FDQVI7QURDUTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNDWjtBREFZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDRWhCO0FERGdCO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNHcEI7QUREZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNHcEI7QURFSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQVI7QURDSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0NSO0FERVE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTcyOTQ3O1xyXG4gICAgcGFkZGluZzogMzVweCAwIDE1cHg7XHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgIH1cclxuICAgIGFkZHJlc3Mge1xyXG4gICAgICAgIGNvbG9yOiAjZGRkZGRkO1xyXG4gICAgfVxyXG4gICAgaDV7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgIH1cclxuICAgIHVsLmZvb3Rlci1saSB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZSBpbnNpZGU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAmLmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjojZWFiMTE5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNvY2lhbC1uZXQge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgdWx7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmUgaW5zaWRlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvcHlyaWdodCB7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAxNXB4O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgIH19XHJcbiAgICAgLm1hcHtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgfVxyXG59IiwiZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogIzE3Mjk0NztcbiAgcGFkZGluZzogMzVweCAwIDE1cHg7XG59XG5mb290ZXIgLmxvZ28ge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuZm9vdGVyIGEge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI2ZmZjtcbn1cbmZvb3RlciBwIHtcbiAgY29sb3I6ICNmZmY7XG59XG5mb290ZXIgYWRkcmVzcyB7XG4gIGNvbG9yOiAjZGRkZGRkO1xufVxuZm9vdGVyIGg1IHtcbiAgY29sb3I6ICNmZmY7XG59XG5mb290ZXIgdWwuZm9vdGVyLWxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZSBpbnNpZGU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTBweCAwO1xuICBjbGVhcjogYm90aDtcbn1cbmZvb3RlciB1bC5mb290ZXItbGkgbGkge1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xufVxuZm9vdGVyIHVsLmZvb3Rlci1saSBsaSBhLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZWFiMTE5O1xufVxuZm9vdGVyIC5zb2NpYWwtbmV0IHtcbiAgcGFkZGluZzogMDtcbn1cbmZvb3RlciAuc29jaWFsLW5ldCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmUgaW5zaWRlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nOiAwO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG59XG5mb290ZXIgLnNvY2lhbC1uZXQgdWwgbGkge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuZm9vdGVyIC5zb2NpYWwtbmV0IHVsIGxpIGEge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuZm9vdGVyIC5zb2NpYWwtbmV0IHVsIGxpIHN2ZyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGZpbGw6ICNmZmY7XG59XG5mb290ZXIgLmNvcHlyaWdodCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMTVweDtcbn1cbmZvb3RlciAuY29weXJpZ2h0IHNwYW4ge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuZm9vdGVyIC5tYXAgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nav.bg-light {\n  background-color: rgba(18, 80, 128, 0.9) !important;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 9;\n  padding: 0;\n}\n\n.navbar-brand i, .navbar-brand div {\n  float: left;\n}\n\n.navbar-brand svg {\n  width: 40px;\n  height: 40px;\n}\n\n.navbar-brand div {\n  margin-left: 10px;\n}\n\n.navbar-brand div span {\n  color: #fff;\n  display: block;\n}\n\n.navbar-brand div span.company-name {\n  font-size: 25px;\n  line-height: 20px;\n  font-weight: bold;\n}\n\n.navbar-brand div span.company-type {\n  font-size: 15px;\n  line-height: 12px;\n  margin-top: 7px;\n}\n\n.navbar-nav-list {\n  float: right;\n  margin-left: auto;\n  list-style-type: none;\n  margin-bottom: 0;\n}\n\n.navbar-nav-list .nav-item {\n  font-size: 14px;\n  float: left;\n}\n\n.navbar-nav-list .nav-item:nth-child(-n+3) {\n  text-transform: uppercase;\n  font-size: 16px;\n}\n\n.navbar-nav-list .nav-item:nth-child(4) {\n  margin-left: 50px;\n}\n\n.navbar-nav-list .nav-item.quick-link a {\n  padding-right: 0px;\n}\n\n.navbar-nav-list .nav-item a {\n  color: #fff;\n  padding: 1.5rem 1rem;\n}\n\n.navbar-nav-list .nav-item a.active {\n  color: #eab119;\n}\n\n.navbar-nav-list .nav-item svg {\n  width: 20px;\n  height: 20px;\n  margin-right: 5px;\n}\n\n.navbar-nav-list .nav-item .sub-nav {\n  list-style-type: none;\n  border-top: 5px solid #276caa;\n  position: absolute;\n  top: -155px;\n  left: 0px;\n  width: 100%;\n  height: 0px;\n  background: #fff;\n  transition: all 0.5s;\n  padding: 30px 0 50px;\n  margin: 0px;\n  display: none;\n}\n\n.navbar-nav-list .nav-item .sub-nav img {\n  max-width: 100%;\n  height: auto;\n}\n\n.navbar-nav-list .nav-item .sub-nav li.inner-list {\n  border-top: 1px dotted #ccc;\n  padding: 10px 0;\n  float: left;\n  display: block;\n  width: 100%;\n}\n\n.navbar-nav-list .nav-item .sub-nav li a {\n  color: #276caa;\n  padding: 0;\n  margin-top: 0px;\n  font-size: 12px;\n}\n\n.navbar-nav-list .nav-item .sub-nav a {\n  margin-top: 10px;\n  float: left;\n}\n\n.navbar-nav-list .nav-item .sub-nav h6 {\n  font-size: 14px;\n}\n\n.navbar-nav-list .nav-item.nav-dropdown-list:hover {\n  background: #276caa;\n}\n\n.navbar-nav-list .nav-item.nav-dropdown-list:hover .sub-nav {\n  height: auto;\n  top: 70px;\n  display: block;\n}\n\n.navbar-light .navbar-nav .nav-link {\n  color: #fff;\n}\n\n.navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {\n  color: #fff;\n}\n\n.navbar-nav {\n  float: right;\n}\n\n.tele-no svg {\n  fill: #eab119;\n}\n\n.quick-link svg {\n  fill: #fff;\n}\n\n.slider-menu {\n  width: 350px;\n  padding: 10px;\n  position: fixed;\n  height: calc(100vh);\n  top: 0;\n  background: #fff;\n  z-index: 20;\n  right: -350px;\n  transition: all 0.5s;\n}\n\n.slider-menu .close-slide {\n  float: right;\n  padding: 10px;\n  margin-top: 10px;\n}\n\n.slider-menu.active {\n  right: 0px;\n}\n\n.slider-menu ul {\n  margin: 0;\n  padding: 0;\n}\n\n.slider-menu li.menu-list {\n  list-style-type: none;\n}\n\n.slider-menu li.menu-list a {\n  padding: 10px 10px;\n  font-size: 14px;\n  color: #555555;\n  display: block;\n  text-transform: capitalize;\n  text-decoration: none;\n}\n\n.slider-menu li.menu-list a.active, .slider-menu li.menu-list a:focus {\n  color: #eab119;\n}\n\n.slider-menu .navbar-brand {\n  margin: 10px 0 10px 10px;\n}\n\n.slider-menu .navbar-brand span.company-name {\n  color: #276caa;\n  font-size: 35px;\n  line-height: 30px;\n}\n\n.slider-menu .navbar-brand span.company-type {\n  color: #000;\n  font-size: 21px;\n  line-height: 15px;\n  margin-top: 5px;\n}\n\n.slider-menu .navbar-brand svg {\n  width: 50px;\n  height: 50px;\n}\n\n.overlay {\n  display: none;\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  width: 100%;\n  height: calc(100vh);\n  top: 0;\n}\n\n.overlay.active {\n  display: block;\n  z-index: 10;\n}\n\n@media (max-width: 576px) {\n  .navbar-nav-list .nav-item:not(:last-child) {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0Y6XFxnaXRodWJcXHdvcmsvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksbURBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQ0FSOztBREtPO0VBQ0ssV0FBQTtBQ0ZaOztBRElRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNGWjs7QURJUTtFQUNJLGlCQUFBO0FDRlo7O0FER1k7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQ0RoQjs7QURFZ0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0FwQjs7QURFZ0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQXBCOztBRE1BO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0hKOztBRElJO0VBQ0ksZUFBQTtFQWFBLFdBQUE7QUNkUjs7QURFUTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQ0FaOztBREVRO0VBQ0ksaUJBQUE7QUNBWjs7QURHWTtFQUNJLGtCQUFBO0FDRGhCOztBREtRO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0FDSFo7O0FESVk7RUFDSSxjQUFBO0FDRmhCOztBREtRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0haOztBRE1TO0VBQ0kscUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDSmI7O0FES2E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0hqQjs7QURNaUI7RUFDRywyQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNKcEI7O0FETWdCO0VBQ0ksY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0pwQjs7QURPYTtFQUNHLGdCQUFBO0VBQ0EsV0FBQTtBQ0xoQjs7QURRYTtFQUNJLGVBQUE7QUNOakI7O0FEVWlCO0VBQ0EsbUJBQUE7QUNSakI7O0FEU2lCO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FDUG5COztBRGNBO0VBQ0ksV0FBQTtBQ1hKOztBRGFBO0VBQ0ksV0FBQTtBQ1ZKOztBRFlBO0VBQ0ksWUFBQTtBQ1RKOztBRGNJO0VBQ0ksYUFBQTtBQ1hSOztBRGdCSTtFQUNJLFVBQUE7QUNiUjs7QURpQkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLE1BQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUNkSjs7QURlSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNiUjs7QURlSTtFQUNJLFVBQUE7QUNiUjs7QURlSTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDYlI7O0FEZUk7RUFDSSxxQkFBQTtBQ2JSOztBRGNRO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0FDWlI7O0FEYVE7RUFDSSxjQUFBO0FDWFo7O0FEZUk7RUFDSSx3QkFBQTtBQ2JSOztBRGVhO0VBQ0csY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ2JoQjs7QURlWTtFQUNHLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDYmY7O0FEZ0JRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNkWjs7QURvQkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsTUFBQTtBQ2pCSjs7QURrQkk7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBQ2hCUjs7QURxQkE7RUFHVztJQUNLLGFBQUE7RUNwQmQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xyXG4gICAgJi5iZy1saWdodCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE4LCA4MCwgMTI4LCAwLjkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAgIHBhZGRpbmc6MDtcclxuICAgIH1cclxuICAgXHJcbn1cclxuLm5hdmJhci1icmFuZHtcclxuICAgICAgIGksIGRpdiB7XHJcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN2Z3tcclxuICAgICAgICAgICAgd2lkdGg6NDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjQwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpdntcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgJi5jb21wYW55LW5hbWV7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MjBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYuY29tcGFueS10eXBle1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo3cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2LWxpc3R7XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICAgIG1hcmdpbi1sZWZ0OmF1dG87XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgLm5hdi1pdGVte1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgICY6bnRoLWNoaWxkKC1uKzMpe1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOm50aC1jaGlsZCg0KXtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6NTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5xdWljay1saW5re1xyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDowcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjEuNXJlbSAxcmVtO1xyXG4gICAgICAgICAgICAmLmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiNlYWIxMTk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICB3aWR0aDoyMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6MjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjVweDtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLnN1Yi1uYXZ7XHJcbiAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgICBib3JkZXItdG9wOjVweCBzb2xpZCAjMjc2Y2FhO1xyXG4gICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgdG9wOi0xNTVweDtcclxuICAgICAgICAgICAgIGxlZnQ6MHB4O1xyXG4gICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgIGhlaWdodDowcHg7XHJcbiAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG4gICAgICAgICAgICAgcGFkZGluZzozMHB4IDAgNTBweDtcclxuICAgICAgICAgICAgIG1hcmdpbjowcHg7XHJcbiAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICBoZWlnaHQ6YXV0bztcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgICYuaW5uZXItbGlzdHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOjFweCBkb3R0ZWQgI2NjYztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjEwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyNzZjYWE7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjEycHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7ICBcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgaDZ7XHJcbiAgICAgICAgICAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAmLm5hdi1kcm9wZG93bi1saXN0e1xyXG4gICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IzI3NmNhYTtcclxuICAgICAgICAgICAgICAgICAuc3ViLW5hdntcclxuICAgICAgICAgICAgICAgICAgIGhlaWdodDphdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgdG9wOjcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5re1xyXG4gICAgY29sb3I6I2ZmZjtcclxufVxyXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluazpmb2N1cywgLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbms6aG92ZXJ7XHJcbiAgICBjb2xvcjojZmZmO1xyXG59XHJcbi5uYXZiYXItbmF2e1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbn1cclxuXHJcblxyXG4udGVsZS1ub3tcclxuICAgIHN2Z3tcclxuICAgICAgICBmaWxsOiNlYWIxMTk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5xdWljay1saW5re1xyXG4gICAgc3Zne1xyXG4gICAgICAgIGZpbGw6I2ZmZjtcclxuICAgIH1cclxufVxyXG5cclxuLnNsaWRlci1tZW51e1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoKTtcclxuICAgIHRvcDogMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB6LWluZGV4OiAyMDtcclxuICAgIHJpZ2h0OiAtMzUwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG4gICAgLmNsb3NlLXNsaWRle1xyXG4gICAgICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgICYuYWN0aXZle1xyXG4gICAgICAgIHJpZ2h0OjBweDtcclxuICAgIH1cclxuICAgIHVse1xyXG4gICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgIHBhZGRpbmc6MDtcclxuICAgIH1cclxuICAgIGxpLm1lbnUtbGlzdHtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgYXtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiM1NTU1NTU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICAgJi5hY3RpdmUsICY6Zm9jdXN7XHJcbiAgICAgICAgICAgIGNvbG9yOiNlYWIxMTk7ICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5uYXZiYXItYnJhbmR7XHJcbiAgICAgICAgbWFyZ2luOjEwcHggMCAxMHB4IDEwcHg7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICYuY29tcGFueS1uYW1le1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IzI3NmNhYTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuY29tcGFueS10eXBle1xyXG4gICAgICAgICAgICAgICBjb2xvcjojMDAwO1xyXG4gICAgICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgICAgIHN2Z3tcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4ub3ZlcmxheXtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmgpO1xyXG4gICAgdG9wOjA7XHJcbiAgICAmLmFjdGl2ZXtcclxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgIHotaW5kZXg6MTA7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG4gICAgLm5hdmJhci1uYXYtbGlzdHtcclxuICAgICAgICAubmF2LWl0ZW17XHJcbiAgICAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmF2LmJnLWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOCwgODAsIDEyOCwgMC45KSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5uYXZiYXItYnJhbmQgaSwgLm5hdmJhci1icmFuZCBkaXYge1xuICBmbG9hdDogbGVmdDtcbn1cbi5uYXZiYXItYnJhbmQgc3ZnIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cbi5uYXZiYXItYnJhbmQgZGl2IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4ubmF2YmFyLWJyYW5kIGRpdiBzcGFuIHtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm5hdmJhci1icmFuZCBkaXYgc3Bhbi5jb21wYW55LW5hbWUge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5uYXZiYXItYnJhbmQgZGl2IHNwYW4uY29tcGFueS10eXBlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMTJweDtcbiAgbWFyZ2luLXRvcDogN3B4O1xufVxuXG4ubmF2YmFyLW5hdi1saXN0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW0ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW06bnRoLWNoaWxkKC1uKzMpIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW06bnRoLWNoaWxkKDQpIHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG4ubmF2YmFyLW5hdi1saXN0IC5uYXYtaXRlbS5xdWljay1saW5rIGEge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG4ubmF2YmFyLW5hdi1saXN0IC5uYXYtaXRlbSBhIHtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEuNXJlbSAxcmVtO1xufVxuLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW0gYS5hY3RpdmUge1xuICBjb2xvcjogI2VhYjExOTtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtIHN2ZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW0gLnN1Yi1uYXYge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCAjMjc2Y2FhO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTE1NXB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIHBhZGRpbmc6IDMwcHggMCA1MHB4O1xuICBtYXJnaW46IDBweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtIC5zdWItbmF2IGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW0gLnN1Yi1uYXYgbGkuaW5uZXItbGlzdCB7XG4gIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgI2NjYztcbiAgcGFkZGluZzogMTBweCAwO1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW0gLnN1Yi1uYXYgbGkgYSB7XG4gIGNvbG9yOiAjMjc2Y2FhO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtIC5zdWItbmF2IGEge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmbG9hdDogbGVmdDtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtIC5zdWItbmF2IGg2IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW0ubmF2LWRyb3Bkb3duLWxpc3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjc2Y2FhO1xufVxuLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW0ubmF2LWRyb3Bkb3duLWxpc3Q6aG92ZXIgLnN1Yi1uYXYge1xuICBoZWlnaHQ6IGF1dG87XG4gIHRvcDogNzBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rOmZvY3VzLCAubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubmF2YmFyLW5hdiB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnRlbGUtbm8gc3ZnIHtcbiAgZmlsbDogI2VhYjExOTtcbn1cblxuLnF1aWNrLWxpbmsgc3ZnIHtcbiAgZmlsbDogI2ZmZjtcbn1cblxuLnNsaWRlci1tZW51IHtcbiAgd2lkdGg6IDM1MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogY2FsYygxMDB2aCk7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgei1pbmRleDogMjA7XG4gIHJpZ2h0OiAtMzUwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuLnNsaWRlci1tZW51IC5jbG9zZS1zbGlkZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5zbGlkZXItbWVudS5hY3RpdmUge1xuICByaWdodDogMHB4O1xufVxuLnNsaWRlci1tZW51IHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLnNsaWRlci1tZW51IGxpLm1lbnUtbGlzdCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5zbGlkZXItbWVudSBsaS5tZW51LWxpc3QgYSB7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzU1NTU1NTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uc2xpZGVyLW1lbnUgbGkubWVudS1saXN0IGEuYWN0aXZlLCAuc2xpZGVyLW1lbnUgbGkubWVudS1saXN0IGE6Zm9jdXMge1xuICBjb2xvcjogI2VhYjExOTtcbn1cbi5zbGlkZXItbWVudSAubmF2YmFyLWJyYW5kIHtcbiAgbWFyZ2luOiAxMHB4IDAgMTBweCAxMHB4O1xufVxuLnNsaWRlci1tZW51IC5uYXZiYXItYnJhbmQgc3Bhbi5jb21wYW55LW5hbWUge1xuICBjb2xvcjogIzI3NmNhYTtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cbi5zbGlkZXItbWVudSAubmF2YmFyLWJyYW5kIHNwYW4uY29tcGFueS10eXBlIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5zbGlkZXItbWVudSAubmF2YmFyLWJyYW5kIHN2ZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5vdmVybGF5IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmgpO1xuICB0b3A6IDA7XG59XG4ub3ZlcmxheS5hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgei1pbmRleDogMTA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAubmF2YmFyLW5hdi1saXN0IC5uYXYtaXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() {
        this.isOpen = true;
        this.list = [
            { name: 'WhoWeAre' },
            { name: 'OurHappyClients' },
            { name: 'NewsAndEventUpdate' },
            { name: 'ProjectEngineering' },
            { name: 'Technology' },
            { name: 'Industries' }
        ];
        this.managedService = [
            { name: 'SOFTWARE ENGINEERING',
                managedServiceList: [
                    { name: 'Product Engineering' },
                    { name: 'Application Development' },
                    { name: 'UX/UI Development' },
                    { name: 'Software Testing & QA' }
                ] },
            { name: 'DATA MANAGEMENT',
                managedServiceList: [
                    { name: 'Cleanse Dataset' },
                    { name: 'Data Mapping & Conversion' },
                    { name: 'Data Migration & Consolidation' },
                    { name: 'Spend Analysis' }
                ] },
            { name: 'IT STAFFING & TRAINING',
                managedServiceList: [
                    { name: 'Staffing Services' },
                    { name: 'Industries' },
                    { name: 'Courses' },
                    { name: 'Program Calendar' }
                ] }
        ];
    }
    slideToggel() {
        this.isOpen = !this.isOpen;
    }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .main-banner .carousel {\n  margin-top: -60px;\n  z-index: 1;\n}\n::ng-deep .main-banner .container {\n  position: relative;\n  height: 800px;\n  overflow: hidden;\n}\n::ng-deep .main-banner .carousel-item {\n  display: block;\n}\n::ng-deep .main-banner .carousel-item .carousel-caption {\n  top: 50%;\n  left: -100%;\n  z-index: 10;\n  color: #fff;\n  text-align: left;\n  width: 600px;\n  transform: translateY(-50%);\n  transition: all 1s;\n  opacity: 0;\n}\n::ng-deep .main-banner .carousel-item .carousel-caption h1 {\n  color: #FFC100;\n  text-transform: uppercase;\n  font-weight: bold;\n}\n::ng-deep .main-banner .carousel-item .carousel-caption .btn {\n  border: 2px solid #fff;\n  margin-right: 15px;\n  margin-top: 50px;\n}\n::ng-deep .main-banner .carousel-item .info-img {\n  position: absolute;\n  right: -100%;\n  top: 55%;\n  transform: translateY(-55%);\n  z-index: 1;\n  transition: all 1s;\n  opacity: 0;\n}\n::ng-deep .main-banner .carousel-item.active .carousel-caption {\n  left: 15px;\n  opacity: 0.9;\n}\n::ng-deep .main-banner .carousel-item.active .info-img {\n  right: 15px;\n  opacity: 0.9;\n}\n::ng-deep .main-banner .carousel-indicators li {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n::ng-deep .main-banner .picsum-img-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n::ng-deep .main-banner .picsum-img-wrapper::after {\n  content: \"\";\n  background: rgba(16, 80, 128, 0.9);\n  width: 100%;\n  height: 100%;\n  opacity: 0.9;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n::ng-deep .main-banner .picsum-img-wrapper img {\n  width: 100%;\n}\nngb-carousel {\n  outline: none;\n}\n.panel-heading, .panel-body {\n  border: none;\n  text-align: center;\n}\n.clients, .section-projects, .section-sevices, .testimonials, .section-info, .contact-info {\n  padding: 70px 0;\n}\n.clients {\n  background-color: #f7f7f7;\n}\n.clients h6 {\n  margin-bottom: 50px;\n}\n.clear-float {\n  clear: both;\n  float: none;\n}\n.contact-info .social-net ul {\n  padding: 0;\n  margin: 0;\n}\n.contact-info .social-net ul li {\n  list-style-type: none;\n  margin-bottom: 8px;\n}\n.contact-info .social-net ul li span {\n  margin-left: 15px;\n  color: #555555;\n}\n.contact-info .social-net ul li svg {\n  width: 20px;\n  height: 20px;\n}\n.contact-info .set-part {\n  margin: 40px 0;\n}\n.contact-info h6 {\n  color: #555;\n  font-weight: bold;\n}\n.contact-info form {\n  margin-top: 42px;\n}\n.contact-info form .btn {\n  margin-top: 10px;\n}\n.icon-circle {\n  height: 90px;\n  width: 90px;\n  border-radius: 50%;\n  margin: 0 auto;\n}\n.icon-circle i {\n  line-height: 90px;\n}\n.section-info .panel-container {\n  min-height: 330px;\n  perspective: 1000px;\n}\n.section-info .panel-container:hover .panel {\n  transform: rotateX(180deg);\n}\n.section-info .panel {\n  color: #fff;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 1s ease-in-out;\n  transform-style: preserve-3d;\n}\n.section-info .panel .panel-front {\n  border-top: 5px solid;\n  padding-top: 25px;\n  z-index: 1;\n}\n.section-info .panel .panel-front::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n.section-info .panel .panel-front.red {\n  background: url('1.jpg') no-repeat top center;\n  border-color: #b9646e;\n}\n.section-info .panel .panel-front.red .circle-bg {\n  background-color: #b9646e;\n}\n.section-info .panel .panel-front.blue {\n  background: url('2.jpg') no-repeat top center;\n  border-color: #276caa;\n}\n.section-info .panel .panel-front.blue .circle-bg {\n  background-color: #276caa;\n}\n.section-info .panel .panel-front.green {\n  background: url('3.jpg') no-repeat top center;\n  border-color: #4bbb57;\n}\n.section-info .panel .panel-front.green .circle-bg {\n  background-color: #4bbb57;\n}\n.section-info .panel .panel-back {\n  padding-top: 25px;\n}\n.section-info .panel .panel-back.red {\n  background-color: #b9646e;\n}\n.section-info .panel .panel-back.blue {\n  background-color: #276caa;\n}\n.section-info .panel .panel-back.green {\n  background-color: #4bbb57;\n}\n.section-info .panel .panel-front, .section-info .panel .panel-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.section-info .panel .panel-back {\n  transform: rotateX(180deg);\n}\n.section-info .panel .panel-back p {\n  padding: 10px;\n}\n.section-info .panel h5 {\n  margin: 20px 0;\n}\n.section-info .panel p {\n  margin: 0;\n}\n.section-info h6 {\n  margin-bottom: 40px;\n}\n.section-info svg {\n  fill: #fff;\n}\n.section-sevices {\n  background-color: rgba(204, 204, 204, 0.2);\n}\n.section-sevices .panel {\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 5px;\n  margin-bottom: 15px;\n  padding: 15px 0;\n}\n.section-sevices .panel h5 {\n  color: #333333;\n  font-weight: bold;\n  margin-bottom: 25px;\n}\n.section-sevices .panel p {\n  padding: 0 10px;\n}\n.section-sevices .panel .icon-circle {\n  margin: 15px auto;\n}\n.section-sevices .panel .icon-circle svg {\n  height: 80px;\n  width: 80px;\n}\n.section-sevices .panel .icon-circle.skyblue {\n  background: #88cedb;\n}\n.section-sevices .panel .icon-circle.limegreen {\n  background: #78c29a;\n}\n.section-sevices .panel .icon-circle.yellow {\n  background: #f1bb57;\n}\n.section-sevices .panel .icon-circle.orange {\n  background: #e97f61;\n}\n.section-sevices .panel .icon-circle.blue {\n  background: #88cedb;\n}\n.section-sevices .panel .icon-circle.purple {\n  background: #787fc2;\n}\n.section-sevices h6 {\n  margin-bottom: 40px;\n}\n::ng-deep .testimonials {\n  position: relative;\n  overflow: hidden;\n}\n::ng-deep .testimonials img {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n::ng-deep .testimonials h1 {\n  color: #fff;\n  margin-bottom: 20px;\n}\n::ng-deep .testimonials p {\n  font-size: 18px;\n  font-weight: 700;\n  color: #fff;\n  margin-bottom: 5px;\n}\n::ng-deep .testimonials p:last-child {\n  margin-top: 35px;\n}\n::ng-deep .testimonials .carousel {\n  margin-top: 0;\n  z-index: 1;\n}\n::ng-deep .testimonials .carousel-inner {\n  height: 282px;\n}\n::ng-deep .testimonials .carousel-indicators li {\n  height: 10px;\n  border-radius: 10px;\n  border: 1px solid #fff;\n  background: transparent;\n}\n::ng-deep .testimonials .carousel-indicators li.active {\n  background: #fff;\n}\n::ng-deep .testimonials .carousel-item {\n  transition: opacity 1s ease !important;\n  position: absolute !important;\n  display: block !important;\n  opacity: 0;\n}\n::ng-deep .testimonials .carousel-item.active {\n  position: relative !important;\n  opacity: 1;\n}\n.section-projects {\n  position: relative;\n  float: left;\n  width: 100%;\n}\n.section-projects h6 {\n  margin: 35px 0 40px;\n}\n.section-projects .project-grid li {\n  width: 25%;\n  float: left;\n  list-style-type: none;\n}\n.section-projects .project-grid li figure {\n  margin: 0 0 2px 0;\n}\n.section-projects .project-grid li:first-child {\n  width: 50%;\n}\n.section-projects .project-grid li:first-child figure {\n  margin: 0;\n}\n.section-projects .project-grid li:nth-child(4) figure, .section-projects .project-grid li:nth-child(5) figure {\n  margin: 0;\n}\n.section-projects .project-grid button {\n  background: none;\n  border: 2px solid #fff;\n}\n.section-projects .p1 {\n  padding: 1px;\n}\n.section-projects figure {\n  position: relative;\n  float: left;\n  overflow: hidden;\n  width: calc(100% - 2px);\n  background-color: #fff;\n  margin: 0;\n  cursor: pointer;\n}\n.section-projects figure img {\n  position: relative;\n  display: block;\n  transform: scale(1);\n  transition: 0.5s ease-in-out;\n  max-width: 100%;\n  height: auto;\n}\n.section-projects figure .show-more-overlay {\n  background: rgba(0, 0, 0, 0) linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0.2) 23%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 68%, rgba(0, 0, 0, 0) 81%, rgba(0, 0, 0, 0) 92%, rgba(0, 0, 0, 0) 100%) repeat scroll 0 0;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transform: translateY(100%);\n  transition: all 0.5s ease 0s;\n}\n.section-projects figure figcaption {\n  webkit-backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  position: absolute;\n  bottom: 0px;\n  left: 20px;\n  right: 20px;\n  max-height: 40px;\n  transition: 0.5s ease-in-out;\n  z-index: 2;\n}\n.section-projects figure .show_more-title {\n  color: #fff;\n  font-size: 21px;\n  line-height: 30px;\n  font-weight: 700;\n  margin-bottom: 10px;\n}\n.section-projects figure .show_more-desc {\n  color: #fff;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 300;\n}\n.section-projects figure::after {\n  content: \"\";\n  background: rgba(0, 0, 0, 0.3);\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.section-projects figure:hover img {\n  transform: scale(1.1);\n}\n.section-projects figure:hover .show-more-overlay {\n  background: rgba(0, 0, 0, 0) linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0.2) 100%) repeat scroll 0 0;\n  transform: translateY(0px);\n}\n.section-projects figure:hover figcaption {\n  height: auto;\n  max-height: 200px;\n  bottom: 50px;\n}\n@media (max-width: 576px) {\n  .main-banner {\n    display: none;\n  }\n\n  .section-projects .project-grid li {\n    width: 100%;\n  }\n  .section-projects .project-grid li figure {\n    margin: 0 0 15px;\n  }\n  .section-projects .project-grid li:first-child {\n    width: 100%;\n  }\n  .section-projects .project-grid li:first-child figure {\n    margin: 0 0 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9GOlxcZ2l0aHViXFx3b3JrL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyxpQkFBQTtFQUNBLFVBQUE7QUNBRjtBREVDO0VBQ0Msa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREVDO0VBQ0MsY0FBQTtBQ0FGO0FEQ0M7RUFDQyxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNDRjtBREFFO0VBQ0MsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNFSDtBREFFO0VBQ0Msc0JBQUE7RUFDQSxrQkFBQTtFQUNHLGdCQUFBO0FDRU47QURDQztFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNDRjtBREVFO0VBQ0MsVUFBQTtFQUNBLFlBQUE7QUNBSDtBREVFO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNBSDtBRFFFO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ05IO0FEU0M7RUFDQyxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNQRjtBRFNFO0VBQ0MsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtBQ1BIO0FEU0U7RUFDQyxXQUFBO0FDUEg7QURhQTtFQUNDLGFBQUE7QUNWRDtBRGFBO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0FDVkQ7QURhQTtFQUNDLGVBQUE7QUNWRDtBRGFBO0VBQ0MseUJBQUE7QUNWRDtBRFdDO0VBQ0MsbUJBQUE7QUNURjtBRGFBO0VBQ0MsV0FBQTtFQUNBLFdBQUE7QUNWRDtBRGVFO0VBQ0MsVUFBQTtFQUNBLFNBQUE7QUNaSDtBRGFHO0VBQ0MscUJBQUE7RUFDQSxrQkFBQTtBQ1hKO0FEWUc7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNWTDtBRFlJO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNWTDtBRGdCQztFQUNFLGNBQUE7QUNkSDtBRGlCQztFQUNDLFdBQUE7RUFDQSxpQkFBQTtBQ2ZGO0FEaUJDO0VBQ0MsZ0JBQUE7QUNmRjtBRGdCRTtFQUNDLGdCQUFBO0FDZEg7QUR1QkE7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ3BCRDtBRHFCQztFQUNDLGlCQUFBO0FDbkJGO0FEeUJDO0VBQ0MsaUJBQUE7RUFDQSxtQkFBQTtBQ3RCRjtBRHVCRTtFQUNDLDBCQUFBO0FDckJIO0FEd0JDO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsNEJBQUE7QUN0QkY7QUR1QkU7RUFDQyxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQ3JCSDtBRHNCRztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUNwQko7QURzQkc7RUFDQyw2Q0FBQTtFQUNBLHFCQS9DQztBQzJCTDtBRHFCSTtFQUNDLHlCQWpEQTtBQzhCTDtBRHVCRztFQUNDLDZDQUFBO0VBQ0EscUJBdERFO0FDaUNOO0FEc0JJO0VBQ0MseUJBeERDO0FDb0NOO0FEd0JHO0VBQ0MsNkNBQUE7RUFDQSxxQkE3REc7QUN1Q1A7QUR1Qkk7RUFDQyx5QkEvREU7QUMwQ1A7QUQwQkU7RUFDQyxpQkFBQTtBQ3hCSDtBRHlCRztFQUNDLHlCQXpFQztBQ2tETDtBRDBCRztFQUNDLHlCQTVFRTtBQ29ETjtBRDJCRztFQUNDLHlCQS9FRztBQ3NEUDtBRDZCRTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0FDM0JIO0FENkJFO0VBRUMsMEJBQUE7QUM1Qkg7QUQ2Qkc7RUFDQyxhQUFBO0FDM0JKO0FEOEJFO0VBQ0MsY0FBQTtBQzVCSDtBRDhCRTtFQUNDLFNBQUE7QUM1Qkg7QURnQ0M7RUFDQyxtQkFBQTtBQzlCRjtBRGlDQztFQUNDLFVBQUE7QUMvQkY7QUQwQ0E7RUFDQywwQ0FBQTtBQ3ZDRDtBRHdDQztFQUNDLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ3RDRjtBRHVDRTtFQUNDLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDckNIO0FEd0NFO0VBQ0MsZUFBQTtBQ3RDSDtBRHdDRTtFQUNDLGlCQUFBO0FDdENIO0FEdUNHO0VBQ0MsWUFBQTtFQUNBLFdBQUE7QUNyQ0o7QUR1Q0c7RUFDQyxtQkEvQks7QUNOVDtBRHVDRztFQUNDLG1CQS9CTztBQ05YO0FEdUNHO0VBQ0MsbUJBcENJO0FDRFI7QUR1Q0c7RUFDQyxtQkF0Q0k7QUNDUjtBRHVDRztFQUNDLG1CQXZDRTtBQ0VOO0FEdUNHO0VBQ0MsbUJBekNJO0FDSVI7QUQwQ0M7RUFDQyxtQkFBQTtBQ3hDRjtBRDRDQTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7QUN6Q0Q7QUQwQ0M7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQ3hDRjtBRDBDQztFQUNDLFdBQUE7RUFDQSxtQkFBQTtBQ3hDRjtBRDBDQztFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ3hDRjtBRHlDRTtFQUNDLGdCQUFBO0FDdkNIO0FEMENDO0VBQ0MsYUFBQTtFQUNBLFVBQUE7QUN4Q0Y7QUQwQ0M7RUFDQyxhQUFBO0FDeENGO0FEMENDO0VBQ0MsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ3hDRjtBRHlDRTtFQUNDLGdCQUFBO0FDdkNIO0FEMENDO0VBQ0Msc0NBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQ3hDRjtBRHlDRTtFQUNFLDZCQUFBO0VBQ0EsVUFBQTtBQ3ZDSjtBRDRDQTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUN6Q0Q7QUQwQ0M7RUFDQyxtQkFBQTtBQ3hDRjtBRDJDRTtFQUNDLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUN6Q0g7QUQwQ0c7RUFDQyxpQkFBQTtBQ3hDSjtBRDBDRztFQUNDLFVBQUE7QUN4Q0o7QUR5Q0k7RUFDQyxTQUFBO0FDdkNMO0FEMkNJO0VBQ0MsU0FBQTtBQ3pDTDtBRDZDRTtFQUNDLGdCQUFBO0VBQ0Esc0JBQUE7QUMzQ0g7QUQ4Q0M7RUFDQyxZQUFBO0FDNUNGO0FEOENDO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUM1Q0Y7QUQ2Q0U7RUFDQyxrQkFBQTtFQUNBLGNBQUE7RUFFQSxtQkFBQTtFQUVBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUMzQ0g7QUQ2Q0U7RUFDQyxxTkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUMzQ0g7QUQ4Q0U7RUFDQyxrQ0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBRUEsNEJBQUE7RUFDQSxVQUFBO0FDNUNIO0FEOENFO0VBQ0MsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUM1Q0g7QUQ4Q0U7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUM1Q0g7QUQ4Q0U7RUFDQyxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDNUNIO0FEK0NHO0VBRUMscUJBQUE7QUM3Q0o7QUQrQ0c7RUFFQyx1R0FBQTtFQUNBLDBCQUFBO0FDOUNKO0FEZ0RHO0VBRUMsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQy9DSjtBRHVEQTtFQUNDO0lBQ0MsYUFBQTtFQ3BEQTs7RUR3REE7SUFDQyxXQUFBO0VDckREO0VEc0RDO0lBQ0MsZ0JBQUE7RUNwREY7RURzREM7SUFDQyxXQUFBO0VDcERGO0VEcURDO0lBQ0MsZ0JBQUE7RUNuREY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWFpbi1iYW5uZXJ7XHJcblx0LmNhcm91c2Vse1xyXG5cdFx0bWFyZ2luLXRvcDotNjBweDtcclxuXHRcdHotaW5kZXg6MTtcclxuXHR9XHJcblx0LmNvbnRhaW5lcntcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGhlaWdodDogODAwcHg7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdH1cclxuXHQuY2Fyb3VzZWwtaXRlbXtcclxuXHRcdGRpc3BsYXk6YmxvY2s7XHJcblx0LmNhcm91c2VsLWNhcHRpb24ge1xyXG5cdFx0dG9wOiA1MCU7XHJcblx0XHRsZWZ0OiAtMTAwJTtcclxuXHRcdHotaW5kZXg6IDEwO1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdFx0d2lkdGg6IDYwMHB4O1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5cdFx0dHJhbnNpdGlvbjogYWxsIDFzO1xyXG5cdFx0b3BhY2l0eTowO1xyXG5cdFx0aDF7XHJcblx0XHRcdGNvbG9yOiNGRkMxMDA7XHJcblx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcblx0XHR9XHJcblx0XHQuYnRue1xyXG5cdFx0XHRib3JkZXI6MnB4IHNvbGlkICNmZmY7XHJcblx0XHRcdG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIFx0XHRtYXJnaW4tdG9wOiA1MHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHQuaW5mby1pbWd7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRyaWdodDotMTAwJTtcclxuXHRcdHRvcDo1NSU7XHJcblx0XHR0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTUlKTtcclxuXHRcdHotaW5kZXg6MTtcclxuXHRcdHRyYW5zaXRpb246IGFsbCAxcztcclxuXHRcdG9wYWNpdHk6MDtcclxuXHR9XHJcblx0Ji5hY3RpdmV7XHJcblx0XHQuY2Fyb3VzZWwtY2FwdGlvbntcclxuXHRcdFx0bGVmdDoxNXB4O1xyXG5cdFx0XHRvcGFjaXR5Oi45O1xyXG5cdFx0fVxyXG5cdFx0LmluZm8taW1ne1xyXG5cdFx0XHRyaWdodDoxNXB4O1x0XHJcblx0XHRcdG9wYWNpdHk6Ljk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcbn1cclxuXHRcclxuXHQuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XHJcblx0XHRsaXtcclxuXHRcdFx0d2lkdGg6IDEwcHg7XHJcblx0XHRcdGhlaWdodDogMTBweDtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQucGljc3VtLWltZy13cmFwcGVye1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOjA7XHJcblx0XHRsZWZ0OjA7XHJcblx0XHRoZWlnaHQ6MTAwJTtcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0XHRcclxuXHRcdCY6OmFmdGVye1xyXG5cdFx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOnJnYmEoMTYsODAsMTI4LDAuOSk7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdG9wYWNpdHk6IDAuOTtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHR0b3A6IDA7XHJcblx0XHR9XHJcblx0XHRpbWd7XHJcblx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxubmdiLWNhcm91c2Vse1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5wYW5lbC1oZWFkaW5nLCAucGFuZWwtYm9keSAge1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jbGllbnRzLCAuc2VjdGlvbi1wcm9qZWN0cywgLnNlY3Rpb24tc2V2aWNlcywgLnRlc3RpbW9uaWFscywgLnNlY3Rpb24taW5mbywgLmNvbnRhY3QtaW5mb3tcclxuXHRwYWRkaW5nOjcwcHggMDtcclxufVxyXG5cclxuLmNsaWVudHN7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDI0NywgMjQ3LCAxKTtcclxuXHRoNntcclxuXHRcdG1hcmdpbi1ib3R0b206NTBweDtcclxuXHR9XHJcbn1cclxuXHJcbi5jbGVhci1mbG9hdHtcclxuXHRjbGVhcjpib3RoO1xyXG5cdGZsb2F0Om5vbmU7XHJcbn1cclxuXHJcbi5jb250YWN0LWluZm97XHJcblx0LnNvY2lhbC1uZXR7XHJcblx0XHR1bHtcclxuXHRcdFx0cGFkZGluZzowO1xyXG5cdFx0XHRtYXJnaW46MDtcclxuXHRcdFx0bGl7XHJcblx0XHRcdFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206OHB4O1xyXG5cdFx0XHRzcGFue1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6MTVweDtcclxuXHRcdFx0XHRcdGNvbG9yOiM1NTU1NTU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHN2Z3tcclxuXHRcdFx0XHRcdHdpZHRoOjIwcHg7XHJcblx0XHRcdFx0XHRoZWlnaHQ6MjBweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0LnNldC1wYXJ0e1xyXG5cdFx0XHRtYXJnaW46NDBweCAwO1xyXG5cdFx0fVxyXG5cdFxyXG5cdGg2e1xyXG5cdFx0Y29sb3I6IzU1NTtcclxuXHRcdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcblx0fVxyXG5cdGZvcm17XHJcblx0XHRtYXJnaW4tdG9wOjQycHg7XHJcblx0XHQuYnRue1xyXG5cdFx0XHRtYXJnaW4tdG9wOjEwcHg7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4kcmVkOiNiOTY0NmU7XHJcbiRibHVlOiMyNzZjYWE7XHJcbiRncmVlbjojNGJiYjU3O1xyXG5cclxuLmljb24tY2lyY2xle1xyXG5cdGhlaWdodDo5MHB4O1xyXG5cdHdpZHRoOjkwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czo1MCU7XHJcblx0bWFyZ2luOjAgYXV0bztcclxuXHRpe1xyXG5cdFx0bGluZS1oZWlnaHQ6OTBweDtcclxuXHR9XHJcblx0XHJcbn1cclxuXHJcbi5zZWN0aW9uLWluZm97XHJcblx0LnBhbmVsLWNvbnRhaW5lcntcclxuXHRcdG1pbi1oZWlnaHQ6IDMzMHB4O1xyXG5cdFx0cGVyc3BlY3RpdmU6IDEwMDBweDtcclxuXHRcdCY6aG92ZXIgLnBhbmVse1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxuXHRcdH1cclxuXHR9XHJcblx0LnBhbmVse1xyXG5cdFx0Y29sb3I6I2ZmZjtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2UtaW4tb3V0O1xyXG5cdFx0dHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuXHRcdC5wYW5lbC1mcm9udHtcclxuXHRcdFx0Ym9yZGVyLXRvcDogNXB4IHNvbGlkO1xyXG5cdFx0XHRwYWRkaW5nLXRvcDogMjVweDtcclxuXHRcdFx0ei1pbmRleDogMTtcclxuXHRcdFx0Jjo6YWZ0ZXJ7XHJcblx0XHRcdFx0Y29udGVudDonJztcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdFx0XHRoZWlnaHQ6MTAwJTtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjUpO1xyXG5cdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRcdHotaW5kZXg6IC0xO1xyXG5cdFx0XHR9XHJcblx0XHRcdCYucmVke1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvMS5qcGcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xyXG5cdFx0XHRcdGJvcmRlci1jb2xvcjogJHJlZDtcclxuXHRcdFx0XHQuY2lyY2xlLWJne1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjokcmVkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0Ji5ibHVle1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvMi5qcGcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xyXG5cdFx0XHRcdGJvcmRlci1jb2xvcjogJGJsdWU7XHJcblx0XHRcdFx0LmNpcmNsZS1iZ3tcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6JGJsdWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQmLmdyZWVue1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvMy5qcGcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xyXG5cdFx0XHRcdGJvcmRlci1jb2xvcjogJGdyZWVuO1xyXG5cdFx0XHRcdC5jaXJjbGUtYmd7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiRncmVlbjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQucGFuZWwtYmFja3tcclxuXHRcdFx0cGFkZGluZy10b3A6IDI1cHg7XHJcblx0XHRcdCYucmVke1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6JHJlZDtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0Ji5ibHVle1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6JGJsdWU7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdCYuZ3JlZW57XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjokZ3JlZW47XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcclxuXHRcdC5wYW5lbC1mcm9udCwgLnBhbmVsLWJhY2t7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0XHRcdGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHRcdH1cclxuXHRcdC5wYW5lbC1iYWNrXHJcblx0XHR7XHJcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xyXG5cdFx0XHRwe1xyXG5cdFx0XHRcdHBhZGRpbmc6MTBweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aDV7XHJcblx0XHRcdG1hcmdpbjoyMHB4IDA7XHJcblx0XHR9XHJcblx0XHRwe1xyXG5cdFx0XHRtYXJnaW46MDtcclxuXHRcdFx0XHJcblx0XHR9XHJcblx0fVxyXG5cdGg2e1xyXG5cdFx0bWFyZ2luLWJvdHRvbTo0MHB4O1xyXG5cdH1cclxuXHJcblx0c3Zne1xyXG5cdFx0ZmlsbDojZmZmO1xyXG5cdH1cclxufVxyXG5cclxuJHNreWJsdWU6Izg4Y2VkYjtcclxuJHllbGxvdzojZjFiYjU3O1xyXG4kb3JhbmdlOiNlOTdmNjE7XHJcbiRsaW1lZ3JlZW46Izc4YzI5YTtcclxuJGJsdWU6Izg4Y2VkYjtcclxuJHB1cnBsZTojNzg3ZmMyO1xyXG5cclxuLnNlY3Rpb24tc2V2aWNlc3tcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjA0LCAyMDQsIDIwNCwgMC4yKTtcclxuXHQucGFuZWx7XHJcblx0XHRiYWNrZ3JvdW5kOiNmZmY7XHJcblx0XHRib3JkZXI6MXB4IHNvbGlkIHJnYmEoMjI0LCAyMjQsIDIyNCwgMSk7XHJcblx0XHRib3JkZXItcmFkaXVzOjVweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblx0XHRwYWRkaW5nOiAxNXB4IDA7XHJcblx0XHRoNXtcclxuXHRcdFx0Y29sb3I6IzMzMzMzMztcclxuXHRcdFx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbToyNXB4O1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRwe1xyXG5cdFx0XHRwYWRkaW5nOjAgMTBweDtcclxuXHRcdH1cclxuXHRcdC5pY29uLWNpcmNsZXtcclxuXHRcdFx0bWFyZ2luOiAxNXB4IGF1dG87XHJcblx0XHRcdHN2Z3tcclxuXHRcdFx0XHRoZWlnaHQ6ODBweDtcclxuXHRcdFx0XHR3aWR0aDo4MHB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdCYuc2t5Ymx1ZXtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiRza3libHVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdCYubGltZWdyZWVue1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6JGxpbWVncmVlbjtcclxuXHRcdFx0fVxyXG5cdFx0XHQmLnllbGxvd3tcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiR5ZWxsb3c7XHJcblx0XHRcdH1cclxuXHRcdFx0Ji5vcmFuZ2V7XHJcblx0XHRcdFx0YmFja2dyb3VuZDokb3JhbmdlO1xyXG5cdFx0XHR9XHJcblx0XHRcdCYuYmx1ZXtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiRibHVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdCYucHVycGxle1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6JHB1cnBsZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aDZ7XHJcblx0XHRtYXJnaW4tYm90dG9tOjQwcHg7XHJcblx0fVxyXG59XHJcblxyXG46Om5nLWRlZXAgLnRlc3RpbW9uaWFsc3tcclxuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdGltZ3tcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6MDtcclxuXHRcdGxlZnQ6MDtcclxuXHR9XHJcblx0aDF7XHJcblx0XHRjb2xvcjojZmZmO1xyXG5cdFx0bWFyZ2luLWJvdHRvbToyMHB4O1xyXG5cdH1cclxuXHRwe1xyXG5cdFx0Zm9udC1zaXplOjE4cHg7XHJcblx0XHRmb250LXdlaWdodDo3MDA7XHJcblx0XHRjb2xvcjojZmZmO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTo1cHg7XHJcblx0XHQmOmxhc3QtY2hpbGR7XHJcblx0XHRcdG1hcmdpbi10b3A6MzVweDtcclxuXHRcdH1cclxuXHR9XHJcblx0LmNhcm91c2Vse1xyXG5cdFx0bWFyZ2luLXRvcDowO1xyXG5cdFx0ei1pbmRleDoxO1xyXG5cdH1cclxuXHQuY2Fyb3VzZWwtaW5uZXJ7XHJcblx0XHRoZWlnaHQ6MjgycHg7XHJcblx0fVxyXG5cdC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpe1xyXG5cdFx0aGVpZ2h0OjEwcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOjEwcHg7XHJcblx0XHRib3JkZXI6MXB4IHNvbGlkICNmZmY7XHJcblx0XHRiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG5cdFx0Ji5hY3RpdmV7XHJcblx0XHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuXHRcdH1cclxuXHR9XHJcblx0LmNhcm91c2VsLWl0ZW0ge1xyXG5cdFx0dHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlICFpbXBvcnRhbnQ7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuXHRcdGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcblx0XHRvcGFjaXR5OiAwO1xyXG5cdFx0Ji5hY3RpdmUge1xyXG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdG9wYWNpdHk6IDE7XHJcblx0XHRcdCAgfVxyXG5cdCAgfVxyXG59XHJcblxyXG4uc2VjdGlvbi1wcm9qZWN0cyB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGg2e1xyXG5cdFx0bWFyZ2luOiAzNXB4IDAgNDBweDtcclxuXHR9XHJcblx0LnByb2plY3QtZ3JpZHtcclxuXHRcdGxpe1xyXG5cdFx0XHR3aWR0aDoyNSU7XHJcblx0XHRcdGZsb2F0OmxlZnQ7XHJcblx0XHRcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuXHRcdFx0ZmlndXJle1xyXG5cdFx0XHRcdG1hcmdpbjowIDAgMnB4IDA7XHJcblx0XHRcdH1cclxuXHRcdFx0JjpmaXJzdC1jaGlsZHtcclxuXHRcdFx0XHR3aWR0aDo1MCU7XHJcblx0XHRcdFx0ZmlndXJle1xyXG5cdFx0XHRcdFx0bWFyZ2luOjA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdCY6bnRoLWNoaWxkKDQpLCAmOm50aC1jaGlsZCg1KXtcclxuXHRcdFx0XHRmaWd1cmV7XHJcblx0XHRcdFx0XHRtYXJnaW46MDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGJ1dHRvbntcclxuXHRcdFx0YmFja2dyb3VuZDpub25lO1xyXG5cdFx0XHRib3JkZXI6MnB4IHNvbGlkICNmZmY7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5wMXtcclxuXHRcdHBhZGRpbmc6MXB4O1xyXG5cdH1cclxuXHRmaWd1cmUge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDJweCk7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdFx0bWFyZ2luOjA7XHJcblx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRpbWcge1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcblx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcblx0XHRcdC13ZWJraXQtdHJhbnNpdGlvbjogLjVzIGVhc2UtaW4tb3V0O1xyXG5cdFx0XHR0cmFuc2l0aW9uOiAuNXMgZWFzZS1pbi1vdXQ7XHJcblx0XHRcdG1heC13aWR0aDogMTAwJTtcclxuXHRcdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdFx0fVxyXG5cdFx0LnNob3ctbW9yZS1vdmVybGF5IHtcclxuXHRcdFx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiKDAsIDAsIDApIDAlLCByZ2JhKDAsIDAsIDAsIDAuMikgMjMlLCByZ2JhKDAsIDAsIDAsIDApIDQwJSwgcmdiYSgwLCAwLCAwLCAwKSA2OCUsIHJnYmEoMCwgMCwgMCwgMCkgODElLCByZ2JhKDAsIDAsIDAsIDApIDkyJSwgcmdiYSgwLCAwLCAwLCAwKSAxMDAlKSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuXHRcdFx0Ym90dG9tOiAwO1xyXG5cdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHJpZ2h0OiAwO1xyXG5cdFx0XHR0b3A6IDA7XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcclxuXHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwcztcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0ZmlnY2FwdGlvbiB7XHJcblx0XHRcdHdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0XHRcdGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRib3R0b206IDBweDtcclxuXHRcdFx0bGVmdDogMjBweDtcclxuXHRcdFx0cmlnaHQ6IDIwcHg7XHJcblx0XHRcdG1heC1oZWlnaHQ6IDQwcHg7XHJcblx0XHRcdC13ZWJraXQtdHJhbnNpdGlvbjogLjVzIGVhc2UtaW4tb3V0O1xyXG5cdFx0XHR0cmFuc2l0aW9uOiAuNXMgZWFzZS1pbi1vdXQ7XHJcblx0XHRcdHotaW5kZXg6IDI7XHJcblx0XHR9XHJcblx0XHQuc2hvd19tb3JlLXRpdGxlIHtcclxuXHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdGZvbnQtc2l6ZTogMjFweDtcclxuXHRcdFx0bGluZS1oZWlnaHQ6IDMwcHg7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0XHR9XHJcblx0XHQuc2hvd19tb3JlLWRlc2Mge1xyXG5cdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRsaW5lLWhlaWdodDogMThweDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDMwMDtcclxuXHRcdH1cclxuXHRcdCY6OmFmdGVye1xyXG5cdFx0XHRjb250ZW50OicnO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcblx0XHRcdGJvdHRvbTogMDtcclxuXHRcdFx0bGVmdDogMDtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0aGVpZ2h0OjEwMCU7XHJcblx0XHRcdHotaW5kZXg6IDE7XHJcblx0XHR9XHJcblx0XHQmOmhvdmVye1xyXG5cdFx0XHRpbWd7XHJcblx0XHRcdFx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcblx0XHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG5cdFx0XHR9XHJcblx0XHRcdC5zaG93LW1vcmUtb3ZlcmxheVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiKDAsIDAsIDApIDAlLCByZ2JhKDAsIDAsIDAsIDAuMikgMTAwJSkgcmVwZWF0IHNjcm9sbCAwIDA7XHJcblx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZmlnY2FwdGlvblxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdFx0XHRcdG1heC1oZWlnaHQ6IDIwMHB4O1xyXG5cdFx0XHRcdGJvdHRvbTogNTBweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG5cdC5tYWluLWJhbm5lcntcclxuXHRcdGRpc3BsYXk6bm9uZTtcclxuXHR9XHJcblx0LnNlY3Rpb24tcHJvamVjdHN7XHJcblx0LnByb2plY3QtZ3JpZHtcclxuXHRcdGxpe1xyXG5cdFx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0XHRmaWd1cmV7XHJcblx0XHRcdFx0bWFyZ2luOjAgMCAxNXB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdCY6Zmlyc3QtY2hpbGR7XHJcblx0XHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdFx0ZmlndXJle1xyXG5cdFx0XHRcdG1hcmdpbjowIDAgMTVweDtcclxuXHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbn0iLCI6Om5nLWRlZXAgLm1haW4tYmFubmVyIC5jYXJvdXNlbCB7XG4gIG1hcmdpbi10b3A6IC02MHB4O1xuICB6LWluZGV4OiAxO1xufVxuOjpuZy1kZWVwIC5tYWluLWJhbm5lciAuY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDgwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOjpuZy1kZWVwIC5tYWluLWJhbm5lciAuY2Fyb3VzZWwtaXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuOjpuZy1kZWVwIC5tYWluLWJhbm5lciAuY2Fyb3VzZWwtaXRlbSAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAtMTAwJTtcbiAgei1pbmRleDogMTA7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogNjAwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xuICBvcGFjaXR5OiAwO1xufVxuOjpuZy1kZWVwIC5tYWluLWJhbm5lciAuY2Fyb3VzZWwtaXRlbSAuY2Fyb3VzZWwtY2FwdGlvbiBoMSB7XG4gIGNvbG9yOiAjRkZDMTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbjo6bmctZGVlcCAubWFpbi1iYW5uZXIgLmNhcm91c2VsLWl0ZW0gLmNhcm91c2VsLWNhcHRpb24gLmJ0biB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbjo6bmctZGVlcCAubWFpbi1iYW5uZXIgLmNhcm91c2VsLWl0ZW0gLmluZm8taW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTEwMCU7XG4gIHRvcDogNTUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTU1JSk7XG4gIHotaW5kZXg6IDE7XG4gIHRyYW5zaXRpb246IGFsbCAxcztcbiAgb3BhY2l0eTogMDtcbn1cbjo6bmctZGVlcCAubWFpbi1iYW5uZXIgLmNhcm91c2VsLWl0ZW0uYWN0aXZlIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgbGVmdDogMTVweDtcbiAgb3BhY2l0eTogMC45O1xufVxuOjpuZy1kZWVwIC5tYWluLWJhbm5lciAuY2Fyb3VzZWwtaXRlbS5hY3RpdmUgLmluZm8taW1nIHtcbiAgcmlnaHQ6IDE1cHg7XG4gIG9wYWNpdHk6IDAuOTtcbn1cbjo6bmctZGVlcCAubWFpbi1iYW5uZXIgLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG46Om5nLWRlZXAgLm1haW4tYmFubmVyIC5waWNzdW0taW1nLXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbjo6bmctZGVlcCAubWFpbi1iYW5uZXIgLnBpY3N1bS1pbWctd3JhcHBlcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCA4MCwgMTI4LCAwLjkpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvcGFjaXR5OiAwLjk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xufVxuOjpuZy1kZWVwIC5tYWluLWJhbm5lciAucGljc3VtLWltZy13cmFwcGVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5uZ2ItY2Fyb3VzZWwge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ucGFuZWwtaGVhZGluZywgLnBhbmVsLWJvZHkge1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNsaWVudHMsIC5zZWN0aW9uLXByb2plY3RzLCAuc2VjdGlvbi1zZXZpY2VzLCAudGVzdGltb25pYWxzLCAuc2VjdGlvbi1pbmZvLCAuY29udGFjdC1pbmZvIHtcbiAgcGFkZGluZzogNzBweCAwO1xufVxuXG4uY2xpZW50cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG59XG4uY2xpZW50cyBoNiB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5jbGVhci1mbG9hdCB7XG4gIGNsZWFyOiBib3RoO1xuICBmbG9hdDogbm9uZTtcbn1cblxuLmNvbnRhY3QtaW5mbyAuc29jaWFsLW5ldCB1bCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5jb250YWN0LWluZm8gLnNvY2lhbC1uZXQgdWwgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5jb250YWN0LWluZm8gLnNvY2lhbC1uZXQgdWwgbGkgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBjb2xvcjogIzU1NTU1NTtcbn1cbi5jb250YWN0LWluZm8gLnNvY2lhbC1uZXQgdWwgbGkgc3ZnIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cbi5jb250YWN0LWluZm8gLnNldC1wYXJ0IHtcbiAgbWFyZ2luOiA0MHB4IDA7XG59XG4uY29udGFjdC1pbmZvIGg2IHtcbiAgY29sb3I6ICM1NTU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhY3QtaW5mbyBmb3JtIHtcbiAgbWFyZ2luLXRvcDogNDJweDtcbn1cbi5jb250YWN0LWluZm8gZm9ybSAuYnRuIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmljb24tY2lyY2xlIHtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5pY29uLWNpcmNsZSBpIHtcbiAgbGluZS1oZWlnaHQ6IDkwcHg7XG59XG5cbi5zZWN0aW9uLWluZm8gLnBhbmVsLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDMzMHB4O1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwtY29udGFpbmVyOmhvdmVyIC5wYW5lbCB7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwge1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1mcm9udCB7XG4gIGJvcmRlci10b3A6IDVweCBzb2xpZDtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG4gIHotaW5kZXg6IDE7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtZnJvbnQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogLTE7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtZnJvbnQucmVkIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvMS5qcGcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xuICBib3JkZXItY29sb3I6ICNiOTY0NmU7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtZnJvbnQucmVkIC5jaXJjbGUtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjk2NDZlO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWZyb250LmJsdWUge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy8yLmpwZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XG4gIGJvcmRlci1jb2xvcjogIzI3NmNhYTtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1mcm9udC5ibHVlIC5jaXJjbGUtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc2Y2FhO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWZyb250LmdyZWVuIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvMy5qcGcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xuICBib3JkZXItY29sb3I6ICM0YmJiNTc7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtZnJvbnQuZ3JlZW4gLmNpcmNsZS1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YmJiNTc7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtYmFjayB7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWJhY2sucmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5NjQ2ZTtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1iYWNrLmJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc2Y2FhO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWJhY2suZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJiYjU3O1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWZyb250LCAuc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1iYWNrIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtYmFjayBwIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIGg1IHtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCBwIHtcbiAgbWFyZ2luOiAwO1xufVxuLnNlY3Rpb24taW5mbyBoNiB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4uc2VjdGlvbi1pbmZvIHN2ZyB7XG4gIGZpbGw6ICNmZmY7XG59XG5cbi5zZWN0aW9uLXNldmljZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuMik7XG59XG4uc2VjdGlvbi1zZXZpY2VzIC5wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZzogMTVweCAwO1xufVxuLnNlY3Rpb24tc2V2aWNlcyAucGFuZWwgaDUge1xuICBjb2xvcjogIzMzMzMzMztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4uc2VjdGlvbi1zZXZpY2VzIC5wYW5lbCBwIHtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuLnNlY3Rpb24tc2V2aWNlcyAucGFuZWwgLmljb24tY2lyY2xlIHtcbiAgbWFyZ2luOiAxNXB4IGF1dG87XG59XG4uc2VjdGlvbi1zZXZpY2VzIC5wYW5lbCAuaWNvbi1jaXJjbGUgc3ZnIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogODBweDtcbn1cbi5zZWN0aW9uLXNldmljZXMgLnBhbmVsIC5pY29uLWNpcmNsZS5za3libHVlIHtcbiAgYmFja2dyb3VuZDogIzg4Y2VkYjtcbn1cbi5zZWN0aW9uLXNldmljZXMgLnBhbmVsIC5pY29uLWNpcmNsZS5saW1lZ3JlZW4ge1xuICBiYWNrZ3JvdW5kOiAjNzhjMjlhO1xufVxuLnNlY3Rpb24tc2V2aWNlcyAucGFuZWwgLmljb24tY2lyY2xlLnllbGxvdyB7XG4gIGJhY2tncm91bmQ6ICNmMWJiNTc7XG59XG4uc2VjdGlvbi1zZXZpY2VzIC5wYW5lbCAuaWNvbi1jaXJjbGUub3JhbmdlIHtcbiAgYmFja2dyb3VuZDogI2U5N2Y2MTtcbn1cbi5zZWN0aW9uLXNldmljZXMgLnBhbmVsIC5pY29uLWNpcmNsZS5ibHVlIHtcbiAgYmFja2dyb3VuZDogIzg4Y2VkYjtcbn1cbi5zZWN0aW9uLXNldmljZXMgLnBhbmVsIC5pY29uLWNpcmNsZS5wdXJwbGUge1xuICBiYWNrZ3JvdW5kOiAjNzg3ZmMyO1xufVxuLnNlY3Rpb24tc2V2aWNlcyBoNiB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbjo6bmctZGVlcCAudGVzdGltb25pYWxzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOjpuZy1kZWVwIC50ZXN0aW1vbmlhbHMgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuOjpuZy1kZWVwIC50ZXN0aW1vbmlhbHMgaDEge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbjo6bmctZGVlcCAudGVzdGltb25pYWxzIHAge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG46Om5nLWRlZXAgLnRlc3RpbW9uaWFscyBwOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAzNXB4O1xufVxuOjpuZy1kZWVwIC50ZXN0aW1vbmlhbHMgLmNhcm91c2VsIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cbjo6bmctZGVlcCAudGVzdGltb25pYWxzIC5jYXJvdXNlbC1pbm5lciB7XG4gIGhlaWdodDogMjgycHg7XG59XG46Om5nLWRlZXAgLnRlc3RpbW9uaWFscyAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG46Om5nLWRlZXAgLnRlc3RpbW9uaWFscyAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuOjpuZy1kZWVwIC50ZXN0aW1vbmlhbHMgLmNhcm91c2VsLWl0ZW0ge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDA7XG59XG46Om5nLWRlZXAgLnRlc3RpbW9uaWFscyAuY2Fyb3VzZWwtaXRlbS5hY3RpdmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnNlY3Rpb24tcHJvamVjdHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbn1cbi5zZWN0aW9uLXByb2plY3RzIGg2IHtcbiAgbWFyZ2luOiAzNXB4IDAgNDBweDtcbn1cbi5zZWN0aW9uLXByb2plY3RzIC5wcm9qZWN0LWdyaWQgbGkge1xuICB3aWR0aDogMjUlO1xuICBmbG9hdDogbGVmdDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLnNlY3Rpb24tcHJvamVjdHMgLnByb2plY3QtZ3JpZCBsaSBmaWd1cmUge1xuICBtYXJnaW46IDAgMCAycHggMDtcbn1cbi5zZWN0aW9uLXByb2plY3RzIC5wcm9qZWN0LWdyaWQgbGk6Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogNTAlO1xufVxuLnNlY3Rpb24tcHJvamVjdHMgLnByb2plY3QtZ3JpZCBsaTpmaXJzdC1jaGlsZCBmaWd1cmUge1xuICBtYXJnaW46IDA7XG59XG4uc2VjdGlvbi1wcm9qZWN0cyAucHJvamVjdC1ncmlkIGxpOm50aC1jaGlsZCg0KSBmaWd1cmUsIC5zZWN0aW9uLXByb2plY3RzIC5wcm9qZWN0LWdyaWQgbGk6bnRoLWNoaWxkKDUpIGZpZ3VyZSB7XG4gIG1hcmdpbjogMDtcbn1cbi5zZWN0aW9uLXByb2plY3RzIC5wcm9qZWN0LWdyaWQgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbn1cbi5zZWN0aW9uLXByb2plY3RzIC5wMSB7XG4gIHBhZGRpbmc6IDFweDtcbn1cbi5zZWN0aW9uLXByb2plY3RzIGZpZ3VyZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAycHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zZWN0aW9uLXByb2plY3RzIGZpZ3VyZSBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG4uc2VjdGlvbi1wcm9qZWN0cyBmaWd1cmUgLnNob3ctbW9yZS1vdmVybGF5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBsaW5lYXItZ3JhZGllbnQoMGRlZywgYmxhY2sgMCUsIHJnYmEoMCwgMCwgMCwgMC4yKSAyMyUsIHJnYmEoMCwgMCwgMCwgMCkgNDAlLCByZ2JhKDAsIDAsIDAsIDApIDY4JSwgcmdiYSgwLCAwLCAwLCAwKSA4MSUsIHJnYmEoMCwgMCwgMCwgMCkgOTIlLCByZ2JhKDAsIDAsIDAsIDApIDEwMCUpIHJlcGVhdCBzY3JvbGwgMCAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDBzO1xufVxuLnNlY3Rpb24tcHJvamVjdHMgZmlndXJlIGZpZ2NhcHRpb24ge1xuICB3ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBtYXgtaGVpZ2h0OiA0MHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHotaW5kZXg6IDI7XG59XG4uc2VjdGlvbi1wcm9qZWN0cyBmaWd1cmUgLnNob3dfbW9yZS10aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIxcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnNlY3Rpb24tcHJvamVjdHMgZmlndXJlIC5zaG93X21vcmUtZGVzYyB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLnNlY3Rpb24tcHJvamVjdHMgZmlndXJlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG59XG4uc2VjdGlvbi1wcm9qZWN0cyBmaWd1cmU6aG92ZXIgaW1nIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbi5zZWN0aW9uLXByb2plY3RzIGZpZ3VyZTpob3ZlciAuc2hvdy1tb3JlLW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIGxpbmVhci1ncmFkaWVudCgwZGVnLCBibGFjayAwJSwgcmdiYSgwLCAwLCAwLCAwLjIpIDEwMCUpIHJlcGVhdCBzY3JvbGwgMCAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbn1cbi5zZWN0aW9uLXByb2plY3RzIGZpZ3VyZTpob3ZlciBmaWdjYXB0aW9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgYm90dG9tOiA1MHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLm1haW4tYmFubmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnNlY3Rpb24tcHJvamVjdHMgLnByb2plY3QtZ3JpZCBsaSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnNlY3Rpb24tcHJvamVjdHMgLnByb2plY3QtZ3JpZCBsaSBmaWd1cmUge1xuICAgIG1hcmdpbjogMCAwIDE1cHg7XG4gIH1cbiAgLnNlY3Rpb24tcHJvamVjdHMgLnByb2plY3QtZ3JpZCBsaTpmaXJzdC1jaGlsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnNlY3Rpb24tcHJvamVjdHMgLnByb2plY3QtZ3JpZCBsaTpmaXJzdC1jaGlsZCBmaWd1cmUge1xuICAgIG1hcmdpbjogMCAwIDE1cHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let HomeComponent = class HomeComponent {
    constructor() {
        this.showNavigationArrows = false;
        this.slideConfig = {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        };
        // images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);
        this.banner = [
            {
                title: 'WE SPECIALIZE IN IMPROVING',
                title_2: 'OPERATIONAL PERFORMANCE AND IT DELIVERY.',
                description: 'We do this by improving the way our clients use people, processes and technologies'
            },
            {
                title: 'Experience & expertise of',
                title_2: 'consulting in technology & operations.',
                description: 'Offers cutting edge technology solutions for specific business needs'
            },
            {
                title: 'WITH HUGE',
                title_2: 'ANDPERFORMANCE FEATURE UPDATE',
                description: 'Customized Solutions For Dynamic Business'
            }
        ];
        this.client = [
            { img: 'assets/images/client' },
            { img: 'assets/images/client' },
            { img: 'assets/images/client' },
            { img: 'assets/images/client' },
            { img: 'assets/images/client' }
        ];
        this.testimonials = [
            {
                clientView_1: ' We ensure excellence in service through understanding of our clients business and their unique requirements.',
                clientView_2: ' Due to our close relationships and constant interactions with clients,',
                clientView_3: ' we have developed solid understanding and insight in our focus industries that include.',
                clientName: 'xyz Company'
            },
            {
                clientView_1: ' Consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
                clientView_2: ' Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.',
                clientView_3: ' lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.',
                clientName: 'ABC Company'
            },
            {
                clientView_1: ' We ensure excellence in service through understanding of our clients business and their unique requirements.',
                clientView_2: ' Due to our close relationships and constant interactions with clients,',
                clientView_3: ' we have developed solid understanding and insight in our focus industries that include.',
                clientName: '123 Company'
            },
            {
                clientView_1: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                clientView_2: ' Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo',
                clientView_3: ' Proin sodales pulvinar tempor.',
                clientName: 'QWERTy'
            },
        ];
        this.projects = [
            {
                gridClass: 'col-lg-6 col-md-6 col-sm-6 col-xs-12',
                imgPath: 'assets/images/project',
                title: 'DATANEST',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
            },
            {
                gridClass: 'col-lg-3 col-md-3 col-sm-6 col-xs-12',
                imgPath: 'assets/images/project',
                title: 'DATANEST',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
            },
            {
                gridClass: 'col-lg-3 col-md-3 col-sm-6 col-xs-12',
                imgPath: 'assets/images/project',
                title: 'DATANEST',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
            },
            {
                gridClass: 'col-lg-3 col-md-3 col-sm-6 col-xs-12',
                imgPath: 'assets/images/project',
                title: 'DATANEST',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
            },
            {
                gridClass: 'col-lg-3 col-md-3 col-sm-6 col-xs-12',
                imgPath: 'assets/images/project',
                title: 'DATANEST',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
            }
        ];
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.sevices = [
            {
                title: 'IT, telecom and software',
                color: 'skyblue',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
                icon: '#icon_telecom'
            },
            {
                title: 'ITES - BPO & KPO',
                color: 'yellow ',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
                icon: '#icon_customerService'
            },
            {
                title: 'Engineering & Manufacturing',
                color: 'orange',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
                icon: '#icon_engineeringMgf'
            },
            {
                title: 'Consumer goods and retail',
                color: 'limegreen',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
                icon: '#icon_retail'
            },
            {
                title: 'Financial services and insurance',
                color: 'purple',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
                icon: '#icon_finervice'
            },
            {
                title: 'Health care & Pharmaceuticals',
                color: 'blue',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
                icon: '#icon_healthCare'
            },
        ];
        this.solution = [
            {
                title: 'Data Management',
                color: 'red',
                list: [
                    { name: 'Cleanse Dataset' },
                    { name: 'Data Mapping & Conversion' },
                    { name: 'Data Migration & Consolidation' },
                    { name: 'Spend Analysis' }
                ],
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio',
                icon: '#icon_mgmt'
            },
            {
                title: 'Software Engineering',
                color: 'blue',
                list: [
                    { name: 'Product Engineering' },
                    { name: 'Application Development' },
                    { name: 'UX/UI Development' },
                    { name: 'Software Testing & QA' }
                ],
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio',
                icon: '#icon_softEngg'
            },
            {
                title: 'IT Staffing & Training',
                color: 'green',
                list: [
                    { name: 'Staffing Services' },
                    { name: 'Industries' },
                    { name: 'Courses' },
                    { name: 'Program Calendar' }
                ],
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio',
                icon: '#icon_training'
            },
        ];
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('carousel', { static: true })
], HomeComponent.prototype, "carousel", void 0);
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/industries/industries.component.scss":
/*!******************************************************!*\
  !*** ./src/app/industries/industries.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section-industy-info .panel {\n  text-align: center;\n}\n.section-industy-info .panel .panel-heading {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  border: 2px solid #214f7a;\n  margin: 0 auto 15px;\n}\n.section-industy-info .panel p {\n  color: #214f7a;\n  font-weight: bold;\n  font-size: 16px;\n}\n.section-industy-info .col {\n  margin-bottom: 20px;\n}\n.section-industy-info .col:last-child {\n  margin: 0 auto;\n}\nul li a {\n  padding: 15px;\n  margin-bottom: 15px;\n  background: #e5e5e5;\n  color: #333333;\n  display: block;\n}\nul li a.active {\n  background: #214f7a;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kdXN0cmllcy9GOlxcZ2l0aHViXFx3b3JrL3NyY1xcYXBwXFxpbmR1c3RyaWVzXFxpbmR1c3RyaWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbmR1c3RyaWVzL2luZHVzdHJpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtBQ0FSO0FEQ1E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0NaO0FERU87RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQVg7QURHSTtFQUNJLG1CQUFBO0FDRFI7QURFTztFQUNJLGNBQUE7QUNBWDtBRFNRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ05aO0FET1k7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUNMaEIiLCJmaWxlIjoic3JjL2FwcC9pbmR1c3RyaWVzL2luZHVzdHJpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1pbmR1c3R5LWluZm97XHJcbiAgICAucGFuZWx7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC5wYW5lbC1oZWFkaW5ne1xyXG4gICAgICAgICAgICB3aWR0aDoxNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjE1MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgICAgICAgICAgYm9yZGVyOjJweCBzb2xpZCAjMjE0ZjdhO1xyXG4gICAgICAgICAgICBtYXJnaW46MCBhdXRvIDE1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgIHB7XHJcbiAgICAgICAgICAgY29sb3I6ICMyMTRmN2E7XHJcbiAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29se1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MjBweDtcclxuICAgICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgICAgfSBcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG51bHtcclxuICAgIGxpe1xyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MTVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiNlNWU1ZTU7XHJcbiAgICAgICAgICAgIGNvbG9yOiMzMzMzMzM7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICYuYWN0aXZle1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDojMjE0ZjdhO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLnNlY3Rpb24taW5kdXN0eS1pbmZvIC5wYW5lbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zZWN0aW9uLWluZHVzdHktaW5mbyAucGFuZWwgLnBhbmVsLWhlYWRpbmcge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgIzIxNGY3YTtcbiAgbWFyZ2luOiAwIGF1dG8gMTVweDtcbn1cbi5zZWN0aW9uLWluZHVzdHktaW5mbyAucGFuZWwgcCB7XG4gIGNvbG9yOiAjMjE0ZjdhO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLnNlY3Rpb24taW5kdXN0eS1pbmZvIC5jb2wge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnNlY3Rpb24taW5kdXN0eS1pbmZvIC5jb2w6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG51bCBsaSBhIHtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxudWwgbGkgYS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjMjE0ZjdhO1xuICBjb2xvcjogI2ZmZjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/industries/industries.component.ts":
/*!****************************************************!*\
  !*** ./src/app/industries/industries.component.ts ***!
  \****************************************************/
/*! exports provided: IndustriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndustriesComponent", function() { return IndustriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IndustriesComponent = class IndustriesComponent {
    constructor() {
        this.industryInfo = [
            { title: 'IT, Telecom & Software' },
            { title: 'Telecom' },
            { title: 'ITES - BPO & KPO' },
            { title: 'Engineering & Manufacturing' },
            { title: 'Consumer Goods & Retail' },
            { title: 'Banking Financial Services & Insurance' },
            { title: 'Health Care & Pharmaceuticals' }
        ];
    }
    ngOnInit() {
    }
};
IndustriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-industries',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./industries.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/industries/industries.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./industries.component.scss */ "./src/app/industries/industries.component.scss")).default]
    })
], IndustriesComponent);



/***/ }),

/***/ "./src/app/inner-page-header/inner-page-header.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/inner-page-header/inner-page-header.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lubmVyLXBhZ2UtaGVhZGVyL2lubmVyLXBhZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/inner-page-header/inner-page-header.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/inner-page-header/inner-page-header.component.ts ***!
  \******************************************************************/
/*! exports provided: InnerPageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerPageHeaderComponent", function() { return InnerPageHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InnerPageHeaderComponent = class InnerPageHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
InnerPageHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inner-page-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inner-page-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/inner-page-header/inner-page-header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inner-page-header.component.scss */ "./src/app/inner-page-header/inner-page-header.component.scss")).default]
    })
], InnerPageHeaderComponent);



/***/ }),

/***/ "./src/app/managedservice/managedservice.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/managedservice/managedservice.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section-manage-service h5 {\n  font-weight: bold;\n  text-align: center;\n  margin: 70px 0;\n}\n.section-manage-service ul {\n  margin-bottom: 15px;\n}\n.section-manage-service ul li {\n  padding: 10px 0;\n  list-style: inside disc;\n  font-size: 16px;\n}\n.section-manage-service img {\n  max-width: 100%;\n}\n.section-manage-service .row:last-child {\n  margin-top: 70px;\n}\n.section-manage-service .panel-container {\n  min-height: 330px;\n  perspective: 1000px;\n  margin-bottom: 25px;\n}\n.section-manage-service .panel-container:hover .panel {\n  transform: rotateX(180deg);\n}\n.section-manage-service .panel {\n  color: #fff;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 1s;\n  transform-style: preserve-3d;\n}\n.section-manage-service .panel .panel-front {\n  border-top: 5px solid;\n  padding-top: 25px;\n  z-index: 1;\n}\n.section-manage-service .panel .panel-front::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #e5f0fa;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n.section-manage-service .panel .panel-front, .section-manage-service .panel .panel-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.section-manage-service .panel .panel-back {\n  padding-top: 25px;\n  transform: rotateX(180deg);\n  background: #214f7a;\n}\n.section-manage-service .panel .panel-back p {\n  padding: 10px;\n  color: #fff;\n  text-align: left;\n}\n.section-manage-service .panel .panel-back h5 {\n  margin: 0;\n  padding: 20px 10px;\n  text-align: left;\n}\n.section-manage-service .panel p {\n  margin: 0;\n  text-align: right;\n  color: #333333;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlZHNlcnZpY2UvRjpcXGdpdGh1Ylxcd29yay9zcmNcXGFwcFxcbWFuYWdlZHNlcnZpY2VcXG1hbmFnZWRzZXJ2aWNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYW5hZ2Vkc2VydmljZS9tYW5hZ2Vkc2VydmljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQVI7QURFSTtFQUNJLG1CQUFBO0FDQVI7QURDUTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNDWjtBREVJO0VBQ0ksZUFBQTtBQ0FSO0FER1E7RUFDSSxnQkFBQTtBQ0RaO0FESUk7RUFDRixpQkFBQTtFQUNNLG1CQUFBO0VBQ0EsbUJBQUE7QUNGUjtBREdFO0VBQ0MsMEJBQUE7QUNESDtBREtJO0VBQ0YsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUNIRjtBRElFO0VBQ0MscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNGSDtBREdHO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQ0RKO0FES0U7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtBQ0hIO0FES0U7RUFFVSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUNKWjtBREtHO0VBQ2EsYUFBQTtFQUNELFdBQUE7RUFDQSxnQkFBQTtBQ0hmO0FES1k7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0haO0FET0U7RUFDQyxTQUFBO0VBQ1MsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ0xaIiwiZmlsZSI6InNyYy9hcHAvbWFuYWdlZHNlcnZpY2UvbWFuYWdlZHNlcnZpY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1tYW5hZ2Utc2VydmljZXtcclxuICAgIGg1e1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjo3MHB4IDA7XHJcbiAgICB9XHJcbiAgICB1bHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjE1cHg7XHJcbiAgICAgICAgbGl7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogaW5zaWRlIGRpc2M7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbWd7XHJcbiAgICAgICAgbWF4LXdpZHRoOjEwMCU7XHJcbiAgICB9XHJcbiAgICAucm93e1xyXG4gICAgICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDo3MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wYW5lbC1jb250YWluZXJ7XHJcblx0XHRtaW4taGVpZ2h0OiAzMzBweDtcclxuICAgICAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcblx0XHQmOmhvdmVyIC5wYW5lbHtcclxuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuICAgIC5wYW5lbHtcclxuXHRcdGNvbG9yOiNmZmY7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcclxuXHRcdHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcblx0XHQucGFuZWwtZnJvbnR7XHJcblx0XHRcdGJvcmRlci10b3A6IDVweCBzb2xpZDtcclxuXHRcdFx0cGFkZGluZy10b3A6IDI1cHg7XHJcblx0XHRcdHotaW5kZXg6IDE7XHJcblx0XHRcdCY6OmFmdGVye1xyXG5cdFx0XHRcdGNvbnRlbnQ6Jyc7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHRcdFx0aGVpZ2h0OjEwMCU7XHJcblx0XHRcdFx0YmFja2dyb3VuZDojZTVmMGZhOyBcclxuXHRcdFx0XHR0b3A6IDA7XHJcblx0XHRcdFx0bGVmdDogMDtcclxuXHRcdFx0XHR6LWluZGV4OiAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblx0XHQucGFuZWwtZnJvbnQsIC5wYW5lbC1iYWNre1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdFx0XHRiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0XHR9XHJcblx0XHQucGFuZWwtYmFja1xyXG5cdFx0e1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IzIxNGY3YTtcclxuXHRcdFx0cHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGg1e1xyXG4gICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgcGFkZGluZzoyMHB4IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuXHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cHtcclxuXHRcdFx0bWFyZ2luOjA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBjb2xvcjojMzMzMzMzO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjEwcHg7XHJcblx0XHR9XHJcbiAgICB9XHJcbn0iLCIuc2VjdGlvbi1tYW5hZ2Utc2VydmljZSBoNSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNzBweCAwO1xufVxuLnNlY3Rpb24tbWFuYWdlLXNlcnZpY2UgdWwge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLnNlY3Rpb24tbWFuYWdlLXNlcnZpY2UgdWwgbGkge1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGxpc3Qtc3R5bGU6IGluc2lkZSBkaXNjO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uc2VjdGlvbi1tYW5hZ2Utc2VydmljZSBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4uc2VjdGlvbi1tYW5hZ2Utc2VydmljZSAucm93Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiA3MHB4O1xufVxuLnNlY3Rpb24tbWFuYWdlLXNlcnZpY2UgLnBhbmVsLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDMzMHB4O1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLnNlY3Rpb24tbWFuYWdlLXNlcnZpY2UgLnBhbmVsLWNvbnRhaW5lcjpob3ZlciAucGFuZWwge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcbn1cbi5zZWN0aW9uLW1hbmFnZS1zZXJ2aWNlIC5wYW5lbCB7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuLnNlY3Rpb24tbWFuYWdlLXNlcnZpY2UgLnBhbmVsIC5wYW5lbC1mcm9udCB7XG4gIGJvcmRlci10b3A6IDVweCBzb2xpZDtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG4gIHotaW5kZXg6IDE7XG59XG4uc2VjdGlvbi1tYW5hZ2Utc2VydmljZSAucGFuZWwgLnBhbmVsLWZyb250OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2U1ZjBmYTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAtMTtcbn1cbi5zZWN0aW9uLW1hbmFnZS1zZXJ2aWNlIC5wYW5lbCAucGFuZWwtZnJvbnQsIC5zZWN0aW9uLW1hbmFnZS1zZXJ2aWNlIC5wYW5lbCAucGFuZWwtYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5zZWN0aW9uLW1hbmFnZS1zZXJ2aWNlIC5wYW5lbCAucGFuZWwtYmFjayB7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcbiAgYmFja2dyb3VuZDogIzIxNGY3YTtcbn1cbi5zZWN0aW9uLW1hbmFnZS1zZXJ2aWNlIC5wYW5lbCAucGFuZWwtYmFjayBwIHtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uc2VjdGlvbi1tYW5hZ2Utc2VydmljZSAucGFuZWwgLnBhbmVsLWJhY2sgaDUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5zZWN0aW9uLW1hbmFnZS1zZXJ2aWNlIC5wYW5lbCBwIHtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/managedservice/managedservice.component.ts":
/*!************************************************************!*\
  !*** ./src/app/managedservice/managedservice.component.ts ***!
  \************************************************************/
/*! exports provided: ManagedserviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagedserviceComponent", function() { return ManagedserviceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ManagedserviceComponent = class ManagedserviceComponent {
    constructor() {
        this.solution = [
            {
                title: 'Mixed Multimedia Content',
                description: 'Control Your Portfolio Size, Dimension & Size of Your Margin',
                description_2: 'Tired with only single type content? with Jkreativ you have ability to mix your content such as youtube, vimeo, sound cloud also self hosted HTML 5 video.',
            },
            {
                title: 'Mixed Multimedia Content',
                description: 'Control Your Portfolio Size, Dimension & Size of Your Margin',
                description_2: 'Tired with only single type content? with Jkreativ you have ability to mix your content such as youtube, vimeo, sound cloud also self hosted HTML 5 video.',
            },
            {
                title: 'Mixed Multimedia Content',
                description: 'Portfolio Item Block Size',
                description_2: 'Tired with only single type content? with Jkreativ you have ability to mix your content such as youtube, vimeo, sound cloud also self hosted HTML 5 video.',
            },
            {
                title: 'Mixed Multimedia Content',
                description: 'Ajax Expand, Extended Portfolio, or Side Content',
                description_2: 'Tired with only single type content? with Jkreativ you have ability to mix your content such as youtube, vimeo, sound cloud also self hosted HTML 5 video.',
            }
        ];
    }
    ngOnInit() {
    }
};
ManagedserviceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-managedservice',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./managedservice.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/managedservice/managedservice.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./managedservice.component.scss */ "./src/app/managedservice/managedservice.component.scss")).default]
    })
], ManagedserviceComponent);



/***/ }),

/***/ "./src/app/news/news.component.scss":
/*!******************************************!*\
  !*** ./src/app/news/news.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section-news {\n  margin: 70px auto;\n}\n.section-news .nav-tabs {\n  width: 100%;\n  border-bottom: 1px solid #214f7a;\n}\n.section-news .nav-tabs .nav-link {\n  border: none;\n  color: #214f7a;\n}\n.section-news .nav-tabs .nav-link.active {\n  border-bottom: 2px solid #214f7a;\n  font-weight: bold;\n}\n.section-news li.grid-li {\n  width: 25%;\n  float: left;\n  list-style-type: none;\n}\n.section-news li.grid-li p {\n  margin: 0;\n}\n.section-news li.grid-li .panel {\n  margin: 0 0 10px 10px;\n  border: 1px solid #ccc;\n}\n.section-news li.grid-li .panel .panel-body {\n  padding: 15px;\n}\n.section-news li.grid-li img {\n  width: 100%;\n}\n.section-news li.grid-li:first-child {\n  width: 50%;\n}\n.section-news li.grid-li:first-child .panel {\n  background: #e5f0fa;\n  border: none;\n  margin-left: 0;\n}\n.section-news li.grid-li:first-child .panel p {\n  font-size: 14px;\n  margin-bottom: 20px;\n}\n.section-news li.grid-li:first-child .panel p:first-child {\n  margin-top: 20px;\n  margin-bottom: 25px;\n  font-size: 18px;\n}\n.news-video {\n  padding: 70px 0;\n  background: #e5f0fa;\n}\n.news-video .video {\n  margin-bottom: 70px;\n}\n.news-video .video iframe {\n  margin: 0 auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9GOlxcZ2l0aHViXFx3b3JrL3NyY1xcYXBwXFxuZXdzXFxuZXdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uZXdzL25ld3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKO0FEQUk7RUFDSSxXQUFBO0VBQ0EsZ0NBQUE7QUNFUjtBRERRO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUNHWjtBREZZO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtBQ0loQjtBREVJO0VBQ0ksVUFBQTtFQUNDLFdBQUE7RUFDQSxxQkFBQTtBQ0FUO0FEQ1M7RUFDSSxTQUFBO0FDQ2I7QURDUztFQUNHLHFCQUFBO0VBQ0Msc0JBQUE7QUNDYjtBREFhO0VBQ0ksYUFBQTtBQ0VqQjtBREVTO0VBQ0ksV0FBQTtBQ0FiO0FERVM7RUFDSSxVQUFBO0FDQWI7QURDYTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDakI7QURBaUI7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUNFckI7QUREcUI7RUFDRyxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0d4QjtBRE9BO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDSko7QURLSTtFQUNJLG1CQUFBO0FDSFI7QURJTztFQUNDLGNBQUE7RUFDQSxjQUFBO0FDRlIiLCJmaWxlIjoic3JjL2FwcC9uZXdzL25ld3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1uZXdze1xyXG4gICAgbWFyZ2luOjcwcHggYXV0bztcclxuICAgIC5uYXYtdGFic3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjMjE0ZjdhO1xyXG4gICAgICAgIC5uYXYtbGlua3tcclxuICAgICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiMyMTRmN2E7XHJcbiAgICAgICAgICAgICYuYWN0aXZle1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgIzIxNGY3YTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsaVxyXG4gICB7XHJcbiAgICAmLmdyaWQtbGl7XHJcbiAgICAgICAgd2lkdGg6MjUlO1xyXG4gICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAucGFuZWx7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHggMTBweDs7XHJcbiAgICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICAgICAucGFuZWwtYm9keXtcclxuICAgICAgICAgICAgICAgICBwYWRkaW5nOjE1cHg7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICAgd2lkdGg6NTAlO1xyXG4gICAgICAgICAgICAgLnBhbmVse1xyXG4gICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlNWYwZmE7XHJcbiAgICAgICAgICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MDtcclxuICAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gIFxyXG4gfVxyXG4gICB9XHJcbiAgIFxyXG59XHJcbi5uZXdzLXZpZGVve1xyXG4gICAgcGFkZGluZzo3MHB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiNlNWYwZmE7XHJcbiAgICAudmlkZW97XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTo3MHB4O1xyXG4gICAgICAgaWZyYW1le1xyXG4gICAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIi5zZWN0aW9uLW5ld3Mge1xuICBtYXJnaW46IDcwcHggYXV0bztcbn1cbi5zZWN0aW9uLW5ld3MgLm5hdi10YWJzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjE0ZjdhO1xufVxuLnNlY3Rpb24tbmV3cyAubmF2LXRhYnMgLm5hdi1saW5rIHtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzIxNGY3YTtcbn1cbi5zZWN0aW9uLW5ld3MgLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmUge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzIxNGY3YTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2VjdGlvbi1uZXdzIGxpLmdyaWQtbGkge1xuICB3aWR0aDogMjUlO1xuICBmbG9hdDogbGVmdDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLnNlY3Rpb24tbmV3cyBsaS5ncmlkLWxpIHAge1xuICBtYXJnaW46IDA7XG59XG4uc2VjdGlvbi1uZXdzIGxpLmdyaWQtbGkgLnBhbmVsIHtcbiAgbWFyZ2luOiAwIDAgMTBweCAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuLnNlY3Rpb24tbmV3cyBsaS5ncmlkLWxpIC5wYW5lbCAucGFuZWwtYm9keSB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4uc2VjdGlvbi1uZXdzIGxpLmdyaWQtbGkgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2VjdGlvbi1uZXdzIGxpLmdyaWQtbGk6Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogNTAlO1xufVxuLnNlY3Rpb24tbmV3cyBsaS5ncmlkLWxpOmZpcnN0LWNoaWxkIC5wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICNlNWYwZmE7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4uc2VjdGlvbi1uZXdzIGxpLmdyaWQtbGk6Zmlyc3QtY2hpbGQgLnBhbmVsIHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uc2VjdGlvbi1uZXdzIGxpLmdyaWQtbGk6Zmlyc3QtY2hpbGQgLnBhbmVsIHA6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5uZXdzLXZpZGVvIHtcbiAgcGFkZGluZzogNzBweCAwO1xuICBiYWNrZ3JvdW5kOiAjZTVmMGZhO1xufVxuLm5ld3MtdmlkZW8gLnZpZGVvIHtcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcbn1cbi5uZXdzLXZpZGVvIC52aWRlbyBpZnJhbWUge1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */");

/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NewsComponent = class NewsComponent {
    constructor() {
        this.news = [
            { img: 'assets/images/news', desc_1: 'Arkedge Technologies has schedule to launch Survey ans Poll product on 05 January 2018.', desc_2: 'Arkedge Technologies has schedule to launch Survey ans Poll product on 05 January 2018... Please click on news and read the details of news section. ' },
            { img: 'assets/images/news', desc_1: 'Arkedge', desc_2: 'Technologies bags new Spend Analysis project...' },
            { img: 'assets/images/news', desc_1: 'Arkedge', desc_2: 'Technologies bags new Spend Analysis project...' },
            { img: 'assets/images/news', desc_1: 'Arkedge', desc_2: 'Technologies bags new Spend Analysis project...' },
            { img: 'assets/images/news', desc_1: 'Arkedge', desc_2: 'Technologies bags new Spend Analysis project...' },
        ];
    }
    ngOnInit() {
    }
};
NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./news.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./news.component.scss */ "./src/app/news/news.component.scss")).default]
    })
], NewsComponent);



/***/ }),

/***/ "./src/app/ourproduct/ourproduct.component.scss":
/*!******************************************************!*\
  !*** ./src/app/ourproduct/ourproduct.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section-product {\n  background: #e5f0fa;\n}\n\n.section-product-detail ul {\n  margin-bottom: 15px;\n}\n\n.section-product-detail ul li {\n  padding: 10px 0;\n  list-style: inside disc;\n  font-size: 16px;\n}\n\n.section-product-detail img {\n  max-width: 100%;\n}\n\n.slick-slide {\n  box-shadow: -1px 2px 5px 1px rgba(0, 0, 0, 0.5);\n  background: #fff;\n}\n\n.slick-slide.slick-current + .slick-active {\n  transform: scale(1.2);\n  transition: all 0.5s;\n  z-index: 1;\n  position: relative;\n}\n\n.slick-slide.slick-current + .slick-active img {\n  opacity: 1;\n}\n\n.slick-slide.slick-slide img {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3VycHJvZHVjdC9GOlxcZ2l0aHViXFx3b3JrL3NyY1xcYXBwXFxvdXJwcm9kdWN0XFxvdXJwcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9vdXJwcm9kdWN0L291cnByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxtQkFBQTtBQ0FKOztBREdJO0VBQ0ksbUJBQUE7QUNBUjs7QURDUTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNDWjs7QURFSTtFQUNJLGVBQUE7QUNBUjs7QURJQTtFQUNJLCtDQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURFSTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNBUjs7QURDUTtFQUNJLFVBQUE7QUNDWjs7QURHTztFQUNDLFlBQUE7QUNEUiIsImZpbGUiOiJzcmMvYXBwL291cnByb2R1Y3Qvb3VycHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc2VjdGlvbi1wcm9kdWN0e1xyXG4gICAgYmFja2dyb3VuZDojZTVmMGZhO1xyXG59XHJcbi5zZWN0aW9uLXByb2R1Y3QtZGV0YWlse1xyXG4gICAgdWx7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToxNXB4O1xyXG4gICAgICAgIGxpe1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IGluc2lkZSBkaXNjO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW1ne1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLnNsaWNrLXNsaWRle1xyXG4gICAgYm94LXNoYWRvdzogLTFweCAycHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICAmLnNsaWNrLWN1cnJlbnQgKyAuc2xpY2stYWN0aXZle1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgICAgICB0cmFuc2l0aW9uOmFsbCAwLjVzO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgIH1cclxuICAgIH1cclxuICAgICYuc2xpY2stc2xpZGV7XHJcbiAgICAgICBpbWd7XHJcbiAgICAgICAgb3BhY2l0eTouNTtcclxuICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiIsIi5zZWN0aW9uLXByb2R1Y3Qge1xuICBiYWNrZ3JvdW5kOiAjZTVmMGZhO1xufVxuXG4uc2VjdGlvbi1wcm9kdWN0LWRldGFpbCB1bCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uc2VjdGlvbi1wcm9kdWN0LWRldGFpbCB1bCBsaSB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgbGlzdC1zdHlsZTogaW5zaWRlIGRpc2M7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5zZWN0aW9uLXByb2R1Y3QtZGV0YWlsIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLnNsaWNrLXNsaWRlIHtcbiAgYm94LXNoYWRvdzogLTFweCAycHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uc2xpY2stc2xpZGUuc2xpY2stY3VycmVudCArIC5zbGljay1hY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2xpY2stc2xpZGUuc2xpY2stY3VycmVudCArIC5zbGljay1hY3RpdmUgaW1nIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5zbGljay1zbGlkZS5zbGljay1zbGlkZSBpbWcge1xuICBvcGFjaXR5OiAwLjU7XG59Il19 */");

/***/ }),

/***/ "./src/app/ourproduct/ourproduct.component.ts":
/*!****************************************************!*\
  !*** ./src/app/ourproduct/ourproduct.component.ts ***!
  \****************************************************/
/*! exports provided: OurproductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurproductComponent", function() { return OurproductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OurproductComponent = class OurproductComponent {
    constructor() {
        this.slideConfig = {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        };
        this.products = [
            { img: 'assets/images/project' },
            { img: 'assets/images/project' },
            { img: 'assets/images/project' },
            { img: 'assets/images/project' },
            { img: 'assets/images/project' }
        ];
    }
    ngOnInit() {
    }
};
OurproductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ourproduct',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ourproduct.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ourproduct/ourproduct.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ourproduct.component.scss */ "./src/app/ourproduct/ourproduct.component.scss")).default]
    })
], OurproductComponent);



/***/ }),

/***/ "./src/app/projectengineering/projectengineering.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/projectengineering/projectengineering.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section-project-engineering ul li {\n  padding: 0 15px 15px;\n}\n\n.methodologies {\n  position: relative;\n}\n\n.methodologies .icon-circle {\n  width: 100px;\n  height: 100px;\n  border: 1px solid #fff;\n  border-radius: 50%;\n  margin: 0 auto;\n}\n\n.methodologies .icon-circle i {\n  line-height: 90px;\n}\n\n.methodologies .icon-circle i svg {\n  fill: #fff;\n}\n\n.methodologies ul {\n  position: relative;\n  width: 100%;\n}\n\n.methodologies ul li {\n  float: left;\n  width: 20%;\n  padding: 50px 0;\n}\n\n.methodologies ul li ul {\n  display: none;\n  position: absolute;\n  top: 180px;\n  left: 0;\n  text-align: center;\n  width: 100%;\n}\n\n.methodologies ul li ul li {\n  float: none;\n  width: 100%;\n}\n\n.methodologies ul li h6 {\n  padding-bottom: 15px;\n}\n\n.methodologies ul li:hover .icon-circle {\n  border-color: #ffc100;\n}\n\n.methodologies ul li:hover .icon-circle svg {\n  fill: #ffc100;\n}\n\n.methodologies ul li:hover h6 {\n  color: #ffc100;\n  position: relative;\n  padding-bottom: 0;\n}\n\n.methodologies ul li:hover h6::after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid #ffc100;\n  margin: 0 auto;\n  display: block;\n}\n\n.methodologies ul li:hover ul {\n  display: block;\n}\n\n.methodologies img {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0px;\n  top: 0px;\n  z-index: -1;\n}\n\n.methodologies h6, .methodologies li, .methodologies h1 {\n  color: #fff;\n  text-align: center;\n}\n\nsection.engeering-grap img {\n  max-width: 100%;\n}\n\n.our-services {\n  background: #e5f0fa;\n  border-radius: 15px;\n  overflow: hidden;\n}\n\n.our-services .triangle {\n  background: #ffc100;\n  position: relative;\n  min-height: 400px;\n  display: flex;\n}\n\n.our-services .triangle .v-center {\n  align-self: center;\n  text-align: center;\n  margin: 0 auto;\n}\n\n.our-services .triangle .v-center .logo-circle {\n  width: 120px;\n  height: 120px;\n  background: #0860aa;\n  border-radius: 50%;\n  margin: 0 auto;\n}\n\n.our-services .triangle .v-center h5 {\n  font-size: bold;\n  margin-top: 15px;\n}\n\n.our-services .triangle::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-top: 200px solid transparent;\n  border-bottom: 200px solid transparent;\n  border-left: 50px solid #ffc100;\n  right: -50px;\n  top: 0;\n}\n\n.our-services .v-flex {\n  display: flex;\n}\n\n.our-services ul {\n  padding: 0 0 0 100px;\n  align-self: center;\n}\n\n.our-services ul li {\n  list-style-type: disc;\n  font-size: 18px;\n  padding: 15px;\n}\n\n@media (max-width: 576px) {\n  .methodologies ul {\n    position: static;\n  }\n  .methodologies ul li {\n    width: 100%;\n    position: relative;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdGVuZ2luZWVyaW5nL0Y6XFxnaXRodWJcXHdvcmsvc3JjXFxhcHBcXHByb2plY3RlbmdpbmVlcmluZ1xccHJvamVjdGVuZ2luZWVyaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9qZWN0ZW5naW5lZXJpbmcvcHJvamVjdGVuZ2luZWVyaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0ksb0JBQUE7QUNEWjs7QURLQTtFQUNJLGtCQUFBO0FDRko7O0FER0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDRFI7O0FERVE7RUFDSSxpQkFBQTtBQ0FaOztBRENZO0VBQ0ksVUFBQTtBQ0NoQjs7QURHRztFQUNDLGtCQUFBO0VBQ0EsV0FBQTtBQ0RKOztBREVJO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDQVI7O0FEQ1E7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NaOztBREFZO0VBQ0csV0FBQTtFQUNBLFdBQUE7QUNFZjs7QURDUTtFQUNJLG9CQUFBO0FDQ1o7O0FERVk7RUFFSSxxQkFBQTtBQ0RoQjs7QURFZ0I7RUFDSSxhQUFBO0FDQXBCOztBREdZO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNEaEI7O0FERWdCO0VBQ0ksV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNBcEI7O0FESVk7RUFDSSxjQUFBO0FDRmhCOztBRE9JO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ0xSOztBRE9JO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDTFI7O0FEVVE7RUFDSSxlQUFBO0FDUFo7O0FEWUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNUSjs7QURVSTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNSUjs7QURTUTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDUFo7O0FEUVk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDTmhCOztBRFFZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDTmhCOztBRFNRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtBQ1BaOztBRFVJO0VBQ0ksYUFBQTtBQ1JSOztBRFVJO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtBQ1JSOztBRFNRO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ1BaOztBRFlBO0VBRVE7SUFDSSxnQkFBQTtFQ1ZWO0VEV1M7SUFDSSxXQUFBO0lBQ0Esa0JBQUE7RUNUYjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdGVuZ2luZWVyaW5nL3Byb2plY3RlbmdpbmVlcmluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLXByb2plY3QtZW5naW5lZXJpbmd7XHJcbiAgIHVse1xyXG4gICAgICAgIGxpe1xyXG4gICAgICAgICAgICBwYWRkaW5nOjAgMTVweCAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ubWV0aG9kb2xvZ2llc3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5pY29uLWNpcmNsZXtcclxuICAgICAgICB3aWR0aDoxMDBweDtcclxuICAgICAgICBoZWlnaHQ6MTAwcHg7XHJcbiAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICAgICAgaXtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgICAgIHN2Z3tcclxuICAgICAgICAgICAgICAgIGZpbGw6I2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgdWx7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbGl7XHJcbiAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICB3aWR0aDoyMCU7XHJcbiAgICAgICAgcGFkZGluZzogNTBweCAwO1xyXG4gICAgICAgIHVse1xyXG4gICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOjE4MHB4O1xyXG4gICAgICAgICAgICBsZWZ0OjA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgIGZsb2F0Om5vbmU7XHJcbiAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaDZ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIC5pY29uLWNpcmNsZVxyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiNmZmMxMDA7XHJcbiAgICAgICAgICAgICAgICBzdmd7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbDojZmZjMTAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGg2e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6I2ZmYzEwMDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206MDtcclxuICAgICAgICAgICAgICAgICY6OmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDA7IFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDsgXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiA1cHggc29saWQgI2ZmYzEwMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgdWx7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICB9XHJcbiAgICBpbWd7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgbGVmdDowcHg7XHJcbiAgICAgICAgdG9wOjBweDtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuICAgIGg2LCBsaSwgaDF7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIH1cclxufVxyXG5zZWN0aW9ue1xyXG4gICAmLmVuZ2VlcmluZy1ncmFwe1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLm91ci1zZXJ2aWNlc3tcclxuICAgIGJhY2tncm91bmQ6I2U1ZjBmYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLnRyaWFuZ2xle1xyXG4gICAgICAgIGJhY2tncm91bmQ6I2ZmYzEwMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWluLWhlaWdodDo0MDBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC52LWNlbnRlcntcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAubG9nby1jaXJjbGV7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzA4NjBhYTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGg1e1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOmJvbGQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDA7IFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDA7IFxyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAyMDBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMjAwcHggc29saWQgdHJhbnNwYXJlbnQ7IFxyXG4gICAgICAgICAgICBib3JkZXItbGVmdDo1MHB4IHNvbGlkICNmZmMxMDA7XHJcbiAgICAgICAgICAgIHJpZ2h0Oi01MHB4O1xyXG4gICAgICAgICAgICB0b3A6MDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudi1mbGV4e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgICB1bHtcclxuICAgICAgICBwYWRkaW5nOjAgMCAwIDEwMHB4O1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MThweDtcclxuICAgICAgICAgICAgcGFkZGluZzoxNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcclxuICAgIC5tZXRob2RvbG9naWVze1xyXG4gICAgICAgIHVse1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLnNlY3Rpb24tcHJvamVjdC1lbmdpbmVlcmluZyB1bCBsaSB7XG4gIHBhZGRpbmc6IDAgMTVweCAxNXB4O1xufVxuXG4ubWV0aG9kb2xvZ2llcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tZXRob2RvbG9naWVzIC5pY29uLWNpcmNsZSB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5tZXRob2RvbG9naWVzIC5pY29uLWNpcmNsZSBpIHtcbiAgbGluZS1oZWlnaHQ6IDkwcHg7XG59XG4ubWV0aG9kb2xvZ2llcyAuaWNvbi1jaXJjbGUgaSBzdmcge1xuICBmaWxsOiAjZmZmO1xufVxuLm1ldGhvZG9sb2dpZXMgdWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1ldGhvZG9sb2dpZXMgdWwgbGkge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDIwJTtcbiAgcGFkZGluZzogNTBweCAwO1xufVxuLm1ldGhvZG9sb2dpZXMgdWwgbGkgdWwge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTgwcHg7XG4gIGxlZnQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWV0aG9kb2xvZ2llcyB1bCBsaSB1bCBsaSB7XG4gIGZsb2F0OiBub25lO1xuICB3aWR0aDogMTAwJTtcbn1cbi5tZXRob2RvbG9naWVzIHVsIGxpIGg2IHtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4ubWV0aG9kb2xvZ2llcyB1bCBsaTpob3ZlciAuaWNvbi1jaXJjbGUge1xuICBib3JkZXItY29sb3I6ICNmZmMxMDA7XG59XG4ubWV0aG9kb2xvZ2llcyB1bCBsaTpob3ZlciAuaWNvbi1jaXJjbGUgc3ZnIHtcbiAgZmlsbDogI2ZmYzEwMDtcbn1cbi5tZXRob2RvbG9naWVzIHVsIGxpOmhvdmVyIGg2IHtcbiAgY29sb3I6ICNmZmMxMDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4ubWV0aG9kb2xvZ2llcyB1bCBsaTpob3ZlciBoNjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNmZmMxMDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tZXRob2RvbG9naWVzIHVsIGxpOmhvdmVyIHVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWV0aG9kb2xvZ2llcyBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHotaW5kZXg6IC0xO1xufVxuLm1ldGhvZG9sb2dpZXMgaDYsIC5tZXRob2RvbG9naWVzIGxpLCAubWV0aG9kb2xvZ2llcyBoMSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnNlY3Rpb24uZW5nZWVyaW5nLWdyYXAgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4ub3VyLXNlcnZpY2VzIHtcbiAgYmFja2dyb3VuZDogI2U1ZjBmYTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5vdXItc2VydmljZXMgLnRyaWFuZ2xlIHtcbiAgYmFja2dyb3VuZDogI2ZmYzEwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5vdXItc2VydmljZXMgLnRyaWFuZ2xlIC52LWNlbnRlciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5vdXItc2VydmljZXMgLnRyaWFuZ2xlIC52LWNlbnRlciAubG9nby1jaXJjbGUge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJhY2tncm91bmQ6ICMwODYwYWE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ub3VyLXNlcnZpY2VzIC50cmlhbmdsZSAudi1jZW50ZXIgaDUge1xuICBmb250LXNpemU6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ub3VyLXNlcnZpY2VzIC50cmlhbmdsZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci10b3A6IDIwMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAyMDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IDUwcHggc29saWQgI2ZmYzEwMDtcbiAgcmlnaHQ6IC01MHB4O1xuICB0b3A6IDA7XG59XG4ub3VyLXNlcnZpY2VzIC52LWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm91ci1zZXJ2aWNlcyB1bCB7XG4gIHBhZGRpbmc6IDAgMCAwIDEwMHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4ub3VyLXNlcnZpY2VzIHVsIGxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAubWV0aG9kb2xvZ2llcyB1bCB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgfVxuICAubWV0aG9kb2xvZ2llcyB1bCBsaSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/projectengineering/projectengineering.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/projectengineering/projectengineering.component.ts ***!
  \********************************************************************/
/*! exports provided: ProjectengineeringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectengineeringComponent", function() { return ProjectengineeringComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjectengineeringComponent = class ProjectengineeringComponent {
    constructor() {
        this.solution = [
            {
                title: 'Idea',
                info: 'Our idealogy text will come, Lorem ipsum dolor sit ametadipiscing elit, sed do eiusmod tempor.',
                icon: '#icon_Idea'
            },
            {
                title: 'Concept',
                info: 'Concept text will come, Lorem ipsum dolor sit.',
                icon: '#icon_Concept'
            },
            {
                title: 'Design',
                info: 'Design text will come, Lorem ipsum dolor sit ametadipiscing elit, sed do eiusmod tempor.',
                icon: '#icon_Design'
            },
            {
                title: 'Develop',
                info: 'Develop text will come, Lorem ipsum dolor.',
                icon: '#icon_Develop'
            },
            {
                title: 'Test',
                info: 'Test text will come, Lorem ipsum dolor sit ametadipiscing elit, sed do eiusmod tempor.',
                icon: '#icon_Test'
            }
        ];
    }
    ngOnInit() {
    }
};
ProjectengineeringComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projectengineering',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projectengineering.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectengineering/projectengineering.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projectengineering.component.scss */ "./src/app/projectengineering/projectengineering.component.scss")).default]
    })
], ProjectengineeringComponent);



/***/ }),

/***/ "./src/app/space.pipe.ts":
/*!*******************************!*\
  !*** ./src/app/space.pipe.ts ***!
  \*******************************/
/*! exports provided: CreateSpace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSpace", function() { return CreateSpace; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CreateSpace = class CreateSpace {
    transform(value) {
        let newStr = value;
        newStr = newStr.replace(/([A-Z])/g, ' $1').trim();
        return newStr;
    }
};
CreateSpace = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'createSpace' })
], CreateSpace);



/***/ }),

/***/ "./src/app/technology/technology.component.scss":
/*!******************************************************!*\
  !*** ./src/app/technology/technology.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul li a {\n  padding: 15px;\n  margin-bottom: 15px;\n  background: #e5e5e5;\n  color: #333333;\n  display: block;\n}\nul li a.active {\n  background: #214f7a;\n  color: #fff;\n}\nsection:nth-child(3) {\n  background: #e5f0fa;\n}\nsection:nth-child(3) ul {\n  margin-left: 20px;\n}\nsection:nth-child(3) ul li {\n  font-size: 18px;\n  list-style-type: disc;\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVjaG5vbG9neS9GOlxcZ2l0aHViXFx3b3JrL3NyY1xcYXBwXFx0ZWNobm9sb2d5XFx0ZWNobm9sb2d5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90ZWNobm9sb2d5L3RlY2hub2xvZ3kuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDRFo7QURFWTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQ0FoQjtBRE9JO0VBQ0ksbUJBQUE7QUNKUjtBREtRO0VBQ0ksaUJBQUE7QUNIWjtBRElZO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNGaEIiLCJmaWxlIjoic3JjL2FwcC90ZWNobm9sb2d5L3RlY2hub2xvZ3kuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bHtcclxuICAgIGxpe1xyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MTVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiNlNWU1ZTU7XHJcbiAgICAgICAgICAgIGNvbG9yOiMzMzMzMzM7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICYuYWN0aXZle1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDojMjE0ZjdhO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5zZWN0aW9ue1xyXG4gICAgJjpudGgtY2hpbGQoMyl7XHJcbiAgICAgICAgYmFja2dyb3VuZDojZTVmMGZhO1xyXG4gICAgICAgIHVse1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoxNXB4O1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsInVsIGxpIGEge1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xuICBjb2xvcjogIzMzMzMzMztcbiAgZGlzcGxheTogYmxvY2s7XG59XG51bCBsaSBhLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMyMTRmN2E7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5zZWN0aW9uOm50aC1jaGlsZCgzKSB7XG4gIGJhY2tncm91bmQ6ICNlNWYwZmE7XG59XG5zZWN0aW9uOm50aC1jaGlsZCgzKSB1bCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuc2VjdGlvbjpudGgtY2hpbGQoMykgdWwgbGkge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcbiAgbWFyZ2luLXRvcDogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/technology/technology.component.ts":
/*!****************************************************!*\
  !*** ./src/app/technology/technology.component.ts ***!
  \****************************************************/
/*! exports provided: TechnologyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologyComponent", function() { return TechnologyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TechnologyComponent = class TechnologyComponent {
    constructor() { }
    ngOnInit() {
    }
};
TechnologyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-technology',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./technology.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/technology/technology.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./technology.component.scss */ "./src/app/technology/technology.component.scss")).default]
    })
], TechnologyComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\github\work\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map