interface WeightNode{
    priority:number,
    val:string
}
class PriorityQueueNaive{
    public queue:WeightNode[] = [];
    enqueue(val:string, priority:number){
        this.queue.push({val, priority});
        this.sort();
    }
    dequeue(){
        return this.queue.pop();
    }
    sort(){
        this.queue.sort((a,b)=>{
            return b.priority - a.priority;
    })}
}


class PriorityQueue{
    /*
          1
        /   \
       2     6
      / \   / \
     3   5 6   10

          n
        /   \
      2n+1  2n+2
    */
    public queue:WeightNode[] = [];
    enqueue(val:string, priority:number){
        this.queue.push({val, priority});
        // float the new value
        let index = this.queue.length - 1;
        let parent = Math.floor(index - 1/ 2) ;
        while(parent >= 0 && this.queue[parent].priority > this.queue[index].priority){
            // switch if current node is less then parent
            [this.queue[parent], this.queue[index]] = [this.queue[index], this.queue[parent]];
            index = parent;
            parent = Math.floor((index - 1)/ 2) ;
        }

    }
    dequeue(){
        [this.queue[0], this.queue[this.queue.length - 1]] = [this.queue[this.queue.length - 1], this.queue[0]] 
        const result = this.queue.pop();
        // sink down the first node
        let index = 0;
        let left = index * 2 + 1;
        let right = index * 2 + 2;
        if(left < this.queue.length && this.queue[index].priority > this.queue[left].priority || right < this.queue.length &&  this.queue[index].priority > this.queue[right].priority){
            if(right < this.queue.length && this.queue[right].priority < this.queue[left].priority){
                // float right sicne right < left < index
                [this.queue[index],this.queue[right]] = [this.queue[right], this.queue[index]];
                index = right;
            }else{
                [this.queue[index],this.queue[left]] = [this.queue[left], this.queue[index]];
                index = left;
            }
            left = index * 2 + 1;
            right = index * 2 + 2;
        }
        return result;
    }
}

export {PriorityQueueNaive, WeightNode,PriorityQueue};