import {maxSubarraySum} from "../max_subarray_sum"

it('returns null',()=>{
    expect(maxSubarraySum([],1)).toBeNull();
    expect(maxSubarraySum([1,2,3],0)).toBeNull();
    expect(maxSubarraySum([1,2,3],5)).toBeNull();
})

it('returns number',()=>{

    const array = [4,20,1,2,4,200]
    // n = 1
    expect(maxSubarraySum(array,1)).toBe(200);
    expect(maxSubarraySum(array,2)).toBe(204);
    expect(maxSubarraySum(array,3)).toBe(206);
    expect(maxSubarraySum(array,6)).toBe(231);

    const arrayWithNegativeNum = [-5,29,-30,1,4,29,-100]
    expect(maxSubarraySum(arrayWithNegativeNum,1)).toBe(29);
    expect(maxSubarraySum(arrayWithNegativeNum,1)).toBe(29);



});