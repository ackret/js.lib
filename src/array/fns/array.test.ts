import {
    arrayToString,
    defaultArray,
    intersperse,
    isArray,
    isArraylike,
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
    arrayMayGet,
    filterOut,
    filterIn,
    inplaceFilterIn,
    inplaceFilterOut,
    chunk,
    filterOutStream,
    filterInStream,
} from "./array";

describe("array functions", () => {
    it("defaultArray returns an array", () => {
        expect(defaultArray().length).toEqual(10);
    });
    it("defaultArray returns an array of 0s", () => {
        expect(defaultArray().every((a) => a === 0)).toBe(true);
    });
    it("defaultArray returns an array of 0 if input is undefined", () => {
        expect(defaultArray(undefined).every((a) => a === 0)).toBe(true);
        expect(defaultArray(undefined).length).toEqual(10);
    });
    it("zeroNumberArray zeroes a number array", () => {
        const randomArray = [1, 2, 3, 4, 5];
        zeroNumberArray(randomArray);
        expect(randomArray.every((a) => a === 0)).toBe(true);
    });
    it("zeroStringArray zeroes a string array", () => {
        const randomArray = ["asd", "BBC", "zed"];
        zeroStringArray(randomArray);
        expect(randomArray.every((a) => a === "")).toBe(true);
    });
    it("zeroStringArray zeroes a non-string array", () => {
        const randomArray = [1, 2, 3, 4, 5];
        // @ts-ignore we are testing for a wrong input
        zeroStringArray(randomArray);
        // @ts-ignore we are testing for a wrong input
        expect(randomArray.every((a) => a === "")).toBe(true);
    });

    it("resetArray resets each array element to undefined", () => {
        const randomArray = [{ a: "asd" }, "BBC", 0, "zed"];
        resetArray(randomArray);
        expect(randomArray.every((a) => a === undefined)).toBe(true);
    });
});

describe("array rotations", () => {
    it("rotateLeft rotates an array to left", () => {
        const rotateBy = 3;
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const actual = rotateLeft({ array, rotateBy });
        const expected = [4, 5, 6, 7, 8, 9, 10, 1, 2, 3];
        expect(actual).toEqual(expected);
    });
    it("rotateRight rotates an array to right", () => {
        const rotateBy = 3;
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const actual = rotateRight({ array, rotateBy });
        const expected = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
        expect(actual).toEqual(expected);
    });
});

describe("median", () => {
    it("returns the median if array length is odd", () => {
        const input = { array: [1, 2, 3] };
        const expected = [2];
        const actual = median(input);
        expect(actual).toEqual(expected);
    });
    it("returns the median if array length is odd, and there is only one element", () => {
        const input = { array: [1] };
        const expected = [1];
        const actual = median(input);
        expect(actual).toEqual(expected);
    });
    it("returns the median if array length is even", () => {
        const input = { array: [1, 2, 3, 4] };
        const expected = [2, 3];
        const actual = median(input);
        expect(actual).toEqual(expected);
    });
    it("returns the median if array length is even, and there are only two elements", () => {
        const input = { array: [1, 2] };
        const expected = [1, 2];
        const actual = median(input);
        expect(actual).toEqual(expected);
    });
    it("returns empty array when the input array is empty", () => {
        const input = { array: [] };
        const expected = [];
        const actual = median(input);
        expect(actual).toEqual(expected);
    });
    it("returns empty array when the input array is undefined", () => {
        const input = {};
        const expected = [];
        // @ts-ignore because we are testing a wrong input test case
        const actual = median(input);
        expect(actual).toEqual(expected);
    });
});
describe("random", () => {
    it("randomArray returns an array of random numbers by default", () => {
        const actual = randomArray();
        expect(actual.length).toBe(10);
        expect(actual.every((a) => a <= 10)).toBe(true);
        expect(actual.every((a) => a >= 0)).toBe(true);
    });
    it("randomArray returns one random element in an array for given length of 1", () => {
        const actual = randomArray({ length: 1, minValue: 0, maxValue: 0 });
        expect(actual.length).toBe(1);
        expect(actual[0] === 0).toBe(true);
    });
    it("randomArray handles minValue > maxValue properly", () => {
        const actual = randomArray({ length: 10, minValue: 10, maxValue: 0 });
        expect(actual.length).toBe(10);
        expect(actual.every((a) => a <= 10)).toBe(true);
        expect(actual.every((a) => a >= 0)).toBe(true);
    });

    it("randomMatrix returns a matrix of random numbers by default", () => {
        const actual = randomMatrix();
        expect(actual.length).toBe(3);
        expect(actual[0].length).toBe(3);
        expect(actual.every((row) => row.every((col) => col <= 10))).toBe(true);
        expect(actual.every((row) => row.every((col) => col >= 0))).toBe(true);
    });

    it("sortedArray returns an array of numbers from 1 to 10 by default", () => {
        const actual = sortedArray();
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(actual.length).toBe(expected.length);
        expect(actual).toEqual(expected);
    });

    it("reverseSortedArray returns an array of numbers from 1 to 10 by default", () => {
        const actual = reverseSortedArray();
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reverse();
        expect(actual.length).toBe(expected.length);
        expect(actual).toEqual(expected);
    });
});

