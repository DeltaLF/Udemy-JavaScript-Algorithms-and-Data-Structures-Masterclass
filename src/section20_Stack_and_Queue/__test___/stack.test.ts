import {Stack} from "../stack"


it('tests push method in Stack class',()=>{
    // note: the push is added from head
    const stack = new Stack();
    expect(stack.length).toEqual(0);
    expect(stack.push(50)).toEqual(1);
    expect(stack.head?.val).toEqual(50);
    expect(stack.tail?.val).toEqual(50);
    expect(stack.push(100)).toEqual(2);
    expect(stack.head?.val).toEqual(100);
    expect(stack.tail?.val).toEqual(50);
    expect(stack.head?.next?.val).toEqual(50);
})

it('tests pop method in Stack class',()=>{
    const stack = new Stack();
    // pop when empty
    expect(stack.pop()).toBeNull;

    // pop when only one
    expect(stack.push(50)).toEqual(1);
    expect(stack.pop()?.val).toEqual(50);
    expect(stack.length).toEqual(0);

    // pop when multiple
    expect(stack.push(50)).toEqual(1);
    expect(stack.push(100)).toEqual(2);
    expect(stack.push(150)).toEqual(3);
    expect(stack.pop()?.val).toEqual(150);
    expect(stack.length).toEqual(2);
    expect(stack.pop()?.val).toEqual(100);
    expect(stack.length).toEqual(1);
    expect(stack.pop()?.val).toEqual(50);
    expect(stack.length).toEqual(0);
})