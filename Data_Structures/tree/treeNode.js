class TreeNode{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  /**
   * returns weather the treeNode is a root node
   */
  isRoot(){
    return this.parent == null;
  }

  /**
   * inserts data into the binary tree in the correct order  
   */
  insertInOrder(data){
    if(data <= this.data){
      if(this.left == null){
        this._insertLeftChild(new TreeNode(data));
      }
      else{
        this.left.insertInOrder(data);
      }
    }
    else{
      if(this.right == null){
        this._insertRightChild(new TreeNode(data));
      }
      else{
        this.right.insertInOrder(data);
      }
    }
  }

  /** 
    returns leaf node that contains the provided data
    else is reuturns null
  */
  search(data){
    if(data == this.data){
      return this;
    }
    if(data < this.data){
      return this.left != null? this.left.search(data): null ;
    }
    else{
      return this.right != null? this.right.search(data): null;
    }
  }

/**
 * Inserts the given node onto the lefthand side of the current 
 * node
 */
  _insertLeftChild(treeNode){
    this.left = treeNode;
    treeNode.parent = this;
  }

 /**
 * Inserts the given node onto the righthand side of the current 
 * node
 */
  _insertRightChild(treeNode){
    this.right = treeNode;
    treeNode.parent = this;
  }
}


module.exports = TreeNode;