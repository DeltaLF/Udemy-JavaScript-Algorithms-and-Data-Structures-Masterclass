import { productOfArray } from "../product_of_array";

it('returns product of input array',()=>{
    // empty
    expect(productOfArray([])).toEqual(0);
    // 1
    expect(productOfArray([5])).toEqual(5);
    // n
    expect(productOfArray([2,3,5,6])).toEqual(180);
    // 0
    expect(productOfArray([100,20,2,2,1,4,2,24,0,9])).toEqual(0);
    // duplicated
    expect(productOfArray([1,1,1,1,1,1,1,1])).toEqual(1);


});