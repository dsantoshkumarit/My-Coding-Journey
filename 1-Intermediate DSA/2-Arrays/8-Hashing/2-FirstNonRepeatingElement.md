# Question: First non repeating element
- Given N elements, find the first non-repeating element.
- Examples:
    - Input 1:
        - N = 6
        - [1,2,3,1,2,5]
    - Output1 :
        - ans = 3

    - Input 2:
        - N = 8
        - [4,3,3,2,5,6,4,5]
    - Output 2:
        - ans = 2

    - Input 3:
        - N = 7
        - [2,6,8,4,7,2,9]
    - Output 3:
        - ans = 6
## Bruteforce Approach:
- Create a new array(detect) of size same as input array which stores whether the element at the particular position is visited and has duplicate.
- For each element in the input array:
    - If the respective index in detect array is marked then continue with the next array input.
    - If not marked:
        - For each element from the next index check if it matches with the current index element:
            - If it matches then mark the current and next index position in the detect array.
            - If not continue with the next element in the array.
- Loop through the detect array and select the first index that is not marked and return the respective index element from the input array. 
- Complexities:
    - TC: O(N^2)
    - SC: O(N)
- Code:
```js
    const firstNonRepeatingElement = (arr) => {
        const N = arr.length;
        const detectArray = Array(N).fill(0);
        for(let i=0; i<N; i++){
            if(!detectArray[i]){
                for(let j=i+1; j<N; j++){
                    if(arr[i]===arr[j]){
                        detectArray[i] = 1;
                        detectArray[j] = 1;
                    }
                }
            }
        }
        for(let i=0; i<N; i++){
            if(!detectArray[i]){
                return arr[i];
            }
        }
        return -1;
    };
```

## Optimized Approach:
- Create a map FrequencyMap<int,int> which represents as Map<element, element Count>
- For each occurance of the input array element: -> O(N)
    - Check if the element already exists in the FrequencyMap:
        - If yes then increment the count of that element in the FrequencyMap.
        - If no then set the count of that element in the FrequencyMap as 1.
- For each occurance of the input array element:
    - Get the count of the query element from the FrequencyMap: -> O(N)
        - If the count === 1 then return that element.
        - If count !== 1 then continue
- Complexities:
    - TC: O(N)
    - SC: O(N)
- Code:
```js
    const firstNonRepeatingElement = (arr) => {
        const N = arr.length;
        const freqMap = new Map();
        for(let i=0; i<N; i++){
            if(freqMap.has(arr[i])){
                freqMap.set(arr[i],freqMap.get(arr[i])+1);
            }
            else{
                freqMap.set(arr[i],1);
            }
        }
        for(let i=0; i<N; i++){
            if(freqMap.get(arr[i]) === 1){
                return arr[i];
            }
        }
        return -1;
    };
```