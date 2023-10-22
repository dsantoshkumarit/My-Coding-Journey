/* ================ Closest MinMax
Given an array A, find the size of the smallest subarray such that it contains at least one occurrence of the maximum value of the array and at least one occurrence of the minimum value of the array.

    Constraints : 
        1 <= |A| <= 2000
    Input param A : integer[N]
    return : integer - Return the length of the smallest subarray which has at least one occurrence of minimum and maximum element of the array
    Example:
        Input:
            A = [2, 6, 1, 6, 9]
        Output:
            3 - Take the last 3 elements of the array.
================= */

const findMinMax = (arr) => {
    let min = arr[0], max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
        else if(arr[i] > max){
            max = arr[i];
        }
    }
    return [min, max];
}

export const closestMinMax = (A) => {
    const [min, max] = findMinMax(A);
    let min_idx = -1, max_idx = -1;
    let n = A.length;
    let minSubArrLen = n;
    for(let i=n-1; i>=0; i--){
        if(A[i] === min){
            min_idx = i;
            if(max_idx !== -1){
                let len = max_idx - min_idx + 1;
                if(len < minSubArrLen){
                    minSubArrLen = len;
                }
            }
        }
        if(A[i] === max){
            max_idx = i;
            if(min_idx !== -1){
                let len = min_idx - max_idx + 1;
                if(len < minSubArrLen){
                    minSubArrLen = len;
                }
            }
        }
    }
    return minSubArrLen;
}

/* ================ 
Solution Observations:
    TC : O(N) 
    SC : O(1)
================= */