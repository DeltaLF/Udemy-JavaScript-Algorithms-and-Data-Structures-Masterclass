
// 1 1 2 3 5 8 13 21 34 55...
const fib = (num:number):number =>{
    if(num <= 2) return 1;
    return fib(num-1) + fib(num-2);
};

export {fib};