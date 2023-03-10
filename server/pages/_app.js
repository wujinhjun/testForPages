(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9074:
/***/ ((module) => {

// Exports
module.exports = {
	"headerWrapper": "Header_headerWrapper__p6qHq",
	"leftPanel": "Header_leftPanel__7Wpj8",
	"button_wrapper": "Header_button_wrapper__QAhPG",
	"text": "Header_text__y4bH4",
	"bottom_line": "Header_bottom_line__wzFJh",
	"active": "Header_active__Gp5CT",
	"bottomLine": "Header_bottomLine__kY0rH",
	"rightPanel": "Header_rightPanel__FGaAE",
	"icon": "Header_icon__TdeYV"
};


/***/ }),

/***/ 8882:
/***/ ((module) => {

// Exports
module.exports = {
	"header_section": "Layout_header_section__jeaZR",
	"back_triangle": "Layout_back_triangle__hgGbn",
	"back_triangle_2": "Layout_back_triangle_2__eN84K"
};


/***/ }),

/***/ 7791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.scss
var globals = __webpack_require__(6649);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.2.3_wiv434v7erz4aedd5whhdwmpv4/node_modules/next/link.js
var next_link = __webpack_require__(4555);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/Header.module.scss
var Header_module = __webpack_require__(9074);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./components/Header.tsx






const mapNavbar = [
    {
        text: "首页",
        link: "/"
    },
    {
        text: "程序",
        link: "/code"
    },
    {
        text: "文艺",
        link: "/poem"
    },
    {
        text: "设计",
        link: "/design"
    },
    {
        text: "关于我",
        link: "/me"
    }
];
function Header({ Poem  }) {
    const [curNav, setCurNav] = (0,external_react_.useState)("/");
    const location = (0,router_namespaceObject.useRouter)();
    const NavbarButton = ({ text , link  })=>{
        (0,external_react_.useEffect)(()=>{
            if (location.route === link) {
                setCurNav(link);
            }
        });
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: external_clsx_default()({
                [(Header_module_default()).button_wrapper]: true,
                [(Header_module_default()).active]: curNav === link
            }),
            onClick: ()=>{
                setCurNav(link);
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    className: (Header_module_default()).text,
                    href: link,
                    children: text
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Header_module_default()).bottom_line
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Header_module_default()).headerWrapper,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_clsx_default()({
                    [(Header_module_default()).leftPanel]: true,
                    [(Header_module_default()).bottomLine]: Poem
                }),
                children: mapNavbar.map((item, index)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(NavbarButton, {
                        text: item.text,
                        link: item.link
                    }, index);
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Header_module_default()).rightPanel,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Header_module_default()).icon,
                    children: "W"
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/Layout.module.scss
var Layout_module = __webpack_require__(8882);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
;// CONCATENATED MODULE: ./components/Layou.tsx





function Layout({ children , Poem  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "The webpage for wujinhjun to display"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: (Layout_module_default()).header_section,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                    Poem: Poem
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: external_clsx_default()({
                            [(Layout_module_default()).back_triangle]: !Poem,
                            [(Layout_module_default()).back_triangle_2]: Poem
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./pages/_app.tsx




function App({ Component , pageProps  }) {
    const location = (0,router_namespaceObject.useRouter)().pathname;
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        Poem: location === "/poem",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}


/***/ }),

/***/ 6649:
/***/ (() => {



/***/ }),

/***/ 8103:
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [555], () => (__webpack_exec__(7791)));
module.exports = __webpack_exports__;

})();