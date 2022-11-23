
class TreeNode<T> {
    public left:TreeNode<T> | null = null;
    public right: TreeNode<T> | null = null;
    constructor(public val:T){
        this.val = val;
    }
}

/*
     5
  /     \
 3        7
 
 insert(4)
*/

class BinaryTree<T>{
    public root: TreeNode<T> | null = null;
    constructor(){
    }
    insert(val:T):void{
        const node = new TreeNode(val);
        if(!this.root){
            this.root = node;
            return
        }
        let compNode = this.root;
        while(!!compNode){
            // left
            if(node.val < compNode.val){
                if(!compNode.left){
                    // assign node left if left is empty
                    compNode.left = node;
                    break;
                }
                // othrwise carry on
                compNode = compNode.left;
            }else{
            // right
                if(!compNode.right){
                    compNode.right = node;
                    break
                }
                compNode = compNode.right;
            }
        }

    }

    find(val:T): TreeNode<T> | null{
        if(!this.root){
            return null;
        }
        let compNode: TreeNode<T> | null = this.root;
        while(!!compNode){
            if(val === compNode.val){
                return compNode;
            }
            if(val < compNode.val){
                compNode = compNode.left;
            }else{
                compNode = compNode.right;
            }
        }    
        return null;            
    }

    // breadth first search
    /*
     5
    /  \
  0     7
 / \   / \
-1  3 6   8 
queue: [5]
arr: []
while=>
queue: []
arr: [5]
-> 
queue:[0,7]
arr:[5]
while=>
queue:[7]
array:[5,0]
->
queue:[7,-1,3]
arr:[5,0]
....
*/
    BFS():TreeNode<T>[]{
        if(!this.root) return [];
        const queue:TreeNode<T>[] = [];  // use array to replace an actual queue
        const visitedArr:TreeNode<T>[] = []
        queue.push(this.root!);
        while(queue.length > 0){
            const node = queue.shift()! as TreeNode<T>;
            visitedArr.push(node);
            if(!!node.left){
                queue.push(node.left);
            }
            if(!!node.right){
                queue.push(node.right);
            }
        }
        return visitedArr
    }
}

export {TreeNode, BinaryTree}