import { PriorityQueueNaive } from "./priority_queue_with_sort_helper";
import { WeightGraph } from "./weight_graph_class";

function dijkstra(graph:WeightGraph, startNode:string){
    const distances = new PriorityQueueNaive();
    const previous:{[key:string]: null|string} = {}
    // init distances, previous
    for(let node in graph.adjacenecyList){
        previous[node] = null;
        if(node === startNode){
            distances.enqueue(node,0);
        }else{
            distances.enqueue(node, Infinity);
        }
    }
    while(distances.queue.length > 0){
        const node = distances.dequeue()!;

    }

}