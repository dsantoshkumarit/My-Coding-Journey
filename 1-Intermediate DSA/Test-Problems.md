# Problem 1 Find the maximum number of consecutive 1's after replacement
Given an array of 1's and 0's, you are allowed to replace only one 0 with 1. Find the maximum number of consecutive 1's that can be obtained after making the replacement.

## Example 1
Input = [1, 1, 0, 1, 1, 0, 1, 1]
Output = 5

## Explanation:
If we replace 0 at 2nd index or 0 at 5th index with 1, in both cases we get 5 consecutes 1's.

## Solution Approach:
    - Maintain a variable say "ans", which keeps track of the maximum consecutive 1's encountered.
    - Initialize it with 0.
    - Iterate through the input array. When we encounter a zero at an index, we do the following:
        - Count no. of consecutive 1's on left: l
        - Count no. of consecutive 1's on right: r
        - If (l+r+1 > ans), replace ans with (l+r+1).
    - Edge case: When all the array elements are 1's, then return the length of the whole array.
    - Complexities: 
        - TC:O(N) - Each value is visited max of 3 times => 3N ~ N 
        - SC:O(1)
```js
    const expand = (arr, c) => {
        let i = c-1;
        let j = c+1;
        let l = 0;
        let r = 0;
        while(i>=0 && arr[i] === 1){
            l++;
            i--;
        }
        while(j<arr.length && arr[j] === 1){
            r++;
            j++;
        }
        return l+r+1;
    };
    const maxConsecutiveOnes = (arr) => {
        let ans = 0;
        let N = arr.length;
        let onesCount = 0;
        for(let i=0; i< N ; i++){
            if(arr[i] === 1)
            {
                onesCount++;
            }
        }
        if(onesCount === N){
            return N;
        }
        for(let i=0; i< N ; i++){
            if(arr[i] === 0){
                ans = Math.max(ans,expand(arr,i));
            }
        }
        return ans;
    };
```

# Problem 2 Majority Element
Given an array of N integers, find the majority element.
The majority element is the element that occurs more than n/2 times where n is size of the array.

## Example 1:
A[ ] = { 2, 1, 4 }
Ans = No Majority element
## Explanation:
Here, none of the elements have frequency more than n/2 where n is 3.

## Example 2
A[ ] = { 3, 4, 3, 2, 4, 4, 4, 4}
Ans = 4
## Explanation;
Here, frequency of 4 is more than n/2 that is 5 where n is 8. So 4 will be the majority element.