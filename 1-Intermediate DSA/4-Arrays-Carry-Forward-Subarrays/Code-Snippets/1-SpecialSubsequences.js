/* ================ Special Subsequences "AG"
You have given a string A having Uppercase English letters.
You have to find how many times subsequence "AG" is there in the given string.
NOTE: Return the answer modulo 10^9 + 7 as the answer can be very large.

    Constraints : 
        1 <= length(A) <= 10^5
    Input param A : string[N]
    return : integer
    Example:
        Input:
            A = "ABCGAG"
        Output:
            3 - Subsequence "AG" is 3 times in given string        
================= */

/*=========== Bruteforce Solution ============*/
export const getSubSequencesCountBF = (S) => {
    let cnt = 0;
    const n = S.length;
    for(let i=0; i<n; i++){
        if(S[i] === "A"){
            for(let j=i+1; j<n; j++){
                if(S[j] === "G"){
                    cnt++;
                }
            }
        }
    }
}
/* ================ 
Solution Observations:
    TC : O(N^2) 
    SC : O(1)
================= */


/*=========== Optimal Solution ============*/
export const getSubSequencesCount = (A) => {
    let countA = 0;
    let ans = 0;
    let mod = 10**9+7;
    for(let i=0; i<A.length; i++){
        if(A[i] === "A"){
            countA++;
        }
        if(A[i] === "G"){
            ans += countA;
            ans %= mod;
        }
    }
    return ans;
}

/* ================ 
Solution Observations:
    TC : O(N) 
    SC : O(1)
================= */
