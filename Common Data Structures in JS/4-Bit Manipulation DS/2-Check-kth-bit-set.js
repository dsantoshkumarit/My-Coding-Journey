/*
    Check if k-th bit of a number(N) is set or not.
*/

/*
    Logic:
        x = N & (1<<k)
            if x > 0 => k-th bit was set.
            else if x = 0 => k-th bit was unset.
*/
// Time(O(1)) , Space(O(1))
const isKthBitSet = (N,k) => (N & (1<<k)) > 0;

/*
    ============ Problem 1 : Count the number of set bits in N.
*/
/*
    Approach 1 : If we know the integer size lets say 32-bits.
        1. For each bit of N do "&" with 1.
            a) If the result is 1 then increment count.
            b) If the result is 0 then continue without incrementing count.
        2. Return the count.
        Time(O(32)) - As we iterate through 32-bits and Space(O(1))
*/
const countSetBits_1 = (N) => {
    let count = 0;
    for(let i=0; i<32; i++){
        if( isKthBitSet(N,i)){
            count++;
        }
    }
    return count;
}

/*
    Approach 2 : If we know the integer size lets say 32-bits.
        1. Until N > 0:
            a) If the LSB of N is 1 increment the count.
            b) Right shift the N by 1.
        2. Return the count.
        - Time(O(logN) to O(32)) - As we might get N = 0 before iterating through 32-bits
        - Space(O(1))
*/
const countSetBits_2 = (N) => {
    let count = 0;
    while(N > 0){
        if( N & 1 === 1){
            count++;
        }
        N = N >> 1;
    }
    return count;
}

/*
    ============ Problem 2 : Toggle k-th bit of N.
*/
/*
    Approach : 
        We can use N EXOR (1 << k) to toggle the k-th bit.
        - Time(O(1)) 
        - Space(O(1))
*/
const toggleKthBit = (N, k) => {
    return N ^ (1<<k);
}