
const reverse = (str:string):string => {
    if(str.length === 0) return ''
    const reverseStr = str[str.length - 1];
    return reverseStr + reverse(str.slice(0,str.length - 1));
};


export { reverse };