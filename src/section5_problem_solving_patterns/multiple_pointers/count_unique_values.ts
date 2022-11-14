/*
countUniqueValues
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
There can be negative numbers in the array, but it will always be sorted.
*/

const countUniqueValues = (arr:number[]):number =>{
    let count = 0
    const result:{[key:string]:boolean} = {};
    arr.forEach((num)=>{
        const strNum =num.toString();
        if(!result[strNum]){
            count+=1
            result[strNum] = true;
        }
    });

    return count
}

const countUniqueValuesLessSpace  = (arr:number[]):number =>{
    if(arr.length === 0) return 0

    // use two pointer to replace recorder object
    let count = 1;
    let ind = 0;
    
    arr.forEach((num,index)=>{
        if(num !== arr[index + 1] && index + 1  < arr.length){
            count++;
        }

    })
    return count
}

export { countUniqueValues ,countUniqueValuesLessSpace};