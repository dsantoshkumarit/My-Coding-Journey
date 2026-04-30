# Question: Problem 1 Frequency of given elements
- Given N elements and Q queries, find the frequency of the elements provided in a query.
- Example
    - N = 10
    - Input Array: [2,3,8,2,8,2,3,8,10,6]
    - Q = 4
    - Query Array:[2,8,3,5]
    - Solution:
```    
     Element 	Frequency
        2 	        3
        8 	        3
        3 	        2
        5 	        0
```
## Bruteforce Approach:
- For each query array element: - O(Q)
    - Find the count of its occurances - O(N)
- Complexities:
    - TC: O(Q*N)
    - SC: O(Q)
- Code:
```js
    const queryElementsFrequencies = (arr,Q) => {
        const N = arr.length;
        const qLen = Q.length;
        const ansArray = [];
        for(let i=0; i<qLen; i++){
            let elemCount = 0;
            for(let j=0; j<N; j++){
                if(arr[j] === Q[i]){
                    elemCount++;
                }
            }
            ansArray.push(elemCount);
        }
        return ansArray;
    };
```
## Optimized Approach:
- Create a map FrequencyMap<int,int> which represents as Map<element, element Count>
- For each occurance of the input array element: -> O(N)
    - Check if the element already exists in the FrequencyMap:
        - If yes then increment the count of that element in the FrequencyMap.
        - If no then set the count of that element in the FrequencyMap as 1.
- For each occurance of the query array element:
    - Get the count of the query element from the FrequencyMap and Store the count in the answer array.
- Return the answer array.
- Complexities:
    - TC: O(Len(Q)+N)
    - SC: O(Max(N,Len(Q)))
- Code:
```js
    const queryElementsFrequency = (arr,Q) => {
        const freqMap = new Map();
        const ansArray = [];
        for(let i=0; i<arr.length;i++){
            if(freqMap.has(arr[i])){
                freqMap.set(arr[i],freqMap.get(arr[i]+1));
            }
            else{
                freqMap.set(arr[i],1);
            }
        }
        for(let j=0; j<Q.length;j++){
            ansArray.push(freqMap.get(Q[i]));
        }
        return ansArray;
    };
```