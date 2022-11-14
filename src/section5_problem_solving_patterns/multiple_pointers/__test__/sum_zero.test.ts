import { sumZero } from "../sum_zero";

it('returns undefined', ()=>{
    // pure postive array
    expect(sumZero([1,2,3])).toBeUndefined();
    // pure negative array
    expect(sumZero([-1,-2,-3])).toBeUndefined();
    // empty and single
    expect(sumZero([])).toBeUndefined();
    expect(sumZero([0])).toBeUndefined();
});

it('returns two number which summation is 0',()=>{
    // length is 2
    const result = sumZero([-1,1]) as number[]
    expect(result).toHaveLength(2)
    expect(result[0] + result[1]).toEqual(0);

    // lots number in between
    const result1 = sumZero([-1000000,-100,0,0,0,0,0,0,0,0,100]) as number[]
    expect(result1).toHaveLength(2)
    expect(result1[0] + result1[1]).toEqual(0);

    // lots postive number 
    const result2 = sumZero([-5,-4,-2,-1,3,5,5,5,5,5,5,5,6,7,8,9,10,10,100]) as number[]
    expect(result2).toHaveLength(2)
    expect(result2[0] + result2[1]).toEqual(0);
});