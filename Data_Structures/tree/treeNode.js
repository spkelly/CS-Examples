class TreeNode{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  isRoot(){
    return this.parent == null;
  }

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

  search(data){
    if(data == this.data){
      return this;
    }
    if(data < this.data){
      return this.left != null? this.left.search(data): null ;
    }
    else{
      return this.right !=null? this.right.search(data): null;
    }
  }

  _insertLeftChild(treeNode){
    this.left = treeNode;
    treeNode.parent = this;
  }

  _insertRightChild(treeNode){
    this.right = treeNode;
    treeNode.parent = this;
  }
}


module.exports = TreeNode;