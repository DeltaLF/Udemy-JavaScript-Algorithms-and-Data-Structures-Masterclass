/*
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the 
integer passed to the function. If there isn't one, return 0 instead.
 */
const minSubArrayLen = (arr:number[],n:number):number => {
    // arr, n are all positive
    if(arr.length === 0 ) return 0;
    // left and right pointer
    let l = 0;
    let r = 1;
    // min length
    let minLen = Infinity;
    let sum:number = arr[l];
    // iterate through arr 

    while(r <= arr.length){
        console.log(`${arr} target:${n} l:${l} r:${r} sum: ${sum} minLen:${minLen} `)
        if(sum >= n){
            minLen = Math.min(minLen, r - l);
            if(minLen === 1) return 1
        }
        if(sum >= n){
    // if sum is large enough : move l

            sum = sum - arr[l];
            l++;
            continue
        }
        if(r === arr.length ) break;
        if(sum < n){
    // if size is not large enough : move r
            sum = sum + arr[r];
            r++;
        }

    }

    return isFinite(minLen) ? minLen : 0;        
};

export {minSubArrayLen};