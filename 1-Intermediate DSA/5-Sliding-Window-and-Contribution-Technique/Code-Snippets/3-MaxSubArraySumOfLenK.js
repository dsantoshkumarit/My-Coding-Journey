/* ==============
Given A[N] print max sub-array sum among the sub-arrays of length 'K'

// BruteForce : using carry-forward sub-array Sum method:
    For each sub-array:   -> O(N^2)
        - temp-sum = 0
        - Check if length < K
            - Continue
        - Check if length > K
            - break
        - Check if length == K
            - If yes then compare temp-sum so far with the current max-sum and update the max-sum
    return max-sum value;
*/
/* ================ 
    Solution Observations:
        TC : O(N^2) 
        SC : O(1)
================= */

// ========= Optimized - Using Sliding window of size K:
const MaxSubArraySumLenK = (A,K) => {
    let N = A;
    let tempSum = 0;
    for(let i=0; i<K; i++){
        tempSum += A[i];
    }
    let maxSum = tempSum;
    maxSum = Math.max(maxSum, tempSum);
    let i=0, j = K;
    while(j < N){
        tempSum = tempSum - A[i] + A[j];
        maxSum = Math.max(maxSum, tempSum);
        i++;
        j++;
    }
    return maxSum;
};
/* ================ 
    Solution Observations:
        TC : O(N) 
        SC : O(1)
================= */

/* problem with big value:
Given an array A of length N. Also given are integers B and C.Return 1 if there exists a subarray with length B having sum C and 0 otherwise.

Problem Constraints:
1 <= N <= 10^5
1 <= A[i] <= 10^4
1 <= B <= N
1 <= C <= 10^9

Example Input
Input 1:
A = [4, 3, 2, 6, 1]
B = 3
C = 11

Example Output
Output 1:
1

function MaxSubArraySumLenK(A, B, C){
    let sum = BigInt(0);
    const n = A.length;
    for(let i=0; i<B; i++){
        sum += A[i];
    }
    if(sum === BigInt(C)){
        return 1;
    }
    let i = 1, j = B;
    while(j < n){
        sum += BigInt(A[j] - A[i-1]);
        i++;
        j++;
        if(sum === BigInt(C)){
            return 1;
        }
    }
    return 0;
}
*/