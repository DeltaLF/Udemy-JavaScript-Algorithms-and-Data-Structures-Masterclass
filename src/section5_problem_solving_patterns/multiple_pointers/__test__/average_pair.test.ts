import { averagePair } from "../average_pair";

it('returns fasle',() => {
    // empty
    expect(averagePair([],0)).toBe(false);    
    // one
    expect(averagePair([1],1)).toBe(false);
    // normal cases
    expect(averagePair([1,2,3],0)).toBe(false);
    expect(averagePair([1,2],1)).toBe(false);
});

it('returns true',() => {
    expect(averagePair([1,2,3],2)).toBe(true);
    expect(averagePair([1,2,3],1.5)).toBe(true);
    expect(averagePair([1,2,3],2.5)).toBe(true);
    // duplicated numbers
    expect(averagePair([1,1,1,1,1],1)).toBe(true);
});