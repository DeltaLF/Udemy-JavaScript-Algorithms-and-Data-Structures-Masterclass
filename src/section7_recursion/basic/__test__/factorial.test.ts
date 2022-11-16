import { factorial } from "../../factorial";

it('returns the factorial of the input number',()=>{
    // 0
    expect(factorial(0)).toEqual(1);
    expect(factorial(1)).toEqual(1);
    expect(factorial(2)).toEqual(2);
    expect(factorial(4)).toEqual(24);
    expect(factorial(5)).toEqual(120);
    expect(factorial(6)).toEqual(720);
});