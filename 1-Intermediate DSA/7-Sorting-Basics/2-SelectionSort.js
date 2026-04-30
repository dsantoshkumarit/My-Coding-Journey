/* Selection Sort:
Divide the queue of students into two parts – arranged and unarranged.
    - To begin with, place all the students in the unarranged queue.
    - From this unarranged queue, search for the shortest student and place him/her in the list of arranged students.
    - Again, from the unarranged queue, select the second-shortest student. Place this student in the arranged queue, just after the smallest student.
    - Repeat the above-given steps until all the students are placed into the arranged queue.
*/

const selectionSort = (A,N) => {
    let minIndex = 0;
    for(let i=0;i<N-1;i++){
        minIndex = i;
        for(let j=i+1; j<N; j++){
            if(A[j] < A[minIndex]){
                minIndex = j;
            }
        }
        [A[i], A[minIndex]] = [A[minIndex], A[i]];
    }
};

/*
    Time Complexity: O(N^2) since we have to iterate entire list to search for a minimum element everytime.
    For 1 element, N iterations,
    For N elements, N^2 iterations.
    Space Complexity: O(1)
*/