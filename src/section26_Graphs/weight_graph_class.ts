import { WeightNode } from "./priority_queue_with_sort_helper";
import { PriorityQueueNaive, PriorityQueue} from "./priority_queue_with_sort_helper";

class WeightGraph{
    public adjacenecyList:{[key:string]:WeightNode[]} = {};
    addNode(val:string){
        if(!this.adjacenecyList[val]){
            this.adjacenecyList[val] = [];
        }
    };
    addEdge(node1:string, node2:string, weight:number){
        if(this.adjacenecyList[node1] && this.adjacenecyList[node2]){
            // make sure the two nodes do exist
            this.adjacenecyList[node1].push({val: node2, priority:weight});
            this.adjacenecyList[node2].push({val: node1, priority:weight});
        }
    }
    Dijkstra(startNode:string){
        //const waitingQueue = new PriorityQueueNaive();
        const waitingQueue = new PriorityQueue();
        const distance:{[key:string]:number} = { [startNode]:0}; // distance from start
        const previous:{[key:string]: null|string} = {};
        const visited: {[key:string]:boolean} = {};
        waitingQueue.enqueue(startNode,0)
        while(waitingQueue.queue.length > 0){
            const node = waitingQueue.dequeue()!;
            visited[node.val] = true;
            this.adjacenecyList[node.val].forEach(adjNode=>{
                if(visited[adjNode.val]) return;
                // update distances, previous
                const adjNodeFromStart = distance[adjNode.val] ? distance[adjNode.val] : Infinity; 
                const nodeToAdjNode = distance[node.val] + adjNode.priority;
                if(nodeToAdjNode < adjNodeFromStart){
                    // update if current node distance to adjNode is shorter then its original distance to start 
                    distance[adjNode.val] = nodeToAdjNode;
                    previous[adjNode.val] = node.val; 
                }
                waitingQueue.enqueue(adjNode.val, distance[adjNode.val])
            })
    
        }
        return distance;
    }
}

export {WeightGraph};