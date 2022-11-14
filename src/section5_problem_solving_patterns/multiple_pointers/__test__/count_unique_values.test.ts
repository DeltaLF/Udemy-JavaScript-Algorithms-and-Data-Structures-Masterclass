import { countUniqueValues, countUniqueValuesLessSpace } from "../count_unique_values";

const mutipleApproach = (arr:number[]):number=>{
    const ans1 = countUniqueValues(arr);
    const ans2 = countUniqueValuesLessSpace(arr);
    if(ans1 !== ans2){
        throw new Error('Some one must be wrong');
    }
    return ans1
}

it('returns number',()=>{
    // 0
    expect(mutipleApproach([])).toEqual(0);
    // one 
    expect(mutipleApproach([0])).toEqual(1);
    // one unique
    expect(mutipleApproach([1,1,1,1,1,1,1,1,1,1,1,1])).toEqual(1);
    // all different 
    expect(mutipleApproach([-2,-1,0,1,2])).toEqual(5);
    // part duplicated
    expect(mutipleApproach([0,0,0,0,1,2,3])).toEqual(4);
});