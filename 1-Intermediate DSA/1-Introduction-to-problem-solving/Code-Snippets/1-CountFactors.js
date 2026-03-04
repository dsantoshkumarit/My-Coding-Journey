/* ================ 
Given an integer N, find the count of it's factors.
    Constraints : 1 <= N <= 10^9
    param N : integer
    return an integer
================= */
function countFactors(N){
    let count = 0;
    for(let i=1; i*i <= N; i++){
        if(N%i === 0){
            if( i*i === N){
                count++;
            }
            else {
                count+=2;
            }
        }
    }
    return count;
}

/* ================ 
Solution Observations:
    Time Complexity : O(sqrt(N))
================= */