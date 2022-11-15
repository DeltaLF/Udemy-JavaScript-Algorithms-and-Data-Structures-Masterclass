import { areThereDuplicated } from "../are_there_duplicates";

it('returns false',()=>{
    // only one string or number input
    expect(areThereDuplicated(1)).toBe(false);
    expect(areThereDuplicated('1')).toBe(false);
    expect(areThereDuplicated('1',2,"asfsa",'12','a')).toBe(false);
});


it('returns true',()=>{
        // expect 1 == '1'
        expect(areThereDuplicated('1',1)).toBe(true);
        expect(areThereDuplicated('1',2,"asfsa",'12','a',2)).toBe(true);     
});