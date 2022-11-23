import {  BinaryTree } from "../binary_search_tree";

it('tests insert method in binary searh tree',()=>{
    // init
    const bst = new BinaryTree<number>()
    // add on root
    bst.insert(5);
    expect(bst.root?.val).toEqual(5);
    expect(bst.root?.right).toBeNull();
    expect(bst.root?.left).toBeNull();

    // add on left
    bst.insert(3)
    expect(bst.root?.val).toEqual(5);
    expect(bst.root?.right).toBeNull();
    expect(bst.root?.left?.val).toEqual(3);
    expect(bst.root?.left?.left).toBeNull();
    expect(bst.root?.left?.right).toBeNull();

    // add onleft
    bst.insert(7)
    expect(bst.root?.val).toEqual(5);
    expect(bst.root?.right?.val).toEqual(7);
    expect(bst.root?.left?.left).toBeNull();
    expect(bst.root?.left?.right).toBeNull();
})

it('tests find method in binary search tree',()=>{
    // init
    /* 
         5
       /   \
      2     7
    /  \   / \
   0    4 6    8
    */
    const bst = new BinaryTree();
    expect(bst.find(5)).toBeNull();
    bst.insert(5);
    bst.insert(2);
    bst.insert(0);
    bst.insert(4);
    bst.insert(7);
    bst.insert(6);
    bst.insert(8);
    // not fount
    expect(bst.find(-1)).toBeNull();
    expect(bst.find(1)).toBeNull();
    expect(bst.find(9)).toBeNull();
    expect(bst.find(10)).toBeNull();
    // found
    expect(bst.find(5)).not.toBeNull();

    const nodeII = bst.find(2);
    expect(nodeII).not.toBeNull();
    expect(nodeII?.left?.val).toEqual(0);
    expect(nodeII?.right?.val).toEqual(4);

    const nodeO = bst.find(0);
    expect(nodeO).not.toBeNull();
    expect(nodeO?.left).toBeNull();
    expect(nodeO?.right).toBeNull();
    expect(bst.find(4)).not.toBeNull();
    
    const nodeVII = bst.find(7);
    expect(nodeVII).not.toBeNull();
    expect(nodeVII).not.toBeNull();
    expect(nodeVII?.left?.val).toEqual(6);
    expect(nodeVII?.right?.val).toEqual(8);
    expect(bst.find(6)).not.toBeNull();
    expect(bst.find(8)).not.toBeNull();

});