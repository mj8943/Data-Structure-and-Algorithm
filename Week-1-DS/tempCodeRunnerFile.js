// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   isEmpty() {
//     return this.size === 0;
//   }

//   getSize() {
//     return this.size;
//   }

//   ////////////////////////////////////////////////////
//   prepend(value) {
//     // adding node on the beginning
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       node.next = this.head;
//       this.head = node;
//     }
//     this.size++;
//   }
//   ////////////////////////////////////////////////////
//   append(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       let prev = this.head;
//       while (prev.next) {
//         prev = prev.next;
//       }
//       prev.next = node;
//     }
//     this.size++;
//   }

//   ////////////////////////////////////////////////////

//   insert(value, index) {
//     if (index < 0 || index > this.size) {
//       console.log("Wrong index");
//       return;
//     }
//     if (index === 0) {
//       this.prepend(value);
//     } else {
//       const node = new Node(value);
//       let prev = this.head;
//       for (let i = 0; i < index - 1; i++) {
//         // we get the prev node
//         prev = prev.next;
//       }
//       node.next = prev.next; // curr node giving for next node
//       prev.next = node; // setting node as index node
//       this.size++;
//     }
//   }
//   /////////////////////////////////////////////////////

//   remove(index) {
//     if (index < 0 || index >= this.size) {
//       console.log("Invalid index");
//       return;
//     }
//     let removeNode;
//     if (index === 0) {
//       removeNode = this.head; // if only one value then removing
//       this.head = this.head.next;
//     } else {
//       let prev = this.head; // for starting from the beginning
//       for (let i = 0; i < index - 1; i++) {
//         prev = prev.next;
//       }
//       removeNode = prev.next; // removing and setting the next
//       prev.next = removeNode.next;
//     }
//     this.size--;
//     return removeNode.value;
//   }

//   removeValue(value) {
//     if (this.isEmpty()) {
//       return null;
//     }
//     if (this.head.value === value) {
//       this.head = this.head.next; // head removing and put the next
//       this.size--;
//       return value;
//     } else {
//       let prev = this.head;
//       while (prev.next && prev.next.value !== value) {
//         prev = prev.next;
//       }
//       if (prev.next) {
//         const removeNode = prev.next;
//         prev.next = removeNode.next; // puting the next
//         this.size--;
//         return value;
//       }
//       return null;
//     }
//   }

//   /////////////////////////////////////
//   search(value) {
//     if (this.isEmpty()) {
//       return -1;
//     }
//     let i = 0;
//     let curr = this.head;
//     while (curr) {
//       if (curr.value === value) {
//         return i; // index
//       }
//       curr = curr.next; // curr changing into next
//       i++; // index updating
//     }
//     return -1; // if not encountered
//   }
//   ///////////////////////////////////////
//   reverse() {
//     let prev = null; 
//     let curr = this.head;
//     while (curr) { // checking curr is not null
//       let next = curr.next;
//       curr.next = prev; //changing next pointer of curr into previous node only if curr not null
//       prev = curr; // previos pointer taking one step up
//       curr = next; // current step up in to next
//     }
//     this.head = prev; // prev is the head at the end
//   }

//   print() {
//     if (this.isEmpty()) {
//       console.log("List is empty");
//     } else {
//       let curr = this.head;
//       let items = "";
//       while (curr) {
//         items += `${curr.value} `;
//         curr = curr.next;
//       }
//       console.log(items);
//     }
//   }
// }

// const list = new LinkedList();

// console.log(list.isEmpty());
// console.log(list.getSize());
// list.print();
// list.prepend(200);
// list.prepend(250);
// list.prepend(300);
// list.print();

// list.append(20);
// list.append(30);
// list.append(40);
// list.print();

// list.insert(111, 0);
// list.print();
// console.log(list.getSize());

// list.remove(3);
// list.print();
// console.log(list.getSize());
// console.log(list.remove(2));

// console.log(list.removeValue(30));
// list.print();

// console.log(list.search(2000));

// list.reverse()
// list.print()