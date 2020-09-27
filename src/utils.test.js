import { RomanNumerals } from "./utils";

describe("RomanNumerals", () => {
  describe("toRoman", () => {
    it("should return 2 as roman number", () => {
      expect(RomanNumerals.toRoman(2)).toBe("II");
    });
    it("should return 4 as roman number", () => {
      expect(RomanNumerals.toRoman(4)).toBe("IV");
    });
    it("should return 6 as roman number", () => {
      expect(RomanNumerals.toRoman(6)).toBe("VI");
    });
    it("should return 9 as roman number", () => {
      expect(RomanNumerals.toRoman(9)).toBe("IX");
    });
    it("should return 3659 as roman number", () => {
      expect(RomanNumerals.toRoman(3659)).toBe("MMMDCLIX");
    });
  });

  describe("fromRoman", () => {
    it("should return II as an integer", () => {
      expect(RomanNumerals.fromRoman("II")).toBe(2);
    });
    it("should return 4 as an integer", () => {
      expect(RomanNumerals.fromRoman("IV")).toBe(4);
    });
    it("should return 6 as an integer", () => {
      expect(RomanNumerals.fromRoman("VI")).toBe(6);
    });
    it("should return 9 as an integer", () => {
      expect(RomanNumerals.fromRoman("IX")).toBe(9);
    });
    it("should return 3659 as an integer", () => {
      expect(RomanNumerals.fromRoman("MMMDCLIX")).toBe(3659);
    });
  });
});

describe("validator", () => {
  it("isRomanNumberValid", () => {});
});
