import { INode, IStack } from "./stack.type";
class Node<T> implements INode<T>{
    public next: INode<T>| null = null; 
    constructor(public val:T){
        this.val = val;
    }
}

class Stack<T> implements IStack<T, Node<T>>{
    public head: null | Node<T> = null;
    public tail: null | Node<T> = null;
    public length:number = 0;
    constructor(){
    }
    push(val:T){
        // implement unsfift to have O(1) efficiency
        const node = new Node(val);
        if(this.length === 0){
            this.head = node;
            this.tail = node;            
        }
        node.next = this.head;
        this.head = node;
        this.length ++;
        return this.length
    }
    pop(): Node<T> | null {
        if(this.length === 0) return null;
        const node = this.head;
        if(this.length === 1){
            this.tail = null;}
        // case for len > 1
            this.head = this.head!.next;
        this.length --;
        return node;
    }
}

export {Stack}