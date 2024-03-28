
const calculator = require("../src/basic");

describe('Add', () => {
    var BVAdata = [
        [1,2,3],
        [4,5,9],
        [3,12,15],
        [4,6,10]
    ]
    describe.each(BVAdata)('BVA: add(%i,%i), Expected: %i', (a,b, expected) => {
        test(`returns ${calculator.add(a,b)}`, () =>{
            expect(calculator.add(a,b)).toBe(expected);
        });
    });

    var DTdata = [
        [0,89,89],
        [-17, -35, -52],
        [65, -12, 53],
        [-78, 24, -54]
    ]
    describe.each(DTdata)('DT:add(%i,%i), Expected: %i', (a,b, expected) => {
        test(`returns ${calculator.add(a,b)}`, () =>{
            expect(calculator.add(a,b)).toBe(expected);
        });
    });
});

describe('Subtract', () => {
    var DTdata = [
        [5, 3, 2],   
        [10, 5, 5],  
        [8, -3, 11], 
        [-6, -2, -4] 
    ];
    
    describe.each(DTdata)('subtract(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${expected}`, () => {
            expect(calculator.subtract(a, b)).toBe(expected);
        });
    });
});

describe('Divide', () => {
    var DTdata = [
        [10, 2, 5],   
        [15, 3, 5],   
        [7, -2, -3.5],  
    ];
    
    describe.each(DTdata)('divide(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${expected}`, () => {
            expect(calculator.divide(a, b)).toBe(expected);
        });
    });
});

describe('Multiply', () => {
    var DTdata = [
        [3, 5, 15],   
        [8, -4, -32],
        [-6, -2, 12], 
        [0, 10, 0]   
    ];
    
    describe.each(DTdata)('multiply(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${expected}`, () => {
            expect(calculator.multiply(a, b)).toBe(expected);
        });
    });
});
