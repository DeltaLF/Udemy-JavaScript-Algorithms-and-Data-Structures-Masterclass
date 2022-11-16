import { flatten } from "../flatten";

it('returns faltten array',()=>{

    // empty
    expect(flatten([])).toEqual([]);
    expect(flatten([[1,[2,3],4],[5,6],[7],8,[9],[10]])).toEqual([1,2,3,4,5,6,7,8,9,10]);
    expect(flatten([[1],[2],[3]])).toEqual([1,2,3]);
    expect(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])).toEqual([1,2,3]);


});
