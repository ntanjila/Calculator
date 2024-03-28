const forceConverter = require("../src/converter");

describe('Force Converter', () => {
    describe('Convert Newton to Dyne and Pound', () => {
        test('32 Newtons should convert to 3200000 Dyne and approximately 7.19 Pounds', () => {
            const expected = ["3200000.00 dyne", "7.19 pound"];
            expect(forceConverter.forceConverter("newton", 32)).toEqual(expected);
        });
    });

    describe('Convert Dyne to Newton and Pound', () => {
        test('3200000 Dyne should convert to 32 Newtons and approximately 7.19 Pounds', () => {
            const expected = ["32.00 newton", "7.19 pound"];
            expect(forceConverter.forceConverter("dyne", 3200000)).toEqual(expected);
        });
    });

    describe('Convert Pound to Newton and Dyne', () => {
        test('7.21 Pounds should convert to approximately 32 Newtons and 3200000 Dyne', () => {
            const expected = ["31.98 newton", "3198270.18 dyne"];
            expect(forceConverter.forceConverter("pound", 7.19)).toEqual(expected);
        });
    });

    describe('Invalid Measurement', () => {
        test('Should return "wrong input" for invalid measurement', () => {
            expect(forceConverter.forceConverter("invalid", 10)).toBe("wrong input");
        });
    });
});
