import { Node, DoublyLinkedList} from "../double_linked_list"

it('is able to initialize node with different type',()=>{
    const numNode = new Node(50);
    expect(numNode).toBeDefined;
    expect(numNode.val).toEqual(50);
    expect(numNode.next).toBeNull();
    expect(numNode.prev).toBeNull();
    const stringNode = new Node('Hey');
    expect(stringNode).toBeDefined();
    expect(stringNode.val).toEqual('Hey');
    expect(numNode.next).toBeNull();
    expect(numNode.prev).toBeNull();
})

it('tests doubly linked list push and pop method',()=>{
    const linkedList = new DoublyLinkedList();
    const empty = linkedList.pop();
    expect(empty).toBeUndefined();
    linkedList.push(50);
    expect(linkedList.head?.val).toEqual(50);
    expect(linkedList.head?.next).toBeNull();
    expect(linkedList.head?.prev).toBeNull();
    expect(linkedList.tail?.val).toEqual(50);
    expect(linkedList.length).toEqual(1);
    expect(linkedList.head).toEqual(linkedList.tail);
    linkedList.push(100);
    expect(linkedList.head?.val).toEqual(50);
    expect(linkedList.head?.prev).toBeNull();
    expect(linkedList.tail?.val).toEqual(100);    
    expect(linkedList.tail?.prev?.val).toEqual(50);
    expect(linkedList.length).toEqual(2);
    expect(linkedList.head).not.toEqual(linkedList.tail);
    linkedList.push(150);
    expect(linkedList.head?.val).toEqual(50);
    expect(linkedList.head?.prev).toBeNull();
    expect(linkedList.tail?.val).toEqual(150);
    expect(linkedList.tail?.prev?.val).toEqual(100);
    expect(linkedList.tail?.prev?.prev?.val).toEqual(50);
    expect(linkedList.length).toEqual(3);
    expect(linkedList.head).not.toEqual(linkedList.tail);
    const pop150 = linkedList.pop();
    expect(pop150).toEqual(150);
    expect(linkedList.tail?.prev?.val).toEqual(50);
    expect(linkedList.length).toEqual(2); 
    const pop100 = linkedList.pop();
    expect(pop100).toEqual(100);
    expect(linkedList.head?.next).toBeNull();
    expect(linkedList.head?.prev).toBeNull();
    expect(linkedList.tail?.next).toBeNull();
    expect(linkedList.tail?.prev).toBeNull();
    expect(linkedList.length).toEqual(1); 
    const pop50 = linkedList.pop();
    expect(pop50).toEqual(50);
    expect(linkedList.length).toEqual(0); 
    const popUnd = linkedList.pop();
    expect(popUnd).toBeUndefined();
    expect(linkedList.length).toEqual(0); 
})

it('tests doubly linked list shift method',()=>{
    const linkedList = new DoublyLinkedList();
    expect( linkedList.shift()).toBeUndefined();
    linkedList.push(50);
    linkedList.push(100);
    linkedList.push(150);
    let tail = linkedList.tail;
    expect(linkedList.length).toEqual(3); 
    const shift50 = linkedList.shift();
    expect(linkedList?.head?.prev).toBeNull();
    expect(shift50).toEqual(50);
    expect(linkedList.length).toEqual(2); 
    tail = linkedList.tail;
    expect(tail).toBeDefined()
    expect(tail).toEqual(linkedList.tail);

    const shift100 = linkedList.shift();
    expect(linkedList?.head?.prev).toBeNull();
    expect(linkedList?.head?.next).toBeNull();
    expect(linkedList?.tail?.prev).toBeNull();
    expect(linkedList?.tail?.next).toBeNull();
    expect(shift100).toEqual(100);
    expect(linkedList.length).toEqual(1); 
    tail = linkedList.tail;
    expect(tail).toBeDefined()
    expect(tail).toEqual(linkedList.tail);

    const shift150 = linkedList.shift();
    expect(shift150).toEqual(150);
    tail = linkedList.tail;
    expect(linkedList.length).toEqual(0); 
    expect(tail).toBeNull();
    const shiftUnd = linkedList.pop();
    expect(shiftUnd).toBeUndefined();
    expect(linkedList.length).toEqual(0); 
})

