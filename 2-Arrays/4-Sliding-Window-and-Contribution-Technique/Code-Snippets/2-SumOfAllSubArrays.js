/* ============== Sum of All Subarrays

Problem Description
You are given an integer array A of length N.
You have to find the sum of all subarray sums of A.
More formally, a subarray is defined as a contiguous part of an array which we can obtain by deleting zero or more elements from either end of the array.
A subarray sum denotes the sum of all the elements of that subarray.
Note : Be careful of integer overflow issues while calculations. Use appropriate datatypes.

Problem Constraints:
1 <= N <= 10^5
1 <= A[i] <= 10^4

Input Format:
The first argument is the integer array A.

Output Format:
Return a single integer denoting the sum of all subarray sums of the given array.


Example Input:
Input 1:
A = [1, 2, 3]
Input 2:
A = [2, 1, 3]

Example Output:
Output 1:
20
Output 2:
19

Example Explanation
Explanation 1:
The different subarrays for the given array are: [1], [2], [3], [1, 2], [2, 3], [1, 2, 3].
Their sums are: 1 + 2 + 3 + 3 + 5 + 6 = 20
Explanation 2:
The different subarrays for the given array are: [2], [1], [3], [2, 1], [1, 3], [2, 1, 3].
Their sums are: 2 + 1 + 3 + 3 + 4 + 6 = 19
================= */

/* ========= Carry Forward Method 

    const AllSubArraysSum = (A) => {
        const N = A.length;
        let totalSum = 0;
        for(let i=0; i<N; i++){
            for(let j=i; j<N; j++){
                totalSum += A[j];
            }
        }    
        return totalSum;
    };
    /* ================ 
    Solution Observations:
        TC : O(N^2) 
        SC : O(1)
    ================= 
*/

/* ================ Optimized Approach : 
             0,1,2,3,4
    Array = [1,2,3,4,5]
    Lets find in how many sub-arrays does index-2 (elem is 3) is present:
        [0 -> 2]=[1,2,3],   [0 -> 3]=[1,2,3,4],   [0 -> 4]=[1,2,3,4,5]
        [1 -> 2]=[2,3],     [1 -> 3]=[2,3,4],     [1 -> 4]==[2,3,5]
        [2 -> 2]=[3],       [2 -> 3]=[3,4],       [2 -> 4]=[3,4,5]
        No(start indexes) = 3 [Since 0,1,2]
        No(End indexes) = 3 [Since 2,3,4]
        Total no of sub-arrays = No(start indexes) * No(End indexes) = 3*3 = 9
    Array : a[0], a[1], ..... , a[i], a[i-1], ...., a[n-1]
            |______________________|                     |
                    |              |_____________________|
                    |                         |
                    V                         V
                   [0,i]                     [i,n-1]
                i-0+1 = i+1                 n-1-i+1 = n-i
    Finding the no of sub arrays the i-th index is present: (i+1)*(n-i)
*/
const AllSubArraySum = (A) => {
    // const N = A;
    // let totalSum = 0;
    // for(let i=0; i<N; i++){
    //     totalSum += (i+1)*(n-i)*A[i];
    // }
    // return totalSum;

    // For bigger Numbers:
    const n = A.length;
    let sum = BigInt(0);
    for(let i=0; i<n; i++){
        sum += BigInt((i+1)*(n-i))*(A[i]);
    }
    return sum;
};
/* ================ 
    Solution Observations:
        TC : O(N) 
        SC : O(1)
================= */