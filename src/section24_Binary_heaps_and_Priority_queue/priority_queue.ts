
class Node<T> {
    constructor(public val:T, public priority:number){
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue<T> {
    // assuems higher priority value has higher emegency level
    public values:Node<T>[] = [];
    constructor(){ }
    enqueue(val:T, priority:number):Node<T>[]{
        const node = new Node(val, priority);
        this.values.push(node);
        // bubble float
        let i = this.values.length - 1;
        let parentInd = Math.floor((i-1)/2);
        while(this.values[parentInd]?.priority < this.values[i]?.priority){ // order determined by priority value
            [this.values[parentInd],this.values[i]] = [this.values[i],this.values[parentInd]];
            i = parentInd;
            parentInd = Math.floor((i-1)/2);
        }
        return this.values;
    }

    dequeue():Node<T>| undefined{
        if(this.values.length === 0 ) return;
        const end = this.values.length - 1;
        // swap head and end
        [this.values[0],this.values[end]] = [this.values[end],this.values[0]];
        const node = this.values.pop();
        // sink down swapped head node
        let i = 0;          // parent
        let left = i*2 + 1; // child
        let right = i*2 + 2;// child
        while(this.values[left]?.priority > this.values[i]?.priority || this.values[right]?.priority > this.values[i]?.priority ){
            if(this.values[left].priority >= this.values[right].priority || right >= this.values.length){
                [this.values[left],this.values[i]] = [this.values[i],this.values[left]]
                i = left;
            }else{
                [this.values[right],this.values[i]] = [this.values[i],this.values[right]]
                i = right;
            }
            left = i*2 + 1
            right = i*2 + 2
        }
        return node;
    }

}

export {PriorityQueue,Node}