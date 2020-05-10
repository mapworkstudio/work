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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\r\n    <img src=\"assets/images/inner-banner-about.jpg\">\r\n    <div class=\"page-title\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12 center\">\r\n                    <h1>About ARKEDGE</h1>\r\n                    <h6>We value loyalty, creativity and productivity with results...</h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<section class=\"about-tab inner-nav-tab\">\r\n    <div class=\"tab-navigation\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"container\">\r\n                <ul ngbNav #nav=\"ngbNav\" [(activeId)]=\"active\" class=\"nav-tabs\">\r\n                    <li [ngbNavItem]=\"1\">\r\n                        <a ngbNavLink>About Us</a>\r\n                        <ng-template ngbNavContent>\r\n                            <section class=\"note-desc\">\r\n                                <div class=\"container\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-12\">\r\n                                            <p class=\"running-text\">\r\n                                                ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. The organization is making its presence felt on the engineering solution and services, Staffing and IT training circuit. Equipped with cross cultural operating experience; an asset, it drives the organization to deliver nothing but the best.\r\n\r\n\r\n                                            </p>\r\n                                            <p>\r\n                                                Over the years we have built up a solid team of software professionals that come from different backgrounds and enlarge the creative potential of ARKEDGE. The competence that they offer contains a wide range of custom programming skills including the latest and most effective development in Microsoft technologies.\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </section>\r\n                            <section class=\"about-key-diff\">\r\n                                <div class=\"container\">\r\n                                    <div class=\"row\">\r\n\r\n                                        <div class=\"col-md-8 col-lg-8 col-sm-12\">\r\n                                            <h1>Key Differentiators</h1>\r\n                                            <ul>\r\n                                                <li *ngFor=\"let key of keydiff\">\r\n                                                    {{key.list}}\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-md-4 col-lg-4 col-sm-12\">\r\n                                            <img src=\"assets/images/about-support.png\">\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </section>\r\n\r\n\r\n                            <section class=\"about-info\">\r\n                                <div class=\"container\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-lg-8 col-md-8 col-sm-12 v-align\">\r\n                                            <p>Ever-growing demand for Web Application solutions is driven by rapidly changing market conditions and technology progress. To streamline your business, we address those issues with our Internet and Intranet solutions. In addition we also provide you web / animation design services.<br><br>\r\n                                                In addition ARKEDGE specializes in a bunch of IT training services for corporate, institutions and individuals. We do organize corporate training programs for industry officials who find it difficult to mingle their expertise with latest IT tools and IT based technology. We do impart IT training for graduates in multiple discipline including computer application, hard core technology, business administration, and individuals who are in the mid of their management education.\r\n\r\n\r\n                                            </p>\r\n\r\n                                        </div>\r\n                                        <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n                                            <img src=\"assets/images/about-info.jpg\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </section>\r\n\r\n\r\n                            <section class=\"section-info\">\r\n                                <div class=\"container\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-12\">\r\n                                            <p>\r\n                                                Along with the engineering solution and services ARKEDGE is specialized\r\n                                                in helpings client\r\n                                                organizations identify, evaluate, and recruit executives at various\r\n                                                levels. It comprises of\r\n                                                well-qualified group of people having faith in camaraderie and serving\r\n                                                the industry to find the\r\n                                                solutions to various key areas as Staffing, Executive Search and IT\r\n                                                training.\r\n                                                <br><br>\r\n                                                In addition ARKEDGE specializes in a bunch of IT training services for\r\n                                                corporate, institutions and\r\n                                                individuals. We do organize corporate training programs for industry\r\n                                                officials who find it difficult\r\n                                                to mingle their expertise with latest IT tools and IT based technology.\r\n                                                We do impart IT training for\r\n                                                graduates in multiple discipline including computer application, hard\r\n                                                core technology, business\r\n                                                administration, and individuals who are in the mid of their management\r\n                                                education.\r\n                                            </p>\r\n                                        </div>\r\n                                        <div *ngFor=\"let item of solution\"\r\n                                            class=\"col-lg-4 col-md-4 col-sm-12 panel-container\">\r\n                                            <div class=\"panel\">\r\n                                                <div class=\"panel-front {{item.color}}\">\r\n                                                    <div class=\"panel-heading\">\r\n                                                        <div class=\"icon-circle circle-bg\">\r\n                                                            <i class=\"icon icon-medium\">\r\n                                                                <svg focusable=\"false\">\r\n                                                                    <use attr.xlink:href=\"{{item.icon}}\"></use>\r\n                                                                </svg>\r\n                                                            </i>\r\n                                                        </div>\r\n                                                        <h5>{{item.title}}</h5>\r\n                                                    </div>\r\n                                                    <div class=\"panel-body\">\r\n\r\n                                                        <p *ngFor=\"let data of item.list\">{{data.name}}</p>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"panel-back {{item.color}}\">\r\n                                                    <h5>{{item.title}}</h5>\r\n                                                    <p>{{item.description}}</p>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </section>\r\n                        </ng-template>\r\n                    </li>\r\n\r\n                    <li [ngbNavItem]=\"2\">\r\n                        <a ngbNavLink>Why ARKEDGE?</a>\r\n                        <ng-template ngbNavContent>\r\n                            <div class=\"container\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12\">\r\n                                        <p class=\"running-text\">\r\n                                            ARKEDGE is a rapidly growing professionally managed organization with competent and\r\n                                            qualified brass at the helm of the affairs.\r\n                                        </p>\r\n                                        <p>\r\n                                            from different backgrounds\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                           \r\n                        <section class=\"why-us\">\r\n                                <div class=\"container\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12\">\r\n                                        <ul>\r\n                                            <li *ngFor=\"let list of bulletPoint; index as i\">\r\n                                                    {{list.list}}\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                                        <div class=\"wa-info\">\r\n                                        <h2>Vision</h2>\r\n                                        <p>\r\n                                            ARKEDGE was founded with a philosophy that every organization has its own unique set of people, processes, technology, culture, values, skills & vision. We are committed to understand these unique parameters of organizations & customizing our solutions to suit them.\r\n                                            <br><br>\r\n                                            We aim for long term relationship that brings in immense satisfaction and prosperity to both ends. We value loyalty, creativity and productivity with results.\r\n                                        </p>\r\n                                    </div>\r\n                                    </div>\r\n                                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                                        <div class=\"wa-info\">\r\n                                        <h2>Mission</h2>\r\n                                        <p>\r\n                                            Our endeavor is to achieve total customer satisfaction, by providing quality products and services, using simplifying technologies and continually improving processes, through competent employees and business partners.\r\n                                            <br><br>\r\n                                            To be the preferred choice of our customers, employees and partners\r\n                                        </p>\r\n                                    </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12\">\r\n                                    <h1>\r\n                                        Centers of Excellence\r\n                                    </h1>\r\n                                    <p>\r\n                                        We have structured our business operations into six dedicated practice areas. Each practice area operates as a Center of Excellence (CoE).\r\n                                    </p>\r\n                                    <h6>\r\n                                        Key Differentiators\r\n                                    </h6>\r\n                                    \r\n\r\n                                        <ul>\r\n                                            <li *ngFor=\"let list of bulletPoint_2; index as i\">\r\n                                                    {{list.list}}\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12\">\r\n                                    <h1>\r\n                                        Value Initiative\r\n                                    </h1>\r\n                                    <p>\r\n                                        A commitment to quality, learning from the previous successes and mistakes, setting higher benchmarks and generate productive results.\r\n                                    </p>\r\n\r\n                                    <h6>\r\n                                        Exceeding customer expectation\r\n                                    </h6>\r\n                                    <p>\r\n                                        Treating customers as lifetime assets and striving to integrate and partner with customers in creating value.\r\n                                     </p>\r\n\r\n                                     <h6>\r\n                                        Employee Empowerment\r\n                                    </h6>\r\n                                    <p>\r\n                                        Empowering employees at all levels and motivating them to challenge the status quo, to set and achieve ambitious goals for themselves and the company.\r\n                                     </p>\r\n\r\n                                     <h6>\r\n                                        Joy at Work\r\n                                    </h6>\r\n                                    <p>\r\n                                        Providing employees a conducive, challenging environment where creativity is valued, teamwork is encouraged, performances are rewarded and success celebrated.\r\n                                     </p>\r\n\r\n                                     <h6>\r\n                                        Integrity\r\n                                    </h6>\r\n                                    <p>\r\n                                        A commitment to be open, frank, loyal and ethical in our interactions with all our stakeholders.\r\n                                     </p>\r\n                                </div>\r\n                            </div>\r\n                            </div>\r\n                            </section>\r\n\r\n                        </ng-template>\r\n                    </li>\r\n\r\n                   <li [ngbNavItem]=\"3\">\r\n                        <a ngbNavLink>Partner</a>\r\n                        <ng-template ngbNavContent>\r\n                            <div class=\"container\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12\">\r\n                                        <p class=\"running-text\">\r\n                                            ARKEDGE is a rapidly growing professionally managed organization with competent and\r\n                                            qualified brass at the helm of the affairs.\r\n                                        </p>\r\n                                        <p>\r\n                                            from different backgrounds\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <section class=\"partner-info\">\r\n                                    <div class=\"container\">\r\n                                        <div class=\"row\">\r\n                                            <div *ngFor=\"let data of partnerInfo; index as i\" class=\"col-lg-3 col-md-3 col-sm-12\">\r\n                                                <div class=\"panel\" (click)=\"open(content)\">\r\n                                                   <div class=\"panel-body\">\r\n                                                       <a><img src=\"assets/images/logo{{i+1}}.png\"></a>\r\n                                                    </div>\r\n                                                 </div>\r\n                                                 <ng-template #content let-modal>\r\n                                                    <div class=\"modal-header\">\r\n                                                        <h4 class=\"modal-title\">{{data.title}}</h4>\r\n                                                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n                                                        <span aria-hidden=\"true\">&times;</span>\r\n                                                    </button>\r\n                                                    </div>\r\n                                                <div class=\"modal-body\">\r\n                                                    \r\n                                                    <div class=\"panel\">\r\n                                                        <div class=\"panel-header\">\r\n                                                            <img src=\"assets/images/logo{{i+1}}.png\">\r\n                                                         </div>\r\n                                                        <div class=\"panel-body\">\r\n                                                            <p>{{data.desc}}</p>\r\n                                                            <a href=\"{{data.url}}\" target=\"_blank\">{{data.url}}</a>\r\n                                                         </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                              </ng-template>\r\n                                             </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </section>\r\n                             </div>\r\n                        </ng-template>\r\n                    </li>\r\n\r\n                    <li [ngbNavItem]=\"4\">\r\n                        <a ngbNavLink>Leadership</a>\r\n                        <ng-template ngbNavContent>\r\n                            <div class=\"container\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12 col-sm-12 col-md-10 div-center center\">\r\n                                        <p class=\"running-text\">\r\n                                            A great leader's courage to fulfill his vision comes from passion, not position.\r\n                                        </p>\r\n                                        <p>\r\n                                            At ARKEDGE, we all aspire to be tomorrow's leader. Individually we are pathfinders and collectively we are a doer (achiever).\r\n                                            <br>\r\n                                            We are passionate about everything that we do and so do it the best way.\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <section class=\"leader-ship first-child\">\r\n                                <div class=\"container\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12\">\r\n                                        <!-- <span class=\"img-container\">\r\n                                            <img src=\"assets/images/leadership/leader-{{i+1}}.jpg\" align=\"left\">\r\n                                        </span> -->\r\n                                        <p>\r\n                                            <img class=\"div-3\" src=\"assets/images/leadership/person3.png\" align=\"left\">\r\n                                           <span class=\"title-name\">Same Martinez</span><br>\r\n                                            <span class=\"title-info\">Chief Executive Officer & Co-Founder</span><br><br>\r\n                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'\r\n                                           \r\n                                          </p>\r\n                                          <button class=\"btn btn-primary\" (click)=\"open(content)\">Read More</button>\r\n                                          <ng-template #content let-modal>\r\n                                            <div class=\"modal-header\">\r\n                                            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n                                                <span aria-hidden=\"true\">&times;</span>\r\n                                            </button>\r\n                                            </div>\r\n                                        <div class=\"modal-body\">\r\n                                            <p>\r\n                                                <!-- <img class=\"div-3\" src=\"assets/images/leadership/person3.png\" align=\"left\"> -->\r\n                                               <span class=\"title-name\">Same Martinez</span><br>\r\n                                                <span class=\"title-info\">Chief Executive Officer & Co-Founder</span><br><br>\r\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'\r\n                                               \r\n                                              </p>\r\n                                        </div>\r\n                                      </ng-template>\r\n                                        </div>\r\n                                </div>\r\n                                </div>\r\n                            </section>\r\n                                <section class=\"leader-ship\"> \r\n                                <div class=\"container\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12 col-lg-4 col-md-4 div-center center\" *ngFor=\"let leaderlist of leaders; index as i\">\r\n                                        <p>\r\n                                            <img class=\"div-{{i+1}}\" src=\"assets/images/leadership/person{{i+1}}.png\">\r\n                                           <span class=\"title-name\">{{leaderlist.name}}</span><br>\r\n                                            <span class=\"title-info\">{{leaderlist.info}}</span><br><br>\r\n                                            {{leaderlist.desc}}\r\n                                            \r\n                                        </p>\r\n                                        <button class=\"btn btn-primary\" (click)=\"open(content)\">Read More</button>\r\n\r\n                                        <ng-template #content let-modal>\r\n                                            <div class=\"modal-header\">\r\n                                             <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n                                                <span aria-hidden=\"true\">&times;</span>\r\n                                            </button>\r\n                                            </div>\r\n                                        <div class=\"modal-body\">\r\n                                            <p>\r\n                                                <!-- <img class=\"div-{{i+1}}\" src=\"assets/images/leadership/person{{i+1}}.png\"> -->\r\n                                               <span class=\"title-name\">{{leaderlist.name}}</span><br>\r\n                                                <span class=\"title-info\">{{leaderlist.info}}</span><br><br>\r\n                                                {{leaderlist.desc}}\r\n                                                \r\n                                            </p>\r\n                                        </div>\r\n                                      </ng-template>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            </section>\r\n                        </ng-template>\r\n                    </li>  \r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n     <div [ngbNavOutlet]=\"nav\"></div>\r\n   \r\n\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/advancesolution/advancesolution.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/advancesolution/advancesolution.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\r\n    <img src=\"assets/images/inner-banner-advance-solution.jpg\">\r\n    <div class=\"page-title\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12 center\">\r\n                    <h1>Advance solutions</h1>\r\n                    <h6>Technical solution for all industries</h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<section class=\"section-advance-solution\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-lg-9 col-md-9 col-sm-12 div-center center\">\r\n                <p class=\"running-text\">\r\n                    ARKEDGE technologies approaches each business as an individual so\r\n                    that we can provide you with IT solutions that suit your needs.\r\n                    We offer holistic solutions, consisting of different offerings.\r\n                </p>\r\n                <p>\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\r\n                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\r\n                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n                    cillum dolore eu fugiat nulla pariatur.\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-10 div-center\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                        <h2>Digital Transformation</h2>\r\n                        <p>\r\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                            labore et\r\n                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\r\n                            ut aliquip\r\n                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n                            cillum dolore eu\r\n                            fugiat nulla pariatur.\r\n                            <br><br>\r\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                            labore et\r\n                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\r\n                            ut aliquip\r\n                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n                            cillum dolore eu\r\n                            fugiat nulla pariatur.\r\n                        </p>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                        <img src=\"assets/images/advancesoluton/advance-solution-1.png\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<section>\r\n    <div class=\"container\">\r\n\r\n        <div class=\"col-lg-10 div-center\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                    <img src=\"assets/images/advancesoluton/advance-solution-2.png\">\r\n                </div>\r\n\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                    <h2>Digital Innovation</h2>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r\n                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\r\n                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n                        <br><br>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r\n                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\r\n                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n                    </p>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-10 div-center\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                        <h2>Digital Transformation</h2>\r\n                        <p>\r\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                            labore et\r\n                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\r\n                            ut aliquip\r\n                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n                            cillum dolore eu\r\n                            fugiat nulla pariatur.\r\n                            <br><br>\r\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                            labore et\r\n                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\r\n                            ut aliquip\r\n                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n                            cillum dolore eu\r\n                            fugiat nulla pariatur.\r\n                        </p>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                        <img src=\"assets/images/advancesoluton/advance-solution-1.png\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<section>\r\n    <div class=\"container\">\r\n        <div class=\"row info\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                <div class=\"panel\">\r\n                    <div class=\"panel-heading\">\r\n                        <h6>Enterprise Solution</h6>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                            labore et dolore magna aliqua.\r\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                            labore et dolore magna aliqua.\r\n                            <i class=\"icon icon-large\">\r\n                                <svg focusable=\"false\">\r\n                                    <use xlink:href=\"#icon_EnterpriseSol\"></use>\r\n                                </svg>\r\n                            </i>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                <div class=\"panel\">\r\n                    <div class=\"panel-heading\">\r\n                        <h6>Intelligent Process Automation</h6>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                            labore et dolore magna aliqua.\r\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                            labore et dolore magna aliqua.\r\n                            <i class=\"icon icon-large\">\r\n                                <svg focusable=\"false\">\r\n                                    <use xlink:href=\"#icon_Idea\"></use>\r\n                                </svg>\r\n                            </i>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ai/ai.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ai/ai.component.html ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-projectengineering.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n                    <h1>Artificial Intelligence</h1>\n                    <h6>Under Construction</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<section>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <img src=\"assets/images/underconstruction.png\">\n        </div>\n    </div>\n</div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n\r\n<a class=\"scroll-top\" *ngIf=\"isShow\" (click)=\"gotoTop()\">\r\n    <i class=\"icon icon-ex-small\">\r\n        <svg focusable=\"false\">\r\n            <use xlink:href=\"#icon_scrollTop\"></use>\r\n        </svg>\r\n    </i>\r\n</a> \r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/career/career.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/career/career.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-inner-page-header></app-inner-page-header> -->\r\n<div class=\"inner-banner\">\r\n    <img src=\"assets/images/inner-banner-career.jpg\">\r\n    <div class=\"page-title\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12 center\">\r\n        <h1>Career @ Arkedge</h1>\r\n        <h6>come and join us our family...</h6>\r\n    </div></div></div>\r\n    </div>\r\n</div>\r\n<section class=\"section-career\">\r\n    <div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12 col-md-10 div-center\">\r\n        <h6 class=\"center career\">Arkedge Technologies has a very ambitious plan for future and we are looking for energetic, motivated, ambitious team players who relish the challenge of joining a growing business in the field of IT, Resourcing and Training. You will have the opportunity to grow professionally and financially.\r\n        </h6>\r\n        </div>\r\n       <div class=\"col-lg-6 col-md-6 col-sm-12 career-info\">\r\n            <div class=\"panel\">\r\n                    <div class=\"panel-heading\">\r\n                       <h6>How We Hire</h6>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <p>\r\n                            <b>Internal sources</b> <br>\r\n                            Transfer, Promotion\r\n                            <br><br>\r\n                            <b>External sources</b> <br>\r\n                            Employment agencies,<br> Management- Education institutions, <br>Job posting\r\n                        </p>\r\n                    </div>\r\n             </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-6 col-md-6 col-sm-12 career-info\">\r\n            <div class=\"panel\">\r\n                    <div class=\"panel-heading\">\r\n                       <h6>Employee Benefits</h6>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <p>\r\n                            Retirement savings funds (provident and pension funds)<br>\r\n                            Group life insurance benefits<br>\r\n                            Disability insurance <br>\r\n                            Health benefits<br>\r\n                            *Flexi work hours/Work from Home <br>\r\n                            *Paid and unpaid parental leave\r\n                        </p>\r\n                    </div>\r\n             </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12\">\r\n            <h6 class=\"text-wrap\">If you are interested in working in a fast-paced, challenging environment, Below are the Current Openings for open positions.</h6>\r\n\r\n            <table class=\"table table-striped table-bordered\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Job Code</th>\r\n                    <th>Job Title</th>\r\n                    <th>Location</th>\r\n                    <th>Target Date</th>\r\n                    <th>Details</th>\r\n                   </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let data of career\">\r\n                    <td>{{data.jobcode}}</td>\r\n                    <td>{{data.jobtitle}}</td>\r\n                    <td>{{data.location}}</td>\r\n                    <td>{{data.targetDate}}</td>\r\n                    <td><a href=\"assets/arkege.pdf\" download>View Details</a></td>\r\n                  </tr>\r\n                </tbody>\r\n                </table>\r\n\r\n            </div>\r\n\r\n\r\n        <div class=\"col-sm-12 col-md-10 div-center\">\r\n           <form>\r\n            <h2 class=\"center\">Post your profile here...</h2>\r\n                <div class=\"row form-group\">\r\n                    <div class=\"col\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Your Name\" name=\"name\">\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"yourMail\" placeholder=\"Your Mail\" name=\"yourMail\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row form-group\">\r\n                    <div class=\"col\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"phone\" placeholder=\"Phone Number\" name=\"phone\">\r\n                    </div>\r\n                    <div class=\"col custom-file mb-3\">\r\n                        <input type=\"file\" class=\"custom-file-input\" id=\"customFile\" name=\"filename\">\r\n                        <label class=\"custom-file-label\" for=\"customFile\">Attachment</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"subject\" placeholder=\"Subject\" name=\"subject\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" placeholder=\"Message\" rows=\"5\"></textarea>\r\n                </div>\r\n                <button type=\"submit\" class=\"btn btn-primary\">SUBMIT</button>\r\n                <button type=\"submit\" class=\"btn btn-warning\">RESET</button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>    \r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/client/client.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client/client.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-client.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n                    <h1>CLIENT TELE</h1>\n                    <h6>We value loyalty, creativity and productivity with results</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<section class=\"client-info\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div *ngFor=\"let data of clientInfo; index as i\" class=\"col-lg-3 col-md-3 col-sm-12\">\n                <div class=\"panel\" (click)=\"open(content)\">\n                   <div class=\"panel-body\">\n                       <a><img src=\"assets/images/logo{{i+1}}.png\"></a>\n                    </div>\n                 </div>\n                 <ng-template #content let-modal>\n                    <div class=\"modal-header\">\n                        <h4 class=\"modal-title\">{{data.title}}</h4>\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                    </div>\n                <div class=\"modal-body\">\n                    \n                    <div class=\"panel\">\n                        <div class=\"panel-header\">\n                            <img src=\"assets/images/logo{{i+1}}.png\">\n                         </div>\n                        <div class=\"panel-body\">\n                            <p>{{data.desc}}</p>\n                            <a href=\"{{data.url}}\" target=\"_blank\">{{data.url}}</a>\n                         </div>\n                    </div>\n                </div>\n              </ng-template>\n             </div>\n        </div>\n    </div>\n</section>\n\n\n<section class=\"client-speak\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-12 \">\n                <h1>Client Speaks</h1>\n                <p>Ever-growing demand for Web Application solutions is driven by rapidly changing market conditions and\n                    technology progress. To streamline your business, we address those issues with our Internet and\n                    Intranet solutions. In addition we also provide you web / animation design services.</p>\n\n            </div>\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                 <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/zmEG-5zEmPw\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n        </div>\n    </div>\n</section>\n\n\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-inner-page-header></app-inner-page-header> -->\r\n<div class=\"inner-banner\">\r\n    <img src=\"assets/images/inner-banner-contact.jpg\">\r\n    <div class=\"page-title\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12 center\">\r\n                    <h1>We Are Here For You</h1>\r\n                    <h6>Hello. What can we help you with?</h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<section class=\"section-contact\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div *ngFor=\"let data of contactInfo\" class=\"col-lg-4 col-md-4 col-sm-12 contact-emails\">\r\n                <div class=\"panel\">\r\n                    <div class=\"panel-heading\">\r\n                        <h5>{{data.title}}</h5>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <div>\r\n                            <i class=\"icon icon-medium\">\r\n                                <svg focusable=\"false\">\r\n                                    <use attr.xlink:href=\"{{data.icon}}\"></use>\r\n                                </svg>\r\n                            </i>\r\n                        </div>\r\n                        <div>\r\n                            <p>{{data.subtitle}}</p>\r\n                        <a href=\"mailto:{{data.id}}\">{{data.id}}</a>\r\n                        <p>{{data.phone}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-sm-12 col-md-10 div-center\">\r\n                <form>\r\n                    <h1 class=\"center\">Feel free to contact...</h1>\r\n                    <div class=\"row form-group\">\r\n                        <div class=\"col\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Your Name\" name=\"name\">\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"yourMail\" placeholder=\"Your Mail\"\r\n                                name=\"yourMail\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row form-group\">\r\n                        <div class=\"col\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"phone\" placeholder=\"Phone Number\" name=\"phone\">\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"country\" placeholder=\"Country\" name=\"country\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"subject\" placeholder=\"Subject\" name=\"subject\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" placeholder=\"Message\"\r\n                            rows=\"5\"></textarea>\r\n                    </div>\r\n\r\n                    <button type=\"submit\" class=\"btn btn-primary\">SUBMIT</button>\r\n                    <button type=\"submit\" class=\"btn btn-warning\">RESET</button>\r\n                </form>\r\n            </div>\r\n\r\n\r\n            <div *ngFor=\"let data of getTouch; index as i\" class=\"col-lg-4 col-md-4 col-sm-12 contact-address\">\r\n                <div class=\"panel\" (click)=\"changeMap(data.subtitle)\" \r\n                [ngClass]=\"{'active' : activMap === 'data.subtitle'}\">\r\n                    <div class=\"panel-heading\">\r\n                        <img src={{data.img}}-{{i+1}}.jpg alt=\"{{data.subtitle}}\">\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <h5>{{data.subtitle}}</h5>\r\n                        <p>{{data.street_1}}</p>\r\n                        <p>{{data.street_2}}</p>\r\n                        <p>{{data.state}}</p>\r\n                        <p>{{data.contact}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n   <div class=\"mapouter\">\r\n        <div class=\"gmap_canvas\">\r\n            <iframe *ngIf=\"mumbai\"\r\n                src=\"https://maps.google.com/maps?q=Arkedge%20Technologies%20Pvt.%20Ltd%20Msthal%20Height%2C%20Next%20to%20Marwah%20Estate%2C%20Saki%20Naka%2C%20Andheri%20(E)%2C%20Mumbai%2C%20Maharashtra%20400072&t=&z=13&ie=UTF8&iwloc=&output=embed\"\r\n                frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\">\r\n            </iframe>\r\n            <iframe *ngIf=\"corporate\"\r\n                src=\"https://maps.google.com/maps?q=Arkedge%20Technologies%20Pvt%20Ltd.%20Ambarnath%20(W)&t=&z=13&ie=UTF8&iwloc=&output=embed\"\r\n                frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\">\r\n            </iframe>\r\n            <iframe *ngIf=\"thane\"\r\n                src=\"https://maps.google.com/maps?q=Arkedge%20Technologies%20Pvt%20Ltd.%20Shangvi%20Complex%2C%20Mira%20Road%2C%20Thane%20Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed\"\r\n                frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\">\r\n            </iframe>\r\n        </div>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/datamgmt/datamgmt.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/datamgmt/datamgmt.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-projectengineering.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n                    <h1>DATA MANAGEMENT</h1>\n                    <h6> {{tabName}}</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<section class=\"manage-service-tab inner-nav-tab\">\n    <div class=\"tab-navigation\">\n        <div class=\"col-sm-12\">\n            <div class=\"container\">\n                <ul ngbNav #nav=\"ngbNav\" [activeId]=\"tabIndex\" class=\"nav-tabs\">\n                    <li [ngbNavItem]=\"1\">\n                        <a ngbNavLink (click)=\"title(1)\">Cleanse Dataset</a>\n                        <ng-template ngbNavContent>\n                            <section class=\"datamgmt\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12\">\n                                            <p class=\"running-text\">\n                                                The data cleansing is a process of correcting the errors lies in the\n                                                records of a dataset. This error in the records of the dataset may occur\n                                                due to a deliberate attempt or an inadvertent occurrence including\n                                                incorrect data entry, inaccurate transfer of data from one system to\n                                                another, and inappropriate file handling, in structuring the data and\n                                                deleting the corrupted data. These errors in the records make the data\n                                                inaccurate and inappropriate for any further use.\n                                            </p>\n                                            <p>\n                                                The data cleansing process attempts to bring the data back to its\n                                                original form, or a form where the data can be processed, analyzed and\n                                                used by managers in decision making processes. The cleansing of data not\n                                                only includes the rectification of errors but also includes\n                                                normalization and standardization of the data.\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </section>\n                        </ng-template>\n                    </li>\n                    <li [ngbNavItem]=\"2\">\n                        <a ngbNavLink (click)=\"title(2)\">Data Mapping & Conversion</a>\n                        <ng-template ngbNavContent>\n                            <section class=\"datamgmt\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12\">\n                                            <p class=\"running-text v-flex\">\n\n                                                Ensuring your data is correct and accurate is an important task in\n                                                preparing to go live with a new database and Enterprise application. We\n                                                understand the effort involved in data entry. You do not have to\n                                                re-enter all the information into the new application. We provide data\n                                                mapping and conversion services in order to simplify the process of\n                                                moving your current data from any legacy system into the new database. A\n                                                script is used to convert the historical or static data. Once the data\n                                                is converted, it is tested for completion and integrity.\n                                                <img src=\"assets/images/managservice/app-dev-met.jpg\" align=\"right\">\n                                            </p>\n                                            <p>\n                                                The data cleansing process attempts to bring the data back to its\n                                                original form, or a form where the data can be processed, analyzed and\n                                                used by managers in decision making processes. The cleansing of data not\n                                                only includes the rectification of errors but also includes\n                                                normalization and standardization of the data.\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </section>\n                        </ng-template>\n                    </li>\n\n                    <li [ngbNavItem]=\"3\">\n                        <a ngbNavLink (click)=\"title(3)\">Data Migration & Consolidation</a>\n                        <ng-template ngbNavContent>\n                            <section class=\"datamgmt\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12\">\n                                            <p class=\"running-text v-flex\">\n\n                                                Data Migration and consolidation are often the most understood and\n                                                underestimated process in any implementation. ARKEDGE migration services\n                                                is a combination of packaged migration frameworks combined with custom\n                                                developed utilities (custom extractors, filters, translators, reports,\n                                                etc) that allow the accurate and efficient migration of data from third\n                                                party systems. This service is aimed at heterogeneous system\n                                                environments.\n                                                <img src=\"assets/images/managservice/app-dev-met.jpg\" align=\"right\">\n                                            </p>\n                                            <p>\n                                                ARKEDGE approaches a project with a mix of manual and tool based\n                                                techniques for migration, based on various factors. Wherever technically\n                                                feasible, a direct approach is utilized, using the standard spreadsheet\n                                                templates and the up-loader, thereby eliminating the converter process.\n                                                The migration methodology consists of phases including Requirements,\n                                                Planning, Designing, Deployment, Testing, and Migration.\n                                                <br><br>\n                                                We have built specific expertise in Data Migration in ARKEDGE. We have\n                                                innovatively designed and created templates, tools, processes and\n                                                methodologies to support various kinds of consolidation and migration\n                                                activities in these technologies.\n                                                <br><br>\n                                                ETL (Extract Transform Load) techniques are used to merge, purge,\n                                                cleanse, match and de-dupe the data.\n                                            </p>\n                                        </div>\n                                        <div class=\"col-sm-12\">\n                                            <h6>We carry great experience and expertise in below practice areas:</h6>\n                                            <ul class=\"info-bar\">\n                                                <li *ngFor=\"let item of dataMigration\">\n                                                    {{item.list}}\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </div>\n                            </section>\n                        </ng-template>\n                    </li>\n\n                    <li [ngbNavItem]=\"4\">\n                        <a ngbNavLink (click)=\"title(4)\">Spend Analysis</a>\n                        <ng-template ngbNavContent>\n                            <section class=\"datamgmt\">\n                                <div class=\"container\">\n                                    <div class=\"row\"> \n                                        <div class=\"col-sm-12\">\n                                            <p class=\"running-text v-flex\">\n\n                                                Spend data management has emerged as a lead strategy that enterprises\n                                                will use to drive continuous improvements in supply chain management.\n                                                Despite the immense value that well managed spend has been proven to\n                                                deliver, very few organizations have a structured methodology for\n                                                analyzing spend data and using it as an effective decision support tool.\n                                               </p>\n                                            <p>\n                                                <img src=\"assets/images/managservice/app-dev-met.jpg\" align=\"right\">\n                                                Most companies have multiple enterprise transaction systems and lack the\n                                                tools and processes to properly aggregate, cleanse, normalize and\n                                                monitor their spend with multiple vendors at the line item level.\n                                                <br><br>\n                                                Though some companies have analytical abilities built into enterprise\n                                                software systems, they fail to generate the intelligence that is sought\n                                                by executive management due to tools being limited in their\n                                                intelligence, as compared to an actual Analyst.\n                                                <br><br>\n                                                The services assist customers in getting insights on their direct and\n                                                indirect spending, monitor the performance of suppliers and identify\n                                                opportunities to consolidate spending or reduce costs of procurement.\n                                                <br><br>\n                                                Arkedge offers a solution that helps clients attain full visibility into\n                                                their spend; better understanding where savings opportunities exist, and\n                                                how to achieve the best savings.\n                                               \n                                            \n                                            </p>\n                                        </div>\n                                        \n                                    </div>\n                                        <div class=\"row spend-analysis\"> \n                                        <div class=\"col-sm-12\">\n                                            <h2>Arkedge eSpend Solution</h2>\n                                            <p>\n                                                Arkedge's spend analysis solution provides a total solution to companies\n                                                that are looking to consolidate spend data from multiple systems,\n                                                transform data quality and analyze transactions, to provide actionable\n                                                results. Our spend analysis offering combines our commodity expertise\n                                                with automated technology and provides a comprehensive view of your\n                                                organization's spend. This \"bottom-up\" approach includes:</p>\n                                            <h6>Requirement review and finalization</h6>\n                                            <ul class=\"info-bar\">\n                                                <li *ngFor=\"let item of espendRequirement\">\n                                                    {{item.list}}\n                                                </li>\n                                            </ul>\n                                        </div>\n\n                                        <div class=\"col-sm-12\">\n                                            <h2>Data Collection and Consolidation</h2>\n                                           <ul class=\"info-bar\">\n                                                <li *ngFor=\"let item of dataCollection\">\n                                                    {{item.list}}\n                                                </li>\n                                            </ul>\n                                        </div>\n\n                                        <div class=\"col-sm-12\">\n                                            <h2>Data Cleansing, Normalization and Clustering</h2>\n                                            <ul class=\"info-bar\">\n                                                <li *ngFor=\"let item of dataCleansing\">\n                                                    {{item.list}}\n                                                </li>\n                                            </ul>\n                                        </div>\n\n                                        <div class=\"col-sm-12\">\n                                            <h2>Classification, Enrichment and Review</h2>\n                                            <ul class=\"info-bar\">\n                                                <li *ngFor=\"let item of classification\">\n                                                    {{item.list}}\n                                                </li>\n                                            </ul>\n                                        </div>\n\n                                        <div class=\"col-sm-12\">\n                                            <h2>Advanced Data Analytics Reports</h2>\n                                            <ul class=\"info-bar\">\n                                                <li *ngFor=\"let item of advancedData\">\n                                                    {{item.list}}\n                                                </li>\n                                            </ul>\n                                        </div>\n\n                                        <div class=\"col-sm-12\">\n                                            <p>\n                                                Arkedge eSpend can accept data from various file type, i.e., Text, MS Excel, XML, MS Access etc. Our analyst's upload, review, accept, reject, validate, normalize, cleanse, cluster classify, and analyze the data through eSpend analysis tool.\n                                                <br><br>\n                                                Reports such as spend by business unit, geography, reporting period, category, vendor, UNSPSC code, language, price variance, etc. are available within the tool. A detailed opportunity assessment is also performed to provide insights to clients on where and how to achieve cost savings across their entire spend.</p>\n                                            </div>\n\n                                            <div class=\"col-sm-12\">\n                                                <h2>Benefits of Spend Analytics</h2>\n                                                <ul class=\"info-bar\">\n                                                    <li *ngFor=\"let item of spendAnalytics\">\n                                                        {{item.list}}\n                                                    </li>\n                                                </ul>\n                                                <ul class=\"info-bar obtain-visibility\">\n                                                    <li *ngFor=\"let item of obtainvisibility\">\n                                                        {{item.list}}\n                                                    </li>\n                                                </ul>\n                                            </div>\n                                    </div>\n                                </div>\n                            </section>\n                        </ng-template>\n                    </li>\n\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div [ngbNavOutlet]=\"nav\"></div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-5 col-md-6 col-sm-12 copyright-note\">\r\n                <div class=\"logo\">\r\n                    <i class=\"icon icon-small\">\r\n                        <svg focusable=\"false\">\r\n                            <use xlink:href=\"#icon_logoFlat\"></use>\r\n                        </svg>\r\n                      </i>\r\n                </div>\r\n                <p>\r\n                    ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. The organization is making its presence felt on the engineering solution and services, Staffing and IT training circuit. Equipped with cross cultural operating experience; an asset, it drives the organization to deliver nothing but the best.\r\n                </p>\r\n\r\n                <p class=\"copyright\">\r\n                    <span>All rights reserved by Arkedge Technologies Pvt. Ltd.</span>\r\n                </p>\r\n            </div>\r\n\r\n            <div class=\"col-lg-2 col-md-3 col-sm-12\">\r\n                <h5>Quick Links</h5>\r\n                <ul class=\"footer-li\">\r\n                    <li>\r\n                        <a routerLink=\"OurProduct\" routerLinkActive=\"active\" skipLocationChange=true>Our\r\n                            Product</a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"Advancesolution\" routerLinkActive=\"active\" skipLocationChange=true>Advance\r\n                            Solutions</a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"ManagedServices\" routerLinkActive=\"active\" skipLocationChange=true>Managed Services</a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"Company\" routerLinkActive=\"active\" skipLocationChange=true>COMPANY</a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"Career\" routerLinkActive=\"active\" skipLocationChange=true>CAREER</a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"Contactus\" routerLinkActive=\"active\" skipLocationChange=true>CONTACT US</a>\r\n                    </li>\r\n                </ul>\r\n                <div class=\"social-net\">\r\n\r\n                    <ul>\r\n                        <li><a href=\"https://www.facebook.com\" target=\"_blank\">\r\n                                <i class=\"icon icon-ex-small\">\r\n                                    <svg focusable=\"false\">\r\n                                        <use xlink:href=\"#icon_facebook\"></use>\r\n                                    </svg>\r\n                                </i>\r\n                            </a>\r\n                        </li>\r\n                        <li><a href=\"https://www.instagram.com\" target=\"_blank\">\r\n                                <i class=\"icon icon-ex-small\">\r\n                                    <svg focusable=\"false\">\r\n                                        <use xlink:href=\"#icon_instagram\"></use>\r\n                                    </svg>\r\n                                </i>\r\n                            </a>\r\n                        </li>\r\n                        <li><a href=\"https://www.twitter.com\" target=\"_blank\">\r\n                                <i class=\"icon icon-ex-small\">\r\n                                    <svg focusable=\"false\">\r\n                                        <use xlink:href=\"#icon_twitter\"></use>\r\n                                    </svg>\r\n                                </i>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"col-lg-5 col-md-3 col-sm-12 map\">\r\n                    <img src=\"assets/images/map.png\" alt=\"Map\">\r\n             </div>\r\n        </div>\r\n    </div>\r\n    <!-- /.container -->\r\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n<div class=\"container\">\r\n    <a class=\"navbar-brand\" routerLink=\"home\" skipLocationChange=true>\r\n      <i class=\"icon icon-small\">\r\n        <svg focusable=\"false\">\r\n          <use xlink:href=\"#icon_logoFlat\"></use>\r\n        </svg>\r\n      </i>\r\n      <div class=\"company-info\">\r\n        <span class=\"company-name\">ARKEDGE</span>\r\n        <span class=\"company-type\">TECHNOLOGIES</span>\r\n      </div>\r\n    </a>\r\n    <ul class=\"navbar-nav-list\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"OurProduct\" routerLinkActive=\"active\" skipLocationChange=true>Our\r\n          Product</a>\r\n      </li>\r\n\r\n     \r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"Advancesolution\" routerLinkActive=\"active\" skipLocationChange=true>Advance\r\n          Solutions</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n      <a class=\"nav-link\" routerLink=\"ai\" routerLinkActive=\"active\" skipLocationChange=true>artificial intelligence</a>\r\n    </li>\r\n    \r\n      <li class=\"nav-item nav-dropdown-list\">\r\n        <a class=\"nav-link\">Managed Services</a>\r\n        <ul class=\"sub-nav\">\r\n          <li class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-8 col-md-8 col-sm-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngFor=\"let list of managedService\">\r\n                     <h6> {{list.name | createSpace}}</h6>\r\n                      <li class=\"inner-list\" *ngFor=\"let inlist of list.managedServiceList; index as i\">\r\n                        <a routerLink=\"{{list.name}}\" routerLinkActive=\"active\" skipLocationChange=true (click)=\"getUrl(i+1, inlist.name);\">{{inlist.name | createSpace}}</a>\r\n                      </li>\r\n              </div>\r\n  </div>\r\n  </div>\r\n  <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n         <a class=\"nav-link\" routerLink=\"Technology\" routerLinkActive=\"active\" skipLocationChange=true>\r\n          <img src=\"assets/images/inner-banner-technology.jpg\">\r\n            Technology\r\n          </a>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n          <a class=\"nav-link\" routerLink=\"Industries\" routerLinkActive=\"active\" skipLocationChange=true>\r\n          <img src=\"assets/images/inner-banner-industries.jpg\">\r\n            Industries\r\n          </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  </div>\r\n  </li>\r\n  </ul>\r\n  </li>\r\n\r\n  <!-- <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"Company\" routerLinkActive=\"active\" skipLocationChange=true>COMPANY</a>\r\n  </li> -->\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link contactUs\" routerLink=\"Contactus\" routerLinkActive=\"active\" skipLocationChange=true>\r\n      <i class=\"icon icon-ex-small\">\r\n        <svg focusable=\"false\">\r\n          <use xlink:href=\"#icon_contactUs\"></use>\r\n        </svg>\r\n      </i>\r\n    </a>\r\n  </li>\r\n  <li class=\"nav-item tele-no email\">\r\n    <a class=\"nav-link\" href=\"mailto:info@arkedge.com\">\r\n      <i class=\"icon icon-ex-small\">\r\n        <svg focusable=\"false\">\r\n          <use xlink:href=\"#icon_Email\"></use>\r\n        </svg>\r\n      </i>\r\n    </a>\r\n  </li>\r\n  <li class=\"nav-item tele-no\">\r\n    <a class=\"nav-link\">\r\n      <i class=\"icon icon-ex-small\">\r\n        <svg focusable=\"false\">\r\n          <use xlink:href=\"#icon_phone\"></use>\r\n        </svg>\r\n      </i>\r\n      +91 9029290808\r\n    </a>\r\n  </li>\r\n  <li class=\"nav-item quick-link\">\r\n    <a class=\"nav-link\" (click)=\"slideToggel()\">\r\n      <i class=\"icon icon-ex-small\">\r\n        <svg focusable=\"false\">\r\n          <use xlink:href=\"#icon_menu\"></use>\r\n        </svg>\r\n      </i>\r\n    </a>\r\n  </li>\r\n  </ul>\r\n</div>\r\n</nav>\r\n\r\n<div class=\"slider-menu\" [ngClass]=\"isOpen ? '' : 'active'\">\r\n  <div class=\"slider-menu-header\">\r\n  <a class=\"close-slide\" (click)=\"slideToggel()\">\r\n    <i class=\"icon icon-ex-small\">\r\n      <svg focusable=\"false\">\r\n        <use xlink:href=\"#icon_close\"></use>\r\n      </svg>\r\n    </i>\r\n  </a>\r\n\r\n  <a class=\"navbar-brand\">\r\n    <i class=\"icon icon-small\">\r\n      <svg focusable=\"false\">\r\n        <use xlink:href=\"#icon_logo_color\"></use>\r\n      </svg>\r\n    </i>\r\n    <div>\r\n      <span class=\"company-name\">ARKEDGE</span>\r\n      <span class=\"company-type\">TECHNOLOGIES</span>\r\n    </div>\r\n  </a>\r\n</div>\r\n  <ul>\r\n    <li *ngFor=\"let item of list; index as i\" class=\"menu-list\">\r\n      <a (click)=\"slideToggel()\" routerLink=\"{{item.name}}\" routerLinkActive=\"active\" skipLocationChange=true>{{item.name | createSpace}}</a>\r\n    </li>\r\n  </ul>\r\n  <div class=\"slider-footer-contact\">\r\n    <a class=\"nav-link\" href=\"mailto:info@arkedge.com\">\r\n      <i class=\"icon icon-ex-small\">\r\n        <svg focusable=\"false\">\r\n          <use xlink:href=\"#icon_Email\"></use>\r\n        </svg>\r\n      </i>\r\n      info@arkedge.com\r\n    </a>\r\n  \r\n    <a class=\"nav-link\">\r\n      <i class=\"icon icon-ex-small\">\r\n        <svg focusable=\"false\">\r\n          <use xlink:href=\"#icon_phone\"></use>\r\n        </svg>\r\n      </i>\r\n      321-321-6544\r\n    </a>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"overlay\" [ngClass]=\"isOpen ? '' : 'active'\" (click)=\"slideToggel()\">\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-banner\">\r\n    <ngb-carousel #carousel interval=\"5000\" [showNavigationArrows]=\"showNavigationArrows\" [pauseOnHover]=\"pauseOnHover\"\r\n        (slide)=\"onSlide($event)\">\r\n        <ng-template ngbSlide *ngFor=\"let info of banner; index as i\">\r\n            <div class=\"container\">\r\n                <div class=\"carousel-caption\">\r\n                    <h1>{{info.title}}</h1>\r\n                    <h1>{{info.title_2}}</h1>\r\n                    <h3>{{info.description}}</h3>\r\n                    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"lernmore();\">LEARN MORE</button>\r\n                    <button type=\"submit\" class=\"btn btn-warning\" (click)=\"btnClick();\">CONTACT US</button>\r\n                </div>\r\n                <div class=\"info-img\">\r\n                    <img src=\"assets/images/banner-{{i+1}}-info.png\" alt=\"My image {{i + 1}} description\">\r\n                </div>\r\n            </div>\r\n            <div class=\"picsum-img-wrapper\">\r\n                <img src=\"assets/images/banner-1.jpg\" alt=\"My image {{i + 1}} description\">\r\n            </div>\r\n\r\n        </ng-template>\r\n    </ngb-carousel>\r\n</div>\r\n<section class=\"section-info\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 center\">\r\n                <h1>Expand Your Business Through a <span class=\"heading-highlight\">Strong Virtual Presence</span></h1>\r\n                <h6>\r\n                    <b>The ultimate objective behind our every move is to give our customers utmost satisfaction with\r\n                        our\r\n                        quality services and support.</b><br>\r\n                    We try the best possible way out to provide our customers with top-notch services and at affordable\r\n                    rates. <br>So, give us a Oppurtunity to serve you !\r\n                </h6>\r\n            </div>\r\n            <div *ngFor=\"let item of solution\" class=\"col-lg-4 col-md-4 col-sm-12 panel-container\">\r\n                <div class=\"panel\">\r\n                    <div class=\"panel-front {{item.color}}\">\r\n                        <div class=\"panel-heading\">\r\n                            <div class=\"icon-circle circle-bg\">\r\n                                <i class=\"icon icon-medium\">\r\n                                    <svg focusable=\"false\">\r\n                                        <use attr.xlink:href=\"{{item.icon}}\"></use>\r\n                                    </svg>\r\n                                </i>\r\n                            </div>\r\n                            <h5>{{item.title}}</h5>\r\n                        </div>\r\n                        <div class=\"panel-body\">\r\n\r\n                            <p *ngFor=\"let data of item.list\">{{data.name}}</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"panel-back {{item.color}}\">\r\n                        <h5>{{item.title}}</h5>\r\n                        <p>{{item.description}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<section class=\"section-our-products\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 center\">\r\n                <h1>OUR <span class=\"heading-highlight\">PRODUCTS</span></h1>\r\n            </div>\r\n            <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\" [config]=\"slideConfig2\">\r\n                <div ngxSlickItem class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-6 col-md-6 col-sm-12 v-flex\">\r\n                                <img src=\"assets/images/01.png\">\r\n                            </div>\r\n                            <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                                <h5>Product Name 1</h5>\r\n                                <p>\r\n                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\r\n                                    incididunt ut\r\n                                    labore\r\n                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.\r\n                                </p>\r\n                                <ul>\r\n                                    <li>\r\n                                        Robust version design\r\n                                    </li>\r\n                                    <li>\r\n                                        Cross-platform architecture\r\n                                    </li>\r\n                                    <li>\r\n                                        Wide variety of integration requirements\r\n                                    </li>\r\n                                </ul>\r\n                                <button type=\"submit\" class=\"btn btn-primary\" (click)=\"btnOurProduct();\">KNOW MORE</button>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div ngxSlickItem class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-6 col-md-6 col-sm-12 v-flex\">\r\n                                <img src=\"assets/images/01.png\">\r\n                            </div>\r\n                            <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                                <h5>Product Name 2</h5>\r\n                                <p>\r\n                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\r\n                                    incididunt ut\r\n                                    labore\r\n                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.\r\n                                </p>\r\n                                <ul>\r\n                                    <li>\r\n                                        Robust version design\r\n                                    </li>\r\n                                    <li>\r\n                                        Cross-platform architecture\r\n                                    </li>\r\n                                    <li>\r\n                                        Wide variety of integration requirements\r\n                                    </li>\r\n                                </ul>\r\n                                <button type=\"submit\" class=\"btn btn-primary\" (click)=\"btnOurProduct();\">KNOW MORE</button>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div ngxSlickItem class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-6 col-md-6 col-sm-12 v-flex\">\r\n                                <img src=\"assets/images/01.png\">\r\n                            </div>\r\n                            <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                                <h5>Product Name 3</h5>\r\n                                <p>\r\n                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\r\n                                    incididunt ut\r\n                                    labore\r\n                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.\r\n                                </p>\r\n                                <ul>\r\n                                    <li>\r\n                                        Robust version design\r\n                                    </li>\r\n                                    <li>\r\n                                        Cross-platform architecture\r\n                                    </li>\r\n                                    <li>\r\n                                        Wide variety of integration requirements\r\n                                    </li>\r\n                                </ul>\r\n                                <button type=\"submit\" class=\"btn btn-primary\" (click)=\"btnOurProduct();\">KNOW MORE</button>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </ngx-slick-carousel>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"section-sevices\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 center\">\r\n                <h1>INDUSTRIES <span class=\"heading-highlight\">WE SERVE</span></h1>\r\n                <h6>\r\n                    <b>We ensure excellence in service through understanding of our client's business and their unique\r\n                        requirements.</b><br>\r\n\r\n                    Due to our close relationships and constant interactions with clients,<br>\r\n\r\n                    we have developed solid understanding and insight in our focus industries that include:\r\n                </h6>\r\n            </div>\r\n\r\n            <div *ngFor=\"let item of sevices\" class=\"col-lg-4 col-md-4 col-sm-12\">\r\n                <div class=\"panel\">\r\n                    <div class=\"panel-heading\">\r\n                        <div class=\"icon-circle {{item.color}}\">\r\n                            <i class=\"icon icon-medium\">\r\n                                <svg focusable=\"false\">\r\n                                    <use attr.xlink:href=\"{{item.icon}}\"></use>\r\n                                </svg>\r\n                            </i>\r\n                        </div>\r\n                        <h5>{{item.title}}</h5>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <p>{{item.description}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"section-projects\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 center\">\r\n                <h1>OUR RECENT<span class=\"heading-highlight\"> SOLUTIONS</span></h1>\r\n                <h6>\r\n                    <b>We bring powerful TOOLS for enhance your productivity.</b><br>\r\n\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.<br> Proin\r\n                    gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.\r\n                </h6>\r\n            </div>\r\n        </div>\r\n        <div class=\"project-grid\">\r\n            <li *ngFor=\"let info of projects; index as i\" class=\"p2\">\r\n                <a>\r\n                    <figure>\r\n                        <img src=\"assets/images/project/project-{{i + 1}}.jpg\" alt=\"Experience\">\r\n                        <div class=\"show-more-overlay\"></div>  \r\n                        <figcaption>\r\n                            <h2 class=\"show_more-title\">{{info.title}}</h2>\r\n                            <p class=\"show_more-desc\">\r\n                                {{info.description}}\r\n                            </p>\r\n                            <button *ngIf=\"i === 0\" type=\"submit\" class=\"btn btn-primary\">LEARN MORE</button>\r\n                        </figcaption>\r\n                    </figure>\r\n                </a>\r\n            </li>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<div class=\"clear-float\"></div>\r\n<section class=\"clients\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 center\">\r\n                <h1>HAPPY <span class=\"heading-highlight\">CLIENTS</span></h1>\r\n                <h6>\r\n                    consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus\r\n                    accumsan et viverra justo commodo. <br>Proin sodales pulvinar tempor.lacus accumsan et viverra justo\r\n                    commodo. Proin sodales pulvinar tempor.</h6>\r\n            </div>\r\n\r\n            <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\" [config]=\"slideConfig\">\r\n                <div ngxSlickItem *ngFor=\"let client of client; index as i\" class=\"slide col-lg-3 col-md-3 col-sm-12\">\r\n                    <img src=\"assets/images/logo{{i+1}}.png\" alt=\"\" width=\"100%\">\r\n                </div>\r\n            </ngx-slick-carousel>\r\n\r\n            <!-- <div *ngFor=\"let client of client; index as i\" class=\"col-lg-3 col-md-3 col-sm-12\">\r\n                <img src=\"{{client.img}}-{{i+1}}.jpg\" alt=\"client\">\r\n            </div> -->\r\n\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"testimonials\">\r\n    <img src=\"assets/images/testimonials.jpg\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 center\">\r\n                <h1>TESTIMONIALS</h1>\r\n                <ngb-carousel #carousel interval=\"5000\" [showNavigationArrows]=\"showNavigationArrows\"\r\n                    [pauseOnHover]=\"pauseOnHover\" (slide)=\"onSlide($event)\">\r\n                    <ng-template ngbSlide *ngFor=\"let info of testimonials; index as i\">\r\n                        <p>\r\n                            {{info.clientView_1}}\r\n                        </p>\r\n                        <p>\r\n                            {{info.clientView_2}}\r\n                        </p>\r\n                        <p>\r\n                            {{info.clientView_3}}\r\n                        </p>\r\n                        <p>\r\n                            - {{info.clientName}}\r\n                        </p>\r\n\r\n                    </ng-template>\r\n                </ngb-carousel>\r\n\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</section>\r\n<section class=\"contact-info\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                <h1>WHAT SET US <span class=\"heading-highlight\">APART</span></h1>\r\n                <p class=\"set-part\">\r\n                    We ensure excellence in service through understanding of our client's business and their unique\r\n                    requirements.\r\n\r\n                    Due to our close relationships and constant interactions with clients,\r\n\r\n                    we have developed solid understanding and insight in our focus industries that include:\r\n                </p>\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                        <div>\r\n                            <h6>Address</h6>\r\n                            <p>703, Wing \"B\", Galaxy L.X.APT.<br>\r\n\r\n                                Navre Park, Ambarnath (W),<br>\r\n\r\n                                Thane-421501, Maharashtra,<br>\r\n\r\n                                INDIA</p>\r\n\r\n                            <h6>Contact</h6>\r\n                            <p>\r\n                                <a class=\"email-link\" href=\"mailto:info@arkedge.com\">info@arkedge.com</a><br>\r\n                                Calling : +91 9029290808\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                        <div>\r\n                            <h6>Working Hours</h6>\r\n                            <p>Monday To Friday: 11AM - 8PM<br>\r\n\r\n                                Week-End: 11 AM - 2PM</p>\r\n\r\n\r\n                            <h6>Socials</h6>\r\n                            <div class=\"social-net\">\r\n\r\n                                <ul>\r\n                                    <li><a href=\"https://www.facebook.com\" target=\"_blank\">\r\n                                            <i class=\"icon icon-ex-small\">\r\n                                                <svg focusable=\"false\">\r\n                                                    <use xlink:href=\"#icon_facebook\"></use>\r\n                                                </svg>\r\n                                            </i>\r\n                                            <span>Facebook</span>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li><a href=\"https://www.instagram.com\" target=\"_blank\">\r\n                                            <i class=\"icon icon-ex-small\">\r\n                                                <svg focusable=\"false\">\r\n                                                    <use xlink:href=\"#icon_instagram\"></use>\r\n                                                </svg>\r\n                                            </i>\r\n                                            <span>Tweeter</span>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li><a href=\"https://www.twitter.com\" target=\"_blank\">\r\n                                            <i class=\"icon icon-ex-small\">\r\n                                                <svg focusable=\"false\">\r\n                                                    <use xlink:href=\"#icon_twitter\"></use>\r\n                                                </svg>\r\n                                            </i>\r\n                                            <span>Instragram</span>\r\n                                        </a>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                <h1>GET IN <span class=\"heading-highlight\">TOUCH</span></h1>\r\n                <form>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Your Name\" name=\"name\">\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"row form-group\">\r\n                        <div class=\"col\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Your Mail\" name=\"yourMail\">\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"phone\" placeholder=\"Phone Number\" name=\"phone\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"subject\" placeholder=\"Subject\" name=\"subject\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"4\"></textarea>\r\n                    </div>\r\n\r\n                    <button type=\"submit\" class=\"btn btn-primary\">SUBMIT</button>\r\n                    <button type=\"submit\" class=\"btn btn-warning\">RESET</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/industries/industries.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/industries/industries.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\r\n    <img src=\"assets/images/inner-banner-industries.jpg\">\r\n    <div class=\"page-title\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12 center\">\r\n                    <h1>Industries</h1>\r\n                    <h6>Transforming industries with smarter ways</h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<section class=\"section-advance-solution\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-9 col-md-9 col-sm-12 div-center center\">\r\n                <p class=\"running-text\">\r\n                    ARKEDGE technologies approaches each business as an individual so\r\n                    that we can provide you with IT solutions that suit your needs.\r\n                    We offer holistic solutions, consisting of different offerings.\r\n                </p>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"section-industy-info\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <!-- <div *ngFor=\"let data of industryInfo\" class=\"col-lg-4 col-md-4 col-sm-12 col\">\r\n                <div class=\"panel\">\r\n                    <div class=\"panel-heading\">\r\n                        <i class=\"icon icon-large\">\r\n                            <svg focusable=\"false\">\r\n                                <use attr.xlink:href=\"#{{data.icon}}\"></use>\r\n                            </svg>\r\n                        </i>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <p>{{data.title}}</p>\r\n                    </div>\r\n                </div>\r\n            </div> -->\r\n\r\n            <div *ngFor=\"let item of sevices\" class=\"col-lg-4 col-md-4 col-sm-12 section-sevices center\">\r\n                <div class=\"panel\">\r\n                    <div class=\"panel-heading\">\r\n                        <div class=\"icon-circle {{item.color}}\">\r\n                            <i class=\"icon icon-medium\">\r\n                                <svg focusable=\"false\">\r\n                                    <use attr.xlink:href=\"{{item.icon}}\"></use>\r\n                                </svg>\r\n                            </i>\r\n                        </div>\r\n                        <h5>{{item.title}}</h5>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <p>{{item.description}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/managedservice/managedservice.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/managedservice/managedservice.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\r\n    <img src=\"assets/images/inner-banner-manage-service.jpg\">\r\n    <div class=\"page-title\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12 center\">\r\n                    <h1>Managed Services</h1>\r\n                    <h6>Softwares : Data Life-cycle Management : IT Staffing & Training</h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<section class=\"section-manage-service\">\r\n    <div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n        <h6 class=\"center career\">\r\n            ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. The organization is making its presence felt on the engineering solution and services, Staffing and IT training circuit. Equipped with cross cultural operating experience; an asset, it drives the organization to deliver nothing but the best.        </h6>\r\n        \r\n            <h5>\r\n                Arkedge Technologies provide following services\r\n            </h5>\r\n        \r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n         <ul>\r\n               <li>\r\n                Product Engineering\r\n               </li>\r\n               <li>\r\n                Application Development\r\n                </li>\r\n               <li>\r\n                UX/UI Development\r\n                </li>\r\n               <li>\r\n                Software Testing & QA\r\n                </li>\r\n               <li>\r\n                Cleanse Dataset\r\n               </li>\r\n               <li>\r\n                Data Mapping & Conversion\r\n                </li>\r\n               <li>\r\n                Staffing Servicesdevelopment.\r\n               </li>\r\n           </ul>\r\n        </div>\r\n        \r\n        <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n            <img src=\"assets/images/manage-service-1.png\">\r\n        </div>\r\n    </div>\r\n\r\n <div class=\"row\">\r\n\r\n        <div *ngFor=\"let item of solution; index as i\" class=\"col-lg-6 col-md-6 col-sm-12 panel-container\">\r\n            <div class=\"panel\">\r\n               <div class=\"panel-front\">\r\n                    <div class=\"panel-heading\">\r\n                       <img src=\"assets/images/managservice/ourServices-{{i+1}}.png\">\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n\r\n                        <p>{{item.description}}</p>\r\n                    </div>\r\n                </div>\r\n               <div class=\"panel-back {{item.color}}\">\r\n                    <h5>{{item.title}}</h5>\r\n                    <p>{{item.description_2}}</p>\r\n                </div> \r\n            </div>\r\n        </div>\r\n</div>\r\n</div>\r\n</section>    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-news.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n                    <h1>News Update</h1>\n                    <h6>News, Press release and Media reports</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<section class=\"section-news inner-nav-tab\">\n    <div class=\"tab-navigation\">\n        <div class=\"col-sm-12\">\n            <div class=\"container\">\n                <ul ngbNav #nav=\"ngbNav\" [(activeId)]=\"active\" class=\"nav-tabs\">\n                    <li [ngbNavItem]=\"1\">\n                        <a ngbNavLink>News</a>\n                        <ng-template ngbNavContent>\n\n                            <section>\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12\">\n                    <li *ngFor=\"let data of news; index as i\" class=\"p2 grid-li\">\n                        <div class=\"panel\">\n                            <div class=\"panel-heading\">\n                                <img src={{data.img}}-{{i+1}}.jpg alt=\"{{data.subtitle}}\">\n                            </div>\n                            <div class=\"panel-body\">\n                                <p><b>{{data.desc_1}}</b></p>\n                                <p>{{data.desc_2}}</p>\n                            </div>\n                        </div>\n                    </li>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"news-video\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n\n                <div class=\"video\">\n                    <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/zmEG-5zEmPw\" frameborder=\"0\"\n                        allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                        allowfullscreen></iframe>\n                </div>\n\n                <h6 class=\"center\">\n                    Arkedge Technologies has a very ambitious plan for future and we are looking for energetic,\n                    motivated, ambitious team players who relish the challenge of joining a growing business in the\n                    field of IT, Resourcing and Training. You will have the opportunity to grow professionally and\n                    financially.\n                </h6>\n            </div>\n        </div>\n    </div>\n</section>\n</ng-template>\n</li>\n<li [ngbNavItem]=\"2\">\n    <a ngbNavLink>Events</a>\n    <ng-template ngbNavContent>\n\n    </ng-template>\n</li>\n<li [ngbNavItem]=\"3\">\n    <a ngbNavLink>Webinars</a>\n    <ng-template ngbNavContent>\n\n    </ng-template>\n</li>\n<li [ngbNavItem]=\"4\">\n    <a ngbNavLink>Press Releases</a>\n    <ng-template ngbNavContent>\n        <div class=\"press-release-section\">\n            <section>\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-sm-12 col-md-10 div-center center\">\n                            <p class=\"running-text\">\n                                A great leader's courage to fulfill his vision comes from passion, not position.\n                            </p>\n                            <p>\n                                At ARKEDGE, we all aspire to be tomorrow's leader. Individually we are pathfinders and\n                                collectively we are a doer (achiever).\n                                <br>\n                                We are passionate about everything that we do and so do it the best way.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </section>\n\n            <section class=\"press-release-info\">\n\n                <div class=\"container\">\n                    <div class=\"row\">\n\n                        <div class=\"col-sm-12\" *ngFor=\"let info of pressRelease; index as i\">\n                            <p>\n                                <span class=\"span\">\n                                    <img class=\"div-{{i+1}}\" src=\"assets/images/leadership/person{{i+1}}.png\"\n                                        align=\"{{info.align}}\">\n                                    <span class=\"title-name\">{{info.name}}</span>\n                                    <span class=\"title-info\">{{info.info}}</span>\n                                </span>\n\n                                <span class=\"v-text-align\">\n                                    <p>\n                                        {{info.desc}}\n                                    </p>\n                                </span>\n                            </p>\n\n                        </div>\n                    </div>\n                </div>\n            </section>\n\n        </div>\n    </ng-template>\n</li>\n<li [ngbNavItem]=\"5\">\n    <a ngbNavLink>Video Gallery</a>\n    <ng-template ngbNavContent>\n        <section class=\"video-gallery\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"video\">\n                            <iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/zmEG-5zEmPw\"\n                                frameborder=\"0\"\n                                allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                                allowfullscreen></iframe>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"video\">\n                            <iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/zmEG-5zEmPw\"\n                                frameborder=\"0\"\n                                allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                                allowfullscreen></iframe>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"video\">\n                            <iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/zmEG-5zEmPw\"\n                                frameborder=\"0\"\n                                allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                                allowfullscreen></iframe>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"video\"> \n                            <iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/zmEG-5zEmPw\"\n                                frameborder=\"0\"\n                                allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                                allowfullscreen></iframe>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n    </ng-template>\n</li>\n</ul>\n\n</div>\n</div>\n</div>\n<div [ngbNavOutlet]=\"nav\" class=\"mt-4\"></div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ourproduct/ourproduct.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ourproduct/ourproduct.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\r\n    <img src=\"assets/images/inner-banner-ourproduct.jpg\">\r\n    <div class=\"page-title\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12 center\">\r\n                    <h1>Our Products</h1>\r\n                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<section class=\"section-product\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 col-md-8 div-center\">\r\n                <h6 class=\"center career\">\r\n                    ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. The organization is making its presence felt on the engineering solution and services, Staffing and IT training circuit. Equipped with cross cultural operating experience; an asset, it drives the organization to deliver nothing but the best.\r\n                </h6>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"section-product-detail\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                <h2>Product Name 1</h2>\r\n                <p>\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\r\n                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.\r\n                </p>\r\n                <ul>\r\n                    <li>\r\n                        Robust version design\r\n                    </li>\r\n                    <li>\r\n                        Cross-platform architecture\r\n                    </li>\r\n                    <li>\r\n                        Wide variety of integration requirements\r\n                    </li>\r\n                </ul>\r\n                <button type=\"submit\" class=\"btn btn-primary\" (click)=\"inquery();\">Inquiry</button>\r\n                <button type=\"submit\" class=\"btn btn-warning\">Demo</button>\r\n\r\n            </div>\r\n\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                <img src=\"assets/images/01.png\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                <img src=\"assets/images/02.png\">\r\n            </div>\r\n\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                <h2>Product Name 2</h2>\r\n                <p>\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\r\n                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.\r\n                </p>\r\n                <ul>\r\n                    <li>\r\n                        Robust version design\r\n                    </li>\r\n                    <li>\r\n                        Cross-platform architecture\r\n                    </li>\r\n                    <li>\r\n                        Wide variety of integration requirements\r\n                    </li>\r\n                </ul>\r\n                <button type=\"submit\" class=\"btn btn-primary\">Inquiry</button>\r\n                <button type=\"submit\" class=\"btn btn-warning\">Demo</button>\r\n\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                <h2>Product Name 3</h2>\r\n                <p>\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\r\n                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.\r\n                </p>\r\n                <ul>\r\n                    <li>\r\n                        Robust version design\r\n                    </li>\r\n                    <li>\r\n                        Cross-platform architecture\r\n                    </li>\r\n                    <li>\r\n                        Wide variety of integration requirements\r\n                    </li>\r\n                </ul>\r\n                <button type=\"submit\" class=\"btn btn-primary\">Inquiry</button>\r\n                <button type=\"submit\" class=\"btn btn-warning\">Demo</button>\r\n\r\n            </div>\r\n\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                <img src=\"assets/images/01.png\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"section-product\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 center\">\r\n                <h1>Product Features</h1>\r\n                <h6>Transforming industries with smarter ways</h6>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n                <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\" [config]=\"slideConfig\">\r\n                    <div ngxSlickItem *ngFor=\"let product of products; index as i\" class=\"slide\">\r\n                        <img src=\"assets/images/0{{i+1}}.png\" alt=\"\" width=\"100%\">\r\n                        <p class=\"col-sm-12 center\">{{product.title}}</p>\r\n                    </div>\r\n                </ngx-slick-carousel>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectengineering/projectengineering.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projectengineering/projectengineering.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-projectengineering.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n                    <h1>SOFTWARE ENGINEERING</h1>\n                    <h6>{{tabName}}</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<section class=\"manage-service-tab inner-nav-tab\">\n    <div class=\"tab-navigation\">\n        <div class=\"col-sm-12\">\n            <div class=\"container\">\n                <ul ngbNav #nav=\"ngbNav\" [activeId]=\"tabIndex\" class=\"nav-tabs\">\n                    <li [ngbNavItem]=\"1\">\n                        <a ngbNavLink (click)=\"title(1)\">Product Engineering</a>\n                        <ng-template ngbNavContent>\n                            <section class=\"section-project-engineering\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12\">\n                                            <p class=\"running-text\">\n                                                Competitive pressures, reduced time-to-market, increased demands of\n                                                customers, and globalization are\n                                                driving global product companies to explore the offshore route. A\n                                                reliable offshore partner can play\n                                                a key role from concept to the launch of the product. Product companies\n                                                have increased their\n                                                competitive advantage by partnering with offshore players for product\n                                                development.\n                                            </p>\n                                            <p>\n                                                We have been involved in architecting and building .NET driven business\n                                                solutions right from the\n                                                inception. Our .NET CoE has proven expertise in building world class\n                                                products using the latest\n                                                Microsoft® technologies and standards. Our knowledge of Microsoft® .NET\n                                                technologies and product\n                                                development methodologies enables us to work with customers across\n                                                domains and successfully address\n                                                their functional, usability, performance and scalability requirements.\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </section>\n\n                            <section class=\"methodologies\">\n                                <img src=\"assets/images/managservice/methodologies.jpg\" >\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12 center\">\n                                            <h1>Our Methodology</h1>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"row\">\n                                        <ul class=\"panel-container\">\n\n                                            <li *ngFor=\"let item of solution; index as i\">\n                                                <div class=\"icon-circle\">\n                                                    <i class=\"icon icon-medium\">\n                                                        <svg focusable=\"false\">\n                                                            <use attr.xlink:href=\"{{item.icon}}\"></use>\n                                                        </svg>\n                                                    </i>\n                                                </div>\n                                                <h6>{{item.title}}</h6>\n                                                <ul class=\"info-bar\">\n                                                    <li>\n                                                        {{item.info}}\n                                                    </li>\n                                                </ul>\n\n                                            </li>\n                                        </ul>\n\n                                    </div>\n                                </div>\n                            </section>\n\n                            <section class=\"engeering-grap\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12\">\n                                            <p>\n                                                <img src=\"assets/images/managservice/engeering-grap.jpg\" align=\"right\">\n                                                <span class=\"running-text\">\n                                                We practice agile development methodologies to help you take advantage\n                                                of emerging market\n                                                opportunities. We develop software in time-boxed iterations; each\n                                                iteration is a discrete project\n                                                encompassing all the PDLC stages. Our agile software project is capable\n                                                of releasing standalone\n                                                working software at the end of each iteration.\n                                                </span>\n                                                <br><br>\n                                                Our solution architects also help you realize your vision of services\n                                                based products through\n                                                implementation of the Service Oriented Architecture (SOA) approach. They\n                                                provide consulting,\n                                                implementation, and re-engineering of existing product architectures\n                                                using the SOA framework<br><br>\n\n                                                The software products industry depends on bringing new concepts, new\n                                                versions and new features to\n                                                the market quickly. At the same time, development costs must be low,\n                                                predictable, and flexible. We\n                                                can help you address these daunting and seemingly conflicting\n                                                requirements for software products.\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </section>\n\n\n                            <section class=\"our-services-section\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12\">\n                                            <div class=\"container our-services\">\n                                            <div class=\"row\">\n                                                <div class=\"col-md-4 col-lg-4 col-sm-12 triangle\">\n                                                    <div class=\"v-center\">\n                                                        <div class=\"logo-circle\">\n                                                            <i class=\"icon icon-large\">\n                                                                <svg focusable=\"false\">\n                                                                    <use xlink:href=\"#icon_logoFlat\"></use>\n                                                                </svg>\n                                                            </i>\n                                                        </div>\n                                                        <h5>\n                                                            Arkedge Technologies<br>\n                                                            Services\n                                                        </h5>\n                                                    </div>\n                                                </div>\n\n                                                <div class=\"col-md-8 col-lg-8 col-sm-12 v-flex\">\n                                                    <ul>\n                                                        <li>\n                                                            Robust version design\n                                                        </li>\n                                                        <li>\n                                                            Cross-platform architecture\n                                                        </li>\n                                                        <li>\n                                                            Wide variety of integration requirements\n                                                        </li>\n                                                        <li>\n                                                            Comprehensive packaging\n                                                        </li>\n                                                        <li>\n                                                            Support over a range of environments\n                                                        </li>\n                                                    </ul>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    </div>\n                                </div>\n                            </section>\n\n\n                            <section class=\"engeering-grap\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12\">\n                                            <p>\n                                                Our solution architects also help you realize your vision of services\n                                                based products through\n                                                implementation of the Service Oriented Architecture (SOA) approach. They\n                                                provide consulting,\n                                                implementation, and re-engineering of existing product architectures\n                                                using the SOA framework\n                                                <br> <br>\n                                                The software products industry depends on bringing new concepts, new\n                                                versions and new features to\n                                                the market quickly. At the same time, development costs must be low,\n                                                predictable, and flexible. We\n                                                can help you address these daunting and seemingly conflicting\n                                                requirements for software products.\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </section>\n\n                        </ng-template>\n                    </li>\n\n                    <li [ngbNavItem]=\"2\">\n                        <a ngbNavLink (click)=\"title(2)\">Application Development</a>\n                        <ng-template ngbNavContent>\n                            <div class=\"container app-development\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-12\">\n                                        <p>\n                                            <img src=\"assets/images/managservice/app-dev-met.jpg\" align=\"right\">\n                                            <span class=\"running-text\">\n                                            Arkedge has a well-defined and mature application development service\n                                            offering. Arkedge application development model covers all phases of the\n                                            Software Development Life Cycle (SDLC), beginning with transforming business\n                                            requirements into project functional requirements, development, quality,\n                                            testing, implementation, training and application support. Our distributed\n                                            delivery methodology effectively leverages the onsite subject matter\n                                            expertise and the offshore development teams, resulting in cost-effective\n                                            solutions. Each of the development phases can be defined with metrics and\n                                            subsequently tracked with the monitoring tools and well defined project\n                                            management and execution processes.\n                                        </span>\n                                        <br>\n                                        <br>\n                                            Arkedge provides outsourced software development services for in-house\n                                            applications, across the project lifecycle. We partner with you from\n                                            internal proposals and budgeting, through project approvals, all the way to\n                                            delivery, training, maintenance and support. Our flexible offshore software\n                                            development model allows companies to maximize their ROI, while maintaining\n                                            complete control over projects.\n                                            <br>\n                                            <br>\n                                            \n                                            At each stage of the application development cycle we bring people, process\n                                            and technology expertise to pro-actively guide you through the challenges of\n                                            meeting application requirements within budget, time and quality. A key\n                                            aspect of Arkedge's application development methodology is the early and\n                                            extensive use of screen mockups or wireframes. In our experience, mockups\n                                            and wireframes speed up initial approvals, improve the reliability of\n                                            requirements gathering and documentation, and greatly enhance user\n                                            acceptance and utilization of the delivered application.\n\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <section class=\"about-key-diff\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n\n                                        <div class=\"col-md-8 col-lg-8 col-sm-12\">\n                                            <h1>Key Differentiators</h1>\n                                            <ul>\n                                                <li *ngFor=\"let key of keydiff\">\n                                                    {{key.list}}\n                                                </li>\n                                            </ul>\n                                        </div>\n\n                                        <div class=\"col-md-4 col-lg-4 col-sm-12 v-flex\">\n                                            <img src=\"assets/images/managservice/key-difference.png\">\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </section>\n\n                            <section>\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12\">\n                                            <p>\n                                                Systems modelling with analysis and design using UML tools Customers can\n                                                be rest assured that Arkedge will provide technical follow-through\n                                                during the planning, design, development and deployment of every\n                                                project. It also offers on-going management, maintenance and monitoring\n                                                of all developed applications and the systems they run on.\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </section>\n\n                        </ng-template>\n                    </li>\n\n                    <li [ngbNavItem]=\"3\">\n                        <a ngbNavLink (click)=\"title(3)\">UX/UI Development</a>\n                        <ng-template ngbNavContent>\n                            <div class=\"container\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-12\">\n                                        <p class=\"running-text\"> \n                                            ARKEDGE is a rapidly growing professionally managed organization with\n                                            competent and qualified brass at the helm of the affairs. The organization\n                                            is making its presence felt on the engineering solution and services,\n                                            Staffing and IT training circuit. Equipped with cross cultural operating\n                                            experience; an asset, it drives the organization to deliver nothing but the\n                                            best.\n                                        </p>\n                                        <p>\n                                            We specialize in improving operational performance and IT delivery.\n                                            We do this by improving the way our clients use people, processes and\n                                            technologies. Here is the place to envision, discover and fulfil your\n                                            technology needs.\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <section class=\"ui-ux-info\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div *ngFor=\"let item of uiUxInfo\" class=\"col-md-4 col-lg-4 col-sm-12\">\n                                            <div class=\"panel center\">\n                                                <div class=\"panel-heading\">\n                                                    <div class=\"icon-circle\">\n                                                        <i class=\"icon icon-large\">\n                                                            <svg focusable=\"false\">\n                                                                <use attr.xlink:href=\"{{item.icon}}\"></use>\n                                                            </svg>\n                                                        </i>\n                                                    </div>\n                                                    <h5>{{item.title}}</h5>\n                                                </div>\n                                                <div class=\"panel-body\">\n                                                    <p>{{item.description}}</p>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </section>\n\n                            <section class=\"ui-ux-process\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12 center\">\n                                            <h1>UX/UI Development Process</h1>\n                                        </div>\n                                    </div>\n                                   \n                                    <div class=\"col-lg-9 col-md-9 col-sm-12 div-center\">\n                                        <div class=\"row\">\n                                   \n                                    <div class=\"row\">\n\n                                        <div class=\"col-md-3 col-lg-2 col-sm-12\">\n                                            <div class=\"icon-circle\">\n                                                <i class=\"icon icon-large\">\n                                                    <svg focusable=\"false\">\n                                                        <use xlink:href=\"#icon_strategy\"></use>\n                                                    </svg>\n                                                </i>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-9 col-lg-10 col-sm-12\">\n                                            <h6>UX/UI Development Process</h6>\n                                            <p>Business requirements define the value proposition of a product. They are\n                                                the answers to why a new product is requested. As the visualized form of\n                                                requirements, user interface designs should be also based on business\n                                                requirements to satisfy the strategic level objectives of creating that\n                                                product.</p>\n                                        </div>\n\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-9 col-lg-10 col-sm-12\">\n                                            <h6>Understand your Users</h6>\n                                            <p>\"Designing for everybody\" is not a feasible and effective strategy in\n                                                terms of usability. Interfaces of a product are usable if they are good\n                                                fit for its users. Thus user interface design should be based on the\n                                                profile of target user groups.</p>\n                                        </div>\n\n                                        <div class=\"col-md-3 col-lg-2 col-sm-12\">\n                                            <div class=\"icon-circle\">\n                                                <i class=\"icon icon-large\">\n                                                    <svg focusable=\"false\">\n                                                        <use xlink:href=\"#icon_understanding\"></use>\n                                                    </svg>\n                                                </i>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-3 col-lg-2 col-sm-12\">\n                                            <div class=\"icon-circle\">\n                                                <i class=\"icon icon-large\">\n                                                    <svg focusable=\"false\">\n                                                        <use xlink:href=\"#icon_product\"></use>\n                                                    </svg>\n                                                </i>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-9 col-lg-10 col-sm-12\">\n                                            <h6>Define your Requirements & Content</h6>\n                                            <p>User interfaces are composed not only of functional requirements (tasks)\n                                                but also of content requirements. Therefore, in parallel to interaction\n                                                design (based on functional requirements), the information architecture\n                                                (based on content requirements) should be also designed. The main\n                                                objective of information architecture design is to identify content\n                                                requirements, define content categories, and finalize the navigation\n                                                structures.</p>\n                                        </div>\n\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-9 col-lg-10 col-sm-12\">\n                                            <h6>Shape your Product</h6>\n                                            <p>Our UX designers then convert interaction designs and information\n                                                architectures into user interfaces by applying UX design and usability\n                                                principles and guidelines. They design low-fidelity prototypes by\n                                                sketching or using prototyping tools. Then our Visual designers convert\n                                                low-fidelity prototypes into high-fidelity visual designs with the most\n                                                aesthetic color, metaphor, and font selections.</p>\n                                        </div>\n\n                                        <div class=\"col-md-3 col-lg-2 col-sm-12\">\n                                            <div class=\"icon-circle\">\n                                                <i class=\"icon icon-large\">\n                                                    <svg focusable=\"false\">\n                                                        <use xlink:href=\"#icon_value\"></use>\n                                                    </svg>\n                                                </i>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                </div>\n                            </div>\n                                </div>\n                            </section>\n\n                        </ng-template>\n                    </li>\n\n                    <li [ngbNavItem]=\"4\">\n                        <a ngbNavLink (click)=\"title(4)\">Software Testing & QA</a>\n                        <ng-template ngbNavContent>\n                            <div class=\"container qa-testing\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-12\">\n                                        <p class=\"running-text\"> \n                                            Arkedge is committed to providing high-quality software solutions to its clients. Therefore we take a serious approach to the testing process and quality assurance of the solutions that are developed either by our development team or your existing or new applications. The current techniques and approaches applied to software testing help identify and prevent occurrence of the problems associated with the improper functionality, low reliability, productivity, scalability and other defects of the applications.\n                                        </p>\n                                        <p class=\"v-flex\">\n                                            We have robust testing processes and frameworks that can seamlessly plug and play at any stage of the software and product development life cycle to provide you the flexible scale and repeatability in meeting demanding quality requirements and go-live schedules.<br><br>\n                                            Our strong belief is to form a QA team in the initial stage of the development phase; this undoubtedly helps reduce the risks of fixing global bugs in later stages. The QA engineers are involved in the development process right off the mark: they are provided with the available documentation, acquainted with the business processes that are to be implemented in the project and technical specifications requested by the client. On the basis of the provided resources our engineers develop a testing plan that meets all the mentioned requirements. It defines the scope of testing and documents the process of quality assurance.\n                                            <img src=\"assets/images/managservice/qa-testing.png\" align=\"right\">\n                                        </p>\n                                        <p class=\"running-text manage-space\">Arkedge helps with critical aspects of clients' systems, such as planning, process control, performance metrics, test automation, test execution, defect tracking, and reporting.\n                                        </p>\n                                    </div>\n                                    <div *ngFor=\"let data of qaInfo\" class=\"col-lg-6 col-md-6 col-sm-12 qa-info\">\n                                        <div class=\"panel\">\n                                                <div class=\"panel-heading\">\n                                                   <h6>{{data.title}}</h6>\n                                                </div>\n                                                <div class=\"panel-body\">\n                                                    <p>{{data.info}}</p>\n                                                </div>\n                                         </div>\n                                    </div>\n\n                                </div>\n\n                                <div class=\"row qa-testing-info\">\n                                  <div class=\"col-md-4 col-lg-4 col-sm-12 v-flex\">\n                                        <div class=\"icon-circle\">\n                                            <i class=\"icon icon-large\">\n                                                <svg focusable=\"false\">\n                                                    <use xlink:href=\"#icon_seeting3\"></use>\n                                                </svg>\n                                            </i>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-8 col-lg-8 col-sm-12\">\n                                        <h6>Functional Testing</h6>\n                                        <p>Functional testing is done using the functional specifications provided by the client or by using the design specifications like use cases provided by the design team. Functional testing validates that an application conforms to its specifications and meets its expected functional requirements. During functionality testing, a range of inputs as test data is created and tests are performed to validate if whether each feature conforms to the requirements.\n                                        </p>\n                                        \n                                        <div class=\"row\">\n                                            <div class=\"col-sm-12\">\n                                                <ul class=\"row qa-test-info\">\n                                                    <li *ngFor=\"let data of qafunctionTest\" class=\"col-md-6 col-lg-6 col-sm-12\">\n                                                        {{data.info}}\n                                                    </li>\n                                                </ul>\n                                            </div> \n                                        </div>\n\n                                    </div>\n\n                                </div>\n\n                                <div class=\"row qa-testing-info\">\n                                    \n                                      <div class=\"col-md-8 col-lg-8 col-sm-12\">\n                                          <h6>Non-Functional Testing</h6>\n                                          <p>Testing the application against client's performance requirement; Non-Functioning testing is done based on the requirements and test scenarios defined by the client.\n                                          </p>\n                                          \n                                          <div class=\"row\">\n                                              <div class=\"col-sm-12\">\n                                                  <ul class=\"row qa-test-info\">\n                                                      <li *ngFor=\"let data of qanonfunctionTest\" class=\"col-md-6 col-lg-6 col-sm-12\">\n                                                          {{data.info}}\n                                                      </li>\n                                                  </ul>\n                                              </div> \n                                          </div>\n  \n                                      </div>\n\n                                      <div class=\"col-md-4 col-lg-4 col-sm-12 v-flex\">\n                                        <div class=\"icon-circle\">\n                                            <i class=\"icon icon-large\">\n                                                <svg focusable=\"false\">\n                                                    <use xlink:href=\"#icon_seeting1\"></use>\n                                                </svg>\n                                            </i>\n                                        </div>\n                                    </div>\n  \n                                  </div>\n\n                                  <div class=\"row qa-testing-info\">\n\n                                        <div class=\"col-sm-12\">  \n                                            <h6>Automation Lab</h6>\n                                            <p>Arkedge has a special focus on software test automation using market standard tools. Arkedge approaches automation design and development as a software development project in itself; to create an automated testing solution that is flexible enough to adapt to changes in your application and that will not need much rewriting for each new build. Arkedge test automation experts will ensure your tool investment is put to good use and will build automation skills into your organization for future re-usability and maintainability.\n                                            </p>\n                                        </div>\n                                   \n\n                                    <div class=\"col-md-4 col-lg-4 col-sm-12 v-flex\">\n                                          <div class=\"icon-circle\">\n                                              <i class=\"icon icon-large\">\n                                                  <svg focusable=\"false\">\n                                                      <use xlink:href=\"#icon_seeting2\"></use>\n                                                  </svg>\n                                              </i>\n                                          </div>\n                                      </div>\n                                      <div class=\"col-md-8 col-lg-8 col-sm-12\">\n\n                                       \n <p>It is important to consider automation of the test environment as early as possible and design it into the system from the outset. It's also important to recognize that automation is not appropriate for every project or for all testing on any particular project.\n<br><br>\n    Arkedge can help you achieve this balance so that the benefit from test automation at the right time and in the right way. Some of the automation focus areas' are:\n                                          </p>\n                                          \n                                          <div class=\"row\">\n                                              <div class=\"col-sm-12\">\n                                                  <ul class=\"row qa-test-info\">\n                                                      <li *ngFor=\"let data of qalabfunctionTest\n                                                      \" class=\"col-md-6 col-lg-6 col-sm-12\">\n                                                          {{data.info}}\n                                                      </li> \n                                                  </ul>\n                                              </div> \n                                          </div>\n  \n                                      </div>\n  \n                                  </div>\n\n                            </div>\n                        </ng-template>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n\n\n    <div [ngbNavOutlet]=\"nav\"></div>\n\n\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sitemap/sitemap.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sitemap/sitemap.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-projectengineering.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n                    <h1>Sitemap</h1>\n                    <h6>Under Construction</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<section>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <img src=\"assets/images/underconstruction.png\">\n        </div>\n    </div>\n</div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/staffing/staffing.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staffing/staffing.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\r\n    <img src=\"assets/images/inner-banner-projectengineering.jpg\">\r\n    <div class=\"page-title\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12 center\">\r\n                    <h1>IT STAFFING & TRAINING</h1>\r\n                    <h6>{{tabName}}</h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<section class=\"manage-service-tab inner-nav-tab\">\r\n    <div class=\"tab-navigation\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"container\">\r\n                <ul ngbNav #nav=\"ngbNav\" [activeId]=\"tabIndex\" class=\"nav-tabs\">\r\n                    <li [ngbNavItem]=\"1\">\r\n                        <a ngbNavLink (click)=\"title(1)\">STAFFING SERVICES</a>\r\n                        <ng-template ngbNavContent>\r\n                            <section class=\"section-staffing\">\r\n                                <div class=\"container\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-12\">\r\n                                            <p class=\"running-text\">\r\n                                                We understand every organization has its Unique Staffing requirements and they need the right people to succeed. ARKEDGE supports short-term, seasonal, high-volume and niche contract requirements. We also provide contract-to-hire talent for project-based support with the option to hire our contractors as permanent employees or find the permanent top talent your company needs today. By listening to our clients’ business needs, we have gained a unique perspective into how we can help. </p>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-12\">\r\n                                                <h3>People. Process. Technology</h3>\r\n                                                <h6>Proven methodology, profound impact & sustainable results</h6>\r\n                                                   <ul class=\"info-bar\">\r\n                                                       <li *ngFor=\"let item of ourProcess\">\r\n                                                          {{item.title}}\r\n                                                           <p>\r\n                                                               {{item.desc}}\r\n                                                               <br>\r\n                                                               {{item.desc2}}\r\n                                                           </p>\r\n                                                       </li>\r\n                                                   </ul>\r\n                                               </div>\r\n\r\n                                        <div class=\"col-sm-12\">\r\n                                         <h6>Permanent Staffing</h6>\r\n                                            <ul class=\"info-bar\">\r\n                                                <li *ngFor=\"let item of staffingSolution\">\r\n                                                   {{item.title}}\r\n                                                    <p>\r\n                                                        {{item.desc}}\r\n                                                        <br>\r\n                                                        {{item.desc2}}\r\n                                                    </p>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                        <div class=\"col-sm-12\"> \r\n                                            <h6>Temporary Staffing</h6>\r\n                                            <p>\r\n                                                In an increasingly competitive business world, manpower requirements pose a challenge that requires a careful allocation of resources to overcome. Recruitments come with a host of resource intensive issues such as Sourcing, Appointing, Compensation, Payroll Management, Statutory Compliances, Employee Benefits and Exit Management.\r\n                                                <br><br>\r\n                                                Temporary Staffing, or Temping, is an effective solution to these hassles. It basically defines a 3-way relationship between the Employer, Temping Consultant and Employee. Within this definition, we manage and administer projects on behalf of companies that require personnel for short term contracts of 6 months to a 2 year contract term. We cater to companies involved in major projects and organizations that may be facing increased workload or headcount. We assist such clients by recruiting staff for the project and overseeing the administrative and logistic requirements throughout the agreed term.\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </section>\r\n\r\n                            <section class=\"services-provided\">\r\n                                <div class=\"container\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-12 center\">\r\n                                            <h1>Service <span class=\"heading-highlight\">we provide</span></h1>\r\n                                        </div>\r\n                                        <div *ngFor=\"let data of servicesProvided; index as i\" class=\"col-lg-4 col-md-4 col-sm-12\">\r\n                                            <div class=\"panel\">\r\n                                                <a><img src=\"assets/images/managservice/staffing/staffing-service-{{i+1}}.jpg\"></a>\r\n                                                <div class=\"panel-footer\">\r\n                                                    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"open(content)\">{{data.title}}</button>\r\n                                                </div>\r\n                                               \r\n                                            </div>\r\n                            \r\n                                            <ng-template #content let-modal>\r\n                                                <div class=\"modal-header\">\r\n                                                    <h4 class=\"modal-title\">{{data.title}}</h4>\r\n                                                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n                                                        <span aria-hidden=\"true\">&times;</span>\r\n                                                    </button>\r\n                                                </div>\r\n                                                <div class=\"modal-body fix-height\"> \r\n                            \r\n                                                    <div class=\"panel\">\r\n                                                      <div class=\"panel-body\">\r\n                                                            <p>{{data.desc}}</p>\r\n                                                            <a href=\"{{data.url}}\" target=\"_blank\">{{data.url}}</a>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </ng-template>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row best-staffing\">\r\n                                        <div class=\"col-sm-6\">\r\n                                            <img src=\"assets/images/managservice/staffing/staffing-service-7.jpg\">\r\n                                        </div>\r\n                                        <div class=\"col-sm-6\">\r\n                                            <img src=\"assets/images/managservice/staffing/staffing-service-8.jpg\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-12 values\">\r\n                                            <img src=\"assets/images/managservice/staffing/staffing-service-9.jpg\">\r\n                                        </div>\r\n\r\n                                        <div class=\"col-sm-12 features\">\r\n                                            <h6>Key Differentiators</h6>\r\n                                            <ul class=\"info-bar\">\r\n                                                <li *ngFor=\"let item of keyDiff\"> \r\n                                                    {{item.title}}\r\n                                                    <p>\r\n                                                        {{item.desc}}\r\n                                        \r\n                                                    </p>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-sm-12 features\">\r\n                                            <h6>Our clients</h6>\r\n                                            <ul class=\"info-bar\">\r\n                                                <li *ngFor=\"let item of clients\">\r\n                                                    {{item.title}}\r\n                                                    <p>\r\n                                                        {{item.desc}}\r\n                                        \r\n                                                    </p>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    \r\n                                    </div>\r\n                                 \r\n                                </div>\r\n                            </section>\r\n                        </ng-template>\r\n                    </li>\r\n                    <li [ngbNavItem]=\"2\">\r\n                        <a ngbNavLink (click)=\"title(2)\">STAFFING INDUSTRIES</a>\r\n                        <ng-template ngbNavContent>\r\n                            <section class=\"section-staffing\">\r\n                                <div class=\"container\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-12\">\r\n                                            <p class=\"running-text\">\r\n                                                We ensure excellence in service through understanding of our client's business and their unique requirements. Due to our close relationships and constant interactions with clients, we have developed solid understanding and insight in our focus industries that include:\r\n                                            </p>\r\n                                            </div>\r\n                                        <div class=\"col-sm-12\">\r\n                                         <h6>Staffing Services</h6>\r\n                                            <ul class=\"info-bar\">\r\n                                                <li *ngFor=\"let item of industriesSolution\">\r\n                                                   {{item.list}}\r\n                                                </li> \r\n                                            </ul>\r\n                                        </div>\r\n                                      \r\n                                    </div>\r\n                                </div>\r\n                            </section>\r\n                        </ng-template>\r\n                    </li>\r\n\r\n                    <li [ngbNavItem]=\"3\">\r\n                        <a ngbNavLink (click)=\"title(3)\">IT TRAINING</a>\r\n                        <ng-template ngbNavContent>\r\n                            <section class=\"section-staffing\">\r\n                                <div class=\"container\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-12\">\r\n                                            <p class=\"running-text\">\r\n                                                Having been in the corporate training domain for almost two decades now, we understand each business' requirements with ease and develop customized training programs which will suit the client's needs. Arkedge offers all-inclusive corporate training services to cater to the IT training needs of your organization. Some of the key services we offer include -</p>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-12\">\r\n                                                <h6>Proven methodology, profound impact & sustainable results</h6>\r\n                                                <ul class=\"info-bar\">\r\n                                                    <li *ngFor=\"let item of training\">\r\n                                                        {{item.title}}\r\n                                                        <p>\r\n                                                            {{item.desc}}\r\n                                            \r\n                                                        </p>\r\n                                                    </li>\r\n                                                </ul>\r\n                                            </div>\r\n\r\n                                        <div class=\"col-sm-12 center\">\r\n                                            <h1>COURSES</h1>\r\n                                            <p>\r\n                                                Arkedge offers a range of corporate training programs and these programs can be customized to meet the requirements of your organization. <br>\r\n                                                We ensure excellence in service through understanding of our client's business and their unique requirements. Due to our close relationships and constant interactions with clients, we have developed solid understanding and insight in our focus industries that include:\r\n                                            </p>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-sm-12\">\r\n                                            <!-- <table class=\"table table-striped table-bordered\">\r\n                                                <thead>\r\n                                                  <tr>\r\n                                                    <th>Course Type</th>\r\n                                                    <th>Course Description</th>\r\n                                                    <th>Duration</th>\r\n                                                    <th>Details</th>\r\n                                                   </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                  <tr *ngFor=\"let data of courses\">\r\n                                                    <td>{{data.coursetype}}</td>\r\n                                                    <td>{{data.courseDescription}}</td>\r\n                                                    <td>{{data.courseDuration}}</td>\r\n                                                    <td><a href=\"assets/arkege.pdf\" download>View Details</a></td>\r\n                                                  </tr>\r\n                                                </tbody>\r\n                                                </table> -->\r\n\r\n                                                <table class=\"table table-striped table-bordered\">\r\n                                                    <thead>\r\n                                                      <tr>\r\n                                                        <th>Certification Programs</th>\r\n                                                        <th>Information and Communication Technologies Training</th>\r\n                                                        <th>Management Development</th>\r\n                                                       </tr>\r\n                                                    </thead>\r\n                                                    <tbody>\r\n                                                      <tr *ngFor=\"let data of courses\">\r\n                                                        <td>{{data.coursetype}}</td>\r\n                                                        <td>{{data.infoCommTech}}</td>\r\n                                                        <td>{{data.mgdev}}</td>\r\n                                                      </tr>\r\n                                                    </tbody>\r\n                                                    </table>\r\n\r\n                                        </div>\r\n\r\n                                        <div class=\"col-sm-12\">\r\n                                            <h2>What Makes Us Pioneers in the Area of Corporate IT Training?</h2>\r\n                                            <h6>Outsouce2india is among the crème-de-la-crème companies out there which offers peerless corporate IT training for SMEs as well as global corporates. Some of the key reasons to choose us include -</h6>\r\n                                            </div>\r\n                                        <div class=\"col-sm-12\">\r\n                                            <ul class=\"info-bar\">\r\n                                                <li *ngFor=\"let item of whyTraining\">\r\n                                                   {{item.title}}\r\n                                                    <div class=\"comp-methodology\"> \r\n                                                       <p> {{item.desc}}</p>\r\n                                                        <ul class=\"info-bar\">\r\n                                                            <li *ngFor=\"let li of item.list\">\r\n                                                               {{li.title}}\r\n                                                             </li>\r\n                                                        </ul>\r\n                                                     \r\n                                                      \r\n                                                    </div>\r\n                                                </li>\r\n                                            </ul> </div>\r\n\r\n                                      \r\n                                    </div>\r\n                                </div>\r\n                            </section>\r\n                        </ng-template>\r\n                    </li>\r\n\r\n                    <li [ngbNavItem]=\"4\">\r\n                        <a ngbNavLink (click)=\"title(4)\">PROGRAM SCHEDULE</a>\r\n                        <ng-template ngbNavContent>\r\n                            <section class=\"section-staffing\">\r\n                                <div class=\"container\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-12\">\r\n                                            <p class=\"running-text\">\r\n                                                Arkedge offers a range of corporate training programs and these programs can be customized to meet the requirements of your organization. </p>\r\n                                            </div>\r\n                                        <div class=\"col-sm-12\">\r\n                                            <table class=\"table table-striped table-bordered\">\r\n                                                <thead>\r\n                                                  <tr>\r\n                                                    <th>Course Title</th>\r\n                                                    <th>Location</th>\r\n                                                    <th>Target Date</th>\r\n                                                    <th>Details</th>\r\n                                                   </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                  <tr *ngFor=\"let data of programCalendar\">\r\n                                                    <td>{{data.courseTitle}}</td>\r\n                                                    <td>{{data.location}}</td>\r\n                                                    <td>{{data.targetDate}}</td>\r\n                                                    <td><a href=\"assets/arkege.pdf\" download>View Details</a></td>\r\n                                                  </tr>\r\n                                                </tbody>\r\n                                                </table>\r\n                                        </div>\r\n                                      \r\n                                    </div>\r\n                                </div>\r\n                            </section>\r\n                        </ng-template>\r\n                    </li>\r\n\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div [ngbNavOutlet]=\"nav\"></div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/technology/technology.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/technology/technology.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\r\n    <img src=\"assets/images/inner-banner-technology.jpg\">\r\n    <div class=\"page-title\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12 center\">\r\n                    <h1>Technology</h1>\r\n                    <h6>Transforming industries with smarter ways</h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<section class=\"section-advance-solution\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-lg-9 col-md-9 col-sm-12 div-center center\">\r\n                <p>\r\n                    <b>ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. The organization is making its presence felt on the engineering solution and services, Staffing and IT training circuit. Equipped with cross cultural operating experience; an asset, it drives the organization to deliver nothing but the best.\r\n                    </b>\r\n                    <br><br>\r\n                    Over the years we have built up a solid team of software professionals that come from different backgrounds & enlarge the creative potential of ARKEDGE. The competence that they offer contains a wide range of custom programming skills including the latest and most effective development in Microsoft technologies.\r\n\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <h3>\r\n                    Key Differentiators\r\n                </h3>\r\n            </div>\r\n            <div class=\"col-md-8 col-lg-8 col-sm-12\">\r\n                <ul>\r\n                    <li>\r\n                        We provide custom application programming services to end customers.\r\n                    </li>\r\n                    <li>\r\n                        Our competence and experience ensure that we provide excellent services and products to our\r\n                        customers.\r\n                    </li>\r\n                    <li>\r\n                        At every stage of the development process, from conceptual design to product release, the\r\n                        highest quality standards are maintained.\r\n                    </li>\r\n                    <li>\r\n                        Our extensive communication facilities allow us to keep in touch with our customers 24X7.\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <p>\r\n                    Ever-growing demand for Web Application solutions is driven by rapidly changing market conditions\r\n                    and technology progress. To streamline your business, we address those issues with our Internet and\r\n                    Intranet solutions. In addition we also provide you web / animation design services.<br><br>\r\n\r\n                    Along with the engineering solution and services ARKEDGE is specialized in helpings client\r\n                    organizations identify, evaluate, and recruit executives at various levels. It comprises of\r\n                    well-qualified group of people having faith in camaraderie and serving the industry to find the\r\n                    solutions to various key areas as Staffing, Executive Search and IT training.<br><br>\r\n\r\n                    In addition ARKEDGE specializes in a bunch of IT training services for corporate, institutions and\r\n                    individuals. We do organize corporate training programs for industry officials who find it difficult\r\n                    to mingle their expertise with latest IT tools and IT based technology. We do impart IT training for\r\n                    graduates in multiple discipline including computer application, hard core technology, business\r\n                    administration, and individuals who are in the mid of their management education.\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/testimonials/testimonials.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/testimonials/testimonials.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-client.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n                    <h1>TESTIMONIALS</h1>\n                    <h6>We value loyalty, creativity and productivity with results</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<section>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 col-sm-12 col-md-10 div-center center\">\n                <p class=\"running-text\">\n                    A great leader's courage to fulfill his vision comes from passion, not position.\n                </p>\n                <p>\n                    At ARKEDGE, we all aspire to be tomorrow's leader. Individually we are pathfinders and collectively we are a doer (achiever).\n                    <br>\n                    We are passionate about everything that we do and so do it the best way.\n                </p>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"testimonials-info\">\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"col-sm-12\" *ngFor=\"let info of testimonials; index as i\">\n                <p>\n                    <span class=\"span\">\n                        <img class=\"div-{{i+1}}\" src=\"assets/images/leadership/person{{i+1}}.png\" align=\"{{info.align}}\">\n                        <span class=\"title-name\">{{info.name}}</span>\n                        <span class=\"title-info\">{{info.info}}</span>\n                    </span>\n                    \n                    <span  class=\"v-text-align\">\n                       <p>\n                            {{info.desc}}\n                        </p>\n                   </span>\n                </p>\n               \n            </div>\n        </div>\n    </div>\n</section>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".div-1 {\n  background-color: #c3d04e;\n}\n\n.div-2 {\n  background-color: #8778d9;\n}\n\n.div-3 {\n  background-color: #ffab00;\n}\n\n.div-4 {\n  background-color: #ff5630;\n}\n\n.div-5 {\n  background-color: #02b8d9;\n}\n\n.div-6 {\n  background-color: #5391ee;\n}\n\n.about-key-diff {\n  background: url('about.jpg') no-repeat bottom center #1d4b76;\n  padding: 70px 0;\n}\n\n.about-key-diff h1 {\n  color: #fff;\n  font-weight: normal;\n}\n\n.about-key-diff ul {\n  margin-top: 35px;\n}\n\n.about-key-diff ul li {\n  padding: 0 0 20px 20px;\n  list-style: none outside;\n  font-size: 16px;\n  position: relative;\n  color: #fff;\n}\n\n.about-key-diff ul li::before {\n  content: \" \";\n  background: #fff;\n  font-weight: bold;\n  position: absolute;\n  top: 8px;\n  left: 0px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.note-desc {\n  padding-top: 0;\n}\n\n.about-info {\n  padding: 0;\n  background: #e5f0fa;\n}\n\n.about-info .v-align {\n  display: flex;\n}\n\n.about-info .v-align p {\n  align-self: center;\n  padding-left: 150px;\n}\n\n.about-info img {\n  width: 100%;\n}\n\n.icon-circle {\n  height: 90px;\n  width: 90px;\n  border-radius: 50%;\n  margin: 0 auto;\n}\n\n.icon-circle i {\n  line-height: 90px;\n}\n\n.icon-circle i svg {\n  fill: #fff;\n}\n\n.section-info {\n  padding: 70px 0;\n}\n\n.section-info .panel-container {\n  margin-top: 60px;\n  min-height: 330px;\n  perspective: 1000px;\n  overflow: hidden;\n}\n\n.section-info .panel-container:hover .panel {\n  transform: rotateX(180deg);\n}\n\n.section-info .panel {\n  color: #fff;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 1s;\n  transform-style: preserve-3d;\n}\n\n.section-info .panel .panel-front {\n  border-top: 5px solid;\n  padding-top: 25px;\n  z-index: 1;\n}\n\n.section-info .panel .panel-front::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n\n.section-info .panel .panel-front.red {\n  background: url('1.jpg') no-repeat top center;\n  border-color: #b9646e;\n}\n\n.section-info .panel .panel-front.red .circle-bg {\n  background-color: #b9646e;\n}\n\n.section-info .panel .panel-front.blue {\n  background: url('2.jpg') no-repeat top center;\n  border-color: #276caa;\n}\n\n.section-info .panel .panel-front.blue .circle-bg {\n  background-color: #276caa;\n}\n\n.section-info .panel .panel-front.green {\n  background: url('3.jpg') no-repeat top center;\n  border-color: #4bbb57;\n}\n\n.section-info .panel .panel-front.green .circle-bg {\n  background-color: #4bbb57;\n}\n\n.section-info .panel .panel-back {\n  padding-top: 25px;\n}\n\n.section-info .panel .panel-back.red {\n  background-color: #b9646e;\n}\n\n.section-info .panel .panel-back.blue {\n  background-color: #276caa;\n}\n\n.section-info .panel .panel-back.green {\n  background-color: #4bbb57;\n}\n\n.section-info .panel .panel-front, .section-info .panel .panel-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.section-info .panel .panel-back {\n  transform: rotateX(180deg);\n}\n\n.section-info .panel .panel-back p {\n  padding: 10px;\n}\n\n.section-info .panel h5 {\n  margin: 20px 0;\n  color: #fff;\n}\n\n.section-info .panel p {\n  margin: 0;\n}\n\n.leader-ship {\n  margin-top: 40px;\n  padding: 0;\n}\n\n.leader-ship.first-child {\n  background: #f2f2f2;\n  padding-bottom: 40px;\n}\n\n.leader-ship:last-child {\n  padding-bottom: 30px;\n}\n\n.leader-ship:last-child .div-center {\n  margin-bottom: 50px;\n}\n\n.leader-ship:last-child img {\n  margin: 0 auto 30px;\n  width: 80%;\n  display: block;\n}\n\n.leader-ship p {\n  padding-top: 40px;\n}\n\n.leader-ship p a {\n  color: #214f7a;\n  font-weight: bold;\n}\n\n.leader-ship img {\n  width: auto;\n  margin: 0 40px 0px 0;\n  border-radius: 50%;\n}\n\n.leader-ship .title-name {\n  font-size: 25px;\n  font-weight: bold;\n}\n\n.leader-ship .title-info {\n  font-size: 16px;\n  color: #5C5C5C;\n}\n\n.leader-ship .btn {\n  padding: 10px;\n  border-radius: 5px;\n  font-size: 12px;\n}\n\n.why-us {\n  padding: 0 0 70px 0;\n}\n\n.why-us .row:nth-child(even) {\n  padding: 70px 0;\n}\n\n.why-us .row:last-child {\n  padding: 45px 0 0 0;\n}\n\n.why-us h6 {\n  font-weight: bold;\n}\n\n.why-us ul {\n  margin-top: 35px;\n}\n\n.why-us ul li {\n  padding: 0 0 20px 20px;\n  list-style: none outside;\n  font-size: 16px;\n  position: relative;\n}\n\n.why-us ul li::before {\n  content: \" \";\n  background: #214f7a;\n  font-weight: bold;\n  position: absolute;\n  top: 8px;\n  left: 0px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.wa-info {\n  background: #e5f0fa;\n  padding: 50px;\n  height: 100%;\n}\n\n.partner-info {\n  padding: 70px 0;\n  padding-bottom: 20px;\n}\n\n.partner-info .panel {\n  margin-bottom: 50px;\n  border: 1px solid rgba(33, 79, 122, 0.1);\n  padding: 20px;\n}\n\n.modal-body h6 {\n  font-weight: bold;\n}\n\n.modal-body a {\n  color: #276caa;\n}\n\n.modal-body a:hover {\n  color: #000;\n}\n\n@media (max-width: 576px) {\n  .about-tab .leader-ship img {\n    width: 100%;\n    margin: 0;\n    margin-bottom: 20px;\n  }\n\n  .about-info .v-align p {\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvRjpcXGdpdGh1Ylxcd29yay9zcmNcXGFwcFxcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQztFQUNDLHlCQUFBO0FDRkY7O0FEQ0M7RUFDQyx5QkFBQTtBQ0VGOztBREhDO0VBQ0MseUJBQUE7QUNNRjs7QURQQztFQUNDLHlCQUFBO0FDVUY7O0FEWEM7RUFDQyx5QkFBQTtBQ2NGOztBRGZDO0VBQ0MseUJBQUE7QUNrQkY7O0FEZEE7RUFDSSw0REFBQTtFQUNBLGVBQUE7QUNpQko7O0FEaEJJO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FDa0JSOztBRGhCSTtFQUNGLGdCQUFBO0FDa0JGOztBRGpCRTtFQUNDLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ1Msa0JBQUE7RUFDQSxXQUFBO0FDbUJaOztBRGxCRztFQUNDLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ29CSjs7QURmQTtFQUNDLGNBQUE7QUNrQkQ7O0FEaEJBO0VBQ0MsVUFBQTtFQUNHLG1CQUFBO0FDbUJKOztBRGxCSTtFQUNJLGFBQUE7QUNvQlI7O0FEbkJRO0VBQ0wsa0JBQUE7RUFDQSxtQkFBQTtBQ3FCSDs7QURsQkM7RUFDQyxXQUFBO0FDb0JGOztBRFhBO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNjRDs7QURiQztFQUNDLGlCQUFBO0FDZUY7O0FEZEU7RUFDQyxVQUFBO0FDZ0JIOztBRFZBO0VBQ0ksZUFBQTtBQ2FKOztBRFpDO0VBQ08sZ0JBQUE7RUFDTixpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNjRjs7QURiRTtFQUNDLDBCQUFBO0FDZUg7O0FEWkM7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQ2NGOztBRGJFO0VBQ0MscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNlSDs7QURkRztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUNnQko7O0FEZEc7RUFDQyw2Q0FBQTtFQUNBLHFCQXJEQztBQ3FFTDs7QURmSTtFQUNDLHlCQXZEQTtBQ3dFTDs7QURiRztFQUNDLDZDQUFBO0VBQ0EscUJBNURFO0FDMkVOOztBRGRJO0VBQ0MseUJBOURDO0FDOEVOOztBRFpHO0VBQ0MsNkNBQUE7RUFDQSxxQkFuRUc7QUNpRlA7O0FEYkk7RUFDQyx5QkFyRUU7QUNvRlA7O0FEVkU7RUFDQyxpQkFBQTtBQ1lIOztBRFhHO0VBQ0MseUJBL0VDO0FDNEZMOztBRFZHO0VBQ0MseUJBbEZFO0FDOEZOOztBRFRHO0VBQ0MseUJBckZHO0FDZ0dQOztBRFBFO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7QUNTSDs7QURQRTtFQUVDLDBCQUFBO0FDUUg7O0FEUEc7RUFDQyxhQUFBO0FDU0o7O0FETkU7RUFDQyxjQUFBO0VBQ0EsV0FBQTtBQ1FIOztBRE5FO0VBQ0MsU0FBQTtBQ1FIOztBREZBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FDS0Y7O0FESkU7RUFDQyxtQkFBQTtFQUNBLG9CQUFBO0FDTUg7O0FESkU7RUFDQyxvQkFBQTtBQ01IOztBRExHO0VBQ0MsbUJBQUE7QUNPSjs7QURMRztFQUNDLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNPSjs7QURKQztFQUNDLGlCQUFBO0FDTUY7O0FETEU7RUFDQyxjQUFBO0VBQ0EsaUJBQUE7QUNPSDs7QURKQztFQUNDLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDTUY7O0FESkM7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7QUNNRjs7QURKQztFQUNDLGVBQUE7RUFDQSxjQUFBO0FDTUY7O0FESkM7RUFDQyxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDTUY7O0FERkE7RUFDQyxtQkFBQTtBQ0tEOztBREhFO0VBQ0MsZUFBQTtBQ0tIOztBREhFO0VBQ0MsbUJBQUE7QUNLSDs7QURGQztFQUNDLGlCQUFBO0FDSUY7O0FERkM7RUFDQyxnQkFBQTtBQ0lGOztBREhHO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0tIOztBREpHO0VBQ0MsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDTUo7O0FEQUE7RUFDQyxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDR0Q7O0FEQUE7RUFDQyxlQUFBO0VBQ0csb0JBQUE7QUNHSjs7QURGSTtFQUNJLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxhQUFBO0FDSVI7O0FEQUk7RUFDSSxpQkFBQTtBQ0dSOztBRERJO0VBQ0ksY0FBQTtBQ0dSOztBREZRO0VBQ0ksV0FBQTtBQ0laOztBREVBO0VBR0U7SUFDQyxXQUFBO0lBQ0csU0FBQTtJQUNILG1CQUFBO0VDREQ7O0VET0E7SUFDQyxVQUFBO0VDSkQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHJhbmRvbUJnOiNjM2QwNGUsICM4Nzc4ZDksICNmZmFiMDAsICNmZjU2MzAsICMwMmI4ZDksICM1MzkxZWU7XHJcblxyXG5AZm9yICRpIGZyb20gMSB0aHJvdWdoIGxlbmd0aCgkcmFuZG9tQmcpIHtcclxuXHQuZGl2LSN7JGl9IHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IG50aCgkcmFuZG9tQmcsICRpKTtcclxuXHR9XHJcbn1cclxuXHJcbi5hYm91dC1rZXktZGlmZntcclxuICAgIGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQuanBnKSBuby1yZXBlYXQgYm90dG9tIGNlbnRlciAjMWQ0Yjc2O1xyXG4gICAgcGFkZGluZzo3MHB4IDA7XHJcbiAgICBoMXtcclxuICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuICAgIH1cclxuICAgIHVse1xyXG5cdFx0bWFyZ2luLXRvcDozNXB4O1xyXG5cdFx0bGl7XHJcblx0XHRcdHBhZGRpbmc6IDAgMCAyMHB4IDIwcHg7XHJcblx0XHRcdGxpc3Qtc3R5bGU6IG5vbmUgb3V0c2lkZTtcclxuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcblx0XHRcdCY6OmJlZm9yZXtcclxuXHRcdFx0XHRjb250ZW50OiBcIiBcIjtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0XHRcdHRvcDo4cHg7XHJcblx0XHRcdFx0bGVmdDowcHg7XHJcblx0XHRcdFx0d2lkdGg6IDEwcHg7XHJcblx0XHRcdFx0aGVpZ2h0OjEwcHg7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdG1hcmdpbi1yaWdodDogMTBweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG4gICAgfVxyXG59XHJcbi5ub3RlLWRlc2N7XHJcblx0cGFkZGluZy10b3A6MDtcclxufVxyXG4uYWJvdXQtaW5mb3tcclxuXHRwYWRkaW5nOjA7XHJcbiAgICBiYWNrZ3JvdW5kOiNlNWYwZmE7XHJcbiAgICAudi1hbGlnbntcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgcHtcclxuXHRcdFx0YWxpZ24tc2VsZjogY2VudGVyO1xyXG5cdFx0XHRwYWRkaW5nLWxlZnQ6MTUwcHhcclxuICAgICAgICB9XHJcblx0fVxyXG5cdGltZ3tcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0fVxyXG59XHJcblxyXG5cclxuJHJlZDojYjk2NDZlO1xyXG4kYmx1ZTojMjc2Y2FhO1xyXG4kZ3JlZW46IzRiYmI1NztcclxuXHJcbi5pY29uLWNpcmNsZXtcclxuXHRoZWlnaHQ6OTBweDtcclxuXHR3aWR0aDo5MHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6NTAlO1xyXG5cdG1hcmdpbjowIGF1dG87XHJcblx0aXtcclxuXHRcdGxpbmUtaGVpZ2h0OjkwcHg7XHJcblx0XHRzdmd7XHJcblx0XHRcdGZpbGw6I2ZmZjtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcbn1cclxuXHJcbi5zZWN0aW9uLWluZm97XHJcbiAgICBwYWRkaW5nOjcwcHggMDtcclxuXHQucGFuZWwtY29udGFpbmVye1xyXG4gICAgICAgIG1hcmdpbi10b3A6NjBweDtcclxuXHRcdG1pbi1oZWlnaHQ6IDMzMHB4O1xyXG5cdFx0cGVyc3BlY3RpdmU6IDEwMDBweDtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHQmOmhvdmVyIC5wYW5lbHtcclxuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5wYW5lbHtcclxuXHRcdGNvbG9yOiNmZmY7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcclxuXHRcdHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcblx0XHQucGFuZWwtZnJvbnR7XHJcblx0XHRcdGJvcmRlci10b3A6IDVweCBzb2xpZDtcclxuXHRcdFx0cGFkZGluZy10b3A6IDI1cHg7XHJcblx0XHRcdHotaW5kZXg6IDE7XHJcblx0XHRcdCY6OmFmdGVye1xyXG5cdFx0XHRcdGNvbnRlbnQ6Jyc7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHRcdFx0aGVpZ2h0OjEwMCU7XHJcblx0XHRcdFx0YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC41KTtcclxuXHRcdFx0XHR0b3A6IDA7XHJcblx0XHRcdFx0bGVmdDogMDtcclxuXHRcdFx0XHR6LWluZGV4OiAtMTtcclxuXHRcdFx0fVxyXG5cdFx0XHQmLnJlZHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOnVybCguLi8uLi9hc3NldHMvaW1hZ2VzLzEuanBnKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcclxuXHRcdFx0XHRib3JkZXItY29sb3I6ICRyZWQ7XHJcblx0XHRcdFx0LmNpcmNsZS1iZ3tcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6JHJlZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdCYuYmx1ZXtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOnVybCguLi8uLi9hc3NldHMvaW1hZ2VzLzIuanBnKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcclxuXHRcdFx0XHRib3JkZXItY29sb3I6ICRibHVlO1xyXG5cdFx0XHRcdC5jaXJjbGUtYmd7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiRibHVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0Ji5ncmVlbntcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOnVybCguLi8uLi9hc3NldHMvaW1hZ2VzLzMuanBnKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcclxuXHRcdFx0XHRib3JkZXItY29sb3I6ICRncmVlbjtcclxuXHRcdFx0XHQuY2lyY2xlLWJne1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjokZ3JlZW47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0LnBhbmVsLWJhY2t7XHJcblx0XHRcdHBhZGRpbmctdG9wOiAyNXB4O1xyXG5cdFx0XHQmLnJlZHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiRyZWQ7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdCYuYmx1ZXtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiRibHVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQmLmdyZWVue1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6JGdyZWVuO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHJcblx0XHQucGFuZWwtZnJvbnQsIC5wYW5lbC1iYWNre1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdFx0XHRiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0XHR9XHJcblx0XHQucGFuZWwtYmFja1xyXG5cdFx0e1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxuXHRcdFx0cHtcclxuXHRcdFx0XHRwYWRkaW5nOjEwcHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGg1e1xyXG5cdFx0XHRtYXJnaW46MjBweCAwO1xyXG5cdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0fVxyXG5cdFx0cHtcclxuXHRcdFx0bWFyZ2luOjA7XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLmxlYWRlci1zaGlwe1xyXG5cdFx0bWFyZ2luLXRvcDo0MHB4O1xyXG5cdFx0cGFkZGluZzowO1xyXG5cdFx0Ji5maXJzdC1jaGlsZHtcclxuXHRcdFx0YmFja2dyb3VuZDojZjJmMmYyOyBcclxuXHRcdFx0cGFkZGluZy1ib3R0b206NDBweDtcclxuXHRcdH1cclxuXHRcdCY6bGFzdC1jaGlsZHtcclxuXHRcdFx0cGFkZGluZy1ib3R0b206MzBweDtcclxuXHRcdFx0LmRpdi1jZW50ZXJ7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTo1MHB4O1xyXG5cdFx0XHR9IFxyXG5cdFx0XHRpbWd7XHJcblx0XHRcdFx0bWFyZ2luOiAwIGF1dG8gMzBweDtcclxuXHRcdFx0XHR3aWR0aDogODAlO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0cHtcclxuXHRcdHBhZGRpbmctdG9wOjQwcHg7XHJcblx0XHRhe1xyXG5cdFx0XHRjb2xvcjojMjE0ZjdhO1xyXG5cdFx0XHRmb250LXdlaWdodDpib2xkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRpbWd7XHJcblx0XHR3aWR0aDphdXRvO1xyXG5cdFx0bWFyZ2luOiAwIDQwcHggMHB4IDA7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0fVxyXG5cdC50aXRsZS1uYW1le1xyXG5cdFx0Zm9udC1zaXplOjI1cHg7XHJcblx0XHRmb250LXdlaWdodDpib2xkO1xyXG5cdH1cclxuXHQudGl0bGUtaW5mb3tcclxuXHRcdGZvbnQtc2l6ZToxNnB4O1xyXG5cdFx0Y29sb3I6IzVDNUM1QztcclxuXHR9XHJcblx0LmJ0bntcclxuXHRcdHBhZGRpbmc6MTBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6NXB4O1xyXG5cdFx0Zm9udC1zaXplOjEycHg7XHJcblx0fVxyXG59XHJcblxyXG4ud2h5LXVze1xyXG5cdHBhZGRpbmc6MCAwIDcwcHggMDtcclxuXHQucm93e1xyXG5cdFx0JjpudGgtY2hpbGQoZXZlbil7XHJcblx0XHRcdHBhZGRpbmc6NzBweCAwO1xyXG5cdFx0fVxyXG5cdFx0JjpsYXN0LWNoaWxke1xyXG5cdFx0XHRwYWRkaW5nOjQ1cHggMCAwIDA7XHJcblx0XHR9XHJcblx0fVxyXG5cdGg2e1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0fVxyXG5cdHVse1xyXG5cdFx0bWFyZ2luLXRvcDozNXB4O1xyXG5cdFx0IGxpe1xyXG5cdFx0XHRwYWRkaW5nOiAwIDAgMjBweCAyMHB4O1xyXG5cdFx0XHRsaXN0LXN0eWxlOiBub25lIG91dHNpZGU7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHQmOjpiZWZvcmV7XHJcblx0XHRcdFx0Y29udGVudDogXCIgXCI7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogIzIxNGY3YTtcclxuXHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRcdFx0XHR0b3A6OHB4O1xyXG5cdFx0XHRcdGxlZnQ6MHB4O1xyXG5cdFx0XHRcdHdpZHRoOiAxMHB4O1xyXG5cdFx0XHRcdGhlaWdodDoxMHB4O1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi53YS1pbmZve1xyXG5cdGJhY2tncm91bmQ6I2U1ZjBmYTtcclxuXHRwYWRkaW5nOjUwcHg7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ucGFydG5lci1pbmZve1xyXG5cdHBhZGRpbmc6NzBweCAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206MjBweDtcclxuICAgIC5wYW5lbHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjUwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgzMywgNzksIDEyMiwgMC4xKTtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcbi5tb2RhbC1ib2R5e1xyXG4gICAgaDZ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICBhe1xyXG4gICAgICAgIGNvbG9yOiMyNzZjYWE7XHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgY29sb3I6IzAwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG5cdC5hYm91dC10YWJ7XHJcbi5sZWFkZXItc2hpcHtcclxuXHRcdGltZ3tcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHQgICAgbWFyZ2luOiAwO1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOjIwcHg7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbi5hYm91dC1pbmZve1xyXG5cdC52LWFsaWdue1xyXG5cdFx0cHtcclxuXHRcdFx0cGFkZGluZzowO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG59IiwiLmRpdi0xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MzZDA0ZTtcbn1cblxuLmRpdi0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg3NzhkOTtcbn1cblxuLmRpdi0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWIwMDtcbn1cblxuLmRpdi00IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTYzMDtcbn1cblxuLmRpdi01IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyYjhkOTtcbn1cblxuLmRpdi02IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzOTFlZTtcbn1cblxuLmFib3V0LWtleS1kaWZmIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQuanBnKSBuby1yZXBlYXQgYm90dG9tIGNlbnRlciAjMWQ0Yjc2O1xuICBwYWRkaW5nOiA3MHB4IDA7XG59XG4uYWJvdXQta2V5LWRpZmYgaDEge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5hYm91dC1rZXktZGlmZiB1bCB7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG59XG4uYWJvdXQta2V5LWRpZmYgdWwgbGkge1xuICBwYWRkaW5nOiAwIDAgMjBweCAyMHB4O1xuICBsaXN0LXN0eWxlOiBub25lIG91dHNpZGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5hYm91dC1rZXktZGlmZiB1bCBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ubm90ZS1kZXNjIHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5hYm91dC1pbmZvIHtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogI2U1ZjBmYTtcbn1cbi5hYm91dC1pbmZvIC52LWFsaWduIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5hYm91dC1pbmZvIC52LWFsaWduIHAge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMTUwcHg7XG59XG4uYWJvdXQtaW5mbyBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmljb24tY2lyY2xlIHtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5pY29uLWNpcmNsZSBpIHtcbiAgbGluZS1oZWlnaHQ6IDkwcHg7XG59XG4uaWNvbi1jaXJjbGUgaSBzdmcge1xuICBmaWxsOiAjZmZmO1xufVxuXG4uc2VjdGlvbi1pbmZvIHtcbiAgcGFkZGluZzogNzBweCAwO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgbWluLWhlaWdodDogMzMwcHg7XG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbC1jb250YWluZXI6aG92ZXIgLnBhbmVsIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCB7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWZyb250IHtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkO1xuICBwYWRkaW5nLXRvcDogMjVweDtcbiAgei1pbmRleDogMTtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1mcm9udDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAtMTtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1mcm9udC5yZWQge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy8xLmpwZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XG4gIGJvcmRlci1jb2xvcjogI2I5NjQ2ZTtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1mcm9udC5yZWQgLmNpcmNsZS1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOTY0NmU7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtZnJvbnQuYmx1ZSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzLzIuanBnKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcbiAgYm9yZGVyLWNvbG9yOiAjMjc2Y2FhO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWZyb250LmJsdWUgLmNpcmNsZS1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzZjYWE7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtZnJvbnQuZ3JlZW4ge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy8zLmpwZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XG4gIGJvcmRlci1jb2xvcjogIzRiYmI1Nztcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1mcm9udC5ncmVlbiAuY2lyY2xlLWJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiYmI1Nztcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1iYWNrIHtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtYmFjay5yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjk2NDZlO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWJhY2suYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzZjYWE7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtYmFjay5ncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YmJiNTc7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtZnJvbnQsIC5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWJhY2sge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1iYWNrIHAge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgaDUge1xuICBtYXJnaW46IDIwcHggMDtcbiAgY29sb3I6ICNmZmY7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCBwIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubGVhZGVyLXNoaXAge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBwYWRkaW5nOiAwO1xufVxuLmxlYWRlci1zaGlwLmZpcnN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG4ubGVhZGVyLXNoaXA6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuLmxlYWRlci1zaGlwOmxhc3QtY2hpbGQgLmRpdi1jZW50ZXIge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuLmxlYWRlci1zaGlwOmxhc3QtY2hpbGQgaW1nIHtcbiAgbWFyZ2luOiAwIGF1dG8gMzBweDtcbiAgd2lkdGg6IDgwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubGVhZGVyLXNoaXAgcCB7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuLmxlYWRlci1zaGlwIHAgYSB7XG4gIGNvbG9yOiAjMjE0ZjdhO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5sZWFkZXItc2hpcCBpbWcge1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiAwIDQwcHggMHB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5sZWFkZXItc2hpcCAudGl0bGUtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubGVhZGVyLXNoaXAgLnRpdGxlLWluZm8ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNUM1QzVDO1xufVxuLmxlYWRlci1zaGlwIC5idG4ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLndoeS11cyB7XG4gIHBhZGRpbmc6IDAgMCA3MHB4IDA7XG59XG4ud2h5LXVzIC5yb3c6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgcGFkZGluZzogNzBweCAwO1xufVxuLndoeS11cyAucm93Omxhc3QtY2hpbGQge1xuICBwYWRkaW5nOiA0NXB4IDAgMCAwO1xufVxuLndoeS11cyBoNiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLndoeS11cyB1bCB7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG59XG4ud2h5LXVzIHVsIGxpIHtcbiAgcGFkZGluZzogMCAwIDIwcHggMjBweDtcbiAgbGlzdC1zdHlsZTogbm9uZSBvdXRzaWRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi53aHktdXMgdWwgbGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBiYWNrZ3JvdW5kOiAjMjE0ZjdhO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDhweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLndhLWluZm8ge1xuICBiYWNrZ3JvdW5kOiAjZTVmMGZhO1xuICBwYWRkaW5nOiA1MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wYXJ0bmVyLWluZm8ge1xuICBwYWRkaW5nOiA3MHB4IDA7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuLnBhcnRuZXItaW5mbyAucGFuZWwge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDMzLCA3OSwgMTIyLCAwLjEpO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ubW9kYWwtYm9keSBoNiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1vZGFsLWJvZHkgYSB7XG4gIGNvbG9yOiAjMjc2Y2FhO1xufVxuLm1vZGFsLWJvZHkgYTpob3ZlciB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmFib3V0LXRhYiAubGVhZGVyLXNoaXAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5hYm91dC1pbmZvIC52LWFsaWduIHAge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn0iXX0= */");

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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let AboutComponent = class AboutComponent {
    constructor(config, modalService) {
        this.modalService = modalService;
        this.keydiff = [
            { list: 'We provide custom application programming services to end customers.' },
            { list: 'Our competence and experience ensure that we provide excellent services and products to our customers.' },
            { list: 'At every stage of the development process, from conceptual design to product release, the highest quality standards are maintained.' },
            { list: 'Our extensive communication facilities allow us to keep in touch with our customers 24X7.' }
        ];
        this.bulletPoint = [
            { list: 'Extensive experience and expertise in application development and product engineering for various clients.' },
            { list: 'Expertise in Agile, RUP and Iterative methodologies across Microsoft technologies.' },
            { list: 'Extensive experience in implementation of end to end projects in various business domains and technical platforms.' },
            { list: 'Mature software development quality processes and methodologies. Experience and expertise of consulting in technology and operations.' },
            { list: 'ARKEDGE has a special focus on software test automation using market standard tools' }
        ];
        this.bulletPoint_2 = [
            { list: 'The Application Development CoE is engaged in designing, developing, maintaining, and testing enterprise scale applications using the lat est Microsoft® technologies and standards.' },
            { list: 'The DLM CoE is the combination of processes, strategies and applied technologies to manage and improve the lifecycle of data / information across an enterprise.' },
            { list: 'The Product Engineering CoE is involved in architecting and building .Net driven business solutions right from inception (by using agile development methodology only).' },
            { list: 'The Software testing CoE independent testing services for each practice area along with third party testing services spanning the entire product development life-cycle.' },
            { list: 'The Resourcing (Recruitment) CoE is engaged to provide wide range of Recruitment Services as well as background screening solutions.' },
            { list: 'The Training CoE further extends our services spectrums with highest quality training in all major areas of information technology and management.' }
        ];
        this.tabs = [
            {
                title: 'About Us', decs: 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. The organization is making its presence felt on the engineering solution and services, Staffing and IT training circuit. Equipped with cross cultural operating experience; an asset, it drives the organization to deliver nothing but the best.',
                decs_2: 'from different backgrounds and enlarge the creative potential of ARKEDGE. The competence that they offer contains a wide range of custom programming skills including the latest and most effective development in Microsoft technologies.'
            },
            {
                title: 'Why ARKEDGE', decs: 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. ',
                decs_2: 'from different backgrounds'
            },
            {
                title: 'Centers of Excellence', decs: 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. ',
                decs_2: 'from different backgrounds'
            },
            {
                title: 'Vision & Mission', decs: 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. ',
                decs_2: 'from different backgrounds'
            },
            {
                title: 'Values', decs: 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. ',
                decs_2: 'from different backgrounds'
            },
            {
                title: 'Leadership', decs: 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. ',
                decs_2: 'from different backgrounds'
            },
            {
                title: 'News', decs: 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. ',
                decs_2: 'from different backgrounds'
            },
        ];
        this.news = [
            { img: 'assets/images/news', desc_1: 'Arkedge Technologies has schedule to launch Survey ans Poll product on 05 January 2018.', desc_2: 'Arkedge Technologies has schedule to launch Survey ans Poll product on 05 January 2018... Please click on news and read the details of news section. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { img: 'assets/images/news', desc_1: 'Arkedge', desc_2: 'Technologies bags new Spend Analysis project...' },
            { img: 'assets/images/news', desc_1: 'Arkedge', desc_2: 'Technologies bags new Spend Analysis project...' },
            { img: 'assets/images/news', desc_1: 'Arkedge', desc_2: 'Technologies bags new Spend Analysis project...' },
            { img: 'assets/images/news', desc_1: 'Arkedge', desc_2: 'Technologies bags new Spend Analysis project...' },
        ];
        this.partnerInfo = [
            { title: 'Mint International', desc: 'HR and Recruitment cell.', url: 'http://www.mintinternational.com/' },
            { title: 'Best Containers', desc: 'One of the biggest manufacturers in bunk and porta cabins, houses etc.', url: 'http://bcc-india.com' },
            { title: 'Dreaming Code', desc: 'The biggest custom application development group in USA.', url: 'http://dreamingcode.com' },
            { title: 'Royal College', desc: 'One of the leading college in Mira Road, Thane.', url: 'http://royalcollegemiraroad.edu.in/' },
            { title: 'Alshariah', desc: 'Arab Institute for Studies and Development Programs', url: 'http://alshariah.com/' },
            { title: 'Miracle Foods', desc: 'The biggest dealer in agro products, rice, basmati rice, spices', url: 'http://miraclefoods.in/' }
        ];
        this.closeResult = '';
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
        this.leaders = [
            { name: 'Same Martinez',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            },
            { name: 'Same Martinez',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            },
            { name: 'Same Martinez',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            },
            { name: 'Same Martinez',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            },
            { name: 'Same Martinez',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            },
            { name: 'Same Martinez',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            }
        ];
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title_1' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    ngOnInit() {
    }
};
AboutComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModalConfig"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
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
/* harmony default export */ __webpack_exports__["default"] = (".section-advance-solution ul li a {\n  padding: 15px;\n  margin-bottom: 5px;\n  background: #e5e5e5;\n  color: #333333;\n  display: block;\n}\n.section-advance-solution ul li a.active {\n  background: #214f7a;\n  color: #fff;\n}\nsection:nth-child(odd) {\n  background: #e5f0fa;\n}\nimg {\n  width: 100%;\n}\n.info .panel {\n  padding: 20px;\n  background: #e5f0fa;\n}\n.info p {\n  position: relative;\n  padding-right: 125px;\n}\n.info p i {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.info .panel-heading h6 {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWR2YW5jZXNvbHV0aW9uL0Y6XFxnaXRodWJcXHdvcmsvc3JjXFxhcHBcXGFkdmFuY2Vzb2x1dGlvblxcYWR2YW5jZXNvbHV0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZHZhbmNlc29sdXRpb24vYWR2YW5jZXNvbHV0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdZO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0ZoQjtBREdnQjtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQ0RwQjtBRFFBO0VBQ0ksbUJBQUE7QUNMSjtBRFFBO0VBQ0ksV0FBQTtBQ0xKO0FEU0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNOUjtBRFFJO0VBQ0csa0JBQUE7RUFDQSxvQkFBQTtBQ05QO0FET087RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0FDTFg7QURTUTtFQUNJLGlCQUFBO0FDUFoiLCJmaWxlIjoic3JjL2FwcC9hZHZhbmNlc29sdXRpb24vYWR2YW5jZXNvbHV0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24tYWR2YW5jZS1zb2x1dGlvbntcclxuICAgIHVse1xyXG4gICAgICAgIGxpe1xyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzoxNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNlNWU1ZTU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojMzMzMzMzO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgICYuYWN0aXZle1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IzIxNGY3YTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbnNlY3Rpb246bnRoLWNoaWxkKG9kZCl7XHJcbiAgICBiYWNrZ3JvdW5kOiNlNWYwZmE7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gfVxyXG5cclxuLmluZm97XHJcbiAgICAucGFuZWx7XHJcbiAgICAgICAgcGFkZGluZzoyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6I2U1ZjBmYTtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICBwYWRkaW5nLXJpZ2h0OjEyNXB4O1xyXG4gICAgICAgaXtcclxuICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgcmlnaHQ6MDtcclxuICAgICAgICAgICB0b3A6MDtcclxuICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wYW5lbC1oZWFkaW5ne1xyXG4gICAgICAgIGg2e1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5zZWN0aW9uLWFkdmFuY2Utc29sdXRpb24gdWwgbGkgYSB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnNlY3Rpb24tYWR2YW5jZS1zb2x1dGlvbiB1bCBsaSBhLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMyMTRmN2E7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5zZWN0aW9uOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZDogI2U1ZjBmYTtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbmZvIC5wYW5lbCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNlNWYwZmE7XG59XG4uaW5mbyBwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXJpZ2h0OiAxMjVweDtcbn1cbi5pbmZvIHAgaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cbi5pbmZvIC5wYW5lbC1oZWFkaW5nIGg2IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */");

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let AdvancesolutionComponent = class AdvancesolutionComponent {
    constructor(titleService) {
        this.titleService = titleService;
    }
    ngOnInit() {
    }
};
AdvancesolutionComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
];
AdvancesolutionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-advancesolution',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./advancesolution.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/advancesolution/advancesolution.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./advancesolution.component.scss */ "./src/app/advancesolution/advancesolution.component.scss")).default]
    })
], AdvancesolutionComponent);



/***/ }),

/***/ "./src/app/ai/ai.component.scss":
/*!**************************************!*\
  !*** ./src/app/ai/ai.component.scss ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FpL2FpLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ai/ai.component.ts":
/*!************************************!*\
  !*** ./src/app/ai/ai.component.ts ***!
  \************************************/
/*! exports provided: AiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AiComponent", function() { return AiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AiComponent = class AiComponent {
    constructor() { }
    ngOnInit() {
    }
};
AiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ai',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ai.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ai/ai.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ai.component.scss */ "./src/app/ai/ai.component.scss")).default]
    })
], AiComponent);



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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _ourproduct_ourproduct_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ourproduct/ourproduct.component */ "./src/app/ourproduct/ourproduct.component.ts");
/* harmony import */ var _managedservice_managedservice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./managedservice/managedservice.component */ "./src/app/managedservice/managedservice.component.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company/company.component */ "./src/app/company/company.component.ts");
/* harmony import */ var _career_career_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./career/career.component */ "./src/app/career/career.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./client/client.component */ "./src/app/client/client.component.ts");
/* harmony import */ var _projectengineering_projectengineering_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./projectengineering/projectengineering.component */ "./src/app/projectengineering/projectengineering.component.ts");
/* harmony import */ var _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./testimonials/testimonials.component */ "./src/app/testimonials/testimonials.component.ts");
/* harmony import */ var _technology_technology_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./technology/technology.component */ "./src/app/technology/technology.component.ts");
/* harmony import */ var _industries_industries_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./industries/industries.component */ "./src/app/industries/industries.component.ts");
/* harmony import */ var _advancesolution_advancesolution_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./advancesolution/advancesolution.component */ "./src/app/advancesolution/advancesolution.component.ts");
/* harmony import */ var _staffing_staffing_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./staffing/staffing.component */ "./src/app/staffing/staffing.component.ts");
/* harmony import */ var _datamgmt_datamgmt_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./datamgmt/datamgmt.component */ "./src/app/datamgmt/datamgmt.component.ts");
/* harmony import */ var _sitemap_sitemap_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sitemap/sitemap.component */ "./src/app/sitemap/sitemap.component.ts");
/* harmony import */ var _ai_ai_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ai/ai.component */ "./src/app/ai/ai.component.ts");
























const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'Advancesolution', component: _advancesolution_advancesolution_component__WEBPACK_IMPORTED_MODULE_19__["AdvancesolutionComponent"] },
    { path: 'Technology', component: _technology_technology_component__WEBPACK_IMPORTED_MODULE_17__["TechnologyComponent"] },
    { path: 'Industries', component: _industries_industries_component__WEBPACK_IMPORTED_MODULE_18__["IndustriesComponent"] },
    { path: 'OurProduct', component: _ourproduct_ourproduct_component__WEBPACK_IMPORTED_MODULE_4__["OurproductComponent"] },
    { path: 'ManagedServices', component: _managedservice_managedservice_component__WEBPACK_IMPORTED_MODULE_5__["ManagedserviceComponent"] },
    { path: 'Company', component: _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"] },
    { path: 'Career', component: _career_career_component__WEBPACK_IMPORTED_MODULE_7__["CareerComponent"] },
    { path: 'Contactus', component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_8__["ContactusComponent"] },
    { path: 'NewsAndEventUpdate', component: _news_news_component__WEBPACK_IMPORTED_MODULE_12__["NewsComponent"] },
    { path: 'WhoWeAre', component: _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"] },
    { path: 'WhyArkedgeTchnologies', component: _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"] },
    { path: 'CentersOfExcellence', component: _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"] },
    { path: 'VisionAndMission', component: _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"] },
    { path: 'ValueOfExcellence', component: _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"] },
    { path: 'OurLeadership', component: _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"] },
    { path: 'TestimonialClientSpeaks', component: _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_16__["TestimonialsComponent"] },
    { path: 'OurHappyClients', component: _client_client_component__WEBPACK_IMPORTED_MODULE_14__["ClientComponent"] },
    { path: 'NewsAndEventUpdate', component: _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"] },
    { path: 'ValueOfExcellence', component: _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"] },
    { path: 'OurHappyClients', component: _client_client_component__WEBPACK_IMPORTED_MODULE_14__["ClientComponent"] },
    { path: 'SoftwareEngineering', component: _projectengineering_projectengineering_component__WEBPACK_IMPORTED_MODULE_15__["ProjectengineeringComponent"] },
    { path: 'ItStafingAndServices', component: _staffing_staffing_component__WEBPACK_IMPORTED_MODULE_20__["StaffingComponent"] },
    { path: 'DataMangment', component: _datamgmt_datamgmt_component__WEBPACK_IMPORTED_MODULE_21__["DatamgmtComponent"] },
    { path: 'Sitemap', component: _sitemap_sitemap_component__WEBPACK_IMPORTED_MODULE_22__["SitemapComponent"] },
    { path: 'ai', component: _ai_ai_component__WEBPACK_IMPORTED_MODULE_23__["AiComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _advancesolution_advancesolution_component__WEBPACK_IMPORTED_MODULE_19__["AdvancesolutionComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
            _ourproduct_ourproduct_component__WEBPACK_IMPORTED_MODULE_4__["OurproductComponent"],
            _managedservice_managedservice_component__WEBPACK_IMPORTED_MODULE_5__["ManagedserviceComponent"],
            _company_company_component__WEBPACK_IMPORTED_MODULE_6__["CompanyComponent"],
            _career_career_component__WEBPACK_IMPORTED_MODULE_7__["CareerComponent"],
            _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_8__["ContactusComponent"],
            _news_news_component__WEBPACK_IMPORTED_MODULE_12__["NewsComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
            _client_client_component__WEBPACK_IMPORTED_MODULE_14__["ClientComponent"],
            _technology_technology_component__WEBPACK_IMPORTED_MODULE_17__["TechnologyComponent"],
            _industries_industries_component__WEBPACK_IMPORTED_MODULE_18__["IndustriesComponent"],
            _projectengineering_projectengineering_component__WEBPACK_IMPORTED_MODULE_15__["ProjectengineeringComponent"],
            _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_16__["TestimonialsComponent"],
            _staffing_staffing_component__WEBPACK_IMPORTED_MODULE_20__["StaffingComponent"],
            _datamgmt_datamgmt_component__WEBPACK_IMPORTED_MODULE_21__["DatamgmtComponent"],
            _sitemap_sitemap_component__WEBPACK_IMPORTED_MODULE_22__["SitemapComponent"],
            _ai_ai_component__WEBPACK_IMPORTED_MODULE_23__["AiComponent"]
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: false, scrollPositionRestoration: 'enabled', }),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_11__["SlickCarouselModule"]
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
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  color: #555555;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  line-height: 26px;\n}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.remove-scroll {\n  overflow: hidden;\n}\n\n.scroll-top {\n  position: fixed;\n  bottom: 5px;\n  right: 5px;\n  outline: none;\n}\n\n.scroll-top svg {\n  fill: #eab119;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  color: #191919;\n}\n\nh1 {\n  font-size: 40px;\n  margin-bottom: 40px;\n  text-transform: uppercase;\n}\n\nh2 {\n  font-size: 34px;\n}\n\nh3 {\n  font-size: 30px;\n}\n\nh4 {\n  font-size: 26px;\n}\n\nh5 {\n  font-size: 22px;\n}\n\nh6 {\n  font-size: 18px;\n  line-height: 28px;\n  font-weight: bold;\n}\n\nh1 {\n  font-weight: bold;\n}\n\n.running-text {\n  font-size: 18px;\n  font-weight: bold;\n  line-height: 30px;\n  color: #5c5c5c;\n}\n\na {\n  cursor: pointer;\n}\n\nimg {\n  width: 100%;\n}\n\n.center {\n  text-align: center;\n}\n\n.heading-highlight {\n  color: #276CAA;\n}\n\n.v-flex {\n  display: flex;\n}\n\nsection {\n  padding: 70px 0;\n}\n\n.btn {\n  font-size: 16px;\n  font-weight: bold;\n  border-radius: 30px;\n  padding: 15px 50px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  border: none;\n}\n\n.btn + .btn {\n  margin-left: 15px;\n}\n\n.btn.btn-primary {\n  background: #276caa;\n}\n\n.btn:hover {\n  opacity: 0.8;\n}\n\nsvg {\n  vertical-align: middle;\n  margin: auto;\n  align-content: center;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n.icon-large > svg {\n  width: 100px;\n  height: 100px;\n}\n\n.icon-medium > svg {\n  width: 50px;\n  height: 50px;\n}\n\n.icon-small > svg {\n  width: 34px;\n  height: 34px;\n}\n\n.icon-ex-small > svg {\n  width: 24px;\n  height: 24px;\n}\n\n.slick-slider {\n  width: 96%;\n  margin: auto;\n}\n\n.slick-slider .slick-prev:before, .slick-slider .slick-next:before {\n  color: #000;\n}\n\n.section-product .slick-list {\n  padding: 40px 5px 60px !important;\n}\n\n.inner-banner {\n  position: relative;\n  height: 300px;\n  overflow: hidden;\n}\n\n.inner-banner img {\n  width: 100%;\n}\n\n.inner-banner .page-title {\n  position: absolute;\n  bottom: 0px;\n  background: rgba(255, 255, 255, 0.6);\n  width: 100%;\n  height: 100%;\n  padding: 10px 0;\n  color: #214f7a;\n}\n\n.inner-banner .page-title .row {\n  margin-top: 170px;\n}\n\n.inner-banner .page-title h1 {\n  margin: 0;\n}\n\n.inner-banner .page-title h6 {\n  line-height: 25px;\n  font-weight: bold;\n  color: #214f7a;\n}\n\ninput.form-control {\n  border-radius: 150px;\n  height: auto;\n  padding: 0.65rem 1rem;\n}\n\ntextarea.form-control {\n  border-radius: 15px;\n  resize: none;\n}\n\n.accordion .card {\n  border-radius: 0px;\n  border: none;\n}\n\n.accordion .card .card-header {\n  border: none;\n  background: none;\n  padding: 0 0 15px;\n}\n\n.accordion .card .card-header .btn {\n  border-radius: 0;\n  padding: 10px 15px;\n  background: #214f7a;\n  width: 100%;\n  text-align: left;\n  color: #fff;\n  text-decoration: none;\n}\n\n.accordion .card .card-header .btn.collapsed {\n  background: #e5e5e5;\n  color: #333333;\n}\n\n.section-project-engineering .card-body {\n  padding: 0px;\n}\n\n.main-banner .carousel-indicators {\n  bottom: 70px;\n}\n\n.div-center {\n  margin: 0 auto;\n}\n\nsection h2 {\n  margin-bottom: 30px;\n}\n\n.modal {\n  top: 50%;\n  transform: translateY(-250px);\n}\n\n.inner-nav-tab {\n  padding: 0;\n  border-top: 1px solid #fff;\n}\n\n.inner-nav-tab .tab-content {\n  margin-top: 70px;\n}\n\n.inner-nav-tab .tab-navigation {\n  background-color: white;\n  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);\n}\n\n.inner-nav-tab .nav-tabs {\n  border: none;\n}\n\n.inner-nav-tab .nav-tabs .nav-item {\n  margin-bottom: 0;\n}\n\n.inner-nav-tab .nav-tabs .nav-item .nav-link {\n  padding: 0.7rem 1rem;\n  border: none;\n  display: block;\n  border-radius: 0;\n  color: #333333;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.inner-nav-tab .nav-tabs .nav-item .nav-link.active, .inner-nav-tab .nav-tabs .nav-item .nav-link:hover {\n  border-bottom: 2px solid #214f7a;\n  color: #214f7a;\n}\n\n.inner-nav-tab .nav-tabs .nav-item .nav-link {\n  text-transform: uppercase;\n}\n\n.career-info .panel, .qa-info .panel {\n  padding: 30px;\n  background: #e5f0fa;\n  height: 100%;\n}\n\n.career-info .panel .panel-body, .qa-info .panel .panel-body {\n  margin-top: 50px;\n}\n\n.career-info .panel h6, .qa-info .panel h6 {\n  font-weight: bold;\n  margin: 0;\n  line-height: 18px;\n}\n\n.career-info .panel p, .qa-info .panel p {\n  margin: 0;\n}\n\n.career-info .panel:hover, .qa-info .panel:hover {\n  background: #214f7a;\n}\n\n.career-info .panel:hover h6, .career-info .panel:hover p, .qa-info .panel:hover h6, .qa-info .panel:hover p {\n  color: #fff;\n}\n\n@media (max-width: 576px) {\n  .inner-nav-tab .tab-navigation {\n    background: none;\n  }\n  .inner-nav-tab .nav-tabs .nav-item {\n    width: 100%;\n    margin-top: 10px;\n    background: #e5e5e5;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container, .container-lg, .container-md, .container-sm, .container-xl {\n    max-width: 1399px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRjpcXGdpdGh1Ylxcd29yay9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDRDs7QURDQTtFQUNDLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNFRDs7QURDQTtFQUNDLGdCQUFBO0FDRUQ7O0FEQ0E7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FDRUQ7O0FEREM7RUFDQyxhQUFBO0FDR0Y7O0FEQ0E7RUFDQyxjQUFBO0FDRUQ7O0FEQUE7RUFDQyxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0dEOztBRERBO0VBQ0MsZUFBQTtBQ0lEOztBREZBO0VBQ0MsZUFBQTtBQ0tEOztBREhBO0VBQ0MsZUFBQTtBQ01EOztBREpBO0VBQ0MsZUFBQTtBQ09EOztBRExBO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNRRDs7QURMQTtFQUNDLGlCQUFBO0FDUUQ7O0FETEE7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNRRDs7QURMQTtFQUNDLGVBQUE7QUNRRDs7QURMQTtFQUNDLFdBQUE7QUNRRDs7QUROQTtFQUNDLGtCQUFBO0FDU0Q7O0FEUEE7RUFDSSxjQUFBO0FDVUo7O0FEUkE7RUFDQyxhQUFBO0FDV0Q7O0FEVEE7RUFDQyxlQUFBO0FDWUQ7O0FEVkE7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNhRDs7QURaQztFQUNFLGlCQUFBO0FDY0g7O0FEWkM7RUFDQyxtQkFBQTtBQ2NGOztBRFpDO0VBQ0MsWUFBQTtBQ2NGOztBRFhBO0VBQ0Msc0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNjRDs7QURaQTtFQUNDLGdCQUFBO0FDZUQ7O0FEYkE7RUFDQyxZQUFBO0VBQ0EsYUFBQTtBQ2dCRDs7QURkQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDaUJEOztBRGZBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNrQkQ7O0FEaEJBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNtQkQ7O0FEaEJBO0VBQ0MsVUFBQTtFQUNBLFlBQUE7QUNtQkQ7O0FEbEJDO0VBQ0MsV0FBQTtBQ29CRjs7QURmQztFQUNDLGlDQUFBO0FDa0JGOztBRGJFO0VBQ0Qsa0JBQUE7RUFDQSxhQUFBO0VBQ0csZ0JBQUE7QUNnQko7O0FEZkk7RUFDSSxXQUFBO0FDaUJSOztBRGZJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDTixXQUFBO0VBQ0EsWUFBQTtFQUNNLGVBQUE7RUFDTixjQUFBO0FDaUJGOztBRGhCRTtFQUNDLGlCQUFBO0FDa0JIOztBRGhCRTtFQUNDLFNBQUE7QUNrQkg7O0FEaEJFO0VBQ0MsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNrQkg7O0FEZEE7RUFDQyxvQkFBQTtFQUNBLFlBQUE7RUFDRyxxQkFBQTtBQ2lCSjs7QURkQTtFQUNDLG1CQUFBO0VBQ0EsWUFBQTtBQ2lCRDs7QURYRTtFQUNDLGtCQUFBO0VBQ0EsWUFBQTtBQ2NIOztBRGJJO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNlTDs7QURkSTtFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ2dCTDs7QURmSztFQUNDLG1CQUFBO0VBQ0EsY0FBQTtBQ2lCTjs7QURUQztFQUNDLFlBQUE7QUNZRjs7QURSRTtFQUNDLFlBQUE7QUNXSDs7QURQQztFQUNDLGNBQUE7QUNVRjs7QURORTtFQUNDLG1CQUFBO0FDU0g7O0FETEM7RUFDQyxRQUFBO0VBQ0EsNkJBQUE7QUNRRjs7QURMQztFQUNDLFVBQUE7RUFDQSwwQkFBQTtBQ1FGOztBRFBFO0VBQ0MsZ0JBQUE7QUNTSDs7QURQRTtFQUNDLHVCQUFBO0VBQ0EsMENBQUE7QUNTSDs7QURORTtFQUNDLFlBQUE7QUNRSDs7QURQRztFQUNDLGdCQUFBO0FDU0o7O0FEUkk7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDVUo7O0FEVEk7RUFDQyxnQ0FBQTtFQUNBLGNBQUE7QUNXTDs7QURKQztFQUNDLHlCQUFBO0FDT0Y7O0FERkU7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFrQkEsWUFBQTtBQ1pIOztBRExHO0VBQ0MsZ0JBQUE7QUNPSjs7QURMSTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDT0o7O0FETEc7RUFDQyxTQUFBO0FDT0o7O0FETEc7RUFDQyxtQkFBQTtBQ09KOztBRE5JO0VBQ0MsV0FBQTtBQ1FMOztBREFDO0VBRUM7SUFDQyxnQkFBQTtFQ0VEO0VEQUE7SUFDQyxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQ0VEO0FBQ0Y7O0FERUM7RUFDQztJQUNDLGlCQUFBO0VDQUQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcblx0Y29sb3I6IzU1NTU1NTtcclxuXHRmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZToxNnB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG59XHJcbnVse1xyXG5cdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuXHRtYXJnaW46MDtcclxuXHRwYWRkaW5nOjA7XHJcbn1cclxuXHJcbi5yZW1vdmUtc2Nyb2xse1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zY3JvbGwtdG9wIHtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0Ym90dG9tOiA1cHg7XHJcblx0cmlnaHQ6IDVweDtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdHN2Z3tcclxuXHRcdGZpbGw6ICNlYWIxMTlcclxuXHR9XHJcblxyXG4gIH1cclxuaDEsaDIsaDMsaDQsaDUsaDZ7XHJcblx0Y29sb3I6IzE5MTkxOTtcclxufVxyXG5oMXtcclxuXHRmb250LXNpemU6NDBweDtcclxuXHRtYXJnaW4tYm90dG9tOjQwcHg7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5oMntcclxuXHRmb250LXNpemU6MzRweDtcclxufVxyXG5oM3tcclxuXHRmb250LXNpemU6MzBweDtcclxufVxyXG5oNHtcclxuXHRmb250LXNpemU6MjZweDtcclxufVxyXG5oNXtcclxuXHRmb250LXNpemU6MjJweDtcclxufVxyXG5oNntcclxuXHRmb250LXNpemU6MThweDsgXHJcblx0bGluZS1oZWlnaHQ6IDI4cHg7XHJcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHJcbn1cclxuaDF7XHJcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxufVxyXG5cclxuLnJ1bm5pbmctdGV4dHtcclxuXHRmb250LXNpemU6MThweDtcclxuXHRmb250LXdlaWdodDpib2xkO1xyXG5cdGxpbmUtaGVpZ2h0OjMwcHg7XHJcblx0Y29sb3I6IzVjNWM1YztcclxufVxyXG5cclxuYXtcclxuXHRjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5cclxuaW1ne1xyXG5cdHdpZHRoOjEwMCU7XHJcbn1cclxuLmNlbnRlcntcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG59XHRcclxuLmhlYWRpbmctaGlnaGxpZ2h0e1xyXG4gICAgY29sb3I6IzI3NkNBQTtcclxufVxyXG4udi1mbGV4e1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuc2VjdGlvbntcclxuXHRwYWRkaW5nOjcwcHggMDtcclxufVxyXG4uYnRue1xyXG5cdGZvbnQtc2l6ZToxNnB4O1xyXG5cdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcblx0Ym9yZGVyLXJhZGl1czogMzBweDtcclxuXHRwYWRkaW5nOiAxNXB4IDUwcHg7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRsZXR0ZXItc3BhY2luZzogMXB4O1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHQmKyAuYnRue1xyXG5cdFx0XHRtYXJnaW4tbGVmdDoxNXB4O1xyXG5cdH1cclxuXHQmLmJ0bi1wcmltYXJ5e1xyXG5cdFx0YmFja2dyb3VuZDojMjc2Y2FhO1xyXG5cdH1cclxuXHQmOmhvdmVye1xyXG5cdFx0b3BhY2l0eTowLjg7XHJcblx0fVxyXG59XHJcbnN2ZyB7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHRtYXJnaW46IGF1dG87XHJcblx0YWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcbnN2Zzpub3QoOnJvb3QpIHtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5pY29uLWxhcmdlPnN2ZyB7XHJcblx0d2lkdGg6IDEwMHB4O1xyXG5cdGhlaWdodDogMTAwcHg7XHJcbn1cclxuLmljb24tbWVkaXVtPnN2ZyB7XHJcblx0d2lkdGg6IDUwcHg7XHJcblx0aGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5pY29uLXNtYWxsPnN2ZyB7XHJcblx0d2lkdGg6IDM0cHg7XHJcblx0aGVpZ2h0OiAzNHB4O1xyXG59XHJcbi5pY29uLWV4LXNtYWxsPnN2ZyB7XHJcblx0d2lkdGg6IDI0cHg7XHJcblx0aGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4uc2xpY2stc2xpZGVyIHtcclxuXHR3aWR0aDogOTYlO1xyXG5cdG1hcmdpbjogYXV0bztcclxuXHQuc2xpY2stcHJldjpiZWZvcmUsIC5zbGljay1uZXh0OmJlZm9yZXtcclxuXHRcdGNvbG9yOiMwMDA7XHJcblx0fVxyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tcHJvZHVjdHtcclxuXHQuc2xpY2stbGlzdHtcclxuXHRcdHBhZGRpbmc6NDBweCA1cHggNjBweCAhaW1wb3J0YW50O1xyXG5cdH1cclxuICB9XHJcbiBcclxuXHJcbiAgLmlubmVyLWJhbm5lcntcclxuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRoZWlnaHQ6IDMwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgfVxyXG4gICAgLnBhZ2UtdGl0bGV7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTowcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDpyZ2IoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuXHRcdGNvbG9yOiMyMTRmN2E7XHJcblx0XHQucm93e1xyXG5cdFx0XHRtYXJnaW4tdG9wOiAxNzBweDtcclxuXHRcdH1cclxuXHRcdGgxe1xyXG5cdFx0XHRtYXJnaW46MDtcclxuXHRcdH1cclxuXHRcdGg2e1xyXG5cdFx0XHRsaW5lLWhlaWdodDogMjVweDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRcdFx0Y29sb3I6IzIxNGY3YTtcclxuXHRcdH1cclxuICAgIH1cclxufVxyXG5pbnB1dC5mb3JtLWNvbnRyb2x7XHJcblx0Ym9yZGVyLXJhZGl1czogMTUwcHg7XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMC42NXJlbSAxcmVtOyBcclxufVxyXG5cclxudGV4dGFyZWEuZm9ybS1jb250cm9se1xyXG5cdGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblx0cmVzaXplOiBub25lO1xyXG59XHJcblxyXG5cclxuXHJcblx0LmFjY29yZGlvbntcclxuXHRcdC5jYXJke1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOjBweDtcclxuXHRcdFx0Ym9yZGVyOm5vbmU7XHJcblx0XHRcdCAuY2FyZC1oZWFkZXJ7XHJcblx0XHRcdFx0IGJvcmRlcjpub25lO1xyXG5cdFx0XHRcdCBiYWNrZ3JvdW5kOm5vbmU7XHJcblx0XHRcdFx0IHBhZGRpbmc6MCAwIDE1cHg7XHJcblx0XHRcdFx0LmJ0bntcclxuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6MDtcclxuXHRcdFx0XHRcdHBhZGRpbmc6MTBweCAxNXB4O1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDojMjE0ZjdhO1xyXG5cdFx0XHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0XHRcdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHRcdFx0Ji5jb2xsYXBzZWR7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6I2U1ZTVlNTtcclxuXHRcdFx0XHRcdFx0Y29sb3I6IzMzMzMzMztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5zZWN0aW9uLXByb2plY3QtZW5naW5lZXJpbmd7XHJcblx0LmNhcmQtYm9keXtcclxuXHRcdHBhZGRpbmc6MHB4O1xyXG5cdH0gXHJcblx0fVxyXG5cdC5tYWluLWJhbm5lcntcclxuXHRcdC5jYXJvdXNlbC1pbmRpY2F0b3Jze1xyXG5cdFx0XHRib3R0b206IDcwcHg7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuZGl2LWNlbnRlcntcclxuXHRcdG1hcmdpbjowIGF1dG87XHJcblx0fVxyXG5cclxuXHRzZWN0aW9ue1xyXG5cdFx0aDJ7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206MzBweDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5tb2RhbHtcclxuXHRcdHRvcDo1MCU7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1MHB4KTtcclxuXHR9XHJcblxyXG5cdC5pbm5lci1uYXYtdGFie1xyXG5cdFx0cGFkZGluZzowO1xyXG5cdFx0Ym9yZGVyLXRvcDoxcHggc29saWQgI2ZmZjtcclxuXHRcdC50YWItY29udGVudHtcclxuXHRcdFx0bWFyZ2luLXRvcDo3MHB4O1xyXG5cdFx0fVxyXG5cdFx0LnRhYi1uYXZpZ2F0aW9ue1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG5cdFx0XHRib3gtc2hhZG93OiAwcHggM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC5uYXYtdGFicyB7XHJcblx0XHRcdGJvcmRlcjpub25lO1xyXG5cdFx0XHQubmF2LWl0ZW17XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHRcdFx0XHQubmF2LWxpbmt7XHJcblx0XHRcdFx0cGFkZGluZzogLjdyZW0gMXJlbTsgXHJcblx0XHRcdFx0Ym9yZGVyOm5vbmU7XHJcblx0XHRcdFx0ZGlzcGxheTpibG9jaztcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAwO1xyXG5cdFx0XHRcdGNvbG9yOiMzMzMzMzM7XHJcblx0XHRcdFx0Zm9udC1zaXplOjE2cHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRcdFx0XHQmLmFjdGl2ZSwgJjpob3ZlcntcclxuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206MnB4IHNvbGlkICMyMTRmN2E7XHJcblx0XHRcdFx0XHRjb2xvcjojMjE0ZjdhO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5pbm5lci1uYXYtdGFiIC5uYXYtdGFicyAubmF2LWl0ZW0gLm5hdi1saW5re1xyXG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHR9XHJcblxyXG5cclxuXHQuY2FyZWVyLWluZm8sIC5xYS1pbmZve1xyXG5cdFx0LnBhbmVse1xyXG5cdFx0XHRwYWRkaW5nOjMwcHg7XHJcblx0XHRcdGJhY2tncm91bmQ6I2U1ZjBmYTtcclxuXHRcdFx0LnBhbmVsLWJvZHl7XHJcblx0XHRcdFx0bWFyZ2luLXRvcDo1MHB4O1xyXG5cdFx0XHQgfVxyXG5cdFx0XHQgaDZ7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRcdFx0XHRtYXJnaW46MDtcclxuXHRcdFx0XHRsaW5lLWhlaWdodDogMThweDtcclxuXHRcdFx0fVxyXG5cdFx0XHRwe1xyXG5cdFx0XHRcdG1hcmdpbjowO1xyXG5cdFx0XHR9XHJcblx0XHRcdCY6aG92ZXJ7XHJcblx0XHRcdFx0YmFja2dyb3VuZDojMjE0ZjdhO1xyXG5cdFx0XHRcdGg2LCBwe1xyXG5cdFx0XHRcdFx0Y29sb3I6I2ZmZjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aGVpZ2h0OjEwMCU7XHJcblx0XHQgfVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG5cdFx0LmlubmVyLW5hdi10YWJ7XHJcblx0XHQudGFiLW5hdmlnYXRpb257XHJcblx0XHRcdGJhY2tncm91bmQ6IG5vbmU7XHJcblx0XHR9XHJcblx0XHQubmF2LXRhYnMgLm5hdi1pdGVte1xyXG5cdFx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0XHRtYXJnaW4tdG9wOjEwcHg7XHJcblx0XHRcdGJhY2tncm91bmQ6I2U1ZTVlNTtcclxuXHRcdH1cclxuXHJcblx0fX1cclxuXHJcblx0QG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCl7XHJcblx0XHQuY29udGFpbmVyLCAuY29udGFpbmVyLWxnLCAuY29udGFpbmVyLW1kLCAuY29udGFpbmVyLXNtLCAuY29udGFpbmVyLXhse1xyXG5cdFx0XHRtYXgtd2lkdGg6IDEzOTlweDtcclxuXHRcdH1cclxuXHR9XHJcbiIsImJvZHkge1xuICBjb2xvcjogIzU1NTU1NTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ucmVtb3ZlLXNjcm9sbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zY3JvbGwtdG9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDVweDtcbiAgcmlnaHQ6IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5zY3JvbGwtdG9wIHN2ZyB7XG4gIGZpbGw6ICNlYWIxMTk7XG59XG5cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICBjb2xvcjogIzE5MTkxOTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAzNHB4O1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuaDQge1xuICBmb250LXNpemU6IDI2cHg7XG59XG5cbmg1IHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG5oNiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5oMSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucnVubmluZy10ZXh0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjNWM1YzVjO1xufVxuXG5hIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRpbmctaGlnaGxpZ2h0IHtcbiAgY29sb3I6ICMyNzZDQUE7XG59XG5cbi52LWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5zZWN0aW9uIHtcbiAgcGFkZGluZzogNzBweCAwO1xufVxuXG4uYnRuIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcGFkZGluZzogMTVweCA1MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBib3JkZXI6IG5vbmU7XG59XG4uYnRuICsgLmJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuLmJ0bi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6ICMyNzZjYWE7XG59XG4uYnRuOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xufVxuXG5zdmcge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW46IGF1dG87XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuc3ZnOm5vdCg6cm9vdCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaWNvbi1sYXJnZSA+IHN2ZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmljb24tbWVkaXVtID4gc3ZnIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmljb24tc21hbGwgPiBzdmcge1xuICB3aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuXG4uaWNvbi1leC1zbWFsbCA+IHN2ZyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5zbGljay1zbGlkZXIge1xuICB3aWR0aDogOTYlO1xuICBtYXJnaW46IGF1dG87XG59XG4uc2xpY2stc2xpZGVyIC5zbGljay1wcmV2OmJlZm9yZSwgLnNsaWNrLXNsaWRlciAuc2xpY2stbmV4dDpiZWZvcmUge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLnNlY3Rpb24tcHJvZHVjdCAuc2xpY2stbGlzdCB7XG4gIHBhZGRpbmc6IDQwcHggNXB4IDYwcHggIWltcG9ydGFudDtcbn1cblxuLmlubmVyLWJhbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5pbm5lci1iYW5uZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaW5uZXItYmFubmVyIC5wYWdlLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGNvbG9yOiAjMjE0ZjdhO1xufVxuLmlubmVyLWJhbm5lciAucGFnZS10aXRsZSAucm93IHtcbiAgbWFyZ2luLXRvcDogMTcwcHg7XG59XG4uaW5uZXItYmFubmVyIC5wYWdlLXRpdGxlIGgxIHtcbiAgbWFyZ2luOiAwO1xufVxuLmlubmVyLWJhbm5lciAucGFnZS10aXRsZSBoNiB7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMyMTRmN2E7XG59XG5cbmlucHV0LmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci1yYWRpdXM6IDE1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDAuNjVyZW0gMXJlbTtcbn1cblxudGV4dGFyZWEuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcmVzaXplOiBub25lO1xufVxuXG4uYWNjb3JkaW9uIC5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG4uYWNjb3JkaW9uIC5jYXJkIC5jYXJkLWhlYWRlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcGFkZGluZzogMCAwIDE1cHg7XG59XG4uYWNjb3JkaW9uIC5jYXJkIC5jYXJkLWhlYWRlciAuYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjMjE0ZjdhO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5hY2NvcmRpb24gLmNhcmQgLmNhcmQtaGVhZGVyIC5idG4uY29sbGFwc2VkIHtcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbi5zZWN0aW9uLXByb2plY3QtZW5naW5lZXJpbmcgLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLm1haW4tYmFubmVyIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgYm90dG9tOiA3MHB4O1xufVxuXG4uZGl2LWNlbnRlciB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5zZWN0aW9uIGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLm1vZGFsIHtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjUwcHgpO1xufVxuXG4uaW5uZXItbmF2LXRhYiB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmO1xufVxuLmlubmVyLW5hdi10YWIgLnRhYi1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogNzBweDtcbn1cbi5pbm5lci1uYXYtdGFiIC50YWItbmF2aWdhdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4uaW5uZXItbmF2LXRhYiAubmF2LXRhYnMge1xuICBib3JkZXI6IG5vbmU7XG59XG4uaW5uZXItbmF2LXRhYiAubmF2LXRhYnMgLm5hdi1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5pbm5lci1uYXYtdGFiIC5uYXYtdGFicyAubmF2LWl0ZW0gLm5hdi1saW5rIHtcbiAgcGFkZGluZzogMC43cmVtIDFyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmlubmVyLW5hdi10YWIgLm5hdi10YWJzIC5uYXYtaXRlbSAubmF2LWxpbmsuYWN0aXZlLCAuaW5uZXItbmF2LXRhYiAubmF2LXRhYnMgLm5hdi1pdGVtIC5uYXYtbGluazpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjE0ZjdhO1xuICBjb2xvcjogIzIxNGY3YTtcbn1cblxuLmlubmVyLW5hdi10YWIgLm5hdi10YWJzIC5uYXYtaXRlbSAubmF2LWxpbmsge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY2FyZWVyLWluZm8gLnBhbmVsLCAucWEtaW5mbyAucGFuZWwge1xuICBwYWRkaW5nOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjZTVmMGZhO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY2FyZWVyLWluZm8gLnBhbmVsIC5wYW5lbC1ib2R5LCAucWEtaW5mbyAucGFuZWwgLnBhbmVsLWJvZHkge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLmNhcmVlci1pbmZvIC5wYW5lbCBoNiwgLnFhLWluZm8gLnBhbmVsIGg2IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG4uY2FyZWVyLWluZm8gLnBhbmVsIHAsIC5xYS1pbmZvIC5wYW5lbCBwIHtcbiAgbWFyZ2luOiAwO1xufVxuLmNhcmVlci1pbmZvIC5wYW5lbDpob3ZlciwgLnFhLWluZm8gLnBhbmVsOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzIxNGY3YTtcbn1cbi5jYXJlZXItaW5mbyAucGFuZWw6aG92ZXIgaDYsIC5jYXJlZXItaW5mbyAucGFuZWw6aG92ZXIgcCwgLnFhLWluZm8gLnBhbmVsOmhvdmVyIGg2LCAucWEtaW5mbyAucGFuZWw6aG92ZXIgcCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmlubmVyLW5hdi10YWIgLnRhYi1uYXZpZ2F0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICB9XG4gIC5pbm5lci1uYXYtdGFiIC5uYXYtdGFicyAubmF2LWl0ZW0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuY29udGFpbmVyLCAuY29udGFpbmVyLWxnLCAuY29udGFpbmVyLW1kLCAuY29udGFpbmVyLXNtLCAuY29udGFpbmVyLXhsIHtcbiAgICBtYXgtd2lkdGg6IDEzOTlweDtcbiAgfVxufSJdfQ== */");

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
        this.topPosToStartShowing = 100;
        this.router.events.subscribe(routerEvent => {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (routerEvent.url === '/') {
                    this.router.navigate(['home'], { skipLocationChange: true });
                }
            }
        });
    }
    checkScroll() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= this.topPosToStartShowing) {
            this.isShow = true;
        }
        else {
            this.isShow = false;
        }
    }
    // TODO: Cross browsing
    gotoTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    ngOnInit() {
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll')
], AppComponent.prototype, "checkScroll", null);
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
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _space_pipe_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./space.pipe.module */ "./src/app/space.pipe.module.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _space_pipe_module__WEBPACK_IMPORTED_MODULE_10__["CreateSpacePipe"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__["SlickCarouselModule"]
        ],
        providers: [_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]],
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
/* harmony default export */ __webpack_exports__["default"] = (".text-wrap {\n  margin: 50px 0 30px;\n}\n\n.section-career .career {\n  margin-bottom: 70px;\n}\n\n.section-career form {\n  margin-top: 70px;\n}\n\n.section-career form h2 {\n  margin-bottom: 50px;\n}\n\n.section-career .custom-file-label {\n  left: 15px;\n  width: calc(100% - 30px);\n  border-radius: 150px;\n  overflow: hidden;\n  color: #495057;\n}\n\n.section-career .table {\n  margin-bottom: 0px;\n}\n\n.section-career .table thead th {\n  border-bottom: 1px;\n  background: #d6d5d5;\n  color: #000;\n}\n\n.section-career td a {\n  color: #0761a9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZWVyL0Y6XFxnaXRodWJcXHdvcmsvc3JjXFxhcHBcXGNhcmVlclxcY2FyZWVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXJlZXIvY2FyZWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSjs7QURFSTtFQUNJLG1CQUFBO0FDQ1I7O0FEQ0k7RUFJSSxnQkFBQTtBQ0ZSOztBRERRO0VBQ0ksbUJBQUE7QUNHWjs7QURDQTtFQUNJLFVBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtBQ0NKOztBRENRO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNDWjs7QURJSTtFQUNJLGNBQUE7QUNGUiIsImZpbGUiOiJzcmMvYXBwL2NhcmVlci9jYXJlZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC13cmFwe1xyXG4gICAgbWFyZ2luOjUwcHggMCAzMHB4O1xyXG59XHJcbi5zZWN0aW9uLWNhcmVlcntcclxuICAgIC5jYXJlZXJ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTo3MHB4O1xyXG4gICAgfVxyXG4gICAgZm9ybXtcclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYXJnaW4tdG9wOjcwcHg7XHJcbiAgICB9XHJcbi5jdXN0b20tZmlsZS1sYWJlbHtcclxuICAgIGxlZnQ6MTVweDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6MTUwcHg7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxufVxyXG4udGFibGV7XHJcbiAgICBtYXJnaW4tYm90dG9tOjBweDtcclxuICAgIHRoZWFke1xyXG4gICAgICAgIHRoe1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6I2Q2ZDVkNTtcclxuICAgICAgICAgICAgY29sb3I6IzAwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxudGR7XHJcbiAgICBhe1xyXG4gICAgICAgIGNvbG9yOiMwNzYxYTk7XHJcbiAgICB9XHJcbn1cclxufSIsIi50ZXh0LXdyYXAge1xuICBtYXJnaW46IDUwcHggMCAzMHB4O1xufVxuXG4uc2VjdGlvbi1jYXJlZXIgLmNhcmVlciB7XG4gIG1hcmdpbi1ib3R0b206IDcwcHg7XG59XG4uc2VjdGlvbi1jYXJlZXIgZm9ybSB7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG59XG4uc2VjdGlvbi1jYXJlZXIgZm9ybSBoMiB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4uc2VjdGlvbi1jYXJlZXIgLmN1c3RvbS1maWxlLWxhYmVsIHtcbiAgbGVmdDogMTVweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICBib3JkZXItcmFkaXVzOiAxNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6ICM0OTUwNTc7XG59XG4uc2VjdGlvbi1jYXJlZXIgLnRhYmxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLnNlY3Rpb24tY2FyZWVyIC50YWJsZSB0aGVhZCB0aCB7XG4gIGJvcmRlci1ib3R0b206IDFweDtcbiAgYmFja2dyb3VuZDogI2Q2ZDVkNTtcbiAgY29sb3I6ICMwMDA7XG59XG4uc2VjdGlvbi1jYXJlZXIgdGQgYSB7XG4gIGNvbG9yOiAjMDc2MWE5O1xufSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = (".client-speak, .client-info {\n  padding: 70px 0;\n}\n\n.client-info {\n  padding-bottom: 20px;\n}\n\n.client-info .panel {\n  margin-bottom: 50px;\n  border: 1px solid rgba(33, 79, 122, 0.1);\n  padding: 20px;\n}\n\n.client-speak {\n  background: #e5f0fa;\n}\n\n.client-speak h1 {\n  margin-bottom: 25px;\n}\n\n.modal-body h6 {\n  font-weight: bold;\n}\n\n.modal-body a {\n  color: #276caa;\n}\n\n.modal-body a:hover {\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50L0Y6XFxnaXRodWJcXHdvcmsvc3JjXFxhcHBcXGNsaWVudFxcY2xpZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jbGllbnQvY2xpZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7QUNDSjs7QURBSTtFQUNJLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxhQUFBO0FDRVI7O0FEQ0E7RUFDSSxtQkFBQTtBQ0VKOztBRERJO0VBQ0ksbUJBQUE7QUNHUjs7QURFSTtFQUNJLGlCQUFBO0FDQ1I7O0FEQ0k7RUFDSSxjQUFBO0FDQ1I7O0FEQVE7RUFDSSxXQUFBO0FDRVoiLCJmaWxlIjoic3JjL2FwcC9jbGllbnQvY2xpZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsaWVudC1zcGVhaywgLmNsaWVudC1pbmZvIHtcclxuICAgIHBhZGRpbmc6NzBweCAwO1xyXG59XHJcblxyXG4uY2xpZW50LWluZm97XHJcbiAgICBwYWRkaW5nLWJvdHRvbToyMHB4O1xyXG4gICAgLnBhbmVse1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206NTBweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDMzLCA3OSwgMTIyLCAwLjEpO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuLmNsaWVudC1zcGVha3tcclxuICAgIGJhY2tncm91bmQ6I2U1ZjBmYTtcclxuICAgIGgxe1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MjVweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1vZGFsLWJvZHl7XHJcbiAgICBoNntcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIGF7XHJcbiAgICAgICAgY29sb3I6IzI3NmNhYTtcclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICBjb2xvcjojMDAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5jbGllbnQtc3BlYWssIC5jbGllbnQtaW5mbyB7XG4gIHBhZGRpbmc6IDcwcHggMDtcbn1cblxuLmNsaWVudC1pbmZvIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4uY2xpZW50LWluZm8gLnBhbmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgzMywgNzksIDEyMiwgMC4xKTtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmNsaWVudC1zcGVhayB7XG4gIGJhY2tncm91bmQ6ICNlNWYwZmE7XG59XG4uY2xpZW50LXNwZWFrIGgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLm1vZGFsLWJvZHkgaDYge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tb2RhbC1ib2R5IGEge1xuICBjb2xvcjogIzI3NmNhYTtcbn1cbi5tb2RhbC1ib2R5IGE6aG92ZXIge1xuICBjb2xvcjogIzAwMDtcbn0iXX0= */");

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
            { title: 'Mint International', desc: 'HR and Recruitment cell.', url: 'http://www.mintinternational.com/' },
            { title: 'Best Containers', desc: 'One of the biggest manufacturers in bunk and porta cabins, houses etc.', url: 'http://bcc-india.com' },
            { title: 'Dreaming Code', desc: 'The biggest custom application development group in USA.', url: 'http://dreamingcode.com' },
            { title: 'Royal College', desc: 'One of the leading college in Mira Road, Thane.', url: 'http://royalcollegemiraroad.edu.in/' },
            { title: 'Alshariah', desc: 'Arab Institute for Studies and Development Programs', url: 'http://alshariah.com/' },
            { title: 'Miracle Foods', desc: 'The biggest dealer in agro products, rice, basmati rice, spices', url: 'http://miraclefoods.in/' }
        ];
        this.closeResult = '';
        // customize default values of modals used by this component tree
        config.backdrop = 'static';
        config.keyboard = false;
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title_1' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
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
/* harmony default export */ __webpack_exports__["default"] = (".section-contact {\n  padding-bottom: 0;\n}\n.section-contact form {\n  margin: 70px 0px;\n}\n.section-contact form h1 {\n  margin-bottom: 50px;\n  font-weight: normal;\n}\n.section-contact .contact-emails .panel {\n  border: 1px solid #214f7a;\n  border-bottom: 10px solid #214f7a;\n  padding: 20px;\n  padding-top: 30px;\n  height: 100%;\n  border-radius: 3px;\n}\n.section-contact .contact-emails .panel .panel-body {\n  margin-top: 60px;\n}\n.section-contact .contact-emails .panel .panel-body h5 {\n  font-weight: bold;\n}\n.section-contact .contact-emails .panel .panel-body p {\n  margin: 0;\n}\n.section-contact .contact-emails .panel .panel-body p:first-child {\n  font-weight: bold;\n}\n.section-contact .contact-emails .panel .panel-body div {\n  display: inline-block;\n  margin-right: 20px;\n}\n.section-contact .contact-emails .panel .panel-body div + div {\n  vertical-align: top;\n}\n.section-contact .contact-emails .panel .panel-body div svg {\n  fill: #214f7a;\n}\n.section-contact .contact-emails .panel .panel-body div a {\n  color: #555555;\n}\n.section-contact .contact-address .panel {\n  cursor: pointer;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.section-contact .contact-address .panel img {\n  width: 100%;\n  height: auto;\n}\n.section-contact .contact-address .panel h5 {\n  font-weight: bold;\n}\n.section-contact .contact-address .panel p {\n  margin: 0;\n  font-size: 16px;\n}\n.section-contact .contact-address .panel .panel-body {\n  padding: 20px;\n  background: #e5f0fa;\n  min-height: 220px;\n}\n.section-contact .contact-address .panel:hover .panel-body {\n  background: #ffc201;\n}\n.mapouter {\n  width: 100% !important;\n  height: 600px !important;\n  margin-top: 70px;\n}\n.mapouter .gmap_canvas {\n  height: 100% !important;\n}\n.mapouter .gmap_canvas iframe {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHVzL0Y6XFxnaXRodWJcXHdvcmsvc3JjXFxhcHBcXGNvbnRhY3R1c1xcY29udGFjdHVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0dXMvY29udGFjdHVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjtBREFJO0VBS0ksZ0JBQUE7QUNGUjtBREZRO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtBQ0laO0FEQ0k7RUFDSSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ1I7QURBUTtFQUNJLGdCQUFBO0FDRVo7QUREWTtFQUNJLGlCQUFBO0FDR2hCO0FERFk7RUFJSSxTQUFBO0FDQWhCO0FESGdCO0VBQ0ksaUJBQUE7QUNLcEI7QUREWTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7QUNHaEI7QURGZ0I7RUFDSSxtQkFBQTtBQ0lwQjtBREZnQjtFQUNJLGFBQUE7QUNJcEI7QURGZ0I7RUFDSSxjQUFBO0FDSXBCO0FESVE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0ZaO0FER1k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0RoQjtBREdZO0VBQ0ksaUJBQUE7QUNEaEI7QURHWTtFQUNJLFNBQUE7RUFDQSxlQUFBO0FDRGhCO0FER1k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0RoQjtBRElnQjtFQUNJLG1CQUFBO0FDRnBCO0FEVUE7RUFDSSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUNQSjtBRFFJO0VBQ0ksdUJBQUE7QUNOUjtBRE9RO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNMWiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3R1cy9jb250YWN0dXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1jb250YWN0e1xyXG4gICAgcGFkZGluZy1ib3R0b206MDtcclxuICAgIGZvcm17XHJcbiAgICAgICAgaDF7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206NTBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYXJnaW46NzBweCAwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdC1lbWFpbHN7XHJcbiAgICAucGFuZWx7XHJcbiAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjMjE0ZjdhO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206MTBweCBzb2xpZCAjMjE0ZjdhO1xyXG4gICAgICAgIHBhZGRpbmc6MjBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDozMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjNweDtcclxuICAgICAgICAucGFuZWwtYm9keXtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDo2MHB4O1xyXG4gICAgICAgICAgICBoNXtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpdntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICYgKyBkaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN2Z3tcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiMyMTRmN2E7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiM1NTU1NTU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9fVxyXG5cclxuICAgIC5jb250YWN0LWFkZHJlc3N7XHJcbiAgICAgICAgLnBhbmVse1xyXG4gICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czozcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGg1e1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucGFuZWwtYm9keXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MjBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6I2U1ZjBmYTtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6MjIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAucGFuZWwtYm9keXtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmZmMyMDE7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXBvdXRlcntcclxuICAgIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDo2MDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDo3MHB4O1xyXG4gICAgLmdtYXBfY2FudmFze1xyXG4gICAgICAgIGhlaWdodDoxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaWZyYW1le1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuc2VjdGlvbi1jb250YWN0IHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4uc2VjdGlvbi1jb250YWN0IGZvcm0ge1xuICBtYXJnaW46IDcwcHggMHB4O1xufVxuLnNlY3Rpb24tY29udGFjdCBmb3JtIGgxIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5zZWN0aW9uLWNvbnRhY3QgLmNvbnRhY3QtZW1haWxzIC5wYW5lbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMTRmN2E7XG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgIzIxNGY3YTtcbiAgcGFkZGluZzogMjBweDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLnNlY3Rpb24tY29udGFjdCAuY29udGFjdC1lbWFpbHMgLnBhbmVsIC5wYW5lbC1ib2R5IHtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cbi5zZWN0aW9uLWNvbnRhY3QgLmNvbnRhY3QtZW1haWxzIC5wYW5lbCAucGFuZWwtYm9keSBoNSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNlY3Rpb24tY29udGFjdCAuY29udGFjdC1lbWFpbHMgLnBhbmVsIC5wYW5lbC1ib2R5IHAge1xuICBtYXJnaW46IDA7XG59XG4uc2VjdGlvbi1jb250YWN0IC5jb250YWN0LWVtYWlscyAucGFuZWwgLnBhbmVsLWJvZHkgcDpmaXJzdC1jaGlsZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNlY3Rpb24tY29udGFjdCAuY29udGFjdC1lbWFpbHMgLnBhbmVsIC5wYW5lbC1ib2R5IGRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLnNlY3Rpb24tY29udGFjdCAuY29udGFjdC1lbWFpbHMgLnBhbmVsIC5wYW5lbC1ib2R5IGRpdiArIGRpdiB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG4uc2VjdGlvbi1jb250YWN0IC5jb250YWN0LWVtYWlscyAucGFuZWwgLnBhbmVsLWJvZHkgZGl2IHN2ZyB7XG4gIGZpbGw6ICMyMTRmN2E7XG59XG4uc2VjdGlvbi1jb250YWN0IC5jb250YWN0LWVtYWlscyAucGFuZWwgLnBhbmVsLWJvZHkgZGl2IGEge1xuICBjb2xvcjogIzU1NTU1NTtcbn1cbi5zZWN0aW9uLWNvbnRhY3QgLmNvbnRhY3QtYWRkcmVzcyAucGFuZWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zZWN0aW9uLWNvbnRhY3QgLmNvbnRhY3QtYWRkcmVzcyAucGFuZWwgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cbi5zZWN0aW9uLWNvbnRhY3QgLmNvbnRhY3QtYWRkcmVzcyAucGFuZWwgaDUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zZWN0aW9uLWNvbnRhY3QgLmNvbnRhY3QtYWRkcmVzcyAucGFuZWwgcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLnNlY3Rpb24tY29udGFjdCAuY29udGFjdC1hZGRyZXNzIC5wYW5lbCAucGFuZWwtYm9keSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNlNWYwZmE7XG4gIG1pbi1oZWlnaHQ6IDIyMHB4O1xufVxuLnNlY3Rpb24tY29udGFjdCAuY29udGFjdC1hZGRyZXNzIC5wYW5lbDpob3ZlciAucGFuZWwtYm9keSB7XG4gIGJhY2tncm91bmQ6ICNmZmMyMDE7XG59XG5cbi5tYXBvdXRlciB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNjAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogNzBweDtcbn1cbi5tYXBvdXRlciAuZ21hcF9jYW52YXMge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cbi5tYXBvdXRlciAuZ21hcF9jYW52YXMgaWZyYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */");

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
        this.activMap = 'Mumbai';
        this.corporate = true;
        this.mumbai = false;
        this.thane = false;
        this.contactInfo = [
            { title: 'General Informaton', subtitle: 'Inquiry', id: 'info@arkedge.com', icon: '#icon_contact', phone: '+91 9029290808' },
            { title: 'Sales & Learning', subtitle: 'Business development', id: 'sales@arkedge.com', icon: '#icon_development' },
            { title: 'Current Openings', subtitle: 'Job apply', id: 'careers@arkedge.com', icon: '#icon_approved' }
        ];
        this.getTouch = [
            { img: 'assets/images/contact', subtitle: 'Corporate Office', street_1: 'Arkedge Technologies Pvt Ltd.703, Wing "B", Galaxy L.X.APT.,', street_2: 'Navre Park, Ambarnath (W),Thane - 421501', state: 'Maharashtra, India', contact: '+91 9029290808', id: 'info@arkedge.com' },
            { img: 'assets/images/contact', subtitle: 'Mumbai', street_1: '201, B Tower Ashok Nagar, Marol Maroshi Road,', street_2: 'Andheri (E), Mumbai - 400047', state: 'Maharashtra, India', contact: '+91 9029290808', id: 'info@arkedge.com' },
            { img: 'assets/images/contact', subtitle: 'Thane', street_1: 'B-103, Elegant Tower,Shangvi Complex,,', street_2: 'Mira Road, Thane Mumbai ', state: 'Maharashtra, India', contact: '+91 9029290808', id: 'info@arkedge.com' },
        ];
    }
    ngOnInit() {
    }
    changeMap(map) {
        if (map === 'Corporate Office') {
            this.activMap = 'Corporate Office';
            this.corporate = true;
            this.mumbai = false;
            this.thane = false;
        }
        else if (map === 'Mumbai') {
            this.activMap = 'Mumbai';
            this.corporate = false;
            this.mumbai = true;
            this.thane = false;
        }
        else if (map === 'Thane') {
            this.activMap = 'Thane';
            this.corporate = false;
            this.mumbai = false;
            this.thane = true;
        }
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

/***/ "./src/app/datamgmt/datamgmt.component.scss":
/*!**************************************************!*\
  !*** ./src/app/datamgmt/datamgmt.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".datamgmt {\n  padding: 0 0 70px;\n}\n.datamgmt img {\n  width: auto;\n}\n.datamgmt .v-flex img {\n  align-self: center;\n  margin-left: 70px;\n}\n.datamgmt ul.info-bar {\n  margin-left: 5px;\n  align-self: center;\n}\n.datamgmt ul.info-bar li {\n  padding: 0 0 10px 20px;\n  list-style: none outside;\n  font-size: 16px;\n  position: relative;\n  font-weight: bold;\n}\n.datamgmt ul.info-bar li::before {\n  content: \" \";\n  background: #214f7a;\n  font-weight: bold;\n  position: absolute;\n  top: 8px;\n  left: 0px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n.datamgmt ul.info-bar li p {\n  font-weight: normal;\n}\n.datamgmt ul.info-bar.obtain-visibility {\n  margin-left: 50px;\n}\n.spend-analysis .col-sm-12 {\n  margin-top: 40px;\n}\n@media (max-width: 576px) {\n  .v-flex img {\n    margin-left: 15px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YW1nbXQvRjpcXGdpdGh1Ylxcd29yay9zcmNcXGFwcFxcZGF0YW1nbXRcXGRhdGFtZ210LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXRhbWdtdC9kYXRhbWdtdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7QURBSTtFQUNJLFdBQUE7QUNFUjtBRENRO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0NaO0FER0k7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDRFI7QURFUTtFQUNJLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0FaO0FEQ1k7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDaEI7QURDWTtFQUNJLG1CQUFBO0FDQ2hCO0FERVE7RUFDSSxpQkFBQTtBQ0FaO0FETUk7RUFDSSxnQkFBQTtBQ0hSO0FET0E7RUFFUTtJQUVJLG1CQUFBO0VDTlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2RhdGFtZ210L2RhdGFtZ210LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGFtZ210e1xyXG4gICAgcGFkZGluZzowICAwIDcwcHg7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6YXV0bztcclxuICAgIH1cclxuICAgIC52LWZsZXh7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1bC5pbmZvLWJhcntcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAwIDEwcHggMjBweDtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZSBvdXRzaWRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzIxNGY3YTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6OHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDowcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDoxMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYub2J0YWluLXZpc2liaWxpdHl7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc3BlbmQtYW5hbHlzaXN7XHJcbiAgICAuY29sLXNtLTEye1xyXG4gICAgICAgIG1hcmdpbi10b3A6NDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcclxuICAgIC52LWZsZXh7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MTVweCAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5kYXRhbWdtdCB7XG4gIHBhZGRpbmc6IDAgMCA3MHB4O1xufVxuLmRhdGFtZ210IGltZyB7XG4gIHdpZHRoOiBhdXRvO1xufVxuLmRhdGFtZ210IC52LWZsZXggaW1nIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogNzBweDtcbn1cbi5kYXRhbWdtdCB1bC5pbmZvLWJhciB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5kYXRhbWdtdCB1bC5pbmZvLWJhciBsaSB7XG4gIHBhZGRpbmc6IDAgMCAxMHB4IDIwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmUgb3V0c2lkZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmRhdGFtZ210IHVsLmluZm8tYmFyIGxpOjpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgYmFja2dyb3VuZDogIzIxNGY3YTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uZGF0YW1nbXQgdWwuaW5mby1iYXIgbGkgcCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uZGF0YW1nbXQgdWwuaW5mby1iYXIub2J0YWluLXZpc2liaWxpdHkge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLnNwZW5kLWFuYWx5c2lzIC5jb2wtc20tMTIge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnYtZmxleCBpbWcge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4IDA7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/datamgmt/datamgmt.component.ts":
/*!************************************************!*\
  !*** ./src/app/datamgmt/datamgmt.component.ts ***!
  \************************************************/
/*! exports provided: DatamgmtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatamgmtComponent", function() { return DatamgmtComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");



let DatamgmtComponent = class DatamgmtComponent {
    constructor(sharedservice) {
        this.sharedservice = sharedservice;
        this.dataMigration = [
            { list: 'DBMS / RDBMS' },
            { list: 'ERP' },
            { list: 'File System (TXT, XLS, CSV etc)' },
            { list: 'XML' },
            { list: 'SAP' },
            { list: 'CRM' }
        ];
        this.espendRequirement = [
            { list: 'Review / Understand the Client Business and Project Scope.' },
            { list: 'Identification of spends data sources & attributes (Internal & External Sources).' },
            { list: 'Assessment for completeness of data from multiple Sources.' },
            { list: 'Review of additional Information - Frequency, Exchange rates, languages, Profit Centers / Business units Information etc.' },
            { list: 'Finalize data file templates, taxonomy / schema for classification.' },
            { list: 'Review any client / industry specific classification needs / guidelines.' },
            { list: 'Setup of the client domain in the tool with client specific information' }
        ];
        this.dataCollection = [
            { list: 'Collect spend data (raw data) from various systems & sources. Coordinate discussions (if necessary) across time zones and languages' },
            { list: 'Review the completeness of data in terms of required fields, formats etc.' },
            { list: 'Work with client to setup semi-automated/automated data collection process' },
            { list: 'Create file based information summary for client review (spend numbers, records, currencies etc.)' },
            { list: 'File acceptance / rejection based on client feedback' },
            { list: 'Consolidate the data files from various templates to standard accepted template.' },
            { list: 'File upload into the tool for further data processing.' }
        ];
        this.dataCleansing = [
            { list: 'Review raw data files and transform data at attribute level if required.' },
            { list: 'Extract data from files and reconcile based on various data formats.' },
            { list: 'Normalize data for various attributes such as PC/BU, Company, date formats, etc.' },
            { list: 'Normalize currencies and perform currency conversion to normalize spend.' },
            { list: 'Cleanse the records from any noise (junk) characters for further processing.' },
            { list: 'Perform data validation for specific set of business rules.' },
            { list: 'Perform data clustering based on certain data attributes such as supplier name, GL description, material description, material / item group etc.' }
        ];
        this.classification = [
            { list: 'Memory Lookup for classification of clusters on historic intelligence.' },
            { list: 'AI based engine for supplier / item normalization, classification, and establishing corporate linkage.' },
            { list: 'Generate classification result summary based on regions, business unit, top categories, suppliers and spend amounts for sourcing expert verification.' },
            { list: 'Conduct feedback sessions with sourcing experts to finalize the spend classification.' },
            { list: 'Classifying the data into sourceable categories using the UNSPSC' },
        ];
        this.advancedData = [
            { list: 'Review the standard analytics report formats (measures and dimensions) and identify need for additional cubes or dimensions.' },
            { list: 'Define the format of additional analytics reports and create the analytics reports based on the OLAP data cubes.' },
            { list: 'Review the analytics reports and provide access to reports for client feedback.' },
            { list: 'Based on client feedback, incorporate any changes so as to enrich the spend data with business specific rules / information.' },
            { list: 'Reporting the analysis and findings to the decision makers within your organization.' },
            { list: 'Finalize the spend analysis reports and publish the "Spend Book"' },
        ];
        this.spendAnalytics = [
            { list: 'Provides insights on direct and indirect spending and business strategies' },
            { list: 'Data quality improvement & Operational efficiency' },
            { list: 'Converts raw data into knowledge capital' },
            { list: 'Rationalize and standardize products and services' },
            { list: 'Shows company spend across categories, supplier etc' },
            { list: 'Identifies savings opportunities for procurement' },
            { list: 'Consolidate spend across various business units to increase leverage in supplier negotiation' },
            { list: 'Enables strategic sourcing that helps reduce cost and maximize profits' },
            { list: 'Provides actionable insights and recommendations, which impacts the bottom line' },
            { list: 'Obtain visibility into how much money is spent with whom, on what and how' },
        ];
        this.obtainvisibility = [
            { list: 'Provides insights on direct and indirect spending and business strategies' },
            { list: 'Data quality improvement & Operational efficiency' },
            { list: 'Converts raw data into knowledge capital' },
            { list: 'Rationalize and standardize products and services' },
            { list: 'Shows company spend across categories, supplier etc' },
            { list: 'Identifies savings opportunities for procurement' },
            { list: 'Consolidate spend across various business units to increase leverage in supplier negotiation' },
            { list: 'Enables strategic sourcing that helps reduce cost and maximize profits' },
            { list: 'Provides actionable insights and recommendations, which impacts the bottom line' },
            { list: 'Obtain visibility into how much money is spent with whom, on what and how' }
        ];
    }
    ngOnInit() {
        this.sharedservice.sharedMessage.subscribe(Id => this.tabIndex = Id.Id);
        this.sharedservice.sharedMessage.subscribe(Id => this.tabName = Id.name.replace(/([A-Z])/g, ' $1').trim());
    }
    title(i) {
        if (i === 1) {
            this.tabName = 'Cleanse Dataset';
        }
        else if (i === 2) {
            this.tabName = 'Data Mapping & Conversion';
        }
        else if (i === 3) {
            this.tabName = 'Data Migration & Consolidation';
        }
        else if (i === 4) {
            this.tabName = 'Spend Analysis';
        }
    }
};
DatamgmtComponent.ctorParameters = () => [
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] }
];
DatamgmtComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-datamgmt',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./datamgmt.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/datamgmt/datamgmt.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./datamgmt.component.scss */ "./src/app/datamgmt/datamgmt.component.scss")).default]
    })
], DatamgmtComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("footer {\n  background: #172947;\n  padding: 35px 0 15px;\n}\nfooter .logo {\n  margin-bottom: 15px;\n}\nfooter a {\n  text-transform: uppercase;\n  color: #fff;\n  font-size: 14px;\n}\nfooter p {\n  color: #fff;\n  font-size: 14px;\n}\nfooter address {\n  color: #dddddd;\n}\nfooter .copyright-note {\n  padding-bottom: 35px;\n}\nfooter h5 {\n  color: #fff;\n}\nfooter ul.footer-li {\n  list-style: none inside;\n  margin: 0;\n  padding: 10px 0;\n  clear: both;\n}\nfooter ul.footer-li li {\n  padding: 10px 0;\n  line-height: 12px;\n}\nfooter ul.footer-li li a.active, footer ul.footer-li li a:hover {\n  color: #eab119;\n  text-decoration: none;\n}\nfooter .social-net {\n  padding: 0;\n}\nfooter .social-net ul {\n  list-style: none inside;\n  margin-top: 20px;\n  padding: 0;\n  float: left;\n  width: 100%;\n}\nfooter .social-net ul li {\n  float: left;\n  margin-right: 15px;\n}\nfooter .social-net ul li a {\n  color: #fff;\n  font-size: 14px;\n}\nfooter .social-net ul li svg {\n  width: 24px;\n  height: 24px;\n  fill: #fff;\n}\nfooter .copyright {\n  color: #ffffff;\n  position: absolute;\n  bottom: 0;\n  left: 15px;\n  padding: 0;\n  font-size: 12px;\n}\nfooter .copyright span {\n  float: left;\n  margin-right: 10px;\n}\nfooter .map img {\n  max-width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0Y6XFxnaXRodWJcXHdvcmsvc3JjXFxhcHBcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtBQ0NKO0FEQUk7RUFDSSxtQkFBQTtBQ0VSO0FEQUk7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRVI7QURBSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDRVI7QURBSTtFQUNJLGNBQUE7QUNFUjtBREFJO0VBQ0ksb0JBQUE7QUNFUjtBREFJO0VBQ0ksV0FBQTtBQ0VSO0FEQUk7RUFDSSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0VSO0FERFE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNHWjtBRERnQjtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQ0dwQjtBREVJO0VBQ0ksVUFBQTtBQ0FSO0FEQ1E7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDQ1o7QURBWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0VoQjtBRERnQjtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDR3BCO0FERGdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDR3BCO0FERUk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDQVI7QURDSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0NSO0FERVE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTcyOTQ3O1xyXG4gICAgcGFkZGluZzogMzVweCAwIDE1cHg7XHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgIH1cclxuICAgIGFkZHJlc3Mge1xyXG4gICAgICAgIGNvbG9yOiAjZGRkZGRkO1xyXG4gICAgfVxyXG4gICAgLmNvcHlyaWdodC1ub3Rle1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOjM1cHg7XHJcbiAgICB9XHJcbiAgICBoNXtcclxuICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgfVxyXG4gICAgdWwuZm9vdGVyLWxpIHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lIGluc2lkZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICYuYWN0aXZlLCAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiNlYWIxMTk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNvY2lhbC1uZXQge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgdWx7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmUgaW5zaWRlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvcHlyaWdodCB7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICBmb250LXNpemU6MTJweDtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICB9fVxyXG4gICAgIC5tYXB7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgIH1cclxufSIsImZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICMxNzI5NDc7XG4gIHBhZGRpbmc6IDM1cHggMCAxNXB4O1xufVxuZm9vdGVyIC5sb2dvIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbmZvb3RlciBhIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbmZvb3RlciBwIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbmZvb3RlciBhZGRyZXNzIHtcbiAgY29sb3I6ICNkZGRkZGQ7XG59XG5mb290ZXIgLmNvcHlyaWdodC1ub3RlIHtcbiAgcGFkZGluZy1ib3R0b206IDM1cHg7XG59XG5mb290ZXIgaDUge1xuICBjb2xvcjogI2ZmZjtcbn1cbmZvb3RlciB1bC5mb290ZXItbGkge1xuICBsaXN0LXN0eWxlOiBub25lIGluc2lkZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGNsZWFyOiBib3RoO1xufVxuZm9vdGVyIHVsLmZvb3Rlci1saSBsaSB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG59XG5mb290ZXIgdWwuZm9vdGVyLWxpIGxpIGEuYWN0aXZlLCBmb290ZXIgdWwuZm9vdGVyLWxpIGxpIGE6aG92ZXIge1xuICBjb2xvcjogI2VhYjExOTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuZm9vdGVyIC5zb2NpYWwtbmV0IHtcbiAgcGFkZGluZzogMDtcbn1cbmZvb3RlciAuc29jaWFsLW5ldCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmUgaW5zaWRlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nOiAwO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG59XG5mb290ZXIgLnNvY2lhbC1uZXQgdWwgbGkge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuZm9vdGVyIC5zb2NpYWwtbmV0IHVsIGxpIGEge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuZm9vdGVyIC5zb2NpYWwtbmV0IHVsIGxpIHN2ZyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGZpbGw6ICNmZmY7XG59XG5mb290ZXIgLmNvcHlyaWdodCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMTVweDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuZm9vdGVyIC5jb3B5cmlnaHQgc3BhbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5mb290ZXIgLm1hcCBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn0iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = ("nav.bg-light {\n  background-color: rgba(18, 80, 128, 0.9) !important;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 9;\n  padding: 0;\n}\n\n.navbar-brand i, .navbar-brand div {\n  float: left;\n}\n\n.navbar-brand svg {\n  width: 40px;\n  height: 40px;\n}\n\n.navbar-brand div {\n  margin-left: 10px;\n}\n\n.navbar-brand div span {\n  color: #fff;\n  display: block;\n}\n\n.navbar-brand div span.company-name {\n  font-size: 25px;\n  line-height: 20px;\n  font-weight: bold;\n}\n\n.navbar-brand div span.company-type {\n  font-size: 15px;\n  line-height: 12px;\n  margin-top: 7px;\n}\n\n.navbar-nav-list {\n  float: right;\n  margin-left: auto;\n  list-style-type: none;\n  margin-bottom: 0;\n}\n\n.navbar-nav-list .nav-item {\n  font-size: 14px;\n  float: left;\n}\n\n.navbar-nav-list .nav-item:nth-child(-n+4) {\n  text-transform: uppercase;\n  font-size: 16px;\n}\n\n.navbar-nav-list .nav-item:nth-child(5) {\n  margin-left: 50px;\n}\n\n.navbar-nav-list .nav-item.quick-link a {\n  padding-right: 0px;\n}\n\n.navbar-nav-list .nav-item.quick-link svg {\n  fill: #fff;\n  width: 30px;\n  height: 30px;\n}\n\n.navbar-nav-list .nav-item a {\n  color: #fff;\n  padding: 1.5rem 1rem;\n}\n\n.navbar-nav-list .nav-item a.active, .navbar-nav-list .nav-item a:hover {\n  color: #eab119;\n}\n\n.navbar-nav-list .nav-item svg {\n  width: 20px;\n  height: 20px;\n  margin-right: 5px;\n}\n\n.navbar-nav-list .nav-item .sub-nav {\n  list-style-type: none;\n  border-top: 5px solid #276caa;\n  border-bottom: 2px solid #276caa;\n  position: absolute;\n  top: -155px;\n  left: 0px;\n  width: 100%;\n  height: 0px;\n  background: #fff;\n  transition: all 0.5s;\n  padding: 30px 0;\n  margin: 0px;\n  display: none;\n}\n\n.navbar-nav-list .nav-item .sub-nav img {\n  max-width: 100%;\n  height: auto;\n}\n\n.navbar-nav-list .nav-item .sub-nav li.inner-list {\n  border-top: 1px dotted #ccc;\n  padding: 10px 0;\n  float: left;\n  display: block;\n  width: 100%;\n}\n\n.navbar-nav-list .nav-item .sub-nav li a {\n  color: #276caa;\n  padding: 0;\n  margin-top: 0px;\n  font-size: 12px;\n}\n\n.navbar-nav-list .nav-item .sub-nav a {\n  margin-top: 10px;\n  float: left;\n}\n\n.navbar-nav-list .nav-item .sub-nav h6 {\n  font-size: 14px;\n}\n\n.navbar-nav-list .nav-item.nav-dropdown-list:hover {\n  background: #276caa;\n}\n\n.navbar-nav-list .nav-item.nav-dropdown-list:hover .sub-nav {\n  height: auto;\n  top: 70px;\n  display: block;\n}\n\n.navbar-nav-list .nav-item.nav-dropdown-list:hover .sub-nav h6 {\n  text-transform: uppercase;\n}\n\n.navbar-light .navbar-nav .nav-link {\n  color: #fff;\n}\n\n.navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {\n  color: #fff;\n}\n\n.navbar-nav {\n  float: right;\n}\n\n.tele-no.email .nav-link {\n  padding: 1.5rem 5px 1.5rem 10px !important;\n}\n\n.tele-no svg {\n  fill: #eab119;\n}\n\n.slider-menu {\n  width: 350px;\n  position: fixed;\n  height: calc(100vh);\n  top: 0;\n  background: #fff;\n  z-index: 20;\n  right: -350px;\n  transition: all 0.5s;\n  padding-bottom: 50px;\n}\n\n.slider-menu .slider-footer-contact {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  border-top: 1px solid #ccc;\n  padding: 5px 5px 5px 10px;\n}\n\n.slider-menu .slider-footer-contact a {\n  float: left;\n  font-size: 14px;\n  color: #555555;\n}\n\n.slider-menu .slider-footer-contact a svg {\n  margin-right: 5px;\n  fill: #276caa;\n  width: 20px;\n  height: 20px;\n}\n\n.slider-menu .slider-menu-header {\n  padding: 10px;\n}\n\n.slider-menu .close-slide {\n  float: right;\n  padding: 10px;\n  margin-top: 10px;\n}\n\n.slider-menu .close-slide svg {\n  width: 30px;\n  height: 30px;\n}\n\n.slider-menu.active {\n  right: 0px;\n}\n\n.slider-menu ul {\n  margin: 0;\n  padding: 0;\n  overflow-y: auto;\n  height: calc(100vh - 203px);\n}\n\n.slider-menu ul::-webkit-scrollbar {\n  width: 0.5em;\n}\n\n.slider-menu ul::-webkit-scrollbar-track {\n  background: rgba(194, 194, 194, 0.3);\n}\n\n.slider-menu ul::-webkit-scrollbar-thumb {\n  background-color: darkgrey;\n  outline: 1px solid slategrey;\n}\n\n.slider-menu li.menu-list {\n  list-style-type: none;\n  border-bottom: 1px dotted #af9090;\n  position: relative;\n}\n\n.slider-menu li.menu-list::after {\n  content: \"\";\n  width: 0;\n  height: 3px;\n  display: block;\n  position: absolute;\n  bottom: -3px;\n  left: 0;\n  background-color: #276caa;\n  transition: width 0.2s;\n}\n\n.slider-menu li.menu-list:hover::after {\n  width: 100%;\n}\n\n.slider-menu li.menu-list a {\n  padding: 8px 25px;\n  font-size: 14px;\n  color: #555555;\n  display: block;\n  text-transform: capitalize;\n  text-decoration: none;\n  font-weight: bold;\n}\n\n.slider-menu li.menu-list a.active {\n  color: #276caa;\n}\n\n.slider-menu li.menu-list a:hover {\n  color: #276caa;\n}\n\n.slider-menu .navbar-brand {\n  margin: 10px 0 10px 10px;\n}\n\n.slider-menu .navbar-brand span.company-name {\n  color: #276caa;\n  font-size: 35px;\n  line-height: 30px;\n}\n\n.slider-menu .navbar-brand span.company-type {\n  color: #000;\n  font-size: 21px;\n  line-height: 15px;\n  margin-top: 5px;\n}\n\n.slider-menu .navbar-brand svg {\n  width: 50px;\n  height: 50px;\n}\n\n.overlay {\n  display: none;\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  width: 100%;\n  height: calc(100vh);\n  top: 0;\n}\n\n.overlay.active {\n  display: block;\n  z-index: 10;\n}\n\n.contactUs svg {\n  fill: #eab119;\n}\n\n@media (max-width: 576px) {\n  .navbar-nav-list .nav-item:not(:last-child) {\n    display: none;\n  }\n}\n\n@media (max-width: 1024px) {\n  .company-info, .tele-no {\n    display: none;\n  }\n\n  .navbar-nav-list .nav-item:nth-child(4) {\n    margin-left: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0Y6XFxnaXRodWJcXHdvcmsvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksbURBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQ0FSOztBREtPO0VBQ0ssV0FBQTtBQ0ZaOztBRElRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNGWjs7QURJUTtFQUNJLGlCQUFBO0FDRlo7O0FER1k7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQ0RoQjs7QURFZ0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0FwQjs7QURFZ0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQXBCOztBRE1BO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0hKOztBRElJO0VBQ0ksZUFBQTtFQWtCQSxXQUFBO0FDbkJSOztBREVRO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FDQVo7O0FERVE7RUFDSSxpQkFBQTtBQ0FaOztBREdZO0VBQ0ksa0JBQUE7QUNEaEI7O0FER1k7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNEaEI7O0FES1E7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7QUNIWjs7QURJWTtFQUNJLGNBQUE7QUNGaEI7O0FES1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDSFo7O0FETVM7RUFDSSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDSmI7O0FES2E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0hqQjs7QURNaUI7RUFDRywyQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNKcEI7O0FETWdCO0VBQ0ksY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0pwQjs7QURPYTtFQUNHLGdCQUFBO0VBQ0EsV0FBQTtBQ0xoQjs7QURRYTtFQUNJLGVBQUE7QUNOakI7O0FEVWlCO0VBQ0EsbUJBQUE7QUNSakI7O0FEU2lCO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FDUG5COztBRFFtQjtFQUNJLHlCQUFBO0FDTnZCOztBRGNBO0VBQ0ksV0FBQTtBQ1hKOztBRGFBO0VBQ0ksV0FBQTtBQ1ZKOztBRFlBO0VBQ0ksWUFBQTtBQ1RKOztBRGVRO0VBQ0MsMENBQUE7QUNaVDs7QURlSTtFQUNJLGFBQUE7QUNiUjs7QURpQkE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsTUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0FDZEo7O0FEZUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7QUNiUjs7QURjUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ1paOztBRGFZO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNYaEI7O0FEZUk7RUFDSSxhQUFBO0FDYlI7O0FEZUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDYlI7O0FEY1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ1paOztBRGVJO0VBQ0ksVUFBQTtBQ2JSOztBRGVJO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FDYlI7O0FEY1E7RUFDSSxZQUFBO0FDWlo7O0FEZVE7RUFDRyxvQ0FBQTtBQ2JYOztBRGdCUTtFQUNFLDBCQUFBO0VBQ0EsNEJBQUE7QUNkVjs7QURpQkk7RUFDSSxxQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7QUNmUjs7QURnQlE7RUFDSSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUNkWjs7QURrQmdCO0VBQ0MsV0FBQTtBQ2hCakI7O0FEb0JRO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNsQlI7O0FEbUJRO0VBQ0ksY0FBQTtBQ2pCWjs7QURtQlE7RUFDRyxjQUFBO0FDakJYOztBRHFCSTtFQUNJLHdCQUFBO0FDbkJSOztBRHFCYTtFQUNHLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNuQmhCOztBRHFCWTtFQUNHLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDbkJmOztBRHNCUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDcEJaOztBRDBCQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxNQUFBO0FDdkJKOztBRHdCSTtFQUNJLGNBQUE7RUFDQSxXQUFBO0FDdEJSOztBRDBCSTtFQUNJLGFBQUE7QUN2QlI7O0FENkJBO0VBR1c7SUFDSyxhQUFBO0VDNUJkO0FBQ0Y7O0FEaUNBO0VBQ0k7SUFDSSxhQUFBO0VDL0JOOztFRG1DVTtJQUNJLGlCQUFBO0VDaENkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcclxuICAgICYuYmctbGlnaHQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgxOCwgODAsIDEyOCwgMC45KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgICAgIHRvcDowO1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgei1pbmRleDogOTtcclxuICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICB9XHJcbiAgIFxyXG59XHJcbi5uYXZiYXItYnJhbmR7XHJcbiAgICAgICBpLCBkaXYge1xyXG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdmd7XHJcbiAgICAgICAgICAgIHdpZHRoOjQwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDo0MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgICYuY29tcGFueS1uYW1le1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLmNvbXBhbnktdHlwZXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTVweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDoxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6N3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG59XHJcblxyXG4ubmF2YmFyLW5hdi1saXN0e1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIC5uYXYtaXRlbXtcclxuICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgICAmOm50aC1jaGlsZCgtbis0KXtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpudGgtY2hpbGQoNSl7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYucXVpY2stbGlua3tcclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN2Z3tcclxuICAgICAgICAgICAgICAgIGZpbGw6I2ZmZjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjMwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MS41cmVtIDFyZW07XHJcbiAgICAgICAgICAgICYuYWN0aXZlLCAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgY29sb3I6I2VhYjExOTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzdmd7XHJcbiAgICAgICAgICAgIHdpZHRoOjIwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDoyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6NXB4O1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAuc3ViLW5hdntcclxuICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgIGJvcmRlci10b3A6NXB4IHNvbGlkICMyNzZjYWE7XHJcbiAgICAgICAgICAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAjMjc2Y2FhO1xyXG4gICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgdG9wOi0xNTVweDtcclxuICAgICAgICAgICAgIGxlZnQ6MHB4O1xyXG4gICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgIGhlaWdodDowcHg7XHJcbiAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG4gICAgICAgICAgICAgcGFkZGluZzozMHB4IDA7XHJcbiAgICAgICAgICAgICBtYXJnaW46MHB4O1xyXG4gICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgaGVpZ2h0OmF1dG87XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgICAmLmlubmVyLWxpc3R7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDoxcHggZG90dGVkICNjY2M7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjc2Y2FhO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0OyAgXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIGg2e1xyXG4gICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgJi5uYXYtZHJvcGRvd24tbGlzdHtcclxuICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiMyNzZjYWE7XHJcbiAgICAgICAgICAgICAgICAgLnN1Yi1uYXZ7XHJcbiAgICAgICAgICAgICAgICAgICBoZWlnaHQ6YXV0bztcclxuICAgICAgICAgICAgICAgICAgIHRvcDo3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICBoNntcclxuICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmt7XHJcbiAgICBjb2xvcjojZmZmO1xyXG59XHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rOmZvY3VzLCAubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluazpob3ZlcntcclxuICAgIGNvbG9yOiNmZmY7XHJcbn1cclxuLm5hdmJhci1uYXZ7XHJcbiAgICBmbG9hdDpyaWdodDtcclxufVxyXG5cclxuXHJcbi50ZWxlLW5ve1xyXG4gICAgJi5lbWFpbHtcclxuICAgICAgICAubmF2LWxpbmt7XHJcbiAgICAgICAgIHBhZGRpbmc6MS41cmVtIDVweCAxLjVyZW0gMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3Zne1xyXG4gICAgICAgIGZpbGw6I2VhYjExOTtcclxuICAgIH1cclxufVxyXG5cclxuLnNsaWRlci1tZW51e1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoKTtcclxuICAgIHRvcDogMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB6LWluZGV4OiAyMDtcclxuICAgIHJpZ2h0OiAtMzUwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG4gICAgcGFkZGluZy1ib3R0b206NTBweDtcclxuICAgIC5zbGlkZXItZm9vdGVyLWNvbnRhY3R7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICBwYWRkaW5nOiA1cHggNXB4IDVweCAxMHB4O1xyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjojNTU1NTU1O1xyXG4gICAgICAgICAgICBzdmd7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6NXB4O1xyXG4gICAgICAgICAgICAgICAgZmlsbDojMjc2Y2FhO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2xpZGVyLW1lbnUtaGVhZGVye1xyXG4gICAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgIH1cclxuICAgIC5jbG9zZS1zbGlkZXtcclxuICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICB3aWR0aDozMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6MzBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLmFjdGl2ZXtcclxuICAgICAgICByaWdodDowcHg7XHJcbiAgICB9XHJcbiAgICB1bHtcclxuICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMDNweCk7XHJcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICB3aWR0aDogLjVlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICAgICBiYWNrZ3JvdW5kOnJnYigxOTQsIDE5NCwgMTk0LCAuMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcclxuICAgICAgICAgIG91dGxpbmU6IDFweCBzb2xpZCBzbGF0ZWdyZXk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGkubWVudS1saXN0e1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICNhZjkwOTA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICY6OmFmdGVye1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogLTNweDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3NmNhYTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4ycztcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgICY6aG92ZXJcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgYXtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMjVweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6IzU1NTU1NTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgICYuYWN0aXZle1xyXG4gICAgICAgICAgICBjb2xvcjojMjc2Y2FhOyAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgIGNvbG9yOiMyNzZjYWE7ICAgXHJcbiAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgfVxyXG4gICAgLm5hdmJhci1icmFuZHtcclxuICAgICAgICBtYXJnaW46MTBweCAwIDEwcHggMTBweDtcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgJi5jb21wYW55LW5hbWV7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojMjc2Y2FhO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5jb21wYW55LXR5cGV7XHJcbiAgICAgICAgICAgICAgIGNvbG9yOiMwMDA7XHJcbiAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5vdmVybGF5e1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCk7XHJcbiAgICB0b3A6MDtcclxuICAgICYuYWN0aXZle1xyXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgei1pbmRleDoxMDtcclxuICAgIH1cclxufVxyXG4uY29udGFjdFVze1xyXG4gICAgc3Zne1xyXG4gICAgICAgIGZpbGw6ICNlYWIxMTk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcclxuICAgIC5uYXZiYXItbmF2LWxpc3R7XHJcbiAgICAgICAgLm5hdi1pdGVte1xyXG4gICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCl7XHJcbiAgICAuY29tcGFueS1pbmZvLCAudGVsZS1ub3tcclxuICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLW5hdi1saXN0eyBcclxuICAgICAgICAubmF2LWl0ZW17XHJcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDQpe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgfX1cclxuICAgXHJcbn0iLCJuYXYuYmctbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4LCA4MCwgMTI4LCAwLjkpICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTtcbiAgcGFkZGluZzogMDtcbn1cblxuLm5hdmJhci1icmFuZCBpLCAubmF2YmFyLWJyYW5kIGRpdiB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLm5hdmJhci1icmFuZCBzdmcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLm5hdmJhci1icmFuZCBkaXYge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5uYXZiYXItYnJhbmQgZGl2IHNwYW4ge1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubmF2YmFyLWJyYW5kIGRpdiBzcGFuLmNvbXBhbnktbmFtZSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm5hdmJhci1icmFuZCBkaXYgc3Bhbi5jb21wYW55LXR5cGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICBtYXJnaW4tdG9wOiA3cHg7XG59XG5cbi5uYXZiYXItbmF2LWxpc3Qge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ubmF2YmFyLW5hdi1saXN0IC5uYXYtaXRlbSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ubmF2YmFyLW5hdi1saXN0IC5uYXYtaXRlbTpudGgtY2hpbGQoLW4rNCkge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ubmF2YmFyLW5hdi1saXN0IC5uYXYtaXRlbTpudGgtY2hpbGQoNSkge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtLnF1aWNrLWxpbmsgYSB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtLnF1aWNrLWxpbmsgc3ZnIHtcbiAgZmlsbDogI2ZmZjtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtIGEge1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMS41cmVtIDFyZW07XG59XG4ubmF2YmFyLW5hdi1saXN0IC5uYXYtaXRlbSBhLmFjdGl2ZSwgLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW0gYTpob3ZlciB7XG4gIGNvbG9yOiAjZWFiMTE5O1xufVxuLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW0gc3ZnIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ubmF2YmFyLW5hdi1saXN0IC5uYXYtaXRlbSAuc3ViLW5hdiB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICMyNzZjYWE7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjc2Y2FhO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTE1NXB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIHBhZGRpbmc6IDMwcHggMDtcbiAgbWFyZ2luOiAwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubmF2YmFyLW5hdi1saXN0IC5uYXYtaXRlbSAuc3ViLW5hdiBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtIC5zdWItbmF2IGxpLmlubmVyLWxpc3Qge1xuICBib3JkZXItdG9wOiAxcHggZG90dGVkICNjY2M7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtIC5zdWItbmF2IGxpIGEge1xuICBjb2xvcjogIzI3NmNhYTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubmF2YmFyLW5hdi1saXN0IC5uYXYtaXRlbSAuc3ViLW5hdiBhIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ubmF2YmFyLW5hdi1saXN0IC5uYXYtaXRlbSAuc3ViLW5hdiBoNiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtLm5hdi1kcm9wZG93bi1saXN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzI3NmNhYTtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtLm5hdi1kcm9wZG93bi1saXN0OmhvdmVyIC5zdWItbmF2IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB0b3A6IDcwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW0ubmF2LWRyb3Bkb3duLWxpc3Q6aG92ZXIgLnN1Yi1uYXYgaDYge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluazpmb2N1cywgLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbms6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm5hdmJhci1uYXYge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi50ZWxlLW5vLmVtYWlsIC5uYXYtbGluayB7XG4gIHBhZGRpbmc6IDEuNXJlbSA1cHggMS41cmVtIDEwcHggIWltcG9ydGFudDtcbn1cbi50ZWxlLW5vIHN2ZyB7XG4gIGZpbGw6ICNlYWIxMTk7XG59XG5cbi5zbGlkZXItbWVudSB7XG4gIHdpZHRoOiAzNTBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmgpO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHotaW5kZXg6IDIwO1xuICByaWdodDogLTM1MHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG4uc2xpZGVyLW1lbnUgLnNsaWRlci1mb290ZXItY29udGFjdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiA1cHggNXB4IDVweCAxMHB4O1xufVxuLnNsaWRlci1tZW51IC5zbGlkZXItZm9vdGVyLWNvbnRhY3QgYSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNTU1NTU1O1xufVxuLnNsaWRlci1tZW51IC5zbGlkZXItZm9vdGVyLWNvbnRhY3QgYSBzdmcge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZmlsbDogIzI3NmNhYTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cbi5zbGlkZXItbWVudSAuc2xpZGVyLW1lbnUtaGVhZGVyIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5zbGlkZXItbWVudSAuY2xvc2Utc2xpZGUge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uc2xpZGVyLW1lbnUgLmNsb3NlLXNsaWRlIHN2ZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG4uc2xpZGVyLW1lbnUuYWN0aXZlIHtcbiAgcmlnaHQ6IDBweDtcbn1cbi5zbGlkZXItbWVudSB1bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjAzcHgpO1xufVxuLnNsaWRlci1tZW51IHVsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwLjVlbTtcbn1cbi5zbGlkZXItbWVudSB1bDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE5NCwgMTk0LCAxOTQsIDAuMyk7XG59XG4uc2xpZGVyLW1lbnUgdWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XG4gIG91dGxpbmU6IDFweCBzb2xpZCBzbGF0ZWdyZXk7XG59XG4uc2xpZGVyLW1lbnUgbGkubWVudS1saXN0IHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICNhZjkwOTA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zbGlkZXItbWVudSBsaS5tZW51LWxpc3Q6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogM3B4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0zcHg7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzZjYWE7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMnM7XG59XG4uc2xpZGVyLW1lbnUgbGkubWVudS1saXN0OmhvdmVyOjphZnRlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNsaWRlci1tZW51IGxpLm1lbnUtbGlzdCBhIHtcbiAgcGFkZGluZzogOHB4IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM1NTU1NTU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zbGlkZXItbWVudSBsaS5tZW51LWxpc3QgYS5hY3RpdmUge1xuICBjb2xvcjogIzI3NmNhYTtcbn1cbi5zbGlkZXItbWVudSBsaS5tZW51LWxpc3QgYTpob3ZlciB7XG4gIGNvbG9yOiAjMjc2Y2FhO1xufVxuLnNsaWRlci1tZW51IC5uYXZiYXItYnJhbmQge1xuICBtYXJnaW46IDEwcHggMCAxMHB4IDEwcHg7XG59XG4uc2xpZGVyLW1lbnUgLm5hdmJhci1icmFuZCBzcGFuLmNvbXBhbnktbmFtZSB7XG4gIGNvbG9yOiAjMjc2Y2FhO1xuICBmb250LXNpemU6IDM1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuLnNsaWRlci1tZW51IC5uYXZiYXItYnJhbmQgc3Bhbi5jb21wYW55LXR5cGUge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLnNsaWRlci1tZW51IC5uYXZiYXItYnJhbmQgc3ZnIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLm92ZXJsYXkge1xuICBkaXNwbGF5OiBub25lO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDB2aCk7XG4gIHRvcDogMDtcbn1cbi5vdmVybGF5LmFjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmNvbnRhY3RVcyBzdmcge1xuICBmaWxsOiAjZWFiMTE5O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuY29tcGFueS1pbmZvLCAudGVsZS1ubyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtOm50aC1jaGlsZCg0KSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbn0iXX0= */");

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
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(sharedservice) {
        this.sharedservice = sharedservice;
        this.isOpen = true;
        this.isSlideOpen = true;
        this.list = [
            { name: 'WhyArkedgeTchnologies' },
            { name: 'OurHappyClients' },
            { name: 'NewsAndEventUpdate' },
            { name: 'TestimonialClientSpeaks' },
            { name: 'Industries' },
            { name: 'Technology' },
            { name: 'Career' },
            { name: 'Sitemap' }
        ];
        this.managedService = [
            { name: 'SoftwareEngineering',
                managedServiceList: [
                    { name: 'ProjectEngineering' },
                    { name: 'ApplicationDevelopment' },
                    { name: 'Ux/UiDevelopment' },
                    { name: 'SoftwareTesting & Qa' }
                ] },
            { name: 'DataMangment',
                managedServiceList: [
                    { name: 'CleanseDataset' },
                    { name: 'Data Mapping & Conversion' },
                    { name: 'Data Migration & Consolidation' },
                    { name: 'Spend Analysis' }
                ] },
            { name: 'ItStafingAndServices',
                managedServiceList: [
                    { name: 'StaffingServices' },
                    { name: 'StaffingIndustry' },
                    { name: 'It Training' },
                    { name: 'ProgramSchedule' }
                ] }
        ];
    }
    slideToggel() {
        const body = document.getElementsByTagName('body')[0];
        this.isOpen = !this.isOpen;
        if (!this.isOpen) {
            body.classList.add('remove-scroll');
        }
        else {
            body.classList.remove('remove-scroll');
        }
    }
    ngOnInit() {
    }
    getUrl(i, title) {
        this.sharedservice.nextMessage(i, title);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] }
];
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
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .main-banner .carousel {\n  margin-top: -60px;\n  z-index: 1;\n}\n::ng-deep .main-banner .container {\n  position: relative;\n  height: 800px;\n  overflow: hidden;\n}\n::ng-deep .main-banner .carousel-item {\n  display: block;\n}\n::ng-deep .main-banner .carousel-item .carousel-caption {\n  top: 50%;\n  left: -100%;\n  z-index: 10;\n  color: #fff;\n  text-align: left;\n  width: 600px;\n  transform: translateY(-50%);\n  transition: all 1s;\n  opacity: 0;\n}\n::ng-deep .main-banner .carousel-item .carousel-caption h1 {\n  color: #FFC100;\n  text-transform: uppercase;\n  font-weight: bold;\n  margin: 0;\n}\n::ng-deep .main-banner .carousel-item .carousel-caption .btn {\n  border: 2px solid #fff;\n  margin-right: 15px;\n  margin-top: 50px;\n}\n::ng-deep .main-banner .carousel-item .carousel-caption h3 {\n  color: #fff;\n}\n::ng-deep .main-banner .carousel-item .info-img {\n  position: absolute;\n  right: -100%;\n  top: 55%;\n  transform: translateY(-55%);\n  z-index: 1;\n  transition: all 1s;\n  opacity: 0;\n}\n::ng-deep .main-banner .carousel-item.active .carousel-caption {\n  left: 15px;\n  opacity: 0.9;\n}\n::ng-deep .main-banner .carousel-item.active .info-img {\n  right: 15px;\n  opacity: 0.9;\n}\n::ng-deep .main-banner .carousel-indicators li {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n::ng-deep .main-banner .picsum-img-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n::ng-deep .main-banner .picsum-img-wrapper::after {\n  content: \"\";\n  background: rgba(16, 80, 128, 0.9);\n  width: 100%;\n  height: 100%;\n  opacity: 0.9;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n::ng-deep .main-banner .picsum-img-wrapper img {\n  width: 100%;\n}\nngb-carousel {\n  outline: none;\n}\n.panel-heading, .panel-body {\n  border: none;\n  text-align: center;\n}\n.clients, .section-projects, .section-sevices, .testimonials, .section-info, .contact-info {\n  padding: 70px 0;\n}\n.clients {\n  background-color: #f7f7f7;\n}\n.clients h6 {\n  margin-bottom: 50px;\n}\n.clear-float {\n  clear: both;\n  float: none;\n}\n.contact-info .social-net ul {\n  padding: 0;\n  margin: 0;\n}\n.contact-info .social-net ul li {\n  list-style-type: none;\n  margin-bottom: 10px;\n}\n.contact-info .social-net ul li span {\n  margin-left: 15px;\n  color: #555555;\n}\n.contact-info .social-net ul li svg {\n  width: 20px;\n  height: 20px;\n}\n.contact-info .set-part {\n  margin: 40px 0;\n}\n.contact-info h6 {\n  color: #555;\n  font-weight: bold;\n}\n.contact-info form {\n  margin-top: 42px;\n}\n.contact-info form .btn {\n  margin-top: 0px;\n}\n.contact-info .email-link {\n  color: #276caa;\n}\n.icon-circle {\n  height: 90px;\n  width: 90px;\n  border-radius: 50%;\n  margin: 0 auto;\n}\n.icon-circle i {\n  line-height: 90px;\n}\n.section-info .panel-container {\n  min-height: 330px;\n  margin-bottom: 15px;\n  perspective: 1000px;\n  overflow: hidden;\n}\n.section-info .panel-container:hover .panel {\n  transform: rotateX(180deg);\n}\n.section-info .panel {\n  color: #fff;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 1s ease;\n  transform-style: preserve-3d;\n}\n.section-info .panel .panel-front {\n  border-top: 5px solid;\n  padding-top: 25px;\n  z-index: 1;\n}\n.section-info .panel .panel-front::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n.section-info .panel .panel-front.red {\n  background: url('1.jpg') no-repeat top center;\n  border-color: #b9646e;\n}\n.section-info .panel .panel-front.red .circle-bg {\n  background-color: #b9646e;\n}\n.section-info .panel .panel-front.blue {\n  background: url('2.jpg') no-repeat top center;\n  border-color: #276caa;\n}\n.section-info .panel .panel-front.blue .circle-bg {\n  background-color: #276caa;\n}\n.section-info .panel .panel-front.green {\n  background: url('3.jpg') no-repeat top center;\n  border-color: #4bbb57;\n}\n.section-info .panel .panel-front.green .circle-bg {\n  background-color: #4bbb57;\n}\n.section-info .panel .panel-back {\n  padding-top: 25px;\n}\n.section-info .panel .panel-back.red {\n  background-color: #b9646e;\n}\n.section-info .panel .panel-back.blue {\n  background-color: #276caa;\n}\n.section-info .panel .panel-back.green {\n  background-color: #4bbb57;\n}\n.section-info .panel .panel-front, .section-info .panel .panel-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.section-info .panel .panel-back {\n  transform: rotateX(180deg);\n}\n.section-info .panel .panel-back p {\n  padding: 25px;\n}\n.section-info .panel h5 {\n  margin: 20px 0;\n  color: #fff;\n}\n.section-info .panel p {\n  margin: 0;\n}\n.section-info h6 {\n  margin-bottom: 40px;\n}\n.section-info svg {\n  fill: #fff;\n}\n.section-sevices {\n  background-color: rgba(204, 204, 204, 0.2);\n}\n.section-sevices .panel {\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 5px;\n  margin-bottom: 15px;\n  padding: 15px 0;\n}\n.section-sevices .panel h5 {\n  color: #333333;\n  font-weight: bold;\n  margin-bottom: 25px;\n}\n.section-sevices .panel p {\n  padding: 0 20px;\n}\n.section-sevices .panel .icon-circle {\n  margin: 15px auto;\n}\n.section-sevices .panel .icon-circle svg {\n  height: 80px;\n  width: 80px;\n}\n.section-sevices .panel .icon-circle.skyblue {\n  background: #88cedb;\n}\n.section-sevices .panel .icon-circle.limegreen {\n  background: #78c29a;\n}\n.section-sevices .panel .icon-circle.yellow {\n  background: #f1bb57;\n}\n.section-sevices .panel .icon-circle.orange {\n  background: #e97f61;\n}\n.section-sevices .panel .icon-circle.blue {\n  background: #88cedb;\n}\n.section-sevices .panel .icon-circle.purple {\n  background: #787fc2;\n}\n.section-sevices h6 {\n  margin-bottom: 40px;\n}\n::ng-deep .testimonials {\n  position: relative;\n  overflow: hidden;\n}\n::ng-deep .testimonials img {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n::ng-deep .testimonials h1 {\n  color: #fff;\n  margin-bottom: 20px;\n}\n::ng-deep .testimonials p {\n  font-size: 18px;\n  font-weight: 700;\n  color: #fff;\n  margin-bottom: 5px;\n}\n::ng-deep .testimonials p:last-child {\n  margin-top: 35px;\n}\n::ng-deep .testimonials .carousel {\n  margin-top: 0;\n  z-index: 1;\n}\n::ng-deep .testimonials .carousel-inner {\n  height: 282px;\n}\n::ng-deep .testimonials .carousel-indicators li {\n  height: 10px;\n  border-radius: 10px;\n  border: 1px solid #fff;\n  background: transparent;\n}\n::ng-deep .testimonials .carousel-indicators li.active {\n  background: #fff;\n}\n::ng-deep .testimonials .carousel-item {\n  transition: opacity 1s ease !important;\n  position: absolute !important;\n  display: block !important;\n  opacity: 0;\n}\n::ng-deep .testimonials .carousel-item.active {\n  position: relative !important;\n  opacity: 1;\n}\n.section-projects {\n  position: relative;\n  float: left;\n  width: 100%;\n}\n.section-projects h6 {\n  margin: 35px 0 40px;\n}\n.section-projects .project-grid li {\n  width: 25%;\n  float: left;\n  list-style-type: none;\n}\n.section-projects .project-grid li figure {\n  margin: 0 0 2px 0;\n}\n.section-projects .project-grid li:first-child {\n  width: 50%;\n}\n.section-projects .project-grid li:first-child figure {\n  margin: 0;\n}\n.section-projects .project-grid li:nth-child(4) figure, .section-projects .project-grid li:nth-child(5) figure {\n  margin: 0;\n}\n.section-projects .project-grid button {\n  background: none;\n  border: 2px solid #fff;\n}\n.section-projects .p1 {\n  padding: 1px;\n}\n.section-projects figure {\n  position: relative;\n  float: left;\n  overflow: hidden;\n  width: calc(100% - 2px);\n  background-color: #fff;\n  margin: 0;\n  cursor: pointer;\n}\n.section-projects figure img {\n  position: relative;\n  display: block;\n  transform: scale(1);\n  transition: 0.5s ease-in-out;\n  max-width: 100%;\n  height: auto;\n}\n.section-projects figure .show-more-overlay {\n  background: rgba(0, 0, 0, 0) linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0.2) 23%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 68%, rgba(0, 0, 0, 0) 81%, rgba(0, 0, 0, 0) 92%, rgba(0, 0, 0, 0) 100%) repeat scroll 0 0;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transform: translateY(100%);\n  transition: all 0.5s ease 0s;\n}\n.section-projects figure figcaption {\n  webkit-backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  position: absolute;\n  bottom: 0px;\n  left: 20px;\n  right: 20px;\n  max-height: 40px;\n  transition: 0.5s ease-in-out;\n  z-index: 2;\n}\n.section-projects figure .show_more-title {\n  color: #fff;\n  font-size: 21px;\n  line-height: 30px;\n  font-weight: 700;\n  margin-bottom: 10px;\n}\n.section-projects figure .show_more-desc {\n  color: #fff;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 300;\n}\n.section-projects figure::after {\n  content: \"\";\n  background: rgba(0, 0, 0, 0.3);\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.section-projects figure:hover img {\n  transform: scale(1.1);\n}\n.section-projects figure:hover .show-more-overlay {\n  background: rgba(0, 0, 0, 0) linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0.2) 100%) repeat scroll 0 0;\n  transform: translateY(0px);\n}\n.section-projects figure:hover figcaption {\n  height: auto;\n  max-height: 200px;\n  bottom: 50px;\n}\n.section-our-products {\n  padding: 0 0 70px;\n}\n.section-our-products .panel {\n  padding: 0 15px;\n  margin-bottom: 15px;\n  background: rgba(204, 204, 204, 0.2);\n}\n.section-our-products .panel h5 {\n  font-weight: bold;\n}\n.section-our-products .panel .row div:first-child {\n  background: #276caa;\n}\n.section-our-products .panel .row div img {\n  align-self: center;\n  padding: 15px 0;\n}\n.section-our-products .panel .row div:nth-child(2) {\n  padding: 25px;\n}\n.section-our-products .panel .row div:nth-child(2) ul {\n  margin-bottom: 20px;\n}\n.section-our-products .panel .row div:nth-child(2) ul li {\n  padding: 0 0 10px 20px;\n  list-style: none outside;\n  font-size: 16px;\n  position: relative;\n  font-weight: bold;\n}\n.section-our-products .panel .row div:nth-child(2) ul li::before {\n  content: \" \";\n  background: #214f7a;\n  font-weight: bold;\n  position: absolute;\n  top: 8px;\n  left: 0px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n@media (max-width: 576px) {\n  .main-banner {\n    display: none;\n  }\n\n  .section-projects .project-grid li {\n    width: 100%;\n  }\n  .section-projects .project-grid li figure {\n    margin: 0 0 15px;\n  }\n  .section-projects .project-grid li:first-child {\n    width: 100%;\n  }\n  .section-projects .project-grid li:first-child figure {\n    margin: 0 0 15px;\n  }\n  .section-projects .project-grid li:nth-child(4) figure, .section-projects .project-grid li:nth-child(5) figure {\n    margin-bottom: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9GOlxcZ2l0aHViXFx3b3JrL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyxpQkFBQTtFQUNBLFVBQUE7QUNBRjtBREVDO0VBQ0Msa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREVDO0VBQ0MsY0FBQTtBQ0FGO0FEQ0M7RUFDQyxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNDRjtBREFFO0VBQ0MsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FDRUg7QURBRTtFQUNDLHNCQUFBO0VBQ0Esa0JBQUE7RUFDRyxnQkFBQTtBQ0VOO0FEQUU7RUFDQyxXQUFBO0FDRUg7QURDQztFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNDRjtBREVFO0VBQ0MsVUFBQTtFQUNBLFlBQUE7QUNBSDtBREVFO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNBSDtBRFFFO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ05IO0FEU0M7RUFDQyxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNQRjtBRFNFO0VBQ0MsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtBQ1BIO0FEU0U7RUFDQyxXQUFBO0FDUEg7QURhQTtFQUNDLGFBQUE7QUNWRDtBRGFBO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0FDVkQ7QURhQTtFQUNDLGVBQUE7QUNWRDtBRGFBO0VBQ0MseUJBQUE7QUNWRDtBRFdDO0VBQ0MsbUJBQUE7QUNURjtBRGFBO0VBQ0MsV0FBQTtFQUNBLFdBQUE7QUNWRDtBRGVFO0VBQ0MsVUFBQTtFQUNBLFNBQUE7QUNaSDtBRGFHO0VBQ0MscUJBQUE7RUFDQSxtQkFBQTtBQ1hKO0FEWUc7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNWTDtBRFlJO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNWTDtBRGdCQztFQUNFLGNBQUE7QUNkSDtBRGlCQztFQUNDLFdBQUE7RUFDQSxpQkFBQTtBQ2ZGO0FEaUJDO0VBQ0MsZ0JBQUE7QUNmRjtBRGdCRTtFQUNDLGVBQUE7QUNkSDtBRGlCQztFQUNDLGNBQUE7QUNmRjtBRHVCQTtFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDcEJEO0FEcUJDO0VBQ0MsaUJBQUE7QUNuQkY7QUR5QkM7RUFDQyxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ3RCRjtBRHVCRTtFQUNDLDBCQUFBO0FDckJIO0FEd0JDO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7QUN0QkY7QUR1QkU7RUFDQyxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQ3JCSDtBRHNCRztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUNwQko7QURzQkc7RUFDQyw2Q0FBQTtFQUNBLHFCQWpEQztBQzZCTDtBRHFCSTtFQUNDLHlCQW5EQTtBQ2dDTDtBRHVCRztFQUNDLDZDQUFBO0VBQ0EscUJBeERFO0FDbUNOO0FEc0JJO0VBQ0MseUJBMURDO0FDc0NOO0FEd0JHO0VBQ0MsNkNBQUE7RUFDQSxxQkEvREc7QUN5Q1A7QUR1Qkk7RUFDQyx5QkFqRUU7QUM0Q1A7QUQwQkU7RUFDQyxpQkFBQTtBQ3hCSDtBRHlCRztFQUNDLHlCQTNFQztBQ29ETDtBRDBCRztFQUNDLHlCQTlFRTtBQ3NETjtBRDJCRztFQUNDLHlCQWpGRztBQ3dEUDtBRDZCRTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0FDM0JIO0FENkJFO0VBRUMsMEJBQUE7QUM1Qkg7QUQ2Qkc7RUFDQyxhQUFBO0FDM0JKO0FEOEJFO0VBQ0MsY0FBQTtFQUNBLFdBQUE7QUM1Qkg7QUQ4QkU7RUFDQyxTQUFBO0FDNUJIO0FEZ0NDO0VBQ0MsbUJBQUE7QUM5QkY7QURpQ0M7RUFDQyxVQUFBO0FDL0JGO0FEMENBO0VBQ0MsMENBQUE7QUN2Q0Q7QUR3Q0M7RUFDQyxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUN0Q0Y7QUR1Q0U7RUFDQyxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ3JDSDtBRHdDRTtFQUNDLGVBQUE7QUN0Q0g7QUR3Q0U7RUFDQyxpQkFBQTtBQ3RDSDtBRHVDRztFQUNDLFlBQUE7RUFDQSxXQUFBO0FDckNKO0FEdUNHO0VBQ0MsbUJBL0JLO0FDTlQ7QUR1Q0c7RUFDQyxtQkEvQk87QUNOWDtBRHVDRztFQUNDLG1CQXBDSTtBQ0RSO0FEdUNHO0VBQ0MsbUJBdENJO0FDQ1I7QUR1Q0c7RUFDQyxtQkF2Q0U7QUNFTjtBRHVDRztFQUNDLG1CQXpDSTtBQ0lSO0FEMENDO0VBQ0MsbUJBQUE7QUN4Q0Y7QUQ0Q0E7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0FDekNEO0FEMENDO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUN4Q0Y7QUQwQ0M7RUFDQyxXQUFBO0VBQ0EsbUJBQUE7QUN4Q0Y7QUQwQ0M7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUN4Q0Y7QUR5Q0U7RUFDQyxnQkFBQTtBQ3ZDSDtBRDBDQztFQUNDLGFBQUE7RUFDQSxVQUFBO0FDeENGO0FEMENDO0VBQ0MsYUFBQTtBQ3hDRjtBRDBDQztFQUNDLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUN4Q0Y7QUR5Q0U7RUFDQyxnQkFBQTtBQ3ZDSDtBRDBDQztFQUNDLHNDQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUN4Q0Y7QUR5Q0U7RUFDRSw2QkFBQTtFQUNBLFVBQUE7QUN2Q0o7QUQ0Q0E7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDekNEO0FEMENDO0VBQ0MsbUJBQUE7QUN4Q0Y7QUQyQ0U7RUFDQyxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FDekNIO0FEMENHO0VBQ0MsaUJBQUE7QUN4Q0o7QUQwQ0c7RUFDQyxVQUFBO0FDeENKO0FEeUNJO0VBQ0MsU0FBQTtBQ3ZDTDtBRDJDSTtFQUNDLFNBQUE7QUN6Q0w7QUQ2Q0U7RUFDQyxnQkFBQTtFQUNBLHNCQUFBO0FDM0NIO0FEOENDO0VBQ0MsWUFBQTtBQzVDRjtBRDhDQztFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDNUNGO0FENkNFO0VBQ0Msa0JBQUE7RUFDQSxjQUFBO0VBRUEsbUJBQUE7RUFFQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDM0NIO0FENkNFO0VBQ0MscU5BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FDM0NIO0FEOENFO0VBQ0Msa0NBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUVBLDRCQUFBO0VBQ0EsVUFBQTtBQzVDSDtBRDhDRTtFQUNDLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDNUNIO0FEOENFO0VBQ0MsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDNUNIO0FEOENFO0VBQ0MsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQzVDSDtBRCtDRztFQUVDLHFCQUFBO0FDN0NKO0FEK0NHO0VBRUMsdUdBQUE7RUFDQSwwQkFBQTtBQzlDSjtBRGdERztFQUVDLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUMvQ0o7QURzREE7RUFDQyxpQkFBQTtBQ25ERDtBRG9EQztFQUNDLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0FDbERGO0FEbURFO0VBQ0MsaUJBQUE7QUNqREg7QURxREk7RUFDQyxtQkFBQTtBQ25ETDtBRHFESTtFQUNDLGtCQUFBO0VBQ0EsZUFBQTtBQ25ETDtBRHFESTtFQUNDLGFBQUE7QUNuREw7QURvREs7RUFDQyxtQkFBQTtBQ2xETjtBRG1ETTtFQUNDLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ2pEUDtBRGtETztFQUNDLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ2hEUjtBRDhEQTtFQUNDO0lBQ0MsYUFBQTtFQzNEQTs7RUQrREE7SUFDQyxXQUFBO0VDNUREO0VENkRDO0lBQ0MsZ0JBQUE7RUMzREY7RUQ2REM7SUFDQyxXQUFBO0VDM0RGO0VENERDO0lBQ0MsZ0JBQUE7RUMxREY7RUQ4REU7SUFDQyxtQkFBQTtFQzVESDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYWluLWJhbm5lcntcclxuXHQuY2Fyb3VzZWx7XHJcblx0XHRtYXJnaW4tdG9wOi02MHB4O1xyXG5cdFx0ei1pbmRleDoxO1xyXG5cdH1cclxuXHQuY29udGFpbmVye1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0aGVpZ2h0OiA4MDBweDtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0fVxyXG5cdC5jYXJvdXNlbC1pdGVte1xyXG5cdFx0ZGlzcGxheTpibG9jaztcclxuXHQuY2Fyb3VzZWwtY2FwdGlvbiB7XHJcblx0XHR0b3A6IDUwJTtcclxuXHRcdGxlZnQ6IC0xMDAlO1xyXG5cdFx0ei1pbmRleDogMTA7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0XHR3aWR0aDogNjAwcHg7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcblx0XHR0cmFuc2l0aW9uOiBhbGwgMXM7XHJcblx0XHRvcGFjaXR5OjA7XHJcblx0XHRoMXtcclxuXHRcdFx0Y29sb3I6I0ZGQzEwMDtcclxuXHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRcdFx0bWFyZ2luOjA7XHJcblx0XHR9XHJcblx0XHQuYnRue1xyXG5cdFx0XHRib3JkZXI6MnB4IHNvbGlkICNmZmY7XHJcblx0XHRcdG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIFx0XHRtYXJnaW4tdG9wOiA1MHB4O1xyXG5cdFx0fVxyXG5cdFx0aDN7XHJcblx0XHRcdGNvbG9yOiNmZmY7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5pbmZvLWltZ3tcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHJpZ2h0Oi0xMDAlO1xyXG5cdFx0dG9wOjU1JTtcclxuXHRcdHRyYW5zZm9ybTp0cmFuc2xhdGVZKC01NSUpO1xyXG5cdFx0ei1pbmRleDoxO1xyXG5cdFx0dHJhbnNpdGlvbjogYWxsIDFzO1xyXG5cdFx0b3BhY2l0eTowO1xyXG5cdH1cclxuXHQmLmFjdGl2ZXtcclxuXHRcdC5jYXJvdXNlbC1jYXB0aW9ue1xyXG5cdFx0XHRsZWZ0OjE1cHg7XHJcblx0XHRcdG9wYWNpdHk6Ljk7XHJcblx0XHR9XHJcblx0XHQuaW5mby1pbWd7XHJcblx0XHRcdHJpZ2h0OjE1cHg7XHRcclxuXHRcdFx0b3BhY2l0eTouOTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxufVxyXG5cdFxyXG5cdC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcclxuXHRcdGxpe1xyXG5cdFx0XHR3aWR0aDogMTBweDtcclxuXHRcdFx0aGVpZ2h0OiAxMHB4O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5waWNzdW0taW1nLXdyYXBwZXJ7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6MDtcclxuXHRcdGxlZnQ6MDtcclxuXHRcdGhlaWdodDoxMDAlO1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHRcdFxyXG5cdFx0Jjo6YWZ0ZXJ7XHJcblx0XHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRcdGJhY2tncm91bmQ6cmdiYSgxNiw4MCwxMjgsMC45KTtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0b3BhY2l0eTogMC45O1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdHRvcDogMDtcclxuXHRcdH1cclxuXHRcdGltZ3tcclxuXHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdFx0XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5uZ2ItY2Fyb3VzZWx7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnBhbmVsLWhlYWRpbmcsIC5wYW5lbC1ib2R5ICB7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNsaWVudHMsIC5zZWN0aW9uLXByb2plY3RzLCAuc2VjdGlvbi1zZXZpY2VzLCAudGVzdGltb25pYWxzLCAuc2VjdGlvbi1pbmZvLCAuY29udGFjdC1pbmZve1xyXG5cdHBhZGRpbmc6NzBweCAwO1xyXG59XHJcblxyXG4uY2xpZW50c3tcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywgMjQ3LCAyNDcsIDEpO1xyXG5cdGg2e1xyXG5cdFx0bWFyZ2luLWJvdHRvbTo1MHB4O1xyXG5cdH1cclxufVxyXG5cclxuLmNsZWFyLWZsb2F0e1xyXG5cdGNsZWFyOmJvdGg7XHJcblx0ZmxvYXQ6bm9uZTtcclxufVxyXG5cclxuLmNvbnRhY3QtaW5mb3tcclxuXHQuc29jaWFsLW5ldHtcclxuXHRcdHVse1xyXG5cdFx0XHRwYWRkaW5nOjA7XHJcblx0XHRcdG1hcmdpbjowO1xyXG5cdFx0XHRsaXtcclxuXHRcdFx0XHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbToxMHB4O1xyXG5cdFx0XHRzcGFue1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6MTVweDtcclxuXHRcdFx0XHRcdGNvbG9yOiM1NTU1NTU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHN2Z3tcclxuXHRcdFx0XHRcdHdpZHRoOjIwcHg7XHJcblx0XHRcdFx0XHRoZWlnaHQ6MjBweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0LnNldC1wYXJ0e1xyXG5cdFx0XHRtYXJnaW46NDBweCAwO1xyXG5cdFx0fVxyXG5cdFxyXG5cdGg2e1xyXG5cdFx0Y29sb3I6IzU1NTtcclxuXHRcdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcblx0fVxyXG5cdGZvcm17XHJcblx0XHRtYXJnaW4tdG9wOjQycHg7XHJcblx0XHQuYnRue1xyXG5cdFx0XHRtYXJnaW4tdG9wOjBweDtcclxuXHRcdH1cclxuXHR9XHJcblx0LmVtYWlsLWxpbmt7XHJcblx0XHRjb2xvcjojMjc2Y2FhO1xyXG5cdH1cclxufVxyXG5cclxuJHJlZDojYjk2NDZlO1xyXG4kYmx1ZTojMjc2Y2FhO1xyXG4kZ3JlZW46IzRiYmI1NztcclxuXHJcbi5pY29uLWNpcmNsZXtcclxuXHRoZWlnaHQ6OTBweDtcclxuXHR3aWR0aDo5MHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6NTAlO1xyXG5cdG1hcmdpbjowIGF1dG87XHJcblx0aXtcclxuXHRcdGxpbmUtaGVpZ2h0OjkwcHg7XHJcblx0fVxyXG5cdFxyXG59XHJcblxyXG4uc2VjdGlvbi1pbmZve1xyXG5cdC5wYW5lbC1jb250YWluZXJ7XHJcblx0XHRtaW4taGVpZ2h0OiAzMzBweDtcclxuXHRcdG1hcmdpbi1ib3R0b206MTVweDtcclxuXHRcdHBlcnNwZWN0aXZlOiAxMDAwcHg7XHJcblx0XHRvdmVyZmxvdzpoaWRkZW47XHJcblx0XHQmOmhvdmVyIC5wYW5lbHtcclxuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5wYW5lbHtcclxuXHRcdGNvbG9yOiNmZmY7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xyXG5cdFx0dHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuXHRcdC5wYW5lbC1mcm9udHtcclxuXHRcdFx0Ym9yZGVyLXRvcDogNXB4IHNvbGlkO1xyXG5cdFx0XHRwYWRkaW5nLXRvcDogMjVweDtcclxuXHRcdFx0ei1pbmRleDogMTtcclxuXHRcdFx0Jjo6YWZ0ZXJ7XHJcblx0XHRcdFx0Y29udGVudDonJztcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdFx0XHRoZWlnaHQ6MTAwJTtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjUpO1xyXG5cdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRcdHotaW5kZXg6IC0xO1xyXG5cdFx0XHR9XHJcblx0XHRcdCYucmVke1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvMS5qcGcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xyXG5cdFx0XHRcdGJvcmRlci1jb2xvcjogJHJlZDtcclxuXHRcdFx0XHQuY2lyY2xlLWJne1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjokcmVkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0Ji5ibHVle1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvMi5qcGcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xyXG5cdFx0XHRcdGJvcmRlci1jb2xvcjogJGJsdWU7XHJcblx0XHRcdFx0LmNpcmNsZS1iZ3tcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6JGJsdWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQmLmdyZWVue1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvMy5qcGcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xyXG5cdFx0XHRcdGJvcmRlci1jb2xvcjogJGdyZWVuO1xyXG5cdFx0XHRcdC5jaXJjbGUtYmd7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiRncmVlbjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQucGFuZWwtYmFja3tcclxuXHRcdFx0cGFkZGluZy10b3A6IDI1cHg7XHJcblx0XHRcdCYucmVke1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6JHJlZDtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0Ji5ibHVle1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6JGJsdWU7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdCYuZ3JlZW57XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjokZ3JlZW47XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcclxuXHRcdC5wYW5lbC1mcm9udCwgLnBhbmVsLWJhY2t7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0XHRcdGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHRcdH1cclxuXHRcdC5wYW5lbC1iYWNrXHJcblx0XHR7XHJcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xyXG5cdFx0XHRwe1xyXG5cdFx0XHRcdHBhZGRpbmc6MjVweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aDV7XHJcblx0XHRcdG1hcmdpbjoyMHB4IDA7XHJcblx0XHRcdGNvbG9yOiNmZmY7XHJcblx0XHR9XHJcblx0XHRwe1xyXG5cdFx0XHRtYXJnaW46MDtcclxuXHRcdFx0XHJcblx0XHR9XHJcblx0fVxyXG5cdGg2e1xyXG5cdFx0bWFyZ2luLWJvdHRvbTo0MHB4O1xyXG5cdH1cclxuXHJcblx0c3Zne1xyXG5cdFx0ZmlsbDojZmZmO1xyXG5cdH1cclxufVxyXG5cclxuJHNreWJsdWU6Izg4Y2VkYjtcclxuJHllbGxvdzojZjFiYjU3O1xyXG4kb3JhbmdlOiNlOTdmNjE7XHJcbiRsaW1lZ3JlZW46Izc4YzI5YTtcclxuJGJsdWU6Izg4Y2VkYjtcclxuJHB1cnBsZTojNzg3ZmMyO1xyXG5cclxuLnNlY3Rpb24tc2V2aWNlc3tcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjA0LCAyMDQsIDIwNCwgMC4yKTtcclxuXHQucGFuZWx7XHJcblx0XHRiYWNrZ3JvdW5kOiNmZmY7XHJcblx0XHRib3JkZXI6MXB4IHNvbGlkIHJnYmEoMjI0LCAyMjQsIDIyNCwgMSk7XHJcblx0XHRib3JkZXItcmFkaXVzOjVweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblx0XHRwYWRkaW5nOiAxNXB4IDA7XHJcblx0XHRoNXtcclxuXHRcdFx0Y29sb3I6IzMzMzMzMztcclxuXHRcdFx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbToyNXB4O1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRwe1xyXG5cdFx0XHRwYWRkaW5nOjAgMjBweDtcclxuXHRcdH1cclxuXHRcdC5pY29uLWNpcmNsZXtcclxuXHRcdFx0bWFyZ2luOiAxNXB4IGF1dG87XHJcblx0XHRcdHN2Z3tcclxuXHRcdFx0XHRoZWlnaHQ6ODBweDtcclxuXHRcdFx0XHR3aWR0aDo4MHB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdCYuc2t5Ymx1ZXtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiRza3libHVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdCYubGltZWdyZWVue1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6JGxpbWVncmVlbjtcclxuXHRcdFx0fVxyXG5cdFx0XHQmLnllbGxvd3tcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiR5ZWxsb3c7XHJcblx0XHRcdH1cclxuXHRcdFx0Ji5vcmFuZ2V7XHJcblx0XHRcdFx0YmFja2dyb3VuZDokb3JhbmdlO1xyXG5cdFx0XHR9XHJcblx0XHRcdCYuYmx1ZXtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiRibHVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdCYucHVycGxle1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6JHB1cnBsZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aDZ7XHJcblx0XHRtYXJnaW4tYm90dG9tOjQwcHg7XHJcblx0fVxyXG59XHJcblxyXG46Om5nLWRlZXAgLnRlc3RpbW9uaWFsc3tcclxuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdGltZ3tcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6MDtcclxuXHRcdGxlZnQ6MDtcclxuXHR9XHJcblx0aDF7XHJcblx0XHRjb2xvcjojZmZmO1xyXG5cdFx0bWFyZ2luLWJvdHRvbToyMHB4O1xyXG5cdH1cclxuXHRwe1xyXG5cdFx0Zm9udC1zaXplOjE4cHg7XHJcblx0XHRmb250LXdlaWdodDo3MDA7XHJcblx0XHRjb2xvcjojZmZmO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTo1cHg7XHJcblx0XHQmOmxhc3QtY2hpbGR7XHJcblx0XHRcdG1hcmdpbi10b3A6MzVweDtcclxuXHRcdH1cclxuXHR9XHJcblx0LmNhcm91c2Vse1xyXG5cdFx0bWFyZ2luLXRvcDowO1xyXG5cdFx0ei1pbmRleDoxO1xyXG5cdH1cclxuXHQuY2Fyb3VzZWwtaW5uZXJ7XHJcblx0XHRoZWlnaHQ6MjgycHg7XHJcblx0fVxyXG5cdC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpe1xyXG5cdFx0aGVpZ2h0OjEwcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOjEwcHg7XHJcblx0XHRib3JkZXI6MXB4IHNvbGlkICNmZmY7XHJcblx0XHRiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG5cdFx0Ji5hY3RpdmV7XHJcblx0XHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuXHRcdH1cclxuXHR9XHJcblx0LmNhcm91c2VsLWl0ZW0ge1xyXG5cdFx0dHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlICFpbXBvcnRhbnQ7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuXHRcdGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcblx0XHRvcGFjaXR5OiAwO1xyXG5cdFx0Ji5hY3RpdmUge1xyXG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdG9wYWNpdHk6IDE7XHJcblx0XHRcdCAgfVxyXG5cdCAgfVxyXG59XHJcblxyXG4uc2VjdGlvbi1wcm9qZWN0cyB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGg2e1xyXG5cdFx0bWFyZ2luOiAzNXB4IDAgNDBweDtcclxuXHR9XHJcblx0LnByb2plY3QtZ3JpZHtcclxuXHRcdGxpe1xyXG5cdFx0XHR3aWR0aDoyNSU7XHJcblx0XHRcdGZsb2F0OmxlZnQ7XHJcblx0XHRcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuXHRcdFx0ZmlndXJle1xyXG5cdFx0XHRcdG1hcmdpbjowIDAgMnB4IDA7XHJcblx0XHRcdH1cclxuXHRcdFx0JjpmaXJzdC1jaGlsZHtcclxuXHRcdFx0XHR3aWR0aDo1MCU7XHJcblx0XHRcdFx0ZmlndXJle1xyXG5cdFx0XHRcdFx0bWFyZ2luOjA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdCY6bnRoLWNoaWxkKDQpLCAmOm50aC1jaGlsZCg1KXtcclxuXHRcdFx0XHRmaWd1cmV7XHJcblx0XHRcdFx0XHRtYXJnaW46MDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGJ1dHRvbntcclxuXHRcdFx0YmFja2dyb3VuZDpub25lO1xyXG5cdFx0XHRib3JkZXI6MnB4IHNvbGlkICNmZmY7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5wMXtcclxuXHRcdHBhZGRpbmc6MXB4O1xyXG5cdH1cclxuXHRmaWd1cmUge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDJweCk7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdFx0bWFyZ2luOjA7XHJcblx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRpbWcge1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcblx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcblx0XHRcdC13ZWJraXQtdHJhbnNpdGlvbjogLjVzIGVhc2UtaW4tb3V0O1xyXG5cdFx0XHR0cmFuc2l0aW9uOiAuNXMgZWFzZS1pbi1vdXQ7XHJcblx0XHRcdG1heC13aWR0aDogMTAwJTtcclxuXHRcdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdFx0fVxyXG5cdFx0LnNob3ctbW9yZS1vdmVybGF5IHtcclxuXHRcdFx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiKDAsIDAsIDApIDAlLCByZ2JhKDAsIDAsIDAsIDAuMikgMjMlLCByZ2JhKDAsIDAsIDAsIDApIDQwJSwgcmdiYSgwLCAwLCAwLCAwKSA2OCUsIHJnYmEoMCwgMCwgMCwgMCkgODElLCByZ2JhKDAsIDAsIDAsIDApIDkyJSwgcmdiYSgwLCAwLCAwLCAwKSAxMDAlKSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuXHRcdFx0Ym90dG9tOiAwO1xyXG5cdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHJpZ2h0OiAwO1xyXG5cdFx0XHR0b3A6IDA7XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcclxuXHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwcztcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0ZmlnY2FwdGlvbiB7XHJcblx0XHRcdHdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0XHRcdGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRib3R0b206IDBweDtcclxuXHRcdFx0bGVmdDogMjBweDtcclxuXHRcdFx0cmlnaHQ6IDIwcHg7XHJcblx0XHRcdG1heC1oZWlnaHQ6IDQwcHg7XHJcblx0XHRcdC13ZWJraXQtdHJhbnNpdGlvbjogLjVzIGVhc2UtaW4tb3V0O1xyXG5cdFx0XHR0cmFuc2l0aW9uOiAuNXMgZWFzZS1pbi1vdXQ7XHJcblx0XHRcdHotaW5kZXg6IDI7XHJcblx0XHR9XHJcblx0XHQuc2hvd19tb3JlLXRpdGxlIHtcclxuXHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdGZvbnQtc2l6ZTogMjFweDtcclxuXHRcdFx0bGluZS1oZWlnaHQ6IDMwcHg7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0XHR9XHJcblx0XHQuc2hvd19tb3JlLWRlc2Mge1xyXG5cdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRsaW5lLWhlaWdodDogMThweDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDMwMDtcclxuXHRcdH1cclxuXHRcdCY6OmFmdGVye1xyXG5cdFx0XHRjb250ZW50OicnO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcblx0XHRcdGJvdHRvbTogMDtcclxuXHRcdFx0bGVmdDogMDtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0aGVpZ2h0OjEwMCU7XHJcblx0XHRcdHotaW5kZXg6IDE7XHJcblx0XHR9XHJcblx0XHQmOmhvdmVye1xyXG5cdFx0XHRpbWd7XHJcblx0XHRcdFx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcblx0XHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG5cdFx0XHR9XHJcblx0XHRcdC5zaG93LW1vcmUtb3ZlcmxheVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiKDAsIDAsIDApIDAlLCByZ2JhKDAsIDAsIDAsIDAuMikgMTAwJSkgcmVwZWF0IHNjcm9sbCAwIDA7XHJcblx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZmlnY2FwdGlvblxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdFx0XHRcdG1heC1oZWlnaHQ6IDIwMHB4O1xyXG5cdFx0XHRcdGJvdHRvbTogNTBweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuXHJcbi5zZWN0aW9uLW91ci1wcm9kdWN0c3tcclxuXHRwYWRkaW5nOjAgMCA3MHB4O1xyXG5cdC5wYW5lbHtcclxuXHRcdHBhZGRpbmc6MCAxNXB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHRcdGJhY2tncm91bmQ6cmdiYSgyMDQsIDIwNCwgMjA0LCAwLjIpO1xyXG5cdFx0aDV7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcblx0XHR9XHJcblx0XHQucm93e1xyXG5cdFx0XHRkaXZ7XHJcblx0XHRcdFx0JjpmaXJzdC1jaGlsZHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IzI3NmNhYTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aW1ne1xyXG5cdFx0XHRcdFx0YWxpZ24tc2VsZjogY2VudGVyO1xyXG5cdFx0XHRcdFx0cGFkZGluZzogMTVweCAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQmOm50aC1jaGlsZCgyKXtcclxuXHRcdFx0XHRcdHBhZGRpbmc6MjVweDtcclxuXHRcdFx0XHRcdHVse1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOjIwcHg7XHJcblx0XHRcdFx0XHRcdGxpe1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgMCAxMHB4IDIwcHg7XHJcblx0XHRcdFx0XHRcdFx0bGlzdC1zdHlsZTogbm9uZSBvdXRzaWRlO1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRcdFx0XHRcdFx0XHQmOjpiZWZvcmV7XHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiBcIiBcIjtcclxuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICMyMTRmN2E7XHJcblx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHRcdFx0dG9wOjhweDtcclxuXHRcdFx0XHRcdFx0XHRcdGxlZnQ6MHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6MTBweDtcclxuXHRcdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMTBweDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCl7XHJcblx0Lm1haW4tYmFubmVye1xyXG5cdFx0ZGlzcGxheTpub25lO1xyXG5cdH1cclxuXHQuc2VjdGlvbi1wcm9qZWN0c3tcclxuXHQucHJvamVjdC1ncmlke1xyXG5cdFx0bGl7XHJcblx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHRcdGZpZ3VyZXtcclxuXHRcdFx0XHRtYXJnaW46MCAwIDE1cHg7XHJcblx0XHRcdH1cclxuXHRcdFx0JjpmaXJzdC1jaGlsZHtcclxuXHRcdFx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0XHRmaWd1cmV7XHJcblx0XHRcdFx0bWFyZ2luOjAgMCAxNXB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0JjpudGgtY2hpbGQoNCksICY6bnRoLWNoaWxkKDUpe1xyXG5cdFx0XHRcdGZpZ3VyZXtcclxuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206MTVweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxufSIsIjo6bmctZGVlcCAubWFpbi1iYW5uZXIgLmNhcm91c2VsIHtcbiAgbWFyZ2luLXRvcDogLTYwcHg7XG4gIHotaW5kZXg6IDE7XG59XG46Om5nLWRlZXAgLm1haW4tYmFubmVyIC5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogODAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46Om5nLWRlZXAgLm1haW4tYmFubmVyIC5jYXJvdXNlbC1pdGVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG46Om5nLWRlZXAgLm1haW4tYmFubmVyIC5jYXJvdXNlbC1pdGVtIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IC0xMDAlO1xuICB6LWluZGV4OiAxMDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiA2MDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMXM7XG4gIG9wYWNpdHk6IDA7XG59XG46Om5nLWRlZXAgLm1haW4tYmFubmVyIC5jYXJvdXNlbC1pdGVtIC5jYXJvdXNlbC1jYXB0aW9uIGgxIHtcbiAgY29sb3I6ICNGRkMxMDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDA7XG59XG46Om5nLWRlZXAgLm1haW4tYmFubmVyIC5jYXJvdXNlbC1pdGVtIC5jYXJvdXNlbC1jYXB0aW9uIC5idG4ge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG46Om5nLWRlZXAgLm1haW4tYmFubmVyIC5jYXJvdXNlbC1pdGVtIC5jYXJvdXNlbC1jYXB0aW9uIGgzIHtcbiAgY29sb3I6ICNmZmY7XG59XG46Om5nLWRlZXAgLm1haW4tYmFubmVyIC5jYXJvdXNlbC1pdGVtIC5pbmZvLWltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0xMDAlO1xuICB0b3A6IDU1JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01NSUpO1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2l0aW9uOiBhbGwgMXM7XG4gIG9wYWNpdHk6IDA7XG59XG46Om5nLWRlZXAgLm1haW4tYmFubmVyIC5jYXJvdXNlbC1pdGVtLmFjdGl2ZSAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gIGxlZnQ6IDE1cHg7XG4gIG9wYWNpdHk6IDAuOTtcbn1cbjo6bmctZGVlcCAubWFpbi1iYW5uZXIgLmNhcm91c2VsLWl0ZW0uYWN0aXZlIC5pbmZvLWltZyB7XG4gIHJpZ2h0OiAxNXB4O1xuICBvcGFjaXR5OiAwLjk7XG59XG46Om5nLWRlZXAgLm1haW4tYmFubmVyIC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpIHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuOjpuZy1kZWVwIC5tYWluLWJhbm5lciAucGljc3VtLWltZy13cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG46Om5nLWRlZXAgLm1haW4tYmFubmVyIC5waWNzdW0taW1nLXdyYXBwZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogcmdiYSgxNiwgODAsIDEyOCwgMC45KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMC45O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cbjo6bmctZGVlcCAubWFpbi1iYW5uZXIgLnBpY3N1bS1pbWctd3JhcHBlciBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxubmdiLWNhcm91c2VsIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnBhbmVsLWhlYWRpbmcsIC5wYW5lbC1ib2R5IHtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jbGllbnRzLCAuc2VjdGlvbi1wcm9qZWN0cywgLnNlY3Rpb24tc2V2aWNlcywgLnRlc3RpbW9uaWFscywgLnNlY3Rpb24taW5mbywgLmNvbnRhY3QtaW5mbyB7XG4gIHBhZGRpbmc6IDcwcHggMDtcbn1cblxuLmNsaWVudHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xufVxuLmNsaWVudHMgaDYge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uY2xlYXItZmxvYXQge1xuICBjbGVhcjogYm90aDtcbiAgZmxvYXQ6IG5vbmU7XG59XG5cbi5jb250YWN0LWluZm8gLnNvY2lhbC1uZXQgdWwge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4uY29udGFjdC1pbmZvIC5zb2NpYWwtbmV0IHVsIGxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmNvbnRhY3QtaW5mbyAuc29jaWFsLW5ldCB1bCBsaSBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGNvbG9yOiAjNTU1NTU1O1xufVxuLmNvbnRhY3QtaW5mbyAuc29jaWFsLW5ldCB1bCBsaSBzdmcge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuLmNvbnRhY3QtaW5mbyAuc2V0LXBhcnQge1xuICBtYXJnaW46IDQwcHggMDtcbn1cbi5jb250YWN0LWluZm8gaDYge1xuICBjb2xvcjogIzU1NTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFjdC1pbmZvIGZvcm0ge1xuICBtYXJnaW4tdG9wOiA0MnB4O1xufVxuLmNvbnRhY3QtaW5mbyBmb3JtIC5idG4ge1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG4uY29udGFjdC1pbmZvIC5lbWFpbC1saW5rIHtcbiAgY29sb3I6ICMyNzZjYWE7XG59XG5cbi5pY29uLWNpcmNsZSB7XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uaWNvbi1jaXJjbGUgaSB7XG4gIGxpbmUtaGVpZ2h0OiA5MHB4O1xufVxuXG4uc2VjdGlvbi1pbmZvIC5wYW5lbC1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAzMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsLWNvbnRhaW5lcjpob3ZlciAucGFuZWwge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIHtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1mcm9udCB7XG4gIGJvcmRlci10b3A6IDVweCBzb2xpZDtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG4gIHotaW5kZXg6IDE7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtZnJvbnQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogLTE7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtZnJvbnQucmVkIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvMS5qcGcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xuICBib3JkZXItY29sb3I6ICNiOTY0NmU7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtZnJvbnQucmVkIC5jaXJjbGUtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjk2NDZlO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWZyb250LmJsdWUge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy8yLmpwZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XG4gIGJvcmRlci1jb2xvcjogIzI3NmNhYTtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1mcm9udC5ibHVlIC5jaXJjbGUtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc2Y2FhO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWZyb250LmdyZWVuIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvMy5qcGcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xuICBib3JkZXItY29sb3I6ICM0YmJiNTc7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtZnJvbnQuZ3JlZW4gLmNpcmNsZS1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YmJiNTc7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtYmFjayB7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWJhY2sucmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5NjQ2ZTtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1iYWNrLmJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc2Y2FhO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWJhY2suZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJiYjU3O1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWZyb250LCAuc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1iYWNrIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtYmFjayBwIHtcbiAgcGFkZGluZzogMjVweDtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIGg1IHtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgcCB7XG4gIG1hcmdpbjogMDtcbn1cbi5zZWN0aW9uLWluZm8gaDYge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLnNlY3Rpb24taW5mbyBzdmcge1xuICBmaWxsOiAjZmZmO1xufVxuXG4uc2VjdGlvbi1zZXZpY2VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjIpO1xufVxuLnNlY3Rpb24tc2V2aWNlcyAucGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHBhZGRpbmc6IDE1cHggMDtcbn1cbi5zZWN0aW9uLXNldmljZXMgLnBhbmVsIGg1IHtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLnNlY3Rpb24tc2V2aWNlcyAucGFuZWwgcCB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cbi5zZWN0aW9uLXNldmljZXMgLnBhbmVsIC5pY29uLWNpcmNsZSB7XG4gIG1hcmdpbjogMTVweCBhdXRvO1xufVxuLnNlY3Rpb24tc2V2aWNlcyAucGFuZWwgLmljb24tY2lyY2xlIHN2ZyB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDgwcHg7XG59XG4uc2VjdGlvbi1zZXZpY2VzIC5wYW5lbCAuaWNvbi1jaXJjbGUuc2t5Ymx1ZSB7XG4gIGJhY2tncm91bmQ6ICM4OGNlZGI7XG59XG4uc2VjdGlvbi1zZXZpY2VzIC5wYW5lbCAuaWNvbi1jaXJjbGUubGltZWdyZWVuIHtcbiAgYmFja2dyb3VuZDogIzc4YzI5YTtcbn1cbi5zZWN0aW9uLXNldmljZXMgLnBhbmVsIC5pY29uLWNpcmNsZS55ZWxsb3cge1xuICBiYWNrZ3JvdW5kOiAjZjFiYjU3O1xufVxuLnNlY3Rpb24tc2V2aWNlcyAucGFuZWwgLmljb24tY2lyY2xlLm9yYW5nZSB7XG4gIGJhY2tncm91bmQ6ICNlOTdmNjE7XG59XG4uc2VjdGlvbi1zZXZpY2VzIC5wYW5lbCAuaWNvbi1jaXJjbGUuYmx1ZSB7XG4gIGJhY2tncm91bmQ6ICM4OGNlZGI7XG59XG4uc2VjdGlvbi1zZXZpY2VzIC5wYW5lbCAuaWNvbi1jaXJjbGUucHVycGxlIHtcbiAgYmFja2dyb3VuZDogIzc4N2ZjMjtcbn1cbi5zZWN0aW9uLXNldmljZXMgaDYge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG46Om5nLWRlZXAgLnRlc3RpbW9uaWFscyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjo6bmctZGVlcCAudGVzdGltb25pYWxzIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbjo6bmctZGVlcCAudGVzdGltb25pYWxzIGgxIHtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG46Om5nLWRlZXAgLnRlc3RpbW9uaWFscyBwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuOjpuZy1kZWVwIC50ZXN0aW1vbmlhbHMgcDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMzVweDtcbn1cbjo6bmctZGVlcCAudGVzdGltb25pYWxzIC5jYXJvdXNlbCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG46Om5nLWRlZXAgLnRlc3RpbW9uaWFscyAuY2Fyb3VzZWwtaW5uZXIge1xuICBoZWlnaHQ6IDI4MnB4O1xufVxuOjpuZy1kZWVwIC50ZXN0aW1vbmlhbHMgLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuOjpuZy1kZWVwIC50ZXN0aW1vbmlhbHMgLmNhcm91c2VsLWluZGljYXRvcnMgbGkuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbjo6bmctZGVlcCAudGVzdGltb25pYWxzIC5jYXJvdXNlbC1pdGVtIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwO1xufVxuOjpuZy1kZWVwIC50ZXN0aW1vbmlhbHMgLmNhcm91c2VsLWl0ZW0uYWN0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zZWN0aW9uLXByb2plY3RzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2VjdGlvbi1wcm9qZWN0cyBoNiB7XG4gIG1hcmdpbjogMzVweCAwIDQwcHg7XG59XG4uc2VjdGlvbi1wcm9qZWN0cyAucHJvamVjdC1ncmlkIGxpIHtcbiAgd2lkdGg6IDI1JTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5zZWN0aW9uLXByb2plY3RzIC5wcm9qZWN0LWdyaWQgbGkgZmlndXJlIHtcbiAgbWFyZ2luOiAwIDAgMnB4IDA7XG59XG4uc2VjdGlvbi1wcm9qZWN0cyAucHJvamVjdC1ncmlkIGxpOmZpcnN0LWNoaWxkIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5zZWN0aW9uLXByb2plY3RzIC5wcm9qZWN0LWdyaWQgbGk6Zmlyc3QtY2hpbGQgZmlndXJlIHtcbiAgbWFyZ2luOiAwO1xufVxuLnNlY3Rpb24tcHJvamVjdHMgLnByb2plY3QtZ3JpZCBsaTpudGgtY2hpbGQoNCkgZmlndXJlLCAuc2VjdGlvbi1wcm9qZWN0cyAucHJvamVjdC1ncmlkIGxpOm50aC1jaGlsZCg1KSBmaWd1cmUge1xuICBtYXJnaW46IDA7XG59XG4uc2VjdGlvbi1wcm9qZWN0cyAucHJvamVjdC1ncmlkIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG59XG4uc2VjdGlvbi1wcm9qZWN0cyAucDEge1xuICBwYWRkaW5nOiAxcHg7XG59XG4uc2VjdGlvbi1wcm9qZWN0cyBmaWd1cmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMnB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2VjdGlvbi1wcm9qZWN0cyBmaWd1cmUgaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLnNlY3Rpb24tcHJvamVjdHMgZmlndXJlIC5zaG93LW1vcmUtb3ZlcmxheSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgbGluZWFyLWdyYWRpZW50KDBkZWcsIGJsYWNrIDAlLCByZ2JhKDAsIDAsIDAsIDAuMikgMjMlLCByZ2JhKDAsIDAsIDAsIDApIDQwJSwgcmdiYSgwLCAwLCAwLCAwKSA2OCUsIHJnYmEoMCwgMCwgMCwgMCkgODElLCByZ2JhKDAsIDAsIDAsIDApIDkyJSwgcmdiYSgwLCAwLCAwLCAwKSAxMDAlKSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwcztcbn1cbi5zZWN0aW9uLXByb2plY3RzIGZpZ3VyZSBmaWdjYXB0aW9uIHtcbiAgd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAyMHB4O1xuICByaWdodDogMjBweDtcbiAgbWF4LWhlaWdodDogNDBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICB6LWluZGV4OiAyO1xufVxuLnNlY3Rpb24tcHJvamVjdHMgZmlndXJlIC5zaG93X21vcmUtdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5zZWN0aW9uLXByb2plY3RzIGZpZ3VyZSAuc2hvd19tb3JlLWRlc2Mge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5zZWN0aW9uLXByb2plY3RzIGZpZ3VyZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxO1xufVxuLnNlY3Rpb24tcHJvamVjdHMgZmlndXJlOmhvdmVyIGltZyB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4uc2VjdGlvbi1wcm9qZWN0cyBmaWd1cmU6aG92ZXIgLnNob3ctbW9yZS1vdmVybGF5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBsaW5lYXItZ3JhZGllbnQoMGRlZywgYmxhY2sgMCUsIHJnYmEoMCwgMCwgMCwgMC4yKSAxMDAlKSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG59XG4uc2VjdGlvbi1wcm9qZWN0cyBmaWd1cmU6aG92ZXIgZmlnY2FwdGlvbiB7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIGJvdHRvbTogNTBweDtcbn1cblxuLnNlY3Rpb24tb3VyLXByb2R1Y3RzIHtcbiAgcGFkZGluZzogMCAwIDcwcHg7XG59XG4uc2VjdGlvbi1vdXItcHJvZHVjdHMgLnBhbmVsIHtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuMik7XG59XG4uc2VjdGlvbi1vdXItcHJvZHVjdHMgLnBhbmVsIGg1IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2VjdGlvbi1vdXItcHJvZHVjdHMgLnBhbmVsIC5yb3cgZGl2OmZpcnN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZDogIzI3NmNhYTtcbn1cbi5zZWN0aW9uLW91ci1wcm9kdWN0cyAucGFuZWwgLnJvdyBkaXYgaW1nIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4IDA7XG59XG4uc2VjdGlvbi1vdXItcHJvZHVjdHMgLnBhbmVsIC5yb3cgZGl2Om50aC1jaGlsZCgyKSB7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG4uc2VjdGlvbi1vdXItcHJvZHVjdHMgLnBhbmVsIC5yb3cgZGl2Om50aC1jaGlsZCgyKSB1bCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uc2VjdGlvbi1vdXItcHJvZHVjdHMgLnBhbmVsIC5yb3cgZGl2Om50aC1jaGlsZCgyKSB1bCBsaSB7XG4gIHBhZGRpbmc6IDAgMCAxMHB4IDIwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmUgb3V0c2lkZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNlY3Rpb24tb3VyLXByb2R1Y3RzIC5wYW5lbCAucm93IGRpdjpudGgtY2hpbGQoMikgdWwgbGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBiYWNrZ3JvdW5kOiAjMjE0ZjdhO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDhweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5tYWluLWJhbm5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5zZWN0aW9uLXByb2plY3RzIC5wcm9qZWN0LWdyaWQgbGkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5zZWN0aW9uLXByb2plY3RzIC5wcm9qZWN0LWdyaWQgbGkgZmlndXJlIHtcbiAgICBtYXJnaW46IDAgMCAxNXB4O1xuICB9XG4gIC5zZWN0aW9uLXByb2plY3RzIC5wcm9qZWN0LWdyaWQgbGk6Zmlyc3QtY2hpbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5zZWN0aW9uLXByb2plY3RzIC5wcm9qZWN0LWdyaWQgbGk6Zmlyc3QtY2hpbGQgZmlndXJlIHtcbiAgICBtYXJnaW46IDAgMCAxNXB4O1xuICB9XG4gIC5zZWN0aW9uLXByb2plY3RzIC5wcm9qZWN0LWdyaWQgbGk6bnRoLWNoaWxkKDQpIGZpZ3VyZSwgLnNlY3Rpb24tcHJvamVjdHMgLnByb2plY3QtZ3JpZCBsaTpudGgtY2hpbGQoNSkgZmlndXJlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG59Il19 */");

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HomeComponent = class HomeComponent {
    constructor(router) {
        this.router = router;
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
        this.slideConfig2 = {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
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
                        slidesToShow: 1
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
        this.btnClick = function () {
            this.router.navigateByUrl('/Contactus', { skipLocationChange: true });
        };
        this.btnOurProduct = function () {
            this.router.navigateByUrl('/OurProduct', { skipLocationChange: true });
        };
        this.lernmore = function (url) {
            this.router.navigateByUrl('/ManagedServices', { skipLocationChange: true });
        };
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
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
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
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
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
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
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
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
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
/* harmony default export */ __webpack_exports__["default"] = (".section-industy-info {\n  padding-top: 0px;\n}\n.section-industy-info .section-sevices .panel {\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 5px;\n  margin-bottom: 15px;\n  padding: 15px 0;\n}\n.section-industy-info .section-sevices .panel h5 {\n  color: #333333;\n  font-weight: bold;\n  margin-bottom: 25px;\n}\n.section-industy-info .section-sevices .panel p {\n  padding: 0 20px;\n}\n.section-industy-info .section-sevices .panel .icon-circle {\n  margin: 15px auto;\n}\n.section-industy-info .section-sevices .panel .icon-circle svg {\n  height: 80px;\n  width: 80px;\n}\n.section-industy-info .section-sevices .panel .icon-circle.skyblue {\n  background: #88cedb;\n}\n.section-industy-info .section-sevices .panel .icon-circle.limegreen {\n  background: #78c29a;\n}\n.section-industy-info .section-sevices .panel .icon-circle.yellow {\n  background: #f1bb57;\n}\n.section-industy-info .section-sevices .panel .icon-circle.orange {\n  background: #e97f61;\n}\n.section-industy-info .section-sevices .panel .icon-circle.blue {\n  background: #88cedb;\n}\n.section-industy-info .section-sevices .panel .icon-circle.purple {\n  background: #787fc2;\n}\n.section-industy-info .section-sevices h6 {\n  margin-bottom: 40px;\n}\n.section-industy-info .section-sevices .icon-circle {\n  height: 90px;\n  width: 90px;\n  border-radius: 50%;\n  margin: 0 auto;\n}\n.section-industy-info .section-sevices .icon-circle i {\n  line-height: 90px;\n}\nul li a {\n  padding: 15px;\n  margin-bottom: 15px;\n  background: #e5e5e5;\n  color: #333333;\n  display: block;\n}\nul li a.active {\n  background: #214f7a;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kdXN0cmllcy9GOlxcZ2l0aHViXFx3b3JrL3NyY1xcYXBwXFxpbmR1c3RyaWVzXFxpbmR1c3RyaWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbmR1c3RyaWVzL2luZHVzdHJpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKO0FEOENDO0VBQ0MsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDNUNGO0FENkNFO0VBQ0MsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUMzQ0g7QUQ4Q0U7RUFDQyxlQUFBO0FDNUNIO0FEOENFO0VBQ0MsaUJBQUE7QUM1Q0g7QUQ2Q0c7RUFDQyxZQUFBO0VBQ0EsV0FBQTtBQzNDSjtBRDZDRztFQUNDLG1CQTlCSztBQ2JUO0FENkNHO0VBQ0MsbUJBOUJPO0FDYlg7QUQ2Q0c7RUFDQyxtQkFuQ0k7QUNSUjtBRDZDRztFQUNDLG1CQXJDSTtBQ05SO0FENkNHO0VBQ0MsbUJBdENFO0FDTE47QUQ2Q0c7RUFDQyxtQkF4Q0k7QUNIUjtBRGdEQztFQUNDLG1CQUFBO0FDOUNGO0FEaURJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUMvQ1I7QURnRFE7RUFDSSxpQkFBQTtBQzlDWjtBRDBEUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUN2RFo7QUR3RFk7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUN0RGhCIiwiZmlsZSI6InNyYy9hcHAvaW5kdXN0cmllcy9pbmR1c3RyaWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24taW5kdXN0eS1pbmZve1xyXG4gICAgcGFkZGluZy10b3A6MHB4O1xyXG4gICAgLy8gLnBhbmVse1xyXG4gICAgLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vICAgICAucGFuZWwtaGVhZGluZ3tcclxuICAgIC8vICAgICAgICAgd2lkdGg6MTUwcHg7XHJcbiAgICAvLyAgICAgICAgIGhlaWdodDoxNTBweDtcclxuICAgIC8vICAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICAvLyAgICAgICAgIGJvcmRlcjoycHggc29saWQgIzIxNGY3YTtcclxuICAgIC8vICAgICAgICAgbWFyZ2luOjAgYXV0byAxNXB4O1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICBwe1xyXG4gICAgLy8gICAgICAgIGNvbG9yOiAjMjE0ZjdhO1xyXG4gICAgLy8gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAvLyAgICAgICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGl7XHJcbiAgICAvLyAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMzVweDtcclxuICAgIC8vICAgICAgICAgc3Zne1xyXG4gICAgLy8gICAgICAgICAgICAgZmlsbDogIzIxNGY3YTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICAucGFuZWwtaGVhZGluZ3tcclxuICAgIC8vICAgICAgICAgJjpob3ZlcntcclxuICAgIC8vICAgICAgICAgICAgIGJhY2tncm91bmQ6IzIxNGY3YTtcclxuICAgIC8vICAgICAgICAgICAgIHN2Z3tcclxuICAgIC8vICAgICAgICAgICAgICAgICBmaWxsOiAjZmZmO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLy8gLmNvbHtcclxuICAgIC8vICAgICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbiAgICAvLyAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAvLyAgICAgICAgbWFyZ2luOjAgYXV0bztcclxuICAgIC8vICAgIH0gXHJcbiAgICAvLyB9XHJcblxyXG5cclxuJHNreWJsdWU6Izg4Y2VkYjtcclxuJHllbGxvdzojZjFiYjU3O1xyXG4kb3JhbmdlOiNlOTdmNjE7XHJcbiRsaW1lZ3JlZW46Izc4YzI5YTtcclxuJGJsdWU6Izg4Y2VkYjtcclxuJHB1cnBsZTojNzg3ZmMyO1xyXG5cclxuLnNlY3Rpb24tc2V2aWNlc3tcclxuXHQucGFuZWx7XHJcblx0XHRiYWNrZ3JvdW5kOiNmZmY7XHJcblx0XHRib3JkZXI6MXB4IHNvbGlkIHJnYmEoMjI0LCAyMjQsIDIyNCwgMSk7XHJcblx0XHRib3JkZXItcmFkaXVzOjVweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblx0XHRwYWRkaW5nOiAxNXB4IDA7XHJcblx0XHRoNXtcclxuXHRcdFx0Y29sb3I6IzMzMzMzMztcclxuXHRcdFx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbToyNXB4O1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRwe1xyXG5cdFx0XHRwYWRkaW5nOjAgMjBweDtcclxuXHRcdH1cclxuXHRcdC5pY29uLWNpcmNsZXtcclxuXHRcdFx0bWFyZ2luOiAxNXB4IGF1dG87XHJcblx0XHRcdHN2Z3tcclxuXHRcdFx0XHRoZWlnaHQ6ODBweDtcclxuXHRcdFx0XHR3aWR0aDo4MHB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdCYuc2t5Ymx1ZXtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiRza3libHVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdCYubGltZWdyZWVue1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6JGxpbWVncmVlbjtcclxuXHRcdFx0fVxyXG5cdFx0XHQmLnllbGxvd3tcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiR5ZWxsb3c7XHJcblx0XHRcdH1cclxuXHRcdFx0Ji5vcmFuZ2V7XHJcblx0XHRcdFx0YmFja2dyb3VuZDokb3JhbmdlO1xyXG5cdFx0XHR9XHJcblx0XHRcdCYuYmx1ZXtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiRibHVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdCYucHVycGxle1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6JHB1cnBsZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aDZ7XHJcblx0XHRtYXJnaW4tYm90dG9tOjQwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pY29uLWNpcmNsZXtcclxuICAgICAgICBoZWlnaHQ6OTBweDtcclxuICAgICAgICB3aWR0aDo5MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICAgICAgaXtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6OTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuXHJcbn1cclxuXHJcbnVse1xyXG4gICAgbGl7XHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgcGFkZGluZzoxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjE1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6I2U1ZTVlNTtcclxuICAgICAgICAgICAgY29sb3I6IzMzMzMzMztcclxuICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgJi5hY3RpdmV7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiMyMTRmN2E7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuc2VjdGlvbi1pbmR1c3R5LWluZm8ge1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuLnNlY3Rpb24taW5kdXN0eS1pbmZvIC5zZWN0aW9uLXNldmljZXMgLnBhbmVsIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBwYWRkaW5nOiAxNXB4IDA7XG59XG4uc2VjdGlvbi1pbmR1c3R5LWluZm8gLnNlY3Rpb24tc2V2aWNlcyAucGFuZWwgaDUge1xuICBjb2xvcjogIzMzMzMzMztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4uc2VjdGlvbi1pbmR1c3R5LWluZm8gLnNlY3Rpb24tc2V2aWNlcyAucGFuZWwgcCB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cbi5zZWN0aW9uLWluZHVzdHktaW5mbyAuc2VjdGlvbi1zZXZpY2VzIC5wYW5lbCAuaWNvbi1jaXJjbGUge1xuICBtYXJnaW46IDE1cHggYXV0bztcbn1cbi5zZWN0aW9uLWluZHVzdHktaW5mbyAuc2VjdGlvbi1zZXZpY2VzIC5wYW5lbCAuaWNvbi1jaXJjbGUgc3ZnIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogODBweDtcbn1cbi5zZWN0aW9uLWluZHVzdHktaW5mbyAuc2VjdGlvbi1zZXZpY2VzIC5wYW5lbCAuaWNvbi1jaXJjbGUuc2t5Ymx1ZSB7XG4gIGJhY2tncm91bmQ6ICM4OGNlZGI7XG59XG4uc2VjdGlvbi1pbmR1c3R5LWluZm8gLnNlY3Rpb24tc2V2aWNlcyAucGFuZWwgLmljb24tY2lyY2xlLmxpbWVncmVlbiB7XG4gIGJhY2tncm91bmQ6ICM3OGMyOWE7XG59XG4uc2VjdGlvbi1pbmR1c3R5LWluZm8gLnNlY3Rpb24tc2V2aWNlcyAucGFuZWwgLmljb24tY2lyY2xlLnllbGxvdyB7XG4gIGJhY2tncm91bmQ6ICNmMWJiNTc7XG59XG4uc2VjdGlvbi1pbmR1c3R5LWluZm8gLnNlY3Rpb24tc2V2aWNlcyAucGFuZWwgLmljb24tY2lyY2xlLm9yYW5nZSB7XG4gIGJhY2tncm91bmQ6ICNlOTdmNjE7XG59XG4uc2VjdGlvbi1pbmR1c3R5LWluZm8gLnNlY3Rpb24tc2V2aWNlcyAucGFuZWwgLmljb24tY2lyY2xlLmJsdWUge1xuICBiYWNrZ3JvdW5kOiAjODhjZWRiO1xufVxuLnNlY3Rpb24taW5kdXN0eS1pbmZvIC5zZWN0aW9uLXNldmljZXMgLnBhbmVsIC5pY29uLWNpcmNsZS5wdXJwbGUge1xuICBiYWNrZ3JvdW5kOiAjNzg3ZmMyO1xufVxuLnNlY3Rpb24taW5kdXN0eS1pbmZvIC5zZWN0aW9uLXNldmljZXMgaDYge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLnNlY3Rpb24taW5kdXN0eS1pbmZvIC5zZWN0aW9uLXNldmljZXMgLmljb24tY2lyY2xlIHtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5zZWN0aW9uLWluZHVzdHktaW5mbyAuc2VjdGlvbi1zZXZpY2VzIC5pY29uLWNpcmNsZSBpIHtcbiAgbGluZS1oZWlnaHQ6IDkwcHg7XG59XG5cbnVsIGxpIGEge1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xuICBjb2xvcjogIzMzMzMzMztcbiAgZGlzcGxheTogYmxvY2s7XG59XG51bCBsaSBhLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMyMTRmN2E7XG4gIGNvbG9yOiAjZmZmO1xufSJdfQ== */");

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
            { title: 'IT, Telecom & Software', icon: 'icon_itsoftware' },
            { title: 'Telecom', icon: 'icon_teletower' },
            { title: 'ITES - BPO & KPO', icon: 'icon_bpoKpo' },
            { title: 'Engineering & Manufacturing', icon: 'icon_egmg' },
            { title: 'Consumer Goods & Retail', icon: 'icon_retailflat' },
            { title: 'Banking Financial Services & Insurance', icon: 'icon_accountflat' },
            { title: 'Health Care & Pharmaceuticals', icon: 'icon_vaccineflat' }
        ];
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

/***/ "./src/app/managedservice/managedservice.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/managedservice/managedservice.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section-manage-service h5 {\n  font-weight: bold;\n  text-align: center;\n  margin: 70px 0;\n}\n.section-manage-service ul {\n  margin-top: 35px;\n}\n.section-manage-service ul li {\n  padding: 0 0 20px 20px;\n  list-style: none outside;\n  font-size: 16px;\n  font-weight: bold;\n  position: relative;\n}\n.section-manage-service ul li::before {\n  content: \" \";\n  background: #214f7a;\n  font-weight: bold;\n  position: absolute;\n  top: 8px;\n  left: 0px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n.section-manage-service img {\n  width: auto;\n}\n.section-manage-service .row:last-child {\n  margin-top: 70px;\n}\n.section-manage-service .panel-container {\n  margin-bottom: 25px;\n}\n.section-manage-service .panel {\n  color: #fff;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.section-manage-service .panel .panel-body {\n  position: absolute;\n  bottom: 5px;\n  right: 15px;\n}\n.section-manage-service .panel .panel-front {\n  z-index: 1;\n  background: #e6f0fa;\n  height: 100%;\n  padding: 15px;\n  padding-bottom: 100px;\n}\n.section-manage-service .panel .panel-back {\n  webkit-backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  transition: 0.5s ease-in-out;\n  z-index: 2;\n  height: 0;\n}\n.section-manage-service .panel .panel-back p {\n  padding: 10px;\n  color: #555;\n  text-align: left;\n}\n.section-manage-service .panel .panel-back h5 {\n  margin: 0;\n  padding: 20px 10px;\n  text-align: left;\n  color: #555;\n}\n.section-manage-service .panel p {\n  margin: 0;\n  text-align: right;\n  color: #333333;\n  padding: 10px;\n  width: 250px;\n  font-weight: bold;\n}\n.section-manage-service .panel:hover .panel-back {\n  background: #214f7a;\n  height: 100%;\n}\n.section-manage-service .panel:hover .panel-back p {\n  color: #fff;\n}\n.section-manage-service .panel:hover .panel-back h5 {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlZHNlcnZpY2UvRjpcXGdpdGh1Ylxcd29yay9zcmNcXGFwcFxcbWFuYWdlZHNlcnZpY2VcXG1hbmFnZWRzZXJ2aWNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYW5hZ2Vkc2VydmljZS9tYW5hZ2Vkc2VydmljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQVI7QURFSTtFQUNGLGdCQUFBO0FDQUY7QURDRztFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDUyxlQUFBO0VBQ0EsaUJBQUE7RUFDVCxrQkFBQTtBQ0NIO0FEQUc7RUFDQyxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNFSjtBREVJO0VBQ0ksV0FBQTtBQ0FSO0FER1E7RUFDSSxnQkFBQTtBQ0RaO0FESUk7RUFDRixtQkFBQTtBQ0ZGO0FES0k7RUFDRixXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDSEY7QURJRTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNGSDtBRElFO0VBQ0MsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQ0ZIO0FESUU7RUFDQyxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0VBQ0csU0FBQTtBQ0ZOO0FER0c7RUFDWSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDRGY7QURHWTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0RaO0FETUU7RUFDQyxTQUFBO0VBQ1MsaUJBQUE7RUFDQSxjQUFBO0VBQ1QsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0pIO0FEUUc7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNOSDtBRFFHO0VBQ0MsV0FBQTtBQ05KO0FEUUc7RUFDQyxXQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9tYW5hZ2Vkc2VydmljZS9tYW5hZ2Vkc2VydmljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLW1hbmFnZS1zZXJ2aWNle1xyXG4gICAgaDV7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOjcwcHggMDtcclxuICAgIH1cclxuICAgIHVse1xyXG5cdFx0bWFyZ2luLXRvcDozNXB4O1xyXG5cdFx0IGxpe1xyXG5cdFx0XHRwYWRkaW5nOiAwIDAgMjBweCAyMHB4O1xyXG5cdFx0XHRsaXN0LXN0eWxlOiBub25lIG91dHNpZGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0Jjo6YmVmb3Jle1xyXG5cdFx0XHRcdGNvbnRlbnQ6IFwiIFwiO1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICMyMTRmN2E7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRcdFx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0XHRcdFx0dG9wOjhweDtcclxuXHRcdFx0XHRsZWZ0OjBweDtcclxuXHRcdFx0XHR3aWR0aDogMTBweDtcclxuXHRcdFx0XHRoZWlnaHQ6MTBweDtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOmF1dG87XHJcbiAgICB9XHJcbiAgICAucm93e1xyXG4gICAgICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDo3MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wYW5lbC1jb250YWluZXJ7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG5cdFx0XHJcblx0fVxyXG4gICAgLnBhbmVse1xyXG5cdFx0Y29sb3I6I2ZmZjtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdC5wYW5lbC1ib2R5e1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGJvdHRvbTo1cHg7XHJcblx0XHRcdHJpZ2h0OjE1cHg7XHJcblx0XHR9XHJcblx0IC5wYW5lbC1mcm9udHtcclxuXHRcdFx0ei1pbmRleDogMTtcclxuXHRcdFx0YmFja2dyb3VuZDojZTZmMGZhO1xyXG5cdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdHBhZGRpbmc6IDE1cHg7XHJcblx0XHRcdHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuXHRcdH1cclxuXHRcdC5wYW5lbC1iYWNre1xyXG5cdFx0XHR3ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdFx0XHQtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHRcdFx0YmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGJvdHRvbTogMHB4O1xyXG5cdFx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0XHR0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xyXG5cdFx0XHR6LWluZGV4OiAyO1xyXG5cdFx0ICAgIGhlaWdodDogMDtcclxuXHRcdFx0cHtcclxuICAgICAgICAgICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICAgICAgICAgICBjb2xvcjojNTU1O1xyXG4gICAgICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDV7XHJcbiAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjIwcHggMTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgICAgICBjb2xvcjojNTU1O1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHB7XHJcblx0XHRcdG1hcmdpbjowO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgY29sb3I6IzMzMzMzMztcclxuXHRcdFx0cGFkZGluZzoxMHB4O1xyXG5cdFx0XHR3aWR0aDogMjUwcHg7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0fVxyXG5cclxuXHRcdCY6aG92ZXJ7XHJcblx0XHRcdC5wYW5lbC1iYWNre1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiMyMTRmN2E7XHJcblx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0XHJcblx0XHRcdHB7XHJcblx0XHRcdFx0Y29sb3I6I2ZmZjtcdFxyXG5cdFx0XHR9XHJcblx0XHRcdGg1e1xyXG5cdFx0XHRcdGNvbG9yOiNmZmY7XHRcclxuXHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fVxyXG4gICAgfVxyXG59IiwiLnNlY3Rpb24tbWFuYWdlLXNlcnZpY2UgaDUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDcwcHggMDtcbn1cbi5zZWN0aW9uLW1hbmFnZS1zZXJ2aWNlIHVsIHtcbiAgbWFyZ2luLXRvcDogMzVweDtcbn1cbi5zZWN0aW9uLW1hbmFnZS1zZXJ2aWNlIHVsIGxpIHtcbiAgcGFkZGluZzogMCAwIDIwcHggMjBweDtcbiAgbGlzdC1zdHlsZTogbm9uZSBvdXRzaWRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VjdGlvbi1tYW5hZ2Utc2VydmljZSB1bCBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGJhY2tncm91bmQ6ICMyMTRmN2E7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnNlY3Rpb24tbWFuYWdlLXNlcnZpY2UgaW1nIHtcbiAgd2lkdGg6IGF1dG87XG59XG4uc2VjdGlvbi1tYW5hZ2Utc2VydmljZSAucm93Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiA3MHB4O1xufVxuLnNlY3Rpb24tbWFuYWdlLXNlcnZpY2UgLnBhbmVsLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4uc2VjdGlvbi1tYW5hZ2Utc2VydmljZSAucGFuZWwge1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnNlY3Rpb24tbWFuYWdlLXNlcnZpY2UgLnBhbmVsIC5wYW5lbC1ib2R5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDVweDtcbiAgcmlnaHQ6IDE1cHg7XG59XG4uc2VjdGlvbi1tYW5hZ2Utc2VydmljZSAucGFuZWwgLnBhbmVsLWZyb250IHtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZDogI2U2ZjBmYTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG59XG4uc2VjdGlvbi1tYW5hZ2Utc2VydmljZSAucGFuZWwgLnBhbmVsLWJhY2sge1xuICB3ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbiAgei1pbmRleDogMjtcbiAgaGVpZ2h0OiAwO1xufVxuLnNlY3Rpb24tbWFuYWdlLXNlcnZpY2UgLnBhbmVsIC5wYW5lbC1iYWNrIHAge1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogIzU1NTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5zZWN0aW9uLW1hbmFnZS1zZXJ2aWNlIC5wYW5lbCAucGFuZWwtYmFjayBoNSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzU1NTtcbn1cbi5zZWN0aW9uLW1hbmFnZS1zZXJ2aWNlIC5wYW5lbCBwIHtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2VjdGlvbi1tYW5hZ2Utc2VydmljZSAucGFuZWw6aG92ZXIgLnBhbmVsLWJhY2sge1xuICBiYWNrZ3JvdW5kOiAjMjE0ZjdhO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uc2VjdGlvbi1tYW5hZ2Utc2VydmljZSAucGFuZWw6aG92ZXIgLnBhbmVsLWJhY2sgcCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnNlY3Rpb24tbWFuYWdlLXNlcnZpY2UgLnBhbmVsOmhvdmVyIC5wYW5lbC1iYWNrIGg1IHtcbiAgY29sb3I6ICNmZmY7XG59Il19 */");

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
                description: 'Mixed Multimedia Content',
                description_2: 'Tired with only single type content? with Jkreativ you have ability to mix your content such as youtube, vimeo, sound cloud also self hosted HTML 5 video.',
            },
            {
                title: 'Control Your Portfolio Size, Dimension & Size of Your Margin',
                description: 'Control Your Portfolio Size, Dimension & Size of Your Margin',
                description_2: 'Tired with only single type content? with Jkreativ you have ability to mix your content such as youtube, vimeo, sound cloud also self hosted HTML 5 video.',
            },
            {
                title: 'Portfolio Item Block Size',
                description: 'Portfolio Item Block Size',
                description_2: 'Tired with only single type content? with Jkreativ you have ability to mix your content such as youtube, vimeo, sound cloud also self hosted HTML 5 video.',
            },
            {
                title: 'Ajax Expand, Extended Portfolio, or Side Content',
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
/* harmony default export */ __webpack_exports__["default"] = (".section-news .nav-tabs {\n  width: 100%;\n}\n.section-news .nav-tabs .nav-link {\n  border: none;\n  color: #214f7a;\n}\n.section-news .nav-tabs .nav-link.active {\n  border-bottom: 2px solid #214f7a;\n  font-weight: bold;\n}\n.section-news li.grid-li {\n  width: 25%;\n  float: left;\n  list-style-type: none;\n}\n.section-news li.grid-li p {\n  margin: 0;\n}\n.section-news li.grid-li .panel {\n  margin: 0 0 10px 10px;\n  border: 1px solid #ccc;\n}\n.section-news li.grid-li .panel .panel-body {\n  padding: 15px;\n}\n.section-news li.grid-li img {\n  width: 100%;\n}\n.section-news li.grid-li:first-child {\n  width: 50%;\n}\n.section-news li.grid-li:first-child .panel {\n  background: #e5f0fa;\n  border: none;\n  margin-left: 0;\n}\n.section-news li.grid-li:first-child .panel p {\n  font-size: 16px;\n  margin-bottom: 20px;\n}\n.section-news li.grid-li:first-child .panel p:first-child {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  font-size: 18px;\n}\n.news-video {\n  padding: 70px 0;\n  background: #e5f0fa;\n}\n.news-video .video {\n  margin-bottom: 70px;\n}\n.news-video .video iframe {\n  margin: 0 auto;\n  display: block;\n}\n.press-release-section .div-1 {\n  background-color: #c3d04e;\n}\n.press-release-section .div-2 {\n  background-color: #8778d9;\n}\n.press-release-section .div-3 {\n  background-color: #ffab00;\n}\n.press-release-section .div-4 {\n  background-color: #ff5630;\n}\n.press-release-section .div-5 {\n  background-color: #02b8d9;\n}\n.press-release-section .div-6 {\n  background-color: #5391ee;\n}\n.press-release-section section {\n  padding: 70px 0 55px;\n}\n.press-release-section .press-release-info {\n  padding: 0;\n}\n.press-release-section .press-release-info .col-sm-12 {\n  border-top: 1px dotted #af9090;\n  padding-bottom: 40px;\n}\n.press-release-section .press-release-info .col-sm-12:nth-child(even) .span {\n  float: right;\n  margin: 0 0 0 40px;\n}\n.press-release-section .press-release-info p {\n  padding-top: 40px;\n}\n.press-release-section .press-release-info p a {\n  color: #214f7a;\n  font-weight: bold;\n}\n.press-release-section .press-release-info p .span {\n  float: left;\n  margin: 0 40px 0 0;\n}\n.press-release-section .press-release-info p img {\n  width: 50%;\n  display: block;\n  margin: 0 auto 30px;\n}\n.press-release-section .press-release-info p .title-name {\n  font-size: 25px;\n  font-weight: bold;\n  text-align: center;\n  display: block;\n}\n.press-release-section .press-release-info p .title-info {\n  font-size: 16px;\n  color: #5C5C5C;\n  text-align: center;\n  display: block;\n}\n.press-release-section .press-release-info p .v-text-align {\n  height: 100%;\n  display: flex;\n}\n.press-release-section .press-release-info p .v-text-align p {\n  align-self: center;\n}\n.press-release-section .press-release-info .btn {\n  padding: 10px;\n  border-radius: 5px;\n  font-size: 12px;\n}\n.video-gallery .video {\n  margin-bottom: 40px;\n}\n@media (max-width: 576px) {\n  .press-release-section .press-release-info .col-sm-12 .span {\n    width: 100%;\n    margin: 0;\n    float: none;\n  }\n  .press-release-section .press-release-info .col-sm-12 .span img {\n    margin: 0 auto 30px;\n  }\n  .press-release-section .press-release-info .col-sm-12 .v-text-align {\n    height: auto;\n    display: block;\n  }\n  .press-release-section .press-release-info .col-sm-12 .v-text-align p {\n    align-self: center;\n    float: left;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9GOlxcZ2l0aHViXFx3b3JrL3NyY1xcYXBwXFxuZXdzXFxuZXdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uZXdzL25ld3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxXQUFBO0FDQVI7QURDUTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FDQ1o7QURBWTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7QUNFaEI7QURJSTtFQUNJLFVBQUE7RUFDQyxXQUFBO0VBQ0EscUJBQUE7QUNGVDtBREdTO0VBQ0ksU0FBQTtBQ0RiO0FER1M7RUFDRyxxQkFBQTtFQUNDLHNCQUFBO0FDRGI7QURFYTtFQUNJLGFBQUE7QUNBakI7QURJUztFQUNJLFdBQUE7QUNGYjtBRElTO0VBQ0ksVUFBQTtBQ0ZiO0FER2E7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDRGpCO0FERWlCO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDQXJCO0FEQ3FCO0VBQ0csZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNDeEI7QURTQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQ05KO0FET0k7RUFDSSxtQkFBQTtBQ0xSO0FETU87RUFDQyxjQUFBO0VBQ0EsY0FBQTtBQ0pSO0FEZVE7RUFDSSx5QkFBQTtBQ1paO0FEV1E7RUFDSSx5QkFBQTtBQ1RaO0FEUVE7RUFDSSx5QkFBQTtBQ05aO0FES1E7RUFDSSx5QkFBQTtBQ0haO0FERVE7RUFDSSx5QkFBQTtBQ0FaO0FERFE7RUFDSSx5QkFBQTtBQ0daO0FEQ0k7RUFDSSxvQkFBQTtBQ0NSO0FERUk7RUFDSSxVQUFBO0FDQVI7QURFUTtFQUNJLDhCQUFBO0VBQ0Esb0JBQUE7QUNBWjtBREVZO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDQWhCO0FESUk7RUFDSSxpQkFBQTtBQ0ZSO0FER1E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNEWjtBREdRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDRFo7QURJSTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNGUjtBRE1JO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDSlI7QURNSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDSlI7QURPSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDTFI7QURNUTtFQUNJLGtCQUFBO0FDSlo7QURTSTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNQUjtBRGFJO0VBQ0ksbUJBQUE7QUNWUjtBRGNBO0VBS2M7SUFDTSxXQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7RUNmbEI7RURnQmtCO0lBQ0ksbUJBQUE7RUNkdEI7RURpQmM7SUFDSSxZQUFBO0lBQ0EsY0FBQTtFQ2ZsQjtFRGdCa0I7SUFDSSxrQkFBQTtJQUNBLFdBQUE7RUNkdEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL25ld3MvbmV3cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLW5ld3N7XHJcbiAgICAubmF2LXRhYnN7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLm5hdi1saW5re1xyXG4gICAgICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICAgICAgY29sb3I6IzIxNGY3YTtcclxuICAgICAgICAgICAgJi5hY3RpdmV7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAjMjE0ZjdhO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxpXHJcbiAgIHtcclxuICAgICYuZ3JpZC1saXtcclxuICAgICAgICB3aWR0aDoyNSU7XHJcbiAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgcHtcclxuICAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC5wYW5lbHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTBweCAxMHB4OztcclxuICAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgIC5wYW5lbC1ib2R5e1xyXG4gICAgICAgICAgICAgICAgIHBhZGRpbmc6MTVweDtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICB3aWR0aDo1MCU7XHJcbiAgICAgICAgICAgICAucGFuZWx7XHJcbiAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2U1ZjBmYTtcclxuICAgICAgICAgICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDowO1xyXG4gICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MThweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgXHJcbiB9XHJcbiAgIH1cclxuICAgXHJcbn1cclxuLm5ld3MtdmlkZW97XHJcbiAgICBwYWRkaW5nOjcwcHggMDtcclxuICAgIGJhY2tncm91bmQ6I2U1ZjBmYTtcclxuICAgIC52aWRlb3tcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjcwcHg7XHJcbiAgICAgICBpZnJhbWV7XHJcbiAgICAgICAgbWFyZ2luOjAgYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnByZXNzLXJlbGVhc2Utc2VjdGlvbntcclxuXHJcblxyXG4gICAgJHJhbmRvbUJnOiNjM2QwNGUsICM4Nzc4ZDksICNmZmFiMDAsICNmZjU2MzAsICMwMmI4ZDksICM1MzkxZWU7XHJcblxyXG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBsZW5ndGgoJHJhbmRvbUJnKSB7XHJcbiAgICAgICAgLmRpdi0jeyRpfSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG50aCgkcmFuZG9tQmcsICRpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNlY3Rpb24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDcwcHggMCA1NXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJlc3MtcmVsZWFzZS1pbmZve1xyXG4gICAgICAgIHBhZGRpbmc6MDtcdFxyXG4gICAgXHJcbiAgICAgICAgLmNvbC1zbS0xMntcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDoxcHggZG90dGVkICNhZjkwOTA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjQwcHg7XHJcbiAgICAgICAgJjpudGgtY2hpbGQoZXZlbil7XHJcbiAgICAgICAgICAgIC5zcGFue1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MCAwIDAgNDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH19XHJcbiAgICBcclxuICAgIHB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6NDBweDtcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBjb2xvcjojMjE0ZjdhO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3BhbntcclxuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDQwcHggMCAwO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOjUwJTtcclxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjowIGF1dG8gMzBweDtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGl0bGUtbmFtZXtcclxuICAgICAgICBmb250LXNpemU6MjVweDtcclxuICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgfVxyXG4gICAgLnRpdGxlLWluZm97XHJcbiAgICAgICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICAgICAgY29sb3I6IzVDNUM1QztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnYtdGV4dC1hbGlnbntcclxuICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIH1cclxuICAgIC5idG57XHJcbiAgICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udmlkZW8tZ2FsbGVyeXtcclxuICAgIC52aWRlb3tcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjQwcHg7fVxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcclxuICAgICAgICBcclxuICAgIC5wcmVzcy1yZWxlYXNlLXNlY3Rpb257XHJcbiAgICAgICAgLnByZXNzLXJlbGVhc2UtaW5mb3tcclxuICAgICAgICAgICAgLmNvbC1zbS0xMntcclxuICAgICAgICAgICAgICAuc3BhbntcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBmbG9hdDpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjAgYXV0byAzMHB4XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnYtdGV4dC1hbGlnbntcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6YXV0bztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLnNlY3Rpb24tbmV3cyAubmF2LXRhYnMge1xuICB3aWR0aDogMTAwJTtcbn1cbi5zZWN0aW9uLW5ld3MgLm5hdi10YWJzIC5uYXYtbGluayB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMyMTRmN2E7XG59XG4uc2VjdGlvbi1uZXdzIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyMTRmN2E7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNlY3Rpb24tbmV3cyBsaS5ncmlkLWxpIHtcbiAgd2lkdGg6IDI1JTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5zZWN0aW9uLW5ld3MgbGkuZ3JpZC1saSBwIHtcbiAgbWFyZ2luOiAwO1xufVxuLnNlY3Rpb24tbmV3cyBsaS5ncmlkLWxpIC5wYW5lbCB7XG4gIG1hcmdpbjogMCAwIDEwcHggMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cbi5zZWN0aW9uLW5ld3MgbGkuZ3JpZC1saSAucGFuZWwgLnBhbmVsLWJvZHkge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLnNlY3Rpb24tbmV3cyBsaS5ncmlkLWxpIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNlY3Rpb24tbmV3cyBsaS5ncmlkLWxpOmZpcnN0LWNoaWxkIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5zZWN0aW9uLW5ld3MgbGkuZ3JpZC1saTpmaXJzdC1jaGlsZCAucGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjZTVmMGZhO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuLnNlY3Rpb24tbmV3cyBsaS5ncmlkLWxpOmZpcnN0LWNoaWxkIC5wYW5lbCBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnNlY3Rpb24tbmV3cyBsaS5ncmlkLWxpOmZpcnN0LWNoaWxkIC5wYW5lbCBwOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ubmV3cy12aWRlbyB7XG4gIHBhZGRpbmc6IDcwcHggMDtcbiAgYmFja2dyb3VuZDogI2U1ZjBmYTtcbn1cbi5uZXdzLXZpZGVvIC52aWRlbyB7XG4gIG1hcmdpbi1ib3R0b206IDcwcHg7XG59XG4ubmV3cy12aWRlbyAudmlkZW8gaWZyYW1lIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucHJlc3MtcmVsZWFzZS1zZWN0aW9uIC5kaXYtMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjM2QwNGU7XG59XG4ucHJlc3MtcmVsZWFzZS1zZWN0aW9uIC5kaXYtMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4Nzc4ZDk7XG59XG4ucHJlc3MtcmVsZWFzZS1zZWN0aW9uIC5kaXYtMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmFiMDA7XG59XG4ucHJlc3MtcmVsZWFzZS1zZWN0aW9uIC5kaXYtNCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjU2MzA7XG59XG4ucHJlc3MtcmVsZWFzZS1zZWN0aW9uIC5kaXYtNSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMmI4ZDk7XG59XG4ucHJlc3MtcmVsZWFzZS1zZWN0aW9uIC5kaXYtNiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MzkxZWU7XG59XG4ucHJlc3MtcmVsZWFzZS1zZWN0aW9uIHNlY3Rpb24ge1xuICBwYWRkaW5nOiA3MHB4IDAgNTVweDtcbn1cbi5wcmVzcy1yZWxlYXNlLXNlY3Rpb24gLnByZXNzLXJlbGVhc2UtaW5mbyB7XG4gIHBhZGRpbmc6IDA7XG59XG4ucHJlc3MtcmVsZWFzZS1zZWN0aW9uIC5wcmVzcy1yZWxlYXNlLWluZm8gLmNvbC1zbS0xMiB7XG4gIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgI2FmOTA5MDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG4ucHJlc3MtcmVsZWFzZS1zZWN0aW9uIC5wcmVzcy1yZWxlYXNlLWluZm8gLmNvbC1zbS0xMjpudGgtY2hpbGQoZXZlbikgLnNwYW4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogMCAwIDAgNDBweDtcbn1cbi5wcmVzcy1yZWxlYXNlLXNlY3Rpb24gLnByZXNzLXJlbGVhc2UtaW5mbyBwIHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG4ucHJlc3MtcmVsZWFzZS1zZWN0aW9uIC5wcmVzcy1yZWxlYXNlLWluZm8gcCBhIHtcbiAgY29sb3I6ICMyMTRmN2E7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnByZXNzLXJlbGVhc2Utc2VjdGlvbiAucHJlc3MtcmVsZWFzZS1pbmZvIHAgLnNwYW4ge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwIDQwcHggMCAwO1xufVxuLnByZXNzLXJlbGVhc2Utc2VjdGlvbiAucHJlc3MtcmVsZWFzZS1pbmZvIHAgaW1nIHtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvIDMwcHg7XG59XG4ucHJlc3MtcmVsZWFzZS1zZWN0aW9uIC5wcmVzcy1yZWxlYXNlLWluZm8gcCAudGl0bGUtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ucHJlc3MtcmVsZWFzZS1zZWN0aW9uIC5wcmVzcy1yZWxlYXNlLWluZm8gcCAudGl0bGUtaW5mbyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM1QzVDNUM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ucHJlc3MtcmVsZWFzZS1zZWN0aW9uIC5wcmVzcy1yZWxlYXNlLWluZm8gcCAudi10ZXh0LWFsaWduIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnByZXNzLXJlbGVhc2Utc2VjdGlvbiAucHJlc3MtcmVsZWFzZS1pbmZvIHAgLnYtdGV4dC1hbGlnbiBwIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLnByZXNzLXJlbGVhc2Utc2VjdGlvbiAucHJlc3MtcmVsZWFzZS1pbmZvIC5idG4ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnZpZGVvLWdhbGxlcnkgLnZpZGVvIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5wcmVzcy1yZWxlYXNlLXNlY3Rpb24gLnByZXNzLXJlbGVhc2UtaW5mbyAuY29sLXNtLTEyIC5zcGFuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cbiAgLnByZXNzLXJlbGVhc2Utc2VjdGlvbiAucHJlc3MtcmVsZWFzZS1pbmZvIC5jb2wtc20tMTIgLnNwYW4gaW1nIHtcbiAgICBtYXJnaW46IDAgYXV0byAzMHB4O1xuICB9XG4gIC5wcmVzcy1yZWxlYXNlLXNlY3Rpb24gLnByZXNzLXJlbGVhc2UtaW5mbyAuY29sLXNtLTEyIC52LXRleHQtYWxpZ24ge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAucHJlc3MtcmVsZWFzZS1zZWN0aW9uIC5wcmVzcy1yZWxlYXNlLWluZm8gLmNvbC1zbS0xMiAudi10ZXh0LWFsaWduIHAge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxufSJdfQ== */");

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
            { img: 'assets/images/news', desc_1: 'Arkedge Technologies has schedule to launch Survey ans Poll product on 05 January 2018.', desc_2: 'Arkedge Technologies has schedule to launch Survey ans Poll product on 05 January 2018... Please click on news and read the details of news section. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { img: 'assets/images/news', desc_1: 'Arkedge', desc_2: 'Technologies bags new Spend Analysis project...' },
            { img: 'assets/images/news', desc_1: 'Arkedge', desc_2: 'Technologies bags new Spend Analysis project...' },
            { img: 'assets/images/news', desc_1: 'Arkedge', desc_2: 'Technologies bags new Spend Analysis project...' },
            { img: 'assets/images/news', desc_1: 'Arkedge', desc_2: 'Technologies bags new Spend Analysis project...' },
        ];
        this.pressRelease = [
            { name: 'Same Martinez',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            },
            { name: 'Same Martinez',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            },
            { name: 'Same Martinez',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            },
            { name: 'Same Martinez',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            },
            { name: 'Same Martinez',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            },
            { name: 'Same Martinez',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            }
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
/* harmony default export */ __webpack_exports__["default"] = (".section-product {\n  background: #e5f0fa;\n  padding: 60px 0;\n}\n\n.section-product-detail h2 {\n  margin-bottom: 25px;\n  font-weight: bold;\n}\n\n.section-product-detail ul {\n  margin-bottom: 15px;\n}\n\n.section-product-detail ul li {\n  padding: 0 0 10px 20px;\n  list-style: none outside;\n  font-size: 16px;\n  position: relative;\n  font-weight: bold;\n}\n\n.section-product-detail ul li::before {\n  content: \" \";\n  background: #214f7a;\n  font-weight: bold;\n  position: absolute;\n  top: 8px;\n  left: 0px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.section-product-detail img {\n  max-width: 100%;\n  box-shadow: -1px 2px 5px 1px rgba(0, 0, 0, 0.2);\n}\n\n.section-product-detail .row + .row {\n  margin-top: 100px;\n}\n\n.slick-slide {\n  position: relative;\n  box-shadow: -1px 2px 5px 1px rgba(0, 0, 0, 0.2);\n  background: #fff;\n  margin: 12px;\n  box-sizing: border-box;\n}\n\n.slick-slide p {\n  opacity: 0;\n  position: absolute;\n  bottom: -55px;\n  left: 0;\n  font-size: 12px;\n  line-height: 14px;\n  font-weight: bold;\n}\n\n.slick-slide.slick-current + .slick-active {\n  transform: scale(1.2);\n  transition: all 0.5s;\n  z-index: 1;\n  position: relative;\n}\n\n.slick-slide.slick-current + .slick-active img, .slick-slide.slick-current + .slick-active p {\n  opacity: 1;\n}\n\n.slick-slide.slick-slide img {\n  opacity: 0.3;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3VycHJvZHVjdC9GOlxcZ2l0aHViXFx3b3JrL3NyY1xcYXBwXFxvdXJwcm9kdWN0XFxvdXJwcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9vdXJwcm9kdWN0L291cnByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFSTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUNDUjs7QURDSTtFQUNJLG1CQUFBO0FDQ1I7O0FEQVE7RUFDTCxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNTLGtCQUFBO0VBQ0EsaUJBQUE7QUNFWjs7QURERztFQUNDLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0dKOztBRENJO0VBQ0ksZUFBQTtFQUNBLCtDQUFBO0FDQ1I7O0FEQ0k7RUFDSSxpQkFBQTtBQ0NSOztBRElBO0VBQ0ksa0JBQUE7RUFDQSwrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDREo7O0FERUk7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQVI7O0FERUk7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDQVI7O0FEQ1E7RUFDSSxVQUFBO0FDQ1o7O0FER087RUFDQyxZQUFBO0VBQ0EsWUFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvb3VycHJvZHVjdC9vdXJwcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24tcHJvZHVjdHtcclxuICAgIGJhY2tncm91bmQ6I2U1ZjBmYTtcclxuICAgIHBhZGRpbmc6NjBweCAwO1xyXG59XHJcbi5zZWN0aW9uLXByb2R1Y3QtZGV0YWlse1xyXG4gICAgaDJ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIHVse1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MTVweDtcclxuICAgICAgICBsaXtcclxuXHRcdFx0cGFkZGluZzogMCAwIDEwcHggMjBweDtcclxuXHRcdFx0bGlzdC1zdHlsZTogbm9uZSBvdXRzaWRlO1xyXG5cdFx0XHRmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRcdFx0Jjo6YmVmb3Jle1xyXG5cdFx0XHRcdGNvbnRlbnQ6IFwiIFwiO1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICMyMTRmN2E7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRcdFx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0XHRcdFx0dG9wOjhweDtcclxuXHRcdFx0XHRsZWZ0OjBweDtcclxuXHRcdFx0XHR3aWR0aDogMTBweDtcclxuXHRcdFx0XHRoZWlnaHQ6MTBweDtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcbiAgICB9XHJcbiAgICBpbWd7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IC0xcHggMnB4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgfVxyXG4gICAgLnJvdyArIC5yb3d7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoxMDBweDtcclxuICAgIH1cclxuICBcclxufVxyXG5cclxuLnNsaWNrLXNsaWRle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm94LXNoYWRvdzogLTFweCAycHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICBtYXJnaW46MTJweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwe1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTotNTVweDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgJi5zbGljay1jdXJyZW50ICsgLnNsaWNrLWFjdGl2ZXtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAgICAgdHJhbnNpdGlvbjphbGwgMC41cztcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBpbWcsIHB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLnNsaWNrLXNsaWRle1xyXG4gICAgICAgaW1ne1xyXG4gICAgICAgIG9wYWNpdHk6LjM7XHJcbiAgICAgICAgaGVpZ2h0OmF1dG87XHJcbiAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iLCIuc2VjdGlvbi1wcm9kdWN0IHtcbiAgYmFja2dyb3VuZDogI2U1ZjBmYTtcbiAgcGFkZGluZzogNjBweCAwO1xufVxuXG4uc2VjdGlvbi1wcm9kdWN0LWRldGFpbCBoMiB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNlY3Rpb24tcHJvZHVjdC1kZXRhaWwgdWwge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLnNlY3Rpb24tcHJvZHVjdC1kZXRhaWwgdWwgbGkge1xuICBwYWRkaW5nOiAwIDAgMTBweCAyMHB4O1xuICBsaXN0LXN0eWxlOiBub25lIG91dHNpZGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zZWN0aW9uLXByb2R1Y3QtZGV0YWlsIHVsIGxpOjpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgYmFja2dyb3VuZDogIzIxNGY3YTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uc2VjdGlvbi1wcm9kdWN0LWRldGFpbCBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IC0xcHggMnB4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLnNlY3Rpb24tcHJvZHVjdC1kZXRhaWwgLnJvdyArIC5yb3cge1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuLnNsaWNrLXNsaWRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAtMXB4IDJweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luOiAxMnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLnNsaWNrLXNsaWRlIHAge1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTU1cHg7XG4gIGxlZnQ6IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNsaWNrLXNsaWRlLnNsaWNrLWN1cnJlbnQgKyAuc2xpY2stYWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNsaWNrLXNsaWRlLnNsaWNrLWN1cnJlbnQgKyAuc2xpY2stYWN0aXZlIGltZywgLnNsaWNrLXNsaWRlLnNsaWNrLWN1cnJlbnQgKyAuc2xpY2stYWN0aXZlIHAge1xuICBvcGFjaXR5OiAxO1xufVxuLnNsaWNrLXNsaWRlLnNsaWNrLXNsaWRlIGltZyB7XG4gIG9wYWNpdHk6IDAuMztcbiAgaGVpZ2h0OiBhdXRvO1xufSJdfQ== */");

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let OurproductComponent = class OurproductComponent {
    constructor(router) {
        this.router = router;
        this.slideConfig = {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
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
            { title: 'Looking for automation to drive performance and profitability' },
            { title: 'helps enterprises rapidly build the infrastructure and capabilities' },
            { title: 'Arkedge unified approach — encompassing strategy, software and managed services ' },
            { title: 'Looking for automation to drive performance and profitability' },
            { title: 'helps enterprises rapidly build the infrastructure and capabilities' },
        ];
        this.inquery = function () {
            this.router.navigateByUrl('/Contactus', { skipLocationChange: true });
        };
    }
    ngOnInit() {
    }
};
OurproductComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
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
/* harmony default export */ __webpack_exports__["default"] = (".section-project-engineering {\n  padding: 0 0 70px;\n}\n\n.section-project-engineering ul li {\n  padding: 0 15px 15px;\n}\n\n.methodologies {\n  position: relative;\n}\n\n.methodologies .icon-circle {\n  width: 100px;\n  height: 100px;\n  border: 1px solid #fff;\n  border-radius: 50%;\n  margin: 0 auto;\n}\n\n.methodologies .icon-circle i {\n  line-height: 90px;\n}\n\n.methodologies .icon-circle i svg {\n  fill: #fff;\n}\n\n.methodologies ul {\n  position: relative;\n  width: 100%;\n}\n\n.methodologies ul li {\n  float: left;\n  width: 20%;\n  padding: 50px 0;\n}\n\n.methodologies ul li ul {\n  display: none;\n  position: absolute;\n  top: 180px;\n  left: 0;\n  text-align: center;\n  width: 100%;\n}\n\n.methodologies ul li ul li {\n  float: none;\n  width: 100%;\n}\n\n.methodologies ul li h6 {\n  padding-bottom: 15px;\n}\n\n.methodologies ul li:hover .icon-circle {\n  border-color: #ffc100;\n}\n\n.methodologies ul li:hover .icon-circle svg {\n  fill: #ffc100;\n}\n\n.methodologies ul li:hover h6 {\n  color: #ffc100;\n  position: relative;\n  padding-bottom: 0;\n}\n\n.methodologies ul li:hover h6::after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid #ffc100;\n  margin: 0 auto;\n  display: block;\n}\n\n.methodologies ul li:hover ul {\n  display: block;\n}\n\n.methodologies img {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0px;\n  top: 0px;\n  z-index: -1;\n}\n\n.methodologies h6, .methodologies li, .methodologies h1 {\n  color: #fff;\n  text-align: center;\n}\n\nsection.engeering-grap img {\n  width: auto;\n}\n\n.our-services-section {\n  padding: 0;\n}\n\n.our-services {\n  background: #e5f0fa;\n  border-radius: 15px;\n  overflow: hidden;\n}\n\n.our-services .triangle {\n  background: #ffc100;\n  position: relative;\n  min-height: 400px;\n  display: flex;\n}\n\n.our-services .triangle .v-center {\n  align-self: center;\n  text-align: center;\n  margin: 0 auto;\n}\n\n.our-services .triangle .v-center .logo-circle {\n  width: 120px;\n  height: 120px;\n  background: #0860aa;\n  border-radius: 50%;\n  margin: 0 auto;\n}\n\n.our-services .triangle .v-center h5 {\n  font-size: bold;\n  margin-top: 15px;\n}\n\n.our-services .triangle::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-top: 200px solid transparent;\n  border-bottom: 200px solid transparent;\n  border-left: 50px solid #ffc100;\n  right: -50px;\n  top: 0;\n}\n\n.our-services .v-flex {\n  display: flex;\n}\n\n.our-services ul {\n  padding: 0 0 0 100px;\n  align-self: center;\n}\n\n.our-services ul li {\n  padding: 0 0 20px 20px;\n  list-style: none outside;\n  font-size: 18px;\n  position: relative;\n  font-weight: bold;\n}\n\n.our-services ul li::before {\n  content: \" \";\n  background: #214f7a;\n  font-weight: bold;\n  position: absolute;\n  top: 8px;\n  left: 0px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.manage-service-tab .app-development {\n  padding-bottom: 70px;\n}\n\n.manage-service-tab .app-development img {\n  width: auto;\n}\n\n.about-key-diff {\n  background: url('about.jpg') no-repeat bottom center #1d4b76;\n  padding: 70px 0;\n}\n\n.about-key-diff h1 {\n  color: #fff;\n  font-weight: normal;\n}\n\n.about-key-diff ul {\n  margin-top: 35px;\n}\n\n.about-key-diff ul li {\n  padding: 0 0 20px 20px;\n  list-style: none outside;\n  font-size: 16px;\n  position: relative;\n  color: #fff;\n}\n\n.about-key-diff ul li::before {\n  content: \" \";\n  background: #fff;\n  font-weight: bold;\n  position: absolute;\n  top: 8px;\n  left: 0px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.v-flex img {\n  align-self: center;\n}\n\n.ui-ux-info {\n  margin-top: 70px;\n  background: #e5f0fa;\n}\n\n.ui-ux-info h5 {\n  font-weight: bold;\n  margin: 30px 0 15px;\n}\n\n.ui-ux-info svg {\n  fill: #214f7a;\n}\n\n.ui-ux-process .icon-circle {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  background: #e5f0fa;\n}\n\n.ui-ux-process .icon-circle i {\n  line-height: 135px;\n  margin: 0 auto;\n  display: table;\n}\n\n.ui-ux-process .icon-circle i svg {\n  fill: #214f7a;\n}\n\n.ui-ux-process .row {\n  margin-bottom: 40px;\n}\n\n.ui-ux-process .row h6 {\n  font-weight: bold;\n}\n\n.qa-testing img {\n  width: auto;\n  vertical-align: top;\n  margin-left: 70px;\n}\n\n.manage-space {\n  margin: 30px 0;\n}\n\n.qa-info {\n  margin-bottom: 50px;\n}\n\n.qa-testing-info {\n  margin-bottom: 40px;\n}\n\n.qa-testing-info h6 {\n  font-weight: bold;\n}\n\n.qa-testing-info .icon-circle {\n  width: 250px;\n  height: 250px;\n  background: #e5f0fa;\n  margin: 0 auto;\n  align-self: center;\n  border-radius: 50%;\n}\n\n.qa-testing-info .icon-circle i {\n  line-height: 250px;\n  margin: 0 auto;\n  display: table;\n}\n\n.qa-testing-info .icon-circle i svg {\n  fill: #214f7a;\n  width: 150px;\n  height: 150px;\n}\n\n.qa-testing-info ul.qa-test-info {\n  margin-left: 5px;\n  align-self: center;\n}\n\n.qa-testing-info ul.qa-test-info li {\n  padding: 0 0 10px 20px;\n  list-style: none outside;\n  font-size: 16px;\n  position: relative;\n  font-weight: bold;\n}\n\n.qa-testing-info ul.qa-test-info li::before {\n  content: \" \";\n  background: #214f7a;\n  font-weight: bold;\n  position: absolute;\n  top: 8px;\n  left: 0px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n@media (max-width: 576px) {\n  .methodologies ul {\n    position: static;\n  }\n  .methodologies ul li {\n    width: 100%;\n    position: relative;\n  }\n\n  .app-development img {\n    width: 100%;\n  }\n\n  .qa-testing img {\n    margin-left: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdGVuZ2luZWVyaW5nL0Y6XFxnaXRodWJcXHdvcmsvc3JjXFxhcHBcXHByb2plY3RlbmdpbmVlcmluZ1xccHJvamVjdGVuZ2luZWVyaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9qZWN0ZW5naW5lZXJpbmcvcHJvamVjdGVuZ2luZWVyaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjs7QURHUTtFQUNJLG9CQUFBO0FDQVo7O0FESUE7RUFDSSxrQkFBQTtBQ0RKOztBREVJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0FSOztBRENRO0VBQ0ksaUJBQUE7QUNDWjs7QURBWTtFQUNJLFVBQUE7QUNFaEI7O0FERUc7RUFDQyxrQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURDSTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0NSOztBREFRO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNFWjs7QUREWTtFQUNHLFdBQUE7RUFDQSxXQUFBO0FDR2Y7O0FEQVE7RUFDSSxvQkFBQTtBQ0VaOztBRENZO0VBRUkscUJBQUE7QUNBaEI7O0FEQ2dCO0VBQ0ksYUFBQTtBQ0NwQjs7QURFWTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQWhCOztBRENnQjtFQUNJLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQ3BCOztBREdZO0VBQ0ksY0FBQTtBQ0RoQjs7QURNSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNKUjs7QURNSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0pSOztBRFNRO0VBQ0ksV0FBQTtBQ05aOztBRFdBO0VBQ0ksVUFBQTtBQ1JKOztBRFdBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDUko7O0FEU0k7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDUFI7O0FEUVE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ05aOztBRE9ZO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0xoQjs7QURPWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0xoQjs7QURRUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7QUNOWjs7QURTSTtFQUNJLGFBQUE7QUNQUjs7QURTSTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7QUNQUjs7QURRUTtFQUNMLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ1Msa0JBQUE7RUFDQSxpQkFBQTtBQ05aOztBRE9HO0VBQ0MsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDTEo7O0FEV0E7RUFDSSxvQkFBQTtBQ1JKOztBRFNJO0VBQ0ksV0FBQTtBQ1BSOztBRFlBO0VBQ0ksNERBQUE7RUFDQSxlQUFBO0FDVEo7O0FEVUk7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUNSUjs7QURVSTtFQUNGLGdCQUFBO0FDUkY7O0FEU1E7RUFDTCxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNTLGtCQUFBO0VBQ0EsV0FBQTtBQ1BaOztBRFFHO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDTko7O0FEYUk7RUFDSSxrQkFBQTtBQ1ZSOztBRGNBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ1hKOztBRFlJO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQ1ZSOztBRFlJO0VBQ0ksYUFBQTtBQ1ZSOztBRGVJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDWlI7O0FEYVE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDWFo7O0FEWVk7RUFDSSxhQUFBO0FDVmhCOztBRGNJO0VBQ0ksbUJBQUE7QUNaUjs7QURhUTtFQUNJLGlCQUFBO0FDWFo7O0FEaUJJO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNkUjs7QURrQkE7RUFDSSxjQUFBO0FDZko7O0FEa0JBO0VBQ0ksbUJBQUE7QUNmSjs7QURrQkE7RUFDSSxtQkFBQTtBQ2ZKOztBRGdCSTtFQUNJLGlCQUFBO0FDZFI7O0FEaUJJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDZlI7O0FEZ0JRO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ2RaOztBRGVZO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDYmhCOztBRGlCSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNmUjs7QURnQlE7RUFDSSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNkWjs7QURlWTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ2JoQjs7QURzQkE7RUFFUTtJQUNJLGdCQUFBO0VDcEJWO0VEcUJTO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0VDbkJiOztFRHdCTTtJQUNJLFdBQUE7RUNyQlY7O0VEeUJNO0lBQ0ssZ0JBQUE7RUN0Qlg7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RlbmdpbmVlcmluZy9wcm9qZWN0ZW5naW5lZXJpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1wcm9qZWN0LWVuZ2luZWVyaW5ne1xyXG4gICAgcGFkZGluZzowIDAgNzBweDtcclxufVxyXG4uc2VjdGlvbi1wcm9qZWN0LWVuZ2luZWVyaW5ne1xyXG4gICB1bHtcclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgcGFkZGluZzowIDE1cHggMTVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLm1ldGhvZG9sb2dpZXN7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAuaWNvbi1jaXJjbGV7XHJcbiAgICAgICAgd2lkdGg6MTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjEwMHB4O1xyXG4gICAgICAgIGJvcmRlcjoxcHggc29saWQgI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgICAgIGl7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgICAgICBzdmd7XHJcbiAgICAgICAgICAgICAgICBmaWxsOiNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgIHVse1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGxpe1xyXG4gICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgd2lkdGg6MjAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDUwcHggMDtcclxuICAgICAgICB1bHtcclxuICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDoxODBweDtcclxuICAgICAgICAgICAgbGVmdDowO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICBmbG9hdDpub25lO1xyXG4gICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg2e1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbToxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAuaWNvbi1jaXJjbGVcclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjojZmZjMTAwO1xyXG4gICAgICAgICAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6I2ZmYzEwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoNntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiNmZmMxMDA7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjA7XHJcbiAgICAgICAgICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwOyBcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7IFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNmZmMxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHVse1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgfVxyXG4gICAgaW1ne1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgIGxlZnQ6MHB4O1xyXG4gICAgICAgIHRvcDowcHg7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICB9XHJcbiAgICBoNiwgbGksIGgxe1xyXG4gICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuc2VjdGlvbntcclxuICAgJi5lbmdlZXJpbmctZ3JhcHtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIHdpZHRoOmF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ub3VyLXNlcnZpY2VzLXNlY3Rpb257XHJcbiAgICBwYWRkaW5nOjA7XHJcbn1cclxuXHJcbi5vdXItc2VydmljZXN7XHJcbiAgICBiYWNrZ3JvdW5kOiNlNWYwZmE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC50cmlhbmdsZXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiNmZmMxMDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6NDAwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAudi1jZW50ZXJ7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgLmxvZ28tY2lyY2xle1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwODYwYWE7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoNXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTpib2xkO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6OmFmdGVye1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwOyBcclxuICAgICAgICAgICAgaGVpZ2h0OiAwOyBcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMjAwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDIwMHB4IHNvbGlkIHRyYW5zcGFyZW50OyBcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6NTBweCBzb2xpZCAjZmZjMTAwO1xyXG4gICAgICAgICAgICByaWdodDotNTBweDtcclxuICAgICAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnYtZmxleHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gICAgdWx7XHJcbiAgICAgICAgcGFkZGluZzowIDAgMCAxMDBweDtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgbGl7XHJcblx0XHRcdHBhZGRpbmc6IDAgMCAyMHB4IDIwcHg7XHJcblx0XHRcdGxpc3Qtc3R5bGU6IG5vbmUgb3V0c2lkZTtcclxuXHRcdFx0Zm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHQmOjpiZWZvcmV7XHJcblx0XHRcdFx0Y29udGVudDogXCIgXCI7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogIzIxNGY3YTtcclxuXHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRcdFx0XHR0b3A6OHB4O1xyXG5cdFx0XHRcdGxlZnQ6MHB4O1xyXG5cdFx0XHRcdHdpZHRoOiAxMHB4O1xyXG5cdFx0XHRcdGhlaWdodDoxMHB4O1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuICAgIH1cclxufVxyXG4ubWFuYWdlLXNlcnZpY2UtdGFie1xyXG4uYXBwLWRldmVsb3BtZW50e1xyXG4gICAgcGFkZGluZy1ib3R0b206NzBweDtcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDphdXRvO1xyXG4gICAgfVxyXG59XHJcbn1cclxuXHJcbi5hYm91dC1rZXktZGlmZntcclxuICAgIGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQuanBnKSBuby1yZXBlYXQgYm90dG9tIGNlbnRlciAjMWQ0Yjc2O1xyXG4gICAgcGFkZGluZzo3MHB4IDA7XHJcbiAgICBoMXtcclxuICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuICAgIH1cclxuICAgIHVse1xyXG5cdFx0bWFyZ2luLXRvcDozNXB4O1xyXG4gICAgICAgIGxpe1xyXG5cdFx0XHRwYWRkaW5nOiAwIDAgMjBweCAyMHB4O1xyXG5cdFx0XHRsaXN0LXN0eWxlOiBub25lIG91dHNpZGU7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBjb2xvcjojZmZmO1xyXG5cdFx0XHQmOjpiZWZvcmV7XHJcblx0XHRcdFx0Y29udGVudDogXCIgXCI7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRcdFx0XHR0b3A6OHB4O1xyXG5cdFx0XHRcdGxlZnQ6MHB4O1xyXG5cdFx0XHRcdHdpZHRoOiAxMHB4OyBcclxuXHRcdFx0XHRoZWlnaHQ6MTBweDtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcbiAgICB9XHJcbn1cclxuXHJcbi52LWZsZXh7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4udWktdXgtaW5mb3tcclxuICAgIG1hcmdpbi10b3A6NzBweDtcclxuICAgIGJhY2tncm91bmQ6I2U1ZjBmYTtcclxuICAgIGg1e1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgbWFyZ2luOjMwcHggMCAxNXB4O1xyXG4gICAgfVxyXG4gICAgc3Zne1xyXG4gICAgICAgIGZpbGw6IzIxNGY3YTtcclxuICAgIH1cclxufVxyXG5cclxuLnVpLXV4LXByb2Nlc3N7XHJcbiAgICAuaWNvbi1jaXJjbGV7XHJcbiAgICAgICAgd2lkdGg6MTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjE1MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6I2U1ZjBmYTtcclxuICAgICAgICBpe1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTM1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICAgICAgZmlsbDojMjE0ZjdhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJvd3tcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjQwcHg7XHJcbiAgICAgICAgaDZ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucWEtdGVzdGluZ3tcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDphdXRvO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NzBweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1hbmFnZS1zcGFjZXtcclxuICAgIG1hcmdpbjozMHB4IDA7XHJcbn1cclxuXHJcbi5xYS1pbmZve1xyXG4gICAgbWFyZ2luLWJvdHRvbTo1MHB4O1xyXG59XHJcblxyXG4ucWEtdGVzdGluZy1pbmZve1xyXG4gICAgbWFyZ2luLWJvdHRvbTo0MHB4O1xyXG4gICAgaDZ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIH1cclxuXHJcbiAgICAuaWNvbi1jaXJjbGV7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDojZTVmMGZhO1xyXG4gICAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgICAgIGl7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgICBzdmd7XHJcbiAgICAgICAgICAgICAgICBmaWxsOiAjMjE0ZjdhO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVsLnFhLXRlc3QtaW5mb3tcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAwIDEwcHggMjBweDtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZSBvdXRzaWRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzIxNGY3YTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6OHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDowcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDoxMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG4gICAgLm1ldGhvZG9sb2dpZXN7XHJcbiAgICAgICAgdWx7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5hcHAtZGV2ZWxvcG1lbnR7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5xYS10ZXN0aW5ne1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLnNlY3Rpb24tcHJvamVjdC1lbmdpbmVlcmluZyB7XG4gIHBhZGRpbmc6IDAgMCA3MHB4O1xufVxuXG4uc2VjdGlvbi1wcm9qZWN0LWVuZ2luZWVyaW5nIHVsIGxpIHtcbiAgcGFkZGluZzogMCAxNXB4IDE1cHg7XG59XG5cbi5tZXRob2RvbG9naWVzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1ldGhvZG9sb2dpZXMgLmljb24tY2lyY2xlIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLm1ldGhvZG9sb2dpZXMgLmljb24tY2lyY2xlIGkge1xuICBsaW5lLWhlaWdodDogOTBweDtcbn1cbi5tZXRob2RvbG9naWVzIC5pY29uLWNpcmNsZSBpIHN2ZyB7XG4gIGZpbGw6ICNmZmY7XG59XG4ubWV0aG9kb2xvZ2llcyB1bCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWV0aG9kb2xvZ2llcyB1bCBsaSB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjAlO1xuICBwYWRkaW5nOiA1MHB4IDA7XG59XG4ubWV0aG9kb2xvZ2llcyB1bCBsaSB1bCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxODBweDtcbiAgbGVmdDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5tZXRob2RvbG9naWVzIHVsIGxpIHVsIGxpIHtcbiAgZmxvYXQ6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1ldGhvZG9sb2dpZXMgdWwgbGkgaDYge1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbi5tZXRob2RvbG9naWVzIHVsIGxpOmhvdmVyIC5pY29uLWNpcmNsZSB7XG4gIGJvcmRlci1jb2xvcjogI2ZmYzEwMDtcbn1cbi5tZXRob2RvbG9naWVzIHVsIGxpOmhvdmVyIC5pY29uLWNpcmNsZSBzdmcge1xuICBmaWxsOiAjZmZjMTAwO1xufVxuLm1ldGhvZG9sb2dpZXMgdWwgbGk6aG92ZXIgaDYge1xuICBjb2xvcjogI2ZmYzEwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi5tZXRob2RvbG9naWVzIHVsIGxpOmhvdmVyIGg2OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiA1cHggc29saWQgI2ZmYzEwMDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1ldGhvZG9sb2dpZXMgdWwgbGk6aG92ZXIgdWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tZXRob2RvbG9naWVzIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgei1pbmRleDogLTE7XG59XG4ubWV0aG9kb2xvZ2llcyBoNiwgLm1ldGhvZG9sb2dpZXMgbGksIC5tZXRob2RvbG9naWVzIGgxIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuc2VjdGlvbi5lbmdlZXJpbmctZ3JhcCBpbWcge1xuICB3aWR0aDogYXV0bztcbn1cblxuLm91ci1zZXJ2aWNlcy1zZWN0aW9uIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLm91ci1zZXJ2aWNlcyB7XG4gIGJhY2tncm91bmQ6ICNlNWYwZmE7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ub3VyLXNlcnZpY2VzIC50cmlhbmdsZSB7XG4gIGJhY2tncm91bmQ6ICNmZmMxMDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ub3VyLXNlcnZpY2VzIC50cmlhbmdsZSAudi1jZW50ZXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ub3VyLXNlcnZpY2VzIC50cmlhbmdsZSAudi1jZW50ZXIgLmxvZ28tY2lyY2xlIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDg2MGFhO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLm91ci1zZXJ2aWNlcyAudHJpYW5nbGUgLnYtY2VudGVyIGg1IHtcbiAgZm9udC1zaXplOiBib2xkO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLm91ci1zZXJ2aWNlcyAudHJpYW5nbGU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItdG9wOiAyMDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMjAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiA1MHB4IHNvbGlkICNmZmMxMDA7XG4gIHJpZ2h0OiAtNTBweDtcbiAgdG9wOiAwO1xufVxuLm91ci1zZXJ2aWNlcyAudi1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5vdXItc2VydmljZXMgdWwge1xuICBwYWRkaW5nOiAwIDAgMCAxMDBweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLm91ci1zZXJ2aWNlcyB1bCBsaSB7XG4gIHBhZGRpbmc6IDAgMCAyMHB4IDIwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmUgb3V0c2lkZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm91ci1zZXJ2aWNlcyB1bCBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGJhY2tncm91bmQ6ICMyMTRmN2E7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ubWFuYWdlLXNlcnZpY2UtdGFiIC5hcHAtZGV2ZWxvcG1lbnQge1xuICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbn1cbi5tYW5hZ2Utc2VydmljZS10YWIgLmFwcC1kZXZlbG9wbWVudCBpbWcge1xuICB3aWR0aDogYXV0bztcbn1cblxuLmFib3V0LWtleS1kaWZmIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQuanBnKSBuby1yZXBlYXQgYm90dG9tIGNlbnRlciAjMWQ0Yjc2O1xuICBwYWRkaW5nOiA3MHB4IDA7XG59XG4uYWJvdXQta2V5LWRpZmYgaDEge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5hYm91dC1rZXktZGlmZiB1bCB7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG59XG4uYWJvdXQta2V5LWRpZmYgdWwgbGkge1xuICBwYWRkaW5nOiAwIDAgMjBweCAyMHB4O1xuICBsaXN0LXN0eWxlOiBub25lIG91dHNpZGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5hYm91dC1rZXktZGlmZiB1bCBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4udi1mbGV4IGltZyB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLnVpLXV4LWluZm8ge1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuICBiYWNrZ3JvdW5kOiAjZTVmMGZhO1xufVxuLnVpLXV4LWluZm8gaDUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAzMHB4IDAgMTVweDtcbn1cbi51aS11eC1pbmZvIHN2ZyB7XG4gIGZpbGw6ICMyMTRmN2E7XG59XG5cbi51aS11eC1wcm9jZXNzIC5pY29uLWNpcmNsZSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZTVmMGZhO1xufVxuLnVpLXV4LXByb2Nlc3MgLmljb24tY2lyY2xlIGkge1xuICBsaW5lLWhlaWdodDogMTM1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cbi51aS11eC1wcm9jZXNzIC5pY29uLWNpcmNsZSBpIHN2ZyB7XG4gIGZpbGw6ICMyMTRmN2E7XG59XG4udWktdXgtcHJvY2VzcyAucm93IHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi51aS11eC1wcm9jZXNzIC5yb3cgaDYge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnFhLXRlc3RpbmcgaW1nIHtcbiAgd2lkdGg6IGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xufVxuXG4ubWFuYWdlLXNwYWNlIHtcbiAgbWFyZ2luOiAzMHB4IDA7XG59XG5cbi5xYS1pbmZvIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLnFhLXRlc3RpbmctaW5mbyB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4ucWEtdGVzdGluZy1pbmZvIGg2IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucWEtdGVzdGluZy1pbmZvIC5pY29uLWNpcmNsZSB7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYmFja2dyb3VuZDogI2U1ZjBmYTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnFhLXRlc3RpbmctaW5mbyAuaWNvbi1jaXJjbGUgaSB7XG4gIGxpbmUtaGVpZ2h0OiAyNTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuLnFhLXRlc3RpbmctaW5mbyAuaWNvbi1jaXJjbGUgaSBzdmcge1xuICBmaWxsOiAjMjE0ZjdhO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG59XG4ucWEtdGVzdGluZy1pbmZvIHVsLnFhLXRlc3QtaW5mbyB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5xYS10ZXN0aW5nLWluZm8gdWwucWEtdGVzdC1pbmZvIGxpIHtcbiAgcGFkZGluZzogMCAwIDEwcHggMjBweDtcbiAgbGlzdC1zdHlsZTogbm9uZSBvdXRzaWRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucWEtdGVzdGluZy1pbmZvIHVsLnFhLXRlc3QtaW5mbyBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGJhY2tncm91bmQ6ICMyMTRmN2E7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLm1ldGhvZG9sb2dpZXMgdWwge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gIH1cbiAgLm1ldGhvZG9sb2dpZXMgdWwgbGkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5hcHAtZGV2ZWxvcG1lbnQgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5xYS10ZXN0aW5nIGltZyB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxufSJdfQ== */");

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
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");



let ProjectengineeringComponent = class ProjectengineeringComponent {
    constructor(sharedservice) {
        this.sharedservice = sharedservice;
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
        this.keydiff = [
            { list: 'New application development' },
            { list: 'Existing application enhancement' },
            { list: 'Application maintenance' },
            { list: 'Application migration' },
            { list: 'Production and post production support' },
            { list: 'Application testing' }
        ];
        this.uiUxInfo = [
            { icon: '#icon_daycare', title: 'User-Centred Design', description: 'We design interfaces in perfect synchronization with users, which requires a UX design approach that positions the users in the center.' },
            { icon: '#icon_iteration', title: 'Iterative Approach', description: 'We benefit from prototyping to get early feedback from users in a more iterative way throughout the design process.' },
            { icon: '#icon_explor', title: 'Discover + Design + Develop', description: 'D3 Service Discover + Design + Develop. To create a digital experience that will shift your business to the next level.z' }
        ];
        this.qaInfo = [
            {
                title: 'Cost of the Quality',
                info: 'For optimal return on investment the rule is fix bugs before the release, not after. Smart technology companies know that instead of focusing on patching defects, they must ensure that defects are taken care of before the consumer finds them. Well planned and executed test engineering not only reduces the risks of defects, but helps to ensure project costs stay within budget and timeframe.'
            },
            {
                title: 'Testing Categories / Types',
                info: 'Arkedge Software Testing Services offerings are based on disciplined test methodologies and processes, state of the art infrastructure and industry leading tools, as well as highly skilled and experienced professional staff.'
            },
        ];
        this.qafunctionTest = [
            { info: 'Unit Testing' },
            { info: 'Smoke / Sanity Testing' },
            { info: 'ntegration Testing' },
            { info: 'Interface & Usability Testing' },
            { info: 'System testing' },
            { info: 'Regression Testing' },
            { info: 'User Acceptance Testing' }
        ];
        this.qanonfunctionTest = [
            { info: 'Load & Performance Testing' },
            { info: 'Stress & Volume Testing' },
            { info: 'Security Testing' },
            { info: 'Interoperability Testing' },
            { info: 'Reliability / Availability Test' },
            { info: 'Installation Testing' },
            { info: 'Compatibility Testing' }
        ];
        this.qalabfunctionTest = [
            { info: 'Unit Test' },
            { info: 'Functional Test' },
            { info: 'Regression Test' },
            { info: 'Test Data Creation' },
            { info: 'Load Testing' },
            { info: 'Stress Testing' },
            { info: 'Volume Testing' }
        ];
    }
    ngOnInit() {
        this.sharedservice.sharedMessage.subscribe(Id => this.tabIndex = Id.Id);
        this.sharedservice.sharedMessage.subscribe(Id => this.tabName = Id.name.replace(/([A-Z])/g, ' $1').trim());
    }
    title(i) {
        if (i === 1) {
            this.tabName = 'Cleanse Dataset';
        }
        else if (i === 2) {
            this.tabName = 'Data Mapping & Conversion';
        }
        else if (i === 3) {
            this.tabName = 'Data Migration & Consolidation';
        }
        else if (i === 4) {
            this.tabName = 'Spend Analysis';
        }
    }
};
ProjectengineeringComponent.ctorParameters = () => [
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] }
];
ProjectengineeringComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projectengineering',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projectengineering.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectengineering/projectengineering.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projectengineering.component.scss */ "./src/app/projectengineering/projectengineering.component.scss")).default]
    })
], ProjectengineeringComponent);



/***/ }),

/***/ "./src/app/shared.service.ts":
/*!***********************************!*\
  !*** ./src/app/shared.service.ts ***!
  \***********************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let SharedService = class SharedService {
    constructor() {
        this.urlID = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ Id: '1', name: 'title' });
        this.sharedMessage = this.urlID.asObservable();
    }
    nextMessage(Id, name) {
        this.urlID.next({ Id, name });
        window.scrollTo(0, 0);
    }
};
SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SharedService);



/***/ }),

/***/ "./src/app/sitemap/sitemap.component.scss":
/*!************************************************!*\
  !*** ./src/app/sitemap/sitemap.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpdGVtYXAvc2l0ZW1hcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/sitemap/sitemap.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sitemap/sitemap.component.ts ***!
  \**********************************************/
/*! exports provided: SitemapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitemapComponent", function() { return SitemapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SitemapComponent = class SitemapComponent {
    constructor() { }
    ngOnInit() {
    }
};
SitemapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sitemap',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sitemap.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sitemap/sitemap.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sitemap.component.scss */ "./src/app/sitemap/sitemap.component.scss")).default]
    })
], SitemapComponent);



/***/ }),

/***/ "./src/app/space.pipe.module.ts":
/*!**************************************!*\
  !*** ./src/app/space.pipe.module.ts ***!
  \**************************************/
/*! exports provided: CreateSpacePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSpacePipe", function() { return CreateSpacePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _space_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./space.pipe */ "./src/app/space.pipe.ts");




let CreateSpacePipe = class CreateSpacePipe {
};
CreateSpacePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_space_pipe__WEBPACK_IMPORTED_MODULE_3__["CreateSpace"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_space_pipe__WEBPACK_IMPORTED_MODULE_3__["CreateSpace"]] // <---
    })
], CreateSpacePipe);



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

/***/ "./src/app/staffing/staffing.component.scss":
/*!**************************************************!*\
  !*** ./src/app/staffing/staffing.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section-staffing {\n  padding: 0 0 70px;\n}\n.section-staffing p {\n  margin: 0;\n  padding: 0;\n}\n.section-staffing .col-sm-12:not(:first-child) {\n  padding-top: 30px;\n}\nul.info-bar {\n  margin-left: 5px;\n  align-self: center;\n}\nul.info-bar li {\n  padding: 0 0 10px 20px;\n  list-style: none outside;\n  font-size: 16px;\n  position: relative;\n  font-weight: bold;\n}\nul.info-bar li::before {\n  content: \" \";\n  background: #214f7a;\n  font-weight: bold;\n  position: absolute;\n  top: 8px;\n  left: 0px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\nul.info-bar li p {\n  font-weight: normal;\n}\n.services-provided {\n  padding-top: 0;\n}\n.services-provided .panel {\n  position: relative;\n  border: 1px solid #ccc;\n  margin-top: 30px;\n}\n.services-provided .panel .panel-footer {\n  position: absolute;\n  bottom: 25px;\n  width: 100%;\n}\n.services-provided .panel .panel-footer .btn {\n  background: rgba(255, 255, 255, 0.8);\n  color: #555;\n  display: block;\n  margin: 0 auto;\n}\n.comp-methodology ul.info-bar li::before {\n  background: none;\n  border: 1px solid #214f7a;\n}\n.best-staffing, .values {\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n.features .info-bar {\n  margin-left: 20px;\n}\n.features + .features {\n  margin-top: 20px;\n}\n.modal-body.fix-height {\n  height: 350px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhZmZpbmcvRjpcXGdpdGh1Ylxcd29yay9zcmNcXGFwcFxcc3RhZmZpbmdcXHN0YWZmaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdGFmZmluZy9zdGFmZmluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7QURBSTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDRVI7QURDSTtFQUNJLGlCQUFBO0FDQ1I7QURJQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNESjtBREVJO0VBQ0ksc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQVI7QURDUTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NaO0FEQ1E7RUFDSSxtQkFBQTtBQ0NaO0FESUE7RUFDSSxjQUFBO0FDREo7QURFSTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0FSO0FEQ1E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ1o7QURBWTtFQUNJLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDRWhCO0FEUVc7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0FDTGY7QURXQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNSSjtBRFdHO0VBQ0MsaUJBQUE7QUNSSjtBRFVHO0VBQ0ksZ0JBQUE7QUNSUDtBRGFBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUNWSiIsImZpbGUiOiJzcmMvYXBwL3N0YWZmaW5nL3N0YWZmaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24tc3RhZmZpbmd7XHJcbiAgICBwYWRkaW5nOjAgMCA3MHB4O1xyXG4gICAgcHtcclxuICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICB9XHJcbi5jb2wtc20tMTJ7XHJcbiAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpe1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjMwcHg7XHJcbiAgICB9ICBcclxufVxyXG59XHJcblxyXG51bC5pbmZvLWJhcntcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBsaXtcclxuICAgICAgICBwYWRkaW5nOiAwIDAgMTBweCAyMHB4O1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmUgb3V0c2lkZTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICY6OmJlZm9yZXtcclxuICAgICAgICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMTRmN2E7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOjhweDtcclxuICAgICAgICAgICAgbGVmdDowcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6MTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc2VydmljZXMtcHJvdmlkZWR7XHJcbiAgICBwYWRkaW5nLXRvcDowO1xyXG4gICAgLnBhbmVse1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgbWFyZ2luLXRvcDozMHB4O1xyXG4gICAgICAgIC5wYW5lbC1mb290ZXJ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAyNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgLmJ0bntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IzU1NTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjAgYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gXHJcblxyXG59XHJcblxyXG4uY29tcC1tZXRob2RvbG9neXtcclxuICAgIHVsLmluZm8tYmFye1xyXG4gICAgICAgIGxpe1xyXG4gICAgICAgICAgICY6OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgYmFja2dyb3VuZDpub25lO1xyXG4gICAgICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkICMyMTRmN2E7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbn1cclxuXHJcbi5iZXN0LXN0YWZmaW5nLCAudmFsdWVze1xyXG4gICAgbWFyZ2luLXRvcDo0MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTo0MHB4O1xyXG59XHJcbi5mZWF0dXJlc3tcclxuICAgLmluZm8tYmFye1xyXG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcclxuICAgfVxyXG4gICAmKyAuZmVhdHVyZXN7XHJcbiAgICAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgIH1cclxufVxyXG5cclxuXHJcbi5tb2RhbC1ib2R5LmZpeC1oZWlnaHR7XHJcbiAgICBoZWlnaHQ6MzUwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4iLCIuc2VjdGlvbi1zdGFmZmluZyB7XG4gIHBhZGRpbmc6IDAgMCA3MHB4O1xufVxuLnNlY3Rpb24tc3RhZmZpbmcgcCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5zZWN0aW9uLXN0YWZmaW5nIC5jb2wtc20tMTI6bm90KDpmaXJzdC1jaGlsZCkge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxudWwuaW5mby1iYXIge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG51bC5pbmZvLWJhciBsaSB7XG4gIHBhZGRpbmc6IDAgMCAxMHB4IDIwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmUgb3V0c2lkZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxudWwuaW5mby1iYXIgbGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBiYWNrZ3JvdW5kOiAjMjE0ZjdhO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDhweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbnVsLmluZm8tYmFyIGxpIHAge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uc2VydmljZXMtcHJvdmlkZWQge1xuICBwYWRkaW5nLXRvcDogMDtcbn1cbi5zZXJ2aWNlcy1wcm92aWRlZCAucGFuZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4uc2VydmljZXMtcHJvdmlkZWQgLnBhbmVsIC5wYW5lbC1mb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2VydmljZXMtcHJvdmlkZWQgLnBhbmVsIC5wYW5lbC1mb290ZXIgLmJ0biB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgY29sb3I6ICM1NTU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNvbXAtbWV0aG9kb2xvZ3kgdWwuaW5mby1iYXIgbGk6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMTRmN2E7XG59XG5cbi5iZXN0LXN0YWZmaW5nLCAudmFsdWVzIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLmZlYXR1cmVzIC5pbmZvLWJhciB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLmZlYXR1cmVzICsgLmZlYXR1cmVzIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLm1vZGFsLWJvZHkuZml4LWhlaWdodCB7XG4gIGhlaWdodDogMzUwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/staffing/staffing.component.ts":
/*!************************************************!*\
  !*** ./src/app/staffing/staffing.component.ts ***!
  \************************************************/
/*! exports provided: StaffingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffingComponent", function() { return StaffingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _space_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../space.pipe */ "./src/app/space.pipe.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");





let StaffingComponent = class StaffingComponent {
    constructor(sharedservice, config, modalService) {
        this.sharedservice = sharedservice;
        this.modalService = modalService;
        this.closeResult = '';
        this.ourProcess = [
            {
                title: 'Quality Employee',
                // tslint:disable-next-line: max-line-length
                desc: 'We take the time to listen and understand your business. Our industry-specific recruiters and account teams, combined with our access to the best talent, ensure that we locate, screen and place only the most qualified employees.',
            },
            {
                title: 'Quality Relationship',
                // tslint:disable-next-line: max-line-length
                desc: 'But we don’t stop there. We stay connected with you to ensure our employees are meeting your expectations and we are delivering on our promises.',
            },
            {
                title: 'Strategic Partnership',
                // tslint:disable-next-line: max-line-length
                desc: 'Working together, we develop a strategic partnership to provide workforce consultation to make your staffing process more effective and evolve your business.',
            }
        ];
        this.training = [
            {
                title: 'Project Preparatory Program',
                // tslint:disable-next-line: max-line-length
                desc: `In today's world, there is absolutely no dearth of technological projects to bank one's business on. However, with advancing techs, the demands from IT professionals are also increasing manifold times. It is never possible for one individual to have a complete grasp of every tool and technology. In case the next project of the company requires a certain skillset or proficiency in a particular type of assignment, Arkedge would happily provide a crash course to enable your employees so that they have the relevant skill for the project.`,
            },
            {
                title: 'Certification Program',
                // tslint:disable-next-line: max-line-length
                desc: `The certification programs offered by Arkedge aims to further hone the skills and aptitudes of your employees and IT professionals so that they can serve your business better. Keeping in mind the growing trends of the digital domain, we impart adequate training in branches lie Artificial Intelligence, Machine Learning, Virtual and Augmented Reality, cloud computing, blockchain and Internet of Things (IoT).`,
            },
            {
                title: 'Post-recruitment Orientation Program',
                // tslint:disable-next-line: max-line-length
                desc: `It is the duty of every company to conduct an introductory orientation course for the new recruits to allow them to acclimatize with the kind of work they will be dealing with in their new workplace. While this post-recruitment training program is a necessity for efficiency and work-readiness of the new recruits, it can quite a hassle for your company to arrange for at a constant basis. Arkedge extends its services to cover the program in minute details and turn your fresh members into highly productive resources.`,
            },
            {
                title: 'Skill Updating Program',
                // tslint:disable-next-line: max-line-length
                desc: `Technology is progressing at an exponential rate and it is required that the manual workforce handling them should also be trained properly to keep up with the speed. Arkedge's skill updating program helps you bridge the gap between what you know and what you are being expected to know. It covers the many nuances of the market-popular, specific technologies, new versions or updates or software and so on.`,
            }
        ];
        this.keyDiff = [
            {
                title: 'Single Point of Contact with dedicated recruiting team',
            },
            {
                title: 'Tailored Client Engagement Strategy with process standardization, resource optimization and SLA management',
            },
            {
                title: 'Established Talent Retention Program that outlines the candidate’s commitment, key deliverables and expectations to ensure continuous consultant engagement at all phases of project needs',
            },
            {
                title: 'Large, Screened and Qualified Consultant Database that Goes Beyond Job Boards',
            },
            {
                title: 'National Coverage with Presence in 25 cities across 10 States',
            },
        ];
        this.clients = [
            {
                title: 'Spend their time interviewing the right candidate instead of reviewing resumes.',
            },
            {
                title: 'Save 30% in critical time in their hiring process.',
            },
            {
                title: 'Find the consultants we present, exceed their expectations.',
            },
        ];
        this.whyTraining = [
            {
                title: 'Flexible Pricing Options',
                // tslint:disable-next-line: max-line-length
                desc: `Working with us for corporate IT training is highly cost-effective. We provide our clients with flexible pricing options which will suit their business requirements and budget.`,
            },
            {
                title: 'Single Point of Contact',
                // tslint:disable-next-line: max-line-length
                desc: `When you choose to outsource corporate IT training services to us, we will assign a dedicated project manager. This manager will be the single point of contact for all your needs and resolve any issues that you may have.`,
            },
            {
                title: '24/7 Support',
                // tslint:disable-next-line: max-line-length
                desc: `We provide our clients with round the clock support. All our team members including the sales team, marketing team, call center executives, and project management team are available at all times to answer your queries via phone or email.`,
            },
            {
                title: 'Customization of training programs',
                // tslint:disable-next-line: max-line-length
                desc: `At Outsource2india, we understand the nature of corporate IT training programs - they are precise and heavily objective-driven. Our training modules are thus up for preferred customization and they come tailor-made as per your requirements.`,
            },
            {
                title: 'Experienced and certified trainers',
                // tslint:disable-next-line: max-line-length
                desc: `Our team of trainers for corporate IT training services comes from experienced backgrounds and hold certification in their respective fields. With the proper guidance of our panel of trainers, your employees, whether new or old, will have a horizon of opportunities opened up for them.`,
            },
            {
                title: 'Comprehensive methodology',
                // tslint:disable-next-line: max-line-length
                desc: `Owing to the extensive nature of corporate IT training syllabus and beyond, a systematic yet flexible training methodology should be in place. The course segmentation for the said purpose is determined based on certain aspects -`,
                list: [
                    { title: 'Experience level of the trainee' },
                    { title: 'Timing of the training' },
                    { title: 'Skill level of the training program' },
                    { title: 'Duration of the program' },
                    { title: 'Assessment of the training' }
                ]
            },
            {
                title: 'Hands-on and practical training',
                // tslint:disable-next-line: max-line-length
                desc: `Unlike academic pursuits or most other courses, this training program has a more immediate and realistic goal at its end. So the nature of the training program should also be in accordance to that. Our courses include interactive sessions, engaging case studies and result-orientated preparation styles.`,
            },
            {
                title: 'Post-training support',
                // tslint:disable-next-line: max-line-length
                desc: `Employees might still need assistance with IT operations after their program duration is over. Outsource2india does not leave you stranded in the middle post-training and continues to offer support and assistance to the employees.`,
            }
        ];
        this.servicesProvided = [
            { title: 'EXECUTIVE SEARCH',
                desc: `For an organisation to achieve its objectives, it needs high-calibre and committed leaders. For many years, we have successfully placed a large number of senior individuals, including chief executives, divisional heads and functional heads across a broad range of sectors.

    We understand that our recruitment services play a crucial role in the development and success of our clients. We therefore place the utmost importance on understanding the needs of the organisation and the requirements of the situation.
    
    Each assignment is unique and we offer a bespoke service based on our client’s needs. Working in specialist teams, we are able to utilise our complementary skills and knowledge base to the full. We use structured processes throughout the whole project, adopting a pragmatic approach. This continues even after the assignment has been completed, with a follow-up review and on-going dialogue with both the candidate and the client to ensure that the placement is a success.
    
    Our executive recruitment offering is personally led by our senior management team who have rich, diverse backgrounds with direct industry experience across various geographical markets. We are therefore able to offer clients a truly unique understanding of their needs inside and out, thus allowing us to place executives with the ideal background, attitude and approach in the most timely and effective manner. For our Executive and Leadership Search services, please reach out to us and let’s explore how we may be of help`,
                url: 'http://bcc-india.com' },
            { title: 'MIDDLE MANAGEMENT',
                desc: `Middle Management represents the actual backbone of a successful organisation. Get this wrong and organisations face a lifetime trying to react to market changes, thus ultimately dying out. An effective CEO, in order to maximise their or their company’s performance has to creatively, aggressively, and systematically build the capabilities of the company’s middle management team.

    This is important for two reasons: First, virtually all major strategic initiatives have to be carried out by the middle managers. Their flexibility and leadership skills will determine how able they are to tailor and adapt initiatives to the company’s changing circumstances. Second, a strong middle management team will produce outstanding operational results, easing the need for top managers to oversee and intervene directly in day-to-day operations. A well-functioning middle management team also will proactively create a constant stream of new initiatives to remedy problems and seize new opportunities. Middle management excellence is the key leverage point for great performance.
    
    Therefore if one looked carefully at the great companies of our day, like GE for example, middle management excellence is in fact one of top management’s very highest priorities. Even after GE managers leave the company, they most often have the “look and feel” of GE’s management team: a focus on systematically teaching their subordinates to analyse and improve the businesses, and on teaching them to pass this skill on to their own management teams.
    
    Winfort has strong expertise in helping clients within our focused sectors in building this layer of strong talent. For more information on our middle management search services, please reach out to us and let’s explore how we may be of help.`,
                url: 'http://dreamingcode.com' },
            { title: 'DIVERSITY HIRING',
                desc: `Diversity hiring is not just a service we’re proficient in, but one of the key factors that our team of professional search experts breathe and apply in all their exceptional talent searches.
Our experts understand the nuances of diversity across geographies, industries, and demographics. We aim to bust the myth of women not getting enough opportunities to work for certain industry sectors and hence, we inordinately support our clients with diversity and inclusion. Research also backs up inclusion of diversity in hiring as a key factor for organizations’ growth path.<br>
    Forbes Insights has identified workforce diversity and inclusion as a key driver of internal innovation and business growth. A survey found that 67% of active and passive job seekers said that diversity is an important factor when considering companies and job offers. Hence, Diversity hiring is a crucial aspect of our team culture.<br>
    Diversity is at the forefront of our leadership agenda at Winfort, as well as while working on our Client’s mandates. We believe that a more inclusive workforce and leadership team, fosters better governance and decision making and provides organizations with a sustained competitive advantage.
    Team Winfort has successfully driven this agenda for over a decade with over 43% of our placements, and a significantly higher proportion of our shortlists, being diversity candidates. We have developed significant databases, particularly of female candidates in leadership roles across industries in India.
     We are privileged to have clients who too recognize and support diversity hiring in various industry sectors. Our ‘Returnship Program’ acts as an enabler to mothers looking to return to a fulfilling career, post their maternity, which is appreciated and used on a regular basis by our clients looking to hire diverse talented professionals. Our “Diverse Leadership program” is focused on organizations that want to build a more inclusive team. <br>
     ‘We are proud of the fact that we are helping break the stereotype in a category like Technology, which historically has been predominantly a male bastion. As of last year alone, Winfort helped place 43% diversity candidates- an accomplishment which we,Winfortians hold close to our heart.
    Hence, If you are a professional, looking for an inclusive career path or a progressive organization, looking to hire talented candidates, devoid of cultural and sexual orientation biases, reach out to us.
    We promise to partner with you and help bring diversity in your organization. Let’s connect`,
                url: 'http://royalcollegemiraroad.edu.in/' },
            { title: 'MARKET MAPPING',
                desc: `“ The secret of my success is that we have gone to exceptional lengths to hire the best in the world.” – Steve Jobs

    Information is Power and we, at Winfort understand that for every business to grow to its full potential, it needs timely, relevant information. It is particularly useful for businesses entering new markets or ramping up or are willing to hire the best.
    
    Market mapping is the art of using competitive intelligence to understand the size of the talent pool, their skills and background, demographics, salary ranges, organization structures etc.
    
    Often, companies seek to benchmark their own leadership team against the talent base available in a particular geography or industry. As the norm is, business leaders across industries, develop and engage with an external leadership pipeline on an ongoing basis. Gathering targeted market intelligence allows recruitment professionals to build a strategy to hire dynamic talent. We provide assistance through bespoke market and talent mapping, thus enabling our client partners to hire, better.
    
    And hence, corporates seeking deeper insights and analysis with regards to understanding the talent landscape (single role, job family, skillset, compensation, etc) have Winfort as their first port of call. Our team of experts indulge in extensive research on the trends, cultural fit, and competitive strengths analysis within the market landscape and validate those findings to organizations in search of such information.
    
    With over 2 decades of experience, Winfort’s team of talented professionals combines technology, business and market skills to deliver information that is crucial for organizations to build their strategic hiring plans and take advised decisions.
    
    If you are a company that believes in the power of information and market intelligence and prefers a competitive analysis prior to making a hiring decision, Winfort is the one-stop solution for you.`,
                url: 'http://alshariah.com/' },
            { title: 'CONTRACT STAFFING',
                desc: `Digital and Transformation – the two buzz words that define today’s business environment.  With companies evolving their strategies and processes on a regular basis, the ability of an organisation to manage it’s processes and resources flexibly becomes critical to stay competitive and succeed.

    At Winfort, we have been supporting our customers for over 20 years with flexible staffing solutions.  Leveraging our strong database and technical capability, we have provided flexible staffing and payroll solutions in diverse areas such as technology, analytics, finance, consulting, recruitment etc.  Our unique business model allows organisations to focus on running their business, while we manage their complete payroll and administration process, including all regulatory compliances.`,
                url: 'http://miraclefoods.in/' },
            { title: 'RPO',
                desc: `It is a form of knowledge process outsourcing where an employer outsources or transfers all or part of its recruitment activities to an external service provider like Winfort. The ability to pursue growth opportunities for any organisation requires skilled and motivated talent. Recruitment process outsourcing (RPO) can bring you that talent in a cost effective manner. As a specialised leader in recruitment outsourcing and consulting, Winfort leverages it’s talent hiring expertise to optimize the recruiting process. We are committed to lowering costs, increasing productivity and retention, and delivering a best-in-class hiring manager and candidate experience. We have a full suite of recruitment process outsourcing (RPO) solutions to meet your specific talent acquisition needs.`,
                url: 'http://miraclefoods.in/' }
        ];
        this.staffingSolution = [
            {
                title: ' Rapid Staffing Solutions',
                // tslint:disable-next-line: max-line-length
                desc: 'Rapid Staffing Solutions addresses large requirements from clients, particularly at junior and middle management levels. Such requirements cater to start-up organizations, new project manning, plant expansion, scale up of team sizes and geographical expansion of teams.',
                // tslint:disable-next-line: max-line-length
                desc2: 'We can mobilize our vast internal resources to process large volume responses, manage selection of required personnel, including the management of administrative details and logistics. We also help you target specific segments of professionals for specialized roles.'
            },
            {
                title: 'Turnkey Staffing',
                // tslint:disable-next-line: max-line-length
                desc: 'The entire Recruitment Process is taken up as a Turnkey Assignment, whereby we manage the entire logistics i.e. written tests, Organizing Group Discussions, Conduction Technical Tests, and Preliminary Interviews etc. The entire activity from A to Z is taken up as a turnkey project.',
                // tslint:disable-next-line: max-line-length
                desc2: ''
            },
            {
                title: 'Executive Search',
                // tslint:disable-next-line: max-line-length
                desc: 'Our Executive search division focuses on senior level positions like President, CEO, COO, Managing Director, Vice President, General Manager, Project Directors etc. We also identify candidates in key technology and niche areas, people who are specialists in their chosen field of work.',
                // tslint:disable-next-line: max-line-length
                desc2: 'Based on the requirement of the client; we map the industry for the companies and the people who would be best suitable for the job. We, then discuss with the client to chart out a list of candidates who would suit their requirements. After which, we hold discussions with the candidates before the company contacts them. Thus, we act like a catalyst throughout, facilitating the recruitment process while also maintaining strict confidentiality.'
            }
        ];
        this.industriesSolution = [
            { list: 'IT, telecom and software' },
            { list: 'Telecom' },
            { list: 'ITES - BPO & KPO' },
            { list: 'Engineering & Manufacturing' },
            { list: 'Consumer goods and retail' },
            { list: 'Banking Financial services and insurance' },
            { list: 'Health care & Pharmaceuticals' }
        ];
        // courses = [
        //   {coursetype: 'PDPC', courseDescription: 'Post Degree Programming Course with ONE Live Project', courseDuration: '6 Months'},
        //   {coursetype: 'CC01', courseDescription: '	Object Oriented Principles and Database Fundamentals', courseDuration: '2 Days'},
        //   {coursetype: 'SC01', courseDescription: 'Getting started with.Net, C# and ASP.NET', courseDuration: '1 Day'},
        //   {coursetype: 'SC01', courseDescription: 'Getting started with.Net, C# and ASP.NET', courseDuration: '1 Day'},
        // ];
        this.courses = [
            {
                coursetype: 'Project Management Professional (PMP)',
                infoCommTech: 'Microsoft Certification Programs',
                mgdev: 'Effective Decision-Making Skills'
            },
            {
                coursetype: 'IT Infrastructure Library (ITIL V3)',
                infoCommTech: 'Java Certification Programs',
                mgdev: 'Presentation Skills'
            },
            {
                coursetype: '',
                infoCommTech: 'Database Trainings',
                mgdev: 'Negotiation Skills'
            },
            {
                coursetype: '',
                infoCommTech: 'Scripting Language',
                mgdev: 'Emotional Intelligence'
            },
            {
                coursetype: '',
                infoCommTech: 'Operating System & Server (Linux/Unix)',
                mgdev: 'Effective Marketing Skills'
            },
            {
                coursetype: '',
                infoCommTech: 'Windows Operating System & Server',
                mgdev: 'Time Management Skills'
            },
            {
                coursetype: '',
                infoCommTech: 'Data warehousing and Business Intelligence',
                mgdev: 'Professional & Business Etiquette'
            },
            {
                coursetype: '',
                infoCommTech: 'Project Management Tools',
                mgdev: 'Email Etiquette'
            },
            {
                coursetype: '',
                infoCommTech: '',
                mgdev: 'Leadership Skills'
            }
        ];
        this.programCalendar = [
            { courseTitle: 'Post Degree Programming Course with ONE Live Project', location: 'Sr. Business Analyst', targetDate: '04-Aug-18' },
            { courseTitle: 'Getting started with.Net, C# and ASP.NET', location: 'Mumbai, India', targetDate: '04-Jul-18' },
            { courseTitle: 'Architecture (Design Patterns and UML)', location: 'Mumbai, India', targetDate: '28-Jun-18' },
            { courseTitle: 'Load and Performance Testing (by using Load runner)	', location: 'Mumbai, India', targetDate: '	28-Jul-18' },
            { courseTitle: 'MS Excel 2007 for Beginners', location: 'Mumbai, India', targetDate: '20-Jul-18' },
            { courseTitle: 'Ms Excel 2007 for Experienced', location: 'Mumbai, India', targetDate: '15-Aug-18' }
        ];
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title_1' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    ngOnInit() {
        this.sharedservice.sharedMessage.subscribe(Id => this.tabIndex = Id.Id);
        this.sharedservice.sharedMessage.subscribe(Id => this.tabName = Id.name.replace(/([A-Z])/g, ' $1').trim());
    }
    title(i) {
        if (i === 1) {
            this.tabName = 'Cleanse Dataset';
        }
        else if (i === 2) {
            this.tabName = 'Data Mapping & Conversion';
        }
        else if (i === 3) {
            this.tabName = 'Data Migration & Consolidation';
        }
        else if (i === 4) {
            this.tabName = 'Spend Analysis';
        }
    }
};
StaffingComponent.ctorParameters = () => [
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalConfig"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
];
StaffingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-staffing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./staffing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/staffing/staffing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./staffing.component.scss */ "./src/app/staffing/staffing.component.scss")).default]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _space_pipe__WEBPACK_IMPORTED_MODULE_3__["CreateSpace"]
        ]
    })
], StaffingComponent);



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

/***/ "./src/app/testimonials/testimonials.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/testimonials/testimonials.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".div-1 {\n  background-color: #c3d04e;\n}\n\n.div-2 {\n  background-color: #8778d9;\n}\n\n.div-3 {\n  background-color: #ffab00;\n}\n\n.div-4 {\n  background-color: #ff5630;\n}\n\n.div-5 {\n  background-color: #02b8d9;\n}\n\n.div-6 {\n  background-color: #5391ee;\n}\n\nsection {\n  padding: 70px 0 55px;\n}\n\n.testimonials-info {\n  padding: 0;\n}\n\n.testimonials-info .col-sm-12 {\n  border-top: 1px dotted #af9090;\n  padding-bottom: 40px;\n}\n\n.testimonials-info .col-sm-12:nth-child(even) .span {\n  float: right;\n  margin: 0 0 0 40px;\n}\n\n.testimonials-info p {\n  padding-top: 40px;\n}\n\n.testimonials-info p a {\n  color: #214f7a;\n  font-weight: bold;\n}\n\n.testimonials-info p .span {\n  float: left;\n  margin: 0 40px 0 0;\n}\n\n.testimonials-info p img {\n  width: 50%;\n  border-radius: 50%;\n  display: block;\n  margin: 0 auto 30px;\n}\n\n.testimonials-info p .title-name {\n  font-size: 25px;\n  font-weight: bold;\n  text-align: center;\n  display: block;\n}\n\n.testimonials-info p .title-info {\n  font-size: 16px;\n  color: #5C5C5C;\n  text-align: center;\n  display: block;\n}\n\n.testimonials-info p .v-text-align {\n  height: 100%;\n  display: flex;\n}\n\n.testimonials-info p .v-text-align p {\n  align-self: center;\n}\n\n.testimonials-info .btn {\n  padding: 10px;\n  border-radius: 5px;\n  font-size: 12px;\n}\n\n@media (max-width: 576px) {\n  .testimonials-info .col-sm-12 .span {\n    width: 100%;\n    margin: 0;\n    float: none;\n  }\n  .testimonials-info .col-sm-12 .span img {\n    margin: 0 auto 30px;\n  }\n  .testimonials-info .col-sm-12 .v-text-align {\n    height: auto;\n    display: block;\n  }\n  .testimonials-info .col-sm-12 .v-text-align p {\n    align-self: center;\n    float: left;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdGltb25pYWxzL0Y6XFxnaXRodWJcXHdvcmsvc3JjXFxhcHBcXHRlc3RpbW9uaWFsc1xcdGVzdGltb25pYWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90ZXN0aW1vbmlhbHMvdGVzdGltb25pYWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdDO0VBQ0MseUJBQUE7QUNGRjs7QURDQztFQUNDLHlCQUFBO0FDRUY7O0FESEM7RUFDQyx5QkFBQTtBQ01GOztBRFBDO0VBQ0MseUJBQUE7QUNVRjs7QURYQztFQUNDLHlCQUFBO0FDY0Y7O0FEZkM7RUFDQyx5QkFBQTtBQ2tCRjs7QURkQTtFQUNJLG9CQUFBO0FDaUJKOztBRGRBO0VBQ0MsVUFBQTtBQ2lCRDs7QURmQztFQUNDLDhCQUFBO0VBQ0Esb0JBQUE7QUNpQkY7O0FEZkU7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7QUNpQkg7O0FEYkE7RUFDQyxpQkFBQTtBQ2VEOztBRGRDO0VBQ0MsY0FBQTtFQUNBLGlCQUFBO0FDZ0JGOztBRGRDO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0FDZ0JGOztBRGJBO0VBQ0MsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDZUQ7O0FEWEE7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNhRDs7QURYQTtFQUNDLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDYUQ7O0FEVkE7RUFDQyxZQUFBO0VBQ0EsYUFBQTtBQ1lEOztBRFhDO0VBQ0Msa0JBQUE7QUNhRjs7QURSQTtFQUNDLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNVRDs7QUROQTtFQUdJO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0VDT0Y7RURORTtJQUNDLG1CQUFBO0VDUUg7RURMQztJQUNDLFlBQUE7SUFDQSxjQUFBO0VDT0Y7RURORTtJQUNDLGtCQUFBO0lBQ0EsV0FBQTtFQ1FIO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90ZXN0aW1vbmlhbHMvdGVzdGltb25pYWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHJhbmRvbUJnOiNjM2QwNGUsICM4Nzc4ZDksICNmZmFiMDAsICNmZjU2MzAsICMwMmI4ZDksICM1MzkxZWU7XHJcblxyXG5AZm9yICRpIGZyb20gMSB0aHJvdWdoIGxlbmd0aCgkcmFuZG9tQmcpIHtcclxuXHQuZGl2LSN7JGl9IHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IG50aCgkcmFuZG9tQmcsICRpKTtcclxuXHR9XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogNzBweCAwIDU1cHg7XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbHMtaW5mb3tcclxuXHRwYWRkaW5nOjA7XHRcclxuXHJcblx0LmNvbC1zbS0xMntcclxuXHRcdGJvcmRlci10b3A6MXB4IGRvdHRlZCAjYWY5MDkwO1xyXG5cdFx0cGFkZGluZy1ib3R0b206NDBweDtcclxuXHQmOm50aC1jaGlsZChldmVuKXtcclxuXHRcdC5zcGFue1xyXG5cdFx0XHRmbG9hdDpyaWdodDtcclxuXHRcdFx0bWFyZ2luOjAgMCAwIDQwcHg7XHJcblx0XHR9XHJcblx0fX1cclxuXHJcbnB7XHJcblx0cGFkZGluZy10b3A6NDBweDtcclxuXHRhe1xyXG5cdFx0Y29sb3I6IzIxNGY3YTtcclxuXHRcdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcblx0fVxyXG5cdC5zcGFue1xyXG5cdFx0ZmxvYXQ6bGVmdDtcclxuXHRcdG1hcmdpbjogMCA0MHB4IDAgMDtcclxuXHR9XHJcblxyXG5pbWd7XHJcblx0d2lkdGg6NTAlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRkaXNwbGF5OmJsb2NrO1xyXG5cdG1hcmdpbjowIGF1dG8gMzBweDtcclxuXHJcbn1cclxuXHJcbi50aXRsZS1uYW1le1xyXG5cdGZvbnQtc2l6ZToyNXB4O1xyXG5cdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGRpc3BsYXk6YmxvY2s7XHJcbn1cclxuLnRpdGxlLWluZm97XHJcblx0Zm9udC1zaXplOjE2cHg7XHJcblx0Y29sb3I6IzVDNUM1QztcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0ZGlzcGxheTpibG9jaztcclxufVxyXG5cclxuLnYtdGV4dC1hbGlnbntcclxuXHRoZWlnaHQ6MTAwJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdHB7XHJcblx0XHRhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblx0fVxyXG59XHJcblxyXG59XHJcbi5idG57XHJcblx0cGFkZGluZzoxMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6NXB4O1xyXG5cdGZvbnQtc2l6ZToxMnB4O1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCl7XHJcblx0LnRlc3RpbW9uaWFscy1pbmZve1xyXG5cdFx0LmNvbC1zbS0xMntcclxuXHRcdCAgLnNwYW57XHJcblx0XHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0ZmxvYXQ6bm9uZTtcclxuXHRcdFx0XHRpbWd7XHJcblx0XHRcdFx0XHRtYXJnaW46MCBhdXRvIDMwcHhcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0LnYtdGV4dC1hbGlnbntcclxuXHRcdFx0XHRoZWlnaHQ6YXV0bztcclxuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRwe1xyXG5cdFx0XHRcdFx0YWxpZ24tc2VsZjogY2VudGVyO1xyXG5cdFx0XHRcdFx0ZmxvYXQ6bGVmdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG59IiwiLmRpdi0xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MzZDA0ZTtcbn1cblxuLmRpdi0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg3NzhkOTtcbn1cblxuLmRpdi0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWIwMDtcbn1cblxuLmRpdi00IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTYzMDtcbn1cblxuLmRpdi01IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyYjhkOTtcbn1cblxuLmRpdi02IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzOTFlZTtcbn1cblxuc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDcwcHggMCA1NXB4O1xufVxuXG4udGVzdGltb25pYWxzLWluZm8ge1xuICBwYWRkaW5nOiAwO1xufVxuLnRlc3RpbW9uaWFscy1pbmZvIC5jb2wtc20tMTIge1xuICBib3JkZXItdG9wOiAxcHggZG90dGVkICNhZjkwOTA7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuLnRlc3RpbW9uaWFscy1pbmZvIC5jb2wtc20tMTI6bnRoLWNoaWxkKGV2ZW4pIC5zcGFuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDAgMCAwIDQwcHg7XG59XG4udGVzdGltb25pYWxzLWluZm8gcCB7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuLnRlc3RpbW9uaWFscy1pbmZvIHAgYSB7XG4gIGNvbG9yOiAjMjE0ZjdhO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi50ZXN0aW1vbmlhbHMtaW5mbyBwIC5zcGFuIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCA0MHB4IDAgMDtcbn1cbi50ZXN0aW1vbmlhbHMtaW5mbyBwIGltZyB7XG4gIHdpZHRoOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvIDMwcHg7XG59XG4udGVzdGltb25pYWxzLWluZm8gcCAudGl0bGUtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4udGVzdGltb25pYWxzLWluZm8gcCAudGl0bGUtaW5mbyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM1QzVDNUM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4udGVzdGltb25pYWxzLWluZm8gcCAudi10ZXh0LWFsaWduIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnRlc3RpbW9uaWFscy1pbmZvIHAgLnYtdGV4dC1hbGlnbiBwIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLnRlc3RpbW9uaWFscy1pbmZvIC5idG4ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC50ZXN0aW1vbmlhbHMtaW5mbyAuY29sLXNtLTEyIC5zcGFuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cbiAgLnRlc3RpbW9uaWFscy1pbmZvIC5jb2wtc20tMTIgLnNwYW4gaW1nIHtcbiAgICBtYXJnaW46IDAgYXV0byAzMHB4O1xuICB9XG4gIC50ZXN0aW1vbmlhbHMtaW5mbyAuY29sLXNtLTEyIC52LXRleHQtYWxpZ24ge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAudGVzdGltb25pYWxzLWluZm8gLmNvbC1zbS0xMiAudi10ZXh0LWFsaWduIHAge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/testimonials/testimonials.component.ts":
/*!********************************************************!*\
  !*** ./src/app/testimonials/testimonials.component.ts ***!
  \********************************************************/
/*! exports provided: TestimonialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsComponent", function() { return TestimonialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TestimonialsComponent = class TestimonialsComponent {
    constructor() {
        this.testimonials = [
            { name: 'Same Martinez',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            },
            { name: 'Same Martinez',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            },
            { name: 'Same Martinez',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            },
            { name: 'Same Martinez',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            },
            { name: 'Same Martinez',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            },
            { name: 'Same Martinez',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            }
        ];
    }
    ngOnInit() {
    }
};
TestimonialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-testimonials',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./testimonials.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/testimonials/testimonials.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./testimonials.component.scss */ "./src/app/testimonials/testimonials.component.scss")).default]
    })
], TestimonialsComponent);



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