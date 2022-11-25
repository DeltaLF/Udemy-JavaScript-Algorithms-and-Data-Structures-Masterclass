import { Heap } from "../binary_heaps";

it('tests heap insert method',()=>{
    // init
    const heap = new Heap();
    expect(heap.values).toEqual([]);
    expect(heap.insert(5)).toEqual([5]);
    // in order insert
    expect(heap.insert(3)).toEqual([5,3]);
    // needed swap
    /*  
       10
       / \
      3   5
    */
    expect(heap.insert(10)).toEqual([10,3,5]);

    expect(heap.insert(4)).toEqual([10,4,5,3]);
    expect(heap.insert(1)).toEqual([10,4,5,3,1]);
    /*
       10
       / \
      4   5
     / \ / \
    3  1 
     */
    expect(heap.insert(11)).toEqual([11,4,10,3,1,5]);
    expect(heap.insert(15)).toEqual([15,4,11,3,1,5,10]);   


});

it('tests heap remove method',()=>{
    // init 
    const heap = new Heap();
    // empty
    expect(heap.remove()).toBeUndefined();
    heap.insert(7);
    heap.insert(6);
    heap.insert(5);
    heap.insert(4);
    heap.insert(3);
    heap.insert(2);
    heap.insert(1);
        /*
        7
       / \
      6   5
     / \ / \
    4  3 2  1 
     */
    expect(heap.remove()).toEqual(7);
    expect(heap.values).toEqual([6,4,5,1,3,2])
    expect(heap.remove()).toEqual(6);
    expect(heap.values).toEqual([5,4,2,1,3])
    expect(heap.remove()).toEqual(5);
    expect(heap.values).toEqual([4,3,2,1])
    expect(heap.remove()).toEqual(4);
    expect(heap.values).toEqual([3,1,2])
    expect(heap.remove()).toEqual(3);
    expect(heap.values).toEqual([2,1])
    expect(heap.remove()).toEqual(2);
    expect(heap.values).toEqual([1])
    expect(heap.remove()).toEqual(1);
    expect(heap.values).toEqual([])

})