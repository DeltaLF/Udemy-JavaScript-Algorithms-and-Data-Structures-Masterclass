
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

    dft(startNode:string):string[]{
        const dftList:string[] = [];
        const visitedList:{[key:string]:boolean} = {};

        const helper =(node:string) => {
            if(!node) return;
            visitedList[node] = true;
            dftList.push(node);
            this.adjacenecyList[node].forEach((adjNode)=>{
                /*
                note: the visit order not necessary from samll to large(unless we sort adjacencyList) but depends on
                the order of building graph 
                 */
                if(!visitedList[adjNode]){
                    helper(adjNode);
                }
            })
            
        }
        helper(startNode);
        return dftList
    }
    dftIterative(startNode:string):string[]{
        const dftList:string[] = [];
        const visitedList:{[key:string]:boolean} = {};
        const nodeStack:string[] = [startNode];
        visitedList[startNode] = true;
        while(nodeStack.length > 0){
            const node = nodeStack.pop()!;
            dftList.push(node);
            const adjLength = this.adjacenecyList[node].length;
            for(let i = adjLength-1; i >=0 ; i--){
                if( !visitedList[this.adjacenecyList[node][i]]){
                    visitedList[this.adjacenecyList[node][i]] = true;
                    nodeStack.push(this.adjacenecyList[node][i]);
                }
            }
        }
        return dftList;
    }
    bft(startNode:string):string[]{
        const bfsList:string[] = [];
        const visitedList:{[key:string]:boolean} = {};
        const nodeQueue:string[] = [startNode]; // use array to replace queue for simplity
        visitedList[startNode] = true;
        while(nodeQueue.length > 0 ){
            const node = nodeQueue.shift()!;
            bfsList.push(node);
            // enqueue adjacency nodes
            this.adjacenecyList[node].forEach((adjnode)=>{
                if(!visitedList[adjnode]){
                    visitedList[adjnode] = true;
                    nodeQueue.push(adjnode);
                }
            }) 
        }
        return bfsList;
    };
};

export {Graph};