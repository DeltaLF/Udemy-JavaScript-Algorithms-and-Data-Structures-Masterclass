import { capitalizeWords } from "../capitalize_words";

it('returns capitalized array',()=>{
    // empty
    // expect(capitalizeWords([])).toEqual([]);
    // one
    expect(capitalizeWords(['a'])).toEqual(['A']);
    // mutiple
    expect(capitalizeWords(['abc','','a'])).toEqual(['ABC','','A']);

});