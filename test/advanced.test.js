const calculator = require("../src/advanced");

describe('Pow', () => {
    var BVAdata = [
        [2, 3, 8],   
        [4, 2, 16],  
        [5, 0, 1],  
        [3, 4, 81]   
    ];
    
    describe.each(BVAdata)('pow(%i, %i), Expected: %i', (x, n, expected) => {
        test(`returns ${expected}`, () => {
            expect(calculator.pow(x, n)).toBe(expected);
        });
    });
});

describe('Modulo', () => {
    var DTdata = [
        [10, 3, 1],   
        [25, 5, 0],   
        [17, 4, 1],   
        [12, 7, 5]    
    ];
    
    describe.each(DTdata)('modulo(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${expected}`, () => {
            expect(calculator.modulo(a, b)).toBe(expected);
        });
    });
});
