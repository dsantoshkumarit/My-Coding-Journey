/*
    -> Square Matrices have equal rows and columns.
    -> Let A = [
                [1,2,3],
                [4,5,6],
                [7,8,9]
            ];
    -> Square Matrices have 2 diagonals:
        => D1 : [0][0]-> 1, [1][1]->5, [2][2]->9 => i and j increases by 1.
        => D2 : [0][2]-> 3, [1][1]->5, [2][0]->7 => i increases by 1 and j decreases by 1.
*/

const printRowWiseSum = (mat) => {
    const R = mat.length;
    const C = mat[0].length; 
    for(let i=0; i<R; i++){
        let sum = 0;
        for(let j=0; j<C;j++){
            sum += mat[i][j];
        }
        console.log(`Row-${i} sum:`,sum);
    }
};
/* 
    TC:O(M*N)
    SC:O(1)
*/

const printColumnWiseSum = (mat) => {
    const R = mat.length;
    const C = mat[0].length; 
    for(let j=0; j<C; j++){
        let sum = 0;
        for(let i=0; i<R;i++){
            sum += mat[i][j];
        }
        console.log(`Column-${j} sum:`,sum);
    }
};
/* 
    TC:O(M*N)
    SC:O(1)
*/