it('tests doubly linked list unshift method',()=>{
    const linkedList = new DoublyLinkedList();

    expect(linkedList.unshift(50)).toEqual(linkedList);
    expect(linkedList?.head?.prev).toBeNull();
    expect(linkedList?.head?.next).toBeNull();
    expect(linkedList?.tail?.prev).toBeNull();
    expect(linkedList?.tail?.next).toBeNull();
    expect(linkedList.head?.val).toEqual(50);
    expect(linkedList.tail?.val).toEqual(50);
    expect(linkedList.length).toEqual(1);
    expect(linkedList.head).toEqual(linkedList.tail);
    expect(linkedList.unshift(100)).toEqual(linkedList);
    expect(linkedList?.head?.prev).toBeNull();
    expect(linkedList?.head?.next).not.toBeNull();
    expect(linkedList?.tail?.prev).not.toBeNull();
    expect(linkedList?.tail?.next).toBeNull();
    expect(linkedList.head?.val).toEqual(100);
    expect(linkedList.tail?.val).toEqual(50);
    expect(linkedList.length).toEqual(2);
    expect(linkedList.head).not.toEqual(linkedList.tail);
})

it('tests get method in doubly linked list',()=>{
    const linkedList = new DoublyLinkedList();
    const empty = linkedList.get(0);
    expect(empty).toBeNull();
    linkedList.push(50);
    linkedList.push(100);
    linkedList.push(200);
    const negativeGet = linkedList.get(-1);
    expect(negativeGet).toBeNull();
    const g1 = linkedList.get(0);
    expect(g1).toEqual(linkedList.head);    
    const g2 = linkedList.get(1);
    expect(g2).toEqual(linkedList.head!.next);    
    const g3 = linkedList.get(2);
    expect(g3).toEqual(linkedList.head!.next!.next);    
    const tooLargeGet = linkedList.get(5);
    expect(tooLargeGet).toBeNull();

})

it('tests set method in doubly linked list',()=>{
    const linkedList = new DoublyLinkedList();
    linkedList.push(50);
    linkedList.push(100);
    linkedList.push(200);
    // set nonexists
    const nonExistsResult = linkedList.set(-50, -1);
    expect(nonExistsResult).toBe(false);
    const tooLarge = linkedList.set(999, 3);
    expect(tooLarge).toBe(false);
    const set1 = linkedList.set(-50, 0);
    expect(set1).toBe(true);
    const set2 = linkedList.set(-100, 1);
    expect(set2).toBe(true);
    const set3 = linkedList.set(-150, 2);
    expect(set3).toBe(true);
    expect(linkedList.head!.val).toEqual(-50);    
    expect(linkedList.head!.next!.val).toEqual(-100);    
    expect(linkedList.head!.next!.next!.val).toEqual(-150);    

})


it('tests insert method in doubly linked list',()=>{
    const linkedList = new DoublyLinkedList();
    // false:
    expect(linkedList.insert(5,1)).toBe(false);
    expect(linkedList.insert(5,-1)).toBe(false);

    // insert empty
    expect(linkedList.insert(50,0)).toBe(true);
    expect(linkedList.length).toEqual(1);
    expect(linkedList.head!.val).toEqual(50);
    expect(linkedList?.head?.prev).toBeNull();
    expect(linkedList?.head?.next).toBeNull();
    expect(linkedList?.tail?.prev).toBeNull();
    expect(linkedList?.tail?.next).toBeNull();    
    // insert end
    expect(linkedList.insert(100,1)).toBe(true);
    expect(linkedList.length).toEqual(2);
    expect(linkedList.head!.next!.val).toEqual(100);
    // check link is properly set after inserting
    expect(linkedList?.head?.prev).toBeNull();
    expect(linkedList?.head?.next?.val).toEqual(100);
    expect(linkedList?.tail?.prev?.val).toEqual(50);
    expect(linkedList?.tail?.next).toBeNull();    
    // insert end 50 <-> 100 <-> 150
    expect(linkedList.insert(150,2)).toBe(true);
    expect(linkedList.length).toEqual(3);
    expect(linkedList.head!.next!.next!.val).toEqual(150);
    expect(linkedList?.head?.prev).toBeNull();
    expect(linkedList?.head?.next?.val).toEqual(100);
    expect(linkedList?.tail?.prev?.val).toEqual(100);
    expect(linkedList?.tail?.next).toBeNull();   
    
    // insert in the middle 50 <-> -50 <-> 100 <-> 150
    expect(linkedList.insert(-50,1)).toBe(true);
    expect(linkedList.length).toEqual(4);
    expect(linkedList.head!.next!.val).toEqual(-50);
    expect(linkedList.head!.next?.prev?.val).toEqual(50);
    expect(linkedList.head!.next!.next!.val).toEqual(100);
    expect(linkedList.tail?.prev?.prev?.val).toEqual(-50);

});

