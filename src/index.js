const { base64 } = require("./string/index.js");
const {
    defaultArray,
    list: { filterReduce, foldl, foldr, take, tail, head },
    median,
    randomArray,
    randomMatrix,
    resetArray,
    reverseSortedArray,
    rotateLeft,
    rotateRight,
    sortedArray,
    zeroNumberArray,
    zeroStringArray,
} = require("./array/index.js");
const { number } = require("./heap/index.js");
const { fs } = require("./node/index.js");

const BooleanT = require("./primitives/boolean");
const Default = require("./primitives/default");
const FalseT = require("./primitives/false");
const StringT = require("./primitives/string");
const TrueT = require("./primitives/true");

const { canvas } = require("./canvas");
const Conversions = require("./conversions");

module.exports = {
    base64,
    canvas,
    Conversions,
    fs,
    heap: {
        number,
    },
    defaultArray,
    list: { filterReduce, foldl, foldr, take, tail, head },
    median,
    randomArray,
    randomMatrix,
    resetArray,
    reverseSortedArray,
    rotateLeft,
    rotateRight,
    sortedArray,
    zeroNumberArray,
    zeroStringArray,
    primitives: {
        BooleanT,
        Default,
        FalseT,
        StringT,
        TrueT,
    },
};
