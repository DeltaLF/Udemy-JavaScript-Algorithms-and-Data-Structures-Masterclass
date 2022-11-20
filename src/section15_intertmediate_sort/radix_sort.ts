import { SortFunction } from "../section11_sort/__test__/sort.test";

const radixSort:SortFunction = (arr)=>{
   
    const getDigit = (num:number,place:number):number => {
        // accuess the digit number with the specified place
        // return parseInt(num.toString()[place]);
        return Math.floor(Math.abs(num) / Math.pow(10,place -1 )) % 10
    }

    const digitCount = (num:number):number => {
        // return num.toString().length;
        if(num===0) return 1;
        return Math.floor(Math.log10(Math.abs(num))) + 1;
    }

    const mostDigit = (arr:number[]):number=>{
        let max =0;
        arr.forEach((num)=>{
            max = Math.max(max, digitCount(num));
        })
        return max
    }
    /*
    [2,10,9,163,60]
    maxDigit: 3
    i=1 ~ 3
    i=1:
      bucket:
        [0:[10,60], 2:[2],3:[163] 9:[9] ]
      newArray:
        [10,60,2,163,9]
    i=2:
      bucket:
        [0:[2,9] 1:[10], 6:[60,163]]
      newArray:
        [2, 9, 10, 60 ,163]
    i=3:
      bucket:
      [0:[2,9,19,60],1:[163]]
    return [2, 9, 19, 60, 163]
    */
    const maxDigit = mostDigit(arr); 
    for(let i=1;i<=maxDigit;i++){
        // Array.from({length:10},()=>[])
        const bucket = Array(10).fill(0).map(()=>{return []}) as number[][]; 
        for(let num of arr){
            bucket[getDigit(num,i)].push(num);
        }
         arr =([] as number[]).concat(...bucket);
    }

    // hanlde negative number
    const bucket:number[][] = [[],[]]; 

    for(let num of arr){
        if(num >= 0){
            bucket[1].push(num)
        }else{
            bucket[0].push(num)
        }
    }
    arr = []
    for(let i=bucket[0].length -1; i>=0;i--){
        // push negative number reversely
        arr.push(bucket[0][i]);
    }
    arr = [...arr, ...bucket[1]]

    return arr
};

export {radixSort}