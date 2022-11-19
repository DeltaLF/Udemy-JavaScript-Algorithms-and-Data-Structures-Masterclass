import { SortFunction } from "./__test__/sort.test";
/*
find the smallest number and swap it to the left
*/
const selectionSort:SortFunction = (arr)=>{
    // go through the one that is going to be compared (the left most unsorted number) 
    for(let i=0; i < arr.length - 1; i++){ 
        let minIndex = i
        // -1 for that we don't need to make comparison while there is only on number left
        for(let j=i; j < arr.length - 1; j++){
            // start from i
            // i getting larger means the numbers on the left hand side are sorted
            if(arr[j+1] < arr[minIndex]){
                minIndex = j + 1
            }
        }
        if(arr[i] > arr[minIndex]){
            // move the smallest number to the left most
            [arr[i],arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

export {selectionSort}