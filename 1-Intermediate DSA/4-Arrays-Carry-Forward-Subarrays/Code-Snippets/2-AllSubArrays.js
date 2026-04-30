/* ================ Generate all subarrays
You are given an array A of N integers.
Return a 2D array consisting of all the subarrays of the array
Note : The order of the subarrays in the resulting 2D array does not matter.

    Constraints : 
        1 <= N <= 100
        1 <= A[i] <= 10^5
    Input param A : string[N]
    return : integer[][2]
    Example:
        Input:
            A = [1, 2, 3]
        Output:
            [[1], [1, 2], [1, 2, 3], [2], [2, 3], [3]]     
================= */

export const getAllSubArrays = (A) => {
    const ansArr = [];
    const n = A.length;
    for(let i=0; i<n; i++){
        for(let j=i; j<n; j++){
            const tempArr = [];
            for(let k=i; k<=j; k++){
                tempArr.push(A[k]);
            }
            ansArr.push(tempArr);
        }
    }
    return ansArr;
}

/* ================ 
Solution Observations:
    Worst case TC to print one sub-array = O(N)
    Worst case TC to print all(N(N+1)/2) sub-arrays = O(N^2) * O(N) = O(N^3)
    TC : O(N^3) 
    SC : O(N)
================= */
