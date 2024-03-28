const sorting = require("../src/quickSort");

describe('Quick Sort', () => {
    var testData = [
        {
            input: [3, 7, 2, 5, 1],
            expected: [1, 2, 3, 5, 7]
        },
        {
            input: [1, 2, 3, 3, 2, 1],
            expected: [1, 1, 2, 2, 3, 3]
        },
        {
            input: [-3, -7, -2, -5, -1],
            expected: [-7, -5, -3, -2, -1]
        },
        {
            input: [3],
            expected: [3]
        },
        {
            input: [9, 8, 7, 6, 5, 4, 3, 2, 1],
            expected: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        },
        {
            input: [5, 5, 5, 5, 5],
            expected: [5, 5, 5, 5, 5]
        },
        {
            input: [10, 20, 30, 40, 50],
            expected: [10, 20, 30, 40, 50]
        },
        {
            input: [],
            expected: []
        }
    ];

    describe.each(testData)('quickSort(%p)', ({ input, expected }) => {
        test(`returns ${expected}`, () => {
            expect(sorting.quickSort(input)).toEqual(expected);
        });
    });
});
