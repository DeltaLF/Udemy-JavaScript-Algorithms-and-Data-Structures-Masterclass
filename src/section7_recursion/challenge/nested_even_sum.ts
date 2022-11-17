
/*
nestedEvenSum
Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
 */
const nestedEvenSum = (obj:{[key:string]:any}):number => {
    // base case
    if(typeof obj === 'number') return obj % 2 === 0 ? obj : 0;
    if(typeof obj !== 'object') return 0;
    let sum = 0;
    for(let key in obj){
        const subSum = nestedEvenSum(obj[key]);
        if(subSum % 2 === 0){
            sum = sum + subSum;
        }
    }
    return sum;    
};


export { nestedEvenSum };