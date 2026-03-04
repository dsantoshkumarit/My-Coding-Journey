/* ================ 
Given an integer A. Return the count of prime numbers less than or equal to A.
    Constraints : 1 <= A <= 10^3
    param A : integer
    return an integer
================= */

/* ================= 
Example Explanation:

Explanation 1:
For A = 19, Primes <= 19 are 2, 3, 5, 7, 11, 13, 17, 19

Explanation 2:
For A = 1, There are no primes <= 1
================= */
const isPrime = (val) => {
    for(let i=2;i*i <= val; i++){
        if(val % i === 0){
            return 0;
        }
    }
    return 1;
}
function countPrimes(A){
    let count = 0;
    for(let i=2; i<= A ; i++){
        if(isPrime(i)){
            count++;
        }
    }
    return count;
}

/* ================ 
Solution Observations:
    Time Complexity : O(N*sqrt(N))
================= */