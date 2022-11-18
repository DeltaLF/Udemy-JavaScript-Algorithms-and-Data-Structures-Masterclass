import { naiveStringSearch } from "../naive_string_search";

it('returns 0 substring count',()=>{
    // empty
    expect(naiveStringSearch("","abc")).toEqual(0);
    expect(naiveStringSearch("ab","abc")).toEqual(0);
    expect(naiveStringSearch("aaaa","aaaaa")).toEqual(0);
});


it('returns correct substring count',()=>{
    // one
    expect(naiveStringSearch("a","a")).toEqual(1);
    // duplicated
    expect(naiveStringSearch("aaaaaa","a")).toEqual(6);
    // duplciated mutiple
    expect(naiveStringSearch("aaaa","aa")).toEqual(2);
    // different combinations
    expect(naiveStringSearch("abcafsabasabcvgsafvaabcagasabc","abc")).toEqual(4);
});