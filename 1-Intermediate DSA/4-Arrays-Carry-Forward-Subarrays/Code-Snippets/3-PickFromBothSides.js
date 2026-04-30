
/* ================  Pick from both sides!
You are given an integer array A of size N.
You have to perform B operations. In one operation, you can remove either the leftmost or the rightmost element of the array A.
Find and return the maximum possible sum of the B elements that were removed after the B operations.
NOTE: Suppose B = 3, and array A contains 10 elements, then you can:
Remove 3 elements from front and 0 elements from the back, OR
Remove 2 elements from front and 1 element from the back, OR
Remove 1 element from front and 2 elements from the back, OR
Remove 0 elements from front and 3 elements from the back.
    Constraints : 
        1 <= N <= 10^5
        1 <= B <= N
        -10^3 <= A[i] <= 10^3
    Input param A : integer[N]
    Input param B : integer
    return : integer - Return an integer denoting the maximum possible sum of elements you removed.
    Example:
        Input:
            A = [5, -2, 3 , 1, 2]
            B = 3
        Output:
            8 - Remove element 5 from front and element (1, 2) from back so we get 5 + 1 + 2 = 8
================= */

const pfSumArr = (A) => {
    const n = A.length;
    const pfArr = [A[0]];
    for(let i=1; i<n; i++){
        pfArr.push(pfArr[i-1]+A[i]);
    }
    return pfArr;
}
export const pickFromBothSides = (A, B) => {
    const n = A.length;
    const pfArr = pfSumArr(A);
    let l = -1; r = n-B;
    let maxSum = -Infinity;
    if(B === n){
        return pfArr[n-1];
    }
    while(l<B){
        let sum = 0;
        if(l === -1){
            sum = pfArr[n-1] - pfArr[r-1];
        }
        else if(r === n){
            sum = pfArr[l];
        }
        else {
            sum = pfArr[l] + pfArr[n-1] - pfArr[r-1]
        }
        if(sum > maxSum){
            maxSum = sum;
        }
        l++;
        r++;
    }
    return maxSum;
}

/* ================ 
Solution Observations:
    TC : O(N) 
    SC : O(N)
================= */