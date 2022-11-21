interface BaseNode<T> {
    next: null | BaseNode<T>;
    prev?: null | BaseNode<T>;
    val: T;
}

// N for Node T for value type
interface LinkedList<T,N extends BaseNode<T>>{
    head: null | N;
    tail: null | N;
    length: number;
    push(val: T): LinkedList<T,N>;
    pop(): undefined | T;
    shift(): undefined | T;
    unshift(val:T): LinkedList<T,N>;
    get(index:number): null | N; 
    set(value:T, index:number): boolean;
    insert(value:T, index:number):boolean;
    remove(index:number): undefined | T;
    reverse(): LinkedList<T,N>
}


export {LinkedList, BaseNode}