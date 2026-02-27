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
/* 
    ===================== BruteForce : 
    const closestMinMax = (A) => {
        const N = A.length;
        let ans = N;
        const [min, max] = findMinMax(A);
        for(let i=0; i<N; i++){
            for(let j=i; j<N; j++){
                for(let k=i; k<=j; k++){
                    let mi = false;
                    let ma = false;
                    if(A[k] === min){
                        mi = true;
                    }
                    if(A[k] === max){
                        ma = true;
                    }
                    if(mi && ma){
                        if(ans > j - i + 1){
                            ans = j - i + 1;
                        }
                    }
                }
            }
        }
    };
    =========== Observations:
    TC : O(N^3)
    SC : (1)
*/

/* 
    ===================== Optimized : 
    const closestMinMax = (A) => {
        const N = A.length;
        let ans = N;
        const [min, max] = findMinMax(A);
        for(let i=0; i<N; i++){
            let mi = false;
            let ma = false;
            for(let j=i; j<N; j++){
                if(A[j] === min){
                    mi = true;
                }
                if(A[j] === max){
                    ma = true;
                }
                if(mi && ma){
                    if(ans > j - i + 1){
                        ans = j - i + 1;
                    }
                }
            }
        }
    };
    =========== Observations:
    TC : O(N^2)
    SC : (1)
*/

/*=========== More Optimized */

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

/*===========
    Thinking 
    Possible ans : 
        1. ...min...max... : For each min you encounter from left to right find the closest max
        2. ...max...min... : For each max you encounter from left to right find the closest min
*/
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