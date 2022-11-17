import { nestedEvenSum } from "../nested_even_sum";

it('returns even sum of nested object', ()=>{
    expect(nestedEvenSum({a:6})).toEqual(6);
    expect(nestedEvenSum({a:5})).toEqual(0);

    const obj1 = {
        outer: 2,
        obj: {
          inner: 2,
          otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
          }
        }
      }
      
    const obj2 = {
      a: 2,
      b: {b: 2, bb: {b: 3, bb: {b: 2}}},
      c: {c: {c: 2}, cc: 'ball', ccc: 5},
      d: 1,
      e: {e: {e: 2}, ee: 'car'}
    }; 
    expect(nestedEvenSum(obj1)).toEqual(6);
    expect(nestedEvenSum(obj2)).toEqual(10);

});