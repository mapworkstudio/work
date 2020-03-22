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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-about.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n                    <h1>About ARKEDGE</h1>\n                    <h6>We value loyalty, creativity and productivity with results...</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<section class=\"about-tab\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 col-lg-3 col-md-3\">\n            <ul ngbNav #nav=\"ngbNav\" [(activeId)]=\"active\" class=\"nav-tabs\">\n                <li [ngbNavItem]=\"i + 1\" *ngFor=\"let tab of tabs; index as i\">\n                    <a ngbNavLink>{{tab.title}}</a>\n                    <ng-template ngbNavContent>\n                        <h5>{{tab.title}}</h5>\n                        <p>\n                            {{tab.decs}}\n                        </p>\n                    </ng-template>\n                </li>\n             </ul>\n        </div>\n            <div class=\"col-sm-12 col-lg-9 col-md-9\">\n            <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\n        </div>\n    </div>\n    </div>\n</section>\n\n<section class=\"about-key-diff\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <h1>Key Differentiators</h1>\n                <ul>\n                    <li *ngFor=\"let key of keydiff\">\n                        {{key.list}}\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</section>\n\n\n<section class=\"about-info\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-12 v-align\">\n                <p>Ever-growing demand for Web Application solutions is driven by rapidly changing market conditions and\n                    technology progress. To streamline your business, we address those issues with our Internet and\n                    Intranet solutions. In addition we also provide you web / animation design services.</p>\n\n            </div>\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                <img src=\"assets/images/about-info.jpg\">\n            </div>\n        </div>\n    </div>\n</section>\n\n\n<section class=\"section-info\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <p>\n                    Along with the engineering solution and services ARKEDGE is specialized in helpings client\n                    organizations identify, evaluate, and recruit executives at various levels. It comprises of\n                    well-qualified group of people having faith in camaraderie and serving the industry to find the\n                    solutions to various key areas as Staffing, Executive Search and IT training.\n                    <br><br>\n                    In addition ARKEDGE specializes in a bunch of IT training services for corporate, institutions and\n                    individuals. We do organize corporate training programs for industry officials who find it difficult\n                    to mingle their expertise with latest IT tools and IT based technology. We do impart IT training for\n                    graduates in multiple discipline including computer application, hard core technology, business\n                    administration, and individuals who are in the mid of their management education.\n                </p>\n            </div>\n            <div *ngFor=\"let item of solution\" class=\"col-lg-4 col-md-4 col-sm-12 panel-container\">\n                <div class=\"panel\">\n                    <div class=\"panel-front {{item.color}}\">\n                        <div class=\"panel-heading\">\n                            <div class=\"icon-circle circle-bg\">\n                                <i class=\"icon icon-medium\">\n                                    <svg focusable=\"false\">\n                                        <use attr.xlink:href=\"{{item.icon}}\"></use>\n                                    </svg>\n                                </i>\n                            </div>\n                            <h5>{{item.title}}</h5>\n                        </div>\n                        <div class=\"panel-body\">\n\n                            <p *ngFor=\"let data of item.list\">{{data.name}}</p>\n                        </div>\n                    </div>\n                    <div class=\"panel-back {{item.color}}\">\n                        <h5>{{item.title}}</h5>\n                        <p>{{item.description}}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/advancesolution/advancesolution.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/advancesolution/advancesolution.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdvancesolutionAdvancesolutionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-advance-solution.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n                    <h1>Advance solutions</h1>\n                    <h6>Technical solution for all industries</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<section class=\"section-advance-solution\">\n    <div class=\"container\">\n        <div class=\"row\">\n                <div class=\"col-lg-4 col-md-4 col-sm-12\">\n                    <ul>\n                        <li><a routerLink=\"Advancesolution\" routerLinkActive=\"active\" skipLocationChange=true>Solutions</a></li>\n                        <li><a routerLink=\"Technology\" routerLinkActive=\"active\" skipLocationChange=true>Technology</a></li>\n                        <li><a routerLink=\"Industries\" routerLinkActive=\"active\" skipLocationChange=true>Industries</a></li>\n                    </ul>\n                </div>\n\n                <div class=\"col-lg-8 col-md-8 col-sm-12\">\n                    <p>\n                        ARKEDGE technologies approaches each business as an individual so \n                        that we can provide you with IT solutions that suit your needs.\n                         We offer holistic solutions, consisting of different offerings. \n                    </p>\n                </div>\n        </div>\n    </div>\n</section>\n\n<section>\n    <div class=\"container\">\n    <div class=\"row\">\n         <div class=\"col-lg-6 col-md-6 col-sm-12\">\n            <h2>Transformation</h2>\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>\n           \n          </div>\n\n          <div class=\"col-lg-6 col-md-6 col-sm-12\">\n            <img src=\"assets/images/advance-solution-1.png\">\n        </div>\n     \n    </div>\n</div>\n</section>\n\n\n<section>\n    <div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-12\">\n            <img src=\"assets/images/advance-solution-2.jpg\">\n        </div>\n\n         <div class=\"col-lg-6 col-md-6 col-sm-12\">\n            <h2>Transformation</h2>\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>\n           \n          </div>\n     </div>\n</div>\n</section>\n\n<section>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                <div class=\"panel info\">\n                        <div class=\"panel-heading\">\n                           <h6>Enterprise Solution</h6>\n                        </div>\n                        <div class=\"panel-body\">\n                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n                            <i class=\"icon icon-large\">\n                                <svg focusable=\"false\">\n                                  <use xlink:href=\"#icon_phone\"></use>\n                                </svg>\n                              </i>\n                            </p>\n                        </div>\n                 </div>\n            </div>\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                <div class=\"panel info\">\n                        <div class=\"panel-heading\">\n                           <h6>Intelligent Process Automation</h6>\n                        </div>\n                        <div class=\"panel-body\">\n                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n                            <i class=\"icon icon-large\">\n                                <svg focusable=\"false\">\n                                  <use xlink:href=\"#icon_phone\"></use>\n                                </svg>\n                              </i>\n                            </p>\n                        </div>\n                 </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<router-outlet></router-outlet>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/career/career.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/career/career.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCareerCareerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <app-inner-page-header></app-inner-page-header> -->\r\n<div class=\"inner-banner\">\r\n    <img src=\"assets/images/inner-banner-career.jpg\">\r\n    <div class=\"page-title\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12 center\">\r\n        <h1>Career @ Arkedge</h1>\r\n        <h6>come and join us our family...</h6>\r\n    </div></div></div>\r\n    </div>\r\n</div>\r\n<section class=\"section-contact\">\r\n    <div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n        <h6 class=\"center career\">Arkedge Technologies has a very ambitious plan for future and we are looking for energetic, motivated, ambitious team players who relish the challenge of joining a growing business in the field of IT, Resourcing and Training. You will have the opportunity to grow professionally and financially.\r\n        </h6>\r\n        </div>\r\n       <div *ngFor=\"let data of careerInfo\" class=\"col-lg-6 col-md-6 col-sm-12 career-info\">\r\n            <div class=\"panel\">\r\n                    <div class=\"panel-heading\">\r\n                       <h6>{{data.title}}</h6>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <p>{{data.info}}</p>\r\n                    </div>\r\n             </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12\">\r\n            <h6 class=\"text-wrap\">If you are interested in working in a fast-paced, challenging environment, Below are the Current Openings for open positions.</h6>\r\n\r\n            <table class=\"table table-striped table-bordered\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Job Code</th>\r\n                    <th>Job Title</th>\r\n                    <th>Location</th>\r\n                    <th>Target Date</th>\r\n                    <th>Details</th>\r\n                   </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let data of career\">\r\n                    <td>{{data.jobcode}}</td>\r\n                    <td>{{data.jobtitle}}</td>\r\n                    <td>{{data.location}}</td>\r\n                    <td>{{data.targetDate}}</td>\r\n                    <td><a>View Details</a></td>\r\n                  </tr>\r\n                </tbody>\r\n                </table>\r\n\r\n            </div>\r\n\r\n\r\n        <div class=\"col-sm-12\">\r\n           <form>\r\n            <h2 class=\"center\">Post your profile here...</h2>\r\n                <div class=\"row form-group\">\r\n                    <div class=\"col\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Your Name\" name=\"name\">\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"yourMail\" placeholder=\"Your Mail\" name=\"yourMail\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row form-group\">\r\n                    <div class=\"col\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"phone\" placeholder=\"Phone Number\" name=\"phone\">\r\n                    </div>\r\n                    <div class=\"col custom-file mb-3\">\r\n                        <input type=\"file\" class=\"custom-file-input\" id=\"customFile\" name=\"filename\">\r\n                        <label class=\"custom-file-label\" for=\"customFile\">Attachment</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" placeholder=\"Message\" rows=\"5\"></textarea>\r\n                </div>\r\n                <button type=\"submit\" class=\"btn btn-primary\">SUBMIT</button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>    \r\n</section>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/client/client.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client/client.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppClientClientComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-client.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n                    <h1>CLIENTELE</h1>\n                    <h6>We value loyalty, creativity and productivity with results...</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<section class=\"client-info\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div *ngFor=\"let data of clientInfo; index as i\" class=\"col-lg-4 col-md-4 col-sm-12\">\n                <div class=\"panel\">\n                   <div class=\"panel-body {{data.clientimg}}-{{i+1}}\">\n                       <a><img src=\"assets/images/{{data.clientimg}}-{{i+1}}.jpg\"></a>\n                    </div>\n             </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n\n<section class=\"client-speak\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-12 \">\n                <h1>Client Speaks</h1>\n                <p>Ever-growing demand for Web Application solutions is driven by rapidly changing market conditions and\n                    technology progress. To streamline your business, we address those issues with our Internet and\n                    Intranet solutions. In addition we also provide you web / animation design services.</p>\n\n            </div>\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                 <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/zmEG-5zEmPw\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n        </div>\n    </div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/company/company.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/company.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCompanyCompanyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>company works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactusContactusComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <app-inner-page-header></app-inner-page-header> -->\r\n<div class=\"inner-banner\">\r\n    <img src=\"assets/images/inner-banner-contact.jpg\">\r\n    <div class=\"page-title\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12 center\">\r\n        <h1>We Are Here For You</h1>\r\n        <h6>Hello. What can we help you with?</h6>\r\n    </div></div></div>\r\n    </div>\r\n</div>\r\n\r\n<section class=\"section-contact\">\r\n    <div class=\"container\">\r\n    <div class=\"row\">\r\n       <div *ngFor=\"let data of contactInfo\" class=\"col-lg-4 col-md-4 col-sm-12 contact-emails\">\r\n            <div class=\"panel\">\r\n                    <div class=\"panel-heading\">\r\n                       <h5>{{data.title}}</h5>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <p>{{data.subtitle}}</p>\r\n                        <p>{{data.id}}</p>\r\n                    </div>\r\n             </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12\">\r\n           <form>\r\n            <h1 class=\"center\">Feel free to contact...</h1>\r\n                <div class=\"row form-group\">\r\n                    <div class=\"col\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Your Name\" name=\"name\">\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"yourMail\" placeholder=\"Your Mail\" name=\"yourMail\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row form-group\">\r\n                    <div class=\"col\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"phone\" placeholder=\"Phone Number\" name=\"phone\">\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"country\" placeholder=\"Country\" name=\"country\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" placeholder=\"Message\" rows=\"5\"></textarea>\r\n                </div>\r\n\r\n                <button type=\"submit\" class=\"btn btn-primary\">SUBMIT</button>\r\n            </form>\r\n        </div>\r\n\r\n\r\n        <div *ngFor=\"let data of getTouch; index as i\" class=\"col-lg-4 col-md-4 col-sm-12 contact-address\">\r\n            <div class=\"panel\">\r\n                    <div class=\"panel-heading\">\r\n                       <img src={{data.img}}-{{i+1}}.jpg alt=\"{{data.subtitle}}\">\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <h5>{{data.subtitle}}</h5>\r\n                        <p>{{data.street_1}}</p>\r\n                        <p>{{data.street_2}}</p>\r\n                        <p>{{data.state}}</p>\r\n                        <p>{{data.contact}}</p>\r\n                    </div>\r\n             </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n        </div>\r\n\r\n            <div class=\"mapouter\"><div class=\"gmap_canvas\"><iframe id=\"gmap_canvas\" src=\"https://maps.google.com/maps?q=Arkedge%20Technologies%20Pvt.%20Ltd%20Msthal%20Height%2C%20Next%20to%20Marwah%20Estate%2C%20Saki%20Naka%2C%20Andheri%20(E)%2C%20Mumbai%2C%20Maharashtra%20400072&t=&z=13&ie=UTF8&iwloc=&output=embed\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe><a href=\"https://www.bitgeeks.net\"></a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:100%;}</style></div>\r\n     \r\n</section>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-5 col-md-5 col-sm-12\">\r\n                <div class=\"logo\">\r\n                    <i class=\"icon icon-small\">\r\n                        <svg focusable=\"false\">\r\n                            <use xlink:href=\"#icon_logoFlat\"></use>\r\n                        </svg>\r\n                      </i>\r\n                </div>\r\n                <p>\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin\r\n                    gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum\r\n                    sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\r\n                </p>\r\n\r\n                <p class=\"copyright\">\r\n                    <span>© Copyright Arkedge Technologies Pvt. Ltd.</span>\r\n                </p>\r\n            </div>\r\n\r\n            <div class=\"col-lg-2 col-md-2 col-sm-12\">\r\n                <h5>Quick Links</h5>\r\n                <ul class=\"footer-li\">\r\n                    <li>\r\n                        <a routerLink=\"OurProduct\" routerLinkActive=\"active\" skipLocationChange=true>Our\r\n                            Product</a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"Advancesolution\" routerLinkActive=\"active\" skipLocationChange=true>Advance\r\n                            Solution</a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"ManagedServiceComponent\" routerLinkActive=\"active\" skipLocationChange=true>Managed Service</a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"Company\" routerLinkActive=\"active\" skipLocationChange=true>COMPANY</a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"Career\" routerLinkActive=\"active\" skipLocationChange=true>CAREER</a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"Contactus\" routerLinkActive=\"active\" skipLocationChange=true>CONTACT US</a>\r\n                    </li>\r\n                </ul>\r\n                <div class=\"social-net\">\r\n\r\n                    <ul>\r\n                        <li><a href=\"https://www.facebook.com\" target=\"_blank\">\r\n                                <i class=\"icon icon-ex-small\">\r\n                                    <svg focusable=\"false\">\r\n                                        <use xlink:href=\"#icon_facebook\"></use>\r\n                                    </svg>\r\n                                </i>\r\n                            </a>\r\n                        </li>\r\n                        <li><a href=\"https://www.instagram.com\" target=\"_blank\">\r\n                                <i class=\"icon icon-ex-small\">\r\n                                    <svg focusable=\"false\">\r\n                                        <use xlink:href=\"#icon_instagram\"></use>\r\n                                    </svg>\r\n                                </i>\r\n                            </a>\r\n                        </li>\r\n                        <li><a href=\"https://www.twitter.com\" target=\"_blank\">\r\n                                <i class=\"icon icon-ex-small\">\r\n                                    <svg focusable=\"false\">\r\n                                        <use xlink:href=\"#icon_twitter\"></use>\r\n                                    </svg>\r\n                                </i>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"col-lg-5 col-md-5 col-sm-12 map\">\r\n                    <img src=\"assets/images/map.png\" alt=\"Map\">\r\n             </div>\r\n        </div>\r\n    </div>\r\n    <!-- /.container -->\r\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n\r\n    <a class=\"navbar-brand\" routerLink=\"home\" skipLocationChange=true>\r\n      <i class=\"icon icon-small\">\r\n        <svg focusable=\"false\">\r\n          <use xlink:href=\"#icon_logoFlat\"></use>\r\n        </svg>\r\n      </i>\r\n      <div>\r\n        <span class=\"company-name\">ARKEDGE</span>\r\n        <span class=\"company-type\">TECHNOLOGIES</span>\r\n      </div>\r\n    </a>\r\n    <ul class=\"navbar-nav-list\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"OurProduct\" routerLinkActive=\"active\" skipLocationChange=true>Our\r\n          Product</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"Advancesolution\" routerLinkActive=\"active\" skipLocationChange=true>Advance\r\n          Solution</a>\r\n      </li>\r\n      <li class=\"nav-item nav-dropdown-list\">\r\n        <a class=\"nav-link\" routerLink=\"ManagedServiceComponent\" routerLinkActive=\"active\"\r\n          skipLocationChange=true>Managed Service</a>\r\n        <ul class=\"sub-nav\">\r\n          <li class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-8 col-md-8 col-sm-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngFor=\"let list of managedService\">\r\n                     <h6> {{list.name}}</h6>\r\n                      <li class=\"inner-list\" *ngFor=\"let inlist of list.managedServiceList\">\r\n                        <a>{{inlist.name}}</a>\r\n                      </li>\r\n              </div>\r\n  </div>\r\n  </div>\r\n  <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n    <h5>Heading goes here.</h5>\r\n    <img src=\"../../assets/images/3.jpg\" alt=\"\">\r\n    <a>Read more...</a>\r\n  </div>\r\n\r\n  </div>\r\n  </li>\r\n  </ul>\r\n  </li>\r\n\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"Company\" routerLinkActive=\"active\" skipLocationChange=true>COMPANY</a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"Career\" routerLinkActive=\"active\" skipLocationChange=true>CAREER</a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"Contactus\" routerLinkActive=\"active\" skipLocationChange=true>CONTACT US</a>\r\n  </li>\r\n  <li class=\"nav-item tele-no\">\r\n    <a class=\"nav-link\">\r\n      <i class=\"icon icon-ex-small\">\r\n        <svg focusable=\"false\">\r\n          <use xlink:href=\"#icon_phone\"></use>\r\n        </svg>\r\n      </i>\r\n      321-321-6544\r\n    </a>\r\n  </li>\r\n  <li class=\"nav-item quick-link\">\r\n    <a class=\"nav-link\" (click)=\"slideToggel()\">\r\n      <i class=\"icon icon-ex-small\">\r\n        <svg focusable=\"false\">\r\n          <use xlink:href=\"#icon_menu\"></use>\r\n        </svg>\r\n      </i>\r\n    </a>\r\n  </li>\r\n  </ul>\r\n \r\n</nav>\r\n\r\n<div class=\"slider-menu\" [ngClass]=\"isOpen ? '' : 'active'\">\r\n  <a class=\"close-slide\" (click)=\"slideToggel()\">\r\n    <i class=\"icon icon-ex-small\">\r\n      <svg focusable=\"false\">\r\n        <use xlink:href=\"#icon_menu\"></use>\r\n      </svg>\r\n    </i>\r\n  </a>\r\n\r\n  <a class=\"navbar-brand\">\r\n    <i class=\"icon icon-small\">\r\n      <svg focusable=\"false\">\r\n        <use xlink:href=\"#icon_logo_color\"></use>\r\n      </svg>\r\n    </i>\r\n    <div>\r\n      <span class=\"company-name\">ARKEDGE</span>\r\n      <span class=\"company-type\">TECHNOLOGIES</span>\r\n    </div>\r\n  </a>\r\n\r\n  <ul>\r\n    <li *ngFor=\"let item of list; index as i\" class=\"menu-list\">\r\n      <a (click)=\"slideToggel()\" routerLink=\"{{item.name}}\" routerLinkActive=\"active\" skipLocationChange=true>{{item.name}}</a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n<div class=\"overlay\" [ngClass]=\"isOpen ? '' : 'active'\" (click)=\"slideToggel()\">\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-banner\">\r\n    <ngb-carousel #carousel interval=\"1000\" [pauseOnHover]=\"pauseOnHover\" (slide)=\"onSlide($event)\">\r\n        <ng-template ngbSlide *ngFor=\"let info of banner; index as i\">\r\n            <div class=\"container\">\r\n            <div class=\"carousel-caption\">\r\n                <h3>{{info.title}}</h3>\r\n                <h3>{{info.title_2}}</h3>\r\n                <p>{{info.description}}</p>\r\n                <button type=\"submit\" class=\"btn btn-primary\">LEARN MORE</button>\r\n                <button type=\"submit\" class=\"btn btn-warning\">CONTACT US</button>\r\n            </div>\r\n        </div>\r\n            <a>\r\n                <div class=\"picsum-img-wrapper\">\r\n                    <img src=\"{{info.img}}-{{i + 1}}.jpg\" alt=\"My image {{i + 1}} description\">\r\n                </div>\r\n            </a>\r\n        </ng-template>\r\n    </ngb-carousel>\r\n</div>\r\n<section class=\"section-info\">\r\n    <div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12 center\">\r\n            <h1>Expand Your Business Through a <span class=\"heading-highlight\">Strong Virtual Presence</span></h1>\r\n            <h6>\r\n                <b>The ultimate objective behind our every move is to give our customers utmost satisfaction with our\r\n                    quality services and support.</b><br>\r\n                We try the best possible way out to provide our customers with top-notch services and at affordable\r\n                rates. So, give us a Oppurtunity to serve you !\r\n            </h6>\r\n        </div>\r\n        <div *ngFor=\"let item of solution\" class=\"col-lg-4 col-md-4 col-sm-12 panel-container\">\r\n            <div class=\"panel\">\r\n                <div class=\"panel-front {{item.color}}\">\r\n                    <div class=\"panel-heading\">\r\n                        <div class=\"icon-circle circle-bg\">\r\n                            <i class=\"icon icon-medium\">\r\n                                <svg focusable=\"false\">\r\n                                    <use attr.xlink:href=\"{{item.icon}}\"></use>\r\n                                </svg>\r\n                            </i>\r\n                        </div>\r\n                        <h5>{{item.title}}</h5>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n\r\n                        <p *ngFor=\"let data of item.list\">{{data.name}}</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"panel-back {{item.color}}\">\r\n                    <h5>{{item.title}}</h5>\r\n                    <p>{{item.description}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n        </div>\r\n</section>\r\n<section class=\"section-sevices\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 center\">\r\n                <h1>INDUSTRIES <span class=\"heading-highlight\">WE SERVE</span></h1>\r\n                <h6>\r\n                   <b>We ensure excellence in service through understanding of our client's business and their unique\r\n                    requirements.</b><br>\r\n\r\n                    Due to our close relationships and constant interactions with clients,\r\n\r\n                    we have developed solid understanding and insight in our focus industries that include:\r\n                   </h6>\r\n            </div>\r\n\r\n            <div *ngFor=\"let item of sevices\" class=\"col-lg-4 col-md-4 col-sm-12\">\r\n                <div class=\"panel\">\r\n                    <div class=\"panel-heading\">\r\n                        <div class=\"icon-circle {{item.color}}\">\r\n                            <i class=\"icon icon-medium\">\r\n                                <svg focusable=\"false\">\r\n                                    <use attr.xlink:href=\"{{item.icon}}\"></use>\r\n                                </svg>\r\n                            </i>\r\n                        </div>\r\n                        <h5>{{item.title}}</h5>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <p>{{item.description}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"section-projects\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 center\">\r\n                <h1>OUR <span class=\"heading-highlight\">PROJECTS</span></h1>\r\n                <h6>\r\n                    We bring powerful TOOLS for enhance your productivity.\r\n                </h6>\r\n            </div>\r\n        </div>\r\n        <div class=\"project-grid\">\r\n            <li *ngFor=\"let info of projects; index as i\" class=\"p2\">\r\n                <a>\r\n                    <figure>\r\n                        <img src=\"{{info.imgPath}}-{{i + 1}}.jpg\" alt=\"Experience\">\r\n                        <div class=\"show-more-overlay\"></div>\r\n                        <figcaption>\r\n                            <h2 class=\"show_more-title\">{{info.title}}</h2>\r\n                            <p class=\"show_more-desc\"> \r\n                                {{info.description}}\r\n                            </p>\r\n                            <button *ngIf=\"i === 0\" type=\"submit\" class=\"btn btn-primary\">LEARN MORE</button>\r\n                        </figcaption>\r\n                    </figure>\r\n                </a>\r\n            </li>\r\n     </div>\r\n    </div>\r\n</section>\r\n\r\n<div class=\"clear-float\"></div>\r\n<section class=\"clients\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 center\">\r\n                <h1>HAPPY <span class=\"heading-highlight\">CLIENTS</span></h1>\r\n                <h6>\r\n                    consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus\r\n                    accumsan et viverra justo commodo. Proin sodales pulvinar tempor.lacus accumsan et viverra justo\r\n                    commodo. Proin sodales pulvinar tempor.</h6>\r\n            </div>\r\n\r\n            <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\" [config]=\"slideConfig\">\r\n                <div ngxSlickItem *ngFor=\"let client of client; index as i\" class=\"slide\">\r\n                    <img src=\"{{client.img}}-{{i+1}}.jpg\" alt=\"\" width=\"100%\">\r\n                </div>\r\n            </ngx-slick-carousel>\r\n\r\n            <!-- <div *ngFor=\"let client of client; index as i\" class=\"col-lg-3 col-md-3 col-sm-12\">\r\n                <img src=\"{{client.img}}-{{i+1}}.jpg\" alt=\"client\">\r\n            </div> -->\r\n\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"testimonials\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 center\">\r\n                <h1>TESTIMONIALS</h1>\r\n                <ngb-carousel #carousel interval=\"1000\" [pauseOnHover]=\"pauseOnHover\" (slide)=\"onSlide($event)\">\r\n                    <ng-template ngbSlide *ngFor=\"let info of testimonials; index as i\">\r\n                        <p>\r\n                            {{info.clientView}}\r\n                        </p>\r\n                        <p>\r\n                            - {{info.clientName}}\r\n                        </p>\r\n\r\n                    </ng-template>\r\n                </ngb-carousel>\r\n\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</section>\r\n<section class=\"contact-info\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                <h1>WHAT SET US <span class=\"heading-highlight\">APART</span></h1>\r\n                <p>\r\n                    We ensure excellence in service through understanding of our client's business and their unique\r\n                    requirements.\r\n\r\n                    Due to our close relationships and constant interactions with clients,\r\n\r\n                    we have developed solid understanding and insight in our focus industries that include:\r\n                </p>\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                        <div>\r\n                            <h3>Address</h3>\r\n                            <p>703, Wing \"B\", Galaxy L.X.APT.<br>\r\n\r\n                                Navre Park, Ambarnath (W),<br>\r\n\r\n                                Thane-421501, Maharashtra,<br>\r\n\r\n                                INDIA</p>\r\n\r\n                            <h3>Contact</h3>\r\n                            <p>\r\n                                info@arkedge.com<br>\r\n\r\n                                calling +91 9029290808.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                        <div>\r\n                            <h3>Working Hours</h3>\r\n                            <p>Monday To Friday: 11AM - 8PM<br>\r\n\r\n                                Week-End: 11 AM - 2PM</p>\r\n\r\n\r\n                            <h3>Socials</h3>\r\n                            <div class=\"social-net\">\r\n\r\n                                <ul>\r\n                                    <li><a href=\"https://www.facebook.com\" target=\"_blank\">\r\n                                            <i class=\"icon icon-ex-small\">\r\n                                                <svg focusable=\"false\">\r\n                                                    <use xlink:href=\"#icon_facebook\"></use>\r\n                                                </svg>\r\n                                            </i>\r\n                                            <span>Facebook</span>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li><a href=\"https://www.instagram.com\" target=\"_blank\">\r\n                                            <i class=\"icon icon-ex-small\">\r\n                                                <svg focusable=\"false\">\r\n                                                    <use xlink:href=\"#icon_instagram\"></use>\r\n                                                </svg>\r\n                                            </i>\r\n                                            <span>Tweeter</span>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li><a href=\"https://www.twitter.com\" target=\"_blank\">\r\n                                            <i class=\"icon icon-ex-small\">\r\n                                                <svg focusable=\"false\">\r\n                                                    <use xlink:href=\"#icon_twitter\"></use>\r\n                                                </svg>\r\n                                            </i>\r\n                                            <span>Instragram</span>\r\n                                        </a>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                <h1>GET IN <span class=\"heading-highlight\">TOUCH</span></h1>\r\n                <form>\r\n                    <div class=\"row form-group\">\r\n                        <div class=\"col\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Your Name\" name=\"name\">\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Your Mail\" name=\"yourMail\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"subject\" placeholder=\"Subject\" name=\"subject\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"7\"></textarea>\r\n                    </div>\r\n\r\n                    <button type=\"submit\" class=\"btn btn-primary\">SUBMIT</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/industries/industries.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/industries/industries.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppIndustriesIndustriesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-industries.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n                    <h1>Industries</h1>\n                    <h6>Transforming industries with smarter ways</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<section class=\"section-advance-solution\">\n    <div class=\"container\">\n        <div class=\"row\">\n                <div class=\"col-lg-4 col-md-4 col-sm-12\">\n                    <ul>\n                        <li><a routerLink=\"Advancesolution\" routerLinkActive=\"active\" skipLocationChange=true>Solutions</a></li>\n                        <li><a routerLink=\"Technology\" routerLinkActive=\"active\" skipLocationChange=true>Technology</a></li>\n                        <li><a routerLink=\"Industries\" routerLinkActive=\"active\" skipLocationChange=true>Industries</a></li>\n                    </ul>\n                </div>\n\n                <div class=\"col-lg-8 col-md-8 col-sm-12\">\n                        <p>\n                            ARKEDGE technologies approaches each business as an individual so \n                            that we can provide you with IT solutions that suit your needs.\n                             We offer holistic solutions, consisting of different offerings.\n                        </p>\n\n                </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"section-industy-info\">\n    <div class=\"container\">\n    <div class=\"row\">\n       <div *ngFor=\"let data of industryInfo\" class=\"col-lg-4 col-md-4 col-sm-12 col\">\n            <div class=\"panel\">\n                    <div class=\"panel-heading\">\n                       \n                    </div>\n                    <div class=\"panel-body\">\n                        <p>{{data.title}}</p>\n                    </div>\n             </div>\n        </div>\n\n    </div>\n</div>\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/inner-page-header/inner-page-header.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inner-page-header/inner-page-header.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInnerPageHeaderInnerPageHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [class]=\"className\">\n    <div class=\"page-title\">\n        <h1>{{pageName}}</h1>\n        <h6>{{subtitle}}</h6>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/managedservice/managedservice.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/managedservice/managedservice.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppManagedserviceManagedserviceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"inner-banner\">\r\n    <img src=\"assets/images/inner-banner-manage-service.jpg\">\r\n    <div class=\"page-title\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12 center\">\r\n                    <h1>Managed Services</h1>\r\n                    <h6>Softwares : Data Life-cycle Management : IT Staffing & Training</h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<section class=\"section-manage-service\">\r\n    <div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n        <h6 class=\"center career\">\r\n            ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. The organization is making its presence felt on the engineering solution and services, Staffing and IT training circuit. Equipped with cross cultural operating experience; an asset, it drives the organization to deliver nothing but the best.        </h6>\r\n        \r\n            <h5>\r\n                Arkedge Technologies provide following services\r\n            </h5>\r\n        \r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n         <ul>\r\n               <li>\r\n                Product Engineering\r\n               </li>\r\n               <li>\r\n                Application Development\r\n                </li>\r\n               <li>\r\n                UX/UI Development\r\n                </li>\r\n               <li>\r\n                Software Testing & QA\r\n                </li>\r\n               <li>\r\n                Cleanse Dataset\r\n               </li>\r\n               <li>\r\n                Data Mapping & Conversion\r\n                </li>\r\n               <li>\r\n                Staffing Servicesdevelopment.\r\n               </li>\r\n           </ul>\r\n        </div>\r\n        \r\n        <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n            <img src=\"assets/images/manage-service-1.png\">\r\n        </div>\r\n    </div>\r\n\r\n <div class=\"row\">\r\n\r\n        <div *ngFor=\"let item of solution; index as i\" class=\"col-lg-6 col-md-6 col-sm-12 panel-container\">\r\n            <div class=\"panel\">\r\n                <div class=\"panel-front\">\r\n                    <div class=\"panel-heading\">\r\n                       <img src=\"assets/images/ourServices-{{i+1}}.jpg\">\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n\r\n                        <p>{{item.description}}</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"panel-back {{item.color}}\">\r\n                    <h5>{{item.title}}</h5>\r\n                    <p>{{item.description_2}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n</div>\r\n</div>\r\n</section>    ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewsNewsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-news.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n        <h1>News Update</h1>\n        <h6>News, Press release and Media reports</h6>\n    </div></div></div>\n    </div>\n</div>\n<div class=\"container section-news\">\n    <div class=\"row\">\n        <ul ngbNav #nav=\"ngbNav\" [(activeId)]=\"active\" class=\"nav-tabs\">\n            <li [ngbNavItem]=\"1\">\n              <a ngbNavLink>News</a>\n              <ng-template ngbNavContent>\n                <li *ngFor=\"let data of news; index as i\" class=\"p2 grid-li\">\n                    <div class=\"panel\">\n                        <div class=\"panel-heading\">\n                           <img src={{data.img}}-{{i+1}}.jpg alt=\"{{data.subtitle}}\">\n                        </div>\n                        <div class=\"panel-body\">\n                            <p>{{data.desc_1}}</p>\n                            <p>{{data.desc_2}}</p>\n                           \n                        </div>\n                 </div>\n                </li>\n            </ng-template>\n            </li>\n            <li [ngbNavItem]=\"2\">\n                <a ngbNavLink>Events</a>\n                <ng-template ngbNavContent>\n                  <li *ngFor=\"let data of news; index as i\" class=\"p2\">\n                      <div class=\"panel\">\n                          <div class=\"panel-heading\">\n                             <img src={{data.img}}-{{i+1}}.jpg alt=\"{{data.subtitle}}\">\n                          </div>\n                          <div class=\"panel-body\">\n                              <p>{{data.desc_1}}</p>\n                              <p>{{data.desc_2}}</p>\n                             \n                          </div>\n                   </div>\n                  </li>\n              </ng-template>\n              </li>\n              <li [ngbNavItem]=\"3\">\n                <a ngbNavLink>Webinars</a>\n                <ng-template ngbNavContent>\n                  <li *ngFor=\"let data of news; index as i\" class=\"p2\">\n                      <div class=\"panel\">\n                          <div class=\"panel-heading\">\n                             <img src={{data.img}}-{{i+1}}.jpg alt=\"{{data.subtitle}}\">\n                          </div>\n                          <div class=\"panel-body\">\n                              <p>{{data.desc_1}}</p>\n                              <p>{{data.desc_2}}</p>\n                             \n                          </div>\n                   </div>\n                  </li>\n              </ng-template>\n              </li>\n              <li [ngbNavItem]=\"4\">\n                <a ngbNavLink>Press Releases</a>\n                <ng-template ngbNavContent>\n                  <li *ngFor=\"let data of news; index as i\" class=\"p2\">\n                      <div class=\"panel\">\n                          <div class=\"panel-heading\">\n                             <img src={{data.img}}-{{i+1}}.jpg alt=\"{{data.subtitle}}\">\n                          </div>\n                          <div class=\"panel-body\">\n                              <p>{{data.desc_1}}</p>\n                              <p>{{data.desc_2}}</p>\n                             \n                          </div>\n                   </div>\n                  </li>\n              </ng-template>\n              </li>\n              <li [ngbNavItem]=\"5\">\n                <a ngbNavLink>Video Gallery</a>\n                <ng-template ngbNavContent>\n                  <li *ngFor=\"let data of news; index as i\" class=\"p2\">\n                      <div class=\"panel\">\n                          <div class=\"panel-heading\">\n                             <img src={{data.img}}-{{i+1}}.jpg alt=\"{{data.subtitle}}\">\n                          </div>\n                          <div class=\"panel-body\">\n                              <p>{{data.desc_1}}</p>\n                              <p>{{data.desc_2}}</p>\n                             \n                          </div>\n                   </div>\n                  </li>\n              </ng-template>\n              </li>\n          </ul>\n          \n          <div [ngbNavOutlet]=\"nav\" class=\"mt-4\"></div>\n    </div>\n</div>\n\n<section class=\"news-video\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n\n                <div class=\"video\">\n                    <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/zmEG-5zEmPw\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n                </div>\n\n                <h6 class=\"center\">\n                    Arkedge Technologies has a very ambitious plan for future and we are looking for energetic, motivated, ambitious team players who relish the challenge of joining a growing business in the field of IT, Resourcing and Training. You will have the opportunity to grow professionally and financially.\n                </h6>\n            </div>\n        </div>\n    </div>\n</section>\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ourproduct/ourproduct.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ourproduct/ourproduct.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOurproductOurproductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"inner-banner\">\r\n    <img src=\"assets/images/inner-banner-ourproduct.jpg\">\r\n    <div class=\"page-title\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12 center\">\r\n                    <h1>Our Products</h1>\r\n                    <h6>Transforming industries with smarter ways</h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<section class=\"section-product\">\r\n    <div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n        <h6 class=\"center career\">\r\n            Arkedge Technologies has a very ambitious plan for future and we are looking for energetic, motivated, ambitious team players who relish the challenge of joining a growing business in the field of IT, Resourcing and Training. You will have the opportunity to grow professionally and financially.\r\n        </h6>\r\n        </div>\r\n    </div>\r\n</div>\r\n</section>\r\n\r\n    <section class=\"section-product-detail\">\r\n        <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n               <h2>Product Name 1</h2>\r\n               <p>\r\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.\r\n               </p>\r\n               <ul>\r\n                   <li>\r\n                    Robust version design\r\n                   </li>\r\n                   <li>\r\n                    Cross-platform architecture\r\n                   </li>\r\n                   <li>\r\n                    Wide variety of integration requirements\r\n                   </li>\r\n               </ul>\r\n               <button type=\"submit\" class=\"btn btn-primary\">Inquiry</button>\r\n               <button type=\"submit\" class=\"btn btn-primary\">Demo</button>\r\n\r\n            </div>\r\n            \r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                <img src=\"assets/images/product-detail-1.png\">\r\n            </div>\r\n\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                <img src=\"assets/images/product-detail-2.png\">\r\n            </div>\r\n\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                <h2>Product Name 2</h2>\r\n                <p>\r\n                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.\r\n                </p>\r\n                <ul>\r\n                    <li>\r\n                     Robust version design\r\n                    </li>\r\n                    <li>\r\n                     Cross-platform architecture\r\n                    </li>\r\n                    <li>\r\n                     Wide variety of integration requirements\r\n                    </li>\r\n                </ul>\r\n                <button type=\"submit\" class=\"btn btn-primary\">Inquiry</button>\r\n                <button type=\"submit\" class=\"btn btn-primary\">Demo</button>\r\n \r\n             </div>\r\n         \r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"section-product\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\" [config]=\"slideConfig\">\r\n                <div ngxSlickItem *ngFor=\"let product of products; index as i\" class=\"slide\">\r\n                    <img src=\"{{product.img}}-{{i+1}}.jpg\" alt=\"\" width=\"100%\">\r\n                </div>\r\n            </ngx-slick-carousel>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/projectengineering/projectengineering.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projectengineering/projectengineering.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectengineeringProjectengineeringComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-projectengineering.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n                    <h1>Product Engineering</h1>\n                    <h6>Softwares : Data Life-cycle Management : IT Staffing & Training</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<section class=\"section-project-engineering\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-3 col-lg-3 col-sm-12\">\n                <ngb-accordion [closeOthers]=\"true\" activeIds=\"static-1\">\n                    <ngb-panel id=\"static-1\" title=\"Software Engineering\">\n                        <ng-template ngbPanelContent>\n                            <ul>\n                                <li>Product Engineering</li>\n                                <li>Application Development</li>\n                                <li>UX/UI Development</li>\n                                <li>Software Testing & QA</li>\n                            </ul>\n                        </ng-template>\n                    </ngb-panel>\n                    <ngb-panel id=\"static-2\" title=\"Data Management\">\n                        <ng-template ngbPanelContent>\n                            <ul>\n                                <li>link goes here</li>\n\n                            </ul>\n                        </ng-template>\n                    </ngb-panel>\n                    <ngb-panel id=\"static-3\" title=\"IT Staffing & Training \">\n                        <ng-template ngbPanelContent>\n                            <ul>\n                                <li>link goes here</li>\n\n                            </ul>\n                        </ng-template>\n                    </ngb-panel>\n                </ngb-accordion>\n            </div>\n            <div class=\"col-md-9 col-lg-9 col-sm-12\">\n                <p>\n                    Competitive pressures, reduced time-to-market, increased demands of customers, and globalization are\n                    driving global product companies to explore the offshore route. A reliable offshore partner can play\n                    a key role from concept to the launch of the product. Product companies have increased their\n                    competitive advantage by partnering with offshore players for product development.\n                </p>\n                <p>\n                    We have been involved in architecting and building .NET driven business solutions right from the\n                    inception. Our .NET CoE has proven expertise in building world class products using the latest\n                    Microsoft® technologies and standards. Our knowledge of Microsoft® .NET technologies and product\n                    development methodologies enables us to work with customers across domains and successfully address\n                    their functional, usability, performance and scalability requirements.\n                </p>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"methodologies\">\n    <img src=\"assets/images/methodologies.jpg\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 center\">\n                <h1>Our Methodology</h1>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <ul class=\"panel-container\">\n\n                <li *ngFor=\"let item of solution; index as i\">\n                    <div class=\"icon-circle\">\n                        <i class=\"icon icon-medium\">\n                            <svg focusable=\"false\">\n                                <use attr.xlink:href=\"{{item.icon}}\"></use>\n                            </svg>\n                        </i>\n                    </div>\n                    <h6>{{item.title}}</h6>\n                    <ul class=\"info-bar\">\n                        <li>\n                            {{item.info}}\n                        </li>\n                    </ul>\n\n                </li>\n            </ul>\n\n        </div>\n    </div>\n</section>\n\n<section class=\"engeering-grap\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6 col-lg-6 col-sm-12\">\n                <h6>\n                    We practice agile development methodologies to help you take advantage of emerging market\n                    opportunities. We develop software in time-boxed iterations; each iteration is a discrete project\n                    encompassing all the PDLC stages. Our agile software project is capable of releasing standalone\n                    working software at the end of each iteration.\n                </h6>\n            </div>\n\n            <div class=\"col-md-6 col-lg-6 col-sm-12\">\n                <img src=\"assets/images/engeering-grap.jpg\">\n            </div>\n            <div class=\"col-sm-12\">\n                <p>\n                    Our solution architects also help you realize your vision of services based products through\n                    implementation of the Service Oriented Architecture (SOA) approach. They provide consulting,\n                    implementation, and re-engineering of existing product architectures using the SOA framework<br><br>\n\n                    The software products industry depends on bringing new concepts, new versions and new features to\n                    the market quickly. At the same time, development costs must be low, predictable, and flexible. We\n                    can help you address these daunting and seemingly conflicting requirements for software products.\n\n                </p>\n            </div>\n        </div>\n    </div>\n</section>\n\n\n<section>\n    <div class=\"container our-services\">\n        <div class=\"row\">\n            <div class=\"col-md-4 col-lg-4 col-sm-12 triangle\">\n                <div class=\"v-center\">\n                    <div class=\"logo-circle\">\n                        <i class=\"icon icon-large\">\n                            <svg focusable=\"false\">\n                                <use xlink:href=\"#icon_logoFlat\"></use>\n                            </svg>\n                        </i>\n                    </div>\n                    <h5>\n                        Arkedge Technologies<br>\n                        Services\n                    </h5>\n                </div>\n            </div>\n\n            <div class=\"col-md-8 col-lg-8 col-sm-12 v-flex\">\n                <ul>\n                    <li>\n                        Robust version design\n                    </li>\n                    <li>\n                        Cross-platform architecture\n                    </li>\n                    <li>\n                        Wide variety of integration requirements\n                    </li>\n                    <li>\n                        Comprehensive packaging\n                    </li>\n                    <li>\n                        Support over a range of environments\n                    </li>\n                </ul>\n            </div>\n\n        </div>\n    </div>\n</section>\n\n\n<section class=\"engeering-grap\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <p>\n                    Our solution architects also help you realize your vision of services based products through\n                    implementation of the Service Oriented Architecture (SOA) approach. They provide consulting,\n                    implementation, and re-engineering of existing product architectures using the SOA framework\n                    <br> <br>\n                    The software products industry depends on bringing new concepts, new versions and new features to\n                    the market quickly. At the same time, development costs must be low, predictable, and flexible. We\n                    can help you address these daunting and seemingly conflicting requirements for software products.\n                </p>\n            </div>\n        </div>\n    </div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/technology/technology.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/technology/technology.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTechnologyTechnologyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-advance-solution.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n                    <h1>Technology</h1>\n                    <h6>Technical solution for all industries</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<section class=\"section-advance-solution\">\n    <div class=\"container\">\n        <div class=\"row\">\n                <div class=\"col-lg-4 col-md-4 col-sm-12\">\n                    <ul>\n                        <li><a routerLink=\"Advancesolution\" routerLinkActive=\"active\" skipLocationChange=true>Solutions</a></li>\n                        <li><a routerLink=\"Technology\" routerLinkActive=\"active\" skipLocationChange=true>Technology</a></li>\n                        <li><a routerLink=\"Industries\" routerLinkActive=\"active\" skipLocationChange=true>Industries</a></li>\n                    </ul>\n                </div>\n\n                <div class=\"col-lg-8 col-md-8 col-sm-12\">\n                </div>\n        </div>\n    </div>\n</section>\n\n\n";
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
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
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

        while (_) try {
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

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
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
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
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
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

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
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
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
  "./src/app/about/about.component.scss":
  /*!********************************************!*\
    !*** ./src/app/about/about.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAboutAboutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".about-key-diff {\n  background: url('about.jpg') no-repeat bottom center #1d4b76;\n  padding: 70px 0;\n}\n.about-key-diff h1 {\n  color: #fff;\n  font-weight: normal;\n}\n.about-key-diff ul {\n  margin-top: 35px;\n}\n.about-key-diff ul li {\n  color: #fff;\n  padding: 10px 0;\n  list-style: inside disc;\n  font-size: 16px;\n}\n.about-info {\n  background: #e5f0fa;\n}\n.about-info .v-align {\n  display: flex;\n}\n.about-info .v-align p {\n  align-self: center;\n}\n.icon-circle {\n  height: 90px;\n  width: 90px;\n  border-radius: 50%;\n  margin: 0 auto;\n}\n.icon-circle i {\n  line-height: 90px;\n}\n.icon-circle i svg {\n  fill: #fff;\n}\n.section-info {\n  padding: 70px 0;\n}\n.section-info .panel-container {\n  margin-top: 60px;\n  min-height: 330px;\n  perspective: 1000px;\n}\n.section-info .panel-container:hover .panel {\n  transform: rotateX(180deg);\n}\n.section-info .panel {\n  color: #fff;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 1s;\n  transform-style: preserve-3d;\n}\n.section-info .panel .panel-front {\n  border-top: 5px solid;\n  padding-top: 25px;\n  z-index: 1;\n}\n.section-info .panel .panel-front::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n.section-info .panel .panel-front.red {\n  background: url('1.jpg') no-repeat top center;\n  border-color: #b9646e;\n}\n.section-info .panel .panel-front.red .circle-bg {\n  background-color: #b9646e;\n}\n.section-info .panel .panel-front.blue {\n  background: url('2.jpg') no-repeat top center;\n  border-color: #276caa;\n}\n.section-info .panel .panel-front.blue .circle-bg {\n  background-color: #276caa;\n}\n.section-info .panel .panel-front.green {\n  background: url('3.jpg') no-repeat top center;\n  border-color: #4bbb57;\n}\n.section-info .panel .panel-front.green .circle-bg {\n  background-color: #4bbb57;\n}\n.section-info .panel .panel-back {\n  padding-top: 25px;\n}\n.section-info .panel .panel-back.red {\n  background-color: #b9646e;\n}\n.section-info .panel .panel-back.blue {\n  background-color: #276caa;\n}\n.section-info .panel .panel-back.green {\n  background-color: #4bbb57;\n}\n.section-info .panel .panel-front, .section-info .panel .panel-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.section-info .panel .panel-back {\n  transform: rotateX(180deg);\n}\n.section-info .panel .panel-back p {\n  padding: 10px;\n}\n.section-info .panel h5 {\n  margin: 20px 0;\n}\n.section-info .panel p {\n  margin: 0;\n}\n.about-tab .nav-tabs {\n  border: none;\n}\n.about-tab .nav-tabs .nav-item {\n  width: 100%;\n}\n.about-tab .nav-tabs .nav-item .nav-link {\n  border: none;\n  background: #e5e5e5;\n  margin-bottom: 10px;\n  display: block;\n  border-radius: 0;\n  color: #333333;\n}\n.about-tab .nav-tabs .nav-item .nav-link.active, .about-tab .nav-tabs .nav-item .nav-link:hover {\n  background: #214f7a;\n  color: #fff;\n}\n.about-tab {\n  margin: 70px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvRjpcXGdpdGh1Ylxcd29yay9zcmNcXGFwcFxcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDREQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQUk7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUNFUjtBREFJO0VBQ0ksZ0JBQUE7QUNFUjtBRERTO0VBQ0csV0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNHWjtBREVBO0VBQ0ksbUJBQUE7QUNDSjtBREFJO0VBQ0ksYUFBQTtBQ0VSO0FERFE7RUFDSSxrQkFBQTtBQ0daO0FET0E7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0pEO0FES0M7RUFDQyxpQkFBQTtBQ0hGO0FESUU7RUFDQyxVQUFBO0FDRkg7QURRQTtFQUNJLGVBQUE7QUNMSjtBRE1DO0VBQ08sZ0JBQUE7RUFDTixpQkFBQTtFQUNBLG1CQUFBO0FDSkY7QURLRTtFQUNDLDBCQUFBO0FDSEg7QURNQztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FDSkY7QURLRTtFQUNDLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FDSEg7QURJRztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUNGSjtBRElHO0VBQ0MsNkNBQUE7RUFDQSxxQkFwREM7QUNrREw7QURHSTtFQUNDLHlCQXREQTtBQ3FETDtBREtHO0VBQ0MsNkNBQUE7RUFDQSxxQkEzREU7QUN3RE47QURJSTtFQUNDLHlCQTdEQztBQzJETjtBRE1HO0VBQ0MsNkNBQUE7RUFDQSxxQkFsRUc7QUM4RFA7QURLSTtFQUNDLHlCQXBFRTtBQ2lFUDtBRFFFO0VBQ0MsaUJBQUE7QUNOSDtBRE9HO0VBQ0MseUJBOUVDO0FDeUVMO0FEUUc7RUFDQyx5QkFqRkU7QUMyRU47QURTRztFQUNDLHlCQXBGRztBQzZFUDtBRFdFO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7QUNUSDtBRFdFO0VBRUMsMEJBQUE7QUNWSDtBRFdHO0VBQ0MsYUFBQTtBQ1RKO0FEWUU7RUFDQyxjQUFBO0FDVkg7QURZRTtFQUNDLFNBQUE7QUNWSDtBRGlCQztFQUNDLFlBQUE7QUNkRjtBRGVFO0VBQ0MsV0FBQTtBQ2JIO0FEY0c7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNaSDtBRGFHO0VBQ0MsbUJBQUE7RUFDQSxXQUFBO0FDWEo7QURrQkE7RUFDQyxjQUFBO0FDZkQiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC1rZXktZGlmZntcclxuICAgIGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQuanBnKSBuby1yZXBlYXQgYm90dG9tIGNlbnRlciAjMWQ0Yjc2O1xyXG4gICAgcGFkZGluZzo3MHB4IDA7XHJcbiAgICBoMXtcclxuICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuICAgIH1cclxuICAgIHVse1xyXG4gICAgICAgIG1hcmdpbi10b3A6MzVweDtcclxuICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTppbnNpZGUgZGlzYztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmFib3V0LWluZm97XHJcbiAgICBiYWNrZ3JvdW5kOiNlNWYwZmE7XHJcbiAgICAudi1hbGlnbntcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbiRyZWQ6I2I5NjQ2ZTtcclxuJGJsdWU6IzI3NmNhYTtcclxuJGdyZWVuOiM0YmJiNTc7XHJcblxyXG4uaWNvbi1jaXJjbGV7XHJcblx0aGVpZ2h0OjkwcHg7XHJcblx0d2lkdGg6OTBweDtcclxuXHRib3JkZXItcmFkaXVzOjUwJTtcclxuXHRtYXJnaW46MCBhdXRvO1xyXG5cdGl7XHJcblx0XHRsaW5lLWhlaWdodDo5MHB4O1xyXG5cdFx0c3Zne1xyXG5cdFx0XHRmaWxsOiNmZmY7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG59XHJcblxyXG4uc2VjdGlvbi1pbmZve1xyXG4gICAgcGFkZGluZzo3MHB4IDA7XHJcblx0LnBhbmVsLWNvbnRhaW5lcntcclxuICAgICAgICBtYXJnaW4tdG9wOjYwcHg7XHJcblx0XHRtaW4taGVpZ2h0OiAzMzBweDtcclxuXHRcdHBlcnNwZWN0aXZlOiAxMDAwcHg7XHJcblx0XHQmOmhvdmVyIC5wYW5lbHtcclxuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5wYW5lbHtcclxuXHRcdGNvbG9yOiNmZmY7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcclxuXHRcdHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcblx0XHQucGFuZWwtZnJvbnR7XHJcblx0XHRcdGJvcmRlci10b3A6IDVweCBzb2xpZDtcclxuXHRcdFx0cGFkZGluZy10b3A6IDI1cHg7XHJcblx0XHRcdHotaW5kZXg6IDE7XHJcblx0XHRcdCY6OmFmdGVye1xyXG5cdFx0XHRcdGNvbnRlbnQ6Jyc7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHRcdFx0aGVpZ2h0OjEwMCU7XHJcblx0XHRcdFx0YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC41KTtcclxuXHRcdFx0XHR0b3A6IDA7XHJcblx0XHRcdFx0bGVmdDogMDtcclxuXHRcdFx0XHR6LWluZGV4OiAtMTtcclxuXHRcdFx0fVxyXG5cdFx0XHQmLnJlZHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOnVybCguLi8uLi9hc3NldHMvaW1hZ2VzLzEuanBnKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcclxuXHRcdFx0XHRib3JkZXItY29sb3I6ICRyZWQ7XHJcblx0XHRcdFx0LmNpcmNsZS1iZ3tcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6JHJlZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdCYuYmx1ZXtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOnVybCguLi8uLi9hc3NldHMvaW1hZ2VzLzIuanBnKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcclxuXHRcdFx0XHRib3JkZXItY29sb3I6ICRibHVlO1xyXG5cdFx0XHRcdC5jaXJjbGUtYmd7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiRibHVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0Ji5ncmVlbntcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOnVybCguLi8uLi9hc3NldHMvaW1hZ2VzLzMuanBnKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcclxuXHRcdFx0XHRib3JkZXItY29sb3I6ICRncmVlbjtcclxuXHRcdFx0XHQuY2lyY2xlLWJne1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjokZ3JlZW47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0LnBhbmVsLWJhY2t7XHJcblx0XHRcdHBhZGRpbmctdG9wOiAyNXB4O1xyXG5cdFx0XHQmLnJlZHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiRyZWQ7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdCYuYmx1ZXtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiRibHVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQmLmdyZWVue1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6JGdyZWVuO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHJcblx0XHQucGFuZWwtZnJvbnQsIC5wYW5lbC1iYWNre1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdFx0XHRiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0XHR9XHJcblx0XHQucGFuZWwtYmFja1xyXG5cdFx0e1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxuXHRcdFx0cHtcclxuXHRcdFx0XHRwYWRkaW5nOjEwcHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGg1e1xyXG5cdFx0XHRtYXJnaW46MjBweCAwO1xyXG5cdFx0fVxyXG5cdFx0cHtcclxuXHRcdFx0bWFyZ2luOjA7XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLmFib3V0LXRhYntcclxuXHQubmF2LXRhYnMge1xyXG5cdFx0Ym9yZGVyOm5vbmU7XHJcblx0XHQubmF2LWl0ZW17XHJcblx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHRcdC5uYXYtbGlua3tcclxuXHRcdFx0Ym9yZGVyOm5vbmU7XHJcblx0XHRcdGJhY2tncm91bmQ6ICNlNWU1ZTU7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206MTBweDtcclxuXHRcdFx0ZGlzcGxheTpibG9jaztcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMDtcclxuXHRcdFx0Y29sb3I6IzMzMzMzMztcclxuXHRcdFx0Ji5hY3RpdmUsICY6aG92ZXJ7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogIzIxNGY3YTtcclxuXHRcdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5hYm91dC10YWJ7XHJcblx0bWFyZ2luOjcwcHggMDtcclxufSIsIi5hYm91dC1rZXktZGlmZiB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0LmpwZykgbm8tcmVwZWF0IGJvdHRvbSBjZW50ZXIgIzFkNGI3NjtcbiAgcGFkZGluZzogNzBweCAwO1xufVxuLmFib3V0LWtleS1kaWZmIGgxIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uYWJvdXQta2V5LWRpZmYgdWwge1xuICBtYXJnaW4tdG9wOiAzNXB4O1xufVxuLmFib3V0LWtleS1kaWZmIHVsIGxpIHtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgbGlzdC1zdHlsZTogaW5zaWRlIGRpc2M7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmFib3V0LWluZm8ge1xuICBiYWNrZ3JvdW5kOiAjZTVmMGZhO1xufVxuLmFib3V0LWluZm8gLnYtYWxpZ24ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmFib3V0LWluZm8gLnYtYWxpZ24gcCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmljb24tY2lyY2xlIHtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5pY29uLWNpcmNsZSBpIHtcbiAgbGluZS1oZWlnaHQ6IDkwcHg7XG59XG4uaWNvbi1jaXJjbGUgaSBzdmcge1xuICBmaWxsOiAjZmZmO1xufVxuXG4uc2VjdGlvbi1pbmZvIHtcbiAgcGFkZGluZzogNzBweCAwO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgbWluLWhlaWdodDogMzMwcHg7XG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbC1jb250YWluZXI6aG92ZXIgLnBhbmVsIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCB7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWZyb250IHtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkO1xuICBwYWRkaW5nLXRvcDogMjVweDtcbiAgei1pbmRleDogMTtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1mcm9udDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAtMTtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1mcm9udC5yZWQge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy8xLmpwZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XG4gIGJvcmRlci1jb2xvcjogI2I5NjQ2ZTtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1mcm9udC5yZWQgLmNpcmNsZS1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOTY0NmU7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtZnJvbnQuYmx1ZSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzLzIuanBnKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcbiAgYm9yZGVyLWNvbG9yOiAjMjc2Y2FhO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWZyb250LmJsdWUgLmNpcmNsZS1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzZjYWE7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtZnJvbnQuZ3JlZW4ge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy8zLmpwZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XG4gIGJvcmRlci1jb2xvcjogIzRiYmI1Nztcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1mcm9udC5ncmVlbiAuY2lyY2xlLWJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiYmI1Nztcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1iYWNrIHtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtYmFjay5yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjk2NDZlO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWJhY2suYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzZjYWE7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtYmFjay5ncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YmJiNTc7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtZnJvbnQsIC5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWJhY2sge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1iYWNrIHAge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgaDUge1xuICBtYXJnaW46IDIwcHggMDtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIHAge1xuICBtYXJnaW46IDA7XG59XG5cbi5hYm91dC10YWIgLm5hdi10YWJzIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLmFib3V0LXRhYiAubmF2LXRhYnMgLm5hdi1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYWJvdXQtdGFiIC5uYXYtdGFicyAubmF2LWl0ZW0gLm5hdi1saW5rIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4uYWJvdXQtdGFiIC5uYXYtdGFicyAubmF2LWl0ZW0gLm5hdi1saW5rLmFjdGl2ZSwgLmFib3V0LXRhYiAubmF2LXRhYnMgLm5hdi1pdGVtIC5uYXYtbGluazpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyMTRmN2E7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYWJvdXQtdGFiIHtcbiAgbWFyZ2luOiA3MHB4IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AboutComponent = class AboutComponent {
      constructor() {
        this.keydiff = [{
          list: 'We provide custom application programming services to end customers.'
        }, {
          list: 'Our competence and experience ensure that we provide excellent services and products to our customers.'
        }, {
          list: 'At every stage of the development process, from conceptual design to product release, the highest quality standards are maintained.'
        }, {
          list: 'Our extensive communication facilities allow us to keep in touch with our customers 24X7.'
        }];
        this.tabs = [{
          title: 'About Us',
          decs: 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. The organization is making its presence felt on the engineering solution and services, Staffing and IT training circuit. Equipped with cross cultural operating experience; an asset, it drives the organization to deliver nothing but the best. Over the years we have built up a solid team of software professionals that come from different backgrounds and enlarge the creative potential of ARKEDGE. The competence that they offer contains a wide range of custom programming skills including the latest and most effective development in Microsoft technologies.'
        }, {
          title: 'Why ARKEDGE',
          decs: 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. '
        }, {
          title: 'Centers of Excellence',
          decs: 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. '
        }, {
          title: 'Vision & Mission',
          decs: 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. '
        }, {
          title: 'Values',
          decs: 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. '
        }, {
          title: 'Leadership',
          decs: 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. '
        }, {
          title: 'News',
          decs: 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. '
        }];
        this.solution = [{
          title: 'Data Management',
          color: 'red',
          list: [{
            name: 'Cleanse Dataset'
          }, {
            name: 'Data Mapping & Conversion'
          }, {
            name: 'Data Migration & Consolidation'
          }, {
            name: 'Spend Analysis'
          }],
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio',
          icon: '#icon_mgmt'
        }, {
          title: 'Software Engineering',
          color: 'blue',
          list: [{
            name: 'Product Engineering'
          }, {
            name: 'Application Development'
          }, {
            name: 'UX/UI Development'
          }, {
            name: 'Software Testing & QA'
          }],
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio',
          icon: '#icon_softEngg'
        }, {
          title: 'IT Staffing & Training',
          color: 'green',
          list: [{
            name: 'Staffing Services'
          }, {
            name: 'Industries'
          }, {
            name: 'Courses'
          }, {
            name: 'Program Calendar'
          }],
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio',
          icon: '#icon_training'
        }];
      }

      ngOnInit() {}

    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.scss */
      "./src/app/about/about.component.scss")).default]
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/advancesolution/advancesolution.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/advancesolution/advancesolution.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdvancesolutionAdvancesolutionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".section-advance-solution ul li a {\n  padding: 15px;\n  margin-bottom: 15px;\n  background: #e5e5e5;\n  color: #333333;\n  display: block;\n}\n.section-advance-solution ul li a.active {\n  background: #214f7a;\n  color: #fff;\n}\n.section-advance-solution + section {\n  background: #e5f0fa;\n}\n.section-advance-solution + section img {\n  max-width: 100%;\n}\n.info {\n  background: #e5f0fa;\n  padding: 15px;\n}\n.info p {\n  position: relative;\n  padding-right: 100px;\n}\n.info p i {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWR2YW5jZXNvbHV0aW9uL0Y6XFxnaXRodWJcXHdvcmsvc3JjXFxhcHBcXGFkdmFuY2Vzb2x1dGlvblxcYWR2YW5jZXNvbHV0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZHZhbmNlc29sdXRpb24vYWR2YW5jZXNvbHV0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0ZoQjtBREdnQjtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQ0RwQjtBRE1JO0VBQ0ksbUJBQUE7QUNKUjtBREtRO0VBQ0ksZUFBQTtBQ0haO0FEUUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUNMSjtBRE1JO0VBQ0csa0JBQUE7RUFDQSxvQkFBQTtBQ0pQO0FES087RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0FDSFgiLCJmaWxlIjoic3JjL2FwcC9hZHZhbmNlc29sdXRpb24vYWR2YW5jZXNvbHV0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24tYWR2YW5jZS1zb2x1dGlvbntcclxuICAgIHVse1xyXG4gICAgICAgIGxpe1xyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzoxNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxNXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDojZTVlNWU1O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IzMzMzMzMztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICAmLmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiMyMTRmN2E7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJiArIHNlY3Rpb257XHJcbiAgICAgICAgYmFja2dyb3VuZDojZTVmMGZhO1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmluZm97XHJcbiAgICBiYWNrZ3JvdW5kOiNlNWYwZmE7XHJcbiAgICBwYWRkaW5nOjE1cHg7XHJcbiAgICBwe1xyXG4gICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgcGFkZGluZy1yaWdodDoxMDBweDtcclxuICAgICAgIGl7XHJcbiAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgIHJpZ2h0OjA7XHJcbiAgICAgICAgICAgdG9wOjA7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuc2VjdGlvbi1hZHZhbmNlLXNvbHV0aW9uIHVsIGxpIGEge1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xuICBjb2xvcjogIzMzMzMzMztcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uc2VjdGlvbi1hZHZhbmNlLXNvbHV0aW9uIHVsIGxpIGEuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzIxNGY3YTtcbiAgY29sb3I6ICNmZmY7XG59XG4uc2VjdGlvbi1hZHZhbmNlLXNvbHV0aW9uICsgc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNlNWYwZmE7XG59XG4uc2VjdGlvbi1hZHZhbmNlLXNvbHV0aW9uICsgc2VjdGlvbiBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5pbmZvIHtcbiAgYmFja2dyb3VuZDogI2U1ZjBmYTtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5pbmZvIHAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xufVxuLmluZm8gcCBpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/advancesolution/advancesolution.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/advancesolution/advancesolution.component.ts ***!
    \**************************************************************/

  /*! exports provided: AdvancesolutionComponent */

  /***/
  function srcAppAdvancesolutionAdvancesolutionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdvancesolutionComponent", function () {
      return AdvancesolutionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AdvancesolutionComponent = class AdvancesolutionComponent {
      constructor() {}

      ngOnInit() {}

    };
    AdvancesolutionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-advancesolution',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./advancesolution.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/advancesolution/advancesolution.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./advancesolution.component.scss */
      "./src/app/advancesolution/advancesolution.component.scss")).default]
    })], AdvancesolutionComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _advancesolution_advancesolution_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./advancesolution/advancesolution.component */
    "./src/app/advancesolution/advancesolution.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _ourproduct_ourproduct_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ourproduct/ourproduct.component */
    "./src/app/ourproduct/ourproduct.component.ts");
    /* harmony import */


    var _managedservice_managedservice_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./managedservice/managedservice.component */
    "./src/app/managedservice/managedservice.component.ts");
    /* harmony import */


    var _company_company_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./company/company.component */
    "./src/app/company/company.component.ts");
    /* harmony import */


    var _career_career_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./career/career.component */
    "./src/app/career/career.component.ts");
    /* harmony import */


    var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./contactus/contactus.component */
    "./src/app/contactus/contactus.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-slick-carousel */
    "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js");
    /* harmony import */


    var _inner_page_header_inner_page_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./inner-page-header/inner-page-header.component */
    "./src/app/inner-page-header/inner-page-header.component.ts");
    /* harmony import */


    var _news_news_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./news/news.component */
    "./src/app/news/news.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _client_client_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./client/client.component */
    "./src/app/client/client.component.ts");
    /* harmony import */


    var _industries_industries_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./industries/industries.component */
    "./src/app/industries/industries.component.ts");
    /* harmony import */


    var _technology_technology_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./technology/technology.component */
    "./src/app/technology/technology.component.ts");
    /* harmony import */


    var _projectengineering_projectengineering_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./projectengineering/projectengineering.component */
    "./src/app/projectengineering/projectengineering.component.ts");

    const routes = [{
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: 'Advancesolution',
      component: _advancesolution_advancesolution_component__WEBPACK_IMPORTED_MODULE_3__["AdvancesolutionComponent"]
    }, {
      path: 'Technology',
      component: _technology_technology_component__WEBPACK_IMPORTED_MODULE_18__["TechnologyComponent"]
    }, {
      path: 'Industries',
      component: _industries_industries_component__WEBPACK_IMPORTED_MODULE_17__["IndustriesComponent"]
    }, {
      path: 'OurProduct',
      component: _ourproduct_ourproduct_component__WEBPACK_IMPORTED_MODULE_5__["OurproductComponent"]
    }, {
      path: 'ManagedService',
      component: _managedservice_managedservice_component__WEBPACK_IMPORTED_MODULE_6__["ManagedserviceComponent"]
    }, {
      path: 'Company',
      component: _company_company_component__WEBPACK_IMPORTED_MODULE_7__["CompanyComponent"]
    }, {
      path: 'Career',
      component: _career_career_component__WEBPACK_IMPORTED_MODULE_8__["CareerComponent"]
    }, {
      path: 'Contactus',
      component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_9__["ContactusComponent"]
    }, {
      path: 'news',
      component: _news_news_component__WEBPACK_IMPORTED_MODULE_14__["NewsComponent"]
    }, {
      path: 'about',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"]
    }, {
      path: 'client',
      component: _client_client_component__WEBPACK_IMPORTED_MODULE_16__["ClientComponent"]
    }, {
      path: 'Projectengineering',
      component: _projectengineering_projectengineering_component__WEBPACK_IMPORTED_MODULE_19__["ProjectengineeringComponent"]
    }, {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }];
    let AppRoutingModule = class AppRoutingModule {};
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_advancesolution_advancesolution_component__WEBPACK_IMPORTED_MODULE_3__["AdvancesolutionComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _ourproduct_ourproduct_component__WEBPACK_IMPORTED_MODULE_5__["OurproductComponent"], _managedservice_managedservice_component__WEBPACK_IMPORTED_MODULE_6__["ManagedserviceComponent"], _company_company_component__WEBPACK_IMPORTED_MODULE_7__["CompanyComponent"], _career_career_component__WEBPACK_IMPORTED_MODULE_8__["CareerComponent"], _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_9__["ContactusComponent"], _inner_page_header_inner_page_header_component__WEBPACK_IMPORTED_MODULE_13__["InnerPageHeaderComponent"], _news_news_component__WEBPACK_IMPORTED_MODULE_14__["NewsComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"], _client_client_component__WEBPACK_IMPORTED_MODULE_16__["ClientComponent"], _technology_technology_component__WEBPACK_IMPORTED_MODULE_18__["TechnologyComponent"], _industries_industries_component__WEBPACK_IMPORTED_MODULE_17__["IndustriesComponent"], _projectengineering_projectengineering_component__WEBPACK_IMPORTED_MODULE_19__["ProjectengineeringComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_12__["SlickCarouselModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n  color: #555555;\n  font-family: \"Noto Sans\", sans-serif;\n  font-size: 14px;\n}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\nh1 {\n  font-size: 40px;\n}\n\nh2 {\n  font-size: 34px;\n}\n\nh3 {\n  font-size: 30px;\n}\n\nh4 {\n  font-size: 26px;\n}\n\nh5 {\n  font-size: 22px;\n}\n\nh6 {\n  font-size: 18px;\n  line-height: 32px;\n}\n\nh1 {\n  font-weight: bold;\n}\n\n.center {\n  text-align: center;\n}\n\n.heading-highlight {\n  color: #276CAA;\n}\n\nsection {\n  padding: 70px 0;\n}\n\n.btn {\n  border-radius: 30px;\n  padding: 10px 30px;\n  text-transform: uppercase;\n}\n\n.btn + .btn {\n  margin-left: 15px;\n}\n\n.btn.btn-primary {\n  background: #214f7a;\n}\n\nsvg {\n  vertical-align: middle;\n  margin: auto;\n  align-content: center;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n.icon-large > svg {\n  width: 100px;\n  height: 100px;\n}\n\n.icon-medium > svg {\n  width: 50px;\n  height: 50px;\n}\n\n.icon-small > svg {\n  width: 34px;\n  height: 34px;\n}\n\n.icon-ex-small > svg {\n  width: 24px;\n  height: 24px;\n}\n\n.slick-slider {\n  width: 100%;\n  margin: auto;\n}\n\n.section-product .slick-list {\n  padding: 70px 0 !important;\n}\n\n.inner-banner {\n  margin-top: 70px;\n  position: relative;\n}\n\n.inner-banner img {\n  width: 100%;\n}\n\n.inner-banner .page-title {\n  position: absolute;\n  bottom: 60px;\n  background: rgba(255, 255, 255, 0.8);\n  width: 100%;\n  padding: 10px 0;\n  color: #214f7a;\n}\n\ninput.form-control {\n  border-radius: 150px;\n}\n\ntextarea.form-control {\n  border-radius: 15px;\n  resize: none;\n}\n\n.accordion .card {\n  border-radius: 0px;\n  border: none;\n}\n\n.accordion .card .card-header {\n  border: none;\n  background: none;\n  padding: 0 0 15px;\n}\n\n.accordion .card .card-header .btn {\n  border-radius: 0;\n  padding: 10px 15px;\n  background: #214f7a;\n  width: 100%;\n  text-align: left;\n  color: #fff;\n  text-decoration: none;\n}\n\n.accordion .card .card-header .btn.collapsed {\n  background: #e5e5e5;\n  color: #333333;\n}\n\n.section-project-engineering .card-body {\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRjpcXGdpdGh1Ylxcd29yay9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxjQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDRUQ7O0FEQUE7RUFDQyxlQUFBO0FDR0Q7O0FEREE7RUFDQyxlQUFBO0FDSUQ7O0FERkE7RUFDQyxlQUFBO0FDS0Q7O0FESEE7RUFDQyxlQUFBO0FDTUQ7O0FESkE7RUFDQyxlQUFBO0FDT0Q7O0FETEE7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7QUNRRDs7QUROQTtFQUNDLGlCQUFBO0FDU0Q7O0FEUEE7RUFDQyxrQkFBQTtBQ1VEOztBRFJBO0VBQ0ksY0FBQTtBQ1dKOztBRFRBO0VBQ0ksZUFBQTtBQ1lKOztBRFZBO0VBQ0MsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDYUQ7O0FEWkM7RUFDRSxpQkFBQTtBQ2NIOztBRFpDO0VBQ0MsbUJBQUE7QUNjRjs7QURYQTtFQUNDLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDY0Q7O0FEWkE7RUFDQyxnQkFBQTtBQ2VEOztBRGJBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7QUNnQkQ7O0FEZEE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ2lCRDs7QURmQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDa0JEOztBRGhCQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDbUJEOztBRGhCQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDbUJEOztBRGZDO0VBQ0MsMEJBQUE7QUNrQkY7O0FEYkU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDZ0JKOztBRGZJO0VBQ0ksV0FBQTtBQ2lCUjs7QURmSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDaUJSOztBRGRBO0VBQ0Msb0JBQUE7QUNpQkQ7O0FEZEE7RUFDQyxtQkFBQTtFQUNBLFlBQUE7QUNpQkQ7O0FEWEU7RUFDQyxrQkFBQTtFQUNBLFlBQUE7QUNjSDs7QURiSTtFQUNDLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDZUw7O0FEZEk7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNnQkw7O0FEZks7RUFDQyxtQkFBQTtFQUNBLGNBQUE7QUNpQk47O0FEVEM7RUFDQyxZQUFBO0FDWUYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG5cdGNvbG9yOiM1NTU1NTU7XHJcblx0Zm9udC1mYW1pbHk6ICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZToxNHB4O1xyXG59XHJcbnVse1xyXG5cdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuXHRtYXJnaW46MDtcclxuXHRwYWRkaW5nOjA7XHJcbn1cclxuaDF7XHJcblx0Zm9udC1zaXplOjQwcHg7XHJcbn1cclxuaDJ7XHJcblx0Zm9udC1zaXplOjM0cHg7XHJcbn1cclxuaDN7XHJcblx0Zm9udC1zaXplOjMwcHg7XHJcbn1cclxuaDR7XHJcblx0Zm9udC1zaXplOjI2cHg7XHJcbn1cclxuaDV7XHJcblx0Zm9udC1zaXplOjIycHg7XHJcbn1cclxuaDZ7XHJcblx0Zm9udC1zaXplOjE4cHg7IFxyXG5cdGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG59XHJcbmgxe1xyXG5cdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbn1cclxuLmNlbnRlcntcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG59XHRcclxuLmhlYWRpbmctaGlnaGxpZ2h0e1xyXG4gICAgY29sb3I6IzI3NkNBQTtcclxufVxyXG5zZWN0aW9ue1xyXG4gICAgcGFkZGluZzo3MHB4IDA7XHJcbn1cclxuLmJ0bntcclxuXHRib3JkZXItcmFkaXVzOiAzMHB4O1xyXG5cdHBhZGRpbmc6IDEwcHggMzBweDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdCYrIC5idG57XHJcblx0XHRcdG1hcmdpbi1sZWZ0OjE1cHg7XHJcblx0fVxyXG5cdCYuYnRuLXByaW1hcnl7XHJcblx0XHRiYWNrZ3JvdW5kOiMyMTRmN2E7XHJcblx0fVxyXG59XHJcbnN2ZyB7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHRtYXJnaW46IGF1dG87XHJcblx0YWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcbnN2Zzpub3QoOnJvb3QpIHtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5pY29uLWxhcmdlPnN2ZyB7XHJcblx0d2lkdGg6IDEwMHB4O1xyXG5cdGhlaWdodDogMTAwcHg7XHJcbn1cclxuLmljb24tbWVkaXVtPnN2ZyB7XHJcblx0d2lkdGg6IDUwcHg7XHJcblx0aGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5pY29uLXNtYWxsPnN2ZyB7XHJcblx0d2lkdGg6IDM0cHg7XHJcblx0aGVpZ2h0OiAzNHB4O1xyXG59XHJcbi5pY29uLWV4LXNtYWxsPnN2ZyB7XHJcblx0d2lkdGg6IDI0cHg7XHJcblx0aGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4uc2xpY2stc2xpZGVyIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW46IGF1dG87XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1wcm9kdWN0e1xyXG5cdC5zbGljay1saXN0e1xyXG5cdFx0cGFkZGluZzo3MHB4IDAgIWltcG9ydGFudDtcclxuXHR9XHJcbiAgfVxyXG4gXHJcblxyXG4gIC5pbm5lci1iYW5uZXJ7XHJcbiAgICBtYXJnaW4tdG9wOjcwcHg7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgfVxyXG4gICAgLnBhZ2UtdGl0bGV7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogNjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOnJnYigyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICBjb2xvcjojMjE0ZjdhO1xyXG4gICAgfVxyXG59XHJcbmlucHV0LmZvcm0tY29udHJvbHtcclxuXHRib3JkZXItcmFkaXVzOiAxNTBweDtcclxufVxyXG5cclxudGV4dGFyZWEuZm9ybS1jb250cm9se1xyXG5cdGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblx0cmVzaXplOiBub25lO1xyXG59XHJcblxyXG5cclxuXHJcblx0LmFjY29yZGlvbntcclxuXHRcdC5jYXJke1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOjBweDtcclxuXHRcdFx0Ym9yZGVyOm5vbmU7XHJcblx0XHRcdCAuY2FyZC1oZWFkZXJ7XHJcblx0XHRcdFx0IGJvcmRlcjpub25lO1xyXG5cdFx0XHRcdCBiYWNrZ3JvdW5kOm5vbmU7XHJcblx0XHRcdFx0IHBhZGRpbmc6MCAwIDE1cHg7XHJcblx0XHRcdFx0LmJ0bntcclxuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6MDtcclxuXHRcdFx0XHRcdHBhZGRpbmc6MTBweCAxNXB4O1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDojMjE0ZjdhO1xyXG5cdFx0XHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0XHRcdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHRcdFx0Ji5jb2xsYXBzZWR7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6I2U1ZTVlNTtcclxuXHRcdFx0XHRcdFx0Y29sb3I6IzMzMzMzMztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5zZWN0aW9uLXByb2plY3QtZW5naW5lZXJpbmd7XHJcblx0LmNhcmQtYm9keXtcclxuXHRcdHBhZGRpbmc6MHB4O1xyXG5cdH0gXHJcblx0fSIsImJvZHkge1xuICBjb2xvcjogIzU1NTU1NTtcbiAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDQwcHg7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAzNHB4O1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuaDQge1xuICBmb250LXNpemU6IDI2cHg7XG59XG5cbmg1IHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG5oNiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG59XG5cbmgxIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkaW5nLWhpZ2hsaWdodCB7XG4gIGNvbG9yOiAjMjc2Q0FBO1xufVxuXG5zZWN0aW9uIHtcbiAgcGFkZGluZzogNzBweCAwO1xufVxuXG4uYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmJ0biArIC5idG4ge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi5idG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiAjMjE0ZjdhO1xufVxuXG5zdmcge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW46IGF1dG87XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuc3ZnOm5vdCg6cm9vdCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaWNvbi1sYXJnZSA+IHN2ZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmljb24tbWVkaXVtID4gc3ZnIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmljb24tc21hbGwgPiBzdmcge1xuICB3aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuXG4uaWNvbi1leC1zbWFsbCA+IHN2ZyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5zbGljay1zbGlkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uc2VjdGlvbi1wcm9kdWN0IC5zbGljay1saXN0IHtcbiAgcGFkZGluZzogNzBweCAwICFpbXBvcnRhbnQ7XG59XG5cbi5pbm5lci1iYW5uZXIge1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaW5uZXItYmFubmVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmlubmVyLWJhbm5lciAucGFnZS10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA2MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGNvbG9yOiAjMjE0ZjdhO1xufVxuXG5pbnB1dC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItcmFkaXVzOiAxNTBweDtcbn1cblxudGV4dGFyZWEuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcmVzaXplOiBub25lO1xufVxuXG4uYWNjb3JkaW9uIC5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG4uYWNjb3JkaW9uIC5jYXJkIC5jYXJkLWhlYWRlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcGFkZGluZzogMCAwIDE1cHg7XG59XG4uYWNjb3JkaW9uIC5jYXJkIC5jYXJkLWhlYWRlciAuYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjMjE0ZjdhO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5hY2NvcmRpb24gLmNhcmQgLmNhcmQtaGVhZGVyIC5idG4uY29sbGFwc2VkIHtcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbi5zZWN0aW9uLXByb2plY3QtZW5naW5lZXJpbmcgLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let AppComponent = class AppComponent {
      constructor(router) {
        this.router = router;
        this.title = 'arkedge';
        this.router.events.subscribe(routerEvent => {
          if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            if (routerEvent.url === '/') {
              this.router.navigate(['home'], {
                skipLocationChange: true
              });
            }
          }
        });
      }

    };

    AppComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
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


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-slick-carousel */
    "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js");

    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__["SlickCarouselModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/career/career.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/career/career.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppCareerCareerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".text-wrap {\n  margin: 50px 0 30px;\n}\n\n.section-contact {\n  margin-top: 70px;\n}\n\n.section-contact .career {\n  margin-bottom: 70px;\n}\n\n.section-contact form {\n  margin: 70px 0;\n}\n\n.section-contact form h2 {\n  margin-bottom: 30px;\n}\n\n.section-contact form button {\n  margin: 30px auto 0;\n  display: table;\n}\n\n.section-contact .career-info .panel {\n  padding: 30px;\n  background: #e5f0fa;\n}\n\n.section-contact .career-info .panel .panel-body {\n  margin-top: 50px;\n}\n\n.section-contact .career-info .panel h6 {\n  font-weight: bold;\n  margin: 0;\n  line-height: 18px;\n}\n\n.section-contact .career-info .panel p {\n  margin: 0;\n}\n\n.section-contact .career-info .panel:hover {\n  background: #214f7a;\n}\n\n.section-contact .career-info .panel:hover h6, .section-contact .career-info .panel:hover p {\n  color: #fff;\n}\n\n.section-contact .custom-file-label {\n  left: 15px;\n  width: calc(100% - 30px);\n  border-radius: 150px;\n  overflow: hidden;\n}\n\n.section-contact .table thead th {\n  border-bottom: 1px;\n  background: #d6d5d5;\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZWVyL0Y6XFxnaXRodWJcXHdvcmsvc3JjXFxhcHBcXGNhcmVlclxcY2FyZWVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXJlZXIvY2FyZWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0FDRUo7O0FEREk7RUFDSSxtQkFBQTtBQ0dSOztBRERJO0VBSUksY0FBQTtBQ0FSOztBREhRO0VBQ0ksbUJBQUE7QUNLWjs7QURGUTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQ0laOztBREFJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDRVI7O0FERFE7RUFDSSxnQkFBQTtBQ0daOztBRERTO0VBQ0csaUJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUNHWjs7QUREUTtFQUNJLFNBQUE7QUNHWjs7QUREUTtFQUNJLG1CQUFBO0FDR1o7O0FERlk7RUFDSSxXQUFBO0FDSWhCOztBREVBO0VBQ0ksVUFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQ0FKOztBRElRO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNGWiIsImZpbGUiOiJzcmMvYXBwL2NhcmVlci9jYXJlZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC13cmFwe1xyXG4gICAgbWFyZ2luOjUwcHggMCAzMHB4O1xyXG59XHJcbi5zZWN0aW9uLWNvbnRhY3R7XHJcbiAgICBtYXJnaW4tdG9wOjcwcHg7XHJcbiAgICAuY2FyZWVye1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206NzBweDtcclxuICAgIH1cclxuICAgIGZvcm17XHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWFyZ2luOjcwcHggMDtcclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIG1hcmdpbjozMHB4IGF1dG8gMDtcclxuICAgICAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgfSAgIFxyXG4gICAgfVxyXG4gICAgLmNhcmVlci1pbmZve1xyXG4gICAgLnBhbmVse1xyXG4gICAgICAgIHBhZGRpbmc6MzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiNlNWYwZmE7XHJcbiAgICAgICAgLnBhbmVsLWJvZHl7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6NTBweDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBoNntcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDojMjE0ZjdhO1xyXG4gICAgICAgICAgICBoNiwgcHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgfVxyXG4gICAgXHJcbn1cclxuLmN1c3RvbS1maWxlLWxhYmVse1xyXG4gICAgbGVmdDoxNXB4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czoxNTBweDtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxufVxyXG4udGFibGV7XHJcbiAgICB0aGVhZHtcclxuICAgICAgICB0aHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiNkNmQ1ZDU7XHJcbiAgICAgICAgICAgIGNvbG9yOiMwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbn0iLCIudGV4dC13cmFwIHtcbiAgbWFyZ2luOiA1MHB4IDAgMzBweDtcbn1cblxuLnNlY3Rpb24tY29udGFjdCB7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG59XG4uc2VjdGlvbi1jb250YWN0IC5jYXJlZXIge1xuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xufVxuLnNlY3Rpb24tY29udGFjdCBmb3JtIHtcbiAgbWFyZ2luOiA3MHB4IDA7XG59XG4uc2VjdGlvbi1jb250YWN0IGZvcm0gaDIge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLnNlY3Rpb24tY29udGFjdCBmb3JtIGJ1dHRvbiB7XG4gIG1hcmdpbjogMzBweCBhdXRvIDA7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuLnNlY3Rpb24tY29udGFjdCAuY2FyZWVyLWluZm8gLnBhbmVsIHtcbiAgcGFkZGluZzogMzBweDtcbiAgYmFja2dyb3VuZDogI2U1ZjBmYTtcbn1cbi5zZWN0aW9uLWNvbnRhY3QgLmNhcmVlci1pbmZvIC5wYW5lbCAucGFuZWwtYm9keSB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4uc2VjdGlvbi1jb250YWN0IC5jYXJlZXItaW5mbyAucGFuZWwgaDYge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cbi5zZWN0aW9uLWNvbnRhY3QgLmNhcmVlci1pbmZvIC5wYW5lbCBwIHtcbiAgbWFyZ2luOiAwO1xufVxuLnNlY3Rpb24tY29udGFjdCAuY2FyZWVyLWluZm8gLnBhbmVsOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzIxNGY3YTtcbn1cbi5zZWN0aW9uLWNvbnRhY3QgLmNhcmVlci1pbmZvIC5wYW5lbDpob3ZlciBoNiwgLnNlY3Rpb24tY29udGFjdCAuY2FyZWVyLWluZm8gLnBhbmVsOmhvdmVyIHAge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5zZWN0aW9uLWNvbnRhY3QgLmN1c3RvbS1maWxlLWxhYmVsIHtcbiAgbGVmdDogMTVweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICBib3JkZXItcmFkaXVzOiAxNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zZWN0aW9uLWNvbnRhY3QgLnRhYmxlIHRoZWFkIHRoIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4O1xuICBiYWNrZ3JvdW5kOiAjZDZkNWQ1O1xuICBjb2xvcjogIzAwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/career/career.component.ts":
  /*!********************************************!*\
    !*** ./src/app/career/career.component.ts ***!
    \********************************************/

  /*! exports provided: CareerComponent */

  /***/
  function srcAppCareerCareerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CareerComponent", function () {
      return CareerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let CareerComponent = class CareerComponent {
      constructor() {
        this.careerInfo = [{
          title: 'How We Hire',
          info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. '
        }, {
          title: 'Employee Benefits',
          info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. '
        }];
        this.career = [{
          jobcode: 'B302',
          jobtitle: 'Sr. Business Analyst',
          location: 'Mumbai, India',
          targetDate: '20-Feb-2020'
        }, {
          jobcode: 'B302',
          jobtitle: 'Sr. Business Analyst',
          location: 'Mumbai, India',
          targetDate: '20-Feb-2020'
        }, {
          jobcode: 'B302',
          jobtitle: 'Sr. Business Analyst',
          location: 'Mumbai, India',
          targetDate: '20-Feb-2020'
        }, {
          jobcode: 'B302',
          jobtitle: 'Sr. Business Analyst',
          location: 'Mumbai, India',
          targetDate: '20-Feb-2020'
        }, {
          jobcode: 'B302',
          jobtitle: 'Sr. Business Analyst',
          location: 'Mumbai, India',
          targetDate: '20-Feb-2020'
        }];
      }

      ngOnInit() {}

    };
    CareerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-career',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./career.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/career/career.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./career.component.scss */
      "./src/app/career/career.component.scss")).default]
    })], CareerComponent);
    /***/
  },

  /***/
  "./src/app/client/client.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/client/client.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppClientClientComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".client-speak, .client-info {\n  padding: 70px 0;\n}\n\n.client-speak {\n  background: #e5f0fa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50L0Y6XFxnaXRodWJcXHdvcmsvc3JjXFxhcHBcXGNsaWVudFxcY2xpZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jbGllbnQvY2xpZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC9jbGllbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xpZW50LXNwZWFrLCAuY2xpZW50LWluZm8ge1xyXG4gICAgcGFkZGluZzo3MHB4IDA7XHJcbn1cclxuXHJcbi5jbGllbnQtc3BlYWt7XHJcbiAgICBiYWNrZ3JvdW5kOiNlNWYwZmE7XHJcbn0iLCIuY2xpZW50LXNwZWFrLCAuY2xpZW50LWluZm8ge1xuICBwYWRkaW5nOiA3MHB4IDA7XG59XG5cbi5jbGllbnQtc3BlYWsge1xuICBiYWNrZ3JvdW5kOiAjZTVmMGZhO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/client/client.component.ts":
  /*!********************************************!*\
    !*** ./src/app/client/client.component.ts ***!
    \********************************************/

  /*! exports provided: ClientComponent */

  /***/
  function srcAppClientClientComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientComponent", function () {
      return ClientComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ClientComponent = class ClientComponent {
      constructor() {
        this.clientInfo = [{
          clientimg: 'client'
        }, {
          clientimg: 'client'
        }, {
          clientimg: 'client'
        }, {
          clientimg: 'client'
        }, {
          clientimg: 'client'
        }, {
          clientimg: 'client'
        }, {
          clientimg: 'client'
        }, {
          clientimg: 'client'
        }, {
          clientimg: 'client'
        }];
      }

      ngOnInit() {}

    };
    ClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-client',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./client.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/client/client.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./client.component.scss */
      "./src/app/client/client.component.scss")).default]
    })], ClientComponent);
    /***/
  },

  /***/
  "./src/app/company/company.component.scss":
  /*!************************************************!*\
    !*** ./src/app/company/company.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCompanyCompanyComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvY29tcGFueS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/company/company.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/company/company.component.ts ***!
    \**********************************************/

  /*! exports provided: CompanyComponent */

  /***/
  function srcAppCompanyCompanyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyComponent", function () {
      return CompanyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let CompanyComponent = class CompanyComponent {
      constructor() {}

      ngOnInit() {}

    };
    CompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-company',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./company.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/company/company.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./company.component.scss */
      "./src/app/company/company.component.scss")).default]
    })], CompanyComponent);
    /***/
  },

  /***/
  "./src/app/contactus/contactus.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/contactus/contactus.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactusContactusComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".section-contact {\n  margin: 70px 0 0;\n}\n.section-contact form {\n  margin: 70px 0;\n}\n.section-contact form h1 {\n  margin-bottom: 50px;\n  font-weight: normal;\n}\n.section-contact form button {\n  margin: 30px auto 0;\n  display: table;\n}\n.section-contact .contact-emails .panel {\n  border: 1px solid #214f7a;\n  border-bottom: 10px solid #214f7a;\n  padding: 20px;\n  padding-top: 30px;\n}\n.section-contact .contact-emails .panel .panel-body {\n  margin-top: 60px;\n}\n.section-contact .contact-emails .panel .panel-body h5 {\n  font-weight: bold;\n}\n.section-contact .contact-emails .panel .panel-body p {\n  margin: 0;\n}\n.section-contact .contact-emails .panel .panel-body p:first-child {\n  font-weight: bold;\n}\n.section-contact .contact-address .panel {\n  cursor: pointer;\n}\n.section-contact .contact-address .panel img {\n  max-width: 100%;\n  height: auto;\n}\n.section-contact .contact-address .panel h5 {\n  font-weight: bold;\n}\n.section-contact .contact-address .panel p {\n  margin: 0;\n  font-size: 16px;\n}\n.section-contact .contact-address .panel .panel-body {\n  padding: 20px;\n  background: #e5f0fa;\n  min-height: 220px;\n}\n.section-contact .contact-address .panel:hover .panel-body {\n  background: #ffc201;\n}\n.mapouter {\n  width: 100% !important;\n  height: 300px !important;\n  margin-top: 70px;\n}\n.mapouter .gmap_canvas {\n  height: 300px !important;\n}\n.mapouter .gmap_canvas iframe {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHVzL0Y6XFxnaXRodWJcXHdvcmsvc3JjXFxhcHBcXGNvbnRhY3R1c1xcY29udGFjdHVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0dXMvY29udGFjdHVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjtBREFJO0VBS0ksY0FBQTtBQ0ZSO0FERlE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0FDSVo7QUREUTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQ0daO0FEQ0k7RUFDSSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDQ1I7QURBUTtFQUNJLGdCQUFBO0FDRVo7QUREWTtFQUNJLGlCQUFBO0FDR2hCO0FERFk7RUFJSSxTQUFBO0FDQWhCO0FESGdCO0VBQ0ksaUJBQUE7QUNLcEI7QURJUTtFQUNJLGVBQUE7QUNGWjtBREdZO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNEaEI7QURHWTtFQUNJLGlCQUFBO0FDRGhCO0FER1k7RUFDSSxTQUFBO0VBQ0EsZUFBQTtBQ0RoQjtBREdZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNEaEI7QURJZ0I7RUFDSSxtQkFBQTtBQ0ZwQjtBRFVBO0VBQ0ksc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDUEo7QURRSTtFQUNJLHdCQUFBO0FDTlI7QURPUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDTFoiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0dXMvY29udGFjdHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24tY29udGFjdHtcclxuICAgIG1hcmdpbjo3MHB4IDAgMDtcclxuICAgIGZvcm17XHJcbiAgICAgICAgaDF7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206NTBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYXJnaW46NzBweCAwO1xyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgbWFyZ2luOjMwcHggYXV0byAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICB9ICAgXHJcbiAgICB9XHJcbiAgICAuY29udGFjdC1lbWFpbHN7XHJcbiAgICAucGFuZWx7XHJcbiAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjMjE0ZjdhO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206MTBweCBzb2xpZCAjMjE0ZjdhO1xyXG4gICAgICAgIHBhZGRpbmc6MjBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDozMHB4O1xyXG4gICAgICAgIC5wYW5lbC1ib2R5e1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOjYwcHg7XHJcbiAgICAgICAgICAgIGg1e1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9fVxyXG5cclxuICAgIC5jb250YWN0LWFkZHJlc3N7XHJcbiAgICAgICAgLnBhbmVse1xyXG4gICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGg1e1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucGFuZWwtYm9keXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MjBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6I2U1ZjBmYTtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6MjIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAucGFuZWwtYm9keXtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmZmMyMDE7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXBvdXRlcntcclxuICAgIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDozMDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDo3MHB4O1xyXG4gICAgLmdtYXBfY2FudmFze1xyXG4gICAgICAgIGhlaWdodDozMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGlmcmFtZXtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLnNlY3Rpb24tY29udGFjdCB7XG4gIG1hcmdpbjogNzBweCAwIDA7XG59XG4uc2VjdGlvbi1jb250YWN0IGZvcm0ge1xuICBtYXJnaW46IDcwcHggMDtcbn1cbi5zZWN0aW9uLWNvbnRhY3QgZm9ybSBoMSB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uc2VjdGlvbi1jb250YWN0IGZvcm0gYnV0dG9uIHtcbiAgbWFyZ2luOiAzMHB4IGF1dG8gMDtcbiAgZGlzcGxheTogdGFibGU7XG59XG4uc2VjdGlvbi1jb250YWN0IC5jb250YWN0LWVtYWlscyAucGFuZWwge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjE0ZjdhO1xuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICMyMTRmN2E7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuLnNlY3Rpb24tY29udGFjdCAuY29udGFjdC1lbWFpbHMgLnBhbmVsIC5wYW5lbC1ib2R5IHtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cbi5zZWN0aW9uLWNvbnRhY3QgLmNvbnRhY3QtZW1haWxzIC5wYW5lbCAucGFuZWwtYm9keSBoNSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNlY3Rpb24tY29udGFjdCAuY29udGFjdC1lbWFpbHMgLnBhbmVsIC5wYW5lbC1ib2R5IHAge1xuICBtYXJnaW46IDA7XG59XG4uc2VjdGlvbi1jb250YWN0IC5jb250YWN0LWVtYWlscyAucGFuZWwgLnBhbmVsLWJvZHkgcDpmaXJzdC1jaGlsZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNlY3Rpb24tY29udGFjdCAuY29udGFjdC1hZGRyZXNzIC5wYW5lbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zZWN0aW9uLWNvbnRhY3QgLmNvbnRhY3QtYWRkcmVzcyAucGFuZWwgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG4uc2VjdGlvbi1jb250YWN0IC5jb250YWN0LWFkZHJlc3MgLnBhbmVsIGg1IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2VjdGlvbi1jb250YWN0IC5jb250YWN0LWFkZHJlc3MgLnBhbmVsIHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5zZWN0aW9uLWNvbnRhY3QgLmNvbnRhY3QtYWRkcmVzcyAucGFuZWwgLnBhbmVsLWJvZHkge1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZTVmMGZhO1xuICBtaW4taGVpZ2h0OiAyMjBweDtcbn1cbi5zZWN0aW9uLWNvbnRhY3QgLmNvbnRhY3QtYWRkcmVzcyAucGFuZWw6aG92ZXIgLnBhbmVsLWJvZHkge1xuICBiYWNrZ3JvdW5kOiAjZmZjMjAxO1xufVxuXG4ubWFwb3V0ZXIge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG59XG4ubWFwb3V0ZXIgLmdtYXBfY2FudmFzIHtcbiAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xufVxuLm1hcG91dGVyIC5nbWFwX2NhbnZhcyBpZnJhbWUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/contactus/contactus.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/contactus/contactus.component.ts ***!
    \**************************************************/

  /*! exports provided: ContactusComponent */

  /***/
  function srcAppContactusContactusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactusComponent", function () {
      return ContactusComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ContactusComponent = class ContactusComponent {
      constructor() {
        this.contactInfo = [{
          title: 'General Informaton',
          subtitle: 'Inquiry',
          id: 'info@arkedge.com'
        }, {
          title: 'Sales & Learning',
          subtitle: 'Business development',
          id: 'sales@arkedge.com'
        }, {
          title: 'Current Openings',
          subtitle: 'Job apply',
          id: 'careers@arkedge.com'
        }];
        this.getTouch = [{
          img: 'assets/images/contact',
          subtitle: 'Corporate Office',
          street_1: 'Arkedge Technologies Pvt Ltd.703, Wing "B", Galaxy L.X.APT.,',
          street_2: 'Navre Park, Ambarnath (W),Thane - 421501',
          state: 'Maharashtra, India',
          contact: '+91 9029290808',
          id: 'info@arkedge.com'
        }, {
          img: 'assets/images/contact',
          subtitle: 'Mumbai',
          street_1: '201, B Tower Ashok Nagar, Marol Maroshi Road,',
          street_2: 'Andheri (E), Mumbai - 400047',
          state: 'Maharashtra, India',
          contact: '+91 9029290808',
          id: 'info@arkedge.com'
        }, {
          img: 'assets/images/contact',
          subtitle: 'Thane',
          street_1: 'B-103, Elegant Tower,Shangvi Complex,,',
          street_2: 'Mira Road, Thane Mumbai ',
          state: 'Maharashtra, India',
          contact: '+91 9029290808',
          id: 'info@arkedge.com'
        }];
      }

      ngOnInit() {}

    };
    ContactusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contactus',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contactus.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contactus.component.scss */
      "./src/app/contactus/contactus.component.scss")).default]
    })], ContactusComponent);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/footer/footer.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "footer {\n  background: #172947;\n  padding: 35px 0 15px;\n}\nfooter .logo {\n  margin-bottom: 15px;\n}\nfooter a {\n  color: #dddddd;\n}\nfooter p {\n  color: #fff;\n}\nfooter address {\n  color: #dddddd;\n}\nfooter h5 {\n  color: #fff;\n}\nfooter ul.footer-li {\n  list-style: none inside;\n  margin: 0;\n  padding: 10px 0;\n  clear: both;\n}\nfooter ul.footer-li li {\n  padding: 10px 0;\n  line-height: 12px;\n}\nfooter ul.footer-li li a.active {\n  color: #eab119;\n}\nfooter .social-net {\n  padding: 0;\n}\nfooter .social-net ul {\n  list-style: none inside;\n  margin-top: 20px;\n  padding: 0;\n  float: left;\n  width: 100%;\n}\nfooter .social-net ul li {\n  float: left;\n  margin-right: 20px;\n}\nfooter .social-net ul li a {\n  color: #fff;\n  font-size: 12px;\n}\nfooter .social-net ul li svg {\n  width: 24px;\n  height: 24px;\n  fill: #fff;\n}\nfooter .copyright {\n  color: #ffffff;\n  position: absolute;\n  bottom: 0;\n  left: 15px;\n}\nfooter .copyright span {\n  float: left;\n  margin-right: 10px;\n}\nfooter .map img {\n  max-width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0Y6XFxnaXRodWJcXHdvcmsvc3JjXFxhcHBcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtBQ0NKO0FEQUk7RUFDSSxtQkFBQTtBQ0VSO0FEQUk7RUFDSSxjQUFBO0FDRVI7QURBSTtFQUNJLFdBQUE7QUNFUjtBREFJO0VBQ0ksY0FBQTtBQ0VSO0FEQUk7RUFDSSxXQUFBO0FDRVI7QURBSTtFQUNJLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDRVI7QUREUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0daO0FERGdCO0VBQ0ksY0FBQTtBQ0dwQjtBREVJO0VBQ0ksVUFBQTtBQ0FSO0FEQ1E7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDQ1o7QURBWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0VoQjtBRERnQjtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDR3BCO0FERGdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDR3BCO0FERUk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0FSO0FEQ0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNDUjtBREVRO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzE3Mjk0NztcclxuICAgIHBhZGRpbmc6IDM1cHggMCAxNXB4O1xyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogI2RkZGRkZDtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgIH1cclxuICAgIGFkZHJlc3Mge1xyXG4gICAgICAgIGNvbG9yOiAjZGRkZGRkO1xyXG4gICAgfVxyXG4gICAgaDV7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgIH1cclxuICAgIHVsLmZvb3Rlci1saSB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZSBpbnNpZGU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAmLmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjojZWFiMTE5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNvY2lhbC1uZXQge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgdWx7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmUgaW5zaWRlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvcHlyaWdodCB7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAxNXB4O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgIH19XHJcbiAgICAgLm1hcHtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgfVxyXG59IiwiZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogIzE3Mjk0NztcbiAgcGFkZGluZzogMzVweCAwIDE1cHg7XG59XG5mb290ZXIgLmxvZ28ge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuZm9vdGVyIGEge1xuICBjb2xvcjogI2RkZGRkZDtcbn1cbmZvb3RlciBwIHtcbiAgY29sb3I6ICNmZmY7XG59XG5mb290ZXIgYWRkcmVzcyB7XG4gIGNvbG9yOiAjZGRkZGRkO1xufVxuZm9vdGVyIGg1IHtcbiAgY29sb3I6ICNmZmY7XG59XG5mb290ZXIgdWwuZm9vdGVyLWxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZSBpbnNpZGU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTBweCAwO1xuICBjbGVhcjogYm90aDtcbn1cbmZvb3RlciB1bC5mb290ZXItbGkgbGkge1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xufVxuZm9vdGVyIHVsLmZvb3Rlci1saSBsaSBhLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZWFiMTE5O1xufVxuZm9vdGVyIC5zb2NpYWwtbmV0IHtcbiAgcGFkZGluZzogMDtcbn1cbmZvb3RlciAuc29jaWFsLW5ldCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmUgaW5zaWRlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nOiAwO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG59XG5mb290ZXIgLnNvY2lhbC1uZXQgdWwgbGkge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuZm9vdGVyIC5zb2NpYWwtbmV0IHVsIGxpIGEge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuZm9vdGVyIC5zb2NpYWwtbmV0IHVsIGxpIHN2ZyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGZpbGw6ICNmZmY7XG59XG5mb290ZXIgLmNvcHlyaWdodCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMTVweDtcbn1cbmZvb3RlciAuY29weXJpZ2h0IHNwYW4ge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuZm9vdGVyIC5tYXAgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
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

    let FooterComponent = class FooterComponent {
      constructor() {}

      ngOnInit() {}

    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/footer/footer.component.scss")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/header/header.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nav.bg-light {\n  background-color: rgba(17, 70, 142, 0.8) !important;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 9;\n  padding: 0 1rem;\n}\n\n.navbar-brand i, .navbar-brand div {\n  float: left;\n}\n\n.navbar-brand svg {\n  width: 40px;\n  height: 40px;\n}\n\n.navbar-brand div {\n  margin-left: 10px;\n}\n\n.navbar-brand div span {\n  color: #fff;\n  display: block;\n}\n\n.navbar-brand div span.company-name {\n  font-size: 25px;\n  line-height: 20px;\n  font-weight: bold;\n}\n\n.navbar-brand div span.company-type {\n  font-size: 15px;\n  line-height: 12px;\n  margin-top: 7px;\n}\n\n.navbar-nav-list {\n  float: right;\n  margin-left: auto;\n  list-style-type: none;\n  margin-bottom: 0;\n}\n\n.navbar-nav-list .nav-item {\n  font-size: 14px;\n  float: left;\n}\n\n.navbar-nav-list .nav-item:nth-child(-n+3) {\n  text-transform: uppercase;\n  font-size: 16px;\n}\n\n.navbar-nav-list .nav-item:nth-child(4) {\n  margin-left: 50px;\n}\n\n.navbar-nav-list .nav-item.quick-link a {\n  padding-right: 0px;\n}\n\n.navbar-nav-list .nav-item a {\n  color: #fff;\n  padding: 1.5rem 1rem;\n}\n\n.navbar-nav-list .nav-item a.active {\n  color: #eab119;\n}\n\n.navbar-nav-list .nav-item svg {\n  width: 20px;\n  height: 20px;\n  margin-right: 5px;\n}\n\n.navbar-nav-list .nav-item .sub-nav {\n  list-style-type: none;\n  border-top: 5px solid #276caa;\n  position: absolute;\n  top: -155px;\n  left: 0px;\n  width: 100%;\n  height: 0px;\n  background: #fff;\n  transition: all 0.5s;\n  padding: 30px 0 50px;\n  margin: 0px;\n  display: none;\n}\n\n.navbar-nav-list .nav-item .sub-nav img {\n  max-width: 100%;\n  height: auto;\n}\n\n.navbar-nav-list .nav-item .sub-nav li.inner-list {\n  border-top: 1px dotted #ccc;\n  padding: 10px 0;\n  float: left;\n  display: block;\n  width: 100%;\n}\n\n.navbar-nav-list .nav-item .sub-nav li a {\n  color: #276caa;\n  padding: 0;\n  margin-top: 0px;\n  font-size: 12px;\n}\n\n.navbar-nav-list .nav-item .sub-nav a {\n  margin-top: 10px;\n  float: left;\n}\n\n.navbar-nav-list .nav-item .sub-nav h6 {\n  font-size: 14px;\n}\n\n.navbar-nav-list .nav-item.nav-dropdown-list:hover {\n  background: #276caa;\n}\n\n.navbar-nav-list .nav-item.nav-dropdown-list:hover .sub-nav {\n  height: auto;\n  top: 70px;\n  display: block;\n}\n\n.navbar-light .navbar-nav .nav-link {\n  color: #fff;\n}\n\n.navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {\n  color: #fff;\n}\n\n.navbar-nav {\n  float: right;\n}\n\n.tele-no svg {\n  fill: #eab119;\n}\n\n.quick-link svg {\n  fill: #fff;\n}\n\n.slider-menu {\n  width: 350px;\n  padding: 10px;\n  position: fixed;\n  height: calc(100vh);\n  top: 0;\n  background: #fff;\n  z-index: 20;\n  right: -350px;\n  transition: all 0.5s;\n}\n\n.slider-menu .close-slide {\n  float: right;\n  padding: 10px;\n  margin-top: 10px;\n}\n\n.slider-menu.active {\n  right: 0px;\n}\n\n.slider-menu ul {\n  margin: 0;\n  padding: 0;\n}\n\n.slider-menu li.menu-list {\n  list-style-type: none;\n}\n\n.slider-menu li.menu-list a {\n  padding: 10px 10px;\n  font-size: 14px;\n  color: #555555;\n  display: block;\n  text-transform: capitalize;\n  text-decoration: none;\n}\n\n.slider-menu li.menu-list a.active, .slider-menu li.menu-list a:focus {\n  color: #eab119;\n}\n\n.slider-menu .navbar-brand {\n  margin: 10px 0 10px 10px;\n}\n\n.slider-menu .navbar-brand span.company-name {\n  color: #276caa;\n  font-size: 35px;\n  line-height: 30px;\n}\n\n.slider-menu .navbar-brand span.company-type {\n  color: #000;\n  font-size: 21px;\n  line-height: 15px;\n  margin-top: 5px;\n}\n\n.slider-menu .navbar-brand svg {\n  width: 50px;\n  height: 50px;\n}\n\n.overlay {\n  display: none;\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  width: 100%;\n  height: calc(100vh);\n  top: 0;\n}\n\n.overlay.active {\n  display: block;\n  z-index: 10;\n}\n\n@media (max-width: 576px) {\n  .navbar-nav-list .nav-item:not(:last-child) {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0Y6XFxnaXRodWJcXHdvcmsvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksbURBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0FSOztBREtPO0VBQ0ssV0FBQTtBQ0ZaOztBRElRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNGWjs7QURJUTtFQUNJLGlCQUFBO0FDRlo7O0FER1k7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQ0RoQjs7QURFZ0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0FwQjs7QURFZ0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQXBCOztBRE1BO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0hKOztBRElJO0VBQ0ksZUFBQTtFQWFBLFdBQUE7QUNkUjs7QURFUTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQ0FaOztBREVRO0VBQ0ksaUJBQUE7QUNBWjs7QURHWTtFQUNJLGtCQUFBO0FDRGhCOztBREtRO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0FDSFo7O0FESVk7RUFDSSxjQUFBO0FDRmhCOztBREtRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0haOztBRE1TO0VBQ0kscUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDSmI7O0FES2E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0hqQjs7QURNaUI7RUFDRywyQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNKcEI7O0FETWdCO0VBQ0ksY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0pwQjs7QURPYTtFQUNHLGdCQUFBO0VBQ0EsV0FBQTtBQ0xoQjs7QURRYTtFQUNJLGVBQUE7QUNOakI7O0FEVWlCO0VBQ0EsbUJBQUE7QUNSakI7O0FEU2lCO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FDUG5COztBRGNBO0VBQ0ksV0FBQTtBQ1hKOztBRGFBO0VBQ0ksV0FBQTtBQ1ZKOztBRFlBO0VBQ0ksWUFBQTtBQ1RKOztBRGNJO0VBQ0ksYUFBQTtBQ1hSOztBRGdCSTtFQUNJLFVBQUE7QUNiUjs7QURpQkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLE1BQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUNkSjs7QURlSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNiUjs7QURlSTtFQUNJLFVBQUE7QUNiUjs7QURlSTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDYlI7O0FEZUk7RUFDSSxxQkFBQTtBQ2JSOztBRGNRO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0FDWlI7O0FEYVE7RUFDSSxjQUFBO0FDWFo7O0FEZUk7RUFDSSx3QkFBQTtBQ2JSOztBRGVhO0VBQ0csY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ2JoQjs7QURlWTtFQUNHLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDYmY7O0FEZ0JRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNkWjs7QURvQkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsTUFBQTtBQ2pCSjs7QURrQkk7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBQ2hCUjs7QURxQkE7RUFHVztJQUNLLGFBQUE7RUNwQmQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xyXG4gICAgJi5iZy1saWdodCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE3LCA3MCwgMTQyLCAwLjgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAgIHBhZGRpbmc6MCAxcmVtO1xyXG4gICAgfVxyXG4gICBcclxufVxyXG4ubmF2YmFyLWJyYW5ke1xyXG4gICAgICAgaSwgZGl2IHtcclxuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICB3aWR0aDo0MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6NDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICAmLmNvbXBhbnktbmFtZXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MjVweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDoyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi5jb21wYW55LXR5cGV7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MTJweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjdweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxufVxyXG5cclxuLm5hdmJhci1uYXYtbGlzdHtcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgbWFyZ2luLWxlZnQ6YXV0bztcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAubmF2LWl0ZW17XHJcbiAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgJjpudGgtY2hpbGQoLW4rMyl7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bnRoLWNoaWxkKDQpe1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDo1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLnF1aWNrLWxpbmt7XHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MS41cmVtIDFyZW07XHJcbiAgICAgICAgICAgICYuYWN0aXZle1xyXG4gICAgICAgICAgICAgICAgY29sb3I6I2VhYjExOTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzdmd7XHJcbiAgICAgICAgICAgIHdpZHRoOjIwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDoyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6NXB4O1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAuc3ViLW5hdntcclxuICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgIGJvcmRlci10b3A6NXB4IHNvbGlkICMyNzZjYWE7XHJcbiAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICB0b3A6LTE1NXB4O1xyXG4gICAgICAgICAgICAgbGVmdDowcHg7XHJcbiAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgaGVpZ2h0OjBweDtcclxuICAgICAgICAgICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbiAgICAgICAgICAgICBwYWRkaW5nOjMwcHggMCA1MHB4O1xyXG4gICAgICAgICAgICAgbWFyZ2luOjBweDtcclxuICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgIGhlaWdodDphdXRvO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICAgJi5pbm5lci1saXN0e1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6MXB4IGRvdHRlZCAjY2NjO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MTBweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzI3NmNhYTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTJweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDsgIFxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBoNntcclxuICAgICAgICAgICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICYubmF2LWRyb3Bkb3duLWxpc3R7XHJcbiAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojMjc2Y2FhO1xyXG4gICAgICAgICAgICAgICAgIC5zdWItbmF2e1xyXG4gICAgICAgICAgICAgICAgICAgaGVpZ2h0OmF1dG87XHJcbiAgICAgICAgICAgICAgICAgICB0b3A6NzBweDtcclxuICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmt7XHJcbiAgICBjb2xvcjojZmZmO1xyXG59XHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rOmZvY3VzLCAubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluazpob3ZlcntcclxuICAgIGNvbG9yOiNmZmY7XHJcbn1cclxuLm5hdmJhci1uYXZ7XHJcbiAgICBmbG9hdDpyaWdodDtcclxufVxyXG5cclxuXHJcbi50ZWxlLW5ve1xyXG4gICAgc3Zne1xyXG4gICAgICAgIGZpbGw6I2VhYjExOTtcclxuICAgIH1cclxufVxyXG5cclxuLnF1aWNrLWxpbmt7XHJcbiAgICBzdmd7XHJcbiAgICAgICAgZmlsbDojZmZmO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2xpZGVyLW1lbnV7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmgpO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHotaW5kZXg6IDIwO1xyXG4gICAgcmlnaHQ6IC0zNTBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbiAgICAuY2xvc2Utc2xpZGV7XHJcbiAgICAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgJi5hY3RpdmV7XHJcbiAgICAgICAgcmlnaHQ6MHB4O1xyXG4gICAgfVxyXG4gICAgdWx7XHJcbiAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgcGFkZGluZzowO1xyXG4gICAgfVxyXG4gICAgbGkubWVudS1saXN0e1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICBhe1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6IzU1NTU1NTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgICAgICAmLmFjdGl2ZSwgJjpmb2N1c3tcclxuICAgICAgICAgICAgY29sb3I6I2VhYjExOTsgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm5hdmJhci1icmFuZHtcclxuICAgICAgICBtYXJnaW46MTBweCAwIDEwcHggMTBweDtcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgJi5jb21wYW55LW5hbWV7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojMjc2Y2FhO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5jb21wYW55LXR5cGV7XHJcbiAgICAgICAgICAgICAgIGNvbG9yOiMwMDA7XHJcbiAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5vdmVybGF5e1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCk7XHJcbiAgICB0b3A6MDtcclxuICAgICYuYWN0aXZle1xyXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgei1pbmRleDoxMDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCl7XHJcbiAgICAubmF2YmFyLW5hdi1saXN0e1xyXG4gICAgICAgIC5uYXYtaXRlbXtcclxuICAgICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCl7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYXYuYmctbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3LCA3MCwgMTQyLCAwLjgpICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTtcbiAgcGFkZGluZzogMCAxcmVtO1xufVxuXG4ubmF2YmFyLWJyYW5kIGksIC5uYXZiYXItYnJhbmQgZGl2IHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ubmF2YmFyLWJyYW5kIHN2ZyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG4ubmF2YmFyLWJyYW5kIGRpdiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLm5hdmJhci1icmFuZCBkaXYgc3BhbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5uYXZiYXItYnJhbmQgZGl2IHNwYW4uY29tcGFueS1uYW1lIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubmF2YmFyLWJyYW5kIGRpdiBzcGFuLmNvbXBhbnktdHlwZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIG1hcmdpbi10b3A6IDdweDtcbn1cblxuLm5hdmJhci1uYXYtbGlzdCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmbG9hdDogbGVmdDtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtOm50aC1jaGlsZCgtbiszKSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtOm50aC1jaGlsZCg0KSB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW0ucXVpY2stbGluayBhIHtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW0gYSB7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxLjVyZW0gMXJlbTtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtIGEuYWN0aXZlIHtcbiAgY29sb3I6ICNlYWIxMTk7XG59XG4ubmF2YmFyLW5hdi1saXN0IC5uYXYtaXRlbSBzdmcge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtIC5zdWItbmF2IHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBib3JkZXItdG9wOiA1cHggc29saWQgIzI3NmNhYTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xNTVweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBwYWRkaW5nOiAzMHB4IDAgNTBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubmF2YmFyLW5hdi1saXN0IC5uYXYtaXRlbSAuc3ViLW5hdiBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtIC5zdWItbmF2IGxpLmlubmVyLWxpc3Qge1xuICBib3JkZXItdG9wOiAxcHggZG90dGVkICNjY2M7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtIC5zdWItbmF2IGxpIGEge1xuICBjb2xvcjogIzI3NmNhYTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubmF2YmFyLW5hdi1saXN0IC5uYXYtaXRlbSAuc3ViLW5hdiBhIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ubmF2YmFyLW5hdi1saXN0IC5uYXYtaXRlbSAuc3ViLW5hdiBoNiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtLm5hdi1kcm9wZG93bi1saXN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzI3NmNhYTtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtLm5hdi1kcm9wZG93bi1saXN0OmhvdmVyIC5zdWItbmF2IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB0b3A6IDcwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluazpmb2N1cywgLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbms6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm5hdmJhci1uYXYge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi50ZWxlLW5vIHN2ZyB7XG4gIGZpbGw6ICNlYWIxMTk7XG59XG5cbi5xdWljay1saW5rIHN2ZyB7XG4gIGZpbGw6ICNmZmY7XG59XG5cbi5zbGlkZXItbWVudSB7XG4gIHdpZHRoOiAzNTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmgpO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHotaW5kZXg6IDIwO1xuICByaWdodDogLTM1MHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cbi5zbGlkZXItbWVudSAuY2xvc2Utc2xpZGUge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uc2xpZGVyLW1lbnUuYWN0aXZlIHtcbiAgcmlnaHQ6IDBweDtcbn1cbi5zbGlkZXItbWVudSB1bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5zbGlkZXItbWVudSBsaS5tZW51LWxpc3Qge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4uc2xpZGVyLW1lbnUgbGkubWVudS1saXN0IGEge1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM1NTU1NTU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnNsaWRlci1tZW51IGxpLm1lbnUtbGlzdCBhLmFjdGl2ZSwgLnNsaWRlci1tZW51IGxpLm1lbnUtbGlzdCBhOmZvY3VzIHtcbiAgY29sb3I6ICNlYWIxMTk7XG59XG4uc2xpZGVyLW1lbnUgLm5hdmJhci1icmFuZCB7XG4gIG1hcmdpbjogMTBweCAwIDEwcHggMTBweDtcbn1cbi5zbGlkZXItbWVudSAubmF2YmFyLWJyYW5kIHNwYW4uY29tcGFueS1uYW1lIHtcbiAgY29sb3I6ICMyNzZjYWE7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG4uc2xpZGVyLW1lbnUgLm5hdmJhci1icmFuZCBzcGFuLmNvbXBhbnktdHlwZSB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDIxcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uc2xpZGVyLW1lbnUgLm5hdmJhci1icmFuZCBzdmcge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4ub3ZlcmxheSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoKTtcbiAgdG9wOiAwO1xufVxuLm92ZXJsYXkuYWN0aXZlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHotaW5kZXg6IDEwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
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

    let HeaderComponent = class HeaderComponent {
      constructor() {
        this.isOpen = true;
        this.list = [{
          name: 'about'
        }, {
          name: 'news'
        }, {
          name: 'client'
        }, {
          name: 'Projectengineering'
        }, {
          name: 'Technology'
        }, {
          name: 'Industries'
        }];
        this.managedService = [{
          name: 'SOFTWARE ENGINEERING',
          managedServiceList: [{
            name: 'Product Engineering'
          }, {
            name: 'Application Development'
          }, {
            name: 'UX/UI Development'
          }, {
            name: 'Software Testing & QA'
          }]
        }, {
          name: 'DATA MANAGEMENT',
          managedServiceList: [{
            name: 'Cleanse Dataset'
          }, {
            name: 'Data Mapping & Conversion'
          }, {
            name: 'Data Migration & Consolidation'
          }, {
            name: 'Spend Analysis'
          }]
        }, {
          name: 'IT STAFFING & TRAINING',
          managedServiceList: [{
            name: 'Staffing Services'
          }, {
            name: 'Industries'
          }, {
            name: 'Courses'
          }, {
            name: 'Program Calendar'
          }]
        }];
      }

      slideToggel() {
        this.isOpen = !this.isOpen;
      }

      ngOnInit() {}

    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/header/header.component.scss")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".panel-heading, .panel-body {\n  border: none;\n  text-align: center;\n}\n\n.clients, .section-projects, .section-sevices, .testimonials, .section-info, .contact-info {\n  padding: 70px 0;\n}\n\n.clients {\n  background-color: #f7f7f7;\n}\n\n.clear-float {\n  clear: both;\n  float: none;\n}\n\n.contact-info .social-net ul {\n  padding: 0;\n  margin: 0;\n}\n\n.contact-info .social-net ul li {\n  list-style-type: none;\n  margin-bottom: 15px;\n}\n\n.contact-info .social-net ul li span {\n  margin-left: 15px;\n  color: #555555;\n}\n\n.picsum-img-wrapper img {\n  width: 100%;\n}\n\n.icon-circle {\n  height: 90px;\n  width: 90px;\n  border-radius: 50%;\n  margin: 0 auto;\n}\n\n.icon-circle i {\n  line-height: 90px;\n}\n\n.icon-circle i svg {\n  fill: #fff;\n}\n\n.section-info .panel-container {\n  min-height: 330px;\n  perspective: 1000px;\n}\n\n.section-info .panel-container:hover .panel {\n  transform: rotateX(180deg);\n}\n\n.section-info .panel {\n  color: #fff;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 1s;\n  transform-style: preserve-3d;\n}\n\n.section-info .panel .panel-front {\n  border-top: 5px solid;\n  padding-top: 25px;\n  z-index: 1;\n}\n\n.section-info .panel .panel-front::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n\n.section-info .panel .panel-front.red {\n  background: url('1.jpg') no-repeat top center;\n  border-color: #b9646e;\n}\n\n.section-info .panel .panel-front.red .circle-bg {\n  background-color: #b9646e;\n}\n\n.section-info .panel .panel-front.blue {\n  background: url('2.jpg') no-repeat top center;\n  border-color: #276caa;\n}\n\n.section-info .panel .panel-front.blue .circle-bg {\n  background-color: #276caa;\n}\n\n.section-info .panel .panel-front.green {\n  background: url('3.jpg') no-repeat top center;\n  border-color: #4bbb57;\n}\n\n.section-info .panel .panel-front.green .circle-bg {\n  background-color: #4bbb57;\n}\n\n.section-info .panel .panel-back {\n  padding-top: 25px;\n}\n\n.section-info .panel .panel-back.red {\n  background-color: #b9646e;\n}\n\n.section-info .panel .panel-back.blue {\n  background-color: #276caa;\n}\n\n.section-info .panel .panel-back.green {\n  background-color: #4bbb57;\n}\n\n.section-info .panel .panel-front, .section-info .panel .panel-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.section-info .panel .panel-back {\n  transform: rotateX(180deg);\n}\n\n.section-info .panel .panel-back p {\n  padding: 10px;\n}\n\n.section-info .panel h5 {\n  margin: 20px 0;\n}\n\n.section-info .panel p {\n  margin: 0;\n}\n\n.section-sevices {\n  background-color: rgba(204, 204, 204, 0.2);\n}\n\n.section-sevices .panel {\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 5px;\n  margin-bottom: 15px;\n}\n\n.section-sevices .panel h5 {\n  color: #88cedb;\n}\n\n.section-sevices .panel p {\n  padding: 0 10px;\n}\n\n.section-sevices .panel .icon-circle {\n  margin: 15px auto;\n}\n\n.section-sevices .panel .icon-circle svg {\n  height: 90px;\n  width: 90px;\n}\n\n.section-sevices .panel .icon-circle.skyblue {\n  background: #88cedb;\n}\n\n.section-sevices .panel .icon-circle.limegreen {\n  background: #78c29a;\n}\n\n.section-sevices .panel .icon-circle.yellow {\n  background: #f1bb57;\n}\n\n.section-sevices .panel .icon-circle.orange {\n  background: #e97f61;\n}\n\n.section-sevices .panel .icon-circle.blue {\n  background: #88cedb;\n}\n\n.section-sevices .panel .icon-circle.purple {\n  background: #787fc2;\n}\n\n::ng-deep .testimonials {\n  background: url('testimonials.jpg') no-repeat bottom center #4277a8;\n}\n\n::ng-deep .testimonials h1 {\n  color: #fff;\n  margin-bottom: 20px;\n}\n\n::ng-deep .testimonials p {\n  font-size: 18px;\n  font-weight: 700;\n  color: #fff;\n}\n\n::ng-deep .testimonials .carousel {\n  margin-top: 0;\n  z-index: 1;\n}\n\n::ng-deep .testimonials .carousel-inner {\n  height: 282px;\n}\n\n::ng-deep .testimonials .carousel-indicators li {\n  height: 10px;\n  border-radius: 10px;\n  border: 1px solid #fff;\n  background: transparent;\n}\n\n::ng-deep .testimonials .carousel-indicators li.active {\n  background: #fff;\n}\n\n.main-banner .carousel {\n  margin-top: -60px;\n  z-index: 1;\n}\n\n.main-banner .container {\n  position: relative;\n}\n\n.main-banner .carousel-caption {\n  right: auto;\n  bottom: auto;\n  top: 200px;\n  left: 0;\n  z-index: 10;\n  color: #fff;\n  text-align: left;\n  width: 600px;\n}\n\n.main-banner .carousel-caption h3:first-child {\n  color: #FFC100;\n}\n\n.main-banner .carousel-caption .btn {\n  border: 2px solid #fff;\n  margin-right: 15px;\n  margin-top: 50px;\n}\n\n.section-projects {\n  position: relative;\n  float: left;\n  width: 100%;\n}\n\n.section-projects .project-grid li {\n  width: 25%;\n  float: left;\n  list-style-type: none;\n}\n\n.section-projects .project-grid li figure {\n  margin: 0 0 2px 0;\n}\n\n.section-projects .project-grid li:first-child {\n  width: 50%;\n}\n\n.section-projects .project-grid li:first-child figure {\n  margin: 0;\n}\n\n.section-projects .project-grid li:nth-child(4) figure, .section-projects .project-grid li:nth-child(5) figure {\n  margin: 0;\n}\n\n.section-projects .project-grid button {\n  background: none;\n  border: 2px solid #fff;\n}\n\n.section-projects .p1 {\n  padding: 1px;\n}\n\n.section-projects figure {\n  position: relative;\n  float: left;\n  overflow: hidden;\n  width: calc(100% - 2px);\n  background-color: #fff;\n  margin: 0;\n  cursor: pointer;\n}\n\n.section-projects figure img {\n  position: relative;\n  display: block;\n  transform: scale(1);\n  transition: 0.5s ease-in-out;\n  max-width: 100%;\n  height: auto;\n}\n\n.section-projects figure .show-more-overlay {\n  background: rgba(0, 0, 0, 0) linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0.2) 23%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 68%, rgba(0, 0, 0, 0) 81%, rgba(0, 0, 0, 0) 92%, rgba(0, 0, 0, 0) 100%) repeat scroll 0 0;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transform: translateY(100%);\n  transition: all 0.5s ease 0s;\n}\n\n.section-projects figure figcaption {\n  webkit-backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  position: absolute;\n  bottom: 0px;\n  left: 20px;\n  right: 20px;\n  max-height: 40px;\n  transition: 0.5s ease-in-out;\n  z-index: 2;\n}\n\n.section-projects figure .show_more-title {\n  color: #fff;\n  font-size: 21px;\n  line-height: 30px;\n  font-weight: 700;\n  margin-bottom: 10px;\n}\n\n.section-projects figure .show_more-desc {\n  color: #fff;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 300;\n}\n\n.section-projects figure::after {\n  content: \"\";\n  background: rgba(0, 0, 0, 0.3);\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n\n.section-projects figure:hover img {\n  transform: scale(1.1);\n}\n\n.section-projects figure:hover .show-more-overlay {\n  background: rgba(0, 0, 0, 0) linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0.2) 100%) repeat scroll 0 0;\n  transform: translateY(0px);\n}\n\n.section-projects figure:hover figcaption {\n  height: auto;\n  max-height: 200px;\n  bottom: 50px;\n}\n\n@media (max-width: 576px) {\n  .main-banner {\n    display: none;\n  }\n\n  .section-projects .project-grid li {\n    width: 100%;\n  }\n  .section-projects .project-grid li figure {\n    margin: 0 0 15px;\n  }\n  .section-projects .project-grid li:first-child {\n    width: 100%;\n  }\n  .section-projects .project-grid li:first-child figure {\n    margin: 0 0 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9GOlxcZ2l0aHViXFx3b3JrL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7QUNDRDs7QURFQTtFQUNDLGVBQUE7QUNDRDs7QURHQTtFQUNDLHlCQUFBO0FDQUQ7O0FER0E7RUFDQyxXQUFBO0VBQ0EsV0FBQTtBQ0FEOztBREtFO0VBQ0MsVUFBQTtFQUNBLFNBQUE7QUNGSDs7QURHRztFQUNDLHFCQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURFRztFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQ0FMOztBRFFDO0VBQ0MsV0FBQTtBQ0xGOztBRGFBO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNWRDs7QURXQztFQUNDLGlCQUFBO0FDVEY7O0FEVUU7RUFDQyxVQUFBO0FDUkg7O0FEZUM7RUFDQyxpQkFBQTtFQUNBLG1CQUFBO0FDWkY7O0FEYUU7RUFDQywwQkFBQTtBQ1hIOztBRGNDO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUNaRjs7QURhRTtFQUNDLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FDWEg7O0FEWUc7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FDVko7O0FEWUc7RUFDQyw2Q0FBQTtFQUNBLHFCQWxEQztBQ3dDTDs7QURXSTtFQUNDLHlCQXBEQTtBQzJDTDs7QURhRztFQUNDLDZDQUFBO0VBQ0EscUJBekRFO0FDOENOOztBRFlJO0VBQ0MseUJBM0RDO0FDaUROOztBRGNHO0VBQ0MsNkNBQUE7RUFDQSxxQkFoRUc7QUNvRFA7O0FEYUk7RUFDQyx5QkFsRUU7QUN1RFA7O0FEZ0JFO0VBQ0MsaUJBQUE7QUNkSDs7QURlRztFQUNDLHlCQTVFQztBQytETDs7QURnQkc7RUFDQyx5QkEvRUU7QUNpRU47O0FEaUJHO0VBQ0MseUJBbEZHO0FDbUVQOztBRG1CRTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0FDakJIOztBRG1CRTtFQUVDLDBCQUFBO0FDbEJIOztBRG1CRztFQUNDLGFBQUE7QUNqQko7O0FEb0JFO0VBQ0MsY0FBQTtBQ2xCSDs7QURvQkU7RUFDQyxTQUFBO0FDbEJIOztBRCtCQTtFQUNDLDBDQUFBO0FDNUJEOztBRDZCQztFQUNDLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDM0JGOztBRDRCRTtFQUNDLGNBQUE7QUMxQkg7O0FENEJFO0VBQ0MsZUFBQTtBQzFCSDs7QUQ0QkU7RUFDQyxpQkFBQTtBQzFCSDs7QUQyQkc7RUFDQyxZQUFBO0VBQ0EsV0FBQTtBQ3pCSjs7QUQyQkc7RUFDQyxtQkEzQks7QUNFVDs7QUQyQkc7RUFDQyxtQkEzQk87QUNFWDs7QUQyQkc7RUFDQyxtQkFoQ0k7QUNPUjs7QUQyQkc7RUFDQyxtQkFsQ0k7QUNTUjs7QUQyQkc7RUFDQyxtQkFuQ0U7QUNVTjs7QUQyQkc7RUFDQyxtQkFyQ0k7QUNZUjs7QURnQ0E7RUFDQyxtRUFBQTtBQzdCRDs7QUQ4QkM7RUFDQyxXQUFBO0VBQ0EsbUJBQUE7QUM1QkY7O0FEOEJDO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQzVCRjs7QUQ4QkM7RUFDQyxhQUFBO0VBQ0EsVUFBQTtBQzVCRjs7QUQ4QkM7RUFDQyxhQUFBO0FDNUJGOztBRDhCQztFQUNDLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUM1QkY7O0FENkJFO0VBQ0MsZ0JBQUE7QUMzQkg7O0FEa0NDO0VBQ0MsaUJBQUE7RUFDQSxVQUFBO0FDL0JGOztBRGlDQztFQUNDLGtCQUFBO0FDL0JGOztBRGlDQztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQy9CRjs7QURnQ0U7RUFDQyxjQUFBO0FDOUJIOztBRGdDRTtFQUNDLHNCQUFBO0VBQ0Esa0JBQUE7RUFDRyxnQkFBQTtBQzlCTjs7QURrQ0E7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDRyxXQUFBO0FDL0JKOztBRGlDRTtFQUNDLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUMvQkg7O0FEZ0NHO0VBQ0MsaUJBQUE7QUM5Qko7O0FEZ0NHO0VBQ0MsVUFBQTtBQzlCSjs7QUQrQkk7RUFDQyxTQUFBO0FDN0JMOztBRGlDSTtFQUNDLFNBQUE7QUMvQkw7O0FEbUNFO0VBQ0MsZ0JBQUE7RUFDQSxzQkFBQTtBQ2pDSDs7QURvQ0M7RUFDQyxZQUFBO0FDbENGOztBRG9DQztFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDbENGOztBRG1DRTtFQUNDLGtCQUFBO0VBQ0EsY0FBQTtFQUVBLG1CQUFBO0VBRUEsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ2pDSDs7QURtQ0U7RUFDQyxxTkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUNqQ0g7O0FEb0NFO0VBQ0Msa0NBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUVBLDRCQUFBO0VBQ0EsVUFBQTtBQ2xDSDs7QURvQ0U7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ2xDSDs7QURvQ0U7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNsQ0g7O0FEb0NFO0VBQ0MsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ2xDSDs7QURxQ0c7RUFFQyxxQkFBQTtBQ25DSjs7QURxQ0c7RUFFQyx1R0FBQTtFQUNBLDBCQUFBO0FDcENKOztBRHNDRztFQUVDLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNyQ0o7O0FENkNBO0VBQ0M7SUFDQyxhQUFBO0VDMUNBOztFRDhDQTtJQUNDLFdBQUE7RUMzQ0Q7RUQ0Q0M7SUFDQyxnQkFBQTtFQzFDRjtFRDRDQztJQUNDLFdBQUE7RUMxQ0Y7RUQyQ0M7SUFDQyxnQkFBQTtFQ3pDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhbmVsLWhlYWRpbmcsIC5wYW5lbC1ib2R5ICB7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNsaWVudHMsIC5zZWN0aW9uLXByb2plY3RzLCAuc2VjdGlvbi1zZXZpY2VzLCAudGVzdGltb25pYWxzLCAuc2VjdGlvbi1pbmZvLCAuY29udGFjdC1pbmZve1xyXG5cdHBhZGRpbmc6NzBweCAwO1xyXG59XHJcblxyXG5cclxuLmNsaWVudHN7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDI0NywgMjQ3LCAxKTtcclxufVxyXG5cclxuLmNsZWFyLWZsb2F0e1xyXG5cdGNsZWFyOmJvdGg7XHJcblx0ZmxvYXQ6bm9uZTtcclxufVxyXG5cclxuLmNvbnRhY3QtaW5mb3tcclxuXHQuc29jaWFsLW5ldHtcclxuXHRcdHVse1xyXG5cdFx0XHRwYWRkaW5nOjA7XHJcblx0XHRcdG1hcmdpbjowO1xyXG5cdFx0XHRsaXtcclxuXHRcdFx0XHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbToxNXB4O1xyXG5cdFx0XHRzcGFue1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6MTVweDtcclxuXHRcdFx0XHRcdGNvbG9yOiM1NTU1NTU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4ucGljc3VtLWltZy13cmFwcGVye1xyXG5cdGltZ3tcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0fVxyXG59XHJcblxyXG4kcmVkOiNiOTY0NmU7XHJcbiRibHVlOiMyNzZjYWE7XHJcbiRncmVlbjojNGJiYjU3O1xyXG5cclxuLmljb24tY2lyY2xle1xyXG5cdGhlaWdodDo5MHB4O1xyXG5cdHdpZHRoOjkwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czo1MCU7XHJcblx0bWFyZ2luOjAgYXV0bztcclxuXHRpe1xyXG5cdFx0bGluZS1oZWlnaHQ6OTBweDtcclxuXHRcdHN2Z3tcclxuXHRcdFx0ZmlsbDojZmZmO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxufVxyXG5cclxuLnNlY3Rpb24taW5mb3tcclxuXHQucGFuZWwtY29udGFpbmVye1xyXG5cdFx0bWluLWhlaWdodDogMzMwcHg7XHJcblx0XHRwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG5cdFx0Jjpob3ZlciAucGFuZWx7XHJcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQucGFuZWx7XHJcblx0XHRjb2xvcjojZmZmO1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XHJcblx0XHR0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG5cdFx0LnBhbmVsLWZyb250e1xyXG5cdFx0XHRib3JkZXItdG9wOiA1cHggc29saWQ7XHJcblx0XHRcdHBhZGRpbmctdG9wOiAyNXB4O1xyXG5cdFx0XHR6LWluZGV4OiAxO1xyXG5cdFx0XHQmOjphZnRlcntcclxuXHRcdFx0XHRjb250ZW50OicnO1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0XHRcdGhlaWdodDoxMDAlO1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6cmdiYSgwLDAsMCwuNSk7XHJcblx0XHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdFx0ei1pbmRleDogLTE7XHJcblx0XHRcdH1cclxuXHRcdFx0Ji5yZWR7XHJcblx0XHRcdFx0YmFja2dyb3VuZDp1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy8xLmpwZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XHJcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAkcmVkO1xyXG5cdFx0XHRcdC5jaXJjbGUtYmd7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiRyZWQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQmLmJsdWV7XHJcblx0XHRcdFx0YmFja2dyb3VuZDp1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy8yLmpwZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XHJcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAkYmx1ZTtcclxuXHRcdFx0XHQuY2lyY2xlLWJne1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjokYmx1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdCYuZ3JlZW57XHJcblx0XHRcdFx0YmFja2dyb3VuZDp1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy8zLmpwZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XHJcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAkZ3JlZW47XHJcblx0XHRcdFx0LmNpcmNsZS1iZ3tcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6JGdyZWVuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC5wYW5lbC1iYWNre1xyXG5cdFx0XHRwYWRkaW5nLXRvcDogMjVweDtcclxuXHRcdFx0Ji5yZWR7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjokcmVkO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQmLmJsdWV7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjokYmx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0Ji5ncmVlbntcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiRncmVlbjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFxyXG5cdFx0LnBhbmVsLWZyb250LCAucGFuZWwtYmFja3tcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHQtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHRcdFx0YmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdFx0fVxyXG5cdFx0LnBhbmVsLWJhY2tcclxuXHRcdHtcclxuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XHJcblx0XHRcdHB7XHJcblx0XHRcdFx0cGFkZGluZzoxMHB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRoNXtcclxuXHRcdFx0bWFyZ2luOjIwcHggMDtcclxuXHRcdH1cclxuXHRcdHB7XHJcblx0XHRcdG1hcmdpbjowO1xyXG5cdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbiRza3libHVlOiM4OGNlZGI7XHJcbiR5ZWxsb3c6I2YxYmI1NztcclxuJG9yYW5nZTojZTk3ZjYxO1xyXG4kbGltZWdyZWVuOiM3OGMyOWE7XHJcbiRibHVlOiM4OGNlZGI7XHJcbiRwdXJwbGU6Izc4N2ZjMjtcclxuXHJcbi5zZWN0aW9uLXNldmljZXN7XHJcblx0YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIwNCwgMjA0LCAyMDQsIDAuMik7XHJcblx0LnBhbmVse1xyXG5cdFx0YmFja2dyb3VuZDojZmZmO1xyXG5cdFx0Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDIyNCwgMjI0LCAyMjQsIDEpO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czo1cHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cdFx0aDV7XHJcblx0XHRcdGNvbG9yOiM4OGNlZGI7XHJcblx0XHR9XHJcblx0XHRwe1xyXG5cdFx0XHRwYWRkaW5nOjAgMTBweDtcclxuXHRcdH1cclxuXHRcdC5pY29uLWNpcmNsZXtcclxuXHRcdFx0bWFyZ2luOiAxNXB4IGF1dG87XHJcblx0XHRcdHN2Z3tcclxuXHRcdFx0XHRoZWlnaHQ6OTBweDtcclxuXHRcdFx0XHR3aWR0aDo5MHB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdCYuc2t5Ymx1ZXtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiRza3libHVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdCYubGltZWdyZWVue1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6JGxpbWVncmVlbjtcclxuXHRcdFx0fVxyXG5cdFx0XHQmLnllbGxvd3tcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiR5ZWxsb3c7XHJcblx0XHRcdH1cclxuXHRcdFx0Ji5vcmFuZ2V7XHJcblx0XHRcdFx0YmFja2dyb3VuZDokb3JhbmdlO1xyXG5cdFx0XHR9XHJcblx0XHRcdCYuYmx1ZXtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiRibHVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdCYucHVycGxle1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6JHB1cnBsZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuXHJcbjo6bmctZGVlcCAudGVzdGltb25pYWxze1xyXG5cdGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvdGVzdGltb25pYWxzLmpwZykgbm8tcmVwZWF0IGJvdHRvbSBjZW50ZXIgIzQyNzdhODtcclxuXHRoMXtcclxuXHRcdGNvbG9yOiNmZmY7XHJcblx0XHRtYXJnaW4tYm90dG9tOjIwcHg7XHJcblx0fVxyXG5cdHB7XHJcblx0XHRmb250LXNpemU6MThweDtcclxuXHRcdGZvbnQtd2VpZ2h0OjcwMDtcclxuXHRcdGNvbG9yOiNmZmY7XHJcblx0fVxyXG5cdC5jYXJvdXNlbHtcclxuXHRcdG1hcmdpbi10b3A6MDtcclxuXHRcdHotaW5kZXg6MTtcclxuXHR9XHJcblx0LmNhcm91c2VsLWlubmVye1xyXG5cdFx0aGVpZ2h0OjI4MnB4O1xyXG5cdH1cclxuXHQuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaXtcclxuXHRcdGhlaWdodDoxMHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czoxMHB4O1xyXG5cdFx0Ym9yZGVyOjFweCBzb2xpZCAjZmZmO1xyXG5cdFx0YmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuXHRcdCYuYWN0aXZle1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiNmZmY7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuLm1haW4tYmFubmVye1xyXG5cdC5jYXJvdXNlbHtcclxuXHRcdG1hcmdpbi10b3A6LTYwcHg7XHJcblx0XHR6LWluZGV4OjE7XHJcblx0fVxyXG5cdC5jb250YWluZXJ7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cdC5jYXJvdXNlbC1jYXB0aW9uIHtcclxuXHRcdHJpZ2h0OiBhdXRvO1xyXG5cdFx0Ym90dG9tOmF1dG87XHJcblx0XHR0b3A6IDIwMHB4O1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHotaW5kZXg6IDEwO1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdFx0d2lkdGg6IDYwMHB4O1xyXG5cdFx0aDM6Zmlyc3QtY2hpbGR7XHJcblx0XHRcdGNvbG9yOiAjRkZDMTAwO1xyXG5cdFx0fVxyXG5cdFx0LmJ0bntcclxuXHRcdFx0Ym9yZGVyOjJweCBzb2xpZCAjZmZmO1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBcdFx0bWFyZ2luLXRvcDogNTBweDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuLnNlY3Rpb24tcHJvamVjdHMge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cdC5wcm9qZWN0LWdyaWR7XHJcblx0XHRsaXtcclxuXHRcdFx0d2lkdGg6MjUlO1xyXG5cdFx0XHRmbG9hdDpsZWZ0O1xyXG5cdFx0XHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcblx0XHRcdGZpZ3VyZXtcclxuXHRcdFx0XHRtYXJnaW46MCAwIDJweCAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdCY6Zmlyc3QtY2hpbGR7XHJcblx0XHRcdFx0d2lkdGg6NTAlO1xyXG5cdFx0XHRcdGZpZ3VyZXtcclxuXHRcdFx0XHRcdG1hcmdpbjowO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQmOm50aC1jaGlsZCg0KSwgJjpudGgtY2hpbGQoNSl7XHJcblx0XHRcdFx0ZmlndXJle1xyXG5cdFx0XHRcdFx0bWFyZ2luOjA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRidXR0b257XHJcblx0XHRcdGJhY2tncm91bmQ6bm9uZTtcclxuXHRcdFx0Ym9yZGVyOjJweCBzb2xpZCAjZmZmO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQucDF7XHJcblx0XHRwYWRkaW5nOjFweDtcclxuXHR9XHJcblx0ZmlndXJlIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGZsb2F0OiBsZWZ0O1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdHdpZHRoOiBjYWxjKDEwMCUgLSAycHgpO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRcdG1hcmdpbjowO1xyXG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0aW1nIHtcclxuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG5cdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG5cdFx0XHQtd2Via2l0LXRyYW5zaXRpb246IC41cyBlYXNlLWluLW91dDtcclxuXHRcdFx0dHJhbnNpdGlvbjogLjVzIGVhc2UtaW4tb3V0O1xyXG5cdFx0XHRtYXgtd2lkdGg6IDEwMCU7XHJcblx0XHRcdGhlaWdodDogYXV0bztcclxuXHRcdH1cclxuXHRcdC5zaG93LW1vcmUtb3ZlcmxheSB7XHJcblx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYigwLCAwLCAwKSAwJSwgcmdiYSgwLCAwLCAwLCAwLjIpIDIzJSwgcmdiYSgwLCAwLCAwLCAwKSA0MCUsIHJnYmEoMCwgMCwgMCwgMCkgNjglLCByZ2JhKDAsIDAsIDAsIDApIDgxJSwgcmdiYSgwLCAwLCAwLCAwKSA5MiUsIHJnYmEoMCwgMCwgMCwgMCkgMTAwJSkgcmVwZWF0IHNjcm9sbCAwIDA7XHJcblx0XHRcdGJvdHRvbTogMDtcclxuXHRcdFx0bGVmdDogMDtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRyaWdodDogMDtcclxuXHRcdFx0dG9wOiAwO1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcblx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMHM7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGZpZ2NhcHRpb24ge1xyXG5cdFx0XHR3ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdFx0XHRiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0Ym90dG9tOiAwcHg7XHJcblx0XHRcdGxlZnQ6IDIwcHg7XHJcblx0XHRcdHJpZ2h0OiAyMHB4O1xyXG5cdFx0XHRtYXgtaGVpZ2h0OiA0MHB4O1xyXG5cdFx0XHQtd2Via2l0LXRyYW5zaXRpb246IC41cyBlYXNlLWluLW91dDtcclxuXHRcdFx0dHJhbnNpdGlvbjogLjVzIGVhc2UtaW4tb3V0O1xyXG5cdFx0XHR6LWluZGV4OiAyO1xyXG5cdFx0fVxyXG5cdFx0LnNob3dfbW9yZS10aXRsZSB7XHJcblx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRmb250LXNpemU6IDIxcHg7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG5cdFx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdFx0fVxyXG5cdFx0LnNob3dfbW9yZS1kZXNjIHtcclxuXHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0bGluZS1oZWlnaHQ6IDE4cHg7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiAzMDA7XHJcblx0XHR9XHJcblx0XHQmOjphZnRlcntcclxuXHRcdFx0Y29udGVudDonJztcclxuXHRcdFx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG5cdFx0XHRib3R0b206IDA7XHJcblx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGhlaWdodDoxMDAlO1xyXG5cdFx0XHR6LWluZGV4OiAxO1xyXG5cdFx0fVxyXG5cdFx0Jjpob3ZlcntcclxuXHRcdFx0aW1ne1xyXG5cdFx0XHRcdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG5cdFx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQuc2hvdy1tb3JlLW92ZXJsYXlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYigwLCAwLCAwKSAwJSwgcmdiYSgwLCAwLCAwLCAwLjIpIDEwMCUpIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG5cdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZpZ2NhcHRpb25cclxuXHRcdFx0e1xyXG5cdFx0XHRcdGhlaWdodDogYXV0bztcclxuXHRcdFx0XHRtYXgtaGVpZ2h0OiAyMDBweDtcclxuXHRcdFx0XHRib3R0b206IDUwcHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcclxuXHQubWFpbi1iYW5uZXJ7XHJcblx0XHRkaXNwbGF5Om5vbmU7XHJcblx0fVxyXG5cdC5zZWN0aW9uLXByb2plY3Rze1xyXG5cdC5wcm9qZWN0LWdyaWR7XHJcblx0XHRsaXtcclxuXHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdFx0ZmlndXJle1xyXG5cdFx0XHRcdG1hcmdpbjowIDAgMTVweDtcclxuXHRcdFx0fVxyXG5cdFx0XHQmOmZpcnN0LWNoaWxke1xyXG5cdFx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHRcdGZpZ3VyZXtcclxuXHRcdFx0XHRtYXJnaW46MCAwIDE1cHg7XHJcblx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG59IiwiLnBhbmVsLWhlYWRpbmcsIC5wYW5lbC1ib2R5IHtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jbGllbnRzLCAuc2VjdGlvbi1wcm9qZWN0cywgLnNlY3Rpb24tc2V2aWNlcywgLnRlc3RpbW9uaWFscywgLnNlY3Rpb24taW5mbywgLmNvbnRhY3QtaW5mbyB7XG4gIHBhZGRpbmc6IDcwcHggMDtcbn1cblxuLmNsaWVudHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xufVxuXG4uY2xlYXItZmxvYXQge1xuICBjbGVhcjogYm90aDtcbiAgZmxvYXQ6IG5vbmU7XG59XG5cbi5jb250YWN0LWluZm8gLnNvY2lhbC1uZXQgdWwge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4uY29udGFjdC1pbmZvIC5zb2NpYWwtbmV0IHVsIGxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmNvbnRhY3QtaW5mbyAuc29jaWFsLW5ldCB1bCBsaSBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGNvbG9yOiAjNTU1NTU1O1xufVxuXG4ucGljc3VtLWltZy13cmFwcGVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaWNvbi1jaXJjbGUge1xuICBoZWlnaHQ6IDkwcHg7XG4gIHdpZHRoOiA5MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmljb24tY2lyY2xlIGkge1xuICBsaW5lLWhlaWdodDogOTBweDtcbn1cbi5pY29uLWNpcmNsZSBpIHN2ZyB7XG4gIGZpbGw6ICNmZmY7XG59XG5cbi5zZWN0aW9uLWluZm8gLnBhbmVsLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDMzMHB4O1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwtY29udGFpbmVyOmhvdmVyIC5wYW5lbCB7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwge1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1mcm9udCB7XG4gIGJvcmRlci10b3A6IDVweCBzb2xpZDtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG4gIHotaW5kZXg6IDE7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtZnJvbnQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogLTE7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtZnJvbnQucmVkIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvMS5qcGcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xuICBib3JkZXItY29sb3I6ICNiOTY0NmU7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtZnJvbnQucmVkIC5jaXJjbGUtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjk2NDZlO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWZyb250LmJsdWUge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy8yLmpwZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XG4gIGJvcmRlci1jb2xvcjogIzI3NmNhYTtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1mcm9udC5ibHVlIC5jaXJjbGUtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc2Y2FhO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWZyb250LmdyZWVuIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvMy5qcGcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xuICBib3JkZXItY29sb3I6ICM0YmJiNTc7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtZnJvbnQuZ3JlZW4gLmNpcmNsZS1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YmJiNTc7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtYmFjayB7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWJhY2sucmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5NjQ2ZTtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1iYWNrLmJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc2Y2FhO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWJhY2suZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJiYjU3O1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWZyb250LCAuc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1iYWNrIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtYmFjayBwIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIGg1IHtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCBwIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc2VjdGlvbi1zZXZpY2VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjIpO1xufVxuLnNlY3Rpb24tc2V2aWNlcyAucGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uc2VjdGlvbi1zZXZpY2VzIC5wYW5lbCBoNSB7XG4gIGNvbG9yOiAjODhjZWRiO1xufVxuLnNlY3Rpb24tc2V2aWNlcyAucGFuZWwgcCB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5zZWN0aW9uLXNldmljZXMgLnBhbmVsIC5pY29uLWNpcmNsZSB7XG4gIG1hcmdpbjogMTVweCBhdXRvO1xufVxuLnNlY3Rpb24tc2V2aWNlcyAucGFuZWwgLmljb24tY2lyY2xlIHN2ZyB7XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDkwcHg7XG59XG4uc2VjdGlvbi1zZXZpY2VzIC5wYW5lbCAuaWNvbi1jaXJjbGUuc2t5Ymx1ZSB7XG4gIGJhY2tncm91bmQ6ICM4OGNlZGI7XG59XG4uc2VjdGlvbi1zZXZpY2VzIC5wYW5lbCAuaWNvbi1jaXJjbGUubGltZWdyZWVuIHtcbiAgYmFja2dyb3VuZDogIzc4YzI5YTtcbn1cbi5zZWN0aW9uLXNldmljZXMgLnBhbmVsIC5pY29uLWNpcmNsZS55ZWxsb3cge1xuICBiYWNrZ3JvdW5kOiAjZjFiYjU3O1xufVxuLnNlY3Rpb24tc2V2aWNlcyAucGFuZWwgLmljb24tY2lyY2xlLm9yYW5nZSB7XG4gIGJhY2tncm91bmQ6ICNlOTdmNjE7XG59XG4uc2VjdGlvbi1zZXZpY2VzIC5wYW5lbCAuaWNvbi1jaXJjbGUuYmx1ZSB7XG4gIGJhY2tncm91bmQ6ICM4OGNlZGI7XG59XG4uc2VjdGlvbi1zZXZpY2VzIC5wYW5lbCAuaWNvbi1jaXJjbGUucHVycGxlIHtcbiAgYmFja2dyb3VuZDogIzc4N2ZjMjtcbn1cblxuOjpuZy1kZWVwIC50ZXN0aW1vbmlhbHMge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy90ZXN0aW1vbmlhbHMuanBnKSBuby1yZXBlYXQgYm90dG9tIGNlbnRlciAjNDI3N2E4O1xufVxuOjpuZy1kZWVwIC50ZXN0aW1vbmlhbHMgaDEge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbjo6bmctZGVlcCAudGVzdGltb25pYWxzIHAge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuOjpuZy1kZWVwIC50ZXN0aW1vbmlhbHMgLmNhcm91c2VsIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cbjo6bmctZGVlcCAudGVzdGltb25pYWxzIC5jYXJvdXNlbC1pbm5lciB7XG4gIGhlaWdodDogMjgycHg7XG59XG46Om5nLWRlZXAgLnRlc3RpbW9uaWFscyAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG46Om5nLWRlZXAgLnRlc3RpbW9uaWFscyAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4ubWFpbi1iYW5uZXIgLmNhcm91c2VsIHtcbiAgbWFyZ2luLXRvcDogLTYwcHg7XG4gIHotaW5kZXg6IDE7XG59XG4ubWFpbi1iYW5uZXIgLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluLWJhbm5lciAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gIHJpZ2h0OiBhdXRvO1xuICBib3R0b206IGF1dG87XG4gIHRvcDogMjAwcHg7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDYwMHB4O1xufVxuLm1haW4tYmFubmVyIC5jYXJvdXNlbC1jYXB0aW9uIGgzOmZpcnN0LWNoaWxkIHtcbiAgY29sb3I6ICNGRkMxMDA7XG59XG4ubWFpbi1iYW5uZXIgLmNhcm91c2VsLWNhcHRpb24gLmJ0biB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnNlY3Rpb24tcHJvamVjdHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbn1cbi5zZWN0aW9uLXByb2plY3RzIC5wcm9qZWN0LWdyaWQgbGkge1xuICB3aWR0aDogMjUlO1xuICBmbG9hdDogbGVmdDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLnNlY3Rpb24tcHJvamVjdHMgLnByb2plY3QtZ3JpZCBsaSBmaWd1cmUge1xuICBtYXJnaW46IDAgMCAycHggMDtcbn1cbi5zZWN0aW9uLXByb2plY3RzIC5wcm9qZWN0LWdyaWQgbGk6Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogNTAlO1xufVxuLnNlY3Rpb24tcHJvamVjdHMgLnByb2plY3QtZ3JpZCBsaTpmaXJzdC1jaGlsZCBmaWd1cmUge1xuICBtYXJnaW46IDA7XG59XG4uc2VjdGlvbi1wcm9qZWN0cyAucHJvamVjdC1ncmlkIGxpOm50aC1jaGlsZCg0KSBmaWd1cmUsIC5zZWN0aW9uLXByb2plY3RzIC5wcm9qZWN0LWdyaWQgbGk6bnRoLWNoaWxkKDUpIGZpZ3VyZSB7XG4gIG1hcmdpbjogMDtcbn1cbi5zZWN0aW9uLXByb2plY3RzIC5wcm9qZWN0LWdyaWQgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbn1cbi5zZWN0aW9uLXByb2plY3RzIC5wMSB7XG4gIHBhZGRpbmc6IDFweDtcbn1cbi5zZWN0aW9uLXByb2plY3RzIGZpZ3VyZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAycHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zZWN0aW9uLXByb2plY3RzIGZpZ3VyZSBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG4uc2VjdGlvbi1wcm9qZWN0cyBmaWd1cmUgLnNob3ctbW9yZS1vdmVybGF5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBsaW5lYXItZ3JhZGllbnQoMGRlZywgYmxhY2sgMCUsIHJnYmEoMCwgMCwgMCwgMC4yKSAyMyUsIHJnYmEoMCwgMCwgMCwgMCkgNDAlLCByZ2JhKDAsIDAsIDAsIDApIDY4JSwgcmdiYSgwLCAwLCAwLCAwKSA4MSUsIHJnYmEoMCwgMCwgMCwgMCkgOTIlLCByZ2JhKDAsIDAsIDAsIDApIDEwMCUpIHJlcGVhdCBzY3JvbGwgMCAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDBzO1xufVxuLnNlY3Rpb24tcHJvamVjdHMgZmlndXJlIGZpZ2NhcHRpb24ge1xuICB3ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBtYXgtaGVpZ2h0OiA0MHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHotaW5kZXg6IDI7XG59XG4uc2VjdGlvbi1wcm9qZWN0cyBmaWd1cmUgLnNob3dfbW9yZS10aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIxcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnNlY3Rpb24tcHJvamVjdHMgZmlndXJlIC5zaG93X21vcmUtZGVzYyB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLnNlY3Rpb24tcHJvamVjdHMgZmlndXJlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG59XG4uc2VjdGlvbi1wcm9qZWN0cyBmaWd1cmU6aG92ZXIgaW1nIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbi5zZWN0aW9uLXByb2plY3RzIGZpZ3VyZTpob3ZlciAuc2hvdy1tb3JlLW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIGxpbmVhci1ncmFkaWVudCgwZGVnLCBibGFjayAwJSwgcmdiYSgwLCAwLCAwLCAwLjIpIDEwMCUpIHJlcGVhdCBzY3JvbGwgMCAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbn1cbi5zZWN0aW9uLXByb2plY3RzIGZpZ3VyZTpob3ZlciBmaWdjYXB0aW9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgYm90dG9tOiA1MHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLm1haW4tYmFubmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnNlY3Rpb24tcHJvamVjdHMgLnByb2plY3QtZ3JpZCBsaSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnNlY3Rpb24tcHJvamVjdHMgLnByb2plY3QtZ3JpZCBsaSBmaWd1cmUge1xuICAgIG1hcmdpbjogMCAwIDE1cHg7XG4gIH1cbiAgLnNlY3Rpb24tcHJvamVjdHMgLnByb2plY3QtZ3JpZCBsaTpmaXJzdC1jaGlsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnNlY3Rpb24tcHJvamVjdHMgLnByb2plY3QtZ3JpZCBsaTpmaXJzdC1jaGlsZCBmaWd1cmUge1xuICAgIG1hcmdpbjogMCAwIDE1cHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    let HomeComponent = class HomeComponent {
      constructor() {
        this.slideConfig = {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 1500,
          arrows: false,
          responsive: [{
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          }, {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }]
        }; // images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

        this.banner = [{
          img: 'assets/images/banner',
          title: 'WE SPECIALIZE IN IMPROVING',
          title_2: 'OPERATIONAL PERFORMANCE AND IT DELIVERY.',
          description: 'We do this by improving the way our clients use people, processes and technologies. Here is the place to envision, discover and fulfil your technology needs.'
        }, {
          img: 'assets/images/banner',
          title: 'WE SPECIALIZE IN IMPROVING',
          title_2: 'OPERATIONAL PERFORMANCE AND IT DELIVERY.',
          description: 'We do this by improving the way our clients use people.'
        }, {
          img: 'assets/images/banner',
          title: 'WE SPECIALIZE IN IMPROVING',
          title_2: 'OPERATIONAL PERFORMANCE AND IT DELIVERY.',
          description: 'We do this by improving processes and technologies. Here is the place to envision, discover and fulfil your technology needs.'
        }];
        this.client = [{
          img: 'assets/images/client'
        }, {
          img: 'assets/images/client'
        }, {
          img: 'assets/images/client'
        }, {
          img: 'assets/images/client'
        }, {
          img: 'assets/images/client'
        }];
        this.testimonials = [{
          clientView: ' We ensure excellence in service through understanding of our clients business and their unique requirements. Due to our close relationships and constant interactions with clients, we have developed solid understanding and insight in our focus industries that include:',
          clientName: 'xyz Company'
        }, {
          clientView: ' We ensure excellence in service through understanding of our clients business and their unique requirements. Due to our close relationships and constant interactions with clients, we have developed solid understanding and insight in our focus industries that include:',
          clientName: 'ABC Company'
        }, {
          clientView: ' We ensure excellence in service through understanding of our clients business and their unique requirements. Due to our close relationships and constant interactions with clients, we have developed solid understanding and insight in our focus industries that include:',
          clientName: '123 Company'
        }, {
          clientView: ' We ensure excellence in service through understanding of our clients business and their unique requirements. Due to our close relationships and constant interactions with clients, we have developed solid understanding and insight in our focus industries that include:',
          clientName: 'QWERTy'
        }];
        this.projects = [{
          gridClass: 'col-lg-6 col-md-6 col-sm-6 col-xs-12',
          imgPath: 'assets/images/project',
          title: 'DATANEST',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
        }, {
          gridClass: 'col-lg-3 col-md-3 col-sm-6 col-xs-12',
          imgPath: 'assets/images/project',
          title: 'DATANEST',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
        }, {
          gridClass: 'col-lg-3 col-md-3 col-sm-6 col-xs-12',
          imgPath: 'assets/images/project',
          title: 'DATANEST',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
        }, {
          gridClass: 'col-lg-3 col-md-3 col-sm-6 col-xs-12',
          imgPath: 'assets/images/project',
          title: 'DATANEST',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
        }, {
          gridClass: 'col-lg-3 col-md-3 col-sm-6 col-xs-12',
          imgPath: 'assets/images/project',
          title: 'DATANEST',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
        }];
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.sevices = [{
          title: 'IT, telecom and software',
          color: 'skyblue',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
          icon: '#icon_telecom'
        }, {
          title: 'ITES - BPO & KPO',
          color: 'yellow ',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
          icon: '#icon_customerService'
        }, {
          title: 'Engineering & Manufacturing',
          color: 'orange',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
          icon: '#icon_engineeringMgf'
        }, {
          title: 'Consumer goods and retail',
          color: 'limegreen',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
          icon: '#icon_retail'
        }, {
          title: 'Financial services and insurance',
          color: 'purple',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
          icon: '#icon_finervice'
        }, {
          title: 'Health care & Pharmaceuticals',
          color: 'blue',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
          icon: '#icon_healthCare'
        }];
        this.solution = [{
          title: 'Data Management',
          color: 'red',
          list: [{
            name: 'Cleanse Dataset'
          }, {
            name: 'Data Mapping & Conversion'
          }, {
            name: 'Data Migration & Consolidation'
          }, {
            name: 'Spend Analysis'
          }],
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio',
          icon: '#icon_mgmt'
        }, {
          title: 'Software Engineering',
          color: 'blue',
          list: [{
            name: 'Product Engineering'
          }, {
            name: 'Application Development'
          }, {
            name: 'UX/UI Development'
          }, {
            name: 'Software Testing & QA'
          }],
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio',
          icon: '#icon_softEngg'
        }, {
          title: 'IT Staffing & Training',
          color: 'green',
          list: [{
            name: 'Staffing Services'
          }, {
            name: 'Industries'
          }, {
            name: 'Courses'
          }, {
            name: 'Program Calendar'
          }],
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio',
          icon: '#icon_training'
        }];
      }

      togglePaused() {
        if (this.paused) {
          this.carousel.cycle();
        } else {
          this.carousel.pause();
        }

        this.paused = !this.paused;
      }

      onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused && (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlideEventSource"].ARROW_RIGHT)) {
          this.togglePaused();
        }

        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlideEventSource"].INDICATOR) {
          this.togglePaused();
        }
      }

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('carousel', {
      static: true
    })], HomeComponent.prototype, "carousel", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/industries/industries.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/industries/industries.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppIndustriesIndustriesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".section-industy-info .panel {\n  text-align: center;\n}\n.section-industy-info .panel .panel-heading {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  border: 2px solid #214f7a;\n  margin: 0 auto 15px;\n}\n.section-industy-info .panel p {\n  color: #214f7a;\n  font-weight: bold;\n  font-size: 16px;\n}\n.section-industy-info .col {\n  margin-bottom: 20px;\n}\n.section-industy-info .col:last-child {\n  margin: 0 auto;\n}\nul li a {\n  padding: 15px;\n  margin-bottom: 15px;\n  background: #e5e5e5;\n  color: #333333;\n  display: block;\n}\nul li a.active {\n  background: #214f7a;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kdXN0cmllcy9GOlxcZ2l0aHViXFx3b3JrL3NyY1xcYXBwXFxpbmR1c3RyaWVzXFxpbmR1c3RyaWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbmR1c3RyaWVzL2luZHVzdHJpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtBQ0FSO0FEQ1E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0NaO0FERU87RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQVg7QURHSTtFQUNJLG1CQUFBO0FDRFI7QURFTztFQUNJLGNBQUE7QUNBWDtBRFNRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ05aO0FET1k7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUNMaEIiLCJmaWxlIjoic3JjL2FwcC9pbmR1c3RyaWVzL2luZHVzdHJpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1pbmR1c3R5LWluZm97XHJcbiAgICAucGFuZWx7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC5wYW5lbC1oZWFkaW5ne1xyXG4gICAgICAgICAgICB3aWR0aDoxNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjE1MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgICAgICAgICAgYm9yZGVyOjJweCBzb2xpZCAjMjE0ZjdhO1xyXG4gICAgICAgICAgICBtYXJnaW46MCBhdXRvIDE1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgIHB7XHJcbiAgICAgICAgICAgY29sb3I6ICMyMTRmN2E7XHJcbiAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29se1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MjBweDtcclxuICAgICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgICAgfSBcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG51bHtcclxuICAgIGxpe1xyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MTVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiNlNWU1ZTU7XHJcbiAgICAgICAgICAgIGNvbG9yOiMzMzMzMzM7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICYuYWN0aXZle1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDojMjE0ZjdhO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLnNlY3Rpb24taW5kdXN0eS1pbmZvIC5wYW5lbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zZWN0aW9uLWluZHVzdHktaW5mbyAucGFuZWwgLnBhbmVsLWhlYWRpbmcge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgIzIxNGY3YTtcbiAgbWFyZ2luOiAwIGF1dG8gMTVweDtcbn1cbi5zZWN0aW9uLWluZHVzdHktaW5mbyAucGFuZWwgcCB7XG4gIGNvbG9yOiAjMjE0ZjdhO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLnNlY3Rpb24taW5kdXN0eS1pbmZvIC5jb2wge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnNlY3Rpb24taW5kdXN0eS1pbmZvIC5jb2w6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG51bCBsaSBhIHtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxudWwgbGkgYS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjMjE0ZjdhO1xuICBjb2xvcjogI2ZmZjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/industries/industries.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/industries/industries.component.ts ***!
    \****************************************************/

  /*! exports provided: IndustriesComponent */

  /***/
  function srcAppIndustriesIndustriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndustriesComponent", function () {
      return IndustriesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let IndustriesComponent = class IndustriesComponent {
      constructor() {
        this.industryInfo = [{
          title: 'IT, Telecom & Software'
        }, {
          title: 'Telecom'
        }, {
          title: 'ITES - BPO & KPO'
        }, {
          title: 'Engineering & Manufacturing'
        }, {
          title: 'Consumer Goods & Retail'
        }, {
          title: 'Banking Financial Services & Insurance'
        }, {
          title: 'Health Care & Pharmaceuticals'
        }];
      }

      ngOnInit() {}

    };
    IndustriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-industries',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./industries.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/industries/industries.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./industries.component.scss */
      "./src/app/industries/industries.component.scss")).default]
    })], IndustriesComponent);
    /***/
  },

  /***/
  "./src/app/inner-page-header/inner-page-header.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/inner-page-header/inner-page-header.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInnerPageHeaderInnerPageHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lubmVyLXBhZ2UtaGVhZGVyL2lubmVyLXBhZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/inner-page-header/inner-page-header.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/inner-page-header/inner-page-header.component.ts ***!
    \******************************************************************/

  /*! exports provided: InnerPageHeaderComponent */

  /***/
  function srcAppInnerPageHeaderInnerPageHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InnerPageHeaderComponent", function () {
      return InnerPageHeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let InnerPageHeaderComponent = class InnerPageHeaderComponent {
      constructor() {}

      ngOnInit() {}

    };
    InnerPageHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inner-page-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./inner-page-header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/inner-page-header/inner-page-header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./inner-page-header.component.scss */
      "./src/app/inner-page-header/inner-page-header.component.scss")).default]
    })], InnerPageHeaderComponent);
    /***/
  },

  /***/
  "./src/app/managedservice/managedservice.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/managedservice/managedservice.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppManagedserviceManagedserviceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".section-manage-service h5 {\n  font-weight: bold;\n  text-align: center;\n  margin: 70px 0;\n}\n.section-manage-service ul {\n  margin-bottom: 15px;\n}\n.section-manage-service ul li {\n  padding: 10px 0;\n  list-style: inside disc;\n  font-size: 16px;\n}\n.section-manage-service img {\n  max-width: 100%;\n}\n.section-manage-service .row:last-child {\n  margin-top: 70px;\n}\n.section-manage-service .panel-container {\n  min-height: 330px;\n  perspective: 1000px;\n  margin-bottom: 25px;\n}\n.section-manage-service .panel-container:hover .panel {\n  transform: rotateX(180deg);\n}\n.section-manage-service .panel {\n  color: #fff;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 1s;\n  transform-style: preserve-3d;\n}\n.section-manage-service .panel .panel-front {\n  border-top: 5px solid;\n  padding-top: 25px;\n  z-index: 1;\n}\n.section-manage-service .panel .panel-front::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #e5f0fa;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n.section-manage-service .panel .panel-front, .section-manage-service .panel .panel-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.section-manage-service .panel .panel-back {\n  padding-top: 25px;\n  transform: rotateX(180deg);\n  background: #214f7a;\n}\n.section-manage-service .panel .panel-back p {\n  padding: 10px;\n  color: #fff;\n  text-align: left;\n}\n.section-manage-service .panel .panel-back h5 {\n  margin: 0;\n  padding: 20px 10px;\n  text-align: left;\n}\n.section-manage-service .panel p {\n  margin: 0;\n  text-align: right;\n  color: #333333;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlZHNlcnZpY2UvRjpcXGdpdGh1Ylxcd29yay9zcmNcXGFwcFxcbWFuYWdlZHNlcnZpY2VcXG1hbmFnZWRzZXJ2aWNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYW5hZ2Vkc2VydmljZS9tYW5hZ2Vkc2VydmljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQVI7QURFSTtFQUNJLG1CQUFBO0FDQVI7QURDUTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNDWjtBREVJO0VBQ0ksZUFBQTtBQ0FSO0FER1E7RUFDSSxnQkFBQTtBQ0RaO0FESUk7RUFDRixpQkFBQTtFQUNNLG1CQUFBO0VBQ0EsbUJBQUE7QUNGUjtBREdFO0VBQ0MsMEJBQUE7QUNESDtBREtJO0VBQ0YsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUNIRjtBRElFO0VBQ0MscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNGSDtBREdHO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQ0RKO0FES0U7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtBQ0hIO0FES0U7RUFFVSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUNKWjtBREtHO0VBQ2EsYUFBQTtFQUNELFdBQUE7RUFDQSxnQkFBQTtBQ0hmO0FES1k7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0haO0FET0U7RUFDQyxTQUFBO0VBQ1MsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ0xaIiwiZmlsZSI6InNyYy9hcHAvbWFuYWdlZHNlcnZpY2UvbWFuYWdlZHNlcnZpY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1tYW5hZ2Utc2VydmljZXtcclxuICAgIGg1e1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjo3MHB4IDA7XHJcbiAgICB9XHJcbiAgICB1bHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjE1cHg7XHJcbiAgICAgICAgbGl7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogaW5zaWRlIGRpc2M7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbWd7XHJcbiAgICAgICAgbWF4LXdpZHRoOjEwMCU7XHJcbiAgICB9XHJcbiAgICAucm93e1xyXG4gICAgICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDo3MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wYW5lbC1jb250YWluZXJ7XHJcblx0XHRtaW4taGVpZ2h0OiAzMzBweDtcclxuICAgICAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcblx0XHQmOmhvdmVyIC5wYW5lbHtcclxuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuICAgIC5wYW5lbHtcclxuXHRcdGNvbG9yOiNmZmY7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcclxuXHRcdHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcblx0XHQucGFuZWwtZnJvbnR7XHJcblx0XHRcdGJvcmRlci10b3A6IDVweCBzb2xpZDtcclxuXHRcdFx0cGFkZGluZy10b3A6IDI1cHg7XHJcblx0XHRcdHotaW5kZXg6IDE7XHJcblx0XHRcdCY6OmFmdGVye1xyXG5cdFx0XHRcdGNvbnRlbnQ6Jyc7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHRcdFx0aGVpZ2h0OjEwMCU7XHJcblx0XHRcdFx0YmFja2dyb3VuZDojZTVmMGZhOyBcclxuXHRcdFx0XHR0b3A6IDA7XHJcblx0XHRcdFx0bGVmdDogMDtcclxuXHRcdFx0XHR6LWluZGV4OiAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblx0XHQucGFuZWwtZnJvbnQsIC5wYW5lbC1iYWNre1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdFx0XHRiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0XHR9XHJcblx0XHQucGFuZWwtYmFja1xyXG5cdFx0e1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IzIxNGY3YTtcclxuXHRcdFx0cHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGg1e1xyXG4gICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgcGFkZGluZzoyMHB4IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuXHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cHtcclxuXHRcdFx0bWFyZ2luOjA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBjb2xvcjojMzMzMzMzO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjEwcHg7XHJcblx0XHR9XHJcbiAgICB9XHJcbn0iLCIuc2VjdGlvbi1tYW5hZ2Utc2VydmljZSBoNSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNzBweCAwO1xufVxuLnNlY3Rpb24tbWFuYWdlLXNlcnZpY2UgdWwge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLnNlY3Rpb24tbWFuYWdlLXNlcnZpY2UgdWwgbGkge1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGxpc3Qtc3R5bGU6IGluc2lkZSBkaXNjO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uc2VjdGlvbi1tYW5hZ2Utc2VydmljZSBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4uc2VjdGlvbi1tYW5hZ2Utc2VydmljZSAucm93Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiA3MHB4O1xufVxuLnNlY3Rpb24tbWFuYWdlLXNlcnZpY2UgLnBhbmVsLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDMzMHB4O1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLnNlY3Rpb24tbWFuYWdlLXNlcnZpY2UgLnBhbmVsLWNvbnRhaW5lcjpob3ZlciAucGFuZWwge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcbn1cbi5zZWN0aW9uLW1hbmFnZS1zZXJ2aWNlIC5wYW5lbCB7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuLnNlY3Rpb24tbWFuYWdlLXNlcnZpY2UgLnBhbmVsIC5wYW5lbC1mcm9udCB7XG4gIGJvcmRlci10b3A6IDVweCBzb2xpZDtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG4gIHotaW5kZXg6IDE7XG59XG4uc2VjdGlvbi1tYW5hZ2Utc2VydmljZSAucGFuZWwgLnBhbmVsLWZyb250OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2U1ZjBmYTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAtMTtcbn1cbi5zZWN0aW9uLW1hbmFnZS1zZXJ2aWNlIC5wYW5lbCAucGFuZWwtZnJvbnQsIC5zZWN0aW9uLW1hbmFnZS1zZXJ2aWNlIC5wYW5lbCAucGFuZWwtYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5zZWN0aW9uLW1hbmFnZS1zZXJ2aWNlIC5wYW5lbCAucGFuZWwtYmFjayB7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcbiAgYmFja2dyb3VuZDogIzIxNGY3YTtcbn1cbi5zZWN0aW9uLW1hbmFnZS1zZXJ2aWNlIC5wYW5lbCAucGFuZWwtYmFjayBwIHtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uc2VjdGlvbi1tYW5hZ2Utc2VydmljZSAucGFuZWwgLnBhbmVsLWJhY2sgaDUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5zZWN0aW9uLW1hbmFnZS1zZXJ2aWNlIC5wYW5lbCBwIHtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/managedservice/managedservice.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/managedservice/managedservice.component.ts ***!
    \************************************************************/

  /*! exports provided: ManagedserviceComponent */

  /***/
  function srcAppManagedserviceManagedserviceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManagedserviceComponent", function () {
      return ManagedserviceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ManagedserviceComponent = class ManagedserviceComponent {
      constructor() {
        this.solution = [{
          title: 'Mixed Multimedia Content',
          description: 'Control Your Portfolio Size, Dimension & Size of Your Margin',
          description_2: 'Tired with only single type content? with Jkreativ you have ability to mix your content such as youtube, vimeo, sound cloud also self hosted HTML 5 video.'
        }, {
          title: 'Mixed Multimedia Content',
          description: 'Control Your Portfolio Size, Dimension & Size of Your Margin',
          description_2: 'Tired with only single type content? with Jkreativ you have ability to mix your content such as youtube, vimeo, sound cloud also self hosted HTML 5 video.'
        }, {
          title: 'Mixed Multimedia Content',
          description: 'Portfolio Item Block Size',
          description_2: 'Tired with only single type content? with Jkreativ you have ability to mix your content such as youtube, vimeo, sound cloud also self hosted HTML 5 video.'
        }, {
          title: 'Mixed Multimedia Content',
          description: 'Ajax Expand, Extended Portfolio, or Side Content',
          description_2: 'Tired with only single type content? with Jkreativ you have ability to mix your content such as youtube, vimeo, sound cloud also self hosted HTML 5 video.'
        }];
      }

      ngOnInit() {}

    };
    ManagedserviceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-managedservice',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./managedservice.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/managedservice/managedservice.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./managedservice.component.scss */
      "./src/app/managedservice/managedservice.component.scss")).default]
    })], ManagedserviceComponent);
    /***/
  },

  /***/
  "./src/app/news/news.component.scss":
  /*!******************************************!*\
    !*** ./src/app/news/news.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewsNewsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".section-news {\n  margin: 70px auto;\n}\n.section-news .nav-tabs {\n  width: 100%;\n  border-bottom: 1px solid #214f7a;\n}\n.section-news .nav-tabs .nav-link {\n  border: none;\n  color: #214f7a;\n}\n.section-news .nav-tabs .nav-link.active {\n  border-bottom: 2px solid #214f7a;\n  font-weight: bold;\n}\n.section-news li.grid-li {\n  width: 25%;\n  float: left;\n  list-style-type: none;\n}\n.section-news li.grid-li p {\n  margin: 0;\n}\n.section-news li.grid-li .panel {\n  margin: 0 0 10px 10px;\n  border: 1px solid #ccc;\n}\n.section-news li.grid-li .panel .panel-body {\n  padding: 15px;\n}\n.section-news li.grid-li img {\n  max-width: 100%;\n}\n.section-news li.grid-li:first-child {\n  width: 50%;\n}\n.section-news li.grid-li:first-child .panel {\n  background: #e5f0fa;\n  border: none;\n  margin-left: 0;\n}\n.section-news li.grid-li:first-child .panel p {\n  font-size: 18px;\n}\n.section-news li.grid-li:first-child .panel p:first-child {\n  margin-top: 10px;\n  margin-bottom: 15px;\n}\n.news-video {\n  padding: 70px 0;\n  background: #e5f0fa;\n}\n.news-video .video {\n  margin-bottom: 70px;\n}\n.news-video .video iframe {\n  margin: 0 auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9GOlxcZ2l0aHViXFx3b3JrL3NyY1xcYXBwXFxuZXdzXFxuZXdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uZXdzL25ld3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKO0FEQUk7RUFDSSxXQUFBO0VBQ0EsZ0NBQUE7QUNFUjtBRERRO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUNHWjtBREZZO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtBQ0loQjtBREVJO0VBQ0ksVUFBQTtFQUNDLFdBQUE7RUFDQSxxQkFBQTtBQ0FUO0FEQ1M7RUFDSSxTQUFBO0FDQ2I7QURDUztFQUNHLHFCQUFBO0VBQ0Msc0JBQUE7QUNDYjtBREFhO0VBQ0ksYUFBQTtBQ0VqQjtBREVTO0VBQ0ksZUFBQTtBQ0FiO0FERVM7RUFDSSxVQUFBO0FDQWI7QURDYTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDakI7QURBaUI7RUFDSSxlQUFBO0FDRXJCO0FERHFCO0VBQ0csZ0JBQUE7RUFDQSxtQkFBQTtBQ0d4QjtBRE9BO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDSko7QURLSTtFQUNJLG1CQUFBO0FDSFI7QURJTztFQUNDLGNBQUE7RUFDQSxjQUFBO0FDRlIiLCJmaWxlIjoic3JjL2FwcC9uZXdzL25ld3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1uZXdze1xyXG4gICAgbWFyZ2luOjcwcHggYXV0bztcclxuICAgIC5uYXYtdGFic3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjMjE0ZjdhO1xyXG4gICAgICAgIC5uYXYtbGlua3tcclxuICAgICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiMyMTRmN2E7XHJcbiAgICAgICAgICAgICYuYWN0aXZle1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgIzIxNGY3YTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsaVxyXG4gICB7XHJcbiAgICAmLmdyaWQtbGl7XHJcbiAgICAgICAgd2lkdGg6MjUlO1xyXG4gICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAucGFuZWx7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHggMTBweDs7XHJcbiAgICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICAgICAucGFuZWwtYm9keXtcclxuICAgICAgICAgICAgICAgICBwYWRkaW5nOjE1cHg7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgbWF4LXdpZHRoOjEwMCU7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgIHdpZHRoOjUwJTtcclxuICAgICAgICAgICAgIC5wYW5lbHtcclxuICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTVmMGZhO1xyXG4gICAgICAgICAgICAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjA7XHJcbiAgICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gIFxyXG4gfVxyXG4gICB9XHJcbiAgIFxyXG59XHJcbi5uZXdzLXZpZGVve1xyXG4gICAgcGFkZGluZzo3MHB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiNlNWYwZmE7XHJcbiAgICAudmlkZW97XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTo3MHB4O1xyXG4gICAgICAgaWZyYW1le1xyXG4gICAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIi5zZWN0aW9uLW5ld3Mge1xuICBtYXJnaW46IDcwcHggYXV0bztcbn1cbi5zZWN0aW9uLW5ld3MgLm5hdi10YWJzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjE0ZjdhO1xufVxuLnNlY3Rpb24tbmV3cyAubmF2LXRhYnMgLm5hdi1saW5rIHtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzIxNGY3YTtcbn1cbi5zZWN0aW9uLW5ld3MgLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmUge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzIxNGY3YTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2VjdGlvbi1uZXdzIGxpLmdyaWQtbGkge1xuICB3aWR0aDogMjUlO1xuICBmbG9hdDogbGVmdDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLnNlY3Rpb24tbmV3cyBsaS5ncmlkLWxpIHAge1xuICBtYXJnaW46IDA7XG59XG4uc2VjdGlvbi1uZXdzIGxpLmdyaWQtbGkgLnBhbmVsIHtcbiAgbWFyZ2luOiAwIDAgMTBweCAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuLnNlY3Rpb24tbmV3cyBsaS5ncmlkLWxpIC5wYW5lbCAucGFuZWwtYm9keSB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4uc2VjdGlvbi1uZXdzIGxpLmdyaWQtbGkgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLnNlY3Rpb24tbmV3cyBsaS5ncmlkLWxpOmZpcnN0LWNoaWxkIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5zZWN0aW9uLW5ld3MgbGkuZ3JpZC1saTpmaXJzdC1jaGlsZCAucGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjZTVmMGZhO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuLnNlY3Rpb24tbmV3cyBsaS5ncmlkLWxpOmZpcnN0LWNoaWxkIC5wYW5lbCBwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnNlY3Rpb24tbmV3cyBsaS5ncmlkLWxpOmZpcnN0LWNoaWxkIC5wYW5lbCBwOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLm5ld3MtdmlkZW8ge1xuICBwYWRkaW5nOiA3MHB4IDA7XG4gIGJhY2tncm91bmQ6ICNlNWYwZmE7XG59XG4ubmV3cy12aWRlbyAudmlkZW8ge1xuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xufVxuLm5ld3MtdmlkZW8gLnZpZGVvIGlmcmFtZSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/news/news.component.ts":
  /*!****************************************!*\
    !*** ./src/app/news/news.component.ts ***!
    \****************************************/

  /*! exports provided: NewsComponent */

  /***/
  function srcAppNewsNewsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsComponent", function () {
      return NewsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let NewsComponent = class NewsComponent {
      constructor() {
        this.news = [{
          img: 'assets/images/news',
          desc_1: 'Arkedge Technologies has schedule to launch Survey ans Poll product on 05 January 2018.',
          desc_2: 'Arkedge Technologies has schedule to launch Survey ans Poll product on 05 January 2018... Please click on news and read the details of news section. '
        }, {
          img: 'assets/images/news',
          desc_1: 'Arkedge',
          desc_2: 'Technologies bags new Spend Analysis project...'
        }, {
          img: 'assets/images/news',
          desc_1: 'Arkedge',
          desc_2: 'Technologies bags new Spend Analysis project...'
        }, {
          img: 'assets/images/news',
          desc_1: 'Arkedge',
          desc_2: 'Technologies bags new Spend Analysis project...'
        }, {
          img: 'assets/images/news',
          desc_1: 'Arkedge',
          desc_2: 'Technologies bags new Spend Analysis project...'
        }];
      }

      ngOnInit() {}

    };
    NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-news',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./news.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./news.component.scss */
      "./src/app/news/news.component.scss")).default]
    })], NewsComponent);
    /***/
  },

  /***/
  "./src/app/ourproduct/ourproduct.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/ourproduct/ourproduct.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOurproductOurproductComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".section-product-detail, .section-product {\n  padding: 70px 0;\n}\n\n.section-product {\n  background: #e5f0fa;\n}\n\n.section-product-detail ul {\n  margin-bottom: 15px;\n}\n\n.section-product-detail ul li {\n  padding: 10px 0;\n  list-style: inside disc;\n  font-size: 16px;\n}\n\n.section-product-detail img {\n  max-width: 100%;\n}\n\n.slick-slide.slick-current + .slick-active {\n  transform: scale(2);\n  transition: all 0.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3VycHJvZHVjdC9GOlxcZ2l0aHViXFx3b3JrL3NyY1xcYXBwXFxvdXJwcm9kdWN0XFxvdXJwcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9vdXJwcm9kdWN0L291cnByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxtQkFBQTtBQ0VKOztBRENJO0VBQ0ksbUJBQUE7QUNFUjs7QUREUTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNHWjs7QURBSTtFQUNJLGVBQUE7QUNFUjs7QURHSTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL291cnByb2R1Y3Qvb3VycHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLXByb2R1Y3QtZGV0YWlsLCAuc2VjdGlvbi1wcm9kdWN0e1xyXG4gICAgcGFkZGluZzo3MHB4IDA7XHJcbn1cclxuLnNlY3Rpb24tcHJvZHVjdHtcclxuICAgIGJhY2tncm91bmQ6I2U1ZjBmYTtcclxufVxyXG4uc2VjdGlvbi1wcm9kdWN0LWRldGFpbHtcclxuICAgIHVse1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MTVweDtcclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBpbnNpZGUgZGlzYztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zbGljay1zbGlkZXtcclxuICAgICYuc2xpY2stY3VycmVudCArIC5zbGljay1hY3RpdmV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcclxuICAgICAgICB0cmFuc2l0aW9uOmFsbCAwLjVzO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCIuc2VjdGlvbi1wcm9kdWN0LWRldGFpbCwgLnNlY3Rpb24tcHJvZHVjdCB7XG4gIHBhZGRpbmc6IDcwcHggMDtcbn1cblxuLnNlY3Rpb24tcHJvZHVjdCB7XG4gIGJhY2tncm91bmQ6ICNlNWYwZmE7XG59XG5cbi5zZWN0aW9uLXByb2R1Y3QtZGV0YWlsIHVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5zZWN0aW9uLXByb2R1Y3QtZGV0YWlsIHVsIGxpIHtcbiAgcGFkZGluZzogMTBweCAwO1xuICBsaXN0LXN0eWxlOiBpbnNpZGUgZGlzYztcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLnNlY3Rpb24tcHJvZHVjdC1kZXRhaWwgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uc2xpY2stc2xpZGUuc2xpY2stY3VycmVudCArIC5zbGljay1hY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/ourproduct/ourproduct.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/ourproduct/ourproduct.component.ts ***!
    \****************************************************/

  /*! exports provided: OurproductComponent */

  /***/
  function srcAppOurproductOurproductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OurproductComponent", function () {
      return OurproductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let OurproductComponent = class OurproductComponent {
      constructor() {
        this.slideConfig = {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 1500,
          arrows: true,
          responsive: [{
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          }, {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }]
        };
        this.products = [{
          img: 'assets/images/client'
        }, {
          img: 'assets/images/client'
        }, {
          img: 'assets/images/client'
        }, {
          img: 'assets/images/client'
        }, {
          img: 'assets/images/client'
        }];
      }

      ngOnInit() {}

    };
    OurproductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ourproduct',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ourproduct.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ourproduct/ourproduct.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ourproduct.component.scss */
      "./src/app/ourproduct/ourproduct.component.scss")).default]
    })], OurproductComponent);
    /***/
  },

  /***/
  "./src/app/projectengineering/projectengineering.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/projectengineering/projectengineering.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectengineeringProjectengineeringComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".section-project-engineering ul li {\n  padding: 0 15px 15px;\n}\n\n.methodologies {\n  position: relative;\n}\n\n.methodologies .icon-circle {\n  width: 100px;\n  height: 100px;\n  border: 1px solid #fff;\n  border-radius: 50%;\n  margin: 0 auto;\n}\n\n.methodologies .icon-circle i {\n  line-height: 90px;\n}\n\n.methodologies ul {\n  position: relative;\n  width: 100%;\n}\n\n.methodologies ul li {\n  float: left;\n  width: 20%;\n  padding: 50px 0;\n}\n\n.methodologies ul li ul {\n  display: none;\n  position: absolute;\n  top: 180px;\n  left: 0;\n  text-align: center;\n  width: 100%;\n}\n\n.methodologies ul li ul li {\n  float: none;\n  width: 100%;\n}\n\n.methodologies ul li h6 {\n  padding-bottom: 15px;\n}\n\n.methodologies ul li:hover .icon-circle {\n  border-color: #ffc100;\n}\n\n.methodologies ul li:hover h6 {\n  color: #ffc100;\n  position: relative;\n  padding-bottom: 0;\n}\n\n.methodologies ul li:hover h6::after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid #ffc100;\n  margin: 0 auto;\n  display: block;\n}\n\n.methodologies ul li:hover ul {\n  display: block;\n}\n\n.methodologies img {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0px;\n  top: 0px;\n  z-index: -1;\n}\n\n.methodologies h6, .methodologies li, .methodologies h1 {\n  color: #fff;\n  text-align: center;\n}\n\nsection.engeering-grap img {\n  max-width: 100%;\n}\n\n.our-services {\n  background: #e5f0fa;\n  border-radius: 15px;\n  overflow: hidden;\n}\n\n.our-services .triangle {\n  background: #ffc100;\n  position: relative;\n  min-height: 400px;\n  display: flex;\n}\n\n.our-services .triangle .v-center {\n  align-self: center;\n  text-align: center;\n  margin: 0 auto;\n}\n\n.our-services .triangle .v-center .logo-circle {\n  width: 120px;\n  height: 120px;\n  background: #0860aa;\n  border-radius: 50%;\n  margin: 0 auto;\n}\n\n.our-services .triangle .v-center h5 {\n  font-size: bold;\n  margin-top: 15px;\n}\n\n.our-services .triangle::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-top: 200px solid transparent;\n  border-bottom: 200px solid transparent;\n  border-left: 50px solid #ffc100;\n  right: -50px;\n  top: 0;\n}\n\n.our-services .v-flex {\n  display: flex;\n}\n\n.our-services ul {\n  padding: 0 0 0 100px;\n  align-self: center;\n}\n\n.our-services ul li {\n  list-style-type: disc;\n  font-size: 18px;\n  padding: 15px;\n}\n\n@media (max-width: 576px) {\n  .methodologies ul {\n    position: static;\n  }\n  .methodologies ul li {\n    width: 100%;\n    position: relative;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdGVuZ2luZWVyaW5nL0Y6XFxnaXRodWJcXHdvcmsvc3JjXFxhcHBcXHByb2plY3RlbmdpbmVlcmluZ1xccHJvamVjdGVuZ2luZWVyaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9qZWN0ZW5naW5lZXJpbmcvcHJvamVjdGVuZ2luZWVyaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0ksb0JBQUE7QUNEWjs7QURLQTtFQUNJLGtCQUFBO0FDRko7O0FER0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDRFI7O0FERVE7RUFDSSxpQkFBQTtBQ0FaOztBREdHO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0FDREo7O0FERUk7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNBUjs7QURDUTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ1o7O0FEQVk7RUFDRyxXQUFBO0VBQ0EsV0FBQTtBQ0VmOztBRENRO0VBQ0ksb0JBQUE7QUNDWjs7QURFWTtFQUNFLHFCQUFBO0FDQWQ7O0FERVk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0FoQjs7QURDZ0I7RUFDSSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0NwQjs7QURHWTtFQUNJLGNBQUE7QUNEaEI7O0FETUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDSlI7O0FETUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNKUjs7QURTUTtFQUNJLGVBQUE7QUNOWjs7QURXQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ1JKOztBRFNJO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ1BSOztBRFFRO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNOWjs7QURPWTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNMaEI7O0FET1k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNMaEI7O0FEUVE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1DQUFBO0VBQ0Esc0NBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0FDTlo7O0FEU0k7RUFDSSxhQUFBO0FDUFI7O0FEU0k7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0FDUFI7O0FEUVE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDTlo7O0FEV0E7RUFFUTtJQUNJLGdCQUFBO0VDVFY7RURVUztJQUNJLFdBQUE7SUFDQSxrQkFBQTtFQ1JiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0ZW5naW5lZXJpbmcvcHJvamVjdGVuZ2luZWVyaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24tcHJvamVjdC1lbmdpbmVlcmluZ3tcclxuICAgdWx7XHJcbiAgICAgICAgbGl7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MCAxNXB4IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5tZXRob2RvbG9naWVze1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLmljb24tY2lyY2xle1xyXG4gICAgICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgICAgIGhlaWdodDoxMDBweDtcclxuICAgICAgICBib3JkZXI6MXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICAgICAgbWFyZ2luOjAgYXV0bztcclxuICAgICAgICBpe1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogOTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgIHVse1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGxpe1xyXG4gICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgd2lkdGg6MjAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDUwcHggMDtcclxuICAgICAgICB1bHtcclxuICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDoxODBweDtcclxuICAgICAgICAgICAgbGVmdDowO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICBmbG9hdDpub25lO1xyXG4gICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg2e1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbToxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAuaWNvbi1jaXJjbGVcclxuICAgICAgICAgICAgeyBib3JkZXItY29sb3I6I2ZmYzEwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoNntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiNmZmMxMDA7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjA7XHJcbiAgICAgICAgICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwOyBcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7IFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNmZmMxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHVse1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgfVxyXG4gICAgaW1ne1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgIGxlZnQ6MHB4O1xyXG4gICAgICAgIHRvcDowcHg7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICB9XHJcbiAgICBoNiwgbGksIGgxe1xyXG4gICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuc2VjdGlvbntcclxuICAgJi5lbmdlZXJpbmctZ3JhcHtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5vdXItc2VydmljZXN7XHJcbiAgICBiYWNrZ3JvdW5kOiNlNWYwZmE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC50cmlhbmdsZXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiNmZmMxMDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6NDAwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAudi1jZW50ZXJ7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgLmxvZ28tY2lyY2xle1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwODYwYWE7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoNXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTpib2xkO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6OmFmdGVye1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwOyBcclxuICAgICAgICAgICAgaGVpZ2h0OiAwOyBcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMjAwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDIwMHB4IHNvbGlkIHRyYW5zcGFyZW50OyBcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6NTBweCBzb2xpZCAjZmZjMTAwO1xyXG4gICAgICAgICAgICByaWdodDotNTBweDtcclxuICAgICAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnYtZmxleHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gICAgdWx7XHJcbiAgICAgICAgcGFkZGluZzowIDAgMCAxMDBweDtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgbGl7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcclxuICAgICAgICAgICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MTVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCl7XHJcbiAgICAubWV0aG9kb2xvZ2llc3tcclxuICAgICAgICB1bHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi5zZWN0aW9uLXByb2plY3QtZW5naW5lZXJpbmcgdWwgbGkge1xuICBwYWRkaW5nOiAwIDE1cHggMTVweDtcbn1cblxuLm1ldGhvZG9sb2dpZXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWV0aG9kb2xvZ2llcyAuaWNvbi1jaXJjbGUge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ubWV0aG9kb2xvZ2llcyAuaWNvbi1jaXJjbGUgaSB7XG4gIGxpbmUtaGVpZ2h0OiA5MHB4O1xufVxuLm1ldGhvZG9sb2dpZXMgdWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1ldGhvZG9sb2dpZXMgdWwgbGkge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDIwJTtcbiAgcGFkZGluZzogNTBweCAwO1xufVxuLm1ldGhvZG9sb2dpZXMgdWwgbGkgdWwge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTgwcHg7XG4gIGxlZnQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWV0aG9kb2xvZ2llcyB1bCBsaSB1bCBsaSB7XG4gIGZsb2F0OiBub25lO1xuICB3aWR0aDogMTAwJTtcbn1cbi5tZXRob2RvbG9naWVzIHVsIGxpIGg2IHtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4ubWV0aG9kb2xvZ2llcyB1bCBsaTpob3ZlciAuaWNvbi1jaXJjbGUge1xuICBib3JkZXItY29sb3I6ICNmZmMxMDA7XG59XG4ubWV0aG9kb2xvZ2llcyB1bCBsaTpob3ZlciBoNiB7XG4gIGNvbG9yOiAjZmZjMTAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuLm1ldGhvZG9sb2dpZXMgdWwgbGk6aG92ZXIgaDY6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCAjZmZjMTAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWV0aG9kb2xvZ2llcyB1bCBsaTpob3ZlciB1bCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1ldGhvZG9sb2dpZXMgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICB6LWluZGV4OiAtMTtcbn1cbi5tZXRob2RvbG9naWVzIGg2LCAubWV0aG9kb2xvZ2llcyBsaSwgLm1ldGhvZG9sb2dpZXMgaDEge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5zZWN0aW9uLmVuZ2VlcmluZy1ncmFwIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLm91ci1zZXJ2aWNlcyB7XG4gIGJhY2tncm91bmQ6ICNlNWYwZmE7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ub3VyLXNlcnZpY2VzIC50cmlhbmdsZSB7XG4gIGJhY2tncm91bmQ6ICNmZmMxMDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ub3VyLXNlcnZpY2VzIC50cmlhbmdsZSAudi1jZW50ZXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ub3VyLXNlcnZpY2VzIC50cmlhbmdsZSAudi1jZW50ZXIgLmxvZ28tY2lyY2xlIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDg2MGFhO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLm91ci1zZXJ2aWNlcyAudHJpYW5nbGUgLnYtY2VudGVyIGg1IHtcbiAgZm9udC1zaXplOiBib2xkO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLm91ci1zZXJ2aWNlcyAudHJpYW5nbGU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItdG9wOiAyMDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMjAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiA1MHB4IHNvbGlkICNmZmMxMDA7XG4gIHJpZ2h0OiAtNTBweDtcbiAgdG9wOiAwO1xufVxuLm91ci1zZXJ2aWNlcyAudi1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5vdXItc2VydmljZXMgdWwge1xuICBwYWRkaW5nOiAwIDAgMCAxMDBweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLm91ci1zZXJ2aWNlcyB1bCBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLm1ldGhvZG9sb2dpZXMgdWwge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gIH1cbiAgLm1ldGhvZG9sb2dpZXMgdWwgbGkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/projectengineering/projectengineering.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/projectengineering/projectengineering.component.ts ***!
    \********************************************************************/

  /*! exports provided: ProjectengineeringComponent */

  /***/
  function srcAppProjectengineeringProjectengineeringComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectengineeringComponent", function () {
      return ProjectengineeringComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ProjectengineeringComponent = class ProjectengineeringComponent {
      constructor() {
        this.solution = [{
          title: 'Idea',
          info: 'Our idealogy text will come, Lorem ipsum dolor sit ametadipiscing elit, sed do eiusmod tempor.',
          icon: '#icon_retail'
        }, {
          title: 'Concept',
          info: 'Concept text will come, Lorem ipsum dolor sit.',
          icon: '#icon_retail'
        }, {
          title: 'Design',
          info: 'Design text will come, Lorem ipsum dolor sit ametadipiscing elit, sed do eiusmod tempor.',
          icon: '#icon_retail'
        }, {
          title: 'Develop',
          info: 'Develop text will come, Lorem ipsum dolor.',
          icon: '#icon_retail'
        }, {
          title: 'Test',
          info: 'Test text will come, Lorem ipsum dolor sit ametadipiscing elit, sed do eiusmod tempor.',
          icon: '#icon_retail'
        }];
      }

      ngOnInit() {}

    };
    ProjectengineeringComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projectengineering',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projectengineering.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/projectengineering/projectengineering.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projectengineering.component.scss */
      "./src/app/projectengineering/projectengineering.component.scss")).default]
    })], ProjectengineeringComponent);
    /***/
  },

  /***/
  "./src/app/technology/technology.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/technology/technology.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTechnologyTechnologyComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ul li a {\n  padding: 15px;\n  margin-bottom: 15px;\n  background: #e5e5e5;\n  color: #333333;\n  display: block;\n}\nul li a.active {\n  background: #214f7a;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVjaG5vbG9neS9GOlxcZ2l0aHViXFx3b3JrL3NyY1xcYXBwXFx0ZWNobm9sb2d5XFx0ZWNobm9sb2d5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90ZWNobm9sb2d5L3RlY2hub2xvZ3kuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDRFo7QURFWTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQ0FoQiIsImZpbGUiOiJzcmMvYXBwL3RlY2hub2xvZ3kvdGVjaG5vbG9neS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVse1xyXG4gICAgbGl7XHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgcGFkZGluZzoxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjE1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6I2U1ZTVlNTtcclxuICAgICAgICAgICAgY29sb3I6IzMzMzMzMztcclxuICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgJi5hY3RpdmV7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiMyMTRmN2E7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJ1bCBsaSBhIHtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxudWwgbGkgYS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjMjE0ZjdhO1xuICBjb2xvcjogI2ZmZjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/technology/technology.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/technology/technology.component.ts ***!
    \****************************************************/

  /*! exports provided: TechnologyComponent */

  /***/
  function srcAppTechnologyTechnologyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TechnologyComponent", function () {
      return TechnologyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let TechnologyComponent = class TechnologyComponent {
      constructor() {}

      ngOnInit() {}

    };
    TechnologyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-technology',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./technology.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/technology/technology.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./technology.component.scss */
      "./src/app/technology/technology.component.scss")).default]
    })], TechnologyComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\github\work\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map