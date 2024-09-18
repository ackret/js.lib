import { fs, DirInfo, hash256, hash512, platform, osname, isLinux, isWindows, isMac, readStream, LinuxDirectoryNode, int, posint, negint } from "./node/index";
import { Result, ErrorType, ValueType, Result2 } from "./types/Result";
import { Option, Some, None } from "./types/Option";
import { isString, isEmptyOrNullString, isUndefinedOrNull, isPrimitive, isArrayOf, isEmptyString } from "./checks/type";
declare const base64: any;
declare const defaultArray: any, list: any, median: any, randomArray: any, randomMatrix: any, resetArray: any, reverseSortedArray: any, rotateLeft: any, rotateRight: any, sortedArray: any, zeroNumberArray: any, zeroStringArray: any, arrayMayGet: any;
declare const NumberMinHeap: any, NumberMaxHeap: any;
declare const BooleanT: any;
declare const Default: any;
declare const FalseT: any;
import StringT from "./primitives/string";
declare const TrueT: any;
declare const canvas: any;
declare const Conversions: any;
declare const objectToString: any, deepEqual: any, keyEqual: any, valueEqual: any, findKeys: any;
declare const nothing: any, just: any, maybe: any, either: any, monad_list: any, future: any, state: any;
declare const headingToHTML: any, sanitize: any, verifyHeading1: any, verifyHeading2: any, verifyHeading3: any, markdownTableToJson: any;
declare const coinChange: any;
declare const checks: {
    type: {
        isString: typeof isString;
        isEmptyString: typeof isEmptyString;
        isEmptyOrNullString: typeof isEmptyOrNullString;
        isUndefinedOrNull: typeof isUndefinedOrNull;
        isPrimitive: typeof isPrimitive;
        isArrayOf: typeof isArrayOf;
    };
};
export { base64, canvas, Conversions, fs, DirInfo, hash256, hash512, platform, osname, isLinux, isWindows, isMac, LinuxDirectoryNode, int, posint, negint, readStream, NumberMinHeap, NumberMaxHeap, arrayMayGet, defaultArray, median, randomArray, randomMatrix, resetArray, reverseSortedArray, rotateLeft, rotateRight, sortedArray, zeroNumberArray, zeroStringArray, list, either, future, just, monad_list, maybe, nothing, state, headingToHTML, sanitize, verifyHeading1, verifyHeading2, verifyHeading3, markdownTableToJson, coinChange, objectToString, deepEqual, keyEqual, valueEqual, findKeys, BooleanT, Default, FalseT, StringT, TrueT, checks, isString, isEmptyString, isEmptyOrNullString, isUndefinedOrNull, isPrimitive, isArrayOf, Option, Some, None, };
export type { Result, ErrorType, ValueType, Result2 };
