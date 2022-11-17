import { capitalizeFirst } from "../capitalize_first";

it('retuns array with first letter capitalized',()=>{
    // empty
    expect(capitalizeFirst([])).toEqual([]);
    // one
    expect(capitalizeFirst(['a'])).toEqual(['A']);
    // mutiple
    expect(capitalizeFirst(['abc','','a'])).toEqual(['Abc','','A']);

});