import { findLongestSubstring } from "../find_longest_substring";

it('returns length of longest unique substring',()=>{
    //empty
    expect(findLongestSubstring('')).toEqual(0);
    // one
    expect(findLongestSubstring('a')).toEqual(1);
    expect(findLongestSubstring('aaaaaaa')).toEqual(1);
    // two
    expect(findLongestSubstring('aabb')).toEqual(2);
    //start
    expect(findLongestSubstring('abcdeeeefgs')).toEqual(5);
    // end
    expect(findLongestSubstring('abcaaabcde')).toEqual(5);
    // all unique
    expect(findLongestSubstring('abcdef')).toEqual(6);
    expect(findLongestSubstring('longestsubstring')).toEqual(8);
    expect(findLongestSubstring('thisishowwedoit')).toEqual(6);
    expect(findLongestSubstring('thecatinthehat')).toEqual(7);
    expect(findLongestSubstring('abcabcbb')).toEqual(3);

})