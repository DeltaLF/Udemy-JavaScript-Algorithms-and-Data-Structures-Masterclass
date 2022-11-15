/*
Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
The function should calculate the maximum sum of n consecutive elements in the array.

*/

const maxSubarraySum = (arr:number[], n: number): number | null =>{
    if( arr.length === 0 || arr.length < n || n === 0) return null
    // create left and right pointers to mark as window 

    let l = 0
    let sum = 0;
    // get inital sum
    for(let i=0;i < n ;i++){
        sum = sum + arr[i];
    }
    let max = sum;
    // window move through array to find max
    
    for(let i=n; i<arr.length; i++){
        sum = sum + arr[i] - arr[l]
        l++
        if(sum > max){
            max = sum
        }        
    }
    return max
}

export {maxSubarraySum};
