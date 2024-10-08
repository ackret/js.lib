"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zeroStringArray = exports.zeroNumberArray = exports.sortedArray = exports.rotateRight = exports.rotateLeft = exports.reverseSortedArray = exports.resetArray = exports.randomMatrix = exports.randomArray = exports.median = exports.list = exports.isArraylike = exports.isArray = exports.inplaceFilterOut = exports.inplaceFilterIn = exports.filterOutStream = exports.filterOut = exports.filterInStream = exports.filterIn = exports.defaultArray = exports.chunk = exports.arrayToString = void 0;
const { filterReduce, foldl, foldr, take, tail, head } = require("./fns/list.js");
const array_js_1 = require("./fns/array.js");
Object.defineProperty(exports, "arrayToString", { enumerable: true, get: function () { return array_js_1.arrayToString; } });
Object.defineProperty(exports, "defaultArray", { enumerable: true, get: function () { return array_js_1.defaultArray; } });
Object.defineProperty(exports, "isArray", { enumerable: true, get: function () { return array_js_1.isArray; } });
Object.defineProperty(exports, "isArraylike", { enumerable: true, get: function () { return array_js_1.isArraylike; } });
Object.defineProperty(exports, "median", { enumerable: true, get: function () { return array_js_1.median; } });
Object.defineProperty(exports, "randomArray", { enumerable: true, get: function () { return array_js_1.randomArray; } });
Object.defineProperty(exports, "randomMatrix", { enumerable: true, get: function () { return array_js_1.randomMatrix; } });
Object.defineProperty(exports, "resetArray", { enumerable: true, get: function () { return array_js_1.resetArray; } });
Object.defineProperty(exports, "reverseSortedArray", { enumerable: true, get: function () { return array_js_1.reverseSortedArray; } });
Object.defineProperty(exports, "rotateLeft", { enumerable: true, get: function () { return array_js_1.rotateLeft; } });
Object.defineProperty(exports, "rotateRight", { enumerable: true, get: function () { return array_js_1.rotateRight; } });
Object.defineProperty(exports, "sortedArray", { enumerable: true, get: function () { return array_js_1.sortedArray; } });
Object.defineProperty(exports, "zeroNumberArray", { enumerable: true, get: function () { return array_js_1.zeroNumberArray; } });
Object.defineProperty(exports, "zeroStringArray", { enumerable: true, get: function () { return array_js_1.zeroStringArray; } });
Object.defineProperty(exports, "filterOut", { enumerable: true, get: function () { return array_js_1.filterOut; } });
Object.defineProperty(exports, "filterIn", { enumerable: true, get: function () { return array_js_1.filterIn; } });
Object.defineProperty(exports, "inplaceFilterOut", { enumerable: true, get: function () { return array_js_1.inplaceFilterOut; } });
Object.defineProperty(exports, "inplaceFilterIn", { enumerable: true, get: function () { return array_js_1.inplaceFilterIn; } });
Object.defineProperty(exports, "chunk", { enumerable: true, get: function () { return array_js_1.chunk; } });
Object.defineProperty(exports, "filterInStream", { enumerable: true, get: function () { return array_js_1.filterInStream; } });
Object.defineProperty(exports, "filterOutStream", { enumerable: true, get: function () { return array_js_1.filterOutStream; } });
const list = { filterReduce, foldl, foldr, take, tail, head };
exports.list = list;