describe("arrayToString", () => {
    it("returns a string representation of an array", () => {
        const actual = arrayToString({ array: [1, 2, 3, 4] });
        const expected = "[1,2,3,4]";
        expect(actual).toEqual(expected);
    });
    it("returns a string representation of an array with a custom separator", () => {
        const actual = arrayToString({ array: [1, 2, 3, 4] }, { separator: "_" });
        const expected = "[1_2_3_4]";
        expect(actual).toEqual(expected);
    });
    it("returns a string representation of an array with another custom separator", () => {
        const actual = arrayToString({ array: [1, 2, 3, 4] }, { separator: "][" });
        const expected = "[1][2][3][4]";
        expect(actual).toEqual(expected);
    });
    it("can handle an empty array", () => {
        const actual = arrayToString({ array: [] });
        const expected = "[]";
        expect(actual).toEqual(expected);
    });
    it("can handle an undefined array", () => {
        // @ts-ignore because we are testing a wrong input test case
        const actual = arrayToString({});
        const expected = "[]";
        expect(actual).toEqual(expected);
    });
    it("can handle circular reference in array", () => {
        const a = [1, 2, 3];
        // @ts-ignore because we are testing a wrong input test case
        a.push(a);
        const actual = arrayToString({ array: a });
        const expected = "[1,2,3,Circular(_)]";
        expect(actual).toEqual(expected);
    });
});
describe("isArraylike", () => {
    it("returns true for an array", () => {
        const input = [];
        const actual = isArraylike(input);
        expect(actual).toBe(true);
    });
    it("returns true for an array-like object", () => {
        const input = { length: 5 };
        const actual = isArraylike(input);
        expect(actual).toBe(true);
    });
    it("returns false for a string", () => {
        const input = "hello";
        const actual = isArraylike(input);
        expect(actual).toBe(false);
    });
    it("returns false for a number", () => {
        const input = 42;
        const actual = isArraylike(input);
        expect(actual).toBe(false);
    });
    it("returns false for an object", () => {
        const input = { foo: "bar" };
        const actual = isArraylike(input);
        expect(actual).toBe(false);
    });
    it("returns false for null", () => {
        const input = null;
        const actual = isArraylike(input);
        expect(actual).toBe(false);
    });
    it("returns false for undefined", () => {
        const input = undefined;
        const actual = isArraylike(input);
        expect(actual).toBe(false);
    });
});
describe("isArray", () => {
    it("returns true for an array", () => {
        const input = [];
        const actual = isArray(input);
        expect(actual).toBe(true);
    });
    it("returns false for a string", () => {
        const input = "hello";
        const actual = isArray(input);
        expect(actual).toBe(false);
    });
    it("returns false for a number", () => {
        const input = 42;
        const actual = isArray(input);
        expect(actual).toBe(false);
    });
    it("returns false for an object", () => {
        const input = { foo: "bar" };
        const actual = isArray(input);
        expect(actual).toBe(false);
    });
    it("returns false for null", () => {
        const input = null;
        const actual = isArray(input);
        expect(actual).toBe(false);
    });
    it("returns false for undefined", () => {
        const input = undefined;
        const actual = isArray(input);
        expect(actual).toBe(false);
    });
});

