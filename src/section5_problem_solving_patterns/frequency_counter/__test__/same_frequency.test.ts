import {sameFrequency} from "../same_frequency";

it('returns false',()=>{
    // different length
    expect(sameFrequency(1,10)).toBe(false);

    // smae length
    expect(sameFrequency(11,10)).toBe(false);
    expect(sameFrequency(11111,11110)).toBe(false);    
});

it('retuns true',()=>{
    // identical
    expect(sameFrequency(1,1)).toBe(true);
    expect(sameFrequency(123,321)).toBe(true);
    expect(sameFrequency(11115555,51515151)).toBe(true);   
});

