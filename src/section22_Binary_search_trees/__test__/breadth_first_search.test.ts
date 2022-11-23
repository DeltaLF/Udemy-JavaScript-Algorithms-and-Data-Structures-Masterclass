import { BinaryTree} from "../binary_search_tree";

/*
     5
    /  \
  0     7
 / \   / \
-1  3 6   8 
*/

it('tests breadth first search',()=>{
    // init 
    const binaryTree = new BinaryTree();
    binaryTree.insert(5);
    // one
    expect(binaryTree.BFS()).toEqual([binaryTree.find(5)]);
    // three
    binaryTree.insert(0); 
    binaryTree.insert(7);
    expect(binaryTree.BFS()).toEqual([binaryTree.find(5),binaryTree.find(0),binaryTree.find(7)]);
    // inbalance
    binaryTree.insert(3); 
    binaryTree.insert(6); 
    expect(binaryTree.BFS()).toEqual([binaryTree.find(5),binaryTree.find(0),binaryTree.find(7),binaryTree.find(3),binaryTree.find(6)]);
    binaryTree.insert(-1); 
    binaryTree.insert(8); 
    expect(binaryTree.BFS()).toEqual([binaryTree.find(5),binaryTree.find(0),binaryTree.find(7),binaryTree.find(-1),binaryTree.find(3),binaryTree.find(6),binaryTree.find(8)]);
    

});