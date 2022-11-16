/*
flatten
Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
*/
// [1,[2],[3,4]]
// 0
// fallttenOnce = [...[], ...flatten(1)] = [1]
// 1
// flattenOnce = [1, ...flattern([2])]

const flatten = (arr: any):any[] => {
// base
if(!Array.isArray(arr)){
    return [arr]
}
let flattenOnce:any[] = []
for(let data of arr){
    flattenOnce = [...flattenOnce,...flatten(data)]    
}
return flattenOnce

};

export {flatten}