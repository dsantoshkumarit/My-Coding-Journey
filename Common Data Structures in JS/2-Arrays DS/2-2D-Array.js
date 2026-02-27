/*
Given a matrix of integers A of size N x M and an integer B.
In the given matrix every row and column is sorted in non-decreasing order. Find and return the position of B in the matrix in the given form:
If A[i][j] = B then return true
If B is not present return -1.
constraints:
1 <= N, M <= 1000
-100000 <= A[i] <= 100000
-100000 <= B <= 100000
*/

    //param A : array of array of integers
    //param B : integer
    //return an integer
    const findInSortedMatrix = (A, B) => {
        //Bruteforce - TC:O(N^2), SC:O(1)
        // const N = A.length;
        // const M = A[0].length;
        // for(let i=0; i<N; i++){
        //     for(let j=0; j<M; j++){
        //         if(A[i][j] === B){
        //             return 1009*(i+1)+j+1;
        //         }
        //     }
        // }
        // return -1;

        //Optimized approach - TC:O(N+M), SC:O(1)
        const N = A.length;
        const M = A[0].length;
        let finalI = N, finalJ = M;
        let i=0, j=M-1;
        while(i < N && j >= 0){
            if(A[i][j] === B){
                if(i<=finalI && j<=finalJ){
                    finalI = i;
                    finalJ = j;
                }
                j--;
            }
            else if(A[i][j] > B){
                j--;
            }
            else{
                i++;
            }
        }
        if(finalI !== N){
            return (finalI+1) * 1009 + (finalJ + 1);
        }
        return -1;
    }


/*
Print spiral elements of a N*N matrix.
Eg:
    =>input : 
    A=[ 
        [1,   2,  3,  4, 5], 
        [16, 17, 18, 19, 6], 
        [15, 24, 25, 20, 7], 
        [14, 23, 22, 21, 8], 
        [13, 12, 11, 10, 9] 
    ]
    => output :
        1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25
*/

// TC : O(N*N), SC:O(1)
const printSpiralElements = (A) =>{
    let N = A.length;
    let rowStart = 0, columnStart = 0;
    while(N>1){
        let subMatrixRows = N, subMatrixColumns = N;
        let rowIdx = rowStart, colIdx = columnStart;
        for(let k = 1; k <= subMatrixColumns-1; k++){ //L->R
            print(A[rowIdx][colIdx++]);
        }
        for(let k = 1; k <= subMatrixRows-1; k++){ //T->B
            print(A[rowIdx++][colIdx]);
        }
        for(let k = 1; k <= subMatrixColumns-1; k++){ //R->L
            print(A[rowIdx][colIdx--]);
        }
        for(let k = 1; k <= subMatrixRows-1; k++){ //B->T
            print(A[rowIdx--][colIdx]);
        }
        rowStart++;
        columnStart++;
        N -= 2; //Next sub-matrix row elements length
    }
    if(N === 1){
        print(A[rowStart][columnStart]);
    }
};

/*
Find sum of all sub-matrices elements.
eg:
    A = [
            [1,2],
            [3,4]
        ]
    Output : 
    All sub matrices -  [1],[1,2],[1,3],[[1,2],[3,4]],
                        [2],[2,4],
                        [3],[3,4],
                        [4]
    Sum of all sub-matrices = 1+(1+2)+(1+3)+(1+2+3+4)+(2)+(2+4)+(3)+(3+4)+(4)
                            = 40
*/
/*
    Idea: Contribution technique:
            - No. of sub-matrices in which element A[i][j] has appeared  = (i-0+1)*(j-0+1)*(N-1-i+1)*(M-1-j+1)
            - Contribution of A[i][j] in the total sum = ((i-0+1)*(j-0+1)*(N-1-i+1)*(M-1-j+1))*A[i][j]
            - Total sum = Find the contribution for each A[i][j] for i=0 to N-1 and j=0 to M-1
*/
// TC : O(N*N), SC:O(1)
const allSubMatricesSum = (A)=>{
    const N = A.length, M = A[0].length;
    let sum = 0;
    for(let i=0; i<N;i++){
        for(let j=0; j<M; j++){
            sum += (i+1)*(j+1)*(N-i)*(M-i)*A[i][j];
        }
    }
    return sum;
};
