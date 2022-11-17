/*
collectStrings
Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string
*/

const collectStrings = (object:{[key: string] :any}): string[]=>{
    const strArray:string[] = [];
    const helper = (obj:{[key: string] :any}):void =>{
        if(typeof obj === 'string'){
            strArray.push(obj);
            return
        }
        if(typeof obj === 'object'){
        for(let key in obj){
            helper(obj[key]);
        }
      }
    }  
    helper(object)      
    return strArray;
}

export {collectStrings}