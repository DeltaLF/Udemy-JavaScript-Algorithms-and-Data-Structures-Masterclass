import {Queue} from "../queue"


it('tests enqueue method in queue class',()=>{
    // note: the enqueue is added from head
    const queue = new Queue();
    expect(queue.length).toEqual(0);
    expect(queue.enqueue(50)).toEqual(1);
    expect(queue.head?.val).toEqual(50);
    expect(queue.tail?.val).toEqual(50);
    expect(queue.enqueue(100)).toEqual(2);  // 100 -> 50
    expect(queue.head?.val).toEqual(50);
    expect(queue.tail?.val).toEqual(100);
    expect(queue.head?.next?.val).toEqual(100);
})

it('tests dequeue method in queue class',()=>{
    const queue = new Queue();
    // dequeue when empty
    expect(queue.dequeue()).toBeNull;

    // dequeue when only one
    expect(queue.enqueue(50)).toEqual(1);
    expect(queue.dequeue()?.val).toEqual(50);
    expect(queue.length).toEqual(0);

    // dequeue when multiple
    expect(queue.enqueue(50)).toEqual(1);
    expect(queue.enqueue(100)).toEqual(2);
    expect(queue.enqueue(150)).toEqual(3);
    // 50 -> 100 -> 150
    expect(queue.dequeue()?.val).toEqual(50);
    expect(queue.length).toEqual(2);
    expect(queue.head?.val).toEqual(100);
    expect(queue.head?.next?.val).toEqual(150);
    expect(queue.dequeue()?.val).toEqual(100);
    expect(queue.length).toEqual(1);
    expect(queue.head?.val).toEqual(150);
    expect(queue.head?.next).toBeNull();
    expect(queue.dequeue()?.val).toEqual(150);
    expect(queue.length).toEqual(0);
})

