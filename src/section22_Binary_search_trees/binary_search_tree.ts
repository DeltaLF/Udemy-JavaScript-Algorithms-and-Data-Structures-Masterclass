
class Node<T> {
    public left:Node<T> | null = null;
    public right: Node<T> | null = null;
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

class BinarySearchTree<T>{
    public root: Node<T> | null = null;
    constructor(){
    }
    insert(val:T):void{
        const node = new Node(val);
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

    find(val:T): Node<T> | null{
        if(!this.root){
            return null;
        }
        let compNode: Node<T> | null = this.root;
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
}

export {Node, BinarySearchTree}