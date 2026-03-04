/* ================ Leaders in an array
Given an integer array A containing N distinct integers, you have to find all the leaders in array A. An element is a leader if it is strictly greater than all the elements to its right side.
NOTE: The rightmost element is always a leader.

    Constraints : 
        1 <= N <= 10^5
        1 <= A[i] <= 10^8
    Input param A : integer[N]
    return : integer[] - Return an integer array denoting all the leader elements of the array.
    Example:
        Input:
            A = [16, 17, 4, 3, 5, 2]
        Output:
            [17, 2, 5] -  
                Element 17 is strictly greater than all the elements on the right side to it.
                Element 2 is strictly greater than all the elements on the right side to it.
                Element 5 is strictly greater than all the elements on the right side to it.
                So we will return these three elements i.e [17, 2, 5], we can also return [2, 5, 17] or [5, 2, 17] or any other ordering.
================= */

/* ================ Brute Force
    export const leadersInArray = (A) => {
        const ans = [];
        const len = A.length;
        for(i=0; i<len; i++){
            let j = i+1;
            for(; j<len; j++){
                if(A[j] > A[i]){
                    break;
                }
            }
            if(j === len){
                ans.push(A[i]);
            }
        }
        return ans;
    }
*/
/* ===============
    Solution Observations:
    TC : O(N^2) 
    SC : O(N)
*/


export const leadersInArray = (A) => {
    const n = A.length;
    let maxTillNow = A[n-1];
    let ans = [A[n-1]];
    for(let i=n-2; i>=0; i--){
        if(A[i] > maxTillNow){
            maxTillNow = A[i];
            ans.push(A[i]);
        }
    }
    return ans;
}

/* ================ 
Solution Observations:
    TC : O(N) 
    SC : O(N)
================= */