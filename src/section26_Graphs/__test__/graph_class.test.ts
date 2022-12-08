import { Graph } from "../graph_class";

function graphGenerator():Graph{
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addEdge('A','B')
    graph.addEdge('C','A');
    graph.addEdge('C','B');
    return graph
}

it('tests addVertex method in Graph',()=>{
    const graph = new Graph();
    graph.addVertex('A');
    expect(graph.adjacenecyList).toEqual({A:[]});
    graph.addVertex('B');
    expect(graph.adjacenecyList).toEqual({A:[],B:[]});
    graph.addVertex('C');
    expect(graph.adjacenecyList).toEqual({A:[],B:[],C:[]});
    graph.addVertex('C');
    expect(graph.adjacenecyList).toEqual({A:[],B:[],C:[]});
});

it('tests addEdge method in Graph',()=>{
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addEdge('A','B')
    expect(graph.adjacenecyList).toEqual({A:['B'],B:['A'],C:[]});
    graph.addEdge('C','A');
    expect(graph.adjacenecyList).toEqual({A:['B','C'],B:['A'],C:['A']});
    // invalid case
    graph.addEdge('C','D')
    expect(graph.adjacenecyList).toEqual({A:['B','C'],B:['A'],C:['A']});   
});

it('tests removeVertex method in Graph',()=>{
    
    const graph = graphGenerator();
    graph.removeVertex('B');
    expect(graph.adjacenecyList).toEqual({A:['C'],C:['A']});
    graph.removeVertex('A');
    expect(graph.adjacenecyList).toEqual({C:[]});
    // invalid remove
    graph.removeVertex('X');
    expect(graph.adjacenecyList).toEqual({C:[]});
});

it('tests removeEdge method in Graph',()=>{

    const graph = graphGenerator();
    graph.removeEdge('A','B');
    expect(graph.adjacenecyList).toEqual({A:['C'],B:['C'],C:['A','B']});
    graph.removeEdge('A','C');
    expect(graph.adjacenecyList).toEqual({A:[],B:['C'],C:['B']});
    // invalid case
    graph.removeEdge('X','Y');
    expect(graph.adjacenecyList).toEqual({A:[],B:['C'],C:['B']});

});


it('tests depth frist traversal method in Graph', ()=>{
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');
    graph.addEdge('A','B');
    graph.addEdge('B','D');
    graph.addEdge('A','C');
    graph.addEdge('C','E');
    graph.addEdge('D','E');
    graph.addEdge('D','F');
    graph.addEdge('F','E');

    expect(graph.dft('A')).toEqual(['A','B','D','E','C','F'])

    expect(graph.dftIterative('A')).toEqual(['A','B','D','E','F','C']);
});

it('tests breadth frist traversal method in Graph', ()=>{
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');
    graph.addEdge('A','B');
    graph.addEdge('A','E');
    graph.addEdge('B','C');
    graph.addEdge('B','D');
    graph.addEdge('E','D');
    graph.addEdge('E','F');
    graph.addEdge('C','D');
    graph.addEdge('D','F');
    expect(graph.bft('A')).toEqual(['A','B','E','C','D','F'])

});