import {linearSearch} from "../linear_search";

it('does not find the target so returns -1',()=>{
    // empty
    expect(linearSearch([],1)).toEqual(-1);
    // input string but only number
    expect(linearSearch(['1',2,3,4],1)).toEqual(-1);
    

});

it('fin the target value and returns the index',()=>{
    // one
    expect(linearSearch([1],1)).toEqual(0);
    // duplciated
    expect(linearSearch([1,1,1,1],1)).toEqual(0);
    // multiple types
    expect(linearSearch([1,2,3,3,44,5,"agd","abc",1,"aaa",1],"aaa")).toEqual(9);    

    
});