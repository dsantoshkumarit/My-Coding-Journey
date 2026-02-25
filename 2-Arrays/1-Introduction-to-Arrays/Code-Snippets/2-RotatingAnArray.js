import { reverseSubArray } from "./1-ReversingArray";


/* ================ 
Given an integer array A of size N and an integer B, you have to return the same array after rotating it B times towards the right.
    Constraints : 
        1 <= N <= 10^5
        1 <= A[i] <=10^9
        1 <= B <= 10^9
    param A : integer[]
    return : null
    Example:
        Input:
            A = [1, 2, 3, 4]
            B = 2
        Output:
            [3, 4, 1, 2] : Rotate towards the right 2 times - [1, 2, 3, 4] => [4, 1, 2, 3] => [3, 4, 1, 2]
================= */

// =========== Simple Approach =========== //
export const rotateArrayRight = (A, B) => {
    let N = A.length;
    for(let i=0; i<B; i++){
        let temp = A[N-1];
        for(let j=N-1; j>0; j--){
            A[j] = A[j-1];
        }
        A[0] = temp;
    }
};

/* ================ 
Solution Observations:
    TC : O(B*N)
    SC : O(1)
================= */

// =========== Optimized Approach - 1 =========== //
export const rotateArrayRightOptimized_1 = (A, B) => {
    let N = A.length;
    let tempArr = new Array(N);
    for(let i=0; i<N; i++){
        let newIndex = (i+B)%N;
        tempArr[newIndex] = A[i];
    }
    A = tempArr;
};
/* ================ 
Solution Observations:
    TC : O(N)
    SC : O(N)
================= */

// =========== Optimized Approach - 2 =========== //
export const rotateArrayRightOptimized_2 = (A, B) => {
    let N = A.length;
    B = B%N;
    if(B > 0){
        reverseSubArray(A, 0, N-1);
        reverseSubArray(A, 0, B-1);
        reverseSubArray(A, B, N-1);
    }
};
/* ================ 
Solution Observations:
    TC : N/2 + (B)/2 + (N-B)/2 = O(N) 
    SC : O(1)
================= */

export const rotateArrayLeftOptimized_2 = (A, B) => {
    let N = A.length;
    B = B%N;
    if(B > 0){
        reverseSubArray(A, 0, N-1);
        reverseSubArray(A, 0, B-2);
        reverseSubArray(A, B-1, N-1);
    }
};
/* ================ 
Solution Observations:
    TC : N/2 + (B-1)/2 + (N-B+1)/2 = O(N) 
    SC : O(1)
================= */