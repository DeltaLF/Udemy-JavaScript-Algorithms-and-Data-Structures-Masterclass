import {same} from "../frequency_counters"

it('returns false for not matched frquency',()=>{
    expect(same([],[1])).toBe(false);
    expect(same([1,2],[1,4,1])).toBe(false);
    expect(same([1,2],[1,4,4])).toBe(false);
});

it('returns true ',()=>{
    // empty input
    expect(same([],[])).toBe(true);
    expect(same([7,4],[49,16])).toBe(true);
    expect(same([4,7],[49,16])).toBe(true);
    expect(same([1,1,1,1,1],[1,1,1,1,1])).toBe(true);
})