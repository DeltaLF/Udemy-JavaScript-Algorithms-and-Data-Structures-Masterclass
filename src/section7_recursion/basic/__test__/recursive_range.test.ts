import { recursiveRange } from "../../recursive_range";

it('returns summation from 0 to input number',()=>{
    // 0
    expect(recursiveRange(0)).toEqual(0);
    // 1
    expect(recursiveRange(1)).toEqual(1);
    // 5
    expect(recursiveRange(5)).toEqual(15);
    // 10
    expect(recursiveRange(10)).toEqual(55);
});