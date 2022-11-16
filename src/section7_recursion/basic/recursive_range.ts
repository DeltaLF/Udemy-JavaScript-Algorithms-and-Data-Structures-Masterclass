
const recursiveRange = (num: number):number =>{
    if(num <= 0) return 0;
    return num + recursiveRange(num - 1);
};
export {recursiveRange};