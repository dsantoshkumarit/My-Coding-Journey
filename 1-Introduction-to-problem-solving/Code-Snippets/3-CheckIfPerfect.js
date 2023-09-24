/* ================ 
Given an integer A. Return 1 if A is perfect number and return 0 if not. 
-> Perfect number is a positive integer which is equal to the sum of its proper positive divisors.
-> A proper divisor of a natural number is the divisor that is strictly less than the number.
    Constraints : 1 <= A <= 10^6
    param A : integer
    return an integer
================= */

/* ================= 
Example Explanation:

Explanation 1:
For A = 4, the sum of its proper divisors = 1 + 2 = 3, is not equal to 4.

Explanation 2:
For A = 6, the sum of its proper divisors = 1 + 2 + 3 = 6, is equal to 6. 
================= */

function checkIfPerfect(A){
    let sum = 1;
    if(A === 1){
        return 0;
    }
    for(let i=2; i*i<= A;i++){
        if(A%i === 0 ){
            if(i*i !== A){
                sum += A/i;
            }
            sum += i;
        }
    }
    if(sum === A){
        return 1;
    }
    return 0;
}

/* ================ 
Solution Observations:
    Time Complexity : O(sqrt(N))
================= */