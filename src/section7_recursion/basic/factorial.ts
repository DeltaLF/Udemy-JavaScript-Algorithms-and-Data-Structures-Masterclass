const factorial = (n:number):number =>{
    // 0! = 1
    if(n <= 0) return 1;
    return n * factorial(n-1);
}


export {factorial};