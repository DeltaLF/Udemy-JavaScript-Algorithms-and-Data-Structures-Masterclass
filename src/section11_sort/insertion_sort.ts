import { SortFunction } from "./__test__/sort.test";

/*
build up the sort group on the left hand side
*/

const insertSort:SortFunction = (arr)=>{
    // [{sorted part}, unsorted part] 
    // when there is a new unsorted number comes to sorted part, we need to find the right position for it
    for(let i= 1; i < arr.length; i++){ // go through the unsorted part and put them in the sorted part gradually
        let unsortedNum = arr[i]
        /*
        // i start from 1 because one number is considered sorted
        for(let j=0; j < i; j++){ // go through the sorted part to choose the right position for the new numbmer
            // i is the new comer
            if(arr[i] > arr[i-1]) break;
            if(arr[j] > arr[i]){
                [arr[j],arr[i]] = [arr[i], arr[j]] 
            }
        }*/
        
        // approach II: go through the sorted part from large to small
        for(var j = i -1; j >= 0 && arr[j] > unsortedNum; j--){
            arr[j+1] = arr[j]  // move sorted num to right to make soace for new unsortedNum
        }
        arr[j + 1] = unsortedNum
    }
    return arr
};

export {insertSort};