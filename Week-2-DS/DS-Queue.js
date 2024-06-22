// //                                     Array Method

class Queue{
   constructor(){
    this.items = []
   }

   enqueue(element){
      this.items.push(element);
   }

   dequeue(){
    return this.items.shift()
   }

   peek(){
    if(!this.items.isEmpty){
    return this.items[0]
    }
    return null
   }

   isEmpty(){
    return this.items.length === 0;
   }

   size(){
    return this.items.length
   }

   print(){
    console.log(this.items.toString());
   }
}

// // const queue = new Queue;
// // console.log(queue.isEmpty());
// // queue.enqueue(10);
// // queue.enqueue(20);
// // queue.enqueue(30);
// // queue.print()
// // console.log(queue.size());
// // queue.dequeue()
// // console.log(queue.peek());

// //                                  Object Method

// // class Queue{
// //     constructor(){
// //         this.items = {}
// //         this.rear = 0;
// //         this.front = 0;
// //     }
// //     enqueue(element){
// //         this.items[this.rear] = element;
// //         this.rear++
// //     }

// //     dequeue(){
// //         const item = this.items[this.front]
// //         delete this.items[this.front]
// //         this.front++
// //         return item
// //     }
// //     peek(){
// //         return this.items[this.front]
// //     }

// //     isEmpty(){
// //         return this.rear - this.front === 0
// //     }

// //     size(){
// //         return this.rear - this.front
// //     }

// //     print(){
// //         console.log(this.items);
// //     }

// // }

// // const queue = new Queue;
// // console.log(queue.isEmpty());
// // queue.enqueue(10);
// // queue.enqueue(20);
// // queue.enqueue(30);
// // queue.print()
// // console.log(queue.size());
// // queue.dequeue()
// // console.log(queue.peek());
// // queue.print()

// //                                  CIRCULAR QUEUE

class circularQueue{
    constructor(capacity){
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.rear = -1;
        this.front = -1;
    }

    isFull(){
        return this.currentLength === this.capacity;
    }

    isEmpty(){
        return this.currentLength === 0;
    }
    enqueue(element){
        if(!this.isFull()){
            this.rear = this.rear + 1;
            this.items[this.rear] = element;
            this.currentLength += 1
            if(this.front === -1){
                this.front = this.rear;
            }

        }
    }

    dequeue(){
        if(this.isEmpty()){
            return null;
        }
        const item = this.items[this.front];
        this.items[this.front] = null;
        this.front = this.front + 1;
        this.currentLength -= 1
        if(this.isEmpty()){
            this.rear = -1;
            this.front = -1;
        }
        return item;
    }

    peek(){
        if(!this.isEmpty()){
        return this.items[this.front]
        }
        return null
    }

    print(){
        if(this.isEmpty()){
            console.log("Queue is empty");
        }else{
            let i
            let str = '';
            for(i = this.front; i !== this.rear; i = (i+1)%this.capacity){
                str += this.items[i] + " ";
            }
            str += this.items[i];
            console.log(str);
        }
    }
}

// const queue = new circularQueue(5);
// console.log(queue.isEmpty());
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.enqueue(50)
// queue.print()
// console.log(queue.isFull());

// class Node {
//     constructor(data) {
//       this.data = data;
//       this.next = null;
//     }
//   }
  
//   class Queue {
//     constructor() {
//       this.front = null;
//       this.rear = null;
//       this.length = 0;
//     }
  
//     enqueue(data) {
//       let newNode = new Node(data);
//       if (this.length === 0) {
//         this.front = newNode;
//         this.rear = newNode;
//       } else {
//         this.rear.next = newNode;
//         this.rear = newNode;
//       }
//       this.length++;
//     }
  
//     dequeue() {
//       if (this.length === 0) {
//         return null;
//       }
//       let current = this.front;
//       this.front = current.next;
//       if (this.front === null) {
//         this.rear = null;
//       }
//       this.length--;
//       return current.data;
//     }
  
//     front() {
//       if (this.length === 0) {
//         return null;
//       }
//       return this.front.data;
//     }
  
//     rear() {
//       if (this.length === 0) {
//         return null;
//       }
//       let current = this.front;
//       while (current.next !== null) {
//         current = current.next;
//       }
//       return current.data;
//     }
  
//     size() {
//       return this.length;
//     }
  
//     isEmpty() {
//       return this.length === 0;
//     }
  
//     clear() {
//       this.front = null;
//       this.rear = null;
//       this.length = 0;
//     }
//   }

  function reverseArrayUsingQueue(arr) {
    const queue = new Queue();
  
    for (let i = 0; i < arr.length; i++) {
      queue.enqueue(arr[i]);
    }
  
    for (let i = arr.length-1; i >= 0; i--) {
      arr[i] = queue.dequeue();
    }
   return arr
  }

  const arrayToReverse = [1, 2, 3, 4, 5];
  console.log(arrayToReverse);
  console.log(reverseArrayUsingQueue(arrayToReverse));


  function reverseStr(string){
    const queue = new Queue();

    for(let i = string.length-1; i>=0; i--){
        queue.enqueue(string[i])
    }
    let newStr =""
    while(!queue.isEmpty()){
        newStr += queue.dequeue()
    }
    return newStr
  }

  const string = "MInhaj";
  console.log(reverseStr(string))