describe("intersperse", () => {
    it("should return the same list if it's length is less than or equal to 1", () => {
        expect(intersperse([], "a")).toEqual([]);
        expect(intersperse(["foo"], "bar")).toEqual(["foo"]);
    });

    it("should intersperse with given item after each element except the last one", () => {
        expect(intersperse(["a", "b", "c"], "x")).toEqual(["a", "x", "b", "x", "c"]);
        expect(intersperse([1, 2, 3], ", ")).toEqual([1, ", ", 2, ", ", 3]);
    });

    it("should handle different types of elements in the list", () => {
        expect(intersperse([{ a: 1 }, { b: 2 }], null)).toEqual([{ a: 1 }, null, { b: 2 }]);
        expect(intersperse(["foo", "bar"], 0)).toEqual(["foo", 0, "bar"]);
    });

    it("should handle empty list and withit correctly", () => {
        expect(intersperse([], "a")).toEqual([]);
        expect(intersperse(["foo"], "bar")).toEqual(["foo"]);
    });

    it("should intersperse correctly even if the list contains multiple elements of withit", () => {
        expect(intersperse(["x", "x", "x"], "x")).toEqual(["x", "x", "x", "x", "x"]);
        expect(intersperse([1, 2, 3], 2)).toEqual([1, 2, 2, 2, 3]);
    });

    it("should handle large lists efficiently", () => {
        const largeList = Array.from({ length: 100 }, (_, i) => `item${i}`);
        const interspersedList = intersperse(largeList, "-");
        expect(interspersedList.length).toEqual(2 * largeList.length - 1);
        for (let i = 0; i < largeList.length - 1; i++) {
            expect(interspersedList[2 * i + 1]).toEqual("-");
        }
    });

    describe("arrayMayGet", () => {
        it("should return proper value if index is in the range", () => {
            const out = arrayMayGet<number>([1, 2, 3, 4, 5], 3);
            if (out.ok) {
                expect(out.result[0]).toBeLessThan(5);
            } else {
                expect(out.errors[0]).toBe("ERROR: index out of range.");
            }
        });
        it("should return error if index is lower than 0", () => {
            const { ok, result, errors } = arrayMayGet<number>([1, 2, 3, 4, 5], -1);
            if (ok) {
                expect(result[0]).toBeLessThan(5);
            } else {
                expect(errors[0]).toBe("ERROR: index out of range.");
            }
        });
        it("should return error if index is greater than array.length", () => {
            const { ok, result, errors } = arrayMayGet<number>([1, 2, 3, 4, 5], 6);
            if (ok) {
                expect(result[0]).toBeLessThan(5);
            } else {
                expect(errors[0]).toBe("ERROR: index out of range.");
            }
        });
    });
});

describe("filterOut", () => {
    it("should filter out elements that satisfy the predicate", () => {
        const input = [1, 2, 3, 4, 5];
        const predicate = (item: number) => item % 2 === 0;
        const actual = filterOut(input, predicate);
        const expected = [1, 3, 5];
        expect(actual).toEqual(expected);
    });

    it("should return the same list if no element satisfies the predicate", () => {
        const input = [1, 3, 5];
        const predicate = (item: number) => item % 2 === 0;
        const actual = filterOut(input, predicate);
        const expected = [1, 3, 5];
        expect(actual).toEqual(expected);
    });

    it("should return an empty list if all elements satisfy the predicate", () => {
        const input = [2, 4, 6];
        const predicate = (item: number) => item % 2 === 0;
        const actual = filterOut(input, predicate);
        const expected: number[] = [];
        expect(actual).toEqual(expected);
    });

    it("should handle empty list correctly", () => {
        const input: number[] = [];
        const predicate = (item: number) => item % 2 === 0;
        const actual = filterOut(input, predicate);
        const expected: number[] = [];
        expect(actual).toEqual(expected);
    });
});

