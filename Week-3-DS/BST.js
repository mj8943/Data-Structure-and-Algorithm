class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Queue for bfs
class Queue {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }
}

class BinorySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, node); // send the values to recursive fn
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      // condition for left child
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode); // send the child node
      }
    } else { 
      // will goes right child
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value); // recursive fn
      } else {
        return this.search(root.right, value);
      }
    }
  }

  // dfs
  preOrder(root) {
    // if the root have
    if (root) {
      // value
      console.log(root.value);
      this.preOrder(root.left); //recursion fn
      this.preOrder(root.right); //recursion fn
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }
  

  // bfs
  levelOrder() {
    const queue = new Queue();
    queue.enqueue(this.root);
    while (!queue.isEmpty()) {
      let curr = queue.dequeue();
      console.log(curr.value);
      if (curr.left){
        queue.enqueue(curr.left)
      }
      if(curr.right){
        queue.enqueue(curr.right);
      }
    }
  }


  // min goes the leaf of left nodes
  min(root){
    if(!root.left){
      return root.value;
    }else{
      return this.min(root.left)
    }
  }

  // max goes the right leaf of the nodes
  max(root){
    if(!root.right){
      return root.value
    }else{
      return this.max(root.right);
    }
  }

  delete(value){
    return this.deleteNode(this.root , value);
  }

  deleteNode(root , value){
    if(root === null){
      return null
    }
    if(value < root.value){
      root.left = this.deleteNode(root.left , value)
    }else if(value > root.value){
      root.right = this.deleteNode(root.right , value);
    }else{
      if(!root.left && !root.right){
        return null
      }
      if(!root.left){
        return root.right
      }else if(!root.right){
        return root.left
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root
  }
}

const bst = new BinorySearchTree();
console.log(bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

// console.log(bst.search(bst.root, 10)); // passing the root and value
// bst.preOrder(bst.root);
// bst.inOrder(bst.root);
// bst.postOrder(bst.root);
// bst.levelOrder()
// console.log(bst.min(bst.root))
// console.log(bst.max(bst.root))

bst.levelOrder()
// bst.delete(10)
// bst.levelOrder()
// console.log(bst.root.value)