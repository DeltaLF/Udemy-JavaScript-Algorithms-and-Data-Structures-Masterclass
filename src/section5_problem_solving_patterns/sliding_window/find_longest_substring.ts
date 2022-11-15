
const findLongestSubstringII = (str:string):number => {
    if(str.length === 0) return 0;
    // object as record key: leeter of str value: position
    // init left, right result
    let left = 0;
    let right = 1;
    let max = 1;
    let object: {[key:string]:number} = {
        [str[0]]: 0 // frist letter
    }    
    // iterate through str
    for(let i = 1; i < str.length;i++){        
        if(!!object[str[i]] || object[str[i]] === 0){
            left = object[str[i]]; 
            right = left;
            object = {};
            i = left;
            continue
        }
        object[str[i]] = i;
        right = right + 1;
        max = Math.max(max, right - left);
    }
    return max;

    // if duplicte

    // left move to duplicated + 1
    // reset reulst obj
    // reset index

    //if not duplicate
    // add right


};


const findLongestSubstring = (str:string):number=>{
    const result:{[key:string]:number} = {};
    let maxLength = 0;
    let index = -1; // left window -1
    for(let i=0; i < str.length ; i++){
        if(result[str[i]] > index){  // records on the left are abandoned
            // duplicated
            index = result[str[i]];  
            result[str[i]] = i;                        
        }
        result[str[i]] = i;
        maxLength = Math.max(maxLength, i - index);
    }
    return maxLength;
}

export { findLongestSubstring };