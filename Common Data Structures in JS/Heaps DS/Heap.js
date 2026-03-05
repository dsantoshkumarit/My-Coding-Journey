export class Heap{
    constructor(order = "min", array = [] ){
        this.heap = array;
        if(this.heap.length){
            if(order === "min"){
                this.buildMinHeap();
            }
            else{
                this.buildMaxHeap();
            }
        }
    }

    //============== Common heap methods
    root(){
        return this.heap.length ? this.heap[0] : null;
    }
    isEmpty(){
        return this.heap.length === 0; 
    }
    size(){
        return this.heap.length;
    }
    swap(A, i, j){
        [A[i], A[j]] = [A[j], A[i]];
    }
    getHeap(){
        return this.heap;
    }

    //============ Min heap methods
    minHeapify(i, N, A = this.heap){
        let smallest = i;
        const lc = 2 * i + 1;
        const rc = 2 * i + 2;
        if(lc < N && A[lc] < A[smallest]){
            smallest = lc;
        }
        if(rc < N && A[rc] < A[smallest]){
            smallest = rc;
        }
        if(smallest !== i){
            this.swap(A,i ,smallest);
            return this.minHeapify(smallest, N, A);
        }
    }
    buildMinHeap( A = this.heap){
        const N = A.length;
        for(let i = Math.floor(N/2) - 1; i >= 0; i--){
            this.minHeapify( i, N, A);
        }
    }
    insertMinHeap( val ){
        let i = this.heap.length;
        this.heap.push(val);
        while(i > 0){
            const p = Math.floor((i-1)/2);
            if(this.heap[i] < this.heap[p]){
                this.swap(this.heap,i, p);
                i = p;
            }
            else{
                break;
            }
        }
    }
    getMin(){
        if(this.heap.length === 0){
            return null;
        }
        else if(this.heap.length === 1){
            return this.heap.pop();
        }
        else{
            let temp = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.minHeapify(0, this.heap.length);
            return temp;
        }
    }

    //========== Max heap methods
    maxHeapify(i, N, A = this.heap){
        let largest = i;
        const lc = 2 * i + 1;
        const rc = 2 * i + 2;
        if(lc < N && A[lc] > A[largest]){
            largest = lc;
        }
        if(rc < N && A[rc] > A[largest]){
            largest = rc;
        }
        if(largest !== i){
            this.swap(A,i ,largest);
            return this.maxHeapify(largest, N, A);
        }
    }
    buildMaxHeap( A = this.heap){
        const N = A.length;
        for(let i = Math.floor(N/2) - 1; i >= 0; i--){
            this.maxHeapify( i, N, A);
        }
    }
    insertMaxHeap( val ){
        let i = this.heap.length;
        this.heap.push(val);
        while(i > 0){
            const p = Math.floor((i-1)/2);
            if(this.heap[i] > this.heap[p]){
                this.swap(this.heap,i, p);
                i = p;
            }
            else{
                break;
            }
        }
    }
    getMax(){
        if(this.heap.length === 0){
            return null;
        }
        else if(this.heap.length === 1){
            return this.heap.pop();
        }
        else{
            let temp = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.maxHeapify(0, this.heap.length);
            return temp;
        }
    }
}
export class MinHeap{
    constructor(array = [] ){
        this.heap = array;
        if(this.heap.length){
            this.buildMinHeap();
        }
    }

    //============== Common heap methods
    root(){
        return this.heap.length ? this.heap[0] : null;
    }
    isEmpty(){
        return this.heap.length === 0; 
    }
    size(){
        return this.heap.length;
    }
    swap(A, i, j){
        [A[i], A[j]] = [A[j], A[i]];
    }
    getHeap(){
        return this.heap;
    }

