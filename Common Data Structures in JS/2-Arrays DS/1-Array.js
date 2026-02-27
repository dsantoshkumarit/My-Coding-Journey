const reverseArray = (A) => {
    let l = 0, r = A.length-1;
    while(l < r){
        [A[l], A[r]] = [A[r], A[l]];
        l++;
        r--;
    }
};

//=== Find the maximum sum of contiguous non-empty subarray within an array A of length N.
// Problem Constraints:
// 1 <= N <= 1e6
// -1000 <= A[i] <= 1000

// Example Input
// Input 1:
//  A = [1, 2, 3, 4, -10] 

//  Example Output
// Output 1:
//  10 

//  Example Explanation
// Explanation 1:
//  The subarray [1, 2, 3, 4] has the maximum possible sum of 10. 
//Maximum sub array sum
const kadanesAlgo = (A) =>{ // TC : O(N), SC:O(1)
    let ans = A[0];
    let sum = 0;
    for(let i=0; i<A.length;i++){
        sum += A[i];
        if(sum > ans){// take the answer
            ans = sum;
        }
        if(sum < 0){ // dont take it and its containing sub arrays as it will reduce the sum
            sum = 0;
        }
    }
    return ans;
};

// Problem Description(Rain water trapped between buildings)
// Given a vector A of non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.
// Problem Constraints
// 1 <= |A| <= 100000

// Example Input
// Input 1:
// A = [0, 1, 0, 2]

// Example Output
// Output 1:
// 1

/* Logic:
    Brute Force:O(N^2)
    =>Understand that Area of water above i-th building = MIN(Max(Left Building Height), Max(Right Building Height)) - A[i] -> O(N)
    =>Total water = sum(i=0 to N-1)(Area of water above i-th building) -> O(N*N) => O(N^2)
    Optim1: TC:O(N), SC:O(N)
        Calculate the max left height PF array and max right PF array and keep it aside. => TC:O(N), SC:O(N)
        Calculate the sum for each building => TC:O(N) 
        => water above i-th building = MAX(MIN(maxL,maxR)-A[i],0);
*/

/* Optim2: TC:O(N), SC:(1)
        If we can store "h" units of water above a wall of height "x" then there must be a wall of height atlease "x+h" on its left as well as on its right.
        We can use 2 pointers for left and right end to maintain lmax and rmax respectively. 
*/
const waterTrapped = (A) =>{
    const N = A.length;
    let l = 0, r = N-1;
    let maxL = A[0], maxR = A[N-1];
    let waterTrappedAmount = 0;
    while(l < r){
        let water = 0;
        if(maxL < maxR){
            l++;
            water = maxL - A[l];
            maxL = Math.max(maxL, A[l]);
        }
        else{
            r--;
            water = maxR - A[r];
            maxR = Math.max(maxR, A[r]);
        }
        if(water > 0){
            waterTrappedAmount += water;
        }
    }
    return waterTrappedAmount;
}

/*
Problem Description:
Given an unsorted integer array, A of size N. Find the first missing positive integer.
Note: Your algorithm should run in O(n) time and use constant space.

Problem Constraints:
1 <= N <= 1000000
-109 <= A[i] <= 109

Example Input
Input 1:
[3, 4, -1, 1]

Example Output
Output 1:
2
Example Explanation
Explanation 1:
A = [3, 4, -1, 1]
First positive integer missing from the array is 2.
*/

/*
Bruteforce: TC:O(N), SC:O(N)
1. Create an ans array: ans = Array(N).fill(false)
2. Loop through input array and mark the corresponding value index in ans array as true: ans[A[i]-1] = false
3. Loop through ans array and return the first false value index+1: if(!ans[i]) return i+1;
*/
/*
Optimized Approach : TC:O(N), SC:O(1)
1. Make all the -ve array elements to +ve by replacing it with N+2 or N+3 ... 
2. For each value in the array make its corresponding index position value to -ve.
3. Loop through the array and return the 1st +ve value index+1
*/
const findMissingPositiveInteger = (A) =>{
    const N = A.length;
    //Make all the array elements to +ve
    for(let i=0; i<N; i++){
        if(A[i] <= 0){
            A[i] = N+2;
        }
    }
    //For each value in the array make its corresponding index position value to -ve.
    for(let i=0; i<N; i++){
        let val = Math.abs(A[i]);
        if(val <= N && A[val-1] > 0){
            A[val-1] *= -1;
        }
    }
    //Loop through the array and return the 1st +ve value's index+1
    for(let i=0; i<N; i++){
        if(A[i] > 0 ){
            return i+1;
        }
    }
    return N+1;
};