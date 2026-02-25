/* ================ 
Given an array A of N integers. Construct prefix sum of the array.
Formula: prefSum[i] = prefSum[i - 1] + A[i] ; 1<i<N-1

    Constraints : 
        1 <= N <= 10^5
        1 <= A[i] <= 10^3
    Input param A : integer[]
    return : integer[] - prefix sum array.
    Example:
        Input:
            A = [1, 2, 3, 4, 5]
        Output:
            The prefix sum array of [1, 2, 3, 4, 5] is [1, 3, 6, 10, 15].
================= */

export const prefixSumArray = (arr) => {
    const pfArr = [];
    pfArr.push(arr[0]);
    for(let i=1; i<arr.length; i++){
        pfArr.push(pfArr[i-1]+arr[i]);
    }
    return pfArr;
}

export const prefixSumArrayEvenIndex = (arr) => {
    const pfArr = [];
    pfArr.push(arr[0]);
    for(let i=1;i<arr.length; i++){
        if(i%2 === 0){
            pfArr.push(pfArr[i-1]+arr[i]);
        }
        else {
            pfArr.push(pfArr[i-1]);
        }
    }
    return pfArr;
}
export const prefixSumArrayOddIndex = (arr) => {
    const pfArr = [];
    pfArr.push(0);
    for(let i=1;i<arr.length; i++){
        if(i%2 !== 0){
            pfArr.push(pfArr[i-1]+arr[i]);
        }
        else {
            pfArr.push(pfArr[i-1]);
        }
    }
    return pfArr;
}

/* ================ 
Solution Observations:
    TC : O(N) 
    SC : O(N)
================= */