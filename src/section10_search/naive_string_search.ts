
const naiveStringSearch = (str:string,target:string):number=>{
    // brtual forece
    let count = 0;
    for(let i=0;i < str.length; i++){
        console.log(`str:${str} target:${target} i:${i} `);
        for(let j =0; j < target.length; j++){
            if( str[i + j] !== target[j]){
                break;
            }
            if(j === (target.length - 1)){
                // totally matched
                count += 1
                i = i + j  // no need to + 1 bc for loop will do it
            }
        }
    }
    
    return count;
};
export {naiveStringSearch}