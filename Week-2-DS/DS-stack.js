// class Stack {
//   constructor(maxCapacity) {
//     this.items = [];
//     this.maxCapacity = maxCapacity; // optional
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }

//   getSize() {
//     return this.items.length;
//   }
//   isFull() {
//     return this.items.length === this.maxCapacity;
//   }

//   push(value) {
//     if (this.isFull()) {
//       return "Overflow";
//     }
//     return this.items.push(value);
//   }

//   pop() {
//     if (this.isEmpty()) {
//       return "Underflow";
//     }
//     return this.items.pop();
//   }
//   peek() {
//     if (this.isEmpty()) {
//       return "empty";
//     }
//     return this.items[this.items.length - 1];
//   }
//   print() {
//     let elements = "";
//     for (let i = 0; i < this.items.length; i++) {
//       elements += this.items[i] + " ";
//     }
//     return elements;
//   }
// }

// // stack.push(1)
// // stack.push(2)
// // stack.push(3)
// // stack.push(4)
// // stack.push(5)
// // stack.push(6)
// // stack.push(7)
// // console.log(stack.print())

const arr = [10, 20, 30, 40, 50];
function reverseArray(arr) {
  const stack = new Stack(5);
  let reverseArr = [];
  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
  }
  while (!stack.isEmpty()) {
    reverseArr.push(stack.pop());
  }
  return reverseArr;
}
console.log(reverseArray(arr))

let string = "Hello World";

function reverseStr(str) {
  const stack = new Stack(str.length);
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  let reversedStr = "";
  while (!stack.isEmpty()) {
    reversedStr += stack.pop();
  }
  return reversedStr;
}

console.log(reverseStr(string))
                    
// //                                              reversing stack 
function reverseStack(stack) {
  const auxStack = new Stack(25);

  while (!stack.isEmpty()) {
      auxStack.push(stack.pop());
  }

  stack.items = auxStack.items;
}


// const stack = new Stack(25);
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// console.log("Original Stack:", stack.items);
// reverseStack(stack);
// console.log("Reversed Stack:", stack.print());


class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    let temp = new Node(data);
    if (this.top == null) {
      this.top = temp;
    } else {
      temp.next = this.top;
      this.top = temp;
    }
  }

  pop() {
    if (this.top == null) {
      return null;
    }
    let top = this.top;
    this.top = top.next;
    return top.data;
  }

  peek() {
    if (this.top == null) {
      return null;
    }
    return this.top.data;
  }

  isEmpty() {
    return this.top == null;
  }

  size() {
    let count = 0;
    let current = this.top;
    while (current != null) {
      count++;
      current = current.next;
    }
    return count;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}