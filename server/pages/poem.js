(() => {
var exports = {};
exports.id = 322;
exports.ids = [322];
exports.modules = {

/***/ 2415:
/***/ ((module) => {

// Exports
module.exports = {
	"poemWrapper": "PoemDisplay_poemWrapper__Pv3hU",
	"poems": "PoemDisplay_poems__EbULe",
	"poemContainer": "PoemDisplay_poemContainer__u8SFw",
	"poemTitleWrapper": "PoemDisplay_poemTitleWrapper__BN_JU",
	"poemTitle": "PoemDisplay_poemTitle__wCsak",
	"poemContentWrapper": "PoemDisplay_poemContentWrapper__FhgxJ",
	"poemContent": "PoemDisplay_poemContent__7aCeu",
	"catalog": "PoemDisplay_catalog__r59vD",
	"catalogItem": "PoemDisplay_catalogItem__XYgRy",
	"text": "PoemDisplay_text__YQt3O",
	"active": "PoemDisplay_active__sau_i"
};


/***/ }),

/***/ 5845:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Home_main__OVLM4"
};


/***/ }),

/***/ 5486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_PoemDisplay)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/PoemDisplay.module.scss
var PoemDisplay_module = __webpack_require__(2415);
var PoemDisplay_module_default = /*#__PURE__*/__webpack_require__.n(PoemDisplay_module);
;// CONCATENATED MODULE: external "rc-virtual-list"
const external_rc_virtual_list_namespaceObject = require("rc-virtual-list");
var external_rc_virtual_list_default = /*#__PURE__*/__webpack_require__.n(external_rc_virtual_list_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: ./components/PoemDisplay.tsx





const PoemCard = ({ title , content , id  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (PoemDisplay_module_default()).poemContainer,
        id: id,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (PoemDisplay_module_default()).poemTitleWrapper,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (PoemDisplay_module_default()).poemTitle,
                    children: title
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (PoemDisplay_module_default()).poemContentWrapper,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (PoemDisplay_module_default()).poemContent,
                    dangerouslySetInnerHTML: {
                        __html: content
                    }
                })
            })
        ]
    });
};
const Item = ({ title , id , activeID , moveToTarget  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: external_clsx_default()({
            [(PoemDisplay_module_default()).catalogItem]: true,
            [(PoemDisplay_module_default()).active]: activeID === id
        }),
        id: id,
        onClick: ()=>moveToTarget(id),
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: (PoemDisplay_module_default()).text,
            children: title
        })
    });
};
const PoemDisplay = ({ catalogs , contents  })=>{
    const contentElements = (0,external_react_.useRef)([]);
    const ticking = (0,external_react_.useRef)(false);
    const [activeID, setActiveID] = (0,external_react_.useState)(catalogs[0].id);
    const [activeContent, setActiveContent] = (0,external_react_.useState)(false);
    const changeActiveID = (target)=>{
        setActiveID(target);
    };
    const moveToTarget = (targetID)=>{
        const elementTemp = document.getElementById(`${targetID}`);
        changeActiveID(targetID);
        const { offsetTop  } = elementTemp;
        window.scrollTo({
            top: offsetTop - 120
        });
    };
    (0,external_react_.useEffect)(()=>{
        contentElements.current = [];
        catalogs.forEach((item, index)=>{
            const id = item.id;
            const eleTemp = document.getElementById(`${id}`);
            let itemTopRange = {
                id,
                start: 0,
                end: 0
            };
            if (index === catalogs.length - 1) {
                itemTopRange = {
                    id,
                    start: eleTemp.offsetTop,
                    end: document.body.offsetHeight
                };
            } else {
                const nextItem = catalogs[index + 1];
                const nextEleTemp = document.getElementById(`${nextItem.id}`);
                itemTopRange = {
                    id,
                    start: eleTemp.offsetTop,
                    end: nextEleTemp.offsetTop
                };
            }
            contentElements.current.push(itemTopRange);
        });
    }, [
        catalogs
    ]);
    (0,external_react_.useEffect)(()=>{
        const body = document.getElementsByTagName("body")[0];
        body.onscroll = (e)=>{
            if (!ticking.current) {
                window.requestAnimationFrame(()=>{
                    const top = e.target.documentElement.scrollTop || 0;
                    const target = contentElements.current.find((item)=>item.start <= top + 160 && item.end > top + 160);
                    if (target) {
                        changeActiveID(target.id);
                    }
                    ticking.current = false;
                });
                ticking.current = true;
            }
        };
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (PoemDisplay_module_default()).poemWrapper,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: (PoemDisplay_module_default()).poems,
                children: contents.map((poem)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(PoemCard, {
                        id: poem.id,
                        title: poem.title,
                        content: poem.content
                    }, poem.id);
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: (PoemDisplay_module_default()).catalog,
                children: /*#__PURE__*/ jsx_runtime_.jsx((external_rc_virtual_list_default()), {
                    data: catalogs,
                    itemKey: "id",
                    itemHeight: 40,
                    height: 480,
                    style: {
                        width: "100%"
                    },
                    children: (item)=>/*#__PURE__*/ jsx_runtime_.jsx(Item, {
                            title: item.title,
                            id: item.id,
                            activeID: activeID,
                            moveToTarget: moveToTarget
                        })
                })
            })
        ]
    });
};
/* harmony default export */ const components_PoemDisplay = (PoemDisplay);


/***/ }),

/***/ 3645:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Poem),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_poemLib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9324);
/* harmony import */ var _components_PoemDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5486);
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5845);
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_poemLib__WEBPACK_IMPORTED_MODULE_1__]);
_lib_poemLib__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function Poem({ allPostsData  }) {
    //   console.log(allPostsData);
    const catalogs = allPostsData.map((item)=>{
        return {
            id: item.id,
            title: item.title
        };
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().main),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PoemDisplay__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            catalogs: catalogs,
            contents: allPostsData
        })
    });
}
async function getStaticProps() {
    //   const allPostsData = getPostsIDs();
    const allPostsData = await (0,_lib_poemLib__WEBPACK_IMPORTED_MODULE_1__/* .getAllPostDataContent */ .e)();
    return {
        props: {
            allPostsData
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8103:
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ 8076:
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1774:
/***/ ((module) => {

"use strict";
module.exports = import("remark");;

/***/ }),

/***/ 7740:
/***/ ((module) => {

"use strict";
module.exports = import("remark-html");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [324], () => (__webpack_exec__(3645)));
module.exports = __webpack_exports__;

})();