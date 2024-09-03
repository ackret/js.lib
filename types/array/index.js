"use strict";
const { filterReduce, foldl, foldr, take, tail, head } = require("./fns/list.js");
const { arrayToString, defaultArray, isArray, isArraylike, median, randomArray, randomMatrix, resetArray, reverseSortedArray, rotateLeft, rotateRight, sortedArray, zeroNumberArray, zeroStringArray, } = require("./fns/array.js");
module.exports = {
    arrayToString,
    defaultArray,
    isArray,
    isArraylike,
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
};
