import { bubbleSort } from "../bubble_sort";
import { selectionSort } from "../selection_sort";
import { insertSort } from "../insertion_sort";
// intermeditae sort
import {mergeSort} from "../../section15_intertmediate_sort/merge_sort";
import { quickSort } from "../../section15_intertmediate_sort/quick_sort";
import { radixSort } from "../../section15_intertmediate_sort/radix_sort";

export type SortFunction = (arr:number[])=>number[]

const mutationSort = (sort:SortFunction):SortFunction => {
    return sort
}

// modify argument while testing different implementations of sorting function
const sortI = mutationSort(bubbleSort); 
const sortII = mutationSort(selectionSort); 
const sortIII = mutationSort(insertSort); 
const sortIV = mutationSort(mergeSort); 
const sortV = mutationSort(quickSort); 
const sort = mutationSort(radixSort); 


it('returns a sorted number array',()=>{
    // empty
    expect(sort([])).toEqual([]);
    // one
    expect(sort([1])).toEqual([1]);
    // two
    expect(sort([1,2])).toEqual([1,2]);
    expect(sort([2,1])).toEqual([1,2]);
    // dupluicted nubmer
    expect(sort([1,1,1,1,1,1])).toEqual([1,1,1,1,1,1]);
    expect(sort([1,1,1,2,4,2,3,-1])).toEqual([-1,1,1,1,2,2,3,4]);
    // only first unsorted
    expect(sort([10,1,1,1,1,1,2,3,4,4,5,6,7,8])).toEqual([1,1,1,1,1,2,3,4,4,5,6,7,8,10]);
    // only last unsorted
    expect(sort([1,1,1,1,1,2,3,4,4,5,6,7,8,-1])).toEqual([-1,1,1,1,1,1,2,3,4,4,5,6,7,8]);
    // reverse
    expect(sort([10,8,7,6,5,4,4,3,2,1,1,1,1,1,-1])).toEqual([-1,1,1,1,1,1,2,3,4,4,5,6,7,8,10]);
})