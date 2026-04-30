# Question Problem 3: Count of Distinct Elements:
- Given an array of N elements, find the count of distinct elements.
- Example:
    - 1) Input:
        - N = 5
        - [3,5,6,5,4]
    - Output:
        - ans = 4
        - Explanation: We have to return different elements present. If some element repeats, we will count it only once.

    - 2) Input:
        - N = 3
        - [3,3,3]
    - Output:
        - ans = 1
# Bruteforce Approach:
- Create a copy of the inputArray as newArray.
- For each element in the inputArray:
    - Check if it is repeated from the next index:
        - If repeated mark the value at that index as -1 in the newArray.
- Loop through the newArray and count the values other than -1.
- Return the count.
- Complexities:
    - TC: O(N^2)
    - SC: O(N)
- Code:
```js
    const CountOfDistinctElements = (arr) => {
        const N = arr.length;
        const newArr = Array.from(arr);
        for(let i=0;i<N; i++){
            for(let j=i+1; j<N; j++){
                if(arr[i] === arr[j]){
                    newArr[j] = -1;
                }
            }
        }
        return newArr.filter(el=>el !== -1).length;
    };
```

# Optimized Approach:
- Create a Hashset: CountSet<int> variable.
- For each element in the inputArray:
    - Add it into the created CountSet variable.
- Return the size of the CountSet as it holds only non-duplicate(unique) values.
- Complexities:
    - TC: O(N)
    - SC: O(N)
- Code:
```js
    const CountOfDistinctElements = (arr) => {
        const N = arr.length;
        const countSet = new Set();
        for(let i=0;i<N; i++){
            countSet.add(arr[i])
        }
        return countSet.size;
    };
```