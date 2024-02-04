import { modThree } from '../app/modthree'; // Adjust the import path as necessary

describe('modThree function', () => {
    // basic behavior tests
    test('should return 0 for an empty string', () => {
        expect(modThree("")).toBe(0);
    });

    // 1 bit transition tests for s0 transitions
    test('should return 0 for s0 to s0 loopback', () => {
        expect(modThree("0")).toBe(0);
    });

    test('should return 1 for s0 to s1 state transfer', () => {
        expect(modThree("1")).toBe(1);
    });

    // 2 bit transition tests for s1 transitions
    test('should return 2 for s0 to s1 to s2 transition', () => {
        expect(modThree("10")).toBe(2);
    });

    test('should return 0 for s0 to s1 to s0 transition', () => {
        expect(modThree("11")).toBe(0);
    });

    // 3 bit transition tests for s2 transitions
    test('should return 2 for s0 to s1 to s2 to s2', () => {
        expect(modThree("101")).toBe(2);
    });

    test('should return 1 for s0 to s1 to s2 to s1', () => {
        expect(modThree("100")).toBe(1);
    });

    // random bit tests
    test('should return 1 for "1101" representing thirteen', () => {
        expect(modThree("1101")).toBe(1);
    });

    test('should return 2 for "1110" representing fourteen', () => {
        expect(modThree("1110")).toBe(2);
    });

    test('should return 0 for "1111" representing fifteen', () => {
        expect(modThree("1111")).toBe(0);
    });

    test('should return 0 for "110" representing six', () => {
        expect(modThree("110")).toBe(0);
    });

    test('should return 1 for "1010" representing ten', () => {
        expect(modThree("1010")).toBe(1);
    });

    // stress tests
    test('should handle long binary strings correctly', () => {
        expect(modThree("110110111100110111101111")).toBe(0);
    });

    test('should handle very long binary strings correctly', () => {
        expect(modThree("111010101110001010101101010101010111110101101111010101110111101111011011")).toBe(0);
    });

    // invalid input tests
    test('should throw an error for invalid non binary representation input', () => {
        expect(() => modThree("1102")).toThrow('Invalid final state');
    });

    test('should throw an error for invalid character string input', () => {
        expect(() => modThree("110a")).toThrow('Invalid final state');
    });

});