    //============ Min heap methods
    minHeapify(i, N, A = this.heap){
        let smallest = i;
        const lc = 2 * i + 1;
        const rc = 2 * i + 2;
        if(lc < N && A[lc] < A[smallest]){
            smallest = lc;
        }
        if(rc < N && A[rc] < A[smallest]){
            smallest = rc;
        }
        if(smallest !== i){
            this.swap(A,i ,smallest);
            return this.minHeapify(smallest, N, A);
        }
    }
    buildMinHeap( A = this.heap, N = this.heap.length){
        for(let i = Math.floor(N/2) - 1; i >= 0; i--){
            this.minHeapify( i, N, A);
        }
    }
    insertMinHeap( val ){
        let i = this.heap.length;
        this.heap.push(val);
        while(i > 0){
            const p = Math.floor((i-1)/2);
            if(this.heap[i] < this.heap[p]){
                this.swap(this.heap,i, p);
                i = p;
            }
            else{
                break;
            }
        }
    }
    getMin(){
        if(this.heap.length === 0){
            return null;
        }
        else if(this.heap.length === 1){
            return this.heap.pop();
        }
        else{
            let temp = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.minHeapify(0, this.heap.length);
            return temp;
        }
    }
}
export class MaxHeap{
    constructor( array = [] ){
        this.heap = array;
        if(this.heap.length){
            this.buildMaxHeap();
        }
    }

    //============== Common heap methods
    root(){
        return this.heap.length ? this.heap[0] : null;
    }
    isEmpty(){
        return this.heap.length === 0; 
    }
    size(){
        return this.heap.length;
    }
    swap(A, i, j){
        [A[i], A[j]] = [A[j], A[i]];
    }
    getHeap(){
        return this.heap;
    }

    //========== Max heap methods
    maxHeapify(i, N, A = this.heap){
        let largest = i;
        const lc = 2 * i + 1;
        const rc = 2 * i + 2;
        if(lc < N && A[lc] > A[largest]){
            largest = lc;
        }
        if(rc < N && A[rc] > A[largest]){
            largest = rc;
        }
        if(largest !== i){
            this.swap(A,i ,largest);
            return this.maxHeapify(largest, N, A);
        }
    }
    buildMaxHeap( A = this.heap, N = this.heap.length){
        for(let i = Math.floor(N/2) - 1; i >= 0; i--){
            this.maxHeapify( i, N, A);
        }
    }
    insertMaxHeap( val ){
        let i = this.heap.length;
        this.heap.push(val);
        while(i > 0){
            const p = Math.floor((i-1)/2);
            if(this.heap[i] > this.heap[p]){
                this.swap(this.heap,i, p);
                i = p;
            }
            else{
                break;
            }
        }
    }
    getMax(){
        if(this.heap.length === 0){
            return null;
        }
        else if(this.heap.length === 1){
            return this.heap.pop();
        }
        else{
            let temp = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.maxHeapify(0, this.heap.length);
            return temp;
        }
    }
}
export const HeapSort = (A) => {
    const swap = (A, i, j) => {
        [A[i], A[j]] =[A[j], A[i]];
    };
    const maxHeapify = (A, i, N) =>{
        let largest = i;
        const lc = 2 * i + 1;
        const rc = 2 * i + 2;
        if(lc < N && A[lc] > A[largest]){
            largest = lc;
        }
        if(rc < N && A[rc] > A[largest]){
            largest = rc;
        }
        if(largest !== i){
            swap(A,i ,largest);
            return maxHeapify(largest, N, A);
        }
    }
    const buildMaxHeap = ( A, N ) => {
        for(let i = Math.floor(N/2) - 1; i >= 0; i--){
            maxHeapify( A, i, N);
        }
    }
    buildMaxHeap(A, A.length);
    const N = A.length;
    let j = N-1;
    while(j > 0){
        swap(A, 0, j);
        j--;
        buildMaxHeap(A, j);
    }
};

// TC : O(NlogK), SC:O(K)
const KthLargest = (A, K) => {
    const minH = new MinHeap();
    for(let i=0; i<K; i++){
        minH.insertMinHeap(A[i]);
    }
    for(let i = K; i < A.length; i++){
        minH.insertMinHeap(A[i]);
        minH.getMin();
    }
    return minH.getMin();
};