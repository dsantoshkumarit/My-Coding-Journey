import { reverseSubArray } from "../1-Introduction-to-Arrays/Code-Snippets/1-ReversingArray";
import { TransPose2DArray } from "./3-TransposeOf2DArray";


/*
    Given a matrix mat[N][N] rotate it to 90 Degrees clockwise from top-right.
*/


/*
    Brute Force:
    1. Create a new empty 2D array of size N*N.
    2. For each row from 0 to N-1
        - Place the row elements from input matrix into the new matrix on N-1-i column.
    3. Return the new matrix.

    TC: O(N^2)
    SC: O(N*2)
*/

/* ============== SC:O(1) -> Inplace approach 
    Rotate matrix 'A' 90 degrees in clockwise = Transpose(A) then Reverse each row elements

    TC: O(N*N)
    SC: O(1)
*/
export const Rotate2DSquareArray = (mat) => {
    const N = mat.length;
    TransPose2DArray(mat);
    for(let i=0; i<N; i++){
        reverseSubArray(mat[i],0,N-1);
    }
    return mat;
};

