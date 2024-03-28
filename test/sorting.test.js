const sorting = require("../src/sorting"); 

describe('Selection Sort', () => {
    var BVAdata = [
        [[5, 3, 8, 2, 1, 4], [1, 2, 3, 4, 5, 8]], 
        [[10,1], [1,10]],
        [['banana', 'apple', 'orange', 'grape'], ['apple', 'banana', 'grape', 'orange']], 
        [[], []] 
    ];

    describe.each(BVAdata)('Selection Sort', (input, expected) => {
        test(`sorts ${input}`, () => {
            expect(sorting.selectionSort(input)).toEqual(expected);
        });
    });
});

describe('Insertion Sort', () => {
    var DTdata = [
        [[5, 3, 8, 2, 1, 4], [1, 2, 3, 4, 5, 8]],  
        [['banana', 'apple', 'orange', 'grape'], ['apple', 'banana', 'grape', 'orange']], 
        [[], []] 
    ];

    describe.each(DTdata)('Insertion Sort', (input, expected) => {
        test(`sorts ${input}`, () => {
            expect(sorting.insertionSort(input)).toEqual(expected);
        });
    });
});
