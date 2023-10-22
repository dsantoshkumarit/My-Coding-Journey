/* ================ Best Time to Buy and Sell Stocks I 
Say you have an array, A, for which the ith element is the price of a given stock on day i.
If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Return the maximum possible profit.

    Constraints : 
        0 <= A.size() <= 700000
        1 <= A[i] <= 10^7
    Input param A : integer[N]
    return : integer - Return an integer, representing the maximum possible profit.
    Example:
        Input:
            A = [1, 4, 5, 2, 4]
        Output:
            4 - Buy the stock on day 0, and sell it on day 2.
================= */

export const bestTimeToBuySellStock = (A) => {
    const n = A.length;
    let maxValTillNow = A[n-1], maxP = 0;
    for(let i=n-2; i>=0; i--){
        maxValTillNow = Math.max(maxValTillNow, A[i]);
        maxP = Math.max(maxP, maxValTillNow - A[i]);
    }
    return maxP;
}

/* ================ 
Solution Observations:
    TC : O(N) 
    SC : O(1)
================= */