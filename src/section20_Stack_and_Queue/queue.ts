import { INode, IQueue } from "./queue.type";

class Node<T> implements INode<T>{
    public next:INode<T> | null = null;
    constructor(public val:T){
        this.val = val;
    }
}

// FIFO
class Queue<T> implements IQueue<T, Node<T>>{
    public head: Node<T> | null = null;
    public tail: Node<T> | null = null;
    public length: number = 0;
    constructor(){}
    enqueue(val: T): number {
        // add data from end
        const node = new Node(val);
        if(this.length === 0){
            this.head = node;
            this.tail = node;
        }else{
            this.tail!.next = node;
            this.tail = node;
        }       
        this.length ++;

        return this.length;
    }

    dequeue(): Node<T> | null {
        // remove data from head
        if(this.length === 0) return null;
        const node = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = this.head!.next;
        }
        this.length --;
        return node;
    }
}

export { Queue, Node}