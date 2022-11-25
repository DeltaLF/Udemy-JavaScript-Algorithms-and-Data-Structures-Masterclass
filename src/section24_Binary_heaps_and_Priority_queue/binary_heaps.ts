
class Heap<T> {
    public values:T[] = [];
    constructor(){ }
    insert(val:T):T[]{
        // max heap insert => parent node should always larger then child node
        this.values.push(val);
        // bubble up:
        let index:number = this.values.length - 1; 
        let parentInd = Math.floor((index-1)/2);
        while(this.values[parentInd] < this.values[index]){
            [this.values[parentInd], this.values[index]] = [this.values[index], this.values[parentInd]];
            index = parentInd;
            parentInd =  Math.floor((index-1)/2);
        }
        return this.values
    }

    remove():T | undefined{
        if(this.values.length === 0) return ;
        if(this.values.length === 1) return this.values.pop();
        // sawp head and end
        [this.values[0],this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];
        const result = this.values.pop();

        // sink down the head
        let i = 0;
        let left = i*2 + 1;
        let right = i*2 + 2;
        while(this.values[left] > this.values[i] || this.values[right] > this.values[i]){
            if(this.values[left] >= this.values[right] || right >= (this.values.length) ){
                [this.values[i], this.values[left]] = [this.values[left], this.values[i]]
                i = left;
            }else{
                [this.values[i], this.values[right]] = [this.values[right], this.values[i]]
                i = right;
            }
            left = i*2 + 1;
            right = i*2 + 2;
        }        
        return result;
    }

}

export { Heap };
