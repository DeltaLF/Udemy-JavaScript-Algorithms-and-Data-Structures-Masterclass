import { sum } from "..";

it('adds two numbers correctly',()=>{
    const result = sum(1,2);
    expect(result).toEqual(3);    
});

