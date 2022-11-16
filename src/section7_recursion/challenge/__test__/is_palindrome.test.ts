import { isPalindrome } from "../is_palindrome";

it('returns false',()=>{
    // 2
    expect(isPalindrome('ab')).toBe(false);
    //
    expect(isPalindrome('ggga')).toBe(false);
    expect(isPalindrome('abccb')).toBe(false);

    expect(isPalindrome('awesome')).toBe(false);
    expect(isPalindrome('"A man, a plan, a canal: Panama')).toBe(false);
    expect(isPalindrome('amanaplanacanalpandemonium')).toBe(false);

})

it('returns true',()=>{
    // empty or 1
    expect(isPalindrome('')).toBe(true);
    expect(isPalindrome('a')).toBe(true);
    // duplicated
    expect(isPalindrome('aaaaaaa')).toBe(true);
    // even
    expect(isPalindrome('abccba')).toBe(true);
    // odd
    expect(isPalindrome('abcba')).toBe(true);
    // randomn
    expect(isPalindrome('fsafsafsaasfasfasf')).toBe(true);

    expect(isPalindrome('tacocat')).toBe(true);
    expect(isPalindrome('amanaplanacanalpanama')).toBe(true);

})