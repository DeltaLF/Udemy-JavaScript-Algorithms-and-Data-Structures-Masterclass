/*
stringifyNumbers
Write a function called stringifyNumbers which takes in an object and finds all of the values which
 are numbers and converts them to strings. Recursion would be a great way to solve this!
*/
const stringifyNumbers = (obj: any): any=> {
    if(typeof obj === 'number') return (obj as number).toString();
    if(typeof obj !== 'object') return obj;
    for(let key in obj){
        obj[key] = stringifyNumbers(obj[key]);
    }
    return obj

};

export {stringifyNumbers}