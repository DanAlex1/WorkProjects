const isPalindrome = require('../src/palindrome')

test('returns true for 121', () =>{
    expect(isPalindrome(121)).toBe(true)
})

test('returns false for -121', () =>{
    expect(isPalindrome(-121)).toBe(false)
})

test('returns false for 123', () =>{
    expect(isPalindrome(123)).toBe(false)
})