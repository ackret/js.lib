const StringT = require('./string');

describe('StringT', function() {
    describe('constructor', function () {
        it('should create an instance with the correct value', function () {
            const str = new StringT('Hello');
            expect(str.toString()).toEqual('Hello');
        });

        it('should return an error instance for non-string inputs', function () {
            const str = new StringT(123);
            expect(str.toString()).toEqual('StringT constructor ERROR: Wrong type!');
        });
    });

    describe('String Checks', function () {
        it('should correctly identify ASCII strings', function () {
            const str = new StringT('ASCII');
            expect(str.isAscii()).toBeTrue();
            const nonAscii = new StringT('é');
            expect(nonAscii.isAscii()).toBeFalse();
        });

        it('should correctly identify alphabetic strings', function () {
            const alphabetic = new StringT('Abc');
            expect(alphabetic.isAlphabetic()).toBeTrue();
            const nonAlphabetic = new StringT('123');
            expect(nonAlphabetic.isAlphabetic()).toBeFalse();
        });

        it('should correctly identify numeric strings', function () {
            const numeric = new StringT('123');
            expect(numeric.isNumeric()).toBeTrue();
            const nonNumeric = new StringT('abc');
            expect(nonNumeric.isNumeric()).toBeFalse();
        });

        // Continue with isAlphaNumeric, isLowerCase, isUpperCase...
    });

    describe('Transformation Methods', function () {
        it('should convert string to lower case', function () {
            const str = new StringT('HeLLo');
            const lowerStr = str.toLowerCase();
            expect(lowerStr.toString()).toEqual('hello');
        });

        // Tests for toLocaleLowerCase, toUpperCase, toLocaleUpperCase...
    });

    describe('Equality and Value Retrieval', function () {
        it('should correctly compare two StringT instances for equality', function () {
            const str1 = new StringT('hello');
            const str2 = new StringT('hello');
            const str3 = new StringT('world');
            expect(str1.isEqual(str2)).toBeTrue();
            expect(str1.isEqual(str3)).toBeFalse();
        });

        it('should return the underlying string value', function () {
            const str = new StringT('hello');
            expect(str.toValue()).toEqual('hello');
        });
    });

    describe('Frequency Map and Related Methods', function () {
        it('should generate a correct frequency map', function () {
            const str = new StringT('hello');
            expect(str.generateFrequencyMap()).toEqual({h: 1, e: 1, l: 2, o: 1});
        });

        it('should return correct frequency of a character', function () {
            const str = new StringT('hello');
            expect(str.frequency('l')).toEqual(2);
            expect(str.frequency('x')).toEqual(0);
        });
    });

    describe("Concatenation, Append, and Prepend", function() {
        it("should concatenate two StringT instances", function() {
            const str1 = new StringT("Hello");
            const str2 = new StringT("World");
            const result = str1.concat(str2);
            expect(result.toString()).toEqual("HelloWorld");
        });

        it("should append a string to the current instance", function() {
            const str = new StringT("Hello");
            const result = str.append(new StringT("World"));
            expect(result.toString()).toEqual("HelloWorld");
        });

        it("should append a string to the current instance", function() {
            const str = new StringT("Hello");
            const result = str.append("World");
            expect(result.toString()).toEqual("HelloWorld");
        });

        it("should not append a non-string to the current instance", function() {
            const str = new StringT("Hello");
            const result = str.append(123);
            expect(result.toString()).toEqual("StringT concat ERROR: Wrong type!");
        });

        it("should prepend a string to the current instance", function() {
            const str = new StringT("World");
            const result = str.prepend(new StringT("Hello"));
            expect(result.toString()).toEqual("HelloWorld");
        });

        it("should prepend a string to the current instance", function() {
            const str = new StringT("World");
            const result = str.prepend("Hello");
            expect(result.toString()).toEqual("HelloWorld");
        });

        it("should not prepend a non-string to the current instance", function() {
            const str = new StringT("World");
            const result = str.prepend(123);
            expect(result.toString()).toEqual("StringT prepend ERROR: Wrong type!");
        });

    });

    describe("toObject", () => {
        it("should return the correct object", () => {
            const str = new StringT("Hello");
            const obj = str.toObject();
            expect(obj).toEqual({
                StringT: {
                    value: "Hello",
                    length: 5,
                    isAscii: true,
                    isAlphabetic: true,
                    isNumeric: false,
                    isAlphaNumeric: true,
                    isLowerCase: false,
                    isUpperCase: false,
                    isPalindrome: false,
                }
            });
        });
    });

    describe("padding functions", () => {
        it("should return the correct start-padded string", () => {
            const str = new StringT("Hello");
            const padded = str.padStart(10, " ");
            expect(padded.toString()).toEqual("     Hello");
        });

        it("should return the correct end-padded string", () => {
            const str = new StringT("Hello");
            const padded = str.padEnd(10, " ");
            expect(padded.toString()).toEqual("Hello     ");
        });

        it("should return the correct left-padded string", () => {
            const str = new StringT("Hello");
            const padded = str.padLeft(10, " ");
            expect(padded.toString()).toEqual("     Hello");
        });

        it("should return the correct right-padded string", () => {
            const str = new StringT("Hello");
            const padded = str.padRight(10, " ");
            expect(padded.toString()).toEqual("Hello     ");
        });
    });
});
