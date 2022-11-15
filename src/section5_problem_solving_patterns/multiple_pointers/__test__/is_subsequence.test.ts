import { isSubsequence } from "../is_subsequence";


it('returns false',()=>{
    // first arg > second arg
    expect(isSubsequence('a','bcd')).toBe(false);
    expect(isSubsequence('abc','ab')).toBe(false);
    expect(isSubsequence('hello','helol')).toBe(false);    
})

it('returns true',()=>{
    // smae strings
    expect(isSubsequence('a','a')).toBe(true);
    expect(isSubsequence('ababababc','ababababababc')).toBe(true);
    expect(isSubsequence('aaa','aaaaaaaaa')).toBe(true);
    expect(isSubsequence('abc','ababsfsanwetgabc')).toBe(true);
    expect(isSubsequence('hello','hello world')).toBe(true);
    expect(isSubsequence('abc','abdc')).toBe(true);
    expect(isSubsequence('aaaa','aasfasgepgfsaaa')).toBe(true);
})
