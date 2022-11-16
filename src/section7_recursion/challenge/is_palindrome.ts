
const isPalindrome = (str:string, n:number=0):boolean => {
    // n indicates where am i
    //   n=1 2 3
    //     a b c c b a
    // base case 
    if(str.length <= 1 || str.length/2 < n) return true;
    // check from both head and tail
    return (str[n] === str[str.length - n - 1] ) && isPalindrome(str, n + 1);
};


export {isPalindrome};
