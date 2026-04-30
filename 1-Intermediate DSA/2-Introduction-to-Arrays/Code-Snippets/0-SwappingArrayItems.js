export const swapArrayItems = (arr, i, j) => {
    // ==== Simple Approach ==== //
    // arr[i] = arr[i] + arr[j];
    // arr[j] = arr[i] - arr[j];
    // arr[i] = arr[i] - arr[j];

    // ==== JS Approach ==== //
    [arr[i], arr[j]] = [arr[j], arr[i]];
};

/* ================ 
Solution Observations:
    Time Complexity : O(1)
    SC : O(1)
================= */