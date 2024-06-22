class MaxHeap{
    constructor(){
        this.heap = [];
    }

    isEmpty(){
        return this.heap.length === 0
    }

    getParentIndex(index){
        return Math.floor((index-1) / 2);
    }
    getLeftchildindex(index){
        return index * 2 + 1
    }
    getRightchildindex(index){
        return index * 2 + 2
    }

    swap(index1 , index2){
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }

    heapifyUp(index){
        let currentIndex = index;
        while(currentIndex > 0){
            let parentIndex = this.getParentIndex(currentIndex);
            if(this.heap[parentIndex] < this.heap[currentIndex]){
                this.swap(parentIndex,currentIndex);
                currentIndex = parentIndex
            }else{
                break;
            }
        }
    }

    insert(value){
        this.heap.push(value);
        this.heapifyUp(this.heap.length-1);
    }

    heapifyDown(index){
        let currentIndex = index;
        while(true){
            let leftchildindex = this.getLeftchildindex(currentIndex)
            let rightchildindex = this.getRightchildindex(currentIndex)
            let largestIndex = currentIndex

            if(leftchildindex < this.heap.length && this.heap[leftchildindex] > this.heap[largestIndex]){
                largestIndex = leftchildindex
            }

            if(rightchildindex < this.heap.length && this.heap[rightchildindex] > this.heap[largestIndex]){
                largestIndex = rightchildindex
            }

            if(largestIndex !== currentIndex){
                this.swap(currentIndex , largestIndex);
                currentIndex = largestIndex
            }else{
                break; 
            }
        }
    }

    extractMax(){
        if(this.heap.length === 0){
            return null;
        }
        if(this.heap.length === 1){
            return this.heap.pop()
        }

        const maxValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);

        return maxValue
    }
    peak(){
        return this.heap[0]
    }

}

const heap = new MaxHeap()
heap.insert(10)
heap.insert(12)
heap.insert(20)
heap.insert(16)
heap.insert(30)

console.log(heap.peak())
console.log(heap.extractMax())


function heapSort(arr){
    const maxHeap = new MaxHeap()
    arr.forEach(element =>{
        maxHeap.insert(element)
    });

    const sortedArray = [];
    while(!maxHeap.isEmpty()){
        sortedArray.unshift(maxHeap.extractMax())
    }

    return sortedArray
}

const arr = [10,5,42,6,3,1];

// console.log(heapSort(arr))