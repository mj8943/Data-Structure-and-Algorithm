//                                                  FIBANOCCI SEQUENCE

function fibanocci (n){
    const fib = [0,1];
    for (let i=2; i<n; i++){
        fib[i] = fib[i-1]+ fib[i-2];
    }
    return fib
}

console.log(fibanocci(5));

//                                                  FACTORIAL OF A NUMBER

function factorial(n){
    let result = 1;
    for (let i=2; i<=n; i++){
        result *= i;
    }
    return result;
}

console.log(factorial(5));

//                                                   PRIME NUMBER

function primeNum (n){
    if(n < 2){
        return false;
    }

    for(let i=2; i<=Math.sqrt(n); i++){
        if(n%i == 0){
          return false;
        }
    }
    return true;
}

console.log(primeNum(4));
console.log(primeNum(5));

//                                                   POWER OF TWO

function powerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
        return false;
    }
    n = n / 2;
  }
  return true;
}

console.log(powerOfTwo(1));

function powerOfBitwise (n){  // bitwise
    if(n<1){
        return false;
    }
    return (n & (n-1)) == 0;
}
console.log(powerOfBitwise(4));

// :--------------------------

// Let's evaluate the expression n & (n - 1) when n = 16:

// n in binary is 10000.
// (n - 1) is 15, which in binary is 01111.

// 10000
// & 01111
// --------
//   00000 :- True

//                                                 RECURSIVE FIBONACCI

function recursivefibonacci(n){
    if(n<2){
        return n;
    }
    
    return recursivefibonacci(n-1) + recursivefibonacci(n-2);
}

console.log(recursivefibonacci(6));

// :-------------------------------

// recursivefibonacci(6) calls:
// recursivefibonacci(5) + recursivefibonacci(4)
// recursivefibonacci(5) calls:
// recursivefibonacci(4) + recursivefibonacci(3)
// recursivefibonacci(4) calls:
// recursivefibonacci(3) + recursivefibonacci(2)
// ... and so on, until the base cases are reached (n=0 or n=1), and the recursion starts resolving.

//                                                 RECURSIVE FACTRORIAL

function recursiveFactorial(n){
    if(n === 0){
        return 1;
    }
    return n * recursiveFactorial(n-1);
}

console.log(recursiveFactorial(5));

//                                                 LINEAR SEARCH 

function linearSearch(arr,target){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
}
console.log(linearSearch([5,6,4,7,8,9],9));

//                                                 BINORY SEARCH

function binorySearch(arr,target){
    let leftIndex = 0;
    let rightIndex = arr.length-1;
    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex+rightIndex)/2);
        if(target === arr[middleIndex]){
            return middleIndex
        }
        if(target < arr[middleIndex]){
            rightIndex = middleIndex - 1;
        }else{
            leftIndex = middleIndex + 1;
        }
    }
    return -1;
}

console.log(binorySearch([-5,2,4,6,10],6));

//                                                RECURSIVE BINORY SEARCH

function recursiveBinorySearch(arr,target){
    return search(arr,target,0, arr.length-1);
} 

function search(arr,target,leftIndex,rightIndex){
    if(leftIndex > rightIndex){
        return -1;
    }
    let middleIndex = Math.floor((leftIndex+rightIndex)/2);
    if(target === arr[middleIndex]){
        return middleIndex;
    }
    if(target < arr[middleIndex]){
       return search(arr,target,leftIndex,middleIndex-1);
    }else{
       return search(arr,target,middleIndex + 1,rightIndex);
    }
}

console.log(recursiveBinorySearch([-5,2,4,6,10],10));

// let str = "My name is "
// let name = "Minhaj"

// console.log(str + name)
// console.log(str.length)
//  name += 2558
//  console.log(name);
//  console.log(typeof name)
// console.log(str[0])
// console.log(str.slice(3))

//                    finding sum of Array using recursion

function sum(arr , index = 0){
    if(index === arr.length-1){
        return arr[index]
    }else{
        return arr[index] + sum(arr,index + 1);
    }
}

const array = [1,2,3,4,5];
console.log(sum(array))

//                                Reversing a string using recursion

function reverseString(str) {
    if (str.length <= 1) {
        return str;
    } else {
        return reverseString(str.substring(1)) + str[0];
    }
}

const string = "hello";
console.log("Reversed string:", reverseString(string));