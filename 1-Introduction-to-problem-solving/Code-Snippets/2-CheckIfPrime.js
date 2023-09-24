/* ================ 
Given a number N. Return 1 if N is prime and return 0 if not. 
    Constraints : 1 <= N <= 10^9
    param N : integer
    return an integer
================= */

// =========== Solution 1 ============ //
function checkPrime(N){
        let count = 0;
        for(let i=1; i*i <= N; i++){
            if(count>2){
                return 0;
            }
            if(N%i === 0){
                if(i === N/i){
                    count++;
                }
                else {
                    count+=2;
                }
            }
        }
        if(count === 2){
            return 1;
        }
        else {
            return 0;
        }
    }

// =========== Solution 2 - better solution ============ //
    function checkPrimeBetter(N){
        if(N === 1){
            return 0;
        }
        for(let i=2;i*i<=N;i++){
            if(N%i === 0){
                return 0;
            }
        }
        return 1;
    }

/* ================ 
Solution Observations:
    Time Complexity : O(sqrt(N))
================= */