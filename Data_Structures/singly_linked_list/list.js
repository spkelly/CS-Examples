const Node = require('./node');

class List {
  constructor(){
    this.size = 0;
    this.head = null;
    this.size = 0;
  }


  /** 
  * retrieves the index of the node that matches the given data
  * @param data - the given data you would like to search for
  * @returns - index of the node containg the data or -1 if it 
  * does not exist
  */
  indexOf(data){
    let currentIndex = 0;
    let currentNode = this.head;
    if(currentNode == null){
      return -1;
    }
    while(currentNode.next != null){
      if(currentNode.data == data){
        return currentIndex;
      }
      currentNode = currentNode.next;
      currentIndex ++;
    }
    return -1;
  }

  /**
   * Adds a new node to the end of the List
   * @param data 
   */
  add(data){
    let newNode = new Node(data);
    let currentNode = this.head;
    if(currentNode == null){
      this.head = newNode;
    }
    else{
      while(currentNode.next != null){
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.size ++;
  }

  /**
   * Removes a node from the end beginning of the list
   */
  remove(){
    if (this.head == null){
      console.log('the list is empty');
    }
    else{
      this.head = this.head.next;
      this.size --;
    }
  }

  /**
   * Removes the node at the given index
   * @param {} index 
   */
  removeAtIndex(index){
    let currentIndex = 0;
    let currentNode = this.head;
    let prevNode = null;
    while(currentIndex != index){
      index ++;
      if(currentNode == null){
        return('the requested index does not exsist');
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    prevNode.next = currentNode.next;
    this.size --;
  }


  /**
   * returns the current size of the list
   */
  size(){
    return this.size;
  }


  /**
   * returns a string of current list data in the following format
   * node1 -> node2 -> node3 -> ... 
   */
  toString(){
    if(this.head == null){
      return('Empty list');
    }
    else{
      let currentNode = this.head;
      let listString = currentNode.data;
      while(currentNode.next != null){
        currentNode = currentNode.next;
        listString += ' -> ' + currentNode.data;
      }
      return listString;
    }
  }
}

module.exports = List;