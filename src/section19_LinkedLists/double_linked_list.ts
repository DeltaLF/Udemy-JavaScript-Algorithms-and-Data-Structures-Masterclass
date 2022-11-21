import {BaseNode, LinkedList} from "./linked_list.type"

class Node<T> implements BaseNode<T> {
    public next: null | Node<T> =null;
    public prev: null | Node<T> =null;
    constructor(public val:T){
        this.val = val;
    }
}

class DoublyLinkedList<T> implements LinkedList<T, Node<T>>{
    public head: null| Node<T> =null;
    public tail: null| Node<T> =null;
    public length=0;
    push(val:T){
        const node = new Node(val);
        if(this.length === 0){
            this.head = node;
            this.tail = node;
        }else{
            this.tail!.next = node;
            node.prev = this.tail
            this.tail = node;
        }
        this.length++;
        return this;
    }
    pop(){
        /*
        5 <-> 2
         */
        if(this.length === 0) return undefined;
        const val = this.tail!.val;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail!.prev!.next = null;
            this.tail = this.tail!.prev;
        }
        this.length --;
        return val;
    }
    shift(){
        if(this.length === 0 ) return undefined;
        const value = this.head!.val;
        if(this.length === 1){
            this.head = null;
            this.tail = null;            
        }else{
            this.head = this.head!.next;
            this.head!.prev = null;
        }
        this.length --;
        return value;
    }
    unshift(val:T){
        const node = new Node(val);
        if(this.length === 0){
            this.head = node;
            this.tail = node;
        }else{
            this.head!.prev = node
            node.next = this.head;
            this.head = node;
        }
        this.length ++;
        return this
    }
    get(index:number){
        if(index < 0 || index > this.length - 1) return null;
        let node: Node<T> | null = null;
        if(index < this.length / 2){
            // start from head
            let i = 0;
            node = this.head!;
            /*
            2 - > 3
            index = 0
            index = 1 
             */
            while(i < index){
                node = node!.next;
                i++;
            }

        }else{
            // start from head
            /*
            0     1     2     3     4
            2 <-> 5 <-> 7 <-> 6 <-> 4  
            lenght/2 => 2.5
            i = 4
            i = 3
             */
            let i = this.length -1;
            node = this.tail;
            while(i > index){
                node = node!.prev;
                i--;
            }
        }
        return node;
    }
    set(value:T, index:number){
        const node = this.get(index);
        if(!node) return false;
        node.val = value;
        return true
    }
    insert(value:T, index:number){
        if(index < 0 || index > this.length ) return false;
        if(index === 0){
            this.unshift(value);
        }else if(index === this.length){
            this.push(value);
        }else{
            /*
            prevNode Node afterNode
            2 <-> 3 <-> 5  index: 1
            get(1-1) -> prevNode 2 
            
            */
            const node = new Node(value);
            const prevNode = this.get(index - 1)!;
            node.next = prevNode.next;  // node point to after node
            node.next!.prev = node;     // after node point back to node
            node.prev = prevNode;       // node point back to preNode
            prevNode.next =node;        // prevNode point to node
            this.length++;
        }
        return true;
    }
    remove(index:number){
        if(index < 0 || index > this.length - 1) return undefined;
        let value:T
        if(index === 0){
            value = this.shift()!;
        }else if( index === this.length -1 ){
            value = this.pop()!;
        }else{
            /*
            0 <-> 1 <-> 2 <-> 3
            remove 1
            get(1 - 1) prevNode: 0  node: 1  afterNode: 2
            store node 1 value
            prev point to next next (after node 2)
            after node point back to prev node 
             */
            const prevNode = this.get(index - 1)!;
            value = prevNode.next!.val;         // store node val
            prevNode.next = prevNode.next!.next;// prevNode point to afterNode
            prevNode.next!.prev = prevNode;     // afterNode point to prevNode
            this.length --;
        }
        return value;
    };
    reverse(){
        return this
    }
    
}





export {Node, DoublyLinkedList}