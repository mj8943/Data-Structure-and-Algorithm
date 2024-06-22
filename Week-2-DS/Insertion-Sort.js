// ascending order

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let numberToInsert = arr[i];
//     let j = i - 1;
//     while(j >= 0 && arr[j] > numberToInsert){
//         arr[j+1] = arr[j]
//         j = j - 1;
//     }
//     arr[j+1] = numberToInsert
//   }
// }

// const arr = [8,20,5,-2,-6]
// insertionSort(arr);
// console.log(arr)

// descending order

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let numberToInsert = arr[i];
      let j = i - 1;
      while(j >= 0 && arr[j] < numberToInsert){ // change is " < "
          arr[j+1] = arr[j]
          j = j - 1;
      }
      arr[j+1] = numberToInsert
    }
  }
  
  const arr = [8,20,5,-2,-6]
  insertionSort(arr);
  console.log(arr)

  function insertion(arr){
    for(let i=0; i<arr.length; i++){
      let number = arr[i];
      let j=i-1
      while(j>=0 && arr[j] > number){
        arr[j+1] = a[j]
        j=j-1;
      }
      arr[j+1] = number
    }
  }