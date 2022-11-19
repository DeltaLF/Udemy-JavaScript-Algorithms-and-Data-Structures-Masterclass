import { SortFunction } from "./__test__/sort.test";

/*
bubble:
  float the larger nubmer to right
*/

const bubbleSort:SortFunction = (arr) => { // void: for mutation
    // asencd
    // let temp:number
    for(let i = 0; i< arr.length - 1 ;i++){ // totally i -1 numbers to be sort
        // i = 0 => the first number to be sorted
        let isSwapped = false;
        for(let j=0; j < arr.length - i -1;j++){
            // j: j times of comparison needs to be made to sort one number
            if( arr[j] > arr[j+1] ){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                isSwapped = true;
                // temp = arr[j];
                // arr[j] = arr[j + 1];
                // arr[j + 1] = temp;
            }
        }
        if(!isSwapped) return arr
    }
    return arr
};


export {bubbleSort}