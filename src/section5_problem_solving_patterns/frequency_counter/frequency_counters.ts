/*
Write a function called same, which accepts two arrays. 
The function should return true if every value in the array has it's corresponding value squared in the second array. 
The frequency of values must be the same.

note:
1. every number in seocond array should have integer square root
2. frequecny means one number must correspond to exatct one square
*/


const same = (arr1: number[], arr2:number[]):boolean => { 
    if(arr1.length != arr2.length) return false
    const result:{[key:string]:number} = {};

    for(let ind=0; ind < arr1.length;ind ++){
        const val1 = arr1[ind].toString()
        const val2 = Math.sqrt(arr2[ind]).toString()
        result[val1] = result[val1] ?  result[val1] + 1 : 1
        result[val2] = result[val2] ?  result[val2] - 1 : -1

    }
    
    for(let key in result){
        if(result[key] !== 0) return false
    }

    return true
}

export { same }