import { swapArrayItems } from "../1-Introduction-to-Arrays/Code-Snippets/0-SwappingArrayItems";
/*
    let A = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
    => Transpose(A) = [
            [1,4,7],
            [2,5,8],
            [3,6,9]
    ]
 */


/* Transpose - For square matrices*/
export const TransPose2DArray = (mat) => {
    const M = mat.length;
    const N = mat[0].length;
    for(let i=0; i<M; i++){
        for(let j=i+1; j<N; j++){
            [mat[i][j],mat[j][i]] = [mat[j][i],mat[i][j]];
        }
    }
    return mat;
};

/*
- 'j' should start from 'i+1' as if we traverse all the elements the 2D matrix will be reverted back to its original and not the transpose.
- This makes sure that only top-right half of the matrix is used in swap.
    TC:O(M*N)
    SC:O(1)
*/