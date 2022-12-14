import { fib } from "../fib";


it('tests fib with dynmic programming appraoch',()=>{

    /*
    0 1 2 3 4 5  6  7  8  9 10
    0 1 1 2 3 5  8 13 21 34 55 89
    */
    expect(fib(0)).toBe(0);
    expect(fib(1)).toBe(1);
    expect(fib(3)).toBe(2);
    expect(fib(5)).toBe(5);
    expect(fib(10)).toBe(55);
})