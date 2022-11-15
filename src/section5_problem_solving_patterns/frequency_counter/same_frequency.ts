/*
Frequency Counter - sameFrequency
Write a function called sameFrequency. 
Given two positive integers, find out if the two numbers have the same frequency of digits.
Your solution MUST have the following complexities:

Time: O(N)
*/

const sameFrequency = (num1:number, num2:number):boolean =>{

    // strinify number
    const n1 = num1.toString();
    const n2 = num2.toString();
    if(n1.length !== n2.length) return false

    // crearte record object
    const result:{[key:string]:number} = {};
    // iterate throung n1,n2
    for(let i=0;i<n1.length;i++){
    // +1 for n1
    // -1 for n2
        result[n1[i]] = !!result[n1[i]] ? result[n1[i]] + 1 : 1
        result[n2[i]] = !!result[n2[i]] ? result[n2[i]] - 1 : -1

    }
    // expect all the value inside object should be zero
    for(let key in result){
        if(result[key] !== 0) return false
    }

    return true
}

export { sameFrequency };