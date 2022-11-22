// use singly linked list to implement stack data structure
interface INode<T> {
    val:T;
    next: INode<T> | null;
}

// N for Node type
interface IStack<T,N>{
    head: N | null;
    tail: N | null;
    length:number;
    push(val:T):number; // total length count
    pop():N | null;
}

export {IStack, INode}