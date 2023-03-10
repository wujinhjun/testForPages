"use strict";
exports.id = 324;
exports.ids = [324];
exports.modules = {

/***/ 9324:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AU": () => (/* binding */ getPostData),
/* harmony export */   "Ww": () => (/* binding */ getPostsIDs),
/* harmony export */   "e": () => (/* binding */ getAllPostDataContent)
/* harmony export */ });
/* unused harmony export getAllPostsData */
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1774);
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7740);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([remark__WEBPACK_IMPORTED_MODULE_3__, remark_html__WEBPACK_IMPORTED_MODULE_4__]);
([remark__WEBPACK_IMPORTED_MODULE_3__, remark_html__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const postsDir = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "poem");
function getAllPostsData() {
    const filenames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDir);
    const allPostsData = filenames.map((filename)=>{
        const id = filename.replace(/\.md$/, "");
        const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDir, filename);
        const fileContent = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf-8");
        const prefix = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContent).data;
        return {
            id,
            ...prefix
        };
    });
    return allPostsData.sort((a, b)=>a.date - b.date);
}
function getPostsIDs() {
    const filenames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDir);
    return filenames.map((filename)=>{
        return {
            params: {
                id: filename.replace(/\.md$/, "")
            }
        };
    });
}
async function getPostData(id) {
    const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDir, `${id}.md`);
    const fileContent = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf-8");
    const result = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContent);
    // await is lazy loading, so we must use a middle variable to transform
    const processContent = await (0,remark__WEBPACK_IMPORTED_MODULE_3__.remark)().use(remark_html__WEBPACK_IMPORTED_MODULE_4__["default"]).process(result.content);
    const contentHtml = processContent.toString();
    const content = contentHtml.replace(/<h3>(\S*)<\/h3>/, "").trim();
    return {
        id,
        content,
        title: result.data.title,
        date: result.data.date
    };
}
async function getAllPostDataContent() {
    const allPostsID = getAllPostsData();
    const allPostsData = [];
    for (const item of allPostsID){
        const { id  } = item;
        const result = await getPostData(id);
        allPostsData.push(result);
    }
    // console.log(allPostsData);
    const data = allPostsData.sort((a, b)=>{
        if (a.date < b.date) {
            return -1;
        } else if (a.date > b.date) {
            return 1;
        } else {
            return Number.parseInt(a.id.substring(5)) - Number.parseInt(b.id.substring(5));
        }
    });
    return data;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;