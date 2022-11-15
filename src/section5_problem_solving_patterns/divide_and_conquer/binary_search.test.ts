import { search } from "./binary_search";

it("not found results",() => {
    expect(search([],1)).toEqual(-1);
    expect(search([1,2,3,4],5)).toEqual(-1);    
});

it('returns the correct index', () => {
    // length 1
    expect(search([1],1)).toEqual(0);
    // length 2
    expect(search([1,2],1)).toEqual(0);
    expect(search([1,2],2)).toEqual(1);
    // lots duplicated
    expect(search([1,1,1,1,1,1,1,1,1],1)).toEqual(4);

    // normal case
    expect(search([1,2,3,4,5,6,7,8,9,10],5)).toEqual(4);
    expect(search([1,2,3,4,5,6,7,8,9,10],1)).toEqual(0);
    expect(search([1,2,3,4,5,6,7,8,9,10],10)).toEqual(9);
   


});