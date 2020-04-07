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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-about.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n                    <h1>About ARKEDGE</h1>\n                    <h6>We value loyalty, creativity and productivity with results...</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<section class=\"about-tab inner-nav-tab\">\n    <div class=\"tab-navigation\">\n        <div class=\"col-sm-12\">\n            <div class=\"container\">\n                <ul ngbNav #nav=\"ngbNav\" [(activeId)]=\"active\" class=\"nav-tabs\">\n                    <li [ngbNavItem]=\"1\">\n                        <a ngbNavLink>About Us</a>\n                        <ng-template ngbNavContent>\n                            <section class=\"note-desc\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12\">\n                                            <p class=\"running-text\">\n                                                ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. The organization is making its presence felt on the engineering solution and services, Staffing and IT training circuit. Equipped with cross cultural operating experience; an asset, it drives the organization to deliver nothing but the best.\n\n\n                                            </p>\n                                            <p>\n                                                Over the years we have built up a solid team of software professionals that come from different backgrounds and enlarge the creative potential of ARKEDGE. The competence that they offer contains a wide range of custom programming skills including the latest and most effective development in Microsoft technologies.\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </section>\n                            <section class=\"about-key-diff\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n\n                                        <div class=\"col-md-8 col-lg-8 col-sm-12\">\n                                            <h1>Key Differentiators</h1>\n                                            <ul>\n                                                <li *ngFor=\"let key of keydiff\">\n                                                    {{key.list}}\n                                                </li>\n                                            </ul>\n                                        </div>\n\n                                        <div class=\"col-md-4 col-lg-4 col-sm-12\">\n                                            <img src=\"assets/images/about-support.png\">\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </section>\n\n\n                            <section class=\"about-info\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-8 col-md-8 col-sm-12 v-align\">\n                                            <p>Ever-growing demand for Web Application solutions is driven by rapidly changing market conditions and technology progress. To streamline your business, we address those issues with our Internet and Intranet solutions. In addition we also provide you web / animation design services.<br><br>\n                                                In addition ARKEDGE specializes in a bunch of IT training services for corporate, institutions and individuals. We do organize corporate training programs for industry officials who find it difficult to mingle their expertise with latest IT tools and IT based technology. We do impart IT training for graduates in multiple discipline including computer application, hard core technology, business administration, and individuals who are in the mid of their management education.\n\n\n                                            </p>\n\n                                        </div>\n                                        <div class=\"col-lg-4 col-md-4 col-sm-12\">\n                                            <img src=\"assets/images/about-info.jpg\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </section>\n\n\n                            <section class=\"section-info\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12\">\n                                            <p>\n                                                Along with the engineering solution and services ARKEDGE is specialized\n                                                in helpings client\n                                                organizations identify, evaluate, and recruit executives at various\n                                                levels. It comprises of\n                                                well-qualified group of people having faith in camaraderie and serving\n                                                the industry to find the\n                                                solutions to various key areas as Staffing, Executive Search and IT\n                                                training.\n                                                <br><br>\n                                                In addition ARKEDGE specializes in a bunch of IT training services for\n                                                corporate, institutions and\n                                                individuals. We do organize corporate training programs for industry\n                                                officials who find it difficult\n                                                to mingle their expertise with latest IT tools and IT based technology.\n                                                We do impart IT training for\n                                                graduates in multiple discipline including computer application, hard\n                                                core technology, business\n                                                administration, and individuals who are in the mid of their management\n                                                education.\n                                            </p>\n                                        </div>\n                                        <div *ngFor=\"let item of solution\"\n                                            class=\"col-lg-4 col-md-4 col-sm-12 panel-container\">\n                                            <div class=\"panel\">\n                                                <div class=\"panel-front {{item.color}}\">\n                                                    <div class=\"panel-heading\">\n                                                        <div class=\"icon-circle circle-bg\">\n                                                            <i class=\"icon icon-medium\">\n                                                                <svg focusable=\"false\">\n                                                                    <use attr.xlink:href=\"{{item.icon}}\"></use>\n                                                                </svg>\n                                                            </i>\n                                                        </div>\n                                                        <h5>{{item.title}}</h5>\n                                                    </div>\n                                                    <div class=\"panel-body\">\n\n                                                        <p *ngFor=\"let data of item.list\">{{data.name}}</p>\n                                                    </div>\n                                                </div>\n                                                <div class=\"panel-back {{item.color}}\">\n                                                    <h5>{{item.title}}</h5>\n                                                    <p>{{item.description}}</p>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </section>\n                        </ng-template>\n                    </li>\n\n                    <li [ngbNavItem]=\"2\">\n                        <a ngbNavLink>Why ARKEDGE</a>\n                        <ng-template ngbNavContent>\n                            <div class=\"container\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-12\">\n                                        <p class=\"running-text\">\n                                            ARKEDGE is a rapidly growing professionally managed organization with competent and\n                                            qualified brass at the helm of the affairs.\n                                        </p>\n                                        <p>\n                                            from different backgrounds\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                           \n                        <section class=\"why-us\">\n                                <div class=\"container\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-12\">\n                                        <ul>\n                                            <li *ngFor=\"let list of bulletPoint; index as i\">\n                                                    {{list.list}}\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n\n                                <div class=\"row\">\n                                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                                        <div class=\"wa-info\">\n                                        <h2>Vision</h2>\n                                        <p>\n                                            ARKEDGE was founded with a philosophy that every organization has its own unique set of people, processes, technology, culture, values, skills & vision. We are committed to understand these unique parameters of organizations & customizing our solutions to suit them.\n                                            <br><br>\n                                            We aim for long term relationship that brings in immense satisfaction and prosperity to both ends. We value loyalty, creativity and productivity with results.\n                                        </p>\n                                    </div>\n                                    </div>\n                                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                                        <div class=\"wa-info\">\n                                        <h2>Mission</h2>\n                                        <p>\n                                            Our endeavor is to achieve total customer satisfaction, by providing quality products and services, using simplifying technologies and continually improving processes, through competent employees and business partners.\n                                            <br><br>\n                                            To be the preferred choice of our customers, employees and partners\n                                        </p>\n                                    </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"row\">\n                                    <div class=\"col-sm-12\">\n                                    <h1>\n                                        Centers of Excellence\n                                    </h1>\n                                    <p>\n                                        We have structured our business operations into six dedicated practice areas. Each practice area operates as a Center of Excellence (CoE).\n                                    </p>\n                                    <h6>\n                                        Key Differentiators\n                                    </h6>\n                                    \n\n                                        <ul>\n                                            <li *ngFor=\"let list of bulletPoint_2; index as i\">\n                                                    {{list.list}}\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n\n                                <div class=\"row\">\n                                    <div class=\"col-sm-12\">\n                                    <h1>\n                                        Value Initiative\n                                    </h1>\n                                    <p>\n                                        A commitment to quality, learning from the previous successes and mistakes, setting higher benchmarks and generate productive results.\n                                    </p>\n\n                                    <h6>\n                                        Exceeding customer expectation\n                                    </h6>\n                                    <p>\n                                        Treating customers as lifetime assets and striving to integrate and partner with customers in creating value.\n                                     </p>\n\n                                     <h6>\n                                        Employee Empowerment\n                                    </h6>\n                                    <p>\n                                        Empowering employees at all levels and motivating them to challenge the status quo, to set and achieve ambitious goals for themselves and the company.\n                                     </p>\n\n                                     <h6>\n                                        Joy at Work\n                                    </h6>\n                                    <p>\n                                        Providing employees a conducive, challenging environment where creativity is valued, teamwork is encouraged, performances are rewarded and success celebrated.\n                                     </p>\n\n                                     <h6>\n                                        Integrity\n                                    </h6>\n                                    <p>\n                                        A commitment to be open, frank, loyal and ethical in our interactions with all our stakeholders.\n                                     </p>\n                                </div>\n                            </div>\n                            </div>\n                            </section>\n\n                        </ng-template>\n                    </li>\n\n                   <li [ngbNavItem]=\"3\">\n                        <a ngbNavLink>Partner</a>\n                        <ng-template ngbNavContent>\n                            <div class=\"container\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-12\">\n                                        <p class=\"running-text\">\n                                            ARKEDGE is a rapidly growing professionally managed organization with competent and\n                                            qualified brass at the helm of the affairs.\n                                        </p>\n                                        <p>\n                                            from different backgrounds\n                                        </p>\n                                    </div>\n                                </div>\n\n                                <section class=\"partner-info\">\n                                    <div class=\"container\">\n                                        <div class=\"row\">\n                                            <div *ngFor=\"let data of partnerInfo; index as i\" class=\"col-lg-3 col-md-3 col-sm-12\">\n                                                <div class=\"panel\" (click)=\"open(content)\">\n                                                   <div class=\"panel-body\">\n                                                       <a><img src=\"assets/images/logo{{i+1}}.png\"></a>\n                                                    </div>\n                                                 </div>\n                                                 <ng-template #content let-modal>\n                                                    <div class=\"modal-header\">\n                                                        <h4 class=\"modal-title\">{{data.title}}</h4>\n                                                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                                                        <span aria-hidden=\"true\">&times;</span>\n                                                    </button>\n                                                    </div>\n                                                <div class=\"modal-body\">\n                                                    \n                                                    <div class=\"panel\">\n                                                        <div class=\"panel-header\">\n                                                            <img src=\"assets/images/logo{{i+1}}.png\">\n                                                         </div>\n                                                        <div class=\"panel-body\">\n                                                            <p>{{data.desc}}</p>\n                                                            <a href=\"{{data.url}}\" target=\"_blank\">{{data.url}}</a>\n                                                         </div>\n                                                    </div>\n                                                </div>\n                                              </ng-template>\n                                             </div>\n                                        </div>\n                                    </div>\n                                </section>\n                             </div>\n                        </ng-template>\n                    </li>\n\n                    <li [ngbNavItem]=\"4\">\n                        <a ngbNavLink>Leadership</a>\n                        <ng-template ngbNavContent>\n                            <div class=\"container\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-12\">\n                                        <p class=\"running-text\">\n                                            ARKEDGE is a rapidly growing professionally managed organization with competent and\n                                            qualified brass at the helm of the affairs.\n                                        </p>\n                                        <p>\n                                            from different backgrounds\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <section class=\"leader-ship\" *ngFor=\"let leaderlist of leaders; index as i\">\n                                <div class=\"container\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-12 col-md-11 div-center\">\n                                        <p>\n                                            <img src=\"assets/images/leadership/leader-{{i+1}}.jpg\" align=\"left\">\n                                            <span class=\"title-name\">{{leaderlist.name}}</span><br><br>\n                                            <span class=\"title-info\">{{leaderlist.info}}</span><br><br>\n                                            {{leaderlist.desc}}\n                                            <a>Read More..</a>\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                            </section>\n                        </ng-template>\n                    </li>\n\n                    <!-- <li [ngbNavItem]=\"5\">\n                        <a ngbNavLink>News</a>\n                        <ng-template ngbNavContent>\n                            <div class=\"container section-news\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-12\">\n                                    <ul ngbNav #nav=\"ngbNav\" [(activeId)]=\"active\" class=\"nav-tabs\">\n                                        <li [ngbNavItem]=\"01\">\n                                          <a ngbNavLink>News</a>\n                                          <ng-template ngbNavContent>\n                                            <li *ngFor=\"let data of news; index as i\" class=\"p2 grid-li\">\n                                                <div class=\"panel\">\n                                                    <div class=\"panel-heading\">\n                                                       <img src={{data.img}}-{{i+1}}.jpg alt=\"{{data.subtitle}}\">\n                                                    </div>\n                                                    <div class=\"panel-body\">\n                                                        <p><b>{{data.desc_1}}</b></p>\n                                                        <p>{{data.desc_2}}</p>\n                                                       \n                                                    </div>\n                                             </div>\n                                            </li>\n                                        </ng-template>\n                                        </li>\n                                        <li [ngbNavItem]=\"02\">\n                                            <a ngbNavLink>Events</a>\n                                            <ng-template ngbNavContent>\n                                            \n                                          </ng-template>\n                                          </li>\n                                          <li [ngbNavItem]=\"03\">\n                                            <a ngbNavLink>Webinars</a>\n                                            <ng-template ngbNavContent>\n                                              \n                                          </ng-template>\n                                          </li>\n                                          <li [ngbNavItem]=\"04\">\n                                            <a ngbNavLink>Press Releases</a>\n                                            <ng-template ngbNavContent>\n                                            \n                                          </ng-template>\n                                          </li>\n                                          <li [ngbNavItem]=\"05\">\n                                            <a ngbNavLink>Video Gallery</a>\n                                            <ng-template ngbNavContent>\n                                             \n                                          </ng-template>\n                                          </li>\n                                      </ul>\n                                      \n                                      <div [ngbNavOutlet]=\"nav\" class=\"mt-4\"></div>\n                                </div> </div>\n                            </div>\n                            \n                            <section class=\"news-video\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12\">\n                            \n                                            <div class=\"video\">\n                                                <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/zmEG-5zEmPw\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n                                            </div>\n                            \n                                            <h6 class=\"center\">\n                                                Arkedge Technologies has a very ambitious plan for future and we are looking for energetic, motivated, ambitious team players who relish the challenge of joining a growing business in the field of IT, Resourcing and Training. You will have the opportunity to grow professionally and financially.\n                                            </h6>\n                                        </div>\n                                    </div>\n                                </div>\n                            </section>\n                        </ng-template>\n                    </li> -->\n\n                </ul>\n            </div>\n        </div>\n    </div>\n\n\n     <div [ngbNavOutlet]=\"nav\"></div>\n   \n\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/advancesolution/advancesolution.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/advancesolution/advancesolution.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\r\n    <img src=\"assets/images/inner-banner-advance-solution.jpg\">\r\n    <div class=\"page-title\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12 center\">\r\n                    <h1>Advance solutions</h1>\r\n                    <h6>Technical solution for all industries</h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<section class=\"section-advance-solution\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-lg-9 col-md-9 col-sm-12 div-center center\">\r\n                <p>\r\n                    <b>ARKEDGE technologies approaches each business as an individual so\r\n                        that we can provide you with IT solutions that suit your needs.\r\n                        We offer holistic solutions, consisting of different offerings.\r\n                    </b>\r\n                    <br><br>\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\r\n                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\r\n                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n                    cillum dolore eu fugiat nulla pariatur.\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-10 div-center\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                        <h2>Digital Transformation</h2>\r\n                        <p>\r\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                            labore et\r\n                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\r\n                            ut aliquip\r\n                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n                            cillum dolore eu\r\n                            fugiat nulla pariatur.\r\n                            <br><br>\r\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                            labore et\r\n                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\r\n                            ut aliquip\r\n                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n                            cillum dolore eu\r\n                            fugiat nulla pariatur.\r\n                        </p>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                        <img src=\"assets/images/advance-solution-1.png\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<section>\r\n    <div class=\"container\">\r\n\r\n        <div class=\"col-lg-10 div-center\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                    <img src=\"assets/images/advance-solution-2.png\">\r\n                </div>\r\n\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                    <h2>Digital Innovation</h2>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r\n                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\r\n                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n                        <br><br>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r\n                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\r\n                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n                    </p>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-10 div-center\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                        <h2>Digital Transformation</h2>\r\n                        <p>\r\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                            labore et\r\n                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\r\n                            ut aliquip\r\n                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n                            cillum dolore eu\r\n                            fugiat nulla pariatur.\r\n                            <br><br>\r\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                            labore et\r\n                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\r\n                            ut aliquip\r\n                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n                            cillum dolore eu\r\n                            fugiat nulla pariatur.\r\n                        </p>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                        <img src=\"assets/images/advance-solution-1.png\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<section>\r\n    <div class=\"container\">\r\n        <div class=\"row info\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                <div class=\"panel\">\r\n                    <div class=\"panel-heading\">\r\n                        <h6>Enterprise Solution</h6>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                            labore et dolore magna aliqua.\r\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                            labore et dolore magna aliqua.\r\n                            <i class=\"icon icon-large\">\r\n                                <svg focusable=\"false\">\r\n                                    <use xlink:href=\"#icon_EnterpriseSol\"></use>\r\n                                </svg>\r\n                            </i>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                <div class=\"panel\">\r\n                    <div class=\"panel-heading\">\r\n                        <h6>Intelligent Process Automation</h6>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                            labore et dolore magna aliqua.\r\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                            labore et dolore magna aliqua.\r\n                            <i class=\"icon icon-large\">\r\n                                <svg focusable=\"false\">\r\n                                    <use xlink:href=\"#icon_Idea\"></use>\r\n                                </svg>\r\n                            </i>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<router-outlet></router-outlet>");

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
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-inner-page-header></app-inner-page-header> -->\r\n<div class=\"inner-banner\">\r\n    <img src=\"assets/images/inner-banner-career.jpg\">\r\n    <div class=\"page-title\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12 center\">\r\n        <h1>Career @ Arkedge</h1>\r\n        <h6>come and join us our family...</h6>\r\n    </div></div></div>\r\n    </div>\r\n</div>\r\n<section class=\"section-career\">\r\n    <div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12 col-md-10 div-center\">\r\n        <h6 class=\"center career\">Arkedge Technologies has a very ambitious plan for future and we are looking for energetic, motivated, ambitious team players who relish the challenge of joining a growing business in the field of IT, Resourcing and Training. You will have the opportunity to grow professionally and financially.\r\n        </h6>\r\n        </div>\r\n       <div *ngFor=\"let data of careerInfo\" class=\"col-lg-6 col-md-6 col-sm-12 career-info\">\r\n            <div class=\"panel\">\r\n                    <div class=\"panel-heading\">\r\n                       <h6>{{data.title}}</h6>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <p>{{data.info}}</p>\r\n                    </div>\r\n             </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12\">\r\n            <h6 class=\"text-wrap\">If you are interested in working in a fast-paced, challenging environment, Below are the Current Openings for open positions.</h6>\r\n\r\n            <table class=\"table table-striped table-bordered\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Job Code</th>\r\n                    <th>Job Title</th>\r\n                    <th>Location</th>\r\n                    <th>Target Date</th>\r\n                    <th>Details</th>\r\n                   </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let data of career\">\r\n                    <td>{{data.jobcode}}</td>\r\n                    <td>{{data.jobtitle}}</td>\r\n                    <td>{{data.location}}</td>\r\n                    <td>{{data.targetDate}}</td>\r\n                    <td><a href=\"assets/arkege.pdf\" download>View Details</a></td>\r\n                  </tr>\r\n                </tbody>\r\n                </table>\r\n\r\n            </div>\r\n\r\n\r\n        <div class=\"col-sm-12 col-md-10 div-center\">\r\n           <form>\r\n            <h2 class=\"center\">Post your profile here...</h2>\r\n                <div class=\"row form-group\">\r\n                    <div class=\"col\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Your Name\" name=\"name\">\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"yourMail\" placeholder=\"Your Mail\" name=\"yourMail\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row form-group\">\r\n                    <div class=\"col\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"phone\" placeholder=\"Phone Number\" name=\"phone\">\r\n                    </div>\r\n                    <div class=\"col custom-file mb-3\">\r\n                        <input type=\"file\" class=\"custom-file-input\" id=\"customFile\" name=\"filename\">\r\n                        <label class=\"custom-file-label\" for=\"customFile\">Attachment</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"subject\" placeholder=\"Subject\" name=\"subject\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" placeholder=\"Message\" rows=\"5\"></textarea>\r\n                </div>\r\n                <button type=\"submit\" class=\"btn btn-primary\">SUBMIT</button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>    \r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/client/client.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client/client.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-client.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n                    <h1>CLIENT TELE</h1>\n                    <h6>We value loyalty, creativity and productivity with results...</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<section class=\"client-info\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div *ngFor=\"let data of clientInfo; index as i\" class=\"col-lg-3 col-md-3 col-sm-12\">\n                <div class=\"panel\" (click)=\"open(content)\">\n                   <div class=\"panel-body\">\n                       <a><img src=\"assets/images/logo{{i+1}}.png\"></a>\n                    </div>\n                 </div>\n                 <ng-template #content let-modal>\n                    <div class=\"modal-header\">\n                        <h4 class=\"modal-title\">{{data.title}}</h4>\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                    </div>\n                <div class=\"modal-body\">\n                    \n                    <div class=\"panel\">\n                        <div class=\"panel-header\">\n                            <img src=\"assets/images/logo{{i+1}}.png\">\n                         </div>\n                        <div class=\"panel-body\">\n                            <p>{{data.desc}}</p>\n                            <a href=\"{{data.url}}\" target=\"_blank\">{{data.url}}</a>\n                         </div>\n                    </div>\n                </div>\n              </ng-template>\n             </div>\n        </div>\n    </div>\n</section>\n\n\n<section class=\"client-speak\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-12 \">\n                <h1>Client Speaks</h1>\n                <p>Ever-growing demand for Web Application solutions is driven by rapidly changing market conditions and\n                    technology progress. To streamline your business, we address those issues with our Internet and\n                    Intranet solutions. In addition we also provide you web / animation design services.</p>\n\n            </div>\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                 <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/zmEG-5zEmPw\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n        </div>\n    </div>\n</section>\n\n\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-inner-page-header></app-inner-page-header> -->\r\n<div class=\"inner-banner\">\r\n    <img src=\"assets/images/inner-banner-contact.jpg\">\r\n    <div class=\"page-title\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12 center\">\r\n                    <h1>We Are Here For You</h1>\r\n                    <h6>Hello. What can we help you with?</h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<section class=\"section-contact\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div *ngFor=\"let data of contactInfo\" class=\"col-lg-4 col-md-4 col-sm-12 contact-emails\">\r\n                <div class=\"panel\">\r\n                    <div class=\"panel-heading\">\r\n                        <h5>{{data.title}}</h5>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <div>\r\n                            <i class=\"icon icon-medium\">\r\n                                <svg focusable=\"false\">\r\n                                    <use attr.xlink:href=\"{{data.icon}}\"></use>\r\n                                </svg>\r\n                            </i>\r\n                        </div>\r\n                        <div>\r\n                            <p>{{data.subtitle}}</p>\r\n                        <a href=\"mailto:{{data.id}}\">{{data.id}}</a>\r\n                        <p>{{data.phone}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-sm-12 col-md-10 div-center\">\r\n                <form>\r\n                    <h1 class=\"center\">Feel free to contact...</h1>\r\n                    <div class=\"row form-group\">\r\n                        <div class=\"col\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Your Name\" name=\"name\">\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"yourMail\" placeholder=\"Your Mail\"\r\n                                name=\"yourMail\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row form-group\">\r\n                        <div class=\"col\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"phone\" placeholder=\"Phone Number\" name=\"phone\">\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"country\" placeholder=\"Country\" name=\"country\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"subject\" placeholder=\"Subject\" name=\"subject\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" placeholder=\"Message\"\r\n                            rows=\"5\"></textarea>\r\n                    </div>\r\n\r\n                    <button type=\"submit\" class=\"btn btn-primary\">SUBMIT</button>\r\n                </form>\r\n            </div>\r\n\r\n\r\n            <div *ngFor=\"let data of getTouch; index as i\" class=\"col-lg-4 col-md-4 col-sm-12 contact-address\">\r\n                <div class=\"panel\">\r\n                    <div class=\"panel-heading\">\r\n                        <img src={{data.img}}-{{i+1}}.jpg alt=\"{{data.subtitle}}\">\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <h5>{{data.subtitle}}</h5>\r\n                        <p>{{data.street_1}}</p>\r\n                        <p>{{data.street_2}}</p>\r\n                        <p>{{data.state}}</p>\r\n                        <p>{{data.contact}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"mapouter\">\r\n        <div class=\"gmap_canvas\"><iframe id=\"gmap_canvas\"\r\n                src=\"https://maps.google.com/maps?q=Arkedge%20Technologies%20Pvt.%20Ltd%20Msthal%20Height%2C%20Next%20to%20Marwah%20Estate%2C%20Saki%20Naka%2C%20Andheri%20(E)%2C%20Mumbai%2C%20Maharashtra%20400072&t=&z=13&ie=UTF8&iwloc=&output=embed\"\r\n                frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe><a\r\n                href=\"https://www.bitgeeks.net\"></a></div>\r\n    </div>\r\n\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-5 col-md-6 col-sm-12 copyright-note\">\r\n                <div class=\"logo\">\r\n                    <i class=\"icon icon-small\">\r\n                        <svg focusable=\"false\">\r\n                            <use xlink:href=\"#icon_logoFlat\"></use>\r\n                        </svg>\r\n                      </i>\r\n                </div>\r\n                <p>\r\n                    ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. The organization is making its presence felt on the engineering solution and services, Staffing and IT training circuit. Equipped with cross cultural operating experience; an asset, it drives the organization to deliver nothing but the best.\r\n                </p>\r\n\r\n                <p class=\"copyright\">\r\n                    <span>All rights reserved by Arkedge Technologies Pvt. Ltd.</span>\r\n                </p>\r\n            </div>\r\n\r\n            <div class=\"col-lg-2 col-md-3 col-sm-12\">\r\n                <h5>Quick Links</h5>\r\n                <ul class=\"footer-li\">\r\n                    <li>\r\n                        <a routerLink=\"OurProduct\" routerLinkActive=\"active\" skipLocationChange=true>Our\r\n                            Product</a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"Advancesolution\" routerLinkActive=\"active\" skipLocationChange=true>Advance\r\n                            Solution</a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"ManagedServiceComponent\" routerLinkActive=\"active\" skipLocationChange=true>Managed Service</a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"Company\" routerLinkActive=\"active\" skipLocationChange=true>COMPANY</a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"Career\" routerLinkActive=\"active\" skipLocationChange=true>CAREER</a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"Contactus\" routerLinkActive=\"active\" skipLocationChange=true>CONTACT US</a>\r\n                    </li>\r\n                </ul>\r\n                <div class=\"social-net\">\r\n\r\n                    <ul>\r\n                        <li><a href=\"https://www.facebook.com\" target=\"_blank\">\r\n                                <i class=\"icon icon-ex-small\">\r\n                                    <svg focusable=\"false\">\r\n                                        <use xlink:href=\"#icon_facebook\"></use>\r\n                                    </svg>\r\n                                </i>\r\n                            </a>\r\n                        </li>\r\n                        <li><a href=\"https://www.instagram.com\" target=\"_blank\">\r\n                                <i class=\"icon icon-ex-small\">\r\n                                    <svg focusable=\"false\">\r\n                                        <use xlink:href=\"#icon_instagram\"></use>\r\n                                    </svg>\r\n                                </i>\r\n                            </a>\r\n                        </li>\r\n                        <li><a href=\"https://www.twitter.com\" target=\"_blank\">\r\n                                <i class=\"icon icon-ex-small\">\r\n                                    <svg focusable=\"false\">\r\n                                        <use xlink:href=\"#icon_twitter\"></use>\r\n                                    </svg>\r\n                                </i>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"col-lg-5 col-md-3 col-sm-12 map\">\r\n                    <img src=\"assets/images/map.png\" alt=\"Map\">\r\n             </div>\r\n        </div>\r\n    </div>\r\n    <!-- /.container -->\r\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n<div class=\"container\">\r\n    <a class=\"navbar-brand\" routerLink=\"home\" skipLocationChange=true>\r\n      <i class=\"icon icon-small\">\r\n        <svg focusable=\"false\">\r\n          <use xlink:href=\"#icon_logoFlat\"></use>\r\n        </svg>\r\n      </i>\r\n      <div class=\"company-info\">\r\n        <span class=\"company-name\">ARKEDGE</span>\r\n        <span class=\"company-type\">TECHNOLOGIES</span>\r\n      </div>\r\n    </a>\r\n    <ul class=\"navbar-nav-list\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"OurProduct\" routerLinkActive=\"active\" skipLocationChange=true>Our\r\n          Product</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"Advancesolution\" routerLinkActive=\"active\" skipLocationChange=true>Advance\r\n          Solution</a>\r\n      </li>\r\n      <li class=\"nav-item nav-dropdown-list\">\r\n        <a class=\"nav-link\" routerLink=\" \" routerLinkActive=\"active\"\r\n          skipLocationChange=true>Managed Service</a>\r\n        <ul class=\"sub-nav\">\r\n          <li class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-8 col-md-8 col-sm-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngFor=\"let list of managedService\">\r\n                     <h6> {{list.name}}</h6>\r\n                      <li class=\"inner-list\" *ngFor=\"let inlist of list.managedServiceList\">\r\n                        <a routerLink=\"{{inlist.name}}\" routerLinkActive=\"active\" skipLocationChange=true>{{inlist.name | createSpace}}</a>\r\n                      </li>\r\n              </div>\r\n  </div>\r\n  </div>\r\n  <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n         <a class=\"nav-link\" routerLink=\"Technology\" routerLinkActive=\"active\" skipLocationChange=true>\r\n          <img src=\"assets/images/inner-banner-technology.jpg\">\r\n            Technology\r\n          </a>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n          <a class=\"nav-link\" routerLink=\"Industries\" routerLinkActive=\"active\" skipLocationChange=true>\r\n          <img src=\"assets/images/inner-banner-industries.jpg\">\r\n            Industries\r\n          </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  </div>\r\n  </li>\r\n  </ul>\r\n  </li>\r\n\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"Company\" routerLinkActive=\"active\" skipLocationChange=true>COMPANY</a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"Career\" routerLinkActive=\"active\" skipLocationChange=true>CAREER</a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"Contactus\" routerLinkActive=\"active\" skipLocationChange=true>CONTACT US</a>\r\n  </li>\r\n  <li class=\"nav-item tele-no\">\r\n    <a class=\"nav-link\" href=\"mailto:info@arkedge.com\">\r\n      <i class=\"icon icon-ex-small\">\r\n        <svg focusable=\"false\">\r\n          <use xlink:href=\"#icon_Email\"></use>\r\n        </svg>\r\n      </i>\r\n    </a>\r\n  </li>\r\n  <li class=\"nav-item tele-no\">\r\n    <a class=\"nav-link\">\r\n      <i class=\"icon icon-ex-small\">\r\n        <svg focusable=\"false\">\r\n          <use xlink:href=\"#icon_phone\"></use>\r\n        </svg>\r\n      </i>\r\n      321-321-6544\r\n    </a>\r\n  </li>\r\n  <li class=\"nav-item quick-link\">\r\n    <a class=\"nav-link\" (click)=\"slideToggel()\">\r\n      <i class=\"icon icon-ex-small\">\r\n        <svg focusable=\"false\">\r\n          <use xlink:href=\"#icon_menu\"></use>\r\n        </svg>\r\n      </i>\r\n    </a>\r\n  </li>\r\n  </ul>\r\n</div>\r\n</nav>\r\n\r\n<div class=\"slider-menu\" [ngClass]=\"isOpen ? '' : 'active'\">\r\n  <div class=\"slider-menu-header\">\r\n  <a class=\"close-slide\" (click)=\"slideToggel()\">\r\n    <i class=\"icon icon-ex-small\">\r\n      <svg focusable=\"false\">\r\n        <use xlink:href=\"#icon_close\"></use>\r\n      </svg>\r\n    </i>\r\n  </a>\r\n\r\n  <a class=\"navbar-brand\">\r\n    <i class=\"icon icon-small\">\r\n      <svg focusable=\"false\">\r\n        <use xlink:href=\"#icon_logo_color\"></use>\r\n      </svg>\r\n    </i>\r\n    <div>\r\n      <span class=\"company-name\">ARKEDGE</span>\r\n      <span class=\"company-type\">TECHNOLOGIES</span>\r\n    </div>\r\n  </a>\r\n</div>\r\n  <ul>\r\n    <li *ngFor=\"let item of list; index as i\" class=\"menu-list\">\r\n      <a (click)=\"slideToggel()\" routerLink=\"{{item.name}}\" routerLinkActive=\"active\" skipLocationChange=true>{{item.name | createSpace}}</a>\r\n    </li>\r\n  </ul>\r\n  <div class=\"slider-footer-contact\">\r\n    <a class=\"nav-link\" href=\"mailto:info@arkedge.com\">\r\n      <i class=\"icon icon-ex-small\">\r\n        <svg focusable=\"false\">\r\n          <use xlink:href=\"#icon_Email\"></use>\r\n        </svg>\r\n      </i>\r\n      info@arkedge.com\r\n    </a>\r\n  \r\n    <a class=\"nav-link\">\r\n      <i class=\"icon icon-ex-small\">\r\n        <svg focusable=\"false\">\r\n          <use xlink:href=\"#icon_phone\"></use>\r\n        </svg>\r\n      </i>\r\n      321-321-6544\r\n    </a>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"overlay\" [ngClass]=\"isOpen ? '' : 'active'\" (click)=\"slideToggel()\">\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-banner\">\r\n    <ngb-carousel #carousel interval=\"5000\" [showNavigationArrows]=\"showNavigationArrows\" [pauseOnHover]=\"pauseOnHover\"\r\n        (slide)=\"onSlide($event)\">\r\n        <ng-template ngbSlide *ngFor=\"let info of banner; index as i\">\r\n            <div class=\"container\">\r\n                <div class=\"carousel-caption\">\r\n                    <h1>{{info.title}}</h1>\r\n                    <h1>{{info.title_2}}</h1>\r\n                    <h3>{{info.description}}</h3>\r\n                    <button type=\"submit\" class=\"btn btn-primary\">LEARN MORE</button>\r\n                    <button type=\"submit\" class=\"btn btn-warning\">CONTACT US</button>\r\n                </div>\r\n                <div class=\"info-img\">\r\n                    <img src=\"assets/images/banner-{{i+1}}-info.png\" alt=\"My image {{i + 1}} description\">\r\n                </div>\r\n            </div>\r\n            <div class=\"picsum-img-wrapper\">\r\n                <img src=\"assets/images/banner-1.jpg\" alt=\"My image {{i + 1}} description\">\r\n            </div>\r\n\r\n        </ng-template>\r\n    </ngb-carousel>\r\n</div>\r\n<section class=\"section-info\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 center\">\r\n                <h1>Expand Your Business Through a <span class=\"heading-highlight\">Strong Virtual Presence</span></h1>\r\n                <h6>\r\n                    <b>The ultimate objective behind our every move is to give our customers utmost satisfaction with\r\n                        our\r\n                        quality services and support.</b><br>\r\n                    We try the best possible way out to provide our customers with top-notch services and at affordable\r\n                    rates. So, give us a Oppurtunity to serve you !\r\n                </h6>\r\n            </div>\r\n            <div *ngFor=\"let item of solution\" class=\"col-lg-4 col-md-4 col-sm-12 panel-container\">\r\n                <div class=\"panel\">\r\n                    <div class=\"panel-front {{item.color}}\">\r\n                        <div class=\"panel-heading\">\r\n                            <div class=\"icon-circle circle-bg\">\r\n                                <i class=\"icon icon-medium\">\r\n                                    <svg focusable=\"false\">\r\n                                        <use attr.xlink:href=\"{{item.icon}}\"></use>\r\n                                    </svg>\r\n                                </i>\r\n                            </div>\r\n                            <h5>{{item.title}}</h5>\r\n                        </div>\r\n                        <div class=\"panel-body\">\r\n\r\n                            <p *ngFor=\"let data of item.list\">{{data.name}}</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"panel-back {{item.color}}\">\r\n                        <h5>{{item.title}}</h5>\r\n                        <p>{{item.description}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<section class=\"section-our-products\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 center\">\r\n                <h1>OUR <span class=\"heading-highlight\">PRODUCTS</span></h1>\r\n            </div>\r\n            <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\" [config]=\"slideConfig2\">\r\n            <div ngxSlickItem class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                <div class=\"panel\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-6 col-md-6 col-sm-12 v-flex\">\r\n                            <img src=\"assets/images/01.png\">\r\n                        </div>\r\n                        <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                            <h5>Product Name 1</h5>\r\n                            <p>\r\n                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                                labore\r\n                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.\r\n                            </p>\r\n                            <ul>\r\n                                <li>\r\n                                    Robust version design\r\n                                </li>\r\n                                <li>\r\n                                    Cross-platform architecture\r\n                                </li>\r\n                                <li>\r\n                                    Wide variety of integration requirements\r\n                                </li>\r\n                            </ul>\r\n                            <button type=\"submit\" class=\"btn btn-primary\">KNOW MORE</button>\r\n                \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div ngxSlickItem class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                <div class=\"panel\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-6 col-md-6 col-sm-12 v-flex\">\r\n                            <img src=\"assets/images/01.png\">\r\n                        </div>\r\n                        <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                            <h5>Product Name 2</h5>\r\n                            <p>\r\n                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                                labore\r\n                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.\r\n                            </p>\r\n                            <ul>\r\n                                <li>\r\n                                    Robust version design\r\n                                </li>\r\n                                <li>\r\n                                    Cross-platform architecture\r\n                                </li>\r\n                                <li>\r\n                                    Wide variety of integration requirements\r\n                                </li>\r\n                            </ul>\r\n                            <button type=\"submit\" class=\"btn btn-primary\">KNOW MORE</button>\r\n                \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div ngxSlickItem class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                <div class=\"panel\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-6 col-md-6 col-sm-12 v-flex\">\r\n                            <img src=\"assets/images/01.png\">\r\n                        </div>\r\n                        <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                            <h5>Product Name 3</h5>\r\n                            <p>\r\n                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                                labore\r\n                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.\r\n                            </p>\r\n                            <ul>\r\n                                <li>\r\n                                    Robust version design\r\n                                </li>\r\n                                <li>\r\n                                    Cross-platform architecture\r\n                                </li>\r\n                                <li>\r\n                                    Wide variety of integration requirements\r\n                                </li>\r\n                            </ul>\r\n                            <button type=\"submit\" class=\"btn btn-primary\">KNOW MORE</button>\r\n                \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n          </ngx-slick-carousel>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"section-sevices\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 center\">\r\n                <h1>INDUSTRIES <span class=\"heading-highlight\">WE SERVE</span></h1>\r\n                <h6>\r\n                    <b>We ensure excellence in service through understanding of our client's business and their unique\r\n                        requirements.</b><br>\r\n\r\n                    Due to our close relationships and constant interactions with clients,<br>\r\n\r\n                    we have developed solid understanding and insight in our focus industries that include:\r\n                </h6>\r\n            </div>\r\n\r\n            <div *ngFor=\"let item of sevices\" class=\"col-lg-4 col-md-4 col-sm-12\">\r\n                <div class=\"panel\">\r\n                    <div class=\"panel-heading\">\r\n                        <div class=\"icon-circle {{item.color}}\">\r\n                            <i class=\"icon icon-medium\">\r\n                                <svg focusable=\"false\">\r\n                                    <use attr.xlink:href=\"{{item.icon}}\"></use>\r\n                                </svg>\r\n                            </i>\r\n                        </div>\r\n                        <h5>{{item.title}}</h5>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <p>{{item.description}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"section-projects\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 center\">\r\n                <h1>OUR RECENT<span class=\"heading-highlight\"> SOLUTIONS</span></h1>\r\n                <h6>\r\n                    <b>We bring powerful TOOLS for enhance your productivity.</b><br>\r\n\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.<br> Proin\r\n                    gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.\r\n                </h6>\r\n            </div>\r\n        </div>\r\n        <div class=\"project-grid\">\r\n            <li *ngFor=\"let info of projects; index as i\" class=\"p2\">\r\n                <a>\r\n                    <figure>\r\n                        <img src=\"{{info.imgPath}}-{{i + 1}}.jpg\" alt=\"Experience\">\r\n                        <div class=\"show-more-overlay\"></div>\r\n                        <figcaption>\r\n                            <h2 class=\"show_more-title\">{{info.title}}</h2>\r\n                            <p class=\"show_more-desc\">\r\n                                {{info.description}}\r\n                            </p>\r\n                            <button *ngIf=\"i === 0\" type=\"submit\" class=\"btn btn-primary\">LEARN MORE</button>\r\n                        </figcaption>\r\n                    </figure>\r\n                </a>\r\n            </li>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<div class=\"clear-float\"></div>\r\n<section class=\"clients\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 center\">\r\n                <h1>HAPPY <span class=\"heading-highlight\">CLIENTS</span></h1>\r\n                <h6>\r\n                    consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus\r\n                    accumsan et viverra justo commodo. <br>Proin sodales pulvinar tempor.lacus accumsan et viverra justo\r\n                    commodo. Proin sodales pulvinar tempor.</h6>\r\n            </div>\r\n\r\n            <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\" [config]=\"slideConfig\">\r\n                <div ngxSlickItem *ngFor=\"let client of client; index as i\" class=\"slide col-lg-3 col-md-3 col-sm-12\">\r\n                    <img src=\"assets/images/logo{{i+1}}.png\" alt=\"\" width=\"100%\">\r\n                </div>\r\n            </ngx-slick-carousel>\r\n\r\n            <!-- <div *ngFor=\"let client of client; index as i\" class=\"col-lg-3 col-md-3 col-sm-12\">\r\n                <img src=\"{{client.img}}-{{i+1}}.jpg\" alt=\"client\">\r\n            </div> -->\r\n\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"testimonials\">\r\n    <img src=\"assets/images/testimonials.jpg\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 center\">\r\n                <h1>TESTIMONIALS</h1>\r\n                <ngb-carousel #carousel interval=\"5000\" [showNavigationArrows]=\"showNavigationArrows\"\r\n                    [pauseOnHover]=\"pauseOnHover\" (slide)=\"onSlide($event)\">\r\n                    <ng-template ngbSlide *ngFor=\"let info of testimonials; index as i\">\r\n                        <p>\r\n                            {{info.clientView_1}}\r\n                        </p>\r\n                        <p>\r\n                            {{info.clientView_2}}\r\n                        </p>\r\n                        <p>\r\n                            {{info.clientView_3}}\r\n                        </p>\r\n                        <p>\r\n                            - {{info.clientName}}\r\n                        </p>\r\n\r\n                    </ng-template>\r\n                </ngb-carousel>\r\n\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</section>\r\n<section class=\"contact-info\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                <h1>WHAT SET US <span class=\"heading-highlight\">APART</span></h1>\r\n                <p class=\"set-part\">\r\n                    We ensure excellence in service through understanding of our client's business and their unique\r\n                    requirements.\r\n\r\n                    Due to our close relationships and constant interactions with clients,\r\n\r\n                    we have developed solid understanding and insight in our focus industries that include:\r\n                </p>\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                        <div>\r\n                            <h6>Address</h6>\r\n                            <p>703, Wing \"B\", Galaxy L.X.APT.<br>\r\n\r\n                                Navre Park, Ambarnath (W),<br>\r\n\r\n                                Thane-421501, Maharashtra,<br>\r\n\r\n                                INDIA</p>\r\n\r\n                            <h6>Contact</h6>\r\n                            <p> \r\n                             <a class=\"email-link\" href=\"mailto:info@arkedge.com\">info@arkedge.com</a><br>\r\n                             Calling : 321-321-6544\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                        <div>\r\n                            <h6>Working Hours</h6>\r\n                            <p>Monday To Friday: 11AM - 8PM<br>\r\n\r\n                                Week-End: 11 AM - 2PM</p>\r\n\r\n\r\n                            <h6>Socials</h6>\r\n                            <div class=\"social-net\">\r\n\r\n                                <ul>\r\n                                    <li><a href=\"https://www.facebook.com\" target=\"_blank\">\r\n                                            <i class=\"icon icon-ex-small\">\r\n                                                <svg focusable=\"false\">\r\n                                                    <use xlink:href=\"#icon_facebook\"></use>\r\n                                                </svg>\r\n                                            </i>\r\n                                            <span>Facebook</span>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li><a href=\"https://www.instagram.com\" target=\"_blank\">\r\n                                            <i class=\"icon icon-ex-small\">\r\n                                                <svg focusable=\"false\">\r\n                                                    <use xlink:href=\"#icon_instagram\"></use>\r\n                                                </svg>\r\n                                            </i>\r\n                                            <span>Tweeter</span>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li><a href=\"https://www.twitter.com\" target=\"_blank\">\r\n                                            <i class=\"icon icon-ex-small\">\r\n                                                <svg focusable=\"false\">\r\n                                                    <use xlink:href=\"#icon_twitter\"></use>\r\n                                                </svg>\r\n                                            </i>\r\n                                            <span>Instragram</span>\r\n                                        </a>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                <h1>GET IN <span class=\"heading-highlight\">TOUCH</span></h1>\r\n                <form>\r\n                    <div class=\"row form-group\">\r\n                        <div class=\"col\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Your Name\" name=\"name\">\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Your Mail\" name=\"yourMail\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row form-group\">\r\n                        <div class=\"col\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"phone\" placeholder=\"Phone Number\" name=\"phone\">\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"subject\" placeholder=\"Subject\" name=\"subject\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"7\"></textarea>\r\n                    </div>\r\n\r\n                    <button type=\"submit\" class=\"btn btn-primary\">SUBMIT</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/industries/industries.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/industries/industries.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\r\n    <img src=\"assets/images/inner-banner-industries.jpg\">\r\n    <div class=\"page-title\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12 center\">\r\n                    <h1>Industries</h1>\r\n                    <h6>Transforming industries with smarter ways</h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<section class=\"section-advance-solution\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-9 col-md-9 col-sm-12 div-center center\">\r\n                <p>\r\n                    ARKEDGE technologies approaches each business as an individual so\r\n                    that we can provide you with IT solutions that suit your needs.\r\n                    We offer holistic solutions, consisting of different offerings.\r\n                </p>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"section-industy-info\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div *ngFor=\"let data of industryInfo\" class=\"col-lg-4 col-md-4 col-sm-12 col\">\r\n                <div class=\"panel\">\r\n                    <div class=\"panel-heading\">\r\n                        <i class=\"icon icon-large\">\r\n                            <svg focusable=\"false\">\r\n                                <use attr.xlink:href=\"#{{data.icon}}\"></use>\r\n                            </svg>\r\n                        </i>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <p>{{data.title}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</section>");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-news.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n        <h1>News Update</h1>\n        <h6>News, Press release and Media reports</h6>\n    </div></div></div>\n    </div>\n</div>\n<div class=\"container section-news\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n        <ul ngbNav #nav=\"ngbNav\" [(activeId)]=\"active\" class=\"nav-tabs\">\n            <li [ngbNavItem]=\"1\">\n              <a ngbNavLink>News</a>\n              <ng-template ngbNavContent>\n                <li *ngFor=\"let data of news; index as i\" class=\"p2 grid-li\">\n                    <div class=\"panel\">\n                        <div class=\"panel-heading\">\n                           <img src={{data.img}}-{{i+1}}.jpg alt=\"{{data.subtitle}}\">\n                        </div>\n                        <div class=\"panel-body\">\n                            <p><b>{{data.desc_1}}</b></p>\n                            <p>{{data.desc_2}}</p>\n                           \n                        </div>\n                 </div>\n                </li>\n            </ng-template>\n            </li>\n            <li [ngbNavItem]=\"2\">\n                <a ngbNavLink>Events</a>\n                <ng-template ngbNavContent>\n                \n              </ng-template>\n              </li>\n              <li [ngbNavItem]=\"3\">\n                <a ngbNavLink>Webinars</a>\n                <ng-template ngbNavContent>\n                  \n              </ng-template>\n              </li>\n              <li [ngbNavItem]=\"4\">\n                <a ngbNavLink>Press Releases</a>\n                <ng-template ngbNavContent>\n                \n              </ng-template>\n              </li>\n              <li [ngbNavItem]=\"5\">\n                <a ngbNavLink>Video Gallery</a>\n                <ng-template ngbNavContent>\n                 \n              </ng-template>\n              </li>\n          </ul>\n          \n          <div [ngbNavOutlet]=\"nav\" class=\"mt-4\"></div>\n    </div> </div>\n</div>\n\n<section class=\"news-video\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n\n                <div class=\"video\">\n                    <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/zmEG-5zEmPw\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n                </div>\n\n                <h6 class=\"center\">\n                    Arkedge Technologies has a very ambitious plan for future and we are looking for energetic, motivated, ambitious team players who relish the challenge of joining a growing business in the field of IT, Resourcing and Training. You will have the opportunity to grow professionally and financially.\n                </h6>\n            </div>\n        </div>\n    </div>\n</section>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ourproduct/ourproduct.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ourproduct/ourproduct.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\r\n    <img src=\"assets/images/inner-banner-ourproduct.jpg\">\r\n    <div class=\"page-title\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12 center\">\r\n                    <h1>Our Products</h1>\r\n                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<section class=\"section-product\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 col-md-8 div-center\">\r\n                <h6 class=\"center career\">\r\n                    ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. The organization is making its presence felt on the engineering solution and services, Staffing and IT training circuit. Equipped with cross cultural operating experience; an asset, it drives the organization to deliver nothing but the best.\r\n                </h6>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"section-product-detail\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                <h2>Product Name 1</h2>\r\n                <p>\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\r\n                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.\r\n                </p>\r\n                <ul>\r\n                    <li>\r\n                        Robust version design\r\n                    </li>\r\n                    <li>\r\n                        Cross-platform architecture\r\n                    </li>\r\n                    <li>\r\n                        Wide variety of integration requirements\r\n                    </li>\r\n                </ul>\r\n                <button type=\"submit\" class=\"btn btn-primary\">Inquiry</button>\r\n                <button type=\"submit\" class=\"btn btn-warning\">Demo</button>\r\n\r\n            </div>\r\n\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                <img src=\"assets/images/01.png\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                <img src=\"assets/images/02.png\">\r\n            </div>\r\n\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                <h2>Product Name 2</h2>\r\n                <p>\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\r\n                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.\r\n                </p>\r\n                <ul>\r\n                    <li>\r\n                        Robust version design\r\n                    </li>\r\n                    <li>\r\n                        Cross-platform architecture\r\n                    </li>\r\n                    <li>\r\n                        Wide variety of integration requirements\r\n                    </li>\r\n                </ul>\r\n                <button type=\"submit\" class=\"btn btn-primary\">Inquiry</button>\r\n                <button type=\"submit\" class=\"btn btn-warning\">Demo</button>\r\n\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                <h2>Product Name 3</h2>\r\n                <p>\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\r\n                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.\r\n                </p>\r\n                <ul>\r\n                    <li>\r\n                        Robust version design\r\n                    </li>\r\n                    <li>\r\n                        Cross-platform architecture\r\n                    </li>\r\n                    <li>\r\n                        Wide variety of integration requirements\r\n                    </li>\r\n                </ul>\r\n                <button type=\"submit\" class=\"btn btn-primary\">Inquiry</button>\r\n                <button type=\"submit\" class=\"btn btn-warning\">Demo</button>\r\n\r\n            </div>\r\n\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                <img src=\"assets/images/01.png\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"section-product\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 center\">\r\n                <h1>Product Features</h1>\r\n                <h6>Transforming industries with smarter ways</h6>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n                <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\" [config]=\"slideConfig\">\r\n                    <div ngxSlickItem *ngFor=\"let product of products; index as i\" class=\"slide\">\r\n                        <img src=\"assets/images/0{{i+1}}.png\" alt=\"\" width=\"100%\">\r\n                        <p class=\"col-sm-12 center\">{{product.title}}</p>\r\n                    </div>\r\n                </ngx-slick-carousel>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectengineering/projectengineering.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projectengineering/projectengineering.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-projectengineering.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n                    <h1>SOFTWARE ENGINEERING</h1>\n                    <h6>Softwares : Data Life-cycle Management : IT Staffing & Training</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<section class=\"manage-service-tab inner-nav-tab\">\n    <div class=\"tab-navigation\">\n        <div class=\"col-sm-12\">\n            <div class=\"container\">\n                <ul ngbNav #nav=\"ngbNav\" [(activeId)]=\"active\" class=\"nav-tabs\">\n                    <li [ngbNavItem]=\"1\">\n                        <a ngbNavLink>Product Engineering</a>\n                        <ng-template ngbNavContent>\n                            <section class=\"section-project-engineering\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12\">\n                                            <p class=\"running-text\">\n                                                Competitive pressures, reduced time-to-market, increased demands of\n                                                customers, and globalization are\n                                                driving global product companies to explore the offshore route. A\n                                                reliable offshore partner can play\n                                                a key role from concept to the launch of the product. Product companies\n                                                have increased their\n                                                competitive advantage by partnering with offshore players for product\n                                                development.\n                                            </p>\n                                            <p>\n                                                We have been involved in architecting and building .NET driven business\n                                                solutions right from the\n                                                inception. Our .NET CoE has proven expertise in building world class\n                                                products using the latest\n                                                Microsoft® technologies and standards. Our knowledge of Microsoft® .NET\n                                                technologies and product\n                                                development methodologies enables us to work with customers across\n                                                domains and successfully address\n                                                their functional, usability, performance and scalability requirements.\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </section>\n\n                            <section class=\"methodologies\">\n                                <img src=\"assets/images/managservice/methodologies.jpg\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12 center\">\n                                            <h1>Our Methodology</h1>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"row\">\n                                        <ul class=\"panel-container\">\n\n                                            <li *ngFor=\"let item of solution; index as i\">\n                                                <div class=\"icon-circle\">\n                                                    <i class=\"icon icon-medium\">\n                                                        <svg focusable=\"false\">\n                                                            <use attr.xlink:href=\"{{item.icon}}\"></use>\n                                                        </svg>\n                                                    </i>\n                                                </div>\n                                                <h6>{{item.title}}</h6>\n                                                <ul class=\"info-bar\">\n                                                    <li>\n                                                        {{item.info}}\n                                                    </li>\n                                                </ul>\n\n                                            </li>\n                                        </ul>\n\n                                    </div>\n                                </div>\n                            </section>\n\n                            <section class=\"engeering-grap\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-6 col-lg-6 col-sm-12\">\n                                            <h6>\n                                                We practice agile development methodologies to help you take advantage\n                                                of emerging market\n                                                opportunities. We develop software in time-boxed iterations; each\n                                                iteration is a discrete project\n                                                encompassing all the PDLC stages. Our agile software project is capable\n                                                of releasing standalone\n                                                working software at the end of each iteration.\n                                            </h6>\n                                        </div>\n\n                                        <div class=\"col-md-6 col-lg-6 col-sm-12\">\n                                            <img src=\"assets/images/managservice/engeering-grap.jpg\">\n                                        </div>\n                                        <div class=\"col-sm-12\">\n                                            <p>\n                                                Our solution architects also help you realize your vision of services\n                                                based products through\n                                                implementation of the Service Oriented Architecture (SOA) approach. They\n                                                provide consulting,\n                                                implementation, and re-engineering of existing product architectures\n                                                using the SOA framework<br><br>\n\n                                                The software products industry depends on bringing new concepts, new\n                                                versions and new features to\n                                                the market quickly. At the same time, development costs must be low,\n                                                predictable, and flexible. We\n                                                can help you address these daunting and seemingly conflicting\n                                                requirements for software products.\n\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </section>\n\n\n                            <section class=\"our-services-section\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12\">\n                                            <div class=\"container our-services\">\n                                            <div class=\"row\">\n                                                <div class=\"col-md-4 col-lg-4 col-sm-12 triangle\">\n                                                    <div class=\"v-center\">\n                                                        <div class=\"logo-circle\">\n                                                            <i class=\"icon icon-large\">\n                                                                <svg focusable=\"false\">\n                                                                    <use xlink:href=\"#icon_logoFlat\"></use>\n                                                                </svg>\n                                                            </i>\n                                                        </div>\n                                                        <h5>\n                                                            Arkedge Technologies<br>\n                                                            Services\n                                                        </h5>\n                                                    </div>\n                                                </div>\n\n                                                <div class=\"col-md-8 col-lg-8 col-sm-12 v-flex\">\n                                                    <ul>\n                                                        <li>\n                                                            Robust version design\n                                                        </li>\n                                                        <li>\n                                                            Cross-platform architecture\n                                                        </li>\n                                                        <li>\n                                                            Wide variety of integration requirements\n                                                        </li>\n                                                        <li>\n                                                            Comprehensive packaging\n                                                        </li>\n                                                        <li>\n                                                            Support over a range of environments\n                                                        </li>\n                                                    </ul>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    </div>\n                                </div>\n                            </section>\n\n\n                            <section class=\"engeering-grap\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12\">\n                                            <p>\n                                                Our solution architects also help you realize your vision of services\n                                                based products through\n                                                implementation of the Service Oriented Architecture (SOA) approach. They\n                                                provide consulting,\n                                                implementation, and re-engineering of existing product architectures\n                                                using the SOA framework\n                                                <br> <br>\n                                                The software products industry depends on bringing new concepts, new\n                                                versions and new features to\n                                                the market quickly. At the same time, development costs must be low,\n                                                predictable, and flexible. We\n                                                can help you address these daunting and seemingly conflicting\n                                                requirements for software products.\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </section>\n\n                        </ng-template>\n                    </li>\n\n                    <li [ngbNavItem]=\"2\">\n                        <a ngbNavLink>Application Development</a>\n                        <ng-template ngbNavContent>\n                            <div class=\"container app-development\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-12\">\n                                        <p class=\"running-text\">\n                                            Arkedge has a well-defined and mature application development service\n                                            offering. Arkedge application development model covers all phases of the\n                                            Software Development Life Cycle (SDLC), beginning with transforming business\n                                            requirements into project functional requirements, development, quality,\n                                            testing, implementation, training and application support. Our distributed\n                                            delivery methodology effectively leverages the onsite subject matter\n                                            expertise and the offshore development teams, resulting in cost-effective\n                                            solutions. Each of the development phases can be defined with metrics and\n                                            subsequently tracked with the monitoring tools and well defined project\n                                            management and execution processes.\n                                        </p>\n                                        <p>\n                                            Arkedge provides outsourced software development services for in-house\n                                            applications, across the project lifecycle. We partner with you from\n                                            internal proposals and budgeting, through project approvals, all the way to\n                                            delivery, training, maintenance and support. Our flexible offshore software\n                                            development model allows companies to maximize their ROI, while maintaining\n                                            complete control over projects.\n                                        </p>\n\n                                        <p>\n                                            <img src=\"assets/images/managservice/app-dev-met.jpg\" align=\"right\">\n                                            At each stage of the application development cycle we bring people, process\n                                            and technology expertise to pro-actively guide you through the challenges of\n                                            meeting application requirements within budget, time and quality. A key\n                                            aspect of Arkedge's application development methodology is the early and\n                                            extensive use of screen mockups or wireframes. In our experience, mockups\n                                            and wireframes speed up initial approvals, improve the reliability of\n                                            requirements gathering and documentation, and greatly enhance user\n                                            acceptance and utilization of the delivered application.\n\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <section class=\"about-key-diff\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n\n                                        <div class=\"col-md-8 col-lg-8 col-sm-12\">\n                                            <h1>Key Differentiators</h1>\n                                            <ul>\n                                                <li *ngFor=\"let key of keydiff\">\n                                                    {{key.list}}\n                                                </li>\n                                            </ul>\n                                        </div>\n\n                                        <div class=\"col-md-4 col-lg-4 col-sm-12 v-flex\">\n                                            <img src=\"assets/images/managservice/key-difference.png\">\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </section>\n\n                            <section>\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12\">\n                                            <p>\n                                                Systems modelling with analysis and design using UML tools Customers can\n                                                be rest assured that Arkedge will provide technical follow-through\n                                                during the planning, design, development and deployment of every\n                                                project. It also offers on-going management, maintenance and monitoring\n                                                of all developed applications and the systems they run on.\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </section>\n\n                        </ng-template>\n                    </li>\n\n                    <li [ngbNavItem]=\"3\">\n                        <a ngbNavLink>UX/UI Development</a>\n                        <ng-template ngbNavContent>\n                            <div class=\"container\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-12\">\n                                        <p class=\"running-text\"> \n                                            ARKEDGE is a rapidly growing professionally managed organization with\n                                            competent and qualified brass at the helm of the affairs. The organization\n                                            is making its presence felt on the engineering solution and services,\n                                            Staffing and IT training circuit. Equipped with cross cultural operating\n                                            experience; an asset, it drives the organization to deliver nothing but the\n                                            best.\n                                        </p>\n                                        <p>\n                                            We specialize in improving operational performance and IT delivery.\n                                            We do this by improving the way our clients use people, processes and\n                                            technologies. Here is the place to envision, discover and fulfil your\n                                            technology needs.\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <section class=\"ui-ux-info\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div *ngFor=\"let item of uiUxInfo\" class=\"col-md-4 col-lg-4 col-sm-12\">\n                                            <div class=\"panel center\">\n                                                <div class=\"panel-heading\">\n                                                    <div class=\"icon-circle\">\n                                                        <i class=\"icon icon-large\">\n                                                            <svg focusable=\"false\">\n                                                                <use attr.xlink:href=\"{{item.icon}}\"></use>\n                                                            </svg>\n                                                        </i>\n                                                    </div>\n                                                    <h5>{{item.title}}</h5>\n                                                </div>\n                                                <div class=\"panel-body\">\n                                                    <p>{{item.description}}</p>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </section>\n\n                            <section class=\"ui-ux-process\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12 center\">\n                                            <h1>UX/UI Development Process</h1>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n\n                                        <div class=\"col-md-3 col-lg-2 col-sm-12\">\n                                            <div class=\"icon-circle\">\n                                                <i class=\"icon icon-large\">\n                                                    <svg focusable=\"false\">\n                                                        <use xlink:href=\"#icon_strategy\"></use>\n                                                    </svg>\n                                                </i>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-9 col-lg-10 col-sm-12\">\n                                            <h6>UX/UI Development Process</h6>\n                                            <p>Business requirements define the value proposition of a product. They are\n                                                the answers to why a new product is requested. As the visualized form of\n                                                requirements, user interface designs should be also based on business\n                                                requirements to satisfy the strategic level objectives of creating that\n                                                product.</p>\n                                        </div>\n\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-9 col-lg-10 col-sm-12\">\n                                            <h6>Understand your Users</h6>\n                                            <p>\"Designing for everybody\" is not a feasible and effective strategy in\n                                                terms of usability. Interfaces of a product are usable if they are good\n                                                fit for its users. Thus user interface design should be based on the\n                                                profile of target user groups.</p>\n                                        </div>\n\n                                        <div class=\"col-md-3 col-lg-2 col-sm-12\">\n                                            <div class=\"icon-circle\">\n                                                <i class=\"icon icon-large\">\n                                                    <svg focusable=\"false\">\n                                                        <use xlink:href=\"#icon_understanding\"></use>\n                                                    </svg>\n                                                </i>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-3 col-lg-2 col-sm-12\">\n                                            <div class=\"icon-circle\">\n                                                <i class=\"icon icon-large\">\n                                                    <svg focusable=\"false\">\n                                                        <use xlink:href=\"#icon_product\"></use>\n                                                    </svg>\n                                                </i>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-9 col-lg-10 col-sm-12\">\n                                            <h6>Define your Requirements & Content</h6>\n                                            <p>User interfaces are composed not only of functional requirements (tasks)\n                                                but also of content requirements. Therefore, in parallel to interaction\n                                                design (based on functional requirements), the information architecture\n                                                (based on content requirements) should be also designed. The main\n                                                objective of information architecture design is to identify content\n                                                requirements, define content categories, and finalize the navigation\n                                                structures.</p>\n                                        </div>\n\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-9 col-lg-10 col-sm-12\">\n                                            <h6>Shape your Product</h6>\n                                            <p>Our UX designers then convert interaction designs and information\n                                                architectures into user interfaces by applying UX design and usability\n                                                principles and guidelines. They design low-fidelity prototypes by\n                                                sketching or using prototyping tools. Then our Visual designers convert\n                                                low-fidelity prototypes into high-fidelity visual designs with the most\n                                                aesthetic color, metaphor, and font selections.</p>\n                                        </div>\n\n                                        <div class=\"col-md-3 col-lg-2 col-sm-12\">\n                                            <div class=\"icon-circle\">\n                                                <i class=\"icon icon-large\">\n                                                    <svg focusable=\"false\">\n                                                        <use xlink:href=\"#icon_value\"></use>\n                                                    </svg>\n                                                </i>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </section>\n\n                        </ng-template>\n                    </li>\n\n                    <li [ngbNavItem]=\"4\">\n                        <a ngbNavLink>Software Testing & QA</a>\n                        <ng-template ngbNavContent>\n                            <div class=\"container\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-12\">\n                                        <p class=\"running-text\">\n                                            ARKEDGE is a rapidly growing professionally managed organization with\n                                            competent and\n                                            qualified brass at the helm of the affairs.\n                                        </p>\n                                        <p>\n                                            from different backgrounds\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </ng-template>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n\n\n    <div [ngbNavOutlet]=\"nav\"></div>\n\n\n</section>");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-client.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n                    <h1>TESTIMONIALS</h1>\n                    <h6>We value loyalty, creativity and productivity with results...</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<section class=\"client-info\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div *ngFor=\"let info of testimonials; index as i\" class=\"col-lg-6 col-md-6 col-sm-12\">\n                <div class=\"panel\">\n                    <div class=\"panel-heading\">\n                        <div class=\"icon-circle\">\n                            <img src=\"assets/images/avatar.png\">\n                        </div>\n                    </div>\n                   <div class=\"panel-body center\">\n                    <h5>{{info.clientName}}</h5>\n                    <h6 class=\"heading-highlight\">client post / company name</h6>\n                    <p>\n                        {{info.clientView_1}}\n                        {{info.clientView_2}}\n                        {{info.clientView_3}}\n                    </p>\n                    </div>\n                 </div>\n              </div>\n        </div>\n    </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wa/wa.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wa/wa.component.html ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>wa works!</p>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".about-key-diff {\n  background: url('about.jpg') no-repeat bottom center #1d4b76;\n  padding: 70px 0;\n}\n.about-key-diff h1 {\n  color: #fff;\n  font-weight: normal;\n}\n.about-key-diff ul {\n  margin-top: 35px;\n}\n.about-key-diff ul li {\n  padding: 0 0 20px 20px;\n  list-style: none outside;\n  font-size: 16px;\n  position: relative;\n  color: #fff;\n}\n.about-key-diff ul li::before {\n  content: \" \";\n  background: #fff;\n  font-weight: bold;\n  position: absolute;\n  top: 8px;\n  left: 0px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n.note-desc {\n  padding-top: 0;\n}\n.about-info {\n  padding: 0;\n  background: #e5f0fa;\n}\n.about-info .v-align {\n  display: flex;\n}\n.about-info .v-align p {\n  align-self: center;\n  padding-left: 150px;\n}\n.about-info img {\n  width: 100%;\n}\n.icon-circle {\n  height: 90px;\n  width: 90px;\n  border-radius: 50%;\n  margin: 0 auto;\n}\n.icon-circle i {\n  line-height: 90px;\n}\n.icon-circle i svg {\n  fill: #fff;\n}\n.section-info {\n  padding: 70px 0;\n}\n.section-info .panel-container {\n  margin-top: 60px;\n  min-height: 330px;\n  perspective: 1000px;\n}\n.section-info .panel-container:hover .panel {\n  transform: rotateX(180deg);\n}\n.section-info .panel {\n  color: #fff;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 1s;\n  transform-style: preserve-3d;\n}\n.section-info .panel .panel-front {\n  border-top: 5px solid;\n  padding-top: 25px;\n  z-index: 1;\n}\n.section-info .panel .panel-front::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n.section-info .panel .panel-front.red {\n  background: url('1.jpg') no-repeat top center;\n  border-color: #b9646e;\n}\n.section-info .panel .panel-front.red .circle-bg {\n  background-color: #b9646e;\n}\n.section-info .panel .panel-front.blue {\n  background: url('2.jpg') no-repeat top center;\n  border-color: #276caa;\n}\n.section-info .panel .panel-front.blue .circle-bg {\n  background-color: #276caa;\n}\n.section-info .panel .panel-front.green {\n  background: url('3.jpg') no-repeat top center;\n  border-color: #4bbb57;\n}\n.section-info .panel .panel-front.green .circle-bg {\n  background-color: #4bbb57;\n}\n.section-info .panel .panel-back {\n  padding-top: 25px;\n}\n.section-info .panel .panel-back.red {\n  background-color: #b9646e;\n}\n.section-info .panel .panel-back.blue {\n  background-color: #276caa;\n}\n.section-info .panel .panel-back.green {\n  background-color: #4bbb57;\n}\n.section-info .panel .panel-front, .section-info .panel .panel-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.section-info .panel .panel-back {\n  transform: rotateX(180deg);\n}\n.section-info .panel .panel-back p {\n  padding: 10px;\n}\n.section-info .panel h5 {\n  margin: 20px 0;\n}\n.section-info .panel p {\n  margin: 0;\n}\n.leader-ship {\n  margin-top: 40px;\n  padding: 0;\n}\n.leader-ship:last-child {\n  padding-bottom: 70px;\n}\n.leader-ship p {\n  padding-top: 40px;\n  border-top: 1px solid #ccc;\n}\n.leader-ship p a {\n  color: #214f7a;\n  font-weight: bold;\n}\n.leader-ship img {\n  width: auto;\n  margin: 0 40px 0px 0;\n}\n.leader-ship .title-name {\n  font-size: 36px;\n  font-weight: bold;\n}\n.leader-ship .title-info {\n  font-size: 18px;\n  font-weight: bold;\n}\n.why-us {\n  padding: 0 0 70px 0;\n}\n.why-us .row:nth-child(even) {\n  padding: 70px 0;\n}\n.why-us .row:last-child {\n  padding: 45px 0 0 0;\n}\n.why-us h6 {\n  font-weight: bold;\n}\n.why-us ul {\n  margin-top: 35px;\n}\n.why-us ul li {\n  padding: 0 0 20px 20px;\n  list-style: none outside;\n  font-size: 16px;\n  position: relative;\n}\n.why-us ul li::before {\n  content: \" \";\n  background: #214f7a;\n  font-weight: bold;\n  position: absolute;\n  top: 8px;\n  left: 0px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n.wa-info {\n  background: #e5f0fa;\n  padding: 50px;\n  height: 100%;\n}\n.partner-info {\n  padding: 70px 0;\n  padding-bottom: 20px;\n}\n.partner-info .panel {\n  margin-bottom: 50px;\n  border: 1px solid rgba(33, 79, 122, 0.1);\n  padding: 20px;\n}\n.modal-body h6 {\n  font-weight: bold;\n}\n.modal-body a {\n  color: #276caa;\n}\n.modal-body a:hover {\n  color: #000;\n}\n@media (max-width: 576px) {\n  .about-tab .leader-ship img {\n    width: 100%;\n    margin: 0;\n    margin-bottom: 20px;\n  }\n\n  .about-info .v-align p {\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvRjpcXGdpdGh1Ylxcd29yay9zcmNcXGFwcFxcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDREQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQUk7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUNFUjtBREFJO0VBQ0YsZ0JBQUE7QUNFRjtBRERFO0VBQ0Msc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDUyxrQkFBQTtFQUNBLFdBQUE7QUNHWjtBREZHO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSUo7QURDQTtFQUNDLGNBQUE7QUNFRDtBREFBO0VBQ0MsVUFBQTtFQUNHLG1CQUFBO0FDR0o7QURGSTtFQUNJLGFBQUE7QUNJUjtBREhRO0VBQ0wsa0JBQUE7RUFDQSxtQkFBQTtBQ0tIO0FERkM7RUFDQyxXQUFBO0FDSUY7QURLQTtFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDRkQ7QURHQztFQUNDLGlCQUFBO0FDREY7QURFRTtFQUNDLFVBQUE7QUNBSDtBRE1BO0VBQ0ksZUFBQTtBQ0hKO0FESUM7RUFDTyxnQkFBQTtFQUNOLGlCQUFBO0VBQ0EsbUJBQUE7QUNGRjtBREdFO0VBQ0MsMEJBQUE7QUNESDtBRElDO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUNGRjtBREdFO0VBQ0MscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNESDtBREVHO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQ0FKO0FERUc7RUFDQyw2Q0FBQTtFQUNBLHFCQXBEQztBQ29ETDtBRENJO0VBQ0MseUJBdERBO0FDdURMO0FER0c7RUFDQyw2Q0FBQTtFQUNBLHFCQTNERTtBQzBETjtBREVJO0VBQ0MseUJBN0RDO0FDNkROO0FESUc7RUFDQyw2Q0FBQTtFQUNBLHFCQWxFRztBQ2dFUDtBREdJO0VBQ0MseUJBcEVFO0FDbUVQO0FETUU7RUFDQyxpQkFBQTtBQ0pIO0FES0c7RUFDQyx5QkE5RUM7QUMyRUw7QURNRztFQUNDLHlCQWpGRTtBQzZFTjtBRE9HO0VBQ0MseUJBcEZHO0FDK0VQO0FEU0U7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtBQ1BIO0FEU0U7RUFFQywwQkFBQTtBQ1JIO0FEU0c7RUFDQyxhQUFBO0FDUEo7QURVRTtFQUNDLGNBQUE7QUNSSDtBRFVFO0VBQ0MsU0FBQTtBQ1JIO0FEY0E7RUFDRSxnQkFBQTtFQUNBLFVBQUE7QUNYRjtBRFlFO0VBQ0Msb0JBQUE7QUNWSDtBRFlDO0VBQ0MsaUJBQUE7RUFDQSwwQkFBQTtBQ1ZGO0FEV0U7RUFDQyxjQUFBO0VBQ0EsaUJBQUE7QUNUSDtBRFlDO0VBQ0MsV0FBQTtFQUNBLG9CQUFBO0FDVkY7QURZQztFQUNDLGVBQUE7RUFDQSxpQkFBQTtBQ1ZGO0FEWUM7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7QUNWRjtBRGNBO0VBQ0MsbUJBQUE7QUNYRDtBRGFFO0VBQ0MsZUFBQTtBQ1hIO0FEYUU7RUFDQyxtQkFBQTtBQ1hIO0FEY0M7RUFDQyxpQkFBQTtBQ1pGO0FEY0M7RUFDQyxnQkFBQTtBQ1pGO0FEYUc7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDWEg7QURZRztFQUNDLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ1ZKO0FEZ0JBO0VBQ0MsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ2JEO0FEZ0JBO0VBQ0MsZUFBQTtFQUNHLG9CQUFBO0FDYko7QURjSTtFQUNJLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxhQUFBO0FDWlI7QURnQkk7RUFDSSxpQkFBQTtBQ2JSO0FEZUk7RUFDSSxjQUFBO0FDYlI7QURjUTtFQUNJLFdBQUE7QUNaWjtBRGtCQTtFQUdFO0lBQ0MsV0FBQTtJQUNHLFNBQUE7SUFDSCxtQkFBQTtFQ2pCRDs7RUR1QkE7SUFDQyxVQUFBO0VDcEJEO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC1rZXktZGlmZntcclxuICAgIGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQuanBnKSBuby1yZXBlYXQgYm90dG9tIGNlbnRlciAjMWQ0Yjc2O1xyXG4gICAgcGFkZGluZzo3MHB4IDA7XHJcbiAgICBoMXtcclxuICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuICAgIH1cclxuICAgIHVse1xyXG5cdFx0bWFyZ2luLXRvcDozNXB4O1xyXG5cdFx0bGl7XHJcblx0XHRcdHBhZGRpbmc6IDAgMCAyMHB4IDIwcHg7XHJcblx0XHRcdGxpc3Qtc3R5bGU6IG5vbmUgb3V0c2lkZTtcclxuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcblx0XHRcdCY6OmJlZm9yZXtcclxuXHRcdFx0XHRjb250ZW50OiBcIiBcIjtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0XHRcdHRvcDo4cHg7XHJcblx0XHRcdFx0bGVmdDowcHg7XHJcblx0XHRcdFx0d2lkdGg6IDEwcHg7XHJcblx0XHRcdFx0aGVpZ2h0OjEwcHg7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdG1hcmdpbi1yaWdodDogMTBweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG4gICAgfVxyXG59XHJcbi5ub3RlLWRlc2N7XHJcblx0cGFkZGluZy10b3A6MDtcclxufVxyXG4uYWJvdXQtaW5mb3tcclxuXHRwYWRkaW5nOjA7XHJcbiAgICBiYWNrZ3JvdW5kOiNlNWYwZmE7XHJcbiAgICAudi1hbGlnbntcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgcHtcclxuXHRcdFx0YWxpZ24tc2VsZjogY2VudGVyO1xyXG5cdFx0XHRwYWRkaW5nLWxlZnQ6MTUwcHhcclxuICAgICAgICB9XHJcblx0fVxyXG5cdGltZ3tcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0fVxyXG59XHJcblxyXG5cclxuJHJlZDojYjk2NDZlO1xyXG4kYmx1ZTojMjc2Y2FhO1xyXG4kZ3JlZW46IzRiYmI1NztcclxuXHJcbi5pY29uLWNpcmNsZXtcclxuXHRoZWlnaHQ6OTBweDtcclxuXHR3aWR0aDo5MHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6NTAlO1xyXG5cdG1hcmdpbjowIGF1dG87XHJcblx0aXtcclxuXHRcdGxpbmUtaGVpZ2h0OjkwcHg7XHJcblx0XHRzdmd7XHJcblx0XHRcdGZpbGw6I2ZmZjtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcbn1cclxuXHJcbi5zZWN0aW9uLWluZm97XHJcbiAgICBwYWRkaW5nOjcwcHggMDtcclxuXHQucGFuZWwtY29udGFpbmVye1xyXG4gICAgICAgIG1hcmdpbi10b3A6NjBweDtcclxuXHRcdG1pbi1oZWlnaHQ6IDMzMHB4O1xyXG5cdFx0cGVyc3BlY3RpdmU6IDEwMDBweDtcclxuXHRcdCY6aG92ZXIgLnBhbmVse1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxuXHRcdH1cclxuXHR9XHJcblx0LnBhbmVse1xyXG5cdFx0Y29sb3I6I2ZmZjtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xyXG5cdFx0dHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuXHRcdC5wYW5lbC1mcm9udHtcclxuXHRcdFx0Ym9yZGVyLXRvcDogNXB4IHNvbGlkO1xyXG5cdFx0XHRwYWRkaW5nLXRvcDogMjVweDtcclxuXHRcdFx0ei1pbmRleDogMTtcclxuXHRcdFx0Jjo6YWZ0ZXJ7XHJcblx0XHRcdFx0Y29udGVudDonJztcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdFx0XHRoZWlnaHQ6MTAwJTtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjUpO1xyXG5cdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRcdHotaW5kZXg6IC0xO1xyXG5cdFx0XHR9XHJcblx0XHRcdCYucmVke1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvMS5qcGcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xyXG5cdFx0XHRcdGJvcmRlci1jb2xvcjogJHJlZDtcclxuXHRcdFx0XHQuY2lyY2xlLWJne1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjokcmVkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0Ji5ibHVle1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvMi5qcGcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xyXG5cdFx0XHRcdGJvcmRlci1jb2xvcjogJGJsdWU7XHJcblx0XHRcdFx0LmNpcmNsZS1iZ3tcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6JGJsdWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQmLmdyZWVue1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvMy5qcGcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xyXG5cdFx0XHRcdGJvcmRlci1jb2xvcjogJGdyZWVuO1xyXG5cdFx0XHRcdC5jaXJjbGUtYmd7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiRncmVlbjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQucGFuZWwtYmFja3tcclxuXHRcdFx0cGFkZGluZy10b3A6IDI1cHg7XHJcblx0XHRcdCYucmVke1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6JHJlZDtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0Ji5ibHVle1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6JGJsdWU7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdCYuZ3JlZW57XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjokZ3JlZW47XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcclxuXHRcdC5wYW5lbC1mcm9udCwgLnBhbmVsLWJhY2t7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0XHRcdGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHRcdH1cclxuXHRcdC5wYW5lbC1iYWNrXHJcblx0XHR7XHJcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xyXG5cdFx0XHRwe1xyXG5cdFx0XHRcdHBhZGRpbmc6MTBweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aDV7XHJcblx0XHRcdG1hcmdpbjoyMHB4IDA7XHJcblx0XHR9XHJcblx0XHRwe1xyXG5cdFx0XHRtYXJnaW46MDtcclxuXHRcdFx0XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4ubGVhZGVyLXNoaXB7XHJcblx0XHRtYXJnaW4tdG9wOjQwcHg7XHJcblx0XHRwYWRkaW5nOjA7XHJcblx0XHQmOmxhc3QtY2hpbGR7XHJcblx0XHRcdHBhZGRpbmctYm90dG9tOjcwcHg7XHJcblx0XHR9XHJcblx0cHtcclxuXHRcdHBhZGRpbmctdG9wOjQwcHg7XHJcblx0XHRib3JkZXItdG9wOjFweCBzb2xpZCAjY2NjO1xyXG5cdFx0YXtcclxuXHRcdFx0Y29sb3I6IzIxNGY3YTtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRcdH1cclxuXHR9XHJcblx0aW1ne1xyXG5cdFx0d2lkdGg6YXV0bztcclxuXHRcdG1hcmdpbjogMCA0MHB4IDBweCAwO1xyXG5cdH1cclxuXHQudGl0bGUtbmFtZXtcclxuXHRcdGZvbnQtc2l6ZTozNnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHR9XHJcblx0LnRpdGxlLWluZm97XHJcblx0XHRmb250LXNpemU6MThweDtcclxuXHRcdGZvbnQtd2VpZ2h0OmJvbGQ7IFxyXG5cdH1cclxufVxyXG5cclxuLndoeS11c3tcclxuXHRwYWRkaW5nOjAgMCA3MHB4IDA7XHJcblx0LnJvd3tcclxuXHRcdCY6bnRoLWNoaWxkKGV2ZW4pe1xyXG5cdFx0XHRwYWRkaW5nOjcwcHggMDtcclxuXHRcdH1cclxuXHRcdCY6bGFzdC1jaGlsZHtcclxuXHRcdFx0cGFkZGluZzo0NXB4IDAgMCAwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRoNntcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdH1cclxuXHR1bHtcclxuXHRcdG1hcmdpbi10b3A6MzVweDtcclxuXHRcdCBsaXtcclxuXHRcdFx0cGFkZGluZzogMCAwIDIwcHggMjBweDtcclxuXHRcdFx0bGlzdC1zdHlsZTogbm9uZSBvdXRzaWRlO1xyXG5cdFx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0Jjo6YmVmb3Jle1xyXG5cdFx0XHRcdGNvbnRlbnQ6IFwiIFwiO1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICMyMTRmN2E7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRcdFx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0XHRcdFx0dG9wOjhweDtcclxuXHRcdFx0XHRsZWZ0OjBweDtcclxuXHRcdFx0XHR3aWR0aDogMTBweDtcclxuXHRcdFx0XHRoZWlnaHQ6MTBweDtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4ud2EtaW5mb3tcclxuXHRiYWNrZ3JvdW5kOiNlNWYwZmE7XHJcblx0cGFkZGluZzo1MHB4O1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnBhcnRuZXItaW5mb3tcclxuXHRwYWRkaW5nOjcwcHggMDtcclxuICAgIHBhZGRpbmctYm90dG9tOjIwcHg7XHJcbiAgICAucGFuZWx7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTo1MHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMzMsIDc5LCAxMjIsIDAuMSk7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxufVxyXG4ubW9kYWwtYm9keXtcclxuICAgIGg2e1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgYXtcclxuICAgICAgICBjb2xvcjojMjc2Y2FhO1xyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIGNvbG9yOiMwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcclxuXHQuYWJvdXQtdGFie1xyXG4ubGVhZGVyLXNoaXB7XHJcblx0XHRpbWd7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0ICAgIG1hcmdpbjogMDtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbToyMHB4O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4uYWJvdXQtaW5mb3tcclxuXHQudi1hbGlnbntcclxuXHRcdHB7XHJcblx0XHRcdHBhZGRpbmc6MDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxufSIsIi5hYm91dC1rZXktZGlmZiB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0LmpwZykgbm8tcmVwZWF0IGJvdHRvbSBjZW50ZXIgIzFkNGI3NjtcbiAgcGFkZGluZzogNzBweCAwO1xufVxuLmFib3V0LWtleS1kaWZmIGgxIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uYWJvdXQta2V5LWRpZmYgdWwge1xuICBtYXJnaW4tdG9wOiAzNXB4O1xufVxuLmFib3V0LWtleS1kaWZmIHVsIGxpIHtcbiAgcGFkZGluZzogMCAwIDIwcHggMjBweDtcbiAgbGlzdC1zdHlsZTogbm9uZSBvdXRzaWRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICNmZmY7XG59XG4uYWJvdXQta2V5LWRpZmYgdWwgbGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDhweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLm5vdGUtZGVzYyB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uYWJvdXQtaW5mbyB7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6ICNlNWYwZmE7XG59XG4uYWJvdXQtaW5mbyAudi1hbGlnbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYWJvdXQtaW5mbyAudi1hbGlnbiBwIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDE1MHB4O1xufVxuLmFib3V0LWluZm8gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pY29uLWNpcmNsZSB7XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uaWNvbi1jaXJjbGUgaSB7XG4gIGxpbmUtaGVpZ2h0OiA5MHB4O1xufVxuLmljb24tY2lyY2xlIGkgc3ZnIHtcbiAgZmlsbDogI2ZmZjtcbn1cblxuLnNlY3Rpb24taW5mbyB7XG4gIHBhZGRpbmc6IDcwcHggMDtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIG1pbi1oZWlnaHQ6IDMzMHB4O1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwtY29udGFpbmVyOmhvdmVyIC5wYW5lbCB7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwge1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1mcm9udCB7XG4gIGJvcmRlci10b3A6IDVweCBzb2xpZDtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG4gIHotaW5kZXg6IDE7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtZnJvbnQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogLTE7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtZnJvbnQucmVkIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvMS5qcGcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xuICBib3JkZXItY29sb3I6ICNiOTY0NmU7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtZnJvbnQucmVkIC5jaXJjbGUtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjk2NDZlO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWZyb250LmJsdWUge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy8yLmpwZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XG4gIGJvcmRlci1jb2xvcjogIzI3NmNhYTtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1mcm9udC5ibHVlIC5jaXJjbGUtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc2Y2FhO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWZyb250LmdyZWVuIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvMy5qcGcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xuICBib3JkZXItY29sb3I6ICM0YmJiNTc7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtZnJvbnQuZ3JlZW4gLmNpcmNsZS1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YmJiNTc7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtYmFjayB7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWJhY2sucmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5NjQ2ZTtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1iYWNrLmJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc2Y2FhO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWJhY2suZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJiYjU3O1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWZyb250LCAuc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1iYWNrIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtYmFjayBwIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIGg1IHtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCBwIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubGVhZGVyLXNoaXAge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBwYWRkaW5nOiAwO1xufVxuLmxlYWRlci1zaGlwOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbn1cbi5sZWFkZXItc2hpcCBwIHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xufVxuLmxlYWRlci1zaGlwIHAgYSB7XG4gIGNvbG9yOiAjMjE0ZjdhO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5sZWFkZXItc2hpcCBpbWcge1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiAwIDQwcHggMHB4IDA7XG59XG4ubGVhZGVyLXNoaXAgLnRpdGxlLW5hbWUge1xuICBmb250LXNpemU6IDM2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxlYWRlci1zaGlwIC50aXRsZS1pbmZvIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLndoeS11cyB7XG4gIHBhZGRpbmc6IDAgMCA3MHB4IDA7XG59XG4ud2h5LXVzIC5yb3c6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgcGFkZGluZzogNzBweCAwO1xufVxuLndoeS11cyAucm93Omxhc3QtY2hpbGQge1xuICBwYWRkaW5nOiA0NXB4IDAgMCAwO1xufVxuLndoeS11cyBoNiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLndoeS11cyB1bCB7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG59XG4ud2h5LXVzIHVsIGxpIHtcbiAgcGFkZGluZzogMCAwIDIwcHggMjBweDtcbiAgbGlzdC1zdHlsZTogbm9uZSBvdXRzaWRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi53aHktdXMgdWwgbGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBiYWNrZ3JvdW5kOiAjMjE0ZjdhO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDhweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLndhLWluZm8ge1xuICBiYWNrZ3JvdW5kOiAjZTVmMGZhO1xuICBwYWRkaW5nOiA1MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wYXJ0bmVyLWluZm8ge1xuICBwYWRkaW5nOiA3MHB4IDA7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuLnBhcnRuZXItaW5mbyAucGFuZWwge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDMzLCA3OSwgMTIyLCAwLjEpO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ubW9kYWwtYm9keSBoNiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1vZGFsLWJvZHkgYSB7XG4gIGNvbG9yOiAjMjc2Y2FhO1xufVxuLm1vZGFsLWJvZHkgYTpob3ZlciB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmFib3V0LXRhYiAubGVhZGVyLXNoaXAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5hYm91dC1pbmZvIC52LWFsaWduIHAge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn0iXX0= */");

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
            { name: 'Person Name',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            },
            { name: 'Person Name',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            },
            { name: 'Person Name',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
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
/* harmony import */ var _inner_page_header_inner_page_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./inner-page-header/inner-page-header.component */ "./src/app/inner-page-header/inner-page-header.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./client/client.component */ "./src/app/client/client.component.ts");
/* harmony import */ var _projectengineering_projectengineering_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./projectengineering/projectengineering.component */ "./src/app/projectengineering/projectengineering.component.ts");
/* harmony import */ var _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./testimonials/testimonials.component */ "./src/app/testimonials/testimonials.component.ts");
/* harmony import */ var _technology_technology_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./technology/technology.component */ "./src/app/technology/technology.component.ts");
/* harmony import */ var _industries_industries_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./industries/industries.component */ "./src/app/industries/industries.component.ts");
/* harmony import */ var _advancesolution_advancesolution_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./advancesolution/advancesolution.component */ "./src/app/advancesolution/advancesolution.component.ts");





















