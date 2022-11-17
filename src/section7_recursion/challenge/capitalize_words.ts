/*
capitalizeWords
Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
*/

const capitalizeWordsHp = (arr:string[]):string[] =>{
    // note: return a new array
    // assume that we don't have to consider nested conditions
    const newArray:string[] = []
    // help recursive function
const helper = (index:number=0):void=>{
    if(index > arr.length - 1) return
    let result:string = '';

    if(!!arr[index]){
        result = arr[index].toUpperCase();
    }    
    newArray.push(result)
    helper(index + 1);
}
    helper();
    return newArray

};



// without help function only one paramter
const capitalizeWords = (arr:string[]):string[]=>{
    console.log("arr",arr)
    // base case array with 
    if(arr.length === 1) return [arr[0].toUpperCase()];
    const newArray = arr.slice(1,arr.length);
    return [arr[0].toUpperCase(), ...capitalizeWords(newArray)]
}

export {capitalizeWords}
