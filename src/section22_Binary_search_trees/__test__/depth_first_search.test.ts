import { BinaryTree} from "../binary_search_tree";

/*
     5
    /  \
  0     7
 / \   / \
-1  3 6   8 
*/

it('tests pre-order depth first search',()=>{
    // init 
    const binaryTree = new BinaryTree();
    binaryTree.insert(5);
    // one
    expect(binaryTree.preOrder()).toEqual([binaryTree.find(5)]);
    // three
    binaryTree.insert(0); 
    binaryTree.insert(7);
    expect(binaryTree.preOrder()).toEqual([binaryTree.find(5),binaryTree.find(0),binaryTree.find(7)]);
    // inbalance
    /*
     5
    /  \
  0     7
   \   / 
    3 6   
     */
    binaryTree.insert(3); 
    binaryTree.insert(6); 
    expect(binaryTree.preOrder()).toEqual([binaryTree.find(5),binaryTree.find(0),binaryTree.find(3),binaryTree.find(7),binaryTree.find(6)]);
    binaryTree.insert(-1); 
    binaryTree.insert(8); 
    expect(binaryTree.preOrder()).toEqual([binaryTree.find(5),binaryTree.find(0),binaryTree.find(-1),binaryTree.find(3),binaryTree.find(7),binaryTree.find(6),binaryTree.find(8)]);
});


it('tests pos-order depth first search',()=>{
    // init 
    const binaryTree = new BinaryTree();
    binaryTree.insert(5);
    // one
    expect(binaryTree.posOrder()).toEqual([binaryTree.find(5)]);
    // three
    binaryTree.insert(0); 
    binaryTree.insert(7);
    expect(binaryTree.posOrder()).toEqual([binaryTree.find(0),binaryTree.find(7),binaryTree.find(5)]);
    // inbalance
    /*
     5
    /  \
  0     7
   \   / 
    3 6   
     */
    binaryTree.insert(3); 
    binaryTree.insert(6); 
    expect(binaryTree.posOrder()).toEqual([binaryTree.find(3),binaryTree.find(0),binaryTree.find(6),binaryTree.find(7),binaryTree.find(5)]);
    binaryTree.insert(-1); 
    binaryTree.insert(8); 
    expect(binaryTree.posOrder()).toEqual([binaryTree.find(-1),binaryTree.find(3),binaryTree.find(0),binaryTree.find(6),binaryTree.find(8),binaryTree.find(7),binaryTree.find(5)]);
  
});

it('tests in-order depth first search',()=>{
  // init 
  const binaryTree = new BinaryTree();
  binaryTree.insert(5);
  // one
  expect(binaryTree.inOrder()).toEqual([binaryTree.find(5)]);
  // three
  binaryTree.insert(0); 
  binaryTree.insert(7);
  expect(binaryTree.inOrder()).toEqual([binaryTree.find(0),binaryTree.find(5),binaryTree.find(7)]);
  // inbalance
  /*
   5
  /  \
0     7
 \   / 
  3 6   
   */
  binaryTree.insert(3); 
  binaryTree.insert(6); 
  expect(binaryTree.inOrder()).toEqual([binaryTree.find(0),binaryTree.find(3),binaryTree.find(5),binaryTree.find(6),binaryTree.find(7)]);
  binaryTree.insert(-1); 
  binaryTree.insert(8); 
  expect(binaryTree.inOrder()).toEqual([binaryTree.find(-1),binaryTree.find(0),binaryTree.find(3),binaryTree.find(5),binaryTree.find(6),binaryTree.find(7),binaryTree.find(8)]);

});