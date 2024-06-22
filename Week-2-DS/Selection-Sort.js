function selectionSort(arr){
    for(let i=0; i<arr.length-1; i++){
        let indexOfMin = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[indexOfMin]){
                indexOfMin = j
            }
        }
    if(indexOfMin != i){
        let temp = arr[indexOfMin];
        arr[indexOfMin] = arr[i];
        arr[i] = temp
    }
    }
}

const arr = [8,20,-2,4,-6]
selectionSort(arr)
console.log(arr)


function selectionSort(arr){
    for(let i=0; i<arr.length-1; i++){
        let index = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] <arr[index]){
                index = j
            }
        }
        if(index != i){
            let temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp
        }
    }
}