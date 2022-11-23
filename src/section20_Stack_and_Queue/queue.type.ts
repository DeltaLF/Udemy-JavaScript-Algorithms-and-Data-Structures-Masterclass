interface INode<T>{
    val: T ;
    next: INode<T> | null;    
}

interface IQueue<T,N>{
    head: N | null;
    tail: N | null;
    enqueue(val:T):number;
    dequeue():N | null;
}

export { INode, IQueue}