
class Graph{
    public adjacenecyList:{[key:string]:string[]} = {};
    addVertex(vertex:string){
        if(!this.adjacenecyList[vertex])this.adjacenecyList[vertex] = [];
    }
    addEdge(vertexOne:string, vertexTwo:string){
        if(!this.adjacenecyList[vertexOne] || !this.adjacenecyList[vertexTwo]) return;
        this.adjacenecyList[vertexOne].push(vertexTwo);
        this.adjacenecyList[vertexTwo].push(vertexOne);
    }
    removeEdge(vertexOne:string, vertexTwo:string){
        if(!this.adjacenecyList[vertexOne] || !this.adjacenecyList[vertexTwo]) return;
        this.adjacenecyList[vertexOne] = this.adjacenecyList[vertexOne].filter((vertex)=>{
            return vertex !== vertexTwo;
        });
        this.adjacenecyList[vertexTwo] = this.adjacenecyList[vertexTwo].filter((vertex)=>{
            return vertex !== vertexOne;
        });
    }
    removeVertex(vertex:string){
        if(!this.adjacenecyList[vertex]) return;
        this.adjacenecyList[vertex].forEach((connectedVertex)=>{ // iterate thorugh all connected vertex
            this.removeEdge(vertex, connectedVertex)
        })
        delete this.adjacenecyList[vertex];
    }
};

export {Graph};