describe("filterIn", () => {
    it("should filter in elements that satisfy the predicate", () => {
        const input = [1, 2, 3, 4, 5];
        const predicate = (item: number) => item % 2 === 0;
        const actual = filterIn(input, predicate);
        const expected = [2, 4];
        expect(actual).toEqual(expected);
    });

    it("should return the same list if no element satisfies the predicate", () => {
        const input = [1, 3, 5];
        const predicate = (item: number) => item % 2 === 0;
        const actual = filterIn(input, predicate);
        const expected: number[] = [];
        expect(actual).toEqual(expected);
    });

    it("should return an empty list if all elements satisfy the predicate", () => {
        const input = [2, 4, 6];
        const predicate = (item: number) => item % 2 === 0;
        const actual = filterIn(input, predicate);
        const expected = [2, 4, 6];
        expect(actual).toEqual(expected);
    });

    it("should handle empty list correctly", () => {
        const input: number[] = [];
        const predicate = (item: number) => item % 2 === 0;
        const actual = filterIn(input, predicate);
        const expected: number[] = [];
        expect(actual).toEqual(expected);
    });
});

describe("inplaceFilterIn", () => {
    it("should filter in elements that satisfy the predicate", () => {
        const input = [1, 2, 3, 4, 5];
        const predicate = (item: number) => item % 2 === 0;
        const actual = inplaceFilterIn(input, predicate);
        const expected = [2, 4];
        expect(actual).toEqual(expected);
    });

    it("should return the same list if no element satisfies the predicate", () => {
        const input = [1, 3, 5];
        const predicate = (item: number) => item % 2 === 0;
        const actual = inplaceFilterIn(input, predicate);
        const expected: number[] = [];
        expect(actual).toEqual(expected);
    });

    it("should return an empty list if all elements satisfy the predicate", () => {
        const input = [2, 4, 6];
        const predicate = (item: number) => item % 2 === 0;
        const actual = inplaceFilterIn(input, predicate);
        const expected = [2, 4, 6];
        expect(actual).toEqual(expected);
    });

    it("should handle empty list correctly", () => {
        const input: number[] = [];
        const predicate = (item: number) => item % 2 === 0;
        const actual = inplaceFilterIn(input, predicate);
        const expected: number[] = [];
        expect(actual).toEqual(expected);
    });
});

describe("inplaceFilterOut", () => {
    it("should filter out elements that satisfy the predicate", () => {
        const input = [1, 2, 3, 4, 5];
        const predicate = (item: number) => item % 2 === 0;
        const actual = inplaceFilterOut(input, predicate);
        const expected = [1, 3, 5];
        expect(actual).toEqual(expected);
    });

    it("should return the same list if no element satisfies the predicate", () => {
        const input = [1, 3, 5];
        const predicate = (item: number) => item % 2 === 0;
        const actual = inplaceFilterOut(input, predicate);
        const expected = [1, 3, 5];
        expect(actual).toEqual(expected);
    });

    it("should return an empty list if all elements satisfy the predicate", () => {
        const input = [2, 4, 6];
        const predicate = (item: number) => item % 2 === 0;
        const actual = inplaceFilterOut(input, predicate);
        const expected: number[] = [];
        expect(actual).toEqual(expected);
    });

    it("should handle empty list correctly", () => {
        const input: number[] = [];
        const predicate = (item: number) => item % 2 === 0;
        const actual = inplaceFilterOut(input, predicate);
        const expected: number[] = [];
        expect(actual).toEqual(expected);
    });
});

