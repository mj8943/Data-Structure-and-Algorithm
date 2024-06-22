const arrayOne = [0,2,4,6]
const arrayTwo = [1,3,5,7]
const newArray = []

for(let i=0; i<arrayOne.length; i++){
    newArray.push(arrayOne[i])
    newArray.push(arrayTwo[i])
}
console.log('newArray is : ',newArray);

// sparse array 

const arr = [];
arr[0] = 10;
arr[10] = 100;

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}