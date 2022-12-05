
function hash(str:string, arrayLength:number):number{
    let result = 0;
    for(let letter of str){
        result = (letter.charCodeAt(0) + result) % arrayLength

    }
    return result
}

/*
Refine our hash function
Only hashes strings (we won't worry about this)
Not constant time - linear in key length
Could be a little more random

*/

function refinedHash(str:string, arrayLength:number):number{
    let result = 0;
    const PRIME_NUMBER = 31;
    for(let i =0; i< Math.min(str.length, 100);i++){
        result = (str[i].charCodeAt(0) + result * PRIME_NUMBER) % arrayLength

    }
    return result
}