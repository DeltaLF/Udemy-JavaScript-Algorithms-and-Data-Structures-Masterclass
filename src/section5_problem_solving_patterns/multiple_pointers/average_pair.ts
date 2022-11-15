/*
Multiple Pointers - averagePair
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:
Time: O(N)
Space: O(1)
*/


const averagePair = (arr:number[],target:number):boolean=>{
    if(arr.length < 2 )return false;
    // init left and right pointers
    let l = 0;
    let r = arr.length -1;
    let average: number
    // iterate through to find matched pairs
    while(l < r){
        average = (arr[l] + arr[r]) / 2; 
        if(  average === target ) return true;
        if( average > target ){
    // if avarage > target -> decrease right
            r = r - 1;
        }else{
    // else increase left
            l = l + 1;
        }
    }
    return false
};


export {averagePair};