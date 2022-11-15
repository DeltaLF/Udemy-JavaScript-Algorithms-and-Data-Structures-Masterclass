/*
Given a sorted array of integers, write a function called search, 
that accepts a value and returns the index where the value passed to the function is located. 
If the value is not found, return -1
*/


const search = (arr:number[], target: number):number => {
    if(arr.length === 0 ) return -1;
    // sorted array
    let l = 0;
    let r = arr.length -1;
    let middle:number
    // find target from middle
    while(l<=r){
        middle = Math.floor((l + r)/2);
        if(arr[middle] === target) return middle;
        if(arr[middle] < target){
    // target is larger then middle -> search for right hand side
          l = middle + 1;
        }else{
    // else -> search for left hand side
          r = middle - 1;
        }
    }    
    return -1
}

export {search}