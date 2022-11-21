
import {LinkedList, BaseNode} from "./linked_list.type"
class Node<T> implements BaseNode<T>{
    public next: null | Node<T> =null;
    constructor(public val:T){
        this.val = val;
    }
}

class SinglyLinkedList<T> implements LinkedList<T, Node<T>>{
    public head: null | Node<T> = null;
    public tail: null | Node<T> = null;
    public length: number =0;
    constructor(){}
    push(val:T) {
        // create a new node and append it at the tail
        const newNode = new Node(val);
        if( this.length === 0){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail!.next = newNode;
            this.tail = this.tail!.next; // move tail to the end 
        }
        this.length+=1;
        return this
    }

    pop(){
        if(this.length === 0) return undefined
        if(this.length === 1){
            const value = this.head!.val;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return value;
        }
           // find the node previous to end and make it points to null
        let ind = 0;  // 1 refer to head
        let node:Node<T> = this.head!;
        while(ind < this.length -2){
            node = node.next!;
            ind++;
        }
        const value = this.tail!.val;
        node.next = null;
        this.tail = node;
        this.length--;
        return value;
     
    }

    shift(){
        // remove the head
        if(this.length === 0) return undefined;
        if(this.length === 1){
            const value = this.head!.val;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return value;
        }
        const value = this.head!.val;
        this.head = this.head!.next;
        this.length -= 1;
        return value;
    }

    unshift(val:T){
        const node = new Node(val);
        const prevHead = this.head;
        node.next = prevHead;
        this.head = node;
        if(this.length === 0){ this.tail = node}
        this.length++;
        return this;
    }

    get(index:number){
        if(index < 0 || index >= this.length ) return null;
        let i=0;
        let node = this.head;
        while(i < index){
            node = node!.next;
            i++;
        }
        return node;
    }

    set(value:T, index:number){
        const node = this.get(index);
        if(!node) return false;
        node.val = value;
        return true;
    }
    
    insert(value:T, index:number){
        if(index < 0 || index > this.length) return false;
        if(index === this.length){
            this.push(value);
        }else if(index === 0){
            this.unshift(value);
        }else{
            const newNode = new Node(value);
            const node = this.get(index - 1);
            /*
            {5} -> {3} -> {4} -> {2}
            insert 2 => find 3
            */
           const nextNode = node!.next;
           node!.next = newNode;
           newNode.next = nextNode; 
           this.length ++;
        }
        return true;
    }

    remove(index:number){
        if(index < 0 || index >= this.length) return undefined;
        if(index === this.length -1 ) return this.pop();
        if(index === 0) return this.shift();
        /*
            {5} -> {3} -> {4} -> {2}
            remove 2 => get (index 1) next point to {index 3}
        */
       const node = this.get(index - 1);
       const value = node!.next!.val;
       node!.next = node!.next!.next;  // skip the one that needs to be reomved
       this.length --;
       return value;
    }

    /*
    {2} -> {3} -> {1}
    nodePrev -> node -> nodeNext
     */
    /**
    2 -> 3 -> 1 -> 5 -> 7
    np: 2, n:3, nn:1
    2.next = null; -> new tail
    3->2
    np: 3 //np=n move to right
    n: 1  //n=nn
    nn:5  //nn=nn.next    
    ...
    np:5
    n:7
    nn:und
     */

    /*
     */
    reverse(){
        if(this.length <= 1) return this;
        let nodePrev = this.head;
        this.tail = nodePrev;       // new tail (the original head)
        let node = this.head!.next; // here must length >=2
        let nodeNext = this.head!.next?.next;
        nodePrev!.next = null; // the new tail
        while(!!nodeNext){   // this loop is actually reverse nodePrev
            node!.next = nodePrev; 
            nodePrev = node;
            node = nodeNext;
            nodeNext = nodeNext.next;
        }
        node!.next = nodePrev; // reverse node
        this.head = node;
        return this
    }
}



export {Node, SinglyLinkedList}