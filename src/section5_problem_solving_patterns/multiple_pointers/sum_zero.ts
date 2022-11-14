/*
Write a function called sumZero which accepts a sorted array of integers.
The function should find the first pair where the sum is 0. 
Return an array that includes both values that sum to zero or undefined if a pair does not exist
*/

const sumZero = (arr:number[]): number[] | undefined => {
    let l = 0;
    let r = arr.length - 1;
    while(l < r){
        if(arr[l] + arr[r] == 0) return [arr[l],arr[r]]
        if(arr[l] + arr[r] > 0){
            r--
        }else{
            l++
        }
    }
    return undefined
}

export { sumZero }