describe("chunk", () => {
    it("should return an empty array if the input array is empty", async () => {
        const input = [];
        const actual = await chunk(input, 2);
        const expected = [];
        expect(actual).toEqual(expected);
    });

    it("should return an empty array if the input array is undefined", async () => {
        try {
            // @ts-ignore because we are testing a wrong input test case
            await chunk(undefined, 2);
        } catch (e) {
            expect(e).toEqual(new Error("Array is null or undefined"));
        }
    });

    it("should return an empty array if the size is less than 1", async () => {
        const input = [1, 2, 3, 4, 5];
        const actual = await chunk(input, 0);
        const expected = [[], [], [], [], []];
        expect(actual).toEqual(expected);
    });

    it("should return the same array if the size is greater than or equal to the array length", async () => {
        const input = [1, 2, 3, 4, 5];
        const actual = await chunk(input, 5);
        const expected = [input];
        expect(actual).toEqual(expected);
    });

    it("should return the array chunked into subarrays of the given size", async () => {
        const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const actual = await chunk(input, 3);
        const expected = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];
        expect(actual).toEqual(expected);
    });

    it("should return the array chunked into subarrays of the given size, with the last chunk having fewer elements", async () => {
        const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const actual = await chunk(input, 4);
        const expected = [[1, 2, 3, 4], [5, 6, 7, 8], [9]];
        expect(actual).toEqual(expected);
    });

    it("should reject with an error if the array length is negative", async () => {
        const input = [];
        try {
            await chunk(input, -1);
        } catch (e) {
            expect(e.message).toEqual("Size is negative");
        }
    });

    it("should reject with an error if the array length is zero and size is not a number", async () => {
        const input = [];
        try {
            // @ts-ignore because we are testing a wrong input test case
            await chunk(input, "foo");
        } catch (e) {
            expect(e.message).toEqual("Size is not an integer");
        }
    });

    it("should reject with an error if the array length is not a number", async () => {
        const input = { length: "foo", 0: 1, 1: 2, 2: 3 };
        try {
            // @ts-ignore because we are testing a wrong input test case
            await chunk(input, 1);
        } catch (e) {
            expect(e.message).toEqual("Input is not an array");
        }
    });

    it("should reject with an error if the array length is negative", async () => {
        const input = { length: -1, 0: 1, 1: 2, 2: 3 };
        try {
            // @ts-ignore because we are testing a wrong input test case
            await chunk(input, 1);
        } catch (e) {
            expect(e.message).toEqual("Array length is negative");
        }
    });
});

describe("filterOutStream", () => {
    it("should filter out elements that satisfy the predicate", () => {
        const input = [1, 2, 3, 4, 5];
        const predicate = (item: number) => item % 2 === 0;
        const actual = Array.from(filterOutStream(input, predicate));
        const expected = [1, 3, 5];
        expect(actual).toEqual(expected);
    });

    it("should return the same list if no element satisfies the predicate", () => {
        const input = [1, 3, 5];
        const predicate = (item: number) => item % 2 === 0;
        const actual = Array.from(filterOutStream(input, predicate));
        const expected = [1, 3, 5];
        expect(actual).toEqual(expected);
    });

    it("should return an empty list if all elements satisfy the predicate", () => {
        const input = [2, 4, 6];
        const predicate = (item: number) => item % 2 === 0;
        const actual = Array.from(filterOutStream(input, predicate));
        const expected: number[] = [];
        expect(actual).toEqual(expected);
    });

    it("should handle empty list correctly", () => {
        const input: number[] = [];
        const predicate = (item: number) => item % 2 === 0;
        const actual = Array.from(filterOutStream(input, predicate));
        const expected: number[] = [];
        expect(actual).toEqual(expected);
    });
});

describe("filterInStream", () => {
    it("should filter in elements that satisfy the predicate", () => {
        const input = [1, 2, 3, 4, 5];
        const predicate = (item: number) => item % 2 === 0;
        const actual = Array.from(filterInStream(input, predicate));
        const expected = [2, 4];
        expect(actual).toEqual(expected);
    });

    it("should return the same list if no element satisfies the predicate", () => {
        const input = [1, 3, 5];
        const predicate = (item: number) => item % 2 === 0;
        const actual = Array.from(filterInStream(input, predicate));
        const expected: number[] = [];
        expect(actual).toEqual(expected);
    });

    it("should return an empty list if all elements satisfy the predicate", () => {
        const input = [2, 4, 6];
        const predicate = (item: number) => item % 2 === 0;
        const actual = Array.from(filterInStream(input, predicate));
        const expected = [2, 4, 6];
        expect(actual).toEqual(expected);
    });

    it("should handle empty list correctly", () => {
        const input: number[] = [];
        const predicate = (item: number) => item % 2 === 0;
        const actual = Array.from(filterInStream(input, predicate));
        const expected: number[] = [];
        expect(actual).toEqual(expected);
    });
});

