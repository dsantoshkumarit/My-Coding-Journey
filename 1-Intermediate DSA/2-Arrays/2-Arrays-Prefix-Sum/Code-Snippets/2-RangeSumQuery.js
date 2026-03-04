/* ================ 
You are given an integer array A of length N.
You are also given a 2D integer array B with dimensions M x 2, where each row denotes a [L, R] query.
For each query, you have to find the sum of all elements from L to R indices in A (0 - indexed).
More formally, find A[L] + A[L + 1] + A[L + 2] +... + A[R - 1] + A[R] for each query.

    Constraints : 
        1 <= N, M <= 10^5
        1 <= A[i] <= 10^9
        0 <= L <= R < N
    Input param A : integer[N]
    Input param B : integer[M][2]
    return : integer[M] - integer array of length M where ith element is the answer for ith query in B.
    Example:
        Input:
            A = [1, 2, 3, 4, 5]
            B = [[0, 3], [1, 2]]
        Output:
            [10, 5] 
        Explanation:
            The sum of all elements of A[0 ... 3] = 1 + 2 + 3 + 4 = 10.
            The sum of all elements of A[1 ... 2] = 2 + 3 = 5.
================= */

import { prefixSumArray } from "./1-FindPrefixSumArray";

export const rangeSumQuery = (A, B) => {
    const pfArr = prefixSumArray(A);
    const resultArr = [];
    for(let i=0; i<B.length;i++ ){
        let [l, r] = [B[i][0], B[i][1]];
        if(l === 0){
            resultArr.push(pfArr[r]);
        }
        else {
            resultArr.push(pfArr[r]-pfArr[l-1]);
        }
    }
    return resultArr;
}

/* ================ 
Solution Observations:
    TC : O(N+M) 
    SC : O(N)
================= */