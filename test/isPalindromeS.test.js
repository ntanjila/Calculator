const palindromeChecker = require("../src/isPalindromeS");

describe('Palindrome Checker', () => {
    var testData = [
        ["", true],              
        ["racecar", true],  
        ["1233211", false],      
        ["palindrome", false],     
        ["12321", true],         
        ["12345", false],        
        [12321, true],           
        [12345, false], 
        ["0", true],
        ["ab", false],     
        ["not a palindrome", false] 
    ];

    describe.each(testData)('isPalindrome("%s")', (input, expected) => {
        test(`returns ${expected}`, () => {
            expect(palindromeChecker.isPalindrome(input)).toEqual(expected);
        });
    });
});




