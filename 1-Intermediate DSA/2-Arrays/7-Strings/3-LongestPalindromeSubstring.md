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