import { WeightGraph } from "../weight_graph_class";

it('tests dijkstra algorithm',()=>{
    const graph = new WeightGraph();
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addNode('D');
    graph.addNode('E');
    graph.addNode('F');
    // add edge
    graph.addEdge('A','B',4);
    graph.addEdge('A','C',2);
    graph.addEdge('C','D',2);
    graph.addEdge('C','F',4);
    graph.addEdge('D','F',1);
    graph.addEdge('D','E',3);
    graph.addEdge('B','E',3);
    graph.addEdge('F','E',1);

    const distanceObj = graph.Dijkstra('A');
    expect(distanceObj).toEqual({ A: 0, B: 4, C: 2, D: 4, F: 5, E: 6 })
    
})

it('tests dijkstra algorithm case 2',()=>{
    const graph = new WeightGraph();
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addNode('D');
    graph.addNode('E');
    graph.addNode('F');
    // add edge
    graph.addEdge('A','B',2);
    graph.addEdge('A','C',2);
    graph.addEdge('C','D',1);
    graph.addEdge('B','D',1);
    graph.addEdge('C','F',2);
    graph.addEdge('D','F',3);
    graph.addEdge('D','E',2);
    graph.addEdge('B','E',4);
    graph.addEdge('F','E',1);

    const distanceObj = graph.Dijkstra('A');
    expect(distanceObj).toEqual({ A: 0, B: 2, C: 2, D: 3, F: 4, E: 5 })
    
})