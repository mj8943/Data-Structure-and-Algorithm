class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

//   ////////////////////////////////////////////////////
  prepend(value) {
  //   // adding node on the beginning
    const node = new Node(value);
     if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
//   ////////////////////////////////////////////////////
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

//   ////////////////////////////////////////////////////

  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Wrong index");
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        // we get the prev node
        prev = prev.next;
      }
      node.next = prev.next; // curr node giving for next node
      prev.next = node; // setting node as index node
      this.size++;
    }
  }
//   /////////////////////////////////////////////////////

  remove(index) {
    if (index < 0 || index >= this.size) {
      console.log("Invalid index");
      return;
    }
    let removeNode;
    if (index === 0) {
      removeNode = this.head; // if only one value then removing
      this.head = this.head.next;
    } else {
      let prev = this.head; // for starting from the beginning
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removeNode = prev.next; // removing and setting the next
      prev.next = removeNode.next;
    }
    this.size--;
    return removeNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next; // head removing and put the next
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        const removeNode = prev.next;
        prev.next = removeNode.next; // puting the next
        this.size--;
        return value;
      }
      return null;
    }
  }

//   /////////////////////////////////////
  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return i; // index
      }
      curr = curr.next; // curr changing into next
      i++; // index updating
    }
    return -1; // if not encountered
  }
//   ///////////////////////////////////////
  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) { // checking curr is not null
      let next = curr.next;
      curr.next = prev; //changing next pointer of curr into previous node only if curr not null
      prev = curr; // previos pointer taking one step up
      curr = next; // current step up in to next
    }
    this.head = prev; // prev is the head at the end
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let items = "";
      while (curr) {
        items += `${curr.value} `;
        curr = curr.next;
      }
      console.log(items);
    }
  }
}

const list = new LinkedList();

console.log(list.isEmpty());
console.log(list.getSize());
list.print();
list.prepend(200);
list.prepend(250);
list.prepend(300);
list.print();

list.append(20);
list.append(30);
list.append(40);
list.print();

list.insert(111, 0);
list.print();
console.log(list.getSize());

list.remove(3);
list.print();
console.log(list.getSize());
console.log(list.remove(2));

console.log(list.removeValue(30));
list.print();

console.log(list.search(2000));

list.reverse()
list.print()

// //                                                           TAIL POINTER METHOD

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  ////////////////////////////////////////////////////
  prepend(value) {
    const node = new Node(value)
    if(this.isEmpty()){
      this.head = node // here tail and head is same node b/c only one node
      this.tail = node
    }else{
      node.next = this.head // here we only want to add, tail stil the last node
      this.head = node
    }
    this.size++
  }
  ////////////////////////////////////////////////////
  append(value) {
    const node = new Node(value);
    if(this.isEmpty()){
      this.head = node
      this.tail = node
    }else{
      this.tail.next = node // here already nodes existing so tail already the last dont want to give
      this.tail = node
    }
    this.size++
  }

  ////////////////////////////////////////////////////
  removeFromFront() {
    if(this.isEmpty()){
      return null
    }
    const value = this.head.value
    this.head = this.head.next
    this.size--
    return value
  }
  ////////////////////////////////////////////////////
removeFromEnd() {
  if(this.isEmpty()){
    return null
  }
  const value = this.tail.value
  if(this.size === 1){
    this.head = null // there is no node remaining
    this.tail = null
  }else{
    let prev = this.head
    while(prev.next !== this.tail){ // in here the prev stand the prev node of tail at the end
      prev = prev.next
    }
    prev.next = null // removing
    this.tail = prev
  }
  this.size--
  return value
}

  ////////////////////////////////////////////////////

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let items = "";
      while (curr) {
        items += `${curr.value} `;
        curr = curr.next;
      }
      console.log(items);
    }
  }
}

const lists = new LinkedList();

console.log(lists.isEmpty());
console.log(lists.getSize());

lists.prepend(3)
lists.append(4)
lists.prepend(2)
lists.append(5)
lists.prepend(1)

lists.print()

lists.removeFromFront()
lists.removeFromEnd()
lists.print()

module.exports = LinkedList

// //                                           First repeating value using new Set method

class Node {
  constructor(value) {
    (this.data = value), (this.next = null);
  }
}

class Linked {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  // getFirstRepeat() {
  //   if (!this.head) {
  //     return null;
  //   }
  //   let newSet = new Set();
  //   let curr = this.head;
  //   while (curr) {
  //     if (newSet.has(curr.data)) {
  //       return curr.data;
  //     }
  //     newSet.add(curr.data);
  //     curr = curr.next;
  //   }
  // }

  getFirstRepeat() {
    if (!this.head) {
      return null;
    }
    let curr = this.head;
    while (curr) {
      let runner = this.head;
      while (runner !== curr) {
        if (runner.data === curr.data) { 
          return curr.data; 
        }
        runner = runner.next;
      }
      curr = curr.next;
    }
    return null;
}

  findRepeatValues() {
    let curr = this.head;
    const arr = [];
    while (curr) {
      let run = curr.next;
      while (run) {
        if (curr.value === run.value) {
          let al = false;
          for (let i = 0; i < arr.length; i++) {
            if (curr.value == arr[i]) {
              al = true;
            }
          }
          if (!al) {
            arr.push(curr.value);
          }
        }
        run = run.next;
      }
      curr = curr.next;
    }
    return arr;
  }

  removeDuplicate() {
    let curr = this.head;
    while (curr) {
      let run = curr;
      while (run.next) {
        if (curr.value === run.next.value) {
          run.next = run.next.next;
        } else {
          run = run.next;
        }
      }
      curr = curr.next;
    }
  }

  removeNth(n) {
    const node = new Node(0);
    node.next = this.head;
    let fast = node;
    let slow = node;
    for (let i = 0; i <= n; i++) {
      fast = fast.next;
    }
    while (fast) {
      fast = fast.next;
      slow = slow.next;
    }

    slow.next = slow.next.next;
    return dummy.next;
  }

  hasLoop() {
    let fast = this.head;
    let slow = this.head;
    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
      if (slow === fast) {
        return true;
      }
    }
    return false;
  }

  firstNonRepeating() {
    let curr = this.head;

    while (curr) {
      let run = this.head;
      let isUnique = true;
      while (run) {
        if (curr !== run && curr.value === run.value) {
          isUnique = false;
          break;
        }
        run = run.next;
      }
      if (isUnique) {
        return curr.value;
      }
      curr = curr.next;
    }
    return null;
  }

  nonRepeatingValues(){
    let curr = this.head;
    const arr = []
    while(curr){
        let run = this.head
        let uni = true;
        while(run){
            if(curr !== run && curr.value === run.value){
                uni = false;
                break
            }
            run = run.next
        }
        if(uni){
            arr.push(curr.value);
        }
        curr = curr.next;
    } 
    return arr;
}

hasCycle(){
  if(!this.head || !this.head.next){
    return false
  }
  let slow = this.head
  let fast = this.head
  while(slow !== fast){
    if(!fast || !fast.next){
      return false
    }
    fast = fast.next.next
    slow = slow.next
  }
  return true
}

}

let list2 = new Linked();
list2.append(1);
list2.append(2);
list2.append(3);
list2.append(4);
list2.append(2);
list2.append(5);
list2.append(3);
list2.append(6);
console.log(list2.getFirstRepeat());
console.log(list2.findRepeatValues());
list2.removeDuplicate();
