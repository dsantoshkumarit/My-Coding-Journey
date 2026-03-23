# Check if substring is palindrome
```js
const isPalindrome = (str, start, end) => {
    let i = start;
    let j = end;
    while(i < j){
        if(str[i] !== str[j] ){
            return false;
        }
        i++;
        j--;
    }
    return true;
};
```
- TC: O(N)
- SC: O(1)

# Find the longest palindrome substring:
- Given a string s, calculate the length of longest palindromic substring in s.
- Eg: 
    - Input: "anamadamm" 
    - Output: 5
    - Explanation: The substring "madam" of size 5 is the longest palindromic substring that can be formed from given string.
## Bruteforce Approach:
- For each substring with start index "start" and end index "end":
    - Check isPalindrome(str,start,end):
        - If "true" then check if it is the biggest palindrome so far.
        - If "false" then continue.
- Complexities:
    - TC: O(N^3) - There will be N^2 substrings and to check if it is palindrome it is O(N) time. So O(N^2*N) = O(N^3).
    - SC: O(1) - No extra array variables created. 
- Code:
```js
    const longestPalindromeSubstring = (str) => {
        let maxSubstrLen = 0;
        const N = str.length;
        for(let i=0; i<N; i++){
            for(let j=i; j<N; j++){
                if(isPalindrome(str,i,j)){
                    maxSubstrLen = Math.max(maxSubstrLen, j-i+1);
                }
            }
        }
        return maxSubStrLen;
    };
``` 
## Optimized approach:
- If the center of the palindrome string is provided we can find the palindrome by expanding on the left and right side. - **O(N)**
- So we take every character of the string as the center of palindrome. - **O(N)**
- For odd length substring, take every character as a center and expand its center and gets maximum size palindromic substring.
- For even length substring, take the current and adjacent character as a center and expand its center and get maximum size palindromic substring.
- Complexities:
    - TC:O(N^2) - As we are expanding(O(N)) for each character(O(N)).
    - SC:O(1)
- Code:
```js
    const expandAndCheck = (str, c1, c2) => {
        const N = str.length;
        while(c1 >= 0 && c2 <= N && str[c1] === str[c2]){
            c1--;
            c2++;
        }
        return c2-c1-1;
    };
    const longestPalindromeSubString = (str) => {
        let ans = 0;
        const N = str.length;
        //for odd length sub-string
        for(let i=0; i<N; i++){
            ans = Math.max(ans,expandAndCheck(str,i,i));
        }
        for(let i=0; i<N-1; i++){
            ans = Math.max(ans,expandAndCheck(str,i,i+1));
        }
        return ans;
    };
```