const LinkedList = require('./DS-Linked-List');

//                                                         LINKED LIST STACK
// class LinkedListStack {
//     constructor (){
//        this.list = new LinkedList ();
//     }
//     push(value){
//       this.list.prepend(value)
//     }
//     pop(){
//       return this.list.removeFromFront()
//     }
//     peek(){
//       return this.list.head.value
//     }
//     isEmpty(){
//       return this.list.isEmpty()
//     }
//     getSize(){
//       return this.list.getSize()
//     }
//     print(){
//       return this.list.print()
//     }
// }

// const stack = new LinkedListStack()

// console.log( stack.isEmpty());
// console.log( stack.getSize());
// stack.push(10)
// stack.push(20)
// stack.push(30)

// stack.print()
// console.log(stack.pop());
// console.log(stack.peek());

//                                                                  LINKED LIST QUEUE

class LinkedListQueue {
    constructor (){
       this.list = new LinkedList ();
    }
    enqueue(value){
      this.list.prepend(value)
    }
    dequeue(){
      return this.list.removeFromFront()
    }
    peek(){
      return this.list.head.value
    }
    isEmpty(){
      return this.list.isEmpty()
    }
    getSize(){
      return this.list.getSize()
    }
    print(){
      return this.list.print()
    }
}

const queue = new LinkedListQueue()

console.log( queue.isEmpty());
console.log( queue.getSize());
queue.enqueue(100)
queue.enqueue(200)
queue.enqueue(300)

queue.print()
console.log(queue.dequeue());
console.log(queue.peek());

