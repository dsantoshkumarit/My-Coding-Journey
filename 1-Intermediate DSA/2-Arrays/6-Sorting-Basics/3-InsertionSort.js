/*
Approach;
    Line 2: We don’t process the first element, as it has nothing to compare against.
    Line 3: Loop from i=1 till the end, to process each element.
    Line 4: Extract the element at position i i.e. array[i]. Let it be called E.
    Line 5: To compare E with its left elements, loop j from i-1 to 0
    Line 6, 7: Compare E with the left element, if E is lesser, then move array[j] to right by 1.
    Line 8: Once we have found the position for E, place it there.
*/

const insertionSort = (A,N) => {
    for(let i=1; i<N; i++){
        let currentElem = A[i];
        let j = i-1;
        while(j>=0 && A[j] > currentElem){
            A[j+1] = A[j];
            j--;
        }
        A[j+1] = currentElem;
    }
};

/*
    Time Complexity:
        Worst Case: O(N^2), when the array is sorted in reverse order.
        Best Case: O(N), when the data is already sorted in desied order, in that case there will be no swap.
    Space Complexity: O(1)
*/