/*
ANAGRAMS
Given two strings, write a function to determine if the second string is an anagram of the first.
 An anagram is a word, phrase, or name formed by rearranging the letters of another, 
 such as cinema, formed from iceman

*/

const isAnagrams = (str1:string, str2:string):boolean => {
    if(str1.length !== str2.length )return false
    const str1Count:{[key:string]:number} = {}
    for(let c of str1){
        str1Count[c] = str1Count[c] + 1 || 1;
    }
    for(let c of str2){
        if(!str1Count[c]) return false
        str1Count[c] = str1Count[c] - 1
    }
    return true
}

export {isAnagrams}