it('tests doubly linked list remove method',()=>{
    const linkedList = new DoublyLinkedList();
    // undefined
    expect(linkedList.remove(-1)).toBeUndefined();
    expect(linkedList.remove(1)).toBeUndefined();
    linkedList.push(50);
    linkedList.push(100);
    linkedList.push(150);
    expect(linkedList.length).toEqual(3);
    // remove last one  50 <-> 100 <-> | 150
    expect(linkedList.remove(2)).toEqual(150); 
    expect(linkedList.length).toEqual(2);
    expect(linkedList.head?.next?.val).toEqual(100);
    expect(linkedList.head?.next?.next).toBeNull();
    expect(linkedList.tail?.next).toBeNull();
    expect(linkedList.tail?.prev?.val).toEqual(50);

    linkedList.push(150);
    linkedList.push(200);
    // remove middle  50 <-> | 100 | <-> 150 <-> 200
    expect(linkedList.remove(1)).toEqual(100);
    expect(linkedList.length).toEqual(3);
    console.log(linkedList)
    expect(linkedList.head?.next?.val).toEqual(150);
    expect(linkedList.head?.next?.next?.val).toEqual(200);
    expect(linkedList.tail?.next).toBeNull();
    expect(linkedList.tail?.prev?.val).toEqual(150);
    expect(linkedList.tail?.prev?.prev?.val).toEqual(50);

    // remove first
    expect(linkedList.remove(0)).toEqual(50);
    expect(linkedList.length).toEqual(2);  
    expect(linkedList.head?.next?.val).toEqual(200);
    expect(linkedList.tail?.prev?.val).toEqual(150);

})

/*
it('tests doubly linked list reverse method',()=>{
    const linkedList = new DoublyLinkedList();
    linkedList.push(50);
    linkedList.reverse();
    expect(linkedList.tail?.val).toEqual(50);
    expect(linkedList.tail?.next).toBeNull;
    expect(linkedList.head?.val).toEqual(50);
    linkedList.push(100);
    linkedList.reverse();
    expect(linkedList.head?.val).toEqual(100);
    expect(linkedList.head?.next?.val).toEqual(50);
    expect(linkedList.tail?.val).toEqual(50);
    expect(linkedList.tail?.next).toBeNull;
    linkedList.reverse(); // back to original 
    expect(linkedList.head?.val).toEqual(50);
    expect(linkedList.head?.next?.val).toEqual(100);
    expect(linkedList.tail?.val).toEqual(100);
    expect(linkedList.tail?.next).toBeNull;
    linkedList.push(150);
    linkedList.reverse();
    expect(linkedList.head?.val).toEqual(150);
    expect(linkedList.head?.next?.val).toEqual(100);
    expect(linkedList.head?.next?.next?.val).toEqual(50);
    expect(linkedList.tail?.val).toEqual(50);
    expect(linkedList.tail?.next).toBeNull;
    linkedList.reverse();
    expect(linkedList.head?.val).toEqual(50);
    expect(linkedList.head?.next?.val).toEqual(100);
    expect(linkedList.head?.next?.next?.val).toEqual(150);
    expect(linkedList.tail?.val).toEqual(150);
    expect(linkedList.tail?.next).toBeNull;

})

*/