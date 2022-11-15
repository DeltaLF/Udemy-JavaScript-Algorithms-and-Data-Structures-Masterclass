/*
Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Your solution MUST have AT LEAST the following complexities:
Time Complexity - O(N + M)
Space Complexity - O(1)
*/

const isSubsequence = (str1:string, str2:string):boolean =>{
    // is str1 subsequene of str2
    if(str1.length > str2.length) return false;
    // pointer on str1
    let p = 0;
    // iterate through str2
    for(let i = 0; i < str2.length; i++){
    // if matched str1 move forward
        if(str1[p] === str2[i]){
            p++;
        }
    }
    // true if pointer reaches to end of str1
    return str1.length === p
    

}

export {isSubsequence}
