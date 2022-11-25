import {PriorityQueue,Node} from "../priority_queue";

it('tests priorityQueue enqueue method',()=>{
    // init
    const priorityQueue = new PriorityQueue();
    expect(priorityQueue.values).toEqual([]);
    expect(priorityQueue.enqueue("e",5)).toEqual([new Node('e',5)]);
    // in order enqueue
    expect(priorityQueue.enqueue("c",3)).toEqual([new Node('e',5),new Node('c',3)]);
    // needed swap
    /*  
       10
       / \
      3   5
    */
    expect(priorityQueue.enqueue("j",10)).toEqual([new Node('j',10),new Node('c',3),new Node('e',5)]);
    expect(priorityQueue.enqueue("a",1)).toEqual([new Node('j',10),new Node('c',3),new Node('e',5),new Node('a',1)]);
    expect(priorityQueue.enqueue("d",4)).toEqual([new Node('j',10),new Node('d',4),new Node('e',5),new Node('a',1),new Node('c',3)]);
    /*
       10
       / \
      4   5
     / \ / \
    1  3 
     */

    expect(priorityQueue.enqueue("k",11)).toEqual([new Node('k',11),new Node('d',4),new Node('j',10),new Node('a',1),new Node('c',3),new Node('e',5)]);
    expect(priorityQueue.enqueue("o",15)).toEqual([new Node('o',15),new Node('d',4),new Node('k',11),new Node('a',1),new Node('c',3),new Node('e',5),new Node('j',10)]);   


});

it('tests priorityQueue dequeue method',()=>{
    // init 
    const priorityQueue = new PriorityQueue();
    // empty
    expect(priorityQueue.dequeue()).toBeUndefined();
    priorityQueue.enqueue("g",7);
    priorityQueue.enqueue("f",6);
    priorityQueue.enqueue("e",5);
    priorityQueue.enqueue('d',4);
    priorityQueue.enqueue('c',3);
    priorityQueue.enqueue('b',2);
    priorityQueue.enqueue("a",1);
        /*
        7
       / \
      6   5
     / \ / \
    4  3 2  1 
     */
    expect(priorityQueue.dequeue()?.priority).toEqual(7);
    expect(priorityQueue.values).toEqual([new Node('f',6),new Node('d',4),new Node('e',5),new Node('a',1),new Node('c',3),new Node('b',2)])
    expect(priorityQueue.dequeue()?.priority).toEqual(6);
    expect(priorityQueue.values).toEqual([new Node('e',5),new Node('d',4),new Node('b',2),new Node('a',1),new Node('c',3)])
    expect(priorityQueue.dequeue()?.priority).toEqual(5);
    expect(priorityQueue.values).toEqual([new Node('d',4),new Node('c',3),new Node('b',2),new Node('a',1)])
    expect(priorityQueue.dequeue()?.priority).toEqual(4);
    expect(priorityQueue.values).toEqual([new Node('c',3),new Node('a',1),new Node('b',2)])
    expect(priorityQueue.dequeue()?.priority).toEqual(3);
    expect(priorityQueue.values).toEqual([new Node('b',2),new Node('a',1)])
    expect(priorityQueue.dequeue()?.priority).toEqual(2);
    expect(priorityQueue.values).toEqual([new Node('a',1)])
    expect(priorityQueue.dequeue()?.priority).toEqual(1);
    expect(priorityQueue.values).toEqual([])

})