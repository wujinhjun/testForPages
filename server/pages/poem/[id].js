"use strict";
(() => {
var exports = {};
exports.id = 432;
exports.ids = [432];
exports.modules = {

/***/ 4233:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _lib_poemLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9324);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_poemLib__WEBPACK_IMPORTED_MODULE_0__]);
_lib_poemLib__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function Blog({ posts  }) {
    // will resolve posts to type Post[]
    console.log(posts);
}
const getStaticPaths = async ()=>{
    const paths = (0,_lib_poemLib__WEBPACK_IMPORTED_MODULE_0__/* .getPostsIDs */ .Ww)();
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = async ({ params  })=>{
    const postData = await (0,_lib_poemLib__WEBPACK_IMPORTED_MODULE_0__/* .getPostData */ .AU)(params.id);
    return {
        props: {
            posts: postData
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 1774:
/***/ ((module) => {

module.exports = import("remark");;

/***/ }),

/***/ 7740:
/***/ ((module) => {

module.exports = import("remark-html");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [324], () => (__webpack_exec__(4233)));
module.exports = __webpack_exports__;

})();