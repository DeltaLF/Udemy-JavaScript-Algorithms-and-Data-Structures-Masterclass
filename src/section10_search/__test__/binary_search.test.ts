import {binarySearch} from "../binary_search";

it('does not find the target so returns -1',()=>{
    // empty
    expect(binarySearch([],1)).toEqual(-1);
    expect(binarySearch([1,2,3,4],5)).toEqual(-1);
    expect(binarySearch([1,1,1,1,1,1,1,1,1,3],2)).toEqual(-1);

});

it('fin the target value and returns the index',()=>{
    // one
    expect(binarySearch([1],1)).toEqual(0);
    // two
    expect(binarySearch([1,2],1)).toEqual(0);
    expect(binarySearch([1,2],2)).toEqual(1);

    // duplciated (should match the one in the middle)
    // even
    expect(binarySearch([1,1,1,1],1)).toEqual(1);
    // odd
    expect(binarySearch([1,1,1,1,1],1)).toEqual(2);
    // multiple
    // target at head
    expect(binarySearch([1,2,2,3,3,44,55,100],1)).toEqual(0);    
    // target at tail
    expect(binarySearch([1,2,2,3,3,44,55,100],100)).toEqual(7);    

    
});