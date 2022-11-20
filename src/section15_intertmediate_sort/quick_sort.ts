import { SortFunction } from "../section11_sort/__test__/sort.test"

const quickSortSpaceConsuming:SortFunction = (arr) =>{
    // make pivot sort helper function

    const pivotSort = (array:number[]):number =>{
        // [2,4,1,0,3,5] 

        /*
        i=1 pivot =0
        4 > 2 => i++
        1 < 2 => pivot +1 and i swap  [2, 1, 4 ,0, 3, 5]    pivot = 0 + 1   i++
        0 < 2 => pivot +1 and i swap  [2,1, 0, 4,3, 5] pivot =1 + 1 (2) i++
        3 > 2 i++
        5 > 2 i++
        pivot:2 i:6  [2,1,0,4,3,5] 
        0 and pivot swap
        [0,1,[2],4,3,5] //index 2 is sorted
        */
        let pivot = 0;
        let i = 1;
        while(i < array.length){
            if(array[i] < array[0]){
                [array[pivot + 1], array[i]] = [array[i], array[pivot + 1]];
                pivot++;
            }
            i++;
        }
        [array[pivot ],array[0]] = [array[0], array[pivot] ];

       return pivot;        
    }
    if(arr.length <= 1) return arr;
    const pivot = pivotSort(arr); // arr is mutated, arr[pivot] is sorted
    const left =  quickSortSpaceConsuming(arr.slice(0,pivot));
    const right = quickSortSpaceConsuming(arr.slice(pivot + 1)); // + 1 becasue pivot is sorted
    return [...left, arr[pivot], ...right];
}



const quickSort: SortFunction = (arr) =>{
    // [2,1]
    const quickSortHelper = (arr:number[],l:number=0,r:number=arr.length -1):void =>{
        const pivot = pivotSort(arr,l,r);
        if(r - l <= 1) return
        quickSortHelper(arr, l, pivot - 1);
        quickSortHelper(arr,pivot+1, r);
    };
    // [2,1]
    const pivotSort = (arr:number[], l:number,r:number):number=>{
        // mutate the given array to sort the pivot and return the pivot
        // choose the middle number as pivot
        let pivot = l; // choose l as pivot
        let i= l + 1; // index to iterate
        while(i <= r){
            if(arr[i] < arr[l]){
                [arr[pivot + 1],arr[i]] = [arr[i], arr[pivot + 1]];
                pivot++;
            }
            i++;
        }
        [arr[l], arr[pivot]] = [arr[pivot], arr[l]];
        return pivot;                
    }
    quickSortHelper(arr);
    return arr;
}


export { quickSortSpaceConsuming, quickSort };