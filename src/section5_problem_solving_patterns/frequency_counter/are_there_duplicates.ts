/*
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
and checks whether there are any duplicates among the arguments passed in.  
You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Restrictions:
Time - O(n)
Space - O(n)

Bonus:
Time - O(n log n)
Space - O(1)
*/

// assume 1 == '1'
const areThereDuplicatedII = (...args:(number|string)[]):boolean => {
    // keep record
    const result:{[key:string]:boolean} = {};
    for(let arg of args){
        const stringArg = arg.toString();
        if(!!result[stringArg]) return true
        result[stringArg] = true;
    }
    return false
}


const areThereDuplicated = (...args:(number|string)[]):boolean => {
    args.sort();
    for(let i=0;i<args.length - 1;i++ ){
        if(args[i].toString() === args[i+1].toString()) return true
    }
    return false    
}


export {areThereDuplicated, areThereDuplicatedII}