import { minSubArrayLen } from "../min_sub_array_len";

it('returns 0',()=>{
    // empty
    expect(minSubArrayLen([],1)).toEqual(0);
    expect(minSubArrayLen([1],2)).toEqual(0);
    expect(minSubArrayLen([1,2,3,1,24,4,1,2,5,2,4],50)).toEqual(0);
    expect(minSubArrayLen([1,1,1,1,1,1],7)).toEqual(0);    
})

it('returns correct number',()=>{
    // one
    expect(minSubArrayLen([1],1)).toEqual(1);
    // take all
    expect(minSubArrayLen([1,1,1],3)).toEqual(3);
    expect(minSubArrayLen([1,2,3],6)).toEqual(3);
    expect(minSubArrayLen([1,12,2,3,241,2,2,4,2,21,14,2,421,1,2],423)).toEqual(2);
    expect(minSubArrayLen([2,3,1,2,4,3],7)).toEqual(2);

});