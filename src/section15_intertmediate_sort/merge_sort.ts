import {SortFunction } from "../section11_sort/__test__/sort.test"

// [2,1]
const mergeSort:SortFunction = (arr) => {
    const merge = (sortedArr1:number[], sortedArr2:number[]):number[]=>{
        // [1]  []
        const newSortedArray:number[] = [];
        //index to iterate through arr1, arr2
        let i =0;
        let j =0;
        while(i < sortedArr1.length && j < sortedArr2.length){
            if(sortedArr1[i] > sortedArr2[j]){
                newSortedArray.push(sortedArr2[j])
                j++;
            }else{
                newSortedArray.push(sortedArr1[i])
                i++;
            }}
            while(i < sortedArr1.length){
                newSortedArray.push(sortedArr1[i])
                i++
            }
            while(j < sortedArr2.length){
                newSortedArray.push(sortedArr2[j])
                j++
            }
            return newSortedArray
    }
    // divide arr into two
    // [2,3,5,6,1,5,2,2]
    if(arr.length<=1) return arr // [],[n] are considered sorted
    const middle = Math.floor(arr.length/2);
    const leftArray = arr.slice(0,middle)
    const rightArray = arr.slice(middle,arr.length)
    return merge(mergeSort(leftArray),mergeSort(rightArray));
}

export {mergeSort}