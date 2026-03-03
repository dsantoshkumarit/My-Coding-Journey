/*
    Given an integer array where every number occurs twice except for one number. Find the unique number.
*/

/* 
    Approach 1 : Hashing - TC and SC -> O(N)
*/

/*
    Approach 2 : XOR(^) - TC - (O(N)), SC - O(1)
    Explanation :
    As we know a ^ b ^ c = a ^ c ^ b = c ^ b ^ a =....
    => a ^ b ^ a ^ b ^ c = a ^ a ^ b ^ b ^ c = 0 ^ 0 ^ c = c
*/

const getUnique = (arr) =>{
    let ans = arr[0];
    for(let i = 1; i<arr.length; i++){
        ans ^= arr[i];
    }
    return ans;
};

console.log("Unique Number :",getUnique([1,2,1,2,3]));
//output - Unique Number : 3