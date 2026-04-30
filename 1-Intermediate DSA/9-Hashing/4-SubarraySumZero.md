# Problem Question 4: Subarray sum 0
- Given an array of N elements, check if there exists a subarray with a sum equal to 0.
- Example
    - Input:
        - N = 10
        - [2,2,1,-3,4,3,1,-2,-3,2]
    - Output:
        - If we add elements from index 1 to 3, we get 0; therefore, the answer is true.
# Bruteforce Approach:
- Find the sum of each subarray and check if its value is 0. => O(N^3).
- We can optimized this using carry-forward method. => O(N^2).
    - TC:O(N^2)
    - SC:O(1)
- Code:
```js
    const SubArraySumZero = (arr) => {
        const N = arr.length;
        for(let i=0; i<N; i++){
            let sum = 0;
            for(let j=i; j<N; j++){
                sum += arr[j];
                if(sum === 0){
                    return true;
                }
            }
        }
        return false;
    };
```  

# Optimized Approach:
- If we find the Prefix-sum array of the input array 
    - If it has same prefix values in the prefix-sum array => It means there is a subarray between those repeated values whose sum is zero.
    - If there is zero(0) in the prefix-sum array then there is a subarray whose whose sum is zero.
    - Eg: 
        - Arr = [2,2,1,-3]
        - PF(Arr) = [2,4,5,2]
        - If PF[0] = Sum(0 -> 0) = 2 
        - If PF[3] = Sum(0 -> 3) = 2   
            => Sum(0 -> 0) + Sum(1 -> 3) = 2 
            => 2 + Sum(1 -> 3) = 2
            => Sum(1 -> 3) = 0 
            => Thus sum of subarray elements from index 1 to 3 will be 0.
    - If there is zero(0) in the prefix-sum array then there is a subarray whose whose sum is zero.
    - Eg:
        - Arr = [2,-5,3,6]
        - PF(Arr) = [2,-3,0,6]
        - PF[2] = Sum( 0 -> 2) = 0
        - Thus Sum of subarray elements from index 0 to 2 will be 0.
    
- Summary: If prefix sum array has same values or 0  in it then the input array will has a sub-array whose sum is 0.
- Logic:
    - Create prefix-sum array of input array.
    - Create a Hashset PFSet<int> variable.
    - Loop through each Prefix-sum array values:
        - If you encounter a 0 then return true.
        - If not then add that value in the hashset
    -  If size of PFSet < Input Array then return true.
    - Else return false. 
- Complexities:
    - TC:O(N)
    - SC:O(N)
- Code:
```js
    const SubArraySumZero = (arr) => {
        const N = arr.length;
        const PFArr = PrefixSum(arr); //Implement PrefixSum(arr)
        const PFSet = new Set();
        for(let i=0; i<N; i++){
            if(PFArr[i] === 0){
                return true;
            }
            PFSet.add(PFArr[i]);
        }
        if(PFSet.size !== N){
            return true;
        }
        return false;
    };
```