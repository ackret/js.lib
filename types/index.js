"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepEqual = exports.objectToString = exports.coinChange = exports.htmlTableToMarkdown = exports.htmlTableToMarkdownDOM = exports.markdownTableToJson = exports.verifyHeading3 = exports.verifyHeading2 = exports.verifyHeading1 = exports.sanitize = exports.headingToHTML = exports.state = exports.nothing = exports.maybe = exports.monad_list = exports.just = exports.future = exports.either = exports.list = exports.zeroStringArray = exports.zeroNumberArray = exports.sortedArray = exports.rotateRight = exports.rotateLeft = exports.reverseSortedArray = exports.resetArray = exports.randomMatrix = exports.randomArray = exports.median = exports.defaultArray = exports.arrayMayGet = exports.NumberMaxHeap = exports.NumberMinHeap = exports.readStream = exports.negint = exports.posint = exports.int = exports.LinuxDirectoryNode = exports.isMac = exports.isWindows = exports.isLinux = exports.osname = exports.platform = exports.hash512 = exports.hash256 = exports.DirInfo = exports.fs = exports.Conversions = exports.canvas = exports.base64 = void 0;
exports.generateCalendar = exports.validateJsonAndConvertToCsv = exports.detectCircularity = exports.jsonToCsv = exports.json = exports.filterInKeysFromObject = exports.filterOutKeysFromObject = exports.object = exports.None = exports.Some = exports.isArrayOf = exports.isPrimitive = exports.isUndefinedOrNull = exports.isEmptyOrNullString = exports.isEmptyString = exports.isString = exports.checks = exports.TrueT = exports.StringT = exports.FalseT = exports.Default = exports.BooleanT = exports.findKeys = exports.valueEqual = exports.keyEqual = void 0;
const index_1 = require("./node/index");
Object.defineProperty(exports, "fs", { enumerable: true, get: function () { return index_1.fs; } });
Object.defineProperty(exports, "DirInfo", { enumerable: true, get: function () { return index_1.DirInfo; } });
Object.defineProperty(exports, "hash256", { enumerable: true, get: function () { return index_1.hash256; } });
Object.defineProperty(exports, "hash512", { enumerable: true, get: function () { return index_1.hash512; } });
Object.defineProperty(exports, "platform", { enumerable: true, get: function () { return index_1.platform; } });
Object.defineProperty(exports, "osname", { enumerable: true, get: function () { return index_1.osname; } });
Object.defineProperty(exports, "isLinux", { enumerable: true, get: function () { return index_1.isLinux; } });
Object.defineProperty(exports, "isWindows", { enumerable: true, get: function () { return index_1.isWindows; } });
Object.defineProperty(exports, "isMac", { enumerable: true, get: function () { return index_1.isMac; } });
Object.defineProperty(exports, "readStream", { enumerable: true, get: function () { return index_1.readStream; } });
Object.defineProperty(exports, "LinuxDirectoryNode", { enumerable: true, get: function () { return index_1.LinuxDirectoryNode; } });
Object.defineProperty(exports, "int", { enumerable: true, get: function () { return index_1.int; } });
Object.defineProperty(exports, "posint", { enumerable: true, get: function () { return index_1.posint; } });
Object.defineProperty(exports, "negint", { enumerable: true, get: function () { return index_1.negint; } });
const Option_1 = require("./types/Option");
Object.defineProperty(exports, "Some", { enumerable: true, get: function () { return Option_1.Some; } });
Object.defineProperty(exports, "None", { enumerable: true, get: function () { return Option_1.None; } });
const type_1 = require("./checks/type");
Object.defineProperty(exports, "isString", { enumerable: true, get: function () { return type_1.isString; } });
Object.defineProperty(exports, "isEmptyOrNullString", { enumerable: true, get: function () { return type_1.isEmptyOrNullString; } });
Object.defineProperty(exports, "isUndefinedOrNull", { enumerable: true, get: function () { return type_1.isUndefinedOrNull; } });
Object.defineProperty(exports, "isPrimitive", { enumerable: true, get: function () { return type_1.isPrimitive; } });
Object.defineProperty(exports, "isArrayOf", { enumerable: true, get: function () { return type_1.isArrayOf; } });
Object.defineProperty(exports, "isEmptyString", { enumerable: true, get: function () { return type_1.isEmptyString; } });
const filter_1 = require("./object/filter");
Object.defineProperty(exports, "filterOutKeysFromObject", { enumerable: true, get: function () { return filter_1.filterOutKeysFromObject; } });
Object.defineProperty(exports, "filterInKeysFromObject", { enumerable: true, get: function () { return filter_1.filterInKeysFromObject; } });
const json_1 = require("./json");
Object.defineProperty(exports, "jsonToCsv", { enumerable: true, get: function () { return json_1.jsonToCsv; } });
Object.defineProperty(exports, "detectCircularity", { enumerable: true, get: function () { return json_1.detectCircularity; } });
Object.defineProperty(exports, "validateJsonAndConvertToCsv", { enumerable: true, get: function () { return json_1.validateJsonAndConvertToCsv; } });
const { base64 } = require("./string/index.js");
exports.base64 = base64;
const { defaultArray, list, median, randomArray, randomMatrix, resetArray, reverseSortedArray, rotateLeft, rotateRight, sortedArray, zeroNumberArray, zeroStringArray, arrayMayGet, } = require("./array/index.js");
exports.defaultArray = defaultArray;
exports.list = list;
exports.median = median;
exports.randomArray = randomArray;
exports.randomMatrix = randomMatrix;
exports.resetArray = resetArray;
exports.reverseSortedArray = reverseSortedArray;
exports.rotateLeft = rotateLeft;
exports.rotateRight = rotateRight;
exports.sortedArray = sortedArray;
exports.zeroNumberArray = zeroNumberArray;
exports.zeroStringArray = zeroStringArray;
exports.arrayMayGet = arrayMayGet;
const { NumberMinHeap, NumberMaxHeap } = require("./heap/index.js");
exports.NumberMinHeap = NumberMinHeap;
exports.NumberMaxHeap = NumberMaxHeap;
const BooleanT = require("./primitives/boolean");
exports.BooleanT = BooleanT;
const Default = require("./primitives/default");
exports.Default = Default;
const FalseT = require("./primitives/false");
exports.FalseT = FalseT;
const string_1 = __importDefault(require("./primitives/string"));
exports.StringT = string_1.default;
const markdown_1 = require("./markdown/markdown");
Object.defineProperty(exports, "htmlTableToMarkdown", { enumerable: true, get: function () { return markdown_1.htmlTableToMarkdown; } });
Object.defineProperty(exports, "htmlTableToMarkdownDOM", { enumerable: true, get: function () { return markdown_1.htmlTableToMarkdownDOM; } });
const calendar_1 = require("./misc/calendar");
Object.defineProperty(exports, "generateCalendar", { enumerable: true, get: function () { return calendar_1.generateCalendar; } });
const TrueT = require("./primitives/true");
exports.TrueT = TrueT;
const { canvas } = require("./canvas/canvas");
exports.canvas = canvas;
const Conversions = require("./conversions/conversions");
exports.Conversions = Conversions;
const { objectToString, deepEqual, keyEqual, valueEqual, findKeys } = require("./object/object");
exports.objectToString = objectToString;
exports.deepEqual = deepEqual;
exports.keyEqual = keyEqual;
exports.valueEqual = valueEqual;
exports.findKeys = findKeys;
const { nothing, just, maybe, either, list: monad_list, future, state } = require("./functional/monad");
exports.nothing = nothing;
exports.just = just;
exports.maybe = maybe;
exports.either = either;
exports.monad_list = monad_list;
exports.future = future;
exports.state = state;
const { headingToHTML, sanitize, verifyHeading1, verifyHeading2, verifyHeading3, markdownTableToJson, } = require("./markdown/markdown.js");
exports.headingToHTML = headingToHTML;
exports.sanitize = sanitize;
exports.verifyHeading1 = verifyHeading1;
exports.verifyHeading2 = verifyHeading2;
exports.verifyHeading3 = verifyHeading3;
exports.markdownTableToJson = markdownTableToJson;
const coinChange = require("./misc/coinChange");
exports.coinChange = coinChange;
const checks = { type: { isString: type_1.isString, isEmptyString: type_1.isEmptyString, isEmptyOrNullString: type_1.isEmptyOrNullString, isUndefinedOrNull: type_1.isUndefinedOrNull, isPrimitive: type_1.isPrimitive, isArrayOf: type_1.isArrayOf } };
exports.checks = checks;
const object = {
    filterOutKeysFromObject: filter_1.filterOutKeysFromObject,
    filterInKeysFromObject: filter_1.filterInKeysFromObject,
};
exports.object = object;
const json = { jsonToCsv: json_1.jsonToCsv, detectCircularity: json_1.detectCircularity, validateJsonAndConvertToCsv: json_1.validateJsonAndConvertToCsv };
exports.json = json;
