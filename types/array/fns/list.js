"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterReduce = filterReduce;
exports.foldl = foldl;
exports.foldr = foldr;
exports.take = take;
exports.takeWhile = takeWhile;
exports.head = head;
exports.tail = tail;
/**
 * foldr :: (a -> b -> b) -> b -> [a] -> b
 * @param fn {function}
 * @param initValue {*}
 * @param list {*[]}
 * @return {*}
 */
function foldr(fn, initValue, list) {
    if (list.length === 0) {
        return initValue;
    }
    const [c, ...rest] = list;
    return fn(c, foldr(fn, initValue, rest));
}
/**
 * foldl :: (a -> b -> b) -> b -> [a] -> b
 * @param fn {function}
 * @param initValue {*}
 * @param list {*[]}
 * @return {*}
 */
function foldl(fn, initValue, list) {
    if (list.length === 0) {
        return initValue;
    }
    const [c, ...rest] = list;
    return foldl(fn, fn(initValue, c), rest);
}
/**
 * take :: number -> [a] -> [a]
 * @param n {number}
 * @param list {*[]}
 * @return {*[]}
 */
function take(n, list) {
    if (n === 0 || list.length === 0) {
        return [];
    }
    if (n > list.length) {
        return list;
    }
    const [c, ...rest] = list;
    return [c, ...take(n - 1, rest)];
}
/**
 * takeWhile :: (a -> boolean) -> [a] -> [a]
 * @param fn {function}
 * @param list {*[]}
 * @return {*[]}
 */
function takeWhile(fn, list) {
    if (list.length === 0) {
        return [];
    }
    const [c, ...rest] = list;
    if (fn(c)) {
        return [c, ...takeWhile(fn, rest)];
    }
    return [];
}
/**
 * filterReduce :: (a -> boolean) -> (b -> a -> b) -> b -> [a] -> b
 * @param filterFn {(v, i, a) => boolean}
 * @param reduceFn {(acc, cur, i, a) => cur}
 * @param initValue {*}
 * @param list {*[]}
 * @return {*}
 */
function filterReduce(filterFn, reduceFn, initValue, list) {
    return list.filter(filterFn).reduce(reduceFn, initValue);
}
/**
 * head returns the head of a list
 * @param list {*[]}
 * @param n {number}
 * @returns {*[]}
 */
function head(list, n = 10) {
    if (!Array.isArray(list))
        return [];
    n = Math.min(n, list.length);
    return list.slice(0, n);
}
/**
 * tail returns the tail of a list
 * @param list {*[]}
 * @param n {number}
 * @returns {*[]}
 */
function tail(list, n = 10) {
    if (!Array.isArray(list))
        return [];
    n = Math.max(0, list.length - n);
    return list.slice(n);
}
