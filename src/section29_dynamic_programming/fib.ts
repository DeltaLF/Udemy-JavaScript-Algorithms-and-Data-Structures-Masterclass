
function fib(n:number):number{
    // from down to top
    const memoizedArr:number[] = [0,1];
    let num = 2;
    while( num <= n){
        memoizedArr[num] = memoizedArr[num - 1] + memoizedArr[num - 2];
        num ++;
    }
    return memoizedArr[n];
};


function fibTopDown(n:number):number{

    const memoizedArr:number[] = [0, 1];

    function helper(num:number):number{
        if( memoizedArr[num] === undefined ){
            memoizedArr[num] = helper(num - 1) + helper(num -2);
        }
        return memoizedArr[num];
    };
    return helper(n);
};


export {fib};


