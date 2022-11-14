import { isAnagrams } from "../anagrams";

it('returns false',()=>{
    // length mismatch
    expect(isAnagrams('','a')).toBe(false);
    expect(isAnagrams('a','aa')).toBe(false);
    // identical length 
    expect(isAnagrams('aa','ab')).toBe(false);
    expect(isAnagrams('aaaaaaa','aaaaaaab')).toBe(false);

})

it('reutrns true',()=>{
    // empty
    expect(isAnagrams('','')).toBe(true);
    expect(isAnagrams('aaaaa','aaaaa')).toBe(true);
    expect(isAnagrams('baaaaa','aaabaa')).toBe(true);
    expect(isAnagrams('abcdef','fedcba')).toBe(true);
});