const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'Advancesolution', component: _advancesolution_advancesolution_component__WEBPACK_IMPORTED_MODULE_20__["AdvancesolutionComponent"] },
    { path: 'Technology', component: _technology_technology_component__WEBPACK_IMPORTED_MODULE_18__["TechnologyComponent"] },
    { path: 'Industries', component: _industries_industries_component__WEBPACK_IMPORTED_MODULE_19__["IndustriesComponent"] },
    { path: 'OurProduct', component: _ourproduct_ourproduct_component__WEBPACK_IMPORTED_MODULE_4__["OurproductComponent"] },
    { path: 'ManagedService', component: _managedservice_managedservice_component__WEBPACK_IMPORTED_MODULE_5__["ManagedserviceComponent"] },
    { path: 'Company', component: _about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"] },
    { path: 'Career', component: _career_career_component__WEBPACK_IMPORTED_MODULE_7__["CareerComponent"] },
    { path: 'Contactus', component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_8__["ContactusComponent"] },
    { path: 'NewsAndEventUpdate', component: _news_news_component__WEBPACK_IMPORTED_MODULE_13__["NewsComponent"] },
    { path: 'WhoWeAre', component: _about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"] },
    { path: 'WhyArkedgeTchnologies', component: _about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"] },
    { path: 'CentersOfExcellence', component: _about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"] },
    { path: 'VisionAndMission', component: _about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"] },
    { path: 'ValueOfExcellence', component: _about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"] },
    { path: 'OurLeadership', component: _about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"] },
    { path: 'TestimonialClientspeaks', component: _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_17__["TestimonialsComponent"] },
    { path: 'OurHappyClients', component: _client_client_component__WEBPACK_IMPORTED_MODULE_15__["ClientComponent"] },
    { path: 'NewsAndEventUpdate', component: _about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"] },
    { path: 'ValueOfExcellence', component: _about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"] },
    { path: 'OurHappyClients', component: _client_client_component__WEBPACK_IMPORTED_MODULE_15__["ClientComponent"] },
    { path: 'ProjectEngineering', component: _projectengineering_projectengineering_component__WEBPACK_IMPORTED_MODULE_16__["ProjectengineeringComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _advancesolution_advancesolution_component__WEBPACK_IMPORTED_MODULE_20__["AdvancesolutionComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
            _ourproduct_ourproduct_component__WEBPACK_IMPORTED_MODULE_4__["OurproductComponent"],
            _managedservice_managedservice_component__WEBPACK_IMPORTED_MODULE_5__["ManagedserviceComponent"],
            _company_company_component__WEBPACK_IMPORTED_MODULE_6__["CompanyComponent"],
            _career_career_component__WEBPACK_IMPORTED_MODULE_7__["CareerComponent"],
            _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_8__["ContactusComponent"],
            _inner_page_header_inner_page_header_component__WEBPACK_IMPORTED_MODULE_12__["InnerPageHeaderComponent"],
            _news_news_component__WEBPACK_IMPORTED_MODULE_13__["NewsComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"],
            _client_client_component__WEBPACK_IMPORTED_MODULE_15__["ClientComponent"],
            _technology_technology_component__WEBPACK_IMPORTED_MODULE_18__["TechnologyComponent"],
            _industries_industries_component__WEBPACK_IMPORTED_MODULE_19__["IndustriesComponent"],
            _projectengineering_projectengineering_component__WEBPACK_IMPORTED_MODULE_16__["ProjectengineeringComponent"],
            _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_17__["TestimonialsComponent"]
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: false }),
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
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  color: #555555;\n  font-family: \"Noto Sans\", sans-serif;\n  font-size: 16px;\n  line-height: 26px;\n}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\nh1 {\n  font-size: 40px;\n  margin-bottom: 40px;\n  text-transform: uppercase;\n}\n\nh2 {\n  font-size: 34px;\n}\n\nh3 {\n  font-size: 30px;\n}\n\nh4 {\n  font-size: 26px;\n}\n\nh5 {\n  font-size: 22px;\n}\n\nh6 {\n  font-size: 18px;\n  line-height: 32px;\n}\n\nh1 {\n  font-weight: bold;\n}\n\n.running-text {\n  font-size: 18px;\n  font-weight: bold;\n  line-height: 30px;\n}\n\na {\n  cursor: pointer;\n}\n\nimg {\n  width: 100%;\n}\n\n.center {\n  text-align: center;\n}\n\n.heading-highlight {\n  color: #276CAA;\n}\n\n.v-flex {\n  display: flex;\n}\n\nsection {\n  padding: 70px 0;\n}\n\n.btn {\n  font-size: 16px;\n  font-weight: bold;\n  border-radius: 30px;\n  padding: 15px 50px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  border: none;\n}\n\n.btn + .btn {\n  margin-left: 15px;\n}\n\n.btn.btn-primary {\n  background: #276caa;\n}\n\n.btn:hover {\n  opacity: 0.8;\n}\n\nsvg {\n  vertical-align: middle;\n  margin: auto;\n  align-content: center;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n.icon-large > svg {\n  width: 100px;\n  height: 100px;\n}\n\n.icon-medium > svg {\n  width: 50px;\n  height: 50px;\n}\n\n.icon-small > svg {\n  width: 34px;\n  height: 34px;\n}\n\n.icon-ex-small > svg {\n  width: 24px;\n  height: 24px;\n}\n\n.slick-slider {\n  width: 96%;\n  margin: auto;\n}\n\n.section-product .slick-prev:before, .section-product .slick-next:before {\n  color: #000;\n}\n\n.section-product .slick-list {\n  padding: 40px 5px 60px !important;\n}\n\n.inner-banner {\n  position: relative;\n  height: 300px;\n  overflow: hidden;\n}\n\n.inner-banner img {\n  width: 100%;\n}\n\n.inner-banner .page-title {\n  position: absolute;\n  bottom: 0px;\n  background: rgba(255, 255, 255, 0.6);\n  width: 100%;\n  height: 100%;\n  padding: 10px 0;\n  color: #214f7a;\n}\n\n.inner-banner .page-title .row {\n  margin-top: 170px;\n}\n\n.inner-banner .page-title h1 {\n  margin: 0;\n}\n\n.inner-banner .page-title h6 {\n  line-height: 25px;\n  font-weight: bold;\n}\n\ninput.form-control {\n  border-radius: 150px;\n  height: auto;\n  padding: 0.65rem 1rem;\n}\n\ntextarea.form-control {\n  border-radius: 15px;\n  resize: none;\n}\n\n.accordion .card {\n  border-radius: 0px;\n  border: none;\n}\n\n.accordion .card .card-header {\n  border: none;\n  background: none;\n  padding: 0 0 15px;\n}\n\n.accordion .card .card-header .btn {\n  border-radius: 0;\n  padding: 10px 15px;\n  background: #214f7a;\n  width: 100%;\n  text-align: left;\n  color: #fff;\n  text-decoration: none;\n}\n\n.accordion .card .card-header .btn.collapsed {\n  background: #e5e5e5;\n  color: #333333;\n}\n\n.section-project-engineering .card-body {\n  padding: 0px;\n}\n\n.main-banner .carousel-indicators {\n  bottom: 70px;\n}\n\n.div-center {\n  margin: 0 auto;\n}\n\nsection h2 {\n  margin-bottom: 30px;\n}\n\n.modal {\n  top: 50%;\n  transform: translateY(-250px);\n}\n\n.inner-nav-tab {\n  padding: 0;\n  border-top: 1px solid #fff;\n}\n\n.inner-nav-tab .tab-content {\n  margin-top: 70px;\n}\n\n.inner-nav-tab .tab-navigation {\n  background: #e5e5e5;\n}\n\n.inner-nav-tab .nav-tabs {\n  border: none;\n}\n\n.inner-nav-tab .nav-tabs .nav-item {\n  margin-bottom: 0;\n}\n\n.inner-nav-tab .nav-tabs .nav-item .nav-link {\n  padding: 0.7rem 1rem;\n  border: none;\n  background: #e5e5e5;\n  display: block;\n  border-radius: 0;\n  color: #333333;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.inner-nav-tab .nav-tabs .nav-item .nav-link.active, .inner-nav-tab .nav-tabs .nav-item .nav-link:hover {\n  border-bottom: 2px solid #214f7a;\n  color: #214f7a;\n}\n\n.inner-nav-tab .nav-tabs .nav-item .nav-link {\n  text-transform: uppercase;\n}\n\n@media (max-width: 576px) {\n  .inner-nav-tab .tab-navigation {\n    background: none;\n  }\n  .inner-nav-tab .nav-tabs .nav-item {\n    width: 100%;\n    margin-top: 10px;\n    background: #e5e5e5;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container, .container-lg, .container-md, .container-sm, .container-xl {\n    max-width: 1399px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRjpcXGdpdGh1Ylxcd29yay9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxjQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDRDs7QURDQTtFQUNDLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNFRDs7QURBQTtFQUNDLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDR0Q7O0FEREE7RUFDQyxlQUFBO0FDSUQ7O0FERkE7RUFDQyxlQUFBO0FDS0Q7O0FESEE7RUFDQyxlQUFBO0FDTUQ7O0FESkE7RUFDQyxlQUFBO0FDT0Q7O0FETEE7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7QUNRRDs7QUROQTtFQUNDLGlCQUFBO0FDU0Q7O0FETkE7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1NEOztBRE5BO0VBQ0MsZUFBQTtBQ1NEOztBRE5BO0VBQ0MsV0FBQTtBQ1NEOztBRFBBO0VBQ0Msa0JBQUE7QUNVRDs7QURSQTtFQUNJLGNBQUE7QUNXSjs7QURUQTtFQUNDLGFBQUE7QUNZRDs7QURWQTtFQUNDLGVBQUE7QUNhRDs7QURYQTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ2NEOztBRGJDO0VBQ0UsaUJBQUE7QUNlSDs7QURiQztFQUNDLG1CQUFBO0FDZUY7O0FEYkM7RUFDQyxZQUFBO0FDZUY7O0FEWkE7RUFDQyxzQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ2VEOztBRGJBO0VBQ0MsZ0JBQUE7QUNnQkQ7O0FEZEE7RUFDQyxZQUFBO0VBQ0EsYUFBQTtBQ2lCRDs7QURmQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDa0JEOztBRGhCQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDbUJEOztBRGpCQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDb0JEOztBRGpCQTtFQUNDLFVBQUE7RUFDQSxZQUFBO0FDb0JEOztBRGhCQztFQUNDLFdBQUE7QUNtQkY7O0FEakJDO0VBQ0MsaUNBQUE7QUNtQkY7O0FEZEU7RUFDRCxrQkFBQTtFQUNBLGFBQUE7RUFDRyxnQkFBQTtBQ2lCSjs7QURoQkk7RUFDSSxXQUFBO0FDa0JSOztBRGhCSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ04sV0FBQTtFQUNBLFlBQUE7RUFDTSxlQUFBO0VBQ04sY0FBQTtBQ2tCRjs7QURqQkU7RUFDQyxpQkFBQTtBQ21CSDs7QURqQkU7RUFDQyxTQUFBO0FDbUJIOztBRGpCRTtFQUNDLGlCQUFBO0VBQ0EsaUJBQUE7QUNtQkg7O0FEZkE7RUFDQyxvQkFBQTtFQUNBLFlBQUE7RUFDRyxxQkFBQTtBQ2tCSjs7QURmQTtFQUNDLG1CQUFBO0VBQ0EsWUFBQTtBQ2tCRDs7QURaRTtFQUNDLGtCQUFBO0VBQ0EsWUFBQTtBQ2VIOztBRGRJO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNnQkw7O0FEZkk7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNpQkw7O0FEaEJLO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FDa0JOOztBRFZDO0VBQ0MsWUFBQTtBQ2FGOztBRFRFO0VBQ0MsWUFBQTtBQ1lIOztBRFJDO0VBQ0MsY0FBQTtBQ1dGOztBRFBFO0VBQ0MsbUJBQUE7QUNVSDs7QUROQztFQUNDLFFBQUE7RUFDQSw2QkFBQTtBQ1NGOztBRE5DO0VBQ0MsVUFBQTtFQUNBLDBCQUFBO0FDU0Y7O0FEUkU7RUFDQyxnQkFBQTtBQ1VIOztBRFJFO0VBQ0MsbUJBQUE7QUNVSDs7QURQRTtFQUNDLFlBQUE7QUNTSDs7QURSRztFQUNDLGdCQUFBO0FDVUo7O0FEVEk7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNXSjs7QURWSTtFQUNDLGdDQUFBO0VBQ0EsY0FBQTtBQ1lMOztBRExDO0VBQ0MseUJBQUE7QUNRRjs7QURMQztFQUVDO0lBQ0MsZ0JBQUE7RUNPRDtFRExBO0lBQ0MsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUNPRDtBQUNGOztBREhDO0VBQ0M7SUFDQyxpQkFBQTtFQ0tEO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG5cdGNvbG9yOiM1NTU1NTU7XHJcblx0Zm9udC1mYW1pbHk6ICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZToxNnB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG59XHJcbnVse1xyXG5cdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuXHRtYXJnaW46MDtcclxuXHRwYWRkaW5nOjA7XHJcbn1cclxuaDF7XHJcblx0Zm9udC1zaXplOjQwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTo0MHB4O1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuaDJ7XHJcblx0Zm9udC1zaXplOjM0cHg7XHJcbn1cclxuaDN7XHJcblx0Zm9udC1zaXplOjMwcHg7XHJcbn1cclxuaDR7XHJcblx0Zm9udC1zaXplOjI2cHg7XHJcbn1cclxuaDV7XHJcblx0Zm9udC1zaXplOjIycHg7XHJcbn1cclxuaDZ7XHJcblx0Zm9udC1zaXplOjE4cHg7IFxyXG5cdGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG59XHJcbmgxe1xyXG5cdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbn1cclxuXHJcbi5ydW5uaW5nLXRleHR7XHJcblx0Zm9udC1zaXplOjE4cHg7XHJcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRsaW5lLWhlaWdodDozMHB4O1xyXG59XHJcblxyXG5he1xyXG5cdGN1cnNvcjpwb2ludGVyO1xyXG59XHJcblxyXG5pbWd7XHJcblx0d2lkdGg6MTAwJTtcclxufVxyXG4uY2VudGVye1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbn1cdFxyXG4uaGVhZGluZy1oaWdobGlnaHR7XHJcbiAgICBjb2xvcjojMjc2Q0FBO1xyXG59XHJcbi52LWZsZXh7XHJcblx0ZGlzcGxheTogZmxleDtcclxufVxyXG5zZWN0aW9ue1xyXG5cdHBhZGRpbmc6NzBweCAwO1xyXG59XHJcbi5idG57XHJcblx0Zm9udC1zaXplOjE2cHg7XHJcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRib3JkZXItcmFkaXVzOiAzMHB4O1xyXG5cdHBhZGRpbmc6IDE1cHggNTBweDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGxldHRlci1zcGFjaW5nOiAxcHg7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdCYrIC5idG57XHJcblx0XHRcdG1hcmdpbi1sZWZ0OjE1cHg7XHJcblx0fVxyXG5cdCYuYnRuLXByaW1hcnl7XHJcblx0XHRiYWNrZ3JvdW5kOiMyNzZjYWE7XHJcblx0fVxyXG5cdCY6aG92ZXJ7XHJcblx0XHRvcGFjaXR5OjAuODtcclxuXHR9XHJcbn1cclxuc3ZnIHtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdG1hcmdpbjogYXV0bztcclxuXHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuc3ZnOm5vdCg6cm9vdCkge1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmljb24tbGFyZ2U+c3ZnIHtcclxuXHR3aWR0aDogMTAwcHg7XHJcblx0aGVpZ2h0OiAxMDBweDtcclxufVxyXG4uaWNvbi1tZWRpdW0+c3ZnIHtcclxuXHR3aWR0aDogNTBweDtcclxuXHRoZWlnaHQ6IDUwcHg7XHJcbn1cclxuLmljb24tc21hbGw+c3ZnIHtcclxuXHR3aWR0aDogMzRweDtcclxuXHRoZWlnaHQ6IDM0cHg7XHJcbn1cclxuLmljb24tZXgtc21hbGw+c3ZnIHtcclxuXHR3aWR0aDogMjRweDtcclxuXHRoZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5zbGljay1zbGlkZXIge1xyXG5cdHdpZHRoOiA5NiU7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tcHJvZHVjdHtcclxuXHQuc2xpY2stcHJldjpiZWZvcmUsIC5zbGljay1uZXh0OmJlZm9yZXtcclxuXHRcdGNvbG9yOiMwMDA7XHJcblx0fVxyXG5cdC5zbGljay1saXN0e1xyXG5cdFx0cGFkZGluZzo0MHB4IDVweCA2MHB4ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG4gIH1cclxuIFxyXG5cclxuICAuaW5uZXItYmFubmVye1xyXG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdGhlaWdodDogMzAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICB9XHJcbiAgICAucGFnZS10aXRsZXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOnJnYigyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG5cdFx0Y29sb3I6IzIxNGY3YTtcclxuXHRcdC5yb3d7XHJcblx0XHRcdG1hcmdpbi10b3A6IDE3MHB4O1xyXG5cdFx0fVxyXG5cdFx0aDF7XHJcblx0XHRcdG1hcmdpbjowO1xyXG5cdFx0fVxyXG5cdFx0aDZ7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG5cdFx0XHRmb250LXdlaWdodDpib2xkO1xyXG5cdFx0fVxyXG4gICAgfVxyXG59XHJcbmlucHV0LmZvcm0tY29udHJvbHtcclxuXHRib3JkZXItcmFkaXVzOiAxNTBweDtcclxuXHRoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwLjY1cmVtIDFyZW07IFxyXG59XHJcblxyXG50ZXh0YXJlYS5mb3JtLWNvbnRyb2x7XHJcblx0Ym9yZGVyLXJhZGl1czogMTVweDtcclxuXHRyZXNpemU6IG5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxuXHQuYWNjb3JkaW9ue1xyXG5cdFx0LmNhcmR7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6MHB4O1xyXG5cdFx0XHRib3JkZXI6bm9uZTtcclxuXHRcdFx0IC5jYXJkLWhlYWRlcntcclxuXHRcdFx0XHQgYm9yZGVyOm5vbmU7XHJcblx0XHRcdFx0IGJhY2tncm91bmQ6bm9uZTtcclxuXHRcdFx0XHQgcGFkZGluZzowIDAgMTVweDtcclxuXHRcdFx0XHQuYnRue1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czowO1xyXG5cdFx0XHRcdFx0cGFkZGluZzoxMHB4IDE1cHg7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiMyMTRmN2E7XHJcblx0XHRcdFx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRcdFx0XHRcdGNvbG9yOiNmZmY7XHJcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdFx0XHQmLmNvbGxhcHNlZHtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDojZTVlNWU1O1xyXG5cdFx0XHRcdFx0XHRjb2xvcjojMzMzMzMzO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LnNlY3Rpb24tcHJvamVjdC1lbmdpbmVlcmluZ3tcclxuXHQuY2FyZC1ib2R5e1xyXG5cdFx0cGFkZGluZzowcHg7XHJcblx0fSBcclxuXHR9XHJcblx0Lm1haW4tYmFubmVye1xyXG5cdFx0LmNhcm91c2VsLWluZGljYXRvcnN7XHJcblx0XHRcdGJvdHRvbTogNzBweDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5kaXYtY2VudGVye1xyXG5cdFx0bWFyZ2luOjAgYXV0bztcclxuXHR9XHJcblxyXG5cdHNlY3Rpb257XHJcblx0XHRoMntcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTozMHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Lm1vZGFse1xyXG5cdFx0dG9wOjUwJTtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjUwcHgpO1xyXG5cdH1cclxuXHJcblx0LmlubmVyLW5hdi10YWJ7XHJcblx0XHRwYWRkaW5nOjA7XHJcblx0XHRib3JkZXItdG9wOjFweCBzb2xpZCAjZmZmO1xyXG5cdFx0LnRhYi1jb250ZW50e1xyXG5cdFx0XHRtYXJnaW4tdG9wOjcwcHg7XHJcblx0XHR9XHJcblx0XHQudGFiLW5hdmlnYXRpb257XHJcblx0XHRcdGJhY2tncm91bmQ6ICNlNWU1ZTU7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC5uYXYtdGFicyB7XHJcblx0XHRcdGJvcmRlcjpub25lO1xyXG5cdFx0XHQubmF2LWl0ZW17XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHRcdFx0XHQubmF2LWxpbmt7XHJcblx0XHRcdFx0cGFkZGluZzogLjdyZW0gMXJlbTsgXHJcblx0XHRcdFx0Ym9yZGVyOm5vbmU7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogI2U1ZTVlNTtcclxuXHRcdFx0XHRkaXNwbGF5OmJsb2NrO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDA7XHJcblx0XHRcdFx0Y29sb3I6IzMzMzMzMztcclxuXHRcdFx0XHRmb250LXNpemU6MTZweDtcclxuXHRcdFx0XHRmb250LXdlaWdodDpib2xkO1xyXG5cdFx0XHRcdCYuYWN0aXZlLCAmOmhvdmVye1xyXG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbToycHggc29saWQgIzIxNGY3YTtcclxuXHRcdFx0XHRcdGNvbG9yOiMyMTRmN2E7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LmlubmVyLW5hdi10YWIgLm5hdi10YWJzIC5uYXYtaXRlbSAubmF2LWxpbmt7XHJcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdH1cclxuXHJcblx0QG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcclxuXHRcdC5pbm5lci1uYXYtdGFie1xyXG5cdFx0LnRhYi1uYXZpZ2F0aW9ue1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiBub25lO1xyXG5cdFx0fVxyXG5cdFx0Lm5hdi10YWJzIC5uYXYtaXRlbXtcclxuXHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdFx0bWFyZ2luLXRvcDoxMHB4O1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiNlNWU1ZTU7XHJcblx0XHR9XHJcblxyXG5cdH19XHJcblxyXG5cdEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpe1xyXG5cdFx0LmNvbnRhaW5lciwgLmNvbnRhaW5lci1sZywgLmNvbnRhaW5lci1tZCwgLmNvbnRhaW5lci1zbSwgLmNvbnRhaW5lci14bHtcclxuXHRcdFx0bWF4LXdpZHRoOiAxMzk5cHg7XHJcblx0XHR9XHJcblx0fVxyXG4iLCJib2R5IHtcbiAgY29sb3I6ICM1NTU1NTU7XG4gIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDM0cHg7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cblxuaDUge1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbmg2IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbn1cblxuaDEge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJ1bm5pbmctdGV4dCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuXG5hIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRpbmctaGlnaGxpZ2h0IHtcbiAgY29sb3I6ICMyNzZDQUE7XG59XG5cbi52LWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5zZWN0aW9uIHtcbiAgcGFkZGluZzogNzBweCAwO1xufVxuXG4uYnRuIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcGFkZGluZzogMTVweCA1MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBib3JkZXI6IG5vbmU7XG59XG4uYnRuICsgLmJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuLmJ0bi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6ICMyNzZjYWE7XG59XG4uYnRuOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xufVxuXG5zdmcge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW46IGF1dG87XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuc3ZnOm5vdCg6cm9vdCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaWNvbi1sYXJnZSA+IHN2ZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmljb24tbWVkaXVtID4gc3ZnIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmljb24tc21hbGwgPiBzdmcge1xuICB3aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuXG4uaWNvbi1leC1zbWFsbCA+IHN2ZyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5zbGljay1zbGlkZXIge1xuICB3aWR0aDogOTYlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5zZWN0aW9uLXByb2R1Y3QgLnNsaWNrLXByZXY6YmVmb3JlLCAuc2VjdGlvbi1wcm9kdWN0IC5zbGljay1uZXh0OmJlZm9yZSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnNlY3Rpb24tcHJvZHVjdCAuc2xpY2stbGlzdCB7XG4gIHBhZGRpbmc6IDQwcHggNXB4IDYwcHggIWltcG9ydGFudDtcbn1cblxuLmlubmVyLWJhbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5pbm5lci1iYW5uZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaW5uZXItYmFubmVyIC5wYWdlLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGNvbG9yOiAjMjE0ZjdhO1xufVxuLmlubmVyLWJhbm5lciAucGFnZS10aXRsZSAucm93IHtcbiAgbWFyZ2luLXRvcDogMTcwcHg7XG59XG4uaW5uZXItYmFubmVyIC5wYWdlLXRpdGxlIGgxIHtcbiAgbWFyZ2luOiAwO1xufVxuLmlubmVyLWJhbm5lciAucGFnZS10aXRsZSBoNiB7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW5wdXQuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLXJhZGl1czogMTUwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMC42NXJlbSAxcmVtO1xufVxuXG50ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICByZXNpemU6IG5vbmU7XG59XG5cbi5hY2NvcmRpb24gLmNhcmQge1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5hY2NvcmRpb24gLmNhcmQgLmNhcmQtaGVhZGVyIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nOiAwIDAgMTVweDtcbn1cbi5hY2NvcmRpb24gLmNhcmQgLmNhcmQtaGVhZGVyIC5idG4ge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJhY2tncm91bmQ6ICMyMTRmN2E7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmFjY29yZGlvbiAuY2FyZCAuY2FyZC1oZWFkZXIgLmJ0bi5jb2xsYXBzZWQge1xuICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xuICBjb2xvcjogIzMzMzMzMztcbn1cblxuLnNlY3Rpb24tcHJvamVjdC1lbmdpbmVlcmluZyAuY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ubWFpbi1iYW5uZXIgLmNhcm91c2VsLWluZGljYXRvcnMge1xuICBib3R0b206IDcwcHg7XG59XG5cbi5kaXYtY2VudGVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbnNlY3Rpb24gaDIge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ubW9kYWwge1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNTBweCk7XG59XG5cbi5pbm5lci1uYXYtdGFiIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmY7XG59XG4uaW5uZXItbmF2LXRhYiAudGFiLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiA3MHB4O1xufVxuLmlubmVyLW5hdi10YWIgLnRhYi1uYXZpZ2F0aW9uIHtcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbn1cbi5pbm5lci1uYXYtdGFiIC5uYXYtdGFicyB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5pbm5lci1uYXYtdGFiIC5uYXYtdGFicyAubmF2LWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmlubmVyLW5hdi10YWIgLm5hdi10YWJzIC5uYXYtaXRlbSAubmF2LWxpbmsge1xuICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaW5uZXItbmF2LXRhYiAubmF2LXRhYnMgLm5hdi1pdGVtIC5uYXYtbGluay5hY3RpdmUsIC5pbm5lci1uYXYtdGFiIC5uYXYtdGFicyAubmF2LWl0ZW0gLm5hdi1saW5rOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyMTRmN2E7XG4gIGNvbG9yOiAjMjE0ZjdhO1xufVxuXG4uaW5uZXItbmF2LXRhYiAubmF2LXRhYnMgLm5hdi1pdGVtIC5uYXYtbGluayB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuaW5uZXItbmF2LXRhYiAudGFiLW5hdmlnYXRpb24ge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gIH1cbiAgLmlubmVyLW5hdi10YWIgLm5hdi10YWJzIC5uYXYtaXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5jb250YWluZXIsIC5jb250YWluZXItbGcsIC5jb250YWluZXItbWQsIC5jb250YWluZXItc20sIC5jb250YWluZXIteGwge1xuICAgIG1heC13aWR0aDogMTM5OXB4O1xuICB9XG59Il19 */");

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
/* harmony import */ var _wa_wa_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./wa/wa.component */ "./src/app/wa/wa.component.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
            _space_pipe__WEBPACK_IMPORTED_MODULE_9__["CreateSpace"],
            _wa_wa_component__WEBPACK_IMPORTED_MODULE_10__["WaComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__["SlickCarouselModule"]
        ],
        providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]],
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
/* harmony default export */ __webpack_exports__["default"] = (".section-contact {\n  padding-bottom: 0;\n}\n.section-contact form {\n  margin: 70px 0px;\n}\n.section-contact form h1 {\n  margin-bottom: 50px;\n  font-weight: normal;\n}\n.section-contact form button {\n  margin: 30px auto 0;\n  display: table;\n}\n.section-contact .contact-emails .panel {\n  border: 1px solid #214f7a;\n  border-bottom: 10px solid #214f7a;\n  padding: 20px;\n  padding-top: 30px;\n  height: 100%;\n}\n.section-contact .contact-emails .panel .panel-body {\n  margin-top: 60px;\n}\n.section-contact .contact-emails .panel .panel-body h5 {\n  font-weight: bold;\n}\n.section-contact .contact-emails .panel .panel-body p {\n  margin: 0;\n}\n.section-contact .contact-emails .panel .panel-body p:first-child {\n  font-weight: bold;\n}\n.section-contact .contact-emails .panel .panel-body div {\n  display: inline-block;\n  margin-right: 20px;\n}\n.section-contact .contact-emails .panel .panel-body div + div {\n  vertical-align: top;\n}\n.section-contact .contact-emails .panel .panel-body div svg {\n  fill: #214f7a;\n}\n.section-contact .contact-emails .panel .panel-body div a {\n  color: #555555;\n}\n.section-contact .contact-address .panel {\n  cursor: pointer;\n}\n.section-contact .contact-address .panel img {\n  width: 100%;\n  height: auto;\n}\n.section-contact .contact-address .panel h5 {\n  font-weight: bold;\n}\n.section-contact .contact-address .panel p {\n  margin: 0;\n  font-size: 16px;\n}\n.section-contact .contact-address .panel .panel-body {\n  padding: 20px;\n  background: #e5f0fa;\n  min-height: 220px;\n}\n.section-contact .contact-address .panel:hover .panel-body {\n  background: #ffc201;\n}\n.mapouter {\n  width: 100% !important;\n  height: 600px !important;\n  margin-top: 70px;\n}\n.mapouter .gmap_canvas {\n  height: 100% !important;\n}\n.mapouter .gmap_canvas iframe {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHVzL0Y6XFxnaXRodWJcXHdvcmsvc3JjXFxhcHBcXGNvbnRhY3R1c1xcY29udGFjdHVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0dXMvY29udGFjdHVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjtBREFJO0VBS0ksZ0JBQUE7QUNGUjtBREZRO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtBQ0laO0FERFE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUNHWjtBRENJO0VBQ0kseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDUjtBREFRO0VBQ0ksZ0JBQUE7QUNFWjtBRERZO0VBQ0ksaUJBQUE7QUNHaEI7QUREWTtFQUlJLFNBQUE7QUNBaEI7QURIZ0I7RUFDSSxpQkFBQTtBQ0twQjtBRERZO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtBQ0doQjtBREZnQjtFQUNJLG1CQUFBO0FDSXBCO0FERmdCO0VBQ0ksYUFBQTtBQ0lwQjtBREZnQjtFQUNJLGNBQUE7QUNJcEI7QURJUTtFQUNJLGVBQUE7QUNGWjtBREdZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNEaEI7QURHWTtFQUNJLGlCQUFBO0FDRGhCO0FER1k7RUFDSSxTQUFBO0VBQ0EsZUFBQTtBQ0RoQjtBREdZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNEaEI7QURJZ0I7RUFDSSxtQkFBQTtBQ0ZwQjtBRFVBO0VBQ0ksc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDUEo7QURRSTtFQUNJLHVCQUFBO0FDTlI7QURPUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDTFoiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0dXMvY29udGFjdHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24tY29udGFjdHtcclxuICAgIHBhZGRpbmctYm90dG9tOjA7XHJcbiAgICBmb3Jte1xyXG4gICAgICAgIGgxe1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjUwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWFyZ2luOjcwcHggMHB4O1xyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgbWFyZ2luOjMwcHggYXV0byAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICB9ICAgXHJcbiAgICB9XHJcbiAgICAuY29udGFjdC1lbWFpbHN7XHJcbiAgICAucGFuZWx7XHJcbiAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjMjE0ZjdhO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206MTBweCBzb2xpZCAjMjE0ZjdhO1xyXG4gICAgICAgIHBhZGRpbmc6MjBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDozMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAucGFuZWwtYm9keXtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDo2MHB4O1xyXG4gICAgICAgICAgICBoNXtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpdntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICYgKyBkaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN2Z3tcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiMyMTRmN2E7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiM1NTU1NTU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9fVxyXG5cclxuICAgIC5jb250YWN0LWFkZHJlc3N7XHJcbiAgICAgICAgLnBhbmVse1xyXG4gICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDV7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wYW5lbC1ib2R5e1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzoyMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDojZTVmMGZhO1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDoyMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIC5wYW5lbC1ib2R5e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6I2ZmYzIwMTsgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuLm1hcG91dGVye1xyXG4gICAgd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OjYwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOjcwcHg7XHJcbiAgICAuZ21hcF9jYW52YXN7XHJcbiAgICAgICAgaGVpZ2h0OjEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICBpZnJhbWV7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5zZWN0aW9uLWNvbnRhY3Qge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi5zZWN0aW9uLWNvbnRhY3QgZm9ybSB7XG4gIG1hcmdpbjogNzBweCAwcHg7XG59XG4uc2VjdGlvbi1jb250YWN0IGZvcm0gaDEge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLnNlY3Rpb24tY29udGFjdCBmb3JtIGJ1dHRvbiB7XG4gIG1hcmdpbjogMzBweCBhdXRvIDA7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuLnNlY3Rpb24tY29udGFjdCAuY29udGFjdC1lbWFpbHMgLnBhbmVsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzIxNGY3YTtcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjMjE0ZjdhO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnNlY3Rpb24tY29udGFjdCAuY29udGFjdC1lbWFpbHMgLnBhbmVsIC5wYW5lbC1ib2R5IHtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cbi5zZWN0aW9uLWNvbnRhY3QgLmNvbnRhY3QtZW1haWxzIC5wYW5lbCAucGFuZWwtYm9keSBoNSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNlY3Rpb24tY29udGFjdCAuY29udGFjdC1lbWFpbHMgLnBhbmVsIC5wYW5lbC1ib2R5IHAge1xuICBtYXJnaW46IDA7XG59XG4uc2VjdGlvbi1jb250YWN0IC5jb250YWN0LWVtYWlscyAucGFuZWwgLnBhbmVsLWJvZHkgcDpmaXJzdC1jaGlsZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNlY3Rpb24tY29udGFjdCAuY29udGFjdC1lbWFpbHMgLnBhbmVsIC5wYW5lbC1ib2R5IGRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLnNlY3Rpb24tY29udGFjdCAuY29udGFjdC1lbWFpbHMgLnBhbmVsIC5wYW5lbC1ib2R5IGRpdiArIGRpdiB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG4uc2VjdGlvbi1jb250YWN0IC5jb250YWN0LWVtYWlscyAucGFuZWwgLnBhbmVsLWJvZHkgZGl2IHN2ZyB7XG4gIGZpbGw6ICMyMTRmN2E7XG59XG4uc2VjdGlvbi1jb250YWN0IC5jb250YWN0LWVtYWlscyAucGFuZWwgLnBhbmVsLWJvZHkgZGl2IGEge1xuICBjb2xvcjogIzU1NTU1NTtcbn1cbi5zZWN0aW9uLWNvbnRhY3QgLmNvbnRhY3QtYWRkcmVzcyAucGFuZWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2VjdGlvbi1jb250YWN0IC5jb250YWN0LWFkZHJlc3MgLnBhbmVsIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG4uc2VjdGlvbi1jb250YWN0IC5jb250YWN0LWFkZHJlc3MgLnBhbmVsIGg1IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2VjdGlvbi1jb250YWN0IC5jb250YWN0LWFkZHJlc3MgLnBhbmVsIHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5zZWN0aW9uLWNvbnRhY3QgLmNvbnRhY3QtYWRkcmVzcyAucGFuZWwgLnBhbmVsLWJvZHkge1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZTVmMGZhO1xuICBtaW4taGVpZ2h0OiAyMjBweDtcbn1cbi5zZWN0aW9uLWNvbnRhY3QgLmNvbnRhY3QtYWRkcmVzcyAucGFuZWw6aG92ZXIgLnBhbmVsLWJvZHkge1xuICBiYWNrZ3JvdW5kOiAjZmZjMjAxO1xufVxuXG4ubWFwb3V0ZXIge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDYwMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG59XG4ubWFwb3V0ZXIgLmdtYXBfY2FudmFzIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG4ubWFwb3V0ZXIgLmdtYXBfY2FudmFzIGlmcmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */");

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
            { title: 'General Informaton', subtitle: 'Inquiry', id: 'info@arkedge.com', icon: '#icon_contact', phone: '321-321-6544' },
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
/* harmony default export */ __webpack_exports__["default"] = ("nav.bg-light {\n  background-color: rgba(18, 80, 128, 0.9) !important;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 9;\n  padding: 0;\n}\n\n.navbar-brand i, .navbar-brand div {\n  float: left;\n}\n\n.navbar-brand svg {\n  width: 40px;\n  height: 40px;\n}\n\n.navbar-brand div {\n  margin-left: 10px;\n}\n\n.navbar-brand div span {\n  color: #fff;\n  display: block;\n}\n\n.navbar-brand div span.company-name {\n  font-size: 25px;\n  line-height: 20px;\n  font-weight: bold;\n}\n\n.navbar-brand div span.company-type {\n  font-size: 15px;\n  line-height: 12px;\n  margin-top: 7px;\n}\n\n.navbar-nav-list {\n  float: right;\n  margin-left: auto;\n  list-style-type: none;\n  margin-bottom: 0;\n}\n\n.navbar-nav-list .nav-item {\n  font-size: 14px;\n  float: left;\n}\n\n.navbar-nav-list .nav-item:nth-child(-n+3) {\n  text-transform: uppercase;\n  font-size: 16px;\n}\n\n.navbar-nav-list .nav-item:nth-child(4) {\n  margin-left: 50px;\n}\n\n.navbar-nav-list .nav-item.quick-link a {\n  padding-right: 0px;\n}\n\n.navbar-nav-list .nav-item.quick-link svg {\n  fill: #fff;\n  width: 30px;\n  height: 30px;\n}\n\n.navbar-nav-list .nav-item a {\n  color: #fff;\n  padding: 1.5rem 1rem;\n}\n\n.navbar-nav-list .nav-item a.active, .navbar-nav-list .nav-item a:hover {\n  color: #eab119;\n}\n\n.navbar-nav-list .nav-item svg {\n  width: 20px;\n  height: 20px;\n  margin-right: 5px;\n}\n\n.navbar-nav-list .nav-item .sub-nav {\n  list-style-type: none;\n  border-top: 5px solid #276caa;\n  border-bottom: 2px solid #276caa;\n  position: absolute;\n  top: -155px;\n  left: 0px;\n  width: 100%;\n  height: 0px;\n  background: #fff;\n  transition: all 0.5s;\n  padding: 30px 0;\n  margin: 0px;\n  display: none;\n}\n\n.navbar-nav-list .nav-item .sub-nav img {\n  max-width: 100%;\n  height: auto;\n}\n\n.navbar-nav-list .nav-item .sub-nav li.inner-list {\n  border-top: 1px dotted #ccc;\n  padding: 10px 0;\n  float: left;\n  display: block;\n  width: 100%;\n}\n\n.navbar-nav-list .nav-item .sub-nav li a {\n  color: #276caa;\n  padding: 0;\n  margin-top: 0px;\n  font-size: 12px;\n}\n\n.navbar-nav-list .nav-item .sub-nav a {\n  margin-top: 10px;\n  float: left;\n}\n\n.navbar-nav-list .nav-item .sub-nav h6 {\n  font-size: 14px;\n}\n\n.navbar-nav-list .nav-item.nav-dropdown-list:hover {\n  background: #276caa;\n}\n\n.navbar-nav-list .nav-item.nav-dropdown-list:hover .sub-nav {\n  height: auto;\n  top: 70px;\n  display: block;\n}\n\n.navbar-light .navbar-nav .nav-link {\n  color: #fff;\n}\n\n.navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {\n  color: #fff;\n}\n\n.navbar-nav {\n  float: right;\n}\n\n.tele-no svg {\n  fill: #eab119;\n}\n\n.slider-menu {\n  width: 350px;\n  position: fixed;\n  height: calc(100vh);\n  top: 0;\n  background: #fff;\n  z-index: 20;\n  right: -350px;\n  transition: all 0.5s;\n  padding-bottom: 50px;\n}\n\n.slider-menu .slider-footer-contact {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  border-top: 1px solid #ccc;\n  padding: 5px 5px 5px 10px;\n}\n\n.slider-menu .slider-footer-contact a {\n  float: left;\n  font-size: 14px;\n  color: #555555;\n}\n\n.slider-menu .slider-footer-contact a svg {\n  margin-right: 5px;\n  fill: #276caa;\n  width: 20px;\n  height: 20px;\n}\n\n.slider-menu .slider-menu-header {\n  padding: 10px;\n}\n\n.slider-menu .close-slide {\n  float: right;\n  padding: 10px;\n  margin-top: 10px;\n}\n\n.slider-menu .close-slide svg {\n  width: 30px;\n  height: 30px;\n}\n\n.slider-menu.active {\n  right: 0px;\n}\n\n.slider-menu ul {\n  margin: 0;\n  padding: 0;\n  overflow-y: auto;\n  height: calc(100vh - 160px);\n}\n\n.slider-menu ul::-webkit-scrollbar {\n  width: 0.5em;\n}\n\n.slider-menu ul::-webkit-scrollbar-track {\n  background: rgba(194, 194, 194, 0.3);\n}\n\n.slider-menu ul::-webkit-scrollbar-thumb {\n  background-color: darkgrey;\n  outline: 1px solid slategrey;\n}\n\n.slider-menu li.menu-list {\n  list-style-type: none;\n  border-bottom: 1px dotted #af9090;\n  position: relative;\n}\n\n.slider-menu li.menu-list::after {\n  content: \"\";\n  width: 0;\n  height: 3px;\n  display: block;\n  position: absolute;\n  bottom: -3px;\n  left: 0;\n  background-color: #276caa;\n  transition: width 0.2s;\n}\n\n.slider-menu li.menu-list:hover::after {\n  width: 100%;\n}\n\n.slider-menu li.menu-list a {\n  padding: 8px 25px;\n  font-size: 14px;\n  color: #555555;\n  display: block;\n  text-transform: capitalize;\n  text-decoration: none;\n  font-weight: bold;\n}\n\n.slider-menu li.menu-list a.active {\n  color: #276caa;\n}\n\n.slider-menu li.menu-list a:hover {\n  color: #276caa;\n}\n\n.slider-menu .navbar-brand {\n  margin: 10px 0 10px 10px;\n}\n\n.slider-menu .navbar-brand span.company-name {\n  color: #276caa;\n  font-size: 35px;\n  line-height: 30px;\n}\n\n.slider-menu .navbar-brand span.company-type {\n  color: #000;\n  font-size: 21px;\n  line-height: 15px;\n  margin-top: 5px;\n}\n\n.slider-menu .navbar-brand svg {\n  width: 50px;\n  height: 50px;\n}\n\n.overlay {\n  display: none;\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  width: 100%;\n  height: calc(100vh);\n  top: 0;\n}\n\n.overlay.active {\n  display: block;\n  z-index: 10;\n}\n\n@media (max-width: 576px) {\n  .navbar-nav-list .nav-item:not(:last-child) {\n    display: none;\n  }\n}\n\n@media (max-width: 1024px) {\n  .company-info, .tele-no {\n    display: none;\n  }\n\n  .navbar-nav-list .nav-item:nth-child(4) {\n    margin-left: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0Y6XFxnaXRodWJcXHdvcmsvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksbURBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQ0FSOztBREtPO0VBQ0ssV0FBQTtBQ0ZaOztBRElRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNGWjs7QURJUTtFQUNJLGlCQUFBO0FDRlo7O0FER1k7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQ0RoQjs7QURFZ0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0FwQjs7QURFZ0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQXBCOztBRE1BO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0hKOztBRElJO0VBQ0ksZUFBQTtFQWtCQSxXQUFBO0FDbkJSOztBREVRO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FDQVo7O0FERVE7RUFDSSxpQkFBQTtBQ0FaOztBREdZO0VBQ0ksa0JBQUE7QUNEaEI7O0FER1k7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNEaEI7O0FES1E7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7QUNIWjs7QURJWTtFQUNJLGNBQUE7QUNGaEI7O0FES1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDSFo7O0FETVM7RUFDSSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDSmI7O0FES2E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0hqQjs7QURNaUI7RUFDRywyQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNKcEI7O0FETWdCO0VBQ0ksY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0pwQjs7QURPYTtFQUNHLGdCQUFBO0VBQ0EsV0FBQTtBQ0xoQjs7QURRYTtFQUNJLGVBQUE7QUNOakI7O0FEVWlCO0VBQ0EsbUJBQUE7QUNSakI7O0FEU2lCO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FDUG5COztBRGNBO0VBQ0ksV0FBQTtBQ1hKOztBRGFBO0VBQ0ksV0FBQTtBQ1ZKOztBRFlBO0VBQ0ksWUFBQTtBQ1RKOztBRGNJO0VBQ0ksYUFBQTtBQ1hSOztBRGVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLE1BQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtBQ1pKOztBRGFJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FDWFI7O0FEWVE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNWWjs7QURXWTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDVGhCOztBRGFJO0VBQ0ksYUFBQTtBQ1hSOztBRGFJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ1hSOztBRFlRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNWWjs7QURhSTtFQUNJLFVBQUE7QUNYUjs7QURhSTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQ1hSOztBRFlRO0VBQ0ksWUFBQTtBQ1ZaOztBRGFRO0VBQ0csb0NBQUE7QUNYWDs7QURjUTtFQUNFLDBCQUFBO0VBQ0EsNEJBQUE7QUNaVjs7QURlSTtFQUNJLHFCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtBQ2JSOztBRGNRO0VBQ0ksV0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FDWlo7O0FEZ0JnQjtFQUNDLFdBQUE7QUNkakI7O0FEa0JRO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNoQlI7O0FEaUJRO0VBQ0ksY0FBQTtBQ2ZaOztBRGlCUTtFQUNHLGNBQUE7QUNmWDs7QURtQkk7RUFDSSx3QkFBQTtBQ2pCUjs7QURtQmE7RUFDRyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDakJoQjs7QURtQlk7RUFDRyxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ2pCZjs7QURvQlE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ2xCWjs7QUR3QkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsTUFBQTtBQ3JCSjs7QURzQkk7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBQ3BCUjs7QUQwQkE7RUFHVztJQUNLLGFBQUE7RUN6QmQ7QUFDRjs7QUQ4QkE7RUFDSTtJQUNJLGFBQUE7RUM1Qk47O0VEZ0NVO0lBQ0ksaUJBQUE7RUM3QmQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xyXG4gICAgJi5iZy1saWdodCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE4LCA4MCwgMTI4LCAwLjkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAgIHBhZGRpbmc6MDtcclxuICAgIH1cclxuICAgXHJcbn1cclxuLm5hdmJhci1icmFuZHtcclxuICAgICAgIGksIGRpdiB7XHJcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN2Z3tcclxuICAgICAgICAgICAgd2lkdGg6NDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjQwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpdntcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgJi5jb21wYW55LW5hbWV7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MjBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYuY29tcGFueS10eXBle1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo3cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2LWxpc3R7XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICAgIG1hcmdpbi1sZWZ0OmF1dG87XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgLm5hdi1pdGVte1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgICY6bnRoLWNoaWxkKC1uKzMpe1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOm50aC1jaGlsZCg0KXtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6NTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5xdWljay1saW5re1xyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDowcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICAgICAgZmlsbDojZmZmO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MzBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDozMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgcGFkZGluZzoxLjVyZW0gMXJlbTtcclxuICAgICAgICAgICAgJi5hY3RpdmUsICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojZWFiMTE5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN2Z3tcclxuICAgICAgICAgICAgd2lkdGg6MjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDo1cHg7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC5zdWItbmF2e1xyXG4gICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICAgYm9yZGVyLXRvcDo1cHggc29saWQgIzI3NmNhYTtcclxuICAgICAgICAgICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICMyNzZjYWE7XHJcbiAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICB0b3A6LTE1NXB4O1xyXG4gICAgICAgICAgICAgbGVmdDowcHg7XHJcbiAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgaGVpZ2h0OjBweDtcclxuICAgICAgICAgICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbiAgICAgICAgICAgICBwYWRkaW5nOjMwcHggMDtcclxuICAgICAgICAgICAgIG1hcmdpbjowcHg7XHJcbiAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICBoZWlnaHQ6YXV0bztcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgICYuaW5uZXItbGlzdHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOjFweCBkb3R0ZWQgI2NjYztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjEwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyNzZjYWE7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjEycHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7ICBcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgaDZ7XHJcbiAgICAgICAgICAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAmLm5hdi1kcm9wZG93bi1saXN0e1xyXG4gICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IzI3NmNhYTtcclxuICAgICAgICAgICAgICAgICAuc3ViLW5hdntcclxuICAgICAgICAgICAgICAgICAgIGhlaWdodDphdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgdG9wOjcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5re1xyXG4gICAgY29sb3I6I2ZmZjtcclxufVxyXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluazpmb2N1cywgLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbms6aG92ZXJ7XHJcbiAgICBjb2xvcjojZmZmO1xyXG59XHJcbi5uYXZiYXItbmF2e1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbn1cclxuXHJcblxyXG4udGVsZS1ub3tcclxuICAgIHN2Z3tcclxuICAgICAgICBmaWxsOiNlYWIxMTk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zbGlkZXItbWVudXtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCk7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgei1pbmRleDogMjA7XHJcbiAgICByaWdodDogLTM1MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcclxuICAgIHBhZGRpbmctYm90dG9tOjUwcHg7XHJcbiAgICAuc2xpZGVyLWZvb3Rlci1jb250YWN0e1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDVweCA1cHggMTBweDtcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgICAgICAgY29sb3I6IzU1NTU1NTtcclxuICAgICAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjVweDtcclxuICAgICAgICAgICAgICAgIGZpbGw6IzI3NmNhYTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNsaWRlci1tZW51LWhlYWRlcntcclxuICAgICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICB9XHJcbiAgICAuY2xvc2Utc2xpZGV7XHJcbiAgICAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIHN2Z3tcclxuICAgICAgICAgICAgd2lkdGg6MzBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi5hY3RpdmV7XHJcbiAgICAgICAgcmlnaHQ6MHB4O1xyXG4gICAgfVxyXG4gICAgdWx7XHJcbiAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTYwcHgpO1xyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IC41ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgICAgICAgYmFja2dyb3VuZDpyZ2IoMTk0LCAxOTQsIDE5NCwgLjMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XHJcbiAgICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgc2xhdGVncmV5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxpLm1lbnUtbGlzdHtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjYWY5MDkwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IC0zcHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzZjYWE7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuMnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVyXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICY6OmFmdGVye1xyXG4gICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDI1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiM1NTU1NTU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICAmLmFjdGl2ZXtcclxuICAgICAgICAgICAgY29sb3I6IzI3NmNhYTsgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICBjb2xvcjojMjc2Y2FhOyAgIFxyXG4gICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuICAgIC5uYXZiYXItYnJhbmR7XHJcbiAgICAgICAgbWFyZ2luOjEwcHggMCAxMHB4IDEwcHg7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICYuY29tcGFueS1uYW1le1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IzI3NmNhYTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuY29tcGFueS10eXBle1xyXG4gICAgICAgICAgICAgICBjb2xvcjojMDAwO1xyXG4gICAgICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgICAgIHN2Z3tcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4ub3ZlcmxheXtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmgpO1xyXG4gICAgdG9wOjA7XHJcbiAgICAmLmFjdGl2ZXtcclxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgIHotaW5kZXg6MTA7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcclxuICAgIC5uYXZiYXItbmF2LWxpc3R7XHJcbiAgICAgICAgLm5hdi1pdGVte1xyXG4gICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCl7XHJcbiAgICAuY29tcGFueS1pbmZvLCAudGVsZS1ub3tcclxuICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLW5hdi1saXN0eyBcclxuICAgICAgICAubmF2LWl0ZW17XHJcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDQpe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgfX1cclxuICAgXHJcbn0iLCJuYXYuYmctbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4LCA4MCwgMTI4LCAwLjkpICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTtcbiAgcGFkZGluZzogMDtcbn1cblxuLm5hdmJhci1icmFuZCBpLCAubmF2YmFyLWJyYW5kIGRpdiB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLm5hdmJhci1icmFuZCBzdmcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLm5hdmJhci1icmFuZCBkaXYge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5uYXZiYXItYnJhbmQgZGl2IHNwYW4ge1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubmF2YmFyLWJyYW5kIGRpdiBzcGFuLmNvbXBhbnktbmFtZSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm5hdmJhci1icmFuZCBkaXYgc3Bhbi5jb21wYW55LXR5cGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICBtYXJnaW4tdG9wOiA3cHg7XG59XG5cbi5uYXZiYXItbmF2LWxpc3Qge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ubmF2YmFyLW5hdi1saXN0IC5uYXYtaXRlbSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ubmF2YmFyLW5hdi1saXN0IC5uYXYtaXRlbTpudGgtY2hpbGQoLW4rMykge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ubmF2YmFyLW5hdi1saXN0IC5uYXYtaXRlbTpudGgtY2hpbGQoNCkge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtLnF1aWNrLWxpbmsgYSB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtLnF1aWNrLWxpbmsgc3ZnIHtcbiAgZmlsbDogI2ZmZjtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtIGEge1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMS41cmVtIDFyZW07XG59XG4ubmF2YmFyLW5hdi1saXN0IC5uYXYtaXRlbSBhLmFjdGl2ZSwgLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW0gYTpob3ZlciB7XG4gIGNvbG9yOiAjZWFiMTE5O1xufVxuLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW0gc3ZnIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ubmF2YmFyLW5hdi1saXN0IC5uYXYtaXRlbSAuc3ViLW5hdiB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICMyNzZjYWE7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjc2Y2FhO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTE1NXB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIHBhZGRpbmc6IDMwcHggMDtcbiAgbWFyZ2luOiAwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubmF2YmFyLW5hdi1saXN0IC5uYXYtaXRlbSAuc3ViLW5hdiBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtIC5zdWItbmF2IGxpLmlubmVyLWxpc3Qge1xuICBib3JkZXItdG9wOiAxcHggZG90dGVkICNjY2M7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtIC5zdWItbmF2IGxpIGEge1xuICBjb2xvcjogIzI3NmNhYTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubmF2YmFyLW5hdi1saXN0IC5uYXYtaXRlbSAuc3ViLW5hdiBhIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ubmF2YmFyLW5hdi1saXN0IC5uYXYtaXRlbSAuc3ViLW5hdiBoNiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtLm5hdi1kcm9wZG93bi1saXN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzI3NmNhYTtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtLm5hdi1kcm9wZG93bi1saXN0OmhvdmVyIC5zdWItbmF2IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB0b3A6IDcwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluazpmb2N1cywgLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbms6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm5hdmJhci1uYXYge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi50ZWxlLW5vIHN2ZyB7XG4gIGZpbGw6ICNlYWIxMTk7XG59XG5cbi5zbGlkZXItbWVudSB7XG4gIHdpZHRoOiAzNTBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmgpO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHotaW5kZXg6IDIwO1xuICByaWdodDogLTM1MHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG4uc2xpZGVyLW1lbnUgLnNsaWRlci1mb290ZXItY29udGFjdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiA1cHggNXB4IDVweCAxMHB4O1xufVxuLnNsaWRlci1tZW51IC5zbGlkZXItZm9vdGVyLWNvbnRhY3QgYSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNTU1NTU1O1xufVxuLnNsaWRlci1tZW51IC5zbGlkZXItZm9vdGVyLWNvbnRhY3QgYSBzdmcge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZmlsbDogIzI3NmNhYTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cbi5zbGlkZXItbWVudSAuc2xpZGVyLW1lbnUtaGVhZGVyIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5zbGlkZXItbWVudSAuY2xvc2Utc2xpZGUge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uc2xpZGVyLW1lbnUgLmNsb3NlLXNsaWRlIHN2ZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG4uc2xpZGVyLW1lbnUuYWN0aXZlIHtcbiAgcmlnaHQ6IDBweDtcbn1cbi5zbGlkZXItbWVudSB1bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTYwcHgpO1xufVxuLnNsaWRlci1tZW51IHVsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwLjVlbTtcbn1cbi5zbGlkZXItbWVudSB1bDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE5NCwgMTk0LCAxOTQsIDAuMyk7XG59XG4uc2xpZGVyLW1lbnUgdWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XG4gIG91dGxpbmU6IDFweCBzb2xpZCBzbGF0ZWdyZXk7XG59XG4uc2xpZGVyLW1lbnUgbGkubWVudS1saXN0IHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICNhZjkwOTA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zbGlkZXItbWVudSBsaS5tZW51LWxpc3Q6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogM3B4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0zcHg7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzZjYWE7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMnM7XG59XG4uc2xpZGVyLW1lbnUgbGkubWVudS1saXN0OmhvdmVyOjphZnRlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNsaWRlci1tZW51IGxpLm1lbnUtbGlzdCBhIHtcbiAgcGFkZGluZzogOHB4IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM1NTU1NTU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zbGlkZXItbWVudSBsaS5tZW51LWxpc3QgYS5hY3RpdmUge1xuICBjb2xvcjogIzI3NmNhYTtcbn1cbi5zbGlkZXItbWVudSBsaS5tZW51LWxpc3QgYTpob3ZlciB7XG4gIGNvbG9yOiAjMjc2Y2FhO1xufVxuLnNsaWRlci1tZW51IC5uYXZiYXItYnJhbmQge1xuICBtYXJnaW46IDEwcHggMCAxMHB4IDEwcHg7XG59XG4uc2xpZGVyLW1lbnUgLm5hdmJhci1icmFuZCBzcGFuLmNvbXBhbnktbmFtZSB7XG4gIGNvbG9yOiAjMjc2Y2FhO1xuICBmb250LXNpemU6IDM1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuLnNsaWRlci1tZW51IC5uYXZiYXItYnJhbmQgc3Bhbi5jb21wYW55LXR5cGUge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLnNsaWRlci1tZW51IC5uYXZiYXItYnJhbmQgc3ZnIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLm92ZXJsYXkge1xuICBkaXNwbGF5OiBub25lO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDB2aCk7XG4gIHRvcDogMDtcbn1cbi5vdmVybGF5LmFjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB6LWluZGV4OiAxMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmNvbXBhbnktaW5mbywgLnRlbGUtbm8ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubmF2YmFyLW5hdi1saXN0IC5uYXYtaXRlbTpudGgtY2hpbGQoNCkge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG59Il19 */");

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
            { name: 'WhyArkedgeTchnologies' },
            { name: 'ValueOfExcellence' },
            { name: 'OurLeadership' },
            { name: 'OurHappyClients' },
            { name: 'NewsAndEventUpdate' },
            { name: 'TestimonialClientspeaks' },
            { name: 'Industries' },
            { name: 'Technologies' }
        ];
        this.managedService = [
            { name: 'SOFTWARE ENGINEERING',
                managedServiceList: [
                    { name: 'ProjectEngineering' },
                    { name: 'ApplicationDevelopment' },
                    { name: 'UX/UIDevelopment' },
                    { name: 'SoftwareTesting & QA' }
                ] },
            { name: 'DATA MANAGEMENT',
                managedServiceList: [
                    { name: 'CleanseDataset' },
                    { name: 'Data Mapping & Conversion' },
                    { name: 'Data Migration & Consolidation' },
                    { name: 'Spend Analysis' }
                ] },
            { name: 'IT STAFFING & TRAINING',
                managedServiceList: [
                    { name: 'StaffingServices' },
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
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .main-banner .carousel {\n  margin-top: -60px;\n  z-index: 1;\n}\n::ng-deep .main-banner .container {\n  position: relative;\n  height: 800px;\n  overflow: hidden;\n}\n::ng-deep .main-banner .carousel-item {\n  display: block;\n}\n::ng-deep .main-banner .carousel-item .carousel-caption {\n  top: 50%;\n  left: -100%;\n  z-index: 10;\n  color: #fff;\n  text-align: left;\n  width: 600px;\n  transform: translateY(-50%);\n  transition: all 1s;\n  opacity: 0;\n}\n::ng-deep .main-banner .carousel-item .carousel-caption h1 {\n  color: #FFC100;\n  text-transform: uppercase;\n  font-weight: bold;\n  margin: 0;\n}\n::ng-deep .main-banner .carousel-item .carousel-caption .btn {\n  border: 2px solid #fff;\n  margin-right: 15px;\n  margin-top: 50px;\n}\n::ng-deep .main-banner .carousel-item .info-img {\n  position: absolute;\n  right: -100%;\n  top: 55%;\n  transform: translateY(-55%);\n  z-index: 1;\n  transition: all 1s;\n  opacity: 0;\n}\n::ng-deep .main-banner .carousel-item.active .carousel-caption {\n  left: 15px;\n  opacity: 0.9;\n}\n::ng-deep .main-banner .carousel-item.active .info-img {\n  right: 15px;\n  opacity: 0.9;\n}\n::ng-deep .main-banner .carousel-indicators li {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n::ng-deep .main-banner .picsum-img-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n::ng-deep .main-banner .picsum-img-wrapper::after {\n  content: \"\";\n  background: rgba(16, 80, 128, 0.9);\n  width: 100%;\n  height: 100%;\n  opacity: 0.9;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n::ng-deep .main-banner .picsum-img-wrapper img {\n  width: 100%;\n}\nngb-carousel {\n  outline: none;\n}\n.panel-heading, .panel-body {\n  border: none;\n  text-align: center;\n}\n.clients, .section-projects, .section-sevices, .testimonials, .section-info, .contact-info {\n  padding: 70px 0;\n}\n.clients {\n  background-color: #f7f7f7;\n}\n.clients h6 {\n  margin-bottom: 50px;\n}\n.clear-float {\n  clear: both;\n  float: none;\n}\n.contact-info .social-net ul {\n  padding: 0;\n  margin: 0;\n}\n.contact-info .social-net ul li {\n  list-style-type: none;\n  margin-bottom: 10px;\n}\n.contact-info .social-net ul li span {\n  margin-left: 15px;\n  color: #555555;\n}\n.contact-info .social-net ul li svg {\n  width: 20px;\n  height: 20px;\n}\n.contact-info .set-part {\n  margin: 40px 0;\n}\n.contact-info h6 {\n  color: #555;\n  font-weight: bold;\n}\n.contact-info form {\n  margin-top: 42px;\n}\n.contact-info form .btn {\n  margin-top: 5px;\n}\n.contact-info .email-link {\n  color: #276caa;\n}\n.icon-circle {\n  height: 90px;\n  width: 90px;\n  border-radius: 50%;\n  margin: 0 auto;\n}\n.icon-circle i {\n  line-height: 90px;\n}\n.section-info .panel-container {\n  min-height: 330px;\n  margin-bottom: 15px;\n  perspective: 1000px;\n}\n.section-info .panel-container:hover .panel {\n  transform: rotateX(180deg);\n}\n.section-info .panel {\n  color: #fff;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 1s ease;\n  transform-style: preserve-3d;\n}\n.section-info .panel .panel-front {\n  border-top: 5px solid;\n  padding-top: 25px;\n  z-index: 1;\n}\n.section-info .panel .panel-front::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n.section-info .panel .panel-front.red {\n  background: url('1.jpg') no-repeat top center;\n  border-color: #b9646e;\n}\n.section-info .panel .panel-front.red .circle-bg {\n  background-color: #b9646e;\n}\n.section-info .panel .panel-front.blue {\n  background: url('2.jpg') no-repeat top center;\n  border-color: #276caa;\n}\n.section-info .panel .panel-front.blue .circle-bg {\n  background-color: #276caa;\n}\n.section-info .panel .panel-front.green {\n  background: url('3.jpg') no-repeat top center;\n  border-color: #4bbb57;\n}\n.section-info .panel .panel-front.green .circle-bg {\n  background-color: #4bbb57;\n}\n.section-info .panel .panel-back {\n  padding-top: 25px;\n}\n.section-info .panel .panel-back.red {\n  background-color: #b9646e;\n}\n.section-info .panel .panel-back.blue {\n  background-color: #276caa;\n}\n.section-info .panel .panel-back.green {\n  background-color: #4bbb57;\n}\n.section-info .panel .panel-front, .section-info .panel .panel-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.section-info .panel .panel-back {\n  transform: rotateX(180deg);\n}\n.section-info .panel .panel-back p {\n  padding: 25px;\n}\n.section-info .panel h5 {\n  margin: 20px 0;\n}\n.section-info .panel p {\n  margin: 0;\n}\n.section-info h6 {\n  margin-bottom: 40px;\n}\n.section-info svg {\n  fill: #fff;\n}\n.section-sevices {\n  background-color: rgba(204, 204, 204, 0.2);\n}\n.section-sevices .panel {\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 5px;\n  margin-bottom: 15px;\n  padding: 15px 0;\n}\n.section-sevices .panel h5 {\n  color: #333333;\n  font-weight: bold;\n  margin-bottom: 25px;\n}\n.section-sevices .panel p {\n  padding: 0 10px;\n}\n.section-sevices .panel .icon-circle {\n  margin: 15px auto;\n}\n.section-sevices .panel .icon-circle svg {\n  height: 80px;\n  width: 80px;\n}\n.section-sevices .panel .icon-circle.skyblue {\n  background: #88cedb;\n}\n.section-sevices .panel .icon-circle.limegreen {\n  background: #78c29a;\n}\n.section-sevices .panel .icon-circle.yellow {\n  background: #f1bb57;\n}\n.section-sevices .panel .icon-circle.orange {\n  background: #e97f61;\n}\n.section-sevices .panel .icon-circle.blue {\n  background: #88cedb;\n}\n.section-sevices .panel .icon-circle.purple {\n  background: #787fc2;\n}\n.section-sevices h6 {\n  margin-bottom: 40px;\n}\n::ng-deep .testimonials {\n  position: relative;\n  overflow: hidden;\n}\n::ng-deep .testimonials img {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n::ng-deep .testimonials h1 {\n  color: #fff;\n  margin-bottom: 20px;\n}\n::ng-deep .testimonials p {\n  font-size: 18px;\n  font-weight: 700;\n  color: #fff;\n  margin-bottom: 5px;\n}\n::ng-deep .testimonials p:last-child {\n  margin-top: 35px;\n}\n::ng-deep .testimonials .carousel {\n  margin-top: 0;\n  z-index: 1;\n}\n::ng-deep .testimonials .carousel-inner {\n  height: 282px;\n}\n::ng-deep .testimonials .carousel-indicators li {\n  height: 10px;\n  border-radius: 10px;\n  border: 1px solid #fff;\n  background: transparent;\n}\n::ng-deep .testimonials .carousel-indicators li.active {\n  background: #fff;\n}\n::ng-deep .testimonials .carousel-item {\n  transition: opacity 1s ease !important;\n  position: absolute !important;\n  display: block !important;\n  opacity: 0;\n}\n::ng-deep .testimonials .carousel-item.active {\n  position: relative !important;\n  opacity: 1;\n}\n.section-projects {\n  position: relative;\n  float: left;\n  width: 100%;\n}\n.section-projects h6 {\n  margin: 35px 0 40px;\n}\n.section-projects .project-grid li {\n  width: 25%;\n  float: left;\n  list-style-type: none;\n}\n.section-projects .project-grid li figure {\n  margin: 0 0 2px 0;\n}\n.section-projects .project-grid li:first-child {\n  width: 50%;\n}\n.section-projects .project-grid li:first-child figure {\n  margin: 0;\n}\n.section-projects .project-grid li:nth-child(4) figure, .section-projects .project-grid li:nth-child(5) figure {\n  margin: 0;\n}\n.section-projects .project-grid button {\n  background: none;\n  border: 2px solid #fff;\n}\n.section-projects .p1 {\n  padding: 1px;\n}\n.section-projects figure {\n  position: relative;\n  float: left;\n  overflow: hidden;\n  width: calc(100% - 2px);\n  background-color: #fff;\n  margin: 0;\n  cursor: pointer;\n}\n.section-projects figure img {\n  position: relative;\n  display: block;\n  transform: scale(1);\n  transition: 0.5s ease-in-out;\n  max-width: 100%;\n  height: auto;\n}\n.section-projects figure .show-more-overlay {\n  background: rgba(0, 0, 0, 0) linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0.2) 23%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 68%, rgba(0, 0, 0, 0) 81%, rgba(0, 0, 0, 0) 92%, rgba(0, 0, 0, 0) 100%) repeat scroll 0 0;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transform: translateY(100%);\n  transition: all 0.5s ease 0s;\n}\n.section-projects figure figcaption {\n  webkit-backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  position: absolute;\n  bottom: 0px;\n  left: 20px;\n  right: 20px;\n  max-height: 40px;\n  transition: 0.5s ease-in-out;\n  z-index: 2;\n}\n.section-projects figure .show_more-title {\n  color: #fff;\n  font-size: 21px;\n  line-height: 30px;\n  font-weight: 700;\n  margin-bottom: 10px;\n}\n.section-projects figure .show_more-desc {\n  color: #fff;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 300;\n}\n.section-projects figure::after {\n  content: \"\";\n  background: rgba(0, 0, 0, 0.3);\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.section-projects figure:hover img {\n  transform: scale(1.1);\n}\n.section-projects figure:hover .show-more-overlay {\n  background: rgba(0, 0, 0, 0) linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0.2) 100%) repeat scroll 0 0;\n  transform: translateY(0px);\n}\n.section-projects figure:hover figcaption {\n  height: auto;\n  max-height: 200px;\n  bottom: 50px;\n}\n.section-our-products {\n  padding: 0 0 70px;\n}\n.section-our-products .panel {\n  padding: 0 15px;\n  margin-bottom: 15px;\n  background: rgba(204, 204, 204, 0.2);\n}\n.section-our-products .panel h5 {\n  font-weight: bold;\n}\n.section-our-products .panel .row div:first-child {\n  background: #276caa;\n}\n.section-our-products .panel .row div img {\n  align-self: center;\n  padding: 15px 0;\n}\n.section-our-products .panel .row div:nth-child(2) {\n  padding: 25px;\n}\n.section-our-products .panel .row div:nth-child(2) ul {\n  margin-bottom: 20px;\n}\n.section-our-products .panel .row div:nth-child(2) ul li {\n  padding: 0 0 10px 20px;\n  list-style: none outside;\n  font-size: 16px;\n  position: relative;\n  font-weight: bold;\n}\n.section-our-products .panel .row div:nth-child(2) ul li::before {\n  content: \" \";\n  background: #214f7a;\n  font-weight: bold;\n  position: absolute;\n  top: 8px;\n  left: 0px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n@media (max-width: 576px) {\n  .main-banner {\n    display: none;\n  }\n\n  .section-projects .project-grid li {\n    width: 100%;\n  }\n  .section-projects .project-grid li figure {\n    margin: 0 0 15px;\n  }\n  .section-projects .project-grid li:first-child {\n    width: 100%;\n  }\n  .section-projects .project-grid li:first-child figure {\n    margin: 0 0 15px;\n  }\n  .section-projects .project-grid li:nth-child(4) figure, .section-projects .project-grid li:nth-child(5) figure {\n    margin-bottom: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9GOlxcZ2l0aHViXFx3b3JrL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyxpQkFBQTtFQUNBLFVBQUE7QUNBRjtBREVDO0VBQ0Msa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREVDO0VBQ0MsY0FBQTtBQ0FGO0FEQ0M7RUFDQyxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNDRjtBREFFO0VBQ0MsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FDRUg7QURBRTtFQUNDLHNCQUFBO0VBQ0Esa0JBQUE7RUFDRyxnQkFBQTtBQ0VOO0FEQ0M7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQ0Y7QURFRTtFQUNDLFVBQUE7RUFDQSxZQUFBO0FDQUg7QURFRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDQUg7QURRRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNOSDtBRFNDO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDUEY7QURTRTtFQUNDLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7QUNQSDtBRFNFO0VBQ0MsV0FBQTtBQ1BIO0FEYUE7RUFDQyxhQUFBO0FDVkQ7QURhQTtFQUNDLFlBQUE7RUFDQSxrQkFBQTtBQ1ZEO0FEYUE7RUFDQyxlQUFBO0FDVkQ7QURhQTtFQUNDLHlCQUFBO0FDVkQ7QURXQztFQUNDLG1CQUFBO0FDVEY7QURhQTtFQUNDLFdBQUE7RUFDQSxXQUFBO0FDVkQ7QURlRTtFQUNDLFVBQUE7RUFDQSxTQUFBO0FDWkg7QURhRztFQUNDLHFCQUFBO0VBQ0EsbUJBQUE7QUNYSjtBRFlHO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FDVkw7QURZSTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDVkw7QURnQkM7RUFDRSxjQUFBO0FDZEg7QURpQkM7RUFDQyxXQUFBO0VBQ0EsaUJBQUE7QUNmRjtBRGlCQztFQUNDLGdCQUFBO0FDZkY7QURnQkU7RUFDQyxlQUFBO0FDZEg7QURpQkM7RUFDQyxjQUFBO0FDZkY7QUR1QkE7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ3BCRDtBRHFCQztFQUNDLGlCQUFBO0FDbkJGO0FEeUJDO0VBQ0MsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDdEJGO0FEdUJFO0VBQ0MsMEJBQUE7QUNyQkg7QUR3QkM7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtBQ3RCRjtBRHVCRTtFQUNDLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FDckJIO0FEc0JHO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQ3BCSjtBRHNCRztFQUNDLDZDQUFBO0VBQ0EscUJBaERDO0FDNEJMO0FEcUJJO0VBQ0MseUJBbERBO0FDK0JMO0FEdUJHO0VBQ0MsNkNBQUE7RUFDQSxxQkF2REU7QUNrQ047QURzQkk7RUFDQyx5QkF6REM7QUNxQ047QUR3Qkc7RUFDQyw2Q0FBQTtFQUNBLHFCQTlERztBQ3dDUDtBRHVCSTtFQUNDLHlCQWhFRTtBQzJDUDtBRDBCRTtFQUNDLGlCQUFBO0FDeEJIO0FEeUJHO0VBQ0MseUJBMUVDO0FDbURMO0FEMEJHO0VBQ0MseUJBN0VFO0FDcUROO0FEMkJHO0VBQ0MseUJBaEZHO0FDdURQO0FENkJFO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7QUMzQkg7QUQ2QkU7RUFFQywwQkFBQTtBQzVCSDtBRDZCRztFQUNDLGFBQUE7QUMzQko7QUQ4QkU7RUFDQyxjQUFBO0FDNUJIO0FEOEJFO0VBQ0MsU0FBQTtBQzVCSDtBRGdDQztFQUNDLG1CQUFBO0FDOUJGO0FEaUNDO0VBQ0MsVUFBQTtBQy9CRjtBRDBDQTtFQUNDLDBDQUFBO0FDdkNEO0FEd0NDO0VBQ0MsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDdENGO0FEdUNFO0VBQ0MsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNyQ0g7QUR3Q0U7RUFDQyxlQUFBO0FDdENIO0FEd0NFO0VBQ0MsaUJBQUE7QUN0Q0g7QUR1Q0c7RUFDQyxZQUFBO0VBQ0EsV0FBQTtBQ3JDSjtBRHVDRztFQUNDLG1CQS9CSztBQ05UO0FEdUNHO0VBQ0MsbUJBL0JPO0FDTlg7QUR1Q0c7RUFDQyxtQkFwQ0k7QUNEUjtBRHVDRztFQUNDLG1CQXRDSTtBQ0NSO0FEdUNHO0VBQ0MsbUJBdkNFO0FDRU47QUR1Q0c7RUFDQyxtQkF6Q0k7QUNJUjtBRDBDQztFQUNDLG1CQUFBO0FDeENGO0FENENBO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtBQ3pDRDtBRDBDQztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FDeENGO0FEMENDO0VBQ0MsV0FBQTtFQUNBLG1CQUFBO0FDeENGO0FEMENDO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDeENGO0FEeUNFO0VBQ0MsZ0JBQUE7QUN2Q0g7QUQwQ0M7RUFDQyxhQUFBO0VBQ0EsVUFBQTtBQ3hDRjtBRDBDQztFQUNDLGFBQUE7QUN4Q0Y7QUQwQ0M7RUFDQyxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDeENGO0FEeUNFO0VBQ0MsZ0JBQUE7QUN2Q0g7QUQwQ0M7RUFDQyxzQ0FBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FDeENGO0FEeUNFO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0FDdkNKO0FENENBO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ3pDRDtBRDBDQztFQUNDLG1CQUFBO0FDeENGO0FEMkNFO0VBQ0MsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ3pDSDtBRDBDRztFQUNDLGlCQUFBO0FDeENKO0FEMENHO0VBQ0MsVUFBQTtBQ3hDSjtBRHlDSTtFQUNDLFNBQUE7QUN2Q0w7QUQyQ0k7RUFDQyxTQUFBO0FDekNMO0FENkNFO0VBQ0MsZ0JBQUE7RUFDQSxzQkFBQTtBQzNDSDtBRDhDQztFQUNDLFlBQUE7QUM1Q0Y7QUQ4Q0M7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQzVDRjtBRDZDRTtFQUNDLGtCQUFBO0VBQ0EsY0FBQTtFQUVBLG1CQUFBO0VBRUEsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQzNDSDtBRDZDRTtFQUNDLHFOQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQzNDSDtBRDhDRTtFQUNDLGtDQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFFQSw0QkFBQTtFQUNBLFVBQUE7QUM1Q0g7QUQ4Q0U7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQzVDSDtBRDhDRTtFQUNDLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQzVDSDtBRDhDRTtFQUNDLFdBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUM1Q0g7QUQrQ0c7RUFFQyxxQkFBQTtBQzdDSjtBRCtDRztFQUVDLHVHQUFBO0VBQ0EsMEJBQUE7QUM5Q0o7QURnREc7RUFFQyxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDL0NKO0FEc0RBO0VBQ0MsaUJBQUE7QUNuREQ7QURvREM7RUFDQyxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtBQ2xERjtBRG1ERTtFQUNDLGlCQUFBO0FDakRIO0FEcURJO0VBQ0MsbUJBQUE7QUNuREw7QURxREk7RUFDQyxrQkFBQTtFQUNBLGVBQUE7QUNuREw7QURxREk7RUFDQyxhQUFBO0FDbkRMO0FEb0RLO0VBQ0MsbUJBQUE7QUNsRE47QURtRE07RUFDQyxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNqRFA7QURrRE87RUFDQyxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNoRFI7QUQ4REE7RUFDQztJQUNDLGFBQUE7RUMzREE7O0VEK0RBO0lBQ0MsV0FBQTtFQzVERDtFRDZEQztJQUNDLGdCQUFBO0VDM0RGO0VENkRDO0lBQ0MsV0FBQTtFQzNERjtFRDREQztJQUNDLGdCQUFBO0VDMURGO0VEOERFO0lBQ0MsbUJBQUE7RUM1REg7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWFpbi1iYW5uZXJ7XHJcblx0LmNhcm91c2Vse1xyXG5cdFx0bWFyZ2luLXRvcDotNjBweDtcclxuXHRcdHotaW5kZXg6MTtcclxuXHR9XHJcblx0LmNvbnRhaW5lcntcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGhlaWdodDogODAwcHg7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdH1cclxuXHQuY2Fyb3VzZWwtaXRlbXtcclxuXHRcdGRpc3BsYXk6YmxvY2s7XHJcblx0LmNhcm91c2VsLWNhcHRpb24ge1xyXG5cdFx0dG9wOiA1MCU7XHJcblx0XHRsZWZ0OiAtMTAwJTtcclxuXHRcdHotaW5kZXg6IDEwO1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdFx0d2lkdGg6IDYwMHB4O1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5cdFx0dHJhbnNpdGlvbjogYWxsIDFzO1xyXG5cdFx0b3BhY2l0eTowO1xyXG5cdFx0aDF7XHJcblx0XHRcdGNvbG9yOiNGRkMxMDA7XHJcblx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcblx0XHRcdG1hcmdpbjowO1xyXG5cdFx0fVxyXG5cdFx0LmJ0bntcclxuXHRcdFx0Ym9yZGVyOjJweCBzb2xpZCAjZmZmO1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBcdFx0bWFyZ2luLXRvcDogNTBweDtcclxuXHRcdH1cclxuXHR9XHJcblx0LmluZm8taW1ne1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0cmlnaHQ6LTEwMCU7XHJcblx0XHR0b3A6NTUlO1xyXG5cdFx0dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTU1JSk7XHJcblx0XHR6LWluZGV4OjE7XHJcblx0XHR0cmFuc2l0aW9uOiBhbGwgMXM7XHJcblx0XHRvcGFjaXR5OjA7XHJcblx0fVxyXG5cdCYuYWN0aXZle1xyXG5cdFx0LmNhcm91c2VsLWNhcHRpb257XHJcblx0XHRcdGxlZnQ6MTVweDtcclxuXHRcdFx0b3BhY2l0eTouOTtcclxuXHRcdH1cclxuXHRcdC5pbmZvLWltZ3tcclxuXHRcdFx0cmlnaHQ6MTVweDtcdFxyXG5cdFx0XHRvcGFjaXR5Oi45O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG59XHJcblx0XHJcblx0LmNhcm91c2VsLWluZGljYXRvcnMge1xyXG5cdFx0bGl7XHJcblx0XHRcdHdpZHRoOiAxMHB4O1xyXG5cdFx0XHRoZWlnaHQ6IDEwcHg7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdH1cclxuXHR9XHJcblx0LnBpY3N1bS1pbWctd3JhcHBlcntcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDowO1xyXG5cdFx0bGVmdDowO1xyXG5cdFx0aGVpZ2h0OjEwMCU7XHJcblx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0XHJcblx0XHQmOjphZnRlcntcclxuXHRcdFx0Y29udGVudDogXCJcIjtcclxuXHRcdFx0YmFja2dyb3VuZDpyZ2JhKDE2LDgwLDEyOCwwLjkpO1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRvcGFjaXR5OiAwLjk7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0bGVmdDogMDtcclxuXHRcdFx0dG9wOiAwO1xyXG5cdFx0fVxyXG5cdFx0aW1ne1xyXG5cdFx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbm5nYi1jYXJvdXNlbHtcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ucGFuZWwtaGVhZGluZywgLnBhbmVsLWJvZHkgIHtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2xpZW50cywgLnNlY3Rpb24tcHJvamVjdHMsIC5zZWN0aW9uLXNldmljZXMsIC50ZXN0aW1vbmlhbHMsIC5zZWN0aW9uLWluZm8sIC5jb250YWN0LWluZm97XHJcblx0cGFkZGluZzo3MHB4IDA7XHJcbn1cclxuXHJcbi5jbGllbnRze1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LCAyNDcsIDI0NywgMSk7XHJcblx0aDZ7XHJcblx0XHRtYXJnaW4tYm90dG9tOjUwcHg7XHJcblx0fVxyXG59XHJcblxyXG4uY2xlYXItZmxvYXR7XHJcblx0Y2xlYXI6Ym90aDtcclxuXHRmbG9hdDpub25lO1xyXG59XHJcblxyXG4uY29udGFjdC1pbmZve1xyXG5cdC5zb2NpYWwtbmV0e1xyXG5cdFx0dWx7XHJcblx0XHRcdHBhZGRpbmc6MDtcclxuXHRcdFx0bWFyZ2luOjA7XHJcblx0XHRcdGxpe1xyXG5cdFx0XHRcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuXHRcdFx0XHRtYXJnaW4tYm90dG9tOjEwcHg7XHJcblx0XHRcdHNwYW57XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDoxNXB4O1xyXG5cdFx0XHRcdFx0Y29sb3I6IzU1NTU1NTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0c3Zne1xyXG5cdFx0XHRcdFx0d2lkdGg6MjBweDtcclxuXHRcdFx0XHRcdGhlaWdodDoyMHB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHQuc2V0LXBhcnR7XHJcblx0XHRcdG1hcmdpbjo0MHB4IDA7XHJcblx0XHR9XHJcblx0XHJcblx0aDZ7XHJcblx0XHRjb2xvcjojNTU1O1xyXG5cdFx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHR9XHJcblx0Zm9ybXtcclxuXHRcdG1hcmdpbi10b3A6NDJweDtcclxuXHRcdC5idG57XHJcblx0XHRcdG1hcmdpbi10b3A6NXB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHQuZW1haWwtbGlua3tcclxuXHRcdGNvbG9yOiMyNzZjYWE7XHJcblx0fVxyXG59XHJcblxyXG4kcmVkOiNiOTY0NmU7XHJcbiRibHVlOiMyNzZjYWE7XHJcbiRncmVlbjojNGJiYjU3O1xyXG5cclxuLmljb24tY2lyY2xle1xyXG5cdGhlaWdodDo5MHB4O1xyXG5cdHdpZHRoOjkwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czo1MCU7XHJcblx0bWFyZ2luOjAgYXV0bztcclxuXHRpe1xyXG5cdFx0bGluZS1oZWlnaHQ6OTBweDtcclxuXHR9XHJcblx0XHJcbn1cclxuXHJcbi5zZWN0aW9uLWluZm97XHJcblx0LnBhbmVsLWNvbnRhaW5lcntcclxuXHRcdG1pbi1oZWlnaHQ6IDMzMHB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbToxNXB4O1xyXG5cdFx0cGVyc3BlY3RpdmU6IDEwMDBweDtcclxuXHRcdCY6aG92ZXIgLnBhbmVse1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxuXHRcdH1cclxuXHR9XHJcblx0LnBhbmVse1xyXG5cdFx0Y29sb3I6I2ZmZjtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XHJcblx0XHR0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG5cdFx0LnBhbmVsLWZyb250e1xyXG5cdFx0XHRib3JkZXItdG9wOiA1cHggc29saWQ7XHJcblx0XHRcdHBhZGRpbmctdG9wOiAyNXB4O1xyXG5cdFx0XHR6LWluZGV4OiAxO1xyXG5cdFx0XHQmOjphZnRlcntcclxuXHRcdFx0XHRjb250ZW50OicnO1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0XHRcdGhlaWdodDoxMDAlO1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6cmdiYSgwLDAsMCwuNSk7XHJcblx0XHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdFx0ei1pbmRleDogLTE7XHJcblx0XHRcdH1cclxuXHRcdFx0Ji5yZWR7XHJcblx0XHRcdFx0YmFja2dyb3VuZDp1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy8xLmpwZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XHJcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAkcmVkO1xyXG5cdFx0XHRcdC5jaXJjbGUtYmd7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiRyZWQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQmLmJsdWV7XHJcblx0XHRcdFx0YmFja2dyb3VuZDp1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy8yLmpwZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XHJcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAkYmx1ZTtcclxuXHRcdFx0XHQuY2lyY2xlLWJne1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjokYmx1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdCYuZ3JlZW57XHJcblx0XHRcdFx0YmFja2dyb3VuZDp1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy8zLmpwZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XHJcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAkZ3JlZW47XHJcblx0XHRcdFx0LmNpcmNsZS1iZ3tcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6JGdyZWVuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC5wYW5lbC1iYWNre1xyXG5cdFx0XHRwYWRkaW5nLXRvcDogMjVweDtcclxuXHRcdFx0Ji5yZWR7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjokcmVkO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQmLmJsdWV7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjokYmx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0Ji5ncmVlbntcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiRncmVlbjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFxyXG5cdFx0LnBhbmVsLWZyb250LCAucGFuZWwtYmFja3tcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHQtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHRcdFx0YmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdFx0fVxyXG5cdFx0LnBhbmVsLWJhY2tcclxuXHRcdHtcclxuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XHJcblx0XHRcdHB7XHJcblx0XHRcdFx0cGFkZGluZzoyNXB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRoNXtcclxuXHRcdFx0bWFyZ2luOjIwcHggMDtcclxuXHRcdH1cclxuXHRcdHB7XHJcblx0XHRcdG1hcmdpbjowO1xyXG5cdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcblx0aDZ7XHJcblx0XHRtYXJnaW4tYm90dG9tOjQwcHg7XHJcblx0fVxyXG5cclxuXHRzdmd7XHJcblx0XHRmaWxsOiNmZmY7XHJcblx0fVxyXG59XHJcblxyXG4kc2t5Ymx1ZTojODhjZWRiO1xyXG4keWVsbG93OiNmMWJiNTc7XHJcbiRvcmFuZ2U6I2U5N2Y2MTtcclxuJGxpbWVncmVlbjojNzhjMjlhO1xyXG4kYmx1ZTojODhjZWRiO1xyXG4kcHVycGxlOiM3ODdmYzI7XHJcblxyXG4uc2VjdGlvbi1zZXZpY2Vze1xyXG5cdGJhY2tncm91bmQtY29sb3I6cmdiYSgyMDQsIDIwNCwgMjA0LCAwLjIpO1xyXG5cdC5wYW5lbHtcclxuXHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuXHRcdGJvcmRlcjoxcHggc29saWQgcmdiYSgyMjQsIDIyNCwgMjI0LCAxKTtcclxuXHRcdGJvcmRlci1yYWRpdXM6NXB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHRcdHBhZGRpbmc6IDE1cHggMDtcclxuXHRcdGg1e1xyXG5cdFx0XHRjb2xvcjojMzMzMzMzO1xyXG5cdFx0XHRmb250LXdlaWdodDpib2xkO1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOjI1cHg7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHB7XHJcblx0XHRcdHBhZGRpbmc6MCAxMHB4O1xyXG5cdFx0fVxyXG5cdFx0Lmljb24tY2lyY2xle1xyXG5cdFx0XHRtYXJnaW46IDE1cHggYXV0bztcclxuXHRcdFx0c3Zne1xyXG5cdFx0XHRcdGhlaWdodDo4MHB4O1xyXG5cdFx0XHRcdHdpZHRoOjgwcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0Ji5za3libHVle1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6JHNreWJsdWU7XHJcblx0XHRcdH1cclxuXHRcdFx0Ji5saW1lZ3JlZW57XHJcblx0XHRcdFx0YmFja2dyb3VuZDokbGltZWdyZWVuO1xyXG5cdFx0XHR9XHJcblx0XHRcdCYueWVsbG93e1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6JHllbGxvdztcclxuXHRcdFx0fVxyXG5cdFx0XHQmLm9yYW5nZXtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiRvcmFuZ2U7XHJcblx0XHRcdH1cclxuXHRcdFx0Ji5ibHVle1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6JGJsdWU7XHJcblx0XHRcdH1cclxuXHRcdFx0Ji5wdXJwbGV7XHJcblx0XHRcdFx0YmFja2dyb3VuZDokcHVycGxlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRoNntcclxuXHRcdG1hcmdpbi1ib3R0b206NDBweDtcclxuXHR9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudGVzdGltb25pYWxze1xyXG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0aW1ne1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDowO1xyXG5cdFx0bGVmdDowO1xyXG5cdH1cclxuXHRoMXtcclxuXHRcdGNvbG9yOiNmZmY7XHJcblx0XHRtYXJnaW4tYm90dG9tOjIwcHg7XHJcblx0fVxyXG5cdHB7XHJcblx0XHRmb250LXNpemU6MThweDtcclxuXHRcdGZvbnQtd2VpZ2h0OjcwMDtcclxuXHRcdGNvbG9yOiNmZmY7XHJcblx0XHRtYXJnaW4tYm90dG9tOjVweDtcclxuXHRcdCY6bGFzdC1jaGlsZHtcclxuXHRcdFx0bWFyZ2luLXRvcDozNXB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHQuY2Fyb3VzZWx7XHJcblx0XHRtYXJnaW4tdG9wOjA7XHJcblx0XHR6LWluZGV4OjE7XHJcblx0fVxyXG5cdC5jYXJvdXNlbC1pbm5lcntcclxuXHRcdGhlaWdodDoyODJweDtcclxuXHR9XHJcblx0LmNhcm91c2VsLWluZGljYXRvcnMgbGl7XHJcblx0XHRoZWlnaHQ6MTBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6MTBweDtcclxuXHRcdGJvcmRlcjoxcHggc29saWQgI2ZmZjtcclxuXHRcdGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcblx0XHQmLmFjdGl2ZXtcclxuXHRcdFx0YmFja2dyb3VuZDojZmZmO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQuY2Fyb3VzZWwtaXRlbSB7XHJcblx0XHR0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UgIWltcG9ydGFudDtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG5cdFx0ZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuXHRcdG9wYWNpdHk6IDA7XHJcblx0XHQmLmFjdGl2ZSB7XHJcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0b3BhY2l0eTogMTtcclxuXHRcdFx0ICB9XHJcblx0ICB9XHJcbn1cclxuXHJcbi5zZWN0aW9uLXByb2plY3RzIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aDZ7XHJcblx0XHRtYXJnaW46IDM1cHggMCA0MHB4O1xyXG5cdH1cclxuXHQucHJvamVjdC1ncmlke1xyXG5cdFx0bGl7XHJcblx0XHRcdHdpZHRoOjI1JTtcclxuXHRcdFx0ZmxvYXQ6bGVmdDtcclxuXHRcdFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG5cdFx0XHRmaWd1cmV7XHJcblx0XHRcdFx0bWFyZ2luOjAgMCAycHggMDtcclxuXHRcdFx0fVxyXG5cdFx0XHQmOmZpcnN0LWNoaWxke1xyXG5cdFx0XHRcdHdpZHRoOjUwJTtcclxuXHRcdFx0XHRmaWd1cmV7XHJcblx0XHRcdFx0XHRtYXJnaW46MDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0JjpudGgtY2hpbGQoNCksICY6bnRoLWNoaWxkKDUpe1xyXG5cdFx0XHRcdGZpZ3VyZXtcclxuXHRcdFx0XHRcdG1hcmdpbjowO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0YnV0dG9ue1xyXG5cdFx0XHRiYWNrZ3JvdW5kOm5vbmU7XHJcblx0XHRcdGJvcmRlcjoycHggc29saWQgI2ZmZjtcclxuXHRcdH1cclxuXHR9XHJcblx0LnAxe1xyXG5cdFx0cGFkZGluZzoxcHg7XHJcblx0fVxyXG5cdGZpZ3VyZSB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRmbG9hdDogbGVmdDtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHR3aWR0aDogY2FsYygxMDAlIC0gMnB4KTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0XHRtYXJnaW46MDtcclxuXHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdGltZyB7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuXHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuXHRcdFx0LXdlYmtpdC10cmFuc2l0aW9uOiAuNXMgZWFzZS1pbi1vdXQ7XHJcblx0XHRcdHRyYW5zaXRpb246IC41cyBlYXNlLWluLW91dDtcclxuXHRcdFx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdFx0XHRoZWlnaHQ6IGF1dG87XHJcblx0XHR9XHJcblx0XHQuc2hvdy1tb3JlLW92ZXJsYXkge1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2IoMCwgMCwgMCkgMCUsIHJnYmEoMCwgMCwgMCwgMC4yKSAyMyUsIHJnYmEoMCwgMCwgMCwgMCkgNDAlLCByZ2JhKDAsIDAsIDAsIDApIDY4JSwgcmdiYSgwLCAwLCAwLCAwKSA4MSUsIHJnYmEoMCwgMCwgMCwgMCkgOTIlLCByZ2JhKDAsIDAsIDAsIDApIDEwMCUpIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG5cdFx0XHRib3R0b206IDA7XHJcblx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0cmlnaHQ6IDA7XHJcblx0XHRcdHRvcDogMDtcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG5cdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDBzO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRmaWdjYXB0aW9uIHtcclxuXHRcdFx0d2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHRcdFx0YmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGJvdHRvbTogMHB4O1xyXG5cdFx0XHRsZWZ0OiAyMHB4O1xyXG5cdFx0XHRyaWdodDogMjBweDtcclxuXHRcdFx0bWF4LWhlaWdodDogNDBweDtcclxuXHRcdFx0LXdlYmtpdC10cmFuc2l0aW9uOiAuNXMgZWFzZS1pbi1vdXQ7XHJcblx0XHRcdHRyYW5zaXRpb246IC41cyBlYXNlLWluLW91dDtcclxuXHRcdFx0ei1pbmRleDogMjtcclxuXHRcdH1cclxuXHRcdC5zaG93X21vcmUtdGl0bGUge1xyXG5cdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0Zm9udC1zaXplOiAyMXB4O1xyXG5cdFx0XHRsaW5lLWhlaWdodDogMzBweDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHRcdH1cclxuXHRcdC5zaG93X21vcmUtZGVzYyB7XHJcblx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG5cdFx0XHRmb250LXdlaWdodDogMzAwO1xyXG5cdFx0fVxyXG5cdFx0Jjo6YWZ0ZXJ7XHJcblx0XHRcdGNvbnRlbnQ6Jyc7XHJcblx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuXHRcdFx0Ym90dG9tOiAwO1xyXG5cdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRoZWlnaHQ6MTAwJTtcclxuXHRcdFx0ei1pbmRleDogMTtcclxuXHRcdH1cclxuXHRcdCY6aG92ZXJ7XHJcblx0XHRcdGltZ3tcclxuXHRcdFx0XHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuXHRcdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcblx0XHRcdH1cclxuXHRcdFx0LnNob3ctbW9yZS1vdmVybGF5XHJcblx0XHRcdHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2IoMCwgMCwgMCkgMCUsIHJnYmEoMCwgMCwgMCwgMC4yKSAxMDAlKSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuXHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmaWdjYXB0aW9uXHJcblx0XHRcdHtcclxuXHRcdFx0XHRoZWlnaHQ6IGF1dG87XHJcblx0XHRcdFx0bWF4LWhlaWdodDogMjAwcHg7XHJcblx0XHRcdFx0Ym90dG9tOiA1MHB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG5cclxuLnNlY3Rpb24tb3VyLXByb2R1Y3Rze1xyXG5cdHBhZGRpbmc6MCAwIDcwcHg7XHJcblx0LnBhbmVse1xyXG5cdFx0cGFkZGluZzowIDE1cHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cdFx0YmFja2dyb3VuZDpyZ2JhKDIwNCwgMjA0LCAyMDQsIDAuMik7XHJcblx0XHRoNXtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRcdH1cclxuXHRcdC5yb3d7XHJcblx0XHRcdGRpdntcclxuXHRcdFx0XHQmOmZpcnN0LWNoaWxke1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDojMjc2Y2FhO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpbWd7XHJcblx0XHRcdFx0XHRhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAxNXB4IDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdCY6bnRoLWNoaWxkKDIpe1xyXG5cdFx0XHRcdFx0cGFkZGluZzoyNXB4O1xyXG5cdFx0XHRcdFx0dWx7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206MjBweDtcclxuXHRcdFx0XHRcdFx0bGl7XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogMCAwIDEwcHggMjBweDtcclxuXHRcdFx0XHRcdFx0XHRsaXN0LXN0eWxlOiBub25lIG91dHNpZGU7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDpib2xkO1xyXG5cdFx0XHRcdFx0XHRcdCY6OmJlZm9yZXtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IFwiIFwiO1xyXG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogIzIxNGY3YTtcclxuXHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0XHRcdFx0XHRcdFx0XHR0b3A6OHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0bGVmdDowcHg7XHJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTBweDtcclxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDoxMHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcclxuXHQubWFpbi1iYW5uZXJ7XHJcblx0XHRkaXNwbGF5Om5vbmU7XHJcblx0fVxyXG5cdC5zZWN0aW9uLXByb2plY3Rze1xyXG5cdC5wcm9qZWN0LWdyaWR7XHJcblx0XHRsaXtcclxuXHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdFx0ZmlndXJle1xyXG5cdFx0XHRcdG1hcmdpbjowIDAgMTVweDtcclxuXHRcdFx0fVxyXG5cdFx0XHQmOmZpcnN0LWNoaWxke1xyXG5cdFx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHRcdGZpZ3VyZXtcclxuXHRcdFx0XHRtYXJnaW46MCAwIDE1cHg7XHJcblx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQmOm50aC1jaGlsZCg0KSwgJjpudGgtY2hpbGQoNSl7XHJcblx0XHRcdFx0ZmlndXJle1xyXG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbToxNXB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG59IiwiOjpuZy1kZWVwIC5tYWluLWJhbm5lciAuY2Fyb3VzZWwge1xuICBtYXJnaW4tdG9wOiAtNjBweDtcbiAgei1pbmRleDogMTtcbn1cbjo6bmctZGVlcCAubWFpbi1iYW5uZXIgLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA4MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjo6bmctZGVlcCAubWFpbi1iYW5uZXIgLmNhcm91c2VsLWl0ZW0ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjo6bmctZGVlcCAubWFpbi1iYW5uZXIgLmNhcm91c2VsLWl0ZW0gLmNhcm91c2VsLWNhcHRpb24ge1xuICB0b3A6IDUwJTtcbiAgbGVmdDogLTEwMCU7XG4gIHotaW5kZXg6IDEwO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDYwMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zaXRpb246IGFsbCAxcztcbiAgb3BhY2l0eTogMDtcbn1cbjo6bmctZGVlcCAubWFpbi1iYW5uZXIgLmNhcm91c2VsLWl0ZW0gLmNhcm91c2VsLWNhcHRpb24gaDEge1xuICBjb2xvcjogI0ZGQzEwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMDtcbn1cbjo6bmctZGVlcCAubWFpbi1iYW5uZXIgLmNhcm91c2VsLWl0ZW0gLmNhcm91c2VsLWNhcHRpb24gLmJ0biB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbjo6bmctZGVlcCAubWFpbi1iYW5uZXIgLmNhcm91c2VsLWl0ZW0gLmluZm8taW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTEwMCU7XG4gIHRvcDogNTUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTU1JSk7XG4gIHotaW5kZXg6IDE7XG4gIHRyYW5zaXRpb246IGFsbCAxcztcbiAgb3BhY2l0eTogMDtcbn1cbjo6bmctZGVlcCAubWFpbi1iYW5uZXIgLmNhcm91c2VsLWl0ZW0uYWN0aXZlIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgbGVmdDogMTVweDtcbiAgb3BhY2l0eTogMC45O1xufVxuOjpuZy1kZWVwIC5tYWluLWJhbm5lciAuY2Fyb3VzZWwtaXRlbS5hY3RpdmUgLmluZm8taW1nIHtcbiAgcmlnaHQ6IDE1cHg7XG4gIG9wYWNpdHk6IDAuOTtcbn1cbjo6bmctZGVlcCAubWFpbi1iYW5uZXIgLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG46Om5nLWRlZXAgLm1haW4tYmFubmVyIC5waWNzdW0taW1nLXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbjo6bmctZGVlcCAubWFpbi1iYW5uZXIgLnBpY3N1bS1pbWctd3JhcHBlcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCA4MCwgMTI4LCAwLjkpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvcGFjaXR5OiAwLjk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xufVxuOjpuZy1kZWVwIC5tYWluLWJhbm5lciAucGljc3VtLWltZy13cmFwcGVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5uZ2ItY2Fyb3VzZWwge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ucGFuZWwtaGVhZGluZywgLnBhbmVsLWJvZHkge1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNsaWVudHMsIC5zZWN0aW9uLXByb2plY3RzLCAuc2VjdGlvbi1zZXZpY2VzLCAudGVzdGltb25pYWxzLCAuc2VjdGlvbi1pbmZvLCAuY29udGFjdC1pbmZvIHtcbiAgcGFkZGluZzogNzBweCAwO1xufVxuXG4uY2xpZW50cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG59XG4uY2xpZW50cyBoNiB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5jbGVhci1mbG9hdCB7XG4gIGNsZWFyOiBib3RoO1xuICBmbG9hdDogbm9uZTtcbn1cblxuLmNvbnRhY3QtaW5mbyAuc29jaWFsLW5ldCB1bCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5jb250YWN0LWluZm8gLnNvY2lhbC1uZXQgdWwgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY29udGFjdC1pbmZvIC5zb2NpYWwtbmV0IHVsIGxpIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgY29sb3I6ICM1NTU1NTU7XG59XG4uY29udGFjdC1pbmZvIC5zb2NpYWwtbmV0IHVsIGxpIHN2ZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG4uY29udGFjdC1pbmZvIC5zZXQtcGFydCB7XG4gIG1hcmdpbjogNDBweCAwO1xufVxuLmNvbnRhY3QtaW5mbyBoNiB7XG4gIGNvbG9yOiAjNTU1O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWN0LWluZm8gZm9ybSB7XG4gIG1hcmdpbi10b3A6IDQycHg7XG59XG4uY29udGFjdC1pbmZvIGZvcm0gLmJ0biB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5jb250YWN0LWluZm8gLmVtYWlsLWxpbmsge1xuICBjb2xvcjogIzI3NmNhYTtcbn1cblxuLmljb24tY2lyY2xlIHtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5pY29uLWNpcmNsZSBpIHtcbiAgbGluZS1oZWlnaHQ6IDkwcHg7XG59XG5cbi5zZWN0aW9uLWluZm8gLnBhbmVsLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDMzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwtY29udGFpbmVyOmhvdmVyIC5wYW5lbCB7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwge1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWZyb250IHtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkO1xuICBwYWRkaW5nLXRvcDogMjVweDtcbiAgei1pbmRleDogMTtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1mcm9udDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAtMTtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1mcm9udC5yZWQge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy8xLmpwZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XG4gIGJvcmRlci1jb2xvcjogI2I5NjQ2ZTtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1mcm9udC5yZWQgLmNpcmNsZS1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOTY0NmU7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtZnJvbnQuYmx1ZSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzLzIuanBnKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcbiAgYm9yZGVyLWNvbG9yOiAjMjc2Y2FhO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWZyb250LmJsdWUgLmNpcmNsZS1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzZjYWE7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtZnJvbnQuZ3JlZW4ge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy8zLmpwZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XG4gIGJvcmRlci1jb2xvcjogIzRiYmI1Nztcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1mcm9udC5ncmVlbiAuY2lyY2xlLWJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiYmI1Nztcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1iYWNrIHtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtYmFjay5yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjk2NDZlO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWJhY2suYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzZjYWE7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtYmFjay5ncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YmJiNTc7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtZnJvbnQsIC5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWJhY2sge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1iYWNrIHAge1xuICBwYWRkaW5nOiAyNXB4O1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgaDUge1xuICBtYXJnaW46IDIwcHggMDtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIHAge1xuICBtYXJnaW46IDA7XG59XG4uc2VjdGlvbi1pbmZvIGg2IHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5zZWN0aW9uLWluZm8gc3ZnIHtcbiAgZmlsbDogI2ZmZjtcbn1cblxuLnNlY3Rpb24tc2V2aWNlcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA0LCAyMDQsIDIwNCwgMC4yKTtcbn1cbi5zZWN0aW9uLXNldmljZXMgLnBhbmVsIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBwYWRkaW5nOiAxNXB4IDA7XG59XG4uc2VjdGlvbi1zZXZpY2VzIC5wYW5lbCBoNSB7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5zZWN0aW9uLXNldmljZXMgLnBhbmVsIHAge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4uc2VjdGlvbi1zZXZpY2VzIC5wYW5lbCAuaWNvbi1jaXJjbGUge1xuICBtYXJnaW46IDE1cHggYXV0bztcbn1cbi5zZWN0aW9uLXNldmljZXMgLnBhbmVsIC5pY29uLWNpcmNsZSBzdmcge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4MHB4O1xufVxuLnNlY3Rpb24tc2V2aWNlcyAucGFuZWwgLmljb24tY2lyY2xlLnNreWJsdWUge1xuICBiYWNrZ3JvdW5kOiAjODhjZWRiO1xufVxuLnNlY3Rpb24tc2V2aWNlcyAucGFuZWwgLmljb24tY2lyY2xlLmxpbWVncmVlbiB7XG4gIGJhY2tncm91bmQ6ICM3OGMyOWE7XG59XG4uc2VjdGlvbi1zZXZpY2VzIC5wYW5lbCAuaWNvbi1jaXJjbGUueWVsbG93IHtcbiAgYmFja2dyb3VuZDogI2YxYmI1Nztcbn1cbi5zZWN0aW9uLXNldmljZXMgLnBhbmVsIC5pY29uLWNpcmNsZS5vcmFuZ2Uge1xuICBiYWNrZ3JvdW5kOiAjZTk3ZjYxO1xufVxuLnNlY3Rpb24tc2V2aWNlcyAucGFuZWwgLmljb24tY2lyY2xlLmJsdWUge1xuICBiYWNrZ3JvdW5kOiAjODhjZWRiO1xufVxuLnNlY3Rpb24tc2V2aWNlcyAucGFuZWwgLmljb24tY2lyY2xlLnB1cnBsZSB7XG4gIGJhY2tncm91bmQ6ICM3ODdmYzI7XG59XG4uc2VjdGlvbi1zZXZpY2VzIGg2IHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuOjpuZy1kZWVwIC50ZXN0aW1vbmlhbHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46Om5nLWRlZXAgLnRlc3RpbW9uaWFscyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG46Om5nLWRlZXAgLnRlc3RpbW9uaWFscyBoMSB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuOjpuZy1kZWVwIC50ZXN0aW1vbmlhbHMgcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbjo6bmctZGVlcCAudGVzdGltb25pYWxzIHA6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG59XG46Om5nLWRlZXAgLnRlc3RpbW9uaWFscyAuY2Fyb3VzZWwge1xuICBtYXJnaW4tdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuOjpuZy1kZWVwIC50ZXN0aW1vbmlhbHMgLmNhcm91c2VsLWlubmVyIHtcbiAgaGVpZ2h0OiAyODJweDtcbn1cbjo6bmctZGVlcCAudGVzdGltb25pYWxzIC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpIHtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbjo6bmctZGVlcCAudGVzdGltb25pYWxzIC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG46Om5nLWRlZXAgLnRlc3RpbW9uaWFscyAuY2Fyb3VzZWwtaXRlbSB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMDtcbn1cbjo6bmctZGVlcCAudGVzdGltb25pYWxzIC5jYXJvdXNlbC1pdGVtLmFjdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc2VjdGlvbi1wcm9qZWN0cyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNlY3Rpb24tcHJvamVjdHMgaDYge1xuICBtYXJnaW46IDM1cHggMCA0MHB4O1xufVxuLnNlY3Rpb24tcHJvamVjdHMgLnByb2plY3QtZ3JpZCBsaSB7XG4gIHdpZHRoOiAyNSU7XG4gIGZsb2F0OiBsZWZ0O1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4uc2VjdGlvbi1wcm9qZWN0cyAucHJvamVjdC1ncmlkIGxpIGZpZ3VyZSB7XG4gIG1hcmdpbjogMCAwIDJweCAwO1xufVxuLnNlY3Rpb24tcHJvamVjdHMgLnByb2plY3QtZ3JpZCBsaTpmaXJzdC1jaGlsZCB7XG4gIHdpZHRoOiA1MCU7XG59XG4uc2VjdGlvbi1wcm9qZWN0cyAucHJvamVjdC1ncmlkIGxpOmZpcnN0LWNoaWxkIGZpZ3VyZSB7XG4gIG1hcmdpbjogMDtcbn1cbi5zZWN0aW9uLXByb2plY3RzIC5wcm9qZWN0LWdyaWQgbGk6bnRoLWNoaWxkKDQpIGZpZ3VyZSwgLnNlY3Rpb24tcHJvamVjdHMgLnByb2plY3QtZ3JpZCBsaTpudGgtY2hpbGQoNSkgZmlndXJlIHtcbiAgbWFyZ2luOiAwO1xufVxuLnNlY3Rpb24tcHJvamVjdHMgLnByb2plY3QtZ3JpZCBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xufVxuLnNlY3Rpb24tcHJvamVjdHMgLnAxIHtcbiAgcGFkZGluZzogMXB4O1xufVxuLnNlY3Rpb24tcHJvamVjdHMgZmlndXJlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDJweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNlY3Rpb24tcHJvamVjdHMgZmlndXJlIGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cbi5zZWN0aW9uLXByb2plY3RzIGZpZ3VyZSAuc2hvdy1tb3JlLW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIGxpbmVhci1ncmFkaWVudCgwZGVnLCBibGFjayAwJSwgcmdiYSgwLCAwLCAwLCAwLjIpIDIzJSwgcmdiYSgwLCAwLCAwLCAwKSA0MCUsIHJnYmEoMCwgMCwgMCwgMCkgNjglLCByZ2JhKDAsIDAsIDAsIDApIDgxJSwgcmdiYSgwLCAwLCAwLCAwKSA5MiUsIHJnYmEoMCwgMCwgMCwgMCkgMTAwJSkgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMHM7XG59XG4uc2VjdGlvbi1wcm9qZWN0cyBmaWd1cmUgZmlnY2FwdGlvbiB7XG4gIHdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIG1heC1oZWlnaHQ6IDQwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbiAgei1pbmRleDogMjtcbn1cbi5zZWN0aW9uLXByb2plY3RzIGZpZ3VyZSAuc2hvd19tb3JlLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uc2VjdGlvbi1wcm9qZWN0cyBmaWd1cmUgLnNob3dfbW9yZS1kZXNjIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uc2VjdGlvbi1wcm9qZWN0cyBmaWd1cmU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTtcbn1cbi5zZWN0aW9uLXByb2plY3RzIGZpZ3VyZTpob3ZlciBpbWcge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuLnNlY3Rpb24tcHJvamVjdHMgZmlndXJlOmhvdmVyIC5zaG93LW1vcmUtb3ZlcmxheSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgbGluZWFyLWdyYWRpZW50KDBkZWcsIGJsYWNrIDAlLCByZ2JhKDAsIDAsIDAsIDAuMikgMTAwJSkgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xufVxuLnNlY3Rpb24tcHJvamVjdHMgZmlndXJlOmhvdmVyIGZpZ2NhcHRpb24ge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBib3R0b206IDUwcHg7XG59XG5cbi5zZWN0aW9uLW91ci1wcm9kdWN0cyB7XG4gIHBhZGRpbmc6IDAgMCA3MHB4O1xufVxuLnNlY3Rpb24tb3VyLXByb2R1Y3RzIC5wYW5lbCB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjIpO1xufVxuLnNlY3Rpb24tb3VyLXByb2R1Y3RzIC5wYW5lbCBoNSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNlY3Rpb24tb3VyLXByb2R1Y3RzIC5wYW5lbCAucm93IGRpdjpmaXJzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQ6ICMyNzZjYWE7XG59XG4uc2VjdGlvbi1vdXItcHJvZHVjdHMgLnBhbmVsIC5yb3cgZGl2IGltZyB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweCAwO1xufVxuLnNlY3Rpb24tb3VyLXByb2R1Y3RzIC5wYW5lbCAucm93IGRpdjpudGgtY2hpbGQoMikge1xuICBwYWRkaW5nOiAyNXB4O1xufVxuLnNlY3Rpb24tb3VyLXByb2R1Y3RzIC5wYW5lbCAucm93IGRpdjpudGgtY2hpbGQoMikgdWwge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnNlY3Rpb24tb3VyLXByb2R1Y3RzIC5wYW5lbCAucm93IGRpdjpudGgtY2hpbGQoMikgdWwgbGkge1xuICBwYWRkaW5nOiAwIDAgMTBweCAyMHB4O1xuICBsaXN0LXN0eWxlOiBub25lIG91dHNpZGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zZWN0aW9uLW91ci1wcm9kdWN0cyAucGFuZWwgLnJvdyBkaXY6bnRoLWNoaWxkKDIpIHVsIGxpOjpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgYmFja2dyb3VuZDogIzIxNGY3YTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAubWFpbi1iYW5uZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuc2VjdGlvbi1wcm9qZWN0cyAucHJvamVjdC1ncmlkIGxpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuc2VjdGlvbi1wcm9qZWN0cyAucHJvamVjdC1ncmlkIGxpIGZpZ3VyZSB7XG4gICAgbWFyZ2luOiAwIDAgMTVweDtcbiAgfVxuICAuc2VjdGlvbi1wcm9qZWN0cyAucHJvamVjdC1ncmlkIGxpOmZpcnN0LWNoaWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuc2VjdGlvbi1wcm9qZWN0cyAucHJvamVjdC1ncmlkIGxpOmZpcnN0LWNoaWxkIGZpZ3VyZSB7XG4gICAgbWFyZ2luOiAwIDAgMTVweDtcbiAgfVxuICAuc2VjdGlvbi1wcm9qZWN0cyAucHJvamVjdC1ncmlkIGxpOm50aC1jaGlsZCg0KSBmaWd1cmUsIC5zZWN0aW9uLXByb2plY3RzIC5wcm9qZWN0LWdyaWQgbGk6bnRoLWNoaWxkKDUpIGZpZ3VyZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxufSJdfQ== */");

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
        this.slideConfig2 = {
            slidesToShow: 2,
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
                        slidesToShow: 1
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
/* harmony default export */ __webpack_exports__["default"] = (".section-industy-info .panel {\n  text-align: center;\n}\n.section-industy-info .panel .panel-heading {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  border: 2px solid #214f7a;\n  margin: 0 auto 15px;\n}\n.section-industy-info .panel p {\n  color: #214f7a;\n  font-weight: bold;\n  font-size: 16px;\n}\n.section-industy-info .panel i {\n  line-height: 135px;\n}\n.section-industy-info .panel i svg {\n  fill: #214f7a;\n}\n.section-industy-info .panel .panel-heading:hover {\n  background: #214f7a;\n}\n.section-industy-info .panel .panel-heading:hover svg {\n  fill: #fff;\n}\n.section-industy-info .col {\n  margin-bottom: 20px;\n}\n.section-industy-info .col:last-child {\n  margin: 0 auto;\n}\nul li a {\n  padding: 15px;\n  margin-bottom: 15px;\n  background: #e5e5e5;\n  color: #333333;\n  display: block;\n}\nul li a.active {\n  background: #214f7a;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kdXN0cmllcy9GOlxcZ2l0aHViXFx3b3JrL3NyY1xcYXBwXFxpbmR1c3RyaWVzXFxpbmR1c3RyaWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbmR1c3RyaWVzL2luZHVzdHJpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtBQ0FSO0FEQ1E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0NaO0FERU87RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQVg7QURFUTtFQUNJLGtCQUFBO0FDQVo7QURDWTtFQUNJLGFBQUE7QUNDaEI7QURHWTtFQUNJLG1CQUFBO0FDRGhCO0FERWdCO0VBQ0ksVUFBQTtBQ0FwQjtBREtJO0VBQ0ksbUJBQUE7QUNIUjtBRElPO0VBQ0ksY0FBQTtBQ0ZYO0FEV1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDUlo7QURTWTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQ1BoQiIsImZpbGUiOiJzcmMvYXBwL2luZHVzdHJpZXMvaW5kdXN0cmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLWluZHVzdHktaW5mb3tcclxuICAgIC5wYW5lbHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLnBhbmVsLWhlYWRpbmd7XHJcbiAgICAgICAgICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6MTUwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgICAgICAgICBib3JkZXI6MnB4IHNvbGlkICMyMTRmN2E7XHJcbiAgICAgICAgICAgIG1hcmdpbjowIGF1dG8gMTVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgcHtcclxuICAgICAgICAgICBjb2xvcjogIzIxNGY3YTtcclxuICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpe1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTM1cHg7XHJcbiAgICAgICAgICAgIHN2Z3tcclxuICAgICAgICAgICAgICAgIGZpbGw6ICMyMTRmN2E7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhbmVsLWhlYWRpbmd7XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiMyMTRmN2E7XHJcbiAgICAgICAgICAgICAgICBzdmd7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogI2ZmZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb2x7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToyMHB4O1xyXG4gICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbnVse1xyXG4gICAgbGl7XHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgcGFkZGluZzoxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjE1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6I2U1ZTVlNTtcclxuICAgICAgICAgICAgY29sb3I6IzMzMzMzMztcclxuICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgJi5hY3RpdmV7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiMyMTRmN2E7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuc2VjdGlvbi1pbmR1c3R5LWluZm8gLnBhbmVsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNlY3Rpb24taW5kdXN0eS1pbmZvIC5wYW5lbCAucGFuZWwtaGVhZGluZyB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMjE0ZjdhO1xuICBtYXJnaW46IDAgYXV0byAxNXB4O1xufVxuLnNlY3Rpb24taW5kdXN0eS1pbmZvIC5wYW5lbCBwIHtcbiAgY29sb3I6ICMyMTRmN2E7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uc2VjdGlvbi1pbmR1c3R5LWluZm8gLnBhbmVsIGkge1xuICBsaW5lLWhlaWdodDogMTM1cHg7XG59XG4uc2VjdGlvbi1pbmR1c3R5LWluZm8gLnBhbmVsIGkgc3ZnIHtcbiAgZmlsbDogIzIxNGY3YTtcbn1cbi5zZWN0aW9uLWluZHVzdHktaW5mbyAucGFuZWwgLnBhbmVsLWhlYWRpbmc6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjE0ZjdhO1xufVxuLnNlY3Rpb24taW5kdXN0eS1pbmZvIC5wYW5lbCAucGFuZWwtaGVhZGluZzpob3ZlciBzdmcge1xuICBmaWxsOiAjZmZmO1xufVxuLnNlY3Rpb24taW5kdXN0eS1pbmZvIC5jb2wge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnNlY3Rpb24taW5kdXN0eS1pbmZvIC5jb2w6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG51bCBsaSBhIHtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxudWwgbGkgYS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjMjE0ZjdhO1xuICBjb2xvcjogI2ZmZjtcbn0iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = (".section-news {\n  margin: 70px auto;\n}\n.section-news .nav-tabs {\n  width: 100%;\n  border-bottom: 1px solid #214f7a;\n}\n.section-news .nav-tabs .nav-link {\n  border: none;\n  color: #214f7a;\n}\n.section-news .nav-tabs .nav-link.active {\n  border-bottom: 2px solid #214f7a;\n  font-weight: bold;\n}\n.section-news li.grid-li {\n  width: 25%;\n  float: left;\n  list-style-type: none;\n}\n.section-news li.grid-li p {\n  margin: 0;\n}\n.section-news li.grid-li .panel {\n  margin: 0 0 10px 10px;\n  border: 1px solid #ccc;\n}\n.section-news li.grid-li .panel .panel-body {\n  padding: 15px;\n}\n.section-news li.grid-li img {\n  width: 100%;\n}\n.section-news li.grid-li:first-child {\n  width: 50%;\n}\n.section-news li.grid-li:first-child .panel {\n  background: #e5f0fa;\n  border: none;\n  margin-left: 0;\n}\n.section-news li.grid-li:first-child .panel p {\n  font-size: 16px;\n  margin-bottom: 20px;\n}\n.section-news li.grid-li:first-child .panel p:first-child {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  font-size: 18px;\n}\n.news-video {\n  padding: 70px 0;\n  background: #e5f0fa;\n}\n.news-video .video {\n  margin-bottom: 70px;\n}\n.news-video .video iframe {\n  margin: 0 auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9GOlxcZ2l0aHViXFx3b3JrL3NyY1xcYXBwXFxuZXdzXFxuZXdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uZXdzL25ld3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKO0FEQUk7RUFDSSxXQUFBO0VBQ0EsZ0NBQUE7QUNFUjtBRERRO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUNHWjtBREZZO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtBQ0loQjtBREVJO0VBQ0ksVUFBQTtFQUNDLFdBQUE7RUFDQSxxQkFBQTtBQ0FUO0FEQ1M7RUFDSSxTQUFBO0FDQ2I7QURDUztFQUNHLHFCQUFBO0VBQ0Msc0JBQUE7QUNDYjtBREFhO0VBQ0ksYUFBQTtBQ0VqQjtBREVTO0VBQ0ksV0FBQTtBQ0FiO0FERVM7RUFDSSxVQUFBO0FDQWI7QURDYTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDakI7QURBaUI7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUNFckI7QUREcUI7RUFDRyxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0d4QjtBRE9BO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDSko7QURLSTtFQUNJLG1CQUFBO0FDSFI7QURJTztFQUNDLGNBQUE7RUFDQSxjQUFBO0FDRlIiLCJmaWxlIjoic3JjL2FwcC9uZXdzL25ld3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1uZXdze1xyXG4gICAgbWFyZ2luOjcwcHggYXV0bztcclxuICAgIC5uYXYtdGFic3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjMjE0ZjdhO1xyXG4gICAgICAgIC5uYXYtbGlua3tcclxuICAgICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiMyMTRmN2E7XHJcbiAgICAgICAgICAgICYuYWN0aXZle1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgIzIxNGY3YTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsaVxyXG4gICB7XHJcbiAgICAmLmdyaWQtbGl7XHJcbiAgICAgICAgd2lkdGg6MjUlO1xyXG4gICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAucGFuZWx7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHggMTBweDs7XHJcbiAgICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICAgICAucGFuZWwtYm9keXtcclxuICAgICAgICAgICAgICAgICBwYWRkaW5nOjE1cHg7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICAgd2lkdGg6NTAlO1xyXG4gICAgICAgICAgICAgLnBhbmVse1xyXG4gICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlNWYwZmE7XHJcbiAgICAgICAgICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MDtcclxuICAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gIFxyXG4gfVxyXG4gICB9XHJcbiAgIFxyXG59XHJcbi5uZXdzLXZpZGVve1xyXG4gICAgcGFkZGluZzo3MHB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiNlNWYwZmE7XHJcbiAgICAudmlkZW97XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTo3MHB4O1xyXG4gICAgICAgaWZyYW1le1xyXG4gICAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIi5zZWN0aW9uLW5ld3Mge1xuICBtYXJnaW46IDcwcHggYXV0bztcbn1cbi5zZWN0aW9uLW5ld3MgLm5hdi10YWJzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjE0ZjdhO1xufVxuLnNlY3Rpb24tbmV3cyAubmF2LXRhYnMgLm5hdi1saW5rIHtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzIxNGY3YTtcbn1cbi5zZWN0aW9uLW5ld3MgLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmUge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzIxNGY3YTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2VjdGlvbi1uZXdzIGxpLmdyaWQtbGkge1xuICB3aWR0aDogMjUlO1xuICBmbG9hdDogbGVmdDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLnNlY3Rpb24tbmV3cyBsaS5ncmlkLWxpIHAge1xuICBtYXJnaW46IDA7XG59XG4uc2VjdGlvbi1uZXdzIGxpLmdyaWQtbGkgLnBhbmVsIHtcbiAgbWFyZ2luOiAwIDAgMTBweCAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuLnNlY3Rpb24tbmV3cyBsaS5ncmlkLWxpIC5wYW5lbCAucGFuZWwtYm9keSB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4uc2VjdGlvbi1uZXdzIGxpLmdyaWQtbGkgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2VjdGlvbi1uZXdzIGxpLmdyaWQtbGk6Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogNTAlO1xufVxuLnNlY3Rpb24tbmV3cyBsaS5ncmlkLWxpOmZpcnN0LWNoaWxkIC5wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICNlNWYwZmE7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4uc2VjdGlvbi1uZXdzIGxpLmdyaWQtbGk6Zmlyc3QtY2hpbGQgLnBhbmVsIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uc2VjdGlvbi1uZXdzIGxpLmdyaWQtbGk6Zmlyc3QtY2hpbGQgLnBhbmVsIHA6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5uZXdzLXZpZGVvIHtcbiAgcGFkZGluZzogNzBweCAwO1xuICBiYWNrZ3JvdW5kOiAjZTVmMGZhO1xufVxuLm5ld3MtdmlkZW8gLnZpZGVvIHtcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcbn1cbi5uZXdzLXZpZGVvIC52aWRlbyBpZnJhbWUge1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */");

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
/* harmony default export */ __webpack_exports__["default"] = (".section-product {\n  background: #e5f0fa;\n  padding: 60px 0;\n}\n\n.section-product-detail h2 {\n  margin-bottom: 25px;\n  font-weight: bold;\n}\n\n.section-product-detail ul {\n  margin-bottom: 15px;\n}\n\n.section-product-detail ul li {\n  padding: 0 0 10px 20px;\n  list-style: none outside;\n  font-size: 16px;\n  position: relative;\n  font-weight: bold;\n}\n\n.section-product-detail ul li::before {\n  content: \" \";\n  background: #214f7a;\n  font-weight: bold;\n  position: absolute;\n  top: 8px;\n  left: 0px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.section-product-detail img {\n  max-width: 100%;\n  box-shadow: -1px 2px 5px 1px rgba(0, 0, 0, 0.2);\n}\n\n.section-product-detail .row + .row {\n  margin-top: 100px;\n}\n\n.slick-slide {\n  position: relative;\n  box-shadow: -1px 2px 5px 1px rgba(0, 0, 0, 0.2);\n  background: #fff;\n  margin: 12px;\n  box-sizing: border-box;\n}\n\n.slick-slide p {\n  opacity: 0;\n  position: absolute;\n  bottom: -55px;\n  left: 0;\n  font-size: 12px;\n  line-height: 14px;\n  font-weight: bold;\n}\n\n.slick-slide.slick-current + .slick-active {\n  transform: scale(1.2);\n  transition: all 0.5s;\n  z-index: 1;\n  position: relative;\n}\n\n.slick-slide.slick-current + .slick-active img, .slick-slide.slick-current + .slick-active p {\n  opacity: 1;\n}\n\n.slick-slide.slick-slide img {\n  opacity: 0.3;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3VycHJvZHVjdC9GOlxcZ2l0aHViXFx3b3JrL3NyY1xcYXBwXFxvdXJwcm9kdWN0XFxvdXJwcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9vdXJwcm9kdWN0L291cnByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUNBSjs7QURHSTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUNBUjs7QURFSTtFQUNJLG1CQUFBO0FDQVI7O0FEQ1E7RUFDTCxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNTLGtCQUFBO0VBQ0EsaUJBQUE7QUNDWjs7QURBRztFQUNDLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREVJO0VBQ0ksZUFBQTtFQUNBLCtDQUFBO0FDQVI7O0FERUk7RUFDSSxpQkFBQTtBQ0FSOztBREtBO0VBQ0ksa0JBQUE7RUFDQSwrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDRko7O0FER0k7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDRFI7O0FER0k7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDRFI7O0FERVE7RUFDSSxVQUFBO0FDQVo7O0FESU87RUFDQyxZQUFBO0VBQ0EsWUFBQTtBQ0ZSIiwiZmlsZSI6InNyYy9hcHAvb3VycHJvZHVjdC9vdXJwcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zZWN0aW9uLXByb2R1Y3R7XHJcbiAgICBiYWNrZ3JvdW5kOiNlNWYwZmE7XHJcbiAgICBwYWRkaW5nOjYwcHggMDtcclxufVxyXG4uc2VjdGlvbi1wcm9kdWN0LWRldGFpbHtcclxuICAgIGgye1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICB1bHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjE1cHg7XHJcbiAgICAgICAgbGl7XHJcblx0XHRcdHBhZGRpbmc6IDAgMCAxMHB4IDIwcHg7XHJcblx0XHRcdGxpc3Qtc3R5bGU6IG5vbmUgb3V0c2lkZTtcclxuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcblx0XHRcdCY6OmJlZm9yZXtcclxuXHRcdFx0XHRjb250ZW50OiBcIiBcIjtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjMjE0ZjdhO1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0XHRcdHRvcDo4cHg7XHJcblx0XHRcdFx0bGVmdDowcHg7XHJcblx0XHRcdFx0d2lkdGg6IDEwcHg7XHJcblx0XHRcdFx0aGVpZ2h0OjEwcHg7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdG1hcmdpbi1yaWdodDogMTBweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG4gICAgfVxyXG4gICAgaW1ne1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBib3gtc2hhZG93OiAtMXB4IDJweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIH1cclxuICAgIC5yb3cgKyAucm93e1xyXG4gICAgICAgIG1hcmdpbi10b3A6MTAwcHg7XHJcbiAgICB9XHJcbiAgXHJcbn1cclxuXHJcbi5zbGljay1zbGlkZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJveC1zaGFkb3c6IC0xcHggMnB4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgbWFyZ2luOjEycHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206LTU1cHg7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBmb250LXNpemU6MTJweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgICYuc2xpY2stY3VycmVudCArIC5zbGljay1hY3RpdmV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgICAgIHRyYW5zaXRpb246YWxsIDAuNXM7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaW1nLCBwe1xyXG4gICAgICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi5zbGljay1zbGlkZXtcclxuICAgICAgIGltZ3tcclxuICAgICAgICBvcGFjaXR5Oi4zO1xyXG4gICAgICAgIGhlaWdodDphdXRvO1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIiwiLnNlY3Rpb24tcHJvZHVjdCB7XG4gIGJhY2tncm91bmQ6ICNlNWYwZmE7XG4gIHBhZGRpbmc6IDYwcHggMDtcbn1cblxuLnNlY3Rpb24tcHJvZHVjdC1kZXRhaWwgaDIge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zZWN0aW9uLXByb2R1Y3QtZGV0YWlsIHVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5zZWN0aW9uLXByb2R1Y3QtZGV0YWlsIHVsIGxpIHtcbiAgcGFkZGluZzogMCAwIDEwcHggMjBweDtcbiAgbGlzdC1zdHlsZTogbm9uZSBvdXRzaWRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2VjdGlvbi1wcm9kdWN0LWRldGFpbCB1bCBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGJhY2tncm91bmQ6ICMyMTRmN2E7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnNlY3Rpb24tcHJvZHVjdC1kZXRhaWwgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAtMXB4IDJweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5zZWN0aW9uLXByb2R1Y3QtZGV0YWlsIC5yb3cgKyAucm93IHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbi5zbGljay1zbGlkZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNoYWRvdzogLTFweCAycHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbjogMTJweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5zbGljay1zbGlkZSBwIHtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC01NXB4O1xuICBsZWZ0OiAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zbGljay1zbGlkZS5zbGljay1jdXJyZW50ICsgLnNsaWNrLWFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zbGljay1zbGlkZS5zbGljay1jdXJyZW50ICsgLnNsaWNrLWFjdGl2ZSBpbWcsIC5zbGljay1zbGlkZS5zbGljay1jdXJyZW50ICsgLnNsaWNrLWFjdGl2ZSBwIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5zbGljay1zbGlkZS5zbGljay1zbGlkZSBpbWcge1xuICBvcGFjaXR5OiAwLjM7XG4gIGhlaWdodDogYXV0bztcbn0iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = (".section-project-engineering {\n  padding: 0 0 70px;\n}\n\n.section-project-engineering ul li {\n  padding: 0 15px 15px;\n}\n\n.methodologies {\n  position: relative;\n}\n\n.methodologies .icon-circle {\n  width: 100px;\n  height: 100px;\n  border: 1px solid #fff;\n  border-radius: 50%;\n  margin: 0 auto;\n}\n\n.methodologies .icon-circle i {\n  line-height: 90px;\n}\n\n.methodologies .icon-circle i svg {\n  fill: #fff;\n}\n\n.methodologies ul {\n  position: relative;\n  width: 100%;\n}\n\n.methodologies ul li {\n  float: left;\n  width: 20%;\n  padding: 50px 0;\n}\n\n.methodologies ul li ul {\n  display: none;\n  position: absolute;\n  top: 180px;\n  left: 0;\n  text-align: center;\n  width: 100%;\n}\n\n.methodologies ul li ul li {\n  float: none;\n  width: 100%;\n}\n\n.methodologies ul li h6 {\n  padding-bottom: 15px;\n}\n\n.methodologies ul li:hover .icon-circle {\n  border-color: #ffc100;\n}\n\n.methodologies ul li:hover .icon-circle svg {\n  fill: #ffc100;\n}\n\n.methodologies ul li:hover h6 {\n  color: #ffc100;\n  position: relative;\n  padding-bottom: 0;\n}\n\n.methodologies ul li:hover h6::after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid #ffc100;\n  margin: 0 auto;\n  display: block;\n}\n\n.methodologies ul li:hover ul {\n  display: block;\n}\n\n.methodologies img {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0px;\n  top: 0px;\n  z-index: -1;\n}\n\n.methodologies h6, .methodologies li, .methodologies h1 {\n  color: #fff;\n  text-align: center;\n}\n\nsection.engeering-grap img {\n  max-width: 100%;\n}\n\n.our-services-section {\n  padding: 0;\n}\n\n.our-services {\n  background: #e5f0fa;\n  border-radius: 15px;\n  overflow: hidden;\n}\n\n.our-services .triangle {\n  background: #ffc100;\n  position: relative;\n  min-height: 400px;\n  display: flex;\n}\n\n.our-services .triangle .v-center {\n  align-self: center;\n  text-align: center;\n  margin: 0 auto;\n}\n\n.our-services .triangle .v-center .logo-circle {\n  width: 120px;\n  height: 120px;\n  background: #0860aa;\n  border-radius: 50%;\n  margin: 0 auto;\n}\n\n.our-services .triangle .v-center h5 {\n  font-size: bold;\n  margin-top: 15px;\n}\n\n.our-services .triangle::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-top: 200px solid transparent;\n  border-bottom: 200px solid transparent;\n  border-left: 50px solid #ffc100;\n  right: -50px;\n  top: 0;\n}\n\n.our-services .v-flex {\n  display: flex;\n}\n\n.our-services ul {\n  padding: 0 0 0 100px;\n  align-self: center;\n}\n\n.our-services ul li {\n  padding: 0 0 20px 20px;\n  list-style: none outside;\n  font-size: 16px;\n  position: relative;\n  font-weight: bold;\n}\n\n.our-services ul li::before {\n  content: \" \";\n  background: #214f7a;\n  font-weight: bold;\n  position: absolute;\n  top: 8px;\n  left: 0px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.manage-service-tab .app-development {\n  padding-bottom: 70px;\n}\n\n.manage-service-tab .app-development img {\n  width: auto;\n}\n\n.about-key-diff {\n  background: url('about.jpg') no-repeat bottom center #1d4b76;\n  padding: 70px 0;\n}\n\n.about-key-diff h1 {\n  color: #fff;\n  font-weight: normal;\n}\n\n.about-key-diff ul {\n  margin-top: 35px;\n}\n\n.about-key-diff ul li {\n  padding: 0 0 20px 20px;\n  list-style: none outside;\n  font-size: 16px;\n  position: relative;\n  color: #fff;\n}\n\n.about-key-diff ul li::before {\n  content: \" \";\n  background: #fff;\n  font-weight: bold;\n  position: absolute;\n  top: 8px;\n  left: 0px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.v-flex img {\n  align-self: center;\n}\n\n.ui-ux-info {\n  margin-top: 70px;\n  background: #e5f0fa;\n}\n\n.ui-ux-info h5 {\n  font-weight: bold;\n  margin: 30px 0 15px;\n}\n\n.ui-ux-info svg {\n  fill: #214f7a;\n}\n\n.ui-ux-process .icon-circle {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  background: #e5f0fa;\n}\n\n.ui-ux-process .icon-circle i {\n  line-height: 135px;\n  margin: 0 auto;\n  display: table;\n}\n\n.ui-ux-process .icon-circle i svg {\n  fill: #214f7a;\n}\n\n.ui-ux-process .row {\n  margin-bottom: 40px;\n}\n\n.ui-ux-process .row h6 {\n  font-weight: bold;\n}\n\n@media (max-width: 576px) {\n  .methodologies ul {\n    position: static;\n  }\n  .methodologies ul li {\n    width: 100%;\n    position: relative;\n  }\n\n  .app-development img {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdGVuZ2luZWVyaW5nL0Y6XFxnaXRodWJcXHdvcmsvc3JjXFxhcHBcXHByb2plY3RlbmdpbmVlcmluZ1xccHJvamVjdGVuZ2luZWVyaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9qZWN0ZW5naW5lZXJpbmcvcHJvamVjdGVuZ2luZWVyaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjs7QURHUTtFQUNJLG9CQUFBO0FDQVo7O0FESUE7RUFDSSxrQkFBQTtBQ0RKOztBREVJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0FSOztBRENRO0VBQ0ksaUJBQUE7QUNDWjs7QURBWTtFQUNJLFVBQUE7QUNFaEI7O0FERUc7RUFDQyxrQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURDSTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0NSOztBREFRO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNFWjs7QUREWTtFQUNHLFdBQUE7RUFDQSxXQUFBO0FDR2Y7O0FEQVE7RUFDSSxvQkFBQTtBQ0VaOztBRENZO0VBRUkscUJBQUE7QUNBaEI7O0FEQ2dCO0VBQ0ksYUFBQTtBQ0NwQjs7QURFWTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQWhCOztBRENnQjtFQUNJLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQ3BCOztBREdZO0VBQ0ksY0FBQTtBQ0RoQjs7QURNSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNKUjs7QURNSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0pSOztBRFNRO0VBQ0ksZUFBQTtBQ05aOztBRFdBO0VBQ0ksVUFBQTtBQ1JKOztBRFdBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDUko7O0FEU0k7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDUFI7O0FEUVE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ05aOztBRE9ZO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0xoQjs7QURPWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0xoQjs7QURRUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7QUNOWjs7QURTSTtFQUNJLGFBQUE7QUNQUjs7QURTSTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7QUNQUjs7QURRUTtFQUNMLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ1Msa0JBQUE7RUFDQSxpQkFBQTtBQ05aOztBRE9HO0VBQ0MsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDTEo7O0FEV0E7RUFDSSxvQkFBQTtBQ1JKOztBRFNJO0VBQ0ksV0FBQTtBQ1BSOztBRFlBO0VBQ0ksNERBQUE7RUFDQSxlQUFBO0FDVEo7O0FEVUk7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUNSUjs7QURVSTtFQUNGLGdCQUFBO0FDUkY7O0FEU1E7RUFDTCxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNTLGtCQUFBO0VBQ0EsV0FBQTtBQ1BaOztBRFFHO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDTko7O0FEYUk7RUFDSSxrQkFBQTtBQ1ZSOztBRGNBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ1hKOztBRFlJO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQ1ZSOztBRFlJO0VBQ0ksYUFBQTtBQ1ZSOztBRGVJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDWlI7O0FEYVE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDWFo7O0FEWVk7RUFDSSxhQUFBO0FDVmhCOztBRGNJO0VBQ0ksbUJBQUE7QUNaUjs7QURhUTtFQUNJLGlCQUFBO0FDWFo7O0FEZ0JBO0VBRVE7SUFDSSxnQkFBQTtFQ2RWO0VEZVM7SUFDSSxXQUFBO0lBQ0Esa0JBQUE7RUNiYjs7RURrQk07SUFDSSxXQUFBO0VDZlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RlbmdpbmVlcmluZy9wcm9qZWN0ZW5naW5lZXJpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1wcm9qZWN0LWVuZ2luZWVyaW5ne1xyXG4gICAgcGFkZGluZzowIDAgNzBweDtcclxufVxyXG4uc2VjdGlvbi1wcm9qZWN0LWVuZ2luZWVyaW5ne1xyXG4gICB1bHtcclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgcGFkZGluZzowIDE1cHggMTVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLm1ldGhvZG9sb2dpZXN7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAuaWNvbi1jaXJjbGV7XHJcbiAgICAgICAgd2lkdGg6MTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjEwMHB4O1xyXG4gICAgICAgIGJvcmRlcjoxcHggc29saWQgI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgICAgIGl7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgICAgICBzdmd7XHJcbiAgICAgICAgICAgICAgICBmaWxsOiNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgIHVse1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGxpe1xyXG4gICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgd2lkdGg6MjAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDUwcHggMDtcclxuICAgICAgICB1bHtcclxuICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDoxODBweDtcclxuICAgICAgICAgICAgbGVmdDowO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICBmbG9hdDpub25lO1xyXG4gICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg2e1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbToxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAuaWNvbi1jaXJjbGVcclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjojZmZjMTAwO1xyXG4gICAgICAgICAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6I2ZmYzEwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoNntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiNmZmMxMDA7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjA7XHJcbiAgICAgICAgICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwOyBcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7IFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNmZmMxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHVse1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgfVxyXG4gICAgaW1ne1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgIGxlZnQ6MHB4O1xyXG4gICAgICAgIHRvcDowcHg7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICB9XHJcbiAgICBoNiwgbGksIGgxe1xyXG4gICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuc2VjdGlvbntcclxuICAgJi5lbmdlZXJpbmctZ3JhcHtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5vdXItc2VydmljZXMtc2VjdGlvbntcclxuICAgIHBhZGRpbmc6MDtcclxufVxyXG5cclxuLm91ci1zZXJ2aWNlc3tcclxuICAgIGJhY2tncm91bmQ6I2U1ZjBmYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLnRyaWFuZ2xle1xyXG4gICAgICAgIGJhY2tncm91bmQ6I2ZmYzEwMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWluLWhlaWdodDo0MDBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC52LWNlbnRlcntcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAubG9nby1jaXJjbGV7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzA4NjBhYTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGg1e1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOmJvbGQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDA7IFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDA7IFxyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAyMDBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMjAwcHggc29saWQgdHJhbnNwYXJlbnQ7IFxyXG4gICAgICAgICAgICBib3JkZXItbGVmdDo1MHB4IHNvbGlkICNmZmMxMDA7XHJcbiAgICAgICAgICAgIHJpZ2h0Oi01MHB4O1xyXG4gICAgICAgICAgICB0b3A6MDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudi1mbGV4e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgICB1bHtcclxuICAgICAgICBwYWRkaW5nOjAgMCAwIDEwMHB4O1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBsaXtcclxuXHRcdFx0cGFkZGluZzogMCAwIDIwcHggMjBweDtcclxuXHRcdFx0bGlzdC1zdHlsZTogbm9uZSBvdXRzaWRlO1xyXG5cdFx0XHRmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRcdCY6OmJlZm9yZXtcclxuXHRcdFx0XHRjb250ZW50OiBcIiBcIjtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjMjE0ZjdhO1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0XHRcdHRvcDo4cHg7XHJcblx0XHRcdFx0bGVmdDowcHg7XHJcblx0XHRcdFx0d2lkdGg6IDEwcHg7XHJcblx0XHRcdFx0aGVpZ2h0OjEwcHg7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdG1hcmdpbi1yaWdodDogMTBweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG4gICAgfVxyXG59XHJcbi5tYW5hZ2Utc2VydmljZS10YWJ7XHJcbi5hcHAtZGV2ZWxvcG1lbnR7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTo3MHB4O1xyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOmF1dG87XHJcbiAgICB9XHJcbn1cclxufVxyXG5cclxuLmFib3V0LWtleS1kaWZme1xyXG4gICAgYmFja2dyb3VuZDp1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9hYm91dC5qcGcpIG5vLXJlcGVhdCBib3R0b20gY2VudGVyICMxZDRiNzY7XHJcbiAgICBwYWRkaW5nOjcwcHggMDtcclxuICAgIGgxe1xyXG4gICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG4gICAgfVxyXG4gICAgdWx7XHJcblx0XHRtYXJnaW4tdG9wOjM1cHg7XHJcbiAgICAgICAgbGl7XHJcblx0XHRcdHBhZGRpbmc6IDAgMCAyMHB4IDIwcHg7XHJcblx0XHRcdGxpc3Qtc3R5bGU6IG5vbmUgb3V0c2lkZTtcclxuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcblx0XHRcdCY6OmJlZm9yZXtcclxuXHRcdFx0XHRjb250ZW50OiBcIiBcIjtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0XHRcdHRvcDo4cHg7XHJcblx0XHRcdFx0bGVmdDowcHg7XHJcblx0XHRcdFx0d2lkdGg6IDEwcHg7IFxyXG5cdFx0XHRcdGhlaWdodDoxMHB4O1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuICAgIH1cclxufVxyXG5cclxuLnYtZmxleHtcclxuICAgIGltZ3tcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi51aS11eC1pbmZve1xyXG4gICAgbWFyZ2luLXRvcDo3MHB4O1xyXG4gICAgYmFja2dyb3VuZDojZTVmMGZhO1xyXG4gICAgaDV7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICBtYXJnaW46MzBweCAwIDE1cHg7XHJcbiAgICB9XHJcbiAgICBzdmd7XHJcbiAgICAgICAgZmlsbDojMjE0ZjdhO1xyXG4gICAgfVxyXG59XHJcblxyXG4udWktdXgtcHJvY2Vzc3tcclxuICAgIC5pY29uLWNpcmNsZXtcclxuICAgICAgICB3aWR0aDoxNTBweDtcclxuICAgICAgICBoZWlnaHQ6MTUwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDojZTVmMGZhO1xyXG4gICAgICAgIGl7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMzVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgICBzdmd7XHJcbiAgICAgICAgICAgICAgICBmaWxsOiMyMTRmN2E7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucm93e1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206NDBweDtcclxuICAgICAgICBoNntcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCl7XHJcbiAgICAubWV0aG9kb2xvZ2llc3tcclxuICAgICAgICB1bHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFwcC1kZXZlbG9wbWVudHtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi5zZWN0aW9uLXByb2plY3QtZW5naW5lZXJpbmcge1xuICBwYWRkaW5nOiAwIDAgNzBweDtcbn1cblxuLnNlY3Rpb24tcHJvamVjdC1lbmdpbmVlcmluZyB1bCBsaSB7XG4gIHBhZGRpbmc6IDAgMTVweCAxNXB4O1xufVxuXG4ubWV0aG9kb2xvZ2llcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tZXRob2RvbG9naWVzIC5pY29uLWNpcmNsZSB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5tZXRob2RvbG9naWVzIC5pY29uLWNpcmNsZSBpIHtcbiAgbGluZS1oZWlnaHQ6IDkwcHg7XG59XG4ubWV0aG9kb2xvZ2llcyAuaWNvbi1jaXJjbGUgaSBzdmcge1xuICBmaWxsOiAjZmZmO1xufVxuLm1ldGhvZG9sb2dpZXMgdWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1ldGhvZG9sb2dpZXMgdWwgbGkge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDIwJTtcbiAgcGFkZGluZzogNTBweCAwO1xufVxuLm1ldGhvZG9sb2dpZXMgdWwgbGkgdWwge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTgwcHg7XG4gIGxlZnQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWV0aG9kb2xvZ2llcyB1bCBsaSB1bCBsaSB7XG4gIGZsb2F0OiBub25lO1xuICB3aWR0aDogMTAwJTtcbn1cbi5tZXRob2RvbG9naWVzIHVsIGxpIGg2IHtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4ubWV0aG9kb2xvZ2llcyB1bCBsaTpob3ZlciAuaWNvbi1jaXJjbGUge1xuICBib3JkZXItY29sb3I6ICNmZmMxMDA7XG59XG4ubWV0aG9kb2xvZ2llcyB1bCBsaTpob3ZlciAuaWNvbi1jaXJjbGUgc3ZnIHtcbiAgZmlsbDogI2ZmYzEwMDtcbn1cbi5tZXRob2RvbG9naWVzIHVsIGxpOmhvdmVyIGg2IHtcbiAgY29sb3I6ICNmZmMxMDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4ubWV0aG9kb2xvZ2llcyB1bCBsaTpob3ZlciBoNjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNmZmMxMDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tZXRob2RvbG9naWVzIHVsIGxpOmhvdmVyIHVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWV0aG9kb2xvZ2llcyBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHotaW5kZXg6IC0xO1xufVxuLm1ldGhvZG9sb2dpZXMgaDYsIC5tZXRob2RvbG9naWVzIGxpLCAubWV0aG9kb2xvZ2llcyBoMSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnNlY3Rpb24uZW5nZWVyaW5nLWdyYXAgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4ub3VyLXNlcnZpY2VzLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAwO1xufVxuXG4ub3VyLXNlcnZpY2VzIHtcbiAgYmFja2dyb3VuZDogI2U1ZjBmYTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5vdXItc2VydmljZXMgLnRyaWFuZ2xlIHtcbiAgYmFja2dyb3VuZDogI2ZmYzEwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5vdXItc2VydmljZXMgLnRyaWFuZ2xlIC52LWNlbnRlciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5vdXItc2VydmljZXMgLnRyaWFuZ2xlIC52LWNlbnRlciAubG9nby1jaXJjbGUge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJhY2tncm91bmQ6ICMwODYwYWE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ub3VyLXNlcnZpY2VzIC50cmlhbmdsZSAudi1jZW50ZXIgaDUge1xuICBmb250LXNpemU6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ub3VyLXNlcnZpY2VzIC50cmlhbmdsZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci10b3A6IDIwMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAyMDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IDUwcHggc29saWQgI2ZmYzEwMDtcbiAgcmlnaHQ6IC01MHB4O1xuICB0b3A6IDA7XG59XG4ub3VyLXNlcnZpY2VzIC52LWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm91ci1zZXJ2aWNlcyB1bCB7XG4gIHBhZGRpbmc6IDAgMCAwIDEwMHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4ub3VyLXNlcnZpY2VzIHVsIGxpIHtcbiAgcGFkZGluZzogMCAwIDIwcHggMjBweDtcbiAgbGlzdC1zdHlsZTogbm9uZSBvdXRzaWRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ub3VyLXNlcnZpY2VzIHVsIGxpOjpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgYmFja2dyb3VuZDogIzIxNGY3YTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5tYW5hZ2Utc2VydmljZS10YWIgLmFwcC1kZXZlbG9wbWVudCB7XG4gIHBhZGRpbmctYm90dG9tOiA3MHB4O1xufVxuLm1hbmFnZS1zZXJ2aWNlLXRhYiAuYXBwLWRldmVsb3BtZW50IGltZyB7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4uYWJvdXQta2V5LWRpZmYge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9hYm91dC5qcGcpIG5vLXJlcGVhdCBib3R0b20gY2VudGVyICMxZDRiNzY7XG4gIHBhZGRpbmc6IDcwcHggMDtcbn1cbi5hYm91dC1rZXktZGlmZiBoMSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLmFib3V0LWtleS1kaWZmIHVsIHtcbiAgbWFyZ2luLXRvcDogMzVweDtcbn1cbi5hYm91dC1rZXktZGlmZiB1bCBsaSB7XG4gIHBhZGRpbmc6IDAgMCAyMHB4IDIwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmUgb3V0c2lkZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmFib3V0LWtleS1kaWZmIHVsIGxpOjpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi52LWZsZXggaW1nIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4udWktdXgtaW5mbyB7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG4gIGJhY2tncm91bmQ6ICNlNWYwZmE7XG59XG4udWktdXgtaW5mbyBoNSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDMwcHggMCAxNXB4O1xufVxuLnVpLXV4LWluZm8gc3ZnIHtcbiAgZmlsbDogIzIxNGY3YTtcbn1cblxuLnVpLXV4LXByb2Nlc3MgLmljb24tY2lyY2xlIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNlNWYwZmE7XG59XG4udWktdXgtcHJvY2VzcyAuaWNvbi1jaXJjbGUgaSB7XG4gIGxpbmUtaGVpZ2h0OiAxMzVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuLnVpLXV4LXByb2Nlc3MgLmljb24tY2lyY2xlIGkgc3ZnIHtcbiAgZmlsbDogIzIxNGY3YTtcbn1cbi51aS11eC1wcm9jZXNzIC5yb3cge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLnVpLXV4LXByb2Nlc3MgLnJvdyBoNiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLm1ldGhvZG9sb2dpZXMgdWwge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gIH1cbiAgLm1ldGhvZG9sb2dpZXMgdWwgbGkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5hcHAtZGV2ZWxvcG1lbnQgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */");

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

/***/ "./src/app/testimonials/testimonials.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/testimonials/testimonials.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon-circle {\n  height: 90px;\n  width: 90px;\n  border-radius: 50%;\n  margin: 0 auto;\n  overflow: hidden;\n  border: 2px solid #214f7a;\n}\n.icon-circle i {\n  line-height: 90px;\n}\n.panel-body {\n  margin: 20px 0 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdGltb25pYWxzL0Y6XFxnaXRodWJcXHdvcmsvc3JjXFxhcHBcXHRlc3RpbW9uaWFsc1xcdGVzdGltb25pYWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90ZXN0aW1vbmlhbHMvdGVzdGltb25pYWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNHLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDQ0o7QURBQztFQUNDLGlCQUFBO0FDRUY7QURFQTtFQUNJLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC90ZXN0aW1vbmlhbHMvdGVzdGltb25pYWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24tY2lyY2xle1xyXG5cdGhlaWdodDo5MHB4O1xyXG5cdHdpZHRoOjkwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlcjoycHggc29saWQgIzIxNGY3YTtcclxuXHRpe1xyXG5cdFx0bGluZS1oZWlnaHQ6OTBweDtcclxuXHR9XHJcblx0XHJcbn1cclxuLnBhbmVsLWJvZHl7XHJcbiAgICBtYXJnaW46MjBweCAwIDUwcHg7XHJcbn0iLCIuaWNvbi1jaXJjbGUge1xuICBoZWlnaHQ6IDkwcHg7XG4gIHdpZHRoOiA5MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMjE0ZjdhO1xufVxuLmljb24tY2lyY2xlIGkge1xuICBsaW5lLWhlaWdodDogOTBweDtcbn1cblxuLnBhbmVsLWJvZHkge1xuICBtYXJnaW46IDIwcHggMCA1MHB4O1xufSJdfQ== */");

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

/***/ "./src/app/wa/wa.component.scss":
/*!**************************************!*\
  !*** ./src/app/wa/wa.component.scss ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dhL3dhLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/wa/wa.component.ts":
/*!************************************!*\
  !*** ./src/app/wa/wa.component.ts ***!
  \************************************/
/*! exports provided: WaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaComponent", function() { return WaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WaComponent = class WaComponent {
    constructor() { }
    ngOnInit() {
    }
};
WaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wa',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wa.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wa/wa.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wa.component.scss */ "./src/app/wa/wa.component.scss")).default]
    })
], WaComponent);



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