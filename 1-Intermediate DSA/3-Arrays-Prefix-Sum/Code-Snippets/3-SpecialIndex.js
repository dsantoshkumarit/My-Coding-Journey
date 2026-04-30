/* ================ 
Given an array, arr[] of size N, the task is to find the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.

    Constraints : 
        1 <= n <= 10^5
        -10^5 <= A[i] <= 10^5
    Input param A : integer[N]
    return : integer - Return the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.
    Example:
        Input:
            A=[2, 1, 6, 4]
        Output:
            [10, 5] 
        Explanation:
            1 - Removing arr[1] from the array modifies arr[] to { 2, 6, 4 } 
                such that, arr[0] + arr[2] = arr[1]. 
                Therefore, the required output is 1. 
================= */

import { prefixSumArrayEvenIndex, prefixSumArrayOddIndex } from "./1-FindPrefixSumArray";

export const specialIndexCount = (A) => {
    const pfE = prefixSumArrayEvenIndex(A);
    const pfO = prefixSumArrayOddIndex(A);
    const n = A.length;
    let specialIndicesCount = 0;
    for(let i=0; i<n; i++){
        let sumE = 0, sumO = 0;
        if(i === 0){
            sumE = pfO[n-1] - pfO[i]; 
            sumO = pfE[n-1] - pfE[i];
        }
        else {
            sumE = pfE[i-1] + pfO[n-1] - pfO[i];
            sumO = pfO[i-1] + pfE[n-1] - pfE[i];
        }
        if(sumE === sumO){
            specialIndicesCount++;
        }
    }
    return specialIndicesCount;
}

/* ================ 
Solution Observations:
    TC : O(N) 
    SC : O(N)
================= */