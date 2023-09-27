import { swapArrayItems } from "./0-SwappingArrayItems";

export const reverseArray = (A) => {
    let l = 0, r = A.length;
    while(l<r) {
        swapArrayItems(A, l, r);
        l++;
        r--;
    }
};

/* ================ 
Solution Observations:
    TC : O(N)
    SC : O(1)
================= */


/* ================ 
Given an array A of N integers and also given two integers l and r. Reverse the elements of the array A within the given inclusive range [l, r].

    Constraints : 
        1 <= N <= 10^5
        1 <= A[i] <= 10^9
        0 <= l <= r <= N - 1
    param A : integer[]
    return : null
    Example:
        Input:
            A = [1, 2, 3, 4]
            B = 2
            C = 3
        Output:
            [1, 2, 4, 3]
================= */
export const reverseSubArray = (A, l, r) =>{
    if(l >= 0 && r < A.length) {
        while(l<r) {
            swapArrayItems(A, l, r);
            l++;
            r--;
        }
    } 
};

/* ================ 
Solution Observations:
    TC : O(N)
    SC : O(1)
================= */