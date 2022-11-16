
const someRecursive = (arr:number[], callback:(n:number)=>boolean):boolean => {
    if(arr.length === 0 ) return false;
    return callback(arr.pop()!) || someRecursive(arr,callback);
}


export { someRecursive };