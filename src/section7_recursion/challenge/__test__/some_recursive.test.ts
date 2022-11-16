import { someRecursive } from "../some_recursive";
const isOdd = (val:number) => val % 2 !== 0;

it('returns false',()=>{
    expect(someRecursive([4, 6, 8],isOdd)).toBe(false);
    expect(someRecursive([4, 6, 8],val=>val > 10)).toBe(false);

});

it('returns true',()=>{
    expect(someRecursive([1,2,3,4],isOdd)).toBe(true);
    expect(someRecursive([1,2,3,4,4,6,8,9],isOdd)).toBe(true);
})
