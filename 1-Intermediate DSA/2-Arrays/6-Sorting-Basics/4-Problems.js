/*  1. Elements Removal:
    Problem Description:
    - Given an integer array A of size N. You can remove any element from the array in one operation.
    - The cost of this operation is the sum of all elements in the array present before this operation.
    - Find the minimum cost to remove all elements from the array.

    Problem Constraints:
    0 <= N <= 1000
    1 <= A[i] <= 10^3

    Input Format:
    First and only argument is an integer array A.

    Output Format:
    Return an integer denoting the total cost of removing all elements from the array.

    Example Input:
    Input 1:
    A = [2, 1]
    Input 2:
    A = [5]

    Example Output:
    Output 1:
    4
    Output 2:
    5

    Example Explanation
    Explanation 1:
    Given array A = [2, 1]
    - Remove 2 from the array => [1]. Cost of this operation is (2 + 1) = 3.
    - Remove 1 from the array => []. Cost of this operation is (1) = 1.
    - So, total cost is = 3 + 1 = 4.

    Explanation 2:
    There is only one element in the array. So, cost of removing is 5.

    ========= Bruteforce Approach:
    1. Generate all possible sequences in which the elements can be removed.
    2. For each sequence, simulate the removal process step-by-step:
        - Find the current sum of the array.
        - Add it to the running cost.
        - Remove the element specified by the sequence.
    3. Keep track of the minimum cost across all sequences.
    TC:O(N!*N) - There are N!(factorial) ways to arrange the removals, and for each step, we calculate the sum (O(N)).
*/

/* ============ Optimal Approach:
    - Deleting higher value elements to lower value elements will give us the minimum sum as at each step the higher value element won't be contributing once removed first.
    let A[4] = [a,b,c,d]; // after sorting done in decreasing order.
    removing a : a+b+c+d
    removing b : b+c+d
    removing c : c+d
    removing d : d
    Total cost = a + 2b + 3c + 4d = a(0+1) + b(1+1) + c(2+1) + d(3+1)
                = A[i]*(i+1) where i=0 to N-1
*/

const calculateMinTotalCost = (A,N) => {
    //sort A in decresing order:
    A.sort((a,b)=> b-a);
    let totalSum = 0;
    for(let i=0; i<N; i++){
        totalSum += A[i]*(i+1);
    }
    return totalSum;
};