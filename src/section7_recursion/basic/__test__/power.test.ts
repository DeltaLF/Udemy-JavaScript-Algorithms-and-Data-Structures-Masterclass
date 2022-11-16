import { power } from "../power";

it('returns the expected power number', ()=>{
    // ruturn 1 for all power 0
    expect(power(1,0)).toEqual(1);
    expect(power(2,0)).toEqual(1);
    expect(power(3,0)).toEqual(1);
    // return base for power 1
    expect(power(1,1)).toEqual(1);
    expect(power(2,1)).toEqual(2);
    expect(power(3,1)).toEqual(3);
    // return squre of base
    expect(power(1,2)).toEqual(1);
    expect(power(2,2)).toEqual(4);
    expect(power(3,2)).toEqual(9);
    expect(power(10,2)).toEqual(100);
});