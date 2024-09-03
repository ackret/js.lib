"use strict";
/**
 *
 * @param {Object} options - The options object.
 * @param {number} options.length - The length of the array.
 * @param {*} options.defaultValue - The default value of the array.
 * @returns {*[]}
 */
function defaultArray({ length, defaultValue } = { length: 10, defaultValue: 0 }) {
    return Array.from({ length }, (_) => defaultValue);
}
/**
 * Zeros a number array; mutates input
 * @param array {number[]}
 */
function zeroNumberArray(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = 0;
    }
}
/**
 * Zeros a string array; mutates input
 * @param array {string[]}
 */
function zeroStringArray(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = "";
    }
}
/**
 * Resets an array to an array of undefined; mutates array
 * @param array {*[]}
 */
function resetArray(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = undefined;
    }
}
/**
 * @param {Object} options - The options object.
 * @param options.length {number}
 * @param options.minValue {number}
 * @param options.maxValue {number}
 * @returns {number[]}
 */
function randomArray({ length, minValue, maxValue } = { length: 10, minValue: 0, maxValue: 10 }) {
    if (maxValue < minValue) {
        return randomArray({ length: length, minValue: maxValue, maxValue: minValue });
    }
    return Array.from({ length }, (_) => Math.floor(Math.random() * (maxValue - minValue + 1) + minValue));
}
/**
 *
 * @param {Object} options - The options object.
 * @param options.rows {number} default: 3
 * @param options.columns {number} default: 3
 * @param options.minValue {number} default 0
 * @param options.maxValue {number} default 10
 * @returns {number[][]}
 */
function randomMatrix({ rows, columns, minValue, maxValue } = { rows: 3, columns: 3, minValue: 0, maxValue: 10 }) {
    if (maxValue > minValue) {
        return randomMatrix({ rows, columns, minValue: maxValue, maxValue: minValue });
    }
    return Array.from({ length: rows }, (_) => randomArray({ length: columns, minValue, maxValue }));
}
/**
 *
 * @param n {number}
 * @returns {number[]}
 */
function sortedArray(n = 10) {
    return Array(n)
        .fill(0)
        .map((_, i) => i + 1);
}
/**
 *
 * @param n {number}
 * @returns {number[]}
 */
function reverseSortedArray(n = 10) {
    return sortedArray(n).reverse();
}
/**
 *
 * @param {Object} options - The options object.
 * @param options.array {*[]}
 * @param options.rotateBy {number}
 * @returns {*[]}
 */
function rotateLeft({ array, rotateBy } = { array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], rotateBy: 3 }) {
    rotateBy = rotateBy % array.length;
    return [...array.slice(rotateBy), ...array.slice(0, rotateBy)];
}
/**
 * @param {Object} options - The options object.
 * @param options.array {*[]}
 * @param options.rotateBy {number}
 * @returns {*[]}
 */
function rotateRight({ array, rotateBy } = { array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], rotateBy: 3 }) {
    rotateBy = rotateBy % array.length;
    return [...array.slice(array.length - rotateBy), ...array.slice(0, array.length - rotateBy)];
}
/**
 * @param {Object} options - The options object.
 * @param {*[]} options.array
 * @returns {*[]}
 */
function median({ array } = { array: [] }) {
    if (!Array.isArray(array)) {
        return [];
    }
    const length = array.length;
    if (length < 1) {
        return [];
    }
    if (length < 2) {
        return [...array];
    }
    const hasOddLength = length % 2 === 1;
    if (hasOddLength) {
        return [array[Math.floor(length / 2)]];
    }
    else {
        return [array[Math.floor(length / 2) - 1], array[Math.floor(length / 2)]];
    }
}
/**
 * Converts an array to a string representation.
 *
 * @param {Object} [options] - The options object.
 * @param {Array} [options.array=[]] - The array to convert.
 * @param {string} [options.separator=','] - The separator to use between array elements.
 * @returns {string} The string representation of the array.
 */
function arrayToString({ array } = { array: [] }, { separator } = { separator: "," }) {
    array = Array.isArray(array) ? array : [];
    separator = typeof separator === "string" ? separator : ",";
    function innerArrayToString(value, seen, path = "") {
        if (typeof value === "object" && seen[value]) {
            return `Circular(${seen[value]})`;
        }
        seen[value] = path;
        if (Array.isArray(value)) {
            return `[${value.map((v, i) => innerArrayToString(v, seen, path + "[" + i + "]")).join(separator)}]`;
        }
        return value;
    }
    const set = new WeakSet();
    set.add(array);
    const value = innerArrayToString(array, set, "_");
    set.delete(array);
    return value;
}
/**
 * Checks if the given value is an array.
 *
 * @param {*} obj - The value to check.
 * @returns {boolean} - Returns `true` if the value is an array, else `false`.
 */
function isArray(obj) {
    return Array.isArray(obj);
}
/**
 * Checks if an object is array-like.
 *
 * @param {Object} obj - The object to check.
 * @returns {boolean} - Returns `true` if the object is array-like, `false` otherwise.
 */
function isArraylike(obj) {
    return typeof obj === "object" && obj !== null && typeof obj.length === "number";
}
/**
 * intersperse puts given withit after each item in list except the last one
 * @param {*[]} list an array of anytype of items
 * @param {*} withit anything that you need to be interspersed in the given list
 * @returns {*[]}
 */
function intersperse(list, withit) {
    if (list.length <= 1) {
        return list;
    }
    const out = [list[0]];
    for (let i = 1; i < list.length; i += 1) {
        out.push(withit);
        out.push(list[i]);
    }
    return out;
}
module.exports = {
    arrayToString,
    defaultArray,
    intersperse,
    isArray,
    isArraylike,
    randomArray,
    randomMatrix,
    resetArray,
    reverseSortedArray,
    rotateLeft,
    rotateRight,
    sortedArray,
    zeroNumberArray,
    zeroStringArray,
    median,
};
